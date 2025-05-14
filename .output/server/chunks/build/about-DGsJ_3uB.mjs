import { _ as __nuxt_component_1 } from './Container-CqUBYfII.mjs';
import { _ as _sfc_main$2 } from './Sectionhead-DUubUPpH.mjs';
import { withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
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
import 'vue-router';
import 'maska';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectSpread2';
import '@ant-design/colors';
import '@ctrl/tinycolor';
import 'stylis';
import 'vue-types';

const _sfc_main$1 = {
  __name: "Cta",
  __ssrInlineRender: true,
  setup(__props) {
    const info = useInfo();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center" }, _attrs))}><h2 class="text-white text-3xl md:text-6xl">8 \u041C\u0438\u043B\u044F \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433</h2><p class="text-slate-500 mt-4 text-lg md:text-xl"> \u0412\u0435\u0440\u043D\u0438 \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u0439 \u043F\u0435\u0440\u0432\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u0441\u0432\u043E\u0435\u043C\u0443 \u0430\u0432\u0442\u043E \u0438 \u0437\u0430\u0449\u0438\u0442\u0438 \u043E\u0442 \u0441\u043A\u043E\u043B\u043E\u0432 \u0438 \u0446\u0430\u0440\u0430\u043F\u0438\u043D. </p><div class="flex mt-5"><a${ssrRenderAttr("href", unref(info).wsLink)} class="px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"> \u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F </a></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Cta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u041E \u043D\u0430\u0441 - \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F. \u041E\u043A\u043B\u0435\u0439\u043A\u0430, \u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430, \u0425\u0438\u043C\u0447\u0438\u0441\u0442\u043A\u0430",
      description: "\u041E\u043A\u043B\u0435\u0439\u043A\u0430, \u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430, \u0425\u0438\u043C\u0447\u0438\u0441\u0442\u043A\u0430. \u0412\u0441\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442.",
      ogTitle: "\u041E \u043D\u0430\u0441 - \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F. \u041E\u043A\u043B\u0435\u0439\u043A\u0430, \u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430, \u0425\u0438\u043C\u0447\u0438\u0441\u0442\u043A\u0430",
      ogDescription: "\u041E\u043A\u043B\u0435\u0439\u043A\u0430, \u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430, \u0425\u0438\u043C\u0447\u0438\u0441\u0442\u043A\u0430. \u0412\u0441\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442."
    });
    const team = [
      {
        name: "\u041E\u043A\u043B\u0435\u0439\u043A\u0430",
        title: "\u043E\u0442 100 \u0442\u044B\u0441 \u0442\u0435\u043D\u0433\u0435",
        avatar: {
          src: "/img/2m.webp",
          width: 480,
          height: 560
        }
      },
      {
        name: "\u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430",
        title: "\u043E\u0442 40 \u0442\u044B\u0441 \u0442\u0435\u043D\u0433\u0435",
        avatar: {
          src: "/img/7m.webp",
          width: 580,
          height: 580
        }
      },
      {
        name: "\u0425\u0438\u043C\u0447\u0438\u0441\u0442\u043A\u0430",
        title: "\u043E\u0442 40 \u0442\u044B\u0441 \u0442\u0435\u043D\u0433\u0435",
        avatar: {
          src: "/img/9m.webp",
          width: 580,
          height: 580
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_1;
      const _component_LandingSectionhead = _sfc_main$2;
      const _component_LandingCta = _sfc_main$1;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSectionhead, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041E \u043D\u0430\u0441`);
                } else {
                  return [
                    createTextVNode("\u041E \u043D\u0430\u0441")
                  ];
                }
              }),
              desc: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F.`);
                } else {
                  return [
                    createTextVNode("\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"${_scopeId}><h2 class="font-bold text-3xl text-slate-200"${_scopeId}> \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F \u2013 \u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u0410\u043B\u043C\u0430\u0442\u044B! </h2><p class="text-lg leading-relaxed text-slate-500"${_scopeId}> \u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u0443\u0445\u043E\u0434\u0443 \u0437\u0430 \u0432\u0430\u0448\u0438\u043C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u043B \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u043C \u0438 \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u043C, \u043A\u0430\u043A \u0432 \u0434\u0435\u043D\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438. </p></div><div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12"${_scopeId}><!--[-->`);
            ssrRenderList(team, (item) => {
              _push2(`<div class="group"${_scopeId}><div class="w-full aspect-square"${_scopeId}><img${ssrRenderAttr("src", item.avatar.src)}${ssrRenderAttr("width", item.avatar.width)}${ssrRenderAttr("height", item.avatar.height)} format="avif"${ssrRenderAttr("alt", item.name)} class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"${_scopeId}></div><div class="mt-4 text-center"${_scopeId}><h2 class="text-lg text-gray-400"${_scopeId}>${ssrInterpolate(item.name)}</h2><h3 class="text-sm text-slate-500"${_scopeId}>${ssrInterpolate(item.title)}</h3></div></div>`);
            });
            _push2(`<!--]--></div><div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"${_scopeId}><h3 class="font-bold text-3xl text-slate-200"${_scopeId}>\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430</h3><p class="text-md leading-relaxed text-slate-500"${_scopeId}> \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0438\u043F\u043E\u0432 \u0438 \u043C\u0430\u0440\u043E\u043A \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439. \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044E \u043B\u0443\u0447\u0448\u0438\u0439 \u0443\u0445\u043E\u0434. </p><video src="https://static.8milya.kz/video/okleika.mp4" height="1024" width="400" controls type="video/mp4"${_scopeId}></video><p class="text-md leading-relaxed text-slate-500"${_scopeId}> \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043C\u044B \u0433\u043E\u0440\u0434\u0438\u043C\u0441\u044F \u043D\u0430\u0448\u0438\u043C\u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u043C\u0438 \u0446\u0435\u043D\u0430\u043C\u0438 \u0438 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C. \u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u0447\u0442\u043E \u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F \u2013 \u0446\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0441\u0443\u0440\u0441, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E, \u0431\u0435\u0437 \u0443\u0449\u0435\u0440\u0431\u0430 \u0434\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043D\u0430\u0448\u0438\u043C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0430\u043C, \u0438 \u043C\u044B \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u043E\u0441\u0445\u0438\u0449\u0430\u043B \u0432\u0430\u0441 \u0441\u0432\u043E\u0438\u043C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C. </p></div>`);
            _push2(ssrRenderComponent(_component_LandingCta, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LandingSectionhead, null, {
                title: withCtx(() => [
                  createTextVNode("\u041E \u043D\u0430\u0441")
                ]),
                desc: withCtx(() => [
                  createTextVNode("\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F 8 \u041C\u0438\u043B\u044F.")
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col gap-3 mx-auto max-w-4xl mt-16" }, [
                createVNode("h2", { class: "font-bold text-3xl text-slate-200" }, " \u0414\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433 8 \u041C\u0438\u043B\u044F \u2013 \u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u0410\u043B\u043C\u0430\u0442\u044B! "),
                createVNode("p", { class: "text-lg leading-relaxed text-slate-500" }, " \u041C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u0443\u0445\u043E\u0434\u0443 \u0437\u0430 \u0432\u0430\u0448\u0438\u043C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u043B \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u043C \u0438 \u0431\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u043C, \u043A\u0430\u043A \u0432 \u0434\u0435\u043D\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438. ")
              ]),
              createVNode("div", { class: "grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12" }, [
                (openBlock(), createBlock(Fragment, null, renderList(team, (item) => {
                  return createVNode("div", { class: "group" }, [
                    createVNode("div", { class: "w-full aspect-square" }, [
                      createVNode("img", {
                        src: item.avatar.src,
                        width: item.avatar.width,
                        height: item.avatar.height,
                        format: "avif",
                        alt: item.name,
                        class: "w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
                      }, null, 8, ["src", "width", "height", "alt"])
                    ]),
                    createVNode("div", { class: "mt-4 text-center" }, [
                      createVNode("h2", { class: "text-lg text-gray-400" }, toDisplayString(item.name), 1),
                      createVNode("h3", { class: "text-sm text-slate-500" }, toDisplayString(item.title), 1)
                    ])
                  ]);
                }), 64))
              ]),
              createVNode("div", { class: "flex flex-col gap-3 mx-auto max-w-4xl mt-16" }, [
                createVNode("h3", { class: "font-bold text-3xl text-slate-200" }, "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"),
                createVNode("p", { class: "text-md leading-relaxed text-slate-500" }, " \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0434\u0435\u0442\u0435\u0439\u043B\u0438\u043D\u0433\u0430 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0438\u043F\u043E\u0432 \u0438 \u043C\u0430\u0440\u043E\u043A \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439. \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044E \u043B\u0443\u0447\u0448\u0438\u0439 \u0443\u0445\u043E\u0434. "),
                createVNode("video", {
                  src: "https://static.8milya.kz/video/okleika.mp4",
                  height: "1024",
                  width: "400",
                  controls: "",
                  type: "video/mp4"
                }),
                createVNode("p", { class: "text-md leading-relaxed text-slate-500" }, " \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043C\u044B \u0433\u043E\u0440\u0434\u0438\u043C\u0441\u044F \u043D\u0430\u0448\u0438\u043C\u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u043C\u0438 \u0446\u0435\u043D\u0430\u043C\u0438 \u0438 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C. \u041C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u0447\u0442\u043E \u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F \u2013 \u0446\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0441\u0443\u0440\u0441, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E, \u0431\u0435\u0437 \u0443\u0449\u0435\u0440\u0431\u0430 \u0434\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C \u043D\u0430\u0448\u0438\u043C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0430\u043C, \u0438 \u043C\u044B \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u043E\u0441\u0445\u0438\u0449\u0430\u043B \u0432\u0430\u0441 \u0441\u0432\u043E\u0438\u043C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C. ")
              ]),
              createVNode(_component_LandingCta)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-DGsJ_3uB.mjs.map
