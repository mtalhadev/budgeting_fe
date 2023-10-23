(() => {
var exports = {};
exports.id = 1752;
exports.ids = [1752,3531,6831];
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

/***/ 72633:
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
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _base = __webpack_require__(93832);
var _utils = __webpack_require__(44268);
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _paginationClasses = __webpack_require__(35358);
var _usePagination = _interopRequireDefault(__webpack_require__(25801));
var _PaginationItem = _interopRequireDefault(__webpack_require__(4504));
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant],
    ul: ['ul']
  };
  return (0, _base.unstable_composeClasses)(slots, _paginationClasses.getPaginationUtilityClass, classes);
};
const PaginationRoot = (0, _styled.default)('nav', {
  name: 'MuiPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({});
const PaginationUl = (0, _styled.default)('ul', {
  name: 'MuiPagination',
  slot: 'Ul',
  overridesResolver: (props, styles) => styles.ul
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination = /*#__PURE__*/React.forwardRef(function Pagination(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiPagination'
  });
  const {
      boundaryCount = 1,
      className,
      color = 'standard',
      count = 1,
      defaultPage = 1,
      disabled = false,
      getItemAriaLabel = defaultGetAriaLabel,
      hideNextButton = false,
      hidePrevButton = false,
      renderItem = item => /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaginationItem.default, (0, _extends2.default)({}, item)),
      shape = 'circular',
      showFirstButton = false,
      showLastButton = false,
      siblingCount = 1,
      size = 'medium',
      variant = 'text'
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    items
  } = (0, _usePagination.default)((0, _extends2.default)({}, props, {
    componentName: 'Pagination'
  }));
  const ownerState = (0, _extends2.default)({}, props, {
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PaginationRoot, (0, _extends2.default)({
    "aria-label": "pagination navigation",
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PaginationUl, {
      className: classes.ul,
      ownerState: ownerState,
      children: items.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: renderItem((0, _extends2.default)({}, item, {
          color,
          'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        }))
      }, index))
    })
  }));
});

// @default tags synced with default values from usePagination

 false ? 0 : void 0;
var _default = Pagination;
exports["default"] = _default;

/***/ }),

/***/ 53531:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  paginationClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Pagination.default;
  }
}));
Object.defineProperty(exports, "paginationClasses", ({
  enumerable: true,
  get: function () {
    return _paginationClasses.default;
  }
}));
var _Pagination = _interopRequireDefault(__webpack_require__(72633));
var _paginationClasses = _interopRequireWildcard(__webpack_require__(35358));
Object.keys(_paginationClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _paginationClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _paginationClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 35358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getPaginationUtilityClass = getPaginationUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getPaginationUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiPagination', slot);
}
const paginationClasses = (0, _utils.unstable_generateUtilityClasses)('MuiPagination', ['root', 'ul', 'outlined', 'text']);
var _default = paginationClasses;
exports["default"] = _default;

/***/ }),

/***/ 25801:
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
    return _usePagination.default;
  }
}));
var _usePagination = _interopRequireDefault(__webpack_require__(77817));

/***/ }),

