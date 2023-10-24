import { glob } from 'glob';
import { stat } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
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

/** @param {import('node:fs').PathLike} postsDirOrDataFile */
export async function findPosts(postsDirOrDataFile) {
  let postsDir = postsDirOrDataFile instanceof URL ? fileURLToPath(postsDirOrDataFile) : postsDirOrDataFile.toString()
  if ((await stat(postsDir)).isFile()) {
    postsDir = dirname(postsDir)
  }
  glob
}