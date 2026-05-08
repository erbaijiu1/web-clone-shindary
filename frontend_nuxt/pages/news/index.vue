<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingNews" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading news</p>
      </div>
    </div>

    <div v-else-if="shellError || newsError || !shell || !newsList" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">News unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated news page.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">News</span>
        </div>
      </div>

      <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div class="space-y-6">
          <section class="space-y-5">
            <article
              v-for="article in newsList.items"
              :key="article.slug"
              class="group grid gap-0 overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[#0b4b99] sm:grid-cols-[280px,1fr]"
            >
              <NuxtLink :to="`/news/${article.slug}`" class="block overflow-hidden bg-slate-100">
                <img :src="article.image_url" :alt="article.title" class="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105" />
              </NuxtLink>
              <div class="flex flex-col justify-between p-6">
                <div>
                  <h2 class="text-2xl font-semibold leading-tight text-slate-900 transition group-hover:text-[#0b4b99]">
                    <NuxtLink :to="`/news/${article.slug}`">{{ article.title }}</NuxtLink>
                  </h2>
                  <p class="mt-4 text-sm leading-8 text-slate-600">{{ article.excerpt }}</p>
                </div>
                <p class="mt-5 text-sm text-slate-500">{{ formatDate(article.published_at) }}</p>
              </div>
            </article>

            <div class="flex flex-wrap items-center justify-center gap-3 pt-6">
              <NuxtLink
                v-if="currentPage > 1"
                :to="{ path: '/news', query: { page: currentPage - 1 } }"
                class="border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-[#0b4b99] hover:text-[#0b4b99]"
              >
                Previous
              </NuxtLink>
              <span class="border border-[#0b4b99] bg-[#0b4b99] px-4 py-2 text-sm font-semibold text-white">{{ currentPage }}</span>
              <NuxtLink
                v-if="currentPage < totalPages"
                :to="{ path: '/news', query: { page: currentPage + 1 } }"
                class="border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-[#0b4b99] hover:text-[#0b4b99]"
              >
                Next
              </NuxtLink>
            </div>
          </section>
        </div>
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

const currentPage = computed(() => {
  const page = Number(route.query.page || 1)
  return Number.isFinite(page) && page > 0 ? page : 1
})

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: newsList, pending: pendingNews, error: newsError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/news`, {
  query: { page: currentPage, page_size: 5 },
  watch: [currentPage]
})

const totalPages = computed(() => {
  if (!newsList.value) {
    return 1
  }
  return Math.max(1, Math.ceil(newsList.value.total / newsList.value.page_size))
})

const formatDate = (value) => new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })

useHead({
  title: 'Lifan Rear Bumper & Left Tail Lamp, Great Wall Rear Fog Lamp & Right Tail Lamp Wholesale',
  meta: [
    { name: 'keywords', content: 'GEELY Oxygen Sensor, Great Wall Rear Fog Lamp, Dongfeng Outer Handle' },
    { name: 'description', content: 'Buy low price, high quality Lifan rear bumper & left tail lamp, choose our Lifan rear bumper & left tail lamp, Shindary is the leading Company, Warmly welcome new and old customers to visit and patronize!' },
    { property: 'og:title', content: 'Lifan Rear Bumper & Left Tail Lamp, Great Wall Rear Fog Lamp & Right Tail Lamp Wholesale' },
    { property: 'og:description', content: 'Buy low price, high quality Lifan rear bumper & left tail lamp, choose our Lifan rear bumper & left tail lamp, Shindary is the leading Company, Warmly welcome new and old customers to visit and patronize!' },
    { property: 'og:image', content: 'https://www.shindary.com/data/watermark/ueditor/20221028/635b8840d2eac.jpg' },
    { property: 'og:url', content: 'https://www.shindary.com/news/' },
    { property: 'og:site_name', content: 'Shindary Automotive Parts Co., Ltd.' }
  ]
})
</script>