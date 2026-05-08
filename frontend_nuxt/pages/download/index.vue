<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingPage" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading downloads</p>
      </div>
    </div>

    <div v-else-if="shellError || pageError || !shell || !downloadPage" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Download page unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated download page.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <NuxtLink :to="downloadPage.parent_href" class="hover:text-[#0b4b99]">{{ downloadPage.parent_label }}</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">{{ downloadPage.page_title }}</span>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div class="space-y-4">
          <article
            v-for="item in downloadPage.downloads"
            :key="item.title"
            class="grid gap-6 rounded-sm border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr,96px,140px] sm:items-center"
          >
            <div>
              <h1 class="text-xl font-semibold text-slate-900">
                <a :href="item.file_url" target="_blank" rel="noopener" class="hover:text-[#0b4b99]">{{ item.title }}</a>
              </h1>
              <p class="mt-3 text-sm leading-7 text-slate-600">{{ item.description }}</p>
            </div>
            <div class="flex justify-center">
              <a :href="item.file_url" target="_blank" rel="noopener">
                <img :src="item.thumbnail" :alt="item.title" class="h-16 w-16 object-contain" />
              </a>
            </div>
            <div class="flex justify-start sm:justify-end">
              <a :href="item.file_url" target="_blank" rel="noopener" class="inline-flex items-center justify-center border border-[#0b4b99] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b4b99] transition hover:bg-[#0b4b99] hover:text-white">
                {{ item.button_label }}
              </a>
            </div>
          </article>
        </div>
      </main>

      <HomeFooter :contact="shell.contact" :footer-groups="shell.footer_groups" :social-links="shell.social_links" />
    </template>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

definePageMeta({
  layout: false
})

const config = useRuntimeConfig()

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: downloadPage, pending: pendingPage, error: pageError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/download`)

useHead(() => {
  const seo = downloadPage.value?.seo
  if (!seo) {
    return { title: 'Download - Shindary Automotive Parts Co., Ltd.' }
  }

  return {
    title: seo.title,
    meta: [
      { name: 'keywords', content: seo.keywords },
      { name: 'description', content: seo.description },
      { property: 'og:title', content: seo.og_title },
      { property: 'og:description', content: seo.og_description },
      { property: 'og:image', content: seo.og_image },
      { property: 'og:url', content: seo.og_url },
      { property: 'og:site_name', content: seo.og_site_name }
    ]
  }
})
</script>