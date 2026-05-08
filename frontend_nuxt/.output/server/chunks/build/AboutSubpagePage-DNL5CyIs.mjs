import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './fetch-DLe7Ubau.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3-BIrM3qgW.mjs';

const _sfc_main = {
  __name: "AboutSubpagePage",
  __ssrInlineRender: true,
  props: {
    pageSlug: {
      type: String,
      required: true
    },
    fallbackTitle: {
      type: String,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const config = useRuntimeConfig();
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$0cRC3ON6jw"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: pageData, pending: pendingPage, error: pageError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/about-subpages/${props.pageSlug}`,
      "$lqjdJnr93_"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      var _a;
      const seo = (_a = pageData.value) == null ? void 0 : _a.seo;
      if (!seo) {
        return { title: `${props.fallbackTitle} - Shindary Automotive Parts Co., Ltd.` };
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
      var _a, _b, _c;
      const _component_HomeHeader = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HomeFooter = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#f7f7f7] text-slate-900" }, _attrs))}>`);
      if (unref(pendingShell) || unref(pendingPage)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading ${ssrInterpolate(__props.fallbackTitle.toLowerCase())}</p></div></div>`);
      } else if (unref(shellError) || unref(pageError) || !unref(shell) || !unref(pageData)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">${ssrInterpolate(__props.fallbackTitle)} unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated ${ssrInterpolate(__props.fallbackTitle.toLowerCase())} page.</h1></div></div>`);
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
          to: "/about-us",
          class: "hover:text-[#0b4b99]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About Us`);
            } else {
              return [
                createTextVNode("About Us")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">${ssrInterpolate(unref(pageData).page_title)}</span></div></div><main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="grid gap-8 lg:grid-cols-[280px,1fr]"><aside class="lg:sticky lg:top-28 lg:self-start"><div class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"><div class="bg-[#0b4b99] px-5 py-4 text-base font-semibold uppercase tracking-[0.16em] text-white">About Us</div><div class="divide-y divide-slate-100"><!--[-->`);
        ssrRenderList(unref(pageData).sidebar_links, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.label,
            to: link.href,
            class: ["flex items-center justify-between px-5 py-3 text-sm transition", link.active ? "bg-slate-50 font-semibold text-[#0b4b99]" : "text-slate-600 hover:bg-slate-50"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(link.label)}</span><span class="text-slate-300"${_scopeId}>&gt;</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(link.label), 1),
                  createVNode("span", { class: "text-slate-300" }, ">")
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></aside><section class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10"><div class="border-b border-slate-200 pb-4"><h1 class="text-2xl font-semibold uppercase tracking-[0.08em] text-slate-900">${ssrInterpolate(unref(pageData).content_title)}</h1></div>`);
        if (unref(pageData).content_html) {
          _push(`<div class="prose prose-slate mt-6 max-w-none prose-img:rounded-sm prose-img:border prose-img:border-slate-200 prose-img:shadow-none">${(_a = unref(pageData).content_html) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = unref(pageData).gallery_sections) == null ? void 0 : _b.length) {
          _push(`<div class="mt-10 space-y-10"><!--[-->`);
          ssrRenderList(unref(pageData).gallery_sections, (section) => {
            _push(`<section class="space-y-5"><div class="border-b border-slate-200 pb-3"><h2 class="text-xl font-semibold text-slate-900">${ssrInterpolate(section.title)}</h2></div><div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
            ssrRenderList(section.images, (image) => {
              _push(`<figure class="overflow-hidden rounded-sm border border-slate-200 bg-slate-50"><img${ssrRenderAttr("src", image.image)}${ssrRenderAttr("alt", image.alt)} class="h-60 w-full object-cover" loading="lazy"><figcaption class="border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">${ssrInterpolate(image.caption)}</figcaption></figure>`);
            });
            _push(`<!--]--></div></section>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = unref(pageData).video_items) == null ? void 0 : _c.length) {
          _push(`<div class="mt-10 space-y-8"><!--[-->`);
          ssrRenderList(unref(pageData).video_items, (video) => {
            _push(`<article class="overflow-hidden rounded-sm border border-slate-200 bg-slate-50"><div class="relative pt-[56.25%]"><iframe${ssrRenderAttr("src", video.embed_url)}${ssrRenderAttr("title", video.title)} class="absolute inset-0 h-full w-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="space-y-3 bg-white px-5 py-4"><h2 class="text-xl font-semibold text-slate-900">${ssrInterpolate(video.title)}</h2>`);
            if (video.description) {
              _push(`<p class="text-sm leading-7 text-slate-600">${ssrInterpolate(video.description)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (video.external_url) {
              _push(`<a${ssrRenderAttr("href", video.external_url)} target="_blank" rel="noreferrer" class="inline-flex items-center text-sm font-semibold text-[#0b4b99] hover:text-[#08386f]"> Watch on YouTube </a>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></article>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/AboutSubpagePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AboutSubpagePage-DNL5CyIs.mjs.map
