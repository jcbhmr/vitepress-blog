<script setup lang="ts">
// import VPBPostCategory from './VPBPostCategory.vue'
// import VPBHomeAuthor from './VPBHomeAuthor.vue'

defineProps<{
  post: any
}>()
</script>

<template>
  <article
    class="rounded-lg border border-[color:var(--vp-c-brand-light)] p-6 shadow-md dark:border-[color:var(--vp-c-brand-dark)]"
  >
    <div class="mb-5 flex items-center justify-between text-gray-500">
      <span
        class="bg-primary-100 inline-flex items-center rounded text-sm font-medium text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
      >
        <!-- <VPBPostCategory :category="post.category">
          <span class="text-sm">{{ post.date.since }}</span>
        </VPBPostCategory> -->
      </span>
    </div>
    <h2
      class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-light)] dark:text-[color:var(--vp-c-brand-dark)]"
    >
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <div class="mb-5 font-light" v-html="post.excerpt"></div>
    <div class="flex items-center justify-between">
      <!-- <VPBHomeAuthor :name="post.author" /> -->
      <a
        :href="post.url"
        class="inline-flex items-center font-medium hover:text-[color:var(--vp-c-brand-dark)]"
      >
        Read more
        <div class="i-[bx/right-arrow-alt] ml-2" />
      </a>
    </div>
  </article>
</template>

<style scoped>

.mb-2{
  margin-bottom: 0.5rem
}

.mb-5{
  margin-bottom: 1.25rem
}

.ml-2{
  margin-left: 0.5rem
}

.flex{
  display: flex
}

.inline-flex{
  display: inline-flex
}

.items-center{
  align-items: center
}

.justify-between{
  justify-content: space-between
}

.rounded{
  border-radius: 0.25rem
}

.rounded-lg{
  border-radius: 0.5rem
}

.border{
  border-width: 1px
}

.border-\[color\:var\(--vp-c-brand-light\)\]{
  border-color: var(--vp-c-brand-light)
}

.p-6{
  padding: 1.5rem
}

.text-2xl{
  font-size: 1.5rem;
  line-height: 2rem
}

.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem
}

.font-bold{
  font-weight: 700
}

.font-light{
  font-weight: 300
}

.font-medium{
  font-weight: 500
}

.tracking-tight{
  letter-spacing: -0.025em
}

.text-\[color\:var\(--vp-c-brand-light\)\]{
  color: var(--vp-c-brand-light)
}

.text-gray-500{
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity))
}

.shadow-md{
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.hover\:text-\[color\:var\(--vp-c-brand-dark\)\]:hover{
  color: var(--vp-c-brand-dark)
}

@media (prefers-color-scheme: dark){
  .dark\:border-\[color\:var\(--vp-c-brand-dark\)\]{
    border-color: var(--vp-c-brand-dark)
  }

  .dark\:text-\[color\:var\(--vp-c-brand-dark\)\]{
    color: var(--vp-c-brand-dark)
  }
}

</style>