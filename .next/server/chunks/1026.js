exports.id = 1026;
exports.ids = [1026];
exports.modules = {

/***/ 74401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.generateColumnGap = generateColumnGap;
exports.generateDirection = generateDirection;
exports.generateGrid = generateGrid;
exports.generateRowGap = generateRowGap;
exports.resolveSpacingClasses = resolveSpacingClasses;
exports.resolveSpacingStyles = resolveSpacingStyles;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _system = __webpack_require__(19659);
var _base = __webpack_require__(93832);
var _requirePropFactory = _interopRequireDefault(__webpack_require__(44114));
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _useTheme = _interopRequireDefault(__webpack_require__(48650));
var _GridContext = _interopRequireDefault(__webpack_require__(86174));
var _gridClasses = _interopRequireWildcard(__webpack_require__(49966));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getOffset(val) {
  const parse = parseFloat(val);
  return `${parse}${String(val).replace(String(parse), '') || 'px'}`;
}
function generateGrid({
  theme,
  ownerState
}) {
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    // Use side effect over immutability for better performance.
    let styles = {};
    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }
    if (!size) {
      return globalStyles;
    }
    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    } else if (size === 'auto') {
      styles = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    } else {
      const columnsBreakpointValues = (0, _system.unstable_resolveBreakpointValues)({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
      if (columnValue === undefined || columnValue === null) {
        return globalStyles;
      }
      // Keep 7 significant numbers.
      const width = `${Math.round(size / columnValue * 10e7) / 10e5}%`;
      let more = {};
      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);
        if (themeSpacing !== '0px') {
          const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      }

      // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
      styles = (0, _extends2.default)({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    }

    // No need for a media query for the first size.
    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
    return globalStyles;
  }, {});
}
function generateDirection({
  theme,
  ownerState
}) {
  const directionValues = (0, _system.unstable_resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return (0, _system.handleBreakpoints)({
    theme
  }, directionValues, propValue => {
    const output = {
      flexDirection: propValue
    };
    if (propValue.indexOf('column') === 0) {
      output[`& > .${_gridClasses.default.item}`] = {
        maxWidth: 'none'
      };
    }
    return output;
  });
}

/**
 * Extracts zero value breakpoint keys before a non-zero value breakpoint key.
 * @example { xs: 0, sm: 0, md: 2, lg: 0, xl: 0 } or [0, 0, 2, 0, 0]
 * @returns [xs, sm]
 */
function extractZeroValueBreakpointKeys({
  breakpoints,
  values
}) {
  let nonZeroKey = '';
  Object.keys(values).forEach(key => {
    if (nonZeroKey !== '') {
      return;
    }
    if (values[key] !== 0) {
      nonZeroKey = key;
    }
  });
  const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
    return breakpoints[a] - breakpoints[b];
  });
  return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap({
  theme,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles = {};
  if (container && rowSpacing !== 0) {
    const rowSpacingValues = (0, _system.unstable_resolveBreakpointValues)({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof rowSpacingValues === 'object') {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: rowSpacingValues
      });
    }
    styles = (0, _system.handleBreakpoints)({
      theme
    }, rowSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK;
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== '0px') {
        return {
          marginTop: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses.default.item}`]: {
            paddingTop: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
        return {};
      }
      return {
        marginTop: 0,
        [`& > .${_gridClasses.default.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return styles;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles = {};
  if (container && columnSpacing !== 0) {
    const columnSpacingValues = (0, _system.unstable_resolveBreakpointValues)({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof columnSpacingValues === 'object') {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: columnSpacingValues
      });
    }
    styles = (0, _system.handleBreakpoints)({
      theme
    }, columnSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK2;
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== '0px') {
        return {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses.default.item}`]: {
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
        return {};
      }
      return {
        width: '100%',
        marginLeft: 0,
        [`& > .${_gridClasses.default.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return styles;
}
function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
  // undefined/null or `spacing` <= 0
  if (!spacing || spacing <= 0) {
    return [];
  }
  // in case of string/number `spacing`
  if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
    return [styles[`spacing-xs-${String(spacing)}`]];
  }
  // in case of object `spacing`
  const spacingStyles = [];
  breakpoints.forEach(breakpoint => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
    }
  });
  return spacingStyles;
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
const GridRoot = (0, _styled.default)('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      container,
      direction,
      item,
      spacing,
      wrap,
      zeroMinWidth,
      breakpoints
    } = ownerState;
    let spacingStyles = [];

    // in case of grid item
    if (container) {
      spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
    }
    const breakpointsStyles = [];
    breakpoints.forEach(breakpoint => {
      const value = ownerState[breakpoint];
      if (value) {
        breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
      }
    });
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== 'row' && styles[`direction-xs-${String(direction)}`], wrap !== 'wrap' && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
  }
})(({
  ownerState
}) => (0, _extends2.default)({
  boxSizing: 'border-box'
}, ownerState.container && {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
}, ownerState.item && {
  margin: 0 // For instance, it's useful when used with a `figure` element.
}, ownerState.zeroMinWidth && {
  minWidth: 0
}, ownerState.wrap !== 'wrap' && {
  flexWrap: ownerState.wrap
}), generateDirection, generateRowGap, generateColumnGap, generateGrid);
function resolveSpacingClasses(spacing, breakpoints) {
  // undefined/null or `spacing` <= 0
  if (!spacing || spacing <= 0) {
    return [];
  }
  // in case of string/number `spacing`
  if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
    return [`spacing-xs-${String(spacing)}`];
  }
  // in case of object `spacing`
  const classes = [];
  breakpoints.forEach(breakpoint => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      const className = `spacing-${breakpoint}-${String(value)}`;
      classes.push(className);
    }
  });
  return classes;
}
const useUtilityClasses = ownerState => {
  const {
    classes,
    container,
    direction,
    item,
    spacing,
    wrap,
    zeroMinWidth,
    breakpoints
  } = ownerState;
  let spacingClasses = [];

  // in case of grid item
  if (container) {
    spacingClasses = resolveSpacingClasses(spacing, breakpoints);
  }
  const breakpointsClasses = [];
  breakpoints.forEach(breakpoint => {
    const value = ownerState[breakpoint];
    if (value) {
      breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
    }
  });
  const slots = {
    root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', ...spacingClasses, direction !== 'row' && `direction-xs-${String(direction)}`, wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
  };
  return (0, _base.unstable_composeClasses)(slots, _gridClasses.getGridUtilityClass, classes);
};
const Grid = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
  const themeProps = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiGrid'
  });
  const {
    breakpoints
  } = (0, _useTheme.default)();
  const props = (0, _system.unstable_extendSxProp)(themeProps);
  const {
      className,
      columns: columnsProp,
      columnSpacing: columnSpacingProp,
      component = 'div',
      container = false,
      direction = 'row',
      item = false,
      rowSpacing: rowSpacingProp,
      spacing = 0,
      wrap = 'wrap',
      zeroMinWidth = false
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = React.useContext(_GridContext.default);

  // columns set with default breakpoint unit of 12
  const columns = container ? columnsProp || 12 : columnsContext;
  const breakpointsValues = {};
  const otherFiltered = (0, _extends2.default)({}, other);
  breakpoints.keys.forEach(breakpoint => {
    if (other[breakpoint] != null) {
      breakpointsValues[breakpoint] = other[breakpoint];
      delete otherFiltered[breakpoint];
    }
  });
  const ownerState = (0, _extends2.default)({}, props, {
    columns,
    container,
    direction,
    item,
    rowSpacing,
    columnSpacing,
    wrap,
    zeroMinWidth,
    spacing
  }, breakpointsValues, {
    breakpoints: breakpoints.keys
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GridContext.default.Provider, {
    value: columns,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(GridRoot, (0, _extends2.default)({
      ownerState: ownerState,
      className: (0, _clsx.default)(classes.root, className),
      as: component,
      ref: ref
    }, otherFiltered))
  });
});
 false ? 0 : void 0;
if (false) {}
var _default = Grid;
exports["default"] = _default;

/***/ }),

/***/ 86174:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
const GridContext = /*#__PURE__*/React.createContext();
if (false) {}
var _default = GridContext;
exports["default"] = _default;

/***/ }),

/***/ 49966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getGridUtilityClass = getGridUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getGridUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiGrid', slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = (0, _utils.unstable_generateUtilityClasses)('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth',
// spacings
...SPACINGS.map(spacing => `spacing-xs-${spacing}`),
// direction values
...DIRECTIONS.map(direction => `direction-xs-${direction}`),
// wrap values
...WRAPS.map(wrap => `wrap-xs-${wrap}`),
// grid sizes for all breakpoints
...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);
var _default = gridClasses;
exports["default"] = _default;

/***/ }),

/***/ 21971:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  gridClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Grid.default;
  }
}));
Object.defineProperty(exports, "gridClasses", ({
  enumerable: true,
  get: function () {
    return _gridClasses.default;
  }
}));
var _Grid = _interopRequireDefault(__webpack_require__(74401));
var _gridClasses = _interopRequireWildcard(__webpack_require__(49966));
Object.keys(_gridClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _gridClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gridClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 41136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _FocusTrap.default;
  }
}));
var _FocusTrap = _interopRequireDefault(__webpack_require__(55040));

/***/ }),

/***/ 60130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateCalendar = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _utils = __webpack_require__(67392);
var _styles = __webpack_require__(83476);
var _utils2 = __webpack_require__(44268);
var _useCalendarState = __webpack_require__(34276);
var _useUtils = __webpack_require__(72979);
var _PickersFadeTransitionGroup = __webpack_require__(58299);
var _DayCalendar = __webpack_require__(65945);
var _MonthCalendar = __webpack_require__(73085);
var _YearCalendar = __webpack_require__(48642);
var _useViews = __webpack_require__(71469);
var _PickersCalendarHeader = __webpack_require__(99797);
var _dateUtils = __webpack_require__(58759);
var _PickerViewRoot = __webpack_require__(4050);
var _useDefaultReduceAnimations = __webpack_require__(90370);
var _dateCalendarClasses = __webpack_require__(54854);
var _useValueWithTimezone = __webpack_require__(42736);
var _valueManagers = __webpack_require__(24981);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    viewTransitionContainer: ['viewTransitionContainer']
  };
  return (0, _utils2.unstable_composeClasses)(slots, _dateCalendarClasses.getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  const defaultReduceAnimations = (0, _useDefaultReduceAnimations.useDefaultReduceAnimations)();
  const themeProps = (0, _styles.useThemeProps)({
    props,
    name
  });
  return (0, _extends2.default)({}, themeProps, {
    loading: themeProps.loading ?? false,
    disablePast: themeProps.disablePast ?? false,
    disableFuture: themeProps.disableFuture ?? false,
    openTo: themeProps.openTo ?? 'day',
    views: themeProps.views ?? ['year', 'day'],
    reduceAnimations: themeProps.reduceAnimations ?? defaultReduceAnimations,
    renderLoading: themeProps.renderLoading ?? (() => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: "..."
    })),
    minDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const DateCalendarRoot = (0, _styles.styled)(_PickerViewRoot.PickerViewRoot, {
  name: 'MuiDateCalendar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'column'
});
const DateCalendarViewTransitionContainer = (0, _styles.styled)(_PickersFadeTransitionGroup.PickersFadeTransitionGroup, {
  name: 'MuiDateCalendar',
  slot: 'ViewTransitionContainer',
  overridesResolver: (props, styles) => styles.viewTransitionContainer
})({});
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [DateCalendar API](https://mui.com/x/api/date-pickers/date-calendar/)
 */
const DateCalendar = /*#__PURE__*/React.forwardRef(function DateCalendar(inProps, ref) {
  const utils = (0, _useUtils.useUtils)();
  const id = (0, _utils2.unstable_useId)();
  const props = useDateCalendarDefaultizedProps(inProps, 'MuiDateCalendar');
  const {
      autoFocus,
      onViewChange,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableFuture,
      disablePast,
      defaultCalendarMonth,
      onChange,
      onYearChange,
      onMonthChange,
      reduceAnimations,
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      view: inView,
      views,
      openTo,
      className,
      disabled,
      readOnly,
      minDate,
      maxDate,
      disableHighlightToday,
      focusedView: inFocusedView,
      onFocusedViewChange,
      showDaysOutsideCurrentMonth,
      fixedWeekNumber,
      dayOfWeekFormatter,
      components,
      componentsProps,
      slots,
      slotProps,
      loading,
      renderLoading,
      displayWeekNumber,
      yearsPerRow,
      monthsPerRow,
      timezone: timezoneProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    value,
    handleValueChange,
    timezone
  } = (0, _useValueWithTimezone.useControlledValueWithTimezone)({
    name: 'DateCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: _valueManagers.singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = (0, _useViews.useViews)({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    changeFocusedDay,
    changeMonth,
    handleChangeMonth,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = (0, _useCalendarState.useCalendarState)({
    value,
    defaultCalendarMonth,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone
  });

  // When disabled, limit the view to the selected date
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = slots?.calendarHeader ?? components?.CalendarHeader ?? _PickersCalendarHeader.PickersCalendarHeader;
  const calendarHeaderProps = (0, _utils.useSlotProps)({
    elementType: CalendarHeader,
    externalSlotProps: slotProps?.calendarHeader ?? componentsProps?.calendarHeader,
    additionalProps: {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: (newMonth, direction) => handleChangeMonth({
        newMonth,
        direction
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      timezone,
      labelId: gridLabelId,
      slots,
      slotProps
    },
    ownerState: props
  });
  const handleDateMonthChange = (0, _utils2.unstable_useEventCallback)(newDate => {
    const startOfMonth = utils.startOfMonth(newDate);
    const endOfMonth = utils.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? (0, _dateUtils.findClosestEnabledDate)({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, 'finish');
      onMonthChange?.(startOfMonth);
    } else {
      goToNextView();
      changeMonth(startOfMonth);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleDateYearChange = (0, _utils2.unstable_useEventCallback)(newDate => {
    const startOfYear = utils.startOfYear(newDate);
    const endOfYear = utils.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? (0, _dateUtils.findClosestEnabledDate)({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, 'finish');
      onYearChange?.(closestEnabledDate);
    } else {
      goToNextView();
      changeMonth(startOfYear);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleSelectedDayChange = (0, _utils2.unstable_useEventCallback)(day => {
    if (day) {
      // If there is a date already selected, then we want to keep its time
      return handleValueChange((0, _dateUtils.mergeDateAndTime)(utils, day, value ?? referenceDate), 'finish');
    }
    return handleValueChange(day, 'finish');
  });
  React.useEffect(() => {
    if (value != null && utils.isValid(value)) {
      changeMonth(value);
    }
  }, [value]); // eslint-disable-line

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone
  };
  const prevOpenViewRef = React.useRef(view);
  React.useEffect(() => {
    // If the view change and the focus was on the previous view
    // Then we update the focus.
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = React.useMemo(() => [value], [value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateCalendarRoot, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CalendarHeader, (0, _extends2.default)({}, calendarHeaderProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(DateCalendarViewTransitionContainer, {
      reduceAnimations: reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState: ownerState,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [view === 'year' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_YearCalendar.YearCalendar, (0, _extends2.default)({}, baseDateValidationProps, commonViewProps, {
          value: value,
          onChange: handleDateYearChange,
          shouldDisableYear: shouldDisableYear,
          hasFocus: hasFocus,
          onFocusedViewChange: isViewFocused => setFocusedView('year', isViewFocused),
          yearsPerRow: yearsPerRow,
          referenceDate: referenceDate
        })), view === 'month' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MonthCalendar.MonthCalendar, (0, _extends2.default)({}, baseDateValidationProps, commonViewProps, {
          hasFocus: hasFocus,
          className: className,
          value: value,
          onChange: handleDateMonthChange,
          shouldDisableMonth: shouldDisableMonth,
          onFocusedViewChange: isViewFocused => setFocusedView('month', isViewFocused),
          monthsPerRow: monthsPerRow,
          referenceDate: referenceDate
        })), view === 'day' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DayCalendar.DayCalendar, (0, _extends2.default)({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
          onFocusedDayChange: changeFocusedDay,
          reduceAnimations: reduceAnimations,
          selectedDays: selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate: shouldDisableDate,
          shouldDisableMonth: shouldDisableMonth,
          shouldDisableYear: shouldDisableYear,
          hasFocus: hasFocus,
          onFocusedViewChange: isViewFocused => setFocusedView('day', isViewFocused),
          gridLabelId: gridLabelId,
          showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
          fixedWeekNumber: fixedWeekNumber,
          dayOfWeekFormatter: dayOfWeekFormatter,
          displayWeekNumber: displayWeekNumber,
          components: components,
          componentsProps: componentsProps,
          slots: slots,
          slotProps: slotProps,
          loading: loading,
          renderLoading: renderLoading
        }))]
      })
    })]
  }));
});
exports.DateCalendar = DateCalendar;
 false ? 0 : void 0;

/***/ }),

/***/ 65945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DayCalendar = DayCalendar;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _Typography = _interopRequireDefault(__webpack_require__(33987));
var _utils = __webpack_require__(67392);
var _styles = __webpack_require__(83476);
var _utils2 = __webpack_require__(44268);
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _PickersDay = __webpack_require__(59392);
var _useUtils = __webpack_require__(72979);
var _dimensions = __webpack_require__(78774);
var _PickersSlideTransition = __webpack_require__(37497);
var _useIsDateDisabled = __webpack_require__(7547);
var _dateUtils = __webpack_require__(58759);
var _dayCalendarClasses = __webpack_require__(87859);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"],
  _excluded2 = ["ownerState"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    header: ['header'],
    weekDayLabel: ['weekDayLabel'],
    loadingContainer: ['loadingContainer'],
    slideTransition: ['slideTransition'],
    monthContainer: ['monthContainer'],
    weekContainer: ['weekContainer'],
    weekNumberLabel: ['weekNumberLabel'],
    weekNumber: ['weekNumber']
  };
  return (0, _utils2.unstable_composeClasses)(slots, _dayCalendarClasses.getDayCalendarUtilityClass, classes);
};
const defaultDayOfWeekFormatter = day => day.charAt(0).toUpperCase();
const weeksContainerHeight = (_dimensions.DAY_SIZE + _dimensions.DAY_MARGIN * 2) * 6;
const PickersCalendarDayHeader = (0, _styles.styled)('div', {
  name: 'MuiDayCalendar',
  slot: 'Header',
  overridesResolver: (_, styles) => styles.header
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
const PickersCalendarWeekDayLabel = (0, _styles.styled)(_Typography.default, {
  name: 'MuiDayCalendar',
  slot: 'WeekDayLabel',
  overridesResolver: (_, styles) => styles.weekDayLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: '0 2px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: (theme.vars || theme).palette.text.secondary
}));
const PickersCalendarWeekNumberLabel = (0, _styles.styled)(_Typography.default, {
  name: 'MuiDayPicker',
  slot: 'WeekNumberLabel',
  overridesResolver: (_, styles) => styles.weekNumberLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: '0 2px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.text.disabled
}));
const PickersCalendarWeekNumber = (0, _styles.styled)(_Typography.default, {
  name: 'MuiDayPicker',
  slot: 'WeekNumber',
  overridesResolver: (_, styles) => styles.weekNumber
})(({
  theme
}) => (0, _extends2.default)({}, theme.typography.caption, {
  width: _dimensions.DAY_SIZE,
  height: _dimensions.DAY_SIZE,
  padding: 0,
  margin: `0 ${_dimensions.DAY_MARGIN}px`,
  color: theme.palette.text.disabled,
  fontSize: '0.75rem',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex'
}));
const PickersCalendarLoadingContainer = (0, _styles.styled)('div', {
  name: 'MuiDayCalendar',
  slot: 'LoadingContainer',
  overridesResolver: (_, styles) => styles.loadingContainer
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: weeksContainerHeight
});
const PickersCalendarSlideTransition = (0, _styles.styled)(_PickersSlideTransition.PickersSlideTransition, {
  name: 'MuiDayCalendar',
  slot: 'SlideTransition',
  overridesResolver: (_, styles) => styles.slideTransition
})({
  minHeight: weeksContainerHeight
});
const PickersCalendarWeekContainer = (0, _styles.styled)('div', {
  name: 'MuiDayCalendar',
  slot: 'MonthContainer',
  overridesResolver: (_, styles) => styles.monthContainer
})({
  overflow: 'hidden'
});
const PickersCalendarWeek = (0, _styles.styled)('div', {
  name: 'MuiDayCalendar',
  slot: 'WeekContainer',
  overridesResolver: (_, styles) => styles.weekContainer
})({
  margin: `${_dimensions.DAY_MARGIN}px 0`,
  display: 'flex',
  justifyContent: 'center'
});
function WrappedDay(_ref) {
  let {
      parentProps,
      day,
      focusableDay,
      selectedDays,
      isDateDisabled,
      currentMonthNumber,
      isViewFocused
    } = _ref,
    other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    components,
    componentsProps,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const utils = (0, _useUtils.useUtils)();
  const now = (0, _useUtils.useNow)(timezone);
  const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
  const isSelected = selectedDays.some(selectedDay => utils.isSameDay(selectedDay, day));
  const isToday = utils.isSameDay(day, now);
  const Day = slots?.day ?? components?.Day ?? _PickersDay.PickersDay;
  // We don't want to pass to ownerState down, to avoid re-rendering all the day whenever a prop changes.
  const _useSlotProps = (0, _utils.useSlotProps)({
      elementType: Day,
      externalSlotProps: slotProps?.day ?? componentsProps?.day,
      additionalProps: (0, _extends2.default)({
        disableHighlightToday,
        showDaysOutsideCurrentMonth,
        role: 'gridcell',
        isAnimating: isMonthSwitchingAnimating,
        // it is used in date range dragging logic by accessing `dataset.timestamp`
        'data-timestamp': utils.toJsDate(day).valueOf()
      }, other),
      ownerState: (0, _extends2.default)({}, parentProps, {
        day,
        selected: isSelected
      })
    }),
    dayProps = (0, _objectWithoutPropertiesLoose2.default)(_useSlotProps, _excluded2);
  const isDisabled = React.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const outsideCurrentMonth = React.useMemo(() => utils.getMonth(day) !== currentMonthNumber, [utils, day, currentMonthNumber]);
  const isFirstVisibleCell = React.useMemo(() => {
    const startOfMonth = utils.startOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, startOfMonth);
    }
    return utils.isSameDay(day, utils.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  const isLastVisibleCell = React.useMemo(() => {
    const endOfMonth = utils.endOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, endOfMonth);
    }
    return utils.isSameDay(day, utils.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Day, (0, _extends2.default)({}, dayProps, {
    day: day,
    disabled: isDisabled,
    autoFocus: isViewFocused && isFocusableDay,
    today: isToday,
    outsideCurrentMonth: outsideCurrentMonth,
    isFirstVisibleCell: isFirstVisibleCell,
    isLastVisibleCell: isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? 'date' : undefined
  }));
}

/**
 * @ignore - do not document.
 */
function DayCalendar(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDayCalendar'
  });
  const {
    onFocusedDayChange,
    className,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = defaultDayOfWeekFormatter,
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    autoFocus,
    timezone
  } = props;
  const now = (0, _useUtils.useNow)(timezone);
  const utils = (0, _useUtils.useUtils)();
  const classes = useUtilityClasses(props);
  const theme = (0, _styles.useTheme)();
  const isRTL = theme.direction === 'rtl';
  const isDateDisabled = (0, _useIsDateDisabled.useIsDateDisabled)({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const localeText = (0, _useUtils.useLocaleText)();
  const [internalHasFocus, setInternalHasFocus] = (0, _utils2.unstable_useControlled)({
    name: 'DayCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const [internalFocusedDay, setInternalFocusedDay] = React.useState(() => focusedDay || now);
  const handleDaySelect = (0, _useEventCallback.default)(day => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = day => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      setInternalFocusedDay(day);
      onFocusedViewChange?.(true);
      setInternalHasFocus(true);
    }
  };
  const handleKeyDown = (0, _useEventCallback.default)((event, day) => {
    switch (event.key) {
      case 'ArrowUp':
        focusDay(utils.addDays(day, -7));
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusDay(utils.addDays(day, 7));
        event.preventDefault();
        break;
      case 'ArrowLeft':
        {
          const newFocusedDayDefault = utils.addDays(day, isRTL ? 1 : -1);
          const nextAvailableMonth = utils.addMonths(day, isRTL ? 1 : -1);
          const closestDayToFocus = (0, _dateUtils.findClosestEnabledDate)({
            utils,
            date: newFocusedDayDefault,
            minDate: isRTL ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
            maxDate: isRTL ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
            isDateDisabled,
            timezone
          });
          focusDay(closestDayToFocus || newFocusedDayDefault);
          event.preventDefault();
          break;
        }
      case 'ArrowRight':
        {
          const newFocusedDayDefault = utils.addDays(day, isRTL ? -1 : 1);
          const nextAvailableMonth = utils.addMonths(day, isRTL ? -1 : 1);
          const closestDayToFocus = (0, _dateUtils.findClosestEnabledDate)({
            utils,
            date: newFocusedDayDefault,
            minDate: isRTL ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
            maxDate: isRTL ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
            isDateDisabled,
            timezone
          });
          focusDay(closestDayToFocus || newFocusedDayDefault);
          event.preventDefault();
          break;
        }
      case 'Home':
        focusDay(utils.startOfWeek(day));
        event.preventDefault();
        break;
      case 'End':
        focusDay(utils.endOfWeek(day));
        event.preventDefault();
        break;
      case 'PageUp':
        focusDay(utils.addMonths(day, 1));
        event.preventDefault();
        break;
      case 'PageDown':
        focusDay(utils.addMonths(day, -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleFocus = (0, _useEventCallback.default)((event, day) => focusDay(day));
  const handleBlur = (0, _useEventCallback.default)((event, day) => {
    if (internalHasFocus && utils.isSameDay(internalFocusedDay, day)) {
      onFocusedViewChange?.(false);
    }
  });
  const currentMonthNumber = utils.getMonth(currentMonth);
  const validSelectedDays = React.useMemo(() => selectedDays.filter(day => !!day).map(day => utils.startOfDay(day)), [utils, selectedDays]);

  // need a new ref whenever the `key` of the transition changes: http://reactcommunity.org/react-transition-group/transition/#Transition-prop-nodeRef.
  const transitionKey = currentMonthNumber;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slideNodeRef = React.useMemo(() => /*#__PURE__*/React.createRef(), [transitionKey]);
  const startOfCurrentWeek = utils.startOfWeek(now);
  const focusableDay = React.useMemo(() => {
    const startOfMonth = utils.startOfMonth(currentMonth);
    const endOfMonth = utils.endOfMonth(currentMonth);
    if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
      return (0, _dateUtils.findClosestEnabledDate)({
        utils,
        date: internalFocusedDay,
        minDate: startOfMonth,
        maxDate: endOfMonth,
        disablePast,
        disableFuture,
        isDateDisabled,
        timezone
      });
    }
    return internalFocusedDay;
  }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils, timezone]);
  const weeksToDisplay = React.useMemo(() => {
    const currentMonthWithTimezone = utils.setTimezone(currentMonth, timezone);
    const toDisplay = utils.getWeekArray(currentMonthWithTimezone);
    let nextMonth = utils.addMonths(currentMonthWithTimezone, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = utils.getWeekArray(nextMonth);
      const hasCommonWeek = utils.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach(week => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = utils.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, utils, timezone]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "grid",
    "aria-labelledby": gridLabelId,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": localeText.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: localeText.calendarWeekNumberHeaderText
      }), utils.getWeekdays().map((day, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersCalendarWeekDayLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i), 'weekday'),
        className: classes.weekDayLabel,
        children: dayOfWeekFormatter?.(day) ?? day
      }, day + i.toString()))]
    }), loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersCalendarSlideTransition, (0, _extends2.default)({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations: reduceAnimations,
      slideDirection: slideDirection,
      className: (0, _clsx.default)(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer
          // fix issue of announcing row 1 as row 2
          // caused by week day labels row
          ,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": localeText.calendarWeekNumberAriaLabelText(utils.getWeekNumber(week[0])),
            children: localeText.calendarWeekNumberText(utils.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedDay, {
            parentProps: props,
            day: day,
            selectedDays: validSelectedDays,
            focusableDay: focusableDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled: isDateDisabled,
            currentMonthNumber: currentMonthNumber,
            isViewFocused: internalHasFocus
            // fix issue of announcing column 1 as column 2 when `displayWeekNumber` is enabled
            ,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}

/***/ }),

/***/ 58299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersFadeTransitionGroup = PickersFadeTransitionGroup;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _Fade = _interopRequireDefault(__webpack_require__(53602));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _reactTransitionGroup = __webpack_require__(65481);
var _pickersFadeTransitionGroupClasses = __webpack_require__(65374);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersFadeTransitionGroupClasses.getPickersFadeTransitionGroupUtilityClass, classes);
};
const animationDuration = 500;
const PickersFadeTransitionGroupRoot = (0, _styles.styled)(_reactTransitionGroup.TransitionGroup, {
  name: 'MuiPickersFadeTransitionGroup',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({
  display: 'block',
  position: 'relative'
});

/**
 * @ignore - do not document.
 */
function PickersFadeTransitionGroup(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersFadeTransitionGroup'
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
  } = props;
  const classes = useUtilityClasses(props);
  if (reduceAnimations) {
    return children;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersFadeTransitionGroupRoot, {
    className: (0, _clsx.default)(classes.root, className),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: animationDuration,
        enter: animationDuration / 2,
        exit: 0
      },
      children: children
    }, transKey)
  });
}

/***/ }),

/***/ 37497:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersSlideTransition = PickersSlideTransition;
exports.slideAnimationDuration = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _reactTransitionGroup = __webpack_require__(65481);
var _pickersSlideTransitionClasses = __webpack_require__(16562);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    slideDirection
  } = ownerState;
  const slots = {
    root: ['root'],
    exit: ['slideExit'],
    enterActive: ['slideEnterActive'],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersSlideTransitionClasses.getPickersSlideTransitionUtilityClass, classes);
};
const slideAnimationDuration = 350;
exports.slideAnimationDuration = slideAnimationDuration;
const PickersSlideTransitionRoot = (0, _styles.styled)(_reactTransitionGroup.TransitionGroup, {
  name: 'MuiPickersSlideTransition',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root, {
    [`.${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideEnter-left']}`]: styles['slideEnter-left']
  }, {
    [`.${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideEnter-right']}`]: styles['slideEnter-right']
  }, {
    [`.${_pickersSlideTransitionClasses.pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${_pickersSlideTransitionClasses.pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: styles['slideExitActiveLeft-left']
  }, {
    [`.${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: styles['slideExitActiveLeft-right']
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create('transform', {
    duration: slideAnimationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    display: 'block',
    position: 'relative',
    overflowX: 'hidden',
    '& > *': {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideEnter-left']}`]: {
      willChange: 'transform',
      transform: 'translate(100%)',
      zIndex: 1
    },
    [`& .${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideEnter-right']}`]: {
      willChange: 'transform',
      transform: 'translate(-100%)',
      zIndex: 1
    },
    [`& .${_pickersSlideTransitionClasses.pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    [`& .${_pickersSlideTransitionClasses.pickersSlideTransitionClasses.slideExit}`]: {
      transform: 'translate(0%)'
    },
    [`& .${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: {
      willChange: 'transform',
      transform: 'translate(-100%)',
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${_pickersSlideTransitionClasses.pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: {
      willChange: 'transform',
      transform: 'translate(100%)',
      transition: slideTransition,
      zIndex: 0
    }
  };
});

/**
 * @ignore - do not document.
 */
function PickersSlideTransition(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersSlideTransition'
  });
  const {
      children,
      className,
      reduceAnimations,
      transKey
      // extracting `classes` from `other`
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const classes = useUtilityClasses(props);
  if (reduceAnimations) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _clsx.default)(classes.root, className),
      children: children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersSlideTransitionRoot, {
    className: (0, _clsx.default)(classes.root, className),
    childFactory: element => /*#__PURE__*/React.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, (0, _extends2.default)({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: slideAnimationDuration,
      classNames: transitionClasses
    }, other, {
      children: children
    }), transKey)
  });
}

/***/ }),

/***/ 54854:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDateCalendarUtilityClass = exports.dateCalendarClasses = void 0;
var _utils = __webpack_require__(44268);
const getDateCalendarUtilityClass = slot => (0, _utils.unstable_generateUtilityClass)('MuiDateCalendar', slot);
exports.getDateCalendarUtilityClass = getDateCalendarUtilityClass;
const dateCalendarClasses = (0, _utils.unstable_generateUtilityClasses)('MuiDateCalendar', ['root', 'viewTransitionContainer']);
exports.dateCalendarClasses = dateCalendarClasses;

/***/ }),

