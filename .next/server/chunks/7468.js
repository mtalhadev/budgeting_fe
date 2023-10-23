"use strict";
exports.id = 7468;
exports.ids = [7468];
exports.modules = {

/***/ 52348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateTimeField = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _TextField = _interopRequireDefault(__webpack_require__(92870));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(67392);
var _useDateTimeField2 = __webpack_require__(4132);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"],
  _excluded2 = ["inputRef"],
  _excluded3 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DateTimeField = /*#__PURE__*/React.forwardRef(function DateTimeField(inProps, ref) {
  const themeProps = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDateTimeField'
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
  const _useDateTimeField = (0, _useDateTimeField2.useDateTimeField)({
      props: textFieldProps,
      inputRef: externalInputRef
    }),
    {
      ref: inputRef,
      onPaste,
      onKeyDown,
      inputMode,
      readOnly
    } = _useDateTimeField,
    fieldProps = (0, _objectWithoutPropertiesLoose2.default)(_useDateTimeField, _excluded3);
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
exports.DateTimeField = DateTimeField;
 false ? 0 : void 0;

/***/ }),

/***/ 80017:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DateTimeField", ({
  enumerable: true,
  get: function () {
    return _DateTimeField.DateTimeField;
  }
}));
Object.defineProperty(exports, "unstable_useDateTimeField", ({
  enumerable: true,
  get: function () {
    return _useDateTimeField.useDateTimeField;
  }
}));
var _DateTimeField = __webpack_require__(52348);
var _useDateTimeField = __webpack_require__(4132);

/***/ }),

/***/ 4132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDateTimeField = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _valueManagers = __webpack_require__(24981);
var _useField = __webpack_require__(3022);
var _validateDateTime = __webpack_require__(7316);
var _dateUtils = __webpack_require__(58759);
var _useUtils = __webpack_require__(72979);
var _fields = __webpack_require__(52065);
const useDefaultizedDateTimeField = props => {
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  const ampm = props.ampm ?? utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h;
  return (0, _extends2.default)({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? defaultFormat,
    disableIgnoringDatePartForTimeValidation: Boolean(props.minDateTime || props.maxDateTime),
    minDate: (0, _dateUtils.applyDefaultDate)(utils, props.minDateTime ?? props.minDate, defaultDates.minDate),
    maxDate: (0, _dateUtils.applyDefaultDate)(utils, props.maxDateTime ?? props.maxDate, defaultDates.maxDate),
    minTime: props.minDateTime ?? props.minTime,
    maxTime: props.maxDateTime ?? props.maxTime
  });
};
const useDateTimeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedDateTimeField(inProps);
  const {
    forwardedProps,
    internalProps
  } = (0, _fields.splitFieldInternalAndForwardedProps)(props, 'date-time');
  return (0, _useField.useField)({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: _valueManagers.singleItemValueManager,
    fieldValueManager: _valueManagers.singleItemFieldValueManager,
    validator: _validateDateTime.validateDateTime,
    valueType: 'date-time'
  });
};
exports.useDateTimeField = useDateTimeField;

/***/ }),

/***/ 60090:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateTimePickerTabs = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _Tab = _interopRequireDefault(__webpack_require__(307));
var _Tabs = _interopRequireWildcard(__webpack_require__(87726));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _icons = __webpack_require__(41922);
var _useUtils = __webpack_require__(72979);
var _dateTimePickerTabsClasses = __webpack_require__(36034);
var _dateUtils = __webpack_require__(58759);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const viewToTab = view => {
  if ((0, _dateUtils.isDatePickerView)(view)) {
    return 'date';
  }
  return 'time';
};
const tabToView = tab => {
  if (tab === 'date') {
    return 'day';
  }
  return 'hours';
};
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _utils.unstable_composeClasses)(slots, _dateTimePickerTabsClasses.getDateTimePickerTabsUtilityClass, classes);
};
const DateTimePickerTabsRoot = (0, _styles.styled)(_Tabs.default, {
  name: 'MuiDateTimePickerTabs',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  boxShadow: `0 -1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
  '&:last-child': {
    boxShadow: `0 1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
    [`& .${_Tabs.tabsClasses.indicator}`]: {
      bottom: 'auto',
      top: 0
    }
  }
}));
const DateTimePickerTabs = function DateTimePickerTabs(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDateTimePickerTabs'
  });
  const {
    dateIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DateRangeIcon, {}),
    onViewChange,
    timeIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.TimeIcon, {}),
    view,
    hidden = typeof window === 'undefined' || window.innerHeight < 667
  } = props;
  const localeText = (0, _useUtils.useLocaleText)();
  const classes = useUtilityClasses(props);
  const handleChange = (event, value) => {
    onViewChange(tabToView(value));
  };
  if (hidden) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerTabsRoot, {
    ownerState: props,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
      value: "date",
      "aria-label": localeText.dateTableLabel,
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
        children: dateIcon
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
      value: "time",
      "aria-label": localeText.timeTableLabel,
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
        children: timeIcon
      })
    })]
  });
};
exports.DateTimePickerTabs = DateTimePickerTabs;
 false ? 0 : void 0;

/***/ }),

/***/ 68918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateTimePickerToolbar = DateTimePickerToolbar;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _PickersToolbarText = __webpack_require__(65281);
var _PickersToolbar = __webpack_require__(33598);
var _PickersToolbarButton = __webpack_require__(13052);
var _useUtils = __webpack_require__(72979);
var _dateTimePickerToolbarClasses = __webpack_require__(74641);
var _dateHelpersHooks = __webpack_require__(65075);
var _dimensions = __webpack_require__(78774);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["ampm", "ampmInClock", "value", "onChange", "view", "isLandscape", "onViewChange", "toolbarFormat", "toolbarPlaceholder", "views", "disabled", "readOnly", "toolbarVariant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    theme,
    isLandscape
  } = ownerState;
  const slots = {
    root: ['root'],
    dateContainer: ['dateContainer'],
    timeContainer: ['timeContainer', theme.direction === 'rtl' && 'timeLabelReverse'],
    timeDigitsContainer: ['timeDigitsContainer', theme.direction === 'rtl' && 'timeLabelReverse'],
    separator: ['separator'],
    ampmSelection: ['ampmSelection', isLandscape && 'ampmLandscape'],
    ampmLabel: ['ampmLabel']
  };
  return (0, _utils.unstable_composeClasses)(slots, _dateTimePickerToolbarClasses.getDateTimePickerToolbarUtilityClass, classes);
};
const DateTimePickerToolbarRoot = (0, _styles.styled)(_PickersToolbar.PickersToolbar, {
  name: 'MuiDateTimePickerToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  paddingLeft: ownerState.toolbarVariant === 'desktop' && !ownerState.isLandscape ? 24 : 16,
  paddingRight: ownerState.toolbarVariant === 'desktop' && !ownerState.isLandscape ? 0 : 16,
  borderBottom: ownerState.toolbarVariant === 'desktop' ? `1px solid ${(theme.vars || theme).palette.divider}` : undefined,
  borderRight: ownerState.toolbarVariant === 'desktop' && ownerState.isLandscape ? `1px solid ${(theme.vars || theme).palette.divider}` : undefined,
  justifyContent: 'space-around',
  position: 'relative'
}));
DateTimePickerToolbarRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: _propTypes.default.elementType,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  isLandscape: _propTypes.default.bool.isRequired,
  isMobileKeyboardViewOpen: _propTypes.default.bool,
  landscapeDirection: _propTypes.default.oneOf(['column', 'row']),
  ownerState: _propTypes.default.object.isRequired,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  toggleMobileKeyboardView: _propTypes.default.func,
  toolbarTitle: _propTypes.default.node,
  viewType: _propTypes.default.oneOf(['date', 'time'])
};
const DateTimePickerToolbarDateContainer = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'DateContainer',
  overridesResolver: (props, styles) => styles.dateContainer
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});
const DateTimePickerToolbarTimeContainer = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'TimeContainer',
  overridesResolver: (props, styles) => styles.timeContainer
})(({
  theme,
  ownerState
}) => {
  const direction = ownerState.isLandscape && ownerState.toolbarVariant !== 'desktop' ? 'column' : 'row';
  return (0, _extends2.default)({
    display: 'flex',
    flexDirection: direction
  }, ownerState.toolbarVariant === 'desktop' && (0, _extends2.default)({}, !ownerState.isLandscape && {
    gap: 9,
    marginRight: 4,
    alignSelf: 'flex-end'
  }), theme.direction === 'rtl' && {
    flexDirection: `${direction}-reverse`
  });
});
const DateTimePickerToolbarTimeDigitsContainer = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'TimeDigitsContainer',
  overridesResolver: (props, styles) => styles.timeDigitsContainer
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  display: 'flex'
}, ownerState.toolbarVariant === 'desktop' && {
  gap: 1.5
}, theme.direction === 'rtl' && {
  flexDirection: 'row-reverse'
}));
DateTimePickerToolbarTimeContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: _propTypes.default.elementType,
  ownerState: _propTypes.default.object.isRequired,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
};
const DateTimePickerToolbarSeparator = (0, _styles.styled)(_PickersToolbarText.PickersToolbarText, {
  name: 'MuiDateTimePickerToolbar',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})(({
  ownerState
}) => ({
  margin: ownerState.toolbarVariant === 'desktop' ? 0 : '0 4px 0 2px',
  cursor: 'default'
}));

