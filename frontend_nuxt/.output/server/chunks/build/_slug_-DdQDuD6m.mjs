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
    const resolveImageUrl = (url) => {
      if (!url) return "https://via.placeholder.com/300?text=No+Image";
      if (url.startsWith("/")) return url;
      if (url.startsWith("http")) return url;
      if (url.startsWith("../")) return `https://www.shindary.com${url.substring(2)}`;
      return `https://www.shindary.com/${url}`;
    };
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$DgMAiuEuww"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: categories, pending: pendingCategories } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/categories`,
      "$nTtrxXI1pc"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: product, pending: pendingProduct, error: errorProduct } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products/${route.params.slug}`,
      "$FiMwhL82zR"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const category = computed(() => (categories.value || []).find((item) => {
      var _a;
      return item.id === ((_a = product.value) == null ? void 0 : _a.category_id);
    }) || null);
    const descriptionText = computed(() => {
      var _a, _b;
      return ((_a = product.value) == null ? void 0 : _a.description) || ((_b = product.value) == null ? void 0 : _b.name) || "Product details are being organized in the migrated database view.";
    });
    useHead(() => ({
      title: product.value ? product.value.name : "Product Detail - Shindary",
      meta: product.value ? [
        { name: "keywords", content: product.value.part_number || product.value.name },
        { name: "description", content: `${product.value.name}${descriptionText.value}` },
        { property: "og:title", content: product.value.name },
        { property: "og:description", content: `${product.value.name}${descriptionText.value}` },
        { property: "og:image", content: resolveImageUrl(product.value.image_url) },
        { property: "og:url", content: `https://www.shindary.com/products/${product.value.slug}` },
        { property: "og:site_name", content: "Shindary Automotive Parts Co., Ltd." }
      ] : []
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f7f7f7] text-slate-900" }, _attrs))}>`);
      if (unref(pendingShell) || unref(pendingProduct) || unref(pendingCategories)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading product</p></div></div>`);
      } else if (unref(shellError) || unref(errorProduct) || !unref(product) || !unref(shell)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Product unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load this product.</h1></div></div>`);
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
          to: "/products",
          class: "hover:text-[#0b4b99]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Products`);
            } else {
              return [
                createTextVNode("Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (category.value) {
          _push(`<!--[--><span class="px-2 text-slate-300">&gt;&gt;</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/products", query: { category: category.value.id } },
            class: "hover:text-[#0b4b99]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(category.value.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(category.value.name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">${ssrInterpolate(unref(product).name)}</span></div></div><main class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><article class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"><div class="grid gap-0 lg:grid-cols-[1fr,1fr]"><div class="border-b border-slate-200 bg-white p-8 lg:border-b-0 lg:border-r lg:p-10"><div class="flex min-h-[360px] items-center justify-center bg-white"><img${ssrRenderAttr("src", resolveImageUrl(unref(product).image_url))}${ssrRenderAttr("alt", unref(product).name)} class="max-h-[420px] w-full object-contain"></div></div><div class="p-8 lg:p-10"><h1 class="text-3xl font-semibold leading-tight text-slate-900 lg:text-4xl">${ssrInterpolate(unref(product).name)}</h1><p class="mt-6 text-base leading-8 text-slate-600">${ssrInterpolate(descriptionText.value)}</p><dl class="mt-8 grid gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:grid-cols-2"><div><dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">Part Number</dt><dd class="mt-2 text-base text-slate-900">${ssrInterpolate(unref(product).part_number || "Pending")}</dd></div><div><dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">OEM Number</dt><dd class="mt-2 text-base text-slate-900">${ssrInterpolate(unref(product).oem_number || "Pending")}</dd></div><div><dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">Car Model</dt><dd class="mt-2 text-base text-slate-900">${ssrInterpolate(unref(product).car_model || "Pending")}</dd></div><div><dt class="font-semibold uppercase tracking-[0.12em] text-slate-500">Slug</dt><dd class="mt-2 break-all text-base text-slate-900">${ssrInterpolate(unref(product).slug)}</dd></div></dl><a href="mailto:overseas@shindary.com" class="mt-8 inline-flex items-center justify-center bg-[#0b4b99] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#083a76]"> Inquire Now </a></div></div><div class="border-t border-slate-200 px-8 py-8 lg:px-10"><h2 class="text-xl font-semibold uppercase tracking-[0.08em] text-slate-900">Product Description</h2><div class="mt-5 space-y-4 text-base leading-8 text-slate-600"><p>${ssrInterpolate(descriptionText.value)}</p></div></div></article></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DdQDuD6m.mjs.map