/***/ 87859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDayCalendarUtilityClass = exports.dayPickerClasses = void 0;
var _utils = __webpack_require__(44268);
const getDayCalendarUtilityClass = slot => (0, _utils.unstable_generateUtilityClass)('MuiDayCalendar', slot);
exports.getDayCalendarUtilityClass = getDayCalendarUtilityClass;
const dayPickerClasses = (0, _utils.unstable_generateUtilityClasses)('MuiDayCalendar', ['header', 'weekDayLabel', 'loadingContainer', 'slideTransition', 'monthContainer', 'weekContainer', 'weekNumberLabel', 'weekNumber']);
exports.dayPickerClasses = dayPickerClasses;

/***/ }),

/***/ 32194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  DateCalendar: true,
  getDateCalendarUtilityClass: true,
  dateCalendarClasses: true,
  dayPickerClasses: true,
  pickersFadeTransitionGroupClasses: true,
  pickersSlideTransitionClasses: true
};
Object.defineProperty(exports, "DateCalendar", ({
  enumerable: true,
  get: function () {
    return _DateCalendar.DateCalendar;
  }
}));
Object.defineProperty(exports, "dateCalendarClasses", ({
  enumerable: true,
  get: function () {
    return _dateCalendarClasses.dateCalendarClasses;
  }
}));
Object.defineProperty(exports, "dayPickerClasses", ({
  enumerable: true,
  get: function () {
    return _dayCalendarClasses.dayPickerClasses;
  }
}));
Object.defineProperty(exports, "getDateCalendarUtilityClass", ({
  enumerable: true,
  get: function () {
    return _dateCalendarClasses.getDateCalendarUtilityClass;
  }
}));
Object.defineProperty(exports, "pickersFadeTransitionGroupClasses", ({
  enumerable: true,
  get: function () {
    return _pickersFadeTransitionGroupClasses.pickersFadeTransitionGroupClasses;
  }
}));
Object.defineProperty(exports, "pickersSlideTransitionClasses", ({
  enumerable: true,
  get: function () {
    return _pickersSlideTransitionClasses.pickersSlideTransitionClasses;
  }
}));
var _DateCalendar = __webpack_require__(60130);
var _dateCalendarClasses = __webpack_require__(54854);
var _dayCalendarClasses = __webpack_require__(87859);
var _pickersFadeTransitionGroupClasses = __webpack_require__(65374);
var _pickersSlideTransitionClasses = __webpack_require__(16562);
var _PickersCalendarHeader = __webpack_require__(99797);
Object.keys(_PickersCalendarHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PickersCalendarHeader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PickersCalendarHeader[key];
    }
  });
});

/***/ }),

/***/ 65374:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pickersFadeTransitionGroupClasses = exports.getPickersFadeTransitionGroupUtilityClass = void 0;
var _utils = __webpack_require__(44268);
const getPickersFadeTransitionGroupUtilityClass = slot => (0, _utils.unstable_generateUtilityClass)('MuiPickersFadeTransitionGroup', slot);
exports.getPickersFadeTransitionGroupUtilityClass = getPickersFadeTransitionGroupUtilityClass;
const pickersFadeTransitionGroupClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersFadeTransitionGroup', ['root']);
exports.pickersFadeTransitionGroupClasses = pickersFadeTransitionGroupClasses;

/***/ }),

/***/ 16562:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pickersSlideTransitionClasses = exports.getPickersSlideTransitionUtilityClass = void 0;
var _utils = __webpack_require__(44268);
const getPickersSlideTransitionUtilityClass = slot => (0, _utils.unstable_generateUtilityClass)('MuiPickersSlideTransition', slot);
exports.getPickersSlideTransitionUtilityClass = getPickersSlideTransitionUtilityClass;
const pickersSlideTransitionClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersSlideTransition', ['root', 'slideEnter-left', 'slideEnter-right', 'slideEnterActive', 'slideExit', 'slideExitActiveLeft-left', 'slideExitActiveLeft-right']);
exports.pickersSlideTransitionClasses = pickersSlideTransitionClasses;

/***/ }),

/***/ 34276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCalendarState = exports.createCalendarStateReducer = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _useIsDateDisabled = __webpack_require__(7547);
var _useUtils = __webpack_require__(72979);
var _valueManagers = __webpack_require__(24981);
var _getDefaultReferenceDate = __webpack_require__(95287);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
  switch (action.type) {
    case 'changeMonth':
      return (0, _extends2.default)({}, state, {
        slideDirection: action.direction,
        currentMonth: action.newMonth,
        isMonthSwitchingAnimating: !reduceAnimations
      });
    case 'finishMonthSwitchingAnimation':
      return (0, _extends2.default)({}, state, {
        isMonthSwitchingAnimating: false
      });
    case 'changeFocusedDay':
      {
        if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
          return state;
        }
        const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
        return (0, _extends2.default)({}, state, {
          focusedDay: action.focusedDay,
          isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
          currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
          slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
        });
      }
    default:
      throw new Error('missing support');
  }
};
exports.createCalendarStateReducer = createCalendarStateReducer;
const useCalendarState = params => {
  const {
    value,
    referenceDate: referenceDateProp,
    defaultCalendarMonth,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus = false,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    timezone
  } = params;
  const now = (0, _useUtils.useNow)(timezone);
  const utils = (0, _useUtils.useUtils)();
  const reducerFn = React.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
  const referenceDate = React.useMemo(() => {
    let externalReferenceDate = null;
    if (referenceDateProp) {
      externalReferenceDate = referenceDateProp;
    } else if (defaultCalendarMonth) {
      // For `defaultCalendarMonth`, we just want to keep the month and the year to avoid a behavior change.
      externalReferenceDate = utils.startOfMonth(defaultCalendarMonth);
    }
    return _valueManagers.singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      timezone,
      props: params,
      referenceDate: externalReferenceDate,
      granularity: _getDefaultReferenceDate.SECTION_TYPE_GRANULARITY.day
    });
  }, [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const [calendarState, dispatch] = React.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: value || now,
    currentMonth: utils.startOfMonth(referenceDate),
    slideDirection: 'left'
  });
  const handleChangeMonth = React.useCallback(payload => {
    dispatch((0, _extends2.default)({
      type: 'changeMonth'
    }, payload));
    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = React.useCallback(newDate => {
    const newDateRequested = newDate;
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }
    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? 'left' : 'right'
    });
  }, [calendarState.currentMonth, handleChangeMonth, utils]);
  const isDateDisabled = (0, _useIsDateDisabled.useIsDateDisabled)({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });
  const onMonthSwitchingAnimationEnd = React.useCallback(() => {
    dispatch({
      type: 'finishMonthSwitchingAnimation'
    });
  }, []);
  const changeFocusedDay = (0, _useEventCallback.default)((newFocusedDate, withoutMonthSwitchingAnimation) => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate,
        withoutMonthSwitchingAnimation
      });
    }
  });
  return {
    referenceDate,
    calendarState,
    changeMonth,
    changeFocusedDay,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    handleChangeMonth
  };
};
exports.useCalendarState = useCalendarState;

/***/ }),

/***/ 7547:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIsDateDisabled = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _validateDate = __webpack_require__(43722);
var _useUtils = __webpack_require__(72979);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = (0, _useUtils.useLocalizationContext)();
  return React.useCallback(day => (0, _validateDate.validateDate)({
    adapter,
    value: day,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast,
      timezone
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};
exports.useIsDateDisabled = useIsDateDisabled;

/***/ }),

/***/ 23483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateField = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _TextField = _interopRequireDefault(__webpack_require__(92870));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(67392);
var _useDateField2 = __webpack_require__(91177);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"],
  _excluded2 = ["inputRef"],
  _excluded3 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DateField = /*#__PURE__*/React.forwardRef(function DateField(inProps, ref) {
  const themeProps = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDateField'
  });
  const {
      components,
      componentsProps,
      slots,
      slotProps,
      InputProps,
      inputProps
    } = themeProps,
    other = (0, _objectWithoutPropertiesLoose2.default)(themeProps, _excluded);
  const ownerState = themeProps;
  const TextField = slots?.textField ?? components?.TextField ?? _TextField.default;
  const _useSlotProps = (0, _utils.useSlotProps)({
      elementType: TextField,
      externalSlotProps: slotProps?.textField ?? componentsProps?.textField,
      externalForwardedProps: other,
      ownerState
    }),
    {
      inputRef: externalInputRef
    } = _useSlotProps,
    textFieldProps = (0, _objectWithoutPropertiesLoose2.default)(_useSlotProps, _excluded2);

  // TODO: Remove when mui/material-ui#35088 will be merged
  textFieldProps.inputProps = (0, _extends2.default)({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = (0, _extends2.default)({}, InputProps, textFieldProps.InputProps);
  const _useDateField = (0, _useDateField2.useDateField)({
      props: textFieldProps,
      inputRef: externalInputRef
    }),
    {
      ref: inputRef,
      onPaste,
      onKeyDown,
      inputMode,
      readOnly
    } = _useDateField,
    fieldProps = (0, _objectWithoutPropertiesLoose2.default)(_useDateField, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({
    ref: ref
  }, fieldProps, {
    InputProps: (0, _extends2.default)({}, fieldProps.InputProps, {
      readOnly
    }),
    inputProps: (0, _extends2.default)({}, fieldProps.inputProps, {
      inputMode,
      onPaste,
      onKeyDown,
      ref: inputRef
    })
  }));
});
exports.DateField = DateField;
 false ? 0 : void 0;

/***/ }),

/***/ 51512:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DateField", ({
  enumerable: true,
  get: function () {
    return _DateField.DateField;
  }
}));
Object.defineProperty(exports, "unstable_useDateField", ({
  enumerable: true,
  get: function () {
    return _useDateField.useDateField;
  }
}));
var _DateField = __webpack_require__(23483);
var _useDateField = __webpack_require__(91177);

/***/ }),

/***/ 91177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDateField = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _valueManagers = __webpack_require__(24981);
var _useField = __webpack_require__(3022);
var _validateDate = __webpack_require__(43722);
var _dateUtils = __webpack_require__(58759);
var _useUtils = __webpack_require__(72979);
var _fields = __webpack_require__(52065);
const useDefaultizedDateField = props => {
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  return (0, _extends2.default)({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? utils.formats.keyboardDate,
    minDate: (0, _dateUtils.applyDefaultDate)(utils, props.minDate, defaultDates.minDate),
    maxDate: (0, _dateUtils.applyDefaultDate)(utils, props.maxDate, defaultDates.maxDate)
  });
};
const useDateField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedDateField(inProps);
  const {
    forwardedProps,
    internalProps
  } = (0, _fields.splitFieldInternalAndForwardedProps)(props, 'date');
  return (0, _useField.useField)({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: _valueManagers.singleItemValueManager,
    fieldValueManager: _valueManagers.singleItemFieldValueManager,
    validator: _validateDate.validateDate,
    valueType: 'date'
  });
};
exports.useDateField = useDateField;

/***/ }),

/***/ 96734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DatePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _useMediaQuery = _interopRequireDefault(__webpack_require__(72586));
var _styles = __webpack_require__(83476);
var _DesktopDatePicker = __webpack_require__(81826);
var _MobileDatePicker = __webpack_require__(19107);
var _utils = __webpack_require__(48861);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["desktopModeMediaQuery"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DatePicker = /*#__PURE__*/React.forwardRef(function DatePicker(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDatePicker'
  });
  const {
      desktopModeMediaQuery = _utils.DEFAULT_DESKTOP_MODE_MEDIA_QUERY
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);

  // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)
  const isDesktop = (0, _useMediaQuery.default)(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DesktopDatePicker.DesktopDatePicker, (0, _extends2.default)({
      ref: ref
    }, other));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MobileDatePicker.MobileDatePicker, (0, _extends2.default)({
    ref: ref
  }, other));
});
exports.DatePicker = DatePicker;
 false ? 0 : void 0;

/***/ }),

/***/ 7859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DatePickerToolbar = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _Typography = _interopRequireDefault(__webpack_require__(33987));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _PickersToolbar = __webpack_require__(33598);
var _useUtils = __webpack_require__(72979);
var _datePickerToolbarClasses = __webpack_require__(63015);
var _dateUtils = __webpack_require__(58759);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    title: ['title']
  };
  return (0, _utils.unstable_composeClasses)(slots, _datePickerToolbarClasses.getDatePickerToolbarUtilityClass, classes);
};
const DatePickerToolbarRoot = (0, _styles.styled)(_PickersToolbar.PickersToolbar, {
  name: 'MuiDatePickerToolbar',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({});

/**
 * @ignore - do not document.
 */
const DatePickerToolbarTitle = (0, _styles.styled)(_Typography.default, {
  name: 'MuiDatePickerToolbar',
  slot: 'Title',
  overridesResolver: (_, styles) => styles.title
})(({
  ownerState
}) => (0, _extends2.default)({}, ownerState.isLandscape && {
  margin: 'auto 16px auto auto'
}));
const DatePickerToolbar = /*#__PURE__*/React.forwardRef(function DatePickerToolbar(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDatePickerToolbar'
  });
  const {
      value,
      isLandscape,
      toolbarFormat,
      toolbarPlaceholder = '––',
      views
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _useUtils.useUtils)();
  const localeText = (0, _useUtils.useLocaleText)();
  const classes = useUtilityClasses(props);
  const dateText = React.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    const formatFromViews = (0, _dateUtils.resolveDateFormat)(utils, {
      format: toolbarFormat,
      views
    }, true);
    return utils.formatByString(value, formatFromViews);
  }, [value, toolbarFormat, toolbarPlaceholder, utils, views]);
  const ownerState = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DatePickerToolbarRoot, (0, _extends2.default)({
    ref: ref,
    toolbarTitle: localeText.datePickerToolbarTitle,
    isLandscape: isLandscape,
    className: classes.root
  }, other, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? 'left' : 'center',
      ownerState: ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
exports.DatePickerToolbar = DatePickerToolbar;
 false ? 0 : void 0;

/***/ }),

/***/ 63015:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.datePickerToolbarClasses = void 0;
exports.getDatePickerToolbarUtilityClass = getDatePickerToolbarUtilityClass;
var _utils = __webpack_require__(44268);
function getDatePickerToolbarUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiDatePickerToolbar', slot);
}
const datePickerToolbarClasses = (0, _utils.unstable_generateUtilityClasses)('MuiDatePickerToolbar', ['root', 'title']);
exports.datePickerToolbarClasses = datePickerToolbarClasses;

/***/ }),

/***/ 71026:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "Mt", ({
  enumerable: true,
  get: function () {
    return _DatePicker.DatePicker;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _DatePickerToolbar.DatePickerToolbar;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _datePickerToolbarClasses.datePickerToolbarClasses;
  }
});
var _DatePicker = __webpack_require__(96734);
var _DatePickerToolbar = __webpack_require__(7859);
var _datePickerToolbarClasses = __webpack_require__(63015);

/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDatePickerDefaultizedProps = useDatePickerDefaultizedProps;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _styles = __webpack_require__(83476);
var _useUtils = __webpack_require__(72979);
var _views = __webpack_require__(70681);
var _dateUtils = __webpack_require__(58759);
var _DatePickerToolbar = __webpack_require__(7859);
var _slotsMigration = __webpack_require__(93127);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useDatePickerDefaultizedProps(props, name) {
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  const themeProps = (0, _styles.useThemeProps)({
    props,
    name
  });
  const localeText = React.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return (0, _extends2.default)({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = themeProps.slots ?? (0, _slotsMigration.uncapitalizeObjectKeys)(themeProps.components);
  return (0, _extends2.default)({}, themeProps, {
    localeText
  }, (0, _views.applyDefaultViewProps)({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ['year', 'day'],
    defaultOpenTo: 'day'
  }), {
    disableFuture: themeProps.disableFuture ?? false,
    disablePast: themeProps.disablePast ?? false,
    minDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.maxDate, defaultDates.maxDate),
    slots: (0, _extends2.default)({
      toolbar: _DatePickerToolbar.DatePickerToolbar
    }, slots),
    slotProps: themeProps.slotProps ?? themeProps.componentsProps
  });
}

/***/ }),

