import { useMemo } from 'react';
import addClass from 'dom-helpers/addClass';
import removeClass from 'dom-helpers/removeClass';
export var overlayOrigin = function overlayOrigin(topEle, mode) {
  var offset =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var popMode = arguments.length > 3 ? arguments[3] : undefined;

  if (mode === 'alert' || mode === 'sliderLeft' || mode === 'sliderRight') {
    return;
  }

  if (popMode === 'fullscreen') {
    return;
  }

  switch (mode) {
    case 'popup':
      return {
        bottom:
          document.documentElement.clientHeight -
          topEle.getBoundingClientRect().y -
          offset,
      };

    case 'dropdown':
      return {
        top: topEle.getBoundingClientRect().y + offset,
      };
  }

  return;
};
export var useLockScroll = function useLockScroll(
  show,
  scrollElement,
  className,
) {
  // show变化时增加滚动锁定
  useMemo(
    function () {
      setClass(scrollElement, className, show ? 'add' : 'remove');
    },
    [show],
  );
};
export var setClass = function setClass(targetEle, className, type) {
  if (type === 'add') {
    addClass(targetEle, className);
  }

  if (type === 'remove') {
    removeClass(targetEle, className);
  }
};
export var getRadiusStyle = function getRadiusStyle(mode, round, size) {
  if (!round) {
    return {};
  }

  var style = {
    overflow: 'hidden',
  };

  switch (mode) {
    case 'alert':
      style.borderRadius = size;
      break;

    case 'dropdown':
      style.borderBottomLeftRadius = size;
      style.borderBottomRightRadius = size;
      break;

    case 'popup':
      style.borderTopLeftRadius = size;
      style.borderTopRightRadius = size;
      break;

    case 'sliderLeft':
      style.borderTopRightRadius = size;
      style.borderBottomRightRadius = size;
      break;

    case 'sliderRight':
      style.borderTopLeftRadius = size;
      style.borderBottomLeftRadius = size;
      break;
  }

  return style;
};
export var getcloseIconPositionClass = function getcloseIconPositionClass(
  mode,
) {
  switch (mode) {
    case 'alert':
    case 'popup':
    case 'sliderLeft':
      return 'top-right';

    case 'dropdown':
      return 'bottom-right';

    case 'sliderRight':
      return 'top-left';
  }

  return 'top-right';
};
