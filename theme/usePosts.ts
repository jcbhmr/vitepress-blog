import { computed } from 'vue'
import { useRoute } from 'vitepress'
// @ts-ignore
import { data as posts } from '../pages/posts.data.ts'

export default function usePosts() {
  const route = useRoute()
  const path = route.path
 const f = () => posts.findIndex((p) => p.url === route.path)
  const post = computed(() => posts[f()])
  const nextPost = computed(() => posts[f() - 1])
  const prevPost = computed(() => posts[f() + 1])

  return { posts, post, nextPost, prevPost, path }
}