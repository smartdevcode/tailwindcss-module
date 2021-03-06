[![@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/preview.png)](https://tailwindcss.nuxtjs.org)

# @nuxtjs/tailwindcss

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Tailwind CSS](https://tailwindcss.com) module for [NuxtJS](https://nuxtjs.org) with [modern css](https://tailwindcss.com/docs/using-with-preprocessors#future-css-features) âĄī¸

- [â¨ &nbsp;Release Notes](https://tailwindcss.nuxtjs.org/releases)
- [đ &nbsp;Documentation](https://tailwindcss.nuxtjs.org)

## Features

- đ&nbsp; Zero configuration to start *([see video](https://tailwindcss.nuxtjs.org/#quick-start))*
- đ&nbsp; PurgeCSS included for minimal CSS âĄī¸
- âĄī¸&nbsp; Supports [Tailwind Just-In-Time](https://github.com/tailwindlabs/tailwindcss-jit)
- đĒ&nbsp; Includes [CSS Nesting](https://drafts.csswg.org/css-nesting-1/) with [postcss-nesting](https://github.com/csstools/postcss-nesting)
- đ¨&nbsp; Discover your Tailwind Colors *([see video](https://tailwindcss.nuxtjs.org/#tailwind-colors))*
- âī¸&nbsp; Reference your Tailwind config in your app
- đĻ&nbsp; Extendable by [Nuxt modules](https://modules.nuxtjs.org/)

[đ &nbsp;Read more](https://tailwindcss.nuxtjs.org)

## Quick Setup

1. Add `@nuxtjs/tailwindcss` dependency to your project

```bash
# Using npm
npm install --save-dev @nuxtjs/tailwindcss
# Using yarn
yarn add --dev @nuxtjs/tailwindcss
```

2. Add `@nuxtjs/tailwindcss` to the `buildModules` section of `nuxt.config.js`

```js
{
  buildModules: [
    '@nuxtjs/tailwindcss'
  ]
}
```

âšī¸ If you are using `nuxt < 2.9.0`, use `modules` property instead.

That's it! You can now use Tailwind classes in your Nuxt app â¨

[đ &nbsp;Read more](https://tailwindcss.nuxtjs.org/setup)

## Contributing

You can contribute to this module online with CodeSandBox:

[![Edit @nuxtjs/tailwindcss](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/nuxt-community/tailwindcss-module/tree/main/?fontsize=14&hidenavigation=1&theme=dark)

Or locally:

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt.js Team

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/tailwindcss/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/tailwindcss

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/tailwindcss.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/tailwindcss

[github-actions-ci-src]: https://github.com/nuxt-community/tailwindcss-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/tailwindcss-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/tailwindcss-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/tailwindcss-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/tailwindcss.svg
[license-href]: https://npmjs.com/package/@nuxtjs/tailwindcss
