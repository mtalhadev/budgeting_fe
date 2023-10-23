"use strict";
exports.id = 2153;
exports.ids = [2153];
exports.modules = {

/***/ 91636:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _base = __webpack_require__(93832);
var _Typography = _interopRequireDefault(__webpack_require__(33987));
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _dialogTitleClasses = __webpack_require__(65702);
var _DialogContext = _interopRequireDefault(__webpack_require__(30896));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["className", "id"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _dialogTitleClasses.getDialogTitleUtilityClass, classes);
};
const DialogTitleRoot = (0, _styled.default)(_Typography.default, {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/React.forwardRef(function DialogTitle(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiDialogTitle'
  });
  const {
      className,
      id: idProp
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = React.useContext(_DialogContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogTitleRoot, (0, _extends2.default)({
    component: "h2",
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: idProp != null ? idProp : titleId
  }, other));
});
 false ? 0 : void 0;
var _default = DialogTitle;
exports["default"] = _default;

/***/ }),

/***/ 42153:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  dialogTitleClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _DialogTitle.default;
  }
}));
Object.defineProperty(exports, "dialogTitleClasses", ({
  enumerable: true,
  get: function () {
    return _dialogTitleClasses.default;
  }
}));
var _DialogTitle = _interopRequireDefault(__webpack_require__(91636));
var _dialogTitleClasses = _interopRequireWildcard(__webpack_require__(65702));
Object.keys(_dialogTitleClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _dialogTitleClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dialogTitleClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ })

};
;