"use strict";
exports.id = 9115;
exports.ids = [9115];
exports.modules = {

/***/ 97176:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateTimePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _useMediaQuery = _interopRequireDefault(__webpack_require__(72586));
var _styles = __webpack_require__(83476);
var _DesktopDateTimePicker = __webpack_require__(14206);
var _MobileDateTimePicker = __webpack_require__(7468);
var _utils = __webpack_require__(48861);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["desktopModeMediaQuery"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DateTimePicker = /*#__PURE__*/React.forwardRef(function DateTimePicker(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDateTimePicker'
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DesktopDateTimePicker.DesktopDateTimePicker, (0, _extends2.default)({
      ref: ref
    }, other));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MobileDateTimePicker.MobileDateTimePicker, (0, _extends2.default)({
    ref: ref
  }, other));
});
exports.DateTimePicker = DateTimePicker;
 false ? 0 : void 0;

/***/ }),

/***/ 93237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "xZ", ({
  enumerable: true,
  get: function () {
    return _DateTimePicker.DateTimePicker;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _DateTimePickerTabs.DateTimePickerTabs;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _DateTimePickerToolbar.DateTimePickerToolbar;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _dateTimePickerTabsClasses.dateTimePickerTabsClasses;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _dateTimePickerToolbarClasses.dateTimePickerToolbarClasses;
  }
});
var _DateTimePicker = __webpack_require__(97176);
var _DateTimePickerTabs = __webpack_require__(60090);
var _dateTimePickerTabsClasses = __webpack_require__(36034);
var _DateTimePickerToolbar = __webpack_require__(68918);
var _dateTimePickerToolbarClasses = __webpack_require__(74641);

/***/ }),

/***/ 10096:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DesktopDateTimePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(67392);
var _valueManagers = __webpack_require__(24981);
var _DateTimeField = __webpack_require__(80017);
var _shared = __webpack_require__(90800);
var _dateViewRenderers = __webpack_require__(54802);
var _dateTimeViewRenderers = __webpack_require__(43621);
var _useUtils = __webpack_require__(72979);
var _validateDateTime = __webpack_require__(7316);
var _icons = __webpack_require__(41922);
var _useDesktopPicker = __webpack_require__(80280);
var _extractValidationProps = __webpack_require__(8018);
var _dateTimeUtils = __webpack_require__(56102);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DesktopDateTimePicker = /*#__PURE__*/React.forwardRef(function DesktopDateTimePicker(inProps, ref) {
  const localeText = (0, _useUtils.useLocaleText)();
  const utils = (0, _useUtils.useUtils)();

  // Props with the default values common to all date time pickers
  const defaultizedProps = (0, _shared.useDateTimePickerDefaultizedProps)(inProps, 'MuiDesktopDateTimePicker');
  const timeSteps = (0, _extends2.default)({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, defaultizedProps.timeSteps);
  const shouldUseNewRenderer = !defaultizedProps.viewRenderers || Object.keys(defaultizedProps.viewRenderers).length === 0;
  const viewRenderers =
  // we can only ensure the expected two-column layout if none of the renderers are overridden
  shouldUseNewRenderer ? {
    day: _dateTimeViewRenderers.renderDesktopDateTimeView,
    month: _dateTimeViewRenderers.renderDesktopDateTimeView,
    year: _dateTimeViewRenderers.renderDesktopDateTimeView,
    hours: _dateTimeViewRenderers.renderDesktopDateTimeView,
    minutes: _dateTimeViewRenderers.renderDesktopDateTimeView,
    seconds: _dateTimeViewRenderers.renderDesktopDateTimeView,
    meridiem: _dateTimeViewRenderers.renderDesktopDateTimeView
  } : (0, _extends2.default)({
    day: _dateViewRenderers.renderDateViewCalendar,
    month: _dateViewRenderers.renderDateViewCalendar,
    year: _dateViewRenderers.renderDateViewCalendar,
    hours: null,
    minutes: null,
    seconds: null,
    meridiem: null
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  // add "accept" action only when the new date time view renderers are used
  const actionBarActions = shouldUseNewRenderer ? ['accept'] : [];

  // Props with the default values specific to the desktop variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    viewRenderers,
    format: (0, _dateTimeUtils.resolveDateTimeFormat)(utils, defaultizedProps),
    views: defaultizedProps.ampm ? [...defaultizedProps.views, 'meridiem'] : defaultizedProps.views,
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    ampmInClock,
    timeSteps,
    slots: (0, _extends2.default)({
      field: _DateTimeField.DateTimeField,
      openPickerIcon: _icons.CalendarIcon
    }, defaultizedProps.slots),
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      field: ownerState => (0, _extends2.default)({}, (0, _utils.resolveComponentProps)(defaultizedProps.slotProps?.field, ownerState), (0, _extractValidationProps.extractValidationProps)(defaultizedProps), {
        ref
      }),
      toolbar: (0, _extends2.default)({
        hidden: true,
        ampmInClock,
        toolbarVariant: shouldUseNewRenderer ? 'desktop' : 'mobile'
      }, defaultizedProps.slotProps?.toolbar),
      tabs: (0, _extends2.default)({
        hidden: true
      }, defaultizedProps.slotProps?.tabs),
      actionBar: (0, _extends2.default)({
        actions: actionBarActions
      }, defaultizedProps.slotProps?.actionBar)
    })
  });
  const {
    renderPicker
  } = (0, _useDesktopPicker.useDesktopPicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'date-time',
    getOpenDialogAriaText: props.localeText?.openDatePickerDialogue ?? localeText.openDatePickerDialogue,
    validator: _validateDateTime.validateDateTime
  });
  return renderPicker();
});
exports.DesktopDateTimePicker = DesktopDateTimePicker;
DesktopDateTimePicker.propTypes = {
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
  openTo: _propTypes.default.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
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
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: _propTypes.default.bool,
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
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: _propTypes.default.shape({
    hours: _propTypes.default.number,
    minutes: _propTypes.default.number,
    seconds: _propTypes.default.number
  }),
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
  view: _propTypes.default.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: _propTypes.default.shape({
    day: _propTypes.default.func,
    hours: _propTypes.default.func,
    meridiem: _propTypes.default.func,
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
   * @default 4
   */
  yearsPerRow: _propTypes.default.oneOf([3, 4])
};

/***/ }),

