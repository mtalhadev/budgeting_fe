exports.id = 1678;
exports.ids = [1678,3531,9215,640,3471,8998,3662,9216,1001];
exports.modules = {

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

/***/ 9254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85440))

/***/ }),

/***/ 13864:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98154))

/***/ }),

/***/ 52757:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83529));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 53917));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19069));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50020))

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

/***/ 80640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ CustomBreadcrumbs)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Breadcrumbs/index.js
var Breadcrumbs = __webpack_require__(81276);
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
;// CONCATENATED MODULE: ./src/components/custom-breadcrumbs/link-item.tsx
// @mui



// routes

function BreadcrumbsLink({ link, activeLast, disabled }) {
    const { name, href, icon } = link;
    const styles = {
        typography: "body2",
        alignItems: "center",
        color: "text.primary",
        display: "inline-flex",
        ...disabled && !activeLast && {
            cursor: "default",
            pointerEvents: "none",
            color: "text.disabled"
        }
    };
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    mr: 1,
                    display: "inherit",
                    "& svg": {
                        width: 20,
                        height: 20
                    }
                },
                children: icon
            }),
            name
        ]
    });
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            component: components/* RouterLink */.r,
            href: href,
            sx: styles,
            children: renderContent
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: styles,
        children: [
            " ",
            renderContent,
            " "
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/custom-breadcrumbs/custom-breadcrumbs.tsx
// @mui







// ----------------------------------------------------------------------
function CustomBreadcrumbs({ links, action, heading, moreLink, activeLast, sx, ...other }) {
    const lastLink = links[links.length - 1].name;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            ...sx
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        sx: {
                            flexGrow: 1
                        },
                        children: [
                            heading && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h4",
                                gutterBottom: true,
                                children: heading
                            }),
                            !!links.length && /*#__PURE__*/ jsx_runtime_.jsx((Breadcrumbs_default()), {
                                separator: /*#__PURE__*/ jsx_runtime_.jsx(Separator, {}),
                                ...other,
                                children: links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(BreadcrumbsLink, {
                                        link: link,
                                        activeLast: activeLast,
                                        disabled: link.name === lastLink
                                    }, link.name || ""))
                            })
                        ]
                    }),
                    action && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        sx: {
                            flexShrink: 0
                        },
                        children: [
                            " ",
                            action,
                            " "
                        ]
                    })
                ]
            }),
            !!moreLink && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    mt: 2
                },
                children: moreLink.map((href)=>/*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        href: href,
                        variant: "body2",
                        target: "_blank",
                        rel: "noopener",
                        sx: {
                            display: "table"
                        },
                        children: href
                    }, href))
            })
        ]
    });
}
// ----------------------------------------------------------------------
function Separator() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "span",
        sx: {
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "text.disabled"
        }
    });
}

;// CONCATENATED MODULE: ./src/components/custom-breadcrumbs/index.ts




/***/ }),

/***/ 93662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* reexport */ CustomDateRangePicker),
  l2: () => (/* reexport */ shortDateLabel),
  wE: () => (/* reexport */ useDateRangePicker)
});

// EXTERNAL MODULE: ./node_modules/date-fns/esm/isSameDay/index.js
var isSameDay = __webpack_require__(2002);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/isSameMonth/index.js
var isSameMonth = __webpack_require__(1408);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/getYear/index.js
var getYear = __webpack_require__(22786);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/utils.ts



// utils

