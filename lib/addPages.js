import { mkdir, symlink } from 'node:fs/promises'
import { basename, isAbsolute, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizePath } from 'vite'
/**
 * @param {import('vitepress').UserConfig} userConfig
 * @param {import('node:fs').PathLike} fromPath
 * @param {string} [base]
 */
export default async function addPages(userConfig, fromDir, baseRaw = "") {
    const fromPath = (fromDir instanceof URL ? fileURLToPath(fromDir) : fromDir.toString())
    console.assert(isAbsolute(fromPath))
    const base = (baseRaw.replace(/\/$/, "") + "/").replace(/^\//, "")
    // https://github.com/vuejs/vitepress/blob/a31e143afac597034a8d77f516961b0d2857ac8d/src/node/config.ts#L75
    const srcDir = normalizePath(resolve(process.cwd(), userConfig.srcDir || '.'))
    const toDir = resolve(srcDir, "out/vitepress-plugin-blog", base || ".")
    await mkdir(basename(toDir), { recursive: true })
    await symlink(toDir, fromPath)
    userConfig.vite ??= {}
    userConfig.vite.resolve ??= {}
    userConfig.vite.resolve.preserveSymlinks ??= true
    console.assert(userConfig.vite.resolve.preserveSymlinks, "resolveSymlinks is false")
    userConfig.rewrites ??= {}
    userConfig.rewrites["out/vitepress-plugin-blog/:path"] ??= ":path"
}