// Taken from TimePickerToolbar
const DateTimePickerToolbarAmPmSelection = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'AmPmSelection',
  overridesResolver: (props, styles) => [{
    [`.${_dateTimePickerToolbarClasses.dateTimePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${_dateTimePickerToolbarClasses.dateTimePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => (0, _extends2.default)({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: '4px 0 auto',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%'
}, {
  [`& .${_dateTimePickerToolbarClasses.dateTimePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
function DateTimePickerToolbar(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDateTimePickerToolbar'
  });
  const {
      ampm,
      ampmInClock,
      value,
      onChange,
      view,
      isLandscape,
      onViewChange,
      toolbarFormat,
      toolbarPlaceholder = '––',
      views,
      disabled,
      readOnly,
      toolbarVariant = 'mobile'
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const utils = (0, _useUtils.useUtils)();
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(value, ampm, onChange);
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const isDesktop = toolbarVariant === 'desktop';
  const localeText = (0, _useUtils.useLocaleText)();
  const theme = (0, _styles.useTheme)();
  const classes = useUtilityClasses((0, _extends2.default)({}, ownerState, {
    theme
  }));
  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  const dateText = React.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(value, toolbarFormat);
    }
    return utils.format(value, 'shortDate');
  }, [value, toolbarFormat, toolbarPlaceholder, utils]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarRoot, (0, _extends2.default)({
    toolbarTitle: localeText.dateTimePickerToolbarTitle,
    isLandscape: isLandscape,
    className: classes.root
  }, other, {
    ownerState: ownerState,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState: ownerState,
      children: [views.includes('year') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => onViewChange('year'),
        selected: view === 'year',
        value: value ? utils.format(value, 'year') : '–'
      }), views.includes('day') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        tabIndex: -1,
        variant: isDesktop ? 'h5' : 'h4',
        onClick: () => onViewChange('day'),
        selected: view === 'day',
        value: dateText
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState: ownerState,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarTimeDigitsContainer, {
        className: classes.timeDigitsContainer,
        ownerState: ownerState,
        children: [views.includes('hours') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
          variant: isDesktop ? 'h5' : 'h3',
          width: isDesktop && !isLandscape ? _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
          onClick: () => onViewChange('hours'),
          selected: view === 'hours',
          value: value ? formatHours(value) : '--'
        }), views.includes('minutes') && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? 'h5' : 'h3',
            value: ":",
            className: classes.separator,
            ownerState: ownerState
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
            variant: isDesktop ? 'h5' : 'h3',
            width: isDesktop && !isLandscape ? _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
            onClick: () => onViewChange('minutes'),
            selected: view === 'minutes',
            value: value ? utils.format(value, 'minutes') : '--'
          })]
        }), views.includes('seconds') && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? 'h5' : 'h3',
            value: ":",
            className: classes.separator,
            ownerState: ownerState
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
            variant: isDesktop ? 'h5' : 'h3',
            width: isDesktop && !isLandscape ? _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
            onClick: () => onViewChange('seconds'),
            selected: view === 'seconds',
            value: value ? utils.format(value, 'seconds') : '--'
          })]
        })]
      }), showAmPmControl && !isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarAmPmSelection, {
        className: classes.ampmSelection,
        ownerState: ownerState,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === 'am',
          typographyClassName: classes.ampmLabel,
          value: utils.getMeridiemText('am'),
          onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
          disabled: disabled
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === 'pm',
          typographyClassName: classes.ampmLabel,
          value: utils.getMeridiemText('pm'),
          onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
          disabled: disabled
        })]
      }), ampm && isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        variant: "h5",
        onClick: () => onViewChange('meridiem'),
        selected: view === 'meridiem',
        value: value && meridiemMode ? utils.getMeridiemText(meridiemMode) : '--',
        width: _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH
      })]
    })]
  }));
}
 false ? 0 : void 0;

/***/ }),

/***/ 36034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dateTimePickerTabsClasses = void 0;
exports.getDateTimePickerTabsUtilityClass = getDateTimePickerTabsUtilityClass;
var _utils = __webpack_require__(44268);
function getDateTimePickerTabsUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiDateTimePickerTabs', slot);
}
const dateTimePickerTabsClasses = (0, _utils.unstable_generateUtilityClasses)('MuiDateTimePickerTabs', ['root']);
exports.dateTimePickerTabsClasses = dateTimePickerTabsClasses;

/***/ }),

/***/ 74641:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dateTimePickerToolbarClasses = void 0;
exports.getDateTimePickerToolbarUtilityClass = getDateTimePickerToolbarUtilityClass;
var _utils = __webpack_require__(44268);
function getDateTimePickerToolbarUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiDateTimePickerToolbar', slot);
}
const dateTimePickerToolbarClasses = (0, _utils.unstable_generateUtilityClasses)('MuiDateTimePickerToolbar', ['root', 'dateContainer', 'timeContainer', 'timeDigitsContainer', 'separator', 'timeLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel']);
exports.dateTimePickerToolbarClasses = dateTimePickerToolbarClasses;

/***/ }),

/***/ 90800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDateTimePickerDefaultizedProps = useDateTimePickerDefaultizedProps;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _styles = __webpack_require__(83476);
var _useUtils = __webpack_require__(72979);
var _dateUtils = __webpack_require__(58759);
var _DateTimePickerTabs = __webpack_require__(60090);
var _DateTimePickerToolbar = __webpack_require__(68918);
var _views = __webpack_require__(70681);
var _slotsMigration = __webpack_require__(93127);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useDateTimePickerDefaultizedProps(props, name) {
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  const themeProps = (0, _styles.useThemeProps)({
    props,
    name
  });
  const ampm = themeProps.ampm ?? utils.is12HourCycleInCurrentLocale();
  const localeText = React.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return (0, _extends2.default)({}, themeProps.localeText, {
      dateTimePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = themeProps.slots ?? (0, _slotsMigration.uncapitalizeObjectKeys)(themeProps.components);
  const slotProps = themeProps.slotProps ?? themeProps.componentsProps;
  return (0, _extends2.default)({}, themeProps, (0, _views.applyDefaultViewProps)({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ['year', 'day', 'hours', 'minutes'],
    defaultOpenTo: 'day'
  }), {
    ampm,
    localeText,
    orientation: themeProps.orientation ?? 'portrait',
    // TODO: Remove from public API
    disableIgnoringDatePartForTimeValidation: themeProps.disableIgnoringDatePartForTimeValidation ?? Boolean(themeProps.minDateTime || themeProps.maxDateTime ||
    // allow time clock to correctly check time validity: https://github.com/mui/mui-x/issues/8520
    themeProps.disablePast || themeProps.disableFuture),
    disableFuture: themeProps.disableFuture ?? false,
    disablePast: themeProps.disablePast ?? false,
    minDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.minDateTime ?? themeProps.minDate, defaultDates.minDate),
    maxDate: (0, _dateUtils.applyDefaultDate)(utils, themeProps.maxDateTime ?? themeProps.maxDate, defaultDates.maxDate),
    minTime: themeProps.minDateTime ?? themeProps.minTime,
    maxTime: themeProps.maxDateTime ?? themeProps.maxTime,
    slots: (0, _extends2.default)({
      toolbar: _DateTimePickerToolbar.DateTimePickerToolbar,
      tabs: _DateTimePickerTabs.DateTimePickerTabs
    }, slots),
    slotProps: (0, _extends2.default)({}, slotProps, {
      toolbar: (0, _extends2.default)({
        ampm
      }, slotProps?.toolbar)
    })
  });
}

/***/ }),