/***/ 14206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DesktopDateTimePicker", ({
  enumerable: true,
  get: function () {
    return _DesktopDateTimePicker.DesktopDateTimePicker;
  }
}));
var _DesktopDateTimePicker = __webpack_require__(10096);

/***/ }),

/***/ 55527:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DesktopTimePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(67392);
var _valueManagers = __webpack_require__(24981);
var _TimeField = __webpack_require__(30486);
var _shared = __webpack_require__(81502);
var _useUtils = __webpack_require__(72979);
var _validateTime = __webpack_require__(15721);
var _icons = __webpack_require__(41922);
var _useDesktopPicker = __webpack_require__(80280);
var _extractValidationProps = __webpack_require__(8018);
var _timeViewRenderers = __webpack_require__(2404);
var _timeUtils = __webpack_require__(49903);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DesktopTimePicker = /*#__PURE__*/React.forwardRef(function DesktopTimePicker(inProps, ref) {
  const localeText = (0, _useUtils.useLocaleText)();
  const utils = (0, _useUtils.useUtils)();

  // Props with the default values common to all time pickers
  const defaultizedProps = (0, _shared.useTimePickerDefaultizedProps)(inProps, 'MuiDesktopTimePicker');
  const thresholdToRenderTimeInASingleColumn = defaultizedProps.thresholdToRenderTimeInASingleColumn ?? 24;
  const timeSteps = (0, _extends2.default)({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, defaultizedProps.timeSteps);
  const shouldRenderTimeInASingleColumn = 24 * 60 / (timeSteps.hours * timeSteps.minutes) <= thresholdToRenderTimeInASingleColumn;
  const renderTimeView = shouldRenderTimeInASingleColumn ? _timeViewRenderers.renderDigitalClockTimeView : _timeViewRenderers.renderMultiSectionDigitalClockTimeView;
  const viewRenderers = (0, _extends2.default)({
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  const actionBarActions = shouldRenderTimeInASingleColumn ? [] : ['accept'];
  // Need to avoid adding the `meridiem` view when unexpected renderer is specified
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === _timeViewRenderers.renderMultiSectionDigitalClockTimeView.name;
  const views = defaultizedProps.ampm && shouldHoursRendererContainMeridiemView ? [...defaultizedProps.views, 'meridiem'] : defaultizedProps.views;

  // Props with the default values specific to the desktop variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    ampmInClock,
    timeSteps,
    viewRenderers,
    format: (0, _timeUtils.resolveTimeFormat)(utils, defaultizedProps),
    // Setting only `hours` time view in case of single column time picker
    // Allows for easy view lifecycle management
    views: shouldRenderTimeInASingleColumn ? ['hours'] : views,
    slots: (0, _extends2.default)({
      field: _TimeField.TimeField,
      openPickerIcon: _icons.ClockIcon
    }, defaultizedProps.slots),
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      field: ownerState => (0, _extends2.default)({}, (0, _utils.resolveComponentProps)(defaultizedProps.slotProps?.field, ownerState), (0, _extractValidationProps.extractValidationProps)(defaultizedProps), {
        ref
      }),
      toolbar: (0, _extends2.default)({
        hidden: true,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      actionBar: (0, _extends2.default)({
        actions: actionBarActions
      }, defaultizedProps.slotProps?.actionBar)
    })
  });
  const {
    renderPicker
  } = (0, _useDesktopPicker.useDesktopPicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'time',
    getOpenDialogAriaText: props.localeText?.openTimePickerDialogue ?? localeText.openTimePickerDialogue,
    validator: _validateTime.validateTime
  });
  return renderPicker();
});
exports.DesktopTimePicker = DesktopTimePicker;
DesktopTimePicker.propTypes = {
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
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: _propTypes.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: _propTypes.default.any,
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
   * Control the popup or dialog open state.
   * @default false
   */
  open: _propTypes.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: _propTypes.default.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: _propTypes.default.oneOf(['landscape', 'portrait']),
  readOnly: _propTypes.default.bool,
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
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: _propTypes.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: _propTypes.default.bool,
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
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: _propTypes.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: _propTypes.default.shape({
    hours: _propTypes.default.number,
    minutes: _propTypes.default.number,
    seconds: _propTypes.default.number
  }),
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
  view: _propTypes.default.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: _propTypes.default.shape({
    hours: _propTypes.default.func,
    meridiem: _propTypes.default.func,
    minutes: _propTypes.default.func,
    seconds: _propTypes.default.func
  }),
  /**
   * Available views.
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['hours', 'minutes', 'seconds']).isRequired)
};

/***/ }),

