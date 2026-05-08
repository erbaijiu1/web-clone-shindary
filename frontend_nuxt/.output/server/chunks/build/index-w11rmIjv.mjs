import { _ as __nuxt_component_0 } from './nuxt-link-DCsvM-WK.mjs';
import { u as useFetch, _ as _sfc_main$1, a as _sfc_main$2 } from './fetch-DLe7Ubau.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, resolveDynamicComponent, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './v3-BIrM3qgW.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
    const nuxtLinkComponent = __nuxt_component_0;
    const { data: shell, pending: pendingShell, error: shellError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/home`,
      "$3jN3nTVyw_"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: aboutPage, pending: pendingPage, error: pageError } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${config.public.apiBase}/${config.public.siteCode}/api/v1/public/about`,
      "$RhPah9ciWy"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    useHead(() => {
      var _a;
      const seo = (_a = aboutPage.value) == null ? void 0 : _a.seo;
      if (!seo) {
        return { title: "About Us - Shindary Automotive Parts Co., Ltd." };
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
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><div class="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b4b99]"></div><p class="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Loading about page</p></div></div>`);
      } else if (unref(shellError) || unref(pageError) || !unref(shell) || !unref(aboutPage)) {
        _push(`<div class="grid min-h-screen place-items-center px-6"><div class="max-w-lg rounded-[2rem] border border-red-200 bg-white p-10 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"><p class="text-sm font-semibold uppercase tracking-[0.22em] text-[#e83146]">About page unavailable</p><h1 class="mt-4 text-3xl font-semibold text-slate-900">Unable to load the migrated about page.</h1></div></div>`);
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
        _push(`<span class="px-2 text-slate-300">&gt;&gt;</span><span class="font-medium text-slate-900">About Us</span></div></div><main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"><div class="grid gap-8 lg:grid-cols-[280px,1fr]"><aside class="lg:sticky lg:top-28 lg:self-start"><div class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"><div class="bg-[#0b4b99] px-5 py-4 text-base font-semibold uppercase tracking-[0.16em] text-white">About Us</div><div class="divide-y divide-slate-100"><!--[-->`);
        ssrRenderList(unref(aboutPage).sidebar_links, (link) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.active ? unref(nuxtLinkComponent) : "div"), mergeProps({
            key: link.label
          }, { ref_for: true }, link.active ? { to: "/about-us" } : {}, {
            class: ["flex items-center justify-between px-5 py-3 text-sm transition", link.active ? "bg-slate-50 font-semibold text-[#0b4b99]" : "text-slate-600"]
          }), {
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
          }), _parent);
        });
        _push(`<!--]--></div></div></aside><section class="space-y-8"><div class="rounded-sm border border-slate-200 bg-white p-8 shadow-sm lg:p-10"><div class="border-b border-slate-200 pb-4"><p class="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b4b99]">COMPANY PROFILE</p></div><div class="mt-5 space-y-5 text-base leading-8 text-slate-600"><!--[-->`);
        ssrRenderList(unref(aboutPage).intro, (paragraph) => {
          _push(`<p>${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div><div class="mt-8 space-y-2 border-l-4 border-[#0b4b99] bg-slate-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-800"><!--[-->`);
        ssrRenderList(unref(aboutPage).brand_lines, (line) => {
          _push(`<div>${ssrInterpolate(line)}</div>`);
        });
        _push(`<!--]--></div></div><!--[-->`);
        ssrRenderList(unref(aboutPage).sections, (section) => {
          _push(`<article class="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"><div class="p-8 lg:p-10"><div class="border-b border-slate-200 pb-4"><h2 class="text-2xl font-semibold uppercase tracking-[0.08em] text-slate-900">${ssrInterpolate(section.title)}</h2></div><div class="mt-6 space-y-5 text-base leading-8 text-slate-600"><!--[-->`);
          ssrRenderList(section.body, (paragraph) => {
            _push(`<p>${ssrInterpolate(paragraph)}</p>`);
          });
          _push(`<!--]--></div>`);
          if (section.image) {
            _push(`<div class="mt-8"><img${ssrRenderAttr("src", section.image)}${ssrRenderAttr("alt", section.image_alt || section.title)} class="w-full rounded-sm border border-slate-200 object-cover"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></section></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-w11rmIjv.mjs.map
