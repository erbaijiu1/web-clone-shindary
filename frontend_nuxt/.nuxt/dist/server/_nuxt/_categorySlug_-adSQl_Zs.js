import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from "./fetch-DLe7Ubau.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-DCsvM-WK.js";
import { computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { a as useRoute, c as createError, u as useRuntimeConfig } from "../server.mjs";
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
  __name: "[categorySlug]",
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
    const CATEGORY_PAGE_CONTENT = {
      "selected-parts": {
        seoTitle: "Cheap Auto Parts Online| Competitive Auto Parts Products",
        displayTitle: "Competitive Auto Parts Products",
        keywords: "Cheap Auto Parts Online",
        description: "Shindary is the supplier for full solution plans of auto spare parts with professional service and reasonable price to all of our clients. Cheap auto parts online include Radiator, Stabillizer Connecting Rod, Control Arm, etc.",
        supportText: "Built for fast-turn export business, this collection brings together the parts buyers ask for most often, so distributors and workshops can replenish critical SKUs without slowing down sourcing cycles.",
        image: "https://www.shindary.com/data/img_bucket/10444234.jpg",
        highlights: ["Fast-Moving SKUs", "Passenger Car Coverage", "Export Ready Supply"]
      },
      "hot-models": {
        seoTitle: "All Brand Aftermarket Spare Parts| Hot Models",
        displayTitle: "All Brand Aftermarket Spare Parts",
        keywords: "Aftermarket Spare Parts",
        description: "Since 2008, we have been dedicated to providing our clients with genuine, high-quality aftermarket car parts at competitive prices. Competitive auto spare parts brands include JMC, VW, Tesla, Changan/Chana, Chevrolet, Chery, Greatwall, Byd etc.",
        supportText: "This category focuses on high-demand vehicle platforms and model families that repeatedly show up in distributor purchase plans, helping buyers source by vehicle popularity instead of part type alone.",
        image: "https://www.shindary.com/data/watermark/main/20260311/69b12beaaadde.jpg",
        highlights: ["Multi-Brand Range", "High-Demand Models", "Aftermarket Focus"]
      },
      commercial: {
        seoTitle: "Truck & Bus Line Auto Parts",
        displayTitle: "Truck & Bus Line Auto Parts",
        keywords: "Truck & Bus Line Auto Parts",
        description: "High quality truck & bus line auto parts with factory supply price and OEM/ODM production standard , welcome to select your interested products and contact us for more information!",
        supportText: "For fleet operators, heavy-duty distributors and commercial vehicle service channels, this range concentrates on dependable replacement parts built for daily transport uptime.",
        image: "https://www.shindary.com/data/img_bucket/762D22HH0A+P102.jpg",
        highlights: ["Truck & Bus Lines", "Heavy-Duty Parts", "OEM/ODM Support"]
      },
      "hot-selling": {
        seoTitle: "Hot Selling Auto Spare Parts",
        displayTitle: "Hot Selling Auto Spare Parts",
        keywords: "Hot Selling Auto Spare Parts",
        description: "Hot selling auto spare parts from trusted supplier-Shindary,  more than 15 years design and production experience, sincerely hope to cooperate with you!",
        supportText: "These items reflect recurring market demand and proven reorder performance, making them a practical range for customers who want to balance speed, price and replenishment confidence.",
        image: "https://www.shindary.com/data/img_bucket/57710-17200.jpg",
        highlights: ["Best Sellers", "Stable Reorders", "Trusted Supply"]
      },
      "system-components": {
        seoTitle: "Auto System Components For Sale",
        displayTitle: "Auto System Components For Sale",
        keywords: "Auto System Components For Sale",
        description: "Shindary specializes in a broad selection of automotive system components, serving a global market. Our auto spare parts range encompasses over 40,000 items for both Chinese and international automotive brands.",
        supportText: "From braking and steering to cooling and drivetrain applications, this category is organized for buyers who source by full systems and want depth across interrelated component families.",
        image: "https://www.shindary.com/data/watermark/main/20260409/69d7691c7ecd8.jpg",
        highlights: ["System-Level Sourcing", "40,000+ Parts", "Global Vehicle Coverage"]
      },
      "new-products": {
        seoTitle: "New Auto Spare Parts and Accessories",
        displayTitle: "New Auto Spare Parts and Accessories",
        keywords: "New Auto Spare Parts and Accessories",
        description: "Shindary provides all kinds of new auto spare parts and accessories according to your specific requirements, for any questions, please feel free to contact us!",
        supportText: "Use this collection to review recent additions, newly launched references and incoming lines that can help you expand assortments ahead of broader market demand.",
        image: "https://www.shindary.com/data/watermark/20221103/6363651a6a1b4.jpg",
        highlights: ["Latest Additions", "New References", "Custom Requirement Support"]
      },
      "equipment-parts-for-ev": {
        seoTitle: "Equipment & Parts for EV",
        displayTitle: "Equipment & Parts for EV",
        keywords: "Equipment & Parts for EV",
        description: "High quality equipment & parts for EV with factory supply price and OEM/ODM production standard , welcome to select your interested products and contact us for more information!",
        supportText: "Developed for electric vehicle projects and supporting infrastructure needs, this range helps buyers source EV-related equipment and parts from one export-ready partner.",
        image: "https://www.shindary.com/data/watermark/20221212/6396e7a35a481.jpg",
        highlights: ["EV Supply Range", "Factory Pricing", "OEM/ODM Production"]
      },
      "industrial-machinery-parts": {
        seoTitle: "Industrial Machinery Parts",
        displayTitle: "Industrial Machinery Parts",
        keywords: "Industrial Machinery Parts",
        description: "High quality industrial machinery parts with factory supply price and OEM/ODM production standard , welcome to select your interested products and contact us for more information!",
        supportText: "Beyond automotive applications, this category extends Shindary sourcing capability into machinery part supply for customers who manage multi-industry procurement portfolios.",
        image: "https://www.shindary.com/data/watermark/20210831/612df5225eee2.jpg",
        highlights: ["Industrial Supply", "Cross-Sector Sourcing", "Factory Standard Quality"]
      },
      "modified-parts-accessories": {
        seoTitle: "Modified Parts & Accessories",
        displayTitle: "Modified Parts & Accessories",
        keywords: "Modified Parts & Accessories",
        description: "High quality modified parts & accessories with factory supply price and OEM/ODM production standard , welcome to select your interested products and contact us for more information!",
        supportText: "For buyers targeting customization projects and aftermarket upgrades, this line supports accessory demand with production-oriented supply and export coordination.",
        image: "https://www.shindary.com/data/watermark/20211112/618e3248c72b8.jpg",
        highlights: ["Customization Ready", "Accessory Range", "Aftermarket Upgrades"]
      },
      "supply-chain-equipment": {
        seoTitle: "Supply Chain Equipment",
        displayTitle: "Supply Chain Equipment",
        keywords: "Supply Chain Equipment",
        description: "High quality supply chain equipments with factory supply price and oem/odm production standard , welcome to select your interested products and contact us for more information!",
        supportText: "This category supports procurement teams looking beyond parts alone, with equipment-oriented items that strengthen warehousing, distribution and broader supply chain execution.",
        image: "",
        highlights: ["Supply Chain Tools", "Equipment Support", "OEM/ODM Availability"]
      }
    };
    const categorySlug = computed(() => String(route.params.categorySlug || ""));
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$ShmWBVY064"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: categories, pending: pendingCategories } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/categories`,
      "$pLkja9ygcb"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const topLevelCategories = computed(() => (categories.value || []).filter((category) => !category.parent_id));
    const activeCategory = computed(() => topLevelCategories.value.find((category) => category.slug === categorySlug.value) || null);
    const categoryContent = computed(() => {
      const preset = CATEGORY_PAGE_CONTENT[categorySlug.value];
      if (preset) return preset;
      return {
        seoTitle: activeCategory.value?.name || "Products",
        displayTitle: activeCategory.value?.name || "Products",
        keywords: activeCategory.value?.name || "Auto Spare Parts",
        description: `${activeCategory.value?.name || "This collection"} at Shindary Automotive Parts.`,
        supportText: "Shindary supports international distributors and importers with export-ready sourcing, steady fulfillment and category-focused product coverage.",
        image: "",
        highlights: ["Export Supply", "Category Coverage", "Global Support"]
      };
    });
    if (!activeCategory.value) {
      throw createError({ statusCode: 404, statusMessage: "Product category not found" });
    }
    const { data: products, pending: pendingProducts, error: errorProducts } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/products`,
      {
        query: computed(() => ({ category_id: activeCategory.value.id }))
      },
      "$2l4PDTJonc"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const productItems = computed(() => products.value || []);
    const featuredProducts = computed(() => productItems.value.slice(0, 3));
    const heroImage = computed(() => categoryContent.value.image || (productItems.value[0] ? resolveImageUrl(productItems.value[0].image_url) : ""));
    useHead(() => ({
      title: categoryContent.value.seoTitle,
      meta: [
        { name: "keywords", content: categoryContent.value.keywords },
        { name: "description", content: categoryContent.value.description },
        { property: "og:title", content: categoryContent.value.seoTitle },
        { property: "og:description", content: categoryContent.value.description },
        { property: "og:image", content: heroImage.value || "https://www.shindary.com/data/watermark/main/20260409/69d7691c7ecd8.jpg" },
        { property: "og:url", content: `https://www.shindary.com/${categorySlug.value}/` },
        { property: "og:site_name", content: "Shindary Automotive Parts Co., Ltd." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: categoryContent.value.seoTitle },
        { name: "twitter:description", content: categoryContent.value.description },
        { name: "twitter:image", content: heroImage.value || "https://www.shindary.com/data/watermark/main/20260409/69d7691c7ecd8.jpg" }
      ],
      link: [
        { rel: "canonical", href: `https://www.shindary.com/${categorySlug.value}/` }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f7f7f7] text-slate-900" }, _attrs))}>`);
      if (unref(pendingShell) || unref(pendingCategories) || unref(pendingProducts)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading products</p></div></div>`);
      } else if (unref(shellError) || unref(errorProducts) || !unref(shell) || !activeCategory.value) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">Category unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load this product category.</h1></div></div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_HomeHeader, {
          "nav-items": unref(shell).primary_nav,
          "language-links": unref(shell).language_links,
          contact: unref(shell).contact
        }, null, _parent));
        _push(`<section class="relative overflow-hidden bg-slate-950">`);
        if (heroImage.value) {
          _push(`<div class="absolute inset-0"><img${ssrRenderAttr("src", heroImage.value)}${ssrRenderAttr("alt", categoryContent.value.displayTitle)} class="h-full w-full object-cover"><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(2,6,23,0.78)_42%,rgba(2,6,23,0.38)_100%)]"></div></div>`);
        } else {
          _push(`<div class="absolute inset-0 bg-[linear-gradient(135deg,#0b4b99_0%,#07152b_100%)]"></div>`);
        }
        _push(`<div class="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"><div class="grid gap-8 lg:grid-cols-[minmax(0,1fr),320px] lg:items-end"><div class="max-w-3xl text-white"><p class="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">${ssrInterpolate(categoryContent.value.keywords)}</p><h1 class="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">${ssrInterpolate(categoryContent.value.displayTitle)}</h1><p class="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">${ssrInterpolate(categoryContent.value.description)}</p><p class="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">${ssrInterpolate(categoryContent.value.supportText)}</p><div class="mt-6 flex flex-wrap gap-3"><!--[-->`);
        ssrRenderList(categoryContent.value.highlights, (highlight) => {
          _push(`<span class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">${ssrInterpolate(highlight)}</span>`);
        });
        _push(`<!--]--></div></div><div class="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur"><p class="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">In this collection</p><ul class="mt-5 space-y-3"><!--[-->`);
        ssrRenderList(featuredProducts.value, (product) => {
          _push(`<li class="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90">${ssrInterpolate(product.name)}</li>`);
        });
        _push(`<!--]--></ul>`);
        if (featuredProducts.value.length === 0) {
          _push(`<p class="mt-5 text-sm leading-7 text-white/70"> Product details for this category are loading into the migrated catalog and will appear here as inventory is updated. </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "mt-6 inline-flex rounded-full bg-[#e83146] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c71f33]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Request Quote `);
            } else {
              return [
                createTextVNode(" Request Quote ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></section><div class="border-y border-slate-200 bg-white/80"><div class="mx-auto max-w-7xl px-4 py-3 text-sm text-slate-500 sm:px-6 lg:px-8">`);
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
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">${ssrInterpolate(activeCategory.value.name)}</span></div></div><main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="grid gap-8 lg:grid-cols-[280px,1fr]"><aside class="lg:sticky lg:top-28 lg:self-start"><div class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"><div class="bg-[#0b4b99] px-5 py-4 text-base font-semibold uppercase tracking-[0.16em] text-white">Products List</div><div class="divide-y divide-slate-100">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "flex items-center justify-between px-5 py-3 text-sm text-slate-600 transition hover:bg-slate-50"
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
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: category.id,
            to: `/${category.slug}`,
            class: ["flex items-center justify-between px-5 py-3 text-sm transition", activeCategory.value.id === category.id ? "bg-slate-50 font-semibold text-[#0b4b99]" : "text-slate-600 hover:bg-slate-50"]
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
        _push(`<!--]--></div></div></aside><section><div class="rounded-sm border border-slate-200 bg-white p-6 text-sm leading-8 text-slate-600 shadow-sm lg:p-8"><h2 class="text-2xl font-semibold text-slate-900">${ssrInterpolate(activeCategory.value.name)} Solutions</h2><p class="mt-4">${ssrInterpolate(categoryContent.value.description)}</p><p class="mt-4">${ssrInterpolate(categoryContent.value.supportText)}</p><div class="mt-6 flex flex-wrap gap-3"><!--[-->`);
        ssrRenderList(categoryContent.value.highlights, (highlight) => {
          _push(`<span class="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">${ssrInterpolate(highlight)}</span>`);
        });
        _push(`<!--]--></div></div><div class="mt-6 flex items-center justify-between border-b border-slate-200 pb-3"><h1 class="text-2xl font-semibold text-slate-900">${ssrInterpolate(activeCategory.value.name)}</h1><p class="text-sm text-slate-500">${ssrInterpolate(productItems.value.length)} items</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[categorySlug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_categorySlug_-adSQl_Zs.js.map
