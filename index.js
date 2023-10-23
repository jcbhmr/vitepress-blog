import getCallerFile from "get-caller-file"
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
export default function blog() {
    return {
        then() {
            console.log(new Error().stack)
        }
    }
}