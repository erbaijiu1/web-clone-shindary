<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingPage" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading {{ fallbackTitle.toLowerCase() }}</p>
      </div>
    </div>

    <div v-else-if="shellError || pageError || !shell || !pageData" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">{{ fallbackTitle }} unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated {{ fallbackTitle.toLowerCase() }} page.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <NuxtLink to="/about-us" class="hover:text-[#0b4b99]">About Us</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">{{ pageData.page_title }}</span>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div class="grid gap-8 lg:grid-cols-[280px,1fr]">
          <aside class="lg:sticky lg:top-28 lg:self-start">
            <div class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
              <div class="bg-[#0b4b99] px-5 py-4 text-base font-semibold uppercase tracking-[0.16em] text-white">About Us</div>
              <div class="divide-y divide-slate-100">
                <NuxtLink
                  v-for="link in pageData.sidebar_links"
                  :key="link.label"
                  :to="link.href"
                  class="flex items-center justify-between px-5 py-3 text-sm transition"
                  :class="link.active ? 'bg-slate-50 font-semibold text-[#0b4b99]' : 'text-slate-600 hover:bg-slate-50'"
                >
                  <span>{{ link.label }}</span>
                  <span class="text-slate-300">&gt;</span>
                </NuxtLink>
              </div>
            </div>
          </aside>

          <section class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div class="border-b border-slate-200 pb-4">
              <h1 class="text-2xl font-semibold uppercase tracking-[0.08em] text-slate-900">{{ pageData.content_title }}</h1>
            </div>

            <div
              v-if="pageData.content_html"
              class="prose prose-slate mt-6 max-w-none prose-img:rounded-sm prose-img:border prose-img:border-slate-200 prose-img:shadow-none"
              v-html="pageData.content_html"
            />

            <div v-if="pageData.gallery_sections?.length" class="mt-10 space-y-10">
              <section v-for="section in pageData.gallery_sections" :key="section.title" class="space-y-5">
                <div class="border-b border-slate-200 pb-3">
                  <h2 class="text-xl font-semibold text-slate-900">{{ section.title }}</h2>
                </div>
                <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  <figure
                    v-for="image in section.images"
                    :key="`${section.title}-${image.image}`"
                    class="overflow-hidden rounded-sm border border-slate-200 bg-slate-50"
                  >
                    <img :src="image.image" :alt="image.alt" class="h-60 w-full object-cover" loading="lazy">
                    <figcaption class="border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                      {{ image.caption }}
                    </figcaption>
                  </figure>
                </div>
              </section>
            </div>

            <div v-if="pageData.video_items?.length" class="mt-10 space-y-8">
              <article v-for="video in pageData.video_items" :key="video.embed_url" class="overflow-hidden rounded-sm border border-slate-200 bg-slate-50">
                <div class="relative pt-[56.25%]">
                  <iframe
                    :src="video.embed_url"
                    :title="video.title"
                    class="absolute inset-0 h-full w-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  />
                </div>
                <div class="space-y-3 bg-white px-5 py-4">
                  <h2 class="text-xl font-semibold text-slate-900">{{ video.title }}</h2>
                  <p v-if="video.description" class="text-sm leading-7 text-slate-600">{{ video.description }}</p>
                  <a
                    v-if="video.external_url"
                    :href="video.external_url"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center text-sm font-semibold text-[#0b4b99] hover:text-[#08386f]"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>

      <HomeFooter :contact="shell.contact" :footer-groups="shell.footer_groups" :social-links="shell.social_links" />
    </template>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

const props = defineProps({
  pageSlug: {
    type: String,
    required: true
  },
  fallbackTitle: {
    type: String,
    required: true
  }
})

const config = useRuntimeConfig()

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: pageData, pending: pendingPage, error: pageError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/about-subpages/${props.pageSlug}`)

useHead(() => {
  const seo = pageData.value?.seo
  if (!seo) {
    return { title: `${props.fallbackTitle} - Shindary Automotive Parts Co., Ltd.` }
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