/***/ 81332:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DesktopDatePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(67392);
var _valueManagers = __webpack_require__(24981);
var _shared = __webpack_require__(2);
var _internals = __webpack_require__(27206);
var _useDesktopPicker = __webpack_require__(80280);
var _icons = __webpack_require__(41922);
var _DateField = __webpack_require__(51512);
var _extractValidationProps = __webpack_require__(8018);
var _dateViewRenderers = __webpack_require__(66132);
var _dateUtils = __webpack_require__(58759);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DesktopDatePicker = /*#__PURE__*/React.forwardRef(function DesktopDatePicker(inProps, ref) {
  const localeText = (0, _internals.useLocaleText)();
  const utils = (0, _internals.useUtils)();

  // Props with the default values common to all date pickers
  const defaultizedProps = (0, _shared.useDatePickerDefaultizedProps)(inProps, 'MuiDesktopDatePicker');
  const viewRenderers = (0, _extends2.default)({
    day: _dateViewRenderers.renderDateViewCalendar,
    month: _dateViewRenderers.renderDateViewCalendar,
    year: _dateViewRenderers.renderDateViewCalendar
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the desktop variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    viewRenderers,
    format: (0, _dateUtils.resolveDateFormat)(utils, defaultizedProps, false),
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    slots: (0, _extends2.default)({
      openPickerIcon: _icons.CalendarIcon,
      field: _DateField.DateField
    }, defaultizedProps.slots),
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      field: ownerState => (0, _extends2.default)({}, (0, _utils.resolveComponentProps)(defaultizedProps.slotProps?.field, ownerState), (0, _extractValidationProps.extractValidationProps)(defaultizedProps), {
        ref
      }),
      toolbar: (0, _extends2.default)({
        hidden: true
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = (0, _useDesktopPicker.useDesktopPicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'date',
    getOpenDialogAriaText: props.localeText?.openDatePickerDialogue ?? localeText.openDatePickerDialogue,
    validator: _internals.validateDate
  });
  return renderPicker();
});
exports.DesktopDatePicker = DesktopDatePicker;
DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: _propTypes.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: _propTypes.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: _propTypes.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: _propTypes.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: _propTypes.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: _propTypes.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: _propTypes.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: _propTypes.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: _propTypes.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: _propTypes.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: _propTypes.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: _propTypes.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: _propTypes.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: _propTypes.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: _propTypes.default.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.object
  })]),
  /**
   * The label content.
   */
  label: _propTypes.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: _propTypes.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: _propTypes.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: _propTypes.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: _propTypes.default.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: _propTypes.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: _propTypes.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: _propTypes.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: _propTypes.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: _propTypes.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: _propTypes.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: _propTypes.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: _propTypes.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: _propTypes.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: _propTypes.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: _propTypes.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: _propTypes.default.oneOf(['day', 'month', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: _propTypes.default.oneOf(['landscape', 'portrait']),
  readOnly: _propTypes.default.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: _propTypes.default.bool,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: _propTypes.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: _propTypes.default.oneOfType([_propTypes.default.oneOf(['all', 'day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), _propTypes.default.number, _propTypes.default.shape({
    endIndex: _propTypes.default.number.isRequired,
    startIndex: _propTypes.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: _propTypes.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: _propTypes.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: _propTypes.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: _propTypes.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: _propTypes.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: _propTypes.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: _propTypes.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: _propTypes.default.oneOf(['day', 'month', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: _propTypes.default.shape({
    day: _propTypes.default.func,
    month: _propTypes.default.func,
    year: _propTypes.default.func
  }),
  /**
   * Available views.
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: _propTypes.default.oneOf([3, 4])
};

/***/ }),

/***/ 81826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DesktopDatePicker", ({
  enumerable: true,
  get: function () {
    return _DesktopDatePicker.DesktopDatePicker;
  }
}));
var _DesktopDatePicker = __webpack_require__(81332);

/***/ }),

/***/ 73543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MobileDatePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(67392);
var _useMobilePicker = __webpack_require__(85369);
var _shared = __webpack_require__(2);
var _internals = __webpack_require__(27206);
var _DateField = __webpack_require__(51512);
var _extractValidationProps = __webpack_require__(8018);
var _valueManagers = __webpack_require__(24981);
var _dateViewRenderers = __webpack_require__(66132);
var _dateUtils = __webpack_require__(58759);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const MobileDatePicker = /*#__PURE__*/React.forwardRef(function MobileDatePicker(inProps, ref) {
  const localeText = (0, _internals.useLocaleText)();
  const utils = (0, _internals.useUtils)();

  // Props with the default values common to all date pickers
  const defaultizedProps = (0, _shared.useDatePickerDefaultizedProps)(inProps, 'MuiMobileDatePicker');
  const viewRenderers = (0, _extends2.default)({
    day: _dateViewRenderers.renderDateViewCalendar,
    month: _dateViewRenderers.renderDateViewCalendar,
    year: _dateViewRenderers.renderDateViewCalendar
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the mobile variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    viewRenderers,
    format: (0, _dateUtils.resolveDateFormat)(utils, defaultizedProps, false),
    slots: (0, _extends2.default)({
      field: _DateField.DateField
    }, defaultizedProps.slots),
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      field: ownerState => (0, _extends2.default)({}, (0, _utils.resolveComponentProps)(defaultizedProps.slotProps?.field, ownerState), (0, _extractValidationProps.extractValidationProps)(defaultizedProps), {
        ref
      }),
      toolbar: (0, _extends2.default)({
        hidden: false
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = (0, _useMobilePicker.useMobilePicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'date',
    getOpenDialogAriaText: props.localeText?.openDatePickerDialogue ?? localeText.openDatePickerDialogue,
    validator: _internals.validateDate
  });
  return renderPicker();
});
exports.MobileDatePicker = MobileDatePicker;
MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: _propTypes.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: _propTypes.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: _propTypes.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: _propTypes.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: _propTypes.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: _propTypes.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: _propTypes.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: _propTypes.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: _propTypes.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: _propTypes.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: _propTypes.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: _propTypes.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: _propTypes.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: _propTypes.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: _propTypes.default.oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.object
  })]),
  /**
   * The label content.
   */
  label: _propTypes.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: _propTypes.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: _propTypes.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: _propTypes.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: _propTypes.default.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: _propTypes.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: _propTypes.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: _propTypes.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: _propTypes.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: _propTypes.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: _propTypes.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: _propTypes.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: _propTypes.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: _propTypes.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: _propTypes.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: _propTypes.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: _propTypes.default.oneOf(['day', 'month', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: _propTypes.default.oneOf(['landscape', 'portrait']),
  readOnly: _propTypes.default.bool,
  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: _propTypes.default.bool,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: _propTypes.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: _propTypes.default.oneOfType([_propTypes.default.oneOf(['all', 'day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), _propTypes.default.number, _propTypes.default.shape({
    endIndex: _propTypes.default.number.isRequired,
    startIndex: _propTypes.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: _propTypes.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: _propTypes.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: _propTypes.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: _propTypes.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: _propTypes.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: _propTypes.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: _propTypes.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: _propTypes.default.oneOf(['day', 'month', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: _propTypes.default.shape({
    day: _propTypes.default.func,
    month: _propTypes.default.func,
    year: _propTypes.default.func
  }),
  /**
   * Available views.
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: _propTypes.default.oneOf([3, 4])
};

/***/ }),

/***/ 19107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MobileDatePicker", ({
  enumerable: true,
  get: function () {
    return _MobileDatePicker.MobileDatePicker;
  }
}));
var _MobileDatePicker = __webpack_require__(73543);

/***/ }),

/***/ 75554:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MonthCalendar = void 0;
exports.useMonthCalendarDefaultizedProps = useMonthCalendarDefaultizedProps;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _system = __webpack_require__(19659);
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _PickersMonth = __webpack_require__(93489);
var _useUtils = __webpack_require__(72979);
var _monthCalendarClasses = __webpack_require__(55017);
var _dateUtils = __webpack_require__(58759);
var _valueManagers = __webpack_require__(24981);
var _getDefaultReferenceDate = __webpack_require__(95287);
var _useValueWithTimezone = __webpack_require__(42736);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _utils.unstable_composeClasses)(slots, _monthCalendarClasses.getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  const themeProps = (0, _styles.useThemeProps)({
    props,
    name
  });
  return (0, _extends2.default)({
    disableFuture: false,
    disablePast: false
  }, themeProps, {
    minDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const MonthCalendarRoot = (0, _styles.styled)('div', {
  name: 'MuiMonthCalendar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'stretch',
  padding: '0 4px',
  width: 320
});
const MonthCalendar = /*#__PURE__*/React.forwardRef(function MonthCalendar(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, 'MuiMonthCalendar');
  const {
      className,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onChange,
      shouldDisableMonth,
      readOnly,
      disableHighlightToday,
      autoFocus = false,
      onMonthFocus,
      hasFocus,
      onFocusedViewChange,
      monthsPerRow = 3,
      timezone: timezoneProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    value,
    handleValueChange,
    timezone
  } = (0, _useValueWithTimezone.useControlledValueWithTimezone)({
    name: 'MonthCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange: onChange,
    valueManager: _valueManagers.singleItemValueManager
  });
  const now = (0, _useUtils.useNow)(timezone);
  const theme = (0, _system.useTheme)();
  const utils = (0, _useUtils.useUtils)();
  const referenceDate = React.useMemo(() => _valueManagers.singleItemValueManager.getInitialReferenceValue({
    value,
    utils,
    props,
    timezone,
    referenceDate: referenceDateProp,
    granularity: _getDefaultReferenceDate.SECTION_TYPE_GRANULARITY.month
  }), [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const todayMonth = React.useMemo(() => utils.getMonth(now), [utils, now]);
  const selectedMonth = React.useMemo(() => {
    if (value != null) {
      return utils.getMonth(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getMonth(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  const [focusedMonth, setFocusedMonth] = React.useState(() => selectedMonth || todayMonth);
  const [internalHasFocus, setInternalHasFocus] = (0, _utils.unstable_useControlled)({
    name: 'MonthCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = (0, _utils.unstable_useEventCallback)(newHasFocus => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = React.useCallback(dateToValidate => {
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = utils.startOfMonth(dateToValidate);
    if (utils.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (utils.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
  const handleMonthSelection = (0, _utils.unstable_useEventCallback)((event, month) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setMonth(value ?? referenceDate, month);
    handleValueChange(newDate);
  });
  const focusMonth = (0, _utils.unstable_useEventCallback)(month => {
    if (!isMonthDisabled(utils.setMonth(value ?? referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  React.useEffect(() => {
    setFocusedMonth(prevFocusedMonth => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = (0, _utils.unstable_useEventCallback)((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case 'ArrowUp':
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusMonth((monthsInYear + month + (theme.direction === 'ltr' ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusMonth((monthsInYear + month + (theme.direction === 'ltr' ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleMonthFocus = (0, _utils.unstable_useEventCallback)((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = (0, _utils.unstable_useEventCallback)((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(MonthCalendarRoot, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: (0, _dateUtils.getMonthsInYear)(utils, value ?? referenceDate).map(month => {
      const monthNumber = utils.getMonth(month);
      const monthText = utils.format(month, 'monthShort');
      const isSelected = monthNumber === selectedMonth;
      const isDisabled = disabled || isMonthDisabled(month);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersMonth.PickersMonth, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? 'date' : undefined,
        monthsPerRow: monthsPerRow,
        children: monthText
      }, monthText);
    })
  }));
});
exports.MonthCalendar = MonthCalendar;
 false ? 0 : void 0;

/***/ }),

/***/ 93489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersMonth = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _pickersMonthClasses = __webpack_require__(94885);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "monthsPerRow"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    monthButton: ['monthButton', disabled && 'disabled', selected && 'selected']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersMonthClasses.getPickersMonthUtilityClass, classes);
};
const PickersMonthRoot = (0, _styles.styled)('div', {
  name: 'MuiPickersMonth',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.monthsPerRow === 3 ? '33.3%' : '25%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const PickersMonthButton = (0, _styles.styled)('button', {
  name: 'MuiPickersMonth',
  slot: 'MonthButton',
  overridesResolver: (_, styles) => [styles.monthButton, {
    [`&.${_pickersMonthClasses.pickersMonthClasses.disabled}`]: styles.disabled
  }, {
    [`&.${_pickersMonthClasses.pickersMonthClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => (0, _extends2.default)({
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: '8px 0',
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:disabled': {
    cursor: 'auto',
    pointerEvents: 'none'
  },
  [`&.${_pickersMonthClasses.pickersMonthClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${_pickersMonthClasses.pickersMonthClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));

/**
 * @ignore - do not document.
 */
const PickersMonth = /*#__PURE__*/React.memo(function PickersMonth(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersMonth'
  });
  const {
      autoFocus,
      children,
      disabled,
      value,
      tabIndex,
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      'aria-current': ariaCurrent
      // We don't want to forward this prop to the root element
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ref = React.useRef(null);
  const classes = useUtilityClasses(props);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersMonthRoot, (0, _extends2.default)({
    className: classes.root,
    ownerState: props
  }, other, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersMonthButton, {
      ref: ref,
      disabled: disabled,
      type: "button",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      onClick: event => onClick(event, value),
      onKeyDown: event => onKeyDown(event, value),
      onFocus: event => onFocus(event, value),
      onBlur: event => onBlur(event, value),
      className: classes.monthButton,
      ownerState: props,
      children: children
    })
  }));
});
exports.PickersMonth = PickersMonth;

/***/ }),

/***/ 73085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MonthCalendar", ({
  enumerable: true,
  get: function () {
    return _MonthCalendar.MonthCalendar;
  }
}));
Object.defineProperty(exports, "getMonthCalendarUtilityClass", ({
  enumerable: true,
  get: function () {
    return _monthCalendarClasses.getMonthCalendarUtilityClass;
  }
}));
Object.defineProperty(exports, "monthCalendarClasses", ({
  enumerable: true,
  get: function () {
    return _monthCalendarClasses.monthCalendarClasses;
  }
}));
Object.defineProperty(exports, "pickersMonthClasses", ({
  enumerable: true,
  get: function () {
    return _pickersMonthClasses.pickersMonthClasses;
  }
}));
var _MonthCalendar = __webpack_require__(75554);
var _monthCalendarClasses = __webpack_require__(55017);
var _pickersMonthClasses = __webpack_require__(94885);

/***/ }),

/***/ 55017:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMonthCalendarUtilityClass = getMonthCalendarUtilityClass;
exports.monthCalendarClasses = void 0;
var _utils = __webpack_require__(44268);
function getMonthCalendarUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiMonthCalendar', slot);
}
const monthCalendarClasses = (0, _utils.unstable_generateUtilityClasses)('MuiMonthCalendar', ['root']);
exports.monthCalendarClasses = monthCalendarClasses;

/***/ }),

/***/ 94885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersMonthUtilityClass = getPickersMonthUtilityClass;
exports.pickersMonthClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersMonthUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersMonth', slot);
}
const pickersMonthClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersMonth', ['root', 'monthButton', 'disabled', 'selected']);
exports.pickersMonthClasses = pickersMonthClasses;

/***/ }),

/***/ 67931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersActionBar = PickersActionBar;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _Button = _interopRequireDefault(__webpack_require__(16614));
var _DialogActions = _interopRequireDefault(__webpack_require__(95915));
var _useUtils = __webpack_require__(72979);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function PickersActionBar(props) {
  const {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const localeText = (0, _useUtils.useLocaleText)();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions?.map(actionType => {
    switch (actionType) {
      case 'clear':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          onClick: onClear,
          children: localeText.clearButtonLabel
        }, actionType);
      case 'cancel':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          onClick: onCancel,
          children: localeText.cancelButtonLabel
        }, actionType);
      case 'accept':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          onClick: onAccept,
          children: localeText.okButtonLabel
        }, actionType);
      case 'today':
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          onClick: onSetToday,
          children: localeText.todayButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogActions.default, (0, _extends2.default)({}, other, {
    children: buttons
  }));
}
 false ? 0 : void 0;

/***/ }),

/***/ 58973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PickersActionBar", ({
  enumerable: true,
  get: function () {
    return _PickersActionBar.PickersActionBar;
  }
}));
var _PickersActionBar = __webpack_require__(67931);

/***/ }),

/***/ 53509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersCalendarHeader = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _Fade = _interopRequireDefault(__webpack_require__(53602));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(67392);
var _utils2 = __webpack_require__(44268);
var _IconButton = _interopRequireDefault(__webpack_require__(48060));
var _useUtils = __webpack_require__(72979);
var _PickersFadeTransitionGroup = __webpack_require__(58299);
var _icons = __webpack_require__(41922);
var _PickersArrowSwitcher = __webpack_require__(91364);
var _dateHelpersHooks = __webpack_require__(65075);
var _pickersCalendarHeaderClasses = __webpack_require__(12697);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone"],
  _excluded2 = ["ownerState"]; // We keep the interface to allow module augmentation
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    labelContainer: ['labelContainer'],
    label: ['label'],
    switchViewButton: ['switchViewButton'],
    switchViewIcon: ['switchViewIcon']
  };
  return (0, _utils2.unstable_composeClasses)(slots, _pickersCalendarHeaderClasses.getPickersCalendarHeaderUtilityClass, classes);
};
const PickersCalendarHeaderRoot = (0, _styles.styled)('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({
  display: 'flex',
  alignItems: 'center',
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
});
const PickersCalendarHeaderLabelContainer = (0, _styles.styled)('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'LabelContainer',
  overridesResolver: (_, styles) => styles.labelContainer
})(({
  theme
}) => (0, _extends2.default)({
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: 'auto'
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
const PickersCalendarHeaderLabel = (0, _styles.styled)('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Label',
  overridesResolver: (_, styles) => styles.label
})({
  marginRight: 6
});
const PickersCalendarHeaderSwitchViewButton = (0, _styles.styled)(_IconButton.default, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewButton',
  overridesResolver: (_, styles) => styles.switchViewButton
})(({
  ownerState
}) => (0, _extends2.default)({
  marginRight: 'auto'
}, ownerState.view === 'year' && {
  [`.${_pickersCalendarHeaderClasses.pickersCalendarHeaderClasses.switchViewIcon}`]: {
    transform: 'rotate(180deg)'
  }
}));
const PickersCalendarHeaderSwitchViewIcon = (0, _styles.styled)(_icons.ArrowDropDownIcon, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewIcon',
  overridesResolver: (_, styles) => styles.switchViewIcon
})(({
  theme
}) => ({
  willChange: 'transform',
  transition: theme.transitions.create('transform'),
  transform: 'rotate(0deg)'
}));
const PickersCalendarHeader = /*#__PURE__*/React.forwardRef(function PickersCalendarHeader(inProps, ref) {
  const localeText = (0, _useUtils.useLocaleText)();
  const utils = (0, _useUtils.useUtils)();
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersCalendarHeader'
  });
  const {
      slots,
      slotProps,
      currentMonth: month,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onMonthChange,
      onViewChange,
      view,
      reduceAnimations,
      views,
      labelId,
      className,
      timezone
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(props);
  const SwitchViewButton = slots?.switchViewButton ?? PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = (0, _utils.useSlotProps)({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps?.switchViewButton,
    additionalProps: {
      size: 'small',
      'aria-label': localeText.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState,
    className: classes.switchViewButton
  });
  const SwitchViewIcon = slots?.switchViewIcon ?? PickersCalendarHeaderSwitchViewIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = (0, _utils.useSlotProps)({
      elementType: SwitchViewIcon,
      externalSlotProps: slotProps?.switchViewIcon,
      ownerState: undefined,
      className: classes.switchViewIcon
    }),
    switchViewIconProps = (0, _objectWithoutPropertiesLoose2.default)(_useSlotProps, _excluded2);
  const selectNextMonth = () => onMonthChange(utils.addMonths(month, 1), 'left');
  const selectPreviousMonth = () => onMonthChange(utils.addMonths(month, -1), 'right');
  const isNextMonthDisabled = (0, _dateHelpersHooks.useNextMonthDisabled)(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = (0, _dateHelpersHooks.usePreviousMonthDisabled)(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find(el => el !== view) || views[0]);
    } else {
      // switching only between first 2
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };

  // No need to display more information
  if (views.length === 1 && views[0] === 'year') {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(PickersCalendarHeaderRoot, (0, _extends2.default)({}, other, {
    ownerState: ownerState,
    className: (0, _clsx.default)(className, classes.root),
    ref: ref,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState: ownerState
      // putting this on the label item element below breaks when using transition
      ,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersFadeTransitionGroup.PickersFadeTransitionGroup, {
        reduceAnimations: reduceAnimations,
        transKey: utils.format(month, 'monthAndYear'),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState: ownerState,
          className: classes.label,
          children: utils.format(month, 'monthAndYear')
        })
      }), views.length > 1 && !disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)(SwitchViewButton, (0, _extends2.default)({}, switchViewButtonProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SwitchViewIcon, (0, _extends2.default)({}, switchViewIconProps))
      }))]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Fade.default, {
      in: view === 'day',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersArrowSwitcher.PickersArrowSwitcher, {
        slots: slots,
        slotProps: slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: localeText.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: localeText.nextMonth
      })
    })]
  }));
});
exports.PickersCalendarHeader = PickersCalendarHeader;
 false ? 0 : void 0;

/***/ }),

/***/ 99797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PickersCalendarHeader", ({
  enumerable: true,
  get: function () {
    return _PickersCalendarHeader.PickersCalendarHeader;
  }
}));
Object.defineProperty(exports, "pickersCalendarHeaderClasses", ({
  enumerable: true,
  get: function () {
    return _pickersCalendarHeaderClasses.pickersCalendarHeaderClasses;
  }
}));
var _pickersCalendarHeaderClasses = __webpack_require__(12697);
var _PickersCalendarHeader = __webpack_require__(53509);

/***/ }),

/***/ 12697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pickersCalendarHeaderClasses = exports.getPickersCalendarHeaderUtilityClass = void 0;
var _utils = __webpack_require__(44268);
const getPickersCalendarHeaderUtilityClass = slot => (0, _utils.unstable_generateUtilityClass)('MuiPickersCalendarHeader', slot);
exports.getPickersCalendarHeaderUtilityClass = getPickersCalendarHeaderUtilityClass;
const pickersCalendarHeaderClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersCalendarHeader', ['root', 'labelContainer', 'label', 'switchViewButton', 'switchViewIcon']);
exports.pickersCalendarHeaderClasses = pickersCalendarHeaderClasses;

/***/ }),

/***/ 59392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersDay = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _ButtonBase = _interopRequireDefault(__webpack_require__(19937));
var _utils = __webpack_require__(44268);
var _styles = __webpack_require__(83476);
var _useUtils = __webpack_require__(72979);
var _dimensions = __webpack_require__(78774);
var _pickersDayClasses = __webpack_require__(30466);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    disabled,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const isHiddenDaySpacingFiller = outsideCurrentMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ['root', selected && !isHiddenDaySpacingFiller && 'selected', disabled && 'disabled', !disableMargin && 'dayWithMargin', !disableHighlightToday && today && 'today', outsideCurrentMonth && showDaysOutsideCurrentMonth && 'dayOutsideMonth', isHiddenDaySpacingFiller && 'hiddenDaySpacingFiller'],
    hiddenDaySpacingFiller: ['hiddenDaySpacingFiller']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersDayClasses.getPickersDayUtilityClass, classes);
};
const styleArg = ({
  theme,
  ownerState
}) => (0, _extends2.default)({}, theme.typography.caption, {
  width: _dimensions.DAY_SIZE,
  height: _dimensions.DAY_SIZE,
  borderRadius: '50%',
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: 'transparent',
  color: (theme.vars || theme).palette.text.primary,
  '@media (pointer: fine)': {
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${_pickersDayClasses.pickersDayClasses.selected}`]: {
      willChange: 'background-color',
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${_pickersDayClasses.pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      willChange: 'background-color',
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${_pickersDayClasses.pickersDayClasses.disabled}:not(.${_pickersDayClasses.pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${_pickersDayClasses.pickersDayClasses.disabled}&.${_pickersDayClasses.pickersDayClasses.selected}`]: {
    opacity: 0.6
  }
}, !ownerState.disableMargin && {
  margin: `0 ${_dimensions.DAY_MARGIN}px`
}, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableHighlightToday && ownerState.today && {
  [`&:not(.${_pickersDayClasses.pickersDayClasses.selected})`]: {
    border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
  }
});
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
const PickersDayRoot = (0, _styles.styled)(_ButtonBase.default, {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver
})(styleArg);
const PickersDayFiller = (0, _styles.styled)('div', {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({}, styleArg({
  theme,
  ownerState
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: 'none'
}));
const noop = () => {};
const PickersDayRaw = /*#__PURE__*/React.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersDay'
  });
  const {
      autoFocus = false,
      className,
      day,
      disabled = false,
      disableHighlightToday = false,
      disableMargin = false,
      isAnimating,
      onClick,
      onDaySelect,
      onFocus = noop,
      onBlur = noop,
      onKeyDown = noop,
      onMouseDown = noop,
      onMouseEnter = noop,
      outsideCurrentMonth,
      selected = false,
      showDaysOutsideCurrentMonth = false,
      children,
      today: isToday = false
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = useUtilityClasses(ownerState);
  const utils = (0, _useUtils.useUtils)();
  const ref = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, forwardedRef);

  // Since this is rendered when a Popper is opened we can't use passive effects.
  // Focusing in passive effects in Popper causes scroll jump.
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      // ref.current being null would be a bug in MUI
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);

  // For day outside of current month, move focus from mouseDown to mouseUp
  // Goal: have the onClick ends before sliding to the new month
  const handleMouseDown = event => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = event => {
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersDayFiller, {
      className: (0, _clsx.default)(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState: ownerState,
      role: other.role
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersDayRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled: disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: event => onKeyDown(event, day),
    onFocus: event => onFocus(event, day),
    onBlur: event => onBlur(event, day),
    onMouseEnter: event => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState: ownerState,
    children: !children ? utils.format(day, 'dayOfMonth') : children
  }));
});
 false ? 0 : void 0;

/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [PickersDay API](https://mui.com/x/api/date-pickers/pickers-day/)
 */
const PickersDay = /*#__PURE__*/React.memo(PickersDayRaw);
exports.PickersDay = PickersDay;

/***/ }),

/***/ 30466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersDayUtilityClass = getPickersDayUtilityClass;
exports.pickersDayClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersDayUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersDay', slot);
}
const pickersDayClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);
exports.pickersDayClasses = pickersDayClasses;

/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersLayoutRoot = exports.PickersLayoutContentWrapper = exports.PickersLayout = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _pickersLayoutClasses = __webpack_require__(13109);
var _usePickerLayout = _interopRequireDefault(__webpack_require__(47748));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ['root', isLandscape && 'landscape'],
    contentWrapper: ['contentWrapper']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersLayoutClasses.getPickersLayoutUtilityClass, classes);
};
const PickersLayoutRoot = (0, _styles.styled)('div', {
  name: 'MuiPickersLayout',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  display: 'grid',
  gridAutoColumns: 'max-content auto max-content',
  gridAutoRows: 'max-content auto max-content',
  [`& .${_pickersLayoutClasses.pickersLayoutClasses.toolbar}`]: ownerState.isLandscape ? {
    gridColumn: theme.direction === 'rtl' ? 3 : 1,
    gridRow: '2 / 3'
  } : {
    gridColumn: '2 / 4',
    gridRow: 1
  },
  [`.${_pickersLayoutClasses.pickersLayoutClasses.shortcuts}`]: ownerState.isLandscape ? {
    gridColumn: '2 / 4',
    gridRow: 1
  } : {
    gridColumn: theme.direction === 'rtl' ? 3 : 1,
    gridRow: '2 / 3'
  },
  [`& .${_pickersLayoutClasses.pickersLayoutClasses.actionBar}`]: {
    gridColumn: '1 / 4',
    gridRow: 3
  }
}));
exports.PickersLayoutRoot = PickersLayoutRoot;
PickersLayoutRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: _propTypes.default.elementType,
  ownerState: _propTypes.default.shape({
    isLandscape: _propTypes.default.bool.isRequired
  }).isRequired,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
};
const PickersLayoutContentWrapper = (0, _styles.styled)('div', {
  name: 'MuiPickersLayout',
  slot: 'ContentWrapper',
  overridesResolver: (props, styles) => styles.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: 'flex',
  flexDirection: 'column'
});
exports.PickersLayoutContentWrapper = PickersLayoutContentWrapper;
const PickersLayout = function PickersLayout(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersLayout'
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  } = (0, _usePickerLayout.default)(props);
  const {
    sx,
    className,
    isLandscape,
    ref,
    wrapperVariant
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(PickersLayoutRoot, {
    ref: ref,
    sx: sx,
    className: (0, _clsx.default)(className, classes.root),
    ownerState: ownerState,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      children: wrapperVariant === 'desktop' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [content, tabs]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
};
exports.PickersLayout = PickersLayout;
 false ? 0 : void 0;

/***/ }),

/***/ 43485:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PickersLayout", ({
  enumerable: true,
  get: function () {
    return _PickersLayout.PickersLayout;
  }
}));
Object.defineProperty(exports, "PickersLayoutContentWrapper", ({
  enumerable: true,
  get: function () {
    return _PickersLayout.PickersLayoutContentWrapper;
  }
}));
Object.defineProperty(exports, "PickersLayoutRoot", ({
  enumerable: true,
  get: function () {
    return _PickersLayout.PickersLayoutRoot;
  }
}));
Object.defineProperty(exports, "pickersLayoutClasses", ({
  enumerable: true,
  get: function () {
    return _pickersLayoutClasses.pickersLayoutClasses;
  }
}));
Object.defineProperty(exports, "usePickerLayout", ({
  enumerable: true,
  get: function () {
    return _usePickerLayout.default;
  }
}));
var _PickersLayout = __webpack_require__(769);
var _usePickerLayout = _interopRequireDefault(__webpack_require__(47748));
var _pickersLayoutClasses = __webpack_require__(13109);

/***/ }),

/***/ 13109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersLayoutUtilityClass = getPickersLayoutUtilityClass;
exports.pickersLayoutClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersLayoutUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersLayout', slot);
}
const pickersLayoutClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersLayout', ['root', 'landscape', 'contentWrapper', 'toolbar', 'actionBar', 'shortcuts']);
exports.pickersLayoutClasses = pickersLayoutClasses;

/***/ }),

/***/ 47748:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(67392);
var _utils2 = __webpack_require__(44268);
var _PickersActionBar = __webpack_require__(58973);
var _pickersLayoutClasses = __webpack_require__(13109);
var _PickersShortcuts = __webpack_require__(17894);
var _slotsMigration = __webpack_require__(93127);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
const useUtilityClasses = ownerState => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ['root', isLandscape && 'landscape'],
    contentWrapper: ['contentWrapper'],
    toolbar: ['toolbar'],
    actionBar: ['actionBar'],
    tabs: ['tabs'],
    landscape: ['landscape'],
    shortcuts: ['shortcuts']
  };
  return (0, _utils2.unstable_composeClasses)(slots, _pickersLayoutClasses.getPickersLayoutUtilityClass, classes);
};
const usePickerLayout = props => {
  const {
    wrapperVariant,
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    view,
    views,
    onViewChange,
    value,
    onChange,
    onSelectShortcut,
    isValid,
    isLandscape,
    disabled,
    readOnly,
    children,
    components,
    componentsProps,
    slots: innerSlots,
    slotProps: innerSlotProps
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = props;
  const slots = innerSlots ?? (0, _slotsMigration.uncapitalizeObjectKeys)(components);
  const slotProps = innerSlotProps ?? componentsProps;
  const classes = useUtilityClasses(props);

  // Action bar

  const ActionBar = slots?.actionBar ?? _PickersActionBar.PickersActionBar;
  const actionBarProps = (0, _utils.useSlotProps)({
    elementType: ActionBar,
    externalSlotProps: slotProps?.actionBar,
    additionalProps: {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions: wrapperVariant === 'desktop' ? [] : ['cancel', 'accept'],
      className: classes.actionBar
    },
    ownerState: (0, _extends2.default)({}, props, {
      wrapperVariant
    })
  });
  const actionBar = /*#__PURE__*/(0, _jsxRuntime.jsx)(ActionBar, (0, _extends2.default)({}, actionBarProps));

  // Toolbar

  const Toolbar = slots?.toolbar;
  const toolbarProps = (0, _utils.useSlotProps)({
    elementType: Toolbar,
    externalSlotProps: slotProps?.toolbar,
    additionalProps: {
      isLandscape,
      onChange,
      value,
      view,
      onViewChange,
      views,
      disabled,
      readOnly,
      className: classes.toolbar
    },
    ownerState: (0, _extends2.default)({}, props, {
      wrapperVariant
    })
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Toolbar, (0, _extends2.default)({}, toolbarProps)) : null;

  // Content

  const content = children;

  // Tabs

  const Tabs = slots?.tabs;
  const tabs = view && Tabs ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Tabs, (0, _extends2.default)({
    view: view,
    onViewChange: onViewChange
  }, slotProps?.tabs)) : null;

  // Shortcuts

  const Shortcuts = slots?.shortcuts ?? _PickersShortcuts.PickersShortcuts;
  const shortcutsProps = (0, _utils.useSlotProps)({
    elementType: Shortcuts,
    externalSlotProps: slotProps?.shortcuts,
    additionalProps: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts
    },
    ownerState: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts,
      wrapperVariant
    }
  });
  const shortcuts = view && !!Shortcuts ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Shortcuts, (0, _extends2.default)({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  };
};
var _default = usePickerLayout;
exports["default"] = _default;

/***/ }),

/***/ 33503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersShortcuts = PickersShortcuts;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _List = _interopRequireDefault(__webpack_require__(6176));
var _ListItem = _interopRequireDefault(__webpack_require__(43610));
var _Chip = _interopRequireDefault(__webpack_require__(92133));
var _dimensions = __webpack_require__(78774);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["items", "changeImportance", "isLandscape", "onChange", "isValid"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function PickersShortcuts(props) {
  const {
      items,
      changeImportance,
      onChange,
      isValid
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map(item => {
    const newValue = item.getValue({
      isValid
    });
    return {
      label: item.label,
      onClick: () => {
        onChange(newValue, changeImportance);
      },
      disabled: !isValid(newValue)
    };
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.default, (0, _extends2.default)({
    dense: true,
    sx: [{
      maxHeight: _dimensions.VIEW_HEIGHT,
      maxWidth: 200,
      overflow: 'auto'
    }, ...(Array.isArray(other.sx) ? other.sx : [other.sx])]
  }, other, {
    children: resolvedItems.map(item => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItem.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, (0, _extends2.default)({}, item))
      }, item.label);
    })
  }));
}
 false ? 0 : void 0;

/***/ }),

/***/ 17894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PickersShortcuts", ({
  enumerable: true,
  get: function () {
    return _PickersShortcuts.PickersShortcuts;
  }
}));
var _PickersShortcuts = __webpack_require__(33503);

/***/ }),

