<template>
  <div class="font-sans">
    
    <!-- Banner Module -->
    <div class="relative w-full overflow-hidden bg-gray-200">
      <img src="https://www.shindary.com/data/upload/main/20250723/688090d1ba94a1920_750.jpg" class="w-full h-auto object-cover" alt="Banner">
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white">
        <h2 class="text-4xl md:text-6xl font-bold tracking-wider drop-shadow-lg">China Auto Parts Expert</h2>
      </div>
    </div>

    <!-- Company Profile Module -->
    <section class="py-16 bg-white text-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight uppercase mb-4">Company Profile</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          5000㎡+ Warehouse center, 40W+ Auto parts products, 80+ Dealer cooperation, 80+ Export Market
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="flex flex-col items-center">
            <img src="https://www.shindary.com/data/watermark/main/20250729/68889c4f323f7.png" alt="Our Culture" class="h-24 w-24 object-contain mb-4 transition-transform hover:scale-110">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Our Culture</h3>
            <p class="text-gray-500">Serve for your values</p>
          </div>
          <!-- Feature 2 -->
          <div class="flex flex-col items-center">
            <img src="https://www.shindary.com/data/watermark/main/20250723/68808ae03998b.png" alt="Our Service" class="h-24 w-24 object-contain mb-4 transition-transform hover:scale-110">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Our Service</h3>
            <p class="text-gray-500">Professional customized solutions</p>
          </div>
          <!-- Feature 3 -->
          <div class="flex flex-col items-center">
            <img src="https://www.shindary.com/data/watermark/main/20250723/68808c1d56cc3.png" alt="Our Team" class="h-24 w-24 object-contain mb-4 transition-transform hover:scale-110">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Our Team</h3>
            <p class="text-gray-500">Experienced and dedicated</p>
          </div>
        </div>
      </div>
    </section>

    <main class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      
      <div v-if="pending" class="text-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
        <p class="mt-4 text-xl text-gray-500">Loading modules...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-20">
        <p class="text-xl text-red-500">Failed to load data. Is the backend running?</p>
      </div>

      <div v-else class="space-y-20 px-4 sm:px-0">
        
        <!-- Selected Parts Module -->
        <section>
          <div class="flex justify-between items-end border-b-2 border-gray-200 pb-2 mb-8">
            <h2 class="text-3xl font-extrabold text-gray-900 uppercase">Selected Parts</h2>
            <a href="/products" class="text-gray-500 hover:text-red-600 transition-colors">MORE +</a>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div v-for="product in selectedParts" :key="product.id" class="group relative bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-full aspect-w-1 aspect-h-1 bg-white flex items-center justify-center p-4">
                <img :src="resolveImageUrl(product.image_url)" :alt="product.name" class="max-h-40 object-contain mx-auto group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-4 text-center bg-gray-50 border-t border-gray-100">
                <h3 class="text-sm text-gray-800 font-medium truncate" :title="product.name">
                  <a :href="`/products/${product.slug}`">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ product.name }}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <!-- Hot Models Module -->
        <section>
          <div class="flex justify-between items-end border-b-2 border-gray-200 pb-2 mb-8">
            <h2 class="text-3xl font-extrabold text-gray-900 uppercase">Hot Models</h2>
            <a href="/products" class="text-gray-500 hover:text-red-600 transition-colors">MORE +</a>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div v-for="product in hotModels" :key="product.id" class="group relative bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-full aspect-w-1 aspect-h-1 bg-white flex items-center justify-center p-4">
                <img :src="resolveImageUrl(product.image_url)" :alt="product.name" class="max-h-40 object-contain mx-auto group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-4 text-center bg-gray-50 border-t border-gray-100">
                <h3 class="text-sm text-gray-800 font-medium truncate" :title="product.name">
                  <a :href="`/products/${product.slug}`">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ product.name }}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const config = useRuntimeConfig()

// Fetch products from the FastAPI backend
const { data: products, pending, error } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products`)

// Split products into modules artificially for the demo
const selectedParts = computed(() => {
  if (!products.value) return []
  return products.value.slice(0, 5)
})

const hotModels = computed(() => {
  if (!products.value) return []
  return products.value.slice(5, 10)
})

// Helper to fix image URLs from DB that are relative like "../data/..."
const resolveImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/300?text=No+Image'
  if (url.startsWith('http')) return url
  // Map relative local urls to the live site to load them instantly
  if (url.startsWith('../')) {
    return `https://www.shindary.com${url.substring(2)}`
  }
  return `https://www.shindary.com/${url}`
}
</script>
