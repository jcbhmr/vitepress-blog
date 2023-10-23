import { cp } from 'node:fs/promises'
import { isAbsolute } from 'node:path'

/**
 * @param {import('vitepress').UserConfig} userConfig
 * @param {string} fromDir
 * @param {string} [base]
 */
export default async function addPages(userConfig, fromDir, base = "") {
    console.assert(isAbsolute(fromDir))
    base = base.replace(/\/$/, "") + "/"
    base = base.replace(/^\//, "")

    await cp(fromDir, )

    userConfig.rewrites ??= {}
    userConfig.rewrites[""]
}