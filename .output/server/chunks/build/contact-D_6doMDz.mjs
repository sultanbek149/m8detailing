import { _ as __nuxt_component_1 } from './Container-CqUBYfII.mjs';
import { _ as _sfc_main$1 } from './Sectionhead-DUubUPpH.mjs';
import { _ as _sfc_main$2 } from './ContactCard-B1pNLThp.mjs';
import { withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useInfo } from './phone-t6m1obiG.mjs';
import { u as useSeoMeta } from './index--DdJWkO-.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Icon-DzqoV7Pd.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-vRwJqp6n.mjs';
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

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const info = useInfo();
    useSeoMeta({
      title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B - \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u044B",
      description: `\u041D\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B: ${info.adresText}, ${info.phone}. \u0412\u0441\u0435 \u0432\u0438\u0434\u044B \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u0438 \u0443\u0445\u043E\u0434 \u0432\u0430\u0448\u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u0432 \u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u044B`,
      ogTitle: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B - \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u044B",
      ogDescription: `\u041D\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B: ${info.adresText}, ${info.phone}. \u0412\u0441\u0435 \u0432\u0438\u0434\u044B \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u0438 \u0443\u0445\u043E\u0434 \u0432\u0430\u0448\u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u0432 \u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u044B`,
      ogType: "website",
      ogImage: "https://detailing.8milya.kz/og-detailing.webp",
      ogType: "website",
      ogUrl: "https://detailing.8milya.kz/"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_1;
      const _component_LandingSectionhead = _sfc_main$1;
      const _component_LandingContactCard = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LandingContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B`);
                } else {
                  return [
                    createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041C\u044B \u0440\u0430\u0434\u044B \u0432\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C`);
                } else {
                  return [
                    createTextVNode("\u041C\u044B \u0440\u0430\u0434\u044B \u0432\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LandingContactCard, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")
                ]),
                desc: withCtx(() => [
                  createTextVNode("\u041C\u044B \u0440\u0430\u0434\u044B \u0432\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C")
                ]),
                _: 1
              }),
              createVNode(_component_LandingContactCard)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div itemscope="" itemtype="http://schema.org/Organization" class="\u201DDisplaNone\u201D"><meta itemprop="name" content="\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F"><meta itemprop="telephone"${ssrRenderAttr("content", unref(info).phone)}><meta itemprop="email"${ssrRenderAttr("content", unref(info).emailText)}><meta itemprop="address"${ssrRenderAttr("content", unref(info).adresText)}><meta itemprop="logo" content="https://detailing.8milya.kz/logo.jpeg"><meta itemprop="image" content="https://detailing.8milya.kz/bg-md.jpeg"><meta itemprop="description" content="\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B. \u0412\u0441\u0435 \u0432\u0438\u0434\u044B \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u0438 \u0443\u0445\u043E\u0434 \u0432\u0430\u0448\u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u0432 \u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"><meta itemprop="legalName" content="\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F - \u0412\u0441\u0435 \u0432\u0438\u0434\u044B \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u0432 \u0410\u043B\u043C\u0430\u0442\u044B"><link itemprop="url" href="https://detailing.8milya.kz/contact" content="url-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"><meta itemprop="sameAs"${ssrRenderAttr("content", unref(info).instLink)}><div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating"><meta itemprop="worstRating" content="4.8"><meta itemprop="bestRating" content="5"><meta itemprop="ratingValue" content="5"><meta itemprop="ratingCount" content="1064"></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-D_6doMDz.mjs.map
