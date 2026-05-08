import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './fetch-DLe7Ubau.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$7JGCih9uO_"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: downloadPage, pending: pendingPage, error: pageError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/download`,
      "$j6wzM8AFXA"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      var _a;
      const seo = (_a = downloadPage.value) == null ? void 0 : _a.seo;
      if (!seo) {
        return { title: "Download - Shindary Automotive Parts Co., Ltd." };
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
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading downloads</p></div></div>`);
      } else if (unref(shellError) || unref(pageError) || !unref(shell) || !unref(downloadPage)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Download page unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated download page.</h1></div></div>`);
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
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(downloadPage).parent_href,
          class: "hover:text-[#0b4b99]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(downloadPage).parent_label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(downloadPage).parent_label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">${ssrInterpolate(unref(downloadPage).page_title)}</span></div></div><main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(downloadPage).downloads, (item) => {
          _push(`<article class="grid gap-6 rounded-sm border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr,96px,140px] sm:items-center"><div><h1 class="text-xl font-semibold text-slate-900"><a${ssrRenderAttr("href", item.file_url)} target="_blank" rel="noopener" class="hover:text-[#0b4b99]">${ssrInterpolate(item.title)}</a></h1><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(item.description)}</p></div><div class="flex justify-center"><a${ssrRenderAttr("href", item.file_url)} target="_blank" rel="noopener"><img${ssrRenderAttr("src", item.thumbnail)}${ssrRenderAttr("alt", item.title)} class="h-16 w-16 object-contain"></a></div><div class="flex justify-start sm:justify-end"><a${ssrRenderAttr("href", item.file_url)} target="_blank" rel="noopener" class="inline-flex items-center justify-center border border-[#0b4b99] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b4b99] transition hover:bg-[#0b4b99] hover:text-white">${ssrInterpolate(item.button_label)}</a></div></article>`);
        });
        _push(`<!--]--></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/download/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BCp7YmGI.mjs.map