/***/ 87932:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersYear = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _utils = __webpack_require__(44268);
var _styles = __webpack_require__(83476);
var _pickersYearClasses = __webpack_require__(28883);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    yearButton: ['yearButton', disabled && 'disabled', selected && 'selected']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersYearClasses.getPickersYearUtilityClass, classes);
};
const PickersYearRoot = (0, _styles.styled)('div', {
  name: 'MuiPickersYear',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.yearsPerRow === 3 ? '33.3%' : '25%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const PickersYearButton = (0, _styles.styled)('button', {
  name: 'MuiPickersYear',
  slot: 'YearButton',
  overridesResolver: (_, styles) => [styles.yearButton, {
    [`&.${_pickersYearClasses.pickersYearClasses.disabled}`]: styles.disabled
  }, {
    [`&.${_pickersYearClasses.pickersYearClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => (0, _extends2.default)({
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: '8px 0',
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:disabled': {
    cursor: 'auto',
    pointerEvents: 'none'
  },
  [`&.${_pickersYearClasses.pickersYearClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${_pickersYearClasses.pickersYearClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));

/**
 * @ignore - internal component.
 */
const PickersYear = /*#__PURE__*/React.memo(function PickersYear(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersYear'
  });
  const {
      autoFocus,
      className,
      children,
      disabled,
      value,
      tabIndex,
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      'aria-current': ariaCurrent
      // We don't want to forward this prop to the root element
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ref = React.useRef(null);
  const classes = useUtilityClasses(props);

  // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button
  React.useEffect(() => {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in MUI.
      ref.current.focus();
    }
  }, [autoFocus]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersYearRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ownerState: props
  }, other, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersYearButton, {
      ref: ref,
      disabled: disabled,
      type: "button",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      onClick: event => onClick(event, value),
      onKeyDown: event => onKeyDown(event, value),
      onFocus: event => onFocus(event, value),
      onBlur: event => onBlur(event, value),
      className: classes.yearButton,
      ownerState: props,
      children: children
    })
  }));
});
exports.PickersYear = PickersYear;

/***/ }),

/***/ 59179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.YearCalendar = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _system = __webpack_require__(19659);
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _PickersYear = __webpack_require__(87932);
var _useUtils = __webpack_require__(72979);
var _yearCalendarClasses = __webpack_require__(89599);
var _dateUtils = __webpack_require__(58759);
var _valueManagers = __webpack_require__(24981);
var _getDefaultReferenceDate = __webpack_require__(95287);
var _useValueWithTimezone = __webpack_require__(42736);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _utils.unstable_composeClasses)(slots, _yearCalendarClasses.getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  const themeProps = (0, _styles.useThemeProps)({
    props,
    name
  });
  return (0, _extends2.default)({
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    minDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const YearCalendarRoot = (0, _styles.styled)('div', {
  name: 'MuiYearCalendar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflowY: 'auto',
  height: '100%',
  padding: '0 4px',
  width: 320,
  maxHeight: 304
});
const YearCalendar = /*#__PURE__*/React.forwardRef(function YearCalendar(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, 'MuiYearCalendar');
  const {
      autoFocus,
      className,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onChange,
      readOnly,
      shouldDisableYear,
      disableHighlightToday,
      onYearFocus,
      hasFocus,
      onFocusedViewChange,
      yearsPerRow = 3,
      timezone: timezoneProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    value,
    handleValueChange,
    timezone
  } = (0, _useValueWithTimezone.useControlledValueWithTimezone)({
    name: 'YearCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange: onChange,
    valueManager: _valueManagers.singleItemValueManager
  });
  const now = (0, _useUtils.useNow)(timezone);
  const theme = (0, _system.useTheme)();
  const utils = (0, _useUtils.useUtils)();
  const referenceDate = React.useMemo(() => _valueManagers.singleItemValueManager.getInitialReferenceValue({
    value,
    utils,
    props,
    timezone,
    referenceDate: referenceDateProp,
    granularity: _getDefaultReferenceDate.SECTION_TYPE_GRANULARITY.year
  }), [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const todayYear = React.useMemo(() => utils.getYear(now), [utils, now]);
  const selectedYear = React.useMemo(() => {
    if (value != null) {
      return utils.getYear(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getYear(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  const [focusedYear, setFocusedYear] = React.useState(() => selectedYear || todayYear);
  const [internalHasFocus, setInternalHasFocus] = (0, _utils.unstable_useControlled)({
    name: 'YearCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = (0, _utils.unstable_useEventCallback)(newHasFocus => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = React.useCallback(dateToValidate => {
    if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = utils.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
  const handleYearSelection = (0, _utils.unstable_useEventCallback)((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setYear(value ?? referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = (0, _utils.unstable_useEventCallback)(year => {
    if (!isYearDisabled(utils.setYear(value ?? referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus?.(year);
    }
  });
  React.useEffect(() => {
    setFocusedYear(prevFocusedYear => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const handleKeyDown = (0, _utils.unstable_useEventCallback)((event, year) => {
    switch (event.key) {
      case 'ArrowUp':
        focusYear(year - yearsPerRow);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusYear(year + yearsPerRow);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusYear(year + (theme.direction === 'ltr' ? -1 : 1));
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusYear(year + (theme.direction === 'ltr' ? 1 : -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleYearFocus = (0, _utils.unstable_useEventCallback)((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = (0, _utils.unstable_useEventCallback)((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = React.useRef(null);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, scrollerRef);
  React.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }

    // Taken from useScroll in x-data-grid, but vertically centered
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      // Button already visible
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(YearCalendarRoot, (0, _extends2.default)({
    ref: handleRef,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: utils.getYearRange(minDate, maxDate).map(year => {
      const yearNumber = utils.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersYear.PickersYear, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? 'date' : undefined,
        yearsPerRow: yearsPerRow,
        children: utils.format(year, 'year')
      }, utils.format(year, 'year'));
    })
  }));
});
exports.YearCalendar = YearCalendar;
 false ? 0 : void 0;

/***/ }),

/***/ 48642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "YearCalendar", ({
  enumerable: true,
  get: function () {
    return _YearCalendar.YearCalendar;
  }
}));
Object.defineProperty(exports, "getYearCalendarUtilityClass", ({
  enumerable: true,
  get: function () {
    return _yearCalendarClasses.getYearCalendarUtilityClass;
  }
}));
Object.defineProperty(exports, "pickersYearClasses", ({
  enumerable: true,
  get: function () {
    return _pickersYearClasses.pickersYearClasses;
  }
}));
Object.defineProperty(exports, "yearCalendarClasses", ({
  enumerable: true,
  get: function () {
    return _yearCalendarClasses.yearCalendarClasses;
  }
}));
var _YearCalendar = __webpack_require__(59179);
var _yearCalendarClasses = __webpack_require__(89599);
var _pickersYearClasses = __webpack_require__(28883);

/***/ }),

/***/ 28883:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersYearUtilityClass = getPickersYearUtilityClass;
exports.pickersYearClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersYearUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersYear', slot);
}
const pickersYearClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersYear', ['root', 'yearButton', 'selected', 'disabled']);
exports.pickersYearClasses = pickersYearClasses;

/***/ }),

/***/ 89599:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getYearCalendarUtilityClass = getYearCalendarUtilityClass;
exports.yearCalendarClasses = void 0;
var _utils = __webpack_require__(44268);
function getYearCalendarUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiYearCalendar', slot);
}
const yearCalendarClasses = (0, _utils.unstable_generateUtilityClasses)('MuiYearCalendar', ['root']);
exports.yearCalendarClasses = yearCalendarClasses;

/***/ }),

/***/ 54802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.renderDateViewCalendar = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _DateCalendar = __webpack_require__(32194);
var _dateUtils = __webpack_require__(58759);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateCalendar.DateCalendar, {
  view: view,
  onViewChange: onViewChange,
  views: views.filter(_dateUtils.isDatePickerView),
  focusedView: focusedView && (0, _dateUtils.isDatePickerView)(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  value: value,
  defaultValue: defaultValue,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minDate: minDate,
  maxDate: maxDate,
  shouldDisableDate: shouldDisableDate,
  shouldDisableMonth: shouldDisableMonth,
  shouldDisableYear: shouldDisableYear,
  reduceAnimations: reduceAnimations,
  onMonthChange: onMonthChange,
  monthsPerRow: monthsPerRow,
  onYearChange: onYearChange,
  yearsPerRow: yearsPerRow,
  defaultCalendarMonth: defaultCalendarMonth,
  components: components,
  componentsProps: componentsProps,
  slots: slots,
  slotProps: slotProps,
  loading: loading,
  renderLoading: renderLoading,
  disableHighlightToday: disableHighlightToday,
  readOnly: readOnly,
  disabled: disabled,
  showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
  dayOfWeekFormatter: dayOfWeekFormatter,
  sx: sx,
  autoFocus: autoFocus,
  fixedWeekNumber: fixedWeekNumber,
  displayWeekNumber: displayWeekNumber,
  timezone: timezone
});
exports.renderDateViewCalendar = renderDateViewCalendar;

/***/ }),

/***/ 66132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "renderDateViewCalendar", ({
  enumerable: true,
  get: function () {
    return _dateViewRenderers.renderDateViewCalendar;
  }
}));
var _dateViewRenderers = __webpack_require__(54802);

/***/ }),

/***/ 41922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TimeIcon = exports.DateRangeIcon = exports.ClockIcon = exports.CalendarIcon = exports.ArrowRightIcon = exports.ArrowLeftIcon = exports.ArrowDropDownIcon = void 0;
var _utils = __webpack_require__(29207);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
const ArrowDropDownIcon = (0, _utils.createSvgIcon)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

/**
 * @ignore - internal component.
 */
exports.ArrowDropDownIcon = ArrowDropDownIcon;
const ArrowLeftIcon = (0, _utils.createSvgIcon)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'ArrowLeft');

/**
 * @ignore - internal component.
 */
exports.ArrowLeftIcon = ArrowLeftIcon;
const ArrowRightIcon = (0, _utils.createSvgIcon)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'ArrowRight');

/**
 * @ignore - internal component.
 */
exports.ArrowRightIcon = ArrowRightIcon;
const CalendarIcon = (0, _utils.createSvgIcon)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), 'Calendar');

/**
 * @ignore - internal component.
 */
exports.CalendarIcon = CalendarIcon;
const ClockIcon = (0, _utils.createSvgIcon)( /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), 'Clock');

/**
 * @ignore - internal component.
 */
exports.ClockIcon = ClockIcon;
const DateRangeIcon = (0, _utils.createSvgIcon)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), 'DateRange');

/**
 * @ignore - internal component.
 */
exports.DateRangeIcon = DateRangeIcon;
const TimeIcon = (0, _utils.createSvgIcon)( /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), 'Time');
exports.TimeIcon = TimeIcon;

/***/ }),

/***/ 35969:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickerViewRoot = void 0;
var _styles = __webpack_require__(83476);
var _dimensions = __webpack_require__(78774);
const PickerViewRoot = (0, _styles.styled)('div')({
  overflow: 'hidden',
  width: _dimensions.DIALOG_WIDTH,
  maxHeight: _dimensions.VIEW_HEIGHT,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
});
exports.PickerViewRoot = PickerViewRoot;

/***/ }),

/***/ 4050:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PickerViewRoot", ({
  enumerable: true,
  get: function () {
    return _PickerViewRoot.PickerViewRoot;
  }
}));
var _PickerViewRoot = __webpack_require__(35969);

/***/ }),

/***/ 7357:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersArrowSwitcher = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _Typography = _interopRequireDefault(__webpack_require__(33987));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _utils2 = __webpack_require__(67392);
var _IconButton = _interopRequireDefault(__webpack_require__(48060));
var _icons = __webpack_require__(41922);
var _pickersArrowSwitcherClasses = __webpack_require__(82402);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"],
  _excluded2 = ["ownerState"],
  _excluded3 = ["ownerState"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const PickersArrowSwitcherRoot = (0, _styles.styled)('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex'
});
const PickersArrowSwitcherSpacer = (0, _styles.styled)('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Spacer',
  overridesResolver: (props, styles) => styles.spacer
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
const PickersArrowSwitcherButton = (0, _styles.styled)(_IconButton.default, {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({
  ownerState
}) => (0, _extends2.default)({}, ownerState.hidden && {
  visibility: 'hidden'
}));
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    spacer: ['spacer'],
    button: ['button']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersArrowSwitcherClasses.getPickersArrowSwitcherUtilityClass, classes);
};
const PickersArrowSwitcher = /*#__PURE__*/React.forwardRef(function PickersArrowSwitcher(inProps, ref) {
  const theme = (0, _styles.useTheme)();
  const isRTL = theme.direction === 'rtl';
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersArrowSwitcher'
  });
  const {
      children,
      className,
      slots,
      slotProps,
      isNextDisabled,
      isNextHidden,
      onGoToNext,
      nextLabel,
      isPreviousDisabled,
      isPreviousHidden,
      onGoToPrevious,
      previousLabel
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const [leftProps, rightProps] = isRTL ? [nextProps, previousProps] : [previousProps, nextProps];
  const PreviousIconButton = slots?.previousIconButton ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = (0, _utils2.useSlotProps)({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps?.previousIconButton,
    additionalProps: {
      size: 'medium',
      title: leftProps.label,
      'aria-label': leftProps.label,
      disabled: leftProps.isDisabled,
      edge: 'end',
      onClick: leftProps.goTo
    },
    ownerState: (0, _extends2.default)({}, ownerState, {
      hidden: leftProps.isHidden
    }),
    className: classes.button
  });
  const NextIconButton = slots?.nextIconButton ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = (0, _utils2.useSlotProps)({
    elementType: NextIconButton,
    externalSlotProps: slotProps?.nextIconButton,
    additionalProps: {
      size: 'medium',
      title: rightProps.label,
      'aria-label': rightProps.label,
      disabled: rightProps.isDisabled,
      edge: 'start',
      onClick: rightProps.goTo
    },
    ownerState: (0, _extends2.default)({}, ownerState, {
      hidden: rightProps.isHidden
    }),
    className: classes.button
  });
  const LeftArrowIcon = slots?.leftArrowIcon ?? _icons.ArrowLeftIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = (0, _utils2.useSlotProps)({
      elementType: LeftArrowIcon,
      externalSlotProps: slotProps?.leftArrowIcon,
      additionalProps: {
        fontSize: 'inherit'
      },
      ownerState: undefined
    }),
    leftArrowIconProps = (0, _objectWithoutPropertiesLoose2.default)(_useSlotProps, _excluded2);
  const RightArrowIcon = slots?.rightArrowIcon ?? _icons.ArrowRightIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps2 = (0, _utils2.useSlotProps)({
      elementType: RightArrowIcon,
      externalSlotProps: slotProps?.rightArrowIcon,
      additionalProps: {
        fontSize: 'inherit'
      },
      ownerState: undefined
    }),
    rightArrowIconProps = (0, _objectWithoutPropertiesLoose2.default)(_useSlotProps2, _excluded3);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(PickersArrowSwitcherRoot, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(PreviousIconButton, (0, _extends2.default)({}, previousIconButtonProps, {
      children: isRTL ? /*#__PURE__*/(0, _jsxRuntime.jsx)(RightArrowIcon, (0, _extends2.default)({}, rightArrowIconProps)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(LeftArrowIcon, (0, _extends2.default)({}, leftArrowIconProps))
    })), children ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "subtitle1",
      component: "span",
      children: children
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState: ownerState
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(NextIconButton, (0, _extends2.default)({}, nextIconButtonProps, {
      children: isRTL ? /*#__PURE__*/(0, _jsxRuntime.jsx)(LeftArrowIcon, (0, _extends2.default)({}, leftArrowIconProps)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(RightArrowIcon, (0, _extends2.default)({}, rightArrowIconProps))
    }))]
  }));
});
exports.PickersArrowSwitcher = PickersArrowSwitcher;

/***/ }),

/***/ 91364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PickersArrowSwitcher", ({
  enumerable: true,
  get: function () {
    return _PickersArrowSwitcher.PickersArrowSwitcher;
  }
}));
var _PickersArrowSwitcher = __webpack_require__(7357);

/***/ }),

/***/ 82402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersArrowSwitcherUtilityClass = getPickersArrowSwitcherUtilityClass;
exports.pickersArrowSwitcherClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersArrowSwitcherUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersArrowSwitcher', slot);
}
const pickersArrowSwitcherClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersArrowSwitcher', ['root', 'spacer', 'button']);
exports.pickersArrowSwitcherClasses = pickersArrowSwitcherClasses;

/***/ }),

/***/ 66878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersModalDialog = PickersModalDialog;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _DialogContent = _interopRequireDefault(__webpack_require__(16856));
var _Fade = _interopRequireDefault(__webpack_require__(53602));
var _Dialog = _interopRequireWildcard(__webpack_require__(62969));
var _styles = __webpack_require__(83476);
var _dimensions = __webpack_require__(78774);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const PickersModalDialogRoot = (0, _styles.styled)(_Dialog.default)({
  [`& .${_Dialog.dialogClasses.container}`]: {
    outline: 0
  },
  [`& .${_Dialog.dialogClasses.paper}`]: {
    outline: 0,
    minWidth: _dimensions.DIALOG_WIDTH
  }
});
const PickersModalDialogContent = (0, _styles.styled)(_DialogContent.default)({
  '&:first-of-type': {
    padding: 0
  }
});
function PickersModalDialog(props) {
  const {
    children,
    onDismiss,
    open,
    slots,
    slotProps
  } = props;
  const Dialog = slots?.dialog ?? PickersModalDialogRoot;
  const Transition = slots?.mobileTransition ?? _Fade.default;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Dialog, (0, _extends2.default)({
    open: open,
    onClose: onDismiss
  }, slotProps?.dialog, {
    TransitionComponent: Transition,
    TransitionProps: slotProps?.mobileTransition,
    PaperComponent: slots?.mobilePaper,
    PaperProps: slotProps?.mobilePaper,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersModalDialogContent, {
      children: children
    })
  }));
}

/***/ }),

/***/ 21570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersPopper = PickersPopper;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(67392);
var _Grow = _interopRequireDefault(__webpack_require__(7209));
var _Paper = _interopRequireDefault(__webpack_require__(52694));
var _Popper = _interopRequireDefault(__webpack_require__(7371));
var _Unstable_TrapFocus = _interopRequireDefault(__webpack_require__(41136));
var _utils2 = __webpack_require__(44268);
var _styles = __webpack_require__(83476);
var _pickersPopperClasses = __webpack_require__(96392);
var _utils3 = __webpack_require__(48861);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    paper: ['paper']
  };
  return (0, _utils2.unstable_composeClasses)(slots, _pickersPopperClasses.getPickersPopperUtilityClass, classes);
};
const PickersPopperRoot = (0, _styles.styled)(_Popper.default, {
  name: 'MuiPickersPopper',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
const PickersPopperPaper = (0, _styles.styled)(_Paper.default, {
  name: 'MuiPickersPopper',
  slot: 'Paper',
  overridesResolver: (_, styles) => styles.paper
})(({
  ownerState
}) => (0, _extends2.default)({
  transformOrigin: 'top center',
  outline: 0
}, ownerState.placement === 'top' && {
  transformOrigin: 'bottom center'
}));
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
 * Based on @mui/material/ClickAwayListener without the customization.
 * We can probably strip away even more since children won't be portaled.
 * @param {boolean} active Only listen to clicks when the popper is opened.
 * @param {(event: MouseEvent | TouchEvent) => void} onClickAway The callback to call when clicking outside the popper.
 * @returns {Array} The ref and event handler to listen to the outside clicks.
 */
function useClickAwayListener(active, onClickAway) {
  const movedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);
  const nodeRef = React.useRef(null);
  const activatedRef = React.useRef(false);
  React.useEffect(() => {
    if (!active) {
      return undefined;
    }

    // Ensure that this hook is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener('mousedown', armClickAwayListener, true);
    document.addEventListener('touchstart', armClickAwayListener, true);
    return () => {
      document.removeEventListener('mousedown', armClickAwayListener, true);
      document.removeEventListener('touchstart', armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = (0, _utils2.unstable_useEventCallback)(event => {
    if (!activatedRef.current) {
      return;
    }

    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = (0, _utils2.unstable_ownerDocument)(nodeRef.current);

    // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.
    if (!nodeRef.current ||
    // is a TouchEvent?
    'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    }

    // Do not act if user performed touchmove
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;

    // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });

  // Keep track of mouse/touch events that bubbled up through the portal.
  const handleSynthetic = () => {
    syntheticEventRef.current = true;
  };
  React.useEffect(() => {
    if (active) {
      const doc = (0, _utils2.unstable_ownerDocument)(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener('touchstart', handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener('touchstart', handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }
    return undefined;
  }, [active, handleClickAway]);
  React.useEffect(() => {
    // TODO This behavior is not tested automatically
    // It's unclear whether this is due to different update semantics in test (batched in act() vs discrete on click).
    // Or if this is a timing related issues due to different Transition components
    // Once we get rid of all the manual scheduling (e.g. setTimeout(update, 0)) we can revisit this code+test.
    if (active) {
      const doc = (0, _utils2.unstable_ownerDocument)(nodeRef.current);
      doc.addEventListener('click', handleClickAway);
      return () => {
        doc.removeEventListener('click', handleClickAway);
        // cleanup `handleClickAway`
        syntheticEventRef.current = false;
      };
    }
    return undefined;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
function PickersPopper(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersPopper'
  });
  const {
    anchorEl,
    children,
    containerRef = null,
    shouldRestoreFocus,
    onBlur,
    onDismiss,
    open,
    role,
    placement,
    slots,
    slotProps
  } = props;
  React.useEffect(() => {
    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Blink?) use 'Esc'
      if (open && (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc')) {
        onDismiss();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onDismiss, open]);
  const lastFocusedElementRef = React.useRef(null);
  React.useEffect(() => {
    if (role === 'tooltip' || shouldRestoreFocus && !shouldRestoreFocus()) {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = (0, _utils3.getActiveElement)(document);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      // make sure the button is flushed with updated label, before returning focus to it
      // avoids issue, where screen reader could fail to announce selected date after selection
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, role, shouldRestoreFocus]);
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, onBlur ?? onDismiss);
  const paperRef = React.useRef(null);
  const handleRef = (0, _utils2.unstable_useForkRef)(paperRef, containerRef);
  const handlePaperRef = (0, _utils2.unstable_useForkRef)(handleRef, clickAwayRef);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      // stop the propagation to avoid closing parent modal
      event.stopPropagation();
      onDismiss();
    }
  };
  const Transition = slots?.desktopTransition ?? _Grow.default;
  const TrapFocus = slots?.desktopTrapFocus ?? _Unstable_TrapFocus.default;
  const Paper = slots?.desktopPaper ?? PickersPopperPaper;
  const paperProps = (0, _utils.useSlotProps)({
    elementType: Paper,
    externalSlotProps: slotProps?.desktopPaper,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: handlePaperRef
    },
    className: classes.paper,
    ownerState: {} // Is overridden below to use `placement
  });

  const Popper = slots?.popper ?? PickersPopperRoot;
  const popperProps = (0, _utils.useSlotProps)({
    elementType: Popper,
    externalSlotProps: slotProps?.popper,
    additionalProps: {
      transition: true,
      role,
      open,
      anchorEl,
      placement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: props
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Popper, (0, _extends2.default)({}, popperProps, {
    children: ({
      TransitionProps,
      placement: popperPlacement
    }) => /*#__PURE__*/(0, _jsxRuntime.jsx)(TrapFocus, (0, _extends2.default)({
      open: open,
      disableAutoFocus: true
      // pickers are managing focus position manually
      // without this prop the focus is returned to the button before `aria-label` is updated
      // which would force screen readers to read too old label
      ,
      disableRestoreFocus: true,
      disableEnforceFocus: role === 'tooltip',
      isEnabled: () => true
    }, slotProps?.desktopTrapFocus, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Transition, (0, _extends2.default)({}, TransitionProps, slotProps?.desktopTransition, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Paper, (0, _extends2.default)({}, paperProps, {
          onClick: event => {
            onPaperClick(event);
            paperProps.onClick?.(event);
          },
          onTouchStart: event => {
            onPaperTouchStart(event);
            paperProps.onTouchStart?.(event);
          },
          ownerState: (0, _extends2.default)({}, ownerState, {
            placement: popperPlacement
          }),
          children: children
        }))
      }))
    }))
  }));
}

/***/ }),

/***/ 33598:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersToolbar = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _Grid = _interopRequireDefault(__webpack_require__(21971));
var _Typography = _interopRequireDefault(__webpack_require__(33987));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _pickersToolbarClasses = __webpack_require__(53733);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ['root'],
    content: ['content'],
    penIconButton: ['penIconButton', isLandscape && 'penIconButtonLandscape']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersToolbarClasses.getPickersToolbarUtilityClass, classes);
};
const PickersToolbarRoot = (0, _styles.styled)('div', {
  name: 'MuiPickersToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3)
}, ownerState.isLandscape && {
  height: 'auto',
  maxWidth: 160,
  padding: 16,
  justifyContent: 'flex-start',
  flexWrap: 'wrap'
}));
const PickersToolbarContent = (0, _styles.styled)(_Grid.default, {
  name: 'MuiPickersToolbar',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(({
  ownerState
}) => (0, _extends2.default)({
  flex: 1
}, !ownerState.isLandscape && {
  alignItems: 'center'
}));
const PickersToolbar = /*#__PURE__*/React.forwardRef(function PickersToolbar(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersToolbar'
  });
  const {
    children,
    className,
    isLandscape,
    landscapeDirection = 'column',
    toolbarTitle,
    hidden,
    titleId
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  if (hidden) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(PickersToolbarRoot, {
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersToolbarContent, {
      container: true,
      justifyContent: isLandscape ? 'flex-start' : 'space-between',
      className: classes.content,
      ownerState: ownerState,
      direction: isLandscape ? landscapeDirection : 'row',
      alignItems: isLandscape ? 'flex-start' : 'flex-end',
      children: children
    })]
  });
});
exports.PickersToolbar = PickersToolbar;

/***/ }),

/***/ 13052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersToolbarButton = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _Button = _interopRequireDefault(__webpack_require__(16614));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _PickersToolbarText = __webpack_require__(65281);
var _pickersToolbarClasses = __webpack_require__(53733);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["align", "className", "selected", "typographyClassName", "value", "variant", "width"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersToolbarClasses.getPickersToolbarUtilityClass, classes);
};
const PickersToolbarButtonRoot = (0, _styles.styled)(_Button.default, {
  name: 'MuiPickersToolbarButton',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: 'none'
});
const PickersToolbarButton = /*#__PURE__*/React.forwardRef(function PickersToolbarButton(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersToolbarButton'
  });
  const {
      align,
      className,
      selected,
      typographyClassName,
      value,
      variant,
      width
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const classes = useUtilityClasses(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersToolbarButtonRoot, (0, _extends2.default)({
    variant: "text",
    ref: ref,
    className: (0, _clsx.default)(className, classes.root)
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarText.PickersToolbarText, {
      align: align,
      className: typographyClassName,
      variant: variant,
      value: value,
      selected: selected
    })
  }));
});
exports.PickersToolbarButton = PickersToolbarButton;

/***/ }),

