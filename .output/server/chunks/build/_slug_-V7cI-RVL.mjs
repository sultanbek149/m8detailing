import { _ as __nuxt_component_1 } from './Container-CqUBYfII.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-DUubUPpH.mjs';
import { defineComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { g as getFeatures } from './features-hJsTKfv0.mjs';
import { u as useInfo } from './phone-t6m1obiG.mjs';
import { u as useSeoMeta } from './index--DdJWkO-.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@unhead/shared';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'unhead';
import 'maska';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const info = useInfo();
    const route = useRoute();
    const feature = getFeatures(route.params.slug);
    useSeoMeta({
      title: `\u0423\u0441\u043B\u0443\u0433\u0438 - ${feature.title} \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F`,
      description: `\u0412c\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442 \u043F\u043E - ${feature.title}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_1;
      const _component_LandingSectionhead = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(feature).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(feature).title), 1)
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(feature).description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(feature).description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"${_scopeId}><div${_scopeId}><h2 class="font-medium text-2xl text-gray-400"${_scopeId}>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</h2><div class="mt-5 text-slate-500"${_scopeId}><div class="flex flex-col gap-3"${_scopeId}>${(_a = unref(feature).content) != null ? _a : ""}</div></div><p class="text-slate-600 mt-2 mb-5 leading-relaxed text-[16px]"${_scopeId}>${ssrInterpolate(unref(feature).price)}</p><a${ssrRenderAttr("href", unref(info).wsLink)} class="bg-silver rounded-lg py-2 px-6 mt-4 w-full flex justify-center text-center"${_scopeId}> \u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F </a></div><div${_scopeId}><div class="mt-1 w-58 h-68"${_scopeId}><div class="w-full aspect-square"${_scopeId}><img${ssrRenderAttr("src", unref(feature).img.src)}${ssrRenderAttr("width", unref(feature).img.width)}${ssrRenderAttr("height", unref(feature).img.height)} format="avif"${ssrRenderAttr("alt", unref(feature).title)} class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"${_scopeId}></div></div></div></div>`);
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(unref(feature).title), 1)
                ]),
                desc: withCtx(() => [
                  createTextVNode(toDisplayString(unref(feature).description), 1)
                ]),
                _: 1
              }),
              createVNode("div", { class: "grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "font-medium text-2xl text-gray-400" }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                  createVNode("div", { class: "mt-5 text-slate-500" }, [
                    createVNode("div", {
                      innerHTML: unref(feature).content,
                      class: "flex flex-col gap-3"
                    }, null, 8, ["innerHTML"])
                  ]),
                  createVNode("p", { class: "text-slate-600 mt-2 mb-5 leading-relaxed text-[16px]" }, toDisplayString(unref(feature).price), 1),
                  createVNode("a", {
                    href: unref(info).wsLink,
                    class: "bg-silver rounded-lg py-2 px-6 mt-4 w-full flex justify-center text-center"
                  }, " \u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F ", 8, ["href"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mt-1 w-58 h-68" }, [
                    createVNode("div", { class: "w-full aspect-square" }, [
                      createVNode("img", {
                        src: unref(feature).img.src,
                        width: unref(feature).img.width,
                        height: unref(feature).img.height,
                        format: "avif",
                        alt: unref(feature).title,
                        class: "w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
                      }, null, 8, ["src", "width", "height", "alt"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-V7cI-RVL.mjs.map