/***/ 54848:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DigitalClock = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(67392);
var _styles = __webpack_require__(83476);
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _composeClasses = _interopRequireDefault(__webpack_require__(56925));
var _MenuItem = _interopRequireDefault(__webpack_require__(88707));
var _MenuList = _interopRequireDefault(__webpack_require__(61137));
var _useForkRef = _interopRequireDefault(__webpack_require__(59272));
var _useUtils = __webpack_require__(72979);
var _timeUtils = __webpack_require__(49903);
var _PickerViewRoot = __webpack_require__(4050);
var _digitalClockClasses = __webpack_require__(42261);
var _useViews = __webpack_require__(71469);
var _dimensions = __webpack_require__(78774);
var _useValueWithTimezone = __webpack_require__(42736);
var _valueManagers = __webpack_require__(24981);
var _useClockReferenceDate = __webpack_require__(8032);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["ampm", "timeStep", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "views", "skipDisabled", "timezone"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    list: ['list'],
    item: ['item']
  };
  return (0, _composeClasses.default)(slots, _digitalClockClasses.getDigitalClockUtilityClass, classes);
};
const DigitalClockRoot = (0, _styles.styled)(_PickerViewRoot.PickerViewRoot, {
  name: 'MuiDigitalClock',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => ({
  overflowY: 'auto',
  width: '100%',
  scrollBehavior: ownerState.alreadyRendered ? 'smooth' : 'auto',
  maxHeight: _dimensions.DIGITAL_CLOCK_VIEW_HEIGHT
}));
const DigitalClockList = (0, _styles.styled)(_MenuList.default, {
  name: 'MuiDigitalClock',
  slot: 'List',
  overridesResolver: (props, styles) => styles.list
})({
  padding: 0
});
const DigitalClockItem = (0, _styles.styled)(_MenuItem.default, {
  name: 'MuiDigitalClock',
  slot: 'Item',
  overridesResolver: (props, styles) => styles.item
})(({
  theme
}) => ({
  padding: '8px 16px',
  margin: '2px 4px',
  '&:first-of-type': {
    marginTop: 4
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  '&.Mui-selected': {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    '&:focus-visible, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
const DigitalClock = /*#__PURE__*/React.forwardRef(function DigitalClock(inProps, ref) {
  const utils = (0, _useUtils.useUtils)();
  const containerRef = React.useRef(null);
  const handleRef = (0, _useForkRef.default)(ref, containerRef);
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDigitalClock'
  });
  const {
      ampm = utils.is12HourCycleInCurrentLocale(),
      timeStep = 30,
      autoFocus,
      components,
      componentsProps,
      slots,
      slotProps,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableIgnoringDatePartForTimeValidation = false,
      maxTime,
      minTime,
      disableFuture,
      disablePast,
      minutesStep = 1,
      shouldDisableClock,
      shouldDisableTime,
      onChange,
      view: inView,
      openTo,
      onViewChange,
      focusedView,
      onFocusedViewChange,
      className,
      disabled,
      readOnly,
      views = ['hours'],
      skipDisabled = false,
      timezone: timezoneProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = (0, _useValueWithTimezone.useControlledValueWithTimezone)({
    name: 'DigitalClock',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: _valueManagers.singleItemValueManager
  });
  const localeText = (0, _useUtils.useLocaleText)();
  const now = (0, _useUtils.useNow)(timezone);
  const ownerState = React.useMemo(() => (0, _extends2.default)({}, props, {
    alreadyRendered: !!containerRef.current
  }), [props]);
  const classes = useUtilityClasses(ownerState);
  const ClockItem = slots?.digitalClockItem ?? components?.DigitalClockItem ?? DigitalClockItem;
  const clockItemProps = (0, _utils.useSlotProps)({
    elementType: ClockItem,
    externalSlotProps: slotProps?.digitalClockItem ?? componentsProps?.digitalClockItem,
    ownerState: {},
    className: classes.item
  });
  const valueOrReferenceDate = (0, _useClockReferenceDate.useClockReferenceDate)({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = (0, _useEventCallback.default)(newValue => handleRawValueChange(newValue, 'finish'));
  const {
    setValueAndGoToNextView
  } = (0, _useViews.useViews)({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const handleItemSelect = (0, _useEventCallback.default)(newValue => {
    setValueAndGoToNextView(newValue, 'finish');
  });
  React.useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const selectedItem = containerRef.current.querySelector('[role="listbox"] [role="option"][aria-selected="true"]');
    if (!selectedItem) {
      return;
    }
    const offsetTop = selectedItem.offsetTop;

    // Subtracting the 4px of extra margin intended for the first visible section item
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const isTimeDisabled = React.useCallback(valueToCheck => {
    const isAfter = (0, _timeUtils.createIsAfterIgnoreDatePart)(disableIgnoringDatePartForTimeValidation, utils);
    const containsValidTime = () => {
      if (minTime && isAfter(minTime, valueToCheck)) {
        return false;
      }
      if (maxTime && isAfter(valueToCheck, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(valueToCheck, now)) {
        return false;
      }
      if (disablePast && isAfter(now, valueToCheck)) {
        return false;
      }
      return true;
    };
    const isValidValue = () => {
      if (utils.getMinutes(valueToCheck) % minutesStep !== 0) {
        return false;
      }
      if (shouldDisableClock?.(utils.toJsDate(valueToCheck).getTime(), 'hours')) {
        return false;
      }
      if (shouldDisableTime) {
        return !shouldDisableTime(valueToCheck, 'hours');
      }
      return true;
    };
    return !containsValidTime() || !isValidValue();
  }, [disableIgnoringDatePartForTimeValidation, utils, minTime, maxTime, disableFuture, now, disablePast, minutesStep, shouldDisableClock, shouldDisableTime]);
  const timeOptions = React.useMemo(() => {
    const startOfDay = utils.startOfDay(valueOrReferenceDate);
    return [startOfDay, ...Array.from({
      length: Math.ceil(24 * 60 / timeStep) - 1
    }, (_, index) => utils.addMinutes(startOfDay, timeStep * (index + 1)))];
  }, [valueOrReferenceDate, timeStep, utils]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DigitalClockRoot, (0, _extends2.default)({
    ref: handleRef,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DigitalClockList, {
      autoFocusItem: autoFocus || !!focusedView,
      role: "listbox",
      "aria-label": localeText.timePickerToolbarTitle,
      className: classes.list,
      children: timeOptions.map(option => {
        if (skipDisabled && isTimeDisabled(option)) {
          return null;
        }
        const isSelected = utils.isEqual(option, value);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(ClockItem, (0, _extends2.default)({
          onClick: () => !readOnly && handleItemSelect(option),
          selected: isSelected,
          disabled: disabled || isTimeDisabled(option),
          disableRipple: readOnly,
          role: "option"
          // aria-readonly is not supported here and does not have any effect
          ,
          "aria-disabled": readOnly,
          "aria-selected": isSelected
        }, clockItemProps, {
          children: utils.format(option, ampm ? 'fullTime12h' : 'fullTime24h')
        }), utils.toISO(option));
      })
    })
  }));
});
exports.DigitalClock = DigitalClock;
 false ? 0 : void 0;

/***/ }),

/***/ 42261:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.digitalClockClasses = void 0;
exports.getDigitalClockUtilityClass = getDigitalClockUtilityClass;
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(24726));
var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(34370));
function getDigitalClockUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiDigitalClock', slot);
}
const digitalClockClasses = (0, _generateUtilityClasses.default)('MuiDigitalClock', ['root', 'list', 'item']);
exports.digitalClockClasses = digitalClockClasses;

/***/ }),

/***/ 61457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DigitalClock", ({
  enumerable: true,
  get: function () {
    return _DigitalClock.DigitalClock;
  }
}));
Object.defineProperty(exports, "digitalClockClasses", ({
  enumerable: true,
  get: function () {
    return _digitalClockClasses.digitalClockClasses;
  }
}));
Object.defineProperty(exports, "getDigitalClockUtilityClass", ({
  enumerable: true,
  get: function () {
    return _digitalClockClasses.getDigitalClockUtilityClass;
  }
}));
var _DigitalClock = __webpack_require__(54848);
var _digitalClockClasses = __webpack_require__(42261);

/***/ }),

/***/ 26493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MobileDateTimePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(67392);
var _valueManagers = __webpack_require__(24981);
var _DateTimeField = __webpack_require__(80017);
var _shared = __webpack_require__(90800);
var _useUtils = __webpack_require__(72979);
var _validateDateTime = __webpack_require__(7316);
var _useMobilePicker = __webpack_require__(85369);
var _extractValidationProps = __webpack_require__(8018);
var _dateViewRenderers = __webpack_require__(66132);
var _timeViewRenderers = __webpack_require__(2404);
var _dateTimeUtils = __webpack_require__(56102);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const MobileDateTimePicker = /*#__PURE__*/React.forwardRef(function MobileDateTimePicker(inProps, ref) {
  const localeText = (0, _useUtils.useLocaleText)();
  const utils = (0, _useUtils.useUtils)();

  // Props with the default values common to all date time pickers
  const defaultizedProps = (0, _shared.useDateTimePickerDefaultizedProps)(inProps, 'MuiMobileDateTimePicker');
  const viewRenderers = (0, _extends2.default)({
    day: _dateViewRenderers.renderDateViewCalendar,
    month: _dateViewRenderers.renderDateViewCalendar,
    year: _dateViewRenderers.renderDateViewCalendar,
    hours: _timeViewRenderers.renderTimeViewClock,
    minutes: _timeViewRenderers.renderTimeViewClock,
    seconds: _timeViewRenderers.renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;

  // Props with the default values specific to the mobile variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    viewRenderers,
    format: (0, _dateTimeUtils.resolveDateTimeFormat)(utils, defaultizedProps),
    ampmInClock,
    slots: (0, _extends2.default)({
      field: _DateTimeField.DateTimeField
    }, defaultizedProps.slots),
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      field: ownerState => (0, _extends2.default)({}, (0, _utils.resolveComponentProps)(defaultizedProps.slotProps?.field, ownerState), (0, _extractValidationProps.extractValidationProps)(defaultizedProps), {
        ref
      }),
      toolbar: (0, _extends2.default)({
        hidden: false,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      tabs: (0, _extends2.default)({
        hidden: false
      }, defaultizedProps.slotProps?.tabs)
    })
  });
  const {
    renderPicker
  } = (0, _useMobilePicker.useMobilePicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'date-time',
    getOpenDialogAriaText: props.localeText?.openDatePickerDialogue ?? localeText.openDatePickerDialogue,
    validator: _validateDateTime.validateDateTime
  });
  return renderPicker();
});
exports.MobileDateTimePicker = MobileDateTimePicker;
MobileDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: _propTypes.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: _propTypes.default.bool,
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
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: _propTypes.default.bool,
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
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: _propTypes.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: _propTypes.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: _propTypes.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: _propTypes.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: _propTypes.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: _propTypes.default.number,
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
  openTo: _propTypes.default.oneOf(['day', 'hours', 'minutes', 'month', 'seconds', 'year']),
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
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: _propTypes.default.func,
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
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: _propTypes.default.func,
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
  view: _propTypes.default.oneOf(['day', 'hours', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: _propTypes.default.shape({
    day: _propTypes.default.func,
    hours: _propTypes.default.func,
    minutes: _propTypes.default.func,
    month: _propTypes.default.func,
    seconds: _propTypes.default.func,
    year: _propTypes.default.func
  }),
  /**
   * Available views.
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['day', 'hours', 'minutes', 'month', 'seconds', 'year']).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: _propTypes.default.oneOf([3, 4])
};

/***/ }),

/***/ 7468:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MobileDateTimePicker", ({
  enumerable: true,
  get: function () {
    return _MobileDateTimePicker.MobileDateTimePicker;
  }
}));
var _MobileDateTimePicker = __webpack_require__(26493);

