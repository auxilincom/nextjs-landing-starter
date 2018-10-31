# ✨ Next.JS Landing Starter ✨

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://ci.auxilin.com/api/badges/auxilincom/nextjs-landing-starter/status.svg)](https://ci.auxilin.com/auxilincom/nextjs-landing-starter)
[![David Dependancy Status](https://david-dm.org/auxilincom/nextjs-landing-starter.svg)](https://david-dm.org/auxilincom/nextjs-landing-starter)

[![Watch on GitHub](https://img.shields.io/github/watchers/auxilincom/nextjs-landing-starter.svg?style=social&label=Watch)](https://github.com/auxilincom/nextjs-landing-starter/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/auxilincom/nextjs-landing-starter.svg?style=social&label=Stars)](https://github.com/auxilincom/nextjs-landing-starter/stargazers)
[![Follow](https://img.shields.io/twitter/follow/auxilin.svg?style=social&label=Follow)](https://twitter.com/auxilin)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/auxilincom/nextjs-landing-starter.svg?style=social)](https://twitter.com/intent/tweet?text=I%27m%20using%20Auxilin%20components%20to%20build%20my%20next%20product%20🚀.%20Check%20it%20out:%20https://github.com/auxilincom/nextjs-landing-starter)

Next.JS Landing Starter — is a [Next.JS](https://github.com/zeit/next.js) starter kit, which allow you start development of new landing site in matter of minutes. This repository is one of the compontents of Auxilin repositories — a set of components for makers to ship better products faster 🚀. These repositories consist of a number of open-source components, resulted from years of hard work on a number of awesome products. We carefully select, document and share our production-ready knowledge with you.

## Features

* 😍 **Nice-looking** common basic templates for the main, login and signup pages with bindings to API. Styles are based on [PostCSS](https://github.com/postcss/postcss) with [cssnext](https://github.com/MoOx/postcss-cssnext) + [LostGrid](https://github.com/peterramsing/lost) via [css modules](https://github.com/zeit/next-plugins/tree/master/packages/next-css).
* 🔥 **Hot reloading** with webpack
* ⚡️ **Server side rendering**
* 👮 **Secure** — separate client and server configuration to protect secure server-only items

## Getting Started

Just fork or clone and push repository into your own repo. Rename [AUXILIN_README.md](AUXILIN_README.md) into README.md. To keep your repository clean remove `CHANGELOG.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE` and `.drone.yml`.

You can read develoment details [here](AUXILIN_README.md) — that will become a primary readme of your landing site.

## Start

In order to start nextjs server in the docker container you can use bash file `./bin/start.sh`:
```bash
$ ./bin/start.sh
```

Also, you need REST api server on several pages (sigun, signin). If you are using `auxilincom/koa-api-starter` then you can start this server using the corresponding command. Or you can start any other REST api server on port `3001`.

## Demo

Demo is available as part of [AUXILIN](https://github.com/auxilincom/auxilin) [here](https://demo.auxilincom.com/).

## Why Next.JS?

#### **Server-side rendering (SSR) a.k.a. [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) app**
SSR is the requirement for the modern landing websites which allows the indexing of single-page applications for search engines such as google. Which means you can continue to have fun with your [favorite UI library](https://github.com/facebook/react) while having your awesome stuff seen in the web for everyone.

#### **Bundled react.js + webpack**.
Even though landing websites are often considered to consist of mostly static pages which do not require a tone of javascript code, we believe that having the same library across all your ecosystem leads to *predictable*, *clean*, *reusable* and *extendable* code.
<br />Because the basic handling of the form input with raw JS code is not a very pleasant thing, don't you remember?

#### **Prepared app structure with clearly defined conventions**
Next.js is built to simplify the life of developers and remove boilerplate code while giving the power of the latest technologies so it fully correlates with our goals.

#### Community driven and widely popular framework
Next.js is the most popular SSR framework for react with constant updates and improvements and big number of contributors. Two heads are better than one, 20k is even better.

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the Github [Releases](https://github.com/auxilincom/nextjs-landing-starter/releases) page.

## License

Next.JS Landing Starter is released under the [MIT License](LICENSE).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/6461311?v=4" width="100px;"/><br /><sub><b>Evgeny Zhivitsa</b></sub>](https://github.com/ezhivitsa)<br />[💻](https://github.com/auxilin/nextjs-landing-starter/commits?author=ezhivitsa "Code") [📖](https://github.com/auxilin/nextjs-landing-starter/commits?author=ezhivitsa "Documentation") [🎨](#design-ezhivitsa "Design") [👀](#review-ezhivitsa "Reviewed Pull Requests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
