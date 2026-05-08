<template>
  <section class="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
    <div class="flex flex-col gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b4b99]">Catalog Focus</p>
        <h2 class="mt-2 text-3xl font-semibold uppercase tracking-[0.08em] text-slate-900">Our Products</h2>
      </div>
      <div class="flex gap-2 overflow-x-auto pb-1">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.label"
          type="button"
          class="rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition"
          :class="index === activeIndex ? 'bg-[#0b4b99] text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
          @click="activeIndex = index"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <NuxtLink
        v-for="item in activeTab.items"
        :key="item.href"
        :to="item.href"
        class="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:border-[#0b4b99] hover:bg-white hover:shadow-[0_20px_40px_rgba(11,75,153,0.12)]"
      >
        <div class="flex aspect-[4/3] items-center justify-center bg-white p-5">
          <img :src="item.image" :alt="item.title" class="max-h-44 w-full object-contain transition duration-500 group-hover:scale-105" />
        </div>
        <div class="space-y-3 p-5">
          <p class="line-clamp-2 min-h-[3.5rem] text-sm font-semibold leading-6 text-slate-800">{{ item.title }}</p>
          <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e83146]">
            View Detail
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(0)

const activeTab = computed(() => props.tabs[activeIndex.value] || { items: [] })
</script>