/***/ }),

/***/ 87331:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MultiSectionDigitalClock = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _styles = __webpack_require__(83476);
var _useEventCallback = _interopRequireDefault(__webpack_require__(33684));
var _composeClasses = _interopRequireDefault(__webpack_require__(56925));
var _useUtils = __webpack_require__(72979);
var _timeUtils = __webpack_require__(49903);
var _useViews = __webpack_require__(71469);
var _dateHelpersHooks = __webpack_require__(65075);
var _PickerViewRoot = __webpack_require__(4050);
var _multiSectionDigitalClockClasses = __webpack_require__(70020);
var _MultiSectionDigitalClockSection = __webpack_require__(3281);
var _MultiSectionDigitalClock = __webpack_require__(82);
var _useValueWithTimezone = __webpack_require__(42736);
var _valueManagers = __webpack_require__(24981);
var _useClockReferenceDate = __webpack_require__(8032);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["ampm", "timeSteps", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "skipDisabled", "timezone"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _composeClasses.default)(slots, _multiSectionDigitalClockClasses.getMultiSectionDigitalClockUtilityClass, classes);
};
const MultiSectionDigitalClockRoot = (0, _styles.styled)(_PickerViewRoot.PickerViewRoot, {
  name: 'MuiMultiSectionDigitalClock',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}));
const MultiSectionDigitalClock = /*#__PURE__*/React.forwardRef(function MultiSectionDigitalClock(inProps, ref) {
  const utils = (0, _useUtils.useUtils)();
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiMultiSectionDigitalClock'
  });
  const {
      ampm = utils.is12HourCycleInCurrentLocale(),
      timeSteps: inTimeSteps,
      autoFocus,
      components,
      componentsProps,
      slots,
      slotProps,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableIgnoringDatePartForTimeValidation = false,
      maxTime,
      minTime,
      disableFuture,
      disablePast,
      minutesStep = 1,
      shouldDisableClock,
      shouldDisableTime,
      onChange,
      view: inView,
      views: inViews = ['hours', 'minutes'],
      openTo,
      onViewChange,
      focusedView: inFocusedView,
      onFocusedViewChange,
      className,
      disabled,
      readOnly,
      skipDisabled = false,
      timezone: timezoneProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = (0, _useValueWithTimezone.useControlledValueWithTimezone)({
    name: 'MultiSectionDigitalClock',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: _valueManagers.singleItemValueManager
  });
  const localeText = (0, _useUtils.useLocaleText)();
  const now = (0, _useUtils.useNow)(timezone);
  const timeSteps = React.useMemo(() => (0, _extends2.default)({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps), [inTimeSteps]);
  const valueOrReferenceDate = (0, _useClockReferenceDate.useClockReferenceDate)({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = (0, _useEventCallback.default)((newValue, selectionState, selectedView) => handleRawValueChange(newValue, selectionState, selectedView));
  const views = React.useMemo(() => {
    if (!ampm || !inViews.includes('hours')) {
      return inViews;
    }
    return inViews.includes('meridiem') ? inViews : [...inViews, 'meridiem'];
  }, [ampm, inViews]);
  const {
    view,
    setValueAndGoToView,
    focusedView
  } = (0, _useViews.useViews)({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const handleMeridiemValueChange = (0, _useEventCallback.default)(newValue => {
    setValueAndGoToView(newValue, null, 'meridiem');
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(valueOrReferenceDate, ampm, handleMeridiemValueChange, 'finish');
  const isTimeDisabled = React.useCallback((rawValue, viewType) => {
    const isAfter = (0, _timeUtils.createIsAfterIgnoreDatePart)(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === 'hours' || viewType === 'minutes' && views.includes('seconds');
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableClock?.(timeValue, viewType)) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case 'hours':
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), 'hours');
          case 'minutes':
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), 'minutes');
          case 'seconds':
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), 'seconds');
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case 'hours':
        {
          const valueWithMeridiem = (0, _timeUtils.convertValueToMeridiem)(rawValue, meridiemMode, ampm);
          const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
          const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
          const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(valueWithMeridiem);
        }
      case 'minutes':
        {
          const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
          const start = utils.setSeconds(dateWithNewMinutes, 0);
          const end = utils.setSeconds(dateWithNewMinutes, 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue, minutesStep);
        }
      case 'seconds':
        {
          const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
          const start = dateWithNewSeconds;
          const end = dateWithNewSeconds;
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue);
        }
      default:
        throw new Error('not supported');
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableClock, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  const handleSectionChange = (0, _useEventCallback.default)((sectionView, newValue) => {
    const viewIndex = views.indexOf(sectionView);
    const nextView = views[viewIndex + 1];
    setValueAndGoToView(newValue, nextView, sectionView);
  });
  const buildViewProps = React.useCallback(viewToBuild => {
    switch (viewToBuild) {
      case 'hours':
        {
          return {
            onChange: hours => {
              const valueWithMeridiem = (0, _timeUtils.convertValueToMeridiem)(hours, meridiemMode, ampm);
              handleSectionChange('hours', utils.setHours(valueOrReferenceDate, valueWithMeridiem));
            },
            items: (0, _MultiSectionDigitalClock.getHourSectionOptions)({
              now,
              value,
              ampm,
              utils,
              isDisabled: hours => disabled || isTimeDisabled(hours, 'hours'),
              timeStep: timeSteps.hours,
              resolveAriaLabel: localeText.hoursClockNumberText
            })
          };
        }
      case 'minutes':
        {
          return {
            onChange: minutes => {
              handleSectionChange('minutes', utils.setMinutes(valueOrReferenceDate, minutes));
            },
            items: (0, _MultiSectionDigitalClock.getTimeSectionOptions)({
              value: utils.getMinutes(valueOrReferenceDate),
              isDisabled: minutes => disabled || isTimeDisabled(minutes, 'minutes'),
              resolveLabel: minutes => utils.format(utils.setMinutes(now, minutes), 'minutes'),
              timeStep: timeSteps.minutes,
              hasValue: !!value,
              resolveAriaLabel: localeText.minutesClockNumberText
            })
          };
        }
      case 'seconds':
        {
          return {
            onChange: seconds => {
              handleSectionChange('seconds', utils.setSeconds(valueOrReferenceDate, seconds));
            },
            items: (0, _MultiSectionDigitalClock.getTimeSectionOptions)({
              value: utils.getSeconds(valueOrReferenceDate),
              isDisabled: seconds => disabled || isTimeDisabled(seconds, 'seconds'),
              resolveLabel: seconds => utils.format(utils.setSeconds(now, seconds), 'seconds'),
              timeStep: timeSteps.seconds,
              hasValue: !!value,
              resolveAriaLabel: localeText.secondsClockNumberText
            })
          };
        }
      case 'meridiem':
        {
          const amLabel = utils.getMeridiemText('am');
          const pmLabel = utils.getMeridiemText('pm');
          return {
            onChange: handleMeridiemChange,
            items: [{
              value: 'am',
              label: amLabel,
              isSelected: () => !!value && meridiemMode === 'am',
              ariaLabel: amLabel
            }, {
              value: 'pm',
              label: pmLabel,
              isSelected: () => !!value && meridiemMode === 'pm',
              ariaLabel: pmLabel
            }]
          };
        }
      default:
        throw new Error(`Unknown view: ${viewToBuild} found.`);
    }
  }, [now, value, ampm, utils, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, handleSectionChange, valueOrReferenceDate, disabled, isTimeDisabled, handleMeridiemChange]);
  const viewTimeOptions = React.useMemo(() => {
    return views.reduce((result, currentView) => {
      return (0, _extends2.default)({}, result, {
        [currentView]: buildViewProps(currentView)
      });
    }, {});
  }, [views, buildViewProps]);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(MultiSectionDigitalClockRoot, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    role: "group"
  }, other, {
    children: Object.entries(viewTimeOptions).map(([timeView, viewOptions]) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_MultiSectionDigitalClockSection.MultiSectionDigitalClockSection, {
      items: viewOptions.items,
      onChange: viewOptions.onChange,
      active: view === timeView,
      autoFocus: autoFocus ?? focusedView === timeView,
      disabled: disabled,
      readOnly: readOnly,
      slots: slots ?? components,
      slotProps: slotProps ?? componentsProps,
      skipDisabled: skipDisabled,
      "aria-label": localeText.selectViewText(timeView)
    }, timeView))
  }));
});
exports.MultiSectionDigitalClock = MultiSectionDigitalClock;
 false ? 0 : void 0;

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTimeSectionOptions = exports.getHourSectionOptions = void 0;
const getHourSectionOptions = ({
  now,
  value,
  utils,
  ampm,
  isDisabled,
  resolveAriaLabel,
  timeStep
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const result = [];
  const isSelected = hour => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  const endHour = ampm ? 11 : 23;
  for (let hour = 0; hour <= endHour; hour += timeStep) {
    let label = utils.format(utils.setHours(now, hour), ampm ? 'hours12h' : 'hours24h');
    const ariaLabel = resolveAriaLabel(parseInt(label, 10).toString());
    label = utils.formatNumber(label);
    result.push({
      value: hour,
      label,
      isSelected,
      isDisabled,
      ariaLabel
    });
  }
  return result;
};
exports.getHourSectionOptions = getHourSectionOptions;
const getTimeSectionOptions = ({
  value,
  isDisabled,
  timeStep,
  resolveLabel,
  resolveAriaLabel,
  hasValue = true
}) => {
  const isSelected = timeValue => {
    if (value === null) {
      return false;
    }
    return hasValue && value === timeValue;
  };
  return [...Array.from({
    length: Math.ceil(60 / timeStep)
  }, (_, index) => {
    const timeValue = timeStep * index;
    return {
      value: timeValue,
      label: resolveLabel(timeValue),
      isDisabled,
      isSelected,
      ariaLabel: resolveAriaLabel(timeValue.toString())
    };
  })];
};
exports.getTimeSectionOptions = getTimeSectionOptions;

/***/ }),

