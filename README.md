![@gun-vue logo](https://raw.githubusercontent.com/davay42/gun-vue/master/app/public/gun-vue-logo.svg)

## [gun-vue.js.org](https://gun-vue.js.org)

[![Add to Homescreen](https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?logo=skynet&labelColor=0d0d0d)](https://homescreen.hns.siasky.net/#/skylink/AQC7upIKykiM-nYJA6Ac-Q4PHRtYsHDVS1Ne-M2ELcZU2A)

Gun-vue – is where the peer-to-peer javascript database Gun meets the reactivity system of [Vue 3](https://vuejs.org). Pluggable components for UX designers. Easily importable composables for UI developers. Relay peer for p2p network enthusiasts. Demos and docs for beginners. Open source for everyone! ✊

### [@gun-vue](https://www.npmjs.com/org/gun-vue)

@gun-vue is a collection of essential building blocks to create a variety of decentralized apps for online and offline collaboration. It's a moment when we can feel the nature of distributed networking and have fun together!

[Gun](https://gun.eco) is a CRDT distributed graph database, Vue is a reactive JS UI framework, SEA is web-browser cryptography adapter and together they evolve into an ecosystem of multiple app levels.

The project is committed to give all the basic tools for everyone to participate in exploring this new universe. You can find your own way in it for yourself.

There are 3 packages in the [@gun-vue npmjs org](https://www.npmjs.com/org/gun-vue) for you to install and use:

## [@gun-vue/components](https://github.com/DeFUCC/gun-vue/tree/master/components)

<a href="https://www.npmjs.com/package/@gun-vue/components" target="_blank"><img src="https://img.shields.io/npm/v/@gun-vue/components?color=E23C92&logo=npm&style=for-the-badge" alt="NPM version"></a>

Ready to use Vue 3 components as building blocks to implement Gun powered interactivity in seconds

---

## [@gun-vue/composables](https://github.com/DeFUCC/gun-vue/tree/master/composables)

<a href="https://www.npmjs.com/package/@gun-vue/composables" target="_blank"><img src="https://img.shields.io/npm/v/@gun-vue/composables?color=E23C92&logo=npm&style=for-the-badge" alt="NPM version"></a>

Composable functions for use with Vue 3 Composition API

---

## [@gun-vue/relay](https://github.com/DeFUCC/gun-vue/tree/master/relay)

<a href="https://www.npmjs.com/package/@gun-vue/relay" target="__blank"><img src="https://img.shields.io/npm/v/@gun-vue/relay?color=E23C92&logo=npm&style=for-the-badge" alt="NPM version"></a>

A simple no-store Gun server to throw at any free tier Node.js environment.

---

## [@gun-vue/demo](https://github.com/DeFUCC/gun-vue/tree/master/demo)

The main [gun-vue.js.org](https://gun-vue.js.org) site is an example Vite SPA

---

## [@gun-vue/docs](https://github.com/DeFUCC/gun-vue/tree/master/docs)

The docs at [gun-vue.js.org/docs](https://gun-vue.js.org/docs) is an example Vitepress SSR web-site using `@gun-vue/components`

---

### [Watch a youtube video review of the build process](https://www.youtube.com/watch?v=4hpVRgVQvsY)

### [Gun-vue.js.org and v0.5.0 video presentation](https://www.youtube.com/watch?v=ALKkBhj1IIE)

### To do list

We manage tasks for the build at this [Taskade project](https://www.taskade.com/d/XtaACTKmN4KqSC1v?share=view&view=hsVKduBWoYMa9S7a).

## How to build the workspace repo yourself?

1. Clone the repo
2. Use [pnpm](https://pnpm.io/) to install all the dependencies in the workspaces

```bash
npm i -G pnpm
pnpm i
```

3. Use `demo` and `docs` scripts in the root `package.json` to run corresponding dev servers.
4. Use `npm run build` to build the whole project to the `_dist` folder.
