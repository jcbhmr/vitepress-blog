import { type SiteConfig, createContentLoader } from 'vitepress'
import { formatDistance } from 'date-fns'
const config = VITEPRESS_CONFIG
const blogConfig = config.site.themeConfig.blog

const data = []
export { data }

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        author: frontmatter.author ?? blogConfig?.defaultAuthor ?? 'Unknown',
        url,
        excerpt,
        tags: formatTags(frontmatter.tags),
        category:
          frontmatter.category ?? blogConfig?.defaultCategory ?? 'Article',
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})

function formatDate(raw: string) {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    raw: date.toISOString().split('T')[0],
    time: +date,
    formatted: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    since: formatDistance(date, new Date(), { addSuffix: true }),
  }
}

function formatTags(raw: string | string[]) {
  if (typeof raw === 'string') {
    if (raw.includes(',')) {
      return raw.split(',').map((value) => value.trim())
    }
    return [raw]
  }
  if (Array.isArray(raw)) {
    return raw
  }
  return []
}