// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import VPB2Home from "./components/VPB2Home.vue"
// import './style.css'

export default function Blog2Theme(ParentTheme: Theme) {
  return {
    extends: ParentTheme,
    Layout: () => {
      return h(ParentTheme.Layout!, null, {
        // https://vitepress.dev/guide/extending-default-theme#layout-slots
      });
    },
    enhanceApp({ app, router, siteData }) {
      // ...
      app.component("vpb2-home", VPB2Home)
      console.debug(VPB2Home, "registered")
    },
  } satisfies Theme;
}
