import { DefaultTheme, defineConfigWithTheme } from "vitepress";

export declare namespace Blog2Theme {
    export interface Config {
        rss?: boolean
    }
}

export default defineConfigWithTheme<Blog2Theme.Config & DefaultTheme.Config>({
    //
})