import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from "./fetch-DLe7Ubau.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DCsvM-WK.js";
import { withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { u as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./v3-BIrM3qgW.js";
import "#internal/nuxt/paths";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/defu/dist/defu.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/ufo/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/ofetch/dist/node.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$fBsNrgjFGE"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: customerPage, pending: pendingPage, error: pageError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/customer-center`,
      "$P6NtKnH8FB"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const hotProducts = computed(() => shell.value?.product_tabs?.[3]?.items?.slice(0, 4) || []);
    useHead(() => {
      const seo = customerPage.value?.seo;
      if (!seo) {
        return { title: "Customer Center - Shindary Automotive Parts Co., Ltd." };
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
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading customer center</p></div></div>`);
      } else if (unref(shellError) || unref(pageError) || !unref(shell) || !unref(customerPage)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Customer center unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated customer center page.</h1></div></div>`);
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
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">Customer Center</span></div></div><main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="mb-6 flex flex-col gap-4 rounded-sm border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"><div><h1 class="text-2xl font-semibold text-slate-900">${ssrInterpolate(unref(customerPage).page_title)}</h1><p class="mt-2 text-sm leading-7 text-slate-600">Download catalogues and access customer-service resources used in the original site.</p></div><a${ssrRenderAttr("href", unref(customerPage).cs_system_url)} target="_blank" rel="nofollow noopener" class="inline-flex items-center justify-center bg-[#0b4b99] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#083a76]"> CS System </a></div><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(customerPage).downloads, (item) => {
          _push(`<article class="grid gap-6 rounded-sm border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr,96px,140px] sm:items-center"><div><h2 class="text-xl font-semibold text-slate-900"><a${ssrRenderAttr("href", item.file_url)} target="_blank" rel="noopener" class="hover:text-[#0b4b99]">${ssrInterpolate(item.title)}</a></h2><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(item.description)}</p></div><div class="flex justify-center"><a${ssrRenderAttr("href", item.file_url)} target="_blank" rel="noopener"><img${ssrRenderAttr("src", item.thumbnail)}${ssrRenderAttr("alt", item.title)} class="h-16 w-16 object-contain"></a></div><div class="flex justify-start sm:justify-end"><a${ssrRenderAttr("href", item.file_url)} target="_blank" rel="noopener" class="inline-flex items-center justify-center border border-[#0b4b99] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b4b99] transition hover:bg-[#0b4b99] hover:text-white">${ssrInterpolate(item.button_label)}</a></div></article>`);
        });
        _push(`<!--]--></div><section class="mt-12"><div class="mb-5 flex items-center gap-4"><h2 class="text-2xl font-semibold text-slate-900">hot Products</h2><div class="h-px flex-1 bg-slate-200"></div></div><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
        ssrRenderList(hotProducts.value, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.href,
            to: item.href,
            class: "group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[#0b4b99]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex h-44 items-center justify-center bg-white p-4"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="max-h-full w-full object-contain transition duration-300 group-hover:scale-105"${_scopeId}></div><div class="border-t border-slate-100 px-4 py-4 text-center"${_scopeId}><p class="line-clamp-2 text-sm font-medium leading-6 text-slate-800 group-hover:text-[#0b4b99]"${_scopeId}>${ssrInterpolate(item.title)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex h-44 items-center justify-center bg-white p-4" }, [
                    createVNode("img", {
                      src: item.image,
                      alt: item.title,
                      class: "max-h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "border-t border-slate-100 px-4 py-4 text-center" }, [
                    createVNode("p", { class: "line-clamp-2 text-sm font-medium leading-6 text-slate-800 group-hover:text-[#0b4b99]" }, toDisplayString(item.title), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></section></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customer-center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CnXG_ISI.js.map
