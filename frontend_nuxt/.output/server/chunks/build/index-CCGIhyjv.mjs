import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './fetch-DLe7Ubau.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    const resolveImageUrl = (url) => {
      if (!url) return "https://via.placeholder.com/300?text=No+Image";
      if (url.startsWith("/")) return url;
      if (url.startsWith("http")) return url;
      if (url.startsWith("../")) return `https://www.shindary.com${url.substring(2)}`;
      return `https://www.shindary.com/${url}`;
    };
    const selectedCategoryId = computed(() => {
      const raw = Number(route.query.category);
      return Number.isFinite(raw) && raw > 0 ? raw : null;
    });
    const productQuery = computed(() => selectedCategoryId.value ? { category_id: selectedCategoryId.value } : {});
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$sP6QfbzxaC"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: categories, pending: pendingCategories } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/categories`,
      "$roN1A-YSfP"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: products, pending: pendingProducts, error: errorProducts } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products`,
      {
        query: productQuery,
        watch: [productQuery]
      },
      "$AHS-0GLRqr"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const topLevelCategories = computed(() => (categories.value || []).filter((category) => !category.parent_id));
    const activeCategory = computed(() => (categories.value || []).find((category) => category.id === selectedCategoryId.value) || null);
    const productItems = computed(() => products.value || []);
    useHead({
      title: "Auto Spare Parts For Lifan, MG, Chery, GEELY, JAC, JINBEI, CHERY",
      meta: [
        { name: "keywords", content: "Auto Spare Parts" },
        { name: "description", content: "Our auto spare parts range includes over 40,000 items, covering components for 12 of China's most competitive automotive brands and six series of vulnerable parts. Exported to more than 80 countries!" },
        { property: "og:title", content: "Auto Spare Parts For Lifan, MG, Chery, GEELY, JAC, JINBEI, CHERY" },
        { property: "og:description", content: "Our auto spare parts range includes over 40,000 items, covering components for 12 of China's most competitive automotive brands and six series of vulnerable parts. Exported to more than 80 countries!" },
        { property: "og:image", content: "https://www.shindary.com/data/watermark/main/20260409/69d7691c7ecd8.jpg" },
        { property: "og:url", content: "https://www.shindary.com/products/" },
        { property: "og:site_name", content: "Shindary Automotive Parts Co., Ltd." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f7f7f7] text-slate-900" }, _attrs))}>`);
      if (unref(pendingShell) || unref(pendingCategories) || unref(pendingProducts)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading products</p></div></div>`);
      } else if (unref(shellError) || unref(errorProducts) || !unref(shell)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Products unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated products page.</h1></div></div>`);
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
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">Products</span>`);
        if (activeCategory.value) {
          _push(`<!--[--><span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">${ssrInterpolate(activeCategory.value.name)}</span><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="grid gap-8 lg:grid-cols-[280px,1fr]"><aside class="lg:sticky lg:top-28 lg:self-start"><div class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"><div class="bg-[#0b4b99] px-5 py-4 text-base font-semibold uppercase tracking-[0.16em] text-white">Products List</div><div class="divide-y divide-slate-100">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: ["flex items-center justify-between px-5 py-3 text-sm transition", !activeCategory.value ? "bg-slate-50 font-semibold text-[#0b4b99]" : "text-slate-600 hover:bg-slate-50"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>All Products</span><span class="text-slate-300"${_scopeId}>&gt;</span>`);
            } else {
              return [
                createVNode("span", null, "All Products"),
                createVNode("span", { class: "text-slate-300" }, ">")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(topLevelCategories.value, (category) => {
          var _a;
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: category.id,
            to: `/${category.slug}`,
            class: ["flex items-center justify-between px-5 py-3 text-sm transition", ((_a = activeCategory.value) == null ? void 0 : _a.id) === category.id ? "bg-slate-50 font-semibold text-[#0b4b99]" : "text-slate-600 hover:bg-slate-50"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="truncate pr-3"${_scopeId}>${ssrInterpolate(category.name)}</span><span class="text-slate-300"${_scopeId}>&gt;</span>`);
              } else {
                return [
                  createVNode("span", { class: "truncate pr-3" }, toDisplayString(category.name), 1),
                  createVNode("span", { class: "text-slate-300" }, ">")
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></aside><section><div class="rounded-sm border border-slate-200 bg-white p-6 text-sm leading-8 text-slate-600 shadow-sm lg:p-8"><p> At Shindary, we take pride in offering an unparalleled selection of auto spare parts, with over 40,000 items in our inventory. Our comprehensive range covers components for 12 of China&#39;s most competitive automotive brands and six series of vulnerable parts, ensuring that we have the right part for every need. </p><p class="mt-4"> Our reach extends far and wide, with KD and spare parts collaborations established with automotive dealers and parts importers in over 80 countries. This extensive network allows us to provide timely and efficient support to our global partners. </p></div><div class="mt-6 flex items-center justify-between border-b border-slate-200 pb-3"><h1 class="text-2xl font-semibold text-slate-900">${ssrInterpolate(activeCategory.value ? activeCategory.value.name : "Products")}</h1><p class="text-sm text-slate-500">${ssrInterpolate(productItems.value.length)} items</p></div>`);
        if (productItems.value.length === 0) {
          _push(`<div class="rounded-sm border border-dashed border-slate-300 bg-white px-6 py-16 text-center text-slate-500 shadow-sm"> No products found for this category. </div>`);
        } else {
          _push(`<div class="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"><!--[-->`);
          ssrRenderList(productItems.value, (product) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: product.id,
              to: `/products/${product.slug}`,
              class: "group overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[#0b4b99]"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex h-48 items-center justify-center bg-white p-4"${_scopeId}><img${ssrRenderAttr("src", resolveImageUrl(product.image_url))}${ssrRenderAttr("alt", product.name)} class="max-h-full w-full object-contain transition duration-300 group-hover:scale-105"${_scopeId}></div><div class="border-t border-slate-100 px-4 py-4 text-center"${_scopeId}><h2 class="line-clamp-2 text-sm font-medium leading-6 text-slate-800 group-hover:text-[#0b4b99]"${_scopeId}>${ssrInterpolate(product.name)}</h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex h-48 items-center justify-center bg-white p-4" }, [
                      createVNode("img", {
                        src: resolveImageUrl(product.image_url),
                        alt: product.name,
                        class: "max-h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", { class: "border-t border-slate-100 px-4 py-4 text-center" }, [
                      createVNode("h2", { class: "line-clamp-2 text-sm font-medium leading-6 text-slate-800 group-hover:text-[#0b4b99]" }, toDisplayString(product.name), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`</section></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CCGIhyjv.mjs.map
