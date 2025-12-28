const baseConfig = require('./.prettierrc.json')

/** @type {import("prettier").Config} */
module.exports = {
  ...baseConfig,
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')]
}
