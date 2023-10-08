# `@nokken65/prettier-config`

> Here is my personal [Prettier](https://prettier.io) config.

## Install

```sh
npm install @nokken65/prettier-config -D
```

```sh
yarn add @nokken65/prettier-config -D
```

```sh
pnpm add @nokken65/prettier-config -D
```

## Usage

```js
// .prettierrc.cjs
module.exports = require('@nokken65/prettier-config')
```

### Copy the ignore file to your project folder

If you want to extend the ignore file, copy `node_modules/@nokken65/prettier-config/.prettierignore` to the root of your project folder:

### Scripts

Some commonly used scripts in `package.json`.

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json}\""
  }
}
```
