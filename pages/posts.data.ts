import { createContentLoader } from 'vitepress'

export default createContentLoader(VITEPRESS_BLOG.postsPattern, {
  excerpt: true,
})