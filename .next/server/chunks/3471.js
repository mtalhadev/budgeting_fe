exports.id = 3471;
exports.ids = [3471];
exports.modules = {

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

/***/ })

};
;