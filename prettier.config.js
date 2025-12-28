import baseConfig from './.prettierrc.json' with { type: 'json' }

/** @type {import("prettier").Config} */
export default {
  ...baseConfig,
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')]
}
