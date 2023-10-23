const config = VITEPRESS_CONFIG
const blogConfig = config.site.themeConfig.blog;

const data = [] 
export { data };

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        name: frontmatter.name,
        avatar: frontmatter.avatar ?? null,
        gravatar: frontmatter.gravatar ?? null,
        twitter: frontmatter.twitter ?? null,
        url,
        excerpt,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  },
});
