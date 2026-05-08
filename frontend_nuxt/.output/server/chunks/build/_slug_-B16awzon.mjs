import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './fetch-DLe7Ubau.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$31O4J7gvoi"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: article, pending: pendingArticle, error: articleError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/news/${route.params.slug}`,
      "$z2sWiTr4L9"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: articleList } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/news`,
      {
        query: { page: 1, page_size: 50 }
      },
      "$1xBsYygTQC"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const currentIndex = computed(() => {
      var _a;
      return (((_a = articleList.value) == null ? void 0 : _a.items) || []).findIndex((item) => item.slug === route.params.slug);
    });
    const previousArticle = computed(() => {
      if (currentIndex.value <= 0) {
        return null;
      }
      return articleList.value.items[currentIndex.value - 1];
    });
    const nextArticle = computed(() => {
      if (currentIndex.value === -1 || !articleList.value || currentIndex.value >= articleList.value.items.length - 1) {
        return null;
      }
      return articleList.value.items[currentIndex.value + 1];
    });
    const formatDate = (value) => new Date(value).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
    useHead(() => ({
      title: article.value ? article.value.title : "Article - Shindary Automotive Parts",
      meta: article.value ? [
        { name: "keywords", content: article.value.title },
        { name: "description", content: article.value.excerpt },
        { property: "og:title", content: article.value.title },
        { property: "og:description", content: article.value.excerpt },
        { property: "og:image", content: article.value.image_url || "https://www.shindary.com/logo.png" },
        { property: "og:url", content: `https://www.shindary.com/news/${article.value.slug}` },
        { property: "og:site_name", content: "Shindary Automotive Parts Co., Ltd." }
      ] : []
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_HomeHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f7f7f7] text-slate-900" }, _attrs))}>`);
      if (unref(pendingShell) || unref(pendingArticle)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading article</p></div></div>`);
      } else if (unref(shellError) || unref(articleError) || !unref(shell) || !unref(article)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Article unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load this article.</h1></div></div>`);
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
          to: "/news",
          class: "hover:text-[#0b4b99]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`News`);
            } else {
              return [
                createTextVNode("News")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">${ssrInterpolate(unref(article).title)}</span></div></div><main class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><article class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"><div class="border-b border-slate-200 px-8 py-8 sm:px-10"><h1 class="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">${ssrInterpolate(unref(article).title)}</h1><div class="mt-4 flex items-center justify-between gap-4 text-sm text-slate-500"><span>${ssrInterpolate(formatDate(unref(article).published_at))}</span><span>Shindary Automotive Parts Co., Ltd.</span></div></div><div class="p-8 sm:p-10">`);
        if (unref(article).image_url) {
          _push(`<img${ssrRenderAttr("src", unref(article).image_url)}${ssrRenderAttr("alt", unref(article).title)} class="mb-8 w-full rounded-sm border border-slate-200 object-cover">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="prose prose-slate max-w-none prose-img:rounded-sm prose-img:border prose-img:border-slate-200 prose-img:shadow-none">${(_a = unref(article).content) != null ? _a : ""}</div><div class="mt-10 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600"><p> Previous: `);
        if (previousArticle.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/news/${previousArticle.value.slug}`,
            class: "text-[#0b4b99] hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(previousArticle.value.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(previousArticle.value.title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span class="text-slate-400">None</span>`);
        }
        _push(`</p><p> Next: `);
        if (nextArticle.value) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/news/${nextArticle.value.slug}`,
            class: "text-[#0b4b99] hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(nextArticle.value.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(nextArticle.value.title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span class="text-slate-400">None</span>`);
        }
        _push(`</p></div></div></article></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-B16awzon.mjs.map
