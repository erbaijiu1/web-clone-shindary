<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingCategories || pendingProducts" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading products</p>
      </div>
    </div>

    <div v-else-if="shellError || errorProducts || !shell" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Products unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated products page.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">Products</span>
          <template v-if="activeCategory">
            <span class="px-2 text-slate-300">&gt;&gt;</span>
            <span class="font-medium text-slate-900">{{ activeCategory.name }}</span>
          </template>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div class="grid gap-8 lg:grid-cols-[280px,1fr]">
          <aside class="lg:sticky lg:top-28 lg:self-start">
            <div class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
              <div class="bg-[#0b4b99] px-5 py-4 text-base font-semibold uppercase tracking-[0.16em] text-white">Products List</div>
              <div class="divide-y divide-slate-100">
                <NuxtLink
                  to="/products"
                  class="flex items-center justify-between px-5 py-3 text-sm transition"
                  :class="!activeCategory ? 'bg-slate-50 font-semibold text-[#0b4b99]' : 'text-slate-600 hover:bg-slate-50'"
                >
                  <span>All Products</span>
                  <span class="text-slate-300">&gt;</span>
                </NuxtLink>
                <NuxtLink
                  v-for="category in topLevelCategories"
                  :key="category.id"
                  :to="`/${category.slug}`"
                  class="flex items-center justify-between px-5 py-3 text-sm transition"
                  :class="activeCategory?.id === category.id ? 'bg-slate-50 font-semibold text-[#0b4b99]' : 'text-slate-600 hover:bg-slate-50'"
                >
                  <span class="truncate pr-3">{{ category.name }}</span>
                  <span class="text-slate-300">&gt;</span>
                </NuxtLink>
              </div>
            </div>
          </aside>

          <section>
            <div class="rounded-sm border border-slate-200 bg-white p-6 text-sm leading-8 text-slate-600 shadow-sm lg:p-8">
              <p>
                At Shindary, we take pride in offering an unparalleled selection of auto spare parts, with over 40,000 items in our inventory. Our comprehensive range covers components for 12 of China's most competitive automotive brands and six series of vulnerable parts, ensuring that we have the right part for every need.
              </p>
              <p class="mt-4">
                Our reach extends far and wide, with KD and spare parts collaborations established with automotive dealers and parts importers in over 80 countries. This extensive network allows us to provide timely and efficient support to our global partners.
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between border-b border-slate-200 pb-3">
              <h1 class="text-2xl font-semibold text-slate-900">{{ activeCategory ? activeCategory.name : 'Products' }}</h1>
              <p class="text-sm text-slate-500">{{ productItems.length }} items</p>
            </div>

            <div v-if="productItems.length === 0" class="rounded-sm border border-dashed border-slate-300 bg-white px-6 py-16 text-center text-slate-500 shadow-sm">
              No products found for this category.
            </div>

            <div v-else class="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <NuxtLink
                v-for="product in productItems"
                :key="product.id"
                :to="`/products/${product.slug}`"
                class="group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[#0b4b99]"
              >
                <div class="flex h-48 items-center justify-center bg-white p-4">
                  <img :src="resolveImageUrl(product.image_url)" :alt="product.name" class="max-h-full w-full object-contain transition duration-300 group-hover:scale-105" />
                </div>
                <div class="border-t border-slate-100 px-4 py-4 text-center">
                  <h2 class="line-clamp-2 text-sm font-medium leading-6 text-slate-800 group-hover:text-[#0b4b99]">{{ product.name }}</h2>
                </div>
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

const resolveImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/300?text=No+Image'
  if (url.startsWith('/')) return url
  if (url.startsWith('http')) return url
  if (url.startsWith('../')) return `https://www.shindary.com${url.substring(2)}`
  return `https://www.shindary.com/${url}`
}

const selectedCategoryId = computed(() => {
  const raw = Number(route.query.category)
  return Number.isFinite(raw) && raw > 0 ? raw : null
})

const productQuery = computed(() => (selectedCategoryId.value ? { category_id: selectedCategoryId.value } : {}))

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: categories, pending: pendingCategories } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/categories`)
const { data: products, pending: pendingProducts, error: errorProducts } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products`, {
  query: productQuery,
  watch: [productQuery]
})

const topLevelCategories = computed(() => (categories.value || []).filter((category) => !category.parent_id))
const activeCategory = computed(() => (categories.value || []).find((category) => category.id === selectedCategoryId.value) || null)
const productItems = computed(() => products.value || [])

useHead({
  title: 'Auto Spare Parts For Lifan, MG, Chery, GEELY, JAC, JINBEI, CHERY',
  meta: [
    { name: 'keywords', content: 'Auto Spare Parts' },
    { name: 'description', content: "Our auto spare parts range includes over 40,000 items, covering components for 12 of China's most competitive automotive brands and six series of vulnerable parts. Exported to more than 80 countries!" },
    { property: 'og:title', content: 'Auto Spare Parts For Lifan, MG, Chery, GEELY, JAC, JINBEI, CHERY' },
    { property: 'og:description', content: "Our auto spare parts range includes over 40,000 items, covering components for 12 of China's most competitive automotive brands and six series of vulnerable parts. Exported to more than 80 countries!" },
    { property: 'og:image', content: 'https://www.shindary.com/data/watermark/main/20260409/69d7691c7ecd8.jpg' },
    { property: 'og:url', content: 'https://www.shindary.com/products/' },
    { property: 'og:site_name', content: 'Shindary Automotive Parts Co., Ltd.' }
  ]
})
</script>