// ----------------------------------------------------------------------
function shortDateLabel(startDate, endDate) {
    const getCurrentYear = new Date().getFullYear();
    const startDateYear = startDate ? (0,getYear["default"])(startDate) : null;
    const endDateYear = endDate ? (0,getYear["default"])(endDate) : null;
    const currentYear = getCurrentYear === startDateYear && getCurrentYear === endDateYear;
    const sameDay = startDate && endDate ? (0,isSameDay["default"])(new Date(startDate), new Date(endDate)) : false;
    const sameMonth = startDate && endDate ? (0,isSameMonth["default"])(new Date(startDate), new Date(endDate)) : false;
    if (currentYear) {
        if (sameMonth) {
            if (sameDay) {
                return (0,format_time/* fDate */.Mu)(endDate, "dd MMM yy");
            }
            return `${(0,format_time/* fDate */.Mu)(startDate, "dd")} - ${(0,format_time/* fDate */.Mu)(endDate, "dd MMM yy")}`;
        }
        return `${(0,format_time/* fDate */.Mu)(startDate, "dd MMM")} - ${(0,format_time/* fDate */.Mu)(endDate, "dd MMM yy")}`;
    }
    return `${(0,format_time/* fDate */.Mu)(startDate, "dd MMM yy")} - ${(0,format_time/* fDate */.Mu)(endDate, "dd MMM yy")}`;
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/use-date-range-picker.ts

// utils

//

function useDateRangePicker(start, end) {
    const [open, setOpen] = (0,react_.useState)(false);
    const [endDate, setEndDate] = (0,react_.useState)(end);
    const [startDate, setStartDate] = (0,react_.useState)(start);
    const error = start && end ? new Date(start).getTime() > new Date(end).getTime() : false;
    const onOpen = (0,react_.useCallback)(()=>{
        setOpen(true);
    }, []);
    const onClose = (0,react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    const onChangeStartDate = (0,react_.useCallback)((newValue)=>{
        setStartDate(newValue);
    }, []);
    const onChangeEndDate = (0,react_.useCallback)((newValue)=>{
        if (error) {
            setEndDate(null);
        }
        setEndDate(newValue);
    }, [
        error
    ]);
    const onReset = (0,react_.useCallback)(()=>{
        setStartDate(null);
        setEndDate(null);
    }, []);
    return {
        startDate,
        endDate,
        onChangeStartDate,
        onChangeEndDate,
        //
        open,
        onOpen,
        onClose,
        onReset,
        //
        selected: !!startDate && !!endDate,
        error,
        //
        label: `${(0,format_time/* fDate */.Mu)(startDate)} - ${(0,format_time/* fDate */.Mu)(endDate)}`,
        shortLabel: shortDateLabel(startDate, endDate),
        //
        setStartDate,
        setEndDate
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DatePicker/index.js
var DatePicker = __webpack_require__(71026);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DateCalendar/index.js
var DateCalendar = __webpack_require__(32194);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(62969);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogTitle/index.js
var DialogTitle = __webpack_require__(42153);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogActions/index.js
var DialogActions = __webpack_require__(95915);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogContent/index.js
var DialogContent = __webpack_require__(16856);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormHelperText/index.js
var FormHelperText = __webpack_require__(34550);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/custom-date-range-picker.tsx
// @mui











// hooks

// ----------------------------------------------------------------------
function CustomDateRangePicker({ title = "Select date range", variant = "input", //
startDate, endDate, //
onChangeStartDate, onChangeEndDate, //
open, onClose, //
error }) {
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const isCalendarView = variant === "calendar";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        fullWidth: true,
        maxWidth: isCalendarView ? false : "xs",
        open: open,
        onClose: onClose,
        PaperProps: {
            sx: {
                ...isCalendarView && {
                    maxWidth: 720
                }
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                sx: {
                    pb: 2
                },
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                sx: {
                    ...isCalendarView && mdUp && {
                        overflow: "unset"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                        justifyContent: "center",
                        spacing: isCalendarView ? 3 : 2,
                        direction: isCalendarView && mdUp ? "row" : "column",
                        sx: {
                            pt: 1
                        },
                        children: isCalendarView ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                                    variant: "outlined",
                                    sx: {
                                        borderRadius: 2,
                                        borderColor: "divider",
                                        borderStyle: "dashed"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DateCalendar.DateCalendar, {
                                        value: startDate,
                                        onChange: onChangeStartDate
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                                    variant: "outlined",
                                    sx: {
                                        borderRadius: 2,
                                        borderColor: "divider",
                                        borderStyle: "dashed"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DateCalendar.DateCalendar, {
                                        value: endDate,
                                        onChange: onChangeEndDate
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                                    label: "Start date",
                                    value: startDate,
                                    onChange: onChangeStartDate
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                                    label: "End date",
                                    value: endDate,
                                    onChange: onChangeEndDate
                                })
                            ]
                        })
                    }),
                    error && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                        error: true,
                        sx: {
                            px: 2
                        },
                        children: "End date must be later than start date"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "outlined",
                        color: "inherit",
                        onClick: onClose,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        disabled: error,
                        variant: "contained",
                        onClick: onClose,
                        children: "Apply"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/index.ts






/***/ }),

/***/ 78998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ EmptyContent)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
;// CONCATENATED MODULE: ./src/components/empty-content/empty-content.tsx
// @mui





function EmptyContent({ title, imgUrl, action, filled, description, sx, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        sx: {
            px: 3,
            height: 1,
            ...filled && {
                borderRadius: 2,
                bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.04),
                border: (theme)=>`dashed 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
            },
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "img",
                alt: "empty content",
                src: imgUrl || "/assets/icons/empty/ic_content.svg",
                sx: {
                    width: 1,
                    maxWidth: 160
                }
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                component: "span",
                sx: {
                    mt: 1,
                    color: "text.disabled",
                    textAlign: "center"
                },
                children: title
            }),
            description && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                sx: {
                    mt: 1,
                    color: "text.disabled",
                    textAlign: "center"
                },
                children: description
            }),
            action && action
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/empty-content/index.ts



/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* reexport */ Lightbox),
  NX: () => (/* reexport */ useLightBox)
});

// UNUSED EXPORTS: ACTION_CLOSE, ACTION_NEXT, ACTION_PREV, ACTION_SWIPE, ACTIVE_SLIDE_COMPLETE, ACTIVE_SLIDE_ERROR, ACTIVE_SLIDE_LOADING, ACTIVE_SLIDE_PLAYING, CLASS_FLEX_CENTER, CLASS_FULLSIZE, CLASS_NO_SCROLL, CLASS_NO_SCROLL_PADDING, Carousel, CarouselModule, CloseIcon, Controller, ControllerContext, ControllerModule, ELEMENT_BUTTON, ELEMENT_ICON, EVENT_ON_KEY_DOWN, EVENT_ON_KEY_UP, EVENT_ON_POINTER_CANCEL, EVENT_ON_POINTER_DOWN, EVENT_ON_POINTER_LEAVE, EVENT_ON_POINTER_MOVE, EVENT_ON_POINTER_UP, EVENT_ON_WHEEL, ErrorIcon, EventsContext, EventsProvider, IMAGE_FIT_CONTAIN, IMAGE_FIT_COVER, IconButton, ImageSlide, Lightbox, LightboxDefaultProps, LightboxDispatchContext, LightboxPropsContext, LightboxPropsProvider, LightboxStateContext, LightboxStateProvider, LoadingIcon, MODULE_CAROUSEL, MODULE_CONTROLLER, MODULE_NAVIGATION, MODULE_NO_SCROLL, MODULE_PORTAL, MODULE_ROOT, MODULE_TOOLBAR, Navigation, NavigationButton, NavigationModule, NextIcon, NoScroll, NoScrollModule, PLUGIN_CAPTIONS, PLUGIN_COUNTER, PLUGIN_DOWNLOAD, PLUGIN_FULLSCREEN, PLUGIN_INLINE, PLUGIN_SHARE, PLUGIN_SLIDESHOW, PLUGIN_THUMBNAILS, PLUGIN_ZOOM, Portal, PortalModule, PreviousIcon, Root, RootModule, SLIDE_STATUS_COMPLETE, SLIDE_STATUS_ERROR, SLIDE_STATUS_LOADING, SLIDE_STATUS_PLACEHOLDER, SLIDE_STATUS_PLAYING, SwipeState, TimeoutsContext, TimeoutsProvider, Toolbar, ToolbarModule, UNKNOWN_ACTION_TYPE, VK_ARROW_LEFT, VK_ARROW_RIGHT, VK_ESCAPE, activeSlideStatus, addToolbarButton, cleanup, clsx, composePrefix, computeSlideRect, createIcon, createIconDisabled, createModule, createNode, cssClass, cssVar, devicePixelRatio, getSlide, getSlideIfPresent, getSlideIndex, hasSlides, hasWindow, isImageFitCover, isImageSlide, label, makeComposePrefix, makeUseContext, parseLengthPercentage, round, setRef, stopNavigationEventsPropagation, useAnimation, useContainerRect, useController, useDelay, useEventCallback, useEvents, useForkRef, useLayoutEffect, useLightboxDispatch, useLightboxProps, useLightboxState, useLoseFocus, useMotionPreference, usePointerEvents, usePointerSwipe, usePreventSwipeNavigation, useRTL, useSensors, useThrottle, useTimeouts, useWheelSwipe, withPlugins

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/lightbox/use-light-box.ts

function useLightBox(slides) {
    const [selected, setSelected] = (0,react_.useState)(-1);
    const handleOpen = (0,react_.useCallback)((slideUrl)=>{
        const slideIndex = slides.findIndex((slide)=>slide.type === "video" ? slide.poster === slideUrl : slide.src === slideUrl);
        setSelected(slideIndex);
    }, [
        slides
    ]);
    const handleClose = (0,react_.useCallback)(()=>{
        setSelected(-1);
    }, []);
    return {
        selected,
        open: selected >= 0,
        onOpen: handleOpen,
        onClose: handleClose,
        setSelected
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/index.js
var dist = __webpack_require__(25671);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/zoom/index.js
var zoom = __webpack_require__(27838);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/video/index.js
var video = __webpack_require__(66951);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/captions/index.js
var captions = __webpack_require__(88828);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/slideshow/index.js
var slideshow = __webpack_require__(27536);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js
var fullscreen = __webpack_require__(15396);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js
var thumbnails = __webpack_require__(45941);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/GlobalStyles/index.js
var GlobalStyles = __webpack_require__(53868);
;// CONCATENATED MODULE: ./src/components/lightbox/styles.tsx
// @mui



// ----------------------------------------------------------------------
function StyledLightbox() {
    const theme = (0,styles.useTheme)();
    const inputGlobalStyles = /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles["default"], {
        styles: {
            ".yarl__root": {
                "--yarl__thumbnails_thumbnail_padding": 0,
                "--yarl__thumbnails_thumbnail_border": "transparent",
                "--yarl__color_backdrop": (0,styles.alpha)(theme.palette.grey[900], 0.9),
                "--yarl__slide_captions_container_background": (0,styles.alpha)(theme.palette.grey[900], 0.48)
            },
            // Caption
            ".yarl__slide_title": {
                fontSize: theme.typography.h5.fontSize,
                fontWeight: theme.typography.h5.fontWeight,
                lineHeight: theme.typography.h5.lineHeight
            },
            ".yarl__slide_description": {
                fontSize: theme.typography.body2.fontSize,
                fontWeight: theme.typography.body2.fontWeight,
                lineHeight: theme.typography.body2.lineHeight
            },
            // Button
            ".yarl__button": {
                filter: "unset"
            },
            // Thumbnails
            ".yarl__thumbnails_thumbnail": {
                opacity: 0.48,
                "&.yarl__thumbnails_thumbnail_active": {
                    opacity: 1
                }
            },
            ".yarl__thumbnails_vignette": {
                "--yarl__thumbnails_vignette_size": 0
            },
            // Video
            ".yarl__video_container": {
                backgroundColor: theme.palette.common.black
            }
        }
    });
    return inputGlobalStyles;
}

;// CONCATENATED MODULE: ./src/components/lightbox/lightbox.tsx








// @mui

//


// ----------------------------------------------------------------------
const ICON_SIZE = 24;
function Lightbox({ slides, disabledZoom, disabledVideo, disabledTotal, disabledCaptions, disabledSlideshow, disabledThumbnails, disabledFullscreen, onGetCurrentIndex, ...other }) {
    const totalItems = slides ? slides.length : 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledLightbox, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(dist/* default */.ZP, {
                slides: slides,
                animation: {
                    swipe: 240
                },
                carousel: {
                    finite: totalItems < 5
                },
                controller: {
                    closeOnBackdropClick: true
                },
                plugins: getPlugins({
                    disabledZoom,
                    disabledVideo,
                    disabledCaptions,
                    disabledSlideshow,
                    disabledThumbnails,
                    disabledFullscreen
                }),
                on: {
                    view: ({ index })=>{
                        if (onGetCurrentIndex) {
                            onGetCurrentIndex(index);
                        }
                    }
                },
                toolbar: {
                    buttons: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DisplayTotal, {
                            totalItems: totalItems,
                            disabledTotal: disabledTotal
                        }, 0),
                        "close"
                    ]
                },
                render: {
                    iconClose: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:close"
                        }),
                    iconZoomIn: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:zoom-in"
                        }),
                    iconZoomOut: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:zoom-out"
                        }),
                    iconSlideshowPlay: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:play"
                        }),
                    iconSlideshowPause: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:pause"
                        }),
                    iconPrev: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE + 8,
                            icon: "carbon:chevron-left"
                        }),
                    iconNext: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE + 8,
                            icon: "carbon:chevron-right"
                        }),
                    iconExitFullscreen: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:center-to-fit"
                        }),
                    iconEnterFullscreen: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:fit-to-screen"
                        })
                }
            })
        ]
    });
}
// ----------------------------------------------------------------------
function getPlugins({ disabledZoom, disabledVideo, disabledCaptions, disabledSlideshow, disabledThumbnails, disabledFullscreen }) {
    let plugins = [
        captions/* default */.Z,
        fullscreen/* default */.Z,
        slideshow/* default */.Z,
        thumbnails/* default */.Z,
        video/* default */.Z,
        zoom/* default */.Z
    ];
    if (disabledThumbnails) {
        plugins = plugins.filter((plugin)=>plugin !== thumbnails/* default */.Z);
    }
    if (disabledCaptions) {
        plugins = plugins.filter((plugin)=>plugin !== captions/* default */.Z);
    }
    if (disabledFullscreen) {
        plugins = plugins.filter((plugin)=>plugin !== fullscreen/* default */.Z);
    }
    if (disabledSlideshow) {
        plugins = plugins.filter((plugin)=>plugin !== slideshow/* default */.Z);
    }
    if (disabledZoom) {
        plugins = plugins.filter((plugin)=>plugin !== zoom/* default */.Z);
    }
    if (disabledVideo) {
        plugins = plugins.filter((plugin)=>plugin !== video/* default */.Z);
    }
    return plugins;
}
function DisplayTotal({ totalItems, disabledTotal }) {
    const { currentIndex } = (0,dist/* useLightboxState */.oc)();
    if (disabledTotal) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "span",
        className: "yarl__button",
        sx: {
            typography: "body2",
            alignItems: "center",
            display: "inline-flex",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                children: [
                    " ",
                    currentIndex + 1,
                    " "
                ]
            }),
            " / ",
            totalItems
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/lightbox/index.ts






/***/ }),

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Markdown)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/utils/highlight.ts
var highlight = __webpack_require__(54010);
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/react-markdown.js + 87 modules
var react_markdown = __webpack_require__(92319);
// EXTERNAL MODULE: ./node_modules/rehype-raw/index.js + 12 modules
var rehype_raw = __webpack_require__(22775);
// EXTERNAL MODULE: ./node_modules/remark-gfm/index.js + 30 modules
var remark_gfm = __webpack_require__(86024);
// EXTERNAL MODULE: ./node_modules/rehype-highlight/lib/index.js + 45 modules
var lib = __webpack_require__(72068);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
;// CONCATENATED MODULE: ./src/components/markdown/styles.ts
// @mui

// ----------------------------------------------------------------------
const StyledMarkdown = (0,styles.styled)("div")(({ theme })=>{
    const isLight = theme.palette.mode === "light";
    return {
        // Text
        h1: {
            margin: 0,
            ...theme.typography.h1
        },
        h2: {
            margin: 0,
            ...theme.typography.h2
        },
        h3: {
            margin: 0,
            ...theme.typography.h3
        },
        h4: {
            margin: 0,
            ...theme.typography.h4
        },
        h5: {
            margin: 0,
            ...theme.typography.h5
        },
        h6: {
            margin: 0,
            ...theme.typography.h6
        },
        p: {
            margin: 0,
            ...theme.typography.body1
        },
        br: {
            display: "grid",
            content: '""',
            marginTop: "0.75em"
        },
        // Divider
        hr: {
            margin: 0,
            flexShrink: 0,
            borderWidth: 0,
            msFlexNegative: 0,
            WebkitFlexShrink: 0,
            borderStyle: "solid",
            borderBottomWidth: "thin",
            borderColor: theme.palette.divider
        },
        // List
        "& ul, & ol": {
            margin: 0,
            "& li": {
                lineHeight: 2
            }
        },
        // Blockquote
        "& blockquote": {
            lineHeight: 1.5,
            fontSize: "1.5em",
            margin: "40px auto",
            position: "relative",
            fontFamily: "Georgia, serif",
            padding: theme.spacing(3, 3, 3, 8),
            color: theme.palette.text.secondary,
            borderRadius: theme.shape.borderRadius * 2,
            backgroundColor: theme.palette.background.neutral,
            [theme.breakpoints.up("md")]: {
                width: "80%"
            },
            "& p, & span": {
                marginBottom: 0,
                fontSize: "inherit",
                fontFamily: "inherit"
            },
            "&:before": {
                left: 16,
                top: -8,
                display: "block",
                fontSize: "3em",
                content: '"\\201C"',
                position: "absolute",
                color: theme.palette.text.disabled
            }
        },
        // Code Block
        "& pre, & pre > code": {
            fontSize: 16,
            overflowX: "auto",
            whiteSpace: "pre",
            padding: theme.spacing(2),
            color: theme.palette.common.white,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: isLight ? theme.palette.grey[900] : (0,styles.alpha)(theme.palette.grey[500], 0.16)
        },
        "& code": {
            fontSize: 14,
            borderRadius: 4,
            whiteSpace: "pre",
            padding: theme.spacing(0.2, 0.5),
            color: theme.palette.warning[isLight ? "darker" : "lighter"],
            backgroundColor: theme.palette.warning[isLight ? "lighter" : "darker"],
            "&.hljs": {
                padding: 0,
                backgroundColor: "transparent"
            }
        },
        // Table
        table: {
            width: "100%",
            borderCollapse: "collapse",
            border: `1px solid ${theme.palette.divider}`,
            "th, td": {
                padding: theme.spacing(1),
                border: `1px solid ${theme.palette.divider}`
            },
            "tbody tr:nth-of-type(odd)": {
                backgroundColor: theme.palette.background.neutral
            }
        },
        // Checkbox
        input: {
            "&[type=checkbox]": {
                position: "relative",
                cursor: "pointer",
                "&:before": {
                    content: '""',
                    top: -2,
                    left: -2,
                    width: 17,
                    height: 17,
                    borderRadius: 3,
                    position: "absolute",
                    backgroundColor: theme.palette.grey[isLight ? 300 : 700]
                },
                "&:checked": {
                    "&:before": {
                        backgroundColor: theme.palette.primary.main
                    },
                    "&:after": {
                        content: '""',
                        top: 1,
                        left: 5,
                        width: 4,
                        height: 9,
                        position: "absolute",
                        transform: "rotate(45deg)",
                        msTransform: "rotate(45deg)",
                        WebkitTransform: "rotate(45deg)",
                        border: `solid ${theme.palette.common.white}`,
                        borderWidth: "0 2px 2px 0"
                    }
                }
            }
        }
    };
});
/* harmony default export */ const markdown_styles = (StyledMarkdown);

;// CONCATENATED MODULE: ./src/components/markdown/markdown.tsx
// utils



// markdown plugins



// @mui

// routes

//

//

// ----------------------------------------------------------------------
function Markdown({ sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(markdown_styles, {
        sx: sx,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_markdown/* ReactMarkdown */.D, {
            rehypePlugins: [
                rehype_raw/* default */.Z,
                lib/* default */.Z,
                [
                    remark_gfm/* default */.Z,
                    {
                        singleTilde: false
                    }
                ]
            ],
            components: markdown_components,
            children: ""
        })
    });
}
// ----------------------------------------------------------------------
const markdown_components = {
    img: ({ ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
            alt: props.alt,
            ratio: "16/9",
            sx: {
                borderRadius: 2
            },
            ...props
        }),
    a: ({ ...props })=>{
        const isHttp = props.href.includes("http");
        return isHttp ? /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            target: "_blank",
            rel: "noopener",
            ...props
        }) : /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            component: components/* RouterLink */.r,
            href: props.href,
            ...props,
            children: props.children
        });
    }
};

;// CONCATENATED MODULE: ./src/components/markdown/index.ts




/***/ }),

/***/ 79215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EM: () => (/* reexport */ nav_section_horizontal),
  Hg: () => (/* reexport */ nav_section_mini),
  Mr: () => (/* reexport */ nav_section_vertical)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
;// CONCATENATED MODULE: ./src/components/nav-section/config.ts
// ----------------------------------------------------------------------
const navVerticalConfig = (config)=>({
        itemGap: config?.itemGap || 4,
        iconSize: config?.iconSize || 24,
        currentRole: config?.currentRole,
        itemRootHeight: config?.itemRootHeight || 44,
        itemSubHeight: config?.itemSubHeight || 36,
        itemPadding: config?.itemPadding || "4px 8px 4px 12px",
        itemRadius: config?.itemRadius || 8,
        hiddenLabel: config?.hiddenLabel || false
    });
const navMiniConfig = (config)=>({
        itemGap: config?.itemGap || 4,
        iconSize: config?.iconSize || 22,
        currentRole: config?.currentRole,
        itemRootHeight: config?.itemRootHeight || 56,
        itemSubHeight: config?.itemSubHeight || 34,
        itemPadding: config?.itemPadding || "6px 0 0 0",
        itemRadius: config?.itemRadius || 6,
        hiddenLabel: config?.hiddenLabel || false
    });
const navHorizontalConfig = (config)=>({
        itemGap: config?.itemGap || 6,
        iconSize: config?.iconSize || 22,
        currentRole: config?.currentRole,
        itemRootHeight: config?.itemRootHeight || 32,
        itemSubHeight: config?.itemSubHeight || 34,
        itemPadding: config?.itemPadding || "0 6px 0 6px",
        itemRadius: config?.itemRadius || 6,
        hiddenLabel: config?.hiddenLabel || false
    });

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Popover/index.js
var Popover = __webpack_require__(57832);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(79536);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/routes/hooks/use-active-link.ts
var use_active_link = __webpack_require__(50691);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(60061);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(19868);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
;// CONCATENATED MODULE: ./src/components/nav-section/mini/styles.ts
// @mui



const StyledItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, open, depth, config, theme })=>{
    const subItem = depth !== 1;
    const activeStyles = {
        root: {
            color: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.primary.light,
            backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.08),
            "&:hover": {
                backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.16)
            }
        },
        sub: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        }
    };
    return {
        // Root item
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: config.itemRadius,
        minHeight: config.itemRootHeight,
        color: theme.palette.text.secondary,
        margin: `0 ${config.itemGap}px ${config.itemGap}px ${config.itemGap}px`,
        ...config.hiddenLabel && !subItem && {
            padding: config.itemPadding
        },
        // Active root item
        ...active && {
            ...activeStyles.root
        },
        // Sub item
        ...subItem && {
            margin: 0,
            flexDirection: "row",
            padding: theme.spacing(0, 1),
            minHeight: config.itemSubHeight,
            // Active sub item
            ...active && {
                ...activeStyles.sub
            }
        },
        // Open
        ...open && !active && {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.hover
        }
    };
});
const StyledIcon = (0,styles.styled)((ListItemIcon_default()))(({ size })=>({
        width: size,
        height: size,
        marginRight: 0
    }));

;// CONCATENATED MODULE: ./src/components/nav-section/mini/nav-item.tsx


// @mui




// routes

//


const NavItem = /*#__PURE__*/ (0,react_.forwardRef)(({ item, depth, open, active, externalLink, config, ...other }, ref)=>{
    const theme = (0,styles.useTheme)();
    const { title, path, icon, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledItem, {
        disableGutters: true,
        ref: ref,
        open: open,
        depth: depth,
        active: active,
        disabled: disabled,
        config: config,
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                size: config.iconSize,
                sx: {
                    ...subItem && {
                        mr: 1.5
                    }
                },
                children: icon
            }),
            !(config.hiddenLabel && !subItem) && /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                sx: {
                    width: 1,
                    flex: "unset",
                    ...!subItem && {
                        px: 0.5,
                        mt: 0.5
                    }
                },
                primary: title,
                primaryTypographyProps: {
                    noWrap: true,
                    fontSize: 10,
                    lineHeight: "16px",
                    textAlign: "center",
                    textTransform: "capitalize",
                    fontWeight: active ? "fontWeightBold" : "fontWeightSemiBold",
                    ...subItem && {
                        textAlign: "unset",
                        fontSize: theme.typography.body2.fontSize,
                        lineHeight: theme.typography.body2.lineHeight,
                        fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                    }
                }
            }),
            caption && /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: caption,
                arrow: true,
                placement: "right",
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    width: 16,
                    icon: "eva:info-outline",
                    sx: {
                        color: "text.disabled",
                        ...!subItem && {
                            top: 11,
                            left: 6,
                            position: "absolute"
                        }
                    }
                })
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                width: 16,
                icon: "eva:arrow-ios-forward-fill",
                sx: {
                    top: 11,
                    right: 6,
                    position: "absolute"
                }
            })
        ]
    });
    // Hidden item by role
    if (roles && !roles.includes(`${config.currentRole}`)) {
        return null;
    }
    // External link
    if (externalLink) return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        href: path,
        target: "_blank",
        rel: "noopener",
        underline: "none",
        sx: {
            width: 1,
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        sx: {
            width: 1,
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
});
/* harmony default export */ const nav_item = (NavItem);

;// CONCATENATED MODULE: ./src/components/nav-section/mini/nav-list.tsx


// @mui



// routes



function NavList({ data, depth, hasChild, config }) {
    const navRef = (0,react_.useRef)(null);
    const pathname = (0,hooks/* usePathname */.jD)();
    const active = (0,use_active_link/* useActiveLink */.X)(data.path, hasChild);
    const externalLink = data.path.includes("http");
    const [open, setOpen] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        if (open) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    (0,react_.useEffect)(()=>{
        const appBarEl = Array.from(document.querySelectorAll(`.${AppBar.appBarClasses.root}`));
        // Reset styles when hover
        const styles = ()=>{
            document.body.style.overflow = "";
            document.body.style.padding = "";
            // Apply for Window
            appBarEl.forEach((elem)=>{
                elem.style.padding = "";
            });
        };
        if (open) {
            styles();
        } else {
            styles();
        }
    }, [
        open
    ]);
    const handleOpen = (0,react_.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_item, {
                ref: navRef,
                item: data,
                depth: depth,
                open: open,
                active: active,
                externalLink: externalLink,
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose,
                config: config
            }),
            hasChild && /*#__PURE__*/ jsx_runtime_.jsx((Popover_default()), {
                open: open,
                anchorEl: navRef.current,
                anchorOrigin: {
                    vertical: "center",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "center",
                    horizontal: "left"
                },
                slotProps: {
                    paper: {
                        onMouseEnter: handleOpen,
                        onMouseLeave: handleClose,
                        sx: {
                            mt: 0.5,
                            width: 160,
                            ...open && {
                                pointerEvents: "auto"
                            }
                        }
                    }
                },
                sx: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavSubList, {
                    data: data.children,
                    depth: depth,
                    config: config
                })
            })
        ]
    });
}
function NavSubList({ data, depth, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        spacing: 0.5,
        children: data.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/mini/nav-section-mini.tsx





// ----------------------------------------------------------------------
function NavSectionMini({ data, config, sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        sx: sx,
        ...other,
        children: data.map((group, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Group, {
                items: group.items,
                config: navMiniConfig(config)
            }, group.subheader || index))
    });
}
/* harmony default export */ const nav_section_mini = (/*#__PURE__*/(0,react_.memo)(NavSectionMini));
function Group({ items, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(NavList, {
                data: list,
                depth: 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/mini/index.ts


// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(6176);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Collapse/index.js
var Collapse = __webpack_require__(31022);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListSubheader/index.js
var ListSubheader = __webpack_require__(62133);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader);
;// CONCATENATED MODULE: ./src/components/nav-section/vertical/styles.ts
// @mui




const styles_StyledItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, depth, config, theme })=>{
    const subItem = depth !== 1;
    const deepSubItem = depth > 2;
    const activeStyles = {
        root: {
            color: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.primary.light,
            backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.08),
            "&:hover": {
                backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.16)
            }
        },
        sub: {
            color: theme.palette.text.primary,
            backgroundColor: "transparent",
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        }
    };
    return {
        // Root item
        padding: config.itemPadding,
        marginBottom: config.itemGap,
        borderRadius: config.itemRadius,
        minHeight: config.itemRootHeight,
        color: theme.palette.text.secondary,
        // Active root item
        ...active && {
            ...activeStyles.root
        },
        // Sub item
        ...subItem && {
            minHeight: config.itemSubHeight,
            // Active sub item
            ...active && {
                ...activeStyles.sub
            }
        },
        // Deep sub item
        ...deepSubItem && {
            paddingLeft: theme.spacing(depth)
        }
    };
});
const styles_StyledIcon = (0,styles.styled)((ListItemIcon_default()))(({ size })=>({
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledDotIcon = (0,styles.styled)("span")(({ active, theme })=>({
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: theme.palette.text.disabled,
        transition: theme.transitions.create([
            "transform"
        ], {
            duration: theme.transitions.duration.shorter
        }),
        ...active && {
            transform: "scale(2)",
            backgroundColor: theme.palette.primary.main
        }
    }));
const StyledSubheader = (0,styles.styled)((ListSubheader_default()))(({ config, theme })=>({
        ...theme.typography.overline,
        fontSize: 11,
        cursor: "pointer",
        display: "inline-flex",
        padding: config.itemPadding,
        paddingTop: theme.spacing(2),
        marginBottom: config.itemGap,
        paddingBottom: theme.spacing(1),
        color: theme.palette.text.disabled,
        transition: theme.transitions.create([
            "color"
        ], {
            duration: theme.transitions.duration.shortest
        }),
        "&:hover": {
            color: theme.palette.text.primary
        }
    }));

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/nav-section/vertical/nav-item.tsx
// @mui





// routes

//


function nav_item_NavItem({ item, open, depth, active, config, externalLink, ...other }) {
    const { title, path, icon, info, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_StyledItem, {
        disableGutters: true,
        disabled: disabled,
        active: active,
        depth: depth,
        config: config,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    icon && /*#__PURE__*/ jsx_runtime_.jsx(styles_StyledIcon, {
                        size: config.iconSize,
                        children: icon
                    }),
                    subItem && /*#__PURE__*/ jsx_runtime_.jsx(styles_StyledIcon, {
                        size: config.iconSize,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledDotIcon, {
                            active: active
                        })
                    })
                ]
            }),
            !(config.hiddenLabel && !subItem) && /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                primary: title,
                secondary: caption ? /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                    title: caption,
                    placement: "top-start",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: caption
                    })
                }) : null,
                primaryTypographyProps: {
                    noWrap: true,
                    typography: "body2",
                    textTransform: "capitalize",
                    fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                },
                secondaryTypographyProps: {
                    noWrap: true,
                    component: "span",
                    typography: "caption",
                    color: "text.disabled"
                }
            }),
            info && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    ml: 1,
                    lineHeight: 0
                },
                children: info
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                width: 16,
                icon: open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill",
                sx: {
                    ml: 1,
                    flexShrink: 0
                }
            })
        ]
    });
    // Hidden item by role
    if (roles && !roles.includes(`${config.currentRole}`)) {
        return null;
    }
    // External link
    if (externalLink) return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        href: path,
        target: "_blank",
        rel: "noopener",
        underline: "none",
        color: "inherit",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        color: "inherit",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/nav-list.tsx


// @mui

// routes



function nav_list_NavList({ data, depth, hasChild, config }) {
    const pathname = (0,hooks/* usePathname */.jD)();
    const active = (0,use_active_link/* useActiveLink */.X)(data.path, hasChild);
    const externalLink = data.path.includes("http");
    const [open, setOpen] = (0,react_.useState)(active);
    (0,react_.useEffect)(()=>{
        if (!active) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleToggle = (0,react_.useCallback)(()=>{
        setOpen((prev)=>!prev);
    }, []);
    const handleClose = (0,react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_item_NavItem, {
                item: data,
                depth: depth,
                open: open,
                active: active,
                externalLink: externalLink,
                onClick: handleToggle,
                config: config
            }),
            hasChild && /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                in: open,
                unmountOnExit: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(nav_list_NavSubList, {
                    data: data.children,
                    depth: depth,
                    config: config
                })
            })
        ]
    });
}
function nav_list_NavSubList({ data, depth, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_list_NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/nav-section-vertical.tsx


// @mui






// ----------------------------------------------------------------------
function NavSectionVertical({ data, config, sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        sx: sx,
        ...other,
        children: data.map((group, index)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_section_vertical_Group, {
                subheader: group.subheader,
                items: group.items,
                config: navVerticalConfig(config)
            }, group.subheader || index))
    });
}
/* harmony default export */ const nav_section_vertical = (/*#__PURE__*/(0,react_.memo)(NavSectionVertical));
function nav_section_vertical_Group({ subheader, items, config }) {
    const [open, setOpen] = (0,react_.useState)(true);
    const handleToggle = (0,react_.useCallback)(()=>{
        setOpen((prev)=>!prev);
    }, []);
    const renderContent = items.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_list_NavList, {
            data: list,
            depth: 1,
            hasChild: !!list.children,
            config: config
        }, list.title + list.path));
    return /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
        disablePadding: true,
        sx: {
            px: 2
        },
        children: subheader ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledSubheader, {
                    disableGutters: true,
                    disableSticky: true,
                    onClick: handleToggle,
                    config: config,
                    children: subheader
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                    in: open,
                    children: renderContent
                })
            ]
        }) : renderContent
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/index.ts


// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/styles.ts
// @mui



const horizontal_styles_StyledItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, open, depth, config, theme })=>{
    const subItem = depth !== 1;
    const activeStyles = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.selected
    };
    return {
        // Root item
        flexShrink: 0,
        padding: config.itemPadding,
        marginRight: config.itemGap,
        borderRadius: config.itemRadius,
        minHeight: config.itemRootHeight,
        color: theme.palette.text.secondary,
        // Active item
        ...active && {
            ...activeStyles
        },
        // Sub item
        ...subItem && {
            margin: 0,
            padding: theme.spacing(0, 1),
            minHeight: config.itemSubHeight
        },
        // Open
        ...open && !active && {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.hover
        }
    };
});
const horizontal_styles_StyledIcon = (0,styles.styled)((ListItemIcon_default()))(({ size })=>({
        width: size,
        height: size,
        flexShrink: 0,
        marginRight: 0
    }));

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/nav-item.tsx


// @mui




// routes

//


const horizontal_nav_item_NavItem = /*#__PURE__*/ (0,react_.forwardRef)(({ item, depth, open, active, externalLink, config, ...other }, ref)=>{
    const { title, path, icon, info, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(horizontal_styles_StyledItem, {
        disableGutters: true,
        ref: ref,
        open: open,
        depth: depth,
        active: active,
        disabled: disabled,
        config: config,
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(horizontal_styles_StyledIcon, {
                size: config.iconSize,
                sx: {
                    ...subItem && {
                        mr: 1.5
                    }
                },
                children: icon
            }),
            !(config.hiddenLabel && !subItem) && /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                sx: {
                    ...!subItem && {
                        ml: 1
                    }
                },
                primary: title,
                primaryTypographyProps: {
                    noWrap: true,
                    typography: "body2",
                    textTransform: "capitalize",
                    fontWeight: active ? "fontWeightBold" : "fontWeightMedium",
                    ...subItem && {
                        fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                    }
                }
            }),
            info && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    ml: 0.5,
                    lineHeight: 0
                },
                children: info
            }),
            caption && /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: caption,
                arrow: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    width: 16,
                    icon: "eva:info-outline",
                    sx: {
                        ml: 0.5,
                        color: "text.disabled"
                    }
                })
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: subItem ? "eva:arrow-ios-forward-fill" : "eva:arrow-ios-downward-fill",
                width: 16,
                sx: {
                    flexShrink: 0,
                    ml: 0.5
                }
            })
        ]
    });
    // Hidden item by role
    if (roles && !roles.includes(`${config.currentRole}`)) {
        return null;
    }
    // External link
    if (externalLink) return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        href: path,
        target: "_blank",
        rel: "noopener",
        underline: "none",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
});
/* harmony default export */ const horizontal_nav_item = (horizontal_nav_item_NavItem);

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/nav-list.tsx


// @mui



// routes



function horizontal_nav_list_NavList({ data, depth, hasChild, config }) {
    const navRef = (0,react_.useRef)(null);
    const pathname = (0,hooks/* usePathname */.jD)();
    const active = (0,use_active_link/* useActiveLink */.X)(data.path, hasChild);
    const externalLink = data.path.includes("http");
    const [open, setOpen] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        if (open) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    (0,react_.useEffect)(()=>{
        const appBarEl = Array.from(document.querySelectorAll(`.${AppBar.appBarClasses.root}`));
        // Reset styles when hover
        const styles = ()=>{
            document.body.style.overflow = "";
            document.body.style.padding = "";
            // Apply for Window
            appBarEl.forEach((elem)=>{
                elem.style.padding = "";
            });
        };
        if (open) {
            styles();
        } else {
            styles();
        }
    }, [
        open
    ]);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_item, {
                ref: navRef,
                item: data,
                depth: depth,
                open: open,
                active: active,
                externalLink: externalLink,
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose,
                config: config
            }),
            hasChild && /*#__PURE__*/ jsx_runtime_.jsx((Popover_default()), {
                open: open,
                anchorEl: navRef.current,
                anchorOrigin: depth === 1 ? {
                    vertical: "bottom",
                    horizontal: "left"
                } : {
                    vertical: "center",
                    horizontal: "right"
                },
                transformOrigin: depth === 1 ? {
                    vertical: "top",
                    horizontal: "left"
                } : {
                    vertical: "center",
                    horizontal: "left"
                },
                slotProps: {
                    paper: {
                        onMouseEnter: handleOpen,
                        onMouseLeave: handleClose,
                        sx: {
                            width: 160,
                            ...open && {
                                pointerEvents: "auto"
                            }
                        }
                    }
                },
                sx: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_list_NavSubList, {
                    data: data.children,
                    depth: depth,
                    config: config
                })
            })
        ]
    });
}
function horizontal_nav_list_NavSubList({ data, depth, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        spacing: 0.5,
        children: data.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_list_NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/nav-section-horizontal.tsx


// @mui

// theme



// ----------------------------------------------------------------------
function NavSectionHorizontal({ data, config, sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        direction: "row",
        sx: {
            mx: "auto",
            ...css/* hideScroll */.O1.y,
            ...sx
        },
        children: data.map((group, index)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_section_horizontal_Group, {
                items: group.items,
                config: navHorizontalConfig(config)
            }, group.subheader || index))
    });
}
/* harmony default export */ const nav_section_horizontal = (/*#__PURE__*/(0,react_.memo)(NavSectionHorizontal));
function nav_section_horizontal_Group({ items, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_list_NavList, {
                data: list,
                depth: 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/index.ts


;// CONCATENATED MODULE: ./src/components/nav-section/index.ts






/***/ }),

/***/ 60633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TourNewEditForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50298);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57086);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66558);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71026);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92133);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76267);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56703);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26566);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77782);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26017);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59099);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48611);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89539);
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38670);
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99011);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76505);
/* harmony import */ var src_components_snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80941);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29189);






// @mui











// hooks

// routes


// assets

// _mock

// components



function TourNewEditForm({ currentTour }) {
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useRouter */ .tv)();
    const mdUp = (0,src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_10__/* .useResponsive */ .F)("up", "md");
    const { enqueueSnackbar } = (0,src_components_snackbar__WEBPACK_IMPORTED_MODULE_8__/* .useSnackbar */ .Ds)();
    const NewTourSchema = yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Name is required"),
        content: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Content is required"),
        images: yup__WEBPACK_IMPORTED_MODULE_2__/* .array */ .IX().min(1, "Images is required"),
        //
        tourGuides: yup__WEBPACK_IMPORTED_MODULE_2__/* .array */ .IX().min(1, "Must have at least 1 guide"),
        durations: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Duration is required"),
        tags: yup__WEBPACK_IMPORTED_MODULE_2__/* .array */ .IX().min(2, "Must have at least 2 tags"),
        services: yup__WEBPACK_IMPORTED_MODULE_2__/* .array */ .IX().min(2, "Must have at least 2 services"),
        destination: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Destination is required"),
        available: yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry().shape({
            startDate: yup__WEBPACK_IMPORTED_MODULE_2__/* .mixed */ .nK().nullable().required("Start date is required"),
            endDate: yup__WEBPACK_IMPORTED_MODULE_2__/* .mixed */ .nK().required("End date is required").test("date-min", "End date must be later than start date", (value, { parent })=>value.getTime() > parent.startDate.getTime())
        })
    });
    const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            name: currentTour?.name || "",
            content: currentTour?.content || "",
            images: currentTour?.images || [],
            //
            tourGuides: currentTour?.tourGuides || [],
            tags: currentTour?.tags || [],
            durations: currentTour?.durations || "",
            destination: currentTour?.destination || "",
            services: currentTour?.services || [],
            available: {
                startDate: currentTour?.available.startDate || null,
                endDate: currentTour?.available.endDate || null
            }
        }), [
        currentTour
    ]);
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__/* .yupResolver */ .X)(NewTourSchema),
        defaultValues
    });
    const { watch, reset, control, setValue, handleSubmit, formState: { isSubmitting } } = methods;
    const values = watch();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentTour) {
            reset(defaultValues);
        }
    }, [
        currentTour,
        defaultValues,
        reset
    ]);
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            enqueueSnackbar(currentTour ? "Update success!" : "Create success!");
            router.push(src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.dashboard.tour.root);
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const handleDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{
        const files = values.images || [];
        const newFiles = acceptedFiles.map((file)=>Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
        setValue("images", [
            ...files,
            ...newFiles
        ], {
            shouldValidate: true
        });
    }, [
        setValue,
        values.images
    ]);
    const handleRemoveFile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((inputFile)=>{
        const filtered = values.images && values.images?.filter((file)=>file !== inputFile);
        setValue("images", filtered);
    }, [
        setValue,
        values.images
    ]);
    const handleRemoveAllFiles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setValue("images", []);
    }, [
        setValue
    ]);
    const renderDetails = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                md: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "h6",
                        sx: {
                            mb: 0.5
                        },
                        children: "Details"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Title, short description, image..."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_15___default()), {
                    children: [
                        !mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_16___default()), {
                            title: "Details"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                            spacing: 3,
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFTextField */ .au, {
                                            name: "name",
                                            placeholder: "Ex: Adventure Seekers Expedition..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Content"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFEditor */ .LM, {
                                            simple: true,
                                            name: "content"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Images"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFUpload */ .rd, {
                                            multiple: true,
                                            thumbnail: true,
                                            name: "images",
                                            maxSize: 3145728,
                                            onDrop: handleDrop,
                                            onRemove: handleRemoveFile,
                                            onRemoveAll: handleRemoveAllFiles,
                                            onUpload: ()=>console.info("ON UPLOAD")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
    const renderProperties = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                md: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "h6",
                        sx: {
                            mb: 0.5
                        },
                        children: "Properties"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Additional functions and attributes..."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_15___default()), {
                    children: [
                        !mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_16___default()), {
                            title: "Properties"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                            spacing: 3,
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            sx: {
                                                mb: 1.5
                                            },
                                            children: "Tour Guide"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFAutocomplete */ .Fl, {
                                            multiple: true,
                                            name: "tourGuides",
                                            placeholder: "+ Tour Guides",
                                            disableCloseOnSelect: true,
                                            options: src_mock__WEBPACK_IMPORTED_MODULE_6__/* ._tourGuides */ .$r,
                                            getOptionLabel: (option)=>option.name,
                                            isOptionEqualToValue: (option, value)=>option.id === value.id,
                                            renderOption: (props, tourGuide)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
                                                    ...props,
                                                    key: tourGuide.id,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                            alt: tourGuide.avatarUrl,
                                                            src: tourGuide.avatarUrl,
                                                            sx: {
                                                                width: 24,
                                                                height: 24,
                                                                flexShrink: 0,
                                                                mr: 1
                                                            }
                                                        }, tourGuide.id),
                                                        tourGuide.name
                                                    ]
                                                }),
                                            renderTags: (selected, getTagProps)=>selected.map((tourGuide, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        ...getTagProps({
                                                            index
                                                        }),
                                                        key: tourGuide.id,
                                                        size: "small",
                                                        variant: "soft",
                                                        label: tourGuide.name,
                                                        avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18___default()), {
                                                            alt: tourGuide.name,
                                                            src: tourGuide.avatarUrl
                                                        })
                                                    }))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Available"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                            direction: {
                                                xs: "column",
                                                md: "row"
                                            },
                                            spacing: 2,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .Controller */ .Qr, {
                                                    name: "available.startDate",
                                                    control: control,
                                                    render: ({ field, fieldState: { error } })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_20__/* .DatePicker */ .Mt, {
                                                            ...field,
                                                            format: "dd/MM/yyyy",
                                                            slotProps: {
                                                                textField: {
                                                                    fullWidth: true,
                                                                    error: !!error,
                                                                    helperText: error?.message
                                                                }
                                                            }
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .Controller */ .Qr, {
                                                    name: "available.endDate",
                                                    control: control,
                                                    render: ({ field, fieldState: { error } })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_20__/* .DatePicker */ .Mt, {
                                                            ...field,
                                                            format: "dd/MM/yyyy",
                                                            slotProps: {
                                                                textField: {
                                                                    fullWidth: true,
                                                                    error: !!error,
                                                                    helperText: error?.message
                                                                }
                                                            }
                                                        })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Duration"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFTextField */ .au, {
                                            name: "durations",
                                            placeholder: "Ex: 2 days, 4 days 3 nights..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Destination"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFAutocomplete */ .Fl, {
                                            name: "destination",
                                            placeholder: "+ Destination",
                                            options: src_assets_data__WEBPACK_IMPORTED_MODULE_5__/* .countries */ .h.map((option)=>option.label),
                                            getOptionLabel: (option)=>option,
                                            renderOption: (props, option)=>{
                                                const { code, label, phone } = src_assets_data__WEBPACK_IMPORTED_MODULE_5__/* .countries */ .h.filter((country)=>country.label === option)[0];
                                                if (!label) {
                                                    return null;
                                                }
                                                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
                                                    ...props,
                                                    key: label,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                            icon: `circle-flags:${code.toLowerCase()}`,
                                                            width: 28,
                                                            sx: {
                                                                mr: 1
                                                            }
                                                        }, label),
                                                        label,
                                                        " (",
                                                        code,
                                                        ") +",
                                                        phone
                                                    ]
                                                });
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Services"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFMultiCheckbox */ .s2, {
                                            name: "services",
                                            options: src_mock__WEBPACK_IMPORTED_MODULE_6__/* .TOUR_SERVICE_OPTIONS */ .Aj,
                                            sx: {
                                                display: "grid",
                                                gridTemplateColumns: "repeat(2, 1fr)"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            variant: "subtitle2",
                                            children: "Tags"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .RHFAutocomplete */ .Fl, {
                                            name: "tags",
                                            placeholder: "+ Tags",
                                            multiple: true,
                                            freeSolo: true,
                                            options: src_mock__WEBPACK_IMPORTED_MODULE_6__/* ._tags */ .Qw.map((option)=>option),
                                            getOptionLabel: (option)=>option,
                                            renderOption: (props, option)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
                                                    ...props,
                                                    key: option
                                                }, option),
                                            renderTags: (selected, getTagProps)=>selected.map((option, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_19___default()), {
                                                        ...getTagProps({
                                                            index
                                                        }),
                                                        key: option,
                                                        label: option,
                                                        size: "small",
                                                        color: "info",
                                                        variant: "soft"
                                                    }))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
    const renderActions = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                md: 4
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                xs: 12,
                md: 8,
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_21___default()), {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_22___default()), {
                            defaultChecked: true
                        }),
                        label: "Publish",
                        sx: {
                            flexGrow: 1,
                            pl: 3
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_23___default()), {
                        type: "submit",
                        variant: "contained",
                        size: "large",
                        loading: isSubmitting,
                        sx: {
                            ml: 2
                        },
                        children: !currentTour ? "Create Tour" : "Save Changes"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
            container: true,
            spacing: 3,
            children: [
                renderDetails,
                renderProperties,
                renderActions
            ]
        })
    });
}


/***/ }),

/***/ 53917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TourCreateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80640);
/* harmony import */ var _tour_new_edit_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60633);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// components


//

// ----------------------------------------------------------------------
function TourCreateView() {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSettingsContext */ .K$)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                heading: "Create a new tour",
                links: [
                    {
                        name: "Dashboard",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.root
                    },
                    {
                        name: "Tour",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.tour.root
                    },
                    {
                        name: "New tour"
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tour_new_edit_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 19069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TourDetailsView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tabs/index.js
var Tabs = __webpack_require__(87726);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/tour/tour-details-toolbar.tsx
// @mui








// components



function TourDetailsToolbar({ publish, backLink, editLink, liveLink, publishOptions, onChangePublish, sx, ...other }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1.5,
                direction: "row",
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    },
                    ...sx
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        component: components/* RouterLink */.r,
                        href: backLink,
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:arrow-ios-back-fill",
                            width: 16
                        }),
                        children: "Back"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            flexGrow: 1
                        }
                    }),
                    publish === "published" && /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Go Live",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            component: components/* RouterLink */.r,
                            href: liveLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:external-link-fill"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Edit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            component: components/* RouterLink */.r,
                            href: editLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:pen-bold"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                        color: "inherit",
                        variant: "contained",
                        loading: !publish,
                        loadingIndicator: "Loading…",
                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:arrow-ios-downward-fill"
                        }),
                        onClick: popover.onOpen,
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: publish
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "top-right",
                sx: {
                    width: 140
                },
                children: publishOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        selected: option.value === publish,
                        onClick: ()=>{
                            popover.onClose();
                            onChangePublish(option.value);
                        },
                        children: [
                            option.value === "published" && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:cloud-upload-fill"
                            }),
                            option.value === "draft" && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:file-text-bold"
                            }),
                            option.label
                        ]
                    }, option.value))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
// EXTERNAL MODULE: ./src/components/markdown/index.ts + 2 modules
var markdown = __webpack_require__(1001);
// EXTERNAL MODULE: ./src/components/animate/index.ts + 15 modules
var animate = __webpack_require__(22140);
// EXTERNAL MODULE: ./src/components/lightbox/index.ts + 3 modules
var lightbox = __webpack_require__(9216);
;// CONCATENATED MODULE: ./src/sections/tour/tour-details-content.tsx


// @mui








// utils

// _mock

// components





function TourDetailsContent({ tour }) {
    const { name, images, content, services, tourGuides, available, durations, destination, ratingNumber } = tour;
    const slides = images.map((slide)=>({
            src: slide
        }));
    const { selected: selectedImage, open: openLightbox, onOpen: handleOpenLightbox, onClose: handleCloseLightbox } = (0,lightbox/* useLightBox */.NX)(slides);
    const renderGallery = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                gap: 1,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)"
                },
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                        whileHover: "hover",
                        variants: {
                            hover: {
                                opacity: 0.8
                            }
                        },
                        transition: (0,animate/* varTranHover */.BN)(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                            alt: slides[0].src,
                            src: slides[0].src,
                            ratio: "1/1",
                            onClick: ()=>handleOpenLightbox(slides[0].src),
                            sx: {
                                borderRadius: 2,
                                cursor: "pointer"
                            }
                        })
                    }, slides[0].src),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        gap: 1,
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        children: slides.slice(1, 5).map((slide)=>/*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                                whileHover: "hover",
                                variants: {
                                    hover: {
                                        opacity: 0.8
                                    }
                                },
                                transition: (0,animate/* varTranHover */.BN)(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                    alt: slide.src,
                                    src: slide.src,
                                    ratio: "1/1",
                                    onClick: ()=>handleOpenLightbox(slide.src),
                                    sx: {
                                        borderRadius: 2,
                                        cursor: "pointer"
                                    }
                                })
                            }, slide.src))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lightbox/* default */.ZP, {
                index: selectedImage,
                slides: slides,
                open: openLightbox,
                close: handleCloseLightbox
            })
        ]
    });
    const renderHead = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                sx: {
                    mb: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h4",
                        sx: {
                            flexGrow: 1
                        },
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:share-bold"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                        defaultChecked: true,
                        color: "error",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:heart-outline"
                        }),
                        checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:heart-bold"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                direction: "row",
                flexWrap: "wrap",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 0.5,
                        sx: {
                            typography: "body2"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:star-fill",
                                sx: {
                                    color: "warning.main"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    typography: "subtitle2"
                                },
                                children: ratingNumber
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: "(234 reviews)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 0.5,
                        sx: {
                            typography: "body2"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "mingcute:location-fill",
                                sx: {
                                    color: "error.main"
                                }
                            }),
                            destination
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 0.5,
                        sx: {
                            typography: "subtitle2"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:flag-bold",
                                sx: {
                                    color: "info.main"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    typography: "body2",
                                    color: "text.secondary"
                                },
                                children: "Guide by"
                            }),
                            tourGuides.map((tourGuide)=>tourGuide.name).join(", ")
                        ]
                    })
                ]
            })
        ]
    });
    const renderOverview = /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        gap: 3,
        display: "grid",
        gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)"
        },
        children: [
            {
                label: "Available",
                value: `${(0,format_time/* fDate */.Mu)(available.startDate)} - ${(0,format_time/* fDate */.Mu)(available.endDate)}`,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:calendar-date-bold"
                })
            },
            {
                label: "Contact name",
                value: tourGuides.map((tourGuide)=>tourGuide.phoneNumber).join(", "),
                icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:user-rounded-bold"
                })
            },
            {
                label: "Durations",
                value: durations,
                icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:clock-circle-bold"
                })
            },
            {
                label: "Contact phone",
                value: tourGuides.map((tourGuide)=>tourGuide.name).join(", "),
                icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:phone-bold"
                })
            }
        ].map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1.5,
                direction: "row",
                children: [
                    item.icon,
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                        primary: item.label,
                        secondary: item.value,
                        primaryTypographyProps: {
                            typography: "body2",
                            color: "text.secondary",
                            mb: 0.5
                        },
                        secondaryTypographyProps: {
                            typography: "subtitle2",
                            color: "text.primary",
                            component: "span"
                        }
                    })
                ]
            }, item.label))
    });
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(markdown/* default */.Z, {
                children: content
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        children: " Services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        rowGap: 2,
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)"
                        },
                        children: _mock/* TOUR_SERVICE_OPTIONS */.Aj.map((service)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                spacing: 1,
                                direction: "row",
                                alignItems: "center",
                                sx: {
                                    ...services.includes(service.label) && {
                                        color: "text.disabled"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "eva:checkmark-circle-2-outline",
                                        sx: {
                                            color: "primary.main",
                                            ...services.includes(service.label) && {
                                                color: "text.disabled"
                                            }
                                        }
                                    }),
                                    service.label
                                ]
                            }, service.label))
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            renderGallery,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                sx: {
                    maxWidth: 720,
                    mx: "auto"
                },
                children: [
                    renderHead,
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            borderStyle: "dashed",
                            my: 5
                        }
                    }),
                    renderOverview,
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            borderStyle: "dashed",
                            my: 5
                        }
                    }),
                    renderContent
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
;// CONCATENATED MODULE: ./src/sections/tour/tour-details-bookers.tsx


// @mui








// components

function TourDetailsBookers({ bookers }) {
    const [approved, setApproved] = (0,react_.useState)([]);
    const handleClick = (0,react_.useCallback)((item)=>{
        const selected = approved.includes(item) ? approved.filter((value)=>value !== item) : [
            ...approved,
            item
        ];
        setApproved(selected);
    }, [
        approved
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        gap: 3,
        display: "grid",
        gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
        },
        children: bookers.map((booker)=>/*#__PURE__*/ jsx_runtime_.jsx(BookerItem, {
                booker: booker,
                selected: approved.includes(booker.id),
                onSelected: ()=>handleClick(booker.id)
            }, booker.id))
    });
}
function BookerItem({ booker, selected, onSelected }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        component: (Card_default()),
        direction: "row",
        spacing: 2,
        sx: {
            p: 3
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                alt: booker.name,
                src: booker.avatarUrl,
                sx: {
                    width: 48,
                    height: 48
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2,
                flexGrow: 1,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                        primary: booker.name,
                        secondary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            direction: "row",
                            alignItems: "center",
                            spacing: 0.5,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "solar:users-group-rounded-bold",
                                    width: 16
                                }),
                                booker.guests,
                                " guests"
                            ]
                        }),
                        secondaryTypographyProps: {
                            mt: 0.5,
                            component: "span",
                            typography: "caption",
                            color: "text.disabled"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        spacing: 1,
                        direction: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                color: "error",
                                sx: {
                                    borderRadius: 1,
                                    bgcolor: (theme)=>(0,styles.alpha)(theme.palette.error.main, 0.08),
                                    "&:hover": {
                                        bgcolor: (theme)=>(0,styles.alpha)(theme.palette.error.main, 0.16)
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    width: 18,
                                    icon: "solar:phone-bold"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                color: "info",
                                sx: {
                                    borderRadius: 1,
                                    bgcolor: (theme)=>(0,styles.alpha)(theme.palette.info.main, 0.08),
                                    "&:hover": {
                                        bgcolor: (theme)=>(0,styles.alpha)(theme.palette.info.main, 0.16)
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    width: 18,
                                    icon: "solar:chat-round-dots-bold"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "small",
                                color: "primary",
                                sx: {
                                    borderRadius: 1,
                                    bgcolor: (theme)=>(0,styles.alpha)(theme.palette.primary.main, 0.08),
                                    "&:hover": {
                                        bgcolor: (theme)=>(0,styles.alpha)(theme.palette.primary.main, 0.16)
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    width: 18,
                                    icon: "fluent:mail-24-filled"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "small",
                variant: selected ? "text" : "outlined",
                color: selected ? "success" : "inherit",
                startIcon: selected ? /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    width: 18,
                    icon: "eva:checkmark-fill",
                    sx: {
                        mr: -0.75
                    }
                }) : null,
                onClick: onSelected,
                children: selected ? "Approved" : "Approve"
            })
        ]
    }, booker.id);
}

;// CONCATENATED MODULE: ./src/sections/tour/view/tour-details-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui



// routes

// _mock

// components


//



function TourDetailsView({ id }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const currentTour = _mock/* _tours */.as.filter((tour)=>tour.id === id)[0];
    const [publish, setPublish] = (0,react_.useState)(currentTour?.publish);
    const [currentTab, setCurrentTab] = (0,react_.useState)("content");
    const handleChangeTab = (0,react_.useCallback)((event, newValue)=>{
        setCurrentTab(newValue);
    }, []);
    const handleChangePublish = (0,react_.useCallback)((newValue)=>{
        setPublish(newValue);
    }, []);
    const renderTabs = /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
        value: currentTab,
        onChange: handleChangeTab,
        sx: {
            mb: {
                xs: 3,
                md: 5
            }
        },
        children: _mock/* TOUR_DETAILS_TABS */.bY.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                iconPosition: "end",
                value: tab.value,
                label: tab.label,
                icon: tab.value === "bookers" ? /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                    variant: "filled",
                    children: currentTour?.bookers.length
                }) : ""
            }, tab.value))
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TourDetailsToolbar, {
                backLink: paths/* paths */.H.dashboard.tour.root,
                editLink: paths/* paths */.H.dashboard.tour.edit(`${currentTour?.id}`),
                liveLink: "#",
                publish: publish || "",
                onChangePublish: handleChangePublish,
                publishOptions: _mock/* TOUR_PUBLISH_OPTIONS */.ie
            }),
            renderTabs,
            currentTab === "content" && /*#__PURE__*/ jsx_runtime_.jsx(TourDetailsContent, {
                tour: currentTour
            }),
            currentTab === "bookers" && /*#__PURE__*/ jsx_runtime_.jsx(TourDetailsBookers, {
                bookers: currentTour?.bookers
            })
        ]
    });
}


/***/ }),

/***/ 83529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TourEditView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99011);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80640);
/* harmony import */ var _tour_new_edit_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60633);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// _mock

// components


//

function TourEditView({ id }) {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_3__/* .useSettingsContext */ .K$)();
    const currentTour = src_mock__WEBPACK_IMPORTED_MODULE_2__/* ._tours */ .as.find((tour)=>tour.id === id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                heading: "Edit",
                links: [
                    {
                        name: "Dashboard",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.root
                    },
                    {
                        name: "Tour",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.tour.root
                    },
                    {
                        name: currentTour?.name
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tour_new_edit_form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                currentTour: currentTour
            })
        ]
    });
}


/***/ }),

/***/ 50020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TourListView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/orderBy.js
var orderBy = __webpack_require__(71723);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/assets/data/index.ts + 1 modules
var data = __webpack_require__(38670);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/empty-content/index.ts + 1 modules
var empty_content = __webpack_require__(78998);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Pagination/index.js
var Pagination = __webpack_require__(53531);
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
// EXTERNAL MODULE: ./src/components/custom-date-range-picker/index.ts + 3 modules
var custom_date_range_picker = __webpack_require__(93662);
;// CONCATENATED MODULE: ./src/sections/tour/tour-item.tsx
// @mui








// routes


// utils


// components




function TourItem({ tour, onView, onEdit, onDelete }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    const { id, name, price, images, bookers, createdAt, available, priceSale, destination, ratingNumber } = tour;
    const shortLabel = (0,custom_date_range_picker/* shortDateLabel */.l2)(available.startDate, available.endDate);
    const renderRating = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            top: 8,
            right: 8,
            zIndex: 9,
            borderRadius: 1,
            position: "absolute",
            p: "2px 6px 2px 4px",
            typography: "subtitle2",
            bgcolor: "warning.lighter"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: "eva:star-fill",
                sx: {
                    color: "warning.main",
                    mr: 0.25
                }
            }),
            " ",
            ratingNumber
        ]
    });
    const renderPrice = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            top: 8,
            left: 8,
            zIndex: 9,
            borderRadius: 1,
            bgcolor: "grey.800",
            position: "absolute",
            p: "2px 6px 2px 4px",
            color: "common.white",
            typography: "subtitle2"
        },
        children: [
            !!priceSale && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    color: "grey.500",
                    mr: 0.25,
                    textDecoration: "line-through"
                },
                children: (0,format_number/* fCurrency */.e_)(priceSale)
            }),
            (0,format_number/* fCurrency */.e_)(price)
        ]
    });
    const renderImages = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 0.5,
        direction: "row",
        sx: {
            p: (theme)=>theme.spacing(1, 1, 0, 1)
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexGrow: 1,
                sx: {
                    position: "relative"
                },
                children: [
                    renderPrice,
                    renderRating,
                    /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                        alt: images[0],
                        src: images[0],
                        sx: {
                            borderRadius: 1,
                            height: 164,
                            width: 1
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                        alt: images[1],
                        src: images[1],
                        ratio: "1/1",
                        sx: {
                            borderRadius: 1,
                            width: 80
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                        alt: images[2],
                        src: images[2],
                        ratio: "1/1",
                        sx: {
                            borderRadius: 1,
                            width: 80
                        }
                    })
                ]
            })
        ]
    });
    const renderTexts = /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
        sx: {
            p: (theme)=>theme.spacing(2.5, 2.5, 2, 2.5)
        },
        primary: `Posted date: ${(0,format_time/* fDateTime */.zM)(createdAt)}`,
        secondary: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            component: components/* RouterLink */.r,
            href: paths/* paths */.H.dashboard.tour.details(id),
            color: "inherit",
            children: name
        }),
        primaryTypographyProps: {
            typography: "caption",
            color: "text.disabled"
        },
        secondaryTypographyProps: {
            mt: 1,
            noWrap: true,
            component: "span",
            color: "text.primary",
            typography: "subtitle1"
        }
    });
    const renderInfo = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1.5,
        sx: {
            position: "relative",
            p: (theme)=>theme.spacing(0, 2.5, 2.5, 2.5)
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: popover.onOpen,
                sx: {
                    position: "absolute",
                    bottom: 20,
                    right: 8
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "eva:more-vertical-fill"
                })
            }),
            [
                {
                    label: destination,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "mingcute:location-fill",
                        sx: {
                            color: "error.main"
                        }
                    })
                },
                {
                    label: shortLabel,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:clock-circle-bold",
                        sx: {
                            color: "info.main"
                        }
                    })
                },
                {
                    label: `${bookers.length} Booked`,
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:users-group-rounded-bold",
                        sx: {
                            color: "primary.main"
                        }
                    })
                }
            ].map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    spacing: 1,
                    direction: "row",
                    alignItems: "center",
                    sx: {
                        typography: "body2"
                    },
                    children: [
                        item.icon,
                        item.label
                    ]
                }, item.label))
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                children: [
                    renderImages,
                    renderTexts,
                    renderInfo
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "right-top",
                sx: {
                    width: 140
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                            onView();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:eye-bold"
                            }),
                            "View"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                            onEdit();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:pen-bold"
                            }),
                            "Edit"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                            onDelete();
                        },
                        sx: {
                            color: "error.main"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:trash-bin-trash-bold"
                            }),
                            "Delete"
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/tour/tour-list.tsx


// @mui


// routes

// components

//

function TourList({ tours }) {
    const router = (0,hooks/* useRouter */.tv)();
    const handleView = (0,react_.useCallback)((id)=>{
        router.push(paths/* paths */.H.dashboard.tour.details(id));
    }, [
        router
    ]);
    const handleEdit = (0,react_.useCallback)((id)=>{
        router.push(paths/* paths */.H.dashboard.tour.edit(id));
    }, [
        router
    ]);
    const handleDelete = (0,react_.useCallback)((id)=>{
        console.info("DELETE", id);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)"
                },
                children: tours.map((tour)=>/*#__PURE__*/ jsx_runtime_.jsx(TourItem, {
                        tour: tour,
                        onView: ()=>handleView(tour.id),
                        onEdit: ()=>handleEdit(tour.id),
                        onDelete: ()=>handleDelete(tour.id)
                    }, tour.id))
            }),
            tours.length > 8 && /*#__PURE__*/ jsx_runtime_.jsx((Pagination_default()), {
                count: 8,
                sx: {
                    mt: 8,
                    [`& .${Pagination.paginationClasses.ul}`]: {
                        justifyContent: "center"
                    }
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/tour/tour-sort.tsx
// @mui




// components


function TourSort({ sort, onSort, sortOptions }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                disableRipple: true,
                color: "inherit",
                onClick: popover.onOpen,
                endIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: popover.open ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"
                }),
                sx: {
                    fontWeight: "fontWeightSemiBold"
                },
                children: [
                    "Sort By:",
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            ml: 0.5,
                            fontWeight: "fontWeightBold",
                            textTransform: "capitalize"
                        },
                        children: sort
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                sx: {
                    width: 140
                },
                children: sortOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        selected: option.value === sort,
                        onClick: ()=>{
                            popover.onClose();
                            onSort(option.value);
                        },
                        children: option.label
                    }, option.value))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/autosuggest-highlight/parse/index.js
var parse = __webpack_require__(41872);
var parse_default = /*#__PURE__*/__webpack_require__.n(parse);
// EXTERNAL MODULE: ./node_modules/autosuggest-highlight/match/index.js
var match = __webpack_require__(2452);
var match_default = /*#__PURE__*/__webpack_require__.n(match);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Autocomplete/index.js
var Autocomplete = __webpack_require__(45003);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete);
// EXTERNAL MODULE: ./src/components/search-not-found/index.ts + 1 modules
var search_not_found = __webpack_require__(271);
;// CONCATENATED MODULE: ./src/sections/tour/tour-search.tsx




// @mui






// routes

// components


function TourSearch({ query, results, onSearch, hrefItem }) {
    const router = (0,hooks/* useRouter */.tv)();
    const handleClick = (id)=>{
        router.push(hrefItem(id));
    };
    const handleKeyUp = (event)=>{
        if (query) {
            if (event.key === "Enter") {
                const selectProduct = results.filter((tour)=>tour.name === query)[0];
                handleClick(selectProduct.id);
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
        sx: {
            width: {
                xs: 1,
                sm: 260
            }
        },
        autoHighlight: true,
        popupIcon: null,
        options: results,
        onInputChange: (event, newValue)=>onSearch(newValue),
        getOptionLabel: (option)=>option.name,
        noOptionsText: /*#__PURE__*/ jsx_runtime_.jsx(search_not_found/* default */.Z, {
            query: query,
            sx: {
                bgcolor: "unset"
            }
        }),
        isOptionEqualToValue: (option, value)=>option.id === value.id,
        slotProps: {
            popper: {
                placement: "bottom-start",
                sx: {
                    minWidth: 320
                }
            },
            paper: {
                sx: {
                    [` .${Autocomplete.autocompleteClasses.option}`]: {
                        pl: 0.75
                    }
                }
            }
        },
        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                ...params,
                placeholder: "Search...",
                onKeyUp: handleKeyUp,
                InputProps: {
                    ...params.InputProps,
                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                        position: "start",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:search-fill",
                            sx: {
                                ml: 1,
                                color: "text.disabled"
                            }
                        })
                    })
                }
            }),
        renderOption: (props, tour, { inputValue })=>{
            const matches = match_default()(tour.name, inputValue);
            const parts = parse_default()(tour.name, matches);
            return /*#__PURE__*/ (0,react_.createElement)(Box["default"], {
                component: "li",
                ...props,
                onClick: ()=>handleClick(tour.id),
                key: tour.id,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: tour.name,
                        src: tour.images[0],
                        variant: "rounded",
                        sx: {
                            width: 48,
                            height: 48,
                            flexShrink: 0,
                            mr: 1.5,
                            borderRadius: 1
                        }
                    }, tour.id),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: parts.map((part, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "span",
                                color: part.highlight ? "primary" : "textPrimary",
                                sx: {
                                    typography: "body2",
                                    fontWeight: part.highlight ? "fontWeightSemiBold" : "fontWeightMedium"
                                },
                                children: part.text
                            }, index))
                    }, inputValue)
                ]
            });
        }
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DatePicker/index.js
var DatePicker = __webpack_require__(71026);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(92133);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(42454);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(20094);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
;// CONCATENATED MODULE: ./src/sections/tour/tour-filters.tsx



// @mui















// components


function TourFilters({ open, onOpen, onClose, //
filters, onFilters, //
canReset, onResetFilters, //
destinationOptions, tourGuideOptions, serviceOptions, //
dateError }) {
    const handleFilterServices = (0,react_.useCallback)((newValue)=>{
        const checked = filters.services.includes(newValue) ? filters.services.filter((value)=>value !== newValue) : [
            ...filters.services,
            newValue
        ];
        onFilters("services", checked);
    }, [
        filters.services,
        onFilters
    ]);
    const handleFilterStartDate = (0,react_.useCallback)((newValue)=>{
        onFilters("startDate", newValue);
    }, [
        onFilters
    ]);
    const handleFilterEndDate = (0,react_.useCallback)((newValue)=>{
        onFilters("endDate", newValue);
    }, [
        onFilters
    ]);
    const handleFilterDestination = (0,react_.useCallback)((newValue)=>{
        onFilters("destination", newValue);
    }, [
        onFilters
    ]);
    const handleFilterTourGuide = (0,react_.useCallback)((newValue)=>{
        onFilters("tourGuides", newValue);
    }, [
        onFilters
    ]);
    const renderHead = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            py: 2,
            pr: 1,
            pl: 2.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    flexGrow: 1
                },
                children: "Filters"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: "Reset",
                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    onClick: onResetFilters,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                        color: "error",
                        variant: "dot",
                        invisible: !canReset,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:restart-bold"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "mingcute:close-line"
                })
            })
        ]
    });
    const renderDateRange = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    mb: 1.5
                },
                children: "Durations"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2.5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "Start date",
                        value: filters.startDate,
                        onChange: handleFilterStartDate
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "End date",
                        value: filters.endDate,
                        onChange: handleFilterEndDate,
                        slotProps: {
                            textField: {
                                error: dateError,
                                helperText: dateError && "End date must be later than start date"
                            }
                        }
                    })
                ]
            })
        ]
    });
    const renderDestination = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    mb: 1.5
                },
                children: "Destination"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                multiple: true,
                disableCloseOnSelect: true,
                options: destinationOptions.map((option)=>option.label),
                getOptionLabel: (option)=>option,
                value: filters.destination,
                onChange: (event, newValue)=>handleFilterDestination(newValue),
                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        placeholder: "Select Destination",
                        ...params
                    }),
                renderOption: (props, option)=>{
                    const { code, label, phone } = destinationOptions.filter((country)=>country.label === option)[0];
                    if (!label) {
                        return null;
                    }
                    return /*#__PURE__*/ (0,react_.createElement)("li", {
                        ...props,
                        key: label,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: `circle-flags:${code.toLowerCase()}`,
                                width: 28,
                                sx: {
                                    mr: 1
                                }
                            }, label),
                            label,
                            " (",
                            code,
                            ") +",
                            phone
                        ]
                    });
                },
                renderTags: (selected, getTagProps)=>selected.map((option, index)=>/*#__PURE__*/ (0,react_.createElement)((Chip_default()), {
                            ...getTagProps({
                                index
                            }),
                            key: option,
                            label: option,
                            size: "small",
                            variant: "soft"
                        }))
            })
        ]
    });
    const renderTourGuide = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    mb: 1.5
                },
                children: "Tour Guide"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                multiple: true,
                disableCloseOnSelect: true,
                options: tourGuideOptions,
                value: filters.tourGuides,
                onChange: (event, newValue)=>handleFilterTourGuide(newValue),
                getOptionLabel: (option)=>option.name,
                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        placeholder: "Select Tour Guides",
                        ...params
                    }),
                renderOption: (props, tourGuide)=>/*#__PURE__*/ (0,react_.createElement)("li", {
                        ...props,
                        key: tourGuide.id,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                alt: tourGuide.avatarUrl,
                                src: tourGuide.avatarUrl,
                                sx: {
                                    width: 24,
                                    height: 24,
                                    flexShrink: 0,
                                    mr: 1
                                }
                            }, tourGuide.id),
                            tourGuide.name
                        ]
                    }),
                renderTags: (selected, getTagProps)=>selected.map((tourGuide, index)=>/*#__PURE__*/ (0,react_.createElement)((Chip_default()), {
                            ...getTagProps({
                                index
                            }),
                            key: tourGuide.id,
                            size: "small",
                            variant: "soft",
                            label: tourGuide.name,
                            avatar: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                alt: tourGuide.name,
                                src: tourGuide.avatarUrl
                            })
                        }))
            })
        ]
    });
    const renderServices = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    mb: 1
                },
                children: "Services"
            }),
            serviceOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                        checked: filters.services.includes(option),
                        onClick: ()=>handleFilterServices(option)
                    }),
                    label: option
                }, option))
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                disableRipple: true,
                color: "inherit",
                endIcon: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                    color: "error",
                    variant: "dot",
                    invisible: !canReset,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "ic:round-filter-list"
                    })
                }),
                onClick: onOpen,
                children: "Filters"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                anchor: "right",
                open: open,
                onClose: onClose,
                slotProps: {
                    backdrop: {
                        invisible: true
                    }
                },
                PaperProps: {
                    sx: {
                        width: 280
                    }
                },
                children: [
                    renderHead,
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                        sx: {
                            px: 2.5,
                            py: 3
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            spacing: 3,
                            children: [
                                renderDateRange,
                                renderDestination,
                                renderTourGuide,
                                renderServices
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
;// CONCATENATED MODULE: ./src/sections/tour/tour-filters-result.tsx
// @mui







// components


function TourFiltersResult({ filters, onFilters, //
canReset, onResetFilters, //
results, ...other }) {
    const shortLabel = (0,custom_date_range_picker/* shortDateLabel */.l2)(filters.startDate, filters.endDate);
    const handleRemoveServices = (inputValue)=>{
        const newValue = filters.services.filter((item)=>item !== inputValue);
        onFilters("services", newValue);
    };
    const handleRemoveAvailable = ()=>{
        onFilters("startDate", null);
        onFilters("endDate", null);
    };
    const handleRemoveTourGuide = (inputValue)=>{
        const newValue = filters.tourGuides.filter((item)=>item.name !== inputValue.name);
        onFilters("tourGuides", newValue);
    };
    const handleRemoveDestination = (inputValue)=>{
        const newValue = filters.destination.filter((item)=>item !== inputValue);
        onFilters("destination", newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1.5,
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    typography: "body2"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: results
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            color: "text.secondary",
                            ml: 0.25
                        },
                        children: "results found"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexGrow: 1,
                spacing: 1,
                direction: "row",
                flexWrap: "wrap",
                alignItems: "center",
                children: [
                    filters.startDate && filters.endDate && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Available:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: shortLabel,
                            onDelete: handleRemoveAvailable
                        })
                    }),
                    !!filters.services.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Services:",
                        children: filters.services.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item,
                                size: "small",
                                onDelete: ()=>handleRemoveServices(item)
                            }, item))
                    }),
                    !!filters.tourGuides.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Tour guide:",
                        children: filters.tourGuides.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                size: "small",
                                avatar: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    alt: item.name,
                                    src: item.avatarUrl
                                }),
                                label: item.name,
                                onDelete: ()=>handleRemoveTourGuide(item)
                            }, item.id))
                    }),
                    !!filters.destination.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Destination:",
                        children: filters.destination.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item,
                                size: "small",
                                onDelete: ()=>handleRemoveDestination(item)
                            }, item))
                    }),
                    canReset && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "error",
                        onClick: onResetFilters,
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:trash-bin-trash-bold"
                        }),
                        children: "Clear"
                    })
                ]
            })
        ]
    });
}
function Block({ label, children, sx, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        component: (Paper_default()),
        variant: "outlined",
        spacing: 1,
        direction: "row",
        sx: {
            p: 1,
            borderRadius: 1,
            overflow: "hidden",
            borderStyle: "dashed",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    typography: "subtitle2"
                },
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                spacing: 1,
                direction: "row",
                flexWrap: "wrap",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/tour/view/tour-list-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui



// routes


// hooks

// utils

// _mock

// assets

// components




//





// ----------------------------------------------------------------------
const defaultFilters = {
    destination: [],
    tourGuides: [],
    services: [],
    startDate: null,
    endDate: null
};
// ----------------------------------------------------------------------
function TourListView() {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const openFilters = (0,use_boolean/* useBoolean */.k)();
    const [sortBy, setSortBy] = (0,react_.useState)("latest");
    const [search, setSearch] = (0,react_.useState)({
        query: "",
        results: []
    });
    const [filters, setFilters] = (0,react_.useState)(defaultFilters);
    const dateError = filters.startDate && filters.endDate ? filters.startDate.getTime() > filters.endDate.getTime() : false;
    const dataFiltered = applyFilter({
        inputData: _mock/* _tours */.as,
        filters,
        sortBy,
        dateError
    });
    const canReset = !!filters.destination.length || !!filters.tourGuides.length || !!filters.services.length || !!filters.startDate && !!filters.endDate;
    const notFound = !dataFiltered.length && canReset;
    const handleFilters = (0,react_.useCallback)((name, value)=>{
        setFilters((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, []);
    const handleSortBy = (0,react_.useCallback)((newValue)=>{
        setSortBy(newValue);
    }, []);
    const handleSearch = (0,react_.useCallback)((inputValue)=>{
        setSearch((prevState)=>({
                ...prevState,
                query: inputValue
            }));
        if (inputValue) {
            const results = _mock/* _tours */.as.filter((tour)=>tour.name.toLowerCase().indexOf(search.query.toLowerCase()) !== -1);
            setSearch((prevState)=>({
                    ...prevState,
                    results
                }));
        }
    }, [
        search.query
    ]);
    const handleResetFilters = (0,react_.useCallback)(()=>{
        setFilters(defaultFilters);
    }, []);
    const renderFilters = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 3,
        justifyContent: "space-between",
        alignItems: {
            xs: "flex-end",
            sm: "center"
        },
        direction: {
            xs: "column",
            sm: "row"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TourSearch, {
                query: search.query,
                results: search.results,
                onSearch: handleSearch,
                hrefItem: (id)=>paths/* paths */.H.dashboard.tour.details(id)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                spacing: 1,
                flexShrink: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TourFilters, {
                        open: openFilters.value,
                        onOpen: openFilters.onTrue,
                        onClose: openFilters.onFalse,
                        //
                        filters: filters,
                        onFilters: handleFilters,
                        //
                        canReset: canReset,
                        onResetFilters: handleResetFilters,
                        //
                        serviceOptions: _mock/* TOUR_SERVICE_OPTIONS */.Aj.map((option)=>option.label),
                        tourGuideOptions: _mock/* _tourGuides */.$r,
                        destinationOptions: data/* countries */.h,
                        //
                        dateError: dateError
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TourSort, {
                        sort: sortBy,
                        onSort: handleSortBy,
                        sortOptions: _mock/* TOUR_SORT_OPTIONS */.f3
                    })
                ]
            })
        ]
    });
    const renderResults = /*#__PURE__*/ jsx_runtime_.jsx(TourFiltersResult, {
        filters: filters,
        onResetFilters: handleResetFilters,
        //
        canReset: canReset,
        onFilters: handleFilters,
        //
        results: dataFiltered.length
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(custom_breadcrumbs/* default */.Z, {
                heading: "List",
                links: [
                    {
                        name: "Dashboard",
                        href: paths/* paths */.H.dashboard.root
                    },
                    {
                        name: "Tour",
                        href: paths/* paths */.H.dashboard.tour.root
                    },
                    {
                        name: "List"
                    }
                ],
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    component: components/* RouterLink */.r,
                    href: paths/* paths */.H.dashboard.tour.new,
                    variant: "contained",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "mingcute:add-line"
                    }),
                    children: "New Tour"
                }),
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2.5,
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    renderFilters,
                    canReset && renderResults
                ]
            }),
            notFound && /*#__PURE__*/ jsx_runtime_.jsx(empty_content/* default */.Z, {
                title: "No Data",
                filled: true,
                sx: {
                    py: 10
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TourList, {
                tours: dataFiltered
            })
        ]
    });
}
// ----------------------------------------------------------------------
const applyFilter = ({ inputData, filters, sortBy, dateError })=>{
    const { services, destination, startDate, endDate, tourGuides } = filters;
    const tourGuideIds = tourGuides.map((tourGuide)=>tourGuide.id);
    // SORT BY
    if (sortBy === "latest") {
        inputData = orderBy_default()(inputData, [
            "createdAt"
        ], [
            "desc"
        ]);
    }
    if (sortBy === "oldest") {
        inputData = orderBy_default()(inputData, [
            "createdAt"
        ], [
            "asc"
        ]);
    }
    if (sortBy === "popular") {
        inputData = orderBy_default()(inputData, [
            "totalViews"
        ], [
            "desc"
        ]);
    }
    // FILTERS
    if (!dateError) {
        if (startDate && endDate) {
            inputData = inputData.filter((tour)=>(0,format_time/* fTimestamp */.IO)(tour.available.startDate) >= (0,format_time/* fTimestamp */.IO)(startDate) && (0,format_time/* fTimestamp */.IO)(tour.available.endDate) <= (0,format_time/* fTimestamp */.IO)(endDate));
        }
    }
    if (destination.length) {
        inputData = inputData.filter((tour)=>destination.includes(tour.destination));
    }
    if (tourGuideIds.length) {
        inputData = inputData.filter((tour)=>tour.tourGuides.some((filterItem)=>tourGuideIds.includes(filterItem.id)));
    }
    if (services.length) {
        inputData = inputData.filter((tour)=>tour.services.some((item)=>services.includes(item)));
    }
    return inputData;
};


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

/***/ 31286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lm: () => (/* reexport */ tour_create_view),
  XJ: () => (/* reexport */ tour_details_view),
  AE: () => (/* reexport */ tour_edit_view),
  J0: () => (/* reexport */ tour_list_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/tour/view/tour-list-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/tour/view/tour-list-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const tour_list_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/tour/view/tour-edit-view.tsx

const tour_edit_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/tour/view/tour-edit-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: tour_edit_view_esModule, $$typeof: tour_edit_view_$$typeof } = tour_edit_view_proxy;
const tour_edit_view_default_ = tour_edit_view_proxy.default;


/* harmony default export */ const tour_edit_view = (tour_edit_view_default_);
;// CONCATENATED MODULE: ./src/sections/tour/view/tour-create-view.tsx

const tour_create_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/tour/view/tour-create-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: tour_create_view_esModule, $$typeof: tour_create_view_$$typeof } = tour_create_view_proxy;
const tour_create_view_default_ = tour_create_view_proxy.default;


/* harmony default export */ const tour_create_view = (tour_create_view_default_);
;// CONCATENATED MODULE: ./src/sections/tour/view/tour-details-view.tsx

const tour_details_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/tour/view/tour-details-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: tour_details_view_esModule, $$typeof: tour_details_view_$$typeof } = tour_details_view_proxy;
const tour_details_view_default_ = tour_details_view_proxy.default;


/* harmony default export */ const tour_details_view = (tour_details_view_default_);
;// CONCATENATED MODULE: ./src/sections/tour/view/index.ts






/***/ })

};
;