/***/ 3281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MultiSectionDigitalClockSection = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _styles = __webpack_require__(83476);
var _composeClasses = _interopRequireDefault(__webpack_require__(56925));
var _MenuList = _interopRequireDefault(__webpack_require__(61137));
var _MenuItem = _interopRequireDefault(__webpack_require__(88707));
var _useForkRef = _interopRequireDefault(__webpack_require__(59272));
var _multiSectionDigitalClockSectionClasses = __webpack_require__(8731);
var _dimensions = __webpack_require__(78774);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["autoFocus", "onChange", "className", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    item: ['item']
  };
  return (0, _composeClasses.default)(slots, _multiSectionDigitalClockSectionClasses.getMultiSectionDigitalClockSectionUtilityClass, classes);
};
const MultiSectionDigitalClockSectionRoot = (0, _styles.styled)(_MenuList.default, {
  name: 'MuiMultiSectionDigitalClockSection',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  maxHeight: _dimensions.DIGITAL_CLOCK_VIEW_HEIGHT,
  width: 56,
  padding: 0,
  overflow: 'hidden',
  scrollBehavior: ownerState.alreadyRendered ? 'smooth' : 'auto',
  '&:hover': {
    overflowY: 'auto'
  },
  '&:not(:first-of-type)': {
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  '&:after': {
    display: 'block',
    content: '""',
    // subtracting the height of one item, extra margin and borders to make sure the max height is correct
    height: 'calc(100% - 40px - 6px)'
  }
}));
const MultiSectionDigitalClockSectionItem = (0, _styles.styled)(_MenuItem.default, {
  name: 'MuiMultiSectionDigitalClockSection',
  slot: 'Item',
  overridesResolver: (_, styles) => styles.item
})(({
  theme
}) => ({
  padding: 8,
  margin: '2px 4px',
  width: _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH,
  justifyContent: 'center',
  '&:first-of-type': {
    marginTop: 4
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  '&.Mui-selected': {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    '&:focus-visible, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
/**
 * @ignore - internal component.
 */
const MultiSectionDigitalClockSection = /*#__PURE__*/React.forwardRef(function MultiSectionDigitalClockSection(inProps, ref) {
  const containerRef = React.useRef(null);
  const handleRef = (0, _useForkRef.default)(ref, containerRef);
  const previousSelected = React.useRef(null);
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiMultiSectionDigitalClockSection'
  });
  const {
      autoFocus,
      onChange,
      className,
      disabled,
      readOnly,
      items,
      active,
      slots,
      slotProps,
      skipDisabled
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = React.useMemo(() => (0, _extends2.default)({}, props, {
    alreadyRendered: !!containerRef.current
  }), [props]);
  const classes = useUtilityClasses(ownerState);
  const DigitalClockSectionItem = slots?.digitalClockSectionItem ?? MultiSectionDigitalClockSectionItem;
  React.useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const selectedItem = containerRef.current.querySelector('[role="option"][aria-selected="true"]');
    if (!selectedItem || previousSelected.current === selectedItem) {
      // Handle setting the ref to null if the selected item is ever reset via UI
      if (previousSelected.current !== selectedItem) {
        previousSelected.current = selectedItem;
      }
      return;
    }
    previousSelected.current = selectedItem;
    if (active && autoFocus) {
      selectedItem.focus();
    }
    const offsetTop = selectedItem.offsetTop;

    // Subtracting the 4px of extra margin intended for the first visible section item
    containerRef.current.scrollTop = offsetTop - 4;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(MultiSectionDigitalClockSectionRoot, (0, _extends2.default)({
    ref: handleRef,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    autoFocusItem: autoFocus && active,
    role: "listbox"
  }, other, {
    children: items.map(option => {
      if (skipDisabled && option.isDisabled?.(option.value)) {
        return null;
      }
      const isSelected = option.isSelected(option.value);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(DigitalClockSectionItem, (0, _extends2.default)({
        onClick: () => !readOnly && onChange(option.value),
        selected: isSelected,
        disabled: disabled || option.isDisabled?.(option.value),
        disableRipple: readOnly,
        role: "option"
        // aria-readonly is not supported here and does not have any effect
        ,
        "aria-disabled": readOnly,
        "aria-label": option.ariaLabel,
        "aria-selected": isSelected
      }, slotProps?.digitalClockSectionItem, {
        children: option.label
      }), option.label);
    })
  }));
});
exports.MultiSectionDigitalClockSection = MultiSectionDigitalClockSection;

/***/ }),

/***/ 22434:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MultiSectionDigitalClock", ({
  enumerable: true,
  get: function () {
    return _MultiSectionDigitalClock.MultiSectionDigitalClock;
  }
}));
Object.defineProperty(exports, "getMultiSectionDigitalClockUtilityClass", ({
  enumerable: true,
  get: function () {
    return _multiSectionDigitalClockClasses.getMultiSectionDigitalClockUtilityClass;
  }
}));
Object.defineProperty(exports, "multiSectionDigitalClockClasses", ({
  enumerable: true,
  get: function () {
    return _multiSectionDigitalClockClasses.multiSectionDigitalClockClasses;
  }
}));
Object.defineProperty(exports, "multiSectionDigitalClockSectionClasses", ({
  enumerable: true,
  get: function () {
    return _multiSectionDigitalClockSectionClasses.multiSectionDigitalClockSectionClasses;
  }
}));
var _MultiSectionDigitalClock = __webpack_require__(87331);
var _multiSectionDigitalClockSectionClasses = __webpack_require__(8731);
var _multiSectionDigitalClockClasses = __webpack_require__(70020);

/***/ }),

/***/ 70020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMultiSectionDigitalClockUtilityClass = getMultiSectionDigitalClockUtilityClass;
exports.multiSectionDigitalClockClasses = void 0;
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(24726));
var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(34370));
function getMultiSectionDigitalClockUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiMultiSectionDigitalClock', slot);
}
const multiSectionDigitalClockClasses = (0, _generateUtilityClasses.default)('MuiMultiSectionDigitalClock', ['root']);
exports.multiSectionDigitalClockClasses = multiSectionDigitalClockClasses;

/***/ }),

/***/ 8731:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMultiSectionDigitalClockSectionUtilityClass = getMultiSectionDigitalClockSectionUtilityClass;
exports.multiSectionDigitalClockSectionClasses = void 0;
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(24726));
var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(34370));
function getMultiSectionDigitalClockSectionUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiMultiSectionDigitalClock', slot);
}
const multiSectionDigitalClockSectionClasses = (0, _generateUtilityClasses.default)('MuiMultiSectionDigitalClock', ['root', 'item']);
exports.multiSectionDigitalClockSectionClasses = multiSectionDigitalClockSectionClasses;

/***/ }),

/***/ 19768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Clock = Clock;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _IconButton = _interopRequireDefault(__webpack_require__(48060));
var _Typography = _interopRequireDefault(__webpack_require__(33987));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _ClockPointer = __webpack_require__(75648);
var _useUtils = __webpack_require__(72979);
var _shared = __webpack_require__(77003);
var _clockClasses = __webpack_require__(24556);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    clock: ['clock'],
    wrapper: ['wrapper'],
    squareMask: ['squareMask'],
    pin: ['pin'],
    amButton: ['amButton'],
    pmButton: ['pmButton']
  };
  return (0, _utils.unstable_composeClasses)(slots, _clockClasses.getClockUtilityClass, classes);
};
const ClockRoot = (0, _styles.styled)('div', {
  name: 'MuiClock',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2)
}));
const ClockClock = (0, _styles.styled)('div', {
  name: 'MuiClock',
  slot: 'Clock',
  overridesResolver: (_, styles) => styles.clock
})({
  backgroundColor: 'rgba(0,0,0,.07)',
  borderRadius: '50%',
  height: 220,
  width: 220,
  flexShrink: 0,
  position: 'relative',
  pointerEvents: 'none'
});
const ClockWrapper = (0, _styles.styled)('div', {
  name: 'MuiClock',
  slot: 'Wrapper',
  overridesResolver: (_, styles) => styles.wrapper
})({
  '&:focus': {
    outline: 'none'
  }
});
const ClockSquareMask = (0, _styles.styled)('div', {
  name: 'MuiClock',
  slot: 'SquareMask',
  overridesResolver: (_, styles) => styles.squareMask
})(({
  ownerState
}) => (0, _extends2.default)({
  width: '100%',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'auto',
  outline: 0,
  // Disable scroll capabilities.
  touchAction: 'none',
  userSelect: 'none'
}, ownerState.disabled ? {} : {
  '@media (pointer: fine)': {
    cursor: 'pointer',
    borderRadius: '50%'
  },
  '&:active': {
    cursor: 'move'
  }
}));
const ClockPin = (0, _styles.styled)('div', {
  name: 'MuiClock',
  slot: 'Pin',
  overridesResolver: (_, styles) => styles.pin
})(({
  theme
}) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}));
const ClockAmButton = (0, _styles.styled)(_IconButton.default, {
  name: 'MuiClock',
  slot: 'AmButton',
  overridesResolver: (_, styles) => styles.amButton
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  zIndex: 1,
  position: 'absolute',
  bottom: 8,
  left: 8
}, ownerState.meridiemMode === 'am' && {
  backgroundColor: (theme.vars || theme).palette.primary.main,
  color: (theme.vars || theme).palette.primary.contrastText,
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.primary.light
  }
}));
const ClockPmButton = (0, _styles.styled)(_IconButton.default, {
  name: 'MuiClock',
  slot: 'PmButton',
  overridesResolver: (_, styles) => styles.pmButton
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  zIndex: 1,
  position: 'absolute',
  bottom: 8,
  right: 8
}, ownerState.meridiemMode === 'pm' && {
  backgroundColor: (theme.vars || theme).palette.primary.main,
  color: (theme.vars || theme).palette.primary.contrastText,
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.primary.light
  }
}));

