<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#edf2f7_36%,#ffffff_100%)] text-slate-900">
    <div v-if="pending" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading homepage</p>
      </div>
    </div>

    <div v-else-if="error || !homeData" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Homepage API unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to render the migrated homepage.</h1>
        <p class="mt-4 text-base leading-7 text-slate-600">Start the FastAPI service and retry the page to load the structured homepage payload.</p>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="homeData.primary_nav" :language-links="homeData.language_links" :contact="homeData.contact" />
      <HomeHero :slides="homeData.hero_slides" />

      <main class="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <section class="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div class="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#7fb4ff]">{{ homeData.profile.title }}</p>
            <h2 class="mt-4 max-w-xl text-4xl font-semibold leading-tight">Built for export-scale supply and fast product response.</h2>
            <p class="mt-6 max-w-2xl text-base leading-8 text-slate-300">{{ homeData.profile.summary }}</p>
            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink to="/about-us" class="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100">
                Company Profile
              </NuxtLink>
              <NuxtLink to="/products" class="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10">
                Browse Products
              </NuxtLink>
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <NuxtLink
              v-for="feature in homeData.profile.features"
              :key="feature.title"
              :to="feature.href"
              class="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0b4b99]"
            >
              <div class="relative h-20 w-20 overflow-hidden rounded-3xl bg-slate-50">
                <img :src="feature.icon" :alt="feature.title" class="absolute inset-0 h-full w-full object-contain p-3 transition duration-300 group-hover:opacity-0" />
                <img :src="feature.hover_icon" :alt="feature.title" class="absolute inset-0 h-full w-full object-contain p-3 opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
              <h3 class="mt-6 text-xl font-semibold text-slate-900">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">{{ feature.description }}</p>
            </NuxtLink>
          </div>
        </section>

        <section class="mt-12 rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <div class="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b4b99]">Service Coverage</p>
              <h2 class="mt-2 text-3xl font-semibold uppercase tracking-[0.08em] text-slate-900">{{ homeData.brands.title }}</h2>
            </div>
            <div class="flex items-center gap-3">
              <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50" @click="scrollBrands(-1)">
                <span aria-hidden="true">&larr;</span>
              </button>
              <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50" @click="scrollBrands(1)">
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          <div ref="brandsScroller" class="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2">
            <NuxtLink
              v-for="brand in homeData.brands.items"
              :key="brand.href"
              :to="brand.href"
              class="flex min-w-[180px] shrink-0 snap-start flex-col items-center justify-center rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-8 transition duration-300 hover:-translate-y-1 hover:border-[#0b4b99] hover:bg-white"
            >
              <img :src="brand.image" :alt="brand.title" class="h-14 w-auto object-contain" />
              <p class="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-700">{{ brand.title }}</p>
            </NuxtLink>
          </div>
        </section>

        <section class="mt-12">
          <HomeProductTabs :tabs="homeData.product_tabs" />
        </section>

        <section class="mt-12 grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <div class="rounded-[2rem] bg-[linear-gradient(135deg,#0b4b99_0%,#082f63_100%)] p-8 text-white shadow-[0_24px_80px_rgba(11,75,153,0.22)]">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">Direct Contact</p>
            <h2 class="mt-3 text-3xl font-semibold">Ready to source auto parts at scale?</h2>
            <p class="mt-5 text-base leading-8 text-white/80">Talk with the export team about product lines, package standards, container loading, and market-specific quotation support.</p>
            <div class="mt-8 space-y-4 text-sm text-white/90">
              <p>{{ homeData.contact.address }}</p>
              <p>Phone: {{ homeData.contact.phone }}</p>
              <p>Email: {{ homeData.contact.email }}</p>
            </div>
            <div class="mt-8 flex flex-wrap gap-4">
              <a :href="`mailto:${homeData.contact.email}`" class="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b4b99] transition hover:bg-slate-100">Email Us</a>
              <a :href="`https://api.whatsapp.com/send?phone=${homeData.contact.whatsapp[0].replace('+', '')}`" target="_blank" rel="noreferrer" class="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10">WhatsApp</a>
            </div>
          </div>

          <div class="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <div class="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b4b99]">Insights</p>
                <h2 class="mt-2 text-3xl font-semibold uppercase tracking-[0.08em] text-slate-900">{{ homeData.news.title }}</h2>
              </div>
              <NuxtLink :to="homeData.news.href" class="text-sm font-semibold uppercase tracking-[0.16em] text-[#e83146]">View All</NuxtLink>
            </div>

            <div class="mt-8 grid gap-5">
              <NuxtLink
                v-for="article in homeData.news.items"
                :key="article.href"
                :to="article.href"
                class="group grid gap-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:border-[#0b4b99] hover:bg-white sm:grid-cols-[160px,1fr]"
              >
                <img :src="article.image" :alt="article.title" class="h-full min-h-[140px] w-full rounded-[1.1rem] object-cover" />
                <div>
                  <h3 class="text-lg font-semibold leading-7 text-slate-900 transition group-hover:text-[#0b4b99]">{{ article.title }}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-600">{{ article.excerpt }}</p>
                  <span class="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e83146]">
                    Read More
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter :contact="homeData.contact" :footer-groups="homeData.footer_groups" :social-links="homeData.social_links" />

      <div class="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 md:flex">
        <a
          v-for="action in homeData.floating_actions"
          :key="action.label"
          :href="action.href"
          :target="action.external ? '_blank' : undefined"
          :rel="action.external ? 'noreferrer' : undefined"
          class="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:border-[#0b4b99] hover:text-[#0b4b99]"
        >
          {{ action.label }}
        </a>
        <button type="button" class="rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20" @click="scrollToTop">
          Top
        </button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

definePageMeta({
  layout: false
})

const config = useRuntimeConfig()
const brandsScroller = ref(null)

const { data: homeData, pending, error } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)

useHead(() => {
  const seo = homeData.value?.seo

  if (!seo) {
    return {
      title: 'Shindary Automotive Parts Co., Ltd.'
    }
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

const scrollBrands = (direction) => {
  if (!brandsScroller.value) {
    return
  }

  brandsScroller.value.scrollBy({
    left: direction * 240,
    behavior: 'smooth'
  })
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
