<template>
  <section class="relative overflow-hidden bg-slate-950">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(11,75,153,0.45),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(232,49,70,0.35),transparent_35%)]" />

    <div class="relative h-[52vh] min-h-[420px] max-h-[760px]">
      <article
        v-for="(slide, index) in slides"
        :key="slide.image"
        class="absolute inset-0 transition-opacity duration-700"
        :class="index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'"
      >
        <picture>
          <source :srcset="resolveSiteAssetUrl(slide.mobile_image || slide.image)" media="(max-width: 767px)" />
          <img :src="resolveSiteAssetUrl(slide.image)" :alt="slide.alt" class="h-full w-full object-cover" />
        </picture>
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.45)_45%,rgba(2,6,23,0.12)_100%)]" />

        <div class="absolute inset-x-0 bottom-0 top-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl text-white">
            <p class="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">China Auto Parts Expert</p>
            <h1 class="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{{ slide.title }}</h1>
            <p class="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              Reliable supply for passenger vehicles, commercial fleets, and aftermarket distribution across more than 80 export markets.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <NuxtLink
                :to="slide.href"
                class="rounded-full bg-[#e83146] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c71f33]"
              >
                Explore
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="pointer-events-none absolute inset-x-0 bottom-8 mx-auto flex max-w-7xl items-end justify-between px-4 sm:px-6 lg:px-8">
      <div class="pointer-events-auto flex items-center gap-3">
        <button
          type="button"
          class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          @click="previous"
        >
          <span class="sr-only">Previous slide</span>
          <span aria-hidden="true">&larr;</span>
        </button>
        <button
          type="button"
          class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          @click="next"
        >
          <span class="sr-only">Next slide</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      <div class="pointer-events-auto hidden gap-3 md:flex">
        <button
          v-for="(slide, index) in slides"
          :key="`dot-${slide.image}`"
          type="button"
          class="group flex items-center gap-3"
          @click="activeIndex = index"
        >
          <span class="h-2.5 rounded-full transition-all" :class="index === activeIndex ? 'w-12 bg-white' : 'w-2.5 bg-white/45 group-hover:bg-white/70'" />
          <span class="hidden text-xs uppercase tracking-[0.2em] text-white/65 lg:block">{{ index + 1 }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})

const resolveSiteAssetUrl = useSiteAssetUrl()
const activeIndex = ref(0)
let intervalId

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.slides.length
}

const previous = () => {
  activeIndex.value = (activeIndex.value - 1 + props.slides.length) % props.slides.length
}

onMounted(() => {
  intervalId = window.setInterval(next, 5000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    window.clearInterval(intervalId)
  }
})
</script>