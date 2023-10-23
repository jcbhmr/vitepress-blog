import { fileURLToPath } from 'node:url'
/**
 * @param {import('vite').UserConfig} config
 * @param {import('node:fs').PathLike} fromFile
 */
export default function injectTheme(config, fromFile) {
    const fromPath = (fromFile instanceof URL ? fileURLToPath(fromFile) : fromFile.toString())
    const alias = config.resolve.alias.filter(x => x.find instanceof RegExp).find(x => x.toString() === /^vitepress\/theme$/.toString())
    config.resolve.alias.push({
      find: "~vitepress-plugin-jsdoc/vitepress/theme",
      replacement: alias.replacement,
    })
    alias.replacement = fromPath
}