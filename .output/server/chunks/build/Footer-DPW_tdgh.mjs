import { _ as __nuxt_component_1$1 } from './Container-CqUBYfII.mjs';
import __nuxt_component_2$1 from './Icon-DzqoV7Pd.mjs';
import { createVNode, defineComponent, reactive, getCurrentInstance, watch, ref, Transition, computed, shallowRef, toRef, withDirectives, withModifiers, vShow, inject, provide, Fragment, createTextVNode, watchEffect, toRefs, toRaw, nextTick, TransitionGroup, useSSRContext, resolveDirective, cloneVNode, isRef, unref, Text, mergeProps, withCtx, vModelText, openBlock, createBlock, createCommentVNode, renderList, toDisplayString, render, getCurrentScope, onScopeDispose } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { I as Icon, f as flattenChildren, c as classNames, g as getMotion$1, a as getTransitionProps, P as PropTypes, b as booleanType, d as canUseDom, e as Portal$1, u as useProvidePortal, h as contains, i as findDOMNode, j as getComponent, k as hasProp, l as getEvents, m as filterEmpty, n as getSlot, o as isValidElement, p as useConfigInject, q as useInjectDisabled, r as getTransitionName, s as getTransitionDirection, D as DefaultRenderEmpty, t as isFragment, w as withInstall, v as objectType, L as LoadingOutlined, x as useToken, y as getTransitionGroupProps, z as tuple, A as warning$1, B as useProviderSize, C as useProviderDisabled, E as useInjectGlobalForm, F as CloseCircleFilled, G as anyType, H as warning, J as useLocaleReceiver, K as CloseOutlined, M as ExclamationCircleFilled, N as CheckCircleFilled, O as InfoCircleFilled, Q as useConfigContextInject, R as localeValues, S as warningOnce, T as getOptionProps, U as genComponentStyleHook, V as merge, W as someType, X as stringType, Y as functionType, Z as getPropsSlot, _ as getStyle$1, $ as eventType, a0 as storeToRefs, a1 as Keyframe, a2 as genFocusStyle, a3 as resetComponent, a4 as clearFix, a5 as defineStore, a6 as textEllipsis, a7 as resetIcon, a8 as ConfigProvider, a9 as globalConfigForApi, aa as getConfirmLocale } from './server.mjs';
import { vMaska } from 'maska';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectSpread$6 from '@babel/runtime/helpers/esm/objectSpread2';
import { isEmpty } from 'lodash-es';
import cloneDeep from 'lodash-es/cloneDeep.js';
import RawAsyncValidator from 'async-validator';
import find from 'lodash-es/find.js';
import { alignElement, alignPoint } from 'dom-align';
import ResizeObserver$1 from 'resize-observer-polyfill';
import isEqual from 'lodash-es/isEqual.js';
import compute from 'compute-scroll-into-view';
import intersection from 'lodash-es/intersection.js';
import debounce from 'lodash-es/debounce.js';
import omit$1 from 'lodash-es/omit.js';
import isPlainObject from 'lodash-es/isPlainObject.js';
import { w as wsLink, t as telLink, u as useInfo } from './phone-t6m1obiG.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

// This icon file is generated automatically.
var QuestionCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, "name": "question-circle", "theme": "outlined" };

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QuestionCircleOutlined = function QuestionCircleOutlined(props, context) {
  var p = _objectSpread$5({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$5({}, p, {
    "icon": QuestionCircleOutlined$1
  }), null);
};

QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';
QuestionCircleOutlined.inheritAttrs = false;

function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }
  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
      top = _ref.top,
      left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: 'start',
    inline: 'nearest'
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(isTargetAttached ? compute(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(compute(target, computeOptions), computeOptions.behavior);
}

// This icon file is generated automatically.
var DownOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DownOutlined = function DownOutlined(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$4({}, p, {
    "icon": DownOutlined$1
  }), null);
};

DownOutlined.displayName = 'DownOutlined';
DownOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var CheckOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckOutlined = function CheckOutlined(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$3({}, p, {
    "icon": CheckOutlined$1
  }), null);
};

CheckOutlined.displayName = 'CheckOutlined';
CheckOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var SearchOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchOutlined = function SearchOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$2({}, p, {
    "icon": SearchOutlined$1
  }), null);
};

SearchOutlined.displayName = 'SearchOutlined';
SearchOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var EyeOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EyeOutlined = function EyeOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return createVNode(Icon, _objectSpread$1({}, p, {
    "icon": EyeOutlined$1
  }), null);
};

EyeOutlined.displayName = 'EyeOutlined';
EyeOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var EyeInvisibleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return createVNode(Icon, _objectSpread({}, p, {
    "icon": EyeInvisibleOutlined$1
  }), null);
};

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
EyeInvisibleOutlined.inheritAttrs = false;

const initDefaultProps = (types, defaultProps) => {
  const propTypes = _extends({}, types);
  Object.keys(defaultProps).forEach((k) => {
    const prop = propTypes[k];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k];
      } else if (prop.def) {
        prop.def(defaultProps[k]);
      } else {
        propTypes[k] = {
          type: prop,
          default: defaultProps[k]
        };
      }
    } else {
      throw new Error(`not have ${k} prop`);
    }
  });
  return propTypes;
};
const ResizeObserver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const state = reactive({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let currentElement = null;
    let resizeObserver = null;
    const destroyObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    const onResize = (entries) => {
      const {
        onResize: onResize2
      } = props2;
      const target = entries[0].target;
      const {
        width,
        height
      } = target.getBoundingClientRect();
      const {
        offsetWidth,
        offsetHeight
      } = target;
      const fixedWidth = Math.floor(width);
      const fixedHeight = Math.floor(height);
      if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
        const size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        _extends(state, size);
        if (onResize2) {
          Promise.resolve().then(() => {
            onResize2(_extends(_extends({}, size), {
              offsetWidth,
              offsetHeight
            }), target);
          });
        }
      }
    };
    const instance = getCurrentInstance();
    const registerObserver = () => {
      const {
        disabled
      } = props2;
      if (disabled) {
        destroyObserver();
        return;
      }
      const element = findDOMNode(instance);
      const elementChanged = element !== currentElement;
      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }
      if (!resizeObserver && element) {
        resizeObserver = new ResizeObserver$1(onResize);
        resizeObserver.observe(element);
      }
    };
    watch(() => props2.disabled, () => {
      registerObserver();
    }, {
      flush: "post"
    });
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
    };
  }
});
let raf = (callback) => setTimeout(callback, 16);
let caf = (num) => clearTimeout(num);
let rafUUID = 0;
const rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
function wrapperRaf(callback) {
  let times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  const id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      const realId = raf(() => {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
}
wrapperRaf.cancel = (id) => {
  const realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
let supportsPassive = false;
try {
  const opts = Object.defineProperty({}, "passive", {
    get() {
      supportsPassive = true;
    }
  });
  (void 0).addEventListener("testPassive", null, opts);
  (void 0).removeEventListener("testPassive", null, opts);
} catch (e) {
}
function addEventListenerWrap(target, eventType2, cb, option) {
  if (target && target.addEventListener) {
    let opt = option;
    if (opt === void 0 && supportsPassive && (eventType2 === "touchstart" || eventType2 === "touchmove" || eventType2 === "wheel")) {
      opt = {
        passive: false
      };
    }
    target.addEventListener(eventType2, cb, opt);
  }
  return {
    remove: () => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventType2, cb);
      }
    }
  };
}
const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
const roundedArrow = (width, innerRadius, outerRadius, bgColor, boxShadow) => {
  const unitWidth = width / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = outerRadius * 1 / Math.sqrt(2);
  const by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - innerRadius * (1 / Math.sqrt(2));
  const cy = outerRadius * (Math.sqrt(2) - 1) + innerRadius * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + outerRadius * (Math.sqrt(2) - 2);
  const polygonOffset = outerRadius * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width,
    height: width,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: shadowWidth,
      height: shadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${innerRadius}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width,
      height: width / 2,
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [`polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`, `path('M ${ax} ${ay} A ${outerRadius} ${outerRadius} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${innerRadius} ${innerRadius} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${outerRadius} ${outerRadius} 0 0 0 ${fx} ${fy} Z')`]
      },
      content: '""'
    }
  };
};
function genPresetColor(token, genCss) {
  return PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}-1`];
    const lightBorderColor = token[`${colorKey}-3`];
    const darkColor = token[`${colorKey}-6`];
    const textColor = token[`${colorKey}-7`];
    return _extends(_extends({}, prev), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}
function omit(obj, fields) {
  const shallowCopy = _extends({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
const devWarning = (valid, component, message) => {
  warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
};
function getKey(data, index) {
  const {
    key
  } = data;
  let value;
  if ("value" in data) {
    ({
      value
    } = data);
  }
  if (key !== null && key !== void 0) {
    return key;
  }
  if (value !== void 0) {
    return value;
  }
  return `rc-index-key-${index}`;
}
function fillFieldNames(fieldNames, childrenAsData) {
  const {
    label,
    value,
    options
  } = fieldNames || {};
  return {
    label: label || (childrenAsData ? "children" : "label"),
    value: value || "value",
    options: options || "options"
  };
}
function flattenOptions(options) {
  let {
    fieldNames,
    childrenAsData
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const flattenList = [];
  const {
    label: fieldLabel,
    value: fieldValue,
    options: fieldOptions
  } = fillFieldNames(fieldNames, false);
  function dig(list, isGroupOption) {
    list.forEach((data) => {
      const label = data[fieldLabel];
      if (isGroupOption || !(fieldOptions in data)) {
        const value = data[fieldValue];
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data,
          label,
          value
        });
      } else {
        let grpLabel = label;
        if (grpLabel === void 0 && childrenAsData) {
          grpLabel = data.label;
        }
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}
function injectPropsWithOption(option) {
  const newOption = _extends({}, option);
  if (!("props" in newOption)) {
    Object.defineProperty(newOption, "props", {
      get() {
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  let match2 = false;
  function separate(str, _ref) {
    let [token, ...restTokens] = _ref;
    if (!token) {
      return [str];
    }
    const list2 = str.split(token);
    match2 = match2 || list2.length > 1;
    return list2.reduce((prevList, unitStr) => [...prevList, ...separate(unitStr, restTokens)], []).filter((unit) => unit);
  }
  const list = separate(text, tokens);
  return match2 ? list : null;
}
function returnEmptyString() {
  return "";
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return (void 0).document;
}
function noop$2() {
}
const triggerProps = () => ({
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def([]),
  showAction: PropTypes.any.def([]),
  hideAction: PropTypes.any.def([]),
  getPopupClassNameFromAlign: PropTypes.any.def(returnEmptyString),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: PropTypes.func.def(noop$2),
  popup: PropTypes.any,
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: PropTypes.string.def("rc-trigger-popup"),
  popupClassName: PropTypes.string.def(""),
  popupPlacement: String,
  builtinPlacements: PropTypes.object,
  popupTransitionName: String,
  popupAnimation: PropTypes.any,
  mouseEnterDelay: PropTypes.number.def(0),
  mouseLeaveDelay: PropTypes.number.def(0.1),
  zIndex: Number,
  focusDelay: PropTypes.number.def(0),
  blurDelay: PropTypes.number.def(0.15),
  getPopupContainer: Function,
  getDocument: PropTypes.func.def(returnDocument),
  forceRender: {
    type: Boolean,
    default: void 0
  },
  destroyPopupOnHide: {
    type: Boolean,
    default: false
  },
  mask: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  // onPopupAlign: PropTypes.func.def(noop),
  popupAlign: PropTypes.object.def(() => ({})),
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },
  maskTransitionName: String,
  maskAnimation: String,
  stretch: String,
  alignPoint: {
    type: Boolean,
    default: void 0
  },
  autoDestroy: {
    type: Boolean,
    default: false
  },
  mobile: Object,
  getTriggerDOMNode: Function
});
const innerProps = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  // Legacy Motion
  animation: [String, Object],
  transitionName: String,
  // Measure
  stretch: {
    type: String
  },
  // Align
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
};
const mobileProps = _extends(_extends({}, innerProps), {
  mobile: {
    type: Object
  }
});
const popupProps = _extends(_extends({}, innerProps), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function Mask$1(props2) {
  const {
    prefixCls,
    visible,
    zIndex,
    mask,
    maskAnimation,
    maskTransitionName
  } = props2;
  if (!mask) {
    return null;
  }
  let motion = {};
  if (maskTransitionName || maskAnimation) {
    motion = getMotion$1({
      prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    });
  }
  return createVNode(Transition, _objectSpread$6({
    "appear": true
  }, motion), {
    default: () => [withDirectives(createVNode("div", {
      "style": {
        zIndex
      },
      "class": `${prefixCls}-mask`
    }, null), [[resolveDirective("if"), visible]])]
  });
}
Mask$1.displayName = "Mask";
const MobilePopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: false,
  props: mobileProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(props2, _ref) {
    let {
      expose,
      slots
    } = _ref;
    const elementRef = ref();
    expose({
      forceAlign: () => {
      },
      getElement: () => elementRef.value
    });
    return () => {
      var _a;
      const {
        zIndex,
        visible,
        prefixCls,
        mobile: {
          popupClassName,
          popupStyle,
          popupMotion = {},
          popupRender
        } = {}
      } = props2;
      const mergedStyle = _extends({
        zIndex
      }, popupStyle);
      let childNode = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": `${prefixCls}-content`
        }, [childNode]);
      }
      if (popupRender) {
        childNode = popupRender(childNode);
      }
      const mergedClassName = classNames(prefixCls, popupClassName);
      return createVNode(Transition, _objectSpread$6({
        "ref": elementRef
      }, popupMotion), {
        default: () => [visible ? createVNode("div", {
          "class": mergedClassName,
          "style": mergedStyle
        }, [childNode]) : null]
      });
    };
  }
});
const useVisibleStatus = (visible, doMeasure) => {
  const status = shallowRef(null);
  const rafRef = shallowRef();
  const destroyRef = shallowRef(false);
  function setStatus(nextStatus) {
    if (!destroyRef.value) {
      status.value = nextStatus;
    }
  }
  function cancelRaf() {
    wrapperRaf.cancel(rafRef.value);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.value = wrapperRaf(() => {
      let newStatus = status.value;
      switch (status.value) {
        case "align":
          newStatus = "motion";
          break;
        case "motion":
          newStatus = "stable";
          break;
      }
      setStatus(newStatus);
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  watch(visible, () => {
    setStatus("measure");
  }, {
    immediate: true,
    flush: "post"
  });
  return [status, goNextStatus];
};
const useStretchStyle = (stretch) => {
  const targetSize = shallowRef({
    width: 0,
    height: 0
  });
  function measureStretch(element) {
    targetSize.value = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const style = computed(() => {
    const sizeStyle = {};
    if (stretch.value) {
      const {
        width,
        height
      } = targetSize.value;
      if (stretch.value.indexOf("height") !== -1 && height) {
        sizeStyle.height = `${height}px`;
      } else if (stretch.value.indexOf("minHeight") !== -1 && height) {
        sizeStyle.minHeight = `${height}px`;
      }
      if (stretch.value.indexOf("width") !== -1 && width) {
        sizeStyle.width = `${width}px`;
      } else if (stretch.value.indexOf("minWidth") !== -1 && width) {
        sizeStyle.minWidth = `${width}px`;
      }
    }
    return sizeStyle;
  });
  return [style, measureStretch];
};
function cloneElement(vnode) {
  let nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  let mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  let ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  const node = cloneVNode(ele, nodeProps, mergeRef);
  node.props = override ? _extends(_extends({}, node.props), nodeProps) : node.props;
  warning(typeof node.props.class !== "object");
  return node;
}
function triggerVNodeUpdate(vm, attrs, dom) {
  render(cloneVNode(vm, _extends({}, attrs)), dom);
}
const isVisible = (element) => {
  if (!element) {
    return false;
  }
  if (element.offsetParent) {
    return true;
  }
  if (element.getBBox) {
    const box2 = element.getBBox();
    if (box2.width || box2.height) {
      return true;
    }
  }
  if (element.getBoundingClientRect) {
    const box2 = element.getBoundingClientRect();
    if (box2.width || box2.height) {
      return true;
    }
  }
  return false;
};
function restoreFocus(activeElement, container) {
  if (activeElement !== (void 0).activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
    activeElement.focus();
  }
}
const useBuffer = (callback, buffer) => {
  let called = false;
  let timeout = null;
  function cancelTrigger() {
    clearTimeout(timeout);
  }
  function trigger2(force) {
    if (!called || force === true) {
      if (callback() === false) {
        return;
      }
      called = true;
      cancelTrigger();
      timeout = setTimeout(() => {
        called = false;
      }, buffer.value);
    } else {
      cancelTrigger();
      timeout = setTimeout(() => {
        called = false;
        trigger2();
      }, buffer.value);
    }
  }
  return [trigger2, () => {
    called = false;
    cancelTrigger();
  }];
};
const alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function getElement(func) {
  if (typeof func !== "function") return null;
  return func();
}
function getPoint(point) {
  if (typeof point !== "object" || !point) return null;
  return point;
}
const Align = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: alignProps,
  emits: ["align"],
  setup(props2, _ref) {
    let {
      expose,
      slots
    } = _ref;
    const cacheRef = ref({});
    const nodeRef = ref();
    const [forceAlign, cancelForceAlign] = useBuffer(() => {
      const {
        disabled: latestDisabled,
        target: latestTarget,
        align: latestAlign,
        onAlign: latestOnAlign
      } = props2;
      if (!latestDisabled && latestTarget && nodeRef.value) {
        const source = nodeRef.value;
        let result;
        const element = getElement(latestTarget);
        const point = getPoint(latestTarget);
        cacheRef.value.element = element;
        cacheRef.value.point = point;
        cacheRef.value.align = latestAlign;
        const {
          activeElement
        } = void 0;
        if (element && isVisible(element)) {
          result = alignElement(source, element, latestAlign);
        } else if (point) {
          result = alignPoint(source, point, latestAlign);
        }
        restoreFocus(activeElement, source);
        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }
        return true;
      }
      return false;
    }, computed(() => props2.monitorBufferTime));
    ref({
      cancel: () => {
      }
    });
    ref({
      cancel: () => {
      }
    });
    watch(() => props2.disabled, (disabled) => {
      if (!disabled) {
        forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const winResizeRef = ref(null);
    watch(() => props2.monitorWindowResize, (monitorWindowResize) => {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = addEventListenerWrap(void 0, "resize", forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: "post"
    });
    expose({
      forceAlign: () => forceAlign(true)
    });
    return () => {
      const child = slots === null || slots === void 0 ? void 0 : slots.default();
      if (child) {
        return cloneElement(child[0], {
          ref: nodeRef
        }, true, true);
      }
      return null;
    };
  }
});
const PopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: false,
  props: innerProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(props2, _ref) {
    let {
      expose,
      attrs,
      slots
    } = _ref;
    const alignRef = shallowRef();
    const elementRef = shallowRef();
    const alignedClassName = shallowRef();
    const [stretchStyle, measureStretchStyle] = useStretchStyle(toRef(props2, "stretch"));
    const visible = shallowRef(false);
    let timeoutId;
    watch(() => props2.visible, (val) => {
      clearTimeout(timeoutId);
      if (val) {
        timeoutId = setTimeout(() => {
          visible.value = props2.visible;
        });
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    const [status, goNextStatus] = useVisibleStatus(visible);
    const prepareResolveRef = shallowRef();
    const getAlignTarget = () => {
      if (props2.point) {
        return props2.point;
      }
      return props2.getRootDomNode;
    };
    const forceAlign = () => {
      var _a;
      (_a = alignRef.value) === null || _a === void 0 ? void 0 : _a.forceAlign();
    };
    const onInternalAlign = (popupDomNode, matchAlign) => {
      var _a;
      const nextAlignedClassName = props2.getClassNameFromAlign(matchAlign);
      const preAlignedClassName = alignedClassName.value;
      if (alignedClassName.value !== nextAlignedClassName) {
        alignedClassName.value = nextAlignedClassName;
      }
      if (status.value === "align") {
        if (preAlignedClassName !== nextAlignedClassName) {
          Promise.resolve().then(() => {
            forceAlign();
          });
        } else {
          goNextStatus(() => {
            var _a2;
            (_a2 = prepareResolveRef.value) === null || _a2 === void 0 ? void 0 : _a2.call(prepareResolveRef);
          });
        }
        (_a = props2.onAlign) === null || _a === void 0 ? void 0 : _a.call(props2, popupDomNode, matchAlign);
      }
    };
    const motion = computed(() => {
      const m = typeof props2.animation === "object" ? props2.animation : getMotion$1(props2);
      ["onAfterEnter", "onAfterLeave"].forEach((eventName) => {
        const originFn = m[eventName];
        m[eventName] = (node) => {
          goNextStatus();
          status.value = "stable";
          originFn === null || originFn === void 0 ? void 0 : originFn(node);
        };
      });
      return m;
    });
    const onShowPrepare = () => {
      return new Promise((resolve) => {
        prepareResolveRef.value = resolve;
      });
    };
    watch([motion, status], () => {
      if (!motion.value && status.value === "motion") {
        goNextStatus();
      }
    }, {
      immediate: true
    });
    expose({
      forceAlign,
      getElement: () => {
        return elementRef.value.$el || elementRef.value;
      }
    });
    const alignDisabled = computed(() => {
      var _a;
      if (((_a = props2.align) === null || _a === void 0 ? void 0 : _a.points) && (status.value === "align" || status.value === "stable")) {
        return false;
      }
      return true;
    });
    return () => {
      var _a;
      const {
        zIndex,
        align,
        prefixCls,
        destroyPopupOnHide,
        onMouseenter,
        onMouseleave,
        onTouchstart = () => {
        },
        onMousedown
      } = props2;
      const statusValue = status.value;
      const mergedStyle = [_extends(_extends({}, stretchStyle.value), {
        zIndex,
        opacity: statusValue === "motion" || statusValue === "stable" || !visible.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !visible.value && statusValue !== "stable" ? "none" : null
      }), attrs.style];
      let childNode = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
        visible: props2.visible
      }));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": `${prefixCls}-content`
        }, [childNode]);
      }
      const mergedClassName = classNames(prefixCls, attrs.class, alignedClassName.value);
      const hasAnimate = visible.value || !props2.visible;
      const transitionProps = hasAnimate ? getTransitionProps(motion.value.name, motion.value) : {};
      return createVNode(Transition, _objectSpread$6(_objectSpread$6({
        "ref": elementRef
      }, transitionProps), {}, {
        "onBeforeEnter": onShowPrepare
      }), {
        default: () => {
          return !destroyPopupOnHide || props2.visible ? withDirectives(createVNode(Align, {
            "target": getAlignTarget(),
            "key": "popup",
            "ref": alignRef,
            "monitorWindowResize": true,
            "disabled": alignDisabled.value,
            "align": align,
            "onAlign": onInternalAlign
          }, {
            default: () => createVNode("div", {
              "class": mergedClassName,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onMousedown": withModifiers(onMousedown, ["capture"]),
              [supportsPassive ? "onTouchstartPassive" : "onTouchstart"]: withModifiers(onTouchstart, ["capture"]),
              "style": mergedStyle
            }, [childNode])
          }), [[vShow, visible.value]]) : null;
        }
      });
    };
  }
});
const Popup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: false,
  props: popupProps,
  setup(props2, _ref) {
    let {
      attrs,
      slots,
      expose
    } = _ref;
    const innerVisible = shallowRef(false);
    const inMobile = shallowRef(false);
    const popupRef = shallowRef();
    const rootRef = shallowRef();
    watch([() => props2.visible, () => props2.mobile], () => {
      innerVisible.value = props2.visible;
      if (props2.visible && props2.mobile) {
        inMobile.value = true;
      }
    }, {
      immediate: true,
      flush: "post"
    });
    expose({
      forceAlign: () => {
        var _a;
        (_a = popupRef.value) === null || _a === void 0 ? void 0 : _a.forceAlign();
      },
      getElement: () => {
        var _a;
        return (_a = popupRef.value) === null || _a === void 0 ? void 0 : _a.getElement();
      }
    });
    return () => {
      const cloneProps = _extends(_extends(_extends({}, props2), attrs), {
        visible: innerVisible.value
      });
      const popupNode = inMobile.value ? createVNode(MobilePopupInner, _objectSpread$6(_objectSpread$6({}, cloneProps), {}, {
        "mobile": props2.mobile,
        "ref": popupRef
      }), {
        default: slots.default
      }) : createVNode(PopupInner, _objectSpread$6(_objectSpread$6({}, cloneProps), {}, {
        "ref": popupRef
      }), {
        default: slots.default
      });
      return createVNode("div", {
        "ref": rootRef
      }, [createVNode(Mask$1, cloneProps, null), popupNode]);
    };
  }
});
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  const baseAlign = builtinPlacements[placementStr] || {};
  return _extends(_extends({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  const {
    points
  } = align;
  const placements2 = Object.keys(builtinPlacements);
  for (let i = 0; i < placements2.length; i += 1) {
    const placement = placements2[i];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return `${prefixCls}-placement-${placement}`;
    }
  }
  return "";
}
const BaseMixin = {
  methods: {
    setState() {
      let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let callback = arguments.length > 1 ? arguments[1] : void 0;
      let newState = typeof state === "function" ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        const s = this.getDerivedStateFromProps(getOptionProps(this), _extends(_extends({}, this.$data), newState));
        if (s === null) {
          return;
        } else {
          newState = _extends(_extends({}, newState), s || {});
        }
      }
      _extends(this.$data, newState);
      if (this._.isMounted) {
        this.$forceUpdate();
      }
      nextTick(() => {
        callback && callback();
      });
    },
    __emit() {
      const args = [].slice.call(arguments, 0);
      let eventName = args[0];
      eventName = `on${eventName[0].toUpperCase()}${eventName.substring(1)}`;
      const event = this.$props[eventName] || this.$attrs[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (let i = 0, l = event.length; i < l; i++) {
            event[i](...args.slice(1));
          }
        } else {
          event(...args.slice(1));
        }
      }
    }
  }
};
function useScrollLocker(lock) {
  computed(() => !!lock && !!lock.value);
  watchEffect((onClear) => {
    {
      return;
    }
  }, {
    flush: "post"
  });
}
let openCount = 0;
const Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: false,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: PropTypes.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: booleanType(),
    didUpdate: Function
  },
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const container = shallowRef();
    const componentRef = shallowRef();
    shallowRef();
    const triggerUpdate = shallowRef(1);
    const defaultContainer = canUseDom();
    const getContainer = () => {
      {
        return null;
      }
    };
    useScrollLocker(computed(() => {
      return props2.autoLock && props2.visible && canUseDom() && (container.value === (void 0).body || container.value === defaultContainer);
    }));
    return () => {
      const {
        forceRender,
        visible
      } = props2;
      let portal = null;
      const childProps = {
        getOpenCount: () => openCount,
        getContainer
      };
      if (triggerUpdate.value && (forceRender || visible || componentRef.value)) {
        portal = createVNode(Portal$1, {
          "getContainer": getContainer,
          "ref": componentRef,
          "didUpdate": props2.didUpdate
        }, {
          default: () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, childProps);
          }
        });
      }
      return portal;
    };
  }
});
const ALL_HANDLERS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
const Trigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: triggerProps(),
  setup(props2) {
    const align = computed(() => {
      const {
        popupPlacement,
        popupAlign,
        builtinPlacements
      } = props2;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    });
    const popupRef = shallowRef(null);
    const setPopupRef = (val) => {
      popupRef.value = val;
    };
    return {
      vcTriggerContext: inject("vcTriggerContext", {}),
      popupRef,
      setPopupRef,
      triggerRef: shallowRef(null),
      align,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: false,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data() {
    const props2 = this.$props;
    let popupVisible;
    if (this.popupVisible !== void 0) {
      popupVisible = !!props2.popupVisible;
    } else {
      popupVisible = !!props2.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach((h) => {
      this[`fire${h}`] = (e) => {
        this.fireEvents(h, e);
      };
    });
    return {
      prevPopupVisible: popupVisible,
      sPopupVisible: popupVisible,
      point: null
    };
  },
  watch: {
    popupVisible(val) {
      if (val !== void 0) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  created() {
    provide("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    });
    useProvidePortal(this);
  },
  deactivated() {
    this.setPopupVisible(false);
  },
  mounted() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  beforeUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
    wrapperRaf.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const props2 = this.$props;
      const state = this.$data;
      if (state.sPopupVisible) {
        let currentDocument;
        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props2.getDocument(this.getRootDomNode());
          this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
        }
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props2.getDocument(this.getRootDomNode());
          this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick, supportsPassive ? {
            passive: false
          } : false);
        }
        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props2.getDocument(this.getRootDomNode());
          this.contextmenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextmenuClose);
        }
        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = addEventListenerWrap(void 0, "blur", this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter(e) {
      const {
        mouseEnterDelay
      } = this.$props;
      this.fireEvents("onMouseenter", e);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
    },
    onMouseMove(e) {
      this.fireEvents("onMousemove", e);
      this.setPoint(e);
    },
    onMouseleave(e) {
      this.fireEvents("onMouseleave", e);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter() {
      const {
        vcTriggerContext = {}
      } = this;
      if (vcTriggerContext.onPopupMouseenter) {
        vcTriggerContext.onPopupMouseenter();
      }
      this.clearDelayTimer();
    },
    onPopupMouseleave(e) {
      var _a;
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && contains((_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.getElement(), e.relatedTarget)) {
        return;
      }
      if (this.isMouseLeaveToHide()) {
        this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
      }
      const {
        vcTriggerContext = {}
      } = this;
      if (vcTriggerContext.onPopupMouseleave) {
        vcTriggerContext.onPopupMouseleave(e);
      }
    },
    onFocus(e) {
      this.fireEvents("onFocus", e);
      this.clearDelayTimer();
      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown(e) {
      this.fireEvents("onMousedown", e);
      this.preClickTime = Date.now();
    },
    onTouchstart(e) {
      this.fireEvents("onTouchstart", e);
      this.preTouchTime = Date.now();
    },
    onBlur(e) {
      if (!contains(e.target, e.relatedTarget || (void 0).activeElement)) {
        this.fireEvents("onBlur", e);
        this.clearDelayTimer();
        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu(e) {
      e.preventDefault();
      this.fireEvents("onContextmenu", e);
      this.setPopupVisible(true, e);
    },
    onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick(event) {
      this.fireEvents("onClick", event);
      if (this.focusTime) {
        let preTime;
        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }
        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }
        this.focusTime = 0;
      }
      this.preClickTime = 0;
      this.preTouchTime = 0;
      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }
      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }
      const nextVisible = !this.$data.sPopupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown() {
      const {
        vcTriggerContext = {}
      } = this;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(() => {
        this.hasPopupMouseDown = false;
      }, 0);
      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown(...arguments);
      }
    },
    onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }
      const target = event.target;
      const root = this.getRootDomNode();
      const popupNode = this.getPopupDomNode();
      if (
        // mousedown on the target should also close popup when action is contextMenu.
        // https://github.com/ant-design/ant-design/issues/29853
        (!contains(root, target) || this.isContextMenuOnly()) && !contains(popupNode, target) && !this.hasPopupMouseDown
      ) {
        this.delaySetPopupVisible(false, 0.1);
      }
    },
    getPopupDomNode() {
      var _a;
      return ((_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.getElement()) || null;
    },
    getRootDomNode() {
      var _a, _b, _c, _d;
      const {
        getTriggerDOMNode
      } = this.$props;
      if (getTriggerDOMNode) {
        const domNode = ((_b = (_a = this.triggerRef) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.nodeName) === "#comment" ? null : findDOMNode(this.triggerRef);
        return findDOMNode(getTriggerDOMNode(domNode));
      }
      try {
        const domNode = ((_d = (_c = this.triggerRef) === null || _c === void 0 ? void 0 : _c.$el) === null || _d === void 0 ? void 0 : _d.nodeName) === "#comment" ? null : findDOMNode(this.triggerRef);
        if (domNode) {
          return domNode;
        }
      } catch (err) {
      }
      return findDOMNode(this);
    },
    handleGetPopupClassFromAlign(align) {
      const className = [];
      const props2 = this.$props;
      const {
        popupPlacement,
        builtinPlacements,
        prefixCls,
        alignPoint: alignPoint2,
        getPopupClassNameFromAlign
      } = props2;
      if (popupPlacement && builtinPlacements) {
        className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
      }
      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }
      return className.join(" ");
    },
    getPopupAlign() {
      const props2 = this.$props;
      const {
        popupPlacement,
        popupAlign,
        builtinPlacements
      } = props2;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    },
    getComponent() {
      const mouseProps = {};
      if (this.isMouseEnterToShow()) {
        mouseProps.onMouseenter = this.onPopupMouseenter;
      }
      if (this.isMouseLeaveToHide()) {
        mouseProps.onMouseleave = this.onPopupMouseleave;
      }
      mouseProps.onMousedown = this.onPopupMouseDown;
      mouseProps[supportsPassive ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign,
        getRootDomNode,
        $attrs
      } = this;
      const {
        prefixCls,
        destroyPopupOnHide,
        popupClassName,
        popupAnimation,
        popupTransitionName,
        popupStyle,
        mask,
        maskAnimation,
        maskTransitionName,
        zIndex,
        stretch,
        alignPoint: alignPoint2,
        mobile,
        forceRender
      } = this.$props;
      const {
        sPopupVisible,
        point
      } = this.$data;
      const popupProps2 = _extends(_extends({
        prefixCls,
        destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint2 ? point : null,
        align: this.align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign,
        stretch,
        getRootDomNode,
        mask,
        zIndex,
        transitionName: popupTransitionName,
        maskAnimation,
        maskTransitionName,
        class: popupClassName,
        style: popupStyle,
        onAlign: $attrs.onPopupAlign || noop$2
      }, mouseProps), {
        ref: this.setPopupRef,
        mobile,
        forceRender
      });
      return createVNode(Popup, popupProps2, {
        default: this.$slots.popup || (() => getComponent(this, "popup"))
      });
    },
    attachParent(popupContainer) {
      wrapperRaf.cancel(this.attachId);
      const {
        getPopupContainer,
        getDocument
      } = this.$props;
      const domNode = this.getRootDomNode();
      let mountNode;
      if (!getPopupContainer) {
        mountNode = getDocument(this.getRootDomNode()).body;
      } else if (domNode || getPopupContainer.length === 0) {
        mountNode = getPopupContainer(domNode);
      }
      if (mountNode) {
        mountNode.appendChild(popupContainer);
      } else {
        this.attachId = wrapperRaf(() => {
          this.attachParent(popupContainer);
        });
      }
    },
    getContainer() {
      const {
        $props: props2
      } = this;
      const {
        getDocument
      } = props2;
      const popupContainer = getDocument(this.getRootDomNode()).createElement("div");
      popupContainer.style.position = "absolute";
      popupContainer.style.top = "0";
      popupContainer.style.left = "0";
      popupContainer.style.width = "100%";
      this.attachParent(popupContainer);
      return popupContainer;
    },
    setPopupVisible(sPopupVisible, event) {
      const {
        alignPoint: alignPoint2,
        sPopupVisible: prevPopupVisible,
        onPopupVisibleChange
      } = this;
      this.clearDelayTimer();
      if (prevPopupVisible !== sPopupVisible) {
        if (!hasProp(this, "popupVisible")) {
          this.setState({
            sPopupVisible,
            prevPopupVisible
          });
        }
        onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
      }
      if (alignPoint2 && event && sPopupVisible) {
        this.setPoint(event);
      }
    },
    setPoint(point) {
      const {
        alignPoint: alignPoint2
      } = this.$props;
      if (!alignPoint2 || !point) return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    handlePortalUpdate() {
      if (this.prevPopupVisible !== this.sPopupVisible) {
        this.afterPopupVisibleChange(this.sPopupVisible);
      }
    },
    delaySetPopupVisible(visible, delayS, event) {
      const delay = delayS * 1e3;
      this.clearDelayTimer();
      if (delay) {
        const point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = setTimeout(() => {
          this.setPopupVisible(visible, point);
          this.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    },
    clearDelayTimer() {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }
      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains(event) {
      let fn = () => {
      };
      const events = getEvents(this);
      if (this.childOriginEvents[event] && events[event]) {
        return this[`fire${event}`];
      }
      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
    },
    isContextMenuOnly() {
      const {
        action
      } = this.$props;
      return action === "contextmenu" || action.length === 1 && action[0] === "contextmenu";
    },
    isContextmenuToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("contextmenu") !== -1 || showAction.indexOf("contextmenu") !== -1;
    },
    isClickToHide() {
      const {
        action,
        hideAction
      } = this.$props;
      return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
    },
    isMouseEnterToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("hover") !== -1 || showAction.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide() {
      const {
        action,
        hideAction
      } = this.$props;
      return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseleave") !== -1;
    },
    isFocusToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
    },
    isBlurToHide() {
      const {
        action,
        hideAction
      } = this.$props;
      return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
    },
    forcePopupAlign() {
      var _a;
      if (this.$data.sPopupVisible) {
        (_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.forceAlign();
      }
    },
    fireEvents(type, e) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e);
      }
      const event = this.$props[type] || this.$attrs[type];
      if (event) {
        event(e);
      }
    },
    close() {
      this.setPopupVisible(false);
    }
  },
  render() {
    const {
      $attrs
    } = this;
    const children = filterEmpty(getSlot(this));
    const {
      alignPoint: alignPoint2,
      getPopupContainer
    } = this.$props;
    const child = children[0];
    this.childOriginEvents = getEvents(child);
    const newChildProps = {
      key: "trigger"
    };
    if (this.isContextmenuToShow()) {
      newChildProps.onContextmenu = this.onContextmenu;
    } else {
      newChildProps.onContextmenu = this.createTwoChains("onContextmenu");
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMousedown = this.onMousedown;
      newChildProps[supportsPassive ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart;
    } else {
      newChildProps.onClick = this.createTwoChains("onClick");
      newChildProps.onMousedown = this.createTwoChains("onMousedown");
      newChildProps[supportsPassive ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart");
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseenter = this.onMouseenter;
      if (alignPoint2) {
        newChildProps.onMousemove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseenter = this.createTwoChains("onMouseenter");
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseleave = this.onMouseleave;
    } else {
      newChildProps.onMouseleave = this.createTwoChains("onMouseleave");
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains("onFocus");
      newChildProps.onBlur = (e) => {
        if (e && (!e.relatedTarget || !contains(e.target, e.relatedTarget))) {
          this.createTwoChains("onBlur")(e);
        }
      };
    }
    const childrenClassName = classNames(child && child.props && child.props.class, $attrs.class);
    if (childrenClassName) {
      newChildProps.class = childrenClassName;
    }
    const trigger2 = cloneElement(child, _extends(_extends({}, newChildProps), {
      ref: "triggerRef"
    }), true, true);
    const portal = createVNode(Portal, {
      "key": "portal",
      "getContainer": getPopupContainer && (() => getPopupContainer(this.getRootDomNode())),
      "didUpdate": this.handlePortalUpdate,
      "visible": this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return createVNode(Fragment, null, [trigger2, portal]);
  }
});
var __rest$d = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const getBuiltInPlacements = (dropdownMatchSelectWidth) => {
  const adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    }
  };
};
const SelectTrigger = defineComponent({
  name: "SelectTrigger",
  inheritAttrs: false,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: PropTypes.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: PropTypes.oneOfType([Number, Boolean]).def(true),
    popupElement: PropTypes.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function,
    onPopupFocusin: Function,
    onPopupFocusout: Function
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose
    } = _ref;
    const builtInPlacements = computed(() => {
      const {
        dropdownMatchSelectWidth
      } = props2;
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    });
    const popupRef = ref();
    expose({
      getPopupElement: () => {
        return popupRef.value;
      }
    });
    return () => {
      const _a = _extends(_extends({}, props2), attrs), {
        empty = false
      } = _a, restProps = __rest$d(_a, ["empty"]);
      const {
        visible,
        dropdownAlign,
        prefixCls,
        popupElement,
        dropdownClassName,
        dropdownStyle,
        direction = "ltr",
        placement,
        dropdownMatchSelectWidth,
        containerWidth,
        dropdownRender,
        animation,
        transitionName,
        getPopupContainer,
        getTriggerDOMNode,
        onPopupVisibleChange,
        onPopupMouseEnter,
        onPopupFocusin,
        onPopupFocusout
      } = restProps;
      const dropdownPrefixCls = `${prefixCls}-dropdown`;
      let popupNode = popupElement;
      if (dropdownRender) {
        popupNode = dropdownRender({
          menuNode: popupElement,
          props: props2
        });
      }
      const mergedTransitionName = animation ? `${dropdownPrefixCls}-${animation}` : transitionName;
      const popupStyle = _extends({
        minWidth: `${containerWidth}px`
      }, dropdownStyle);
      if (typeof dropdownMatchSelectWidth === "number") {
        popupStyle.width = `${dropdownMatchSelectWidth}px`;
      } else if (dropdownMatchSelectWidth) {
        popupStyle.width = `${containerWidth}px`;
      }
      return createVNode(Trigger, _objectSpread$6(_objectSpread$6({}, props2), {}, {
        "showAction": onPopupVisibleChange ? ["click"] : [],
        "hideAction": onPopupVisibleChange ? ["click"] : [],
        "popupPlacement": placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
        "builtinPlacements": builtInPlacements.value,
        "prefixCls": dropdownPrefixCls,
        "popupTransitionName": mergedTransitionName,
        "popupAlign": dropdownAlign,
        "popupVisible": visible,
        "getPopupContainer": getPopupContainer,
        "popupClassName": classNames(dropdownClassName, {
          [`${dropdownPrefixCls}-empty`]: empty
        }),
        "popupStyle": popupStyle,
        "getTriggerDOMNode": getTriggerDOMNode,
        "onPopupVisibleChange": onPopupVisibleChange
      }), {
        default: slots.default,
        popup: () => createVNode("div", {
          "ref": popupRef,
          "onMouseenter": onPopupMouseEnter,
          "onFocusin": onPopupFocusin,
          "onFocusout": onPopupFocusout
        }, [popupNode])
      });
    };
  }
});
const KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    const {
      keyCode
    } = e;
    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if ((void 0).navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
const TransBtn = (props2, _ref) => {
  let {
    slots
  } = _ref;
  var _a;
  const {
    class: className,
    customizeIcon,
    customizeIconProps,
    onMousedown,
    onClick
  } = props2;
  let icon;
  if (typeof customizeIcon === "function") {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return createVNode("span", {
    "class": className,
    "onMousedown": (event) => {
      event.preventDefault();
      if (onMousedown) {
        onMousedown(event);
      }
    },
    "style": {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    "unselectable": "on",
    "onClick": onClick,
    "aria-hidden": true
  }, [icon !== void 0 ? icon : createVNode("span", {
    "class": className.split(/\s+/).map((cls) => `${cls}-icon`)
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
};
TransBtn.inheritAttrs = false;
TransBtn.displayName = "TransBtn";
TransBtn.props = {
  class: String,
  customizeIcon: PropTypes.any,
  customizeIconProps: PropTypes.any,
  onMousedown: Function,
  onClick: Function
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  if (!e.target.composing) return;
  e.target.composing = false;
  trigger(e.target, "input");
}
function trigger(el, type) {
  const e = (void 0).createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
const antInput = {
  created(el, binding) {
    if (!binding.modifiers || !binding.modifiers.lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  }
};
const inputProps$2 = {
  inputRef: PropTypes.any,
  prefixCls: String,
  id: String,
  inputElement: PropTypes.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Pass accessibility props to input */
  attrs: PropTypes.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
};
const Input$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "SelectInput",
  inheritAttrs: false,
  props: inputProps$2,
  setup(props2) {
    let blurTimeout = null;
    const VCSelectContainerEvent = inject("VCSelectContainerEvent");
    return () => {
      var _a;
      const {
        prefixCls,
        id,
        inputElement,
        disabled,
        tabindex,
        autofocus,
        autocomplete,
        editable,
        activeDescendantId,
        value,
        onKeydown,
        onMousedown,
        onChange,
        onPaste,
        onCompositionstart,
        onCompositionend,
        onFocus,
        onBlur,
        open: open2,
        inputRef,
        attrs
      } = props2;
      let inputNode = inputElement || withDirectives(createVNode("input", null, null), [[antInput]]);
      const inputProps2 = inputNode.props || {};
      const {
        onKeydown: onOriginKeyDown,
        onInput: onOriginInput,
        onFocus: onOriginFocus,
        onBlur: onOriginBlur,
        onMousedown: onOriginMouseDown,
        onCompositionstart: onOriginCompositionStart,
        onCompositionend: onOriginCompositionEnd,
        style
      } = inputProps2;
      inputNode = cloneElement(inputNode, _extends(_extends(_extends(_extends(_extends({
        type: "search"
      }, inputProps2), {
        id,
        ref: inputRef,
        disabled,
        tabindex,
        autocomplete: autocomplete || "off",
        autofocus,
        class: classNames(`${prefixCls}-selection-search-input`, (_a = inputNode === null || inputNode === void 0 ? void 0 : inputNode.props) === null || _a === void 0 ? void 0 : _a.class),
        role: "combobox",
        "aria-expanded": open2,
        "aria-haspopup": "listbox",
        "aria-owns": `${id}_list`,
        "aria-autocomplete": "list",
        "aria-controls": `${id}_list`,
        "aria-activedescendant": activeDescendantId
      }), attrs), {
        value: editable ? value : "",
        readonly: !editable,
        unselectable: !editable ? "on" : null,
        style: _extends(_extends({}, style), {
          opacity: editable ? null : 0
        }),
        onKeydown: (event) => {
          onKeydown(event);
          if (onOriginKeyDown) {
            onOriginKeyDown(event);
          }
        },
        onMousedown: (event) => {
          onMousedown(event);
          if (onOriginMouseDown) {
            onOriginMouseDown(event);
          }
        },
        onInput: (event) => {
          onChange(event);
          if (onOriginInput) {
            onOriginInput(event);
          }
        },
        onCompositionstart(event) {
          onCompositionstart(event);
          if (onOriginCompositionStart) {
            onOriginCompositionStart(event);
          }
        },
        onCompositionend(event) {
          onCompositionend(event);
          if (onOriginCompositionEnd) {
            onOriginCompositionEnd(event);
          }
        },
        onPaste,
        onFocus: function() {
          clearTimeout(blurTimeout);
          onOriginFocus && onOriginFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          onFocus && onFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          blurTimeout = setTimeout(() => {
            onOriginBlur && onOriginBlur(args[0]);
            onBlur && onBlur(args[0]);
            VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.blur(args[0]);
          }, 100);
        }
      }), inputNode.type === "textarea" ? {} : {
        type: "search"
      }), true, true);
      return inputNode;
    };
  }
});
const attributes = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`;
const eventsName = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`;
const propList = `${attributes} ${eventsName}`.split(/[\s\n]+/);
const ariaPrefix = "aria-";
const dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props2) {
  let ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _extends({}, ariaOnly);
  }
  const attrs = {};
  Object.keys(props2).forEach((key) => {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && (propList.includes(key) || propList.includes(key.toLowerCase()))
    ) {
      attrs[key] = props2[key];
    }
  });
  return attrs;
}
const OverflowContextProviderKey = Symbol("OverflowContextProviderKey");
const OverflowContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    provide(OverflowContextProviderKey, computed(() => props2.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useInjectOverflowContext = () => {
  return inject(OverflowContextProviderKey, computed(() => null));
};
var __rest$c = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const UNDEFINED = void 0;
const Item$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: PropTypes.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropTypes.any,
    invalidate: Boolean
  },
  setup(props2, _ref) {
    let {
      slots,
      expose
    } = _ref;
    const mergedHidden = computed(() => props2.responsive && !props2.display);
    const itemNodeRef = ref();
    expose({
      itemNodeRef
    });
    function internalRegisterSize(width) {
      props2.registerSize(props2.itemKey, width);
    }
    return () => {
      var _a;
      const {
        prefixCls,
        invalidate,
        item,
        renderItem,
        responsive,
        registerSize,
        itemKey,
        display,
        order,
        component: Component = "div"
      } = props2, restProps = __rest$c(props2, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]);
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      const childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      let overflowStyle;
      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? "hidden" : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? "none" : UNDEFINED,
          position: mergedHidden.value ? "absolute" : UNDEFINED
        };
      }
      const overflowProps2 = {};
      if (mergedHidden.value) {
        overflowProps2["aria-hidden"] = true;
      }
      return createVNode(ResizeObserver, {
        "disabled": !responsive,
        "onResize": (_ref2) => {
          let {
            offsetWidth
          } = _ref2;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: () => createVNode(Component, _objectSpread$6(_objectSpread$6(_objectSpread$6({
          "class": classNames(!invalidate && prefixCls),
          "style": overflowStyle
        }, overflowProps2), restProps), {}, {
          "ref": itemNodeRef
        }), {
          default: () => [childNode]
        })
      });
    };
  }
});
var __rest$b = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const RawItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: false,
  props: {
    component: PropTypes.any,
    title: PropTypes.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    role: String,
    tabindex: Number
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const context = useInjectOverflowContext();
    return () => {
      var _a;
      if (!context.value) {
        const {
          component: Component = "div"
        } = props2, restProps2 = __rest$b(props2, ["component"]);
        return createVNode(Component, _objectSpread$6(_objectSpread$6({}, restProps2), attrs), {
          default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
        });
      }
      const _b = context.value, {
        className: contextClassName
      } = _b, restContext = __rest$b(_b, ["className"]);
      const {
        class: className
      } = attrs, restProps = __rest$b(attrs, ["class"]);
      return createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: () => [createVNode(Item$1, _objectSpread$6(_objectSpread$6(_objectSpread$6({
          "class": classNames(contextClassName, className)
        }, restContext), restProps), props2), slots)]
      });
    };
  }
});
var __rest$a = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const RESPONSIVE = "responsive";
const INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return `+ ${omittedItems.length} ...`;
}
const overflowProps = () => {
  return {
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest: Function,
    suffix: PropTypes.any,
    component: String,
    itemComponent: PropTypes.any,
    /** @private This API may be refactor since not well design */
    onVisibleChange: Function,
    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr: String,
    onMousedown: Function
  };
};
const Overflow = defineComponent({
  name: "Overflow",
  inheritAttrs: false,
  props: overflowProps(),
  emits: ["visibleChange"],
  setup(props2, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const fullySSR = computed(() => props2.ssr === "full");
    const containerWidth = shallowRef(null);
    const mergedContainerWidth = computed(() => containerWidth.value || 0);
    const itemWidths = shallowRef(/* @__PURE__ */ new Map());
    const prevRestWidth = shallowRef(0);
    const restWidth = shallowRef(0);
    const suffixWidth = shallowRef(0);
    const suffixFixedStart = shallowRef(null);
    const displayCount = shallowRef(null);
    const mergedDisplayCount = computed(() => {
      if (displayCount.value === null && fullySSR.value) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount.value || 0;
    });
    const restReady = shallowRef(false);
    const itemPrefixCls = computed(() => `${props2.prefixCls}-item`);
    const mergedRestWidth = computed(() => Math.max(prevRestWidth.value, restWidth.value));
    const isResponsive = computed(() => !!(props2.data.length && props2.maxCount === RESPONSIVE));
    const invalidate = computed(() => props2.maxCount === INVALIDATE);
    const showRest = computed(() => isResponsive.value || typeof props2.maxCount === "number" && props2.data.length > props2.maxCount);
    const mergedData = computed(() => {
      let items = props2.data;
      if (isResponsive.value) {
        if (containerWidth.value === null && fullySSR.value) {
          items = props2.data;
        } else {
          items = props2.data.slice(0, Math.min(props2.data.length, mergedContainerWidth.value / props2.itemWidth));
        }
      } else if (typeof props2.maxCount === "number") {
        items = props2.data.slice(0, props2.maxCount);
      }
      return items;
    });
    const omittedItems = computed(() => {
      if (isResponsive.value) {
        return props2.data.slice(mergedDisplayCount.value + 1);
      }
      return props2.data.slice(mergedData.value.length);
    });
    const getKey2 = (item, index) => {
      var _a;
      if (typeof props2.itemKey === "function") {
        return props2.itemKey(item);
      }
      return (_a = props2.itemKey && (item === null || item === void 0 ? void 0 : item[props2.itemKey])) !== null && _a !== void 0 ? _a : index;
    };
    const mergedRenderItem = computed(() => props2.renderItem || ((item) => item));
    const updateDisplayCount = (count, notReady) => {
      displayCount.value = count;
      if (!notReady) {
        restReady.value = count < props2.data.length - 1;
        emit("visibleChange", count);
      }
    };
    const onOverflowResize = (_, element) => {
      containerWidth.value = element.clientWidth;
    };
    const registerSize = (key, width) => {
      const clone = new Map(itemWidths.value);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      itemWidths.value = clone;
    };
    const registerOverflowSize = (_, width) => {
      prevRestWidth.value = restWidth.value;
      restWidth.value = width;
    };
    const registerSuffixSize = (_, width) => {
      suffixWidth.value = width;
    };
    const getItemWidth = (index) => {
      return itemWidths.value.get(getKey2(mergedData.value[index], index));
    };
    watch([mergedContainerWidth, itemWidths, restWidth, suffixWidth, () => props2.itemKey, mergedData], () => {
      if (mergedContainerWidth.value && mergedRestWidth.value && mergedData.value) {
        let totalWidth = suffixWidth.value;
        const len = mergedData.value.length;
        const lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0);
          suffixFixedStart.value = null;
          return;
        }
        for (let i = 0; i < len; i += 1) {
          const currentItemWidth = getItemWidth(i);
          if (currentItemWidth === void 0) {
            updateDisplayCount(i - 1, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (
            // Only one means `totalWidth` is the final width
            lastIndex === 0 && totalWidth <= mergedContainerWidth.value || // Last two width will be the final width
            i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth.value
          ) {
            updateDisplayCount(lastIndex);
            suffixFixedStart.value = null;
            break;
          } else if (totalWidth + mergedRestWidth.value > mergedContainerWidth.value) {
            updateDisplayCount(i - 1);
            suffixFixedStart.value = totalWidth - currentItemWidth - suffixWidth.value + restWidth.value;
            break;
          }
        }
        if (props2.suffix && getItemWidth(0) + suffixWidth.value > mergedContainerWidth.value) {
          suffixFixedStart.value = null;
        }
      }
    });
    return () => {
      const displayRest = restReady.value && !!omittedItems.value.length;
      const {
        itemComponent,
        renderRawItem,
        renderRawRest,
        renderRest,
        prefixCls = "rc-overflow",
        suffix,
        component: Component = "div",
        id,
        onMousedown
      } = props2;
      const {
        class: className,
        style
      } = attrs, restAttrs = __rest$a(attrs, ["class", "style"]);
      let suffixStyle = {};
      if (suffixFixedStart.value !== null && isResponsive.value) {
        suffixStyle = {
          position: "absolute",
          left: `${suffixFixedStart.value}px`,
          top: 0
        };
      }
      const itemSharedProps = {
        prefixCls: itemPrefixCls.value,
        responsive: isResponsive.value,
        component: itemComponent,
        invalidate: invalidate.value
      };
      const internalRenderItemNode = renderRawItem ? (item, index) => {
        const key = getKey2(item, index);
        return createVNode(OverflowContextProvider, {
          "key": key,
          "value": _extends(_extends({}, itemSharedProps), {
            order: index,
            item,
            itemKey: key,
            registerSize,
            display: index <= mergedDisplayCount.value
          })
        }, {
          default: () => [renderRawItem(item, index)]
        });
      } : (item, index) => {
        const key = getKey2(item, index);
        return createVNode(Item$1, _objectSpread$6(_objectSpread$6({}, itemSharedProps), {}, {
          "order": index,
          "key": key,
          "item": item,
          "renderItem": mergedRenderItem.value,
          "itemKey": key,
          "registerSize": registerSize,
          "display": index <= mergedDisplayCount.value
        }), null);
      };
      let restNode = () => null;
      const restContextProps = {
        order: displayRest ? mergedDisplayCount.value : Number.MAX_SAFE_INTEGER,
        className: `${itemPrefixCls.value} ${itemPrefixCls.value}-rest`,
        registerSize: registerOverflowSize,
        display: displayRest
      };
      if (!renderRawRest) {
        const mergedRenderRest = renderRest || defaultRenderRest;
        restNode = () => createVNode(Item$1, _objectSpread$6(_objectSpread$6({}, itemSharedProps), restContextProps), {
          default: () => typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems.value) : mergedRenderRest
        });
      } else if (renderRawRest) {
        restNode = () => createVNode(OverflowContextProvider, {
          "value": _extends(_extends({}, itemSharedProps), restContextProps)
        }, {
          default: () => [renderRawRest(omittedItems.value)]
        });
      }
      const overflowNode = () => {
        var _a;
        return createVNode(Component, _objectSpread$6({
          "id": id,
          "class": classNames(!invalidate.value && prefixCls, className),
          "style": style,
          "onMousedown": onMousedown
        }, restAttrs), {
          default: () => [mergedData.value.map(internalRenderItemNode), showRest.value ? restNode() : null, suffix && createVNode(Item$1, _objectSpread$6(_objectSpread$6({}, itemSharedProps), {}, {
            "order": mergedDisplayCount.value,
            "class": `${itemPrefixCls.value}-suffix`,
            "registerSize": registerSuffixSize,
            "display": true,
            "style": suffixStyle
          }), {
            default: () => suffix
          }), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
        });
      };
      return createVNode(ResizeObserver, {
        "disabled": !isResponsive.value,
        "onResize": onOverflowResize
      }, {
        default: overflowNode
      });
    };
  }
});
Overflow.Item = RawItem;
Overflow.RESPONSIVE = RESPONSIVE;
Overflow.INVALIDATE = INVALIDATE;
const TreeSelectLegacyContextPropsKey = Symbol("TreeSelectLegacyContextPropsKey");
function useInjectLegacySelectContext() {
  return inject(TreeSelectLegacyContextPropsKey, {});
}
const props$1 = {
  id: String,
  prefixCls: String,
  values: PropTypes.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeIcon: PropTypes.any,
  choiceTransitionName: String,
  maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: PropTypes.any.def(() => (omittedValues) => `+ ${omittedValues.length} ...`),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
const onPreventMouseDown = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
const SelectSelector = defineComponent({
  name: "MultipleSelectSelector",
  inheritAttrs: false,
  props: props$1,
  setup(props2) {
    const measureRef = shallowRef();
    const inputWidth = shallowRef(0);
    const focused = shallowRef(false);
    const legacyTreeSelectContext = useInjectLegacySelectContext();
    const selectionPrefixCls = computed(() => `${props2.prefixCls}-selection`);
    const inputValue = computed(() => props2.open || props2.mode === "tags" ? props2.searchValue : "");
    const inputEditable = computed(() => props2.mode === "tags" || props2.showSearch && (props2.open || focused.value));
    function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
      return createVNode("span", {
        "class": classNames(`${selectionPrefixCls.value}-item`, {
          [`${selectionPrefixCls.value}-item-disabled`]: itemDisabled
        }),
        "title": typeof title === "string" || typeof title === "number" ? title.toString() : void 0
      }, [createVNode("span", {
        "class": `${selectionPrefixCls.value}-item-content`
      }, [content]), closable && createVNode(TransBtn, {
        "class": `${selectionPrefixCls.value}-item-remove`,
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props2.removeIcon
      }, {
        default: () => [createTextVNode("\xD7")]
      })]);
    }
    function customizeRenderSelector(value, content, itemDisabled, closable, onClose, option) {
      var _a;
      const onMouseDown = (e) => {
        onPreventMouseDown(e);
        props2.onToggleOpen(!open);
      };
      let originData = option;
      if (legacyTreeSelectContext.keyEntities) {
        originData = ((_a = legacyTreeSelectContext.keyEntities[value]) === null || _a === void 0 ? void 0 : _a.node) || {};
      }
      return createVNode("span", {
        "key": value,
        "onMousedown": onMouseDown
      }, [props2.tagRender({
        label: content,
        value,
        disabled: itemDisabled,
        closable,
        onClose,
        option: originData
      })]);
    }
    function renderItem(valueItem) {
      const {
        disabled: itemDisabled,
        label,
        value,
        option
      } = valueItem;
      const closable = !props2.disabled && !itemDisabled;
      let displayLabel = label;
      if (typeof props2.maxTagTextLength === "number") {
        if (typeof label === "string" || typeof label === "number") {
          const strLabel = String(displayLabel);
          if (strLabel.length > props2.maxTagTextLength) {
            displayLabel = `${strLabel.slice(0, props2.maxTagTextLength)}...`;
          }
        }
      }
      const onClose = (event) => {
        var _a;
        if (event) event.stopPropagation();
        (_a = props2.onRemove) === null || _a === void 0 ? void 0 : _a.call(props2, valueItem);
      };
      return typeof props2.tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose, option) : defaultRenderSelector(label, displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      const {
        maxTagPlaceholder = (omittedValues2) => `+ ${omittedValues2.length} ...`
      } = props2;
      const content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, content, false);
    }
    return () => {
      const {
        id,
        prefixCls,
        values,
        open: open2,
        inputRef,
        placeholder,
        disabled,
        autofocus,
        autocomplete,
        activeDescendantId,
        tabindex,
        onInputChange,
        onInputPaste,
        onInputKeyDown,
        onInputMouseDown,
        onInputCompositionStart,
        onInputCompositionEnd
      } = props2;
      const inputNode = createVNode("div", {
        "class": `${selectionPrefixCls.value}-search`,
        "style": {
          width: inputWidth.value + "px"
        },
        "key": "input"
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "open": open2,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": onInputChange,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true),
        "onFocus": () => focused.value = true,
        "onBlur": () => focused.value = false
      }, null), createVNode("span", {
        "ref": measureRef,
        "class": `${selectionPrefixCls.value}-search-mirror`,
        "aria-hidden": true
      }, [inputValue.value, createTextVNode("\xA0")])]);
      const selectionNode = createVNode(Overflow, {
        "prefixCls": `${selectionPrefixCls.value}-overflow`,
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props2.maxTagCount,
        "key": "overflow"
      }, null);
      return createVNode(Fragment, null, [selectionNode, !values.length && !inputValue.value && createVNode("span", {
        "class": `${selectionPrefixCls.value}-placeholder`
      }, [placeholder])]);
    };
  }
});
const props = {
  inputElement: PropTypes.any,
  id: String,
  prefixCls: String,
  values: PropTypes.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
const SingleSelector = defineComponent({
  name: "SingleSelector",
  setup(props2) {
    const inputChanged = shallowRef(false);
    const combobox = computed(() => props2.mode === "combobox");
    const inputEditable = computed(() => combobox.value || props2.showSearch);
    const inputValue = computed(() => {
      let inputValue2 = props2.searchValue || "";
      if (combobox.value && props2.activeValue && !inputChanged.value) {
        inputValue2 = props2.activeValue;
      }
      return inputValue2;
    });
    const legacyTreeSelectContext = useInjectLegacySelectContext();
    watch([combobox, () => props2.activeValue], () => {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    });
    const hasTextInput = computed(() => props2.mode !== "combobox" && !props2.open && !props2.showSearch ? false : !!inputValue.value);
    const title = computed(() => {
      const item = props2.values[0];
      return item && (typeof item.label === "string" || typeof item.label === "number") ? item.label.toString() : void 0;
    });
    const renderPlaceholder = () => {
      if (props2.values[0]) {
        return null;
      }
      const hiddenStyle = hasTextInput.value ? {
        visibility: "hidden"
      } : void 0;
      return createVNode("span", {
        "class": `${props2.prefixCls}-selection-placeholder`,
        "style": hiddenStyle
      }, [props2.placeholder]);
    };
    return () => {
      var _a, _b, _c, _d;
      const {
        inputElement,
        prefixCls,
        id,
        values,
        inputRef,
        disabled,
        autofocus,
        autocomplete,
        activeDescendantId,
        open: open2,
        tabindex,
        optionLabelRender,
        onInputKeyDown,
        onInputMouseDown,
        onInputChange,
        onInputPaste,
        onInputCompositionStart,
        onInputCompositionEnd
      } = props2;
      const item = values[0];
      let titleNode = null;
      if (item && legacyTreeSelectContext.customSlots) {
        const key = (_a = item.key) !== null && _a !== void 0 ? _a : item.value;
        const originData = ((_b = legacyTreeSelectContext.keyEntities[key]) === null || _b === void 0 ? void 0 : _b.node) || {};
        titleNode = legacyTreeSelectContext.customSlots[(_c = originData.slots) === null || _c === void 0 ? void 0 : _c.title] || legacyTreeSelectContext.customSlots.title || item.label;
        if (typeof titleNode === "function") {
          titleNode = titleNode(originData);
        }
      } else {
        titleNode = optionLabelRender && item ? optionLabelRender(item.option) : item === null || item === void 0 ? void 0 : item.label;
      }
      return createVNode(Fragment, null, [createVNode("span", {
        "class": `${prefixCls}-selection-search`
      }, [createVNode(Input$1, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id,
        "open": open2,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": (e) => {
          inputChanged.value = true;
          onInputChange(e);
        },
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && createVNode("span", {
        "class": `${prefixCls}-selection-item`,
        "title": title.value
      }, [createVNode(Fragment, {
        "key": (_d = item.key) !== null && _d !== void 0 ? _d : item.value
      }, [titleNode])]), renderPlaceholder()]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
function isValidateOpenKey(currentKeyCode) {
  return ![
    // System function button
    KeyCode.ESC,
    KeyCode.SHIFT,
    KeyCode.BACKSPACE,
    KeyCode.TAB,
    KeyCode.WIN_KEY,
    KeyCode.ALT,
    KeyCode.META,
    KeyCode.WIN_KEY_RIGHT,
    KeyCode.CTRL,
    KeyCode.SEMICOLON,
    KeyCode.EQUALS,
    KeyCode.CAPS_LOCK,
    KeyCode.CONTEXT_MENU,
    // F1-F12
    KeyCode.F1,
    KeyCode.F2,
    KeyCode.F3,
    KeyCode.F4,
    KeyCode.F5,
    KeyCode.F6,
    KeyCode.F7,
    KeyCode.F8,
    KeyCode.F9,
    KeyCode.F10,
    KeyCode.F11,
    KeyCode.F12
  ].includes(currentKeyCode);
}
function useLock() {
  let duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  let lock = null;
  let timeout;
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      lock = null;
    }, duration);
  }
  return [() => lock, doLock];
}
function createRef() {
  const func = (node) => {
    func.current = node;
  };
  return func;
}
const Selector = defineComponent({
  name: "Selector",
  inheritAttrs: false,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    /** Display in the Selector value, it's not same as `value` prop */
    values: PropTypes.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: PropTypes.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: PropTypes.any,
    removeIcon: PropTypes.any,
    // Tags
    maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: PropTypes.any,
    tagRender: Function,
    optionLabelRender: Function,
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    // Motion
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: Function
  },
  setup(props2, _ref) {
    let {
      expose
    } = _ref;
    const inputRef = createRef();
    let compositionStatus = false;
    const [getInputMouseDown, setInputMouseDown] = useLock(0);
    const onInternalInputKeyDown = (event) => {
      const {
        which
      } = event;
      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        event.preventDefault();
      }
      if (props2.onInputKeyDown) {
        props2.onInputKeyDown(event);
      }
      if (which === KeyCode.ENTER && props2.mode === "tags" && !compositionStatus && !props2.open) {
        props2.onSearchSubmit(event.target.value);
      }
      if (isValidateOpenKey(which)) {
        props2.onToggleOpen(true);
      }
    };
    const onInternalInputMouseDown = () => {
      setInputMouseDown(true);
    };
    let pastedText = null;
    const triggerOnSearch = (value) => {
      if (props2.onSearch(value, true, compositionStatus) !== false) {
        props2.onToggleOpen(true);
      }
    };
    const onInputCompositionStart = () => {
      compositionStatus = true;
    };
    const onInputCompositionEnd = (e) => {
      compositionStatus = false;
      if (props2.mode !== "combobox") {
        triggerOnSearch(e.target.value);
      }
    };
    const onInputChange = (event) => {
      let {
        target: {
          value
        }
      } = event;
      if (props2.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        const replacedText = pastedText.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        value = value.replace(replacedText, pastedText);
      }
      pastedText = null;
      triggerOnSearch(value);
    };
    const onInputPaste = (e) => {
      const {
        clipboardData
      } = e;
      const value = clipboardData.getData("text");
      pastedText = value;
    };
    const onClick = (_ref2) => {
      let {
        target
      } = _ref2;
      if (target !== inputRef.current) {
        const isIE = (void 0).body.style.msTouchAction !== void 0;
        if (isIE) {
          setTimeout(() => {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    const onMousedown = (event) => {
      const inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }
      if (props2.mode !== "combobox" && (!props2.showSearch || !inputMouseDown) || !props2.open) {
        if (props2.open) {
          props2.onSearch("", true, false);
        }
        props2.onToggleOpen();
      }
    };
    expose({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      }
    });
    return () => {
      const {
        prefixCls,
        domRef,
        mode
      } = props2;
      const sharedProps = {
        inputRef,
        onInputKeyDown: onInternalInputKeyDown,
        onInputMouseDown: onInternalInputMouseDown,
        onInputChange,
        onInputPaste,
        onInputCompositionStart,
        onInputCompositionEnd
      };
      const selectNode = mode === "multiple" || mode === "tags" ? createVNode(SelectSelector, _objectSpread$6(_objectSpread$6({}, props2), sharedProps), null) : createVNode(SingleSelector, _objectSpread$6(_objectSpread$6({}, props2), sharedProps), null);
      return createVNode("div", {
        "ref": domRef,
        "class": `${prefixCls}-selector`,
        "onClick": onClick,
        "onMousedown": onMousedown
      }, [selectNode]);
    };
  }
});
function useDelayReset() {
  let timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const bool = shallowRef(false);
  let delay;
  const cancelLatest = () => {
    clearTimeout(delay);
  };
  const delaySetBool = (value, callback) => {
    cancelLatest();
    delay = setTimeout(() => {
      bool.value = value;
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
const BaseSelectContextKey = Symbol("BaseSelectContextKey");
function useProvideBaseSelectProps(props2) {
  return provide(BaseSelectContextKey, props2);
}
function useBaseProps() {
  return inject(BaseSelectContextKey, {});
}
function toReactive(objectRef) {
  if (!isRef(objectRef)) return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
var __rest$9 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"];
const baseSelectPrivateProps = () => {
  return {
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    // >>> Value
    displayValues: Array,
    onDisplayValuesChange: Function,
    // >>> Active
    /** Current dropdown list active item string value */
    activeValue: String,
    /** Link search input with target element */
    activeDescendantId: String,
    onActiveValueChange: Function,
    // >>> Search
    searchValue: String,
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: Function,
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: PropTypes.any,
    /** Tell if provided `options` is empty */
    emptyOptions: Boolean
  };
};
const baseSelectPropsWithoutPrivate = () => {
  return {
    showSearch: {
      type: Boolean,
      default: void 0
    },
    tagRender: {
      type: Function
    },
    optionLabelRender: {
      type: Function
    },
    direction: {
      type: String
    },
    // MISC
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: PropTypes.any,
    placeholder: PropTypes.any,
    onClear: Function,
    choiceTransitionName: String,
    // >>> Mode
    mode: String,
    // >>> Status
    disabled: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    // >>> Open
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    onDropdownVisibleChange: {
      type: Function
    },
    // >>> Customize Input
    /** @private Internal usage. Do not use in your production. */
    getInputElement: {
      type: Function
    },
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement: {
      type: Function
    },
    // >>> Selector
    maxTagTextLength: Number,
    maxTagCount: {
      type: [String, Number]
    },
    maxTagPlaceholder: PropTypes.any,
    // >>> Search
    tokenSeparators: {
      type: Array
    },
    // >>> Icons
    allowClear: {
      type: Boolean,
      default: void 0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    inputIcon: PropTypes.any,
    /** Clear all icon */
    clearIcon: PropTypes.any,
    /** Selector remove icon */
    removeIcon: PropTypes.any,
    // >>> Dropdown
    animation: String,
    transitionName: String,
    dropdownStyle: {
      type: Object
    },
    dropdownClassName: String,
    dropdownMatchSelectWidth: {
      type: [Boolean, Number],
      default: void 0
    },
    dropdownRender: {
      type: Function
    },
    dropdownAlign: Object,
    placement: {
      type: String
    },
    getPopupContainer: {
      type: Function
    },
    // >>> Focus
    showAction: {
      type: Array
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    // >>> Rest Events
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
const baseSelectProps = () => {
  return _extends(_extends({}, baseSelectPrivateProps()), baseSelectPropsWithoutPrivate());
};
function isMultiple(mode) {
  return mode === "tags" || mode === "multiple";
}
const BaseSelect = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: false,
  props: initDefaultProps(baseSelectProps(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup(props2, _ref) {
    let {
      attrs,
      expose,
      slots
    } = _ref;
    const multiple = computed(() => isMultiple(props2.mode));
    const mergedShowSearch = computed(() => props2.showSearch !== void 0 ? props2.showSearch : multiple.value || props2.mode === "combobox");
    const mobile = shallowRef(false);
    const legacyTreeSelectContext = useInjectLegacySelectContext();
    const containerRef = shallowRef(null);
    const selectorDomRef = createRef();
    const triggerRef = shallowRef(null);
    const selectorRef = shallowRef(null);
    const listRef = shallowRef(null);
    const blurRef = ref(false);
    const [mockFocused, setMockFocused, cancelSetMockFocused] = useDelayReset();
    const focus = () => {
      var _a;
      (_a = selectorRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = selectorRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur,
      scrollTo: (arg) => {
        var _a;
        return (_a = listRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
      }
    });
    const mergedSearchValue = computed(() => {
      var _a;
      if (props2.mode !== "combobox") {
        return props2.searchValue;
      }
      const val = (_a = props2.displayValues[0]) === null || _a === void 0 ? void 0 : _a.value;
      return typeof val === "string" || typeof val === "number" ? String(val) : "";
    });
    const initOpen = props2.open !== void 0 ? props2.open : props2.defaultOpen;
    const innerOpen = shallowRef(initOpen);
    const mergedOpen = shallowRef(initOpen);
    const setInnerOpen = (val) => {
      innerOpen.value = props2.open !== void 0 ? props2.open : val;
      mergedOpen.value = innerOpen.value;
    };
    watch(() => props2.open, () => {
      setInnerOpen(props2.open);
    });
    const emptyListContent = computed(() => !props2.notFoundContent && props2.emptyOptions);
    watchEffect(() => {
      mergedOpen.value = innerOpen.value;
      if (props2.disabled || emptyListContent.value && mergedOpen.value && props2.mode === "combobox") {
        mergedOpen.value = false;
      }
    });
    const triggerOpen = computed(() => emptyListContent.value ? false : mergedOpen.value);
    const onToggleOpen = (newOpen) => {
      const nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen.value;
      if (mergedOpen.value !== nextOpen && !props2.disabled) {
        setInnerOpen(nextOpen);
        props2.onDropdownVisibleChange && props2.onDropdownVisibleChange(nextOpen);
      }
    };
    const tokenWithEnter = computed(() => (props2.tokenSeparators || []).some((tokenSeparator) => ["\n", "\r\n"].includes(tokenSeparator)));
    const onInternalSearch = (searchText, fromTyping, isCompositing) => {
      var _a, _b;
      let ret = true;
      let newSearchText = searchText;
      (_a = props2.onActiveValueChange) === null || _a === void 0 ? void 0 : _a.call(props2, null);
      const patchLabels = isCompositing ? null : getSeparatedContent(searchText, props2.tokenSeparators);
      if (props2.mode !== "combobox" && patchLabels) {
        newSearchText = "";
        (_b = props2.onSearchSplit) === null || _b === void 0 ? void 0 : _b.call(props2, patchLabels);
        onToggleOpen(false);
        ret = false;
      }
      if (props2.onSearch && mergedSearchValue.value !== newSearchText) {
        props2.onSearch(newSearchText, {
          source: fromTyping ? "typing" : "effect"
        });
      }
      return ret;
    };
    const onInternalSearchSubmit = (searchText) => {
      var _a;
      if (!searchText || !searchText.trim()) {
        return;
      }
      (_a = props2.onSearch) === null || _a === void 0 ? void 0 : _a.call(props2, searchText, {
        source: "submit"
      });
    };
    watch(mergedOpen, () => {
      if (!mergedOpen.value && !multiple.value && props2.mode !== "combobox") {
        onInternalSearch("", false, false);
      }
    }, {
      immediate: true,
      flush: "post"
    });
    watch(() => props2.disabled, () => {
      if (innerOpen.value && !!props2.disabled) {
        setInnerOpen(false);
      }
      if (props2.disabled && !blurRef.value) {
        setMockFocused(false);
      }
    }, {
      immediate: true
    });
    const [getClearLock, setClearLock] = useLock();
    const onInternalKeyDown = function(event) {
      var _a;
      const clearLock = getClearLock();
      const {
        which
      } = event;
      if (which === KeyCode.ENTER) {
        if (props2.mode !== "combobox") {
          event.preventDefault();
        }
        if (!mergedOpen.value) {
          onToggleOpen(true);
        }
      }
      setClearLock(!!mergedSearchValue.value);
      if (which === KeyCode.BACKSPACE && !clearLock && multiple.value && !mergedSearchValue.value && props2.displayValues.length) {
        const cloneDisplayValues = [...props2.displayValues];
        let removedDisplayValue = null;
        for (let i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
          const current = cloneDisplayValues[i];
          if (!current.disabled) {
            cloneDisplayValues.splice(i, 1);
            removedDisplayValue = current;
            break;
          }
        }
        if (removedDisplayValue) {
          props2.onDisplayValuesChange(cloneDisplayValues, {
            type: "remove",
            values: [removedDisplayValue]
          });
        }
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      if (mergedOpen.value && listRef.value) {
        listRef.value.onKeydown(event, ...rest);
      }
      (_a = props2.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props2, event, ...rest);
    };
    const onInternalKeyUp = function(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      if (mergedOpen.value && listRef.value) {
        listRef.value.onKeyup(event, ...rest);
      }
      if (props2.onKeyup) {
        props2.onKeyup(event, ...rest);
      }
    };
    const onSelectorRemove = (val) => {
      const newValues = props2.displayValues.filter((i) => i !== val);
      props2.onDisplayValuesChange(newValues, {
        type: "remove",
        values: [val]
      });
    };
    const focusRef = shallowRef(false);
    const onContainerFocus = function() {
      setMockFocused(true);
      if (!props2.disabled) {
        if (props2.onFocus && !focusRef.value) {
          props2.onFocus(...arguments);
        }
        if (props2.showAction && props2.showAction.includes("focus")) {
          onToggleOpen(true);
        }
      }
      focusRef.value = true;
    };
    const popupFocused = ref(false);
    const onContainerBlur = function() {
      if (popupFocused.value) {
        return;
      }
      blurRef.value = true;
      setMockFocused(false, () => {
        focusRef.value = false;
        blurRef.value = false;
        onToggleOpen(false);
      });
      if (props2.disabled) {
        return;
      }
      const searchVal = mergedSearchValue.value;
      if (searchVal) {
        if (props2.mode === "tags") {
          props2.onSearch(searchVal, {
            source: "submit"
          });
        } else if (props2.mode === "multiple") {
          props2.onSearch("", {
            source: "blur"
          });
        }
      }
      if (props2.onBlur) {
        props2.onBlur(...arguments);
      }
    };
    const onPopupFocusin = () => {
      popupFocused.value = true;
    };
    const onPopupFocusout = () => {
      popupFocused.value = false;
    };
    provide("VCSelectContainerEvent", {
      focus: onContainerFocus,
      blur: onContainerBlur
    });
    const onInternalMouseDown = function(event) {
      var _a, _b;
      const {
        target
      } = event;
      const popupElement = (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.getPopupElement();
      if (popupElement && popupElement.contains(target)) {
        setTimeout(() => {
          var _a2;
          cancelSetMockFocused();
          if (!mobile.value && !popupElement.contains((void 0).activeElement)) {
            (_a2 = selectorRef.value) === null || _a2 === void 0 ? void 0 : _a2.focus();
          }
        });
      }
      for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        restArgs[_key3 - 1] = arguments[_key3];
      }
      (_b = props2.onMousedown) === null || _b === void 0 ? void 0 : _b.call(props2, event, ...restArgs);
    };
    const containerWidth = shallowRef(null);
    const onPopupMouseEnter = () => {
    };
    useProvideBaseSelectProps(toReactive(_extends(_extends({}, toRefs(props2)), {
      open: mergedOpen,
      triggerOpen,
      showSearch: mergedShowSearch,
      multiple,
      toggleOpen: onToggleOpen
    })));
    return () => {
      const _a = _extends(_extends({}, props2), attrs), {
        prefixCls,
        id,
        open: open2,
        defaultOpen,
        mode,
        // Search related
        showSearch,
        searchValue,
        onSearch,
        // Icons
        allowClear,
        clearIcon,
        showArrow,
        inputIcon,
        // Others
        disabled,
        loading,
        getInputElement,
        getPopupContainer,
        placement,
        // Dropdown
        animation,
        transitionName,
        dropdownStyle,
        dropdownClassName,
        dropdownMatchSelectWidth,
        dropdownRender,
        dropdownAlign,
        showAction,
        direction,
        // Tags
        tokenSeparators,
        tagRender,
        optionLabelRender,
        // Events
        onPopupScroll,
        onDropdownVisibleChange,
        onFocus,
        onBlur,
        onKeyup,
        onKeydown,
        onMousedown,
        onClear,
        omitDomProps,
        getRawInputElement,
        displayValues,
        onDisplayValuesChange,
        emptyOptions,
        activeDescendantId,
        activeValue,
        OptionList: OptionList2
      } = _a, restProps = __rest$9(_a, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]);
      const customizeInputElement = mode === "combobox" && getInputElement && getInputElement() || null;
      const customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
      const domProps = _extends({}, restProps);
      let onTriggerVisibleChange;
      if (customizeRawInputElement) {
        onTriggerVisibleChange = (newOpen) => {
          onToggleOpen(newOpen);
        };
      }
      DEFAULT_OMIT_PROPS.forEach((propName) => {
        delete domProps[propName];
      });
      omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach((propName) => {
        delete domProps[propName];
      });
      const mergedShowArrow = showArrow !== void 0 ? showArrow : loading || !multiple.value && mode !== "combobox";
      let arrowNode;
      if (mergedShowArrow) {
        arrowNode = createVNode(TransBtn, {
          "class": classNames(`${prefixCls}-arrow`, {
            [`${prefixCls}-arrow-loading`]: loading
          }),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading,
            searchValue: mergedSearchValue.value,
            open: mergedOpen.value,
            focused: mockFocused.value,
            showSearch: mergedShowSearch.value
          }
        }, null);
      }
      let clearNode;
      const onClearMouseDown = () => {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onDisplayValuesChange([], {
          type: "clear",
          values: displayValues
        });
        onInternalSearch("", false, false);
      };
      if (!disabled && allowClear && (displayValues.length || mergedSearchValue.value)) {
        clearNode = createVNode(TransBtn, {
          "class": `${prefixCls}-clear`,
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: () => [createTextVNode("\xD7")]
        });
      }
      const optionList = createVNode(OptionList2, {
        "ref": listRef
      }, _extends(_extends({}, legacyTreeSelectContext.customSlots), {
        option: slots.option
      }));
      const mergedClassName = classNames(prefixCls, attrs.class, {
        [`${prefixCls}-focused`]: mockFocused.value,
        [`${prefixCls}-multiple`]: multiple.value,
        [`${prefixCls}-single`]: !multiple.value,
        [`${prefixCls}-allow-clear`]: allowClear,
        [`${prefixCls}-show-arrow`]: mergedShowArrow,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-open`]: mergedOpen.value,
        [`${prefixCls}-customize-input`]: customizeInputElement,
        [`${prefixCls}-show-search`]: mergedShowSearch.value
      });
      const selectorNode = createVNode(SelectTrigger, {
        "ref": triggerRef,
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen.value,
        "popupElement": optionList,
        "containerWidth": containerWidth.value,
        "animation": animation,
        "transitionName": transitionName,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "placement": placement,
        "getPopupContainer": getPopupContainer,
        "empty": emptyOptions,
        "getTriggerDOMNode": () => selectorDomRef.current,
        "onPopupVisibleChange": onTriggerVisibleChange,
        "onPopupMouseEnter": onPopupMouseEnter,
        "onPopupFocusin": onPopupFocusin,
        "onPopupFocusout": onPopupFocusout
      }, {
        default: () => {
          return customizeRawInputElement ? isValidElement(customizeRawInputElement) && cloneElement(customizeRawInputElement, {
            ref: selectorDomRef
          }, false, true) : createVNode(Selector, _objectSpread$6(_objectSpread$6({}, props2), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": selectorRef,
            "id": id,
            "showSearch": mergedShowSearch.value,
            "mode": mode,
            "activeDescendantId": activeDescendantId,
            "tagRender": tagRender,
            "optionLabelRender": optionLabelRender,
            "values": displayValues,
            "open": mergedOpen.value,
            "onToggleOpen": onToggleOpen,
            "activeValue": activeValue,
            "searchValue": mergedSearchValue.value,
            "onSearch": onInternalSearch,
            "onSearchSubmit": onInternalSearchSubmit,
            "onRemove": onSelectorRemove,
            "tokenWithEnter": tokenWithEnter.value
          }), null);
        }
      });
      let renderNode;
      if (customizeRawInputElement) {
        renderNode = selectorNode;
      } else {
        renderNode = createVNode("div", _objectSpread$6(_objectSpread$6({}, domProps), {}, {
          "class": mergedClassName,
          "ref": containerRef,
          "onMousedown": onInternalMouseDown,
          "onKeydown": onInternalKeyDown,
          "onKeyup": onInternalKeyUp
        }), [mockFocused.value && !mergedOpen.value && createVNode("span", {
          "style": {
            width: 0,
            height: 0,
            position: "absolute",
            overflow: "hidden",
            opacity: 0
          },
          "aria-live": "polite"
        }, [`${displayValues.map((_ref2) => {
          let {
            label,
            value
          } = _ref2;
          return ["number", "string"].includes(typeof label) ? label : value;
        }).join(", ")}`]), selectorNode, arrowNode, clearNode]);
      }
      return renderNode;
    };
  }
});
const Filter = (_ref, _ref2) => {
  let {
    height,
    offset: offset2,
    prefixCls,
    onInnerResize
  } = _ref;
  let {
    slots
  } = _ref2;
  var _a;
  let outerStyle = {};
  let innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offset2 !== void 0) {
    outerStyle = {
      height: `${height}px`,
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _extends(_extends({}, innerStyle), {
      transform: `translateY(${offset2}px)`,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    });
  }
  return createVNode("div", {
    "style": outerStyle
  }, [createVNode(ResizeObserver, {
    "onResize": (_ref3) => {
      let {
        offsetHeight
      } = _ref3;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: () => [createVNode("div", {
      "style": innerStyle,
      "class": classNames({
        [`${prefixCls}-holder-inner`]: prefixCls
      })
    }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]
  })]);
};
Filter.displayName = "Filter";
Filter.inheritAttrs = false;
Filter.props = {
  prefixCls: String,
  /** Virtual filler height. Should be `count * itemMinHeight` */
  height: Number,
  /** Set offset of visible items. Should be the top of start item position */
  offset: Number,
  onInnerResize: Function
};
const Item = (_ref, _ref2) => {
  let {
    setRef
  } = _ref;
  let {
    slots
  } = _ref2;
  var _a;
  const children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};
Item.props = {
  setRef: {
    type: Function,
    default: () => {
    }
  }
};
const MIN_SIZE = 20;
function getPageY(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const ScrollBar = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ScrollBar",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup() {
    return {
      moveRaf: null,
      scrollbarRef: createRef(),
      thumbRef: createRef(),
      visibleTimeout: null,
      state: reactive({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted() {
    var _a, _b;
    (_a = this.scrollbarRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive ? {
      passive: false
    } : false);
    (_b = this.thumbRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("touchstart", this.onMouseDown, supportsPassive ? {
      passive: false
    } : false);
  },
  beforeUnmount() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden() {
      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(() => {
        this.state.visible = false;
      }, 2e3);
    },
    onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    // ======================= Clean =======================
    patchEvents() {
      (void 0).addEventListener("mousemove", this.onMouseMove);
      (void 0).addEventListener("mouseup", this.onMouseUp);
      this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents() {
      (void 0).removeEventListener("mousemove", this.onMouseMove);
      (void 0).removeEventListener("mouseup", this.onMouseUp);
      this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive ? {
        passive: false
      } : false);
      if (this.thumbRef.current) {
        this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, supportsPassive ? {
          passive: false
        } : false);
        this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, supportsPassive ? {
          passive: false
        } : false);
        this.thumbRef.current.removeEventListener("touchend", this.onMouseUp);
      }
      wrapperRaf.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown(e) {
      const {
        onStartMove
      } = this.$props;
      _extends(this.state, {
        dragging: true,
        pageY: getPageY(e),
        startTop: this.getTop()
      });
      onStartMove();
      this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    },
    onMouseMove(e) {
      const {
        dragging,
        pageY,
        startTop
      } = this.state;
      const {
        onScroll
      } = this.$props;
      wrapperRaf.cancel(this.moveRaf);
      if (dragging) {
        const offsetY = getPageY(e) - pageY;
        const newTop = startTop + offsetY;
        const enableScrollRange = this.getEnableScrollRange();
        const enableHeightRange = this.getEnableHeightRange();
        const ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        const newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = wrapperRaf(() => {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp() {
      const {
        onStopMove
      } = this.$props;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    // ===================== Calculate =====================
    getSpinHeight() {
      const {
        height,
        scrollHeight
      } = this.$props;
      let baseHeight = height / scrollHeight * 100;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange() {
      const {
        scrollHeight,
        height
      } = this.$props;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange() {
      const {
        height
      } = this.$props;
      const spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop() {
      const {
        scrollTop
      } = this.$props;
      const enableScrollRange = this.getEnableScrollRange();
      const enableHeightRange = this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      const ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    // Not show scrollbar when height is large than scrollHeight
    showScroll() {
      const {
        height,
        scrollHeight
      } = this.$props;
      return scrollHeight > height;
    }
  },
  render() {
    const {
      dragging,
      visible
    } = this.state;
    const {
      prefixCls
    } = this.$props;
    const spinHeight = this.getSpinHeight() + "px";
    const top = this.getTop() + "px";
    const canScroll = this.showScroll();
    const mergedVisible = canScroll && visible;
    return createVNode("div", {
      "ref": this.scrollbarRef,
      "class": classNames(`${prefixCls}-scrollbar`, {
        [`${prefixCls}-scrollbar-show`]: canScroll
      }),
      "style": {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: mergedVisible ? void 0 : "none"
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [createVNode("div", {
      "ref": this.thumbRef,
      "class": classNames(`${prefixCls}-scrollbar-thumb`, {
        [`${prefixCls}-scrollbar-thumb-moving`]: dragging
      }),
      "style": {
        width: "100%",
        height: spinHeight,
        top,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});
function useHeights(mergedData, getKey2, onItemAdd, onItemRemove) {
  const instance = /* @__PURE__ */ new Map();
  const heights = /* @__PURE__ */ new Map();
  const updatedMark = ref(Symbol("update"));
  watch(mergedData, () => {
    updatedMark.value = Symbol("update");
  });
  let collectRaf = void 0;
  function cancelRaf() {
    wrapperRaf.cancel(collectRaf);
  }
  function collectHeight() {
    cancelRaf();
    collectRaf = wrapperRaf(() => {
      instance.forEach((element, key) => {
        if (element && element.offsetParent) {
          const {
            offsetHeight
          } = element;
          if (heights.get(key) !== offsetHeight) {
            updatedMark.value = Symbol("update");
            heights.set(key, element.offsetHeight);
          }
        }
      });
    });
  }
  function setInstance(item, ins) {
    const key = getKey2(item);
    instance.get(key);
    if (ins) {
      instance.set(key, ins.$el || ins);
      collectHeight();
    } else {
      instance.delete(key);
    }
  }
  return [setInstance, collectHeight, heights, updatedMark];
}
function useScrollTo(containerRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  let scroll;
  return (arg) => {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scroll);
    const data = mergedData.value;
    const itemHeight = props2.itemHeight;
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && typeof arg === "object") {
      let index;
      const {
        align
      } = arg;
      if ("index" in arg) {
        ({
          index
        } = arg);
      } else {
        index = data.findIndex((item) => getKey2(item) === arg.key);
      }
      const {
        offset: offset2 = 0
      } = arg;
      const syncScroll = (times, targetAlign) => {
        if (times < 0 || !containerRef.value) return;
        const height = containerRef.value.clientHeight;
        let needCollectHeight = false;
        let newTargetAlign = targetAlign;
        if (height) {
          const mergedAlign = targetAlign || align;
          let stackTop = 0;
          let itemTop = 0;
          let itemBottom = 0;
          const maxLen = Math.min(data.length, index);
          for (let i = 0; i <= maxLen; i += 1) {
            const key = getKey2(data[i]);
            itemTop = stackTop;
            const cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === void 0) {
              needCollectHeight = true;
            }
          }
          const scrollTop = containerRef.value.scrollTop;
          let targetTop = null;
          switch (mergedAlign) {
            case "top":
              targetTop = itemTop - offset2;
              break;
            case "bottom":
              targetTop = itemBottom - height + offset2;
              break;
            default: {
              const scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = "top";
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = "bottom";
              }
            }
          }
          if (targetTop !== null && targetTop !== scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        scroll = wrapperRaf(() => {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2);
      };
      syncScroll(5);
    }
  };
}
const useOriginScroll = (isScrollAtTop, isScrollAtBottom) => {
  let lock = false;
  let lockTimeout = null;
  function lockScroll() {
    clearTimeout(lockTimeout);
    lock = true;
    lockTimeout = setTimeout(() => {
      lock = false;
    }, 50);
  }
  return function(deltaY) {
    let smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const originScroll = (
      // Pass origin wheel when on the top
      deltaY < 0 && isScrollAtTop.value || // Pass origin wheel when on the bottom
      deltaY > 0 && isScrollAtBottom.value
    );
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeout);
      lock = false;
    } else if (!originScroll || lock) {
      lockScroll();
    }
    return !lock && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  let offsetRef = 0;
  let nextFrame = null;
  let wheelValue = null;
  let isMouseScroll = false;
  const originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual.value) return;
    wrapperRaf.cancel(nextFrame);
    const {
      deltaY
    } = event;
    offsetRef += deltaY;
    wheelValue = deltaY;
    if (originScroll(deltaY)) return;
    {
      event.preventDefault();
    }
    nextFrame = wrapperRaf(() => {
      const patchMultiple = isMouseScroll ? 10 : 1;
      onWheelDelta(offsetRef * patchMultiple);
      offsetRef = 0;
    });
  }
  function onFireFoxScroll(event) {
    if (!inVirtual.value) return;
    isMouseScroll = event.detail === wheelValue;
  }
  return [onWheel, onFireFoxScroll];
}
var __rest$8 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const EMPTY_DATA = [];
const ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  let {
    getKey: getKey2
  } = _ref;
  return list.slice(startIndex, endIndex + 1).map((item, index) => {
    const eleIndex = startIndex + index;
    const node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    const key = getKey2(item);
    return createVNode(Item, {
      "key": key,
      "setRef": (ele) => setNodeRef(item, ele)
    }, {
      default: () => [node]
    });
  });
}
const List = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "List",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: PropTypes.array,
    height: Number,
    itemHeight: Number,
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup(props2, _ref2) {
    let {
      expose
    } = _ref2;
    const useVirtual = computed(() => {
      const {
        height,
        itemHeight,
        virtual
      } = props2;
      return !!(virtual !== false && height && itemHeight);
    });
    const inVirtual = computed(() => {
      const {
        height,
        itemHeight,
        data: data2
      } = props2;
      return useVirtual.value && data2 && itemHeight * data2.length > height;
    });
    const state = reactive({
      scrollTop: 0,
      scrollMoving: false
    });
    const data = computed(() => {
      return props2.data || EMPTY_DATA;
    });
    const mergedData = shallowRef([]);
    watch(data, () => {
      mergedData.value = toRaw(data.value).slice();
    }, {
      immediate: true
    });
    const itemKey = shallowRef((_item) => void 0);
    watch(() => props2.itemKey, (val) => {
      if (typeof val === "function") {
        itemKey.value = val;
      } else {
        itemKey.value = (item) => item === null || item === void 0 ? void 0 : item[val];
      }
    }, {
      immediate: true
    });
    const componentRef = shallowRef();
    const fillerInnerRef = shallowRef();
    const scrollBarRef = shallowRef();
    const getKey2 = (item) => {
      return itemKey.value(item);
    };
    const sharedConfig = {
      getKey: getKey2
    };
    function syncScrollTop(newTop) {
      let value;
      if (typeof newTop === "function") {
        value = newTop(state.scrollTop);
      } else {
        value = newTop;
      }
      const alignedTop = keepInRange(value);
      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }
      state.scrollTop = alignedTop;
    }
    const [setInstance, collectHeight, heights, updatedMark] = useHeights(mergedData, getKey2);
    const calRes = reactive({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    });
    const offsetHeight = shallowRef(0);
    watch([useVirtual, mergedData], () => {
      if (!useVirtual.value) {
        _extends(calRes, {
          scrollHeight: void 0,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([useVirtual, mergedData, offsetHeight, inVirtual], () => {
      if (useVirtual.value && !inVirtual.value) {
        _extends(calRes, {
          scrollHeight: offsetHeight.value,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
      if (componentRef.value) {
        state.scrollTop = componentRef.value.scrollTop;
      }
    }, {
      immediate: true
    });
    watch([inVirtual, useVirtual, () => state.scrollTop, mergedData, updatedMark, () => props2.height, offsetHeight], () => {
      if (!useVirtual.value || !inVirtual.value) {
        return;
      }
      let itemTop = 0;
      let startIndex;
      let startOffset;
      let endIndex;
      const dataLen = mergedData.value.length;
      const data2 = mergedData.value;
      const scrollTop = state.scrollTop;
      const {
        itemHeight,
        height
      } = props2;
      const scrollTopHeight = scrollTop + height;
      for (let i = 0; i < dataLen; i += 1) {
        const item = data2[i];
        const key = getKey2(item);
        let cacheHeight = heights.get(key);
        if (cacheHeight === void 0) {
          cacheHeight = itemHeight;
        }
        const currentItemBottom = itemTop + cacheHeight;
        if (startIndex === void 0 && currentItemBottom >= scrollTop) {
          startIndex = i;
          startOffset = itemTop;
        }
        if (endIndex === void 0 && currentItemBottom > scrollTopHeight) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      if (startIndex === void 0) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === void 0) {
        endIndex = dataLen - 1;
      }
      endIndex = Math.min(endIndex + 1, dataLen);
      _extends(calRes, {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      });
    }, {
      immediate: true
    });
    const maxScrollHeight = computed(() => calRes.scrollHeight - props2.height);
    function keepInRange(newScrollTop) {
      let newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    const isScrollAtTop = computed(() => state.scrollTop <= 0);
    const isScrollAtBottom = computed(() => state.scrollTop >= maxScrollHeight.value);
    function onScrollBar(newScrollTop) {
      const newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    function onFallbackScroll(e) {
      var _a;
      const {
        scrollTop: newScrollTop
      } = e.currentTarget;
      if (newScrollTop !== state.scrollTop) {
        syncScrollTop(newScrollTop);
      }
      (_a = props2.onScroll) === null || _a === void 0 ? void 0 : _a.call(props2, e);
    }
    const [onRawWheel, onFireFoxScroll] = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, (offsetY) => {
      syncScrollTop((top) => {
        const newTop = top + offsetY;
        return newTop;
      });
    });
    function onMozMousePixelScroll(e) {
      if (useVirtual.value) {
        e.preventDefault();
      }
    }
    const removeEventListener = () => {
      if (componentRef.value) {
        componentRef.value.removeEventListener("wheel", onRawWheel, supportsPassive ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener("DOMMouseScroll", onFireFoxScroll);
        componentRef.value.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
      }
    };
    watchEffect(() => {
      nextTick(() => {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener("wheel", onRawWheel, supportsPassive ? {
            passive: false
          } : false);
          componentRef.value.addEventListener("DOMMouseScroll", onFireFoxScroll);
          componentRef.value.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
        }
      });
    });
    const scrollTo = useScrollTo(componentRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, () => {
      var _a;
      (_a = scrollBarRef.value) === null || _a === void 0 ? void 0 : _a.delayHidden();
    });
    expose({
      scrollTo
    });
    const componentStyle = computed(() => {
      let cs = null;
      if (props2.height) {
        cs = _extends({
          [props2.fullHeight ? "height" : "maxHeight"]: props2.height + "px"
        }, ScrollStyle);
        if (useVirtual.value) {
          cs.overflowY = "hidden";
          if (state.scrollMoving) {
            cs.pointerEvents = "none";
          }
        }
      }
      return cs;
    });
    watch([() => calRes.start, () => calRes.end, mergedData], () => {
      if (props2.onVisibleChange) {
        const renderList2 = mergedData.value.slice(calRes.start, calRes.end + 1);
        props2.onVisibleChange(renderList2, mergedData.value);
      }
    }, {
      flush: "post"
    });
    const delayHideScrollBar = () => {
      var _a;
      (_a = scrollBarRef.value) === null || _a === void 0 ? void 0 : _a.delayHidden();
    };
    return {
      state,
      mergedData,
      componentStyle,
      onFallbackScroll,
      onScrollBar,
      componentRef,
      useVirtual,
      calRes,
      collectHeight,
      setInstance,
      sharedConfig,
      scrollBarRef,
      fillerInnerRef,
      delayHideScrollBar
    };
  },
  render() {
    const _a = _extends(_extends({}, this.$props), this.$attrs), {
      prefixCls = "rc-virtual-list",
      height,
      itemHeight,
      // eslint-disable-next-line no-unused-vars
      fullHeight,
      data,
      itemKey,
      virtual,
      component: Component = "div",
      onScroll,
      children = this.$slots.default,
      style,
      class: className
    } = _a, restProps = __rest$8(_a, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]);
    const mergedClassName = classNames(prefixCls, className);
    const {
      scrollTop
    } = this.state;
    const {
      scrollHeight,
      offset: offset2,
      start,
      end
    } = this.calRes;
    const {
      componentStyle,
      onFallbackScroll,
      onScrollBar,
      useVirtual,
      collectHeight,
      sharedConfig,
      setInstance,
      mergedData,
      delayHideScrollBar
    } = this;
    return createVNode("div", _objectSpread$6({
      "style": _extends(_extends({}, style), {
        position: "relative"
      }),
      "class": mergedClassName
    }, restProps), [createVNode(Component, {
      "class": `${prefixCls}-holder`,
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll,
      "onMouseenter": delayHideScrollBar
    }, {
      default: () => [createVNode(Filter, {
        "prefixCls": prefixCls,
        "height": scrollHeight,
        "offset": offset2,
        "onInnerResize": collectHeight,
        "ref": "fillerInnerRef"
      }, {
        default: () => renderChildren(mergedData, start, end, setInstance, children, sharedConfig)
      })]
    }), useVirtual && createVNode(ScrollBar, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": () => {
        this.state.scrollMoving = true;
      },
      "onStopMove": () => {
        this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
function useMemo(getValue2, condition, shouldUpdate) {
  const cacheRef = ref(getValue2());
  watch(condition, (next, pre) => {
    if (shouldUpdate) {
      if (shouldUpdate(next, pre)) {
        cacheRef.value = getValue2();
      }
    } else {
      cacheRef.value = getValue2();
    }
  });
  return cacheRef;
}
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test((void 0).appVersion);
}
const SelectContextKey = Symbol("SelectContextKey");
function useProvideSelectProps(props2) {
  return provide(SelectContextKey, props2);
}
function useSelectProps() {
  return inject(SelectContextKey, {});
}
var __rest$7 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function isTitleType(content) {
  return typeof content === "string" || typeof content === "number";
}
const OptionList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: false,
  setup(_, _ref) {
    let {
      expose,
      slots
    } = _ref;
    const baseProps = useBaseProps();
    const props2 = useSelectProps();
    const itemPrefixCls = computed(() => `${baseProps.prefixCls}-item`);
    const memoFlattenOptions = useMemo(() => props2.flattenOptions, [() => baseProps.open, () => props2.flattenOptions], (next) => next[0]);
    const listRef = createRef();
    const onListMouseDown = (event) => {
      event.preventDefault();
    };
    const scrollIntoView2 = (args) => {
      if (listRef.current) {
        listRef.current.scrollTo(typeof args === "number" ? {
          index: args
        } : args);
      }
    };
    const getEnabledActiveIndex = function(index) {
      let offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      const len = memoFlattenOptions.value.length;
      for (let i = 0; i < len; i += 1) {
        const current = (index + i * offset2 + len) % len;
        const {
          group,
          data
        } = memoFlattenOptions.value[current];
        if (!group && !data.disabled) {
          return current;
        }
      }
      return -1;
    };
    const state = reactive({
      activeIndex: getEnabledActiveIndex(0)
    });
    const setActive = function(index) {
      let fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      state.activeIndex = index;
      const info = {
        source: fromKeyboard ? "keyboard" : "mouse"
      };
      const flattenItem = memoFlattenOptions.value[index];
      if (!flattenItem) {
        props2.onActiveValue(null, -1, info);
        return;
      }
      props2.onActiveValue(flattenItem.value, index, info);
    };
    watch([() => memoFlattenOptions.value.length, () => baseProps.searchValue], () => {
      setActive(props2.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    });
    const isSelected = (value) => props2.rawValues.has(value) && baseProps.mode !== "combobox";
    watch([() => baseProps.open, () => baseProps.searchValue], () => {
      if (!baseProps.multiple && baseProps.open && props2.rawValues.size === 1) {
        const value = Array.from(props2.rawValues)[0];
        const index = toRaw(memoFlattenOptions.value).findIndex((_ref2) => {
          let {
            data
          } = _ref2;
          return data[props2.fieldNames.value] === value;
        });
        if (index !== -1) {
          setActive(index);
          nextTick(() => {
            scrollIntoView2(index);
          });
        }
      }
      if (baseProps.open) {
        nextTick(() => {
          var _a;
          (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(void 0);
        });
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const onSelectValue = (value) => {
      if (value !== void 0) {
        props2.onSelect(value, {
          selected: !props2.rawValues.has(value)
        });
      }
      if (!baseProps.multiple) {
        baseProps.toggleOpen(false);
      }
    };
    const getLabel = (item) => typeof item.label === "function" ? item.label() : item.label;
    function renderItem(index) {
      const item = memoFlattenOptions.value[index];
      if (!item) return null;
      const itemData = item.data || {};
      const {
        value
      } = itemData;
      const {
        group
      } = item;
      const attrs = pickAttrs(itemData, true);
      const mergedLabel = getLabel(item);
      return item ? createVNode("div", _objectSpread$6(_objectSpread$6({
        "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null
      }, attrs), {}, {
        "key": index,
        "role": group ? "presentation" : "option",
        "id": `${baseProps.id}_list_${index}`,
        "aria-selected": isSelected(value)
      }), [value]) : null;
    }
    const onKeydown = (event) => {
      const {
        which,
        ctrlKey
      } = event;
      switch (which) {
        case KeyCode.N:
        case KeyCode.P:
        case KeyCode.UP:
        case KeyCode.DOWN: {
          let offset2 = 0;
          if (which === KeyCode.UP) {
            offset2 = -1;
          } else if (which === KeyCode.DOWN) {
            offset2 = 1;
          } else if (isPlatformMac() && ctrlKey) {
            if (which === KeyCode.N) {
              offset2 = 1;
            } else if (which === KeyCode.P) {
              offset2 = -1;
            }
          }
          if (offset2 !== 0) {
            const nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset2, offset2);
            scrollIntoView2(nextActiveIndex);
            setActive(nextActiveIndex, true);
          }
          break;
        }
        case KeyCode.ENTER: {
          const item = memoFlattenOptions.value[state.activeIndex];
          if (item && !item.data.disabled) {
            onSelectValue(item.value);
          } else {
            onSelectValue(void 0);
          }
          if (baseProps.open) {
            event.preventDefault();
          }
          break;
        }
        case KeyCode.ESC: {
          baseProps.toggleOpen(false);
          if (baseProps.open) {
            event.stopPropagation();
          }
        }
      }
    };
    const onKeyup = () => {
    };
    const scrollTo = (index) => {
      scrollIntoView2(index);
    };
    expose({
      onKeydown,
      onKeyup,
      scrollTo
    });
    return () => {
      const {
        id,
        notFoundContent,
        onPopupScroll
      } = baseProps;
      const {
        menuItemSelectedIcon,
        fieldNames,
        virtual,
        listHeight,
        listItemHeight
      } = props2;
      const renderOption = slots.option;
      const {
        activeIndex
      } = state;
      const omitFieldNameList = Object.keys(fieldNames).map((key) => fieldNames[key]);
      if (memoFlattenOptions.value.length === 0) {
        return createVNode("div", {
          "role": "listbox",
          "id": `${id}_list`,
          "class": `${itemPrefixCls.value}-empty`,
          "onMousedown": onListMouseDown
        }, [notFoundContent]);
      }
      return createVNode(Fragment, null, [createVNode("div", {
        "role": "listbox",
        "id": `${id}_list`,
        "style": {
          height: 0,
          width: 0,
          overflow: "hidden"
        }
      }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), createVNode(List, {
        "itemKey": "key",
        "ref": listRef,
        "data": memoFlattenOptions.value,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "fullHeight": false,
        "onMousedown": onListMouseDown,
        "onScroll": onPopupScroll,
        "virtual": virtual
      }, {
        default: (item, itemIndex) => {
          var _a;
          const {
            group,
            groupOption,
            data,
            value
          } = item;
          const {
            key
          } = data;
          const label = typeof item.label === "function" ? item.label() : item.label;
          if (group) {
            const groupTitle = (_a = data.title) !== null && _a !== void 0 ? _a : isTitleType(label) && label;
            return createVNode("div", {
              "class": classNames(itemPrefixCls.value, `${itemPrefixCls.value}-group`),
              "title": groupTitle
            }, [renderOption ? renderOption(data) : label !== void 0 ? label : key]);
          }
          const {
            disabled,
            title,
            children,
            style,
            class: cls,
            className
          } = data, otherProps = __rest$7(data, ["disabled", "title", "children", "style", "class", "className"]);
          const passedProps = omit(otherProps, omitFieldNameList);
          const selected = isSelected(value);
          const optionPrefixCls = `${itemPrefixCls.value}-option`;
          const optionClassName = classNames(itemPrefixCls.value, optionPrefixCls, cls, className, {
            [`${optionPrefixCls}-grouped`]: groupOption,
            [`${optionPrefixCls}-active`]: activeIndex === itemIndex && !disabled,
            [`${optionPrefixCls}-disabled`]: disabled,
            [`${optionPrefixCls}-selected`]: selected
          });
          const mergedLabel = getLabel(item);
          const iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
          const content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
          let optionTitle = isTitleType(content) ? content.toString() : void 0;
          if (title !== void 0) {
            optionTitle = title;
          }
          return createVNode("div", _objectSpread$6(_objectSpread$6({}, passedProps), {}, {
            "aria-selected": selected,
            "class": optionClassName,
            "title": optionTitle,
            "onMousemove": (e) => {
              if (otherProps.onMousemove) {
                otherProps.onMousemove(e);
              }
              if (activeIndex === itemIndex || disabled) {
                return;
              }
              setActive(itemIndex);
            },
            "onClick": (e) => {
              if (!disabled) {
                onSelectValue(value);
              }
              if (otherProps.onClick) {
                otherProps.onClick(e);
              }
            },
            "style": style
          }), [createVNode("div", {
            "class": `${optionPrefixCls}-content`
          }, [renderOption ? renderOption(data) : content]), isValidElement(menuItemSelectedIcon) || selected, iconVisible && createVNode(TransBtn, {
            "class": `${itemPrefixCls.value}-option-state`,
            "customizeIcon": menuItemSelectedIcon,
            "customizeIconProps": {
              isSelected: selected
            }
          }, {
            default: () => [selected ? "\u2713" : null]
          })]);
        }
      })]);
    };
  }
});
var __rest$6 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function convertNodeToOption(node) {
  const _a = node, {
    key,
    children
  } = _a, _b = _a.props, {
    value,
    disabled
  } = _b, restProps = __rest$6(_b, ["value", "disabled"]);
  const child = children === null || children === void 0 ? void 0 : children.default;
  return _extends({
    key,
    value: value !== void 0 ? value : key,
    children: child,
    disabled: disabled || disabled === ""
  }, restProps);
}
function convertChildrenToData(nodes) {
  let optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const dd = flattenChildren(nodes).map((node, index) => {
    var _a;
    if (!isValidElement(node) || !node.type) {
      return null;
    }
    const {
      type: {
        isSelectOptGroup
      },
      key,
      children,
      props: props2
    } = node;
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    const child = children && children.default ? children.default() : void 0;
    const label = (props2 === null || props2 === void 0 ? void 0 : props2.label) || ((_a = children.label) === null || _a === void 0 ? void 0 : _a.call(children)) || key;
    return _extends(_extends({
      key: `__RC_SELECT_GRP__${key === null ? index : String(key)}__`
    }, props2), {
      label,
      options: convertChildrenToData(child || [])
    });
  }).filter((data) => data);
  return dd;
}
function useOptions(options, children, fieldNames) {
  const mergedOptions = shallowRef();
  const valueOptions = shallowRef();
  const labelOptions = shallowRef();
  const tempMergedOptions = shallowRef([]);
  watch([options, children], () => {
    if (options.value) {
      tempMergedOptions.value = toRaw(options.value).slice();
    } else {
      tempMergedOptions.value = convertChildrenToData(children.value);
    }
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    const newOptions = tempMergedOptions.value;
    const newValueOptions = /* @__PURE__ */ new Map();
    const newLabelOptions = /* @__PURE__ */ new Map();
    const fieldNamesValue = fieldNames.value;
    function dig(optionList) {
      let isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (let i = 0; i < optionList.length; i += 1) {
        const option = optionList[i];
        if (!option[fieldNamesValue.options] || isChildren) {
          newValueOptions.set(option[fieldNamesValue.value], option);
          newLabelOptions.set(option[fieldNamesValue.label], option);
        } else {
          dig(option[fieldNamesValue.options], true);
        }
      }
    }
    dig(newOptions);
    mergedOptions.value = newOptions;
    valueOptions.value = newValueOptions;
    labelOptions.value = newLabelOptions;
  });
  return {
    options: mergedOptions,
    valueOptions,
    labelOptions
  };
}
function getUUID$1() {
  let retId;
  {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function useId() {
  let id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ref("");
  const innerId = `rc_select_${getUUID$1()}`;
  return id.value || innerId;
}
function toArray$2(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
function includes(test, search) {
  return toArray$2(test).join("").toUpperCase().includes(search);
}
const useFilterOptions = (options, fieldNames, searchValue, filterOption, optionFilterProp) => computed(() => {
  const searchValueVal = searchValue.value;
  const optionFilterPropValue = optionFilterProp === null || optionFilterProp === void 0 ? void 0 : optionFilterProp.value;
  const filterOptionValue = filterOption === null || filterOption === void 0 ? void 0 : filterOption.value;
  if (!searchValueVal || filterOptionValue === false) {
    return options.value;
  }
  const {
    options: fieldOptions,
    label: fieldLabel,
    value: fieldValue
  } = fieldNames.value;
  const filteredOptions = [];
  const customizeFilter = typeof filterOptionValue === "function";
  const upperSearch = searchValueVal.toUpperCase();
  const filterFunc = customizeFilter ? filterOptionValue : (_, option) => {
    if (optionFilterPropValue) {
      return includes(option[optionFilterPropValue], upperSearch);
    }
    if (option[fieldOptions]) {
      return includes(option[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
    }
    return includes(option[fieldValue], upperSearch);
  };
  const wrapOption = customizeFilter ? (opt) => injectPropsWithOption(opt) : (opt) => opt;
  options.value.forEach((item) => {
    if (item[fieldOptions]) {
      const matchGroup = filterFunc(searchValueVal, wrapOption(item));
      if (matchGroup) {
        filteredOptions.push(item);
      } else {
        const subOptions = item[fieldOptions].filter((subItem) => filterFunc(searchValueVal, wrapOption(subItem)));
        if (subOptions.length) {
          filteredOptions.push(_extends(_extends({}, item), {
            [fieldOptions]: subOptions
          }));
        }
      }
      return;
    }
    if (filterFunc(searchValueVal, wrapOption(item))) {
      filteredOptions.push(item);
    }
  });
  return filteredOptions;
});
const useCache = (labeledValues, valueOptions) => {
  const cacheRef = shallowRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  const filledLabeledValues = computed(() => {
    const {
      values: prevValueCache,
      options: prevOptionCache
    } = cacheRef.value;
    const patchedValues = labeledValues.value.map((item) => {
      var _a;
      if (item.label === void 0) {
        return _extends(_extends({}, item), {
          label: (_a = prevValueCache.get(item.value)) === null || _a === void 0 ? void 0 : _a.label
        });
      }
      return item;
    });
    const valueCache = /* @__PURE__ */ new Map();
    const optionCache = /* @__PURE__ */ new Map();
    patchedValues.forEach((item) => {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.value.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.value.values = valueCache;
    cacheRef.value.options = optionCache;
    return patchedValues;
  });
  const getOption = (val) => valueOptions.value.get(val) || cacheRef.value.options.get(val);
  return [filledLabeledValues, getOption];
};
function useMergedState(defaultStateValue, option) {
  const {
    defaultValue,
    value = ref()
  } = option || {};
  let initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  if (value.value !== void 0) {
    initValue = unref(value);
  }
  if (defaultValue !== void 0) {
    initValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
  }
  const innerValue = ref(initValue);
  const mergedValue = ref(initValue);
  watchEffect(() => {
    let val = value.value !== void 0 ? value.value : innerValue.value;
    if (option.postState) {
      val = option.postState(val);
    }
    mergedValue.value = val;
  });
  function triggerChange(newValue) {
    const preVal = mergedValue.value;
    innerValue.value = newValue;
    if (toRaw(mergedValue.value) !== newValue && option.onChange) {
      option.onChange(newValue, preVal);
    }
  }
  watch(value, () => {
    innerValue.value = value.value;
  });
  return [mergedValue, triggerChange];
}
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
const OMIT_DOM_PROPS = ["inputValue"];
function selectProps$1() {
  return _extends(_extends({}, baseSelectPropsWithoutPrivate()), {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    // >>> Field Names
    fieldNames: Object,
    // >>> Search
    /** @deprecated Use `searchValue` instead */
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    // >>> Select
    onSelect: Function,
    onDeselect: Function,
    // >>> Options
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: {
      type: [Boolean, Function],
      default: void 0
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: void 0
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    // >>> Icon
    menuItemSelectedIcon: PropTypes.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    onChange: Function,
    children: Array
  });
}
function isRawValue(value) {
  return !value || typeof value !== "object";
}
const Select$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "VcSelect",
  inheritAttrs: false,
  props: initDefaultProps(selectProps$1(), {
    prefixCls: "vc-select",
    autoClearSearchValue: true,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: true
  }),
  setup(props2, _ref) {
    let {
      expose,
      attrs,
      slots
    } = _ref;
    const mergedId = useId(toRef(props2, "id"));
    const multiple = computed(() => isMultiple(props2.mode));
    const childrenAsData = computed(() => !!(!props2.options && props2.children));
    const mergedFilterOption = computed(() => {
      if (props2.filterOption === void 0 && props2.mode === "combobox") {
        return false;
      }
      return props2.filterOption;
    });
    const mergedFieldNames = computed(() => fillFieldNames(props2.fieldNames, childrenAsData.value));
    const [mergedSearchValue, setSearchValue] = useMergedState("", {
      value: computed(() => props2.searchValue !== void 0 ? props2.searchValue : props2.inputValue),
      postState: (search) => search || ""
    });
    const parsedOptions = useOptions(toRef(props2, "options"), toRef(props2, "children"), mergedFieldNames);
    const {
      valueOptions,
      labelOptions,
      options: mergedOptions
    } = parsedOptions;
    const convert2LabelValues = (draftValues) => {
      const valueList = toArray$2(draftValues);
      return valueList.map((val) => {
        var _a, _b;
        let rawValue;
        let rawLabel;
        let rawKey;
        let rawDisabled;
        if (isRawValue(val)) {
          rawValue = val;
        } else {
          rawKey = val.key;
          rawLabel = val.label;
          rawValue = (_a = val.value) !== null && _a !== void 0 ? _a : rawKey;
        }
        const option = valueOptions.value.get(rawValue);
        if (option) {
          if (rawLabel === void 0) rawLabel = option === null || option === void 0 ? void 0 : option[props2.optionLabelProp || mergedFieldNames.value.label];
          if (rawKey === void 0) rawKey = (_b = option === null || option === void 0 ? void 0 : option.key) !== null && _b !== void 0 ? _b : rawValue;
          rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        }
        return {
          label: rawLabel,
          value: rawValue,
          key: rawKey,
          disabled: rawDisabled,
          option
        };
      });
    };
    const [internalValue, setInternalValue] = useMergedState(props2.defaultValue, {
      value: toRef(props2, "value")
    });
    const rawLabeledValues = computed(() => {
      var _a;
      const values = convert2LabelValues(internalValue.value);
      if (props2.mode === "combobox" && !((_a = values[0]) === null || _a === void 0 ? void 0 : _a.value)) {
        return [];
      }
      return values;
    });
    const [mergedValues, getMixedOption] = useCache(rawLabeledValues, valueOptions);
    const displayValues = computed(() => {
      if (!props2.mode && mergedValues.value.length === 1) {
        const firstValue = mergedValues.value[0];
        if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
          return [];
        }
      }
      return mergedValues.value.map((item) => {
        var _a;
        return _extends(_extends({}, item), {
          label: (_a = typeof item.label === "function" ? item.label() : item.label) !== null && _a !== void 0 ? _a : item.value
        });
      });
    });
    const rawValues = computed(() => new Set(mergedValues.value.map((val) => val.value)));
    watchEffect(() => {
      var _a;
      if (props2.mode === "combobox") {
        const strValue = (_a = mergedValues.value[0]) === null || _a === void 0 ? void 0 : _a.value;
        if (strValue !== void 0 && strValue !== null) {
          setSearchValue(String(strValue));
        }
      }
    }, {
      flush: "post"
    });
    const createTagOption = (val, label) => {
      const mergedLabel = label !== null && label !== void 0 ? label : val;
      return {
        [mergedFieldNames.value.value]: val,
        [mergedFieldNames.value.label]: mergedLabel
      };
    };
    const filledTagOptions = shallowRef();
    watchEffect(() => {
      if (props2.mode !== "tags") {
        filledTagOptions.value = mergedOptions.value;
        return;
      }
      const cloneOptions = mergedOptions.value.slice();
      const existOptions = (val) => valueOptions.value.has(val);
      [...mergedValues.value].sort((a, b) => a.value < b.value ? -1 : 1).forEach((item) => {
        const val = item.value;
        if (!existOptions(val)) {
          cloneOptions.push(createTagOption(val, item.label));
        }
      });
      filledTagOptions.value = cloneOptions;
    });
    const filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, toRef(props2, "optionFilterProp"));
    const filledSearchOptions = computed(() => {
      if (props2.mode !== "tags" || !mergedSearchValue.value || filteredOptions.value.some((item) => item[props2.optionFilterProp || "value"] === mergedSearchValue.value)) {
        return filteredOptions.value;
      }
      return [createTagOption(mergedSearchValue.value), ...filteredOptions.value];
    });
    const orderedFilteredOptions = computed(() => {
      if (!props2.filterSort) {
        return filledSearchOptions.value;
      }
      return [...filledSearchOptions.value].sort((a, b) => props2.filterSort(a, b));
    });
    const displayOptions = computed(() => flattenOptions(orderedFilteredOptions.value, {
      fieldNames: mergedFieldNames.value,
      childrenAsData: childrenAsData.value
    }));
    const triggerChange = (values) => {
      const labeledValues = convert2LabelValues(values);
      setInternalValue(labeledValues);
      if (props2.onChange && // Trigger event only when value changed
      (labeledValues.length !== mergedValues.value.length || labeledValues.some((newVal, index) => {
        var _a;
        return ((_a = mergedValues.value[index]) === null || _a === void 0 ? void 0 : _a.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
      }))) {
        const returnValues = props2.labelInValue ? labeledValues.map((v) => {
          return _extends(_extends({}, v), {
            originLabel: v.label,
            label: typeof v.label === "function" ? v.label() : v.label
          });
        }) : labeledValues.map((v) => v.value);
        const returnOptions = labeledValues.map((v) => injectPropsWithOption(getMixedOption(v.value)));
        props2.onChange(
          // Value
          multiple.value ? returnValues : returnValues[0],
          // Option
          multiple.value ? returnOptions : returnOptions[0]
        );
      }
    };
    const [activeValue, setActiveValue] = useState(null);
    const [accessibilityIndex, setAccessibilityIndex] = useState(0);
    const mergedDefaultActiveFirstOption = computed(() => props2.defaultActiveFirstOption !== void 0 ? props2.defaultActiveFirstOption : props2.mode !== "combobox");
    const onActiveValue = function(active, index) {
      let {
        source = "keyboard"
      } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      setAccessibilityIndex(index);
      if (props2.backfill && props2.mode === "combobox" && active !== null && source === "keyboard") {
        setActiveValue(String(active));
      }
    };
    const triggerSelect = (val, selected) => {
      const getSelectEnt = () => {
        var _a;
        const option = getMixedOption(val);
        const originLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.value.label];
        return [props2.labelInValue ? {
          label: typeof originLabel === "function" ? originLabel() : originLabel,
          originLabel,
          value: val,
          key: (_a = option === null || option === void 0 ? void 0 : option.key) !== null && _a !== void 0 ? _a : val
        } : val, injectPropsWithOption(option)];
      };
      if (selected && props2.onSelect) {
        const [wrappedValue, option] = getSelectEnt();
        props2.onSelect(wrappedValue, option);
      } else if (!selected && props2.onDeselect) {
        const [wrappedValue, option] = getSelectEnt();
        props2.onDeselect(wrappedValue, option);
      }
    };
    const onInternalSelect = (val, info) => {
      let cloneValues;
      const mergedSelect = multiple.value ? info.selected : true;
      if (mergedSelect) {
        cloneValues = multiple.value ? [...mergedValues.value, val] : [val];
      } else {
        cloneValues = mergedValues.value.filter((v) => v.value !== val);
      }
      triggerChange(cloneValues);
      triggerSelect(val, mergedSelect);
      if (props2.mode === "combobox") {
        setActiveValue("");
      } else if (!multiple.value || props2.autoClearSearchValue) {
        setSearchValue("");
        setActiveValue("");
      }
    };
    const onDisplayValuesChange = (nextValues, info) => {
      triggerChange(nextValues);
      if (info.type === "remove" || info.type === "clear") {
        info.values.forEach((item) => {
          triggerSelect(item.value, false);
        });
      }
    };
    const onInternalSearch = (searchText, info) => {
      var _a;
      setSearchValue(searchText);
      setActiveValue(null);
      if (info.source === "submit") {
        const formatted = (searchText || "").trim();
        if (formatted) {
          const newRawValues = Array.from(/* @__PURE__ */ new Set([...rawValues.value, formatted]));
          triggerChange(newRawValues);
          triggerSelect(formatted, true);
          setSearchValue("");
        }
        return;
      }
      if (info.source !== "blur") {
        if (props2.mode === "combobox") {
          triggerChange(searchText);
        }
        (_a = props2.onSearch) === null || _a === void 0 ? void 0 : _a.call(props2, searchText);
      }
    };
    const onInternalSearchSplit = (words) => {
      let patchValues = words;
      if (props2.mode !== "tags") {
        patchValues = words.map((word) => {
          const opt = labelOptions.value.get(word);
          return opt === null || opt === void 0 ? void 0 : opt.value;
        }).filter((val) => val !== void 0);
      }
      const newRawValues = Array.from(/* @__PURE__ */ new Set([...rawValues.value, ...patchValues]));
      triggerChange(newRawValues);
      newRawValues.forEach((newRawValue) => {
        triggerSelect(newRawValue, true);
      });
    };
    const realVirtual = computed(() => props2.virtual !== false && props2.dropdownMatchSelectWidth !== false);
    useProvideSelectProps(toReactive(_extends(_extends({}, parsedOptions), {
      flattenOptions: displayOptions,
      onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: toRef(props2, "menuItemSelectedIcon"),
      rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: toRef(props2, "listHeight"),
      listItemHeight: toRef(props2, "listItemHeight"),
      childrenAsData
    })));
    const selectRef = ref();
    expose({
      focus() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      scrollTo(arg) {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
      }
    });
    const pickProps = computed(() => {
      return omit(props2, [
        "id",
        "mode",
        "prefixCls",
        "backfill",
        "fieldNames",
        // Search
        "inputValue",
        "searchValue",
        "onSearch",
        "autoClearSearchValue",
        // Select
        "onSelect",
        "onDeselect",
        "dropdownMatchSelectWidth",
        // Options
        "filterOption",
        "filterSort",
        "optionFilterProp",
        "optionLabelProp",
        "options",
        "children",
        "defaultActiveFirstOption",
        "menuItemSelectedIcon",
        "virtual",
        "listHeight",
        "listItemHeight",
        // Value
        "value",
        "defaultValue",
        "labelInValue",
        "onChange"
      ]);
    });
    return () => {
      return createVNode(BaseSelect, _objectSpread$6(_objectSpread$6(_objectSpread$6({}, pickProps.value), attrs), {}, {
        "id": mergedId,
        "prefixCls": props2.prefixCls,
        "ref": selectRef,
        "omitDomProps": OMIT_DOM_PROPS,
        "mode": props2.mode,
        "displayValues": displayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "onSearchSplit": onInternalSearchSplit,
        "dropdownMatchSelectWidth": props2.dropdownMatchSelectWidth,
        "OptionList": OptionList,
        "emptyOptions": !displayOptions.value.length,
        "activeValue": activeValue.value,
        "activeDescendantId": `${mergedId}_list_${accessibilityIndex.value}`
      }), slots);
    };
  }
});
const Option = () => null;
Option.isSelectOption = true;
Option.displayName = "ASelectOption";
const OptGroup = () => null;
OptGroup.isSelectOptGroup = true;
OptGroup.displayName = "ASelectOptGroup";
function getIcons(props2) {
  let slots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    loading,
    multiple,
    prefixCls,
    hasFeedback,
    feedbackIcon,
    showArrow
  } = props2;
  const suffixIcon = props2.suffixIcon || slots.suffixIcon && slots.suffixIcon();
  const clearIcon = props2.clearIcon || slots.clearIcon && slots.clearIcon();
  const menuItemSelectedIcon = props2.menuItemSelectedIcon || slots.menuItemSelectedIcon && slots.menuItemSelectedIcon();
  const removeIcon = props2.removeIcon || slots.removeIcon && slots.removeIcon();
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : createVNode(CloseCircleFilled, null, null);
  const getSuffixIconNode = (arrowIcon) => createVNode(Fragment, null, [showArrow !== false && arrowIcon, hasFeedback && feedbackIcon]);
  let mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(createVNode(LoadingOutlined, {
      "spin": true
    }, null));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = (_ref) => {
      let {
        open: open2,
        showSearch
      } = _ref;
      if (open2 && showSearch) {
        return getSuffixIconNode(createVNode(SearchOutlined, {
          "class": iconCls
        }, null));
      }
      return getSuffixIconNode(createVNode(DownOutlined, {
        "class": iconCls
      }, null));
    };
  }
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = createVNode(CheckOutlined, null, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = createVNode(CloseOutlined, null, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
function createContext(defaultValue) {
  const contextKey = Symbol("contextKey");
  const useProvide = (props2, newProps) => {
    const mergedProps = reactive({});
    provide(contextKey, mergedProps);
    watchEffect(() => {
      _extends(mergedProps, props2, newProps || {});
    });
    return mergedProps;
  };
  const useInject = () => {
    return inject(contextKey, defaultValue) || {};
  };
  return {
    useProvide,
    useInject
  };
}
const ContextKey = Symbol("ContextProps");
const InternalContextKey = Symbol("InternalContextProps");
const useProvideFormItemContext = function(props2) {
  let useValidation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : computed(() => true);
  const formItemFields = ref(/* @__PURE__ */ new Map());
  const addFormItemField = (key, type) => {
    formItemFields.value.set(key, type);
    formItemFields.value = new Map(formItemFields.value);
  };
  const removeFormItemField = (key) => {
    formItemFields.value.delete(key);
    formItemFields.value = new Map(formItemFields.value);
  };
  getCurrentInstance();
  watch([useValidation, formItemFields], () => {
  });
  provide(ContextKey, props2);
  provide(InternalContextKey, {
    addFormItemField,
    removeFormItemField
  });
};
const defaultContext = {
  id: computed(() => void 0),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
};
const defaultInternalContext = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
};
const useInjectFormItemContext = () => {
  const internalContext = inject(InternalContextKey, defaultInternalContext);
  const formItemFieldKey = Symbol("FormItemFieldKey");
  const instance = getCurrentInstance();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  provide(InternalContextKey, defaultInternalContext);
  provide(ContextKey, defaultContext);
  return inject(ContextKey, defaultContext);
};
const FormItemRest = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    provide(InternalContextKey, defaultInternalContext);
    provide(ContextKey, defaultContext);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const FormItemInputContext = createContext({});
const NoFormStatus = defineComponent({
  name: "NoFormStatus",
  setup(_, _ref2) {
    let {
      slots
    } = _ref2;
    FormItemInputContext.useProvide({});
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
const genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
const genSpaceStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-space-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
};
const useStyle$6 = genComponentStyleHook("Space", (token) => [genSpaceStyle(token), genSpaceCompactStyle(token)]);
const spaceCompactItemProps = () => ({
  compactSize: String,
  compactDirection: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  isFirstItem: booleanType(),
  isLastItem: booleanType()
});
const SpaceCompactItemContext = createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = SpaceCompactItemContext.useInject();
  const compactItemClassnames = computed(() => {
    if (!compactItemContext || isEmpty(compactItemContext)) return "";
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames({
      [`${prefixCls.value}-compact${separator}item`]: true,
      [`${prefixCls.value}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls.value}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls.value}-compact${separator}item-rtl`]: direction.value === "rtl"
    });
  });
  return {
    compactSize: computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize),
    compactDirection: computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection),
    compactItemClassnames
  };
};
const NoCompactStyle = defineComponent({
  name: "NoCompactStyle",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    SpaceCompactItemContext.useProvide(null);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const spaceCompactProps = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  align: PropTypes.oneOf(tuple("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
});
const CompactItem = defineComponent({
  name: "CompactItem",
  props: spaceCompactItemProps(),
  setup(props2, _ref2) {
    let {
      slots
    } = _ref2;
    SpaceCompactItemContext.useProvide(props2);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
defineComponent({
  name: "ASpaceCompact",
  inheritAttrs: false,
  props: spaceCompactProps(),
  setup(props2, _ref3) {
    let {
      attrs,
      slots
    } = _ref3;
    const {
      prefixCls,
      direction: directionConfig
    } = useConfigInject("space-compact", props2);
    const compactItemContext = SpaceCompactItemContext.useInject();
    const [wrapSSR, hashId] = useStyle$6(prefixCls);
    const clx = computed(() => {
      return classNames(prefixCls.value, hashId.value, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
        [`${prefixCls.value}-block`]: props2.block,
        [`${prefixCls.value}-vertical`]: props2.direction === "vertical"
      });
    });
    return () => {
      var _a;
      const childNodes = flattenChildren(((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []);
      if (childNodes.length === 0) {
        return null;
      }
      return wrapSSR(createVNode("div", _objectSpread$6(_objectSpread$6({}, attrs), {}, {
        "class": [clx.value, attrs.class]
      }), [childNodes.map((child, i) => {
        var _a2;
        const key = child && child.key || `${prefixCls.value}-item-${i}`;
        const noCompactItemContext = !compactItemContext || isEmpty(compactItemContext);
        return createVNode(CompactItem, {
          "key": key,
          "compactSize": (_a2 = props2.size) !== null && _a2 !== void 0 ? _a2 : "middle",
          "compactDirection": props2.direction,
          "isFirstItem": i === 0 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
          "isLastItem": i === childNodes.length - 1 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
        }, {
          default: () => [child]
        });
      })]));
    };
  }
});
const initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: _extends(_extends({}, initMotionCommon(duration)), {
      animationPlayState: "paused"
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: _extends(_extends({}, initMotionCommonLeave(duration)), {
      animationPlayState: "paused"
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};
const fadeIn = new Keyframe("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
const fadeOut = new Keyframe("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
const initFadeMotion = function(token) {
  let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
const moveDownIn = new Keyframe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const slideUpIn = new Keyframe("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframe("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframe("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframe("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframe("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframe("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframe("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframe("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};
const zoomIn = new Keyframe("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomOut = new Keyframe("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
});
const zoomBigIn = new Keyframe("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomBigOut = new Keyframe("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
});
const zoomUpIn = new Keyframe("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
});
const zoomUpOut = new Keyframe("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
});
const zoomLeftIn = new Keyframe("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
});
const zoomLeftOut = new Keyframe("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
});
const zoomRightIn = new Keyframe("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
});
const zoomRightOut = new Keyframe("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
});
const zoomDownIn = new Keyframe("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
});
const zoomDownOut = new Keyframe("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const genCollapseMotion = (token) => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
const genItemStyle = (token) => {
  const {
    controlPaddingHorizontal
  } = token;
  return {
    position: "relative",
    display: "block",
    minHeight: token.controlHeight,
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    color: token.colorText,
    fontWeight: "normal",
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: "border-box"
  };
};
const genSingleStyle$1 = (token) => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  return [
    {
      [`${componentCls}-dropdown`]: _extends(_extends({}, resetComponent(token)), {
        position: "absolute",
        top: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: "border-box",
        padding: token.paddingXXS,
        overflow: "hidden",
        fontSize: token.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomLeft
          `]: {
          animationName: slideUpIn
        },
        [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft
          `]: {
          animationName: slideDownIn
        },
        [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomLeft`]: {
          animationName: slideUpOut
        },
        [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft`]: {
          animationName: slideDownOut
        },
        "&-hidden": {
          display: "none"
        },
        "&-empty": {
          color: token.colorTextDisabled
        },
        // ========================= Options =========================
        [`${selectItemCls}-empty`]: _extends(_extends({}, genItemStyle(token)), {
          color: token.colorTextDisabled
        }),
        [`${selectItemCls}`]: _extends(_extends({}, genItemStyle(token)), {
          cursor: "pointer",
          transition: `background ${token.motionDurationSlow} ease`,
          borderRadius: token.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": _extends({
              flex: "auto"
            }, textEllipsis),
            "&-state": {
              flex: "none"
            },
            [`&-active:not(${selectItemCls}-option-disabled)`]: {
              backgroundColor: token.controlItemBgHover
            },
            [`&-selected:not(${selectItemCls}-option-disabled)`]: {
              color: token.colorText,
              fontWeight: token.fontWeightStrong,
              backgroundColor: token.controlItemBgActive,
              [`${selectItemCls}-option-state`]: {
                color: token.colorPrimary
              }
            },
            "&-disabled": {
              [`&${selectItemCls}-option-selected`]: {
                backgroundColor: token.colorBgContainerDisabled
              },
              color: token.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: token.controlPaddingHorizontal * 2
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};
const FIXED_ITEM_MARGIN = 2;
function getSelectItemStyle(_ref) {
  let {
    controlHeightSM,
    controlHeight,
    lineWidth: borderWidth
  } = _ref;
  const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
}
function genSizeStyle$1(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.controlHeightSM;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: "text"
        },
        [`${componentCls}-disabled&`]: {
          background: token.colorBgContainerDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${FIXED_ITEM_MARGIN}px 0`,
          lineHeight: `${selectItemHeight}px`,
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: `${selectItemHeight - token.lineWidth * 2}px`,
        background: token.colorFillSecondary,
        border: `${token.lineWidth}px solid ${token.colorSplit}`,
        borderRadius: token.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [`${componentCls}-disabled&`]: {
          color: token.colorTextDisabled,
          borderColor: token.colorBorder,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: token.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis"
        },
        "&-remove": _extends(_extends({}, resetIcon()), {
          display: "inline-block",
          color: token.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${iconCls}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${componentCls}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: `${selectItemHeight}px`,
          transition: `all ${token.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
function genMultipleStyle(token) {
  const {
    componentCls
  } = token;
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    controlHeightSM: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [
    genSizeStyle$1(token),
    // ======================== Small ========================
    // Shared
    genSizeStyle$1(smallToken, "sm"),
    // Padding
    {
      [`${componentCls}-multiple${componentCls}-sm`]: {
        [`${componentCls}-selection-placeholder`]: {
          insetInlineStart: token.controlPaddingHorizontalSM - token.lineWidth,
          insetInlineEnd: "auto"
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${componentCls}-selection-search`]: {
          marginInlineStart: smSelectItemMargin
        }
      }
    },
    // ======================== Large ========================
    // Shared
    genSizeStyle$1(merge(token, {
      fontSize: token.fontSizeLG,
      controlHeight: token.controlHeightLG,
      controlHeightSM: token.controlHeight,
      borderRadius: token.borderRadiusLG,
      borderRadiusSM: token.borderRadius
    }), "lg")
  ];
}
function genSizeStyle(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: _extends(_extends({}, resetComponent(token)), {
        display: "flex",
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${selectHeightWithoutBorder}px`,
          transition: `all ${token.motionDurationSlow}`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        },
        [`${componentCls}-selection-item`]: {
          position: "relative",
          userSelect: "none"
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${componentCls}-selection-item:after`,
          /* For undefined value baseline align */
          `${componentCls}-selection-placeholder:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: "100%",
          height: token.controlHeight,
          padding: `0 ${inputPaddingHorizontalBase}px`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          "&:after": {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${componentCls}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${componentCls}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [
    genSizeStyle(token),
    // ======================== Small ========================
    // Shared
    genSizeStyle(merge(token, {
      controlHeight: token.controlHeightSM,
      borderRadius: token.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${componentCls}-single${componentCls}-sm`]: {
        [`&:not(${componentCls}-customize-input)`]: {
          [`${componentCls}-selection-search`]: {
            insetInlineStart: inputPaddingHorizontalSM,
            insetInlineEnd: inputPaddingHorizontalSM
          },
          [`${componentCls}-selector`]: {
            padding: `0 ${inputPaddingHorizontalSM}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
            insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
          },
          [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
            paddingInlineEnd: token.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    genSizeStyle(merge(token, {
      controlHeight: token.controlHeightLG,
      fontSize: token.fontSizeLG,
      borderRadius: token.borderRadiusLG
    }), "lg")
  ];
}
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token.lineWidth
    },
    "&-item": _extends(_extends({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: _extends(_extends({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
const genSelectorStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    position: "relative",
    backgroundColor: token.colorBgContainer,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${componentCls}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit"
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${componentCls}-multiple&`]: {
        background: token.colorBgContainerDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
};
const genStatusStyle$1 = function(rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    outlineColor,
    antCls
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: _extends(_extends({}, overwriteStyle), {
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          borderInlineEndWidth: `${token.controlLineWidth}px !important`,
          outline: 0
        },
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          borderInlineEndWidth: `${token.controlLineWidth}px !important`
        }
      })
    }
  };
};
const getSearchInputWithoutBorderStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
};
const genBaseStyle = (token) => {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: _extends(_extends({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: _extends({
        flex: 1,
        fontWeight: "normal"
      }, textEllipsis),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: _extends(_extends({}, textEllipsis), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: _extends(_extends({}, resetIcon()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [iconCls]: {
          verticalAlign: "top",
          transition: `transform ${token.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: "inline-block",
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: token.colorBgContainer,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: token.colorTextTertiary
        }
      },
      "&:hover": {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXXS
      }
    }
  };
};
const genSelectStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    {
      [componentCls]: {
        // ==================== BorderLess ====================
        [`&-borderless ${componentCls}-selector`]: {
          backgroundColor: `transparent !important`,
          borderColor: `transparent !important`,
          boxShadow: `none !important`
        },
        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle(token),
    // Single
    genSingleStyle(token),
    // Multiple
    genMultipleStyle(token),
    // Dropdown
    genSingleStyle$1(token),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${componentCls}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    genStatusStyle$1(componentCls, merge(token, {
      borderHoverColor: token.colorPrimaryHover,
      outlineColor: token.controlOutline
    })),
    genStatusStyle$1(`${componentCls}-status-error`, merge(token, {
      borderHoverColor: token.colorErrorHover,
      outlineColor: token.colorErrorOutline
    }), true),
    genStatusStyle$1(`${componentCls}-status-warning`, merge(token, {
      borderHoverColor: token.colorWarningHover,
      outlineColor: token.colorWarningOutline
    }), true),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      borderElCls: `${componentCls}-selector`,
      focusElCls: `${componentCls}-focused`
    })
  ];
};
const useSelectStyle = genComponentStyleHook("Select", (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = merge(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1
  });
  return [genSelectStyle(selectToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50
}));
const selectProps = () => _extends(_extends({}, omit(selectProps$1(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {
  value: someType([Array, Object, String, Number]),
  defaultValue: someType([Array, Object, String, Number]),
  notFoundContent: PropTypes.any,
  suffixIcon: PropTypes.any,
  itemIcon: PropTypes.any,
  size: stringType(),
  mode: stringType(),
  bordered: booleanType(true),
  transitionName: String,
  choiceTransitionName: stringType(""),
  popupClassName: String,
  /** @deprecated Please use `popupClassName` instead */
  dropdownClassName: String,
  placement: stringType(),
  status: stringType(),
  "onUpdate:value": functionType()
});
const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
const Select = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASelect",
  Option,
  OptGroup,
  inheritAttrs: false,
  props: initDefaultProps(selectProps(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE,
  slots: Object,
  setup(props2, _ref) {
    let {
      attrs,
      emit,
      slots,
      expose
    } = _ref;
    const selectRef = ref();
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props2.status));
    const focus = () => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const scrollTo = (arg) => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
    };
    const mode = computed(() => {
      const {
        mode: mode2
      } = props2;
      if (mode2 === "combobox") {
        return void 0;
      }
      if (mode2 === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return "combobox";
      }
      return mode2;
    });
    const {
      prefixCls,
      direction,
      configProvider,
      renderEmpty,
      size: contextSize,
      getPrefixCls,
      getPopupContainer,
      disabled,
      select
    } = useConfigInject("select", props2);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const mergedSize = computed(() => compactSize.value || contextSize.value);
    const contextDisabled = useInjectDisabled();
    const mergedDisabled = computed(() => {
      var _a;
      return (_a = disabled.value) !== null && _a !== void 0 ? _a : contextDisabled.value;
    });
    const [wrapSSR, hashId] = useSelectStyle(prefixCls);
    const rootPrefixCls = computed(() => getPrefixCls());
    const placement = computed(() => {
      if (props2.placement !== void 0) {
        return props2.placement;
      }
      return direction.value === "rtl" ? "bottomRight" : "bottomLeft";
    });
    const transitionName = computed(() => getTransitionName(rootPrefixCls.value, getTransitionDirection(placement.value), props2.transitionName));
    const mergedClassName = computed(() => classNames({
      [`${prefixCls.value}-lg`]: mergedSize.value === "large",
      [`${prefixCls.value}-sm`]: mergedSize.value === "small",
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-borderless`]: !props2.bordered,
      [`${prefixCls.value}-in-form-item`]: formItemInputContext.isFormItemInput
    }, getStatusClassNames(prefixCls.value, mergedStatus.value, formItemInputContext.hasFeedback), compactItemClassnames.value, hashId.value));
    const triggerChange = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit("update:value", args[0]);
      emit("change", ...args);
      formItemContext.onFieldChange();
    };
    const handleBlur = (e) => {
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    expose({
      blur,
      focus,
      scrollTo
    });
    const isMultiple2 = computed(() => mode.value === "multiple" || mode.value === "tags");
    const mergedShowArrow = computed(() => props2.showArrow !== void 0 ? props2.showArrow : props2.loading || !(isMultiple2.value || mode.value === "combobox"));
    return () => {
      var _a, _b, _c, _d;
      const {
        notFoundContent,
        listHeight = 256,
        listItemHeight = 24,
        popupClassName,
        dropdownClassName,
        virtual,
        dropdownMatchSelectWidth,
        id = formItemContext.id.value,
        placeholder = (_a = slots.placeholder) === null || _a === void 0 ? void 0 : _a.call(slots),
        showArrow
      } = props2;
      const {
        hasFeedback,
        feedbackIcon
      } = formItemInputContext;
      let mergedNotFound;
      if (notFoundContent !== void 0) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === "combobox") {
        mergedNotFound = null;
      } else {
        mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Select")) || createVNode(DefaultRenderEmpty, {
          "componentName": "Select"
        }, null);
      }
      const {
        suffixIcon,
        itemIcon,
        removeIcon,
        clearIcon
      } = getIcons(_extends(_extends({}, props2), {
        multiple: isMultiple2.value,
        prefixCls: prefixCls.value,
        hasFeedback,
        feedbackIcon,
        showArrow: mergedShowArrow.value
      }), slots);
      const selectProps2 = omit(props2, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered", "status"]);
      const rcSelectRtlDropdownClassName = classNames(popupClassName || dropdownClassName, {
        [`${prefixCls.value}-dropdown-${direction.value}`]: direction.value === "rtl"
      }, hashId.value);
      return wrapSSR(createVNode(Select$1, _objectSpread$6(_objectSpread$6(_objectSpread$6({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps2), attrs), {}, {
        "showSearch": (_b = props2.showSearch) !== null && _b !== void 0 ? _b : (_c = select === null || select === void 0 ? void 0 : select.value) === null || _c === void 0 ? void 0 : _c.showSearch,
        "placeholder": placeholder,
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value,
        "dropdownClassName": rcSelectRtlDropdownClassName,
        "onChange": triggerChange,
        "onBlur": handleBlur,
        "id": id,
        "dropdownRender": selectProps2.dropdownRender || slots.dropdownRender,
        "transitionName": transitionName.value,
        "children": (_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots),
        "tagRender": props2.tagRender || slots.tagRender,
        "optionLabelRender": slots.optionLabel,
        "maxTagPlaceholder": props2.maxTagPlaceholder || slots.maxTagPlaceholder,
        "showArrow": hasFeedback || showArrow,
        "disabled": mergedDisabled.value
      }), {
        option: slots.option
      }));
    };
  }
});
Select.install = function(app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};
Select.Option;
Select.OptGroup;
const responsiveArray = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
const getResponsiveMap = (token) => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`,
  xxxl: `{min-width: ${token.screenXXXL}px}`
});
function useResponsiveObserver() {
  const [, token] = useToken();
  return computed(() => {
    const responsiveMap = getResponsiveMap(token.value);
    const subscribers = /* @__PURE__ */ new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach((func) => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = (_ref) => {
            let {
              matches
            } = _ref;
            this.dispatch(_extends(_extends({}, screens), {
              [screen]: matches
            }));
          };
          const mql = (void 0).matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  });
}
const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
const targetOffset$1 = [0, 0];
const placements = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  }
};
const tooltipContentProps = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: PropTypes.any
};
const Content$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: tooltipContentProps,
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      var _a;
      return createVNode("div", {
        "class": `${props2.prefixCls}-inner`,
        "id": props2.id,
        "role": "tooltip",
        "style": props2.overlayInnerStyle
      }, [(_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var __rest$5 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function noop$1() {
}
const Tooltip$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: false,
  props: {
    trigger: PropTypes.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: PropTypes.string.def("right"),
    transitionName: String,
    animation: PropTypes.any,
    afterVisibleChange: PropTypes.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: PropTypes.string.def("rc-tooltip"),
    mouseEnterDelay: PropTypes.number.def(0.1),
    mouseLeaveDelay: PropTypes.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: false
    },
    align: PropTypes.object.def(() => ({})),
    arrowContent: PropTypes.any.def(null),
    tipId: String,
    builtinPlacements: PropTypes.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose
    } = _ref;
    const triggerDOM = shallowRef();
    const getPopupElement = () => {
      const {
        prefixCls,
        tipId,
        overlayInnerStyle
      } = props2;
      return [createVNode("div", {
        "class": `${prefixCls}-arrow`,
        "key": "arrow"
      }, [getPropsSlot(slots, props2, "arrowContent")]), createVNode(Content$1, {
        "key": "content",
        "prefixCls": prefixCls,
        "id": tipId,
        "overlayInnerStyle": overlayInnerStyle
      }, {
        overlay: slots.overlay
      })];
    };
    const getPopupDomNode = () => {
      return triggerDOM.value.getPopupDomNode();
    };
    expose({
      getPopupDomNode,
      triggerDOM,
      forcePopupAlign: () => {
        var _a;
        return (_a = triggerDOM.value) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
      }
    });
    const destroyTooltip = shallowRef(false);
    const autoDestroy = shallowRef(false);
    watchEffect(() => {
      const {
        destroyTooltipOnHide
      } = props2;
      if (typeof destroyTooltipOnHide === "boolean") {
        destroyTooltip.value = destroyTooltipOnHide;
      } else if (destroyTooltipOnHide && typeof destroyTooltipOnHide === "object") {
        const {
          keepParent
        } = destroyTooltipOnHide;
        destroyTooltip.value = keepParent === true;
        autoDestroy.value = keepParent === false;
      }
    });
    return () => {
      const {
        overlayClassName,
        trigger: trigger2,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayStyle,
        prefixCls,
        afterVisibleChange,
        transitionName,
        animation,
        placement,
        align,
        destroyTooltipOnHide,
        defaultVisible
      } = props2, restProps = __rest$5(props2, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]);
      const extraProps = _extends({}, restProps);
      if (props2.visible !== void 0) {
        extraProps.popupVisible = props2.visible;
      }
      const triggerProps2 = _extends(_extends(_extends({
        popupClassName: overlayClassName,
        prefixCls,
        action: trigger2,
        builtinPlacements: placements,
        popupPlacement: placement,
        popupAlign: align,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltip.value,
        autoDestroy: autoDestroy.value,
        mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay
      }, extraProps), attrs), {
        onPopupVisibleChange: props2.onVisibleChange || noop$1,
        onPopupAlign: props2.onPopupAlign || noop$1,
        ref: triggerDOM,
        popup: getPopupElement()
      });
      return createVNode(Trigger, triggerProps2, {
        default: slots.default
      });
    };
  }
});
const abstractTooltipProps = () => ({
  trigger: [String, Array],
  open: {
    type: Boolean,
    default: void 0
  },
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  placement: String,
  color: String,
  transitionName: String,
  overlayStyle: objectType(),
  overlayInnerStyle: objectType(),
  overlayClassName: String,
  openClassName: String,
  prefixCls: String,
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  getPopupContainer: Function,
  arrowPointAtCenter: {
    type: Boolean,
    default: void 0
  },
  autoAdjustOverflow: {
    type: [Boolean, Object],
    default: void 0
  },
  destroyTooltipOnHide: {
    type: Boolean,
    default: void 0
  },
  align: objectType(),
  builtinPlacements: objectType(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
});
const autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
const autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
const targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow2) {
  if (typeof autoAdjustOverflow2 === "boolean") {
    return autoAdjustOverflow2 ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }
  return _extends(_extends({}, autoAdjustOverflowDisabled), autoAdjustOverflow2);
}
function getPlacements(config) {
  const {
    arrowWidth = 4,
    horizontalArrowShift = 16,
    verticalArrowShift = 8,
    autoAdjustOverflow: autoAdjustOverflow2,
    arrowPointAtCenter
  } = config;
  const placementMap = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach((key) => {
    placementMap[key] = arrowPointAtCenter ? _extends(_extends({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow2),
      targetOffset
    }) : _extends(_extends({}, placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow2)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}
function firstNotUndefined() {
  let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== void 0) {
      return arr[i];
    }
  }
  return void 0;
}
const inverseColors = PresetColors.map((color) => `${color}-inverse`);
function isPresetColor(color) {
  let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (includeInverse) {
    return [...inverseColors, ...PresetColors].includes(color);
  }
  return PresetColors.includes(color);
}
function parseColor(prefixCls, color) {
  const isInternalColor = isPresetColor(color);
  const className = classNames({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    arrowStyle["--antd-arrow-background-color"] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
}
function connectArrowCls(classList) {
  let showArrowCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return classList.map((cls) => `${showArrowCls}${cls}`).join(",");
}
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffset(options) {
  const maxVerticalContentRadius = MAX_VERTICAL_CONTENT_RADIUS;
  const {
    sizePopupArrow,
    contentRadius,
    borderRadiusOuter,
    limitVerticalRadius
  } = options;
  const arrowInnerOffset = sizePopupArrow / 2 - Math.ceil(borderRadiusOuter * (Math.sqrt(2) - 1));
  const dropdownArrowOffset = (contentRadius > 12 ? contentRadius + 2 : 12) - arrowInnerOffset;
  const dropdownArrowOffsetVertical = limitVerticalRadius ? maxVerticalContentRadius - arrowInnerOffset : dropdownArrowOffset;
  return {
    dropdownArrowOffset,
    dropdownArrowOffsetVertical
  };
}
function getArrowStyle(token, options) {
  const {
    componentCls,
    sizePopupArrow,
    marginXXS,
    borderRadiusXS,
    borderRadiusOuter,
    boxShadowPopoverArrow
  } = token;
  const {
    colorBg,
    showArrowCls,
    contentRadius = token.borderRadiusLG,
    limitVerticalRadius
  } = options;
  const {
    dropdownArrowOffsetVertical,
    dropdownArrowOffset
  } = getArrowOffset({
    sizePopupArrow,
    contentRadius,
    borderRadiusOuter,
    limitVerticalRadius
  });
  const dropdownArrowDistance = sizePopupArrow / 2 + marginXXS;
  return {
    [componentCls]: {
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [_extends(_extends({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, roundedArrow(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBg, boxShadowPopoverArrow)), {
        "&:before": {
          background: colorBg
        }
      })],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top ${componentCls}-arrow`, `&-placement-topLeft ${componentCls}-arrow`, `&-placement-topRight ${componentCls}-arrow`].join(",")]: {
        bottom: 0,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-topRight ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom ${componentCls}-arrow`, `&-placement-bottomLeft ${componentCls}-arrow`, `&-placement-bottomRight ${componentCls}-arrow`].join(",")]: {
        top: 0,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      [`&-placement-bottomLeft ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-bottomRight ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      // >>>>> Left
      [[`&-placement-left ${componentCls}-arrow`, `&-placement-leftTop ${componentCls}-arrow`, `&-placement-leftBottom ${componentCls}-arrow`].join(",")]: {
        right: {
          _skip_check_: true,
          value: 0
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${componentCls}-arrow`]: {
        top: dropdownArrowOffsetVertical
      },
      [`&-placement-leftBottom ${componentCls}-arrow`]: {
        bottom: dropdownArrowOffsetVertical
      },
      // >>>>> Right
      [[`&-placement-right ${componentCls}-arrow`, `&-placement-rightTop ${componentCls}-arrow`, `&-placement-rightBottom ${componentCls}-arrow`].join(",")]: {
        left: {
          _skip_check_: true,
          value: 0
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${componentCls}-arrow`]: {
        top: dropdownArrowOffsetVertical
      },
      [`&-placement-rightBottom ${componentCls}-arrow`]: {
        bottom: dropdownArrowOffsetVertical
      },
      // =========================== Offset ============================
      // Offset the popover to account for the dropdown arrow
      // >>>>> Top
      [connectArrowCls([`&-placement-topLeft`, `&-placement-top`, `&-placement-topRight`], showArrowCls)]: {
        paddingBottom: dropdownArrowDistance
      },
      // >>>>> Bottom
      [connectArrowCls([`&-placement-bottomLeft`, `&-placement-bottom`, `&-placement-bottomRight`], showArrowCls)]: {
        paddingTop: dropdownArrowDistance
      },
      // >>>>> Left
      [connectArrowCls([`&-placement-leftTop`, `&-placement-left`, `&-placement-leftBottom`], showArrowCls)]: {
        paddingRight: {
          _skip_check_: true,
          value: dropdownArrowDistance
        }
      },
      // >>>>> Right
      [connectArrowCls([`&-placement-rightTop`, `&-placement-right`, `&-placement-rightBottom`], showArrowCls)]: {
        paddingLeft: {
          _skip_check_: true,
          value: dropdownArrowDistance
        }
      }
    }
  };
}
const genTooltipStyle = (token) => {
  const {
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
    tooltipRadiusOuter
  } = token;
  return [
    {
      [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
        position: "absolute",
        zIndex: zIndexPopup,
        display: "block",
        "&": [{
          width: "max-content"
        }, {
          width: "intrinsic"
        }],
        maxWidth: tooltipMaxWidth,
        visibility: "visible",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": tooltipBg,
        // Wrapper for the tooltip content
        [`${componentCls}-inner`]: {
          minWidth: controlHeight,
          minHeight: controlHeight,
          padding: `${paddingSM / 2}px ${paddingXS}px`,
          color: tooltipColor,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: tooltipBg,
          borderRadius: tooltipBorderRadius,
          boxShadow: boxShadowSecondary
        },
        // Limit left and right placement radius
        [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
          [`${componentCls}-inner`]: {
            borderRadius: Math.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
          }
        },
        [`${componentCls}-content`]: {
          position: "relative"
        }
      }), genPresetColor(token, (colorKey, _ref) => {
        let {
          darkColor
        } = _ref;
        return {
          [`&${componentCls}-${colorKey}`]: {
            [`${componentCls}-inner`]: {
              backgroundColor: darkColor
            },
            [`${componentCls}-arrow`]: {
              "--antd-arrow-background-color": darkColor
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    getArrowStyle(merge(token, {
      borderRadiusOuter: tooltipRadiusOuter
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      showArrowCls: "",
      contentRadius: tooltipBorderRadius,
      limitVerticalRadius: true
    }),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none"
      }
    }
  ];
};
const useStyle$5 = (prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook("Tooltip", (token) => {
    if ((injectStyle === null || injectStyle === void 0 ? void 0 : injectStyle.value) === false) {
      return [];
    }
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgDefault,
      borderRadiusOuter
    } = token;
    const TooltipToken = merge(token, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgDefault,
      tooltipRadiusOuter: borderRadiusOuter > 4 ? 4 : borderRadiusOuter
    });
    return [genTooltipStyle(TooltipToken), initZoomMotion(token, "zoom-big-fast")];
  }, (_ref2) => {
    let {
      zIndexPopupBase,
      colorBgSpotlight
    } = _ref2;
    return {
      zIndexPopup: zIndexPopupBase + 70,
      colorBgDefault: colorBgSpotlight
    };
  });
  return useOriginHook(prefixCls);
};
const splitObject = (obj, keys) => {
  const picked = {};
  const omitted = _extends({}, obj);
  keys.forEach((key) => {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked,
    omitted
  };
};
const tooltipProps = () => _extends(_extends({}, abstractTooltipProps()), {
  title: PropTypes.any
});
const ToolTip = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: false,
  props: initDefaultProps(tooltipProps(), {
    trigger: "hover",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
  }),
  slots: Object,
  // emits: ['update:visible', 'visibleChange'],
  setup(props2, _ref) {
    let {
      slots,
      emit,
      attrs,
      expose
    } = _ref;
    const {
      prefixCls,
      getPopupContainer,
      direction,
      rootPrefixCls
    } = useConfigInject("tooltip", props2);
    const mergedOpen = computed(() => {
      var _a;
      return (_a = props2.open) !== null && _a !== void 0 ? _a : props2.visible;
    });
    const innerOpen = ref(firstNotUndefined([props2.open, props2.visible]));
    const tooltip = ref();
    let rafId;
    watch(mergedOpen, (val) => {
      wrapperRaf.cancel(rafId);
      rafId = wrapperRaf(() => {
        innerOpen.value = !!val;
      });
    });
    const isNoTitle = () => {
      var _a;
      const title = (_a = props2.title) !== null && _a !== void 0 ? _a : slots.title;
      return !title && title !== 0;
    };
    const handleVisibleChange = (val) => {
      const noTitle = isNoTitle();
      if (mergedOpen.value === void 0) {
        innerOpen.value = noTitle ? false : val;
      }
      if (!noTitle) {
        emit("update:visible", val);
        emit("visibleChange", val);
        emit("update:open", val);
        emit("openChange", val);
      }
    };
    const getPopupDomNode = () => {
      return tooltip.value.getPopupDomNode();
    };
    expose({
      getPopupDomNode,
      open: innerOpen,
      forcePopupAlign: () => {
        var _a;
        return (_a = tooltip.value) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
      }
    });
    const tooltipPlacements = computed(() => {
      const {
        builtinPlacements,
        arrowPointAtCenter,
        autoAdjustOverflow: autoAdjustOverflow2
      } = props2;
      return builtinPlacements || getPlacements({
        arrowPointAtCenter,
        autoAdjustOverflow: autoAdjustOverflow2
      });
    });
    const isTrueProps = (val) => {
      return val || val === "";
    };
    const getDisabledCompatibleChildren = (ele) => {
      const elementType = ele.type;
      if (typeof elementType === "object" && ele.props) {
        if ((elementType.__ANT_BUTTON === true || elementType === "button") && isTrueProps(ele.props.disabled) || elementType.__ANT_SWITCH === true && (isTrueProps(ele.props.disabled) || isTrueProps(ele.props.loading)) || elementType.__ANT_RADIO === true && isTrueProps(ele.props.disabled)) {
          const {
            picked,
            omitted
          } = splitObject(getStyle$1(ele), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]);
          const spanStyle = _extends(_extends({
            display: "inline-block"
          }, picked), {
            cursor: "not-allowed",
            lineHeight: 1,
            width: ele.props && ele.props.block ? "100%" : void 0
          });
          const buttonStyle = _extends(_extends({}, omitted), {
            pointerEvents: "none"
          });
          const child = cloneElement(ele, {
            style: buttonStyle
          }, true);
          return createVNode("span", {
            "style": spanStyle,
            "class": `${prefixCls.value}-disabled-compatible-wrapper`
          }, [child]);
        }
      }
      return ele;
    };
    const getOverlay = () => {
      var _a, _b;
      return (_a = props2.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
    };
    const onPopupAlign = (domNode, align) => {
      const placements2 = tooltipPlacements.value;
      const placement = Object.keys(placements2).find((key) => {
        var _a, _b;
        return placements2[key].points[0] === ((_a = align.points) === null || _a === void 0 ? void 0 : _a[0]) && placements2[key].points[1] === ((_b = align.points) === null || _b === void 0 ? void 0 : _b[1]);
      });
      if (placement) {
        const rect = domNode.getBoundingClientRect();
        const transformOrigin = {
          top: "50%",
          left: "50%"
        };
        if (placement.indexOf("top") >= 0 || placement.indexOf("Bottom") >= 0) {
          transformOrigin.top = `${rect.height - align.offset[1]}px`;
        } else if (placement.indexOf("Top") >= 0 || placement.indexOf("bottom") >= 0) {
          transformOrigin.top = `${-align.offset[1]}px`;
        }
        if (placement.indexOf("left") >= 0 || placement.indexOf("Right") >= 0) {
          transformOrigin.left = `${rect.width - align.offset[0]}px`;
        } else if (placement.indexOf("right") >= 0 || placement.indexOf("Left") >= 0) {
          transformOrigin.left = `${-align.offset[0]}px`;
        }
        domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
      }
    };
    const colorInfo = computed(() => parseColor(prefixCls.value, props2.color));
    const injectFromPopover = computed(() => attrs["data-popover-inject"]);
    const [wrapSSR, hashId] = useStyle$5(prefixCls, computed(() => !injectFromPopover.value));
    return () => {
      var _a, _b;
      const {
        openClassName,
        overlayClassName,
        overlayStyle,
        overlayInnerStyle
      } = props2;
      let children = (_b = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))) !== null && _b !== void 0 ? _b : null;
      children = children.length === 1 ? children[0] : children;
      let tempVisible = innerOpen.value;
      if (mergedOpen.value === void 0 && isNoTitle()) {
        tempVisible = false;
      }
      if (!children) {
        return null;
      }
      const child = getDisabledCompatibleChildren(isValidElement(children) && !isFragment(children) ? children : createVNode("span", null, [children]));
      const childCls = classNames({
        [openClassName || `${prefixCls.value}-open`]: true,
        [child.props && child.props.class]: child.props && child.props.class
      });
      const customOverlayClassName = classNames(overlayClassName, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl"
      }, colorInfo.value.className, hashId.value);
      const formattedOverlayInnerStyle = _extends(_extends({}, colorInfo.value.overlayStyle), overlayInnerStyle);
      const arrowContentStyle = colorInfo.value.arrowStyle;
      const vcTooltipProps = _extends(_extends(_extends({}, attrs), props2), {
        prefixCls: prefixCls.value,
        getPopupContainer: getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value,
        builtinPlacements: tooltipPlacements.value,
        visible: tempVisible,
        ref: tooltip,
        overlayClassName: customOverlayClassName,
        overlayStyle: _extends(_extends({}, arrowContentStyle), overlayStyle),
        overlayInnerStyle: formattedOverlayInnerStyle,
        onVisibleChange: handleVisibleChange,
        onPopupAlign,
        transitionName: getTransitionName(rootPrefixCls.value, "zoom-big-fast", props2.transitionName)
      });
      return wrapSSR(createVNode(Tooltip$1, vcTooltipProps, {
        default: () => [innerOpen.value ? cloneElement(child, {
          class: childCls
        }) : child],
        arrowContent: () => createVNode("span", {
          "class": `${prefixCls.value}-arrow-content`
        }, null),
        overlay: getOverlay
      }));
    };
  }
});
const Tooltip = withInstall(ToolTip);
const genWaveStyle = (token) => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
const useStyle$4 = genComponentStyleHook("Wave", (token) => [genWaveStyle(token)]);
const WaveEffect = defineComponent({
  props: {
    target: objectType(),
    className: String
  },
  setup(props2) {
    const divRef = shallowRef(null);
    const [color, setWaveColor] = useState(null);
    const [borderRadius, setBorderRadius] = useState([]);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [enabled, setEnabled] = useState(false);
    const removeDom = () => {
      var _a;
      const holder = (_a = divRef.value) === null || _a === void 0 ? void 0 : _a.parentElement;
      if (holder) {
        render(null, holder);
        if (holder.parentElement) {
          holder.parentElement.removeChild(holder);
        }
      }
    };
    const onTransitionend = (e) => {
      if (e.propertyName === "opacity") {
        removeDom();
      }
    };
    return () => {
      if (!enabled.value) {
        return null;
      }
      const waveStyle = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: borderRadius.value.map((radius) => `${radius}px`).join(" ")
      };
      if (color) {
        waveStyle["--wave-color"] = color.value;
      }
      return createVNode(Transition, {
        "appear": true,
        "name": "wave-motion",
        "appearFromClass": "wave-motion-appear",
        "appearActiveClass": "wave-motion-appear",
        "appearToClass": "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [createVNode("div", {
          "ref": divRef,
          "class": props2.className,
          "style": waveStyle,
          "onTransitionend": onTransitionend
        }, null)]
      });
    };
  }
});
function showWaveEffect(node, className) {
  const holder = (void 0).createElement("div");
  holder.style.position = "absolute";
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node === null || node === void 0 ? void 0 : node.insertBefore(holder, node === null || node === void 0 ? void 0 : node.firstChild);
  render(createVNode(WaveEffect, {
    "target": node,
    "className": className
  }, null), holder);
}
function useWave(instance, className, wave) {
  function showWave() {
    var _a;
    const node = findDOMNode(instance);
    if (((_a = wave === null || wave === void 0 ? void 0 : wave.value) === null || _a === void 0 ? void 0 : _a.disabled) || !node) {
      return;
    }
    showWaveEffect(node, className.value);
  }
  return showWave;
}
const Wave = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const instance = getCurrentInstance();
    const {
      prefixCls,
      wave
    } = useConfigInject("wave", props2);
    const [, hashId] = useStyle$4(prefixCls);
    useWave(instance, computed(() => classNames(prefixCls.value, hashId.value)), wave);
    return () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      return children;
    };
  }
});
function convertLegacyProps(type) {
  if (type === "danger") {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
const buttonProps = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: PropTypes.any,
  href: String,
  target: String,
  title: String,
  onClick: eventType(),
  onMousedown: eventType()
});
const getCollapsedWidth = (node) => {
  if (node) {
    node.style.width = "0px";
    node.style.opacity = "0";
    node.style.transform = "scale(0)";
  }
};
const getRealWidth = (node) => {
  nextTick(() => {
    if (node) {
      node.style.width = `${node.scrollWidth}px`;
      node.style.opacity = "1";
      node.style.transform = "scale(1)";
    }
  });
};
const resetStyle = (node) => {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
const LoadingIcon = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(props2) {
    return () => {
      const {
        existIcon,
        prefixCls,
        loading
      } = props2;
      if (existIcon) {
        return createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined, null, null)]);
      }
      const visible = !!loading;
      return createVNode(Transition, {
        "name": `${prefixCls}-loading-icon-motion`,
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": (node) => {
          setTimeout(() => {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: () => [visible ? createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined, null, null)]) : null]
      });
    };
  }
});
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle$1 = (token) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -lineWidth,
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          [`&:hover,
          &:focus,
          &:active`]: {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: -token.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: _extends(_extends({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
const genSharedButtonStyle = (token) => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: token.lineHeight,
      color: token.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": _extends({}, genFocusStyle(token)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: "inline-block",
            width: token.lineWidth,
            height: `calc(100% + ${token.lineWidth * 2}px)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${token.lineWidth * 2}px)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
  "&:not(:disabled)": {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
const genCircleButtonStyle = (token) => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
const genRoundButtonStyle = (token) => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
const genDisabledStyle$1 = (token) => ({
  cursor: "not-allowed",
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: "none"
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: _extends(_extends({
    color: textColor || void 0,
    backgroundColor: "transparent",
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(_extends({
    backgroundColor: "transparent"
  }, hoverStyle), _extends({
    backgroundColor: "transparent"
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  })
});
const genSolidDisabledButtonStyle = (token) => ({
  "&:disabled": _extends({}, genDisabledStyle$1(token))
});
const genSolidButtonStyle = (token) => _extends({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = (token) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: token.colorTextDisabled
  }
});
const genDefaultButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorder,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
const genPrimaryButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    backgroundColor: token.colorError,
    boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
const genDashedButtonStyle = (token) => _extends(_extends({}, genDefaultButtonStyle(token)), {
  borderStyle: "dashed"
});
const genLinkButtonStyle = (token) => _extends(_extends(_extends({
  color: token.colorLink
}, genHoverActiveButtonStyle({
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
const genTextButtonStyle = (token) => _extends(_extends(_extends({}, genHoverActiveButtonStyle({
  color: token.colorText,
  backgroundColor: token.colorBgTextHover
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
const genDisabledButtonStyle = (token) => _extends(_extends({}, genDisabledStyle$1(token)), {
  [`&${token.componentCls}:hover`]: _extends({}, genDisabledStyle$1(token))
});
const genTypeButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token),
    [`${componentCls}-disabled`]: genDisabledButtonStyle(token)
  };
};
const genSizeButtonStyle = function(token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    // Size
    {
      [`${componentCls}${sizePrefixCls}`]: {
        fontSize,
        height: controlHeight,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${componentCls}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token.opacityLoading,
          cursor: "default"
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
          marginInlineEnd: token.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
    },
    {
      [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
    }
  ];
};
const genSizeBaseButtonStyle = (token) => genSizeButtonStyle(token);
const genSizeSmallButtonStyle = (token) => {
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token) => {
  const largeToken = merge(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Button", (token) => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token;
  const buttonToken = merge(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeSmallButtonStyle(buttonToken),
    genSizeBaseButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, disabled, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    genGroupStyle$1(buttonToken),
    // Space Compact
    genCompactItemStyle(token, {
      focus: false
    }),
    genCompactItemVerticalStyle(token)
  ];
});
const buttonGroupProps = () => ({
  prefixCls: String,
  size: {
    type: String
  }
});
const GroupSizeContext = createContext();
const ButtonGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("btn-group", props2);
    const [, , hashId] = useToken();
    GroupSizeContext.useProvide(reactive({
      size: computed(() => props2.size)
    }));
    const classes = computed(() => {
      const {
        size
      } = props2;
      let sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          devWarning(!size, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-${sizeCls}`]: sizeCls,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [hashId.value]: true
      };
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
const Button = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(buttonProps(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      emit,
      expose
    } = _ref;
    const {
      prefixCls,
      autoInsertSpaceInButton,
      direction,
      size
    } = useConfigInject("btn", props2);
    const [wrapSSR, hashId] = useStyle$3(prefixCls);
    const groupSizeContext = GroupSizeContext.useInject();
    const disabledContext = useInjectDisabled();
    const mergedDisabled = computed(() => {
      var _a;
      return (_a = props2.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
    });
    const buttonNodeRef = shallowRef(null);
    const delayTimeoutRef = shallowRef(void 0);
    let isNeedInserted = false;
    const innerLoading = shallowRef(false);
    const hasTwoCNChar = shallowRef(false);
    const autoInsertSpace = computed(() => autoInsertSpaceInButton.value !== false);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const loadingOrDelay = computed(() => typeof props2.loading === "object" && props2.loading.delay ? props2.loading.delay || true : !!props2.loading);
    watch(loadingOrDelay, (val) => {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = setTimeout(() => {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    const classes = computed(() => {
      const {
        type,
        shape = "default",
        ghost,
        block,
        danger
      } = props2;
      const pre = prefixCls.value;
      const sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: void 0
      };
      const sizeFullname = compactSize.value || (groupSizeContext === null || groupSizeContext === void 0 ? void 0 : groupSizeContext.size) || size.value;
      const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
      return [compactItemClassnames.value, {
        [hashId.value]: true,
        [`${pre}`]: true,
        [`${pre}-${shape}`]: shape !== "default" && shape,
        [`${pre}-${type}`]: type,
        [`${pre}-${sizeCls}`]: sizeCls,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
        [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
        [`${pre}-rtl`]: direction.value === "rtl"
      }];
    });
    const handleClick = (event) => {
      if (innerLoading.value || mergedDisabled.value) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    const handleMousedown = (event) => {
      emit("mousedown", event);
    };
    const insertSpace = (child, needInserted) => {
      const SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        let text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(() => {
      devWarning(!(props2.ghost && isUnBorderedButtonType(props2.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    const focus = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return () => {
      var _a, _b;
      const {
        icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props2;
      const children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnBorderedButtonType(props2.type);
      const {
        type,
        htmlType,
        href,
        title,
        target
      } = props2;
      const iconType = innerLoading.value ? "loading" : icon;
      const buttonProps2 = _extends(_extends({}, attrs), {
        title,
        disabled: mergedDisabled.value,
        class: [classes.value, attrs.class, {
          [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType
        }],
        onClick: handleClick,
        onMousedown: handleMousedown
      });
      if (!mergedDisabled.value) {
        delete buttonProps2.disabled;
      }
      const iconNode = icon && !innerLoading.value ? icon : createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      const kids = children.map((child) => insertSpace(child, isNeedInserted && autoInsertSpace.value));
      if (href !== void 0) {
        return wrapSSR(createVNode("a", _objectSpread$6(_objectSpread$6({}, buttonProps2), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]));
      }
      let buttonNode = createVNode("button", _objectSpread$6(_objectSpread$6({}, buttonProps2), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (!isUnBorderedButtonType(type)) {
        const _buttonNode = /* @__PURE__ */ function() {
          return buttonNode;
        }();
        buttonNode = createVNode(Wave, {
          "ref": "wave",
          "disabled": !!innerLoading.value
        }, {
          default: () => [_buttonNode]
        });
      }
      return wrapSSR(buttonNode);
    };
  }
});
Button.Group = ButtonGroup;
Button.install = function(app) {
  app.component(Button.name, Button);
  app.component(ButtonGroup.name, ButtonGroup);
  return app;
};
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  const originClass = node.className;
  return ` ${originClass} `.indexOf(` ${className} `) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = `${node.className} ${className}`;
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      const originClass = node.className;
      node.className = ` ${originClass} `.replace(` ${className} `, " ");
    }
  }
}
const collapseMotion = function() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse";
  let appear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return {
    name,
    appear,
    css: true,
    onBeforeEnter: (node) => {
      node.style.height = "0px";
      node.style.opacity = "0";
      addClass(node, name);
    },
    onEnter: (node) => {
      nextTick(() => {
        node.style.height = `${node.scrollHeight}px`;
        node.style.opacity = "1";
      });
    },
    onAfterEnter: (node) => {
      if (node) {
        removeClass(node, name);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: (node) => {
      addClass(node, name);
      node.style.height = `${node.offsetHeight}px`;
      node.style.opacity = null;
    },
    onLeave: (node) => {
      setTimeout(() => {
        node.style.height = "0px";
        node.style.opacity = "0";
      });
    },
    onAfterLeave: (node) => {
      if (node) {
        removeClass(node, name);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
const genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
const genHoverStyle = (token) => ({
  borderColor: token.inputBorderHoverColor,
  borderInlineEndWidth: token.lineWidth
});
const genActiveStyle = (token) => ({
  borderColor: token.inputBorderHoverColor,
  boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`,
  borderInlineEndWidth: token.lineWidth,
  outline: 0
});
const genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": _extends({}, genHoverStyle(merge(token, {
    inputBorderHoverColor: token.colorBorder
  })))
});
const genInputLargeStyle = (token) => {
  const {
    inputPaddingVerticalLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    inputPaddingHorizontalLG
  } = token;
  return {
    padding: `${inputPaddingVerticalLG}px ${inputPaddingHorizontalLG}px`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = (token) => ({
  padding: `${token.inputPaddingVerticalSM}px ${token.controlPaddingHorizontalSM - 1}px`,
  borderRadius: token.borderRadiusSM
});
const genStatusStyle = (token, parentCls) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    colorErrorOutline,
    colorWarningOutline,
    colorErrorBorderHover,
    colorWarningBorderHover
  } = token;
  return {
    [`&-status-error:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorError,
      "&:hover": {
        borderColor: colorErrorBorderHover
      },
      "&:focus, &-focused": _extends({}, genActiveStyle(merge(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      }))),
      [`${componentCls}-prefix`]: {
        color: colorError
      }
    },
    [`&-status-warning:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorWarning,
      "&:hover": {
        borderColor: colorWarningBorderHover
      },
      "&:focus, &-focused": _extends({}, genActiveStyle(merge(token, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      }))),
      [`${componentCls}-prefix`]: {
        color: colorWarning
      }
    }
  };
};
const genBasicInputStyle = (token) => _extends(_extends({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${token.inputPaddingVertical}px ${token.inputPaddingHorizontal}px`,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  backgroundColor: token.colorBgContainer,
  backgroundImage: "none",
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: token.colorBorder,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`
}, genPlaceholderStyle(token.colorTextPlaceholder)), {
  "&:hover": _extends({}, genHoverStyle(token)),
  "&:focus, &-focused": _extends({}, genActiveStyle(token)),
  "&-disabled, &[disabled]": _extends({}, genDisabledStyle(token)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: token.controlHeight,
    lineHeight: token.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${token.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": _extends({}, genInputLargeStyle(token)),
  "&-sm": _extends({}, genInputSmallStyle(token)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
});
const genInputGroupStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    [`&[class*='col-']`]: {
      paddingInlineEnd: token.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: _extends({}, genInputLargeStyle(token)),
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: _extends({}, genInputSmallStyle(token)),
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      [`&-addon, &-wrap`]: {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${token.inputPaddingHorizontal}px`,
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.fontSize,
        textAlign: "center",
        backgroundColor: token.colorFillAlter,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `-${token.inputPaddingVertical + 1}px -${token.inputPaddingHorizontal}px`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input)`]: {
            [`${antCls}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${token.lineWidth}px ${token.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${antCls}-select-selector`]: {
              color: token.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px -${token.inputPaddingHorizontal}px`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${componentCls}`]: {
      float: "inline-start",
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${componentCls}-search &`]: {
          borderStartStartRadius: token.borderRadius,
          borderEndStartRadius: token.borderRadius
        }
      },
      [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: _extends(_extends({
      display: "block"
    }, clearFix()), {
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`& > ${componentCls}-affix-wrapper`]: {
        display: "inline-flex"
      },
      [`& > ${antCls}-picker-range`]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -token.lineWidth,
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${componentCls}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child > ${antCls}-select-selector,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: -token.lineWidth,
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${componentCls}-group-wrapper:not(:last-child)`]: {
        [`&${componentCls}-search > ${componentCls}-group`]: {
          [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${componentCls}`]: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token.borderRadius
          }
        }
      }
    }),
    [`&&-sm ${antCls}-btn`]: {
      fontSize: token.fontSizeSM,
      height: token.controlHeightSM,
      lineHeight: "normal"
    },
    [`&&-lg ${antCls}-btn`]: {
      fontSize: token.fontSizeLG,
      height: token.controlHeightLG,
      lineHeight: "normal"
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&&-lg ${antCls}-select-single ${antCls}-select-selector`]: {
      height: `${token.controlHeightLG}px`,
      [`${antCls}-select-selection-item, ${antCls}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${token.controlHeightLG - 2}px`
      },
      [`${antCls}-select-selection-search-input`]: {
        height: `${token.controlHeightLG}px`
      }
    },
    [`&&-sm ${antCls}-select-single ${antCls}-select-selector`]: {
      height: `${token.controlHeightSM}px`,
      [`${antCls}-select-selection-item, ${antCls}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${token.controlHeightSM - 2}px`
      },
      [`${antCls}-select-selection-search-input`]: {
        height: `${token.controlHeightSM}px`
      }
    }
  };
};
const genInputStyle = (token) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return {
    [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), genBasicInputStyle(token)), genStatusStyle(token, componentCls)), {
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      }
    })
  };
};
const genAllowClearStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token.motionDurationSlow}`,
      "&:hover": {
        color: token.colorTextTertiary
      },
      "&:active": {
        color: token.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${token.inputAffixPadding}px`
      }
    },
    // ======================= TextArea ========================
    "&-textarea-with-clear-btn": {
      padding: "0 !important",
      border: "0 !important",
      [`${componentCls}-clear-icon`]: {
        position: "absolute",
        insetBlockStart: token.paddingXS,
        insetInlineEnd: token.paddingXS,
        zIndex: 1
      }
    }
  };
};
const genAffixStyle = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  return {
    [`${componentCls}-affix-wrapper`]: _extends(_extends(_extends(_extends(_extends({}, genBasicInputStyle(token)), {
      display: "inline-flex",
      [`&:not(${componentCls}-affix-wrapper-disabled):hover`]: _extends(_extends({}, genHoverStyle(token)), {
        zIndex: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }),
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${componentCls}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${componentCls}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${componentCls}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      }
    }), genAllowClearStyle(token)), {
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    }), genStatusStyle(token, `${componentCls}-affix-wrapper`))
  };
};
const genGroupStyle = (token) => {
  const {
    componentCls,
    colorError,
    colorSuccess,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-group`]: _extends(_extends(_extends({}, resetComponent(token)), genInputGroupStyle(token)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Status
        "&-status-error": {
          [`${componentCls}-group-addon`]: {
            color: colorError,
            borderColor: colorError
          }
        },
        "&-status-warning": {
          [`${componentCls}-group-addon:last-child`]: {
            color: colorSuccess,
            borderColor: colorSuccess
          }
        }
      }
    })
  };
};
const genSearchInputStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [`${componentCls}`]: {
        "&:hover, &:focus": {
          borderColor: token.colorPrimaryHover,
          [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            borderInlineStartColor: token.colorPrimaryHover
          }
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${componentCls}-lg`]: {
        lineHeight: token.lineHeightLG - 2e-4
      },
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${searchPrefixCls}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: token.borderRadius,
            borderEndEndRadius: token.borderRadius,
            borderEndStartRadius: 0
          },
          [`${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            color: token.colorTextDescription,
            "&:hover": {
              color: token.colorPrimaryHover
            },
            "&:active": {
              color: token.colorPrimaryActive
            },
            [`&${antCls}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${searchPrefixCls}-button`]: {
        height: token.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${searchPrefixCls}-button`]: {
        height: token.controlHeightLG
      },
      [`&-small ${searchPrefixCls}-button`]: {
        height: token.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${componentCls}-compact-item`]: {
        [`&:not(${componentCls}-compact-last-item)`]: {
          [`${componentCls}-group-addon`]: {
            [`${componentCls}-search-button`]: {
              marginInlineEnd: -token.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${componentCls}-compact-first-item)`]: {
          [`${componentCls},${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${componentCls}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
function initInputToken(token) {
  return merge(token, {
    inputAffixPadding: token.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((token.controlHeightLG - token.fontSizeLG * token.lineHeightLG) / 2 * 10) / 10 - token.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((token.controlHeightSM - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 0),
    inputPaddingHorizontal: token.paddingSM - token.lineWidth,
    inputPaddingHorizontalSM: token.paddingXS - token.lineWidth,
    inputPaddingHorizontalLG: token.controlPaddingHorizontal - token.lineWidth,
    inputBorderHoverColor: token.colorPrimaryHover,
    inputBorderActiveColor: token.colorPrimaryHover
  });
}
const genTextAreaStyle = (token) => {
  const {
    componentCls,
    inputPaddingHorizontal,
    paddingLG
  } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    [textareaPrefixCls]: {
      position: "relative",
      [`${textareaPrefixCls}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: inputPaddingHorizontal,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      [`&-status-error,
        &-status-warning,
        &-status-success,
        &-status-validating`]: {
        [`&${textareaPrefixCls}-has-feedback`]: {
          [`${componentCls}`]: {
            paddingInlineEnd: paddingLG
          }
        }
      },
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${componentCls}`]: {
          height: "100%"
        },
        "&::after": {
          color: token.colorTextDescription,
          whiteSpace: "nowrap",
          content: "attr(data-count)",
          pointerEvents: "none",
          float: "right"
        }
      },
      "&-rtl": {
        "&::after": {
          float: "left"
        }
      }
    }
  };
};
const useStyle$2 = genComponentStyleHook("Input", (token) => {
  const inputToken = initInputToken(token);
  return [
    genInputStyle(inputToken),
    genTextAreaStyle(inputToken),
    genAffixStyle(inputToken),
    genGroupStyle(inputToken),
    genSearchInputStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken)
  ];
});
const useFlexGapSupport = () => {
  const flexible = shallowRef(false);
  return flexible;
};
const RowContextKey = Symbol("rowContextKey");
const useProvideRow = (state) => {
  provide(RowContextKey, state);
};
const useInjectRow = () => {
  return inject(RowContextKey, {
    gutter: computed(() => void 0),
    wrap: computed(() => void 0),
    supportFlexGap: computed(() => void 0)
  });
};
const genGridRowStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around ": {
        justifyContent: "space-around"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
};
const genGridColStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "none"
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineEnd: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "block",
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: _extends({}, genGridStyle(token, sizeCls))
});
const useRowStyle = genComponentStyleHook("Grid", (token) => [genGridRowStyle(token)]);
const useColStyle = genComponentStyleHook("Grid", (token) => {
  const gridToken = merge(token, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = {
    "-sm": gridToken.screenSMMin,
    "-md": gridToken.screenMDMin,
    "-lg": gridToken.screenLGMin,
    "-xl": gridToken.screenXLMin,
    "-xxl": gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ""), genGridStyle(gridToken, "-xs"), Object.keys(gridMediaSizesMap).map((key) => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => _extends(_extends({}, pre), cur), {})];
});
const rowProps = () => ({
  align: someType([String, Object]),
  justify: someType([String, Object]),
  prefixCls: String,
  gutter: someType([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
});
const ARow = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: false,
  props: rowProps(),
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("row", props2);
    const [wrapSSR, hashId] = useRowStyle(prefixCls);
    useResponsiveObserver();
    const screens = ref({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    });
    const curScreens = ref({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false
    });
    const mergePropsByScreen = (oriProp) => {
      return computed(() => {
        if (typeof props2[oriProp] === "string") {
          return props2[oriProp];
        }
        if (typeof props2[oriProp] !== "object") {
          return "";
        }
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (!curScreens.value[breakpoint]) continue;
          const curVal = props2[oriProp][breakpoint];
          if (curVal !== void 0) {
            return curVal;
          }
        }
        return "";
      });
    };
    const mergeAlign = mergePropsByScreen("align");
    const mergeJustify = mergePropsByScreen("justify");
    const supportFlexGap = useFlexGapSupport();
    const gutter = computed(() => {
      const results = [void 0, void 0];
      const {
        gutter: gutter2 = 0
      } = props2;
      const normalizedGutter = Array.isArray(gutter2) ? gutter2 : [gutter2, void 0];
      normalizedGutter.forEach((g, index) => {
        if (typeof g === "object") {
          for (let i = 0; i < responsiveArray.length; i++) {
            const breakpoint = responsiveArray[i];
            if (screens.value[breakpoint] && g[breakpoint] !== void 0) {
              results[index] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index] = g;
        }
      });
      return results;
    });
    useProvideRow({
      gutter,
      supportFlexGap,
      wrap: computed(() => props2.wrap)
    });
    const classes = computed(() => classNames(prefixCls.value, {
      [`${prefixCls.value}-no-wrap`]: props2.wrap === false,
      [`${prefixCls.value}-${mergeJustify.value}`]: mergeJustify.value,
      [`${prefixCls.value}-${mergeAlign.value}`]: mergeAlign.value,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl"
    }, attrs.class, hashId.value));
    const rowStyle = computed(() => {
      const gt = gutter.value;
      const style = {};
      const horizontalGutter = gt[0] != null && gt[0] > 0 ? `${gt[0] / -2}px` : void 0;
      const verticalGutter = gt[1] != null && gt[1] > 0 ? `${gt[1] / -2}px` : void 0;
      if (horizontalGutter) {
        style.marginLeft = horizontalGutter;
        style.marginRight = horizontalGutter;
      }
      if (supportFlexGap.value) {
        style.rowGap = `${gt[1]}px`;
      } else if (verticalGutter) {
        style.marginTop = verticalGutter;
        style.marginBottom = verticalGutter;
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread$6(_objectSpread$6({}, attrs), {}, {
        "class": classes.value,
        "style": _extends(_extends({}, rowStyle.value), attrs.style)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
function toArray$1(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function get(entity, path) {
  let current = entity;
  for (let i = 0; i < path.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path[i]];
  }
  return current;
}
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  const [path, ...restPath] = paths;
  let clone;
  if (!entity && typeof path === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = [...entity];
  } else {
    clone = _extends({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  let removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function getNamePath(path) {
  return toArray$1(path);
}
function getValue(store, namePath) {
  const value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  let removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  const newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some((path) => matchNamePath(path, namePath));
}
function isObject(obj) {
  return typeof obj === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function internalSetValues(store, values) {
  const newStore = Array.isArray(store) ? [...store] : _extends({}, store);
  if (!values) {
    return newStore;
  }
  Object.keys(values).forEach((key) => {
    const prevValue = newStore[key];
    const value = values[key];
    const recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : value;
  });
  return newStore;
}
function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }
  return restValues.reduce((current, newStore) => internalSetValues(current, newStore), store);
}
function cloneByNamePathList(store, namePathList) {
  let newStore = {};
  namePathList.forEach((namePath) => {
    const value = getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }
  return namePath.every((nameUnit, i) => changedNamePath[i] === nameUnit);
}
const typeTemplate = "'${name}' is not a valid ${type}";
const defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
const AsyncValidator = RawAsyncValidator;
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, (str) => {
    const key = str.slice(2, -1);
    return kv[key];
  });
}
function validateRule(name, value, rule, options, messageVariables) {
  return __awaiter(this, void 0, void 0, function* () {
    const cloneRule = _extends({}, rule);
    delete cloneRule.ruleIndex;
    delete cloneRule.trigger;
    let subRuleField = null;
    if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
      subRuleField = cloneRule.defaultField;
      delete cloneRule.defaultField;
    }
    const validator = new AsyncValidator({
      [name]: [cloneRule]
    });
    const messages = setValues({}, defaultValidateMessages, options.validateMessages);
    validator.messages(messages);
    let result = [];
    try {
      yield Promise.resolve(validator.validate({
        [name]: value
      }, _extends({}, options)));
    } catch (errObj) {
      if (errObj.errors) {
        result = errObj.errors.map((_ref, index) => {
          let {
            message
          } = _ref;
          return (
            // Wrap VueNode with `key`
            isValidElement(message) ? cloneVNode(message, {
              key: `error_${index}`
            }) : message
          );
        });
      } else {
        console.error(errObj);
        result = [messages.default()];
      }
    }
    if (!result.length && subRuleField) {
      const subResults = yield Promise.all(value.map((subValue, i) => validateRule(`${name}.${i}`, subValue, subRuleField, options, messageVariables)));
      return subResults.reduce((prev, errors) => [...prev, ...errors], []);
    }
    const kv = _extends(_extends(_extends({}, rule), {
      name,
      enum: (rule.enum || []).join(", ")
    }), messageVariables);
    const fillVariableResult = result.map((error) => {
      if (typeof error === "string") {
        return replaceMessage(error, kv);
      }
      return error;
    });
    return fillVariableResult;
  });
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  const name = namePath.join(".");
  const filledRules = rules.map((currentRule, ruleIndex) => {
    const originValidatorFunc = currentRule.validator;
    const cloneRule = _extends(_extends({}, currentRule), {
      ruleIndex
    });
    if (originValidatorFunc) {
      cloneRule.validator = (rule, val, callback) => {
        let hasPromise = false;
        const wrappedCallback = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Promise.resolve().then(() => {
            if (!hasPromise) {
              callback(...args);
            }
          });
        };
        const promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
        if (hasPromise) {
          promise.then(() => {
            callback();
          }).catch((err) => {
            callback(err || " ");
          });
        }
      };
    }
    return cloneRule;
  }).sort((_ref2, _ref3) => {
    let {
      warningOnly: w1,
      ruleIndex: i1
    } = _ref2;
    let {
      warningOnly: w2,
      ruleIndex: i2
    } = _ref3;
    if (!!w1 === !!w2) {
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  let summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
      for (let i = 0; i < filledRules.length; i += 1) {
        const rule = filledRules[i];
        const errors = yield validateRule(name, value, rule, options, messageVariables);
        if (errors.length) {
          reject([{
            errors,
            rule
          }]);
          return;
        }
      }
      resolve([]);
    }));
  } else {
    const rulePromises = filledRules.map((rule) => validateRule(name, value, rule, options, messageVariables).then((errors) => ({
      errors,
      rule
    })));
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then((errors) => {
      return Promise.reject(errors);
    });
  }
  summaryPromise.catch((e) => e);
  return summaryPromise;
}
function finishOnAllFailed(rulePromises) {
  return __awaiter(this, void 0, void 0, function* () {
    return Promise.all(rulePromises).then((errorsList) => {
      const errors = [].concat(...errorsList);
      return errors;
    });
  });
}
function finishOnFirstFailed(rulePromises) {
  return __awaiter(this, void 0, void 0, function* () {
    let count = 0;
    return new Promise((resolve) => {
      rulePromises.forEach((promise) => {
        promise.then((ruleError) => {
          if (ruleError.errors.length) {
            resolve([ruleError]);
          }
          count += 1;
          if (count === rulePromises.length) {
            resolve([]);
          }
        });
      });
    });
  });
}
const FormContextKey = Symbol("formContextKey");
const useProvideForm = (state) => {
  provide(FormContextKey, state);
};
const useInjectForm = () => {
  return inject(FormContextKey, {
    name: computed(() => void 0),
    labelAlign: computed(() => "right"),
    vertical: computed(() => false),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addField: (_eventKey, _field) => {
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeField: (_eventKey) => {
    },
    model: computed(() => void 0),
    rules: computed(() => void 0),
    colon: computed(() => void 0),
    labelWrap: computed(() => void 0),
    labelCol: computed(() => void 0),
    requiredMark: computed(() => false),
    validateTrigger: computed(() => void 0),
    onValidate: () => {
    },
    validateMessages: computed(() => defaultValidateMessages)
  });
};
const FormItemPrefixContextKey = Symbol("formItemPrefixContextKey");
const useProvideFormItemPrefix = (state) => {
  provide(FormItemPrefixContextKey, state);
};
const useInjectFormItemPrefix = () => {
  return inject(FormItemPrefixContextKey, {
    prefixCls: computed(() => "")
  });
};
function parseFlex(flex) {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const colProps = () => ({
  span: [String, Number],
  order: [String, Number],
  offset: [String, Number],
  push: [String, Number],
  pull: [String, Number],
  xs: {
    type: [String, Number, Object],
    default: void 0
  },
  sm: {
    type: [String, Number, Object],
    default: void 0
  },
  md: {
    type: [String, Number, Object],
    default: void 0
  },
  lg: {
    type: [String, Number, Object],
    default: void 0
  },
  xl: {
    type: [String, Number, Object],
    default: void 0
  },
  xxl: {
    type: [String, Number, Object],
    default: void 0
  },
  prefixCls: String,
  flex: [String, Number]
});
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
const Col = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: false,
  props: colProps(),
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      gutter,
      supportFlexGap,
      wrap
    } = useInjectRow();
    const {
      prefixCls,
      direction
    } = useConfigInject("col", props2);
    const [wrapSSR, hashId] = useColStyle(prefixCls);
    const classes = computed(() => {
      const {
        span,
        order,
        offset: offset2,
        push,
        pull
      } = props2;
      const pre = prefixCls.value;
      let sizeClassObj = {};
      sizes.forEach((size) => {
        let sizeProps = {};
        const propSize = props2[size];
        if (typeof propSize === "number") {
          sizeProps.span = propSize;
        } else if (typeof propSize === "object") {
          sizeProps = propSize || {};
        }
        sizeClassObj = _extends(_extends({}, sizeClassObj), {
          [`${pre}-${size}-${sizeProps.span}`]: sizeProps.span !== void 0,
          [`${pre}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
          [`${pre}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
          [`${pre}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
          [`${pre}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
          [`${pre}-rtl`]: direction.value === "rtl"
        });
      });
      return classNames(pre, {
        [`${pre}-${span}`]: span !== void 0,
        [`${pre}-order-${order}`]: order,
        [`${pre}-offset-${offset2}`]: offset2,
        [`${pre}-push-${push}`]: push,
        [`${pre}-pull-${pull}`]: pull
      }, sizeClassObj, attrs.class, hashId.value);
    });
    const mergedStyle = computed(() => {
      const {
        flex
      } = props2;
      const gutterVal = gutter.value;
      const style = {};
      if (gutterVal && gutterVal[0] > 0) {
        const horizontalGutter = `${gutterVal[0] / 2}px`;
        style.paddingLeft = horizontalGutter;
        style.paddingRight = horizontalGutter;
      }
      if (gutterVal && gutterVal[1] > 0 && !supportFlexGap.value) {
        const verticalGutter = `${gutterVal[1] / 2}px`;
        style.paddingTop = verticalGutter;
        style.paddingBottom = verticalGutter;
      }
      if (flex) {
        style.flex = parseFlex(flex);
        if (wrap.value === false && !style.minWidth) {
          style.minWidth = 0;
        }
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread$6(_objectSpread$6({}, attrs), {}, {
        "class": classes.value,
        "style": [mergedStyle.value, attrs.style]
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const FormItemLabel = (props2, _ref) => {
  let {
    slots,
    emit,
    attrs
  } = _ref;
  var _a, _b, _c, _d, _e;
  const {
    prefixCls,
    htmlFor,
    labelCol,
    labelAlign,
    colon,
    required,
    requiredMark
  } = _extends(_extends({}, props2), attrs);
  const [formLocale] = useLocaleReceiver("Form");
  const label = (_a = props2.label) !== null && _a !== void 0 ? _a : (_b = slots.label) === null || _b === void 0 ? void 0 : _b.call(slots);
  if (!label) return null;
  const {
    vertical,
    labelAlign: contextLabelAlign,
    labelCol: contextLabelCol,
    labelWrap,
    colon: contextColon
  } = useInjectForm();
  const mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  const mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = classNames(labelClsBasic, mergedLabelAlign === "left" && `${labelClsBasic}-left`, mergedLabelCol.class, {
    [`${labelClsBasic}-wrap`]: !!labelWrap.value
  });
  let labelChildren = label;
  const computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  const haveColon = computedColon && !vertical.value;
  if (haveColon && typeof label === "string" && label.trim() !== "") {
    labelChildren = label.replace(/[:|：]\s*$/, "");
  }
  if (props2.tooltip || slots.tooltip) {
    const tooltipNode = createVNode("span", {
      "class": `${prefixCls}-item-tooltip`
    }, [createVNode(Tooltip, {
      "title": props2.tooltip
    }, {
      default: () => [createVNode(QuestionCircleOutlined, null, null)]
    })]);
    labelChildren = createVNode(Fragment, null, [labelChildren, slots.tooltip ? (_c = slots.tooltip) === null || _c === void 0 ? void 0 : _c.call(slots, {
      class: `${prefixCls}-item-tooltip`
    }) : tooltipNode]);
  }
  if (requiredMark === "optional" && !required) {
    labelChildren = createVNode(Fragment, null, [labelChildren, createVNode("span", {
      "class": `${prefixCls}-item-optional`
    }, [((_d = formLocale.value) === null || _d === void 0 ? void 0 : _d.optional) || ((_e = localeValues.Form) === null || _e === void 0 ? void 0 : _e.optional)])]);
  }
  const labelClassName = classNames({
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-required-mark-optional`]: requiredMark === "optional",
    [`${prefixCls}-item-no-colon`]: !computedColon
  });
  return createVNode(Col, _objectSpread$6(_objectSpread$6({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: () => [createVNode("label", {
      "for": htmlFor,
      "class": labelClassName,
      "title": typeof label === "string" ? label : "",
      "onClick": (e) => emit("click", e)
    }, [labelChildren])]
  });
};
FormItemLabel.displayName = "FormItemLabel";
FormItemLabel.inheritAttrs = false;
const genFormValidateMotionStyle = (token) => {
  const {
    componentCls
  } = token;
  const helpCls = `${componentCls}-show-help`;
  const helpItemCls = `${componentCls}-show-help-item`;
  return {
    [helpCls]: {
      // Explain holder
      transition: `opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [helpItemCls]: {
        overflow: "hidden",
        transition: `height ${token.motionDurationSlow} ${token.motionEaseInOut},
                     opacity ${token.motionDurationSlow} ${token.motionEaseInOut},
                     transform ${token.motionDurationSlow} ${token.motionEaseInOut} !important`,
        [`&${helpItemCls}-appear, &${helpItemCls}-enter`]: {
          transform: `translateY(-5px)`,
          opacity: 0,
          [`&-active`]: {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${helpItemCls}-leave-active`]: {
          transform: `translateY(-5px)`
        }
      }
    }
  };
};
const resetForm = (token) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: token.marginLG,
    padding: 0,
    color: token.colorTextDescription,
    fontSize: token.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
  },
  label: {
    fontSize: token.fontSize
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  [`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]: {
    outline: 0,
    boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }
});
const genFormSize = (token, height) => {
  const {
    formItemCls
  } = token;
  return {
    [formItemCls]: {
      [`${formItemCls}-label > label`]: {
        height
      },
      [`${formItemCls}-control-input`]: {
        minHeight: height
      }
    }
  };
};
const genFormStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [token.componentCls]: _extends(_extends(_extends({}, resetComponent(token)), resetForm(token)), {
      [`${componentCls}-text`]: {
        display: "inline-block",
        paddingInlineEnd: token.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": _extends({}, genFormSize(token, token.controlHeightSM)),
      "&-large": _extends({}, genFormSize(token, token.controlHeightLG))
    })
  };
};
const genFormItemStyle = (token) => {
  const {
    formItemCls,
    iconCls,
    componentCls,
    rootPrefixCls
  } = token;
  return {
    [formItemCls]: _extends(_extends({}, resetComponent(token)), {
      marginBottom: token.marginLG,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden.${rootPrefixCls}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${formItemCls}-split`]: {
          color: token.colorError
        }
      },
      "&-has-error": {
        [`${formItemCls}-split`]: {
          color: token.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${formItemCls}-label`]: {
        display: "inline-block",
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: `${token.lineHeight} - 0.25em`,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: token.controlHeight,
          color: token.colorTextHeading,
          fontSize: token.fontSize,
          [`> ${iconCls}`]: {
            fontSize: token.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${formItemCls}-required:not(${formItemCls}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: token.marginXXS,
            color: token.colorError,
            fontSize: token.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-optional`]: {
            display: "inline-block",
            marginInlineStart: token.marginXXS,
            color: token.colorTextDescription,
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-tooltip`]: {
            color: token.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: token.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: token.marginXXS / 2,
            marginInlineEnd: token.marginXS
          },
          [`&${formItemCls}-no-colon::after`]: {
            content: '" "'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${formItemCls}-control`]: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${rootPrefixCls}-col-'"]):not([class*="' ${rootPrefixCls}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: token.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [formItemCls]: {
        "&-explain, &-extra": {
          clear: "both",
          color: token.colorTextDescription,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: token.controlHeightSM,
          transition: `color ${token.motionDurationMid} ${token.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: token.colorError
          },
          "&-warning": {
            color: token.colorWarning
          }
        }
      },
      [`&-with-help ${formItemCls}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${formItemCls}-feedback-icon`]: {
        fontSize: token.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: zoomIn,
        animationDuration: token.motionDurationMid,
        animationTimingFunction: token.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: token.colorSuccess
        },
        "&-error": {
          color: token.colorError
        },
        "&-warning": {
          color: token.colorWarning
        },
        "&-validating": {
          color: token.colorPrimary
        }
      }
    })
  };
};
const genHorizontalStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    rootPrefixCls
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      [`${formItemCls}-label`]: {
        flexGrow: 0
      },
      [`${formItemCls}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // https://github.com/ant-design/ant-design/issues/32980
      [`${formItemCls}-label.${rootPrefixCls}-col-24 + ${formItemCls}-control`]: {
        minWidth: "unset"
      }
    }
  };
};
const genInlineStyle = (token) => {
  const {
    componentCls,
    formItemCls
  } = token;
  return {
    [`${componentCls}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [formItemCls]: {
        flex: "none",
        flexWrap: "nowrap",
        marginInlineEnd: token.margin,
        marginBottom: 0,
        "&-with-help": {
          marginBottom: token.marginLG
        },
        [`> ${formItemCls}-label,
        > ${formItemCls}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${formItemCls}-label`]: {
          flex: "none"
        },
        [`${componentCls}-text`]: {
          display: "inline-block"
        },
        [`${formItemCls}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
};
const makeVerticalLayoutLabel = (token) => ({
  margin: 0,
  padding: `0 0 ${token.paddingXS}px`,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      display: "none"
    }
  }
});
const makeVerticalLayout = (token) => {
  const {
    componentCls,
    formItemCls
  } = token;
  return {
    [`${formItemCls} ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    [componentCls]: {
      [formItemCls]: {
        flexWrap: "wrap",
        [`${formItemCls}-label,
          ${formItemCls}-control`]: {
          flex: "0 0 100%",
          maxWidth: "100%"
        }
      }
    }
  };
};
const genVerticalStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    rootPrefixCls
  } = token;
  return {
    [`${componentCls}-vertical`]: {
      [formItemCls]: {
        "&-row": {
          flexDirection: "column"
        },
        "&-label > label": {
          height: "auto"
        },
        [`${componentCls}-item-control`]: {
          width: "100%"
        }
      }
    },
    [`${componentCls}-vertical ${formItemCls}-label,
      .${rootPrefixCls}-col-24${formItemCls}-label,
      .${rootPrefixCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    [`@media (max-width: ${token.screenXSMax}px)`]: [makeVerticalLayout(token), {
      [componentCls]: {
        [`.${rootPrefixCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    }],
    [`@media (max-width: ${token.screenSMMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${token.screenMDMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${token.screenLGMax}px)`]: {
      [componentCls]: {
        [`.${rootPrefixCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Form", (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const formToken = merge(token, {
    formItemCls: `${token.componentCls}-item`,
    rootPrefixCls
  });
  return [genFormStyle(formToken), genFormItemStyle(formToken), genFormValidateMotionStyle(formToken), genHorizontalStyle(formToken), genInlineStyle(formToken), genVerticalStyle(formToken), genCollapseMotion(formToken), zoomIn];
});
const ErrorList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ErrorList",
  inheritAttrs: false,
  props: ["errors", "help", "onErrorVisibleChanged", "helpStatus", "warnings"],
  setup(props2, _ref) {
    let {
      attrs
    } = _ref;
    const {
      prefixCls,
      status
    } = useInjectFormItemPrefix();
    const baseClassName = computed(() => `${prefixCls.value}-item-explain`);
    const visible = computed(() => !!(props2.errors && props2.errors.length));
    const innerStatus = ref(status.value);
    const [, hashId] = useStyle$1(prefixCls);
    watch([visible, status], () => {
      if (visible.value) {
        innerStatus.value = status.value;
      }
    });
    return () => {
      var _a, _b;
      const colMItem = collapseMotion(`${prefixCls.value}-show-help-item`);
      const transitionGroupProps = getTransitionGroupProps(`${prefixCls.value}-show-help-item`, colMItem);
      transitionGroupProps.role = "alert";
      transitionGroupProps.class = [hashId.value, baseClassName.value, attrs.class, `${prefixCls.value}-show-help`];
      return createVNode(Transition, _objectSpread$6(_objectSpread$6({}, getTransitionProps(`${prefixCls.value}-show-help`)), {}, {
        "onAfterEnter": () => props2.onErrorVisibleChanged(true),
        "onAfterLeave": () => props2.onErrorVisibleChanged(false)
      }), {
        default: () => [withDirectives(createVNode(TransitionGroup, _objectSpread$6(_objectSpread$6({}, transitionGroupProps), {}, {
          "tag": "div"
        }), {
          default: () => [(_b = props2.errors) === null || _b === void 0 ? void 0 : _b.map((error, index) => createVNode("div", {
            "key": index,
            "class": innerStatus.value ? `${baseClassName.value}-${innerStatus.value}` : ""
          }, [error]))]
        }), [[vShow, !!((_a = props2.errors) === null || _a === void 0 ? void 0 : _a.length)]])]
      });
    };
  }
});
const FormItemInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  slots: Object,
  inheritAttrs: false,
  props: ["prefixCls", "errors", "hasFeedback", "onDomErrorVisibleChange", "wrapperCol", "help", "extra", "status", "marginBottom", "onErrorVisibleChanged"],
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const formContext = useInjectForm();
    const {
      wrapperCol: contextWrapperCol
    } = formContext;
    const subFormContext = _extends({}, formContext);
    delete subFormContext.labelCol;
    delete subFormContext.wrapperCol;
    useProvideForm(subFormContext);
    useProvideFormItemPrefix({
      prefixCls: computed(() => props2.prefixCls),
      status: computed(() => props2.status)
    });
    return () => {
      var _a, _b, _c;
      const {
        prefixCls,
        wrapperCol,
        marginBottom,
        onErrorVisibleChanged,
        help = (_a = slots.help) === null || _a === void 0 ? void 0 : _a.call(slots),
        errors = filterEmpty((_b = slots.errors) === null || _b === void 0 ? void 0 : _b.call(slots)),
        // hasFeedback,
        // status,
        extra = (_c = slots.extra) === null || _c === void 0 ? void 0 : _c.call(slots)
      } = props2;
      const baseClassName = `${prefixCls}-item`;
      const mergedWrapperCol = wrapperCol || (contextWrapperCol === null || contextWrapperCol === void 0 ? void 0 : contextWrapperCol.value) || {};
      const className = classNames(`${baseClassName}-control`, mergedWrapperCol.class);
      return createVNode(Col, _objectSpread$6(_objectSpread$6({}, mergedWrapperCol), {}, {
        "class": className
      }), {
        default: () => {
          var _a2;
          return createVNode(Fragment, null, [createVNode("div", {
            "class": `${baseClassName}-control-input`
          }, [createVNode("div", {
            "class": `${baseClassName}-control-input-content`
          }, [(_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots)])]), marginBottom !== null || errors.length ? createVNode("div", {
            "style": {
              display: "flex",
              flexWrap: "nowrap"
            }
          }, [createVNode(ErrorList, {
            "errors": errors,
            "help": help,
            "class": `${baseClassName}-explain-connected`,
            "onErrorVisibleChanged": onErrorVisibleChanged
          }, null), !!marginBottom && createVNode("div", {
            "style": {
              width: 0,
              height: `${marginBottom}px`
            }
          }, null)]) : null, extra ? createVNode("div", {
            "class": `${baseClassName}-extra`
          }, [extra]) : null]);
        }
      });
    };
  }
});
function useDebounce(value) {
  const cacheValue = shallowRef(value.value.slice());
  let timeout = null;
  watchEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cacheValue.value = value.value;
    }, value.value.length ? 0 : 10);
  });
  return cacheValue;
}
tuple("success", "warning", "error", "validating", "");
const iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined
};
function getPropByPath$1(obj, namePathList, strict) {
  let tempObj = obj;
  const keyArr = namePathList;
  let i = 0;
  try {
    for (let len = keyArr.length; i < len - 1; ++i) {
      if (!tempObj && !strict) break;
      const key = keyArr[i];
      if (key in tempObj) {
        tempObj = tempObj[key];
      } else {
        if (strict) {
          throw Error("please transfer a valid name path to form item!");
        }
        break;
      }
    }
    if (strict && !tempObj) {
      throw Error("please transfer a valid name path to form item!");
    }
  } catch (error) {
    console.error("please transfer a valid name path to form item!");
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : void 0
  };
}
const formItemProps = () => ({
  htmlFor: String,
  prefixCls: String,
  label: PropTypes.any,
  help: PropTypes.any,
  extra: PropTypes.any,
  labelCol: {
    type: Object
  },
  wrapperCol: {
    type: Object
  },
  hasFeedback: {
    type: Boolean,
    default: false
  },
  colon: {
    type: Boolean,
    default: void 0
  },
  labelAlign: String,
  prop: {
    type: [String, Number, Array]
  },
  name: {
    type: [String, Number, Array]
  },
  rules: [Array, Object],
  autoLink: {
    type: Boolean,
    default: true
  },
  required: {
    type: Boolean,
    default: void 0
  },
  validateFirst: {
    type: Boolean,
    default: void 0
  },
  validateStatus: PropTypes.oneOf(tuple("", "success", "warning", "error", "validating")),
  validateTrigger: {
    type: [String, Array]
  },
  messageVariables: {
    type: Object
  },
  hidden: Boolean,
  noStyle: Boolean,
  tooltip: String
});
let indexGuid = 0;
const defaultItemNamePrefixCls = "form_item";
const __nuxt_component_2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItem",
  inheritAttrs: false,
  __ANT_NEW_FORM_ITEM: true,
  props: formItemProps(),
  slots: Object,
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose
    } = _ref;
    warning$1(props2.prop === void 0);
    const eventKey = `form-item-${++indexGuid}`;
    const {
      prefixCls
    } = useConfigInject("form", props2);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const itemRef = shallowRef();
    const formContext = useInjectForm();
    const fieldName = computed(() => props2.name || props2.prop);
    const errors = shallowRef([]);
    const validateDisabled = shallowRef(false);
    const inputRef = shallowRef();
    const namePath = computed(() => {
      const val = fieldName.value;
      return getNamePath(val);
    });
    const fieldId = computed(() => {
      if (!namePath.value.length) {
        return void 0;
      } else {
        const formName = formContext.name.value;
        const mergedId = namePath.value.join("_");
        return formName ? `${formName}_${mergedId}` : `${defaultItemNamePrefixCls}_${mergedId}`;
      }
    });
    const getNewFieldValue = () => {
      const model = formContext.model.value;
      if (!model || !fieldName.value) {
        return;
      } else {
        return getPropByPath$1(model, namePath.value, true).v;
      }
    };
    const fieldValue = computed(() => getNewFieldValue());
    const initialValue = shallowRef(cloneDeep(fieldValue.value));
    const mergedValidateTrigger = computed(() => {
      let validateTrigger = props2.validateTrigger !== void 0 ? props2.validateTrigger : formContext.validateTrigger.value;
      validateTrigger = validateTrigger === void 0 ? "change" : validateTrigger;
      return toArray$1(validateTrigger);
    });
    const rulesRef = computed(() => {
      let formRules = formContext.rules.value;
      const selfRules = props2.rules;
      const requiredRule = props2.required !== void 0 ? {
        required: !!props2.required,
        trigger: mergedValidateTrigger.value
      } : [];
      const prop = getPropByPath$1(formRules, namePath.value);
      formRules = formRules ? prop.o[prop.k] || prop.v : [];
      const rules = [].concat(selfRules || formRules || []);
      if (find(rules, (rule) => rule.required)) {
        return rules;
      } else {
        return rules.concat(requiredRule);
      }
    });
    const isRequired2 = computed(() => {
      const rules = rulesRef.value;
      let isRequired3 = false;
      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired3 = true;
            return false;
          }
          return true;
        });
      }
      return isRequired3 || props2.required;
    });
    const validateState = shallowRef();
    watchEffect(() => {
      validateState.value = props2.validateStatus;
    });
    const messageVariables = computed(() => {
      let variables = {};
      if (typeof props2.label === "string") {
        variables.label = props2.label;
      } else if (props2.name) {
        variables.label = String(props2.name);
      }
      if (props2.messageVariables) {
        variables = _extends(_extends({}, variables), props2.messageVariables);
      }
      return variables;
    });
    const validateRules$1 = (options) => {
      if (namePath.value.length === 0) {
        return;
      }
      const {
        validateFirst = false
      } = props2;
      const {
        triggerName
      } = options || {};
      let filteredRules = rulesRef.value;
      if (triggerName) {
        filteredRules = filteredRules.filter((rule) => {
          const {
            trigger: trigger2
          } = rule;
          if (!trigger2 && !mergedValidateTrigger.value.length) {
            return true;
          }
          const triggerList = toArray$1(trigger2 || mergedValidateTrigger.value);
          return triggerList.includes(triggerName);
        });
      }
      if (!filteredRules.length) {
        return Promise.resolve();
      }
      const promise = validateRules(namePath.value, fieldValue.value, filteredRules, _extends({
        validateMessages: formContext.validateMessages.value
      }, options), validateFirst, messageVariables.value);
      validateState.value = "validating";
      errors.value = [];
      promise.catch((e) => e).then(function() {
        let results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (validateState.value === "validating") {
          const res = results.filter((result) => result && result.errors.length);
          validateState.value = res.length ? "error" : "success";
          errors.value = res.map((r) => r.errors);
          formContext.onValidate(fieldName.value, !errors.value.length, errors.value.length ? toRaw(errors.value[0]) : null);
        }
      });
      return promise;
    };
    const onFieldBlur = () => {
      validateRules$1({
        triggerName: "blur"
      });
    };
    const onFieldChange = () => {
      if (validateDisabled.value) {
        validateDisabled.value = false;
        return;
      }
      validateRules$1({
        triggerName: "change"
      });
    };
    const clearValidate = () => {
      validateState.value = props2.validateStatus;
      validateDisabled.value = false;
      errors.value = [];
    };
    const resetField = () => {
      var _a;
      validateState.value = props2.validateStatus;
      validateDisabled.value = true;
      errors.value = [];
      const model = formContext.model.value || {};
      const value = fieldValue.value;
      const prop = getPropByPath$1(model, namePath.value, true);
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat((_a = initialValue.value) !== null && _a !== void 0 ? _a : []);
      } else {
        prop.o[prop.k] = initialValue.value;
      }
      nextTick(() => {
        validateDisabled.value = false;
      });
    };
    const htmlFor = computed(() => {
      return props2.htmlFor === void 0 ? fieldId.value : props2.htmlFor;
    });
    const onLabelClick = () => {
      const id = htmlFor.value;
      if (!id || !inputRef.value) {
        return;
      }
      const control = inputRef.value.$el.querySelector(`[id="${id}"]`);
      if (control && control.focus) {
        control.focus();
      }
    };
    expose({
      onFieldBlur,
      onFieldChange,
      clearValidate,
      resetField
    });
    useProvideFormItemContext({
      id: fieldId,
      onFieldBlur: () => {
        if (props2.autoLink) {
          onFieldBlur();
        }
      },
      onFieldChange: () => {
        if (props2.autoLink) {
          onFieldChange();
        }
      },
      clearValidate
    }, computed(() => {
      return !!(props2.autoLink && formContext.model.value && fieldName.value);
    }));
    let registered = false;
    watch(fieldName, (val) => {
      if (val) {
        if (!registered) {
          registered = true;
          formContext.addField(eventKey, {
            fieldValue,
            fieldId,
            fieldName,
            resetField,
            clearValidate,
            namePath,
            validateRules: validateRules$1,
            rules: rulesRef
          });
        }
      } else {
        registered = false;
        formContext.removeField(eventKey);
      }
    }, {
      immediate: true
    });
    const debounceErrors = useDebounce(errors);
    const mergedValidateStatus = computed(() => {
      if (props2.validateStatus !== void 0) {
        return props2.validateStatus;
      } else if (debounceErrors.value.length) {
        return "error";
      }
      return validateState.value;
    });
    const itemClassName = computed(() => ({
      [`${prefixCls.value}-item`]: true,
      [hashId.value]: true,
      // Status
      [`${prefixCls.value}-item-has-feedback`]: mergedValidateStatus.value && props2.hasFeedback,
      [`${prefixCls.value}-item-has-success`]: mergedValidateStatus.value === "success",
      [`${prefixCls.value}-item-has-warning`]: mergedValidateStatus.value === "warning",
      [`${prefixCls.value}-item-has-error`]: mergedValidateStatus.value === "error",
      [`${prefixCls.value}-item-is-validating`]: mergedValidateStatus.value === "validating",
      [`${prefixCls.value}-item-hidden`]: props2.hidden
    }));
    const formItemInputContext = reactive({});
    FormItemInputContext.useProvide(formItemInputContext);
    watchEffect(() => {
      let feedbackIcon;
      if (props2.hasFeedback) {
        const IconNode = mergedValidateStatus.value && iconMap[mergedValidateStatus.value];
        feedbackIcon = IconNode ? createVNode("span", {
          "class": classNames(`${prefixCls.value}-item-feedback-icon`, `${prefixCls.value}-item-feedback-icon-${mergedValidateStatus.value}`)
        }, [createVNode(IconNode, null, null)]) : null;
      }
      _extends(formItemInputContext, {
        status: mergedValidateStatus.value,
        hasFeedback: props2.hasFeedback,
        feedbackIcon,
        isFormItemInput: true
      });
    });
    const marginBottom = shallowRef(null);
    const showMarginOffset = shallowRef(false);
    const onErrorVisibleChanged = (nextVisible) => {
      if (!nextVisible) {
        marginBottom.value = null;
      }
    };
    return () => {
      var _a, _b;
      if (props2.noStyle) return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      const help = (_b = props2.help) !== null && _b !== void 0 ? _b : slots.help ? filterEmpty(slots.help()) : null;
      const withHelp = !!(help !== void 0 && help !== null && Array.isArray(help) && help.length || debounceErrors.value.length);
      showMarginOffset.value = withHelp;
      return wrapSSR(createVNode("div", {
        "class": [itemClassName.value, withHelp ? `${prefixCls.value}-item-with-help` : "", attrs.class],
        "ref": itemRef
      }, [createVNode(ARow, _objectSpread$6(_objectSpread$6({}, attrs), {}, {
        "class": `${prefixCls.value}-row`,
        "key": "row"
      }), {
        default: () => {
          var _a2, _b2;
          return createVNode(Fragment, null, [createVNode(FormItemLabel, _objectSpread$6(_objectSpread$6({}, props2), {}, {
            "htmlFor": htmlFor.value,
            "required": isRequired2.value,
            "requiredMark": formContext.requiredMark.value,
            "prefixCls": prefixCls.value,
            "onClick": onLabelClick,
            "label": props2.label
          }), {
            label: slots.label,
            tooltip: slots.tooltip
          }), createVNode(FormItemInput, _objectSpread$6(_objectSpread$6({}, props2), {}, {
            "errors": help !== void 0 && help !== null ? toArray$1(help) : debounceErrors.value,
            "marginBottom": marginBottom.value,
            "prefixCls": prefixCls.value,
            "status": mergedValidateStatus.value,
            "ref": inputRef,
            "help": help,
            "extra": (_a2 = props2.extra) !== null && _a2 !== void 0 ? _a2 : (_b2 = slots.extra) === null || _b2 === void 0 ? void 0 : _b2.call(slots),
            "onErrorVisibleChanged": onErrorVisibleChanged
          }), {
            default: slots.default
          })]);
        }
      }), !!marginBottom.value && createVNode("div", {
        "class": `${prefixCls.value}-margin-offset`,
        "style": {
          marginBottom: `-${marginBottom.value}px`
        }
      }, null)]));
    };
  }
});
function allPromiseFinish(promiseList) {
  let hasError = false;
  let count = promiseList.length;
  const results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.catch((e) => {
        hasError = true;
        return e;
      }).then((result) => {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
function isRequired(rules) {
  let isRequired2 = false;
  if (rules && rules.length) {
    rules.every((rule) => {
      if (rule.required) {
        isRequired2 = true;
        return false;
      }
      return true;
    });
  }
  return isRequired2;
}
function toArray(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  const keyArr = path.split(".");
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    const key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error("please transfer a valid name path to validate!");
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
    isValid: tempObj && keyArr[i] in tempObj
  };
}
function useForm(modelRef) {
  let rulesRef = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ref({});
  let options = arguments.length > 2 ? arguments[2] : void 0;
  const initialModel = cloneDeep(unref(modelRef));
  const validateInfos = reactive({});
  const rulesKeys = shallowRef([]);
  const resetFields = (newValues) => {
    _extends(unref(modelRef), _extends(_extends({}, cloneDeep(initialModel)), newValues));
    nextTick(() => {
      Object.keys(validateInfos).forEach((key) => {
        validateInfos[key] = {
          autoLink: false,
          required: isRequired(unref(rulesRef)[key])
        };
      });
    });
  };
  const filterRules = function() {
    let rules = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let trigger2 = arguments.length > 1 ? arguments[1] : void 0;
    if (!trigger2.length) {
      return rules;
    } else {
      return rules.filter((rule) => {
        const triggerList = toArray(rule.trigger || "change");
        return intersection(triggerList, trigger2).length;
      });
    }
  };
  let lastValidatePromise = null;
  const validateFields = function(names) {
    let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let strict = arguments.length > 2 ? arguments[2] : void 0;
    const promiseList = [];
    const values = {};
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const prop = getPropByPath(unref(modelRef), name, strict);
      if (!prop.isValid) continue;
      values[name] = prop.v;
      const rules = filterRules(unref(rulesRef)[name], toArray(option && option.trigger));
      if (rules.length) {
        promiseList.push(validateField(name, prop.v, rules, option || {}).then(() => ({
          name,
          errors: [],
          warnings: []
        })).catch((ruleErrors) => {
          const mergedErrors = [];
          const mergedWarnings = [];
          ruleErrors.forEach((_ref) => {
            let {
              rule: {
                warningOnly
              },
              errors
            } = _ref;
            if (warningOnly) {
              mergedWarnings.push(...errors);
            } else {
              mergedErrors.push(...errors);
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    }
    const summaryPromise = allPromiseFinish(promiseList);
    lastValidatePromise = summaryPromise;
    const returnPromise = summaryPromise.then(() => {
      if (lastValidatePromise === summaryPromise) {
        return Promise.resolve(values);
      }
      return Promise.reject([]);
    }).catch((results) => {
      const errorList = results.filter((result) => result && result.errors.length);
      return Promise.reject({
        values,
        errorFields: errorList,
        outOfDate: lastValidatePromise !== summaryPromise
      });
    });
    returnPromise.catch((e) => e);
    return returnPromise;
  };
  const validateField = function(name, value, rules) {
    let option = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const promise = validateRules([name], value, rules, _extends({
      validateMessages: defaultValidateMessages
    }, option), !!option.validateFirst);
    if (!validateInfos[name]) {
      return promise.catch((e) => e);
    }
    validateInfos[name].validateStatus = "validating";
    promise.catch((e) => e).then(function() {
      let results = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var _a;
      if (validateInfos[name].validateStatus === "validating") {
        const res = results.filter((result) => result && result.errors.length);
        validateInfos[name].validateStatus = res.length ? "error" : "success";
        validateInfos[name].help = res.length ? res.map((r) => r.errors) : null;
        (_a = options === null || options === void 0 ? void 0 : options.onValidate) === null || _a === void 0 ? void 0 : _a.call(options, name, !res.length, res.length ? toRaw(validateInfos[name].help[0]) : null);
      }
    });
    return promise;
  };
  const validate = (names, option) => {
    let keys = [];
    let strict = true;
    if (!names) {
      strict = false;
      keys = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys = names;
    } else {
      keys = [names];
    }
    const promises = validateFields(keys, option || {}, strict);
    promises.catch((e) => e);
    return promises;
  };
  const clearValidate = (names) => {
    let keys = [];
    if (!names) {
      keys = rulesKeys.value;
    } else if (Array.isArray(names)) {
      keys = names;
    } else {
      keys = [names];
    }
    keys.forEach((key) => {
      validateInfos[key] && _extends(validateInfos[key], {
        validateStatus: "",
        help: null
      });
    });
  };
  const mergeValidateInfo = (items) => {
    const info = {
      autoLink: false
    };
    const help = [];
    const infos = Array.isArray(items) ? items : [items];
    for (let i = 0; i < infos.length; i++) {
      const arg = infos[i];
      if ((arg === null || arg === void 0 ? void 0 : arg.validateStatus) === "error") {
        info.validateStatus = "error";
        arg.help && help.push(arg.help);
      }
      info.required = info.required || (arg === null || arg === void 0 ? void 0 : arg.required);
    }
    info.help = help;
    return info;
  };
  let oldModel = initialModel;
  let isFirstTime = true;
  const modelFn = (model) => {
    const names = [];
    rulesKeys.value.forEach((key) => {
      const prop = getPropByPath(model, key, false);
      const oldProp = getPropByPath(oldModel, key, false);
      const isFirstValidation = isFirstTime && (options === null || options === void 0 ? void 0 : options.immediate) && prop.isValid;
      if (isFirstValidation || !isEqual(prop.v, oldProp.v)) {
        names.push(key);
      }
    });
    validate(names, {
      trigger: "change"
    });
    isFirstTime = false;
    oldModel = cloneDeep(toRaw(model));
  };
  const debounceOptions = options === null || options === void 0 ? void 0 : options.debounce;
  let first = true;
  watch(rulesRef, () => {
    rulesKeys.value = rulesRef ? Object.keys(unref(rulesRef)) : [];
    if (!first && options && options.validateOnRuleChange) {
      validate();
    }
    first = false;
  }, {
    deep: true,
    immediate: true
  });
  watch(rulesKeys, () => {
    const newValidateInfos = {};
    rulesKeys.value.forEach((key) => {
      newValidateInfos[key] = _extends({}, validateInfos[key], {
        autoLink: false,
        required: isRequired(unref(rulesRef)[key])
      });
      delete validateInfos[key];
    });
    for (const key in validateInfos) {
      if (Object.prototype.hasOwnProperty.call(validateInfos, key)) {
        delete validateInfos[key];
      }
    }
    _extends(validateInfos, newValidateInfos);
  }, {
    immediate: true
  });
  watch(modelRef, debounceOptions && debounceOptions.wait ? debounce(modelFn, debounceOptions.wait, omit$1(debounceOptions, ["wait"])) : modelFn, {
    immediate: options && !!options.immediate,
    deep: true
  });
  return {
    modelRef,
    rulesRef,
    initialModel,
    validateInfos,
    resetFields,
    validate,
    validateField,
    mergeValidateInfo,
    clearValidate
  };
}
const formProps = () => ({
  layout: PropTypes.oneOf(tuple("horizontal", "inline", "vertical")),
  labelCol: objectType(),
  wrapperCol: objectType(),
  colon: booleanType(),
  labelAlign: stringType(),
  labelWrap: booleanType(),
  prefixCls: String,
  requiredMark: someType([String, Boolean]),
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark: booleanType(),
  model: PropTypes.object,
  rules: objectType(),
  validateMessages: objectType(),
  validateOnRuleChange: booleanType(),
  // 提交失败自动滚动到第一个错误字段
  scrollToFirstError: anyType(),
  onSubmit: functionType(),
  name: String,
  validateTrigger: someType([String, Array]),
  size: stringType(),
  disabled: booleanType(),
  onValuesChange: functionType(),
  onFieldsChange: functionType(),
  onFinish: functionType(),
  onFinishFailed: functionType(),
  onValidate: functionType()
});
function isEqualName(name1, name2) {
  return isEqual(toArray$1(name1), toArray$1(name2));
}
const Form = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AForm",
  inheritAttrs: false,
  props: initDefaultProps(formProps(), {
    layout: "horizontal",
    hideRequiredMark: false,
    colon: true
  }),
  Item: __nuxt_component_2,
  useForm,
  // emits: ['finishFailed', 'submit', 'finish', 'validate'],
  setup(props2, _ref) {
    let {
      emit,
      slots,
      expose,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction,
      form: contextForm,
      size,
      disabled
    } = useConfigInject("form", props2);
    const requiredMark = computed(() => props2.requiredMark === "" || props2.requiredMark);
    const mergedRequiredMark = computed(() => {
      var _a;
      if (requiredMark.value !== void 0) {
        return requiredMark.value;
      }
      if (contextForm && ((_a = contextForm.value) === null || _a === void 0 ? void 0 : _a.requiredMark) !== void 0) {
        return contextForm.value.requiredMark;
      }
      if (props2.hideRequiredMark) {
        return false;
      }
      return true;
    });
    useProviderSize(size);
    useProviderDisabled(disabled);
    const mergedColon = computed(() => {
      var _a, _b;
      return (_a = props2.colon) !== null && _a !== void 0 ? _a : (_b = contextForm.value) === null || _b === void 0 ? void 0 : _b.colon;
    });
    const {
      validateMessages: globalValidateMessages
    } = useInjectGlobalForm();
    const validateMessages = computed(() => {
      return _extends(_extends(_extends({}, defaultValidateMessages), globalValidateMessages.value), props2.validateMessages);
    });
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const formClassName = computed(() => classNames(prefixCls.value, {
      [`${prefixCls.value}-${props2.layout}`]: true,
      [`${prefixCls.value}-hide-required-mark`]: mergedRequiredMark.value === false,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-${size.value}`]: size.value
    }, hashId.value));
    const lastValidatePromise = ref();
    const fields = {};
    const addField = (eventKey, field) => {
      fields[eventKey] = field;
    };
    const removeField = (eventKey) => {
      delete fields[eventKey];
    };
    const getFieldsByNameList = (nameList) => {
      const provideNameList = !!nameList;
      const namePathList = provideNameList ? toArray$1(nameList).map(getNamePath) : [];
      if (!provideNameList) {
        return Object.values(fields);
      } else {
        return Object.values(fields).filter((field) => namePathList.findIndex((namePath) => isEqualName(namePath, field.fieldName.value)) > -1);
      }
    };
    const resetFields = (name) => {
      if (!props2.model) {
        return;
      }
      getFieldsByNameList(name).forEach((field) => {
        field.resetField();
      });
    };
    const clearValidate = (name) => {
      getFieldsByNameList(name).forEach((field) => {
        field.clearValidate();
      });
    };
    const handleFinishFailed = (errorInfo) => {
      const {
        scrollToFirstError
      } = props2;
      emit("finishFailed", errorInfo);
      if (scrollToFirstError && errorInfo.errorFields.length) {
        let scrollToFieldOptions = {};
        if (typeof scrollToFirstError === "object") {
          scrollToFieldOptions = scrollToFirstError;
        }
        scrollToField(errorInfo.errorFields[0].name, scrollToFieldOptions);
      }
    };
    const validate = function() {
      return validateField(...arguments);
    };
    const scrollToField = function(name) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const fields2 = getFieldsByNameList(name ? [name] : void 0);
      if (fields2.length) {
        const fieldId = fields2[0].fieldId.value;
        const node = fieldId ? (void 0).getElementById(fieldId) : null;
        if (node) {
          scrollIntoView(node, _extends({
            scrollMode: "if-needed",
            block: "nearest"
          }, options));
        }
      }
    };
    const getFieldsValue = function() {
      let nameList = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (nameList === true) {
        const allNameList = [];
        Object.values(fields).forEach((_ref2) => {
          let {
            namePath
          } = _ref2;
          allNameList.push(namePath.value);
        });
        return cloneByNamePathList(props2.model, allNameList);
      } else {
        return cloneByNamePathList(props2.model, nameList);
      }
    };
    const validateFields = (nameList, options) => {
      if (!props2.model) {
        return Promise.reject("Form `model` is required for validateFields to work.");
      }
      const provideNameList = !!nameList;
      const namePathList = provideNameList ? toArray$1(nameList).map(getNamePath) : [];
      const promiseList = [];
      Object.values(fields).forEach((field) => {
        var _a;
        if (!provideNameList) {
          namePathList.push(field.namePath.value);
        }
        if (!((_a = field.rules) === null || _a === void 0 ? void 0 : _a.value.length)) {
          return;
        }
        const fieldNamePath = field.namePath.value;
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
          const promise = field.validateRules(_extends({
            validateMessages: validateMessages.value
          }, options));
          promiseList.push(promise.then(() => ({
            name: fieldNamePath,
            errors: [],
            warnings: []
          })).catch((ruleErrors) => {
            const mergedErrors = [];
            const mergedWarnings = [];
            ruleErrors.forEach((_ref3) => {
              let {
                rule: {
                  warningOnly
                },
                errors
              } = _ref3;
              if (warningOnly) {
                mergedWarnings.push(...errors);
              } else {
                mergedErrors.push(...errors);
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      const summaryPromise = allPromiseFinish(promiseList);
      lastValidatePromise.value = summaryPromise;
      const returnPromise = summaryPromise.then(() => {
        if (lastValidatePromise.value === summaryPromise) {
          return Promise.resolve(getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      }).catch((results) => {
        const errorList = results.filter((result) => result && result.errors.length);
        return Promise.reject({
          values: getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: lastValidatePromise.value !== summaryPromise
        });
      });
      returnPromise.catch((e) => e);
      return returnPromise;
    };
    const validateField = function() {
      return validateFields(...arguments);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();
      emit("submit", e);
      if (props2.model) {
        const res = validateFields();
        res.then((values) => {
          emit("finish", values);
        }).catch((errors) => {
          handleFinishFailed(errors);
        });
      }
    };
    expose({
      resetFields,
      clearValidate,
      validateFields,
      getFieldsValue,
      validate,
      scrollToField
    });
    useProvideForm({
      model: computed(() => props2.model),
      name: computed(() => props2.name),
      labelAlign: computed(() => props2.labelAlign),
      labelCol: computed(() => props2.labelCol),
      labelWrap: computed(() => props2.labelWrap),
      wrapperCol: computed(() => props2.wrapperCol),
      vertical: computed(() => props2.layout === "vertical"),
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      validateTrigger: computed(() => props2.validateTrigger),
      rules: computed(() => props2.rules),
      addField,
      removeField,
      onValidate: (name, status, errors) => {
        emit("validate", name, status, errors);
      },
      validateMessages
    });
    watch(() => props2.rules, () => {
      if (props2.validateOnRuleChange) {
        validateFields();
      }
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("form", _objectSpread$6(_objectSpread$6({}, attrs), {}, {
        "onSubmit": handleSubmit,
        "class": [formClassName.value, attrs.class]
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
Form.useInjectFormItemContext = useInjectFormItemContext;
Form.ItemRest = FormItemRest;
Form.install = function(app) {
  app.component(Form.name, Form);
  app.component(Form.Item.name, Form.Item);
  app.component(FormItemRest.name, FormItemRest);
  return app;
};
const isValid$1 = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasPrefixSuffix(propsAndSlots) {
  return isValid$1(propsAndSlots.prefix) || isValid$1(propsAndSlots.suffix) || isValid$1(propsAndSlots.allowClear);
}
function hasAddon$1(propsAndSlots) {
  return isValid$1(propsAndSlots.addonBefore) || isValid$1(propsAndSlots.addonAfter);
}
function fixControlledValue(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  const event = e;
  if (e.type === "click") {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    const currentTarget = target.cloneNode(true);
    event.target = currentTarget;
    event.currentTarget = currentTarget;
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
const commonInputProps = () => {
  return {
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
    clearIcon: PropTypes.any,
    affixWrapperClassName: String,
    groupClassName: String,
    wrapperClassName: String,
    inputClassName: String,
    allowClear: {
      type: Boolean,
      default: void 0
    }
  };
};
const baseInputProps = () => {
  return _extends(_extends({}, commonInputProps()), {
    value: {
      type: [String, Number, Symbol],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Symbol],
      default: void 0
    },
    inputElement: PropTypes.any,
    prefixCls: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    triggerFocus: Function,
    readonly: {
      type: Boolean,
      default: void 0
    },
    handleReset: Function,
    hidden: {
      type: Boolean,
      default: void 0
    }
  });
};
const inputProps$1 = () => _extends(_extends({}, baseInputProps()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: stringType("text"),
  name: String,
  size: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  lazy: {
    type: Boolean,
    default: true
  },
  maxlength: Number,
  loading: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  showCount: {
    type: [Boolean, Object]
  },
  htmlSize: Number,
  onPressEnter: Function,
  onKeydown: Function,
  onKeyup: Function,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function,
  "onUpdate:value": Function,
  onCompositionstart: Function,
  onCompositionend: Function,
  valueModifiers: Object,
  hidden: {
    type: Boolean,
    default: void 0
  },
  status: String
});
const BaseInput = defineComponent({
  name: "BaseInput",
  inheritAttrs: false,
  props: baseInputProps(),
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const containerRef = ref();
    const onInputMouseDown = (e) => {
      var _a;
      if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        const {
          triggerFocus: triggerFocus2
        } = props2;
        triggerFocus2 === null || triggerFocus2 === void 0 ? void 0 : triggerFocus2();
      }
    };
    const getClearIcon = () => {
      var _a;
      const {
        allowClear,
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix,
        prefixCls
      } = props2;
      if (!allowClear) {
        return null;
      }
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      const iconNode = ((_a = slots.clearIcon) === null || _a === void 0 ? void 0 : _a.call(slots)) || "*";
      return createVNode("span", {
        "onClick": handleReset,
        "onMousedown": (e) => e.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button",
        "tabindex": -1
      }, [iconNode]);
    };
    return () => {
      var _a, _b;
      const {
        focused,
        value,
        disabled,
        allowClear,
        readonly,
        hidden,
        prefixCls,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        inputElement,
        affixWrapperClassName,
        wrapperClassName,
        groupClassName
      } = props2;
      let element = cloneElement(inputElement, {
        value,
        hidden
      });
      if (hasPrefixSuffix({
        prefix,
        suffix,
        allowClear
      })) {
        const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
        const affixWrapperCls = classNames(affixWrapperPrefixCls, {
          [`${affixWrapperPrefixCls}-disabled`]: disabled,
          [`${affixWrapperPrefixCls}-focused`]: focused,
          [`${affixWrapperPrefixCls}-readonly`]: readonly,
          [`${affixWrapperPrefixCls}-input-with-clear-btn`]: suffix && allowClear && value
        }, !hasAddon$1({
          addonAfter,
          addonBefore
        }) && attrs.class, affixWrapperClassName);
        const suffixNode = (suffix || allowClear) && createVNode("span", {
          "class": `${prefixCls}-suffix`
        }, [getClearIcon(), suffix]);
        element = createVNode("span", {
          "class": affixWrapperCls,
          "style": attrs.style,
          "hidden": !hasAddon$1({
            addonAfter,
            addonBefore
          }) && hidden,
          "onMousedown": onInputMouseDown,
          "ref": containerRef
        }, [prefix && createVNode("span", {
          "class": `${prefixCls}-prefix`
        }, [prefix]), cloneElement(inputElement, {
          style: null,
          value,
          hidden: null
        }), suffixNode]);
      }
      if (hasAddon$1({
        addonAfter,
        addonBefore
      })) {
        const wrapperCls = `${prefixCls}-group`;
        const addonCls = `${wrapperCls}-addon`;
        const mergedWrapperClassName = classNames(`${prefixCls}-wrapper`, wrapperCls, wrapperClassName);
        const mergedGroupClassName = classNames(`${prefixCls}-group-wrapper`, attrs.class, groupClassName);
        return createVNode("span", {
          "class": mergedGroupClassName,
          "style": attrs.style,
          "hidden": hidden
        }, [createVNode("span", {
          "class": mergedWrapperClassName
        }, [addonBefore && createVNode("span", {
          "class": addonCls
        }, [addonBefore]), cloneElement(element, {
          style: null,
          hidden: null
        }), addonAfter && createVNode("span", {
          "class": addonCls
        }, [addonAfter])])]);
      }
      return element;
    };
  }
});
var __rest$4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const VcInput = defineComponent({
  name: "VCInput",
  inheritAttrs: false,
  props: inputProps$1(),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const stateValue = shallowRef(props2.value === void 0 ? props2.defaultValue : props2.value);
    const focused = shallowRef(false);
    const inputRef = shallowRef();
    const rootRef = shallowRef();
    watch(() => props2.value, () => {
      stateValue.value = props2.value;
    });
    watch(() => props2.disabled, () => {
      if (props2.disabled) {
        focused.value = false;
      }
    });
    const focus = (option) => {
      if (inputRef.value) {
        triggerFocus(inputRef.value, option);
      }
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: inputRef,
      stateValue,
      setSelectionRange,
      select
    });
    const triggerChange = (e) => {
      emit("change", e);
    };
    const setValue2 = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props2.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a;
          if (inputRef.value.value !== stateValue.value) {
            (_a = rootRef.value) === null || _a === void 0 ? void 0 : _a.$forceUpdate();
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleChange = (e) => {
      const {
        value,
        composing
      } = e.target;
      if ((e.isComposing || composing) && props2.lazy || stateValue.value === value) return;
      const newVal = e.target.value;
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue2(newVal);
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    const handleFocus = (e) => {
      focused.value = true;
      emit("focus", e);
    };
    const handleBlur = (e) => {
      focused.value = false;
      emit("blur", e);
    };
    const handleReset = (e) => {
      resolveOnChange(inputRef.value, e, triggerChange);
      setValue2("", () => {
        focus();
      });
    };
    const getInputElement = () => {
      var _a, _b;
      const {
        addonBefore = slots.addonBefore,
        addonAfter = slots.addonAfter,
        disabled,
        valueModifiers = {},
        htmlSize,
        autocomplete,
        prefixCls,
        inputClassName,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        allowClear,
        type = "text"
      } = props2;
      const otherProps = omit(props2, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers",
        "showCount",
        "affixWrapperClassName",
        "groupClassName",
        "inputClassName",
        "wrapperClassName"
      ]);
      const inputProps2 = _extends(_extends(_extends({}, otherProps), attrs), {
        autocomplete,
        onChange: handleChange,
        onInput: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeydown: handleKeyDown,
        class: classNames(prefixCls, {
          [`${prefixCls}-disabled`]: disabled
        }, inputClassName, !hasAddon$1({
          addonAfter,
          addonBefore
        }) && !hasPrefixSuffix({
          prefix,
          suffix,
          allowClear
        }) && attrs.class),
        ref: inputRef,
        key: "ant-input",
        size: htmlSize,
        type
      });
      if (valueModifiers.lazy) {
        delete inputProps2.onInput;
      }
      if (!inputProps2.autofocus) {
        delete inputProps2.autofocus;
      }
      const inputNode = createVNode("input", omit(inputProps2, ["size"]), null);
      return withDirectives(inputNode, [[antInput]]);
    };
    const getSuffix = () => {
      var _a;
      const {
        maxlength,
        suffix = (_a = slots.suffix) === null || _a === void 0 ? void 0 : _a.call(slots),
        showCount,
        prefixCls
      } = props2;
      const hasMaxLength = Number(maxlength) > 0;
      if (suffix || showCount) {
        const valueLength = [...fixControlledValue(stateValue.value)].length;
        const dataCount = typeof showCount === "object" ? showCount.formatter({
          count: valueLength,
          maxlength
        }) : `${valueLength}${hasMaxLength ? ` / ${maxlength}` : ""}`;
        return createVNode(Fragment, null, [!!showCount && createVNode("span", {
          "class": classNames(`${prefixCls}-show-count-suffix`, {
            [`${prefixCls}-show-count-has-suffix`]: !!suffix
          })
        }, [dataCount]), suffix]);
      }
      return null;
    };
    return () => {
      const {
        prefixCls,
        disabled
      } = props2, rest = __rest$4(props2, ["prefixCls", "disabled"]);
      return createVNode(BaseInput, _objectSpread$6(_objectSpread$6(_objectSpread$6({}, rest), attrs), {}, {
        "ref": rootRef,
        "prefixCls": prefixCls,
        "inputElement": getInputElement(),
        "handleReset": handleReset,
        "value": fixControlledValue(stateValue.value),
        "focused": focused.value,
        "triggerFocus": focus,
        "suffix": getSuffix(),
        "disabled": disabled
      }), slots);
    };
  }
});
const inputProps = () => {
  return omit(inputProps$1(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]);
};
const textAreaProps = () => _extends(_extends({}, omit(inputProps(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
  rows: Number,
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: {
    type: Function
  },
  onCompositionstart: eventType(),
  onCompositionend: eventType(),
  valueModifiers: Object
});
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Input = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInput",
  inheritAttrs: false,
  props: inputProps(),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = ref();
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props2.status));
    const {
      direction,
      prefixCls,
      size,
      autocomplete
    } = useConfigInject("input", props2);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const mergedSize = computed(() => {
      return compactSize.value || size.value;
    });
    const [wrapSSR, hashId] = useStyle$2(prefixCls);
    const disabled = useInjectDisabled();
    const focus = (option) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus(option);
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction2) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction2);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: inputRef,
      setSelectionRange,
      select
    });
    const removePasswordTimeoutRef = ref([]);
    const removePasswordTimeout = () => {
      removePasswordTimeoutRef.value.push(setTimeout(() => {
        var _a, _b, _c, _d;
        if (((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.value) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.value) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
          (_d = inputRef.value) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
        }
      }));
    };
    const handleBlur = (e) => {
      removePasswordTimeout();
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    const handleFocus = (e) => {
      removePasswordTimeout();
      emit("focus", e);
    };
    const triggerChange = (e) => {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const {
        hasFeedback,
        feedbackIcon
      } = formItemInputContext;
      const {
        allowClear,
        bordered = true,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = (_c = slots.addonAfter) === null || _c === void 0 ? void 0 : _c.call(slots),
        addonBefore = (_d = slots.addonBefore) === null || _d === void 0 ? void 0 : _d.call(slots),
        id = (_e = formItemContext.id) === null || _e === void 0 ? void 0 : _e.value
      } = props2, rest = __rest$3(props2, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]);
      const suffixNode = (hasFeedback || suffix) && createVNode(Fragment, null, [suffix, hasFeedback && feedbackIcon]);
      const prefixClsValue = prefixCls.value;
      const inputHasPrefixSuffix = hasPrefixSuffix({
        prefix,
        suffix
      }) || !!hasFeedback;
      const clearIcon = slots.clearIcon || (() => createVNode(CloseCircleFilled, null, null));
      return wrapSSR(createVNode(VcInput, _objectSpread$6(_objectSpread$6(_objectSpread$6({}, attrs), omit(rest, ["onUpdate:value", "onChange", "onInput"])), {}, {
        "onChange": triggerChange,
        "id": id,
        "disabled": (_f = props2.disabled) !== null && _f !== void 0 ? _f : disabled.value,
        "ref": inputRef,
        "prefixCls": prefixClsValue,
        "autocomplete": autocomplete.value,
        "onBlur": handleBlur,
        "onFocus": handleFocus,
        "prefix": prefix,
        "suffix": suffixNode,
        "allowClear": allowClear,
        "addonAfter": addonAfter && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonAfter]
          })]
        }),
        "addonBefore": addonBefore && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonBefore]
          })]
        }),
        "class": [attrs.class, compactItemClassnames.value],
        "inputClassName": classNames({
          [`${prefixClsValue}-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-borderless`]: !bordered
        }, !inputHasPrefixSuffix && getStatusClassNames(prefixClsValue, mergedStatus.value), hashId.value),
        "affixWrapperClassName": classNames({
          [`${prefixClsValue}-affix-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-affix-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-affix-wrapper-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-affix-wrapper-borderless`]: !bordered
        }, getStatusClassNames(`${prefixClsValue}-affix-wrapper`, mergedStatus.value, hasFeedback), hashId.value),
        "wrapperClassName": classNames({
          [`${prefixClsValue}-group-rtl`]: direction.value === "rtl"
        }, hashId.value),
        "groupClassName": classNames({
          [`${prefixClsValue}-group-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-group-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-group-wrapper-rtl`]: direction.value === "rtl"
        }, getStatusClassNames(`${prefixClsValue}-group-wrapper`, mergedStatus.value, hasFeedback), hashId.value)
      }), _extends(_extends({}, slots), {
        clearIcon
      })));
    };
  }
});
const Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputGroup",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction,
      getPrefixCls
    } = useConfigInject("input-group", props2);
    const formItemInputContext = FormItemInputContext.useInject();
    FormItemInputContext.useProvide(formItemInputContext, {
      isFormItemInput: false
    });
    const inputPrefixCls = computed(() => getPrefixCls("input"));
    const [wrapSSR, hashId] = useStyle$2(inputPrefixCls);
    const cls = computed(() => {
      const pre = prefixCls.value;
      return {
        [`${pre}`]: true,
        [hashId.value]: true,
        [`${pre}-lg`]: props2.size === "large",
        [`${pre}-sm`]: props2.size === "small",
        [`${pre}-compact`]: props2.compact,
        [`${pre}-rtl`]: direction.value === "rtl"
      };
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("span", _objectSpread$6(_objectSpread$6({}, attrs), {}, {
        "class": classNames(cls.value, attrs.class)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const Search = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    inputPrefixCls: String,
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: PropTypes.any,
    onSearch: {
      type: Function
    }
  }),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = shallowRef();
    const composedRef = shallowRef(false);
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const onChange = (e) => {
      emit("update:value", e.target.value);
      if (e && e.target && e.type === "click") {
        emit("search", e.target.value, e);
      }
      emit("change", e);
    };
    const onMousedown = (e) => {
      var _a;
      if ((void 0).activeElement === ((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input)) {
        e.preventDefault();
      }
    };
    const onSearch = (e) => {
      var _a, _b;
      emit("search", (_b = (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.stateValue, e);
    };
    const onPressEnter = (e) => {
      if (composedRef.value || props2.loading) {
        return;
      }
      onSearch(e);
    };
    const handleOnCompositionStart = (e) => {
      composedRef.value = true;
      emit("compositionstart", e);
    };
    const handleOnCompositionEnd = (e) => {
      composedRef.value = false;
      emit("compositionend", e);
    };
    const {
      prefixCls,
      getPrefixCls,
      direction,
      size
    } = useConfigInject("input-search", props2);
    const inputPrefixCls = computed(() => getPrefixCls("input", props2.inputPrefixCls));
    return () => {
      var _a, _b, _c, _d;
      const {
        disabled,
        loading,
        addonAfter = (_a = slots.addonAfter) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots)
      } = props2, restProps = __rest$2(props2, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton = (_d = (_c = slots.enterButton) === null || _c === void 0 ? void 0 : _c.call(slots)) !== null && _d !== void 0 ? _d : false
      } = props2;
      enterButton = enterButton || enterButton === "";
      const searchIcon = typeof enterButton === "boolean" ? createVNode(SearchOutlined, null, null) : null;
      const btnClassName = `${prefixCls.value}-button`;
      const enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      let button;
      const isAntdButton = enterButtonAsElement.type && isPlainObject(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;
      if (isAntdButton || enterButtonAsElement.tagName === "button") {
        button = cloneElement(enterButtonAsElement, _extends({
          onMousedown,
          onClick: onSearch,
          key: "enterButton"
        }, isAntdButton ? {
          class: btnClassName,
          size: size.value
        } : {}), false);
      } else {
        const iconOnly = searchIcon && !enterButton;
        button = createVNode(Button, {
          "class": btnClassName,
          "type": enterButton ? "primary" : void 0,
          "size": size.value,
          "disabled": disabled,
          "key": "enterButton",
          "onMousedown": onMousedown,
          "onClick": onSearch,
          "loading": loading,
          "icon": iconOnly ? searchIcon : null
        }, {
          default: () => [iconOnly ? null : searchIcon || enterButton]
        });
      }
      if (addonAfter) {
        button = [button, addonAfter];
      }
      const cls = classNames(prefixCls.value, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [`${prefixCls.value}-${size.value}`]: !!size.value,
        [`${prefixCls.value}-with-button`]: !!enterButton
      }, attrs.class);
      return createVNode(Input, _objectSpread$6(_objectSpread$6(_objectSpread$6({
        "ref": inputRef
      }, omit(restProps, ["onUpdate:value", "onSearch", "enterButton"])), attrs), {}, {
        "onPressEnter": onPressEnter,
        "onCompositionstart": handleOnCompositionStart,
        "onCompositionend": handleOnCompositionEnd,
        "size": size.value,
        "prefixCls": inputPrefixCls.value,
        "addonAfter": button,
        "suffix": suffix,
        "onChange": onChange,
        "class": cls,
        "disabled": disabled
      }), slots);
    };
  }
});
const isValid = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasAddon(propsAndSlots) {
  return isValid(propsAndSlots.addonBefore) || isValid(propsAndSlots.addonAfter);
}
const ClearableInputType = ["text", "input"];
const ClearableLabeledInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    inputType: PropTypes.oneOf(tuple("text", "input")),
    value: anyType(),
    defaultValue: anyType(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: anyType(),
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: anyType(),
    prefix: anyType(),
    addonBefore: anyType(),
    addonAfter: anyType(),
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: true
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean,
    status: String,
    hashId: String
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const statusContext = FormItemInputContext.useInject();
    const renderClearIcon = (prefixCls) => {
      const {
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix
      } = props2;
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      return createVNode(CloseCircleFilled, {
        "onClick": handleReset,
        "onMousedown": (e) => e.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button"
      }, null);
    };
    const renderTextAreaWithClearIcon = (prefixCls, element) => {
      const {
        value,
        allowClear,
        direction,
        bordered,
        hidden,
        status: customStatus,
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        hashId
      } = props2;
      const {
        status: contextStatus,
        hasFeedback
      } = statusContext;
      if (!allowClear) {
        return cloneElement(element, {
          value,
          disabled: props2.disabled
        });
      }
      const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, `${prefixCls}-affix-wrapper-textarea-with-clear-btn`, getStatusClassNames(`${prefixCls}-affix-wrapper`, getMergedStatus(contextStatus, customStatus), hasFeedback), {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        // className will go to addon wrapper
        [`${attrs.class}`]: !hasAddon({
          addonAfter,
          addonBefore
        }) && attrs.class
      }, hashId);
      return createVNode("span", {
        "class": affixWrapperCls,
        "style": attrs.style,
        "hidden": hidden
      }, [cloneElement(element, {
        style: null,
        value,
        disabled: props2.disabled
      }), renderClearIcon(prefixCls)]);
    };
    return () => {
      var _a;
      const {
        prefixCls,
        inputType,
        element = (_a = slots.element) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props2;
      if (inputType === ClearableInputType[0]) {
        return renderTextAreaWithClearIcon(prefixCls, element);
      }
      return null;
    };
  }
});
const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`;
const SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
const computedStyleCache = {};
let hiddenTextarea;
function calculateNodeStyling(node) {
  let useCache2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache2 && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  const style = (void 0).getComputedStyle(node);
  const boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const sizingStyle = SIZING_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache2 && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  let useCache2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  let maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = (void 0).createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    (void 0).body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode, useCache2);
  hiddenTextarea.setAttribute("style", `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  let minHeight = void 0;
  let maxHeight = void 0;
  let overflowY;
  let height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  const style = {
    height: `${height}px`,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style.minHeight = `${minHeight}px`;
  }
  if (maxHeight) {
    style.maxHeight = `${maxHeight}px`;
  }
  return style;
}
const RESIZE_START = 0;
const RESIZE_MEASURING = 1;
const RESIZE_STABLE = 2;
const ResizableTextArea = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizableTextArea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props2, _ref) {
    let {
      attrs,
      emit,
      expose
    } = _ref;
    const textAreaRef = ref();
    const textareaStyles = ref({});
    const resizeStatus = ref(RESIZE_STABLE);
    const fixFirefoxAutoScroll = () => {
      try {
        if ((void 0).activeElement === textAreaRef.value) {
          const currentStart = textAreaRef.value.selectionStart;
          const currentEnd = textAreaRef.value.selectionEnd;
          const scrollTop = textAreaRef.value.scrollTop;
          textAreaRef.value.setSelectionRange(currentStart, currentEnd);
          textAreaRef.value.scrollTop = scrollTop;
        }
      } catch (e) {
      }
    };
    const minRows = ref();
    const maxRows = ref();
    watchEffect(() => {
      const autoSize = props2.autoSize || props2.autosize;
      if (autoSize) {
        minRows.value = autoSize.minRows;
        maxRows.value = autoSize.maxRows;
      } else {
        minRows.value = void 0;
        maxRows.value = void 0;
      }
    });
    const needAutoSize = computed(() => !!(props2.autoSize || props2.autosize));
    const startResize = () => {
      resizeStatus.value = RESIZE_START;
    };
    watch([() => props2.value, minRows, maxRows, needAutoSize], () => {
      if (needAutoSize.value) {
        startResize();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const autoSizeStyle = ref();
    watch([resizeStatus, textAreaRef], () => {
      if (!textAreaRef.value) return;
      if (resizeStatus.value === RESIZE_START) {
        resizeStatus.value = RESIZE_MEASURING;
      } else if (resizeStatus.value === RESIZE_MEASURING) {
        const textareaStyles2 = calculateAutoSizeStyle(textAreaRef.value, false, minRows.value, maxRows.value);
        resizeStatus.value = RESIZE_STABLE;
        autoSizeStyle.value = textareaStyles2;
      } else {
        fixFirefoxAutoScroll();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const instance = getCurrentInstance();
    const resizeRafRef = ref();
    const cleanRaf = () => {
      wrapperRaf.cancel(resizeRafRef.value);
    };
    const onInternalResize = (size) => {
      if (resizeStatus.value === RESIZE_STABLE) {
        emit("resize", size);
        if (needAutoSize.value) {
          cleanRaf();
          resizeRafRef.value = wrapperRaf(() => {
            startResize();
          });
        }
      }
    };
    const resizeTextarea = () => {
      startResize();
    };
    expose({
      resizeTextarea,
      textArea: textAreaRef,
      instance
    });
    warning(props2.autosize === void 0);
    const renderTextArea = () => {
      const {
        prefixCls,
        disabled
      } = props2;
      const otherProps = omit(props2, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "lazy", "maxlength", "valueModifiers"]);
      const cls = classNames(prefixCls, attrs.class, {
        [`${prefixCls}-disabled`]: disabled
      });
      const mergedAutoSizeStyle = needAutoSize.value ? autoSizeStyle.value : null;
      const style = [attrs.style, textareaStyles.value, mergedAutoSizeStyle];
      const textareaProps = _extends(_extends(_extends({}, otherProps), attrs), {
        style,
        class: cls
      });
      if (resizeStatus.value === RESIZE_START || resizeStatus.value === RESIZE_MEASURING) {
        style.push({
          overflowX: "hidden",
          overflowY: "hidden"
        });
      }
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return createVNode(ResizeObserver, {
        "onResize": onInternalResize,
        "disabled": !needAutoSize.value
      }, {
        default: () => [withDirectives(createVNode("textarea", _objectSpread$6(_objectSpread$6({}, textareaProps), {}, {
          "ref": textAreaRef
        }), null), [[antInput]])]
      });
    };
    return () => {
      return renderTextArea();
    };
  }
});
function fixEmojiLength(value, maxLength) {
  return [...value || ""].slice(0, maxLength).join("");
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ([...preValue || ""].length < triggerValue.length && [...triggerValue || ""].length > maxLength) {
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
const TextArea = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATextarea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props2, _ref) {
    let {
      attrs,
      expose,
      emit
    } = _ref;
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props2.status));
    const stateValue = shallowRef(props2.value === void 0 ? props2.defaultValue : props2.value);
    const resizableTextArea = shallowRef();
    const mergedValue = shallowRef("");
    const {
      prefixCls,
      size,
      direction
    } = useConfigInject("input", props2);
    const [wrapSSR, hashId] = useStyle$2(prefixCls);
    const disabled = useInjectDisabled();
    const showCount = computed(() => {
      return props2.showCount === "" || props2.showCount || false;
    });
    const hasMaxLength = computed(() => Number(props2.maxlength) > 0);
    const compositing = shallowRef(false);
    const oldCompositionValueRef = shallowRef();
    const oldSelectionStartRef = shallowRef(0);
    const onInternalCompositionStart = (e) => {
      compositing.value = true;
      oldCompositionValueRef.value = mergedValue.value;
      oldSelectionStartRef.value = e.currentTarget.selectionStart;
      emit("compositionstart", e);
    };
    const onInternalCompositionEnd = (e) => {
      var _a;
      compositing.value = false;
      let triggerValue = e.currentTarget.value;
      if (hasMaxLength.value) {
        const isCursorInEnd = oldSelectionStartRef.value >= props2.maxlength + 1 || oldSelectionStartRef.value === ((_a = oldCompositionValueRef.value) === null || _a === void 0 ? void 0 : _a.length);
        triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.value, triggerValue, props2.maxlength);
      }
      if (triggerValue !== mergedValue.value) {
        setValue2(triggerValue);
        resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      }
      emit("compositionend", e);
    };
    const instance = getCurrentInstance();
    watch(() => props2.value, () => {
      var _a;
      if ("value" in instance.vnode.props || {}) {
        stateValue.value = (_a = props2.value) !== null && _a !== void 0 ? _a : "";
      }
    });
    const focus = (option) => {
      var _a;
      triggerFocus((_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : _a.textArea, option);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : _a.textArea) === null || _b === void 0 ? void 0 : _b.blur();
    };
    const setValue2 = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props2.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a, _b, _c;
          if (resizableTextArea.value.textArea.value !== mergedValue.value) {
            (_c = (_a = resizableTextArea.value) === null || _a === void 0 ? void 0 : (_b = _a.instance).update) === null || _c === void 0 ? void 0 : _c.call(_b);
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    const onBlur = (e) => {
      const {
        onBlur: onBlur2
      } = props2;
      onBlur2 === null || onBlur2 === void 0 ? void 0 : onBlur2(e);
      formItemContext.onFieldBlur();
    };
    const triggerChange = (e) => {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    const handleReset = (e) => {
      resolveOnChange(resizableTextArea.value.textArea, e, triggerChange);
      setValue2("", () => {
        focus();
      });
    };
    const handleChange = (e) => {
      const {
        composing
      } = e.target;
      let triggerValue = e.target.value;
      compositing.value = !!(e.isComposing || composing);
      if (compositing.value && props2.lazy || stateValue.value === triggerValue) return;
      if (hasMaxLength.value) {
        const target = e.target;
        const isCursorInEnd = target.selectionStart >= props2.maxlength + 1 || target.selectionStart === triggerValue.length || !target.selectionStart;
        triggerValue = setTriggerValue(isCursorInEnd, mergedValue.value, triggerValue, props2.maxlength);
      }
      resolveOnChange(e.currentTarget, e, triggerChange, triggerValue);
      setValue2(triggerValue);
    };
    const renderTextArea = () => {
      var _a, _b;
      const {
        class: customClass
      } = attrs;
      const {
        bordered = true
      } = props2;
      const resizeProps = _extends(_extends(_extends({}, omit(props2, ["allowClear"])), attrs), {
        class: [{
          [`${prefixCls.value}-borderless`]: !bordered,
          [`${customClass}`]: customClass && !showCount.value,
          [`${prefixCls.value}-sm`]: size.value === "small",
          [`${prefixCls.value}-lg`]: size.value === "large"
        }, getStatusClassNames(prefixCls.value, mergedStatus.value), hashId.value],
        disabled: disabled.value,
        showCount: null,
        prefixCls: prefixCls.value,
        onInput: handleChange,
        onChange: handleChange,
        onBlur,
        onKeydown: handleKeyDown,
        onCompositionstart: onInternalCompositionStart,
        onCompositionend: onInternalCompositionEnd
      });
      if ((_a = props2.valueModifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
        delete resizeProps.onInput;
      }
      return createVNode(ResizableTextArea, _objectSpread$6(_objectSpread$6({}, resizeProps), {}, {
        "id": (_b = resizeProps === null || resizeProps === void 0 ? void 0 : resizeProps.id) !== null && _b !== void 0 ? _b : formItemContext.id.value,
        "ref": resizableTextArea,
        "maxlength": props2.maxlength
      }), null);
    };
    expose({
      focus,
      blur,
      resizableTextArea
    });
    watchEffect(() => {
      let val = fixControlledValue(stateValue.value);
      if (!compositing.value && hasMaxLength.value && (props2.value === null || props2.value === void 0)) {
        val = fixEmojiLength(val, props2.maxlength);
      }
      mergedValue.value = val;
    });
    return () => {
      var _a;
      const {
        maxlength,
        bordered = true,
        hidden
      } = props2;
      const {
        style,
        class: customClass
      } = attrs;
      const inputProps2 = _extends(_extends(_extends({}, props2), attrs), {
        prefixCls: prefixCls.value,
        inputType: "text",
        handleReset,
        direction: direction.value,
        bordered,
        style: showCount.value ? void 0 : style,
        hashId: hashId.value,
        disabled: (_a = props2.disabled) !== null && _a !== void 0 ? _a : disabled.value
      });
      let textareaNode = createVNode(ClearableLabeledInput, _objectSpread$6(_objectSpread$6({}, inputProps2), {}, {
        "value": mergedValue.value,
        "status": props2.status
      }), {
        element: renderTextArea
      });
      if (showCount.value || formItemInputContext.hasFeedback) {
        const valueLength = [...mergedValue.value].length;
        let dataCount = "";
        if (typeof showCount.value === "object") {
          dataCount = showCount.value.formatter({
            value: mergedValue.value,
            count: valueLength,
            maxlength
          });
        } else {
          dataCount = `${valueLength}${hasMaxLength.value ? ` / ${maxlength}` : ""}`;
        }
        textareaNode = createVNode("div", {
          "hidden": hidden,
          "class": classNames(`${prefixCls.value}-textarea`, {
            [`${prefixCls.value}-textarea-rtl`]: direction.value === "rtl",
            [`${prefixCls.value}-textarea-show-count`]: showCount.value,
            [`${prefixCls.value}-textarea-in-form-item`]: formItemInputContext.isFormItemInput
          }, `${prefixCls.value}-textarea-show-count`, customClass, hashId.value),
          "style": style,
          "data-count": typeof dataCount !== "object" ? dataCount : void 0
        }, [textareaNode, formItemInputContext.hasFeedback && createVNode("span", {
          "class": `${prefixCls.value}-textarea-suffix`
        }, [formItemInputContext.feedbackIcon])]);
      }
      return wrapSSR(textareaNode);
    };
  }
});
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const ActionMap = {
  click: "onClick",
  hover: "onMouseover"
};
const defaultIconRender = (visible) => visible ? createVNode(EyeOutlined, null, null) : createVNode(EyeInvisibleOutlined, null, null);
const Password = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    "onUpdate:visible": Function,
    iconRender: Function
  }),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const visible = shallowRef(false);
    const onVisibleChange = () => {
      const {
        disabled
      } = props2;
      if (disabled) {
        return;
      }
      visible.value = !visible.value;
      emit("update:visible", visible.value);
    };
    watchEffect(() => {
      if (props2.visible !== void 0) {
        visible.value = !!props2.visible;
      }
    });
    const inputRef = shallowRef();
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const getIcon = (prefixCls2) => {
      const {
        action,
        iconRender = slots.iconRender || defaultIconRender
      } = props2;
      const iconTrigger = ActionMap[action] || "";
      const icon = iconRender(visible.value);
      const iconProps = {
        [iconTrigger]: onVisibleChange,
        class: `${prefixCls2}-icon`,
        key: "passwordIcon",
        onMousedown: (e) => {
          e.preventDefault();
        },
        onMouseup: (e) => {
          e.preventDefault();
        }
      };
      return cloneElement(isValidElement(icon) ? icon : createVNode("span", null, [icon]), iconProps);
    };
    const {
      prefixCls,
      getPrefixCls
    } = useConfigInject("input-password", props2);
    const inputPrefixCls = computed(() => getPrefixCls("input", props2.inputPrefixCls));
    const renderPassword = () => {
      const {
        size,
        visibilityToggle
      } = props2, restProps = __rest$1(props2, ["size", "visibilityToggle"]);
      const suffixIcon = visibilityToggle && getIcon(prefixCls.value);
      const inputClassName = classNames(prefixCls.value, attrs.class, {
        [`${prefixCls.value}-${size}`]: !!size
      });
      const omittedProps = _extends(_extends(_extends({}, omit(restProps, ["suffix", "iconRender", "action"])), attrs), {
        type: visible.value ? "text" : "password",
        class: inputClassName,
        prefixCls: inputPrefixCls.value,
        suffix: suffixIcon
      });
      if (size) {
        omittedProps.size = size;
      }
      return createVNode(Input, _objectSpread$6({
        "ref": inputRef
      }, omittedProps), slots);
    };
    return () => {
      return renderPassword();
    };
  }
});
Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;
Input.install = function(app) {
  app.component(Input.name, Input);
  app.component(Input.Group.name, Input.Group);
  app.component(Input.Search.name, Input.Search);
  app.component(Input.TextArea.name, Input.TextArea);
  app.component(Input.Password.name, Input.Password);
  return app;
};
function dialogPropTypes() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: PropTypes.shape({
      x: Number,
      y: Number
    }).loose,
    title: PropTypes.any,
    footer: PropTypes.any,
    transitionName: String,
    maskTransitionName: String,
    animation: PropTypes.any,
    maskAnimation: PropTypes.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: PropTypes.any,
    maskProps: PropTypes.any,
    wrapProps: PropTypes.any,
    getContainer: PropTypes.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: PropTypes.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function getMotionName(prefixCls, transitionName, animationName) {
  let motionName = transitionName;
  if (!motionName && animationName) {
    motionName = `${prefixCls}-${animationName}`;
  }
  return motionName;
}
let uuid$1 = -1;
function getUUID() {
  uuid$1 += 1;
  return uuid$1;
}
function getScroll(w, top) {
  let ret = w[`page${top ? "Y" : "X"}Offset`];
  const method = `scroll${top ? "Top" : "Left"}`;
  if (typeof ret !== "number") {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top
  };
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
const sentinelStyle = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
const Content = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: false,
  props: _extends(_extends({}, dialogPropTypes()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(props2, _ref) {
    let {
      expose,
      slots,
      attrs
    } = _ref;
    const sentinelStartRef = ref();
    const sentinelEndRef = ref();
    const dialogRef = ref();
    expose({
      focus: () => {
        var _a;
        (_a = sentinelStartRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      changeActive: (next) => {
        const {
          activeElement
        } = void 0;
        if (next && activeElement === sentinelEndRef.value) {
          sentinelStartRef.value.focus();
        } else if (!next && activeElement === sentinelStartRef.value) {
          sentinelEndRef.value.focus();
        }
      }
    });
    const transformOrigin = ref();
    const contentStyleRef = computed(() => {
      const {
        width,
        height
      } = props2;
      const contentStyle = {};
      if (width !== void 0) {
        contentStyle.width = typeof width === "number" ? `${width}px` : width;
      }
      if (height !== void 0) {
        contentStyle.height = typeof height === "number" ? `${height}px` : height;
      }
      if (transformOrigin.value) {
        contentStyle.transformOrigin = transformOrigin.value;
      }
      return contentStyle;
    });
    const onPrepare = () => {
      nextTick(() => {
        if (dialogRef.value) {
          const elementOffset = offset(dialogRef.value);
          transformOrigin.value = props2.mousePosition ? `${props2.mousePosition.x - elementOffset.left}px ${props2.mousePosition.y - elementOffset.top}px` : "";
        }
      });
    };
    const onVisibleChanged = (visible) => {
      props2.onVisibleChanged(visible);
    };
    return () => {
      var _a, _b, _c, _d;
      const {
        prefixCls,
        footer = (_a = slots.footer) === null || _a === void 0 ? void 0 : _a.call(slots),
        title = (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots),
        ariaId,
        closable,
        closeIcon = (_c = slots.closeIcon) === null || _c === void 0 ? void 0 : _c.call(slots),
        onClose,
        bodyStyle,
        bodyProps,
        onMousedown,
        onMouseup,
        visible,
        modalRender = slots.modalRender,
        destroyOnClose,
        motionName
      } = props2;
      let footerNode;
      if (footer) {
        footerNode = createVNode("div", {
          "class": `${prefixCls}-footer`
        }, [footer]);
      }
      let headerNode;
      if (title) {
        headerNode = createVNode("div", {
          "class": `${prefixCls}-header`
        }, [createVNode("div", {
          "class": `${prefixCls}-title`,
          "id": ariaId
        }, [title])]);
      }
      let closer;
      if (closable) {
        closer = createVNode("button", {
          "type": "button",
          "onClick": onClose,
          "aria-label": "Close",
          "class": `${prefixCls}-close`
        }, [closeIcon || createVNode("span", {
          "class": `${prefixCls}-close-x`
        }, null)]);
      }
      const content = createVNode("div", {
        "class": `${prefixCls}-content`
      }, [closer, headerNode, createVNode("div", _objectSpread$6({
        "class": `${prefixCls}-body`,
        "style": bodyStyle
      }, bodyProps), [(_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)]), footerNode]);
      const transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, _objectSpread$6(_objectSpread$6({}, transitionProps), {}, {
        "onBeforeEnter": onPrepare,
        "onAfterEnter": () => onVisibleChanged(true),
        "onAfterLeave": () => onVisibleChanged(false)
      }), {
        default: () => [visible || !destroyOnClose ? withDirectives(createVNode("div", _objectSpread$6(_objectSpread$6({}, attrs), {}, {
          "ref": dialogRef,
          "key": "dialog-element",
          "role": "document",
          "style": [contentStyleRef.value, attrs.style],
          "class": [prefixCls, attrs.class],
          "onMousedown": onMousedown,
          "onMouseup": onMouseup
        }), [createVNode("div", {
          "tabindex": 0,
          "ref": sentinelStartRef,
          "style": sentinelStyle,
          "aria-hidden": "true"
        }, null), modalRender ? modalRender({
          originVNode: content
        }) : content, createVNode("div", {
          "tabindex": 0,
          "ref": sentinelEndRef,
          "style": sentinelStyle,
          "aria-hidden": "true"
        }, null)]), [[vShow, visible]]) : null]
      });
    };
  }
});
const Mask = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(props2, _ref) {
    return () => {
      const {
        prefixCls,
        visible,
        maskProps,
        motionName
      } = props2;
      const transitionProps = getTransitionProps(motionName);
      return createVNode(Transition, transitionProps, {
        default: () => [withDirectives(createVNode("div", _objectSpread$6({
          "class": `${prefixCls}-mask`
        }, maskProps), null), [[vShow, visible]])]
      });
    };
  }
});
const Dialog = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: false,
  props: initDefaultProps(_extends(_extends({}, dialogPropTypes()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: true
  }),
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const lastOutSideActiveElementRef = shallowRef();
    const wrapperRef = shallowRef();
    const contentRef = shallowRef();
    const animatedVisible = shallowRef(props2.visible);
    const ariaIdRef = shallowRef(`vcDialogTitle${getUUID()}`);
    const onDialogVisibleChanged = (newVisible) => {
      var _a, _b;
      if (newVisible) {
        if (!contains(wrapperRef.value, (void 0).activeElement)) {
          lastOutSideActiveElementRef.value = (void 0).activeElement;
          (_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      } else {
        const preAnimatedVisible = animatedVisible.value;
        animatedVisible.value = false;
        if (props2.mask && lastOutSideActiveElementRef.value && props2.focusTriggerAfterClose) {
          try {
            lastOutSideActiveElementRef.value.focus({
              preventScroll: true
            });
          } catch (e) {
          }
          lastOutSideActiveElementRef.value = null;
        }
        if (preAnimatedVisible) {
          (_b = props2.afterClose) === null || _b === void 0 ? void 0 : _b.call(props2);
        }
      }
    };
    const onInternalClose = (e) => {
      var _a;
      (_a = props2.onClose) === null || _a === void 0 ? void 0 : _a.call(props2, e);
    };
    const contentClickRef = shallowRef(false);
    const contentTimeoutRef = shallowRef();
    const onContentMouseDown = () => {
      clearTimeout(contentTimeoutRef.value);
      contentClickRef.value = true;
    };
    const onContentMouseUp = () => {
      contentTimeoutRef.value = setTimeout(() => {
        contentClickRef.value = false;
      });
    };
    const onWrapperClick = (e) => {
      if (!props2.maskClosable) return null;
      if (contentClickRef.value) {
        contentClickRef.value = false;
      } else if (wrapperRef.value === e.target) {
        onInternalClose(e);
      }
    };
    const onWrapperKeyDown = (e) => {
      if (props2.keyboard && e.keyCode === KeyCode.ESC) {
        e.stopPropagation();
        onInternalClose(e);
        return;
      }
      if (props2.visible) {
        if (e.keyCode === KeyCode.TAB) {
          contentRef.value.changeActive(!e.shiftKey);
        }
      }
    };
    watch(() => props2.visible, () => {
      if (props2.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    watchEffect(() => {
      var _a, _b;
      (_a = props2.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
      if (animatedVisible.value) {
        (_b = props2.scrollLocker) === null || _b === void 0 ? void 0 : _b.lock();
      }
    });
    return () => {
      const {
        prefixCls,
        mask,
        visible,
        maskTransitionName,
        maskAnimation,
        zIndex,
        wrapClassName,
        rootClassName,
        wrapStyle,
        closable,
        maskProps,
        maskStyle,
        transitionName,
        animation,
        wrapProps,
        title = slots.title
      } = props2;
      const {
        style,
        class: className
      } = attrs;
      return createVNode("div", _objectSpread$6({
        "class": [`${prefixCls}-root`, rootClassName]
      }, pickAttrs(props2, {
        data: true
      })), [createVNode(Mask, {
        "prefixCls": prefixCls,
        "visible": mask && visible,
        "motionName": getMotionName(prefixCls, maskTransitionName, maskAnimation),
        "style": _extends({
          zIndex
        }, maskStyle),
        "maskProps": maskProps
      }, null), createVNode("div", _objectSpread$6({
        "tabIndex": -1,
        "onKeydown": onWrapperKeyDown,
        "class": classNames(`${prefixCls}-wrap`, wrapClassName),
        "ref": wrapperRef,
        "onClick": onWrapperClick,
        "role": "dialog",
        "aria-labelledby": title ? ariaIdRef.value : null,
        "style": _extends(_extends({
          zIndex
        }, wrapStyle), {
          display: !animatedVisible.value ? "none" : null
        })
      }, wrapProps), [createVNode(Content, _objectSpread$6(_objectSpread$6({}, omit(props2, ["scrollLocker"])), {}, {
        "style": style,
        "class": className,
        "onMousedown": onContentMouseDown,
        "onMouseup": onContentMouseUp,
        "ref": contentRef,
        "closable": closable,
        "ariaId": ariaIdRef.value,
        "prefixCls": prefixCls,
        "visible": visible,
        "onClose": onInternalClose,
        "onVisibleChanged": onDialogVisibleChanged,
        "motionName": getMotionName(prefixCls, transitionName, animation)
      }), slots)])]);
    };
  }
});
const IDialogPropTypes = dialogPropTypes();
const DialogWrap = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: false,
  props: initDefaultProps(IDialogPropTypes, {
    visible: false
  }),
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const animatedVisible = ref(props2.visible);
    useProvidePortal({}, {
      inTriggerContext: false
    });
    watch(() => props2.visible, () => {
      if (props2.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: "post"
    });
    return () => {
      const {
        visible,
        getContainer,
        forceRender,
        destroyOnClose = false,
        afterClose
      } = props2;
      let dialogProps = _extends(_extends(_extends({}, props2), attrs), {
        ref: "_component",
        key: "dialog"
      });
      if (getContainer === false) {
        return createVNode(Dialog, _objectSpread$6(_objectSpread$6({}, dialogProps), {}, {
          "getOpenCount": () => 2
        }), slots);
      }
      if (!forceRender && destroyOnClose && !animatedVisible.value) {
        return null;
      }
      return createVNode(Portal, {
        "autoLock": true,
        "visible": visible,
        "forceRender": forceRender,
        "getContainer": getContainer
      }, {
        default: (childProps) => {
          dialogProps = _extends(_extends(_extends({}, dialogProps), childProps), {
            afterClose: () => {
              afterClose === null || afterClose === void 0 ? void 0 : afterClose();
              animatedVisible.value = false;
            }
          });
          return createVNode(Dialog, dialogProps, slots);
        }
      });
    };
  }
});
function box(position) {
  return {
    position,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const genModalMaskStyle = (token) => {
  const {
    componentCls
  } = token;
  return [{
    [`${componentCls}-root`]: {
      [`${componentCls}${token.antCls}-zoom-enter, ${componentCls}${token.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: token.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${componentCls}${token.antCls}-zoom-leave ${componentCls}-content`]: {
        pointerEvents: "none"
      },
      [`${componentCls}-mask`]: _extends(_extends({}, box("fixed")), {
        zIndex: token.zIndexPopupBase,
        height: "100%",
        backgroundColor: token.colorBgMask,
        [`${componentCls}-hidden`]: {
          display: "none"
        }
      }),
      [`${componentCls}-wrap`]: _extends(_extends({}, box("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${componentCls}-root`]: initFadeMotion(token)
  }];
};
const genModalStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    // ======================== Root =========================
    {
      [`${componentCls}-root`]: {
        [`${componentCls}-wrap`]: {
          zIndex: token.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${componentCls}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${componentCls}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [componentCls]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${token.screenSMMax})`]: {
          [componentCls]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${token.marginXS} auto`
          },
          [`${componentCls}-centered`]: {
            [componentCls]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${token.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: token.paddingLG,
        [`${componentCls}-title`]: {
          margin: 0,
          color: token.modalHeadingColor,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-content`]: {
          position: "relative",
          backgroundColor: token.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: token.borderRadiusLG,
          boxShadow: token.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`
        },
        [`${componentCls}-close`]: _extends({
          position: "absolute",
          top: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          insetInlineEnd: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
          zIndex: token.zIndexPopupBase + 10,
          padding: 0,
          color: token.modalCloseColor,
          fontWeight: token.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: token.borderRadiusSM,
          width: token.modalConfirmIconSize,
          height: token.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${token.motionDurationMid}, background-color ${token.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: token.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${token.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: token.modalIconHoverColor,
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: token.wireframe ? "transparent" : token.colorFillContentHover
          }
        }, genFocusStyle(token)),
        [`${componentCls}-header`]: {
          color: token.colorText,
          background: token.modalHeaderBg,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          marginBottom: token.marginXS
        },
        [`${componentCls}-body`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          wordWrap: "break-word"
        },
        [`${componentCls}-footer`]: {
          textAlign: "end",
          background: token.modalFooterBg,
          marginTop: token.marginSM,
          [`${token.antCls}-btn + ${token.antCls}-btn:not(${token.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: token.marginXS
          }
        },
        [`${componentCls}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${componentCls}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${componentCls}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
};
const genModalConfirmStyle = (token) => {
  const {
    componentCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [confirmComponentCls]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${token.antCls}-modal-header`]: {
        display: "none"
      },
      [`${confirmComponentCls}-body-wrapper`]: _extends({}, clearFix()),
      [`${confirmComponentCls}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${confirmComponentCls}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: token.colorTextHeading,
          fontWeight: token.fontWeightStrong,
          fontSize: token.modalHeaderTitleFontSize,
          lineHeight: token.modalHeaderTitleLineHeight,
          [`+ ${confirmComponentCls}-content`]: {
            marginBlockStart: token.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${token.modalConfirmIconSize + token.marginSM}px)`
          }
        },
        [`${confirmComponentCls}-content`]: {
          color: token.colorText,
          fontSize: token.fontSize
        },
        [`> ${token.iconCls}`]: {
          flex: "none",
          marginInlineEnd: token.marginSM,
          fontSize: token.modalConfirmIconSize,
          [`+ ${confirmComponentCls}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.marginSM
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        textAlign: "end",
        marginTop: token.marginSM,
        [`${token.antCls}-btn + ${token.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: token.marginXS
        }
      }
    },
    [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorError
    },
    [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorWarning
    },
    [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorInfo
    },
    [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token.iconCls}`]: {
      color: token.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${componentCls}-zoom-leave ${componentCls}-btns`]: {
      pointerEvents: "none"
    }
  };
};
const genRTLStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-root`]: {
      [`${componentCls}-wrap-rtl`]: {
        direction: "rtl",
        [`${componentCls}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
};
const genWireframeStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const confirmComponentCls = `${componentCls}-confirm`;
  return {
    [componentCls]: {
      [`${componentCls}-content`]: {
        padding: 0
      },
      [`${componentCls}-header`]: {
        padding: token.modalHeaderPadding,
        borderBottom: `${token.modalHeaderBorderWidth}px ${token.modalHeaderBorderStyle} ${token.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${componentCls}-body`]: {
        padding: token.modalBodyPadding
      },
      [`${componentCls}-footer`]: {
        padding: `${token.modalFooterPaddingVertical}px ${token.modalFooterPaddingHorizontal}px`,
        borderTop: `${token.modalFooterBorderWidth}px ${token.modalFooterBorderStyle} ${token.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [confirmComponentCls]: {
      [`${antCls}-modal-body`]: {
        padding: `${token.padding * 2}px ${token.padding * 2}px ${token.paddingLG}px`
      },
      [`${confirmComponentCls}-body`]: {
        [`> ${token.iconCls}`]: {
          marginInlineEnd: token.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
            marginInlineStart: token.modalConfirmIconSize + token.margin
          }
        }
      },
      [`${confirmComponentCls}-btns`]: {
        marginTop: token.marginLG
      }
    }
  };
};
const useStyle = genComponentStyleHook("Modal", (token) => {
  const headerPaddingVertical = token.padding;
  const headerFontSize = token.fontSizeHeading5;
  const headerLineHeight = token.lineHeightHeading5;
  const modalToken = merge(token, {
    modalBodyPadding: token.paddingLG,
    modalHeaderBg: token.colorBgElevated,
    modalHeaderPadding: `${headerPaddingVertical}px ${token.paddingLG}px`,
    modalHeaderBorderWidth: token.lineWidth,
    modalHeaderBorderStyle: token.lineType,
    modalHeaderTitleLineHeight: headerLineHeight,
    modalHeaderTitleFontSize: headerFontSize,
    modalHeaderBorderColorSplit: token.colorSplit,
    modalHeaderCloseSize: headerLineHeight * headerFontSize + headerPaddingVertical * 2,
    modalContentBg: token.colorBgElevated,
    modalHeadingColor: token.colorTextHeading,
    modalCloseColor: token.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterPaddingVertical: token.paddingXS,
    modalFooterPaddingHorizontal: token.padding,
    modalFooterBorderWidth: token.lineWidth,
    modalConfirmTitleFontSize: token.fontSizeLG,
    modalIconHoverColor: token.colorIconHover,
    modalConfirmIconSize: token.fontSize * token.lineHeight,
    modalCloseBtnSize: token.controlHeightLG * 0.55
  });
  return [genModalStyle(modalToken), genModalConfirmStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), token.wireframe && genWireframeStyle(modalToken), initZoomMotion(modalToken, "zoom")];
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
let mousePosition;
const modalProps = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: PropTypes.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: PropTypes.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: PropTypes.any,
  okText: PropTypes.any,
  okType: String,
  cancelText: PropTypes.any,
  icon: PropTypes.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: objectType(),
  cancelButtonProps: objectType(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: objectType(),
  maskStyle: objectType(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: objectType()
});
const Modal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: false,
  props: initDefaultProps(modalProps(), {
    width: 520,
    confirmLoading: false,
    okType: "primary"
  }),
  setup(props2, _ref) {
    let {
      emit,
      slots,
      attrs
    } = _ref;
    const [locale] = useLocaleReceiver("Modal");
    const {
      prefixCls,
      rootPrefixCls,
      direction,
      getPopupContainer
    } = useConfigInject("modal", props2);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    warning(props2.visible === void 0);
    const handleCancel = (e) => {
      emit("update:visible", false);
      emit("update:open", false);
      emit("cancel", e);
      emit("change", false);
    };
    const handleOk = (e) => {
      emit("ok", e);
    };
    const renderFooter = () => {
      var _a, _b;
      const {
        okText = (_a = slots.okText) === null || _a === void 0 ? void 0 : _a.call(slots),
        okType,
        cancelText = (_b = slots.cancelText) === null || _b === void 0 ? void 0 : _b.call(slots),
        confirmLoading
      } = props2;
      return createVNode(Fragment, null, [createVNode(Button, _objectSpread$6({
        "onClick": handleCancel
      }, props2.cancelButtonProps), {
        default: () => [cancelText || locale.value.cancelText]
      }), createVNode(Button, _objectSpread$6(_objectSpread$6({}, convertLegacyProps(okType)), {}, {
        "loading": confirmLoading,
        "onClick": handleOk
      }, props2.okButtonProps), {
        default: () => [okText || locale.value.okText]
      })]);
    };
    return () => {
      var _a, _b;
      const {
        prefixCls: customizePrefixCls,
        visible,
        open: open2,
        wrapClassName,
        centered,
        getContainer,
        closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
        focusTriggerAfterClose = true
      } = props2, restProps = __rest(props2, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);
      const wrapClassNameExtended = classNames(wrapClassName, {
        [`${prefixCls.value}-centered`]: !!centered,
        [`${prefixCls.value}-wrap-rtl`]: direction.value === "rtl"
      });
      return wrapSSR(createVNode(DialogWrap, _objectSpread$6(_objectSpread$6(_objectSpread$6({}, restProps), attrs), {}, {
        "rootClassName": hashId.value,
        "class": classNames(hashId.value, attrs.class),
        "getContainer": getContainer || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value),
        "prefixCls": prefixCls.value,
        "wrapClassName": wrapClassNameExtended,
        "visible": open2 !== null && open2 !== void 0 ? open2 : visible,
        "onClose": handleCancel,
        "focusTriggerAfterClose": focusTriggerAfterClose,
        "transitionName": getTransitionName(rootPrefixCls.value, "zoom", props2.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls.value, "fade", props2.maskTransitionName),
        "mousePosition": (_b = restProps.mousePosition) !== null && _b !== void 0 ? _b : mousePosition
      }), _extends(_extends({}, slots), {
        footer: slots.footer || renderFooter,
        closeIcon: () => {
          return createVNode("span", {
            "class": `${prefixCls.value}-close-x`
          }, [closeIcon || createVNode(CloseOutlined, {
            "class": `${prefixCls.value}-close-icon`
          }, null)]);
        }
      })));
    };
  }
});
const useDestroyed = () => {
  const destroyed = shallowRef(false);
  return destroyed;
};
const actionButtonProps = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: objectType(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function isThenable(thing) {
  return !!(thing && thing.then);
}
const ActionButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: actionButtonProps,
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const clickedRef = shallowRef(false);
    const buttonRef = shallowRef();
    const loading = shallowRef(false);
    const isDestroyed = useDestroyed();
    const onInternalClose = function() {
      var _a;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_a = props2.close) === null || _a === void 0 ? void 0 : _a.call(props2, ...args);
    };
    const handlePromiseOnOk = (returnValueOfOnOk) => {
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      loading.value = true;
      returnValueOfOnOk.then(function() {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        onInternalClose(...arguments);
        clickedRef.value = false;
      }, (e) => {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        clickedRef.value = false;
        return Promise.reject(e);
      });
    };
    const onClick = (e) => {
      const {
        actionFn
      } = props2;
      if (clickedRef.value) {
        return;
      }
      clickedRef.value = true;
      if (!actionFn) {
        onInternalClose();
        return;
      }
      let returnValueOfOnOk;
      if (props2.emitEvent) {
        returnValueOfOnOk = actionFn(e);
        if (props2.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.value = false;
          onInternalClose(e);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(props2.close);
        clickedRef.value = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          onInternalClose();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return () => {
      const {
        type,
        prefixCls,
        buttonProps: buttonProps2
      } = props2;
      return createVNode(Button, _objectSpread$6(_objectSpread$6(_objectSpread$6({}, convertLegacyProps(type)), {}, {
        "onClick": onClick,
        "loading": loading.value,
        "prefixCls": prefixCls
      }, buttonProps2), {}, {
        "ref": buttonRef
      }), slots);
    };
  }
});
function renderSomeContent(someContent) {
  if (typeof someContent === "function") {
    return someContent();
  }
  return someContent;
}
const ConfirmDialog = defineComponent({
  name: "ConfirmDialog",
  inheritAttrs: false,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(props2, _ref) {
    let {
      attrs
    } = _ref;
    const [locale] = useLocaleReceiver("Modal");
    return () => {
      const {
        icon,
        onCancel,
        onOk,
        close,
        okText,
        closable = false,
        zIndex,
        afterClose,
        keyboard,
        centered,
        getContainer,
        maskStyle,
        okButtonProps,
        cancelButtonProps,
        okCancel,
        width = 416,
        mask = true,
        maskClosable = false,
        type,
        open: open2,
        title,
        content,
        direction,
        closeIcon,
        modalRender,
        focusTriggerAfterClose,
        rootPrefixCls,
        bodyStyle,
        wrapClassName,
        footer
      } = props2;
      let mergedIcon = icon;
      if (!icon && icon !== null) {
        switch (type) {
          case "info":
            mergedIcon = createVNode(InfoCircleFilled, null, null);
            break;
          case "success":
            mergedIcon = createVNode(CheckCircleFilled, null, null);
            break;
          case "error":
            mergedIcon = createVNode(CloseCircleFilled, null, null);
            break;
          default:
            mergedIcon = createVNode(ExclamationCircleFilled, null, null);
        }
      }
      const okType = props2.okType || "primary";
      const prefixCls = props2.prefixCls || "ant-modal";
      const contentPrefixCls = `${prefixCls}-confirm`;
      const style = attrs.style || {};
      const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === "confirm";
      const autoFocusButton = props2.autoFocusButton === null ? false : props2.autoFocusButton || "ok";
      const confirmPrefixCls = `${prefixCls}-confirm`;
      const classString = classNames(confirmPrefixCls, `${confirmPrefixCls}-${props2.type}`, {
        [`${confirmPrefixCls}-rtl`]: direction === "rtl"
      }, attrs.class);
      const mergedLocal = locale.value;
      const cancelButton = mergedOkCancel && createVNode(ActionButton, {
        "actionFn": onCancel,
        "close": close,
        "autofocus": autoFocusButton === "cancel",
        "buttonProps": cancelButtonProps,
        "prefixCls": `${rootPrefixCls}-btn`
      }, {
        default: () => [renderSomeContent(props2.cancelText) || mergedLocal.cancelText]
      });
      return createVNode(Modal, {
        "prefixCls": prefixCls,
        "class": classString,
        "wrapClassName": classNames({
          [`${confirmPrefixCls}-centered`]: !!centered
        }, wrapClassName),
        "onCancel": (e) => close === null || close === void 0 ? void 0 : close({
          triggerCancel: true
        }, e),
        "open": open2,
        "title": "",
        "footer": "",
        "transitionName": getTransitionName(rootPrefixCls, "zoom", props2.transitionName),
        "maskTransitionName": getTransitionName(rootPrefixCls, "fade", props2.maskTransitionName),
        "mask": mask,
        "maskClosable": maskClosable,
        "maskStyle": maskStyle,
        "style": style,
        "bodyStyle": bodyStyle,
        "width": width,
        "zIndex": zIndex,
        "afterClose": afterClose,
        "keyboard": keyboard,
        "centered": centered,
        "getContainer": getContainer,
        "closable": closable,
        "closeIcon": closeIcon,
        "modalRender": modalRender,
        "focusTriggerAfterClose": focusTriggerAfterClose
      }, {
        default: () => [createVNode("div", {
          "class": `${contentPrefixCls}-body-wrapper`
        }, [createVNode("div", {
          "class": `${contentPrefixCls}-body`
        }, [renderSomeContent(mergedIcon), title === void 0 ? null : createVNode("span", {
          "class": `${contentPrefixCls}-title`
        }, [renderSomeContent(title)]), createVNode("div", {
          "class": `${contentPrefixCls}-content`
        }, [renderSomeContent(content)])]), footer !== void 0 ? renderSomeContent(footer) : createVNode("div", {
          "class": `${contentPrefixCls}-btns`
        }, [cancelButton, createVNode(ActionButton, {
          "type": okType,
          "actionFn": onOk,
          "close": close,
          "autofocus": autoFocusButton === "ok",
          "buttonProps": okButtonProps,
          "prefixCls": `${rootPrefixCls}-btn`
        }, {
          default: () => [renderSomeContent(okText) || (mergedOkCancel ? mergedLocal.okText : mergedLocal.justOkText)]
        })])])]
      });
    };
  }
});
const destroyFns = [];
const confirm = (config) => {
  const container = (void 0).createDocumentFragment();
  let currentConfig = _extends(_extends({}, omit(config, ["parentContext", "appContext"])), {
    close,
    open: true
  });
  let confirmDialogInstance = null;
  function destroy() {
    if (confirmDialogInstance) {
      render(null, container);
      confirmDialogInstance = null;
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(() => {
      }, ...args.slice(1));
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }
  function close() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = _extends(_extends({}, currentConfig), {
      open: false,
      afterClose: () => {
        if (typeof config.afterClose === "function") {
          config.afterClose();
        }
        destroy.apply(this, args);
      }
    });
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    update(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = _extends(_extends({}, currentConfig), configUpdate);
    }
    if (confirmDialogInstance) {
      triggerVNodeUpdate(confirmDialogInstance, currentConfig, container);
    }
  }
  const Wrapper = (p) => {
    const global = globalConfigForApi;
    const rootPrefixCls = global.prefixCls;
    const prefixCls = p.prefixCls || `${rootPrefixCls}-modal`;
    const iconPrefixCls = global.iconPrefixCls;
    const runtimeLocale = getConfirmLocale();
    return createVNode(ConfigProvider, _objectSpread$6(_objectSpread$6({}, global), {}, {
      "prefixCls": rootPrefixCls
    }), {
      default: () => [createVNode(ConfirmDialog, _objectSpread$6(_objectSpread$6({}, p), {}, {
        "rootPrefixCls": rootPrefixCls,
        "prefixCls": prefixCls,
        "iconPrefixCls": iconPrefixCls,
        "locale": runtimeLocale,
        "cancelText": p.cancelText || runtimeLocale.cancelText
      }), null)]
    });
  };
  function render$1(props2) {
    const vm = createVNode(Wrapper, _extends({}, props2));
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    render(vm, container);
    return vm;
  }
  confirmDialogInstance = render$1(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update
  };
};
function withWarn(props2) {
  return _extends(_extends({}, props2), {
    type: "warning"
  });
}
function withInfo(props2) {
  return _extends(_extends({}, props2), {
    type: "info"
  });
}
function withSuccess(props2) {
  return _extends(_extends({}, props2), {
    type: "success"
  });
}
function withError(props2) {
  return _extends(_extends({}, props2), {
    type: "error"
  });
}
function withConfirm(props2) {
  return _extends(_extends({}, props2), {
    type: "confirm"
  });
}
const comfirmFuncProps = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
});
const HookModal = defineComponent({
  name: "HookModal",
  inheritAttrs: false,
  props: initDefaultProps(comfirmFuncProps(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(props2, _ref) {
    let {
      expose
    } = _ref;
    var _a;
    const open2 = computed(() => props2.open);
    const innerConfig = computed(() => props2.config);
    const {
      direction,
      getPrefixCls
    } = useConfigContextInject();
    const prefixCls = getPrefixCls("modal");
    const rootPrefixCls = getPrefixCls();
    const afterClose = () => {
      var _a2, _b;
      props2 === null || props2 === void 0 ? void 0 : props2.afterClose();
      (_b = (_a2 = innerConfig.value).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a2);
    };
    const close = function() {
      props2.destroyAction(...arguments);
    };
    expose({
      destroy: close
    });
    const mergedOkCancel = (_a = innerConfig.value.okCancel) !== null && _a !== void 0 ? _a : innerConfig.value.type === "confirm";
    const [contextLocale] = useLocaleReceiver("Modal", localeValues.Modal);
    return () => createVNode(ConfirmDialog, _objectSpread$6(_objectSpread$6({
      "prefixCls": prefixCls,
      "rootPrefixCls": rootPrefixCls
    }, innerConfig.value), {}, {
      "close": close,
      "open": open2.value,
      "afterClose": afterClose,
      "okText": innerConfig.value.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.justOkText),
      "direction": innerConfig.value.direction || direction.value,
      "cancelText": innerConfig.value.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.cancelText)
    }), null);
  }
});
let uuid = 0;
const ElementsHolder = defineComponent({
  name: "ElementsHolder",
  inheritAttrs: false,
  setup(_, _ref) {
    let {
      expose
    } = _ref;
    const modals = shallowRef([]);
    const addModal = (modal) => {
      modals.value.push(modal);
      modals.value = modals.value.slice();
      return () => {
        modals.value = modals.value.filter((currentModal) => currentModal !== modal);
      };
    };
    expose({
      addModal
    });
    return () => {
      return modals.value.map((modal) => modal());
    };
  }
});
function useModal() {
  const holderRef = shallowRef(null);
  const actionQueue = shallowRef([]);
  watch(actionQueue, () => {
    if (actionQueue.value.length) {
      const cloneQueue = [...actionQueue.value];
      cloneQueue.forEach((action) => {
        action();
      });
      actionQueue.value = [];
    }
  }, {
    immediate: true
  });
  const getConfirmFunc = (withFunc) => function hookConfirm(config) {
    var _a;
    uuid += 1;
    const open2 = shallowRef(true);
    const modalRef = shallowRef(null);
    const configRef = shallowRef(unref(config));
    const updateConfig = shallowRef({});
    watch(() => config, (val) => {
      updateAction(_extends(_extends({}, isRef(val) ? val.value : val), updateConfig.value));
    });
    const destroyAction = function() {
      open2.value = false;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const triggerCancel = args.some((param) => param && param.triggerCancel);
      if (configRef.value.onCancel && triggerCancel) {
        configRef.value.onCancel(() => {
        }, ...args.slice(1));
      }
    };
    let closeFunc;
    const modal = () => createVNode(HookModal, {
      "key": `modal-${uuid}`,
      "config": withFunc(configRef.value),
      "ref": modalRef,
      "open": open2.value,
      "destroyAction": destroyAction,
      "afterClose": () => {
        closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
      }
    }, null);
    closeFunc = (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.addModal(modal);
    if (closeFunc) {
      destroyFns.push(closeFunc);
    }
    const updateAction = (newConfig) => {
      configRef.value = _extends(_extends({}, configRef.value), newConfig);
    };
    const destroy = () => {
      if (modalRef.value) {
        destroyAction();
      } else {
        actionQueue.value = [...actionQueue.value, destroyAction];
      }
    };
    const update = (newConfig) => {
      updateConfig.value = newConfig;
      if (modalRef.value) {
        updateAction(newConfig);
      } else {
        actionQueue.value = [...actionQueue.value, () => updateAction(newConfig)];
      }
    };
    return {
      destroy,
      update
    };
  };
  const fns = computed(() => ({
    info: getConfirmFunc(withInfo),
    success: getConfirmFunc(withSuccess),
    error: getConfirmFunc(withError),
    warning: getConfirmFunc(withWarn),
    confirm: getConfirmFunc(withConfirm)
  }));
  const holderKey = Symbol("modalHolderKey");
  return [fns.value, () => createVNode(ElementsHolder, {
    "key": holderKey,
    "ref": holderRef
  }, null)];
}
function modalWarn(props2) {
  return confirm(withWarn(props2));
}
Modal.useModal = useModal;
Modal.info = function infoFn(props2) {
  return confirm(withInfo(props2));
};
Modal.success = function successFn(props2) {
  return confirm(withSuccess(props2));
};
Modal.error = function errorFn(props2) {
  return confirm(withError(props2));
};
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props2) {
  return confirm(withConfirm(props2));
};
Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};
Modal.install = function(app) {
  app.component(Modal.name, Modal);
  return app;
};
const useOrderStore = defineStore("orderStore", () => {
  const isOpen = ref(false);
  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  };
  return {
    isOpen,
    toggleOpen
  };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SendFormModal",
  __ssrInlineRender: true,
  setup(__props) {
    const orderStore = useOrderStore();
    const { isOpen } = storeToRefs(orderStore);
    const isSend = ref(false);
    const options = [
      { label: "\u041F\u043E\u043A\u043B\u0435\u0439\u043A\u0430 \u043F\u043B\u0435\u043D\u043A\u0438", value: "\u041F\u043E\u043A\u043B\u0435\u0439\u043A\u0430_\u043F\u043B\u0435\u043D\u043A\u0438" },
      { label: "\u0425\u0438\u043C\u0447\u0438\u0441\u0442\u043A\u0430", value: "\u0425\u0438\u043C\u0447\u0438\u0441\u0442\u043A\u0430" },
      { label: "\u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430", value: "\u041F\u043E\u043B\u0438\u0440\u043E\u0432\u043A\u0430" },
      { label: "\u0412\u044B\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u0435 \u0432\u043C\u044F\u0442\u0438\u043D", value: "\u0412\u044B\u0442\u044F\u0433\u0438\u0432\u0430\u043D\u0438\u0435_\u0432\u043C\u044F\u0442\u0438\u043D" },
      { label: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u0441\u043B\u0443\u0433", value: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E_\u0443\u0441\u043B\u0443\u0433" }
    ];
    const form = reactive({
      name: "",
      service: "",
      car: "",
      phone: "+7"
    });
    const rules = {
      service: [{ required: true, message: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443", trigger: "change" }]
    };
    const sendData = async () => {
      const data = [
        {
          name: form.service,
          custom_fields_values: [
            {
              field_id: 730613,
              values: [
                {
                  enum_id: 1017727
                }
              ]
            },
            {
              field_id: 730597,
              values: [
                {
                  value: form.car
                }
              ]
            },
            {
              field_id: 732277,
              values: [
                {
                  value: `${form.name} ${form.phone}`
                }
              ]
            }
          ],
          _embedded: {
            metadata: {
              category: "forms",
              form_id: 1,
              form_name: "\u0424\u043E\u0440\u043C\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",
              form_page: "https://detailing.8milya.kz/",
              form_sent_at: 1608905348,
              ip: "8.8.8.8",
              referer: "https://detailing.8milya.kz/"
            },
            contacts: [
              {
                first_name: form.name,
                custom_fields_values: [
                  {
                    field_code: "PHONE",
                    values: [
                      {
                        enum_code: "WORK",
                        value: form.phone
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ];
      const formData = new FormData();
      formData.append("amo", JSON.stringify(data));
      formData.append("car", form.car);
      formData.append("phone", form.phone);
      formData.append("name", form.name);
      formData.append("service", form.service);
      const response = await fetch("form.php", {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    };
    const submit = async () => {
      console.log(form);
      await sendData();
      isSend.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AModal = Modal;
      const _component_AForm = Form;
      const _component_AFormItem = __nuxt_component_2;
      const _component_ASelect = Select;
      const _component_Icon = __nuxt_component_2$1;
      const _component_AInput = Input;
      const _component_AButton = Button;
      let _temp0;
      _push(ssrRenderComponent(_component_AModal, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        footer: null,
        onCancel: ($event) => isSend.value = false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-[16\xDFpx]"${_scopeId}>`);
            if (unref(isSend)) {
              _push2(`<div${_scopeId}><p class="text-[16px] font-bold mb-[20px]"${_scopeId}>\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443</p><p class="mb-[20px]"${_scopeId}>\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0447\u0430\u0441\u044B.</p><p class="text-slate-300"${_scopeId}>\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B - \u041F\u043D. \u2013 \u0421\u0431.: 10:00 - 19:00</p><p${_scopeId}>\u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0414\u0438\u0432\u0430\u0435\u0432\u0430 33</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(isSend)) {
              _push2(ssrRenderComponent(_component_AForm, {
                layout: "vertical",
                model: unref(form),
                name: "normal_login",
                onFinish: submit,
                rules
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AFormItem, {
                      label: "\u041A\u0430\u043A\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430 \u0432\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?",
                      name: "service"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ASelect, {
                            value: unref(form).service,
                            "onUpdate:value": ($event) => unref(form).service = $event,
                            placeholder: "\u0423\u0441\u043B\u0443\u0433\u0430",
                            options,
                            size: "large"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ASelect, {
                              value: unref(form).service,
                              "onUpdate:value": ($event) => unref(form).service = $event,
                              placeholder: "\u0423\u0441\u043B\u0443\u0433\u0430",
                              options,
                              size: "large"
                            }, null, 8, ["value", "onUpdate:value"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AFormItem, {
                      label: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                      name: "phone"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="relative mt-2 rounded-md shadow-sm"${_scopeId3}><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId3}><span class="text-gray-500 sm:text-sm"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "mdi:phone",
                            class: "text-gray-500 sm:text-sm"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span></div><input${ssrRenderAttrs((_temp0 = mergeProps({
                            type: "text",
                            value: unref(form).phone,
                            placeholder: "+7",
                            "data-maska": "+7 ### ###-##-##",
                            required: "",
                            class: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          }, ssrGetDirectiveProps(_ctx, unref(vMaska))), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(form).phone))))}${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "relative mt-2 rounded-md shadow-sm" }, [
                              createVNode("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
                                createVNode("span", { class: "text-gray-500 sm:text-sm" }, [
                                  createVNode(_component_Icon, {
                                    name: "mdi:phone",
                                    class: "text-gray-500 sm:text-sm"
                                  })
                                ])
                              ]),
                              withDirectives(createVNode("input", {
                                type: "text",
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                placeholder: "+7",
                                "data-maska": "+7 ### ###-##-##",
                                required: "",
                                class: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).phone],
                                [unref(vMaska)]
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AFormItem, {
                      label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                      name: "name"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AInput, {
                            value: unref(form).name,
                            "onUpdate:value": ($event) => unref(form).name = $event,
                            placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                            size: "large"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AInput, {
                              value: unref(form).name,
                              "onUpdate:value": ($event) => unref(form).name = $event,
                              placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                              size: "large"
                            }, null, 8, ["value", "onUpdate:value"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AFormItem, {
                      name: "car",
                      label: "\u041A\u0430\u043A\u043E\u0435 \u0443 \u0432\u0430\u0441 \u0430\u0432\u0442\u043E (\u043C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043E\u0434)?"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AInput, {
                            value: unref(form).car,
                            "onUpdate:value": ($event) => unref(form).car = $event,
                            placeholder: "\u041A\u0430\u043A\u043E\u0435 \u0443 \u0432\u0430\u0441 \u0430\u0432\u0442\u043E (\u043C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043E\u0434)?",
                            size: "large"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AInput, {
                              value: unref(form).car,
                              "onUpdate:value": ($event) => unref(form).car = $event,
                              placeholder: "\u041A\u0430\u043A\u043E\u0435 \u0443 \u0432\u0430\u0441 \u0430\u0432\u0442\u043E (\u043C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043E\u0434)?",
                              size: "large"
                            }, null, 8, ["value", "onUpdate:value"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AButton, {
                      "html-type": "submit",
                      size: "large",
                      class: "px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C `);
                        } else {
                          return [
                            createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AFormItem, {
                        label: "\u041A\u0430\u043A\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430 \u0432\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?",
                        name: "service"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ASelect, {
                            value: unref(form).service,
                            "onUpdate:value": ($event) => unref(form).service = $event,
                            placeholder: "\u0423\u0441\u043B\u0443\u0433\u0430",
                            options,
                            size: "large"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AFormItem, {
                        label: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                        name: "phone"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "relative mt-2 rounded-md shadow-sm" }, [
                            createVNode("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
                              createVNode("span", { class: "text-gray-500 sm:text-sm" }, [
                                createVNode(_component_Icon, {
                                  name: "mdi:phone",
                                  class: "text-gray-500 sm:text-sm"
                                })
                              ])
                            ]),
                            withDirectives(createVNode("input", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                              placeholder: "+7",
                              "data-maska": "+7 ### ###-##-##",
                              required: "",
                              class: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).phone],
                              [unref(vMaska)]
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AFormItem, {
                        label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                        name: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AInput, {
                            value: unref(form).name,
                            "onUpdate:value": ($event) => unref(form).name = $event,
                            placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                            size: "large"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AFormItem, {
                        name: "car",
                        label: "\u041A\u0430\u043A\u043E\u0435 \u0443 \u0432\u0430\u0441 \u0430\u0432\u0442\u043E (\u043C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043E\u0434)?"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AInput, {
                            value: unref(form).car,
                            "onUpdate:value": ($event) => unref(form).car = $event,
                            placeholder: "\u041A\u0430\u043A\u043E\u0435 \u0443 \u0432\u0430\u0441 \u0430\u0432\u0442\u043E (\u043C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043E\u0434)?",
                            size: "large"
                          }, null, 8, ["value", "onUpdate:value"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AButton, {
                        "html-type": "submit",
                        size: "large",
                        class: "px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-[16\xDFpx]" }, [
                unref(isSend) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("p", { class: "text-[16px] font-bold mb-[20px]" }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443"),
                  createVNode("p", { class: "mb-[20px]" }, "\u041C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0447\u0430\u0441\u044B."),
                  createVNode("p", { class: "text-slate-300" }, "\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B - \u041F\u043D. \u2013 \u0421\u0431.: 10:00 - 19:00"),
                  createVNode("p", null, "\u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0414\u0438\u0432\u0430\u0435\u0432\u0430 33")
                ])) : createCommentVNode("", true),
                !unref(isSend) ? (openBlock(), createBlock(_component_AForm, {
                  key: 1,
                  layout: "vertical",
                  model: unref(form),
                  name: "normal_login",
                  onFinish: submit,
                  rules
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AFormItem, {
                      label: "\u041A\u0430\u043A\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430 \u0432\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?",
                      name: "service"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ASelect, {
                          value: unref(form).service,
                          "onUpdate:value": ($event) => unref(form).service = $event,
                          placeholder: "\u0423\u0441\u043B\u0443\u0433\u0430",
                          options,
                          size: "large"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AFormItem, {
                      label: "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
                      name: "phone"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative mt-2 rounded-md shadow-sm" }, [
                          createVNode("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
                            createVNode("span", { class: "text-gray-500 sm:text-sm" }, [
                              createVNode(_component_Icon, {
                                name: "mdi:phone",
                                class: "text-gray-500 sm:text-sm"
                              })
                            ])
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            placeholder: "+7",
                            "data-maska": "+7 ### ###-##-##",
                            required: "",
                            class: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).phone],
                            [unref(vMaska)]
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AFormItem, {
                      label: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                      name: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AInput, {
                          value: unref(form).name,
                          "onUpdate:value": ($event) => unref(form).name = $event,
                          placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
                          size: "large"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AFormItem, {
                      name: "car",
                      label: "\u041A\u0430\u043A\u043E\u0435 \u0443 \u0432\u0430\u0441 \u0430\u0432\u0442\u043E (\u043C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043E\u0434)?"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AInput, {
                          value: unref(form).car,
                          "onUpdate:value": ($event) => unref(form).car = $event,
                          placeholder: "\u041A\u0430\u043A\u043E\u0435 \u0443 \u0432\u0430\u0441 \u0430\u0432\u0442\u043E (\u043C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043E\u0434)?",
                          size: "large"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AButton, {
                      "html-type": "submit",
                      size: "large",
                      class: "px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/SendFormModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/logo.svg");
const _imports_1 = publicAssetsURL("/ws-logo.svg");
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const noop = () => {
};
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup2 = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup2();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup2 = () => {
        observer.disconnect();
        cleanup2 = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup2();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup2();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const target = ref(null);
    const targetIsVisible = ref(true);
    useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting;
      }
    );
    const orderStore = useOrderStore();
    const info = useInfo();
    const menuitems = [
      {
        title: "\u0423\u0441\u043B\u0443\u0433\u0438",
        path: "/services"
      },
      {
        title: "\u041E \u043D\u0430\u0441",
        path: "/about"
      },
      {
        title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        path: "/contact"
      }
    ];
    const open2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingContainer = __nuxt_component_1$1;
      const _component_LandingSendFormModal = _sfc_main$2;
      _push(ssrRenderComponent(_component_LandingContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LandingSendFormModal, null, null, _parent2, _scopeId));
            if (!unref(targetIsVisible)) {
              _push2(`<header class="fixed top-0 left-0 right-0 hidden md:flex backdrop-blur bg-[#0000001f] py-[10px]"${_scopeId}><div class="max-w-screen-xl mx-auto px-5 w-full"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><a href="/" class="text-sm flex text-slate-100 items-center gap-[10px]"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-[20px]"${_scopeId}><p class="flex gap-[10px]"${_scopeId}><span class="text-slate-300"${_scopeId}>\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F</span><b${_scopeId}> 8 \u041C\u0438\u043B\u044F</b></p></a><ul class="flex flex-col lg:flex-row lg:gap-3"${_scopeId}><!--[-->`);
              ssrRenderList(menuitems, (item) => {
                _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.path)} class="flex lg:px-3 py-2 text-slate-100 hover:text-slate-200"${_scopeId}>${ssrInterpolate(item.title)}</a></li>`);
              });
              _push2(`<!--]--></ul><div class="flex items-center gap-4 text-[13px]"${_scopeId}><a${ssrRenderAttr("href", unref(wsLink))}${ssrRenderAttr("target", _ctx._blank)} class=""${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" width="50px" class="h-[40px]"${_scopeId}></a><a${ssrRenderAttr("href", unref(wsLink))} class="px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold"${_scopeId}> \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C </a><a${ssrRenderAttr("href", unref(telLink))} class="px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"${_scopeId}>${ssrInterpolate(unref(info).phone)}</a></div></div></div></header>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<header class="flex flex-col lg:flex-row justify-between items-center my-5"${_scopeId}><div class="flex w-full lg:w-auto items-center justify-between"${_scopeId}><a href="/" class="text-sm flex text-slate-100 items-center gap-[10px]"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}><p class="flex flex-col"${_scopeId}><span class="text-slate-300"${_scopeId}>\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F</span><b${_scopeId}> 8 \u041C\u0438\u043B\u044F</b></p></a><div class="block lg:hidden"${_scopeId}><button class="text-gray-800"${_scopeId}><svg fill="white" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><title${_scopeId}>Menu</title><path style="${ssrRenderStyle(unref(open2) ? null : { display: "none" })}" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"${_scopeId}></path><path style="${ssrRenderStyle(!unref(open2) ? null : { display: "none" })}" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"${_scopeId}></path></svg></button></div></div><nav class="${ssrRenderClass([{ block: unref(open2), hidden: !unref(open2) }, "w-full lg:w-auto mt-2 lg:flex lg:mt-0"])}"${_scopeId}><ul class="flex flex-col lg:flex-row lg:gap-3"${_scopeId}><!--[-->`);
            ssrRenderList(menuitems, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.path)} class="flex lg:px-3 py-2 text-slate-100 hover:text-slate-200"${_scopeId}>${ssrInterpolate(item.title)}</a></li>`);
            });
            _push2(`<!--]--></ul><div class="lg:hidden flex items-center mt-3 gap-4"${_scopeId}><a${ssrRenderAttr("href", unref(telLink))} class="border rounded text-gray-950 p-[10px] px-[16px] font-bold text-center font-[Nunito] mt-[20px] bg-silver cursor-pointer"${_scopeId}>${ssrInterpolate(unref(info).phone)}</a><a${ssrRenderAttr("href", unref(wsLink))} class="px-[16px] border rounded text-slate-200 py-[10px] text-center font-[Nunito] mt-[20px] cursor-pointer"${_scopeId}> \u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F </a></div></nav><div${_scopeId}><div class="hidden lg:flex flex-col items-end gap-4 text-slate-100 hover:text-slate-200"${_scopeId}><div class="flex items-center gap-4 text-[13px]"${_scopeId}><a${ssrRenderAttr("href", unref(wsLink))} class=""${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" width="50px"${_scopeId}></a><a${ssrRenderAttr("href", unref(wsLink))} class="px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold"${_scopeId}> \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C </a><a${ssrRenderAttr("href", unref(telLink))} class="px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"${_scopeId}>${ssrInterpolate(unref(info).phone)}</a></div><div class="flex gap-3 text-[13px]"${_scopeId}><p${_scopeId}>\u041F\u043D. \u2013 \u0421\u0431.: \u0441 10:00 \u0434\u043E 19:00</p><a href="#contacts" class="text-blue-300"${_scopeId}>\u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0414\u0438\u0432\u0430\u0435\u0432\u0430 33</a></div></div></div><div class="flex md:hidden flex-col gap-1 mt-[20px]"${_scopeId}><p class="text-slate-300 text-[13px]"${_scopeId}>\u041F\u043D. \u2013 \u0421\u0431.: \u0441 10:00 \u0434\u043E 19:00</p><a href="#contacts" class="text-blue-300 text-[13px]"${_scopeId}>\u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0414\u0438\u0432\u0430\u0435\u0432\u0430 33</a></div></header><div class="fixed md:hidden bottom-0 left-0 right-0 bg-slate-900 w-full pt-[20px] pb-[30px] px-[16px] z-[10]" style="${ssrRenderStyle({ "background-color": "rgba(0, 0, 0, 0.5)", "backdrop-filter": "blur(30px)" })}"${_scopeId}><div class="flex flex-col gap-4 text-slate-100"${_scopeId}><div class="grid grid-cols-2 gap-3"${_scopeId}><a${ssrRenderAttr("href", unref(info).telLink)} class="px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"${_scopeId}>${ssrInterpolate(unref(info).phone)}</a><a${ssrRenderAttr("href", unref(wsLink))} class="px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"${_scopeId}> \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C WhatApp </a></div><a${ssrRenderAttr("href", unref(wsLink))} class="px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold"${_scopeId}> \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C </a></div></div>`);
          } else {
            return [
              createVNode(_component_LandingSendFormModal),
              !unref(targetIsVisible) ? (openBlock(), createBlock("header", {
                key: 0,
                class: "fixed top-0 left-0 right-0 hidden md:flex backdrop-blur bg-[#0000001f] py-[10px]"
              }, [
                createVNode("div", { class: "max-w-screen-xl mx-auto px-5 w-full" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("a", {
                      href: "/",
                      class: "text-sm flex text-slate-100 items-center gap-[10px]"
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "",
                        class: "h-[20px]"
                      }),
                      createVNode("p", { class: "flex gap-[10px]" }, [
                        createVNode("span", { class: "text-slate-300" }, "\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F"),
                        createVNode("b", null, " 8 \u041C\u0438\u043B\u044F")
                      ])
                    ]),
                    createVNode("ul", { class: "flex flex-col lg:flex-row lg:gap-3" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(menuitems, (item) => {
                        return createVNode("li", null, [
                          createVNode("a", {
                            href: item.path,
                            class: "flex lg:px-3 py-2 text-slate-100 hover:text-slate-200"
                          }, toDisplayString(item.title), 9, ["href"])
                        ]);
                      }), 64))
                    ]),
                    createVNode("div", { class: "flex items-center gap-4 text-[13px]" }, [
                      createVNode("a", {
                        href: unref(wsLink),
                        target: _ctx._blank,
                        class: ""
                      }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "",
                          width: "50px",
                          class: "h-[40px]"
                        })
                      ], 8, ["href", "target"]),
                      createVNode("a", {
                        href: unref(wsLink),
                        onClick: ($event) => unref(orderStore).toggleOpen(),
                        class: "px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold"
                      }, " \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C ", 8, ["href", "onClick"]),
                      createVNode("a", {
                        href: unref(telLink),
                        class: "px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"
                      }, toDisplayString(unref(info).phone), 9, ["href"])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("header", {
                ref_key: "target",
                ref: target,
                class: "flex flex-col lg:flex-row justify-between items-center my-5"
              }, [
                createVNode("div", { class: "flex w-full lg:w-auto items-center justify-between" }, [
                  createVNode("a", {
                    href: "/",
                    class: "text-sm flex text-slate-100 items-center gap-[10px]"
                  }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: ""
                    }),
                    createVNode("p", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-slate-300" }, "\u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F"),
                      createVNode("b", null, " 8 \u041C\u0438\u043B\u044F")
                    ])
                  ]),
                  createVNode("div", { class: "block lg:hidden" }, [
                    createVNode("button", {
                      onClick: ($event) => open2.value = !unref(open2),
                      class: "text-gray-800"
                    }, [
                      (openBlock(), createBlock("svg", {
                        fill: "white",
                        class: "w-4 h-4",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("title", null, "Menu"),
                        withDirectives(createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                        }, null, 512), [
                          [vShow, unref(open2)]
                        ]),
                        withDirectives(createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                        }, null, 512), [
                          [vShow, !unref(open2)]
                        ])
                      ]))
                    ], 8, ["onClick"])
                  ])
                ]),
                createVNode("nav", {
                  class: ["w-full lg:w-auto mt-2 lg:flex lg:mt-0", { block: unref(open2), hidden: !unref(open2) }]
                }, [
                  createVNode("ul", { class: "flex flex-col lg:flex-row lg:gap-3" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(menuitems, (item) => {
                      return createVNode("li", null, [
                        createVNode("a", {
                          href: item.path,
                          class: "flex lg:px-3 py-2 text-slate-100 hover:text-slate-200"
                        }, toDisplayString(item.title), 9, ["href"])
                      ]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "lg:hidden flex items-center mt-3 gap-4" }, [
                    createVNode("a", {
                      href: unref(telLink),
                      class: "border rounded text-gray-950 p-[10px] px-[16px] font-bold text-center font-[Nunito] mt-[20px] bg-silver cursor-pointer"
                    }, toDisplayString(unref(info).phone), 9, ["href"]),
                    createVNode("a", {
                      href: unref(wsLink),
                      class: "px-[16px] border rounded text-slate-200 py-[10px] text-center font-[Nunito] mt-[20px] cursor-pointer"
                    }, " \u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F ", 8, ["href"])
                  ])
                ], 2),
                createVNode("div", null, [
                  createVNode("div", { class: "hidden lg:flex flex-col items-end gap-4 text-slate-100 hover:text-slate-200" }, [
                    createVNode("div", { class: "flex items-center gap-4 text-[13px]" }, [
                      createVNode("a", {
                        href: unref(wsLink),
                        class: ""
                      }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "",
                          width: "50px"
                        })
                      ], 8, ["href"]),
                      createVNode("a", {
                        href: unref(wsLink),
                        onClick: ($event) => unref(orderStore).toggleOpen(),
                        class: "px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold"
                      }, " \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C ", 8, ["href", "onClick"]),
                      createVNode("a", {
                        href: unref(telLink),
                        class: "px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"
                      }, toDisplayString(unref(info).phone), 9, ["href"])
                    ]),
                    createVNode("div", { class: "flex gap-3 text-[13px]" }, [
                      createVNode("p", null, "\u041F\u043D. \u2013 \u0421\u0431.: \u0441 10:00 \u0434\u043E 19:00"),
                      createVNode("a", {
                        href: "#contacts",
                        class: "text-blue-300"
                      }, "\u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0414\u0438\u0432\u0430\u0435\u0432\u0430 33")
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex md:hidden flex-col gap-1 mt-[20px]" }, [
                  createVNode("p", { class: "text-slate-300 text-[13px]" }, "\u041F\u043D. \u2013 \u0421\u0431.: \u0441 10:00 \u0434\u043E 19:00"),
                  createVNode("a", {
                    href: "#contacts",
                    class: "text-blue-300 text-[13px]"
                  }, "\u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0414\u0438\u0432\u0430\u0435\u0432\u0430 33")
                ])
              ], 512),
              createVNode("div", {
                class: "fixed md:hidden bottom-0 left-0 right-0 bg-slate-900 w-full pt-[20px] pb-[30px] px-[16px] z-[10]",
                style: { "background-color": "rgba(0, 0, 0, 0.5)", "backdrop-filter": "blur(30px)" }
              }, [
                createVNode("div", { class: "flex flex-col gap-4 text-slate-100" }, [
                  createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                    createVNode("a", {
                      href: unref(info).telLink,
                      class: "px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"
                    }, toDisplayString(unref(info).phone), 9, ["href"]),
                    createVNode("a", {
                      href: unref(wsLink),
                      class: "px-[16px] border rounded text-slate-200 py-[8px] text-center font-[Nunito]"
                    }, " \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C WhatApp ", 8, ["href"])
                  ]),
                  createVNode("a", {
                    onClick: ($event) => unref(orderStore).toggleOpen(),
                    href: unref(wsLink),
                    class: "px-[16px] bg-silver border rounded text-slate-900 py-[8px] text-center font-[Nunito] font-bold"
                  }, " \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C ", 8, ["onClick", "href"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><footer class="my-20"><p class="text-center text-sm text-slate-500"> Copyright \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}. 8 \u041C\u0438\u043B\u044F. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. </p><p class="text-center text-xs text-slate-500 mt-1">\u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B\u0438\u0446\u0430 \u0414\u0438\u0432\u0430\u0435\u0432\u0430 33</p></footer><span itemscope itemtype="r" class="\u201DDisplaNone\u201D"><meta itemprop="copyrightYear"${ssrRenderAttr("content", String((/* @__PURE__ */ new Date()).getFullYear()))}><meta itemprop="copyrightHolder" content="8 \u041C\u0438\u043B\u044F \u0410\u0432\u0442\u043E\u0438\u043C\u043F\u0435\u0440\u0438\u044F"></span><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Footer.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _sfc_main$1 as _, __nuxt_component_1 as a, useOrderStore as u };
//# sourceMappingURL=Footer-DPW_tdgh.mjs.map