/***/ 73476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DesktopTimePicker", ({
  enumerable: true,
  get: function () {
    return _DesktopTimePicker.DesktopTimePicker;
  }
}));
var _DesktopTimePicker = __webpack_require__(55527);

/***/ }),

/***/ 85100:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MobileTimePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _utils = __webpack_require__(67392);
var _valueManagers = __webpack_require__(24981);
var _TimeField = __webpack_require__(30486);
var _shared = __webpack_require__(81502);
var _useUtils = __webpack_require__(72979);
var _validateTime = __webpack_require__(15721);
var _useMobilePicker = __webpack_require__(85369);
var _extractValidationProps = __webpack_require__(8018);
var _timeViewRenderers = __webpack_require__(2404);
var _timeUtils = __webpack_require__(49903);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const MobileTimePicker = /*#__PURE__*/React.forwardRef(function MobileTimePicker(inProps, ref) {
  const localeText = (0, _useUtils.useLocaleText)();
  const utils = (0, _useUtils.useUtils)();

  // Props with the default values common to all time pickers
  const defaultizedProps = (0, _shared.useTimePickerDefaultizedProps)(inProps, 'MuiMobileTimePicker');
  const viewRenderers = (0, _extends2.default)({
    hours: _timeViewRenderers.renderTimeViewClock,
    minutes: _timeViewRenderers.renderTimeViewClock,
    seconds: _timeViewRenderers.renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;

  // Props with the default values specific to the mobile variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    ampmInClock,
    viewRenderers,
    format: (0, _timeUtils.resolveTimeFormat)(utils, defaultizedProps),
    slots: (0, _extends2.default)({
      field: _TimeField.TimeField
    }, defaultizedProps.slots),
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      field: ownerState => (0, _extends2.default)({}, (0, _utils.resolveComponentProps)(defaultizedProps.slotProps?.field, ownerState), (0, _extractValidationProps.extractValidationProps)(defaultizedProps), {
        ref
      }),
      toolbar: (0, _extends2.default)({
        hidden: false,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = (0, _useMobilePicker.useMobilePicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'time',
    getOpenDialogAriaText: props.localeText?.openTimePickerDialogue ?? localeText.openTimePickerDialogue,
    validator: _validateTime.validateTime
  });
  return renderPicker();
});
exports.MobileTimePicker = MobileTimePicker;
MobileTimePicker.propTypes = {
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
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: _propTypes.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: _propTypes.default.any,
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
   * Control the popup or dialog open state.
   * @default false
   */
  open: _propTypes.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: _propTypes.default.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: _propTypes.default.oneOf(['landscape', 'portrait']),
  readOnly: _propTypes.default.bool,
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
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: _propTypes.default.func,
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
  view: _propTypes.default.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: _propTypes.default.shape({
    hours: _propTypes.default.func,
    minutes: _propTypes.default.func,
    seconds: _propTypes.default.func
  }),
  /**
   * Available views.
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['hours', 'minutes', 'seconds']).isRequired)
};

/***/ }),

/***/ 4365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MobileTimePicker", ({
  enumerable: true,
  get: function () {
    return _MobileTimePicker.MobileTimePicker;
  }
}));
var _MobileTimePicker = __webpack_require__(85100);

