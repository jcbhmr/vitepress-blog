import { defineConfig } from 'vitepress'
import blog from "vitepress-plugin-blog"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  vite: {
    clearScreen: false,
    plugins: [blog()]
  }
})