/***/ 65281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PickersToolbarText = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _Typography = _interopRequireDefault(__webpack_require__(33987));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _pickersToolbarTextClasses = __webpack_require__(59824);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "selected", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected']
  };
  return (0, _utils.unstable_composeClasses)(slots, _pickersToolbarTextClasses.getPickersToolbarTextUtilityClass, classes);
};
const PickersToolbarTextRoot = (0, _styles.styled)(_Typography.default, {
  name: 'MuiPickersToolbarText',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${_pickersToolbarTextClasses.pickersToolbarTextClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create('color'),
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${_pickersToolbarTextClasses.pickersToolbarTextClasses.selected}`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
const PickersToolbarText = /*#__PURE__*/React.forwardRef(function PickersToolbarText(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPickersToolbarText'
  });
  const {
      className,
      value
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const classes = useUtilityClasses(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PickersToolbarTextRoot, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});
exports.PickersToolbarText = PickersToolbarText;

/***/ }),

/***/ 96392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersPopperUtilityClass = getPickersPopperUtilityClass;
exports.pickersPopperClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersPopperUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersPopper', slot);
}
const pickersPopperClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersPopper', ['root', 'paper']);
exports.pickersPopperClasses = pickersPopperClasses;

/***/ }),

/***/ 16154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersToolbarButtonUtilityClass = getPickersToolbarButtonUtilityClass;
exports.pickersToolbarButtonClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersToolbarButtonUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersToolbarButton', slot);
}
const pickersToolbarButtonClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersToolbarButton', ['root']);
exports.pickersToolbarButtonClasses = pickersToolbarButtonClasses;

/***/ }),

/***/ 53733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersToolbarUtilityClass = getPickersToolbarUtilityClass;
exports.pickersToolbarClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersToolbarUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersToolbar', slot);
}
const pickersToolbarClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersToolbar', ['root', 'content']);
exports.pickersToolbarClasses = pickersToolbarClasses;

/***/ }),

/***/ 59824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersToolbarTextUtilityClass = getPickersToolbarTextUtilityClass;
exports.pickersToolbarTextClasses = void 0;
var _utils = __webpack_require__(44268);
function getPickersToolbarTextUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiPickersToolbarText', slot);
}
const pickersToolbarTextClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPickersToolbarText', ['root', 'selected']);
exports.pickersToolbarTextClasses = pickersToolbarTextClasses;

/***/ }),

/***/ 78774:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.VIEW_HEIGHT = exports.MULTI_SECTION_CLOCK_SECTION_WIDTH = exports.DIGITAL_CLOCK_VIEW_HEIGHT = exports.DIALOG_WIDTH = exports.DAY_SIZE = exports.DAY_MARGIN = void 0;
const DAY_SIZE = 36;
exports.DAY_SIZE = DAY_SIZE;
const DAY_MARGIN = 2;
exports.DAY_MARGIN = DAY_MARGIN;
const DIALOG_WIDTH = 320;
exports.DIALOG_WIDTH = DIALOG_WIDTH;
const VIEW_HEIGHT = 358;
exports.VIEW_HEIGHT = VIEW_HEIGHT;
const DIGITAL_CLOCK_VIEW_HEIGHT = 232;
exports.DIGITAL_CLOCK_VIEW_HEIGHT = DIGITAL_CLOCK_VIEW_HEIGHT;
const MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;
exports.MULTI_SECTION_CLOCK_SECTION_WIDTH = MULTI_SECTION_CLOCK_SECTION_WIDTH;

/***/ }),

/***/ 65075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useMeridiemMode = useMeridiemMode;
exports.useNextMonthDisabled = useNextMonthDisabled;
exports.usePreviousMonthDisabled = usePreviousMonthDisabled;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useUtils = __webpack_require__(72979);
var _timeUtils = __webpack_require__(49903);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const utils = (0, _useUtils.useUtils)();
  return React.useMemo(() => {
    const now = utils.dateWithTimezone(undefined, timezone);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const utils = (0, _useUtils.useUtils)();
  return React.useMemo(() => {
    const now = utils.dateWithTimezone(undefined, timezone);
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils, timezone]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const utils = (0, _useUtils.useUtils)();
  const meridiemMode = (0, _timeUtils.getMeridiem)(date, utils);
  const handleMeridiemChange = React.useCallback(mode => {
    const timeWithMeridiem = date == null ? null : (0, _timeUtils.convertToMeridiem)(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, selectionState ?? 'partial');
  }, [ampm, date, onChange, selectionState, utils]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}

/***/ }),

/***/ 90370:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDefaultReduceAnimations = exports.defaultReduceAnimations = void 0;
var _useMediaQuery = _interopRequireDefault(__webpack_require__(72586));
const PREFERS_REDUCED_MOTION = '@media (prefers-reduced-motion: reduce)';
const defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
exports.defaultReduceAnimations = defaultReduceAnimations;
const useDefaultReduceAnimations = () => {
  const prefersReduced = (0, _useMediaQuery.default)(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  return prefersReduced || defaultReduceAnimations;
};
exports.useDefaultReduceAnimations = useDefaultReduceAnimations;

/***/ }),

/***/ 80280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useDesktopPicker", ({
  enumerable: true,
  get: function () {
    return _useDesktopPicker.useDesktopPicker;
  }
}));
var _useDesktopPicker = __webpack_require__(27853);

/***/ }),

/***/ 27853:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDesktopPicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(67392);
var _InputAdornment = _interopRequireDefault(__webpack_require__(3683));
var _IconButton = _interopRequireDefault(__webpack_require__(48060));
var _useForkRef = _interopRequireDefault(__webpack_require__(59272));
var _useId = _interopRequireDefault(__webpack_require__(62000));
var _PickersPopper = __webpack_require__(21570);
var _useUtils = __webpack_require__(72979);
var _usePicker = __webpack_require__(26161);
var _LocalizationProvider = __webpack_require__(64763);
var _PickersLayout = __webpack_require__(43485);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["props", "getOpenDialogAriaText"],
  _excluded2 = ["ownerState"],
  _excluded3 = ["ownerState"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Hook managing all the single-date desktop pickers:
 * - DesktopDatePicker
 * - DesktopDateTimePicker
 * - DesktopTimePicker
 */
const useDesktopPicker = _ref => {
  let {
      props,
      getOpenDialogAriaText
    } = _ref,
    pickerParams = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    timezone,
    label,
    inputRef,
    readOnly,
    disabled,
    autoFocus,
    localeText
  } = props;
  const utils = (0, _useUtils.useUtils)();
  const internalInputRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const labelId = (0, _useId.default)();
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const {
    open,
    actions,
    hasUIView,
    layoutProps,
    renderCurrentView,
    shouldRestoreFocus,
    fieldProps: pickerFieldProps
  } = (0, _usePicker.usePicker)((0, _extends2.default)({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: 'desktop'
  }));
  const InputAdornment = slots.inputAdornment ?? _InputAdornment.default;
  const _useSlotProps = (0, _utils.useSlotProps)({
      elementType: InputAdornment,
      externalSlotProps: innerSlotProps?.inputAdornment,
      additionalProps: {
        position: 'end'
      },
      ownerState: props
    }),
    inputAdornmentProps = (0, _objectWithoutPropertiesLoose2.default)(_useSlotProps, _excluded2);
  const OpenPickerButton = slots.openPickerButton ?? _IconButton.default;
  const _useSlotProps2 = (0, _utils.useSlotProps)({
      elementType: OpenPickerButton,
      externalSlotProps: innerSlotProps?.openPickerButton,
      additionalProps: {
        disabled: disabled || readOnly,
        onClick: actions.onOpen,
        'aria-label': getOpenDialogAriaText(pickerFieldProps.value, utils),
        edge: inputAdornmentProps.position
      },
      ownerState: props
    }),
    openPickerButtonProps = (0, _objectWithoutPropertiesLoose2.default)(_useSlotProps2, _excluded3);
  const OpenPickerIcon = slots.openPickerIcon;
  const Field = slots.field;
  const fieldProps = (0, _utils.useSlotProps)({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: (0, _extends2.default)({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, {
      readOnly,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone,
      label,
      autoFocus: autoFocus && !props.open,
      focused: open ? true : undefined
    }),
    ownerState: props
  });

  // TODO: Move to `useSlotProps` when https://github.com/mui/material-ui/pull/35088 will be merged
  if (hasUIView) {
    fieldProps.InputProps = (0, _extends2.default)({}, fieldProps.InputProps, {
      ref: containerRef,
      [`${inputAdornmentProps.position}Adornment`]: /*#__PURE__*/(0, _jsxRuntime.jsx)(InputAdornment, (0, _extends2.default)({}, inputAdornmentProps, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(OpenPickerButton, (0, _extends2.default)({}, openPickerButtonProps, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(OpenPickerIcon, (0, _extends2.default)({}, innerSlotProps?.openPickerIcon))
        }))
      }))
    });
  }
  const slotsForField = (0, _extends2.default)({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = slots.layout ?? _PickersLayout.PickersLayout;
  const handleInputRef = (0, _useForkRef.default)(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = undefined;
    }
  }
  const slotProps = (0, _extends2.default)({}, innerSlotProps, {
    toolbar: (0, _extends2.default)({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    popper: (0, _extends2.default)({
      'aria-labelledby': labelledById
    }, innerSlotProps?.popper)
  });
  const renderPicker = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_LocalizationProvider.LocalizationProvider, {
    localeText: localeText,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Field, (0, _extends2.default)({}, fieldProps, {
      slots: slotsForField,
      slotProps: slotProps,
      inputRef: handleInputRef
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersPopper.PickersPopper, (0, _extends2.default)({
      role: "dialog",
      placement: "bottom-start",
      anchorEl: containerRef.current
    }, actions, {
      open: open,
      slots: slots,
      slotProps: slotProps,
      shouldRestoreFocus: shouldRestoreFocus,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Layout, (0, _extends2.default)({}, layoutProps, slotProps?.layout, {
        slots: slots,
        slotProps: slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
exports.useDesktopPicker = useDesktopPicker;

/***/ }),

/***/ 3022:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "addPositionPropertiesToSections", ({
  enumerable: true,
  get: function () {
    return _useField2.addPositionPropertiesToSections;
  }
}));
Object.defineProperty(exports, "createDateStrForInputFromSections", ({
  enumerable: true,
  get: function () {
    return _useField2.createDateStrForInputFromSections;
  }
}));
Object.defineProperty(exports, "splitFormatIntoSections", ({
  enumerable: true,
  get: function () {
    return _useField2.splitFormatIntoSections;
  }
}));
Object.defineProperty(exports, "useField", ({
  enumerable: true,
  get: function () {
    return _useField.useField;
  }
}));
var _useField = __webpack_require__(76203);
var _useField2 = __webpack_require__(98855);

/***/ }),

/***/ 76203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useField = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEnhancedEffect = _interopRequireDefault(__webpack_require__(90095));
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _useForkRef = _interopRequireDefault(__webpack_require__(59272));
var _styles = __webpack_require__(83476);
var _useValidation = __webpack_require__(12003);
var _useUtils = __webpack_require__(72979);
var _useField = __webpack_require__(98855);
var _useFieldState = __webpack_require__(60314);
var _useFieldCharacterEditing = __webpack_require__(38996);
var _utils = __webpack_require__(48861);
const _excluded = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useField = params => {
  const utils = (0, _useUtils.useUtils)();
  const {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder,
    timezone
  } = (0, _useFieldState.useFieldState)(params);
  const {
      inputRef: inputRefProp,
      internalProps,
      internalProps: {
        readOnly = false,
        unstableFieldRef,
        minutesStep
      },
      forwardedProps: {
        onClick,
        onKeyDown,
        onFocus,
        onBlur,
        onMouseUp,
        onPaste,
        error
      },
      fieldValueManager,
      valueManager,
      validator
    } = params,
    otherForwardedProps = (0, _objectWithoutPropertiesLoose2.default)(params.forwardedProps, _excluded);
  const {
    applyCharacterEditing,
    resetCharacterQuery
  } = (0, _useFieldCharacterEditing.useFieldCharacterEditing)({
    sections: state.sections,
    updateSectionValue,
    sectionsValueBoundaries,
    setTempAndroidValueStr,
    timezone
  });
  const inputRef = React.useRef(null);
  const handleRef = (0, _useForkRef.default)(inputRefProp, inputRef);
  const focusTimeoutRef = React.useRef(undefined);
  const theme = (0, _styles.useTheme)();
  const isRTL = theme.direction === 'rtl';
  const sectionOrder = React.useMemo(() => (0, _useField.getSectionOrder)(state.sections, isRTL), [state.sections, isRTL]);
  const syncSelectionFromDOM = () => {
    if (readOnly) {
      setSelectedSections(null);
      return;
    }
    const browserStartIndex = inputRef.current.selectionStart ?? 0;
    let nextSectionIndex;
    if (browserStartIndex <= state.sections[0].startInInput) {
      // Special case if browser index is in invisible characters at the beginning
      nextSectionIndex = 1;
    } else if (browserStartIndex >= state.sections[state.sections.length - 1].endInInput) {
      // If the click is after the last character of the input, then we want to select the 1st section.
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = state.sections.findIndex(section => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  };
  const handleInputClick = (0, _useEventCallback.default)((...args) => {
    onClick?.(...args);
    syncSelectionFromDOM();
  });
  const handleInputMouseUp = (0, _useEventCallback.default)(event => {
    onMouseUp?.(event);

    // Without this, the browser will remove the selected when clicking inside an already-selected section.
    event.preventDefault();
  });
  const handleInputFocus = (0, _useEventCallback.default)((...args) => {
    onFocus?.(...args);
    // The ref is guaranteed to be resolved at this point.
    const input = inputRef.current;
    window.clearTimeout(focusTimeoutRef.current);
    focusTimeoutRef.current = setTimeout(() => {
      // The ref changed, the component got remounted, the focus event is no longer relevant.
      if (!input || input !== inputRef.current) {
        return;
      }
      if (selectedSectionIndexes != null || readOnly) {
        return;
      }
      if (
      // avoid selecting all sections when focusing empty field without value
      input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length) {
        setSelectedSections('all');
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputBlur = (0, _useEventCallback.default)((...args) => {
    onBlur?.(...args);
    setSelectedSections(null);
  });
  const handleInputPaste = (0, _useEventCallback.default)(event => {
    onPaste?.(event);
    if (readOnly) {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData('text');
    if (selectedSectionIndexes && selectedSectionIndexes.startIndex === selectedSectionIndexes.endIndex) {
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === 'letter' && lettersOnly || activeSection.contentType === 'digit' && digitsOnly || activeSection.contentType === 'digit-with-letter' && digitsAndLetterOnly;
      if (isValidPastedValue) {
        // Early return to let the paste update section, value
        return;
      }
      if (lettersOnly || digitsOnly) {
        // The pasted value correspond to a single section but not the expected type
        // skip the modification
        event.preventDefault();
        return;
      }
    }
    event.preventDefault();
    resetCharacterQuery();
    updateValueFromValueStr(pastedValue);
  });
  const handleInputChange = (0, _useEventCallback.default)(event => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    const eventData = event.nativeEvent.data;
    // Calling `.fill(04/11/2022)` in playwright will trigger a change event with the requested content to insert in `event.nativeEvent.data`
    // usual changes have only the currently typed character in the `event.nativeEvent.data`
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = (0, _useField.cleanString)(valueStr);

    // If no section is selected or eventData should be used, we just try to parse the new value
    // This line is mostly triggered by imperative code / application tests.
    if (selectedSectionIndexes == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1 && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = (0, _useField.cleanString)(fieldValueManager.getValueStrFromSections(state.sections, isRTL));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        // TODO: Support if the new date is valid
        return;
      }

      // The active section being selected, the browser has replaced its value with the key pressed by the user.
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - (0, _useField.cleanString)(activeSection.endSeparator || '').length;
      keyPressed = cleanValueStr.slice(activeSection.start + (0, _useField.cleanString)(activeSection.startSeparator || '').length, activeSectionEndRelativeToNewValue);
    }
    if ((0, _useField.isAndroid)() && keyPressed.length === 0) {
      setTempAndroidValueStr(valueStr);
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: selectedSectionIndexes.startIndex
    });
  });
  const handleInputKeyDown = (0, _useEventCallback.default)(event => {
    onKeyDown?.(event);

    // eslint-disable-next-line default-case
    switch (true) {
      // Select all
      case event.key === 'a' && (event.ctrlKey || event.metaKey):
        {
          // prevent default to make sure that the next line "select all" while updating
          // the internal state at the same time.
          event.preventDefault();
          setSelectedSections('all');
          break;
        }

      // Move selection to next section
      case event.key === 'ArrowRight':
        {
          event.preventDefault();
          if (selectedSectionIndexes == null) {
            setSelectedSections(sectionOrder.startIndex);
          } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
            setSelectedSections(selectedSectionIndexes.endIndex);
          } else {
            const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].rightIndex;
            if (nextSectionIndex !== null) {
              setSelectedSections(nextSectionIndex);
            }
          }
          break;
        }

      // Move selection to previous section
      case event.key === 'ArrowLeft':
        {
          event.preventDefault();
          if (selectedSectionIndexes == null) {
            setSelectedSections(sectionOrder.endIndex);
          } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
            setSelectedSections(selectedSectionIndexes.startIndex);
          } else {
            const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].leftIndex;
            if (nextSectionIndex !== null) {
              setSelectedSections(nextSectionIndex);
            }
          }
          break;
        }

      // Reset the value of the selected section
      case ['Backspace', 'Delete'].includes(event.key):
        {
          event.preventDefault();
          if (readOnly) {
            break;
          }
          if (selectedSectionIndexes == null || selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1) {
            clearValue();
          } else {
            clearActiveSection();
          }
          resetCharacterQuery();
          break;
        }

      // Increment / decrement the selected section value
      case ['ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key):
        {
          event.preventDefault();
          if (readOnly || selectedSectionIndexes == null) {
            break;
          }
          const activeSection = state.sections[selectedSectionIndexes.startIndex];
          const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
          const newSectionValue = (0, _useField.adjustSectionValue)(utils, timezone, activeSection, event.key, sectionsValueBoundaries, activeDateManager.date, {
            minutesStep
          });
          updateSectionValue({
            activeSection,
            newSectionValue,
            shouldGoToNextSection: false
          });
          break;
        }
    }
  });
  (0, _useEnhancedEffect.default)(() => {
    if (!inputRef.current) {
      return;
    }
    if (selectedSectionIndexes == null) {
      if (inputRef.current.scrollLeft) {
        // Ensure that input content is not marked as selected.
        // setting selection range to 0 causes issues in Safari.
        // https://bugs.webkit.org/show_bug.cgi?id=224425
        inputRef.current.scrollLeft = 0;
      }
      return;
    }
    const firstSelectedSection = state.sections[selectedSectionIndexes.startIndex];
    const lastSelectedSection = state.sections[selectedSectionIndexes.endIndex];
    let selectionStart = firstSelectedSection.startInInput;
    let selectionEnd = lastSelectedSection.endInInput;
    if (selectedSectionIndexes.shouldSelectBoundarySelectors) {
      selectionStart -= firstSelectedSection.startSeparator.length;
      selectionEnd += lastSelectedSection.endSeparator.length;
    }
    if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
      // Fix scroll jumping on iOS browser: https://github.com/mui/mui-x/issues/8321
      const currentScrollTop = inputRef.current.scrollTop;
      // On multi input range pickers we want to update selection range only for the active input
      // This helps avoiding the focus jumping on Safari https://github.com/mui/mui-x/issues/9003
      // because WebKit implements the `setSelectionRange` based on the spec: https://bugs.webkit.org/show_bug.cgi?id=224425
      if (inputRef.current === (0, _utils.getActiveElement)(document)) {
        inputRef.current.setSelectionRange(selectionStart, selectionEnd);
      }
      // Even reading this variable seems to do the trick, but also setting it just to make use of it
      inputRef.current.scrollTop = currentScrollTop;
    }
  });
  const validationError = (0, _useValidation.useValidation)((0, _extends2.default)({}, internalProps, {
    value: state.value,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const inputError = React.useMemo(() => {
    // only override when `error` is undefined.
    // in case of multi input fields, the `error` value is provided externally and will always be defined.
    if (error !== undefined) {
      return error;
    }
    return valueManager.hasError(validationError);
  }, [valueManager, validationError, error]);
  React.useEffect(() => {
    if (!inputError && !selectedSectionIndexes) {
      resetCharacterQuery();
    }
  }, [state.referenceValue, selectedSectionIndexes, inputError]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    // Select the right section when focused on mount (`autoFocus = true` on the input)
    if (inputRef.current && inputRef.current === document.activeElement) {
      setSelectedSections('all');
    }
    return () => window.clearTimeout(focusTimeoutRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // If `state.tempValueStrAndroid` is still defined when running `useEffect`,
  // Then `onChange` has only been called once, which means the user pressed `Backspace` to reset the section.
  // This causes a small flickering on Android,
  // But we can't use `useEnhancedEffect` which is always called before the second `onChange` call and then would cause false positives.
  React.useEffect(() => {
    if (state.tempValueStrAndroid != null && selectedSectionIndexes != null) {
      resetCharacterQuery();
      clearActiveSection();
    }
  }, [state.tempValueStrAndroid]); // eslint-disable-line react-hooks/exhaustive-deps

  const valueStr = React.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getValueStrFromSections(state.sections, isRTL), [state.sections, fieldValueManager, state.tempValueStrAndroid, isRTL]);
  const inputMode = React.useMemo(() => {
    if (selectedSectionIndexes == null) {
      return 'text';
    }
    if (state.sections[selectedSectionIndexes.startIndex].contentType === 'letter') {
      return 'text';
    }
    return 'tel';
  }, [selectedSectionIndexes, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === (0, _utils.getActiveElement)(document);
  const shouldShowPlaceholder = !inputHasFocus && valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue);
  React.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      const browserStartIndex = inputRef.current.selectionStart ?? 0;
      const browserEndIndex = inputRef.current.selectionEnd ?? 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= state.sections[0].startInInput ? 1 // Special case if browser index is in invisible characters at the beginning.
      : state.sections.findIndex(section => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: activeSectionIndex => setSelectedSections(activeSectionIndex)
  }));
  return (0, _extends2.default)({
    placeholder,
    autoComplete: 'off'
  }, otherForwardedProps, {
    value: shouldShowPlaceholder ? '' : valueStr,
    inputMode,
    readOnly,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onPaste: handleInputPaste,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
    onMouseUp: handleInputMouseUp,
    error: inputError,
    ref: handleRef
  });
};
exports.useField = useField;

/***/ }),

/***/ 98855:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.validateSections = exports.splitFormatIntoSections = exports.mergeDateIntoReferenceDate = exports.isAndroid = exports.getSectionsBoundaries = exports.getSectionVisibleValue = exports.getSectionOrder = exports.getLetterEditingOptions = exports.getDaysInWeekStr = exports.getDateSectionConfigFromFormatToken = exports.getDateFromDateSections = exports.doesSectionFormatHaveLeadingZeros = exports.createDateStrForInputFromSections = exports.cleanString = exports.cleanLeadingZeros = exports.cleanDigitSectionValue = exports.clampDaySectionIfPossible = exports.changeSectionValueFormat = exports.adjustSectionValue = exports.addPositionPropertiesToSections = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _dateUtils = __webpack_require__(58759);
const getDateSectionConfigFromFormatToken = (utils, formatToken) => {
  const config = utils.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI: The token "${formatToken}" is not supported by the Date and Time Pickers.`, 'Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported.'].join('\n'));
  }
  if (typeof config === 'string') {
    return {
      type: config,
      contentType: config === 'meridiem' ? 'letter' : 'digit',
      maxLength: undefined
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
exports.getDateSectionConfigFromFormatToken = getDateSectionConfigFromFormatToken;
const getDeltaFromKeyCode = keyCode => {
  switch (keyCode) {
    case 'ArrowUp':
      return 1;
    case 'ArrowDown':
      return -1;
    case 'PageUp':
      return 5;
    case 'PageDown':
      return -5;
    default:
      return 0;
  }
};
const getDaysInWeekStr = (utils, timezone, format) => {
  const elements = [];
  const now = utils.dateWithTimezone(undefined, timezone);
  const startDate = utils.startOfWeek(now);
  const endDate = utils.endOfWeek(now);
  let current = startDate;
  while (utils.isBefore(current, endDate)) {
    elements.push(current);
    current = utils.addDays(current, 1);
  }
  return elements.map(weekDay => utils.formatByString(weekDay, format));
};
exports.getDaysInWeekStr = getDaysInWeekStr;
const getLetterEditingOptions = (utils, timezone, sectionType, format) => {
  switch (sectionType) {
    case 'month':
      {
        return (0, _dateUtils.getMonthsInYear)(utils, utils.dateWithTimezone(undefined, timezone)).map(month => utils.formatByString(month, format));
      }
    case 'weekDay':
      {
        return getDaysInWeekStr(utils, timezone, format);
      }
    case 'meridiem':
      {
        const now = utils.dateWithTimezone(undefined, timezone);
        return [utils.startOfDay(now), utils.endOfDay(now)].map(date => utils.formatByString(date, format));
      }
    default:
      {
        return [];
      }
  }
};
exports.getLetterEditingOptions = getLetterEditingOptions;
const cleanLeadingZeros = (utils, valueStr, size) => {
  let cleanValueStr = valueStr;

  // Remove the leading zeros
  cleanValueStr = Number(cleanValueStr).toString();

  // Add enough leading zeros to fill the section
  while (cleanValueStr.length < size) {
    cleanValueStr = `0${cleanValueStr}`;
  }
  return cleanValueStr;
};
exports.cleanLeadingZeros = cleanLeadingZeros;
const cleanDigitSectionValue = (utils, timezone, value, sectionBoundaries, section) => {
  if (false) {}
  if (section.type === 'day' && section.contentType === 'digit-with-letter') {
    const date = utils.setDate(sectionBoundaries.longestMonth, value);
    return utils.formatByString(date, section.format);
  }

  // queryValue without leading `0` (`01` => `1`)
  const valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    return cleanLeadingZeros(utils, valueStr, section.maxLength);
  }
  return valueStr;
};
exports.cleanDigitSectionValue = cleanDigitSectionValue;
const adjustSectionValue = (utils, timezone, section, keyCode, sectionsValueBoundaries, activeDate, stepsAttributes) => {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === 'Home';
  const isEnd = keyCode === 'End';
  const shouldSetAbsolute = section.value === '' || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = value => cleanDigitSectionValue(utils, timezone, value, sectionBoundaries, section);
    const step = section.type === 'minutes' && stepsAttributes?.minutesStep ? stepsAttributes.minutesStep : 1;
    const currentSectionValue = parseInt(section.value, 10);
    let newSectionValueNumber = currentSectionValue + delta * step;
    if (shouldSetAbsolute) {
      if (section.type === 'year' && !isEnd && !isStart) {
        return utils.formatByString(utils.dateWithTimezone(undefined, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step; // for JS -3 % 5 = -3 (should be 2)
      }

      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(utils, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + options.length + delta) % options.length;
    return options[newOptionIndex];
  };
  if (section.contentType === 'digit' || section.contentType === 'digit-with-letter') {
    return adjustDigitSection();
  }
  return adjustLetterSection();
};
exports.adjustSectionValue = adjustSectionValue;
const getSectionVisibleValue = (section, target) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === 'non-input' ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === 'non-input' && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(value).toString();
  }

  // In the input, we add an empty character at the end of each section without leading zeros.
  // This makes sure that `onChange` will always be fired.
  // Otherwise, when your input value equals `1/dd/yyyy` (format `M/DD/YYYY` on DayJs),
  // If you press `1`, on the first section, the new value is also `1/dd/yyyy`,
  // So the browser will not fire the input `onChange`.
  const shouldAddInvisibleSpace = ['input-rtl', 'input-ltr'].includes(target) && section.contentType === 'digit' && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}\u200e`;
  }
  if (target === 'input-rtl') {
    value = `\u2068${value}\u2069`;
  }
  return value;
};
exports.getSectionVisibleValue = getSectionVisibleValue;
const cleanString = dirtyString => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, '');
exports.cleanString = cleanString;
const addPositionPropertiesToSections = (sections, isRTL) => {
  let position = 0;
  let positionInInput = isRTL ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRTL ? 'input-rtl' : 'input-ltr');
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;

    // The ...InInput values consider the unicode characters but do include them in their indexes
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + renderedValue.indexOf(cleanedValue[0]) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push((0, _extends2.default)({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    // Move position to the end of string associated to the current section
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
exports.addPositionPropertiesToSections = addPositionPropertiesToSections;
const getSectionPlaceholder = (utils, timezone, localeText, sectionConfig, currentTokenValue) => {
  switch (sectionConfig.type) {
    case 'year':
      {
        return localeText.fieldYearPlaceholder({
          digitAmount: utils.formatByString(utils.dateWithTimezone(undefined, timezone), currentTokenValue).length
        });
      }
    case 'month':
      {
        return localeText.fieldMonthPlaceholder({
          contentType: sectionConfig.contentType
        });
      }
    case 'day':
      {
        return localeText.fieldDayPlaceholder();
      }
    case 'weekDay':
      {
        return localeText.fieldWeekDayPlaceholder({
          contentType: sectionConfig.contentType
        });
      }
    case 'hours':
      {
        return localeText.fieldHoursPlaceholder();
      }
    case 'minutes':
      {
        return localeText.fieldMinutesPlaceholder();
      }
    case 'seconds':
      {
        return localeText.fieldSecondsPlaceholder();
      }
    case 'meridiem':
      {
        return localeText.fieldMeridiemPlaceholder();
      }
    default:
      {
        return currentTokenValue;
      }
  }
};
const changeSectionValueFormat = (utils, valueStr, currentFormat, newFormat) => {
  if (false) {}
  return utils.formatByString(utils.parse(valueStr, currentFormat), newFormat);
};
exports.changeSectionValueFormat = changeSectionValueFormat;
const isFourDigitYearFormat = (utils, timezone, format) => utils.formatByString(utils.dateWithTimezone(undefined, timezone), format).length === 4;
const doesSectionFormatHaveLeadingZeros = (utils, timezone, contentType, sectionType, format) => {
  if (contentType !== 'digit') {
    return false;
  }
  const now = utils.dateWithTimezone(undefined, timezone);
  switch (sectionType) {
    // We can't use `changeSectionValueFormat`, because  `utils.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case 'year':
      {
        if (isFourDigitYearFormat(utils, timezone, format)) {
          const formatted0001 = utils.formatByString(utils.setYear(now, 1), format);
          return formatted0001 === '0001';
        }
        const formatted2001 = utils.formatByString(utils.setYear(now, 2001), format);
        return formatted2001 === '01';
      }
    case 'month':
      {
        return utils.formatByString(utils.startOfYear(now), format).length > 1;
      }
    case 'day':
      {
        return utils.formatByString(utils.startOfMonth(now), format).length > 1;
      }
    case 'weekDay':
      {
        return utils.formatByString(utils.startOfWeek(now), format).length > 1;
      }
    case 'hours':
      {
        return utils.formatByString(utils.setHours(now, 1), format).length > 1;
      }
    case 'minutes':
      {
        return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
      }
    case 'seconds':
      {
        return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
      }
    default:
      {
        throw new Error('Invalid section type');
      }
  }
};
exports.doesSectionFormatHaveLeadingZeros = doesSectionFormatHaveLeadingZeros;
const getEscapedPartsFromFormat = (utils, format) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = utils.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, 'g');
  let match = null;
  // eslint-disable-next-line no-cond-assign
  while (match = regExp.exec(format)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
const splitFormatIntoSections = (utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL) => {
  let startSeparator = '';
  const sections = [];
  const now = utils.date();
  const commitToken = token => {
    if (token === '') {
      return null;
    }
    const sectionConfig = getDateSectionConfigFromFormatToken(utils, token);
    const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, timezone, sectionConfig.contentType, sectionConfig.type, token);
    const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === 'digit';
    const isValidDate = date != null && utils.isValid(date);
    let sectionValue = isValidDate ? utils.formatByString(date, token) : '';
    let maxLength = null;
    if (hasLeadingZerosInInput) {
      if (hasLeadingZerosInFormat) {
        maxLength = sectionValue === '' ? utils.formatByString(now, token).length : sectionValue.length;
      } else {
        if (sectionConfig.maxLength == null) {
          throw new Error(`MUI: The token ${token} should have a 'maxDigitNumber' property on it's adapter`);
        }
        maxLength = sectionConfig.maxLength;
        if (isValidDate) {
          sectionValue = cleanLeadingZeros(utils, sectionValue, maxLength);
        }
      }
    }
    sections.push((0, _extends2.default)({}, sectionConfig, {
      format: token,
      maxLength,
      value: sectionValue,
      placeholder: getSectionPlaceholder(utils, timezone, localeText, sectionConfig, token),
      hasLeadingZeros: hasLeadingZerosInFormat,
      hasLeadingZerosInFormat,
      hasLeadingZerosInInput,
      startSeparator: sections.length === 0 ? startSeparator : '',
      endSeparator: '',
      modified: false
    }));
    return null;
  };

  // Expand the provided format
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = utils.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = utils.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error('MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component');
    }
  }
  const expandedFormat = nextFormat;

  // Get start/end indexes of escaped sections
  const escapedParts = getEscapedPartsFromFormat(utils, expandedFormat);

  // This RegExp test if the beginning of a string correspond to a supported token
  const isTokenStartRegExp = new RegExp(`^(${Object.keys(utils.formatTokenMap).join('|')})`);
  let currentTokenValue = '';
  for (let i = 0; i < expandedFormat.length; i += 1) {
    const escapedPartOfCurrentChar = escapedParts.find(escapeIndex => escapeIndex.start <= i && escapeIndex.end >= i);
    const char = expandedFormat[i];
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const potentialToken = `${currentTokenValue}${expandedFormat.slice(i)}`;
    if (!isEscapedChar && char.match(/([A-Za-z]+)/) && isTokenStartRegExp.test(potentialToken)) {
      currentTokenValue += char;
    } else {
      // If we are on the opening or closing character of an escaped part of the format,
      // Then we ignore this character.
      const isEscapeBoundary = isEscapedChar && escapedPartOfCurrentChar?.start === i || escapedPartOfCurrentChar?.end === i;
      if (!isEscapeBoundary) {
        commitToken(currentTokenValue);
        currentTokenValue = '';
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
        }
      }
    }
  }
  commitToken(currentTokenValue);
  return sections.map(section => {
    const cleanSeparator = separator => {
      let cleanedSeparator = separator;
      if (isRTL && cleanedSeparator !== null && cleanedSeparator.includes(' ')) {
        cleanedSeparator = `\u2069${cleanedSeparator}\u2066`;
      }
      if (formatDensity === 'spacious' && ['/', '.', '-'].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};

/**
 * Some date libraries like `dayjs` don't support parsing from date with escaped characters.
 * To make sure that the parsing works, we are building a format and a date without any separator.
 */
exports.splitFormatIntoSections = splitFormatIntoSections;
const getDateFromDateSections = (utils, sections) => {
  // If we have both a day and a weekDay section,
  // Then we skip the weekDay in the parsing because libraries like dayjs can't parse complicated formats containing a weekDay.
  // dayjs(dayjs().format('dddd MMMM D YYYY'), 'dddd MMMM D YYYY')) // returns `Invalid Date` even if the format is valid.
  const shouldSkipWeekDays = sections.some(section => section.type === 'day');
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === 'weekDay';
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, 'non-input'));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(' ');
  const dateWithoutSeparatorStr = sectionValues.join(' ');
  return utils.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
exports.getDateFromDateSections = getDateFromDateSections;
const createDateStrForInputFromSections = (sections, isRTL) => {
  const formattedSections = sections.map(section => {
    const dateValue = getSectionVisibleValue(section, isRTL ? 'input-rtl' : 'input-ltr');
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join('');
  if (!isRTL) {
    return dateStr;
  }

  // \u2066: start left-to-right isolation
  // \u2067: start right-to-left isolation
  // \u2068: start first strong character isolation
  // \u2069: pop isolation
  // wrap into an isolated group such that separators can split the string in smaller ones by adding \u2069\u2068
  return `\u2066${dateStr}\u2069`;
};
exports.createDateStrForInputFromSections = createDateStrForInputFromSections;
const getSectionsBoundaries = (utils, timezone) => {
  const today = utils.dateWithTimezone(undefined, timezone);
  const endOfYear = utils.endOfYear(today);
  const endOfDay = utils.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = (0, _dateUtils.getMonthsInYear)(utils, today).reduce((acc, month) => {
    const daysInMonth = utils.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(utils, timezone, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: utils.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: currentDate != null && utils.isValid(currentDate) ? utils.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth: longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === 'digit') {
        const daysInWeek = getDaysInWeekStr(utils, timezone, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = utils.getHours(endOfDay);
      const hasMeridiem = utils.formatByString(utils.endOfDay(today), format) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(utils.formatByString(utils.startOfDay(today), format))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: utils.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: utils.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
exports.getSectionsBoundaries = getSectionsBoundaries;
let warnedOnceInvalidSection = false;
const validateSections = (sections, valueType) => {
  if (false) {}
};
exports.validateSections = validateSections;
const transferDateSectionValue = (utils, timezone, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case 'year':
      {
        return utils.setYear(dateToTransferTo, utils.getYear(dateToTransferFrom));
      }
    case 'month':
      {
        return utils.setMonth(dateToTransferTo, utils.getMonth(dateToTransferFrom));
      }
    case 'weekDay':
      {
        const formattedDaysInWeek = getDaysInWeekStr(utils, timezone, section.format);
        const dayInWeekStrOfActiveDate = utils.formatByString(dateToTransferFrom, section.format);
        const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
        const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
        const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
        return utils.addDays(dateToTransferFrom, diff);
      }
    case 'day':
      {
        return utils.setDate(dateToTransferTo, utils.getDate(dateToTransferFrom));
      }
    case 'meridiem':
      {
        const isAM = utils.getHours(dateToTransferFrom) < 12;
        const mergedDateHours = utils.getHours(dateToTransferTo);
        if (isAM && mergedDateHours >= 12) {
          return utils.addHours(dateToTransferTo, -12);
        }
        if (!isAM && mergedDateHours < 12) {
          return utils.addHours(dateToTransferTo, 12);
        }
        return dateToTransferTo;
      }
    case 'hours':
      {
        return utils.setHours(dateToTransferTo, utils.getHours(dateToTransferFrom));
      }
    case 'minutes':
      {
        return utils.setMinutes(dateToTransferTo, utils.getMinutes(dateToTransferFrom));
      }
    case 'seconds':
      {
        return utils.setSeconds(dateToTransferTo, utils.getSeconds(dateToTransferFrom));
      }
    default:
      {
        return dateToTransferTo;
      }
  }
};
const reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
};
const mergeDateIntoReferenceDate = (utils, timezone, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) =>
// cloning sections before sort to avoid mutating it
[...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
  if (!shouldLimitToEditedSections || section.modified) {
    return transferDateSectionValue(utils, timezone, section, dateToTransferFrom, mergedDate);
  }
  return mergedDate;
}, referenceDate);
exports.mergeDateIntoReferenceDate = mergeDateIntoReferenceDate;
const isAndroid = () => navigator.userAgent.toLowerCase().indexOf('android') > -1;
exports.isAndroid = isAndroid;
const clampDaySectionIfPossible = (utils, timezone, sections, sectionsValueBoundaries) => {
  // We can only clamp the day value if:
  // 1. if all the sections are filled (except the week day section which can be empty)
  // 2. there is a day section
  const canClamp = sections.every(section => section.type === 'weekDay' || section.value !== '') && sections.some(section => section.type === 'day');
  if (!canClamp) {
    return null;
  }

  // We try to generate a valid date representing the start of the month of the invalid date typed by the user.
  const sectionsForStartOfMonth = sections.map(section => {
    if (section.type !== 'day') {
      return section;
    }
    const dayBoundaries = sectionsValueBoundaries.day({
      currentDate: null,
      format: section.format,
      contentType: section.contentType
    });
    return (0, _extends2.default)({}, section, {
      value: cleanDigitSectionValue(utils, timezone, dayBoundaries.minimum, dayBoundaries, section)
    });
  });
  const startOfMonth = getDateFromDateSections(utils, sectionsForStartOfMonth);

  // Even the start of the month is invalid, we probably have other invalid sections, the clamping failed.
  if (startOfMonth == null || !utils.isValid(startOfMonth)) {
    return null;
  }

  // The only invalid section was the day of the month, we replace its value with the maximum boundary for the correct month.
  return sections.map(section => {
    if (section.type !== 'day') {
      return section;
    }
    const dayBoundaries = sectionsValueBoundaries.day({
      currentDate: startOfMonth,
      format: section.format,
      contentType: section.contentType
    });
    if (Number(section.value) <= dayBoundaries.maximum) {
      return section;
    }
    return (0, _extends2.default)({}, section, {
      value: dayBoundaries.maximum.toString()
    });
  });
};
exports.clampDaySectionIfPossible = clampDaySectionIfPossible;
const getSectionOrder = (sections, isRTL) => {
  const neighbors = {};
  if (!isRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    (section, index) => index >= groupedSectionsStart && section.endSeparator?.includes(' ') &&
    // Special case where the spaces were not there in the initial input
    section.endSeparator !== ' / ');
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
exports.getSectionOrder = getSectionOrder;

/***/ }),

/***/ 38996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useFieldCharacterEditing = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _useUtils = __webpack_require__(72979);
var _useField = __webpack_require__(98855);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * The letter editing and the numeric editing each define a `CharacterEditingApplier`.
 * This function decides what the new section value should be and if the focus should switch to the next section.
 *
 * If it returns `null`, then the section value is not updated and the focus does not move.
 */

/**
 * Function called by `applyQuery` which decides:
 * - what is the new section value ?
 * - should the query used to get this value be stored for the next key press ?
 *
 * If it returns `{ sectionValue: string; shouldGoToNextSection: boolean }`,
 * Then we store the query and update the section with the new value.
 *
 * If it returns `{ saveQuery: true` },
 * Then we store the query and don't update the section.
 *
 * If it returns `{ saveQuery: false },
 * Then we do nothing.
 */

const QUERY_LIFE_DURATION_MS = 5000;
const isQueryResponseWithoutValue = response => response.saveQuery != null;

/**
 * Update the active section value when the user pressed a key that is not a navigation key (arrow key for example).
 * This hook has two main editing behaviors
 *
 * 1. The numeric editing when the user presses a digit
 * 2. The letter editing when the user presses another key
 */
const useFieldCharacterEditing = ({
  sections,
  updateSectionValue,
  sectionsValueBoundaries,
  setTempAndroidValueStr,
  timezone
}) => {
  const utils = (0, _useUtils.useUtils)();
  const [query, setQuery] = React.useState(null);
  const resetQuery = (0, _useEventCallback.default)(() => setQuery(null));
  React.useEffect(() => {
    if (query != null && sections[query.sectionIndex]?.type !== query.sectionType) {
      resetQuery();
    }
  }, [sections, query, resetQuery]);
  React.useEffect(() => {
    if (query != null) {
      const timeout = setTimeout(() => resetQuery(), QUERY_LIFE_DURATION_MS);
      return () => {
        window.clearTimeout(timeout);
      };
    }
    return () => {};
  }, [query, resetQuery]);
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = sections[sectionIndex];

    // The current query targets the section being editing
    // We can try to concatenated value
    if (query != null && (!isValidQueryValue || isValidQueryValue(query.value)) && query.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${query.value}${cleanKeyPressed}`;
      const queryResponse = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse)) {
        setQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      resetQuery();
      return null;
    }
    setQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = params => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter(option => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = format => (0, _useField.getLetterEditingOptions)(utils, timezone, activeSection.type, format);
      if (activeSection.contentType === 'letter') {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }

      // When editing a digit-format month / weekDay and the user presses a letter,
      // We can support the letter editing by using the letter-format month / weekDay and re-formatting the result.
      // We just have to make sure that the default month / weekDay format is a letter format,
      if (fallbackFormat && formatFallbackValue != null && (0, _useField.getDateSectionConfigFromFormatToken)(utils, fallbackFormat).contentType === 'letter') {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return (0, _extends2.default)({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case 'month':
          {
            const formatFallbackValue = fallbackValue => (0, _useField.changeSectionValueFormat)(utils, fallbackValue, utils.formats.month, activeSection.format);
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.month, formatFallbackValue);
          }
        case 'weekDay':
          {
            const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.weekday, formatFallbackValue);
          }
        case 'meridiem':
          {
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
          }
        default:
          {
            return {
              saveQuery: false
            };
          }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = params => {
    const getNewSectionValue = (queryValue, section) => {
      const queryValueNumber = Number(`${queryValue}`);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }

      // If the user types `0` on a month section,
      // It is below the minimum, but we want to store the `0` in the query,
      // So that when he pressed `1`, it will store `01` and move to the next section.
      if (queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = Number(`${queryValue}0`) > sectionBoundaries.maximum || queryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = (0, _useField.cleanDigitSectionValue)(utils, timezone, queryValueNumber, sectionBoundaries, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === 'digit' || activeSection.contentType === 'digit-with-letter') {
        return getNewSectionValue(queryValue, activeSection);
      }

      // When editing a letter-format month and the user presses a digit,
      // We can support the numeric editing by using the digit-format month and re-formatting the result.
      if (activeSection.type === 'month') {
        const hasLeadingZerosInFormat = (0, _useField.doesSectionFormatHaveLeadingZeros)(utils, timezone, 'digit', 'month', 'MM');
        const response = getNewSectionValue(queryValue, {
          type: activeSection.type,
          format: 'MM',
          hasLeadingZerosInFormat,
          hasLeadingZerosInInput: true,
          contentType: 'digit',
          maxLength: 2
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = (0, _useField.changeSectionValueFormat)(utils, response.sectionValue, 'MM', activeSection.format);
        return (0, _extends2.default)({}, response, {
          sectionValue: formattedValue
        });
      }

      // When editing a letter-format weekDay and the user presses a digit,
      // We can support the numeric editing by returning the nth day in the week day array.
      if (activeSection.type === 'weekDay') {
        const response = getNewSectionValue(queryValue, activeSection);
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = (0, _useField.getDaysInWeekStr)(utils, timezone, activeSection.format)[Number(response.sectionValue) - 1];
        return (0, _extends2.default)({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, queryValue => !Number.isNaN(Number(queryValue)));
  };
  const applyCharacterEditing = (0, _useEventCallback.default)(params => {
    const activeSection = sections[params.sectionIndex];
    const isNumericEditing = !Number.isNaN(Number(params.keyPressed));
    const response = isNumericEditing ? applyNumericEditing(params) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
    } else {
      updateSectionValue({
        activeSection,
        newSectionValue: response.sectionValue,
        shouldGoToNextSection: response.shouldGoToNextSection
      });
    }
  });
  return {
    applyCharacterEditing,
    resetCharacterQuery: resetQuery
  };
};
exports.useFieldCharacterEditing = useFieldCharacterEditing;

/***/ }),

/***/ 60314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useFieldState = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useControlled = _interopRequireDefault(__webpack_require__(14517));
var _styles = __webpack_require__(83476);
var _useUtils = __webpack_require__(72979);
var _useField = __webpack_require__(98855);
var _useValueWithTimezone = __webpack_require__(42736);
var _getDefaultReferenceDate = __webpack_require__(95287);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useFieldState = params => {
  const utils = (0, _useUtils.useUtils)();
  const localeText = (0, _useUtils.useLocaleText)();
  const adapter = (0, _useUtils.useLocalizationContext)();
  const theme = (0, _styles.useTheme)();
  const isRTL = theme.direction === 'rtl';
  const {
    valueManager,
    fieldValueManager,
    valueType,
    validator,
    internalProps,
    internalProps: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = 'dense',
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp
    }
  } = params;
  const {
    timezone,
    value: valueFromTheOutside,
    handleValueChange
  } = (0, _useValueWithTimezone.useValueWithTimezone)({
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager
  });
  const sectionsValueBoundaries = React.useMemo(() => (0, _useField.getSectionsBoundaries)(utils, timezone), [utils, timezone]);
  const getSectionsFromValue = React.useCallback((value, fallbackSections = null) => fieldValueManager.getSectionsFromValue(utils, value, fallbackSections, isRTL, date => (0, _useField.splitFormatIntoSections)(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL)), [fieldValueManager, format, localeText, isRTL, shouldRespectLeadingZeros, utils, formatDensity, timezone]);
  const placeholder = React.useMemo(() => fieldValueManager.getValueStrFromSections(getSectionsFromValue(valueManager.emptyValue), isRTL), [fieldValueManager, getSectionsFromValue, valueManager.emptyValue, isRTL]);
  const [state, setState] = React.useState(() => {
    const sections = getSectionsFromValue(valueFromTheOutside);
    (0, _useField.validateSections)(sections, valueType);
    const stateWithoutReferenceDate = {
      sections,
      value: valueFromTheOutside,
      referenceValue: valueManager.emptyValue,
      tempValueStrAndroid: null
    };
    const granularity = (0, _getDefaultReferenceDate.getSectionTypeGranularity)(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value: valueFromTheOutside,
      utils,
      props: internalProps,
      granularity,
      timezone
    });
    return (0, _extends2.default)({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = (0, _useControlled.default)({
    controlled: selectedSectionsProp,
    default: null,
    name: 'useField',
    state: 'selectedSectionIndexes'
  });
  const setSelectedSections = newSelectedSections => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange?.(newSelectedSections);
    setState(prevState => (0, _extends2.default)({}, prevState, {
      selectedSectionQuery: null
    }));
  };
  const selectedSectionIndexes = React.useMemo(() => {
    if (selectedSections == null) {
      return null;
    }
    if (selectedSections === 'all') {
      return {
        startIndex: 0,
        endIndex: state.sections.length - 1,
        shouldSelectBoundarySelectors: true
      };
    }
    if (typeof selectedSections === 'number') {
      return {
        startIndex: selectedSections,
        endIndex: selectedSections
      };
    }
    if (typeof selectedSections === 'string') {
      const selectedSectionIndex = state.sections.findIndex(section => section.type === selectedSections);
      return {
        startIndex: selectedSectionIndex,
        endIndex: selectedSectionIndex
      };
    }
    return selectedSections;
  }, [selectedSections, state.sections]);
  const publishValue = ({
    value,
    referenceValue,
    sections
  }) => {
    setState(prevState => (0, _extends2.default)({}, prevState, {
      sections,
      value,
      referenceValue,
      tempValueStrAndroid: null
    }));
    const context = {
      validationError: validator({
        adapter,
        value,
        props: (0, _extends2.default)({}, internalProps, {
          value,
          timezone
        })
      })
    };
    handleValueChange(value, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = (0, _extends2.default)({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return (0, _useField.addPositionPropertiesToSections)(newSections, isRTL);
  };
  const clearValue = () => {
    if (valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue)) {
      return;
    }
    publishValue({
      value: valueManager.emptyValue,
      referenceValue: state.referenceValue,
      sections: getSectionsFromValue(valueManager.emptyValue)
    });
  };
  const clearActiveSection = () => {
    if (selectedSectionIndexes == null) {
      return;
    }
    const activeSection = state.sections[selectedSectionIndexes.startIndex];
    if (activeSection.value === '') {
      return;
    }
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const nonEmptySectionCountBefore = activeDateManager.getSections(state.sections).filter(section => section.value !== '').length;
    const isTheOnlyNonEmptySection = nonEmptySectionCountBefore === 1;
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, '');
    const newActiveDate = isTheOnlyNonEmptySection ? null : utils.date(new Date(''));
    const newValues = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
    if ((newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date))) {
      publishValue((0, _extends2.default)({}, newValues, {
        sections: newSections
      }));
    } else {
      setState(prevState => (0, _extends2.default)({}, prevState, newValues, {
        sections: newSections,
        tempValueStrAndroid: null
      }));
    }
  };
  const updateValueFromValueStr = valueStr => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = utils.parse(dateStr, format);
      if (date == null || !utils.isValid(date)) {
        return null;
      }
      const sections = (0, _useField.splitFormatIntoSections)(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL);
      return (0, _useField.mergeDateIntoReferenceDate)(utils, timezone, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    const newReferenceValue = fieldValueManager.updateReferenceValue(utils, newValue, state.referenceValue);
    publishValue({
      value: newValue,
      referenceValue: newReferenceValue,
      sections: getSectionsFromValue(newValue, state.sections)
    });
  };
  const updateSectionValue = ({
    activeSection,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    /**
     * 1. Decide which section should be focused
     */
    if (shouldGoToNextSection && selectedSectionIndexes && selectedSectionIndexes.startIndex < state.sections.length - 1) {
      setSelectedSections(selectedSectionIndexes.startIndex + 1);
    } else if (selectedSectionIndexes && selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
      setSelectedSections(selectedSectionIndexes.startIndex);
    }

    /**
     * 2. Try to build a valid date from the new section value
     */
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, newSectionValue);
    const newActiveDateSections = activeDateManager.getSections(newSections);
    let newActiveDate = (0, _useField.getDateFromDateSections)(utils, newActiveDateSections);
    let shouldRegenSections = false;

    /**
     * If the date is invalid,
     * Then we can try to clamp the day section to see if that produces a valid date.
     * This can be useful if the month has fewer days than the day value currently provided.
     */
    if (!utils.isValid(newActiveDate)) {
      const clampedSections = (0, _useField.clampDaySectionIfPossible)(utils, timezone, newActiveDateSections, sectionsValueBoundaries);
      if (clampedSections != null) {
        shouldRegenSections = true;
        newActiveDate = (0, _useField.getDateFromDateSections)(utils, clampedSections);
      }
    }
    let values;
    let shouldPublish;

    /**
     * If the new date is valid,
     * Then we merge the value of the modified sections into the reference date.
     * This makes sure that we don't lose some information of the initial date (like the time on a date field).
     */
    if (newActiveDate != null && utils.isValid(newActiveDate)) {
      const mergedDate = (0, _useField.mergeDateIntoReferenceDate)(utils, timezone, newActiveDate, newActiveDateSections, activeDateManager.referenceDate, true);
      values = activeDateManager.getNewValuesFromNewActiveDate(mergedDate);
      shouldPublish = true;
    } else {
      values = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
      shouldPublish = (newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date));
    }

    /**
     * If the value has been modified (to clamp the day).
     * Then we need to re-generate the sections to make sure they also have this change.
     */
    const sections = shouldRegenSections ? getSectionsFromValue(values.value, state.sections) : newSections;

    /**
     * Publish or update the internal state with the new value and sections.
     */
    if (shouldPublish) {
      return publishValue((0, _extends2.default)({}, values, {
        sections
      }));
    }
    return setState(prevState => (0, _extends2.default)({}, prevState, values, {
      sections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = tempValueStrAndroid => setState(prev => (0, _extends2.default)({}, prev, {
    tempValueStrAndroid
  }));
  React.useEffect(() => {
    const sections = getSectionsFromValue(state.value);
    (0, _useField.validateSections)(sections, valueType);
    setState(prevState => (0, _extends2.default)({}, prevState, {
      sections
    }));
  }, [format, utils.locale]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    let shouldUpdate = false;
    if (!valueManager.areValuesEqual(utils, state.value, valueFromTheOutside)) {
      shouldUpdate = true;
    } else {
      shouldUpdate = valueManager.getTimezone(utils, state.value) !== valueManager.getTimezone(utils, valueFromTheOutside);
    }
    if (shouldUpdate) {
      setState(prevState => (0, _extends2.default)({}, prevState, {
        value: valueFromTheOutside,
        referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, prevState.referenceValue),
        sections: getSectionsFromValue(valueFromTheOutside)
      }));
    }
  }, [valueFromTheOutside]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder,
    timezone
  };
};
exports.useFieldState = useFieldState;

/***/ }),

/***/ 9484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIsLandscape = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(44268);
var _utils2 = __webpack_require__(48861);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  }

  // Support IOS safari
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }
  return 'portrait';
}
const useIsLandscape = (views, customOrientation) => {
  const [orientation, setOrientation] = React.useState(getOrientation);
  (0, _utils.unstable_useEnhancedEffect)(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener('orientationchange', eventHandler);
    return () => {
      window.removeEventListener('orientationchange', eventHandler);
    };
  }, []);
  if ((0, _utils2.arrayIncludes)(views, ['hours', 'minutes', 'seconds'])) {
    // could not display 13:34:44 in landscape mode
    return false;
  }
  const orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
};
exports.useIsLandscape = useIsLandscape;

/***/ }),

/***/ 85369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useMobilePicker", ({
  enumerable: true,
  get: function () {
    return _useMobilePicker.useMobilePicker;
  }
}));
var _useMobilePicker = __webpack_require__(28184);

/***/ }),

/***/ 28184:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useMobilePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(67392);
var _useForkRef = _interopRequireDefault(__webpack_require__(59272));
var _useId = _interopRequireDefault(__webpack_require__(62000));
var _PickersModalDialog = __webpack_require__(66878);
var _usePicker = __webpack_require__(26161);
var _utils2 = __webpack_require__(48861);
var _useUtils = __webpack_require__(72979);
var _LocalizationProvider = __webpack_require__(64763);
var _PickersLayout = __webpack_require__(43485);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["props", "getOpenDialogAriaText"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Hook managing all the single-date mobile pickers:
 * - MobileDatePicker
 * - MobileDateTimePicker
 * - MobileTimePicker
 */
const useMobilePicker = _ref => {
  let {
      props,
      getOpenDialogAriaText
    } = _ref,
    pickerParams = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    timezone,
    label,
    inputRef,
    readOnly,
    disabled,
    localeText
  } = props;
  const utils = (0, _useUtils.useUtils)();
  const internalInputRef = React.useRef(null);
  const labelId = (0, _useId.default)();
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    fieldProps: pickerFieldProps
  } = (0, _usePicker.usePicker)((0, _extends2.default)({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: 'mobile'
  }));
  const Field = slots.field;
  const fieldProps = (0, _utils.useSlotProps)({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: (0, _extends2.default)({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, !(disabled || readOnly) && {
      onClick: actions.onOpen,
      onKeyDown: (0, _utils2.onSpaceOrEnter)(actions.onOpen)
    }, {
      readOnly: readOnly ?? true,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone,
      label
    }),
    ownerState: props
  });

  // TODO: Move to `useSlotProps` when https://github.com/mui/material-ui/pull/35088 will be merged
  fieldProps.inputProps = (0, _extends2.default)({}, fieldProps.inputProps, {
    'aria-label': getOpenDialogAriaText(pickerFieldProps.value, utils)
  });
  const slotsForField = (0, _extends2.default)({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = slots.layout ?? _PickersLayout.PickersLayout;
  const handleInputRef = (0, _useForkRef.default)(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = undefined;
    }
  }
  const slotProps = (0, _extends2.default)({}, innerSlotProps, {
    toolbar: (0, _extends2.default)({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    mobilePaper: (0, _extends2.default)({
      'aria-labelledby': labelledById
    }, innerSlotProps?.mobilePaper)
  });
  const renderPicker = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_LocalizationProvider.LocalizationProvider, {
    localeText: localeText,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Field, (0, _extends2.default)({}, fieldProps, {
      slots: slotsForField,
      slotProps: slotProps,
      inputRef: handleInputRef
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersModalDialog.PickersModalDialog, (0, _extends2.default)({}, actions, {
      open: open,
      slots: slots,
      slotProps: slotProps,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Layout, (0, _extends2.default)({}, layoutProps, slotProps?.layout, {
        slots: slots,
        slotProps: slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
exports.useMobilePicker = useMobilePicker;

/***/ }),

/***/ 55820:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useOpenState = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useOpenState = ({
  open,
  onOpen,
  onClose
}) => {
  const isControllingOpenProp = React.useRef(typeof open === 'boolean').current;
  const [openState, setIsOpenState] = React.useState(false);

  // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)
  React.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }
      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  const setIsOpen = React.useCallback(newIsOpen => {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }
    if (newIsOpen && onOpen) {
      onOpen();
    }
    if (!newIsOpen && onClose) {
      onClose();
    }
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen
  };
};
exports.useOpenState = useOpenState;

/***/ }),

/***/ 26161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "usePicker", ({
  enumerable: true,
  get: function () {
    return _usePicker.usePicker;
  }
}));
var _usePicker = __webpack_require__(39281);

/***/ }),

/***/ 39281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePicker = void 0;
var _usePickerValue = __webpack_require__(44402);
var _usePickerViews = __webpack_require__(69397);
var _usePickerLayoutProps = __webpack_require__(13251);
var _warning = __webpack_require__(67474);
const warnRenderInputIsDefined = (0, _warning.buildWarning)(['The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.', 'You can replace it with the `textField` component slot in most cases.', 'For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5).']);
const usePicker = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  inputRef,
  additionalViewProps,
  validator,
  autoFocusView
}) => {
  if (false) {}
  const pickerValueResponse = (0, _usePickerValue.usePickerValue)({
    props,
    valueManager,
    valueType,
    wrapperVariant,
    validator
  });
  const pickerViewsResponse = (0, _usePickerViews.usePickerViews)({
    props,
    inputRef,
    additionalViewProps,
    autoFocusView,
    propsFromPickerValue: pickerValueResponse.viewProps
  });
  const pickerLayoutResponse = (0, _usePickerLayoutProps.usePickerLayoutProps)({
    props,
    wrapperVariant,
    propsFromPickerValue: pickerValueResponse.layoutProps,
    propsFromPickerViews: pickerViewsResponse.layoutProps
  });
  return {
    // Picker value
    open: pickerValueResponse.open,
    actions: pickerValueResponse.actions,
    fieldProps: pickerValueResponse.fieldProps,
    // Picker views
    renderCurrentView: pickerViewsResponse.renderCurrentView,
    hasUIView: pickerViewsResponse.hasUIView,
    shouldRestoreFocus: pickerViewsResponse.shouldRestoreFocus,
    // Picker layout
    layoutProps: pickerLayoutResponse.layoutProps
  };
};
exports.usePicker = usePicker;

/***/ }),

/***/ 13251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePickerLayoutProps = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _useIsLandscape = __webpack_require__(9484);
/**
 * Props used to create the layout of the views.
 * Those props are exposed on all the pickers.
 */

/**
 * Prepare the props for the view layout (managed by `PickersLayout`)
 */
const usePickerLayoutProps = ({
  props,
  propsFromPickerValue,
  propsFromPickerViews,
  wrapperVariant
}) => {
  const {
    orientation
  } = props;
  const isLandscape = (0, _useIsLandscape.useIsLandscape)(propsFromPickerViews.views, orientation);
  const layoutProps = (0, _extends2.default)({}, propsFromPickerViews, propsFromPickerValue, {
    isLandscape,
    wrapperVariant,
    disabled: props.disabled,
    readOnly: props.readOnly
  });
  return {
    layoutProps
  };
};
exports.usePickerLayoutProps = usePickerLayoutProps;

/***/ }),

/***/ 44402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePickerValue = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _utils = __webpack_require__(44268);
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _useOpenState = __webpack_require__(55820);
var _useUtils = __webpack_require__(72979);
var _useValidation = __webpack_require__(12003);
var _useValueWithTimezone = __webpack_require__(42736);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Decide if the new value should be published
 * The published value will be passed to `onChange` if defined.
 */
const shouldPublishValue = params => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;

  // The field is responsible for only calling `onChange` when needed.
  if (action.name === 'setValueFromField') {
    return true;
  }
  if (action.name === 'setValueFromAction') {
    // If the component is not controlled, and the value has not been modified since the mount,
    // Then we want to publish the default value whenever the user pressed the "Accept", "Today" or "Clear" button.
    if (isCurrentValueTheDefaultValue && ['accept', 'today', 'clear'].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === 'setValueFromView' && action.selectionState !== 'shallow') {
    // On the first view,
    // If the value is not controlled, then clicking on any value (including the one equal to `defaultValue`) should call `onChange`
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === 'setValueFromShortcut' && action.changeImportance === 'accept') {
    // On the first view,
    // If the value is not controlled, then clicking on any value (including the one equal to `defaultValue`) should call `onChange`
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  return false;
};

/**
 * Decide if the new value should be committed.
 * The committed value will be passed to `onAccept` if defined.
 * It will also be used as a reset target when calling the `cancel` picker action (when clicking on the "Cancel" button).
 */
const shouldCommitValue = params => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled,
    closeOnSelect
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === 'setValueFromAction') {
    // If the component is not controlled, and the value has not been modified since the mount,
    // Then we want to commit the default value whenever the user pressed the "Accept", "Today" or "Clear" button.
    if (isCurrentValueTheDefaultValue && ['accept', 'today', 'clear'].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === 'setValueFromView' && action.selectionState === 'finish' && closeOnSelect) {
    // On picker where the 1st view is also the last view,
    // If the value is not controlled, then clicking on any value (including the one equal to `defaultValue`) should call `onAccept`
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === 'setValueFromShortcut') {
    return action.changeImportance === 'accept' && hasChanged(dateState.lastCommittedValue);
  }
  return false;
};

/**
 * Decide if the picker should be closed after the value is updated.
 */
const shouldClosePicker = params => {
  const {
    action,
    closeOnSelect
  } = params;
  if (action.name === 'setValueFromAction') {
    return true;
  }
  if (action.name === 'setValueFromView') {
    return action.selectionState === 'finish' && closeOnSelect;
  }
  if (action.name === 'setValueFromShortcut') {
    return action.changeImportance === 'accept';
  }
  return false;
};

/**
 * Manage the value lifecycle of all the pickers.
 */
const usePickerValue = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  validator
}) => {
  const {
    onAccept,
    onChange,
    value: inValue,
    defaultValue: inDefaultValue,
    closeOnSelect = wrapperVariant === 'desktop',
    selectedSections: selectedSectionsProp,
    onSelectedSectionsChange,
    timezone: timezoneProp
  } = props;
  const {
    current: defaultValue
  } = React.useRef(inDefaultValue);
  const {
    current: isControlled
  } = React.useRef(inValue !== undefined);

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  if (false) {}
  /* eslint-enable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

  const utils = (0, _useUtils.useUtils)();
  const adapter = (0, _useUtils.useLocalizationContext)();
  const [selectedSections, setSelectedSections] = (0, _utils.unstable_useControlled)({
    controlled: selectedSectionsProp,
    default: null,
    name: 'usePickerValue',
    state: 'selectedSections'
  });
  const {
    isOpen,
    setIsOpen
  } = (0, _useOpenState.useOpenState)(props);
  const [dateState, setDateState] = React.useState(() => {
    let initialValue;
    if (inValue !== undefined) {
      initialValue = inValue;
    } else if (defaultValue !== undefined) {
      initialValue = defaultValue;
    } else {
      initialValue = valueManager.emptyValue;
    }
    return {
      draft: initialValue,
      lastPublishedValue: initialValue,
      lastCommittedValue: initialValue,
      lastControlledValue: inValue,
      hasBeenModifiedSinceMount: false
    };
  });
  const {
    timezone,
    handleValueChange
  } = (0, _useValueWithTimezone.useValueWithTimezone)({
    timezone: timezoneProp,
    value: inValue,
    defaultValue,
    onChange,
    valueManager
  });
  (0, _useValidation.useValidation)((0, _extends2.default)({}, props, {
    value: dateState.draft,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const updateDate = (0, _useEventCallback.default)(action => {
    const updaterParams = {
      action,
      dateState,
      hasChanged: comparison => !valueManager.areValuesEqual(utils, action.value, comparison),
      isControlled,
      closeOnSelect
    };
    const shouldPublish = shouldPublishValue(updaterParams);
    const shouldCommit = shouldCommitValue(updaterParams);
    const shouldClose = shouldClosePicker(updaterParams);
    setDateState(prev => (0, _extends2.default)({}, prev, {
      draft: action.value,
      lastPublishedValue: shouldPublish ? action.value : prev.lastPublishedValue,
      lastCommittedValue: shouldCommit ? action.value : prev.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    if (shouldPublish) {
      const validationError = action.name === 'setValueFromField' ? action.context.validationError : validator({
        adapter,
        value: action.value,
        props: (0, _extends2.default)({}, props, {
          value: action.value,
          timezone
        })
      });
      const context = {
        validationError
      };
      handleValueChange(action.value, context);
    }
    if (shouldCommit && onAccept) {
      onAccept(action.value);
    }
    if (shouldClose) {
      setIsOpen(false);
    }
  });
  if (inValue !== undefined && (dateState.lastControlledValue === undefined || !valueManager.areValuesEqual(utils, dateState.lastControlledValue, inValue))) {
    const isUpdateComingFromPicker = valueManager.areValuesEqual(utils, dateState.draft, inValue);
    setDateState(prev => (0, _extends2.default)({}, prev, {
      lastControlledValue: inValue
    }, isUpdateComingFromPicker ? {} : {
      lastCommittedValue: inValue,
      lastPublishedValue: inValue,
      draft: inValue,
      hasBeenModifiedSinceMount: true
    }));
  }
  const handleClear = (0, _useEventCallback.default)(() => {
    updateDate({
      value: valueManager.emptyValue,
      name: 'setValueFromAction',
      pickerAction: 'clear'
    });
  });
  const handleAccept = (0, _useEventCallback.default)(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: 'setValueFromAction',
      pickerAction: 'accept'
    });
  });
  const handleDismiss = (0, _useEventCallback.default)(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: 'setValueFromAction',
      pickerAction: 'dismiss'
    });
  });
  const handleCancel = (0, _useEventCallback.default)(() => {
    updateDate({
      value: dateState.lastCommittedValue,
      name: 'setValueFromAction',
      pickerAction: 'cancel'
    });
  });
  const handleSetToday = (0, _useEventCallback.default)(() => {
    updateDate({
      value: valueManager.getTodayValue(utils, timezone, valueType),
      name: 'setValueFromAction',
      pickerAction: 'today'
    });
  });
  const handleOpen = (0, _useEventCallback.default)(() => setIsOpen(true));
  const handleClose = (0, _useEventCallback.default)(() => setIsOpen(false));
  const handleChange = (0, _useEventCallback.default)((newValue, selectionState = 'partial') => updateDate({
    name: 'setValueFromView',
    value: newValue,
    selectionState
  }));
  const handleSelectShortcut = (0, _useEventCallback.default)((newValue, changeImportance) => updateDate({
    name: 'setValueFromShortcut',
    value: newValue,
    changeImportance: changeImportance ?? 'accept'
  }));
  const handleChangeFromField = (0, _useEventCallback.default)((newValue, context) => updateDate({
    name: 'setValueFromField',
    value: newValue,
    context
  }));
  const handleFieldSelectedSectionsChange = (0, _useEventCallback.default)(newSelectedSections => {
    setSelectedSections(newSelectedSections);
    onSelectedSectionsChange?.(newSelectedSections);
  });
  const actions = {
    onClear: handleClear,
    onAccept: handleAccept,
    onDismiss: handleDismiss,
    onCancel: handleCancel,
    onSetToday: handleSetToday,
    onOpen: handleOpen,
    onClose: handleClose
  };
  const fieldResponse = {
    value: dateState.draft,
    onChange: handleChangeFromField,
    selectedSections,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const viewValue = React.useMemo(() => valueManager.cleanValue(utils, dateState.draft), [utils, valueManager, dateState.draft]);
  const viewResponse = {
    value: viewValue,
    onChange: handleChange,
    onClose: handleClose,
    open: isOpen,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const isValid = testedValue => {
    const error = validator({
      adapter,
      value: testedValue,
      props: (0, _extends2.default)({}, props, {
        value: testedValue,
        timezone
      })
    });
    return !valueManager.hasError(error);
  };
  const layoutResponse = (0, _extends2.default)({}, actions, {
    value: viewValue,
    onChange: handleChange,
    onSelectShortcut: handleSelectShortcut,
    isValid
  });
  return {
    open: isOpen,
    fieldProps: fieldResponse,
    viewProps: viewResponse,
    layoutProps: layoutResponse,
    actions
  };
};
exports.usePickerValue = usePickerValue;

/***/ }),

/***/ 69397:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePickerViews = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEnhancedEffect = _interopRequireDefault(__webpack_require__(90095));
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _useViews = __webpack_require__(71469);
var _timeUtils = __webpack_require__(49903);
const _excluded = ["className", "sx"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Props used to handle the views that are common to all pickers.
 */

/**
 * Props used to handle the views of the pickers.
 */

/**
 * Props used to handle the value of the pickers.
 */

/**
 * Manage the views of all the pickers:
 * - Handles the view switch
 * - Handles the switch between UI views and field views
 * - Handles the focus management when switching views
 */
const usePickerViews = ({
  props,
  propsFromPickerValue,
  additionalViewProps,
  inputRef,
  autoFocusView
}) => {
  const {
    onChange,
    open,
    onSelectedSectionsChange,
    onClose
  } = propsFromPickerValue;
  const {
    views,
    openTo,
    onViewChange,
    disableOpenPicker,
    viewRenderers,
    timezone
  } = props;
  const propsToForwardToView = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView
  } = (0, _useViews.useViews)({
    view: undefined,
    views,
    openTo,
    onChange,
    onViewChange,
    autoFocus: autoFocusView
  });
  const {
    hasUIView,
    viewModeLookup
  } = React.useMemo(() => views.reduce((acc, viewForReduce) => {
    let viewMode;
    if (disableOpenPicker) {
      viewMode = 'field';
    } else if (viewRenderers[viewForReduce] != null) {
      viewMode = 'UI';
    } else {
      viewMode = 'field';
    }
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === 'UI') {
      acc.hasUIView = true;
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {}
  }), [disableOpenPicker, viewRenderers, views]);
  const timeViewsCount = React.useMemo(() => views.reduce((acc, viewForReduce) => {
    if (viewRenderers[viewForReduce] != null && (0, _timeUtils.isTimeView)(viewForReduce)) {
      return acc + 1;
    }
    return acc;
  }, 0), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const shouldRestoreFocus = (0, _useEventCallback.default)(() => currentViewMode === 'UI');
  const [popperView, setPopperView] = React.useState(currentViewMode === 'UI' ? view : null);
  if (popperView !== view && viewModeLookup[view] === 'UI') {
    setPopperView(view);
  }
  (0, _useEnhancedEffect.default)(() => {
    // Handle case of `DateTimePicker` without time renderers
    if (currentViewMode === 'field' && open) {
      onClose();
      setTimeout(() => {
        // focusing the input before the range selection is done
        // calling `onSelectedSectionsChange` outside of timeout results in an inconsistent behavior between Safari And Chrome
        inputRef?.current.focus();
        onSelectedSectionsChange(view);
      });
    }
  }, [view]); // eslint-disable-line react-hooks/exhaustive-deps

  (0, _useEnhancedEffect.default)(() => {
    if (!open) {
      return;
    }
    let newView = view;

    // If the current view is a field view, go to the last popper view
    if (currentViewMode === 'field' && popperView != null) {
      newView = popperView;
    }

    // If the current view is not the default view and both are UI views
    if (newView !== defaultView && viewModeLookup[newView] === 'UI' && viewModeLookup[defaultView] === 'UI') {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const layoutProps = {
    views,
    view: popperView,
    onViewChange: setView
  };
  return {
    hasUIView,
    shouldRestoreFocus,
    layoutProps,
    renderCurrentView: () => {
      if (popperView == null) {
        return null;
      }
      const renderer = viewRenderers[popperView];
      if (renderer == null) {
        return null;
      }
      return renderer((0, _extends2.default)({}, propsToForwardToView, additionalViewProps, propsFromPickerValue, {
        views,
        timezone,
        onChange: setValueAndGoToNextView,
        view: popperView,
        onViewChange: setView,
        focusedView,
        onFocusedViewChange: setFocusedView,
        showViewSwitcher: timeViewsCount > 1,
        timeViewsCount
      }));
    }
  };
};
exports.usePickerViews = usePickerViews;

/***/ }),

/***/ 10930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "useStaticPicker", ({
  enumerable: true,
  get: function () {
    return _useStaticPicker.useStaticPicker;
  }
}));
var _useStaticPicker = __webpack_require__(81751);

/***/ }),

/***/ 81751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useStaticPicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _styles = __webpack_require__(83476);
var _usePicker = __webpack_require__(26161);
var _LocalizationProvider = __webpack_require__(64763);
var _PickersLayout = __webpack_require__(43485);
var _dimensions = __webpack_require__(78774);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["props", "ref"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const PickerStaticLayout = (0, _styles.styled)(_PickersLayout.PickersLayout)(({
  theme
}) => ({
  overflow: 'hidden',
  minWidth: _dimensions.DIALOG_WIDTH,
  backgroundColor: (theme.vars || theme).palette.background.paper
}));

/**
 * Hook managing all the single-date static pickers:
 * - StaticDatePicker
 * - StaticDateTimePicker
 * - StaticTimePicker
 */
const useStaticPicker = _ref => {
  let {
      props,
      ref
    } = _ref,
    pickerParams = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const {
    localeText,
    slots,
    slotProps,
    className,
    sx,
    displayStaticWrapperAs,
    autoFocus
  } = props;
  const {
    layoutProps,
    renderCurrentView
  } = (0, _usePicker.usePicker)((0, _extends2.default)({}, pickerParams, {
    props,
    autoFocusView: autoFocus ?? false,
    additionalViewProps: {},
    wrapperVariant: displayStaticWrapperAs
  }));
  const Layout = slots?.layout ?? PickerStaticLayout;
  const renderPicker = () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocalizationProvider.LocalizationProvider, {
    localeText: localeText,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Layout, (0, _extends2.default)({}, layoutProps, slotProps?.layout, {
      slots: slots,
      slotProps: slotProps,
      sx: [...(Array.isArray(sx) ? sx : [sx]), ...(Array.isArray(slotProps?.layout?.sx) ? slotProps.layout.sx : [slotProps?.layout?.sx])],
      className: (0, _clsx.default)(className, slotProps?.layout?.className),
      ref: ref,
      children: renderCurrentView()
    }))
  });
  return {
    renderPicker
  };
};
exports.useStaticPicker = useStaticPicker;

/***/ }),

/***/ 72979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useUtils = exports.useNow = exports.useLocalizationContext = exports.useLocaleText = exports.useDefaultDates = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _LocalizationProvider = __webpack_require__(34809);
var _enUS = __webpack_require__(2865);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useLocalizationContext = () => {
  const localization = React.useContext(_LocalizationProvider.MuiPickersAdapterContext);
  if (localization === null) {
    throw new Error(['MUI: Can not find the date and time pickers localization context.', 'It looks like you forgot to wrap your component in LocalizationProvider.', 'This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package'].join('\n'));
  }
  if (localization.utils === null) {
    throw new Error(['MUI: Can not find the date and time pickers adapter from its localization context.', 'It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider.'].join('\n'));
  }
  const localeText = React.useMemo(() => (0, _extends2.default)({}, _enUS.DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return React.useMemo(() => (0, _extends2.default)({}, localization, {
    localeText
  }), [localization, localeText]);
};
exports.useLocalizationContext = useLocalizationContext;
const useUtils = () => useLocalizationContext().utils;
exports.useUtils = useUtils;
const useDefaultDates = () => useLocalizationContext().defaultDates;
exports.useDefaultDates = useDefaultDates;
const useLocaleText = () => useLocalizationContext().localeText;
exports.useLocaleText = useLocaleText;
const useNow = timezone => {
  const utils = useUtils();
  const now = React.useRef();
  if (now.current === undefined) {
    now.current = utils.dateWithTimezone(undefined, timezone);
  }
  return now.current;
};
exports.useNow = useNow;

/***/ }),

/***/ 12003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useValidation = useValidation;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useUtils = __webpack_require__(72979);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useValidation(props, validate, isSameError, defaultErrorState) {
  const {
    value,
    onError
  } = props;
  const adapter = (0, _useUtils.useLocalizationContext)();
  const previousValidationErrorRef = React.useRef(defaultErrorState);
  const validationError = validate({
    adapter,
    value,
    props
  });
  React.useEffect(() => {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
  return validationError;
}

/***/ }),

/***/ 42736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useValueWithTimezone = exports.useControlledValueWithTimezone = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _useControlled = _interopRequireDefault(__webpack_require__(14517));
var _useUtils = __webpack_require__(72979);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Hooks making sure that:
 * - The value returned by `onChange` always have the timezone of `props.value` or `props.defaultValue` if defined
 * - The value rendered is always the one from `props.timezone` if defined
 */
const useValueWithTimezone = ({
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange,
  valueManager
}) => {
  const utils = (0, _useUtils.useUtils)();
  const firstDefaultValue = React.useRef(defaultValue);
  const inputValue = valueProp ?? firstDefaultValue.current ?? valueManager.emptyValue;
  const inputTimezone = React.useMemo(() => valueManager.getTimezone(utils, inputValue), [utils, valueManager, inputValue]);
  const setInputTimezone = (0, _useEventCallback.default)(newValue => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(utils, inputTimezone, newValue);
  });
  const timezoneToRender = timezoneProp ?? inputTimezone ?? 'default';
  const valueWithTimezoneToRender = React.useMemo(() => valueManager.setTimezone(utils, timezoneToRender, inputValue), [valueManager, utils, timezoneToRender, inputValue]);
  const handleValueChange = (0, _useEventCallback.default)((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    onChange?.(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};

/**
 * Wrapper around `useControlled` and `useValueWithTimezone`
 */
exports.useValueWithTimezone = useValueWithTimezone;
const useControlledValueWithTimezone = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  valueManager
}) => {
  const [valueWithInputTimezone, setValue] = (0, _useControlled.default)({
    name,
    state: 'value',
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue
  });
  const onChange = (0, _useEventCallback.default)((newValue, ...otherParams) => {
    setValue(newValue);
    onChangeProp?.(newValue, ...otherParams);
  });
  return useValueWithTimezone({
    timezone: timezoneProp,
    value: valueWithInputTimezone,
    defaultValue: undefined,
    onChange,
    valueManager
  });
};
exports.useControlledValueWithTimezone = useControlledValueWithTimezone;

/***/ }),

/***/ 71469:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useViews = useViews;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _utils = __webpack_require__(44268);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
let warnedOnceNotValidView = false;
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange
}) {
  if (false) {}
  const previousOpenTo = React.useRef(openTo);
  const previousViews = React.useRef(views);
  const defaultView = React.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = (0, _utils.unstable_useControlled)({
    name: 'useViews',
    state: 'view',
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = React.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = (0, _utils.unstable_useControlled)({
    name: 'useViews',
    state: 'focusedView',
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  React.useEffect(() => {
    // Update the current view when `openTo` or `views` props change
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some(previousView => !views.includes(previousView))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = views[viewIndex - 1] ?? null;
  const nextView = views[viewIndex + 1] ?? null;
  const handleFocusedViewChange = (0, _useEventCallback.default)((viewToFocus, hasFocus) => {
    if (hasFocus) {
      // Focus event
      setFocusedView(viewToFocus);
    } else {
      // Blur event
      setFocusedView(prevFocusedView => viewToFocus === prevFocusedView ? null : prevFocusedView // If false the blur is due to view switching
      );
    }

    onFocusedViewChange?.(viewToFocus, hasFocus);
  });
  const handleChangeView = (0, _useEventCallback.default)(newView => {
    if (newView === view) {
      return;
    }
    setView(newView);
    handleFocusedViewChange(newView, true);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = (0, _useEventCallback.default)(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
    handleFocusedViewChange(nextView, true);
  });
  const setValueAndGoToNextView = (0, _useEventCallback.default)((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
    const hasMoreViews = selectedView ?
    // handles case like `DateTimePicker`, where a view might return a `finish` selection state
    // but we it's not the final view given all `views` -> overall selection state should be `partial`.
    views.indexOf(selectedView) < views.length - 1 : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? 'partial' : currentViewSelectionState;
    onChange(value, globalSelectionState);
    if (isSelectionFinishedOnCurrentView) {
      goToNextView();
    }
  });
  const setValueAndGoToView = (0, _useEventCallback.default)((value, newView, selectedView) => {
    onChange(value, newView ? 'partial' : 'finish', selectedView);
    if (newView) {
      handleChangeView(newView);
      handleFocusedViewChange(newView, true);
    }
  });
  return {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    defaultView: defaultView.current,
    goToNextView,
    setValueAndGoToNextView,
    setValueAndGoToView
  };
}

/***/ }),

/***/ 27206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DAY_MARGIN", ({
  enumerable: true,
  get: function () {
    return _dimensions.DAY_MARGIN;
  }
}));
Object.defineProperty(exports, "DEFAULT_DESKTOP_MODE_MEDIA_QUERY", ({
  enumerable: true,
  get: function () {
    return _utils.DEFAULT_DESKTOP_MODE_MEDIA_QUERY;
  }
}));
Object.defineProperty(exports, "DIALOG_WIDTH", ({
  enumerable: true,
  get: function () {
    return _dimensions.DIALOG_WIDTH;
  }
}));
Object.defineProperty(exports, "DayCalendar", ({
  enumerable: true,
  get: function () {
    return _DayCalendar.DayCalendar;
  }
}));
Object.defineProperty(exports, "PickersArrowSwitcher", ({
  enumerable: true,
  get: function () {
    return _PickersArrowSwitcher.PickersArrowSwitcher;
  }
}));
Object.defineProperty(exports, "PickersModalDialog", ({
  enumerable: true,
  get: function () {
    return _PickersModalDialog.PickersModalDialog;
  }
}));
Object.defineProperty(exports, "PickersPopper", ({
  enumerable: true,
  get: function () {
    return _PickersPopper.PickersPopper;
  }
}));
Object.defineProperty(exports, "PickersToolbar", ({
  enumerable: true,
  get: function () {
    return _PickersToolbar.PickersToolbar;
  }
}));
Object.defineProperty(exports, "PickersToolbarButton", ({
  enumerable: true,
  get: function () {
    return _PickersToolbarButton.PickersToolbarButton;
  }
}));
Object.defineProperty(exports, "addPositionPropertiesToSections", ({
  enumerable: true,
  get: function () {
    return _useField.addPositionPropertiesToSections;
  }
}));
Object.defineProperty(exports, "applyDefaultDate", ({
  enumerable: true,
  get: function () {
    return _dateUtils.applyDefaultDate;
  }
}));
Object.defineProperty(exports, "areDatesEqual", ({
  enumerable: true,
  get: function () {
    return _dateUtils.areDatesEqual;
  }
}));
Object.defineProperty(exports, "buildDeprecatedPropsWarning", ({
  enumerable: true,
  get: function () {
    return _warning.buildDeprecatedPropsWarning;
  }
}));
Object.defineProperty(exports, "buildWarning", ({
  enumerable: true,
  get: function () {
    return _warning.buildWarning;
  }
}));
Object.defineProperty(exports, "createDateStrForInputFromSections", ({
  enumerable: true,
  get: function () {
    return _useField.createDateStrForInputFromSections;
  }
}));
Object.defineProperty(exports, "executeInTheNextEventLoopTick", ({
  enumerable: true,
  get: function () {
    return _utils.executeInTheNextEventLoopTick;
  }
}));
Object.defineProperty(exports, "extractValidationProps", ({
  enumerable: true,
  get: function () {
    return _extractValidationProps.extractValidationProps;
  }
}));
Object.defineProperty(exports, "getActiveElement", ({
  enumerable: true,
  get: function () {
    return _utils.getActiveElement;
  }
}));
Object.defineProperty(exports, "getDefaultReferenceDate", ({
  enumerable: true,
  get: function () {
    return _getDefaultReferenceDate.getDefaultReferenceDate;
  }
}));
Object.defineProperty(exports, "getTodayDate", ({
  enumerable: true,
  get: function () {
    return _dateUtils.getTodayDate;
  }
}));
Object.defineProperty(exports, "onSpaceOrEnter", ({
  enumerable: true,
  get: function () {
    return _utils.onSpaceOrEnter;
  }
}));
Object.defineProperty(exports, "pickersArrowSwitcherClasses", ({
  enumerable: true,
  get: function () {
    return _pickersArrowSwitcherClasses.pickersArrowSwitcherClasses;
  }
}));
Object.defineProperty(exports, "pickersPopperClasses", ({
  enumerable: true,
  get: function () {
    return _pickersPopperClasses.pickersPopperClasses;
  }
}));
Object.defineProperty(exports, "pickersToolbarButtonClasses", ({
  enumerable: true,
  get: function () {
    return _pickersToolbarButtonClasses.pickersToolbarButtonClasses;
  }
}));
Object.defineProperty(exports, "pickersToolbarClasses", ({
  enumerable: true,
  get: function () {
    return _pickersToolbarClasses.pickersToolbarClasses;
  }
}));
Object.defineProperty(exports, "pickersToolbarTextClasses", ({
  enumerable: true,
  get: function () {
    return _pickersToolbarTextClasses.pickersToolbarTextClasses;
  }
}));
Object.defineProperty(exports, "replaceInvalidDateByNull", ({
  enumerable: true,
  get: function () {
    return _dateUtils.replaceInvalidDateByNull;
  }
}));
Object.defineProperty(exports, "splitFieldInternalAndForwardedProps", ({
  enumerable: true,
  get: function () {
    return _fields.splitFieldInternalAndForwardedProps;
  }
}));
Object.defineProperty(exports, "uncapitalizeObjectKeys", ({
  enumerable: true,
  get: function () {
    return _slotsMigration.uncapitalizeObjectKeys;
  }
}));
Object.defineProperty(exports, "useCalendarState", ({
  enumerable: true,
  get: function () {
    return _useCalendarState.useCalendarState;
  }
}));
Object.defineProperty(exports, "useControlledValueWithTimezone", ({
  enumerable: true,
  get: function () {
    return _useValueWithTimezone.useControlledValueWithTimezone;
  }
}));
Object.defineProperty(exports, "useDefaultDates", ({
  enumerable: true,
  get: function () {
    return _useUtils.useDefaultDates;
  }
}));
Object.defineProperty(exports, "useDefaultReduceAnimations", ({
  enumerable: true,
  get: function () {
    return _useDefaultReduceAnimations.useDefaultReduceAnimations;
  }
}));
Object.defineProperty(exports, "useField", ({
  enumerable: true,
  get: function () {
    return _useField.useField;
  }
}));
Object.defineProperty(exports, "useLocaleText", ({
  enumerable: true,
  get: function () {
    return _useUtils.useLocaleText;
  }
}));
Object.defineProperty(exports, "useLocalizationContext", ({
  enumerable: true,
  get: function () {
    return _useUtils.useLocalizationContext;
  }
}));
Object.defineProperty(exports, "useNextMonthDisabled", ({
  enumerable: true,
  get: function () {
    return _dateHelpersHooks.useNextMonthDisabled;
  }
}));
Object.defineProperty(exports, "useNow", ({
  enumerable: true,
  get: function () {
    return _useUtils.useNow;
  }
}));
Object.defineProperty(exports, "usePicker", ({
  enumerable: true,
  get: function () {
    return _usePicker.usePicker;
  }
}));
Object.defineProperty(exports, "usePreviousMonthDisabled", ({
  enumerable: true,
  get: function () {
    return _dateHelpersHooks.usePreviousMonthDisabled;
  }
}));
Object.defineProperty(exports, "useStaticPicker", ({
  enumerable: true,
  get: function () {
    return _useStaticPicker.useStaticPicker;
  }
}));
Object.defineProperty(exports, "useUtils", ({
  enumerable: true,
  get: function () {
    return _useUtils.useUtils;
  }
}));
Object.defineProperty(exports, "useValidation", ({
  enumerable: true,
  get: function () {
    return _useValidation.useValidation;
  }
}));
Object.defineProperty(exports, "validateDate", ({
  enumerable: true,
  get: function () {
    return _validateDate.validateDate;
  }
}));
Object.defineProperty(exports, "validateDateTime", ({
  enumerable: true,
  get: function () {
    return _validateDateTime.validateDateTime;
  }
}));
Object.defineProperty(exports, "validateTime", ({
  enumerable: true,
  get: function () {
    return _validateTime.validateTime;
  }
}));
var _PickersArrowSwitcher = __webpack_require__(7357);
var _PickersModalDialog = __webpack_require__(66878);
var _PickersPopper = __webpack_require__(21570);
var _PickersToolbar = __webpack_require__(33598);
var _pickersToolbarClasses = __webpack_require__(53733);
var _pickersToolbarButtonClasses = __webpack_require__(16154);
var _pickersToolbarTextClasses = __webpack_require__(59824);
var _pickersArrowSwitcherClasses = __webpack_require__(82402);
var _pickersPopperClasses = __webpack_require__(96392);
var _PickersToolbarButton = __webpack_require__(13052);
var _dimensions = __webpack_require__(78774);
var _useValueWithTimezone = __webpack_require__(42736);
var _useField = __webpack_require__(3022);
var _usePicker = __webpack_require__(26161);
var _useStaticPicker = __webpack_require__(10930);
var _useUtils = __webpack_require__(72979);
var _useValidation = __webpack_require__(12003);
var _dateHelpersHooks = __webpack_require__(65075);
var _dateUtils = __webpack_require__(58759);
var _fields = __webpack_require__(52065);
var _getDefaultReferenceDate = __webpack_require__(95287);
var _utils = __webpack_require__(48861);
var _useDefaultReduceAnimations = __webpack_require__(90370);
var _extractValidationProps = __webpack_require__(8018);
var _validateDate = __webpack_require__(43722);
var _validateDateTime = __webpack_require__(7316);
var _validateTime = __webpack_require__(15721);
var _warning = __webpack_require__(67474);
var _slotsMigration = __webpack_require__(93127);
var _DayCalendar = __webpack_require__(65945);
var _useCalendarState = __webpack_require__(34276);

/***/ }),

/***/ 58759:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resolveDateFormat = exports.replaceInvalidDateByNull = exports.mergeDateAndTime = exports.isDatePickerView = exports.getTodayDate = exports.getMonthsInYear = exports.findClosestEnabledDate = exports.areDatesEqual = exports.applyDefaultDate = void 0;
var _views = __webpack_require__(70681);
const findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  utils,
  timezone
}) => {
  const today = utils.startOfDay(utils.dateWithTimezone(undefined, timezone));
  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (utils.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = utils.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = utils.addDays(backward, -1);
    }
  }
  return null;
};
exports.findClosestEnabledDate = findClosestEnabledDate;
const replaceInvalidDateByNull = (utils, value) => value == null || !utils.isValid(value) ? null : value;
exports.replaceInvalidDateByNull = replaceInvalidDateByNull;
const applyDefaultDate = (utils, value, defaultValue) => {
  if (value == null || !utils.isValid(value)) {
    return defaultValue;
  }
  return value;
};
exports.applyDefaultDate = applyDefaultDate;
const areDatesEqual = (utils, a, b) => {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
exports.areDatesEqual = areDatesEqual;
const getMonthsInYear = (utils, year) => {
  const firstMonth = utils.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(utils.addMonths(prevMonth, 1));
  }
  return months;
};
exports.getMonthsInYear = getMonthsInYear;
const mergeDateAndTime = (utils, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = utils.setHours(mergedDate, utils.getHours(timeParam));
  mergedDate = utils.setMinutes(mergedDate, utils.getMinutes(timeParam));
  mergedDate = utils.setSeconds(mergedDate, utils.getSeconds(timeParam));
  return mergedDate;
};
exports.mergeDateAndTime = mergeDateAndTime;
const getTodayDate = (utils, timezone, valueType) => valueType === 'date' ? utils.startOfDay(utils.dateWithTimezone(undefined, timezone)) : utils.dateWithTimezone(undefined, timezone);
exports.getTodayDate = getTodayDate;
const dateViews = ['year', 'month', 'day'];
const isDatePickerView = view => dateViews.includes(view);
exports.isDatePickerView = isDatePickerView;
const resolveDateFormat = (utils, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if ((0, _views.areViewsEqual)(views, ['year'])) {
    return formats.year;
  }
  if ((0, _views.areViewsEqual)(views, ['month'])) {
    return formats.month;
  }
  if ((0, _views.areViewsEqual)(views, ['day'])) {
    return formats.dayOfMonth;
  }
  if ((0, _views.areViewsEqual)(views, ['month', 'year'])) {
    return `${formats.month} ${formats.year}`;
  }
  if ((0, _views.areViewsEqual)(views, ['day', 'month'])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
    // For other locales using strings like "June 1", without weekday.
    return /en/.test(utils.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
exports.resolveDateFormat = resolveDateFormat;

/***/ }),

/***/ 52065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.splitFieldInternalAndForwardedProps = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _extractValidationProps = __webpack_require__(8018);
const SHARED_FIELD_INTERNAL_PROP_NAMES = ['value', 'defaultValue', 'referenceDate', 'format', 'formatDensity', 'onChange', 'timezone', 'readOnly', 'onError', 'shouldRespectLeadingZeros', 'selectedSections', 'onSelectedSectionsChange', 'unstableFieldRef'];
const splitFieldInternalAndForwardedProps = (props, valueType) => {
  const forwardedProps = (0, _extends2.default)({}, props);
  const internalProps = {};
  const extractProp = propName => {
    if (forwardedProps.hasOwnProperty(propName)) {
      // @ts-ignore
      internalProps[propName] = forwardedProps[propName];
      delete forwardedProps[propName];
    }
  };
  SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
  if (valueType === 'date') {
    _extractValidationProps.DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
  } else if (valueType === 'time') {
    _extractValidationProps.TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
  } else if (valueType === 'date-time') {
    _extractValidationProps.DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    _extractValidationProps.TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    _extractValidationProps.DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
  }
  return {
    forwardedProps,
    internalProps
  };
};
exports.splitFieldInternalAndForwardedProps = splitFieldInternalAndForwardedProps;

/***/ }),

/***/ 95287:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getViewsGranularity = exports.getSectionTypeGranularity = exports.getDefaultReferenceDate = exports.SECTION_TYPE_GRANULARITY = void 0;
var _timeUtils = __webpack_require__(49903);
var _dateUtils = __webpack_require__(58759);
const SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
exports.SECTION_TYPE_GRANULARITY = SECTION_TYPE_GRANULARITY;
const getSectionTypeGranularity = sections => Math.max(...sections.map(section => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
exports.getSectionTypeGranularity = getSectionTypeGranularity;
const getViewsGranularity = views => Math.max(...views.map(view => SECTION_TYPE_GRANULARITY[view] ?? 1));
exports.getViewsGranularity = getViewsGranularity;
const roundDate = (utils, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return utils.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return utils.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return utils.startOfDay(date);
  }

  // We don't have startOfHour / startOfMinute / startOfSecond
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = utils.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = utils.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = utils.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
const getDefaultReferenceDate = ({
  props,
  utils,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(utils, granularity, (0, _dateUtils.getTodayDate)(utils, timezone));
  if (props.minDate != null && utils.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.minDate);
  }
  if (props.maxDate != null && utils.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.maxDate);
  }
  const isAfter = (0, _timeUtils.createIsAfterIgnoreDatePart)(props.disableIgnoringDatePartForTimeValidation ?? false, utils);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : (0, _dateUtils.mergeDateAndTime)(utils, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : (0, _dateUtils.mergeDateAndTime)(utils, referenceDate, props.maxTime));
  }
  return referenceDate;
};
exports.getDefaultReferenceDate = getDefaultReferenceDate;

/***/ }),

/***/ 93127:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uncapitalizeObjectKeys = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
// TODO v7: This file exist only to simplify typing between
// components/componentsProps and slots/slotProps
// Should be deleted when components/componentsProps are removed

const uncapitalizeObjectKeys = capitalizedObject => {
  if (capitalizedObject === undefined) {
    return undefined;
  }
  return Object.keys(capitalizedObject).reduce((acc, key) => (0, _extends2.default)({}, acc, {
    [`${key.slice(0, 1).toLowerCase()}${key.slice(1)}`]: capitalizedObject[key]
  }), {});
};
exports.uncapitalizeObjectKeys = uncapitalizeObjectKeys;

/***/ }),

/***/ 49903:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resolveTimeFormat = exports.isTimeView = exports.isInternalTimeView = exports.getSecondsInDay = exports.getMeridiem = exports.createIsAfterIgnoreDatePart = exports.convertValueToMeridiem = exports.convertToMeridiem = void 0;
var _views = __webpack_require__(70681);
const timeViews = ['hours', 'minutes', 'seconds'];
const isTimeView = view => timeViews.includes(view);
exports.isTimeView = isTimeView;
const isInternalTimeView = view => timeViews.includes(view) || view === 'meridiem';
exports.isInternalTimeView = isInternalTimeView;
const getMeridiem = (date, utils) => {
  if (!date) {
    return null;
  }
  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
exports.getMeridiem = getMeridiem;
const convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? 'pm' : 'am';
    if (currentMeridiem !== meridiem) {
      return meridiem === 'am' ? value - 12 : value + 12;
    }
  }
  return value;
};
exports.convertValueToMeridiem = convertValueToMeridiem;
const convertToMeridiem = (time, meridiem, ampm, utils) => {
  const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
exports.convertToMeridiem = convertToMeridiem;
const getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
exports.getSecondsInDay = getSecondsInDay;
const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};
exports.createIsAfterIgnoreDatePart = createIsAfterIgnoreDatePart;
const resolveTimeFormat = (utils, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if ((0, _views.areViewsEqual)(views, ['hours'])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if ((0, _views.areViewsEqual)(views, ['minutes'])) {
    return formats.minutes;
  }
  if ((0, _views.areViewsEqual)(views, ['seconds'])) {
    return formats.seconds;
  }
  if ((0, _views.areViewsEqual)(views, ['minutes', 'seconds'])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if ((0, _views.areViewsEqual)(views, ['hours', 'minutes', 'seconds'])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};
exports.resolveTimeFormat = resolveTimeFormat;

/***/ }),

/***/ 48861:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_DESKTOP_MODE_MEDIA_QUERY = void 0;
exports.arrayIncludes = arrayIncludes;
exports.onSpaceOrEnter = exports.getActiveElement = exports.executeInTheNextEventLoopTick = void 0;
/* Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(item => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
const onSpaceOrEnter = (innerFn, externalEvent) => event => {
  if (event.key === 'Enter' || event.key === ' ') {
    innerFn(event);

    // prevent any side effects
    event.preventDefault();
    event.stopPropagation();
  }
  if (externalEvent) {
    externalEvent(event);
  }
};
exports.onSpaceOrEnter = onSpaceOrEnter;
const executeInTheNextEventLoopTick = fn => {
  setTimeout(fn, 0);
};

// https://www.abeautifulsite.net/posts/finding-the-active-element-in-a-shadow-root/
exports.executeInTheNextEventLoopTick = executeInTheNextEventLoopTick;
const getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};
exports.getActiveElement = getActiveElement;
const DEFAULT_DESKTOP_MODE_MEDIA_QUERY = '@media (pointer: fine)';
exports.DEFAULT_DESKTOP_MODE_MEDIA_QUERY = DEFAULT_DESKTOP_MODE_MEDIA_QUERY;

/***/ }),

/***/ 8018:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractValidationProps = exports.TIME_VALIDATION_PROP_NAMES = exports.DATE_VALIDATION_PROP_NAMES = exports.DATE_TIME_VALIDATION_PROP_NAMES = void 0;
const DATE_VALIDATION_PROP_NAMES = ['disablePast', 'disableFuture', 'minDate', 'maxDate', 'shouldDisableDate', 'shouldDisableMonth', 'shouldDisableYear'];
exports.DATE_VALIDATION_PROP_NAMES = DATE_VALIDATION_PROP_NAMES;
const TIME_VALIDATION_PROP_NAMES = ['disablePast', 'disableFuture', 'minTime', 'maxTime', 'shouldDisableClock', 'shouldDisableTime', 'minutesStep', 'ampm', 'disableIgnoringDatePartForTimeValidation'];
exports.TIME_VALIDATION_PROP_NAMES = TIME_VALIDATION_PROP_NAMES;
const DATE_TIME_VALIDATION_PROP_NAMES = ['minDateTime', 'maxDateTime'];
exports.DATE_TIME_VALIDATION_PROP_NAMES = DATE_TIME_VALIDATION_PROP_NAMES;
const VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
/**
 * Extract the validation props for the props received by a component.
 * Limit the risk of forgetting some of them and reduce the bundle size.
 */
const extractValidationProps = props => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});
exports.extractValidationProps = extractValidationProps;

/***/ }),

/***/ 43722:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.validateDate = void 0;
var _dateUtils = __webpack_require__(58759);
const validateDate = ({
  props,
  value,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.dateWithTimezone(undefined, timezone);
  const minDate = (0, _dateUtils.applyDefaultDate)(adapter.utils, props.minDate, adapter.defaultDates.minDate);
  const maxDate = (0, _dateUtils.applyDefaultDate)(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
  switch (true) {
    case !adapter.utils.isValid(value):
      return 'invalidDate';
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return 'shouldDisableDate';
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return 'shouldDisableMonth';
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return 'shouldDisableYear';
    case Boolean(disableFuture && adapter.utils.isAfterDay(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.utils.isBeforeDay(value, now)):
      return 'disablePast';
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return 'minDate';
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return 'maxDate';
    default:
      return null;
  }
};
exports.validateDate = validateDate;

/***/ }),

/***/ 7316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.validateDateTime = void 0;
var _validateDate = __webpack_require__(43722);
var _validateTime = __webpack_require__(15721);
const validateDateTime = ({
  props,
  value,
  adapter
}) => {
  const dateValidationResult = (0, _validateDate.validateDate)({
    adapter,
    value,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return (0, _validateTime.validateTime)({
    adapter,
    value,
    props
  });
};
exports.validateDateTime = validateDateTime;

/***/ }),

/***/ 15721:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.validateTime = void 0;
var _timeUtils = __webpack_require__(49903);
const validateTime = ({
  adapter,
  value,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableClock,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.dateWithTimezone(undefined, timezone);
  const isAfter = (0, _timeUtils.createIsAfterIgnoreDatePart)(disableIgnoringDatePartForTimeValidation, adapter.utils);
  switch (true) {
    case !adapter.utils.isValid(value):
      return 'invalidDate';
    case Boolean(minTime && isAfter(minTime, value)):
      return 'minTime';
    case Boolean(maxTime && isAfter(value, maxTime)):
      return 'maxTime';
    case Boolean(disableFuture && adapter.utils.isAfter(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.utils.isBefore(value, now)):
      return 'disablePast';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'hours')):
      return 'shouldDisableTime-hours';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'minutes')):
      return 'shouldDisableTime-minutes';
    case Boolean(shouldDisableTime && shouldDisableTime(value, 'seconds')):
      return 'shouldDisableTime-seconds';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getHours(value), 'hours')):
      return 'shouldDisableClock-hours';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getMinutes(value), 'minutes')):
      return 'shouldDisableClock-minutes';
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getSeconds(value), 'seconds')):
      return 'shouldDisableClock-seconds';
    case Boolean(minutesStep && adapter.utils.getMinutes(value) % minutesStep !== 0):
      return 'minutesStep';
    default:
      return null;
  }
};
exports.validateTime = validateTime;

/***/ }),

/***/ 24981:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.singleItemValueManager = exports.singleItemFieldValueManager = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _dateUtils = __webpack_require__(58759);
var _getDefaultReferenceDate = __webpack_require__(95287);
var _useField = __webpack_require__(98855);
const _excluded = ["value", "referenceDate"];
const singleItemValueManager = {
  emptyValue: null,
  getTodayValue: _dateUtils.getTodayDate,
  getInitialReferenceValue: _ref => {
    let {
        value,
        referenceDate
      } = _ref,
      params = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
    if (value != null && params.utils.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return (0, _getDefaultReferenceDate.getDefaultReferenceDate)(params);
  },
  cleanValue: _dateUtils.replaceInvalidDateByNull,
  areValuesEqual: _dateUtils.areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: error => error != null,
  defaultErrorState: null,
  getTimezone: (utils, value) => value == null || !utils.isValid(value) ? null : utils.getTimezone(value),
  setTimezone: (utils, timezone, value) => value == null ? null : utils.setTimezone(value, timezone)
};
exports.singleItemValueManager = singleItemValueManager;
const singleItemFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => value == null || !utils.isValid(value) ? prevReferenceValue : value,
  getSectionsFromValue: (utils, date, prevSections, isRTL, getSectionsFromDate) => {
    const shouldReUsePrevDateSections = !utils.isValid(date) && !!prevSections;
    if (shouldReUsePrevDateSections) {
      return prevSections;
    }
    return (0, _useField.addPositionPropertiesToSections)(getSectionsFromDate(date), isRTL);
  },
  getValueStrFromSections: _useField.createDateStrForInputFromSections,
  getActiveDateManager: (utils, state) => ({
    date: state.value,
    referenceDate: state.referenceValue,
    getSections: sections => sections,
    getNewValuesFromNewActiveDate: newActiveDate => ({
      value: newActiveDate,
      referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : newActiveDate
    })
  }),
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue)
};
exports.singleItemFieldValueManager = singleItemFieldValueManager;

/***/ }),

/***/ 70681:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.areViewsEqual = exports.applyDefaultViewProps = void 0;
const areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every(expectedView => views.includes(expectedView));
};
exports.areViewsEqual = areViewsEqual;
const applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views ?? defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error('MUI: The `views` prop must contain at least one view');
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};
exports.applyDefaultViewProps = applyDefaultViewProps;

/***/ }),

/***/ 67474:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.buildWarning = exports.buildDeprecatedPropsWarning = void 0;
const buildDeprecatedPropsWarning = message => {
  let alreadyWarned = false;
  if (true) {
    return () => {};
  }
  const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
  return deprecatedProps => {
    const deprecatedKeys = Object.entries(deprecatedProps).filter(([, value]) => value !== undefined).map(([key]) => `- ${key}`);
    if (!alreadyWarned && deprecatedKeys.length > 0) {
      alreadyWarned = true;
      console.warn([cleanMessage, 'deprecated props observed:', ...deprecatedKeys].join('\n'));
    }
  };
};
exports.buildDeprecatedPropsWarning = buildDeprecatedPropsWarning;
const buildWarning = (message, gravity = 'warning') => {
  let alreadyWarned = false;
  const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
  return () => {
    if (!alreadyWarned) {
      alreadyWarned = true;
      if (gravity === 'error') {
        console.error(cleanMessage);
      } else {
        console.warn(cleanMessage);
      }
    }
  };
};
exports.buildWarning = buildWarning;

/***/ }),

/***/ 2865:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.enUS = exports.DEFAULT_LOCALE = void 0;
var _getPickersLocalization = __webpack_require__(89276);
// This object is not Partial<PickersLocaleText> because it is the default values

const enUSPickers = {
  // Calendar navigation
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  // View navigation
  openPreviousView: 'open previous view',
  openNextView: 'open next view',
  calendarViewSwitchingButtonAriaLabel: view => view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view',
  // DateRange placeholders
  start: 'Start',
  end: 'End',
  // Action bar
  cancelButtonLabel: 'Cancel',
  clearButtonLabel: 'Clear',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Today',
  // Toolbar titles
  datePickerToolbarTitle: 'Select date',
  dateTimePickerToolbarTitle: 'Select date & time',
  timePickerToolbarTitle: 'Select time',
  dateRangePickerToolbarTitle: 'Select date range',
  // Clock labels
  clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`}`,
  hoursClockNumberText: hours => `${hours} hours`,
  minutesClockNumberText: minutes => `${minutes} minutes`,
  secondsClockNumberText: seconds => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: view => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Week number',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: weekNumber => `Week ${weekNumber}`,
  calendarWeekNumberText: weekNumber => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose date, selected date is ${utils.format(value, 'fullDate')}` : 'Choose date',
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose time, selected time is ${utils.format(value, 'fullTime')}` : 'Choose time',
  // Table labels
  timeTableLabel: 'pick time',
  dateTableLabel: 'pick date',
  // Field section placeholders
  fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  fieldDayPlaceholder: () => 'DD',
  fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => 'hh',
  fieldMinutesPlaceholder: () => 'mm',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'aa'
};
const DEFAULT_LOCALE = enUSPickers;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
const enUS = (0, _getPickersLocalization.getPickersLocalization)(enUSPickers);
exports.enUS = enUS;

/***/ }),

/***/ 89276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPickersLocalization = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
const getPickersLocalization = pickersTranslations => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: (0, _extends2.default)({}, pickersTranslations)
        }
      }
    }
  };
};
exports.getPickersLocalization = getPickersLocalization;

/***/ }),

/***/ 22113:
/***/ ((module) => {

function e(r){var o,t,f="";if("string"==typeof r||"number"==typeof r)f+=r;else if("object"==typeof r)if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(f&&(f+=" "),f+=t);else for(o in r)r[o]&&(f&&(f+=" "),f+=o);return f}function r(){for(var r,o,t=0,f="";t<arguments.length;)(r=arguments[t++])&&(o=e(r))&&(f&&(f+=" "),f+=o);return f}module.exports=r,module.exports.clsx=r;

/***/ })

};
;