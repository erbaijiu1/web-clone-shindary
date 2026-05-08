import { withAsyncContext, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { b as useRuntimeConfig } from "../server.mjs";
import { u as useFetch } from "./fetch-ClUoykSO.js";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/defu/dist/defu.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/ufo/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { data: products, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products`,
      "$zUr6vLGk-g"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const selectedParts = computed(() => {
      if (!products.value) return [];
      return products.value.slice(0, 5);
    });
    const hotModels = computed(() => {
      if (!products.value) return [];
      return products.value.slice(5, 10);
    });
    const resolveImageUrl = (url) => {
      if (!url) return "https://via.placeholder.com/300?text=No+Image";
      if (url.startsWith("http")) return url;
      if (url.startsWith("../")) {
        return `https://www.shindary.com${url.substring(2)}`;
      }
      return `https://www.shindary.com/${url}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans" }, _attrs))}><div class="relative w-full overflow-hidden bg-gray-200"><img src="https://www.shindary.com/data/upload/main/20250723/688090d1ba94a1920_750.jpg" class="w-full h-auto object-cover" alt="Banner"><div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white"><h2 class="text-4xl md:text-6xl font-bold tracking-wider drop-shadow-lg">China Auto Parts Expert</h2></div></div><section class="py-16 bg-white text-center"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-extrabold text-gray-900 tracking-tight uppercase mb-4">Company Profile</h2><p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12"> 5000㎡+ Warehouse center, 40W+ Auto parts products, 80+ Dealer cooperation, 80+ Export Market </p><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="flex flex-col items-center"><img src="https://www.shindary.com/data/watermark/main/20250729/68889c4f323f7.png" alt="Our Culture" class="h-24 w-24 object-contain mb-4 transition-transform hover:scale-110"><h3 class="text-xl font-bold text-gray-900 mb-2">Our Culture</h3><p class="text-gray-500">Serve for your values</p></div><div class="flex flex-col items-center"><img src="https://www.shindary.com/data/watermark/main/20250723/68808ae03998b.png" alt="Our Service" class="h-24 w-24 object-contain mb-4 transition-transform hover:scale-110"><h3 class="text-xl font-bold text-gray-900 mb-2">Our Service</h3><p class="text-gray-500">Professional customized solutions</p></div><div class="flex flex-col items-center"><img src="https://www.shindary.com/data/watermark/main/20250723/68808c1d56cc3.png" alt="Our Team" class="h-24 w-24 object-contain mb-4 transition-transform hover:scale-110"><h3 class="text-xl font-bold text-gray-900 mb-2">Our Team</h3><p class="text-gray-500">Experienced and dedicated</p></div></div></div></section><main class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">`);
      if (unref(pending)) {
        _push(`<div class="text-center py-20"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div><p class="mt-4 text-xl text-gray-500">Loading modules...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="text-center py-20"><p class="text-xl text-red-500">Failed to load data. Is the backend running?</p></div>`);
      } else {
        _push(`<div class="space-y-20 px-4 sm:px-0"><section><div class="flex justify-between items-end border-b-2 border-gray-200 pb-2 mb-8"><h2 class="text-3xl font-extrabold text-gray-900 uppercase">Selected Parts</h2><a href="/products" class="text-gray-500 hover:text-red-600 transition-colors">MORE +</a></div><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"><!--[-->`);
        ssrRenderList(selectedParts.value, (product) => {
          _push(`<div class="group relative bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"><div class="w-full aspect-w-1 aspect-h-1 bg-white flex items-center justify-center p-4"><img${ssrRenderAttr("src", resolveImageUrl(product.image_url))}${ssrRenderAttr("alt", product.name)} class="max-h-40 object-contain mx-auto group-hover:scale-105 transition-transform duration-500"></div><div class="p-4 text-center bg-gray-50 border-t border-gray-100"><h3 class="text-sm text-gray-800 font-medium truncate"${ssrRenderAttr("title", product.name)}><a${ssrRenderAttr("href", `/products/${product.slug}`)}><span aria-hidden="true" class="absolute inset-0"></span> ${ssrInterpolate(product.name)}</a></h3></div></div>`);
        });
        _push(`<!--]--></div></section><section><div class="flex justify-between items-end border-b-2 border-gray-200 pb-2 mb-8"><h2 class="text-3xl font-extrabold text-gray-900 uppercase">Hot Models</h2><a href="/products" class="text-gray-500 hover:text-red-600 transition-colors">MORE +</a></div><div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"><!--[-->`);
        ssrRenderList(hotModels.value, (product) => {
          _push(`<div class="group relative bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"><div class="w-full aspect-w-1 aspect-h-1 bg-white flex items-center justify-center p-4"><img${ssrRenderAttr("src", resolveImageUrl(product.image_url))}${ssrRenderAttr("alt", product.name)} class="max-h-40 object-contain mx-auto group-hover:scale-105 transition-transform duration-500"></div><div class="p-4 text-center bg-gray-50 border-t border-gray-100"><h3 class="text-sm text-gray-800 font-medium truncate"${ssrRenderAttr("title", product.name)}><a${ssrRenderAttr("href", `/products/${product.slug}`)}><span aria-hidden="true" class="absolute inset-0"></span> ${ssrInterpolate(product.name)}</a></h3></div></div>`);
        });
        _push(`<!--]--></div></section></div>`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-yo_9BK7l.js.map
