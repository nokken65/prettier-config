const baseConfig = require('./.prettierrc.json')

/** @type {import("prettier").Config} */
export default {
  ...baseConfig,
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')]
}
