<template>
  <footer class="relative overflow-hidden bg-slate-950 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,75,153,0.3),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(232,49,70,0.2),transparent_24%)]" />
    <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[1.25fr,1fr,1fr,1fr]">
        <div>
          <img :src="logoUrl" alt="Shindary" class="h-14 w-auto rounded-2xl bg-white p-2" />
          <h2 class="mt-6 text-2xl font-semibold">{{ contact.company }}</h2>
          <p class="mt-4 max-w-md text-sm leading-7 text-slate-300">{{ contact.address }}</p>
          <div class="mt-6 space-y-2 text-sm text-slate-300">
            <p>Tel: {{ contact.phone }}</p>
            <p>Fax: {{ contact.fax }}</p>
            <p>Email: {{ contact.email }}</p>
          </div>
        </div>

        <div v-for="group in footerGroups" :key="group.title">
          <h3 class="text-lg font-semibold uppercase tracking-[0.18em] text-white/85">{{ group.title }}</h3>
          <div class="mt-5 space-y-3 text-sm text-slate-300">
            <template v-for="link in group.links" :key="`${group.title}-${link.label}`">
              <a
                v-if="link.external"
                :href="link.href"
                target="_blank"
                rel="noreferrer"
                class="block transition hover:text-white"
              >
                {{ link.label }}
              </a>
              <NuxtLink v-else :to="link.href" class="block transition hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div class="flex flex-wrap gap-3">
          <a
            v-for="item in socialLinks"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-white/30 hover:text-white"
          >
            {{ item.label }}
          </a>
        </div>
        <p class="text-sm text-slate-400">Copyright © Shindary Automotive Parts Co., Ltd. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const resolveSiteAssetUrl = useSiteAssetUrl()
const logoUrl = resolveSiteAssetUrl('/migrated/shared/logo.png')

defineProps({
  contact: {
    type: Object,
    required: true
  },
  footerGroups: {
    type: Array,
    required: true
  },
  socialLinks: {
    type: Array,
    required: true
  }
})
</script>