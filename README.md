# nuxt-tailwindcss

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> [TailwindCSS](https://tailwindcss.com) module for [Nuxt.js](https://nuxtjs.org) with [nuxt-purgecss](https://github.com/Developmint/nuxt-purgecss) + [modern css](https://tailwindcss.com/docs/using-with-preprocessors#future-css-features) ⚡️

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/tailwindcss` dependency with `yarn` or `npm` to your project
2. Add `@nuxtjs/tailwindcss` to the `modules` section of `nuxt.config.js`
```js
{
  modules: [
    '@nuxtjs/tailwindcss'
  ]
}
```

## Usage

This module will automatically create two files in your [srcDir](https://nuxtjs.org/api/configuration-srcdir):
- `~/tailwind.config.js`
- `~/assets/css/tailwind.css`

It will also inject the CSS file globally and configure [nuxt-purgecss](https://github.com/Developmint/nuxt-purgecss) and [postcss-preset-env](https://preset-env.cssdb.org) to [stage 1](https://preset-env.cssdb.org/features#stage-1).

## Configuration

If you want to set a different path for the configuration file or css file, you can use these given options:

```js
// nuxt.config.js
{
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.js',
    cssPath: '~/assets/main.css'
  }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt.js Team

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/tailwindcss.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/tailwindcss

[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/tailwindcss/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/tailwindcss

[circle-ci-src]: https://img.shields.io/circleci/project/github/Atinux/nuxt-tailwindcss.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/Atinux/nuxt-tailwindcss

[codecov-src]: https://img.shields.io/codecov/c/github/Atinux/nuxt-tailwindcss.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/Atinux/nuxt-tailwindcss

[david-dm-src]: https://david-dm.org/Atinux/nuxt-tailwindcss/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/Atinux/nuxt-tailwindcss

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
