/** @type {import("prettier").Config} */
const baseConfig = require('./.prettierrc.json')

module.exports = {
  ...baseConfig,
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
  ],
}