/***/ }),

/***/ 5007:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StaticDatePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _shared = __webpack_require__(2);
var _dateViewRenderers = __webpack_require__(66132);
var _useStaticPicker = __webpack_require__(10930);
var _internals = __webpack_require__(27206);
var _valueManagers = __webpack_require__(24981);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const StaticDatePicker = /*#__PURE__*/React.forwardRef(function StaticDatePicker(inProps, ref) {
  const defaultizedProps = (0, _shared.useDatePickerDefaultizedProps)(inProps, 'MuiStaticDatePicker');
  const displayStaticWrapperAs = defaultizedProps.displayStaticWrapperAs ?? 'mobile';
  const viewRenderers = (0, _extends2.default)({
    day: _dateViewRenderers.renderDateViewCalendar,
    month: _dateViewRenderers.renderDateViewCalendar,
    year: _dateViewRenderers.renderDateViewCalendar
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the static variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    yearsPerRow: defaultizedProps.yearsPerRow ?? (displayStaticWrapperAs === 'mobile' ? 3 : 4),
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      toolbar: (0, _extends2.default)({
        hidden: displayStaticWrapperAs === 'desktop'
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = (0, _useStaticPicker.useStaticPicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'date',
    validator: _internals.validateDate,
    ref
  });
  return renderPicker();
});
exports.StaticDatePicker = StaticDatePicker;
StaticDatePicker.propTypes = {
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
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: _propTypes.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: _propTypes.default.oneOf(['desktop', 'mobile']),
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
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
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

/***/ 81213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "w", ({
  enumerable: true,
  get: function () {
    return _StaticDatePicker.StaticDatePicker;
  }
}));
var _StaticDatePicker = __webpack_require__(5007);

/***/ }),

/***/ 77439:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StaticTimePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _shared = __webpack_require__(81502);
var _timeViewRenderers = __webpack_require__(2404);
var _valueManagers = __webpack_require__(24981);
var _useStaticPicker = __webpack_require__(10930);
var _validateTime = __webpack_require__(15721);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const StaticTimePicker = /*#__PURE__*/React.forwardRef(function StaticTimePicker(inProps, ref) {
  const defaultizedProps = (0, _shared.useTimePickerDefaultizedProps)(inProps, 'MuiStaticTimePicker');
  const displayStaticWrapperAs = defaultizedProps.displayStaticWrapperAs ?? 'mobile';
  const ampmInClock = defaultizedProps.ampmInClock ?? displayStaticWrapperAs === 'desktop';
  const viewRenderers = (0, _extends2.default)({
    hours: _timeViewRenderers.renderTimeViewClock,
    minutes: _timeViewRenderers.renderTimeViewClock,
    seconds: _timeViewRenderers.renderTimeViewClock
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the static variant
  const props = (0, _extends2.default)({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    ampmInClock,
    slotProps: (0, _extends2.default)({}, defaultizedProps.slotProps, {
      toolbar: (0, _extends2.default)({
        hidden: displayStaticWrapperAs === 'desktop',
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = (0, _useStaticPicker.useStaticPicker)({
    props,
    valueManager: _valueManagers.singleItemValueManager,
    valueType: 'time',
    validator: _validateTime.validateTime,
    ref
  });
  return renderPicker();
});
exports.StaticTimePicker = StaticTimePicker;
StaticTimePicker.propTypes = {
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
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: _propTypes.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: _propTypes.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: _propTypes.default.oneOf(['desktop', 'mobile']),
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: _propTypes.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: _propTypes.default.any,
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
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
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
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: _propTypes.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: _propTypes.default.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: _propTypes.default.oneOf(['landscape', 'portrait']),
  readOnly: _propTypes.default.bool,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: _propTypes.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: _propTypes.default.func,
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
  view: _propTypes.default.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: _propTypes.default.shape({
    hours: _propTypes.default.func,
    minutes: _propTypes.default.func,
    seconds: _propTypes.default.func
  }),
  /**
   * Available views.
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['hours', 'minutes', 'seconds']).isRequired)
};

/***/ }),

/***/ 49718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "K", ({
  enumerable: true,
  get: function () {
    return _StaticTimePicker.StaticTimePicker;
  }
}));
var _StaticTimePicker = __webpack_require__(77439);

/***/ }),

/***/ 10377:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TimeField = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _TextField = _interopRequireDefault(__webpack_require__(92870));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(67392);
var _useTimeField2 = __webpack_require__(36052);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["slots", "slotProps", "components", "componentsProps", "InputProps", "inputProps"],
  _excluded2 = ["inputRef"],
  _excluded3 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const TimeField = /*#__PURE__*/React.forwardRef(function TimeField(inProps, ref) {
  const themeProps = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiTimeField'
  });
  const {
      slots,
      slotProps,
      components,
      componentsProps,
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
  const _useTimeField = (0, _useTimeField2.useTimeField)({
      props: textFieldProps,
      inputRef: externalInputRef
    }),
    {
      ref: inputRef,
      onPaste,
      onKeyDown,
      inputMode,
      readOnly
    } = _useTimeField,
    fieldProps = (0, _objectWithoutPropertiesLoose2.default)(_useTimeField, _excluded3);
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
exports.TimeField = TimeField;
 false ? 0 : void 0;

/***/ }),

/***/ 30486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "TimeField", ({
  enumerable: true,
  get: function () {
    return _TimeField.TimeField;
  }
}));
Object.defineProperty(exports, "unstable_useTimeField", ({
  enumerable: true,
  get: function () {
    return _useTimeField.useTimeField;
  }
}));
var _TimeField = __webpack_require__(10377);
var _useTimeField = __webpack_require__(36052);

/***/ }),

/***/ 36052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTimeField = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _valueManagers = __webpack_require__(24981);
var _useField = __webpack_require__(3022);
var _validateTime = __webpack_require__(15721);
var _useUtils = __webpack_require__(72979);
var _fields = __webpack_require__(52065);
const useDefaultizedTimeField = props => {
  const utils = (0, _useUtils.useUtils)();
  const ampm = props.ampm ?? utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;
  return (0, _extends2.default)({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? defaultFormat
  });
};
const useTimeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedTimeField(inProps);
  const {
    forwardedProps,
    internalProps
  } = (0, _fields.splitFieldInternalAndForwardedProps)(props, 'time');
  return (0, _useField.useField)({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: _valueManagers.singleItemValueManager,
    fieldValueManager: _valueManagers.singleItemFieldValueManager,
    validator: _validateTime.validateTime,
    valueType: 'time'
  });
};
exports.useTimeField = useTimeField;

