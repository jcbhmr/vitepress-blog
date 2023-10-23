import callsites from "callsites";
import assert from "node:assert/strict";
import { isAbsolute } from "node:path";
import { pathToFileURL } from "node:url";
/**
 * @typedef {object} BlogOptions
 * @property {string} prop1
 * @property {number} prop2
 * @property {number} [prop3]
 */
/**
 * @param {BlogOptions}
 * @returns {import('vite').PluginOption}
 */
export default async function blog() {
  const configURL = callsites()
    .map((x) => x.getFileName())
    .filter(x => x)
    .flatMap((x) => URL.canParse(x) ? x : isAbsolute(x) ? pathToFileURL(x).href : [])
    .map(x => (console.debug(x), x))
    .find((x) => /\/config\.(?:js|mjs|ts|mts)(?:\.timestamp-[\w\-_]+.m?js)?$/.test(x));
  assert(configURL, "no config.(js|mjs|ts|mts) detectable")
  const { default: userConfig } = await import(configURL);
  console.log(userConfig)
  return {
    name: "vitepress-plugin-blog",
    enforce: "pre",
    config(config) {
      console.log(config);
    },
  };
}
