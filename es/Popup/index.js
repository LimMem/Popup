var _excluded = [
  'awayRef',
  'show',
  'onClose',
  'scrollElement',
  'mode',
  'children',
  'closeOnClickOutside',
  'closeOnClickOverlay',
  'offset',
  'contentSize',
  'type',
  'round',
  'closeable',
  'custom',
];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

import React, { useMemo, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Icon from 'antd-mobile/es/icon';
import Transition from './components/Transition';
import { useClickAway, useUnmount, useEventListener } from 'ahooks';
import {
  getcloseIconPositionClass,
  getRadiusStyle,
  overlayOrigin,
  useLockScroll,
} from './utils';
import './index.less';
import classNames from 'classnames';
var prefixCls = 'alita-popup';

var Popup = function Popup(_ref) {
  var awayRef = _ref.awayRef,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
    _ref$scrollElement = _ref.scrollElement,
    scrollElement =
      _ref$scrollElement === void 0
        ? document.documentElement
        : _ref$scrollElement,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'popup' : _ref$mode,
    children = _ref.children,
    _ref$closeOnClickOuts = _ref.closeOnClickOutside,
    closeOnClickOutside =
      _ref$closeOnClickOuts === void 0 ? false : _ref$closeOnClickOuts,
    _ref$closeOnClickOver = _ref.closeOnClickOverlay,
    closeOnClickOverlay =
      _ref$closeOnClickOver === void 0 ? true : _ref$closeOnClickOver,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset,
    contentSize = _ref.contentSize,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'fullscreen' : _ref$type,
    _ref$round = _ref.round,
    round = _ref$round === void 0 ? false : _ref$round,
    _ref$closeable = _ref.closeable,
    closeable = _ref$closeable === void 0 ? false : _ref$closeable,
    _ref$custom = _ref.custom,
    custom = _ref$custom === void 0 ? false : _ref$custom,
    otherProps = _objectWithoutProperties(_ref, _excluded);

  var topRef = useRef(null);

  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    aOverlayStyle = _useState2[0],
    setAOverlayStyle = _useState2[1];

  useMemo(
    function () {
      if (show) {
        var topEle = topRef.current;

        if (topEle) {
          var style = overlayOrigin(topEle, mode, offset || 0, type);
          setAOverlayStyle(style);
        }
      }

      return function () {};
    },
    [show],
  );

  var aClose = function aClose() {
    onClose();
  }; // 点击awayRef之外的区域关闭弹出框

  useClickAway(
    function (e) {
      if (closeOnClickOutside) {
        aClose();
      }
    },
    awayRef !== null && awayRef !== void 0 ? awayRef : [],
  ); // 弹出窗锁定滚动

  useLockScroll(show, scrollElement, ''.concat(prefixCls, '-flow-hidden')); // 页面卸载关闭

  useUnmount(aClose); // 历史浏览器前进或者后退操作时关闭

  useEventListener('popstate', aClose);

  var PopupInView = function PopupInView() {
    var _classNames;

    if (custom) {
      return /*#__PURE__*/ React.createElement(React.Fragment, null, children);
    }

    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(prefixCls, '-inview'), true),
          _defineProperty(
            _classNames,
            ''.concat(prefixCls, '-closeable'),
            closeable,
          ),
          _classNames),
        ),
        style: _objectSpread({}, getRadiusStyle(mode, round, '0.16rem')),
      },
      children,
      closeable &&
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: classNames(
              ''.concat(prefixCls, '-close'),
              _defineProperty(
                {},
                ''
                  .concat(prefixCls, '-close-')
                  .concat(getcloseIconPositionClass(mode)),
                true,
              ),
            ),
            onClick: aClose,
          },
          /*#__PURE__*/ React.createElement(Icon, {
            type: 'cross',
            size: 'md',
            color: '#999',
          }),
        ),
    );
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      ref: topRef,
    },
    /*#__PURE__*/ ReactDOM.createPortal(
      /*#__PURE__*/ React.createElement(
        Transition,
        _objectSpread(
          {
            mode: mode,
            onClose: aClose,
            show: show,
            contentSize: contentSize,
            closeOnClickOverlay: closeOnClickOverlay,
            overlayStyle: aOverlayStyle,
          },
          otherProps,
        ),
        /*#__PURE__*/ React.createElement(PopupInView, null),
      ),
      document.body,
    ),
  );
};

Popup.displayName = 'Popup';
export default Popup;
