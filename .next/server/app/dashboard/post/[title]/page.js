(() => {
var exports = {};
exports.id = 8223;
exports.ids = [8223,5375,5612,3471];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 70620:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _reactIs = __webpack_require__(60129);
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _base = __webpack_require__(93832);
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _useTheme = _interopRequireDefault(__webpack_require__(48650));
var _Zoom = _interopRequireDefault(__webpack_require__(25375));
var _Fab = _interopRequireDefault(__webpack_require__(82272));
var _capitalize = _interopRequireDefault(__webpack_require__(20587));
var _isMuiElement = _interopRequireDefault(__webpack_require__(37396));
var _useForkRef = _interopRequireDefault(__webpack_require__(99215));
var _useControlled = _interopRequireDefault(__webpack_require__(55458));
var _speedDialClasses = _interopRequireWildcard(__webpack_require__(47733));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["ref"],
  _excluded2 = ["ariaLabel", "FabProps", "children", "className", "direction", "hidden", "icon", "onBlur", "onClose", "onFocus", "onKeyDown", "onMouseEnter", "onMouseLeave", "onOpen", "open", "openIcon", "TransitionComponent", "transitionDuration", "TransitionProps"],
  _excluded3 = ["ref"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    open,
    direction
  } = ownerState;
  const slots = {
    root: ['root', `direction${(0, _capitalize.default)(direction)}`],
    fab: ['fab'],
    actions: ['actions', !open && 'actionsClosed']
  };
  return (0, _base.unstable_composeClasses)(slots, _speedDialClasses.getSpeedDialUtilityClass, classes);
};
function getOrientation(direction) {
  if (direction === 'up' || direction === 'down') {
    return 'vertical';
  }
  if (direction === 'right' || direction === 'left') {
    return 'horizontal';
  }
  return undefined;
}
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
const dialRadius = 32;
const spacingActions = 16;
const SpeedDialRoot = (0, _styled.default)('div', {
  name: 'MuiSpeedDial',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`direction${(0, _capitalize.default)(ownerState.direction)}`]];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  zIndex: (theme.vars || theme).zIndex.speedDial,
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none'
}, ownerState.direction === 'up' && {
  flexDirection: 'column-reverse',
  [`& .${_speedDialClasses.default.actions}`]: {
    flexDirection: 'column-reverse',
    marginBottom: -dialRadius,
    paddingBottom: spacingActions + dialRadius
  }
}, ownerState.direction === 'down' && {
  flexDirection: 'column',
  [`& .${_speedDialClasses.default.actions}`]: {
    flexDirection: 'column',
    marginTop: -dialRadius,
    paddingTop: spacingActions + dialRadius
  }
}, ownerState.direction === 'left' && {
  flexDirection: 'row-reverse',
  [`& .${_speedDialClasses.default.actions}`]: {
    flexDirection: 'row-reverse',
    marginRight: -dialRadius,
    paddingRight: spacingActions + dialRadius
  }
}, ownerState.direction === 'right' && {
  flexDirection: 'row',
  [`& .${_speedDialClasses.default.actions}`]: {
    flexDirection: 'row',
    marginLeft: -dialRadius,
    paddingLeft: spacingActions + dialRadius
  }
}));
const SpeedDialFab = (0, _styled.default)(_Fab.default, {
  name: 'MuiSpeedDial',
  slot: 'Fab',
  overridesResolver: (props, styles) => styles.fab
})(() => ({
  pointerEvents: 'auto'
}));
const SpeedDialActions = (0, _styled.default)('div', {
  name: 'MuiSpeedDial',
  slot: 'Actions',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.actions, !ownerState.open && styles.actionsClosed];
  }
})(({
  ownerState
}) => (0, _extends2.default)({
  display: 'flex',
  pointerEvents: 'auto'
}, !ownerState.open && {
  transition: 'top 0s linear 0.2s',
  pointerEvents: 'none'
}));
const SpeedDial = /*#__PURE__*/React.forwardRef(function SpeedDial(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiSpeedDial'
  });
  const theme = (0, _useTheme.default)();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
      ariaLabel,
      FabProps: {
        ref: origDialButtonRef
      } = {},
      children: childrenProp,
      className,
      direction = 'up',
      hidden = false,
      icon,
      onBlur,
      onClose,
      onFocus,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      onOpen,
      open: openProp,
      TransitionComponent = _Zoom.default,
      transitionDuration = defaultTransitionDuration,
      TransitionProps
    } = props,
    FabProps = (0, _objectWithoutPropertiesLoose2.default)(props.FabProps, _excluded),
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded2);
  const [open, setOpenState] = (0, _useControlled.default)({
    controlled: openProp,
    default: false,
    name: 'SpeedDial',
    state: 'open'
  });
  const ownerState = (0, _extends2.default)({}, props, {
    open,
    direction
  });
  const classes = useUtilityClasses(ownerState);
  const eventTimer = React.useRef();
  React.useEffect(() => {
    return () => {
      clearTimeout(eventTimer.current);
    };
  }, []);

  /**
   * an index in actions.current
   */
  const focusedAction = React.useRef(0);

  /**
   * pressing this key while the focus is on a child SpeedDialAction focuses
   * the next SpeedDialAction.
   * It is equal to the first arrow key pressed while focus is on the SpeedDial
   * that is not orthogonal to the direction.
   * @type {utils.ArrowKey?}
   */
  const nextItemArrowKey = React.useRef();

  /**
   * refs to the Button that have an action associated to them in this SpeedDial
   * [Fab, ...(SpeedDialActions > Button)]
   * @type {HTMLButtonElement[]}
   */
  const actions = React.useRef([]);
  actions.current = [actions.current[0]];
  const handleOwnFabRef = React.useCallback(fabFef => {
    actions.current[0] = fabFef;
  }, []);
  const handleFabRef = (0, _useForkRef.default)(origDialButtonRef, handleOwnFabRef);

  /**
   * creates a ref callback for the Button in a SpeedDialAction
   * Is called before the original ref callback for Button that was set in buttonProps
   *
   * @param dialActionIndex {number}
   * @param origButtonRef {React.RefObject?}
   */
  const createHandleSpeedDialActionButtonRef = (dialActionIndex, origButtonRef) => {
    return buttonRef => {
      actions.current[dialActionIndex + 1] = buttonRef;
      if (origButtonRef) {
        origButtonRef(buttonRef);
      }
    };
  };
  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    const key = event.key.replace('Arrow', '').toLowerCase();
    const {
      current: nextItemArrowKeyCurrent = key
    } = nextItemArrowKey;
    if (event.key === 'Escape') {
      setOpenState(false);
      actions.current[0].focus();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
      return;
    }
    if (getOrientation(key) === getOrientation(nextItemArrowKeyCurrent) && getOrientation(key) !== undefined) {
      event.preventDefault();
      const actionStep = key === nextItemArrowKeyCurrent ? 1 : -1;

      // stay within array indices
      const nextAction = clamp(focusedAction.current + actionStep, 0, actions.current.length - 1);
      actions.current[nextAction].focus();
      focusedAction.current = nextAction;
      nextItemArrowKey.current = nextItemArrowKeyCurrent;
    }
  };
  React.useEffect(() => {
    // actions were closed while navigation state was not reset
    if (!open) {
      focusedAction.current = 0;
      nextItemArrowKey.current = undefined;
    }
  }, [open]);
  const handleClose = event => {
    if (event.type === 'mouseleave' && onMouseLeave) {
      onMouseLeave(event);
    }
    if (event.type === 'blur' && onBlur) {
      onBlur(event);
    }
    clearTimeout(eventTimer.current);
    if (event.type === 'blur') {
      eventTimer.current = setTimeout(() => {
        setOpenState(false);
        if (onClose) {
          onClose(event, 'blur');
        }
      });
    } else {
      setOpenState(false);
      if (onClose) {
        onClose(event, 'mouseLeave');
      }
    }
  };
  const handleClick = event => {
    if (FabProps.onClick) {
      FabProps.onClick(event);
    }
    clearTimeout(eventTimer.current);
    if (open) {
      setOpenState(false);
      if (onClose) {
        onClose(event, 'toggle');
      }
    } else {
      setOpenState(true);
      if (onOpen) {
        onOpen(event, 'toggle');
      }
    }
  };
  const handleOpen = event => {
    if (event.type === 'mouseenter' && onMouseEnter) {
      onMouseEnter(event);
    }
    if (event.type === 'focus' && onFocus) {
      onFocus(event);
    }

    // When moving the focus between two items,
    // a chain if blur and focus event is triggered.
    // We only handle the last event.
    clearTimeout(eventTimer.current);
    if (!open) {
      // Wait for a future focus or click event
      eventTimer.current = setTimeout(() => {
        setOpenState(true);
        if (onOpen) {
          const eventMap = {
            focus: 'focus',
            mouseenter: 'mouseEnter'
          };
          onOpen(event, eventMap[event.type]);
        }
      });
    }
  };

  // Filter the label for valid id characters.
  const id = ariaLabel.replace(/^[^a-z]+|[^\w:.-]+/gi, '');
  const allItems = React.Children.toArray(childrenProp).filter(child => {
    if (false) {}
    return /*#__PURE__*/React.isValidElement(child);
  });
  const children = allItems.map((child, index) => {
    const _child$props = child.props,
      {
        FabProps: {
          ref: origButtonRef
        } = {},
        tooltipPlacement: tooltipPlacementProp
      } = _child$props,
      ChildFabProps = (0, _objectWithoutPropertiesLoose2.default)(_child$props.FabProps, _excluded3);
    const tooltipPlacement = tooltipPlacementProp || (getOrientation(direction) === 'vertical' ? 'left' : 'top');
    return /*#__PURE__*/React.cloneElement(child, {
      FabProps: (0, _extends2.default)({}, ChildFabProps, {
        ref: createHandleSpeedDialActionButtonRef(index, origButtonRef)
      }),
      delay: 30 * (open ? index : allItems.length - index),
      open,
      tooltipPlacement,
      id: `${id}-action-${index}`
    });
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SpeedDialRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ref: ref,
    role: "presentation",
    onKeyDown: handleKeyDown,
    onBlur: handleClose,
    onFocus: handleOpen,
    onMouseEnter: handleOpen,
    onMouseLeave: handleClose,
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(TransitionComponent, (0, _extends2.default)({
      in: !hidden,
      timeout: transitionDuration,
      unmountOnExit: true
    }, TransitionProps, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SpeedDialFab, (0, _extends2.default)({
        color: "primary",
        "aria-label": ariaLabel,
        "aria-haspopup": "true",
        "aria-expanded": open,
        "aria-controls": `${id}-actions`
      }, FabProps, {
        onClick: handleClick,
        className: (0, _clsx.default)(classes.fab, FabProps.className),
        ref: handleFabRef,
        ownerState: ownerState,
        children: /*#__PURE__*/React.isValidElement(icon) && (0, _isMuiElement.default)(icon, ['SpeedDialIcon']) ? /*#__PURE__*/React.cloneElement(icon, {
          open
        }) : icon
      }))
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(SpeedDialActions, {
      id: `${id}-actions`,
      role: "menu",
      "aria-orientation": getOrientation(direction),
      className: (0, _clsx.default)(classes.actions, !open && classes.actionsClosed),
      ownerState: ownerState,
      children: children
    })]
  }));
});
 false ? 0 : void 0;
