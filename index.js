import getUserConfig from "./lib/getUserConfig.js"
import addPages from "./lib/addPages.js";
import injectTheme from "./lib/injectTheme.js";
import.meta.resolve ??= (specifier) => {
    console.assert(/^\.?\.?\//.test(specifier), "specifier not relative")
    return new URL(specifier, import.meta.url).href
}
/**
 * @typedef {object} BlobOptions
 * @prop {string} [base]
 * @prop {string|boolean} [rss]
 */
/** @param {BlobOptions} options */
export default async function blog(options = {}) {
    const base = ((options.base ?? "blog/").replace(/\/$/, "") + "/").replace(/^\//, "")
    const rss = (options.rss ?? true) === true ? base + "feed.rss" : options.rss
    const userConfig = await getUserConfig();
    await addPages(userConfig, new URL(import.meta.resolve("./pages/")), base)
    /** @type {import('vite').PluginOption} */
    const plugin = {
        name: "vitepress-plugin-blog",
        config(config) {
            injectTheme(config, new URL(import.meta.resolve("./theme/index.js")))
        }
    }
    return plugin
}