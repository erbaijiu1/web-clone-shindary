<template>
  <div>
    <!-- Header Module -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="/">
              <img class="h-10 w-auto" src="https://www.shindary.com/logo.png" alt="Shindary Auto Parts" />
            </a>
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="/" class="text-red-600 font-bold border-b-2 border-red-600 px-1 pt-1 text-base">Home</a>
            <a href="/about-us" class="text-gray-700 hover:text-red-600 font-bold px-1 pt-1 text-base">About Us</a>
            <a href="/products" class="text-gray-700 hover:text-red-600 font-bold px-1 pt-1 text-base">Products</a>
            <a href="/news" class="text-gray-700 hover:text-red-600 font-bold px-1 pt-1 text-base">News</a>
            <a href="/customer-center" class="text-gray-700 hover:text-red-600 font-bold px-1 pt-1 text-base">Customer Center</a>
            <a href="/contact" class="text-gray-700 hover:text-red-600 font-bold px-1 pt-1 text-base">Contact Us</a>
          </nav>
          
          <!-- Search & Lang -->
          <div class="hidden md:flex items-center space-x-4">
            <div class="text-sm font-medium text-gray-700 cursor-pointer">EN</div>
            <div class="relative">
              <input type="text" placeholder="Search..." class="border-b border-gray-300 focus:border-red-600 outline-none px-2 py-1 text-sm w-32 focus:w-48 transition-all duration-300">
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer Module -->
    <footer class="bg-gray-900 text-white mt-16 pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="https://www.shindary.com/logo.png" alt="Shindary" class="h-8 bg-white p-1 rounded mb-4">
          <p class="text-gray-400 text-sm">Professional Auto Parts Supplier in China.</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/about-us" class="hover:text-white">Company Profile</a></li>
            <li><a href="/products" class="hover:text-white">All Products</a></li>
            <li><a href="/news" class="hover:text-white">Latest News</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li>Email: info@shindary.com</li>
            <li>Tel: +86-xxx-xxxxxxx</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <!-- Social Icons placeholder -->
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; 2026 Shindary Auto Parts. All rights reserved.
      </div>
    </footer>
  </div>
</template>