var _default = SpeedDial;
exports["default"] = _default;

/***/ }),

/***/ 92034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  speedDialClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _SpeedDial.default;
  }
}));
Object.defineProperty(exports, "speedDialClasses", ({
  enumerable: true,
  get: function () {
    return _speedDialClasses.default;
  }
}));
var _SpeedDial = _interopRequireDefault(__webpack_require__(70620));
var _speedDialClasses = _interopRequireWildcard(__webpack_require__(47733));
Object.keys(_speedDialClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _speedDialClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _speedDialClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 47733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getSpeedDialUtilityClass = getSpeedDialUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getSpeedDialUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiSpeedDial', slot);
}
const speedDialClasses = (0, _utils.unstable_generateUtilityClasses)('MuiSpeedDial', ['root', 'fab', 'directionUp', 'directionDown', 'directionLeft', 'directionRight', 'actions', 'actionsClosed']);
var _default = speedDialClasses;
exports["default"] = _default;

/***/ }),

/***/ 27686:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

// @inheritedComponent Tooltip
var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _base = __webpack_require__(93832);
var _system = __webpack_require__(19659);
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _Fab = _interopRequireDefault(__webpack_require__(82272));
var _Tooltip = _interopRequireDefault(__webpack_require__(11666));
var _capitalize = _interopRequireDefault(__webpack_require__(20587));
var _speedDialActionClasses = _interopRequireWildcard(__webpack_require__(57553));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "delay", "FabProps", "icon", "id", "open", "TooltipClasses", "tooltipOpen", "tooltipPlacement", "tooltipTitle"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    open,
    tooltipPlacement,
    classes
  } = ownerState;
  const slots = {
    fab: ['fab', !open && 'fabClosed'],
    staticTooltip: ['staticTooltip', `tooltipPlacement${(0, _capitalize.default)(tooltipPlacement)}`, !open && 'staticTooltipClosed'],
    staticTooltipLabel: ['staticTooltipLabel']
  };
  return (0, _base.unstable_composeClasses)(slots, _speedDialActionClasses.getSpeedDialActionUtilityClass, classes);
};
const SpeedDialActionFab = (0, _styled.default)(_Fab.default, {
  name: 'MuiSpeedDialAction',
  slot: 'Fab',
  skipVariantsResolver: false,
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.fab, !ownerState.open && styles.fabClosed];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  margin: 8,
  color: (theme.vars || theme).palette.text.secondary,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: theme.vars ? theme.vars.palette.SpeedDialAction.fabHoverBg : (0, _system.emphasize)(theme.palette.background.paper, 0.15)
  },
  transition: `${theme.transitions.create('transform', {
    duration: theme.transitions.duration.shorter
  })}, opacity 0.8s`,
  opacity: 1
}, !ownerState.open && {
  opacity: 0,
  transform: 'scale(0)'
}));
const SpeedDialActionStaticTooltip = (0, _styled.default)('span', {
  name: 'MuiSpeedDialAction',
  slot: 'StaticTooltip',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.staticTooltip, !ownerState.open && styles.staticTooltipClosed, styles[`tooltipPlacement${(0, _capitalize.default)(ownerState.tooltipPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [`& .${_speedDialActionClasses.default.staticTooltipLabel}`]: (0, _extends2.default)({
    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: theme.transitions.duration.shorter
    }),
    opacity: 1
  }, !ownerState.open && {
    opacity: 0,
    transform: 'scale(0.5)'
  }, ownerState.tooltipPlacement === 'left' && {
    transformOrigin: '100% 50%',
    right: '100%',
    marginRight: 8
  }, ownerState.tooltipPlacement === 'right' && {
    transformOrigin: '0% 50%',
    left: '100%',
    marginLeft: 8
  })
}));
const SpeedDialActionStaticTooltipLabel = (0, _styled.default)('span', {
  name: 'MuiSpeedDialAction',
  slot: 'StaticTooltipLabel',
  overridesResolver: (props, styles) => styles.staticTooltipLabel
})(({
  theme
}) => (0, _extends2.default)({
  position: 'absolute'
}, theme.typography.body1, {
  backgroundColor: (theme.vars || theme).palette.background.paper,
  borderRadius: (theme.vars || theme).shape.borderRadius,
  boxShadow: (theme.vars || theme).shadows[1],
  color: (theme.vars || theme).palette.text.secondary,
  padding: '4px 16px',
  wordBreak: 'keep-all'
}));
const SpeedDialAction = /*#__PURE__*/React.forwardRef(function SpeedDialAction(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiSpeedDialAction'
  });
  const {
      className,
      delay = 0,
      FabProps = {},
      icon,
      id,
      open,
      TooltipClasses,
      tooltipOpen: tooltipOpenProp = false,
      tooltipPlacement = 'left',
      tooltipTitle
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    tooltipPlacement
  });
  const classes = useUtilityClasses(ownerState);
  const [tooltipOpen, setTooltipOpen] = React.useState(tooltipOpenProp);
  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };
  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };
  const transitionStyle = {
    transitionDelay: `${delay}ms`
  };
  const fab = /*#__PURE__*/(0, _jsxRuntime.jsx)(SpeedDialActionFab, (0, _extends2.default)({
    size: "small",
    className: (0, _clsx.default)(classes.fab, className),
    tabIndex: -1,
    role: "menuitem",
    ownerState: ownerState
  }, FabProps, {
    style: (0, _extends2.default)({}, transitionStyle, FabProps.style),
    children: icon
  }));
  if (tooltipOpenProp) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(SpeedDialActionStaticTooltip, (0, _extends2.default)({
      id: id,
      ref: ref,
      className: classes.staticTooltip,
      ownerState: ownerState
    }, other, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SpeedDialActionStaticTooltipLabel, {
        style: transitionStyle,
        id: `${id}-label`,
        className: classes.staticTooltipLabel,
        ownerState: ownerState,
        children: tooltipTitle
      }), /*#__PURE__*/React.cloneElement(fab, {
        'aria-labelledby': `${id}-label`
      })]
    }));
  }
  if (!open && tooltipOpen) {
    setTooltipOpen(false);
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, (0, _extends2.default)({
    id: id,
    ref: ref,
    title: tooltipTitle,
    placement: tooltipPlacement,
    onClose: handleTooltipClose,
    onOpen: handleTooltipOpen,
    open: open && tooltipOpen,
    classes: TooltipClasses
  }, other, {
    children: fab
  }));
});
 false ? 0 : void 0;
var _default = SpeedDialAction;
exports["default"] = _default;

/***/ }),

/***/ 52208:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  speedDialActionClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _SpeedDialAction.default;
  }
}));
Object.defineProperty(exports, "speedDialActionClasses", ({
  enumerable: true,
  get: function () {
    return _speedDialActionClasses.default;
  }
}));
var _SpeedDialAction = _interopRequireDefault(__webpack_require__(27686));
var _speedDialActionClasses = _interopRequireWildcard(__webpack_require__(57553));
Object.keys(_speedDialActionClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _speedDialActionClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _speedDialActionClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 57553:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getSpeedDialActionUtilityClass = getSpeedDialActionUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getSpeedDialActionUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiSpeedDialAction', slot);
}
const speedDialActionClasses = (0, _utils.unstable_generateUtilityClasses)('MuiSpeedDialAction', ['fab', 'fabClosed', 'staticTooltip', 'staticTooltipClosed', 'staticTooltipLabel', 'tooltipPlacementLeft', 'tooltipPlacementRight']);
var _default = speedDialActionClasses;
exports["default"] = _default;

/***/ }),

/***/ 15989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _reactTransitionGroup = __webpack_require__(65481);
var _utils = __webpack_require__(44268);
var _useTheme = _interopRequireDefault(__webpack_require__(48650));
var _utils2 = __webpack_require__(65972);
var _useForkRef = _interopRequireDefault(__webpack_require__(99215));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const styles = {
  entering: {
    transform: 'none'
  },
  entered: {
    transform: 'none'
  }
};

/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](/material-ui/react-button/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Zoom = /*#__PURE__*/React.forwardRef(function Zoom(props, ref) {
  const theme = (0, _useTheme.default)();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = _reactTransitionGroup.Transition
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const nodeRef = React.useRef(null);
  const handleRef = (0, _useForkRef.default)(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    (0, _utils2.reflow)(node); // So the animation always start from the start.

    const transitionProps = (0, _utils2.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0, _utils2.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TransitionComponent, (0, _extends2.default)({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/React.cloneElement(children, (0, _extends2.default)({
        style: (0, _extends2.default)({
          transform: 'scale(0)',
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 false ? 0 : void 0;
var _default = Zoom;
exports["default"] = _default;

/***/ }),

/***/ 25375:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Zoom.default;
  }
}));
var _Zoom = _interopRequireDefault(__webpack_require__(15989));

/***/ }),

/***/ 36401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport safe */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__.GlobalError),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

    

    const tree = {
        children: [
        '',
        {
        children: [
        'dashboard',
        {
        children: [
        'post',
        {
        children: [
        '[title]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 28979)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/post/[title]/page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23909)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51404)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/loading.tsx"],
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30838)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88924)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/loading.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18275)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/not-found.tsx"],
          
        }
      ]
      }.children;
    const pages = ["/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/post/[title]/page.tsx"];

    

    const originalPathname = "/dashboard/post/[title]/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    

    // Create and export the route module that will be consumed.
    const options = {"definition":{"kind":"APP_PAGE","page":"/dashboard/post/[title]/page","pathname":"/dashboard/post/[title]","bundlePath":"app/dashboard/post/[title]/page","filename":"","appPaths":[]}}
    const routeModule = new (next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default())({
      ...options,
      userland: {
        loaderTree: tree,
      },
    })
  

/***/ }),

/***/ 9254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85440))

/***/ }),

/***/ 13864:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98154))

/***/ }),

/***/ 85440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/auth/guard/index.ts + 3 modules
var guard = __webpack_require__(45612);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/layouts/config-layout.ts
var config_layout = __webpack_require__(83430);
;// CONCATENATED MODULE: ./src/layouts/dashboard/main.tsx
// @mui


// hooks

// components

//

// ----------------------------------------------------------------------
const SPACING = 8;
function Main({ children, sx, ...other }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const lgUp = (0,use_responsive/* useResponsive */.F)("up", "lg");
    const isNavHorizontal = settings.themeLayout === "horizontal";
    const isNavMini = settings.themeLayout === "mini";
    if (isNavHorizontal) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            component: "main",
            sx: {
                minHeight: 1,
                display: "flex",
                flexDirection: "column",
                pt: `${config_layout/* HEADER */.y.H_MOBILE + 24}px`,
                pb: 10,
                ...lgUp && {
                    pt: `${config_layout/* HEADER */.y.H_MOBILE * 2 + 40}px`,
                    pb: 15
                }
            },
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "main",
        sx: {
            flexGrow: 1,
            minHeight: 1,
            display: "flex",
            flexDirection: "column",
            py: `${config_layout/* HEADER */.y.H_MOBILE + SPACING}px`,
            ...lgUp && {
                px: 2,
                py: `${config_layout/* HEADER */.y.H_DESKTOP + SPACING}px`,
                width: `calc(100% - ${config_layout/* NAV */.w.W_VERTICAL}px)`,
                ...isNavMini && {
                    width: `calc(100% - ${config_layout/* NAV */.w.W_MINI}px)`
                }
            },
            ...sx
        },
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(79536);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(74147);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
// EXTERNAL MODULE: ./src/hooks/use-off-set-top.ts
var use_off_set_top = __webpack_require__(21885);
// EXTERNAL MODULE: ./src/components/logo/index.ts + 1 modules
var logo = __webpack_require__(9162);
// EXTERNAL MODULE: ./src/components/svg-color/index.ts + 1 modules
var svg_color = __webpack_require__(99066);
// EXTERNAL MODULE: ./src/layouts/_common/index.ts + 18 modules
var _common = __webpack_require__(26053);
;// CONCATENATED MODULE: ./src/layouts/dashboard/header.tsx
// @mui






// theme

// hooks


// components



//


function Header({ onOpenNav }) {
    const theme = (0,styles.useTheme)();
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const isNavHorizontal = settings.themeLayout === "horizontal";
    const isNavMini = settings.themeLayout === "mini";
    const lgUp = (0,use_responsive/* useResponsive */.F)("up", "lg");
    const offset = (0,use_off_set_top/* useOffSetTop */.y)(config_layout/* HEADER */.y.H_DESKTOP);
    const offsetTop = offset && !isNavHorizontal;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            lgUp && isNavHorizontal && /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                sx: {
                    mr: 2.5
                }
            }),
            !lgUp && /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: onOpenNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx(svg_color/* default */.Z, {
                    src: "/assets/icons/navbar/ic_menu_item.svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(_common/* Searchbar */.wD, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexGrow: 1,
                direction: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                spacing: {
                    xs: 0.5,
                    sm: 1
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(_common/* LanguagePopover */.T4, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(_common/* NotificationsPopover */.Yr, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(_common/* ContactsPopover */.c3, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(_common/* SettingsButton */.ls, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(_common/* AccountPopover */.x4, {})
                ]
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        sx: {
            height: config_layout/* HEADER */.y.H_MOBILE,
            zIndex: theme.zIndex.appBar + 1,
            ...(0,css/* bgBlur */.Ls)({
                color: theme.palette.background.default
            }),
            transition: theme.transitions.create([
                "height"
            ], {
                duration: theme.transitions.duration.shorter
            }),
            ...lgUp && {
                width: `calc(100% - ${config_layout/* NAV */.w.W_VERTICAL + 1}px)`,
                height: config_layout/* HEADER */.y.H_DESKTOP,
                ...offsetTop && {
                    height: config_layout/* HEADER */.y.H_DESKTOP_OFFSET
                },
                ...isNavHorizontal && {
                    width: 1,
                    bgcolor: "background.default",
                    height: config_layout/* HEADER */.y.H_DESKTOP_OFFSET,
                    borderBottom: `dashed 1px ${theme.palette.divider}`
                },
                ...isNavMini && {
                    width: `calc(100% - ${config_layout/* NAV */.w.W_MINI + 1}px)`
                }
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
            sx: {
                height: 1,
                px: {
                    lg: 5
                }
            },
            children: renderContent
        })
    });
}

// EXTERNAL MODULE: ./src/hooks/use-mocked-user.ts
var use_mocked_user = __webpack_require__(63820);
// EXTERNAL MODULE: ./src/components/nav-section/index.ts + 16 modules
var nav_section = __webpack_require__(79215);
// EXTERNAL MODULE: ./src/layouts/dashboard/config-navigation.tsx
var config_navigation = __webpack_require__(49430);
;// CONCATENATED MODULE: ./src/layouts/dashboard/nav-mini.tsx
// @mui



// theme

// hooks

// components


//



// ----------------------------------------------------------------------
function NavMini() {
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    const navData = (0,config_navigation/* useNavData */.O)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "nav",
        sx: {
            flexShrink: {
                lg: 0
            },
            width: {
                lg: config_layout/* NAV */.w.W_MINI
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(_common/* NavToggleButton */.S_, {
                sx: {
                    top: 22,
                    left: config_layout/* NAV */.w.W_MINI - 12
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                sx: {
                    pb: 2,
                    height: 1,
                    position: "fixed",
                    width: config_layout/* NAV */.w.W_MINI,
                    borderRight: (theme)=>`dashed 1px ${theme.palette.divider}`,
                    ...css/* hideScroll */.O1.x
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                        sx: {
                            mx: "auto",
                            my: 2
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(nav_section/* NavSectionMini */.Hg, {
                        data: navData,
                        config: {
                            currentRole: user?.role || "admin"
                        }
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(20094);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
;// CONCATENATED MODULE: ./src/layouts/dashboard/nav-vertical.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui



// hooks

// hooks

// components




//



function NavVertical({ openNav, onCloseNav }) {
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    const pathname = (0,hooks/* usePathname */.jD)();
    const lgUp = (0,use_responsive/* useResponsive */.F)("up", "lg");
    const navData = (0,config_navigation/* useNavData */.O)();
    (0,react_.useEffect)(()=>{
        if (openNav) {
            onCloseNav();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(scrollbar/* default */.Z, {
        sx: {
            height: 1,
            "& .simplebar-content": {
                height: 1,
                display: "flex",
                flexDirection: "column"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                sx: {
                    mt: 3,
                    ml: 4,
                    mb: 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(nav_section/* NavSectionVertical */.Mr, {
                data: navData,
                config: {
                    currentRole: user?.role || "admin"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    flexGrow: 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(_common/* NavUpgrade */.Q$, {})
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "nav",
        sx: {
            flexShrink: {
                lg: 0
            },
            width: {
                lg: config_layout/* NAV */.w.W_VERTICAL
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(_common/* NavToggleButton */.S_, {}),
            lgUp ? /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                sx: {
                    height: 1,
                    position: "fixed",
                    width: config_layout/* NAV */.w.W_VERTICAL,
                    borderRight: (theme)=>`dashed 1px ${theme.palette.divider}`
                },
                children: renderContent
            }) : /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                open: openNav,
                onClose: onCloseNav,
                PaperProps: {
                    sx: {
                        width: config_layout/* NAV */.w.W_VERTICAL
                    }
                },
                children: renderContent
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/dashboard/nav-horizontal.tsx


// @mui



// theme

// hooks

// components

//



// ----------------------------------------------------------------------
function NavHorizontal() {
    const theme = (0,styles.useTheme)();
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    const navData = (0,config_navigation/* useNavData */.O)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        component: "nav",
        sx: {
            top: config_layout/* HEADER */.y.H_DESKTOP_OFFSET
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                sx: {
                    ...(0,css/* bgBlur */.Ls)({
                        color: theme.palette.background.default
                    })
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(nav_section/* NavSectionHorizontal */.EM, {
                    data: navData,
                    config: {
                        currentRole: user?.role || "admin"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(_common/* HeaderShadow */._s, {})
        ]
    });
}
/* harmony default export */ const nav_horizontal = (/*#__PURE__*/(0,react_.memo)(NavHorizontal));

;// CONCATENATED MODULE: ./src/layouts/dashboard/layout.tsx
// @mui


// hooks


// components

//





function DashboardLayout({ children }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const lgUp = (0,use_responsive/* useResponsive */.F)("up", "lg");
    const nav = (0,use_boolean/* useBoolean */.k)();
    const isHorizontal = settings.themeLayout === "horizontal";
    const isMini = settings.themeLayout === "mini";
    const renderNavMini = /*#__PURE__*/ jsx_runtime_.jsx(NavMini, {});
    const renderHorizontal = /*#__PURE__*/ jsx_runtime_.jsx(nav_horizontal, {});
    const renderNavVertical = /*#__PURE__*/ jsx_runtime_.jsx(NavVertical, {
        openNav: nav.value,
        onCloseNav: nav.onFalse
    });
    if (isHorizontal) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                    onOpenNav: nav.onTrue
                }),
                lgUp ? renderHorizontal : renderNavVertical,
                /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                    children: children
                })
            ]
        });
    }
    if (isMini) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                    onOpenNav: nav.onTrue
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                    sx: {
                        minHeight: 1,
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row"
                        }
                    },
                    children: [
                        lgUp ? renderNavMini : renderNavVertical,
                        /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                            children: children
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                onOpenNav: nav.onTrue
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    minHeight: 1,
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    }
                },
                children: [
                    renderNavVertical,
                    /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                        children: children
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/dashboard/index.ts


;// CONCATENATED MODULE: ./src/app/dashboard/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
// auth

// components

function Layout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(guard/* AuthGuard */.a1, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(DashboardLayout, {
            children: children
        })
    });
}


/***/ }),

/***/ 98154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_loading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86480);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// components

// ----------------------------------------------------------------------
function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_loading_screen__WEBPACK_IMPORTED_MODULE_1__/* .LoadingScreen */ .a, {});
}


/***/ }),

/***/ 45612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a1: () => (/* reexport */ AuthGuard),
  Ak: () => (/* reexport */ GuestGuard),
  jx: () => (/* reexport */ RoleBasedGuard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/auth/hooks/index.ts + 1 modules
var auth_hooks = __webpack_require__(40529);
;// CONCATENATED MODULE: ./src/auth/guard/auth-guard.tsx


// routes


//

// ----------------------------------------------------------------------
const loginPaths = {
    jwt: paths/* paths */.H.auth.jwt.login,
    auth0: paths/* paths */.H.auth.auth0.login,
    amplify: paths/* paths */.H.auth.amplify.login,
    firebase: paths/* paths */.H.auth.firebase.login
};
function AuthGuard({ children }) {
    const router = (0,hooks/* useRouter */.tv)();
    const { authenticated, method } = (0,auth_hooks/* useAuthContext */.E)();
    const [checked, setChecked] = (0,react_.useState)(false);
    const check = (0,react_.useCallback)(()=>{
        if (!authenticated) {
            const searchParams = new URLSearchParams({
                returnTo: window.location.pathname
            }).toString();
            const loginPath = loginPaths[method];
            const href = `${loginPath}?${searchParams}`;
            router.replace(href);
        } else {
            setChecked(true);
        }
    }, [
        authenticated,
        method,
        router
    ]);
    (0,react_.useEffect)(()=>{
        check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!checked) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
}

;// CONCATENATED MODULE: ./src/auth/guard/guest-guard.tsx


// routes


//

function GuestGuard({ children }) {
    const router = (0,hooks/* useRouter */.tv)();
    const searchParams = (0,hooks/* useSearchParams */.lr)();
    const returnTo = searchParams.get("returnTo") || paths/* paths */.H.dashboard.root;
    const { authenticated } = (0,auth_hooks/* useAuthContext */.E)();
    const check = (0,react_.useCallback)(()=>{
        if (authenticated) {
            router.replace(returnTo);
        }
    }, [
        authenticated,
        returnTo,
        router
    ]);
    (0,react_.useEffect)(()=>{
        check();
    }, [
        check
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/hooks/use-mocked-user.ts
var use_mocked_user = __webpack_require__(63820);
// EXTERNAL MODULE: ./src/assets/illustrations/index.ts + 15 modules
var illustrations = __webpack_require__(90310);
// EXTERNAL MODULE: ./src/components/animate/index.ts + 15 modules
var animate = __webpack_require__(22140);
;// CONCATENATED MODULE: ./src/auth/guard/role-based-guard.tsx




// hooks

// assets

// components

function RoleBasedGuard({ hasContent, roles, children, sx }) {
    // Logic here to get current user role
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    // const currentRole = 'user';
    const currentRole = user?.role; // admin;
    if (typeof roles !== "undefined" && !roles.includes(currentRole)) {
        return hasContent ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            component: animate/* MotionContainer */.NM,
            sx: {
                textAlign: "center",
                ...sx
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        sx: {
                            mb: 2
                        },
                        children: "Permission Denied"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "You do not have permission to access this page"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(illustrations/* ForbiddenIllustration */.E, {
                        sx: {
                            height: 260,
                            my: {
                                xs: 5,
                                sm: 10
                            }
                        }
                    })
                })
            ]
        }) : null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            " ",
            children,
            " "
        ]
    });
}

;// CONCATENATED MODULE: ./src/auth/guard/index.ts





/***/ }),

/***/ 65935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $8: () => (/* binding */ _percents),
/* harmony export */   $b: () => (/* binding */ _nativeL),
/* harmony export */   CS: () => (/* binding */ _ratings),
/* harmony export */   D7: () => (/* binding */ _fullAddress),
/* harmony export */   DI: () => (/* binding */ _phoneNumbers),
/* harmony export */   GO: () => (/* binding */ _productNames),
/* harmony export */   Ig: () => (/* binding */ _prices),
/* harmony export */   Jy: () => (/* binding */ _ages),
/* harmony export */   Op: () => (/* binding */ _sentences),
/* harmony export */   PG: () => (/* binding */ _tourNames),
/* harmony export */   Qw: () => (/* binding */ _tags),
/* harmony export */   Vh: () => (/* binding */ _companyNames),
/* harmony export */   YX: () => (/* binding */ _roles),
/* harmony export */   ZV: () => (/* binding */ _id),
/* harmony export */   _v: () => (/* binding */ _nativeS),
/* harmony export */   d3: () => (/* binding */ _lastNames),
/* harmony export */   dr: () => (/* binding */ _jobTitles),
/* harmony export */   f9: () => (/* binding */ _fullNames),
/* harmony export */   he: () => (/* binding */ _taskNames),
/* harmony export */   ih: () => (/* binding */ _nativeM),
/* harmony export */   ji: () => (/* binding */ _descriptions),
/* harmony export */   si: () => (/* binding */ _booleans),
/* harmony export */   wC: () => (/* binding */ _emails),
/* harmony export */   yw: () => (/* binding */ _firstNames),
/* harmony export */   zu: () => (/* binding */ _postTitles)
/* harmony export */ });
// ----------------------------------------------------------------------
const _id = [
    ...Array(40)
].map((_, index)=>`e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`);
const _fullAddress = [
    "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    "1147 Rohan Drive Suite 819 - Burlington, VT / 82021",
    "18605 Thompson Circle Apt. 086 - Idaho Falls, WV / 50337",
    "110 Lamar Station Apt. 730 - Hagerstown, OK / 49808",
    "36901 Elmer Spurs Apt. 762 - Miramar, DE / 92836",
    "2089 Runolfsson Harbors Suite 886 - Chapel Hill, TX / 32827",
    "279 Karolann Ports Apt. 774 - Prescott Valley, WV / 53905",
    "96607 Claire Square Suite 591 - St. Louis Park, HI / 40802",
    "9388 Auer Station Suite 573 - Honolulu, AK / 98024",
    "47665 Adaline Squares Suite 510 - Blacksburg, NE / 53515",
    "989 Vernice Flats Apt. 183 - Billings, NV / 04147",
    "91020 Wehner Locks Apt. 673 - Albany, WY / 68763",
    "585 Candelario Pass Suite 090 - Columbus, LA / 25376",
    "80988 Renner Crest Apt. 000 - Fargo, VA / 24266",
    "28307 Shayne Pike Suite 523 - North Las Vegas, AZ / 28550",
    "205 Farrell Highway Suite 333 - Rock Hill, OK / 63421",
    "253 Kara Motorway Suite 821 - Manchester, SD / 09331",
    "13663 Kiara Oval Suite 606 - Missoula, AR / 44478",
    "8110 Claire Port Apt. 703 - Anchorage, TN / 01753",
    "4642 Demetris Lane Suite 407 - Edmond, AZ / 60888",
    "74794 Asha Flat Suite 890 - Lancaster, OR / 13466",
    "8135 Keeling Pines Apt. 326 - Alexandria, MA / 89442",
    "441 Gibson Shores Suite 247 - Pasco, NM / 60678",
    "4373 Emelia Valley Suite 596 - Columbia, NM / 42586"
];
// ----------------------------------------------------------------------
const _booleans = [
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true
];
// ----------------------------------------------------------------------
const _emails = [
    "nannie_abernathy70@yahoo.com",
    "ashlynn_ohara62@gmail.com",
    "milo.farrell@hotmail.com",
    "violet.ratke86@yahoo.com",
    "letha_lubowitz24@yahoo.com",
    "aditya_greenfelder31@gmail.com",
    "lenna_bergnaum27@hotmail.com",
    "luella.ryan33@gmail.com",
    "joana.simonis84@gmail.com",
    "marjolaine_white94@gmail.com",
    "vergie_block82@hotmail.com",
    "vito.hudson@hotmail.com",
    "tyrel_greenholt@gmail.com",
    "dwight.block85@yahoo.com",
    "mireya13@hotmail.com",
    "dasia_jenkins@hotmail.com",
    "benny89@yahoo.com",
    "dawn.goyette@gmail.com",
    "zella_hickle4@yahoo.com",
    "avery43@hotmail.com",
    "olen_legros@gmail.com",
    "jimmie.gerhold73@hotmail.com",
    "genevieve.powlowski@hotmail.com",
    "louie.kuphal39@gmail.com"
];
// ----------------------------------------------------------------------
const _fullNames = [
    "Jayvion Simon",
    "Lucian Obrien",
    "Deja Brady",
    "Harrison Stein",
    "Reece Chung",
    "Lainey Davidson",
    "Cristopher Cardenas",
    "Melanie Noble",
    "Chase Day",
    "Shawn Manning",
    "Soren Durham",
    "Cortez Herring",
    "Brycen Jimenez",
    "Giana Brandt",
    "Aspen Schmitt",
    "Colten Aguilar",
    "Angelique Morse",
    "Selina Boyer",
    "Lawson Bass",
    "Ariana Lang",
    "Amiah Pruitt",
    "Harold Mcgrath",
    "Esperanza Mcintyre",
    "Mireya Conner"
];
const _firstNames = [
    "Mossie",
    "David",
    "Ebba",
    "Chester",
    "Eula",
    "Jaren",
    "Boyd",
    "Brady",
    "Aida",
    "Anastasia",
    "Gregoria",
    "Julianne",
    "Ila",
    "Elyssa",
    "Lucio",
    "Lewis",
    "Jacinthe",
    "Molly",
    "Brown",
    "Fritz",
    "Keon",
    "Ella",
    "Ken",
    "Whitney"
];
const _lastNames = [
    "Carroll",
    "Simonis",
    "Yost",
    "Hand",
    "Emmerich",
    "Wilderman",
    "Howell",
    "Sporer",
    "Boehm",
    "Morar",
    "Koch",
    "Reynolds",
    "Padberg",
    "Watsica",
    "Upton",
    "Yundt",
    "Pfeffer",
    "Parker",
    "Zulauf",
    "Treutel",
    "McDermott",
    "McDermott",
    "Cruickshank",
    "Parisian"
];
// ----------------------------------------------------------------------
const _prices = [
    83.74,
    97.14,
    68.71,
    85.21,
    52.17,
    25.18,
    43.84,
    60.98,
    98.42,
    53.37,
    72.75,
    56.61,
    64.55,
    77.32,
    60.62,
    79.81,
    93.68,
    47.44,
    76.24,
    92.87,
    72.91,
    20.54,
    94.25,
    37.51
];
const _ratings = [
    4.2,
    3.7,
    4.5,
    3.5,
    0.5,
    3.0,
    2.5,
    2.8,
    4.9,
    3.6,
    2.5,
    1.7,
    3.9,
    2.8,
    4.1,
    4.5,
    2.2,
    3.2,
    0.6,
    1.3,
    3.8,
    3.8,
    3.8,
    2.0
];
const _ages = [
    30,
    26,
    59,
    47,
    29,
    46,
    18,
    56,
    39,
    19,
    45,
    18,
    46,
    56,
    38,
    41,
    44,
    48,
    32,
    45,
    42,
    60,
    33,
    57
];
const _percents = [
    10.1,
    13.6,
    28.2,
    42.1,
    37.2,
    18.5,
    40.1,
    94.8,
    91.4,
    53.0,
    25.4,
    62.9,
    86.6,
    62.4,
    35.4,
    17.6,
    52.0,
    6.8,
    95.3,
    26.6,
    69.9,
    92.1,
    46.2,
    85.6
];
const _nativeS = [
    11,
    10,
    7,
    10,
    12,
    5,
    10,
    1,
    8,
    8,
    10,
    11,
    12,
    8,
    4,
    11,
    8,
    9,
    4,
    9,
    2,
    6,
    3,
    7
];
const _nativeM = [
    497,
    763,
    684,
    451,
    433,
    463,
    951,
    194,
    425,
    435,
    807,
    521,
    538,
    839,
    394,
    269,
    453,
    821,
    364,
    849,
    804,
    776,
    263,
    239
];
const _nativeL = [
    9911,
    1947,
    9124,
    6984,
    8488,
    2034,
    3364,
    8401,
    8996,
    5271,
    8478,
    1139,
    8061,
    3035,
    6733,
    3952,
    2405,
    3127,
    6843,
    4672,
    6995,
    6053,
    5192,
    9686
];
// ----------------------------------------------------------------------
const _phoneNumbers = [
    "365-374-4961",
    "904-966-2836",
    "399-757-9909",
    "692-767-2903",
    "990-588-5716",
    "955-439-2578",
    "226-924-4058",
    "552-917-1454",
    "285-840-9338",
    "306-269-2446",
    "883-373-6253",
    "476-509-8866",
    "201-465-1954",
    "538-295-9408",
    "531-492-6028",
    "981-699-7588",
    "500-268-4826",
    "205-952-3828",
    "222-255-5190",
    "408-439-8033",
    "272-940-8266",
    "812-685-8057",
    "353-801-5212",
    "606-285-8928"
];
// ----------------------------------------------------------------------
const _roles = [
    "HR Manager",
    "Data Analyst",
    "Legal Counsel",
    "UX/UI Designer",
    "Project Manager",
    "Account Manager",
    "Registered Nurse",
    "Business Analyst",
    "Creative Director",
    "Financial Planner",
    "Event Coordinator",
    "Marketing Director",
    "Software Developer",
    "Research Scientist",
    "Content Strategist",
    "Operations Manager",
    "Sales Representative",
    "Supply Chain Analyst",
    "Operations Coordinator",
    "Customer Service Associate",
    "Quality Assurance Specialist",
    "CEO",
    "CFO",
    "CTO"
];
// ----------------------------------------------------------------------
const _postTitles = [
    "10 Essential Tips for Healthy Living",
    "The Ultimate Guide to Productivity Hacks",
    "Exploring the Hidden Gems of [Destination]",
    "How to Master the Art of Public Speaking",
    "The Future of Artificial Intelligence: Trends and Insights",
    "Delicious Recipes for a Vegan Diet",
    "A Beginner's Guide to Investing in Stocks",
    "The Impact of Social Media on Society",
    "10 Must-Visit Destinations for Adventure Travelers",
    "The Benefits of Mindfulness Meditation",
    "The Importance of Mental Health Awareness",
    "Building a Strong Personal Brand: Tips and Strategies",
    "10 Effective Strategies for Digital Marketing Success",
    "Unveiling the Secrets of Successful Entrepreneurs",
    "The Rise of Remote Work and its Impact on the Workforce",
    "The Art of Landscape Photography: Techniques and Inspiration",
    "Understanding Blockchain Technology and its Potential Applications",
    "How to Create Engaging Content for Social Media",
    "The Role of Artificial Intelligence in Healthcare",
    "10 Home Organization Hacks for a Clutter-Free Space",
    "Exploring the History and Culture of [City/Region]",
    "The Power of Positive Thinking: Transform Your Mindset",
    "The Influence of Music on Mood and Emotions",
    "Travel Photography Tips: Capturing Memories Around the World"
];
// ----------------------------------------------------------------------
const _productNames = [
    "Nike Air Force 1 NDESTRUKT",
    "Foundations Matte Flip Flop",
    "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    "Arizona Soft Footbed Sandal",
    "Boston Soft Footbed Sandal",
    "Zoom Freak 2",
    "Gazelle Vintage low-top sneakers",
    "Jordan Delta",
    "Air Jordan XXXV PF",
    "Rod Laver low-top sneakers",
    "Kyrie 7 EP Sisterhood",
    "Pharrell Williams Human Race NMD sneakers",
    "Nike Blazer Low 77 Vintage",
    "ASMC Winter Boot Cold.Rdy",
    "ZX 8000 Lego sneakers",
    "Ultraboost 21 sneakers",
    "2750 Cotu Classic Sneaker",
    "ZX 9000 A-ZX Series sneakers",
    "Madrid Big Buckle Sandal",
    "Chuck 70 Hi Sneaker",
    "Relaxed Adjustable Strap Slingback Sandal",
    "Superturf Adventure X Atmos",
    "Chuck Taylor All Star Lift Sneaker",
    "Run Star Hike Platform Sneaker"
];
// ----------------------------------------------------------------------
const _tourNames = [
    "Adventure Seekers Expedition",
    "Historic Heritage Tour",
    "Culinary Delights Exploration",
    "Nature's Wonders Escapade",
    "Cultural Immersion Journey",
    "Wildlife Safari Expedition",
    "Urban Explorer's City Tour",
    "Coastal Paradise Getaway",
    "Wine Tasting Experience",
    "Spiritual Retreat Tour",
    "Outdoor Adventure Trek",
    "Photography Expedition",
    "Music and Arts Discovery Tour",
    "Wellness and Yoga Retreat",
    "Hidden Gems Discovery Tour",
    "Volcano and Geothermal Exploration",
    "Foodie's Gastronomic Tour",
    "Hiking and Camping Adventure",
    "Architecture and Design Tour",
    "Coastal Cruise and Island Hopping",
    "Scenic Train Ride Experience",
    "Historical Landmarks Expedition",
    "Surfing and Beach Adventure",
    "Nightlife and Entertainment Tour"
];
// ----------------------------------------------------------------------
const _jobTitles = [
    "Software Engineer",
    "Marketing Manager",
    "Financial Analyst",
    "Graphic Designer",
    "Sales Representative",
    "Project Manager",
    "Data Scientist",
    "Human Resources Coordinator",
    "Accountant",
    "Customer Service Representative",
    "Nurse",
    "Product Manager",
    "Operations Manager",
    "Social Media Specialist",
    "Business Development Executive",
    "Content Writer",
    "Web Developer",
    "Electrical Engineer",
    "Research Scientist",
    "Legal Assistant",
    "Chef",
    "Financial Planner",
    "Architect",
    "Event Planner"
];
// ----------------------------------------------------------------------
const _companyNames = [
    "Lueilwitz and Sons",
    "Gleichner, Mueller and Tromp",
    "Nikolaus - Leuschke",
    "Hegmann, Kreiger and Bayer",
    "Grimes Inc",
    "Durgan - Murazik",
    "Altenwerth, Medhurst and Roberts",
    "Raynor Group",
    "Mraz, Donnelly and Collins",
    "Padberg - Bailey",
    "Heidenreich, Stokes and Parker",
    "Pagac and Sons",
    "Rempel, Hand and Herzog",
    "Dare - Treutel",
    "Kihn, Marquardt and Crist",
    "Nolan - Kunde",
    "Wuckert Inc",
    "Dibbert Inc",
    "Goyette and Sons",
    "Feest Group",
    "Bosco and Sons",
    "Bartell - Kovacek",
    "Schimmel - Raynor",
    "Tremblay LLC"
];
// ----------------------------------------------------------------------
const _tags = [
    "Technology",
    "Marketing",
    "Design",
    "Photography",
    "Art",
    "Fashion",
    "Food",
    "Travel",
    "Fitness",
    "Nature",
    "Business",
    "Music",
    "Health",
    "Books",
    "Sports",
    "Film",
    "Education",
    "Motivation",
    "Gaming",
    "Pets",
    "Cooking",
    "Finance",
    "Selfcare",
    "Writing"
];
// ----------------------------------------------------------------------
const _taskNames = [
    "Complete Project Proposal",
    "Conduct Market Research",
    "Design User Interface Mockups",
    "Develop Backend API",
    "Implement Authentication System",
    "Write Test Cases",
    "Perform Database Optimization",
    "Create Content Marketing Plan",
    "Update Website Copy",
    "Conduct A/B Testing",
    "Create Social Media Graphics",
    "Optimize Website Performance",
    "Review Competitor Websites",
    "Implement Payment Gateway Integration",
    "Conduct User Acceptance Testing",
    "Prepare Monthly Sales Report",
    "Enhance SEO Strategy",
    "Conduct Customer Satisfaction Survey",
    "Design Email Newsletter Template",
    "Monitor Server Logs for Errors",
    "Create Training Materials",
    "Plan and Execute Marketing Campaign",
    "Develop Mobile Application",
    "Coordinate Project Meetings"
];
// ----------------------------------------------------------------------
const _sentences = [
    "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
    "She eagerly opened the gift, her eyes sparkling with excitement.",
    "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
    "The aroma of freshly brewed coffee filled the air, awakening my senses.",
    "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
    "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
    "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",
    "The waves crashed against the shore, creating a soothing symphony of sound.",
    "The scent of blooming flowers wafted through the garden, creating a fragrant paradise.",
    "She gazed up at the night sky, marveling at the twinkling stars that dotted the darkness.",
    "The professor delivered a captivating lecture, engaging the students with thought-provoking ideas.",
    "The hiker trekked through the dense forest, guided by the soft glow of sunlight filtering through the trees.",
    "The delicate butterfly gracefully fluttered from flower to flower, sipping nectar with its slender proboscis.",
    "The aroma of freshly baked cookies filled the kitchen, tempting everyone with its irresistible scent.",
    "The majestic waterfall cascaded down the rocks, creating a breathtaking display of nature's power.",
    "The actor delivered a powerful performance, moving the audience to tears with his emotional portrayal.",
    "The book transported me to a magical world, where imagination knew no bounds.",
    "The scent of rain filled the air as dark clouds gathered overhead, promising a refreshing downpour.",
    "The chef skillfully plated the dish, turning simple ingredients into a work of culinary art.",
    "The newborn baby let out a tiny cry, announcing its arrival to the world.",
    "The athlete sprinted across the finish line, arms raised in victory as the crowd erupted in applause.",
    "The ancient ruins stood as a testament to a civilization long gone, their grandeur still awe-inspiring.",
    "The artist dipped the brush into vibrant paint, bringing the canvas to life with bold strokes and vivid colors.",
    "The laughter of children echoed through the playground, filling the atmosphere with pure joy."
];
// ----------------------------------------------------------------------
const _descriptions = [
    `Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.`,
    `Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.`,
    `Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.`,
    `Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.`,
    `Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.`,
    `Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.`,
    `Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.`,
    `Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.`,
    `Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.`,
    `Nam et error exercitationem qui voluptate optio. Officia omnis qui accusantium ipsam qui. Quia sequi nulla perspiciatis optio vero omnis maxime omnis ipsum. Perspiciatis consequuntur asperiores veniam dolores.`,
    `Perspiciatis nulla ut ut ut voluptates totam consectetur eligendi qui. Optio ut cum. Dolorum sapiente qui laborum. Impedit temporibus totam delectus nihil. Voluptatem corrupti rem.`,
    `Distinctio omnis similique omnis eos. Repellat cumque rerum nisi. Reiciendis soluta non ut veniam temporibus. Accusantium et dolorem voluptas harum. Nemo eius voluptate dicta et hic nemo. Dolorem assumenda et beatae molestias sit quo mollitia quis consequatur.`,
    `Sed ut mollitia tempore ipsam et illum doloribus ut. Occaecati ratione veritatis explicabo. Omnis nam omnis sunt placeat tempore accusantium placeat distinctio velit.`,
    `Eum illo dicta et perspiciatis ut blanditiis eos sequi. Ea veritatis aut et voluptas aut. Laborum eos quia tempore a culpa.`,
    `Aut quos quae dolores repudiandae similique perferendis perferendis earum laudantium. Facere placeat natus nobis. Eius vitae ullam dolorem.`,
    `Vero dolorem et voluptatem fugit tempore a quam iure. Fuga consequatur corrupti sunt asperiores vitae. Libero totam repellendus animi debitis illum et sunt officia.`,
    `Cupiditate illum officiis id molestiae. Numquam non molestiae aliquid et natus sed hic. Alias quia explicabo sed corrupti sint. Natus in et odio qui unde facilis quia. Est sit eius laboriosam aliquid non aperiam quia quo corporis.`,
    `Et a ab. Optio aspernatur minus tempora amet vitae consectetur inventore cumque. Sed et omnis. Aspernatur a magnam.`,
    `Ipsum omnis et. Quia ea et autem tempore consequuntur veniam dolorem officiis. Ipsa dicta et ut quidem quia doloremque. Sequi vitae doloremque temporibus. Deserunt incidunt id aperiam itaque natus. Earum sit eaque quas incidunt nihil.`,
    `Quae consequatur reiciendis. Consequatur non optio. Eaque id placeat. Commodi quo officia aut repudiandae reiciendis tempore voluptatem et. Ut accusamus qui itaque maxime aliquam. Fugit ut animi molestiae porro maiores.`,
    `Modi hic asperiores ab cumque quam est aut. Voluptas atque quos molestias. Ut excepturi distinctio ipsam aspernatur sit.`,
    `Sunt totam facilis. Quam commodi voluptatem veniam. Tempora deleniti itaque fugit nihil voluptas.`,
    `Ipsam aliquam velit nobis repellendus officiis aut deserunt id et. Nihil sunt aut dolores aut. Dolores est ipsa quia et laborum quidem laborum accusamus id. Facilis odit quod hic laudantium saepe omnis nisi in sint. Sed cupiditate possimus id.`,
    `Magnam non eveniet optio optio ut aliquid atque. Velit libero aspernatur quis laborum consequatur laudantium. Tempora facere optio fugit accusantium ut. Omnis aspernatur reprehenderit autem esse ut ut enim voluptatibus.`
];


/***/ }),

/***/ 23909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 51404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/app/dashboard/loading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 28979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostDetailsPage),
/* harmony export */   generateStaticParams: () => (/* binding */ generateStaticParams),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_utils_change_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86481);
/* harmony import */ var src_utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53188);
/* harmony import */ var src_sections_blog_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86701);
// utils



// sections

// ----------------------------------------------------------------------
const metadata = {
    title: "Dashboard: Post Details"
};
function PostDetailsPage({ params }) {
    const { title } = params;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections_blog_view__WEBPACK_IMPORTED_MODULE_2__/* .PostDetailsView */ .FB, {
        title: title
    });
}
async function generateStaticParams() {
    const res = await src_utils_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.get(src_utils_axios__WEBPACK_IMPORTED_MODULE_1__/* .endpoints */ .Hv.post.list);
    return res.data.posts.map((post)=>({
            title: (0,src_utils_change_case__WEBPACK_IMPORTED_MODULE_3__/* .paramCase */ .o)(post.title)
        }));
}


/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pY: () => (/* binding */ ASSETS_API),
  E0: () => (/* binding */ HOST_API)
});

// UNUSED EXPORTS: AMPLIFY_API, AUTH0_API, FIREBASE_API, MAPBOX_API, PATH_AFTER_LOGIN

// EXTERNAL MODULE: ./src/utils/change-case.ts
var change_case = __webpack_require__(86481);
// EXTERNAL MODULE: ./src/_mock/assets.ts
var assets = __webpack_require__(65935);
;// CONCATENATED MODULE: ./src/routes/paths.ts
// utils


// ----------------------------------------------------------------------
const MOCK_ID = assets/* _id */.ZV[1];
const MOCK_TITLE = assets/* _postTitles */.zu[2];
const ROOTS = {
    AUTH: "/auth",
    AUTH_DEMO: "/auth-demo",
    DASHBOARD: "/dashboard"
};
// ----------------------------------------------------------------------
const paths = {
    comingSoon: "/coming-soon",
    maintenance: "/maintenance",
    pricing: "/pricing",
    payment: "/payment",
    about: "/about-us",
    contact: "/contact-us",
    faqs: "/faqs",
    expenseCategoryMaster: "/expense-category-master",
    budgeting: "/budgeting",
    // annualExpenseTrends: '/annual-expense-trends',
    page403: "/error/403",
    page404: "/error/404",
    page500: "/error/500",
    components: "/components",
    docs: "https://docs.minimals.cc",
    changelog: "https://docs.minimals.cc/changelog",
    zoneUI: "https://mui.com/store/items/zone-landing-page/",
    minimalUI: "https://mui.com/store/items/minimal-dashboard/",
    freeUI: "https://mui.com/store/items/minimal-dashboard-free/",
    figma: "https://www.figma.com/file/kAYnYYdib0aQPNKZpgJT6J/%5BPreview%5D-Minimal-Web.v5.0.0?type=design&node-id=0%3A1&t=Al4jScQq97Aly0Mn-1",
    product: {
        root: `/product`,
        checkout: `/product/checkout`,
        details: (id)=>`/product/${id}`,
        demo: {
            details: `/product/${MOCK_ID}`
        }
    },
    post: {
        root: `/post`,
        details: (title)=>`/post/${(0,change_case/* paramCase */.o)(title)}`,
        demo: {
            details: `/post/${(0,change_case/* paramCase */.o)(MOCK_TITLE)}`
        }
    },
    // AUTH
    auth: {
        amplify: {
            login: `${ROOTS.AUTH}/amplify/login`,
            verify: `${ROOTS.AUTH}/amplify/verify`,
            register: `${ROOTS.AUTH}/amplify/register`,
            newPassword: `${ROOTS.AUTH}/amplify/new-password`,
            forgotPassword: `${ROOTS.AUTH}/amplify/forgot-password`
        },
        jwt: {
            login: `${ROOTS.AUTH}/jwt/login`,
            register: `${ROOTS.AUTH}/jwt/register`
        },
        firebase: {
            login: `${ROOTS.AUTH}/firebase/login`,
            verify: `${ROOTS.AUTH}/firebase/verify`,
            register: `${ROOTS.AUTH}/firebase/register`,
            forgotPassword: `${ROOTS.AUTH}/firebase/forgot-password`
        },
        auth0: {
            login: `${ROOTS.AUTH}/auth0/login`
        }
    },
    authDemo: {
        classic: {
            login: `${ROOTS.AUTH_DEMO}/classic/login`,
            register: `${ROOTS.AUTH_DEMO}/classic/register`,
            forgotPassword: `${ROOTS.AUTH_DEMO}/classic/forgot-password`,
            newPassword: `${ROOTS.AUTH_DEMO}/classic/new-password`,
            verify: `${ROOTS.AUTH_DEMO}/classic/verify`
        },
        modern: {
            login: `${ROOTS.AUTH_DEMO}/modern/login`,
            register: `${ROOTS.AUTH_DEMO}/modern/register`,
            forgotPassword: `${ROOTS.AUTH_DEMO}/modern/forgot-password`,
            newPassword: `${ROOTS.AUTH_DEMO}/modern/new-password`,
            verify: `${ROOTS.AUTH_DEMO}/modern/verify`
        }
    },
    // DASHBOARD
    dashboard: {
        root: ROOTS.DASHBOARD,
        mail: `${ROOTS.DASHBOARD}/mail`,
        chat: `${ROOTS.DASHBOARD}/chat`,
        blank: `${ROOTS.DASHBOARD}/blank`,
        kanban: `${ROOTS.DASHBOARD}/kanban`,
        calendar: `${ROOTS.DASHBOARD}/calendar`,
        fileManager: `${ROOTS.DASHBOARD}/file-manager`,
        permission: `${ROOTS.DASHBOARD}/permission`,
        general: {
            app: `${ROOTS.DASHBOARD}/app`,
            ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
            analytics: `${ROOTS.DASHBOARD}/analytics`,
            banking: `${ROOTS.DASHBOARD}/banking`,
            booking: `${ROOTS.DASHBOARD}/booking`,
            file: `${ROOTS.DASHBOARD}/file`
        },
        user: {
            root: `${ROOTS.DASHBOARD}/user`,
            new: `${ROOTS.DASHBOARD}/user/new`,
            list: `${ROOTS.DASHBOARD}/user/list`,
            cards: `${ROOTS.DASHBOARD}/user/cards`,
            profile: `${ROOTS.DASHBOARD}/user/profile`,
            account: `${ROOTS.DASHBOARD}/user/account`,
            edit: (id)=>`${ROOTS.DASHBOARD}/user/${id}/edit`,
            demo: {
                edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`
            }
        },
        product: {
            root: `${ROOTS.DASHBOARD}/product`,
            new: `${ROOTS.DASHBOARD}/product/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/product/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/product/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/product/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/product/${MOCK_ID}/edit`
            }
        },
        invoice: {
            root: `${ROOTS.DASHBOARD}/invoice`,
            new: `${ROOTS.DASHBOARD}/invoice/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/invoice/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/invoice/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}/edit`
            }
        },
        post: {
            root: `${ROOTS.DASHBOARD}/post`,
            new: `${ROOTS.DASHBOARD}/post/new`,
            details: (title)=>`${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(title)}`,
            edit: (title)=>`${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(title)}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(MOCK_TITLE)}`,
                edit: `${ROOTS.DASHBOARD}/post/${(0,change_case/* paramCase */.o)(MOCK_TITLE)}/edit`
            }
        },
        order: {
            root: `${ROOTS.DASHBOARD}/order`,
            details: (id)=>`${ROOTS.DASHBOARD}/order/${id}`,
            demo: {
                details: `${ROOTS.DASHBOARD}/order/${MOCK_ID}`
            }
        },
        job: {
            root: `${ROOTS.DASHBOARD}/job`,
            new: `${ROOTS.DASHBOARD}/job/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/job/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/job/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/job/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/job/${MOCK_ID}/edit`
            }
        },
        tour: {
            root: `${ROOTS.DASHBOARD}/tour`,
            new: `${ROOTS.DASHBOARD}/tour/new`,
            details: (id)=>`${ROOTS.DASHBOARD}/tour/${id}`,
            edit: (id)=>`${ROOTS.DASHBOARD}/tour/${id}/edit`,
            demo: {
                details: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}`,
                edit: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}/edit`
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/config-global.ts
// routes

// API
// ----------------------------------------------------------------------
const HOST_API = "https://api-dev-minimal-v510.vercel.app";
const ASSETS_API = "https://api-dev-minimal-v510.vercel.app";
const FIREBASE_API = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
const AMPLIFY_API = {
    userPoolId: "",
    userPoolWebClientId: "",
    region: ""
};
const AUTH0_API = {
    clientId: "",
    domain: "",
    callbackUrl: ""
};
const MAPBOX_API = (/* unused pure expression or super */ null && (""));
// ROOT PATH AFTER LOGIN SUCCESSFUL
const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'


/***/ }),