/**
 * @ignore - internal component.
 */
function Clock(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiClock'
  });
  const {
    ampm,
    ampmInClock,
    autoFocus,
    children,
    value,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    selectedId,
    type,
    viewValue,
    disabled,
    readOnly,
    className
  } = props;
  const ownerState = props;
  const utils = (0, _useUtils.useUtils)();
  const localeText = (0, _useUtils.useLocaleText)();
  const isMoving = React.useRef(false);
  const classes = useUtilityClasses(ownerState);
  const isSelectedTimeDisabled = isTimeDisabled(viewValue, type);
  const isPointerInner = !ampm && type === 'hours' && (viewValue < 1 || viewValue > 12);
  const handleValueChange = (newValue, isFinish) => {
    if (disabled || readOnly) {
      return;
    }
    if (isTimeDisabled(newValue, type)) {
      return;
    }
    onChange(newValue, isFinish);
  };
  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;
    if (offsetX === undefined) {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }
    const newSelectedValue = type === 'seconds' || type === 'minutes' ? (0, _shared.getMinutes)(offsetX, offsetY, minutesStep) : (0, _shared.getHours)(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };
  const handleTouchMove = event => {
    isMoving.current = true;
    setTime(event, 'shallow');
  };
  const handleTouchEnd = event => {
    if (isMoving.current) {
      setTime(event, 'finish');
      isMoving.current = false;
    }
  };
  const handleMouseMove = event => {
    // event.buttons & PRIMARY_MOUSE_BUTTON
    if (event.buttons > 0) {
      setTime(event.nativeEvent, 'shallow');
    }
  };
  const handleMouseUp = event => {
    if (isMoving.current) {
      isMoving.current = false;
    }
    setTime(event.nativeEvent, 'finish');
  };
  const hasSelected = React.useMemo(() => {
    if (type === 'hours') {
      return true;
    }
    return viewValue % 5 === 0;
  }, [type, viewValue]);
  const keyboardControlStep = type === 'minutes' ? minutesStep : 1;
  const listboxRef = React.useRef(null);
  // Since this is rendered when a Popper is opened we can't use passive effects.
  // Focusing in passive effects in Popper causes scroll jump.
  (0, _utils.unstable_useEnhancedEffect)(() => {
    if (autoFocus) {
      // The ref not being resolved would be a bug in MUI.
      listboxRef.current.focus();
    }
  }, [autoFocus]);
  const handleKeyDown = event => {
    // TODO: Why this early exit?
    if (isMoving.current) {
      return;
    }
    switch (event.key) {
      case 'Home':
        // annulate both hours and minutes
        handleValueChange(0, 'partial');
        event.preventDefault();
        break;
      case 'End':
        handleValueChange(type === 'minutes' ? 59 : 23, 'partial');
        event.preventDefault();
        break;
      case 'ArrowUp':
        handleValueChange(viewValue + keyboardControlStep, 'partial');
        event.preventDefault();
        break;
      case 'ArrowDown':
        handleValueChange(viewValue - keyboardControlStep, 'partial');
        event.preventDefault();
        break;
      default:
      // do nothing
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ClockRoot, {
    className: (0, _clsx.default)(className, classes.root),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(ClockClock, {
      className: classes.clock,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ClockSquareMask, {
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        ownerState: {
          disabled
        },
        className: classes.squareMask
      }), !isSelectedTimeDisabled && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ClockPin, {
          className: classes.pin
        }), value != null && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClockPointer.ClockPointer, {
          type: type,
          viewValue: viewValue,
          isInner: isPointerInner,
          hasSelected: hasSelected
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ClockWrapper, {
        "aria-activedescendant": selectedId,
        "aria-label": localeText.clockLabelText(type, value, utils),
        ref: listboxRef,
        role: "listbox",
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        className: classes.wrapper,
        children: children
      })]
    }), ampm && ampmInClock && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ClockAmButton, {
        onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
        disabled: disabled || meridiemMode === null,
        ownerState: ownerState,
        className: classes.amButton,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "caption",
          children: "AM"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ClockPmButton, {
        disabled: disabled || meridiemMode === null,
        onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
        ownerState: ownerState,
        className: classes.pmButton,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "caption",
          children: "PM"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 84175:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ClockNumber = ClockNumber;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _shared = __webpack_require__(77003);
var _clockNumberClasses = __webpack_require__(16593);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "disabled", "index", "inner", "label", "selected"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', disabled && 'disabled']
  };
  return (0, _utils.unstable_composeClasses)(slots, _clockNumberClasses.getClockNumberUtilityClass, classes);
};
const ClockNumberRoot = (0, _styles.styled)('span', {
  name: 'MuiClockNumber',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${_clockNumberClasses.clockNumberClasses.disabled}`]: styles.disabled
  }, {
    [`&.${_clockNumberClasses.clockNumberClasses.selected}`]: styles.selected
  }]
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  height: _shared.CLOCK_HOUR_WIDTH,
  width: _shared.CLOCK_HOUR_WIDTH,
  position: 'absolute',
  left: `calc((100% - ${_shared.CLOCK_HOUR_WIDTH}px) / 2)`,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  color: (theme.vars || theme).palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '&:focused': {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  [`&.${_clockNumberClasses.clockNumberClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText
  },
  [`&.${_clockNumberClasses.clockNumberClasses.disabled}`]: {
    pointerEvents: 'none',
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.inner && (0, _extends2.default)({}, theme.typography.body2, {
  color: (theme.vars || theme).palette.text.secondary
})));

/**
 * @ignore - internal component.
 */
function ClockNumber(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiClockNumber'
  });
  const {
      className,
      disabled,
      index,
      inner,
      label,
      selected
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (_shared.CLOCK_WIDTH - _shared.CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ClockNumberRoot, (0, _extends2.default)({
    className: (0, _clsx.default)(className, classes.root),
    "aria-disabled": disabled ? true : undefined,
    "aria-selected": selected ? true : undefined,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (_shared.CLOCK_WIDTH - _shared.CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState: ownerState
  }, other, {
    children: label
  }));
}

/***/ }),

/***/ 12894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMinutesNumbers = exports.getHourNumbers = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _ClockNumber = __webpack_require__(84175);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @ignore - internal component.
 */
const getHourNumbers = ({
  ampm,
  value,
  getClockNumberText,
  isDisabled,
  selectedId,
  utils
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const hourNumbers = [];
  const startHour = ampm ? 1 : 0;
  const endHour = ampm ? 12 : 23;
  const isSelected = hour => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = '00';
    }
    const inner = !ampm && (hour === 0 || hour > 12);
    label = utils.formatNumber(label);
    const selected = isSelected(hour);
    hourNumbers.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClockNumber.ClockNumber, {
      id: selected ? selectedId : undefined,
      index: hour,
      inner: inner,
      selected: selected,
      disabled: isDisabled(hour),
      label: label,
      "aria-label": getClockNumberText(label)
    }, hour));
  }
  return hourNumbers;
};
exports.getHourNumbers = getHourNumbers;
const getMinutesNumbers = ({
  utils,
  value,
  isDisabled,
  getClockNumberText,
  selectedId
}) => {
  const f = utils.formatNumber;
  return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(([numberValue, label], index) => {
    const selected = numberValue === value;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClockNumber.ClockNumber, {
      label: label,
      id: selected ? selectedId : undefined,
      index: index + 1,
      inner: false,
      disabled: isDisabled(numberValue),
      selected: selected,
      "aria-label": getClockNumberText(label)
    }, numberValue);
  });
};
exports.getMinutesNumbers = getMinutesNumbers;

/***/ }),

/***/ 75648:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ClockPointer = ClockPointer;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _shared = __webpack_require__(77003);
var _clockPointerClasses = __webpack_require__(46289);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "hasSelected", "isInner", "type", "viewValue"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    thumb: ['thumb']
  };
  return (0, _utils.unstable_composeClasses)(slots, _clockPointerClasses.getClockPointerUtilityClass, classes);
};
const ClockPointerRoot = (0, _styles.styled)('div', {
  name: 'MuiClockPointer',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  width: 2,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: 'absolute',
  left: 'calc(50% - 1px)',
  bottom: '50%',
  transformOrigin: 'center bottom 0px'
}, ownerState.shouldAnimate && {
  transition: theme.transitions.create(['transform', 'height'])
}));
const ClockPointerThumb = (0, _styles.styled)('div', {
  name: 'MuiClockPointer',
  slot: 'Thumb',
  overridesResolver: (_, styles) => styles.thumb
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  width: 4,
  height: 4,
  backgroundColor: (theme.vars || theme).palette.primary.contrastText,
  borderRadius: '50%',
  position: 'absolute',
  top: -21,
  left: `calc(50% - ${_shared.CLOCK_HOUR_WIDTH / 2}px)`,
  border: `${(_shared.CLOCK_HOUR_WIDTH - 4) / 2}px solid ${(theme.vars || theme).palette.primary.main}`,
  boxSizing: 'content-box'
}, ownerState.hasSelected && {
  backgroundColor: (theme.vars || theme).palette.primary.main
}));

