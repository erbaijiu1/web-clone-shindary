<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingProduct || pendingCategories" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading product</p>
      </div>
    </div>

    <div v-else-if="shellError || errorProduct || !product || !shell" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Product unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load this product.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <NuxtLink to="/products" class="hover:text-[#0b4b99]">Products</NuxtLink>
          <template v-if="category">
            <span class="px-2 text-slate-300">&gt;&gt;</span>
            <NuxtLink :to="{ path: '/products', query: { category: category.id } }" class="hover:text-[#0b4b99]">{{ category.name }}</NuxtLink>
          </template>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">{{ product.name }}</span>
        </div>
      </div>

      <main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <article class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
          <div class="grid gap-0 lg:grid-cols-[1fr,1fr]">
            <div class="border-b border-slate-200 bg-white p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div class="flex min-h-[360px] items-center justify-center bg-white">
                <img :src="resolveImageUrl(product.image_url)" :alt="product.name" class="max-h-[420px] w-full object-contain" />
              </div>
            </div>
            <div class="p-8 lg:p-10">
              <h1 class="text-3xl font-semibold leading-tight text-slate-900 lg:text-4xl">{{ product.name }}</h1>
              <p class="mt-6 text-base leading-8 text-slate-600">{{ descriptionText }}</p>

              <dl class="mt-8 grid gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:grid-cols-2">
                <div>
                  <dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">Part Number</dt>
                  <dd class="mt-2 text-base text-slate-900">{{ product.part_number || 'Pending' }}</dd>
                </div>
                <div>
                  <dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">OEM Number</dt>
                  <dd class="mt-2 text-base text-slate-900">{{ product.oem_number || 'Pending' }}</dd>
                </div>
                <div>
                  <dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">Car Model</dt>
                  <dd class="mt-2 text-base text-slate-900">{{ product.car_model || 'Pending' }}</dd>
                </div>
                <div>
                  <dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">Slug</dt>
                  <dd class="mt-2 break-all text-base text-slate-900">{{ product.slug }}</dd>
                </div>
              </dl>

              <a href="mailto:overseas@shindary.com" class="mt-8 inline-flex items-center justify-center bg-[#0b4b99] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#083a76]">
                Inquire Now
              </a>
            </div>
          </div>

          <div class="border-t border-slate-200 px-8 py-8 lg:px-10">
            <h2 class="text-xl font-semibold uppercase tracking-[0.08em] text-slate-900">Product Description</h2>
            <div class="mt-5 space-y-4 text-base leading-8 text-slate-600">
              <p>{{ descriptionText }}</p>
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

const resolveImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/300?text=No+Image'
  if (url.startsWith('/')) return url
  if (url.startsWith('http')) return url
  if (url.startsWith('../')) return `https://www.shindary.com${url.substring(2)}`
  return `https://www.shindary.com/${url}`
}

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: categories, pending: pendingCategories } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/categories`)
const { data: product, pending: pendingProduct, error: errorProduct } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products/${route.params.slug}`)

const category = computed(() => (categories.value || []).find((item) => item.id === product.value?.category_id) || null)
const descriptionText = computed(() => product.value?.description || product.value?.name || 'Product details are being organized in the migrated database view.')

useHead(() => ({
  title: product.value ? product.value.name : 'Product Detail - Shindary',
  meta: product.value ? [
    { name: 'keywords', content: product.value.part_number || product.value.name },
    { name: 'description', content: `${product.value.name}${descriptionText.value}` },
    { property: 'og:title', content: product.value.name },
    { property: 'og:description', content: `${product.value.name}${descriptionText.value}` },
    { property: 'og:image', content: resolveImageUrl(product.value.image_url) },
    { property: 'og:url', content: `https://www.shindary.com/products/${product.value.slug}` },
    { property: 'og:site_name', content: 'Shindary Automotive Parts Co., Ltd.' }
  ] : []
}))
</script>