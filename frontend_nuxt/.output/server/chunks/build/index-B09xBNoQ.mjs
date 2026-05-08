import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './fetch-DLe7Ubau.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { reactive, ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3-BIrM3qgW.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@vue/shared';
import 'perfect-debounce';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const form = reactive({
      full_name: "",
      tel: "",
      email: "",
      company_name: "",
      from_country: "",
      msg: ""
    });
    const feedbackMessage = ref("");
    const feedbackError = ref(false);
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$2UyPeU_nG6"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: contactPage, pending: pendingPage, error: pageError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/contact`,
      "$GkK6lwgwBH"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      var _a;
      const seo = (_a = contactPage.value) == null ? void 0 : _a.seo;
      if (!seo) {
        return { title: "Contact Us - Shindary Automotive Parts Co., Ltd." };
      }
      return {
        title: seo.title,
        meta: [
          { name: "keywords", content: seo.keywords },
          { name: "description", content: seo.description },
          { property: "og:title", content: seo.og_title },
          { property: "og:description", content: seo.og_description },
          { property: "og:image", content: seo.og_image },
          { property: "og:url", content: seo.og_url },
          { property: "og:site_name", content: seo.og_site_name }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f7f7f7] text-slate-900" }, _attrs))}>`);
      if (unref(pendingShell) || unref(pendingPage)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading contact page</p></div></div>`);
      } else if (unref(shellError) || unref(pageError) || !unref(shell) || !unref(contactPage)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Contact page unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated contact page.</h1></div></div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_HomeHeader, {
          "nav-items": unref(shell).primary_nav,
          "language-links": unref(shell).language_links,
          contact: unref(shell).contact
        }, null, _parent));
        _push(`<div class="border-y border-slate-200 bg-white/80"><div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "hover:text-[#0b4b99]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">Contact Us</span></div></div><main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="grid gap-8 lg:grid-cols-[1fr,1.05fr]"><section class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10"><h1 class="text-3xl font-semibold text-slate-900">${ssrInterpolate(unref(contactPage).company_name)}</h1><ul class="mt-6 space-y-4 text-sm leading-7 text-slate-600"><li><span class="font-semibold text-slate-900">Add.:</span> ${ssrInterpolate(unref(contactPage).address)}</li><li><span class="font-semibold text-slate-900">Fax:</span> ${ssrInterpolate(unref(contactPage).fax)}</li><li><span class="font-semibold text-slate-900">Tel.:</span> ${ssrInterpolate(unref(contactPage).phone)}</li><li><span class="font-semibold text-slate-900">E-mail:</span><a${ssrRenderAttr("href", `mailto:${unref(contactPage).email}`)} class="text-[#0b4b99] hover:underline">${ssrInterpolate(unref(contactPage).email)}</a></li></ul><div class="mt-8 border-t border-slate-200 pt-6"><h2 class="text-xl font-semibold text-slate-900">For Customers</h2><ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600"><!--[-->`);
        ssrRenderList(unref(contactPage).customer_links, (item) => {
          _push(`<li><span class="font-semibold text-slate-900">${ssrInterpolate(item.label)}:</span><a${ssrRenderAttr("href", item.href)} target="_blank" rel="nofollow noopener" class="text-[#0b4b99] hover:underline">${ssrInterpolate(item.value)}</a></li>`);
        });
        _push(`<!--]--></ul></div><div class="mt-8 border-t border-slate-200 pt-6"><h2 class="text-xl font-semibold text-slate-900">For suppliers</h2><ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600"><!--[-->`);
        ssrRenderList(unref(contactPage).supplier_contacts, (item) => {
          _push(`<li><span class="font-semibold text-slate-900">${ssrInterpolate(item.title)}:</span> ${ssrInterpolate(item.name)} ${ssrInterpolate(item.phone)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="mt-8 overflow-hidden rounded-sm border border-slate-200"><img${ssrRenderAttr("src", unref(contactPage).map_image)}${ssrRenderAttr("alt", unref(contactPage).company_name)} class="w-full object-cover"></div></section><section class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10"><div class="border-b border-slate-200 pb-4"><h2 class="text-2xl font-semibold lowercase text-slate-900">${ssrInterpolate(unref(contactPage).feedback_title)}</h2><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(unref(contactPage).feedback_notice)}</p></div><form class="mt-6 space-y-4"><div><label class="mb-2 block text-sm font-semibold text-slate-700">Name</label><input${ssrRenderAttr("value", form.full_name)} type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]"></div><div><label class="mb-2 block text-sm font-semibold text-slate-700">Tel</label><input${ssrRenderAttr("value", form.tel)} type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]"></div><div><label class="mb-2 block text-sm font-semibold text-slate-700">E-mail</label><input${ssrRenderAttr("value", form.email)} type="email" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]"></div><div><label class="mb-2 block text-sm font-semibold text-slate-700">Company</label><input${ssrRenderAttr("value", form.company_name)} type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]"></div><div><label class="mb-2 block text-sm font-semibold text-slate-700">Country</label><input${ssrRenderAttr("value", form.from_country)} type="text" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]"></div><div><label class="mb-2 block text-sm font-semibold text-slate-700">Message</label><textarea rows="6" class="w-full rounded-none border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#0b4b99]">${ssrInterpolate(form.msg)}</textarea></div>`);
        if (feedbackMessage.value) {
          _push(`<p class="${ssrRenderClass([feedbackError.value ? "text-[#e83146]" : "text-[#0b4b99]", "text-sm"])}">${ssrInterpolate(feedbackMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit" class="inline-flex items-center justify-center bg-[#0b4b99] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#083a76]"> Send </button></form></section></div></main>`);
        _push(ssrRenderComponent(_component_HomeFooter, {
          contact: unref(shell).contact,
          "footer-groups": unref(shell).footer_groups,
          "social-links": unref(shell).social_links
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B09xBNoQ.mjs.map