/**
 * @ignore - internal component.
 */
function ClockPointer(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiClockPointer'
  });
  const {
      className,
      isInner,
      type,
      viewValue
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const previousType = React.useRef(type);
  React.useEffect(() => {
    previousType.current = type;
  }, [type]);
  const ownerState = (0, _extends2.default)({}, props, {
    shouldAnimate: previousType.current !== type
  });
  const classes = useUtilityClasses(ownerState);
  const getAngleStyle = () => {
    const max = type === 'hours' ? 12 : 60;
    let angle = 360 / max * viewValue;
    if (type === 'hours' && viewValue > 12) {
      angle -= 360; // round up angle to max 360 degrees
    }

    return {
      height: Math.round((isInner ? 0.26 : 0.4) * _shared.CLOCK_WIDTH),
      transform: `rotateZ(${angle}deg)`
    };
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ClockPointerRoot, (0, _extends2.default)({
    style: getAngleStyle(),
    className: (0, _clsx.default)(className, classes.root),
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ClockPointerThumb, {
      ownerState: ownerState,
      className: classes.thumb
    })
  }));
}

/***/ }),

/***/ 88995:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TimeClock = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _clsx = _interopRequireDefault(__webpack_require__(22113));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _useUtils = __webpack_require__(72979);
var _PickersArrowSwitcher = __webpack_require__(91364);
var _timeUtils = __webpack_require__(49903);
var _useViews = __webpack_require__(71469);
var _dateHelpersHooks = __webpack_require__(65075);
var _PickerViewRoot = __webpack_require__(4050);
var _timeClockClasses = __webpack_require__(221);
var _Clock = __webpack_require__(19768);
var _ClockNumbers = __webpack_require__(12894);
var _useValueWithTimezone = __webpack_require__(42736);
var _valueManagers = __webpack_require__(24981);
var _slotsMigration = __webpack_require__(93127);
var _useClockReferenceDate = __webpack_require__(8032);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["ampm", "ampmInClock", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "showViewSwitcher", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "timezone"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    arrowSwitcher: ['arrowSwitcher']
  };
  return (0, _utils.unstable_composeClasses)(slots, _timeClockClasses.getTimeClockUtilityClass, classes);
};
const TimeClockRoot = (0, _styles.styled)(_PickerViewRoot.PickerViewRoot, {
  name: 'MuiTimeClock',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});
const TimeClockArrowSwitcher = (0, _styles.styled)(_PickersArrowSwitcher.PickersArrowSwitcher, {
  name: 'MuiTimeClock',
  slot: 'ArrowSwitcher',
  overridesResolver: (props, styles) => styles.arrowSwitcher
})({
  position: 'absolute',
  right: 12,
  top: 15
});
const TIME_CLOCK_DEFAULT_VIEWS = ['hours', 'minutes'];

/**
 *
 * API:
 *
 * - [TimeClock API](https://mui.com/x/api/date-pickers/time-clock/)
 */
const TimeClock = /*#__PURE__*/React.forwardRef(function TimeClock(inProps, ref) {
  const utils = (0, _useUtils.useUtils)();
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiTimeClock'
  });
  const {
      ampm = utils.is12HourCycleInCurrentLocale(),
      ampmInClock = false,
      autoFocus,
      components,
      componentsProps,
      slots: innerSlots,
      slotProps: innerSlotProps,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableIgnoringDatePartForTimeValidation = false,
      maxTime,
      minTime,
      disableFuture,
      disablePast,
      minutesStep = 1,
      shouldDisableClock,
      shouldDisableTime,
      showViewSwitcher,
      onChange,
      view: inView,
      views = TIME_CLOCK_DEFAULT_VIEWS,
      openTo,
      onViewChange,
      focusedView,
      onFocusedViewChange,
      className,
      disabled,
      readOnly,
      timezone: timezoneProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const slots = innerSlots ?? (0, _slotsMigration.uncapitalizeObjectKeys)(components);
  const slotProps = innerSlotProps ?? componentsProps;
  const {
    value,
    handleValueChange,
    timezone
  } = (0, _useValueWithTimezone.useControlledValueWithTimezone)({
    name: 'TimeClock',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: _valueManagers.singleItemValueManager
  });
  const valueOrReferenceDate = (0, _useClockReferenceDate.useClockReferenceDate)({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const localeText = (0, _useUtils.useLocaleText)();
  const now = (0, _useUtils.useNow)(timezone);
  const {
    view,
    setView,
    previousView,
    nextView,
    setValueAndGoToNextView
  } = (0, _useViews.useViews)({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(valueOrReferenceDate, ampm, setValueAndGoToNextView);
  const isTimeDisabled = React.useCallback((rawValue, viewType) => {
    const isAfter = (0, _timeUtils.createIsAfterIgnoreDatePart)(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === 'hours' || viewType === 'minutes' && views.includes('seconds');
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableClock?.(timeValue, viewType)) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case 'hours':
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), 'hours');
          case 'minutes':
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), 'minutes');
          case 'seconds':
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), 'seconds');
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case 'hours':
        {
          const valueWithMeridiem = (0, _timeUtils.convertValueToMeridiem)(rawValue, meridiemMode, ampm);
          const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
          const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
          const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(valueWithMeridiem);
        }
      case 'minutes':
        {
          const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
          const start = utils.setSeconds(dateWithNewMinutes, 0);
          const end = utils.setSeconds(dateWithNewMinutes, 59);
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue, minutesStep);
        }
      case 'seconds':
        {
          const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
          const start = dateWithNewSeconds;
          const end = dateWithNewSeconds;
          return !containsValidTime({
            start,
            end
          }) || !isValidValue(rawValue);
        }
      default:
        throw new Error('not supported');
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableClock, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  const selectedId = (0, _utils.unstable_useId)();
  const viewProps = React.useMemo(() => {
    switch (view) {
      case 'hours':
        {
          const handleHoursChange = (hourValue, isFinish) => {
            const valueWithMeridiem = (0, _timeUtils.convertValueToMeridiem)(hourValue, meridiemMode, ampm);
            setValueAndGoToNextView(utils.setHours(valueOrReferenceDate, valueWithMeridiem), isFinish);
          };
          return {
            onChange: handleHoursChange,
            viewValue: utils.getHours(valueOrReferenceDate),
            children: (0, _ClockNumbers.getHourNumbers)({
              value,
              utils,
              ampm,
              onChange: handleHoursChange,
              getClockNumberText: localeText.hoursClockNumberText,
              isDisabled: hourValue => disabled || isTimeDisabled(hourValue, 'hours'),
              selectedId
            })
          };
        }
      case 'minutes':
        {
          const minutesValue = utils.getMinutes(valueOrReferenceDate);
          const handleMinutesChange = (minuteValue, isFinish) => {
            setValueAndGoToNextView(utils.setMinutes(valueOrReferenceDate, minuteValue), isFinish);
          };
          return {
            viewValue: minutesValue,
            onChange: handleMinutesChange,
            children: (0, _ClockNumbers.getMinutesNumbers)({
              utils,
              value: minutesValue,
              onChange: handleMinutesChange,
              getClockNumberText: localeText.minutesClockNumberText,
              isDisabled: minuteValue => disabled || isTimeDisabled(minuteValue, 'minutes'),
              selectedId
            })
          };
        }
      case 'seconds':
        {
          const secondsValue = utils.getSeconds(valueOrReferenceDate);
          const handleSecondsChange = (secondValue, isFinish) => {
            setValueAndGoToNextView(utils.setSeconds(valueOrReferenceDate, secondValue), isFinish);
          };
          return {
            viewValue: secondsValue,
            onChange: handleSecondsChange,
            children: (0, _ClockNumbers.getMinutesNumbers)({
              utils,
              value: secondsValue,
              onChange: handleSecondsChange,
              getClockNumberText: localeText.secondsClockNumberText,
              isDisabled: secondValue => disabled || isTimeDisabled(secondValue, 'seconds'),
              selectedId
            })
          };
        }
      default:
        throw new Error('You must provide the type for ClockView');
    }
  }, [view, utils, value, ampm, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, selectedId, disabled]);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(TimeClockRoot, (0, _extends2.default)({
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Clock.Clock, (0, _extends2.default)({
      autoFocus: autoFocus ?? !!focusedView,
      ampmInClock: ampmInClock && views.includes('hours'),
      value: value,
      type: view,
      ampm: ampm,
      minutesStep: minutesStep,
      isTimeDisabled: isTimeDisabled,
      meridiemMode: meridiemMode,
      handleMeridiemChange: handleMeridiemChange,
      selectedId: selectedId,
      disabled: disabled,
      readOnly: readOnly
    }, viewProps)), showViewSwitcher && /*#__PURE__*/(0, _jsxRuntime.jsx)(TimeClockArrowSwitcher, {
      className: classes.arrowSwitcher,
      slots: slots,
      slotProps: slotProps,
      onGoToPrevious: () => setView(previousView),
      isPreviousDisabled: !previousView,
      previousLabel: localeText.openPreviousView,
      onGoToNext: () => setView(nextView),
      isNextDisabled: !nextView,
      nextLabel: localeText.openNextView,
      ownerState: ownerState
    })]
  }));
});
exports.TimeClock = TimeClock;
 false ? 0 : void 0;

/***/ }),