/***/ }),

/***/ 1044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TimePicker = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _useMediaQuery = _interopRequireDefault(__webpack_require__(72586));
var _styles = __webpack_require__(83476);
var _DesktopTimePicker = __webpack_require__(73476);
var _MobileTimePicker = __webpack_require__(4365);
var _utils = __webpack_require__(48861);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["desktopModeMediaQuery"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const TimePicker = /*#__PURE__*/React.forwardRef(function TimePicker(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiTimePicker'
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DesktopTimePicker.DesktopTimePicker, (0, _extends2.default)({
      ref: ref
    }, other));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MobileTimePicker.MobileTimePicker, (0, _extends2.default)({
    ref: ref
  }, other));
});
exports.TimePicker = TimePicker;
 false ? 0 : void 0;

/***/ }),

/***/ 15403:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TimePickerToolbar = TimePickerToolbar;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _styles = __webpack_require__(83476);
var _utils = __webpack_require__(44268);
var _PickersToolbarText = __webpack_require__(65281);
var _PickersToolbarButton = __webpack_require__(13052);
var _PickersToolbar = __webpack_require__(33598);
var _utils2 = __webpack_require__(48861);
var _useUtils = __webpack_require__(72979);
var _dateHelpersHooks = __webpack_require__(65075);
var _timePickerToolbarClasses = __webpack_require__(26552);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["ampm", "ampmInClock", "value", "isLandscape", "onChange", "view", "onViewChange", "views", "disabled", "readOnly"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    separator: ['separator'],
    hourMinuteLabel: ['hourMinuteLabel', isLandscape && 'hourMinuteLabelLandscape', theme.direction === 'rtl' && 'hourMinuteLabelReverse'],
    ampmSelection: ['ampmSelection', isLandscape && 'ampmLandscape'],
    ampmLabel: ['ampmLabel']
  };
  return (0, _utils.unstable_composeClasses)(slots, _timePickerToolbarClasses.getTimePickerToolbarUtilityClass, classes);
};
const TimePickerToolbarRoot = (0, _styles.styled)(_PickersToolbar.PickersToolbar, {
  name: 'MuiTimePickerToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const TimePickerToolbarSeparator = (0, _styles.styled)(_PickersToolbarText.PickersToolbarText, {
  name: 'MuiTimePickerToolbar',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})({
  outline: 0,
  margin: '0 4px 0 2px',
  cursor: 'default'
});
const TimePickerToolbarHourMinuteLabel = (0, _styles.styled)('div', {
  name: 'MuiTimePickerToolbar',
  slot: 'HourMinuteLabel',
  overridesResolver: (props, styles) => [{
    [`&.${_timePickerToolbarClasses.timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
    [`&.${_timePickerToolbarClasses.timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
}, ownerState.isLandscape && {
  marginTop: 'auto'
}, theme.direction === 'rtl' && {
  flexDirection: 'row-reverse'
}));
TimePickerToolbarHourMinuteLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: _propTypes.default.elementType,
  ownerState: _propTypes.default.object.isRequired,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
};
const TimePickerToolbarAmPmSelection = (0, _styles.styled)('div', {
  name: 'MuiTimePickerToolbar',
  slot: 'AmPmSelection',
  overridesResolver: (props, styles) => [{
    [`.${_timePickerToolbarClasses.timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${_timePickerToolbarClasses.timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
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
  flexBasis: '100%'
}, {
  [`& .${_timePickerToolbarClasses.timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
TimePickerToolbarAmPmSelection.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: _propTypes.default.elementType,
  ownerState: _propTypes.default.object.isRequired,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
};
function TimePickerToolbar(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiTimePickerToolbar'
  });
  const {
      ampm,
      ampmInClock,
      value,
      isLandscape,
      onChange,
      view,
      onViewChange,
      views,
      disabled,
      readOnly
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _useUtils.useUtils)();
  const localeText = (0, _useUtils.useLocaleText)();
  const theme = (0, _styles.useTheme)();
  const showAmPmControl = Boolean(ampm && !ampmInClock && views.includes('hours'));
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(value, ampm, onChange);
  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  const ownerState = props;
  const classes = useUtilityClasses((0, _extends2.default)({}, ownerState, {
    theme
  }));
  const separator = /*#__PURE__*/(0, _jsxRuntime.jsx)(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(TimePickerToolbarRoot, (0, _extends2.default)({
    landscapeDirection: "row",
    toolbarTitle: localeText.timePickerToolbarTitle,
    isLandscape: isLandscape,
    ownerState: ownerState,
    className: classes.root
  }, other, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState: ownerState,
      children: [(0, _utils2.arrayIncludes)(views, 'hours') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange('hours'),
        selected: view === 'hours',
        value: value ? formatHours(value) : '--'
      }), (0, _utils2.arrayIncludes)(views, ['hours', 'minutes']) && separator, (0, _utils2.arrayIncludes)(views, 'minutes') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange('minutes'),
        selected: view === 'minutes',
        value: value ? utils.format(value, 'minutes') : '--'
      }), (0, _utils2.arrayIncludes)(views, ['minutes', 'seconds']) && separator, (0, _utils2.arrayIncludes)(views, 'seconds') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        variant: "h3",
        onClick: () => onViewChange('seconds'),
        selected: view === 'seconds',
        value: value ? utils.format(value, 'seconds') : '--'
      })]
    }), showAmPmControl && /*#__PURE__*/(0, _jsxRuntime.jsxs)(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState: ownerState,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === 'am',
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText('am'),
        onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
        disabled: disabled
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === 'pm',
        typographyClassName: classes.ampmLabel,
        value: utils.getMeridiemText('pm'),
        onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
        disabled: disabled
      })]
    })]
  }));
}
 false ? 0 : void 0;

