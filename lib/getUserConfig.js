import callsites from "callsites";
import { isAbsolute } from "node:path";
import { pathToFileURL } from "node:url";
export default async function getUserConfig() {
    const configURL = callsites()
      .map((x) => x.getFileName())
      .flatMap((x) => URL.canParse(x) ? x : isAbsolute(x) ? pathToFileURL(x).href : [])
      .find((x) => /\/config\.(?:js|mjs|ts|mts)(?:\.timestamp-[\w\-_]+.m?js)?$/.test(x));
    console.assert(configURL, "no config.(js|mjs|ts|mts) detectable")
    const { default: userConfigExport } = await import(configURL);
    console.assert(typeof userConfigExport !== "function", "userConfigExport is function")
    /** @type {import('vitepress').UserConfig} */
    const userConfig = await userConfigExport
    return userConfig
}