/***/ 24556:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clockClasses = void 0;
exports.getClockUtilityClass = getClockUtilityClass;
var _utils = __webpack_require__(44268);
function getClockUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiClock', slot);
}
const clockClasses = (0, _utils.unstable_generateUtilityClasses)('MuiClock', ['root', 'clock', 'wrapper', 'squareMask', 'pin', 'amButton', 'pmButton']);
exports.clockClasses = clockClasses;

/***/ }),

/***/ 16593:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clockNumberClasses = void 0;
exports.getClockNumberUtilityClass = getClockNumberUtilityClass;
var _utils = __webpack_require__(44268);
function getClockNumberUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiClockNumber', slot);
}
const clockNumberClasses = (0, _utils.unstable_generateUtilityClasses)('MuiClockNumber', ['root', 'selected', 'disabled']);
exports.clockNumberClasses = clockNumberClasses;

/***/ }),

/***/ 46289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clockPointerClasses = void 0;
exports.getClockPointerUtilityClass = getClockPointerUtilityClass;
var _utils = __webpack_require__(44268);
function getClockPointerUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiClockPointer', slot);
}
const clockPointerClasses = (0, _utils.unstable_generateUtilityClasses)('MuiClockPointer', ['root', 'thumb']);
exports.clockPointerClasses = clockPointerClasses;

/***/ }),

/***/ 651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "TimeClock", ({
  enumerable: true,
  get: function () {
    return _TimeClock.TimeClock;
  }
}));
Object.defineProperty(exports, "clockClasses", ({
  enumerable: true,
  get: function () {
    return _clockClasses.clockClasses;
  }
}));
Object.defineProperty(exports, "clockNumberClasses", ({
  enumerable: true,
  get: function () {
    return _clockNumberClasses.clockNumberClasses;
  }
}));
Object.defineProperty(exports, "clockPointerClasses", ({
  enumerable: true,
  get: function () {
    return _clockPointerClasses.clockPointerClasses;
  }
}));
Object.defineProperty(exports, "getTimeClockUtilityClass", ({
  enumerable: true,
  get: function () {
    return _timeClockClasses.getTimeClockUtilityClass;
  }
}));
Object.defineProperty(exports, "timeClockClasses", ({
  enumerable: true,
  get: function () {
    return _timeClockClasses.timeClockClasses;
  }
}));
var _TimeClock = __webpack_require__(88995);
var _clockClasses = __webpack_require__(24556);
var _clockNumberClasses = __webpack_require__(16593);
var _timeClockClasses = __webpack_require__(221);
var _clockPointerClasses = __webpack_require__(46289);

/***/ }),

/***/ 77003:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMinutes = exports.getHours = exports.CLOCK_WIDTH = exports.CLOCK_HOUR_WIDTH = void 0;
const CLOCK_WIDTH = 220;
exports.CLOCK_WIDTH = CLOCK_WIDTH;
const CLOCK_HOUR_WIDTH = 36;
exports.CLOCK_HOUR_WIDTH = CLOCK_HOUR_WIDTH;
const clockCenter = {
  x: CLOCK_WIDTH / 2,
  y: CLOCK_WIDTH / 2
};
const baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
const cx = baseClockPoint.x - clockCenter.x;
const cy = baseClockPoint.y - clockCenter.y;
const rad2deg = rad => rad * (180 / Math.PI);
const getAngleValue = (step, offsetX, offsetY) => {
  const x = offsetX - clockCenter.x;
  const y = offsetY - clockCenter.y;
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  const value = Math.floor(deg / step) || 0;
  const delta = x ** 2 + y ** 2;
  const distance = Math.sqrt(delta);
  return {
    value,
    distance
  };
};
const getMinutes = (offsetX, offsetY, step = 1) => {
  const angleStep = step * 6;
  let {
    value
  } = getAngleValue(angleStep, offsetX, offsetY);
  value = value * step % 60;
  return value;
};
exports.getMinutes = getMinutes;
const getHours = (offsetX, offsetY, ampm) => {
  const {
    value,
    distance
  } = getAngleValue(30, offsetX, offsetY);
  let hour = value || 12;
  if (!ampm) {
    if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }
  return hour;
};
exports.getHours = getHours;

/***/ }),

/***/ 221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTimeClockUtilityClass = getTimeClockUtilityClass;
exports.timeClockClasses = void 0;
var _utils = __webpack_require__(44268);
function getTimeClockUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiTimeClock', slot);
}
const timeClockClasses = (0, _utils.unstable_generateUtilityClasses)('MuiTimeClock', ['root', 'arrowSwitcher']);
exports.timeClockClasses = timeClockClasses;

/***/ }),

/***/ 8032:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useClockReferenceDate = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _valueManagers = __webpack_require__(24981);
var _dateUtils = __webpack_require__(58759);
var _getDefaultReferenceDate = __webpack_require__(95287);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useClockReferenceDate = ({
  value,
  referenceDate: referenceDateProp,
  utils,
  props,
  timezone
}) => {
  const referenceDate = React.useMemo(() => _valueManagers.singleItemValueManager.getInitialReferenceValue({
    value,
    utils,
    props,
    referenceDate: referenceDateProp,
    granularity: _getDefaultReferenceDate.SECTION_TYPE_GRANULARITY.day,
    timezone,
    getTodayDate: () => (0, _dateUtils.getTodayDate)(utils, timezone, 'date')
  }),
  // We only want to compute the reference date on mount.
  [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return value ?? referenceDate;
};
exports.useClockReferenceDate = useClockReferenceDate;

/***/ }),

/***/ 56102:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resolveDateTimeFormat = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _timeUtils = __webpack_require__(49903);
var _dateUtils = __webpack_require__(58759);
const _excluded = ["views", "format"];
const resolveDateTimeFormat = (utils, _ref) => {
  let {
      views,
      format
    } = _ref,
    other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  if (format) {
    return format;
  }
  const dateViews = [];
  const timeViews = [];
  views.forEach(view => {
    if ((0, _timeUtils.isTimeView)(view)) {
      timeViews.push(view);
    } else {
      dateViews.push(view);
    }
  });
  if (timeViews.length === 0) {
    return (0, _dateUtils.resolveDateFormat)(utils, (0, _extends2.default)({
      views: dateViews
    }, other), false);
  }
  if (dateViews.length === 0) {
    return (0, _timeUtils.resolveTimeFormat)(utils, (0, _extends2.default)({
      views: timeViews
    }, other));
  }
  const timeFormat = (0, _timeUtils.resolveTimeFormat)(utils, (0, _extends2.default)({
    views: timeViews
  }, other));
  const dateFormat = (0, _dateUtils.resolveDateFormat)(utils, (0, _extends2.default)({
    views: dateViews
  }, other), false);
  return `${dateFormat} ${timeFormat}`;
};
exports.resolveDateTimeFormat = resolveDateTimeFormat;

/***/ }),

/***/ 2404:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "renderDigitalClockTimeView", ({
  enumerable: true,
  get: function () {
    return _timeViewRenderers.renderDigitalClockTimeView;
  }
}));
Object.defineProperty(exports, "renderMultiSectionDigitalClockTimeView", ({
  enumerable: true,
  get: function () {
    return _timeViewRenderers.renderMultiSectionDigitalClockTimeView;
  }
}));
Object.defineProperty(exports, "renderTimeViewClock", ({
  enumerable: true,
  get: function () {
    return _timeViewRenderers.renderTimeViewClock;
  }
}));
var _timeViewRenderers = __webpack_require__(81935);

/***/ }),

/***/ 81935:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.renderTimeViewClock = exports.renderMultiSectionDigitalClockTimeView = exports.renderDigitalClockTimeView = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _TimeClock = __webpack_require__(651);
var _DigitalClock = __webpack_require__(61457);
var _MultiSectionDigitalClock = __webpack_require__(22434);
var _timeUtils = __webpack_require__(49903);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  ampmInClock,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimeClock.TimeClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView && (0, _timeUtils.isTimeView)(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(_timeUtils.isTimeView),
  value: value,
  defaultValue: defaultValue,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  shouldDisableClock: shouldDisableClock,
  minutesStep: minutesStep,
  ampm: ampm,
  ampmInClock: ampmInClock,
  components: components,
  componentsProps: componentsProps,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  showViewSwitcher: showViewSwitcher,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timezone: timezone
});
exports.renderTimeViewClock = renderTimeViewClock;
const renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DigitalClock.DigitalClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(_timeUtils.isTimeView),
  value: value,
  defaultValue: defaultValue,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  shouldDisableClock: shouldDisableClock,
  minutesStep: minutesStep,
  ampm: ampm,
  components: components,
  componentsProps: componentsProps,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps?.minutes,
  skipDisabled: skipDisabled,
  timezone: timezone
});
exports.renderDigitalClockTimeView = renderDigitalClockTimeView;
const renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_MultiSectionDigitalClock.MultiSectionDigitalClock, {
  view: view,
  onViewChange: onViewChange,
  focusedView: focusedView,
  onFocusedViewChange: onFocusedViewChange,
  views: views.filter(_timeUtils.isTimeView),
  value: value,
  defaultValue: defaultValue,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minTime: minTime,
  maxTime: maxTime,
  shouldDisableTime: shouldDisableTime,
  shouldDisableClock: shouldDisableClock,
  minutesStep: minutesStep,
  ampm: ampm,
  components: components,
  componentsProps: componentsProps,
  slots: slots,
  slotProps: slotProps,
  readOnly: readOnly,
  disabled: disabled,
  sx: sx,
  autoFocus: autoFocus,
  disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
  timeSteps: timeSteps,
  skipDisabled: skipDisabled,
  timezone: timezone
});
exports.renderMultiSectionDigitalClockTimeView = renderMultiSectionDigitalClockTimeView;

/***/ })

};
;