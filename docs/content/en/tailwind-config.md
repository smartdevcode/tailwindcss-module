---
title: Tailwind Config
description: 'You can configure the integration easily with the storybook property.'
position: 3
category: Guide
---

`@nuxtjs/tailwindcss` configure the Tailwind configuration to have the best user experience as possible by default.

## Default Configuration

```js
{
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
```

> The file is [available on GitHub](https://github.com/nuxt-community/tailwindcss-module/blob/master/lib/files/tailwind.config.js)

You can learn more about the [Tailwind configuration](https://tailwindcss.com/docs/configuration) and the [purge option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) on Tailwind docs.

## Overwriting the configuration

You can extend the default configuration:
- with a [tailwind.config.js](#tailwindconfigjs) file
- using the [config option](#config-option)
- with the `tailwindcss:config` Nuxt hook

<alert>

The `tailwind.config.js` and `config` options are subject to the [merging strategy](#merging-strategy).

</alert>

### `tailwind.config.js`

If a `tailwind.config.js` file is present, it will be imported and used to overwrite the default configuration.

You can configure the path with the [configPath option](/options#configpath).

<alert type="info">

This config has the highest priority to overwrite the defaults and [tailwindcss.config](#config-option)

</alert>

```js{}[tailwind.config.js]
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    }
  }
}
```

Learn more about the [Tailwind config](https://tailwindcss.com/docs/configuration) on their docs.
 
### `config` option

You can also use your `nuxt.config.js` to set your Tailwind Config with the `tailwindcss.config` property:

```js{}[nuxt.config.js]
import tailwindTypography from '@tailwindcss/typography'

export default {
  // ...
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
}
```
<alert type="info">

This config has less priority over the [tailwind.config.js](#tailwindconfigjs) file.

</alert>


### `tailwindcss:config` hook

<alert>

This is advanced usage and mostly used for Nuxt modules authors.

</alert>

You can use a [Nuxt hook](https://nuxtjs.org/guides/directory-structure/modules#run-tasks-on-specific-hooks) to extend the Tailwind configuration:

```js
// ~/modules/nuxt-tailwind-typo/index.js
import tailwindTypography from '@tailwindcss/typography'

export default function () {
  this.nuxt.hook('tailwindcss:config', function (tailwindConfig) {
    tailwindConfig.plugins.push(tailwindTypography)
  })
}
```

<alert type="info">

This hook can be asynchronous (using `async/await`) and is called after merging the configurations and right before calling the PostCSS Tailwind plugin.

</alert>

### Merging strategy

The provided config will be merged using [defu's array function merger](https://github.com/nuxt-contrib/defu#array-function-merger).

When giving an array to the `purge.content`, it will concat with the default value.

**Example**

```js{}[tailwind.config.js]
module.exports = {
  purge: {
    content: [
      'content/**/*.md'
    ]
  }
}
```

The `purge.content` option will be:

```js
[
  'components/**/*.vue',
  'layouts/**/*.vue',
  'pages/**/*.vue',
  'plugins/**/*.js',
  'nuxt.config.js',
  'content/**/*.md'
]
```

If you want to fully overwrite, you can use a `function` that receives the default value:

```js{}[tailwind.config.js]
module.exports = {
  purge: {
    content (contentDefaults) {
      return contentDefaults.map(file => file.replace('.js', '.ts'))
    }
  }
}
```

The `purge.content` option will be:

```js
[
  'components/**/*.vue',
  'layouts/**/*.vue',
  'pages/**/*.vue',
  'plugins/**/*.ts',
  'nuxt.config.ts'
]
```

<alert type="info">

This merging strategy of with a function only applies to `plugins` and `purge.content` since the default value is defined as an `Array`

</alert>

## Referencing in the application

It can often be useful to reference tailwind configuration values in runtime. For example to access some of your theme values when dynamically applying inline styles in a component.

If you need resolved Tailwind config at runtime, you can enable the [exposeConfig](/options#exposeconfig) option:

```js{}[nuxt.config.js]
export default {
  tailwindcss: {
    exposeConfig: true
  }
}
```

Then import where needed from `~tailwind.config`:

```js
// Import fully resolved config
import tailwindConfig from '~tailwind.config'

// Import only part which is required to allow tree-shaking
import { theme } from '~tailwind.config'
```

<alert>

  Please be aware this adds `~19.5KB` (`~3.5KB`) to the client bundle size.

</alert>