/***/ }),

/***/ 82212:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "jI", ({
  enumerable: true,
  get: function () {
    return _TimePicker.TimePicker;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _TimePickerToolbar.TimePickerToolbar;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _timePickerToolbarClasses.timePickerToolbarClasses;
  }
});
var _TimePicker = __webpack_require__(1044);
var _TimePickerToolbar = __webpack_require__(15403);
var _timePickerToolbarClasses = __webpack_require__(26552);

/***/ }),

/***/ 81502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useTimePickerDefaultizedProps = useTimePickerDefaultizedProps;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _styles = __webpack_require__(83476);
var _useUtils = __webpack_require__(72979);
var _TimePickerToolbar = __webpack_require__(15403);
var _views = __webpack_require__(70681);
var _slotsMigration = __webpack_require__(93127);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useTimePickerDefaultizedProps(props, name) {
  const utils = (0, _useUtils.useUtils)();
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
      timePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = themeProps.slots ?? (0, _slotsMigration.uncapitalizeObjectKeys)(themeProps.components);
  const slotProps = themeProps.slotProps ?? themeProps.componentsProps;
  return (0, _extends2.default)({}, themeProps, {
    ampm,
    localeText
  }, (0, _views.applyDefaultViewProps)({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ['hours', 'minutes'],
    defaultOpenTo: 'hours'
  }), {
    disableFuture: themeProps.disableFuture ?? false,
    disablePast: themeProps.disablePast ?? false,
    slots: (0, _extends2.default)({
      toolbar: _TimePickerToolbar.TimePickerToolbar
    }, slots),
    slotProps: (0, _extends2.default)({}, slotProps, {
      toolbar: (0, _extends2.default)({
        ampm,
        ampmInClock: themeProps.ampmInClock
      }, slotProps?.toolbar)
    })
  });
}