/***/ 53188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hv: () => (/* binding */ endpoints),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export fetcher */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48760);
/* harmony import */ var src_config_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9090);

// config

// ----------------------------------------------------------------------
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.create({
    baseURL: src_config_global__WEBPACK_IMPORTED_MODULE_0__/* .HOST_API */ .E0
});
axiosInstance.interceptors.response.use((res)=>res, (error)=>Promise.reject(error.response && error.response.data || "Something went wrong"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);
// ----------------------------------------------------------------------
const fetcher = async (args)=>{
    const [url, config] = Array.isArray(args) ? args : [
        args
    ];
    const res = await axiosInstance.get(url, {
        ...config
    });
    return res.data;
};
// ----------------------------------------------------------------------
const endpoints = {
    chat: "/api/chat",
    kanban: "/api/kanban",
    calendar: "/api/calendar",
    auth: {
        me: "/api/auth/me",
        login: "/api/auth/login",
        register: "/api/auth/register"
    },
    mail: {
        list: "/api/mail/list",
        details: "/api/mail/details",
        labels: "/api/mail/labels"
    },
    post: {
        list: "/api/post/list",
        details: "/api/post/details",
        latest: "/api/post/latest",
        search: "/api/post/search"
    },
    product: {
        list: "/api/product/list",
        details: "/api/product/details",
        search: "/api/product/search"
    }
};


/***/ }),

/***/ 86481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ paramCase)
/* harmony export */ });
/* unused harmony export snakeCase */
function paramCase(str) {
    return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
function snakeCase(str) {
    return str.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8071,6566,8111,1276,7782,6017,2870,9177,413,4724,449,8079,6267,569,4622,8897,298,2865,5915,6186,6209,1857,3610,6801,1820,1723,1853,7146,5175,9428,9189,7798], () => (__webpack_exec__(36401)));
module.exports = __webpack_exports__;

})();