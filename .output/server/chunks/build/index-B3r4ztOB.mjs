import { _ as __nuxt_component_1 } from './Container-CqUBYfII.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-DUubUPpH.mjs';
import { _ as _sfc_main$2 } from './FeaturesCard-DxzgnjYS.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './index--DdJWkO-.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-BftFs5bt.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
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
import './features-hJsTKfv0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u0423\u0441\u043B\u0443\u0433\u0438 - \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F",
      description: `\u0412c\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0443 \u0430\u0432\u0442\u043E, \u041F\u043B\u0435\u043D\u043A\u0438: Hexis, Stek, Suntek. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 10 \u043B\u0435\u0442`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_1;
      const _component_LandingSectionhead = _sfc_main$1;
      const _component_LandingFeaturesCard = _sfc_main$2;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0423\u0441\u043B\u0443\u0433\u0438`);
                } else {
                  return [
                    createTextVNode("\u0423\u0441\u043B\u0443\u0433\u0438")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0412c\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0443 \u0430\u0432\u0442\u043E`);
                } else {
                  return [
                    createTextVNode("\u0412c\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0443 \u0430\u0432\u0442\u043E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LandingFeaturesCard, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("\u0423\u0441\u043B\u0443\u0433\u0438")
                ]),
                desc: withCtx(() => [
                  createTextVNode("\u0412c\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0443 \u0430\u0432\u0442\u043E")
                ]),
                _: 1
              }),
              createVNode(_component_LandingFeaturesCard)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B3r4ztOB.mjs.map
