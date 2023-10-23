// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
// import Blog2Theme from "vitepress-blog2/theme";
import Blog2Theme from "../../../theme/index.ts";

const MyTheme = Blog2Theme(DefaultTheme);
export default {
  extends: MyTheme,
} satisfies Theme;
