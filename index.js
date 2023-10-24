import { defineConfigWithTheme } from 'vitepress';

/** @param {import('./index.d.ts').Blog2Options} options */
export default async function blog2(options = {}) {
  const rss = options.rss ?? true;

  if (rss) {
  }

  return defineConfigWithTheme({
    vite: {
        resolve: {
            preserveSymlinks: true
        }
    },

    /** @type {import('./index.d.ts').Blog2Theme.Config & import('vitepress').DefaultTheme.Config} */
    themeConfig: {},
  });
}