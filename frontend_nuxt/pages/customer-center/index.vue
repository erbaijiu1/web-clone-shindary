<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingPage" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading customer center</p>
      </div>
    </div>

    <div v-else-if="shellError || pageError || !shell || !customerPage" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Customer center unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated customer center page.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">Customer Center</span>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div class="mb-6 flex flex-col gap-4 rounded-sm border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-slate-900">{{ customerPage.page_title }}</h1>
            <p class="mt-2 text-sm leading-7 text-slate-600">Download catalogues and access customer-service resources used in the original site.</p>
          </div>
          <a :href="customerPage.cs_system_url" target="_blank" rel="nofollow noopener" class="inline-flex items-center justify-center bg-[#0b4b99] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#083a76]">
            CS System
          </a>
        </div>

        <div class="space-y-4">
          <article
            v-for="item in customerPage.downloads"
            :key="item.title"
            class="grid gap-6 rounded-sm border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr,96px,140px] sm:items-center"
          >
            <div>
              <h2 class="text-xl font-semibold text-slate-900">
                <a :href="item.file_url" target="_blank" rel="noopener" class="hover:text-[#0b4b99]">{{ item.title }}</a>
              </h2>
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

        <section class="mt-12">
          <div class="mb-5 flex items-center gap-4">
            <h2 class="text-2xl font-semibold text-slate-900">hot Products</h2>
            <div class="h-px flex-1 bg-slate-200" />
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NuxtLink
              v-for="item in hotProducts"
              :key="item.href"
              :to="item.href"
              class="group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[#0b4b99]"
            >
              <div class="flex h-44 items-center justify-center bg-white p-4">
                <img :src="item.image" :alt="item.title" class="max-h-full w-full object-contain transition duration-300 group-hover:scale-105" />
              </div>
              <div class="border-t border-slate-100 px-4 py-4 text-center">
                <p class="line-clamp-2 text-sm font-medium leading-6 text-slate-800 group-hover:text-[#0b4b99]">{{ item.title }}</p>
              </div>
            </NuxtLink>
          </div>
        </section>
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

const config = useRuntimeConfig()

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: customerPage, pending: pendingPage, error: pageError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/customer-center`)

const hotProducts = computed(() => shell.value?.product_tabs?.[3]?.items?.slice(0, 4) || [])

useHead(() => {
  const seo = customerPage.value?.seo
  if (!seo) {
    return { title: 'Customer Center - Shindary Automotive Parts Co., Ltd.' }
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