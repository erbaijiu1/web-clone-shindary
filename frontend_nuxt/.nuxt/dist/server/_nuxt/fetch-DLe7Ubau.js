import { _ as __nuxt_component_0 } from "./nuxt-link-DCsvM-WK.js";
import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext, defineComponent, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, toValue, onServerPrefetch, nextTick, unref, toRef, reactive, watch } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { hash } from "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/ohash/dist/index.mjs";
import { isPlainObject } from "@vue/shared";
import { b as useNuxtApp, d as asyncDataDefaults, c as createError, f as fetchDefaults } from "../server.mjs";
import { debounce } from "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com/web_transfer/frontend_nuxt/node_modules/defu/dist/defu.mjs";
const _imports_0 = publicAssetsURL("/migrated/shared/logo.png");
const _sfc_main$1 = {
  __name: "HomeHeader",
  __ssrInlineRender: true,
  props: {
    navItems: {
      type: Array,
      required: true
    },
    languageLinks: {
      type: Array,
      required: true
    },
    contact: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const mobileOpen = ref(false);
    const phoneHref = computed(() => `tel:${props.contact.phone.replace(/\s+/g, "")}`);
    const emailHref = computed(() => `mailto:${props.contact.email}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-t-4 border-[#0b4b99] bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur" }, _attrs))}><div class="bg-slate-950 text-slate-200"><div class="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8"><div class="flex flex-wrap items-center gap-3"><a${ssrRenderAttr("href", phoneHref.value)} class="transition hover:text-white">${ssrInterpolate(__props.contact.phone)}</a><span class="hidden h-3 w-px bg-white/20 sm:block"></span><a${ssrRenderAttr("href", emailHref.value)} class="transition hover:text-white">${ssrInterpolate(__props.contact.email)}</a></div><p class="max-w-xl truncate text-slate-400">${ssrInterpolate(__props.contact.address)}</p></div></div><div class="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between gap-6 py-3 lg:gap-8 lg:py-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Shindary Automotive Parts" class="h-12 w-auto lg:h-[74px]"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Shindary Automotive Parts",
                class: "h-12 w-auto lg:h-[74px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6 2xl:gap-8"><!--[-->`);
      ssrRenderList(__props.navItems, (item) => {
        _push(`<div class="group relative shrink-0">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.href,
          class: "flex shrink-0 items-center gap-1.5 whitespace-nowrap px-0 py-2 text-[13px] font-bold uppercase tracking-[0.1em] text-slate-800 transition hover:text-[#e83146] xl:gap-2 xl:text-[14px] xl:tracking-[0.12em] 2xl:text-[15px] 2xl:tracking-[0.14em]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              if (item.children.length) {
                _push2(`<span class="ml-1 text-[12px] font-semibold text-slate-400"${_scopeId}>+</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("span", null, toDisplayString(item.label), 1),
                item.children.length ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "ml-1 text-[12px] font-semibold text-slate-400"
                }, "+")) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.children.length) {
          _push(`<div class="pointer-events-none absolute left-0 top-full z-20 min-w-[220px] pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100"><div class="space-y-1 rounded-sm border border-slate-200 bg-white py-2 shadow-2xl shadow-slate-900/10"><!--[-->`);
          ssrRenderList(item.children, (child) => {
            _push(`<!--[-->`);
            if (child.external) {
              _push(`<a${ssrRenderAttr("href", child.href)} target="_blank" rel="noreferrer" class="block px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#0b4b99]">${ssrInterpolate(child.label)}</a>`);
            } else {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: child.href,
                class: "block px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#0b4b99]"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(child.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(child.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav><div class="hidden shrink-0 items-center gap-2 xl:flex"><!--[-->`);
      ssrRenderList(__props.languageLinks, (item) => {
        _push(`<!--[-->`);
        if (item.external) {
          _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noreferrer" class="${ssrRenderClass([item.active ? "border-[#0b4b99] bg-[#0b4b99] text-white" : "border-slate-200 text-slate-600 hover:border-slate-300", "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition"])}">${ssrInterpolate(item.label)}</a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href,
            class: ["rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition", item.active ? "border-[#0b4b99] bg-[#0b4b99] text-white" : "border-slate-200 text-slate-600 hover:border-slate-300"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><a href="mailto:overseas@shindary.com" class="rounded-full bg-[#e83146] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#c71f33]"> Inquiry </a></div><button type="button" class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 lg:hidden"><span class="sr-only">Toggle navigation</span><span class="space-y-1.5"><span class="block h-0.5 w-5 bg-current"></span><span class="block h-0.5 w-5 bg-current"></span><span class="block h-0.5 w-5 bg-current"></span></span></button></div>`);
      if (mobileOpen.value) {
        _push(`<div class="border-t border-slate-200 py-4 lg:hidden"><div class="space-y-3"><!--[-->`);
        ssrRenderList(__props.navItems, (item) => {
          _push(`<div class="rounded-3xl border border-slate-200 px-4 py-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href,
            class: "block text-sm font-semibold uppercase tracking-[0.18em] text-slate-800"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (item.children.length) {
            _push(`<div class="mt-3 grid gap-2 border-t border-slate-100 pt-3"><!--[-->`);
            ssrRenderList(item.children, (child) => {
              _push(`<!--[-->`);
              if (child.external) {
                _push(`<a${ssrRenderAttr("href", child.href)} target="_blank" rel="noreferrer" class="text-sm text-slate-500">${ssrInterpolate(child.label)}</a>`);
              } else {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  to: child.href,
                  class: "text-sm text-slate-500"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(child.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(child.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--><div class="flex flex-wrap gap-2 pt-2"><!--[-->`);
        ssrRenderList(__props.languageLinks, (item) => {
          _push(`<!--[-->`);
          if (item.external) {
            _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noreferrer" class="${ssrRenderClass([item.active ? "border-[#0b4b99] bg-[#0b4b99] text-white" : "border-slate-200 text-slate-600", "rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em]"])}">${ssrInterpolate(item.label)}</a>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.href,
              class: ["rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em]", item.active ? "border-[#0b4b99] bg-[#0b4b99] text-white" : "border-slate-200 text-slate-600"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "HomeFooter",
  __ssrInlineRender: true,
  props: {
    contact: {
      type: Object,
      required: true
    },
    footerGroups: {
      type: Array,
      required: true
    },
    socialLinks: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-slate-950 text-white" }, _attrs))}><div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,75,153,0.3),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(232,49,70,0.2),transparent_24%)]"></div><div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div class="grid gap-10 lg:grid-cols-[1.25fr,1fr,1fr,1fr]"><div><img${ssrRenderAttr("src", _imports_0)} alt="Shindary" class="h-14 w-auto rounded-2xl bg-white p-2"><h2 class="mt-6 text-2xl font-semibold">${ssrInterpolate(__props.contact.company)}</h2><p class="mt-4 max-w-md text-sm leading-7 text-slate-300">${ssrInterpolate(__props.contact.address)}</p><div class="mt-6 space-y-2 text-sm text-slate-300"><p>Tel: ${ssrInterpolate(__props.contact.phone)}</p><p>Fax: ${ssrInterpolate(__props.contact.fax)}</p><p>Email: ${ssrInterpolate(__props.contact.email)}</p></div></div><!--[-->`);
      ssrRenderList(__props.footerGroups, (group) => {
        _push(`<div><h3 class="text-lg font-semibold uppercase tracking-[0.18em] text-white/85">${ssrInterpolate(group.title)}</h3><div class="mt-5 space-y-3 text-sm text-slate-300"><!--[-->`);
        ssrRenderList(group.links, (link) => {
          _push(`<!--[-->`);
          if (link.external) {
            _push(`<a${ssrRenderAttr("href", link.href)} target="_blank" rel="noreferrer" class="block transition hover:text-white">${ssrInterpolate(link.label)}</a>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: link.href,
              class: "block transition hover:text-white"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(link.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(link.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"><div class="flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(__props.socialLinks, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" rel="noreferrer" class="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-white/30 hover:text-white">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div><p class="text-sm text-slate-400">Copyright © Shindary Automotive Parts Co., Ltd. All Rights Reserved</p></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HomeFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  Object.defineProperties(asyncDataPromise, {
    then: { enumerable: true, value: asyncDataPromise.then.bind(asyncDataPromise) },
    catch: { enumerable: true, value: asyncDataPromise.catch.bind(asyncDataPromise) },
    finally: { enumerable: true, value: asyncDataPromise.finally.bind(asyncDataPromise) }
  });
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = !import.meta.prerender || !nuxtApp.ssrContext?.["~sharedPrerenderCache"] ? _handler : (nuxtApp2, options2) => {
    const value = nuxtApp2.ssrContext["~sharedPrerenderCache"].get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp2.runWithContext(() => _handler(nuxtApp2, options2)));
    nuxtApp2.ssrContext["~sharedPrerenderCache"].set(key, promise);
    return promise;
  };
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        if (nuxtApp._asyncDataPromises[key] === promise) {
          {
            asyncData.pending.value = false;
          }
          delete nuxtApp._asyncDataPromises[key];
        }
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const entries = [];
      for (const entry of value.entries()) {
        const [key, val] = entry;
        entries.push([key, val instanceof File ? `${val.name}:${val.size}:${val.lastModified}` : val]);
      }
      segments.push(hash(entries));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
export {
  _sfc_main$1 as _,
  _sfc_main as a,
  useFetch as u
};
//# sourceMappingURL=fetch-DLe7Ubau.js.map
