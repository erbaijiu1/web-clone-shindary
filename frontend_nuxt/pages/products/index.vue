<template>
  <div class="bg-white min-h-screen">
    <!-- Breadcrumbs -->
    <div class="bg-gray-100 py-3 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="/" class="hover:text-red-600">Home</a>
            </li>
            <li>
              <div class="flex items-center">
                <span class="mx-2">>></span>
                <span class="text-gray-900 font-medium">Products</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      
      <!-- Left Sidebar: Categories -->
      <aside class="w-full md:w-1/4 flex-shrink-0">
        <div class="bg-blue-900 text-white font-bold py-3 px-4 uppercase tracking-wider">
          Products List
        </div>
        <div class="border border-t-0 border-gray-200 bg-white shadow-sm h-auto max-h-[800px] overflow-y-auto">
          <ul class="divide-y divide-gray-100">
            <li v-for="category in categories" :key="category.id" class="group">
              <a href="#" class="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors flex justify-between items-center">
                <span class="truncate">{{ category.name }}</span>
                <span class="text-gray-400 text-xs">></span>
              </a>
            </li>
            <li v-if="pendingCategories" class="p-4 text-gray-500 text-sm text-center">Loading categories...</li>
            <li v-if="!pendingCategories && categories.length === 0" class="p-4 text-gray-500 text-sm text-center">No categories found.</li>
          </ul>
        </div>
      </aside>

      <!-- Right Main Area: Products -->
      <section class="w-full md:w-3/4">
        
        <!-- Description Block -->
        <div class="bg-gray-50 p-6 rounded-sm border border-gray-200 mb-8 text-sm text-gray-600 leading-relaxed">
          <p class="mb-4">
            At Shindary, we take pride in offering an unparalleled selection of auto spare parts, with over 40,000 items in our inventory. Our comprehensive range covers components for 12 of China's most competitive automotive brands and six series of vulnerable parts, ensuring that we have the right part for every need.
          </p>
          <p class="mb-4"><strong>Global Reach and Collaboration</strong></p>
          <p>
            Our reach extends far and wide, with KD (Knock Down) and spare parts collaborations established with automotive dealers and parts importers in over 80 countries. This extensive network allows us to provide timely and efficient support to our global partners.
          </p>
        </div>

        <!-- Products Grid -->
        <div v-if="pendingProducts" class="text-center py-20">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600 mx-auto"></div>
          <p class="mt-4 text-gray-500">Loading products...</p>
        </div>

        <div v-else-if="errorProducts" class="text-center py-20">
          <p class="text-red-500">Failed to load products. Is the backend running?</p>
        </div>

        <div v-else>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div v-for="product in products" :key="product.id" class="group border border-gray-200 hover:border-red-500 transition-colors bg-white relative">
              <div class="aspect-w-1 aspect-h-1 w-full bg-white flex items-center justify-center p-2 relative overflow-hidden">
                <img :src="resolveImageUrl(product.image_url)" :alt="product.name" class="object-contain w-full h-40 group-hover:scale-105 transition-transform duration-300">
              </div>
              <div class="p-3 text-center border-t border-gray-100 h-20 flex flex-col justify-center">
                <h3 class="text-xs text-gray-800 hover:text-red-600 line-clamp-2" :title="product.name">
                  <a :href="`/products/${product.slug}`">{{ product.name }}</a>
                </h3>
              </div>
              <!-- Hover Action -->
              <div class="absolute bottom-0 left-0 right-0 bg-blue-900 text-white text-xs py-2 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center cursor-pointer">
                <span>Add to Cart</span>
              </div>
            </div>
          </div>

          <!-- Pagination Mock -->
          <div class="flex justify-center items-center space-x-1 mt-12">
            <button class="px-3 py-1 border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed text-sm">Previous</button>
            <button class="px-3 py-1 border border-red-600 bg-red-600 text-white text-sm font-medium">1</button>
            <button class="px-3 py-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm">2</button>
            <button class="px-3 py-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm">3</button>
            <button class="px-3 py-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm">4</button>
            <span class="px-2 text-gray-500">...</span>
            <button class="px-3 py-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm">Next</button>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

// Fetch Categories
const { data: categories, pending: pendingCategories } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/categories`)

// Fetch Products
const { data: products, pending: pendingProducts, error: errorProducts } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products`)

// Helper to fix image URLs
const resolveImageUrl = (url) => {
  if (!url) return 'https://via.placeholder.com/300?text=No+Image'
  if (url.startsWith('http')) return url
  if (url.startsWith('../')) {
    return `https://www.shindary.com${url.substring(2)}`
  }
  return `https://www.shindary.com/${url}`
}
</script>
