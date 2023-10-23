import { DefaultTheme, defineConfigWithTheme } from "vitepress";
export declare namespace Blog2Theme {
  export interface Config {}
}
export interface Blog2Options {
  rss?: boolean;
}
export default function blog2(
  options?: Blog2Options,
): ReturnType<
  typeof defineConfigWithTheme<Blog2Theme.Config & DefaultTheme.Config>
>;
