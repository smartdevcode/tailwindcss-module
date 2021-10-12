const { join, resolve } = require('path')
const { ensureTemplateFile } = require('./utils')

module.exports = async function (moduleOptions) {
  const options = {
    configPath: 'tailwind.config.js',
    cssPath: join(this.options.dir.assets, 'css', 'tailwind.css'),
    purgeCSSInDev: false,
    exposeConfig: false,
    ...this.options.tailwindcss,
    ...moduleOptions
  }

  const configPath = this.nuxt.resolver.resolveAlias(options.configPath)
  const cssPath = this.nuxt.resolver.resolveAlias(options.cssPath)

  /*
  ** Generates if not exists:
  ** - tailwind.config.js
  ** - @/assets/css/tailwind.css
  */
  await ensureTemplateFile(this.options.srcDir, 'tailwind.config.js', configPath)
  const tailwindCSSExists = await ensureTemplateFile(this.options.srcDir, 'tailwind.css', cssPath)

  // Include CSS file in project css
  if (tailwindCSSExists) {
    this.options.css.unshift(cssPath)
  }

  // This hooks is called only for `nuxt dev` and `nuxt build` commands
  this.nuxt.hook('build:before', async () => {
    /*
    ** Set PostCSS config (before nuxt-purgecss)
    */
    const { postcss } = this.options.build

    postcss.preset.stage = 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-features
    postcss.plugins = postcss.plugins || {}

    if (Array.isArray(postcss.plugins)) {
      postcss.plugins.push(require('tailwindcss')(configPath))
    } else if (typeof postcss.plugins === 'object') {
      postcss.plugins.tailwindcss = postcss.plugins.tailwindcss || configPath
    }

    /*
    ** Add nuxt-purgecss module and set config
    ** only for `nuxt build` command
    */
    const purgeCSSEnabled = this.options.dev === false || options.purgeCSSInDev === true
    if (purgeCSSEnabled) {
      const purgeCSS = {
        mode: 'postcss',
        enabled: purgeCSSEnabled,
        ...(this.options.purgeCSS || {})
      }
      await this.requireModule(['nuxt-purgecss', purgeCSS])
    }

    /*
    ** Expose resolved tailwind config as an alias
    ** https://tailwindcss.com/docs/configuration/#referencing-in-javascript
    */
    if (options.exposeConfig) {
      // Resolve config
      const tailwindConfig = require(configPath)
      const resolveConfig = require('tailwindcss/resolveConfig')
      const resolvedConfig = resolveConfig(tailwindConfig)

      // Render as a json file in buildDir
      this.addTemplate({
        src: resolve(__dirname, 'templates/tailwind.config.json'),
        fileName: 'tailwind.config.json',
        options: { config: resolvedConfig }
      })

      // Alias to ~tailwind.config
      this.options.alias['~tailwind.config'] =
        resolve(this.options.buildDir, 'tailwind.config.json')

      // Force chunk creation for long term caching
      const { cacheGroups } = this.options.build.optimization.splitChunks
      cacheGroups.tailwindConfig = {
        test: /tailwind\.config/,
        chunks: 'all',
        priority: 10,
        name: true
      }
    }
  })
}

module.exports.meta = require('../package.json')