/***/ 77817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = usePagination;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _utils = __webpack_require__(44268);
const _excluded = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];
function usePagination(props = {}) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
      boundaryCount = 1,
      componentName = 'usePagination',
      count = 1,
      defaultPage = 1,
      disabled = false,
      hideNextButton = false,
      hidePrevButton = false,
      onChange: handleChange,
      page: pageProp,
      showFirstButton = false,
      showLastButton = false,
      siblingCount = 1
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const [page, setPageState] = (0, _utils.unstable_useControlled)({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  });
  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({
      length
    }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min(
  // Natural start
  page - siblingCount,
  // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1),
  // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max(
  // Natural end
  page + siblingCount,
  // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2),
  // Less than endPages
  endPages.length > 0 ? endPages[0] - 2 : count - 1);

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [...(showFirstButton ? ['first'] : []), ...(hidePrevButton ? [] : ['previous']), ...startPages,
  // Start ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
  // Sibling pages
  ...range(siblingsStart, siblingsEnd),
  // End ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : ['next']), ...(showLastButton ? ['last'] : [])];

  // Map the button type to its page number
  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map(item => {
    return typeof item === 'number' ? {
      onClick: event => {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled,
      'aria-current': item === page ? 'true' : undefined
    } : {
      onClick: event => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return (0, _extends2.default)({
    items
  }, other);
}

/***/ }),

/***/ 94038:
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
        'product',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43859)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/product/page.tsx"],
          
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77885)), "/Users/xperia/Workspace/budgeting_fe-main/src/app/product/layout.tsx"],
          
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
    const pages = ["/Users/xperia/Workspace/budgeting_fe-main/src/app/product/page.tsx"];

    

    const originalPathname = "/product/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    

    // Create and export the route module that will be consumed.
    const options = {"definition":{"kind":"APP_PAGE","page":"/product/page","pathname":"/product","bundlePath":"app/product/page","filename":"","appPaths":[]}}
    const routeModule = new (next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default())({
      ...options,
      userland: {
        loaderTree: tree,
      },
    })
  

/***/ }),

/***/ 23282:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30542))

/***/ }),

/***/ 30542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96831);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// components

function Layout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_layouts_main__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: children
    });
}


/***/ }),

/***/ 96831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ MainLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Unstable_Grid2/index.js
var Unstable_Grid2 = __webpack_require__(26566);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/logo/index.ts + 1 modules
var logo = __webpack_require__(9162);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/layouts/main/footer.tsx
// @mui










// routes



// _mock

// components


// ----------------------------------------------------------------------
const LINKS = [
    {
        headline: "Adam Levy",
        children: [
            {
                name: "About us",
                href: paths/* paths */.H.about
            },
            {
                name: "Contact us",
                href: paths/* paths */.H.contact
            },
            {
                name: "FAQs",
                href: paths/* paths */.H.faqs
            }
        ]
    },
    {
        headline: "Legal",
        children: [
            {
                name: "Terms and Condition",
                href: "#"
            },
            {
                name: "Privacy Policy",
                href: "#"
            }
        ]
    },
    {
        headline: "Contact",
        children: [
            {
                name: "support@adamlevy.ca",
                href: "#"
            }
        ]
    }
];
// ----------------------------------------------------------------------
function Footer() {
    const pathname = (0,hooks/* usePathname */.jD)();
    const isHome = pathname === "/";
    const simpleFooter = /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "footer",
        sx: {
            py: 5,
            textAlign: "center",
            position: "relative",
            bgcolor: "background.default"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                    sx: {
                        mb: 1,
                        mx: "auto"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "caption",
                    component: "div",
                    children: [
                        "\xa9 All rights reserved",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " made by",
                        "\xa0Adam Levy"
                    ]
                })
            ]
        })
    });
    const mainFooter = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "footer",
        sx: {
            position: "relative",
            bgcolor: "background.default"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                sx: {
                    pt: 10,
                    pb: 5,
                    textAlign: {
                        xs: "center",
                        md: "unset"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                        sx: {
                            mb: 3
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                        container: true,
                        justifyContent: {
                            xs: "center",
                            md: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                                xs: 8,
                                md: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            maxWidth: 270,
                                            mx: {
                                                xs: "auto",
                                                md: "unset"
                                            }
                                        },
                                        children: "The starting point for your Personal Finance. Many Features to Help you monitor faster and better."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                                        direction: "row",
                                        justifyContent: {
                                            xs: "center",
                                            md: "flex-start"
                                        },
                                        sx: {
                                            mt: 3,
                                            mb: {
                                                xs: 5,
                                                md: 0
                                            }
                                        },
                                        children: _mock/* _socials */._I.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                sx: {
                                                    "&:hover": {
                                                        bgcolor: (0,styles.alpha)(social.color, 0.08)
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                    color: social.color,
                                                    icon: social.icon
                                                })
                                            }, social.name))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                                xs: 12,
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                                    spacing: 5,
                                    direction: {
                                        xs: "column",
                                        md: "row"
                                    },
                                    children: LINKS.map((list)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                            spacing: 2,
                                            alignItems: {
                                                xs: "center",
                                                md: "flex-start"
                                            },
                                            sx: {
                                                width: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    component: "div",
                                                    variant: "overline",
                                                    children: list.headline
                                                }),
                                                list.children.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                        component: components/* RouterLink */.r,
                                                        href: link.href,
                                                        color: "inherit",
                                                        variant: "body2",
                                                        children: link.name
                                                    }, link.name))
                                            ]
                                        }, list.headline))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            mt: 10
                        },
                        children: "\xa9 2021. All rights reserved"
                    })
                ]
            })
        ]
    });
    return isHome ? simpleFooter : mainFooter;
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(79536);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(74147);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(42454);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./src/hooks/use-off-set-top.ts
var use_off_set_top = __webpack_require__(21885);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/layouts/config-layout.ts
var config_layout = __webpack_require__(83430);
;// CONCATENATED MODULE: ./src/layouts/main/config-navigation.tsx
// routes