/***/ }),

/***/ 26552:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTimePickerToolbarUtilityClass = getTimePickerToolbarUtilityClass;
exports.timePickerToolbarClasses = void 0;
var _utils = __webpack_require__(44268);
function getTimePickerToolbarUtilityClass(slot) {
  return (0, _utils.unstable_generateUtilityClass)('MuiTimePickerToolbar', slot);
}
const timePickerToolbarClasses = (0, _utils.unstable_generateUtilityClasses)('MuiTimePickerToolbar', ['root', 'separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel']);
exports.timePickerToolbarClasses = timePickerToolbarClasses;

/***/ }),

/***/ 41115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.renderDesktopDateTimeView = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Divider = _interopRequireDefault(__webpack_require__(61272));
var _utils = __webpack_require__(67392);
var _DateCalendar = __webpack_require__(32194);
var _MultiSectionDigitalClock = __webpack_require__(22434);
var _DateTimeViewWrapper = __webpack_require__(56031);
var _timeUtils = __webpack_require__(49903);
var _dateUtils = __webpack_require__(58759);
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const renderDesktopDateTimeView = ({
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
  minTime,
  maxDate,
  maxTime,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  shouldDisableTime,
  shouldDisableClock,
  reduceAnimations,
  minutesStep,
  ampm,
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
  timezone,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timeViewsCount
}) => {
  const isActionBarVisible = !!(0, _utils.resolveComponentProps)(slotProps?.actionBar ?? componentsProps?.actionBar, {})?.actions?.length;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_DateTimeViewWrapper.DateTimeViewWrapper, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DateCalendar.DateCalendar, {
        view: (0, _dateUtils.isDatePickerView)(view) ? view : 'day',
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
      }), timeViewsCount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {
          orientation: "vertical"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MultiSectionDigitalClock.MultiSectionDigitalClock, {
          view: (0, _timeUtils.isInternalTimeView)(view) ? view : 'hours',
          onViewChange: onViewChange,
          focusedView: focusedView && (0, _timeUtils.isInternalTimeView)(focusedView) ? focusedView : null,
          onFocusedViewChange: onFocusedViewChange,
          views: views.filter(_timeUtils.isInternalTimeView),
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
          sx: (0, _extends2.default)({
            borderBottom: 0,
            width: 'auto',
            [`.${_MultiSectionDigitalClock.multiSectionDigitalClockSectionClasses.root}`]: {
              maxHeight: '100%'
            }
          }, Array.isArray(sx) ? sx : [sx]),
          autoFocus: autoFocus,
          disableIgnoringDatePartForTimeValidation: disableIgnoringDatePartForTimeValidation,
          timeSteps: timeSteps,
          skipDisabled: skipDisabled,
          timezone: timezone
        })]
      })]
    }), isActionBarVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {})]
  });
};
exports.renderDesktopDateTimeView = renderDesktopDateTimeView;

/***/ }),

/***/ 43621:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "renderDesktopDateTimeView", ({
  enumerable: true,
  get: function () {
    return _dateTimeViewRenderers.renderDesktopDateTimeView;
  }
}));
var _dateTimeViewRenderers = __webpack_require__(41115);

/***/ }),

/***/ 64050:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DateTimeViewWrapper = void 0;
var _styles = __webpack_require__(83476);
const DateTimeViewWrapper = (0, _styles.styled)('div')({
  display: 'flex',
  margin: '0 auto'
});
exports.DateTimeViewWrapper = DateTimeViewWrapper;

/***/ }),

/***/ 56031:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DateTimeViewWrapper", ({
  enumerable: true,
  get: function () {
    return _DateTimeViewWrapper.DateTimeViewWrapper;
  }
}));
var _DateTimeViewWrapper = __webpack_require__(64050);

/***/ }),

/***/ 65494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ isWeekend)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30440);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5759);


/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dirtyDate);
  var day = date.getDay();
  return day === 0 || day === 6;
}

/***/ })

};
;