<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingPage" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading about page</p>
      </div>
    </div>

    <div v-else-if="shellError || pageError || !shell || !aboutPage" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">About page unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated about page.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">About Us</span>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div class="grid gap-8 lg:grid-cols-[280px,1fr]">
          <aside class="lg:sticky lg:top-28 lg:self-start">
            <div class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
              <div class="bg-[#0b4b99] px-5 py-4 text-base font-semibold uppercase tracking-[0.16em] text-white">About Us</div>
              <div class="divide-y divide-slate-100">
                <component
                  v-for="link in aboutPage.sidebar_links"
                  :key="link.label"
                  :is="link.active ? nuxtLinkComponent : 'div'"
                  v-bind="link.active ? { to: '/about-us' } : {}"
                  class="flex items-center justify-between px-5 py-3 text-sm transition"
                  :class="link.active ? 'bg-slate-50 font-semibold text-[#0b4b99]' : 'text-slate-600'"
                >
                  <span>{{ link.label }}</span>
                  <span class="text-slate-300">&gt;</span>
                </component>
              </div>
            </div>
          </aside>

          <section class="space-y-8">
            <div class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <div class="border-b border-slate-200 pb-4">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b4b99]">COMPANY PROFILE</p>
              </div>
              <div class="mt-5 space-y-5 text-base leading-8 text-slate-600">
                <p v-for="paragraph in aboutPage.intro" :key="paragraph">{{ paragraph }}</p>
              </div>
              <div class="mt-8 space-y-2 border-l-4 border-[#0b4b99] bg-slate-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-800">
                <div v-for="line in aboutPage.brand_lines" :key="line">
                  {{ line }}
                </div>
              </div>
            </div>

            <article
              v-for="section in aboutPage.sections"
              :key="section.title"
              class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"
            >
              <div class="p-8 lg:p-10">
                <div class="border-b border-slate-200 pb-4">
                  <h2 class="text-2xl font-semibold uppercase tracking-[0.08em] text-slate-900">{{ section.title }}</h2>
                </div>
                <div class="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p v-for="paragraph in section.body" :key="`${section.title}-${paragraph}`">{{ paragraph }}</p>
                </div>
                <div v-if="section.image" class="mt-8">
                  <img :src="section.image" :alt="section.image_alt || section.title" class="w-full rounded-sm border border-slate-200 object-cover" />
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>

      <HomeFooter :contact="shell.contact" :footer-groups="shell.footer_groups" :social-links="shell.social_links" />
    </template>
  </div>
</template>

<script setup>
import { resolveComponent } from 'vue'
import { useHead } from '#imports'

definePageMeta({
  layout: false
})

const config = useRuntimeConfig()
const nuxtLinkComponent = resolveComponent('NuxtLink')

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: aboutPage, pending: pendingPage, error: pageError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/about`)

useHead(() => {
  const seo = aboutPage.value?.seo
  if (!seo) {
    return { title: 'About Us - Shindary Automotive Parts Co., Ltd.' }
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