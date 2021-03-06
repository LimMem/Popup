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

import React, { useState, useMemo } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classnames from 'classnames';
import './index.less';
var prefixCls = 'alita-transition';

var Transition = function Transition(_ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'popup' : _ref$mode,
    _ref$closeOnClickOver = _ref.closeOnClickOverlay,
    closeOnClickOverlay =
      _ref$closeOnClickOver === void 0 ? true : _ref$closeOnClickOver,
    _onEnter = _ref.onEnter,
    onEntered = _ref.onEntered,
    onExit = _ref.onExit,
    _onExited = _ref.onExited,
    overlayStyle = _ref.overlayStyle,
    className = _ref.className,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 1 : _ref$zIndex,
    _ref$contentSize = _ref.contentSize,
    contentSize = _ref$contentSize === void 0 ? '80%' : _ref$contentSize;

  var _useState = useState('none'),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];

  useMemo(
    function () {
      if (show) {
        setDisplay('block');
      }
    },
    [show],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: _objectSpread(
        _objectSpread(
          {
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: zIndex,
          },
          overlayStyle,
        ),
        {},
        {
          display: display,
          overflow: 'hidden',
          transform: 'scale(1)',
        },
      ),
    },
    /*#__PURE__*/ React.createElement(
      CSSTransition,
      {
        in: show,
        timeout: 200,
        classNames: ''.concat(prefixCls, '-overlay'),
        unmountOnExit: true,
      },
      function () {
        return /*#__PURE__*/ React.createElement('div', {
          className: ''.concat(prefixCls, '-overlay-box'),
          onClick: function onClick() {
            if (closeOnClickOverlay) {
              onClose && onClose();
            }
          },
        });
      },
    ),
    /*#__PURE__*/ React.createElement(
      CSSTransition,
      {
        in: show,
        timeout: 200,
        classNames: ''.concat(prefixCls, '-').concat(mode.toLowerCase()),
        unmountOnExit: true,
        onEnter: function onEnter() {
          _onEnter && _onEnter();
        },
        onEntered: onEntered,
        onExit: onExit,
        onExited: function onExited() {
          setDisplay('none');
          _onExited && _onExited();
        },
      },
      function () {
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: classnames(
              ''.concat(prefixCls, '-').concat(mode.toLowerCase(), '-box'),
              ''.concat(prefixCls, '-wrapper'),
              _defineProperty({}, ''.concat(className), !!className),
            ),
            style:
              mode === 'sliderLeft' || mode === 'sliderRight'
                ? {
                    maxWidth: contentSize,
                  }
                : {
                    maxHeight: contentSize,
                  },
          },
          children,
        );
      },
    ),
  );
};

Transition.displayName = 'Transition';
export default Transition;
