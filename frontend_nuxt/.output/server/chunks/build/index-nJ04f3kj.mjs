import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './fetch-DLe7Ubau.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute, u as useRuntimeConfig } from './server.mjs';
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
    const route = useRoute();
    const config = useRuntimeConfig();
    const currentPage = computed(() => {
      const page = Number(route.query.page || 1);
      return Number.isFinite(page) && page > 0 ? page : 1;
    });
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$uxsFcVPzCD"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: newsList, pending: pendingNews, error: newsError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/news`,
      {
        query: { page: currentPage, page_size: 5 },
        watch: [currentPage]
      },
      "$WG71WBjLq3"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const totalPages = computed(() => {
      if (!newsList.value) {
        return 1;
      }
      return Math.max(1, Math.ceil(newsList.value.total / newsList.value.page_size));
    });
    const formatDate = (value) => new Date(value).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
    useHead({
      title: "Lifan Rear Bumper & Left Tail Lamp, Great Wall Rear Fog Lamp & Right Tail Lamp Wholesale",
      meta: [
        { name: "keywords", content: "GEELY Oxygen Sensor, Great Wall Rear Fog Lamp, Dongfeng Outer Handle" },
        { name: "description", content: "Buy low price, high quality Lifan rear bumper & left tail lamp, choose our Lifan rear bumper & left tail lamp, Shindary is the leading Company, Warmly welcome new and old customers to visit and patronize!" },
        { property: "og:title", content: "Lifan Rear Bumper & Left Tail Lamp, Great Wall Rear Fog Lamp & Right Tail Lamp Wholesale" },
        { property: "og:description", content: "Buy low price, high quality Lifan rear bumper & left tail lamp, choose our Lifan rear bumper & left tail lamp, Shindary is the leading Company, Warmly welcome new and old customers to visit and patronize!" },
        { property: "og:image", content: "https://www.shindary.com/data/watermark/ueditor/20221028/635b8840d2eac.jpg" },
        { property: "og:url", content: "https://www.shindary.com/news/" },
        { property: "og:site_name", content: "Shindary Automotive Parts Co., Ltd." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f7f7f7] text-slate-900" }, _attrs))}>`);
      if (unref(pendingShell) || unref(pendingNews)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading news</p></div></div>`);
      } else if (unref(shellError) || unref(newsError) || !unref(shell) || !unref(newsList)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">News unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated news page.</h1></div></div>`);
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
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">News</span></div></div><main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="space-y-6"><section class="space-y-5"><!--[-->`);
        ssrRenderList(unref(newsList).items, (article) => {
          _push(`<article class="group grid gap-0 overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[#0b4b99] sm:grid-cols-[280px,1fr]">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/news/${article.slug}`,
            class: "block overflow-hidden bg-slate-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", article.image_url)}${ssrRenderAttr("alt", article.title)} class="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: article.image_url,
                    alt: article.title,
                    class: "h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="flex flex-col justify-between p-6"><div><h2 class="text-2xl font-semibold leading-tight text-slate-900 transition group-hover:text-[#0b4b99]">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/news/${article.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(article.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(article.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h2><p class="mt-4 text-sm leading-8 text-slate-600">${ssrInterpolate(article.excerpt)}</p></div><p class="mt-5 text-sm text-slate-500">${ssrInterpolate(formatDate(article.published_at))}</p></div></article>`);
        });
        _push(`<!--]--><div class="flex flex-wrap items-center justify-center gap-3 pt-6">`);
        if (currentPage.value > 1) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/news", query: { page: currentPage.value - 1 } },
            class: "border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-[#0b4b99] hover:text-[#0b4b99]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Previous `);
              } else {
                return [
                  createTextVNode(" Previous ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="border border-[#0b4b99] bg-[#0b4b99] px-4 py-2 text-sm font-semibold text-white">${ssrInterpolate(currentPage.value)}</span>`);
        if (currentPage.value < totalPages.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/news", query: { page: currentPage.value + 1 } },
            class: "border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-[#0b4b99] hover:text-[#0b4b99]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Next `);
              } else {
                return [
                  createTextVNode(" Next ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-nJ04f3kj.mjs.map
