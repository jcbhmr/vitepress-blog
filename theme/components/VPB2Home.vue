<script setup lang="ts">
import { useData } from 'vitepress'
import VPBHomePost from './VPBHomePost.vue'
import usePosts from '../composables/usePosts.ts'
const { theme,page } = useData()
const {posts} = usePosts()
</script>
<template>
  <div class="mx-auto max-w-screen-xl lg:px-6 lg:py-16">
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h2
        class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"
      >
        {{ theme.blog2?.title }}
      </h2>
      <p
        class="font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl"
      >
        {{ theme.blog2?.description }}
      </p>
    </div>
    <div class="grid gap-6 p-2 lg:grid-cols-2">
      <div v-for="post of posts" :key="post.url">
        <VPBHomePost :post="post" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.mx-auto{
  margin-left: auto;
  margin-right: auto
}

.mb-4{
  margin-bottom: 1rem
}

.mb-8{
  margin-bottom: 2rem
}

.grid{
  display: grid
}

.max-w-screen-sm{
  max-width: 640px
}

.max-w-screen-xl{
  max-width: 1280px
}

.gap-6{
  gap: 1.5rem
}

.p-2{
  padding: 0.5rem
}

.text-center{
  text-align: center
}

.text-3xl{
  font-size: 1.875rem;
  line-height: 2.25rem
}

.font-extrabold{
  font-weight: 800
}

.font-light{
  font-weight: 300
}

.tracking-tight{
  letter-spacing: -0.025em
}

.text-\[color\:var\(--vp-c-brand-light\)\]{
  color: var(--vp-c-brand-light)
}

.text-\[color\:var\(--vp-c-text-light-1\)\]{
  color: var(--vp-c-text-light-1)
}

@media (prefers-color-scheme: dark){
  .dark\:text-\[color\:var\(--vp-c-brand-dark\)\]{
    color: var(--vp-c-brand-dark)
  }

  .dark\:text-\[color\:var\(--vp-c-text-dark-1\)\]{
    color: var(--vp-c-text-dark-1)
  }
}

@media (min-width: 640px){
  .sm\:text-xl{
    font-size: 1.25rem;
    line-height: 1.75rem
  }
}

@media (min-width: 1024px){
  .lg\:mb-16{
    margin-bottom: 4rem
  }

  .lg\:grid-cols-2{
    grid-template-columns: repeat(2, minmax(0, 1fr))
  }

  .lg\:px-6{
    padding-left: 1.5rem;
    padding-right: 1.5rem
  }

  .lg\:py-16{
    padding-top: 4rem;
    padding-bottom: 4rem
  }

  .lg\:text-4xl{
    font-size: 2.25rem;
    line-height: 2.5rem
  }
}
</style>