<template>
  <header class="sticky top-0 z-50 border-t-4 border-[#0b4b99] bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
    <div class="bg-slate-950 text-slate-200">
      <div class="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center gap-3">
          <a :href="phoneHref" class="transition hover:text-white">{{ contact.phone }}</a>
          <span class="hidden h-3 w-px bg-white/20 sm:block" />
          <a :href="emailHref" class="transition hover:text-white">{{ contact.email }}</a>
        </div>
        <p class="max-w-xl truncate text-slate-400">{{ contact.address }}</p>
      </div>
    </div>

    <div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-6 py-3 lg:gap-8 lg:py-4">
        <NuxtLink to="/" class="shrink-0">
          <img src="/migrated/shared/logo.png" alt="Shindary Automotive Parts" class="h-12 w-auto lg:h-[74px]" />
        </NuxtLink>

        <nav class="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
          <div
            v-for="item in navItems"
            :key="item.label"
            class="group relative shrink-0"
          >
            <NuxtLink
              :to="item.href"
              class="flex shrink-0 items-center gap-1.5 whitespace-nowrap px-0 py-2 text-[13px] font-bold uppercase tracking-[0.1em] text-slate-800 transition hover:text-[#e83146] xl:gap-2 xl:text-[14px] xl:tracking-[0.12em] 2xl:text-[15px] 2xl:tracking-[0.14em]"
            >
              <span>{{ item.label }}</span>
              <span v-if="item.children.length" class="ml-1 text-[12px] font-semibold text-slate-400">+</span>
            </NuxtLink>

            <div
              v-if="item.children.length"
              class="pointer-events-none absolute left-0 top-full z-20 min-w-[220px] pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
            >
              <div class="space-y-1 rounded-sm border border-slate-200 bg-white py-2 shadow-2xl shadow-slate-900/10">
                <template v-for="child in item.children" :key="`${item.label}-${child.label}`">
                  <a
                    v-if="child.external"
                    :href="child.href"
                    target="_blank"
                    rel="noreferrer"
                    class="block px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#0b4b99]"
                  >
                    {{ child.label }}
                  </a>
                  <NuxtLink
                    v-else
                    :to="child.href"
                    class="block px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#0b4b99]"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </template>
              </div>
            </div>
          </div>
        </nav>

        <div class="hidden shrink-0 items-center gap-2 xl:flex">
          <template v-for="item in languageLinks" :key="item.label">
            <a
              v-if="item.external"
              :href="item.href"
              target="_blank"
              rel="noreferrer"
              class="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition"
              :class="item.active ? 'border-[#0b4b99] bg-[#0b4b99] text-white' : 'border-slate-200 text-slate-600 hover:border-slate-300'"
            >
              {{ item.label }}
            </a>
            <NuxtLink
              v-else
              :to="item.href"
              class="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition"
              :class="item.active ? 'border-[#0b4b99] bg-[#0b4b99] text-white' : 'border-slate-200 text-slate-600 hover:border-slate-300'"
            >
              {{ item.label }}
            </NuxtLink>
          </template>

          <a
            href="mailto:overseas@shindary.com"
            class="rounded-full bg-[#e83146] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#c71f33]"
          >
            Inquiry
          </a>
        </div>

        <button
          type="button"
          class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 lg:hidden"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="space-y-1.5">
            <span class="block h-0.5 w-5 bg-current" />
            <span class="block h-0.5 w-5 bg-current" />
            <span class="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <div v-if="mobileOpen" class="border-t border-slate-200 py-4 lg:hidden">
        <div class="space-y-3">
          <div
            v-for="item in navItems"
            :key="`mobile-${item.label}`"
            class="rounded-3xl border border-slate-200 px-4 py-3"
          >
            <NuxtLink :to="item.href" class="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-800">
              {{ item.label }}
            </NuxtLink>
            <div v-if="item.children.length" class="mt-3 grid gap-2 border-t border-slate-100 pt-3">
              <template v-for="child in item.children" :key="`mobile-${item.label}-${child.label}`">
                <a
                  v-if="child.external"
                  :href="child.href"
                  target="_blank"
                  rel="noreferrer"
                  class="text-sm text-slate-500"
                >
                  {{ child.label }}
                </a>
                <NuxtLink v-else :to="child.href" class="text-sm text-slate-500">
                  {{ child.label }}
                </NuxtLink>
              </template>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <template v-for="item in languageLinks" :key="`mobile-lang-${item.label}`">
              <a
                v-if="item.external"
                :href="item.href"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
                :class="item.active ? 'border-[#0b4b99] bg-[#0b4b99] text-white' : 'border-slate-200 text-slate-600'"
              >
                {{ item.label }}
              </a>
              <NuxtLink
                v-else
                :to="item.href"
                class="rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
                :class="item.active ? 'border-[#0b4b99] bg-[#0b4b99] text-white' : 'border-slate-200 text-slate-600'"
              >
                {{ item.label }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  navItems: {
    type: Array,
    required: true
  },
  languageLinks: {
    type: Array,
    required: true
  },
  contact: {
    type: Object,
    required: true
  }
})

const mobileOpen = ref(false)

const phoneHref = computed(() => `tel:${props.contact.phone.replace(/\s+/g, '')}`)
const emailHref = computed(() => `mailto:${props.contact.email}`)
</script>