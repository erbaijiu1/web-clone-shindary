<template>
  <div class="min-h-screen bg-[#f7f7f7] text-slate-900">
    <div v-if="pendingShell || pendingPage" class="grid min-h-screen place-items-center px-6">
      <div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" />
        <p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading contact page</p>
      </div>
    </div>

    <div v-else-if="shellError || pageError || !shell || !contactPage" class="grid min-h-screen place-items-center px-6">
      <div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Contact page unavailable</p>
        <h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated contact page.</h1>
      </div>
    </div>

    <template v-else>
      <HomeHeader :nav-items="shell.primary_nav" :language-links="shell.language_links" :contact="shell.contact" />

      <div class="border-y border-slate-200 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">
          <NuxtLink to="/" class="hover:text-[#0b4b99]">Home</NuxtLink>
          <span class="px-2 text-slate-300">&gt;&gt;</span>
          <span class="font-medium text-slate-900">Contact Us</span>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div class="grid gap-8 lg:grid-cols-[1fr,1.05fr]">
          <section class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <h1 class="text-3xl font-semibold text-slate-900">{{ contactPage.company_name }}</h1>

            <ul class="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li><span class="font-semibold text-slate-900">Add.:</span> {{ contactPage.address }}</li>
              <li><span class="font-semibold text-slate-900">Fax:</span> {{ contactPage.fax }}</li>
              <li><span class="font-semibold text-slate-900">Tel.:</span> {{ contactPage.phone }}</li>
              <li>
                <span class="font-semibold text-slate-900">E-mail:</span>
                <a :href="`mailto:${contactPage.email}`" class="text-[#0b4b99] hover:underline">{{ contactPage.email }}</a>
              </li>
            </ul>

            <div class="mt-8 border-t border-slate-200 pt-6">
              <h2 class="text-xl font-semibold text-slate-900">For Customers</h2>
              <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li v-for="item in contactPage.customer_links" :key="item.href">
                  <span class="font-semibold text-slate-900">{{ item.label }}:</span>
                  <a :href="item.href" target="_blank" rel="nofollow noopener" class="text-[#0b4b99] hover:underline">{{ item.value }}</a>
                </li>
              </ul>
            </div>

            <div class="mt-8 border-t border-slate-200 pt-6">
              <h2 class="text-xl font-semibold text-slate-900">For suppliers</h2>
              <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li v-for="item in contactPage.supplier_contacts" :key="`${item.title}-${item.phone}`">
                  <span class="font-semibold text-slate-900">{{ item.title }}:</span>
                  {{ item.name }} {{ item.phone }}
                </li>
              </ul>
            </div>

            <div class="mt-8 overflow-hidden rounded-sm border border-slate-200">
              <img :src="contactPage.map_image" :alt="contactPage.company_name" class="w-full object-cover" />
            </div>
          </section>

          <section class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div class="border-b border-slate-200 pb-4">
              <h2 class="text-2xl font-semibold lowercase text-slate-900">{{ contactPage.feedback_title }}</h2>
              <p class="mt-3 text-sm leading-7 text-slate-600">{{ contactPage.feedback_notice }}</p>
            </div>

            <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                <input v-model="form.full_name" type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Tel</label>
                <input v-model="form.tel" type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">E-mail</label>
                <input v-model="form.email" type="email" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Company</label>
                <input v-model="form.company_name" type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Country</label>
                <input v-model="form.from_country" type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <textarea v-model="form.msg" rows="6" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]" />
              </div>

              <p v-if="feedbackMessage" class="text-sm" :class="feedbackError ? 'text-[#e83146]' : 'text-[#0b4b99]'">
                {{ feedbackMessage }}
              </p>

              <button type="submit" class="inline-flex items-center justify-center bg-[#0b4b99] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#083a76]">
                Send
              </button>
            </form>
          </section>
        </div>
      </main>

      <HomeFooter :contact="shell.contact" :footer-groups="shell.footer_groups" :social-links="shell.social_links" />
    </template>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useHead } from '#imports'

definePageMeta({
  layout: false
})

const config = useRuntimeConfig()

const form = reactive({
  full_name: '',
  tel: '',
  email: '',
  company_name: '',
  from_country: '',
  msg: ''
})

const feedbackMessage = ref('')
const feedbackError = ref(false)

const { data: shell, pending: pendingShell, error: shellError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`)
const { data: contactPage, pending: pendingPage, error: pageError } = await useFetch(`${config.public.apiBase}/${config.public.siteCode}/api/v1/public/contact`)

const handleSubmit = () => {
  if (!form.full_name || !form.email || !form.company_name || !form.from_country || !form.msg) {
    feedbackError.value = true
    feedbackMessage.value = 'Please complete the required fields before sending.'
    return
  }

  feedbackError.value = false
  feedbackMessage.value = 'Opening your email client with the migrated contact payload.'

  const subject = encodeURIComponent(`Contact Us - ${form.full_name}`)
  const body = encodeURIComponent(
    `Name: ${form.full_name}\n` +
    `Tel: ${form.tel}\n` +
    `Email: ${form.email}\n` +
    `Company: ${form.company_name}\n` +
    `Country: ${form.from_country}\n\n` +
    `${form.msg}`
  )

  if (typeof window !== 'undefined') {
    window.location.href = `mailto:${contactPage.value.email}?subject=${subject}&body=${body}`
  }
}

useHead(() => {
  const seo = contactPage.value?.seo
  if (!seo) {
    return { title: 'Contact Us - Shindary Automotive Parts Co., Ltd.' }
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
</script>