// components

// ----------------------------------------------------------------------
const navConfig = [
    {
        title: "Home",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:home-2-bold-duotone"
        }),
        path: "/"
    },
    {
        title: "Contact us",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:home-2-bold-duotone"
        }),
        path: paths/* paths */.H.contact
    },
    {
        title: "Expense Category Master File (for Admin)",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:home-2-bold-duotone"
        }),
        path: paths/* paths */.H.expenseCategoryMaster
    },
    {
        title: "Budgeting",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:home-2-bold-duotone"
        }),
        path: paths/* paths */.H.budgeting
    }
];

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(6176);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(20094);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/components/svg-color/index.ts + 1 modules
var svg_color = __webpack_require__(99066);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Collapse/index.js
var Collapse = __webpack_require__(31022);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(19868);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
// EXTERNAL MODULE: ./src/components/nav-section/index.ts + 16 modules
var nav_section = __webpack_require__(79215);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(60061);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon);
;// CONCATENATED MODULE: ./src/layouts/main/nav/mobile/styles.ts
// @mui


const ListItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, theme })=>({
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
        height: 48,
        // Active
        ...active && {
            color: theme.palette.primary.main,
            ...theme.typography.subtitle2,
            backgroundColor: (0,styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
    }));

;// CONCATENATED MODULE: ./src/layouts/main/nav/mobile/nav-item.tsx
// @mui




// routes

// components


// ----------------------------------------------------------------------
function NavItem({ item, open, active, externalLink, ...other }) {
    const { title, path, icon, children } = item;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItem, {
        active: active,
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemIcon_default()), {
                children: [
                    " ",
                    icon,
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                disableTypography: true,
                primary: title
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                width: 16,
                icon: open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill",
                sx: {
                    ml: 1
                }
            })
        ]
    });
    // External link
    if (externalLink) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
    }
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        children: renderContent
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/nav/mobile/nav-list.tsx
// @mui





// hooks

// components



