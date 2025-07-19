import prettierConfig from './prettier.json'

/** @type {import('prettier').Options} */
export default (config = {}) => {
  return {
    ...prettierConfig,
    ...config,
    plugins: [require('@ianvs/prettier-plugin-sort-imports')]
  }
}
