// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import VPB2Home from "./components/VPB2Home.vue"
// import './style.css'

export default function Blog2Theme(ParentTheme: Theme) {
  return {
    extends: ParentTheme,
    Layout: (props, { slots }) => {
      return h(ParentTheme.Layout!, props, {
        // https://vitepress.dev/guide/extending-default-theme#layout-slots
        ...slots,
      });
    },
    enhanceApp({ app, router, siteData }) {
      // ...
      app.component("vpb2-home", VPB2Home)
    },
  } satisfies Theme;
}
