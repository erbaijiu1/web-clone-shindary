import { u as useFetch, _ as _sfc_main$1$1, a as _sfc_main$3 } from './fetch-DLe7Ubau.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
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

const _sfc_main$2 = {
  __name: "HomeHero",
  __ssrInlineRender: true,
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const activeIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-slate-950" }, _attrs))}><div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(11,75,153,0.45),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(232,49,70,0.35),transparent_35%)]"></div><div class="relative h-[52vh] min-h-[420px] max-h-[760px]"><!--[-->`);
      ssrRenderList(__props.slides, (slide, index2) => {
        _push(`<article class="${ssrRenderClass([index2 === activeIndex.value ? "opacity-100" : "pointer-events-none opacity-0", "absolute inset-0 transition-opacity duration-700"])}"><picture><source${ssrRenderAttr("srcset", slide.mobile_image || slide.image)} media="(max-width: 767px)"><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.alt)} class="h-full w-full object-cover"></picture><div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.45)_45%,rgba(2,6,23,0.12)_100%)]"></div><div class="absolute inset-x-0 bottom-0 top-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8"><div class="max-w-2xl text-white"><p class="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">China Auto Parts Expert</p><h1 class="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(slide.title)}</h1><p class="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg"> Reliable supply for passenger vehicles, commercial fleets, and aftermarket distribution across more than 80 export markets. </p><div class="mt-8 flex flex-wrap gap-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: slide.href,
          class: "rounded-full bg-[#e83146] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c71f33]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Explore `);
            } else {
              return [
                createTextVNode(" Explore ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact Us `);
            } else {
              return [
                createTextVNode(" Contact Us ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></article>`);
      });
      _push(`<!--]--></div><div class="pointer-events-none absolute inset-x-0 bottom-8 mx-auto flex max-w-7xl items-end justify-between px-4 sm:px-6 lg:px-8"><div class="pointer-events-auto flex items-center gap-3"><button type="button" class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"><span class="sr-only">Previous slide</span><span aria-hidden="true">\u2190</span></button><button type="button" class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"><span class="sr-only">Next slide</span><span aria-hidden="true">\u2192</span></button></div><div class="pointer-events-auto hidden gap-3 md:flex"><!--[-->`);
      ssrRenderList(__props.slides, (slide, index2) => {
        _push(`<button type="button" class="group flex items-center gap-3"><span class="${ssrRenderClass([index2 === activeIndex.value ? "w-12 bg-white" : "w-2.5 bg-white/45 group-hover:bg-white/70", "h-2.5 rounded-full transition-all"])}"></span><span class="hidden text-xs uppercase tracking-[0.2em] text-white/65 lg:block">${ssrInterpolate(index2 + 1)}</span></button>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "HomeProductTabs",
  __ssrInlineRender: true,
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(0);
    const activeTab = computed(() => props.tabs[activeIndex.value] || { items: [] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8" }, _attrs))}><div class="flex flex-col gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between"><div><p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b4b99]">Catalog Focus</p><h2 class="mt-2 text-3xl font-semibold uppercase tracking-[0.08em] text-slate-900">Our Products</h2></div><div class="flex gap-2 overflow-x-auto pb-1"><!--[-->`);
      ssrRenderList(__props.tabs, (tab, index2) => {
        _push(`<button type="button" class="${ssrRenderClass([index2 === activeIndex.value ? "bg-[#0b4b99] text-white shadow-lg shadow-blue-900/20" : "bg-slate-100 text-slate-600 hover:bg-slate-200", "rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition"])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(activeTab.value.items, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.href,
          to: item.href,
          class: "group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:border-[#0b4b99] hover:bg-white hover:shadow-[0_20px_40px_rgba(11,75,153,0.12)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex aspect-[4/3] items-center justify-center bg-white p-5"${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="max-h-44 w-full object-contain transition duration-500 group-hover:scale-105"${_scopeId}></div><div class="space-y-3 p-5"${_scopeId}><p class="line-clamp-2 min-h-[3.5rem] text-sm font-semibold leading-6 text-slate-800"${_scopeId}>${ssrInterpolate(item.title)}</p><span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e83146]"${_scopeId}> View Detail <span aria-hidden="true"${_scopeId}>\u2192</span></span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex aspect-[4/3] items-center justify-center bg-white p-5" }, [
                  createVNode("img", {
                    src: item.image,
                    alt: item.title,
                    class: "max-h-44 w-full object-contain transition duration-500 group-hover:scale-105"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "space-y-3 p-5" }, [
                  createVNode("p", { class: "line-clamp-2 min-h-[3.5rem] text-sm font-semibold leading-6 text-slate-800" }, toDisplayString(item.title), 1),
                  createVNode("span", { class: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e83146]" }, [
                    createTextVNode(" View Detail "),
                    createVNode("span", { "aria-hidden": "true" }, "\u2192")
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeProductTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    ref(null);
    const { data: homeData, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$zUr6vLGk-g"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      var _a;
      const seo = (_a = homeData.value) == null ? void 0 : _a.seo;
      if (!seo) {
        return {
          title: "Shindary Automotive Parts Co., Ltd."
        };
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
      const _component_HomeHeader = _sfc_main$1$1;
      const _component_HomeHero = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeProductTabs = _sfc_main$1;
      const _component_HomeFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#edf2f7_36%,#ffffff_100%)] text-slate-900" }, _attrs))} data-v-dfba7406>`);
      if (unref(pending)) {
        _push(`<div class="grid min-h-screen place-items-center px-6" data-v-dfba7406><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]" data-v-dfba7406><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]" data-v-dfba7406></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500" data-v-dfba7406>Loading homepage</p></div></div>`);
      } else if (unref(error) || !unref(homeData)) {
        _push(`<div class="grid min-h-screen place-items-center px-6" data-v-dfba7406><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]" data-v-dfba7406><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]" data-v-dfba7406>Homepage API unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900" data-v-dfba7406>Unable to render the migrated homepage.</h1><p class="mt-4 text-base leading-7 text-slate-600" data-v-dfba7406>Start the FastAPI service and retry the page to load the structured homepage payload.</p></div></div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_HomeHeader, {
          "nav-items": unref(homeData).primary_nav,
          "language-links": unref(homeData).language_links,
          contact: unref(homeData).contact
        }, null, _parent));
        _push(ssrRenderComponent(_component_HomeHero, {
          slides: unref(homeData).hero_slides
        }, null, _parent));
        _push(`<main class="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16" data-v-dfba7406><section class="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start" data-v-dfba7406><div class="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]" data-v-dfba7406><p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#7fb4ff]" data-v-dfba7406>${ssrInterpolate(unref(homeData).profile.title)}</p><h2 class="mt-4 max-w-xl text-4xl font-semibold leading-tight" data-v-dfba7406>Built for export-scale supply and fast product response.</h2><p class="mt-6 max-w-2xl text-base leading-8 text-slate-300" data-v-dfba7406>${ssrInterpolate(unref(homeData).profile.summary)}</p><div class="mt-8 flex flex-wrap gap-4" data-v-dfba7406>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about-us",
          class: "rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Company Profile `);
            } else {
              return [
                createTextVNode(" Company Profile ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse Products `);
            } else {
              return [
                createTextVNode(" Browse Products ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3" data-v-dfba7406><!--[-->`);
        ssrRenderList(unref(homeData).profile.features, (feature) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: feature.title,
            to: feature.href,
            class: "group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0b4b99]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative h-20 w-20 overflow-hidden rounded-3xl bg-slate-50" data-v-dfba7406${_scopeId}><img${ssrRenderAttr("src", feature.icon)}${ssrRenderAttr("alt", feature.title)} class="absolute inset-0 h-full w-full object-contain p-3 transition duration-300 group-hover:opacity-0" data-v-dfba7406${_scopeId}><img${ssrRenderAttr("src", feature.hover_icon)}${ssrRenderAttr("alt", feature.title)} class="absolute inset-0 h-full w-full object-contain p-3 opacity-0 transition duration-300 group-hover:opacity-100" data-v-dfba7406${_scopeId}></div><h3 class="mt-6 text-xl font-semibold text-slate-900" data-v-dfba7406${_scopeId}>${ssrInterpolate(feature.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600" data-v-dfba7406${_scopeId}>${ssrInterpolate(feature.description)}</p>`);
              } else {
                return [
                  createVNode("div", { class: "relative h-20 w-20 overflow-hidden rounded-3xl bg-slate-50" }, [
                    createVNode("img", {
                      src: feature.icon,
                      alt: feature.title,
                      class: "absolute inset-0 h-full w-full object-contain p-3 transition duration-300 group-hover:opacity-0"
                    }, null, 8, ["src", "alt"]),
                    createVNode("img", {
                      src: feature.hover_icon,
                      alt: feature.title,
                      class: "absolute inset-0 h-full w-full object-contain p-3 opacity-0 transition duration-300 group-hover:opacity-100"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("h3", { class: "mt-6 text-xl font-semibold text-slate-900" }, toDisplayString(feature.title), 1),
                  createVNode("p", { class: "mt-3 text-sm leading-7 text-slate-600" }, toDisplayString(feature.description), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></section><section class="mt-12 rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8" data-v-dfba7406><div class="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between" data-v-dfba7406><div data-v-dfba7406><p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b4b99]" data-v-dfba7406>Service Coverage</p><h2 class="mt-2 text-3xl font-semibold uppercase tracking-[0.08em] text-slate-900" data-v-dfba7406>${ssrInterpolate(unref(homeData).brands.title)}</h2></div><div class="flex items-center gap-3" data-v-dfba7406><button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50" data-v-dfba7406><span aria-hidden="true" data-v-dfba7406>\u2190</span></button><button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50" data-v-dfba7406><span aria-hidden="true" data-v-dfba7406>\u2192</span></button></div></div><div class="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2" data-v-dfba7406><!--[-->`);
        ssrRenderList(unref(homeData).brands.items, (brand) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: brand.href,
            to: brand.href,
            class: "flex min-w-[180px] shrink-0 snap-start flex-col items-center justify-center rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-8 transition duration-300 hover:-translate-y-1 hover:border-[#0b4b99] hover:bg-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", brand.image)}${ssrRenderAttr("alt", brand.title)} class="h-14 w-auto object-contain" data-v-dfba7406${_scopeId}><p class="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-700" data-v-dfba7406${_scopeId}>${ssrInterpolate(brand.title)}</p>`);
              } else {
                return [
                  createVNode("img", {
                    src: brand.image,
                    alt: brand.title,
                    class: "h-14 w-auto object-contain"
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", { class: "mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-700" }, toDisplayString(brand.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></section><section class="mt-12" data-v-dfba7406>`);
        _push(ssrRenderComponent(_component_HomeProductTabs, {
          tabs: unref(homeData).product_tabs
        }, null, _parent));
        _push(`</section><section class="mt-12 grid gap-8 lg:grid-cols-[0.95fr,1.05fr]" data-v-dfba7406><div class="rounded-[2rem] bg-[linear-gradient(135deg,#0b4b99_0%,#082f63_100%)] p-8 text-white shadow-[0_24px_80px_rgba(11,75,153,0.22)]" data-v-dfba7406><p class="text-sm font-semibold uppercase tracking-[0.28em] text-white/70" data-v-dfba7406>Direct Contact</p><h2 class="mt-3 text-3xl font-semibold" data-v-dfba7406>Ready to source auto parts at scale?</h2><p class="mt-5 text-base leading-8 text-white/80" data-v-dfba7406>Talk with the export team about product lines, package standards, container loading, and market-specific quotation support.</p><div class="mt-8 space-y-4 text-sm text-white/90" data-v-dfba7406><p data-v-dfba7406>${ssrInterpolate(unref(homeData).contact.address)}</p><p data-v-dfba7406>Phone: ${ssrInterpolate(unref(homeData).contact.phone)}</p><p data-v-dfba7406>Email: ${ssrInterpolate(unref(homeData).contact.email)}</p></div><div class="mt-8 flex flex-wrap gap-4" data-v-dfba7406><a${ssrRenderAttr("href", `mailto:${unref(homeData).contact.email}`)} class="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0b4b99] transition hover:bg-slate-100" data-v-dfba7406>Email Us</a><a${ssrRenderAttr("href", `https://api.whatsapp.com/send?phone=${unref(homeData).contact.whatsapp[0].replace("+", "")}`)} target="_blank" rel="noreferrer" class="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10" data-v-dfba7406>WhatsApp</a></div></div><div class="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8" data-v-dfba7406><div class="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between" data-v-dfba7406><div data-v-dfba7406><p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b4b99]" data-v-dfba7406>Insights</p><h2 class="mt-2 text-3xl font-semibold uppercase tracking-[0.08em] text-slate-900" data-v-dfba7406>${ssrInterpolate(unref(homeData).news.title)}</h2></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(homeData).news.href,
          class: "text-sm font-semibold uppercase tracking-[0.16em] text-[#e83146]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View All`);
            } else {
              return [
                createTextVNode("View All")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-8 grid gap-5" data-v-dfba7406><!--[-->`);
        ssrRenderList(unref(homeData).news.items, (article) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: article.href,
            to: article.href,
            class: "group grid gap-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:border-[#0b4b99] hover:bg-white sm:grid-cols-[160px,1fr]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="h-full min-h-[140px] w-full rounded-[1.1rem] object-cover" data-v-dfba7406${_scopeId}><div data-v-dfba7406${_scopeId}><h3 class="text-lg font-semibold leading-7 text-slate-900 transition group-hover:text-[#0b4b99]" data-v-dfba7406${_scopeId}>${ssrInterpolate(article.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600" data-v-dfba7406${_scopeId}>${ssrInterpolate(article.excerpt)}</p><span class="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e83146]" data-v-dfba7406${_scopeId}> Read More <span aria-hidden="true" data-v-dfba7406${_scopeId}>\u2192</span></span></div>`);
              } else {
                return [
                  createVNode("img", {
                    src: article.image,
                    alt: article.title,
                    class: "h-full min-h-[140px] w-full rounded-[1.1rem] object-cover"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-semibold leading-7 text-slate-900 transition group-hover:text-[#0b4b99]" }, toDisplayString(article.title), 1),
                    createVNode("p", { class: "mt-3 text-sm leading-7 text-slate-600" }, toDisplayString(article.excerpt), 1),
                    createVNode("span", { class: "mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e83146]" }, [
                      createTextVNode(" Read More "),
                      createVNode("span", { "aria-hidden": "true" }, "\u2192")
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section></main>`);
        _push(ssrRenderComponent(_component_HomeFooter, {
          contact: unref(homeData).contact,
          "footer-groups": unref(homeData).footer_groups,
          "social-links": unref(homeData).social_links
        }, null, _parent));
        _push(`<div class="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 md:flex" data-v-dfba7406><!--[-->`);
        ssrRenderList(unref(homeData).floating_actions, (action) => {
          _push(`<a${ssrRenderAttr("href", action.href)}${ssrRenderAttr("target", action.external ? "_blank" : void 0)}${ssrRenderAttr("rel", action.external ? "noreferrer" : void 0)} class="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:border-[#0b4b99] hover:text-[#0b4b99]" data-v-dfba7406>${ssrInterpolate(action.label)}</a>`);
        });
        _push(`<!--]--><button type="button" class="rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20" data-v-dfba7406> Top </button></div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfba7406"]]);

export { index as default };
//# sourceMappingURL=index-C1iDZdn2.mjs.map