function NavList({ item }) {
    const pathname = (0,hooks/* usePathname */.jD)();
    const { path, children } = item;
    const externalLink = path.includes("http");
    const nav = (0,use_boolean/* useBoolean */.k)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                item: item,
                open: nav.value,
                onClick: nav.onToggle,
                active: pathname === path,
                externalLink: externalLink
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                in: nav.value,
                unmountOnExit: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(nav_section/* NavSectionVertical */.Mr, {
                    data: children,
                    sx: {
                        [`& .${List.listClasses.root}`]: {
                            "&:last-of-type": {
                                [`& .${ListItemButton.listItemButtonClasses.root}`]: {
                                    height: 160,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    bgcolor: "background.neutral",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: "url(/assets/illustrations/illustration_dashboard.png)",
                                    [`& .${ListItemText.listItemTextClasses.root}`]: {
                                        display: "none"
                                    }
                                }
                            }
                        }
                    }
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/nav/mobile/nav-mobile.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui



// hooks

// routes

// components




// ----------------------------------------------------------------------
function NavMobile({ offsetTop, data }) {
    const pathname = (0,hooks/* usePathname */.jD)();
    const nav = (0,use_boolean/* useBoolean */.k)();
    (0,react_.useEffect)(()=>{
        if (nav.value) {
            nav.onFalse();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: nav.onTrue,
                sx: {
                    ml: 1,
                    ...offsetTop && {
                        color: "text.primary"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(svg_color/* default */.Z, {
                    src: "/assets/icons/navbar/ic_menu_item.svg"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                open: nav.value,
                onClose: nav.onFalse,
                PaperProps: {
                    sx: {
                        pb: 5,
                        width: 260
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(scrollbar/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                            sx: {
                                mx: 2.5,
                                my: 3
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                            component: "nav",
                            disablePadding: true,
                            children: data.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(NavList, {
                                    item: link
                                }, link.title))
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/nav/mobile/index.ts


// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fade/index.js
var Fade = __webpack_require__(53602);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Portal/index.js
var Portal = __webpack_require__(37350);
// EXTERNAL MODULE: ./src/routes/hooks/use-active-link.ts
var use_active_link = __webpack_require__(50691);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardActionArea/index.js
var CardActionArea = __webpack_require__(91383);
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListSubheader/index.js
var ListSubheader = __webpack_require__(62133);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader);
;// CONCATENATED MODULE: ./src/layouts/main/nav/desktop/styles.ts
// @mui




// theme

//

const styles_ListItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active" && prop !== "open" && prop !== "offsetTop" && prop !== "subItem"
})(({ active, open, offsetTop, subItem, theme })=>{
    const dotActive = {
        content: '""',
        borderRadius: "50%",
        position: "absolute",
        width: 6,
        height: 6,
        left: -14,
        opacity: 0.48,
        backgroundColor: "currentColor"
    };
    return {
        ...theme.typography.subtitle2,
        padding: 0,
        height: "100%",
        color: theme.palette.text.primary,
        transition: theme.transitions.create([
            "opacity"
        ], {
            duration: theme.transitions.duration.shorter
        }),
        "&:hover": {
            opacity: 0.48,
            backgroundColor: "transparent"
        },
        // Sub item
        ...subItem && {
            ...theme.typography.body2,
            color: theme.palette.text.secondary
        },
        // offsetTop
        ...offsetTop && {
            color: theme.palette.text.primary
        },
        // Active
        ...active && {
            color: theme.palette.primary.main,
            "&::before": dotActive
        },
        // Active sub item
        ...active && subItem && {
            ...theme.typography.subtitle2,
            color: theme.palette.text.primary,
            "&::before": {
                ...dotActive,
                color: theme.palette.primary.main
            }
        },
        // Open
        ...open && {
            opacity: 0.48
        }
    };
});
// ----------------------------------------------------------------------
const StyledMenu = (0,styles.styled)((Paper_default()))(({ theme })=>({
        ...(0,css/* paper */.uS)({
            theme
        }),
        left: 0,
        right: 0,
        margin: "auto",
        position: "fixed",
        zIndex: theme.zIndex.modal,
        padding: theme.spacing(5, 1, 1, 3),
        maxWidth: theme.breakpoints.values.lg,
        top: config_layout/* HEADER */.y.H_DESKTOP_OFFSET,
        boxShadow: theme.customShadows.dropdown,
        borderRadius: theme.shape.borderRadius * 2
    }));
// ----------------------------------------------------------------------
const StyledSubheader = (0,styles.styled)((ListSubheader_default()))(({ theme })=>({
        ...theme.typography.overline,
        padding: 0,
        fontSize: 11,
        color: theme.palette.text.primary
    }));

;// CONCATENATED MODULE: ./src/layouts/main/nav/desktop/nav-item.tsx



// @mui



// routes

// components


// ----------------------------------------------------------------------
const nav_item_NavItem = /*#__PURE__*/ (0,react_.forwardRef)(({ item, open, offsetTop, active, subItem, externalLink, ...other }, ref)=>{
    const { title, path, children } = item;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_ListItem, {
        ref: ref,
        disableRipple: true,
        offsetTop: offsetTop,
        subItem: subItem,
        active: active,
        open: open,
        children: [
            title,
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                width: 16,
                icon: "eva:arrow-ios-downward-fill",
                sx: {
                    ml: 1
                }
            })
        ]
    });
    // External link
    if (externalLink) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            href: path,
            target: "_blank",
            rel: "noopener",
            underline: "none",
            children: renderContent
        });
    }
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        children: renderContent
    });
});
function NavItemDashboard({ item, sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: item.path,
        sx: {
            width: 1
        },
        ...other,
        children: /*#__PURE__*/ jsx_runtime_.jsx((CardActionArea_default()), {
            sx: {
                py: 5,
                px: 10,
                minHeight: 400,
                borderRadius: 1.5,
                color: "text.disabled",
                bgcolor: "background.neutral",
                ...sx
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                whileTap: "tap",
                whileHover: "hover",
                variants: {
                    hover: {
                        scale: 1.02
                    },
                    tap: {
                        scale: 0.98
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                    component: "img",
                    alt: "illustration_dashboard",
                    src: "/assets/illustrations/illustration_dashboard.png"
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/nav/desktop/nav-list.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui



// hooks

// routes




function nav_list_NavList({ item, offsetTop }) {
    const pathname = (0,hooks/* usePathname */.jD)();
    const nav = (0,use_boolean/* useBoolean */.k)();
    const { path, children } = item;
    const active = (0,use_active_link/* useActiveLink */.X)(path, false);
    const externalLink = path.includes("http");
    (0,react_.useEffect)(()=>{
        if (nav.value) {
            nav.onFalse();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleOpenMenu = ()=>{
        if (children) {
            nav.onTrue();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_item_NavItem, {
                item: item,
                offsetTop: offsetTop,
                active: active,
                open: nav.value,
                externalLink: externalLink,
                onMouseEnter: handleOpenMenu,
                onMouseLeave: nav.onFalse
            }),
            !!children && nav.value && /*#__PURE__*/ jsx_runtime_.jsx(Portal/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Fade["default"], {
                    in: nav.value,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledMenu, {
                        onMouseEnter: handleOpenMenu,
                        onMouseLeave: nav.onFalse,
                        sx: {
                            display: "flex"
                        },
                        children: children.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(NavSubList, {
                                subheader: list.subheader,
                                items: list.items,
                                isDashboard: list.subheader === "Dashboard",
                                onClose: nav.onFalse
                            }, list.subheader))
                    })
                })
            })
        ]
    });
}
function NavSubList({ items, isDashboard, subheader, onClose }) {
    const pathname = (0,hooks/* usePathname */.jD)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        alignItems: "flex-start",
        sx: {
            flexGrow: 1,
            ...isDashboard && {
                maxWidth: 540
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledSubheader, {
                disableSticky: true,
                children: subheader
            }),
            items.map((item)=>isDashboard ? /*#__PURE__*/ jsx_runtime_.jsx(NavItemDashboard, {
                    item: item,
                    onClick: onClose
                }, item.title) : /*#__PURE__*/ jsx_runtime_.jsx(nav_item_NavItem, {
                    subItem: true,
                    item: item,
                    active: pathname === `${item.path}/`,
                    onClick: onClose
                }, item.title))
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/nav/desktop/nav-desktop.tsx
// @mui



// ----------------------------------------------------------------------
function NavDesktop({ offsetTop, data }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        component: "nav",
        direction: "row",
        spacing: 5,
        sx: {
            mr: 2.5,
            height: 1
        },
        children: data.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_list_NavList, {
                item: link,
                offsetTop: offsetTop
            }, link.title))
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/nav/desktop/index.ts


// EXTERNAL MODULE: ./src/layouts/_common/index.ts + 18 modules
var _common = __webpack_require__(26053);
;// CONCATENATED MODULE: ./src/layouts/main/header.tsx
// @mui









// hooks


// theme

// routes

// components


//




//

// ----------------------------------------------------------------------
function Header() {
    const theme = (0,styles.useTheme)();
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const offsetTop = (0,use_off_set_top/* useOffSetTop */.y)(config_layout/* HEADER */.y.H_DESKTOP);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                disableGutters: true,
                sx: {
                    height: {
                        xs: config_layout/* HEADER */.y.H_MOBILE,
                        md: config_layout/* HEADER */.y.H_DESKTOP
                    },
                    transition: theme.transitions.create([
                        "height"
                    ], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter
                    }),
                    ...offsetTop && {
                        ...(0,css/* bgBlur */.Ls)({
                            color: theme.palette.background.default
                        }),
                        height: {
                            md: config_layout/* HEADER */.y.H_DESKTOP_OFFSET
                        }
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    sx: {
                        height: 1,
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                            sx: {
                                [`& .${Badge.badgeClasses.badge}`]: {
                                    top: 8,
                                    right: -16
                                }
                            },
                            badgeContent: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: paths/* paths */.H.changelog,
                                target: "_blank",
                                rel: "noopener",
                                underline: "none",
                                sx: {
                                    ml: 1
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                    color: "info",
                                    sx: {
                                        textTransform: "unset",
                                        height: 22,
                                        px: 0.5
                                    },
                                    children: "v1.1.0"
                                })
                            }),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        mdUp && /*#__PURE__*/ jsx_runtime_.jsx(NavDesktop, {
                            offsetTop: offsetTop,
                            data: navConfig
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            alignItems: "center",
                            direction: {
                                xs: "row",
                                md: "row-reverse"
                            },
                            children: [
                                mdUp && /*#__PURE__*/ jsx_runtime_.jsx(_common/* LoginButton */.TX, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(_common/* SettingsButton */.ls, {
                                    sx: {
                                        ml: {
                                            xs: 1,
                                            md: 0
                                        },
                                        mr: {
                                            md: 2
                                        }
                                    }
                                }),
                                !mdUp && /*#__PURE__*/ jsx_runtime_.jsx(NavMobile, {
                                    offsetTop: offsetTop,
                                    data: navConfig
                                })
                            ]
                        })
                    ]
                })
            }),
            offsetTop && /*#__PURE__*/ jsx_runtime_.jsx(_common/* HeaderShadow */._s, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

//


function MainLayout({ children }) {
    const pathname = (0,hooks/* usePathname */.jD)();
    const isHome = pathname === "/";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "main",
                sx: {
                    flexGrow: 1,
                    ...!isHome && {
                        pt: {
                            xs: 8,
                            md: 10
                        }
                    }
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/main/index.ts



/***/ }),

/***/ 77885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/app/product/layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 43859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopPage),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_sections_product_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19137);
// sections


// ----------------------------------------------------------------------
const metadata = {
    title: "Product: Shop"
};
function ShopPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_sections_product_view__WEBPACK_IMPORTED_MODULE_1__/* .ProductShopView */ .OZ, {});
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8071,6566,8111,1276,7782,6017,2870,9177,413,4724,449,6222,8079,6267,569,4622,8897,298,2865,5915,6856,2153,6186,6209,9198,6801,1820,1723,9882,7146,2723,9428,9189,2150], () => (__webpack_exec__(94038)));
module.exports = __webpack_exports__;

})();