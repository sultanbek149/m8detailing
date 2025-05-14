import { _ as _sfc_main$1$1, a as __nuxt_component_1$1, u as useOrderStore } from './Footer-DPW_tdgh.mjs';
import { _ as __nuxt_component_1 } from './Container-CqUBYfII.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { w as wsLink, t as telLink } from './phone-t6m1obiG.mjs';
import { _ as _sfc_main$4 } from './FeaturesCard-DxzgnjYS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_3$1 } from './Logos-BUdF2iJ-.mjs';
import { _ as _sfc_main$3 } from './ContactCard-B1pNLThp.mjs';
import { u as useSeoMeta } from './index--DdJWkO-.mjs';
import './Icon-DzqoV7Pd.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-vRwJqp6n.mjs';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'maska';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';
import 'lodash-es';
import 'lodash-es/cloneDeep.js';
import 'async-validator';
import 'lodash-es/find.js';
import 'dom-align';
import 'resize-observer-polyfill';
import 'lodash-es/isEqual.js';
import 'compute-scroll-into-view';
import 'lodash-es/intersection.js';
import 'lodash-es/debounce.js';
import 'lodash-es/omit.js';
import 'lodash-es/isPlainObject.js';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './nuxt-link-BftFs5bt.mjs';
import './features-hJsTKfv0.mjs';

const _imports_0 = publicAssetsURL("/yandex.svg");
const _imports_1 = publicAssetsURL("/google.svg");
const _sfc_main$2 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    useOrderStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-[820px] pt-[50px] pb-8 md:pt-[80px] detailng" }, _attrs))}><div><h1 class="text-[20px] lg:text-[36px] font-bold lg:tracking-tight text-slate-100 lg:leading-[42px]"> \u0412\u0435\u0440\u043D\u0451\u043C \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0440\u0432\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0432\u0442\u043E \u0438 \u0437\u0430\u0449\u0438\u0442\u0438\u043C \u043E\u0442 \u0441\u043A\u043E\u043B\u043E\u0432 \u0438 \u0446\u0430\u0440\u0430\u043F\u0438\u043D. </h1><p class="text-[16px] md:text-lg mt-4 text-slate-400 max-w-xl font-[Nunito]"> \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u0445\u043E\u0434 \u0437\u0430 \u0432\u0430\u0448\u0438\u043C \u0430\u0432\u0442\u043E \u0432 \u0410\u043B\u043C\u0430\u0442\u044B. </p><div class="flex flex-col sm:flex-row gap-3 mt-[20px]"><img${ssrRenderAttr("src", _imports_0)} width="280px" alt="yandex"><img${ssrRenderAttr("src", _imports_1)} width="280px" alt="google"></div><div class="mt-6 hidden md:flex flex-col sm:flex-row gap-3"><a${ssrRenderAttr("href", unref(wsLink))} class="border rounded text-gray-950 p-[10px] px-[16px] font-bold text-center font-[Nunito] mt-[20px] bg-silver cursor-pointer"> \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C </a><a${ssrRenderAttr("href", unref(telLink))} class="px-[16px] border rounded text-slate-200 py-[10px] text-center font-[Nunito] mt-[20px] cursor-pointer"> \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C </a></div></div></main>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingFeaturesCard = _sfc_main$4;
  _push(`<!--[--><div class="mt-16 md:mt-0"><h2 class="text-2xl lg:text-4xl font-bold lg:tracking-tight mt-[50px] text-slate-200"> \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F \u2013 \u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u0410\u043B\u043C\u0430\u0442\u044B! </h2><p class="text-lg mt-4 text-slate-600"> \u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u0443\u0445\u043E\u0434\u0443 \u0437\u0430 \u0432\u0430\u0448\u0438\u043C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u043B \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u043C \u0438 \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u043C, \u043A\u0430\u043A \u0432 \u0434\u0435\u043D\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438. </p></div>`);
  _push(ssrRenderComponent(_component_LandingFeaturesCard, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Features.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "8 \u041C\u0438\u043B\u044F \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 - \u0412\u0435\u0440\u043D\u0451\u043C \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0440\u0432\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0432\u0442\u043E ",
      ogTitle: "8 \u041C\u0438\u043B\u044F \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 - \u0412\u0435\u0440\u043D\u0451\u043C \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0440\u0432\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0432\u0442\u043E ",
      description: "\u0412c\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0443 \u0430\u0432\u0442\u043E, \u041F\u043B\u0435\u043D\u043A\u0438: Hexis, Stek, Suntek. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 10 \u043B\u0435\u0442",
      ogDescription: "\u0412c\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0443 \u0430\u0432\u0442\u043E, \u041F\u043B\u0435\u043D\u043A\u0438: Hexis, Stek, Suntek. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 10 \u043B\u0435\u0442",
      ogImage: "https://detailing.8milya.kz/og-detailing.webp",
      ogType: "website",
      ogUrl: "https://detailing.8milya.kz/"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingNavbar = _sfc_main$1$1;
      const _component_LandingContainer = __nuxt_component_1;
      const _component_LandingHero = _sfc_main$2;
      const _component_LandingFeatures = __nuxt_component_3;
      const _component_LandingLogos = __nuxt_component_3$1;
      const _component_LandingContactCard = _sfc_main$3;
      const _component_LandingFooter = __nuxt_component_1$1;
      _push(`<!--[--><div class="relative pb-[100px]">`);
      _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingHero, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingHero)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LandingContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingFeatures, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LandingLogos, null, null, _parent2, _scopeId));
            _push2(`<div class="py-20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LandingContactCard, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_LandingFeatures),
              createVNode(_component_LandingLogos),
              createVNode("div", { class: "py-20" }, [
                createVNode(_component_LandingContactCard)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DrmWA0jv.mjs.map
