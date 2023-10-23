import { DefaultTheme, defineConfigWithTheme } from "vitepress";
// import blog2 from "vitepress-blog2";
// import type { Blog2Theme } from "vitepress-blog2";
import blog2 from "../../index.js"
import type { Blog2Theme } from "../../index.d.ts"

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<DefaultTheme.Config & Blog2Theme.Config>({
  extends: blog2(),
});
