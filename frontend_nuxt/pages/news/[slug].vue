<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingArticle" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading article</p>
      </div>
    </div>

    <div v-else-if="shellError || articleError || !shell || !article" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Article unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load this article.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <NuxtLink to="/news" class="hover:text-[#0b4b99]">News</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">{{ article.title }}</span>
        </div>
      </div>

      <main class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <article class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
          <div class="border-b border-slate-200 px-8 py-8 sm:px-10">
            <h1 class="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">{{ article.title }}</h1>
            <div class="mt-4 flex items-center justify-between gap-4 text-sm text-slate-500">
              <span>{{ formatDate(article.published_at) }}</span>
              <span>Shindary Automotive Parts Co., Ltd.</span>
            </div>
          </div>
          <div class="p-8 sm:p-10">
            <img v-if="article.image_url" :src="article.image_url" :alt="article.title" class="mb-8 w-full rounded-sm border border-slate-200 object-cover" />
            <div class="prose prose-slate max-w-none prose-img:rounded-sm prose-img:border prose-img:border-slate-200 prose-img:shadow-none" v-html="article.content" />
            <div class="mt-10 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <p>
                Previous:
                <NuxtLink v-if="previousArticle" :to="`/news/${previousArticle.slug}`" class="text-[#0b4b99] hover:underline">{{ previousArticle.title }}</NuxtLink>
                <span v-else class="text-slate-400">None</span>
              </p>
              <p>
                Next:
                <NuxtLink v-if="nextArticle" :to="`/news/${nextArticle.slug}`" class="text-[#0b4b99] hover:underline">{{ nextArticle.title }}</NuxtLink>
                <span v-else class="text-slate-400">None</span>
              </p>
            </div>
          </div>
        </article>
      </main>

      <HomeFooter :contact="shell.contact" :footer-groups="shell.footer_groups" :social-links="shell.social_links" />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useHead } from '#imports'

definePageMeta({
  layout: false
})

const route = useRoute()
const config = useRuntimeConfig()

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: article, pending: pendingArticle, error: articleError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/news/${route.params.slug}`)
const { data: articleList } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/news`, {
  query: { page: 1, page_size: 50 }
})

const currentIndex = computed(() => (articleList.value?.items || []).findIndex((item) => item.slug === route.params.slug))
const previousArticle = computed(() => {
  if (currentIndex.value <= 0) {
    return null
  }
  return articleList.value.items[currentIndex.value - 1]
})
const nextArticle = computed(() => {
  if (currentIndex.value === -1 || !articleList.value || currentIndex.value >= articleList.value.items.length - 1) {
    return null
  }
  return articleList.value.items[currentIndex.value + 1]
})
const formatDate = (value) => new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })

useHead(() => ({
  title: article.value ? article.value.title : 'Article - Shindary Automotive Parts',
  meta: article.value ? [
    { name: 'keywords', content: article.value.title },
    { name: 'description', content: article.value.excerpt },
    { property: 'og:title', content: article.value.title },
    { property: 'og:description', content: article.value.excerpt },
    { property: 'og:image', content: article.value.image_url || 'https://www.shindary.com/logo.png' },
    { property: 'og:url', content: `https://www.shindary.com/news/${article.value.slug}` },
    { property: 'og:site_name', content: 'Shindary Automotive Parts Co., Ltd.' }
  ] : []
}))
</script>