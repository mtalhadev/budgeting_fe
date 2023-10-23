exports.id = 7467;
exports.ids = [7467,9215,640,5612,3471,8998,8974,3662,8254];
exports.modules = {

/***/ 9254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85440))

/***/ }),

/***/ 13864:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98154))

/***/ }),

/***/ 79916:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14198));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6323));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6148));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59879))

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

/***/ 78254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ ConfirmDialog)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
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
;// CONCATENATED MODULE: ./src/components/custom-dialog/confirm-dialog.tsx
// @mui






// ----------------------------------------------------------------------
function ConfirmDialog({ title, content, action, open, onClose, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        fullWidth: true,
        maxWidth: "xs",
        open: open,
        onClose: onClose,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                sx: {
                    pb: 2
                },
                children: title
            }),
            content && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                sx: {
                    typography: "body2"
                },
                children: [
                    " ",
                    content,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                children: [
                    action,
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "outlined",
                        color: "inherit",
                        onClick: onClose,
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/custom-dialog/index.ts



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

/***/ 48974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $W: () => (/* reexport */ TableEmptyRows),
  K: () => (/* reexport */ TableHeadCustom),
  et: () => (/* reexport */ TableNoData),
  S_: () => (/* reexport */ TablePaginationCustom),
  Z4: () => (/* reexport */ TableSelectedAction),
  hM: () => (/* reexport */ TableSkeleton),
  fQ: () => (/* reexport */ emptyRows),
  sQ: () => (/* reexport */ getComparator),
  x6: () => (/* reexport */ useTable)
});

;// CONCATENATED MODULE: ./src/components/table/utils.ts
// ----------------------------------------------------------------------
function emptyRows(page, rowsPerPage, arrayLength) {
    return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}
function descendingComparator(a, b, orderBy) {
    if (a[orderBy] === null) {
        return 1;
    }
    if (b[orderBy] === null) {
        return -1;
    }
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === "desc" ? (a, b)=>descendingComparator(a, b, orderBy) : (a, b)=>-descendingComparator(a, b, orderBy);
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/table/use-table.ts

function useTable(props) {
    const [dense, setDense] = (0,react_.useState)(!!props?.defaultDense);
    const [page, setPage] = (0,react_.useState)(props?.defaultCurrentPage || 0);
    const [orderBy, setOrderBy] = (0,react_.useState)(props?.defaultOrderBy || "name");
    const [rowsPerPage, setRowsPerPage] = (0,react_.useState)(props?.defaultRowsPerPage || 5);
    const [order, setOrder] = (0,react_.useState)(props?.defaultOrder || "asc");
    const [selected, setSelected] = (0,react_.useState)(props?.defaultSelected || []);
    const onSort = (0,react_.useCallback)((id)=>{
        const isAsc = orderBy === id && order === "asc";
        if (id !== "") {
            setOrder(isAsc ? "desc" : "asc");
            setOrderBy(id);
        }
    }, [
        order,
        orderBy
    ]);
    const onSelectRow = (0,react_.useCallback)((inputValue)=>{
        const newSelected = selected.includes(inputValue) ? selected.filter((value)=>value !== inputValue) : [
            ...selected,
            inputValue
        ];
        setSelected(newSelected);
    }, [
        selected
    ]);
    const onChangeRowsPerPage = (0,react_.useCallback)((event)=>{
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    }, []);
    const onChangeDense = (0,react_.useCallback)((event)=>{
        setDense(event.target.checked);
    }, []);
    const onSelectAllRows = (0,react_.useCallback)((checked, inputValue)=>{
        if (checked) {
            setSelected(inputValue);
            return;
        }
        setSelected([]);
    }, []);
    const onChangePage = (0,react_.useCallback)((event, newPage)=>{
        setPage(newPage);
    }, []);
    const onResetPage = (0,react_.useCallback)(()=>{
        setPage(0);
    }, []);
    const onUpdatePageDeleteRow = (0,react_.useCallback)((totalRowsInPage)=>{
        setSelected([]);
        if (page) {
            if (totalRowsInPage < 2) {
                setPage(page - 1);
            }
        }
    }, [
        page
    ]);
    const onUpdatePageDeleteRows = (0,react_.useCallback)(({ totalRows, totalRowsInPage, totalRowsFiltered })=>{
        const totalSelected = selected.length;
        setSelected([]);
        if (page) {
            if (totalSelected === totalRowsInPage) {
                setPage(page - 1);
            } else if (totalSelected === totalRowsFiltered) {
                setPage(0);
            } else if (totalSelected > totalRowsInPage) {
                const newPage = Math.ceil((totalRows - totalSelected) / rowsPerPage) - 1;
                setPage(newPage);
            }
        }
    }, [
        page,
        rowsPerPage,
        selected.length
    ]);
    return {
        dense,
        order,
        page,
        orderBy,
        rowsPerPage,
        //
        selected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        onChangePage,
        onChangeDense,
        onResetPage,
        onChangeRowsPerPage,
        onUpdatePageDeleteRow,
        onUpdatePageDeleteRows,
        //
        setPage,
        setDense,
        setOrder,
        setOrderBy,
        setSelected,
        setRowsPerPage
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableRow/index.js
var TableRow = __webpack_require__(44233);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableCell/index.js
var TableCell = __webpack_require__(80765);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell);
// EXTERNAL MODULE: ./src/components/empty-content/index.ts + 1 modules
var empty_content = __webpack_require__(78998);
;// CONCATENATED MODULE: ./src/components/table/table-no-data.tsx
// @mui



//

function TableNoData({ notFound, sx }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
        children: notFound ? /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 12,
            children: /*#__PURE__*/ jsx_runtime_.jsx(empty_content/* default */.Z, {
                filled: true,
                title: "No Data",
                sx: {
                    py: 10,
                    ...sx
                }
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 12,
            sx: {
                p: 0
            }
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Skeleton/index.js
var Skeleton = __webpack_require__(10413);
var Skeleton_default = /*#__PURE__*/__webpack_require__.n(Skeleton);
;// CONCATENATED MODULE: ./src/components/table/table-skeleton.tsx
// @mui





// ----------------------------------------------------------------------
function TableSkeleton({ ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
        ...other,
        children: /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 12,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                direction: "row",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            borderRadius: 1.5,
                            width: 48,
                            height: 48,
                            flexShrink: 0
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 1,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 180,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 160,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 140,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 120,
                            height: 12
                        }
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/table/table-empty-rows.tsx
// @mui



function TableEmptyRows({ emptyRows, height }) {
    if (!emptyRows) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
        sx: {
            ...height && {
                height: height * emptyRows
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 9
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableHead/index.js
var TableHead = __webpack_require__(70138);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableSortLabel/index.js
var TableSortLabel = __webpack_require__(13495);
var TableSortLabel_default = /*#__PURE__*/__webpack_require__.n(TableSortLabel);
;// CONCATENATED MODULE: ./src/components/table/table-head-custom.tsx
// @mui







// ----------------------------------------------------------------------
const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: "1px",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    clip: "rect(0 0 0 0)"
};
function TableHeadCustom({ order, orderBy, rowCount = 0, headLabel, numSelected = 0, onSort, onSelectAllRows, sx }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
        sx: sx,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
            children: [
                onSelectAllRows && /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                    padding: "checkbox",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                        indeterminate: !!numSelected && numSelected < rowCount,
                        checked: !!rowCount && numSelected === rowCount,
                        onChange: (event)=>onSelectAllRows(event.target.checked)
                    })
                }),
                headLabel.map((headCell)=>/*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        align: headCell.align || "left",
                        sortDirection: orderBy === headCell.id ? order : false,
                        sx: {
                            width: headCell.width,
                            minWidth: headCell.minWidth
                        },
                        children: onSort ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableSortLabel_default()), {
                            hideSortIcon: true,
                            active: orderBy === headCell.id,
                            direction: orderBy === headCell.id ? order : "asc",
                            onClick: ()=>onSort(headCell.id),
                            children: [
                                headCell.label,
                                orderBy === headCell.id ? /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                    sx: {
                                        ...visuallyHidden
                                    },
                                    children: order === "desc" ? "sorted descending" : "sorted ascending"
                                }) : null
                            ]
                        }) : headCell.label
                    }, headCell.id))
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
;// CONCATENATED MODULE: ./src/components/table/table-selected-action.tsx
// @mui




function TableSelectedAction({ dense, action, rowCount, numSelected, onSelectAllRows, sx, ...other }) {
    if (!numSelected) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            pl: 1,
            pr: 2,
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9,
            height: 58,
            position: "absolute",
            bgcolor: "primary.lighter",
            ...dense && {
                height: 38
            },
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                indeterminate: !!numSelected && numSelected < rowCount,
                checked: !!rowCount && numSelected === rowCount,
                onChange: (event)=>onSelectAllRows(event.target.checked)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    ml: 2,
                    flexGrow: 1,
                    color: "primary.main",
                    ...dense && {
                        ml: 3
                    }
                },
                children: [
                    numSelected,
                    " selected"
                ]
            }),
            action && action
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var Switch = __webpack_require__(56703);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TablePagination/index.js
var TablePagination = __webpack_require__(15061);
var TablePagination_default = /*#__PURE__*/__webpack_require__.n(TablePagination);
;// CONCATENATED MODULE: ./src/components/table/table-pagination-custom.tsx
// @mui





function TablePaginationCustom({ dense, onChangeDense, rowsPerPageOptions = [
    5,
    10,
    25
], sx, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            position: "relative",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((TablePagination_default()), {
                rowsPerPageOptions: rowsPerPageOptions,
                component: "div",
                ...other,
                sx: {
                    borderTopColor: "transparent"
                }
            }),
            onChangeDense && /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                label: "Dense",
                control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                    checked: dense,
                    onChange: onChangeDense
                }),
                sx: {
                    pl: 2,
                    py: 1.5,
                    top: 0,
                    position: {
                        sm: "absolute"
                    }
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/table/index.ts











/***/ }),

/***/ 16236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Uo: () => (/* reexport */ AddressItem),
  IJ: () => (/* reexport */ AddressListDialog),
  oq: () => (/* reexport */ AddressNewForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
;// CONCATENATED MODULE: ./src/sections/address/address-item.tsx
// @mui





// components

function AddressItem({ address, action, sx, ...other }) {
    const { name, fullAddress, addressType, phoneNumber, primary } = address;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        component: (Paper_default()),
        spacing: 2,
        alignItems: {
            md: "flex-end"
        },
        direction: {
            xs: "column",
            md: "row"
        },
        sx: {
            position: "relative",
            ...sx
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexGrow: 1,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                variant: "subtitle2",
                                children: [
                                    name,
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                        component: "span",
                                        sx: {
                                            ml: 0.5,
                                            typography: "body2",
                                            color: "text.secondary"
                                        },
                                        children: [
                                            "(",
                                            addressType,
                                            ")"
                                        ]
                                    })
                                ]
                            }),
                            primary && /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                color: "info",
                                sx: {
                                    ml: 1
                                },
                                children: "Default"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: fullAddress
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: phoneNumber
                    })
                ]
            }),
            action && action
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/yup/index.js
var yup = __webpack_require__(50298);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var dist_yup = __webpack_require__(57086);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
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
// EXTERNAL MODULE: ./src/assets/data/index.ts + 1 modules
var data = __webpack_require__(38670);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/hook-form/index.ts + 11 modules
var hook_form = __webpack_require__(29189);
;// CONCATENATED MODULE: ./src/sections/address/address-new-form.tsx





// @mui








// assets

// components


function AddressNewForm({ open, onClose, onCreate }) {
    const NewAddressSchema = yup/* object */.Ry().shape({
        name: yup/* string */.Z_().required("Fullname is required"),
        phoneNumber: yup/* string */.Z_().required("Phone number is required"),
        address: yup/* string */.Z_().required("Address is required"),
        city: yup/* string */.Z_().required("City is required"),
        state: yup/* string */.Z_().required("State is required"),
        country: yup/* string */.Z_().required("Country is required"),
        zipCode: yup/* string */.Z_().required("Zip code is required"),
        // not required
        addressType: yup/* string */.Z_(),
        primary: yup/* boolean */.O7()
    });
    const defaultValues = {
        name: "",
        city: "",
        state: "",
        address: "",
        zipCode: "",
        primary: true,
        phoneNumber: "",
        addressType: "Home",
        country: ""
    };
    const methods = (0,index_esm/* useForm */.cI)({
        resolver: (0,dist_yup/* yupResolver */.X)(NewAddressSchema),
        defaultValues
    });
    const { handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            onCreate({
                name: data.name,
                phoneNumber: data.phoneNumber,
                fullAddress: `${data.address}, ${data.city}, ${data.state}, ${data.country}, ${data.zipCode}`,
                addressType: data.addressType,
                primary: data.primary
            });
            onClose();
        } catch (error) {
            console.error(error);
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
        fullWidth: true,
        maxWidth: "sm",
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hook_form/* default */.ZP, {
            methods: methods,
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                    children: "New address"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                    dividers: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFRadioGroup */.km, {
                                row: true,
                                name: "addressType",
                                options: [
                                    {
                                        label: "Home",
                                        value: "Home"
                                    },
                                    {
                                        label: "Office",
                                        value: "Office"
                                    }
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                rowGap: 3,
                                columnGap: 2,
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(1, 1fr)",
                                    sm: "repeat(2, 1fr)"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        name: "name",
                                        label: "Full Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        name: "phoneNumber",
                                        label: "Phone Number"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                name: "address",
                                label: "Address"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                rowGap: 3,
                                columnGap: 2,
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(1, 1fr)",
                                    sm: "repeat(3, 1fr)"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        name: "city",
                                        label: "Town / City"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        name: "state",
                                        label: "State"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        name: "zipCode",
                                        label: "Zip/Code"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFAutocomplete */.Fl, {
                                name: "country",
                                label: "Country",
                                options: data/* countries */.h.map((country)=>country.label),
                                getOptionLabel: (option)=>option,
                                renderOption: (props, option)=>{
                                    const { code, label, phone } = data/* countries */.h.filter((country)=>country.label === option)[0];
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
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFCheckbox */.jb, {
                                name: "primary",
                                label: "Use this address as default."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            color: "inherit",
                            variant: "outlined",
                            onClick: onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                            type: "submit",
                            variant: "contained",
                            loading: isSubmitting,
                            children: "Deliver to this Address"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(19868);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
// EXTERNAL MODULE: ./src/components/search-not-found/index.ts + 1 modules
var search_not_found = __webpack_require__(271);
;// CONCATENATED MODULE: ./src/sections/address/address-list-dialog.tsx


// @mui







// components



function AddressListDialog({ title = "Address Book", list, action, //
open, onClose, //
selected, onSelect }) {
    const [searchAddress, setSearchAddress] = (0,react_.useState)("");
    const dataFiltered = applyFilter({
        inputData: list,
        query: searchAddress
    });
    const notFound = !dataFiltered.length && !!searchAddress;
    const handleSearchAddress = (0,react_.useCallback)((event)=>{
        setSearchAddress(event.target.value);
    }, []);
    const handleSelectAddress = (0,react_.useCallback)((address)=>{
        onSelect(address);
        setSearchAddress("");
        onClose();
    }, [
        onClose,
        onSelect
    ]);
    const renderList = /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        spacing: 0.5,
        sx: {
            p: 0.5,
            maxHeight: 80 * 8,
            overflowX: "hidden"
        },
        children: dataFiltered.map((address)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 0.5,
                component: (ListItemButton_default()),
                selected: selected(`${address.id}`),
                onClick: ()=>handleSelectAddress(address),
                sx: {
                    py: 1,
                    px: 1.5,
                    borderRadius: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    [`&.${ListItemButton.listItemButtonClasses.selected}`]: {
                        bgcolor: "action.selected",
                        "&:hover": {
                            bgcolor: "action.selected"
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle2",
                                children: address.name
                            }),
                            address.primary && /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                color: "info",
                                children: "Default"
                            })
                        ]
                    }),
                    address.company && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "primary.main",
                            typography: "caption"
                        },
                        children: address.company
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: address.fullAddress
                    }),
                    address.phoneNumber && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: address.phoneNumber
                    })
                ]
            }, address.id))
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        fullWidth: true,
        maxWidth: "xs",
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: {
                    p: 3,
                    pr: 1.5
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "h6",
                        children: [
                            " ",
                            title,
                            " "
                        ]
                    }),
                    action && action
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                sx: {
                    p: 2,
                    pt: 0
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    value: searchAddress,
                    onChange: handleSearchAddress,
                    placeholder: "Search...",
                    InputProps: {
                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                            position: "start",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:search-fill",
                                sx: {
                                    color: "text.disabled"
                                }
                            })
                        })
                    }
                })
            }),
            notFound ? /*#__PURE__*/ jsx_runtime_.jsx(search_not_found/* default */.Z, {
                query: searchAddress,
                sx: {
                    px: 3,
                    pt: 5,
                    pb: 10
                }
            }) : renderList
        ]
    });
}
// ----------------------------------------------------------------------
function applyFilter({ inputData, query }) {
    if (query) {
        return inputData.filter((address)=>address.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || address.fullAddress.toLowerCase().indexOf(query.toLowerCase()) !== -1 || `${address.company}`.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return inputData;
}

;// CONCATENATED MODULE: ./src/sections/address/index.ts





/***/ }),

/***/ 34992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ InvoiceNewEditForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/yup/index.js
var yup = __webpack_require__(50298);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var dist_yup = __webpack_require__(57086);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/components/hook-form/index.ts + 11 modules
var hook_form = __webpack_require__(29189);
// EXTERNAL MODULE: ./node_modules/lodash/sum.js
var sum = __webpack_require__(43622);
var sum_default = /*#__PURE__*/__webpack_require__.n(sum);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputBase/index.js
var InputBase = __webpack_require__(73392);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-new-edit-details.tsx




// @mui








// utils

// _mock

// components


// ----------------------------------------------------------------------
function InvoiceNewEditDetails() {
    const { control, setValue, watch, resetField } = (0,index_esm/* useFormContext */.Gc)();
    const { fields, append, remove } = (0,index_esm/* useFieldArray */.Dq)({
        control,
        name: "items"
    });
    const values = watch();
    const totalOnRow = values.items.map((item)=>item.quantity * item.price);
    const subTotal = sum_default()(totalOnRow);
    const totalAmount = subTotal - values.discount - values.shipping + values.taxes;
    (0,react_.useEffect)(()=>{
        setValue("totalAmount", totalAmount);
    }, [
        setValue,
        totalAmount
    ]);
    const handleAdd = ()=>{
        append({
            title: "",
            description: "",
            service: "",
            quantity: 1,
            price: 0,
            total: 0
        });
    };
    const handleRemove = (index)=>{
        remove(index);
    };
    const handleClearService = (0,react_.useCallback)((index)=>{
        resetField(`items[${index}].quantity`);
        resetField(`items[${index}].price`);
        resetField(`items[${index}].total`);
    }, [
        resetField
    ]);
    const handleSelectService = (0,react_.useCallback)((index, option)=>{
        setValue(`items[${index}].price`, _mock/* INVOICE_SERVICE_OPTIONS */.PI.find((service)=>service.name === option)?.price);
        setValue(`items[${index}].total`, values.items.map((item)=>item.quantity * item.price)[index]);
    }, [
        setValue,
        values.items
    ]);
    const handleChangeQuantity = (0,react_.useCallback)((event, index)=>{
        setValue(`items[${index}].quantity`, Number(event.target.value));
        setValue(`items[${index}].total`, values.items.map((item)=>item.quantity * item.price)[index]);
    }, [
        setValue,
        values.items
    ]);
    const handleChangePrice = (0,react_.useCallback)((event, index)=>{
        setValue(`items[${index}].price`, Number(event.target.value));
        setValue(`items[${index}].total`, values.items.map((item)=>item.quantity * item.price)[index]);
    }, [
        setValue,
        values.items
    ]);
    const renderTotal = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        alignItems: "flex-end",
        sx: {
            mt: 3,
            textAlign: "right",
            typography: "body2"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Subtotal"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160,
                            typography: "subtitle2"
                        },
                        children: (0,format_number/* fCurrency */.e_)(subTotal) || "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Shipping"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160,
                            ...values.shipping && {
                                color: "error.main"
                            }
                        },
                        children: values.shipping ? `- ${(0,format_number/* fCurrency */.e_)(values.shipping)}` : "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Discount"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160,
                            ...values.discount && {
                                color: "error.main"
                            }
                        },
                        children: values.discount ? `- ${(0,format_number/* fCurrency */.e_)(values.discount)}` : "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Taxes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160
                        },
                        children: values.taxes ? (0,format_number/* fCurrency */.e_)(values.taxes) : "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                sx: {
                    typography: "subtitle1"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        children: "Total"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160
                        },
                        children: (0,format_number/* fCurrency */.e_)(totalAmount) || "-"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            p: 3
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    color: "text.disabled",
                    mb: 3
                },
                children: "Details:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                divider: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                    flexItem: true,
                    sx: {
                        borderStyle: "dashed"
                    }
                }),
                spacing: 3,
                children: fields.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        alignItems: "flex-end",
                        spacing: 1.5,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: {
                                    xs: "column",
                                    md: "row"
                                },
                                spacing: 2,
                                sx: {
                                    width: 1
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        size: "small",
                                        name: `items[${index}].title`,
                                        label: "Title",
                                        InputLabelProps: {
                                            shrink: true
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        size: "small",
                                        name: `items[${index}].description`,
                                        label: "Description",
                                        InputLabelProps: {
                                            shrink: true
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hook_form/* RHFSelect */.Cc, {
                                        name: `items[${index}].service`,
                                        size: "small",
                                        label: "Service",
                                        InputLabelProps: {
                                            shrink: true
                                        },
                                        sx: {
                                            maxWidth: {
                                                md: 160
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                value: "",
                                                onClick: ()=>handleClearService(index),
                                                sx: {
                                                    fontStyle: "italic",
                                                    color: "text.secondary"
                                                },
                                                children: "None"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                sx: {
                                                    borderStyle: "dashed"
                                                }
                                            }),
                                            _mock/* INVOICE_SERVICE_OPTIONS */.PI.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: service.name,
                                                    onClick: ()=>handleSelectService(index, service.name),
                                                    children: service.name
                                                }, service.id))
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        size: "small",
                                        type: "number",
                                        name: `items[${index}].quantity`,
                                        label: "Quantity",
                                        placeholder: "0",
                                        onChange: (event)=>handleChangeQuantity(event, index),
                                        InputLabelProps: {
                                            shrink: true
                                        },
                                        sx: {
                                            maxWidth: {
                                                md: 96
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        size: "small",
                                        type: "number",
                                        name: `items[${index}].price`,
                                        label: "Price",
                                        placeholder: "0.00",
                                        onChange: (event)=>handleChangePrice(event, index),
                                        InputProps: {
                                            startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                position: "start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                                    sx: {
                                                        typography: "subtitle2",
                                                        color: "text.disabled"
                                                    },
                                                    children: "$"
                                                })
                                            })
                                        },
                                        sx: {
                                            maxWidth: {
                                                md: 96
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                        disabled: true,
                                        size: "small",
                                        type: "number",
                                        name: `items[${index}].total`,
                                        label: "Total",
                                        placeholder: "0.00",
                                        value: values.items[index].total === 0 ? "" : values.items[index].total.toFixed(2),
                                        onChange: (event)=>handleChangePrice(event, index),
                                        InputProps: {
                                            startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                position: "start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                                    sx: {
                                                        typography: "subtitle2",
                                                        color: "text.disabled"
                                                    },
                                                    children: "$"
                                                })
                                            })
                                        },
                                        sx: {
                                            maxWidth: {
                                                md: 104
                                            },
                                            [`& .${InputBase.inputBaseClasses.input}`]: {
                                                textAlign: {
                                                    md: "right"
                                                }
                                            }
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "small",
                                color: "error",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "solar:trash-bin-trash-bold"
                                }),
                                onClick: ()=>handleRemove(index),
                                children: "Remove"
                            })
                        ]
                    }, item.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    my: 3,
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                direction: {
                    xs: "column",
                    md: "row"
                },
                alignItems: {
                    xs: "flex-end",
                    md: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "small",
                        color: "primary",
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "mingcute:add-line"
                        }),
                        onClick: handleAdd,
                        sx: {
                            flexShrink: 0
                        },
                        children: "Add Item"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        spacing: 2,
                        justifyContent: "flex-end",
                        direction: {
                            xs: "column",
                            md: "row"
                        },
                        sx: {
                            width: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                size: "small",
                                label: "Shipping($)",
                                name: "shipping",
                                type: "number",
                                sx: {
                                    maxWidth: {
                                        md: 120
                                    }
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                size: "small",
                                label: "Discount($)",
                                name: "discount",
                                type: "number",
                                sx: {
                                    maxWidth: {
                                        md: 120
                                    }
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                size: "small",
                                label: "Taxes(%)",
                                name: "taxes",
                                type: "number",
                                sx: {
                                    maxWidth: {
                                        md: 120
                                    }
                                }
                            })
                        ]
                    })
                ]
            }),
            renderTotal
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
// EXTERNAL MODULE: ./src/sections/address/index.ts + 3 modules
var address = __webpack_require__(16236);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-new-edit-address.tsx


// @mui





// hooks


// _mock

// components

//

// ----------------------------------------------------------------------
function InvoiceNewEditAddress() {
    const { watch, setValue, formState: { errors } } = (0,index_esm/* useFormContext */.Gc)();
    const upMd = (0,use_responsive/* useResponsive */.F)("up", "md");
    const values = watch();
    const { invoiceFrom, invoiceTo } = values;
    const from = (0,use_boolean/* useBoolean */.k)();
    const to = (0,use_boolean/* useBoolean */.k)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: {
                    xs: 3,
                    md: 5
                },
                direction: {
                    xs: "column",
                    md: "row"
                },
                divider: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                    flexItem: true,
                    orientation: upMd ? "vertical" : "horizontal",
                    sx: {
                        borderStyle: "dashed"
                    }
                }),
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        sx: {
                            width: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: "row",
                                alignItems: "center",
                                sx: {
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            color: "text.disabled",
                                            flexGrow: 1
                                        },
                                        children: "From:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        onClick: from.onTrue,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                            icon: "solar:pen-bold"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        children: invoiceFrom.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: invoiceFrom.fullAddress
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        variant: "body2",
                                        children: [
                                            " ",
                                            invoiceFrom.phoneNumber
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        sx: {
                            width: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: "row",
                                alignItems: "center",
                                sx: {
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            color: "text.disabled",
                                            flexGrow: 1
                                        },
                                        children: "To:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        onClick: to.onTrue,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                            icon: invoiceTo ? "solar:pen-bold" : "mingcute:add-line"
                                        })
                                    })
                                ]
                            }),
                            invoiceTo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        children: invoiceTo.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        children: invoiceTo.fullAddress
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        variant: "body2",
                                        children: [
                                            " ",
                                            invoiceTo.phoneNumber
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                typography: "caption",
                                sx: {
                                    color: "error.main"
                                },
                                children: errors.invoiceTo?.message
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(address/* AddressListDialog */.IJ, {
                title: "Customers",
                open: from.value,
                onClose: from.onFalse,
                selected: (selectedId)=>invoiceFrom?.id === selectedId,
                onSelect: (address)=>setValue("invoiceFrom", address),
                list: _mock/* _addressBooks */.PX,
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    size: "small",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "mingcute:add-line"
                    }),
                    sx: {
                        alignSelf: "flex-end"
                    },
                    children: "New"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(address/* AddressListDialog */.IJ, {
                title: "Customers",
                open: to.value,
                onClose: to.onFalse,
                selected: (selectedId)=>invoiceTo?.id === selectedId,
                onSelect: (address)=>setValue("invoiceTo", address),
                list: _mock/* _addressBooks */.PX,
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    size: "small",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "mingcute:add-line"
                    }),
                    sx: {
                        alignSelf: "flex-end"
                    },
                    children: "New"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DatePicker/index.js
var DatePicker = __webpack_require__(71026);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-new-edit-status-date.tsx


// @mui



// components

// ----------------------------------------------------------------------
function InvoiceNewEditStatusDate() {
    const { control, watch } = (0,index_esm/* useFormContext */.Gc)();
    const values = watch();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        direction: {
            xs: "column",
            sm: "row"
        },
        sx: {
            p: 3,
            bgcolor: "background.neutral"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                disabled: true,
                name: "invoiceNumber",
                label: "Invoice number",
                value: values.invoiceNumber
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFSelect */.Cc, {
                fullWidth: true,
                name: "status",
                label: "Status",
                InputLabelProps: {
                    shrink: true
                },
                PaperPropsSx: {
                    textTransform: "capitalize"
                },
                children: [
                    "paid",
                    "pending",
                    "overdue",
                    "draft"
                ].map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        value: option,
                        children: option
                    }, option))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* Controller */.Qr, {
                name: "createDate",
                control: control,
                render: ({ field, fieldState: { error } })=>/*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "Date create",
                        value: field.value,
                        onChange: (newValue)=>{
                            field.onChange(newValue);
                        },
                        slotProps: {
                            textField: {
                                fullWidth: true,
                                error: !!error,
                                helperText: error?.message
                            }
                        }
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* Controller */.Qr, {
                name: "dueDate",
                control: control,
                render: ({ field, fieldState: { error } })=>/*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "Due date",
                        value: field.value,
                        onChange: (newValue)=>{
                            field.onChange(newValue);
                        },
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
    });
}

;// CONCATENATED MODULE: ./src/sections/invoice/invoice-new-edit-form.tsx





// @mui



// routes


// _mock

// hooks

// components

//



function InvoiceNewEditForm({ currentInvoice }) {
    const router = (0,hooks/* useRouter */.tv)();
    const loadingSave = (0,use_boolean/* useBoolean */.k)();
    const loadingSend = (0,use_boolean/* useBoolean */.k)();
    const NewInvoiceSchema = yup/* object */.Ry().shape({
        invoiceTo: yup/* mixed */.nK().nullable().required("Invoice to is required"),
        createDate: yup/* mixed */.nK().nullable().required("Create date is required"),
        dueDate: yup/* mixed */.nK().required("Due date is required").test("date-min", "Due date must be later than create date", (value, { parent })=>value.getTime() > parent.createDate.getTime()),
        // not required
        taxes: yup/* number */.Rx(),
        status: yup/* string */.Z_(),
        discount: yup/* number */.Rx(),
        shipping: yup/* number */.Rx(),
        invoiceFrom: yup/* mixed */.nK(),
        totalAmount: yup/* number */.Rx(),
        invoiceNumber: yup/* string */.Z_()
    });
    const defaultValues = (0,react_.useMemo)(()=>({
            invoiceNumber: currentInvoice?.invoiceNumber || "INV-1990",
            createDate: currentInvoice?.createDate || new Date(),
            dueDate: currentInvoice?.dueDate || null,
            taxes: currentInvoice?.taxes || 0,
            shipping: currentInvoice?.shipping || 0,
            status: currentInvoice?.status || "draft",
            discount: currentInvoice?.discount || 0,
            invoiceFrom: currentInvoice?.invoiceFrom || _mock/* _addressBooks */.PX[0],
            invoiceTo: currentInvoice?.invoiceTo || null,
            items: currentInvoice?.items || [
                {
                    title: "",
                    description: "",
                    service: "",
                    quantity: 1,
                    price: 0,
                    total: 0
                }
            ],
            totalAmount: currentInvoice?.totalAmount || 0
        }), [
        currentInvoice
    ]);
    const methods = (0,index_esm/* useForm */.cI)({
        resolver: (0,dist_yup/* yupResolver */.X)(NewInvoiceSchema),
        defaultValues
    });
    const { reset, handleSubmit, formState: { isSubmitting } } = methods;
    const handleSaveAsDraft = handleSubmit(async (data)=>{
        loadingSave.onTrue();
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            loadingSave.onFalse();
            router.push(paths/* paths */.H.dashboard.invoice.root);
            console.info("DATA", JSON.stringify(data, null, 2));
        } catch (error) {
            console.error(error);
            loadingSave.onFalse();
        }
    });
    const handleCreateAndSend = handleSubmit(async (data)=>{
        loadingSend.onTrue();
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            loadingSend.onFalse();
            router.push(paths/* paths */.H.dashboard.invoice.root);
            console.info("DATA", JSON.stringify(data, null, 2));
        } catch (error) {
            console.error(error);
            loadingSend.onFalse();
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hook_form/* default */.ZP, {
        methods: methods,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceNewEditAddress, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceNewEditStatusDate, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceNewEditDetails, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                justifyContent: "flex-end",
                direction: "row",
                spacing: 2,
                sx: {
                    mt: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                        color: "inherit",
                        size: "large",
                        variant: "outlined",
                        loading: loadingSave.value && isSubmitting,
                        onClick: handleSaveAsDraft,
                        children: "Save as Draft"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((LoadingButton_default()), {
                        size: "large",
                        variant: "contained",
                        loading: loadingSend.value && isSubmitting,
                        onClick: handleCreateAndSend,
                        children: [
                            currentInvoice ? "Update" : "Create",
                            " & Send"
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvoiceCreateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80640);
/* harmony import */ var _invoice_new_edit_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34992);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// components


//

// ----------------------------------------------------------------------
function InvoiceCreateView() {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSettingsContext */ .K$)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                heading: "Create a new invoice",
                links: [
                    {
                        name: "Dashboard",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.root
                    },
                    {
                        name: "Invoice",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.invoice.root
                    },
                    {
                        name: "New Invoice"
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_invoice_new_edit_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 59879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InvoiceDetailsView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Table/index.js
var Table = __webpack_require__(77523);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableRow/index.js
var TableRow = __webpack_require__(44233);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableHead/index.js
var TableHead = __webpack_require__(70138);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableCell/index.js
var TableCell = __webpack_require__(80765);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableBody/index.js
var TableBody = __webpack_require__(24608);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Unstable_Grid2/index.js
var Unstable_Grid2 = __webpack_require__(26566);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableContainer/index.js
var TableContainer = __webpack_require__(68101);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./node_modules/@react-pdf/renderer/lib/react-pdf.cjs.js
var react_pdf_cjs = __webpack_require__(63409);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(62969);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogActions/index.js
var DialogActions = __webpack_require__(95915);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CircularProgress/index.js
var CircularProgress = __webpack_require__(99360);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-pdf.tsx



// utils


// ----------------------------------------------------------------------
react_pdf_cjs.Font.register({
    family: "Roboto",
    fonts: [
        {
            src: "/fonts/Roboto-Regular.ttf"
        },
        {
            src: "/fonts/Roboto-Bold.ttf"
        }
    ]
});
const useStyles = ()=>(0,react_.useMemo)(()=>react_pdf_cjs.StyleSheet.create({
            col4: {
                width: "25%"
            },
            col8: {
                width: "75%"
            },
            col6: {
                width: "50%"
            },
            mb4: {
                marginBottom: 4
            },
            mb8: {
                marginBottom: 8
            },
            mb40: {
                marginBottom: 40
            },
            h3: {
                fontSize: 16,
                fontWeight: 700
            },
            h4: {
                fontSize: 13,
                fontWeight: 700
            },
            body1: {
                fontSize: 10
            },
            body2: {
                fontSize: 9
            },
            subtitle1: {
                fontSize: 10,
                fontWeight: 700
            },
            subtitle2: {
                fontSize: 9,
                fontWeight: 700
            },
            alignRight: {
                textAlign: "right"
            },
            page: {
                fontSize: 9,
                lineHeight: 1.6,
                fontFamily: "Roboto",
                backgroundColor: "#FFFFFF",
                textTransform: "capitalize",
                padding: "40px 24px 120px 24px"
            },
            footer: {
                left: 0,
                right: 0,
                bottom: 0,
                padding: 24,
                margin: "auto",
                borderTopWidth: 1,
                borderStyle: "solid",
                position: "absolute",
                borderColor: "#DFE3E8"
            },
            gridContainer: {
                flexDirection: "row",
                justifyContent: "space-between"
            },
            table: {
                display: "flex",
                width: "auto"
            },
            tableRow: {
                padding: "8px 0",
                flexDirection: "row",
                borderBottomWidth: 1,
                borderStyle: "solid",
                borderColor: "#DFE3E8"
            },
            noBorder: {
                paddingTop: 8,
                paddingBottom: 0,
                borderBottomWidth: 0
            },
            tableCell_1: {
                width: "5%"
            },
            tableCell_2: {
                width: "50%",
                paddingRight: 16
            },
            tableCell_3: {
                width: "15%"
            }
        }), []);
function InvoicePDF({ invoice, currentStatus }) {
    const { items, taxes, dueDate, discount, shipping, invoiceTo, createDate, totalAmount, invoiceFrom, invoiceNumber, subTotal } = invoice;
    const styles = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Document, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.Page, {
            size: "A4",
            style: styles.page,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                    style: [
                        styles.gridContainer,
                        styles.mb40
                    ],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Image, {
                            source: "/logo/logo_single.png",
                            style: {
                                width: 48,
                                height: 48
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: {
                                alignItems: "flex-end",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.h3,
                                    children: currentStatus
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.Text, {
                                    children: [
                                        " ",
                                        invoiceNumber,
                                        " "
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                    style: [
                        styles.gridContainer,
                        styles.mb40
                    ],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: styles.col6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: [
                                        styles.subtitle2,
                                        styles.mb4
                                    ],
                                    children: "Invoice from"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: invoiceFrom.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: invoiceFrom.fullAddress
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: invoiceFrom.phoneNumber
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: styles.col6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: [
                                        styles.subtitle2,
                                        styles.mb4
                                    ],
                                    children: "Invoice to"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: invoiceTo.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: invoiceTo.fullAddress
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: invoiceTo.phoneNumber
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                    style: [
                        styles.gridContainer,
                        styles.mb40
                    ],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: styles.col6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: [
                                        styles.subtitle2,
                                        styles.mb4
                                    ],
                                    children: "Date create"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: (0,format_time/* fDate */.Mu)(createDate)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: styles.col6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: [
                                        styles.subtitle2,
                                        styles.mb4
                                    ],
                                    children: "Due date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.body2,
                                    children: (0,format_time/* fDate */.Mu)(dueDate)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                    style: [
                        styles.subtitle1,
                        styles.mb8
                    ],
                    children: "Invoice Details"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                    style: styles.table,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                style: styles.tableRow,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                        style: styles.tableCell_1,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                            style: styles.subtitle2,
                                            children: "#"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                        style: styles.tableCell_2,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                            style: styles.subtitle2,
                                            children: "Description"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                        style: styles.tableCell_3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                            style: styles.subtitle2,
                                            children: "Qty"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                        style: styles.tableCell_3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                            style: styles.subtitle2,
                                            children: "Unit price"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                        style: [
                                            styles.tableCell_3,
                                            styles.alignRight
                                        ],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                            style: styles.subtitle2,
                                            children: "Total"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            children: [
                                items.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                        style: styles.tableRow,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                                style: styles.tableCell_1,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                    children: index + 1
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                                style: styles.tableCell_2,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                        style: styles.subtitle2,
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                        children: item.description
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                                style: styles.tableCell_3,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                    children: item.quantity
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                                style: styles.tableCell_3,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                    children: item.price
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                                style: [
                                                    styles.tableCell_3,
                                                    styles.alignRight
                                                ],
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                    children: (0,format_number/* fCurrency */.e_)(item.price * item.quantity)
                                                })
                                            })
                                        ]
                                    }, item.id)),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                    style: [
                                        styles.tableRow,
                                        styles.noBorder
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_2
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: "Subtotal"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: [
                                                styles.tableCell_3,
                                                styles.alignRight
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: (0,format_number/* fCurrency */.e_)(subTotal)
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                    style: [
                                        styles.tableRow,
                                        styles.noBorder
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_2
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: "Shipping"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: [
                                                styles.tableCell_3,
                                                styles.alignRight
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: (0,format_number/* fCurrency */.e_)(-shipping)
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                    style: [
                                        styles.tableRow,
                                        styles.noBorder
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_2
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: "Discount"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: [
                                                styles.tableCell_3,
                                                styles.alignRight
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: (0,format_number/* fCurrency */.e_)(-discount)
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                    style: [
                                        styles.tableRow,
                                        styles.noBorder
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_2
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: "Taxes"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: [
                                                styles.tableCell_3,
                                                styles.alignRight
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                children: (0,format_number/* fCurrency */.e_)(taxes)
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                                    style: [
                                        styles.tableRow,
                                        styles.noBorder
                                    ],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_2
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: styles.tableCell_3,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                style: styles.h4,
                                                children: "Total"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.View, {
                                            style: [
                                                styles.tableCell_3,
                                                styles.alignRight
                                            ],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                                style: styles.h4,
                                                children: (0,format_number/* fCurrency */.e_)(totalAmount)
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                    style: [
                        styles.gridContainer,
                        styles.footer
                    ],
                    fixed: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: styles.col8,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.subtitle2,
                                    children: "NOTES"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    children: "We appreciate your business. Should you need us to add VAT or extra notes let us know!"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_pdf_cjs.View, {
                            style: [
                                styles.col4,
                                styles.alignRight
                            ],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    style: styles.subtitle2,
                                    children: "Have a Question?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.Text, {
                                    children: "support@abcapp.com"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/sections/invoice/invoice-toolbar.tsx



// @mui










// routes


// hooks

// components

//

function InvoiceToolbar({ invoice, currentStatus, statusOptions, onChangeStatus }) {
    const router = (0,hooks/* useRouter */.tv)();
    const view = (0,use_boolean/* useBoolean */.k)();
    const handleEdit = (0,react_.useCallback)(()=>{
        router.push(paths/* paths */.H.dashboard.invoice.edit(invoice.id));
    }, [
        invoice.id,
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                direction: {
                    xs: "column",
                    sm: "row"
                },
                alignItems: {
                    xs: "flex-end",
                    sm: "center"
                },
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        spacing: 1,
                        flexGrow: 1,
                        sx: {
                            width: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Edit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    onClick: handleEdit,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "solar:pen-bold"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "View",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    onClick: view.onTrue,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "solar:eye-bold"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.PDFDownloadLink, {
                                document: /*#__PURE__*/ jsx_runtime_.jsx(InvoicePDF, {
                                    invoice: invoice,
                                    currentStatus: currentStatus
                                }),
                                fileName: invoice.invoiceNumber,
                                style: {
                                    textDecoration: "none"
                                },
                                children: ({ loading })=>/*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                        title: "Download",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                                size: 24,
                                                color: "inherit"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                icon: "eva:cloud-download-fill"
                                            })
                                        })
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Print",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "solar:printer-minimalistic-bold"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Send",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "iconamoon:send-fill"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Share",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "solar:share-bold"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        fullWidth: true,
                        select: true,
                        label: "Status",
                        value: currentStatus,
                        onChange: onChangeStatus,
                        sx: {
                            maxWidth: 160
                        },
                        children: statusOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                value: option.value,
                                children: option.label
                            }, option.value))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                fullScreen: true,
                open: view.value,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                    sx: {
                        height: 1,
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                            sx: {
                                p: 1.5
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                color: "inherit",
                                variant: "contained",
                                onClick: view.onFalse,
                                children: "Close"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                            sx: {
                                flexGrow: 1,
                                height: 1,
                                overflow: "hidden"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_pdf_cjs.PDFViewer, {
                                width: "100%",
                                height: "100%",
                                style: {
                                    border: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(InvoicePDF, {
                                    invoice: invoice,
                                    currentStatus: currentStatus
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/invoice/invoice-details.tsx


// @mui













// utils


// _mock

// components


//

// ----------------------------------------------------------------------
const StyledTableRow = (0,styles.styled)((TableRow_default()))(({ theme })=>({
        "& td": {
            textAlign: "right",
            borderBottom: "none",
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        }
    }));
function InvoiceDetails({ invoice }) {
    const [currentStatus, setCurrentStatus] = (0,react_.useState)(invoice.status);
    const handleChangeStatus = (0,react_.useCallback)((event)=>{
        setCurrentStatus(event.target.value);
    }, []);
    const renderTotal = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        colSpan: 3
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                sx: {
                                    mt: 2
                                }
                            }),
                            "Subtotal"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                        width: 120,
                        sx: {
                            typography: "subtitle2"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                sx: {
                                    mt: 2
                                }
                            }),
                            (0,format_number/* fCurrency */.e_)(invoice.subTotal)
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        colSpan: 3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Shipping"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        width: 120,
                        sx: {
                            color: "error.main",
                            typography: "body2"
                        },
                        children: (0,format_number/* fCurrency */.e_)(-invoice.shipping)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        colSpan: 3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Discount"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        width: 120,
                        sx: {
                            color: "error.main",
                            typography: "body2"
                        },
                        children: (0,format_number/* fCurrency */.e_)(-invoice.discount)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        colSpan: 3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Taxes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        width: 120,
                        children: (0,format_number/* fCurrency */.e_)(invoice.taxes)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        colSpan: 3
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        sx: {
                            typography: "subtitle1"
                        },
                        children: "Total"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        width: 140,
                        sx: {
                            typography: "subtitle1"
                        },
                        children: (0,format_number/* fCurrency */.e_)(invoice.totalAmount)
                    })
                ]
            })
        ]
    });
    const renderFooter = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
        container: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                xs: 12,
                md: 9,
                sx: {
                    py: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle2",
                        children: "NOTES"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "We appreciate your business. Should you need us to add VAT or extra notes let us know!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                xs: 12,
                md: 3,
                sx: {
                    py: 3,
                    textAlign: "right"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle2",
                        children: "Have a Question?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "support@adamlevy.ca"
                    })
                ]
            })
        ]
    });
    const renderList = /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
        sx: {
            overflow: "unset",
            mt: 5
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                sx: {
                    minWidth: 960
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    width: 40,
                                    children: "#"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    sx: {
                                        typography: "subtitle2"
                                    },
                                    children: "Description"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    children: "Qty"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    align: "right",
                                    children: "Unit price"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    align: "right",
                                    children: "Total"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                        children: [
                            invoice.items.map((row, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: index + 1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                                sx: {
                                                    maxWidth: 560
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "subtitle2",
                                                        children: row.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        sx: {
                                                            color: "text.secondary"
                                                        },
                                                        noWrap: true,
                                                        children: row.description
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: row.quantity
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: (0,format_number/* fCurrency */.e_)(row.price)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: (0,format_number/* fCurrency */.e_)(row.price * row.quantity)
                                        })
                                    ]
                                }, index)),
                            renderTotal
                        ]
                    })
                ]
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(InvoiceToolbar, {
                invoice: invoice,
                currentStatus: currentStatus || "",
                onChangeStatus: handleChangeStatus,
                statusOptions: _mock/* INVOICE_STATUS_OPTIONS */.Dp
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                sx: {
                    pt: 5,
                    px: 5
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        rowGap: 5,
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "img",
                                alt: "logo",
                                src: "/logo/logo_single.svg",
                                sx: {
                                    width: 48,
                                    height: 48
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                spacing: 1,
                                alignItems: {
                                    xs: "flex-start",
                                    md: "flex-end"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                        variant: "soft",
                                        color: currentStatus === "paid" && "success" || currentStatus === "pending" && "warning" || currentStatus === "overdue" && "error" || "default",
                                        children: currentStatus
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        children: invoice.invoiceNumber
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                sx: {
                                    typography: "body2"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        sx: {
                                            mb: 1
                                        },
                                        children: "Invoice From"
                                    }),
                                    invoice.invoiceFrom.name,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    invoice.invoiceFrom.fullAddress,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Phone: ",
                                    invoice.invoiceFrom.phoneNumber,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                sx: {
                                    typography: "body2"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        sx: {
                                            mb: 1
                                        },
                                        children: "Invoice To"
                                    }),
                                    invoice.invoiceTo.name,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    invoice.invoiceTo.fullAddress,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Phone: ",
                                    invoice.invoiceTo.phoneNumber,
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                sx: {
                                    typography: "body2"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        sx: {
                                            mb: 1
                                        },
                                        children: "Date Create"
                                    }),
                                    (0,format_time/* fDate */.Mu)(invoice.createDate)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                sx: {
                                    typography: "body2"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle2",
                                        sx: {
                                            mb: 1
                                        },
                                        children: "Due Date"
                                    }),
                                    (0,format_time/* fDate */.Mu)(invoice.dueDate)
                                ]
                            })
                        ]
                    }),
                    renderList,
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            mt: 5,
                            borderStyle: "dashed"
                        }
                    }),
                    renderFooter
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/invoice/view/invoice-details-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// _mock

// components


//

function InvoiceDetailsView({ id }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const currentInvoice = _mock/* _invoices */.Ot.filter((invoice)=>invoice.id === id)[0];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(custom_breadcrumbs/* default */.Z, {
                heading: currentInvoice?.invoiceNumber,
                links: [
                    {
                        name: "Dashboard",
                        href: paths/* paths */.H.dashboard.root
                    },
                    {
                        name: "Invoice",
                        href: paths/* paths */.H.dashboard.invoice.root
                    },
                    {
                        name: currentInvoice?.invoiceNumber
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InvoiceDetails, {
                invoice: currentInvoice
            })
        ]
    });
}


/***/ }),

/***/ 14198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvoiceEditView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99011);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80640);
/* harmony import */ var _invoice_new_edit_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34992);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// _mock

// components


//

function InvoiceEditView({ id }) {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_3__/* .useSettingsContext */ .K$)();
    const currentInvoice = src_mock__WEBPACK_IMPORTED_MODULE_2__/* ._invoices */ .Ot.find((invoice)=>invoice.id === id);
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
                        name: "Invoice",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.invoice.root
                    },
                    {
                        name: currentInvoice?.invoiceNumber
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_invoice_new_edit_form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                currentInvoice: currentInvoice
            })
        ]
    });
}


/***/ }),

/***/ 6323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InvoiceListView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/sumBy.js
var sumBy = __webpack_require__(36083);
var sumBy_default = /*#__PURE__*/__webpack_require__.n(sumBy);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tabs/index.js
var Tabs = __webpack_require__(87726);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Table/index.js
var Table = __webpack_require__(77523);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableBody/index.js
var TableBody = __webpack_require__(24608);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableContainer/index.js
var TableContainer = __webpack_require__(68101);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./src/components/custom-dialog/index.ts + 1 modules
var custom_dialog = __webpack_require__(78254);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: ./src/components/table/index.ts + 8 modules
var components_table = __webpack_require__(48974);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CircularProgress/index.js
var CircularProgress = __webpack_require__(99360);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-analytic.tsx
// @mui






// utils

// components

function InvoiceAnalytic({ title, total, icon, color, percent, price }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2.5,
        direction: "row",
        alignItems: "center",
        justifyContent: "center",
        sx: {
            width: 1,
            minWidth: 200
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: icon,
                        width: 32,
                        sx: {
                            color,
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                        variant: "determinate",
                        value: percent,
                        size: 56,
                        thickness: 2,
                        sx: {
                            color,
                            opacity: 0.48
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                        variant: "determinate",
                        value: 100,
                        size: 56,
                        thickness: 3,
                        sx: {
                            top: 0,
                            left: 0,
                            opacity: 0.48,
                            position: "absolute",
                            color: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.16)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle1",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        component: "span",
                        sx: {
                            color: "text.disabled",
                            typography: "body2"
                        },
                        children: [
                            (0,format_number/* fShortenNumber */.v1)(total),
                            " invoices"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle2",
                        children: (0,format_number/* fCurrency */.e_)(price)
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 3 modules
var format = __webpack_require__(63864);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableRow/index.js
var TableRow = __webpack_require__(44233);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableCell/index.js
var TableCell = __webpack_require__(80765);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-table-row.tsx


// @mui











// hooks

// utils

// components




function InvoiceTableRow({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
    const { sent, invoiceNumber, createDate, dueDate, status, invoiceTo, totalAmount } = row;
    const confirm = (0,use_boolean/* useBoolean */.k)();
    const popover = (0,custom_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                hover: true,
                selected: selected,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        padding: "checkbox",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                            checked: selected,
                            onClick: onSelectRow
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                alt: invoiceTo.name,
                                sx: {
                                    mr: 2
                                },
                                children: invoiceTo.name.charAt(0).toUpperCase()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                disableTypography: true,
                                primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    noWrap: true,
                                    children: invoiceTo.name
                                }),
                                secondary: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                    noWrap: true,
                                    variant: "body2",
                                    onClick: onViewRow,
                                    sx: {
                                        color: "text.disabled",
                                        cursor: "pointer"
                                    },
                                    children: invoiceNumber
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                            primary: (0,format["default"])(new Date(createDate), "dd MMM yyyy"),
                            secondary: (0,format["default"])(new Date(createDate), "p"),
                            primaryTypographyProps: {
                                typography: "body2",
                                noWrap: true
                            },
                            secondaryTypographyProps: {
                                mt: 0.5,
                                component: "span",
                                typography: "caption"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                            primary: (0,format["default"])(new Date(dueDate), "dd MMM yyyy"),
                            secondary: (0,format["default"])(new Date(dueDate), "p"),
                            primaryTypographyProps: {
                                typography: "body2",
                                noWrap: true
                            },
                            secondaryTypographyProps: {
                                mt: 0.5,
                                component: "span",
                                typography: "caption"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: (0,format_number/* fCurrency */.e_)(totalAmount)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        align: "center",
                        children: sent
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                            variant: "soft",
                            color: status === "paid" && "success" || status === "pending" && "warning" || status === "overdue" && "error" || "default",
                            children: status
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        align: "right",
                        sx: {
                            px: 1
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: popover.open ? "inherit" : "default",
                            onClick: popover.onOpen,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:more-vertical-fill"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "right-top",
                sx: {
                    width: 160
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            onViewRow();
                            popover.onClose();
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
                            onEditRow();
                            popover.onClose();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:pen-bold"
                            }),
                            "Edit"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            confirm.onTrue();
                            popover.onClose();
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_dialog/* ConfirmDialog */.Q, {
                open: confirm.value,
                onClose: confirm.onFalse,
                title: "Delete",
                content: "Are you sure want to delete?",
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    color: "error",
                    onClick: onDeleteRow,
                    children: "Delete"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DatePicker/index.js
var DatePicker = __webpack_require__(71026);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputLabel/index.js
var InputLabel = __webpack_require__(97445);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControl/index.js
var FormControl = __webpack_require__(58111);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/OutlinedInput/index.js
var OutlinedInput = __webpack_require__(47459);
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Select/index.js
var Select = __webpack_require__(51892);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-table-toolbar.tsx


// @mui











// components


function InvoiceTableToolbar({ filters, onFilters, //
dateError, serviceOptions }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    const handleFilterName = (0,react_.useCallback)((event)=>{
        onFilters("name", event.target.value);
    }, [
        onFilters
    ]);
    const handleFilterService = (0,react_.useCallback)((event)=>{
        onFilters("service", typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value);
    }, [
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2,
                alignItems: {
                    xs: "flex-end",
                    md: "center"
                },
                direction: {
                    xs: "column",
                    md: "row"
                },
                sx: {
                    p: 2.5,
                    pr: {
                        xs: 2.5,
                        md: 1
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        sx: {
                            flexShrink: 0,
                            width: {
                                xs: 1,
                                md: 180
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                children: "Service"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Select_default()), {
                                multiple: true,
                                value: filters.service,
                                onChange: handleFilterService,
                                input: /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                    label: "Service"
                                }),
                                renderValue: (selected)=>selected.map((value)=>value).join(", "),
                                sx: {
                                    textTransform: "capitalize"
                                },
                                children: serviceOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        value: option,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                disableRipple: true,
                                                size: "small",
                                                checked: filters.service.includes(option)
                                            }),
                                            option
                                        ]
                                    }, option))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "Start date",
                        value: filters.startDate,
                        onChange: handleFilterStartDate,
                        slotProps: {
                            textField: {
                                fullWidth: true
                            }
                        },
                        sx: {
                            maxWidth: {
                                md: 180
                            }
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "End date",
                        value: filters.endDate,
                        onChange: handleFilterEndDate,
                        slotProps: {
                            textField: {
                                fullWidth: true,
                                error: dateError
                            }
                        },
                        sx: {
                            maxWidth: {
                                md: 180
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 2,
                        flexGrow: 1,
                        sx: {
                            width: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                fullWidth: true,
                                value: filters.name,
                                onChange: handleFilterName,
                                placeholder: "Search customer or invoice number...",
                                InputProps: {
                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                        position: "start",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                            icon: "eva:search-fill",
                                            sx: {
                                                color: "text.disabled"
                                            }
                                        })
                                    })
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                onClick: popover.onOpen,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "eva:more-vertical-fill"
                                })
                            })
                        ]
                    })
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
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:printer-minimalistic-bold"
                            }),
                            "Print"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:import-bold"
                            }),
                            "Import"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:export-bold"
                            }),
                            "Export"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(92133);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./src/components/custom-date-range-picker/index.ts + 3 modules
var custom_date_range_picker = __webpack_require__(93662);
;// CONCATENATED MODULE: ./src/sections/invoice/invoice-table-filters-result.tsx
// @mui






// components


function InvoiceTableFiltersResult({ filters, onFilters, //
onResetFilters, //
results, ...other }) {
    const shortLabel = (0,custom_date_range_picker/* shortDateLabel */.l2)(filters.startDate, filters.endDate);
    const handleRemoveService = (inputValue)=>{
        const newValue = filters.service.filter((item)=>item !== inputValue);
        onFilters("service", newValue);
    };
    const handleRemoveStatus = ()=>{
        onFilters("status", "all");
    };
    const handleRemoveDate = ()=>{
        onFilters("startDate", null);
        onFilters("endDate", null);
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
                    !!filters.service.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Service:",
                        children: filters.service.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item,
                                size: "small",
                                onDelete: ()=>handleRemoveService(item)
                            }, item))
                    }),
                    filters.status !== "all" && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Status:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: filters.status,
                            onDelete: handleRemoveStatus
                        })
                    }),
                    filters.startDate && filters.endDate && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Date:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: shortLabel,
                            onDelete: handleRemoveDate
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
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

;// CONCATENATED MODULE: ./src/sections/invoice/view/invoice-list-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui













// routes



// hooks

// utils

// _mock

// components







//




// ----------------------------------------------------------------------
const TABLE_HEAD = [
    {
        id: "invoiceNumber",
        label: "Customer"
    },
    {
        id: "createDate",
        label: "Create"
    },
    {
        id: "dueDate",
        label: "Due"
    },
    {
        id: "price",
        label: "Amount"
    },
    {
        id: "sent",
        label: "Sent",
        align: "center"
    },
    {
        id: "status",
        label: "Status"
    },
    {
        id: ""
    }
];
const defaultFilters = {
    name: "",
    service: [],
    status: "all",
    startDate: null,
    endDate: null
};
// ----------------------------------------------------------------------
function InvoiceListView() {
    const theme = (0,styles.useTheme)();
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const router = (0,hooks/* useRouter */.tv)();
    const table = (0,components_table/* useTable */.x6)({
        defaultOrderBy: "createDate"
    });
    const confirm = (0,use_boolean/* useBoolean */.k)();
    const [tableData, setTableData] = (0,react_.useState)(_mock/* _invoices */.Ot);
    const [filters, setFilters] = (0,react_.useState)(defaultFilters);
    const dateError = filters.startDate && filters.endDate ? filters.startDate.getTime() > filters.endDate.getTime() : false;
    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: (0,components_table/* getComparator */.sQ)(table.order, table.orderBy),
        filters,
        dateError
    });
    const dataInPage = dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage);
    const denseHeight = table.dense ? 56 : 76;
    const canReset = !!filters.name || !!filters.service.length || filters.status !== "all" || !!filters.startDate && !!filters.endDate;
    const notFound = !dataFiltered.length && canReset || !dataFiltered.length;
    const getInvoiceLength = (status)=>tableData.filter((item)=>item.status === status).length;
    const getTotalAmount = (status)=>sumBy_default()(tableData.filter((item)=>item.status === status), "totalAmount");
    const getPercentByStatus = (status)=>getInvoiceLength(status) / tableData.length * 100;
    const TABS = [
        {
            value: "all",
            label: "All",
            color: "default",
            count: tableData.length
        },
        {
            value: "paid",
            label: "Paid",
            color: "success",
            count: getInvoiceLength("paid")
        },
        {
            value: "pending",
            label: "Pending",
            color: "warning",
            count: getInvoiceLength("pending")
        },
        {
            value: "overdue",
            label: "Overdue",
            color: "error",
            count: getInvoiceLength("overdue")
        },
        {
            value: "draft",
            label: "Draft",
            color: "default",
            count: getInvoiceLength("draft")
        }
    ];
    const handleFilters = (0,react_.useCallback)((name, value)=>{
        table.onResetPage();
        setFilters((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, [
        table
    ]);
    const handleDeleteRow = (0,react_.useCallback)((id)=>{
        const deleteRow = tableData.filter((row)=>row.id !== id);
        setTableData(deleteRow);
        table.onUpdatePageDeleteRow(dataInPage.length);
    }, [
        dataInPage.length,
        table,
        tableData
    ]);
    const handleDeleteRows = (0,react_.useCallback)(()=>{
        const deleteRows = tableData.filter((row)=>!table.selected.includes(row.id));
        setTableData(deleteRows);
        table.onUpdatePageDeleteRows({
            totalRows: tableData.length,
            totalRowsInPage: dataInPage.length,
            totalRowsFiltered: dataFiltered.length
        });
    }, [
        dataFiltered.length,
        dataInPage.length,
        table,
        tableData
    ]);
    const handleEditRow = (0,react_.useCallback)((id)=>{
        router.push(paths/* paths */.H.dashboard.invoice.edit(id));
    }, [
        router
    ]);
    const handleViewRow = (0,react_.useCallback)((id)=>{
        router.push(paths/* paths */.H.dashboard.invoice.details(id));
    }, [
        router
    ]);
    const handleFilterStatus = (0,react_.useCallback)((event, newValue)=>{
        handleFilters("status", newValue);
    }, [
        handleFilters
    ]);
    const handleResetFilters = (0,react_.useCallback)(()=>{
        setFilters(defaultFilters);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
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
                                name: "Invoice",
                                href: paths/* paths */.H.dashboard.invoice.root
                            },
                            {
                                name: "List"
                            }
                        ],
                        action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: components/* RouterLink */.r,
                            href: paths/* paths */.H.dashboard.invoice.new,
                            variant: "contained",
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "mingcute:add-line"
                            }),
                            children: "New Invoice"
                        }),
                        sx: {
                            mb: {
                                xs: 3,
                                md: 5
                            }
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                        sx: {
                            mb: {
                                xs: 3,
                                md: 5
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: "row",
                                divider: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                    orientation: "vertical",
                                    flexItem: true,
                                    sx: {
                                        borderStyle: "dashed"
                                    }
                                }),
                                sx: {
                                    py: 2
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceAnalytic, {
                                        title: "Total",
                                        total: tableData.length,
                                        percent: 100,
                                        price: sumBy_default()(tableData, "totalAmount"),
                                        icon: "solar:bill-list-bold-duotone",
                                        color: theme.palette.info.main
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceAnalytic, {
                                        title: "Paid",
                                        total: getInvoiceLength("paid"),
                                        percent: getPercentByStatus("paid"),
                                        price: getTotalAmount("paid"),
                                        icon: "solar:file-check-bold-duotone",
                                        color: theme.palette.success.main
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceAnalytic, {
                                        title: "Pending",
                                        total: getInvoiceLength("pending"),
                                        percent: getPercentByStatus("pending"),
                                        price: getTotalAmount("pending"),
                                        icon: "solar:sort-by-time-bold-duotone",
                                        color: theme.palette.warning.main
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceAnalytic, {
                                        title: "Overdue",
                                        total: getInvoiceLength("overdue"),
                                        percent: getPercentByStatus("overdue"),
                                        price: getTotalAmount("overdue"),
                                        icon: "solar:bell-bing-bold-duotone",
                                        color: theme.palette.error.main
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InvoiceAnalytic, {
                                        title: "Draft",
                                        total: getInvoiceLength("draft"),
                                        percent: getPercentByStatus("draft"),
                                        price: getTotalAmount("draft"),
                                        icon: "solar:file-corrupted-bold-duotone",
                                        color: theme.palette.text.secondary
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                                value: filters.status,
                                onChange: handleFilterStatus,
                                sx: {
                                    px: 2.5,
                                    boxShadow: `inset 0 -2px 0 0 ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
                                },
                                children: TABS.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        value: tab.value,
                                        label: tab.label,
                                        iconPosition: "end",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                            variant: (tab.value === "all" || tab.value === filters.status) && "filled" || "soft",
                                            color: tab.color,
                                            children: tab.count
                                        })
                                    }, tab.value))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InvoiceTableToolbar, {
                                filters: filters,
                                onFilters: handleFilters,
                                //
                                dateError: dateError,
                                serviceOptions: _mock/* INVOICE_SERVICE_OPTIONS */.PI.map((option)=>option.name)
                            }),
                            canReset && /*#__PURE__*/ jsx_runtime_.jsx(InvoiceTableFiltersResult, {
                                filters: filters,
                                onFilters: handleFilters,
                                //
                                onResetFilters: handleResetFilters,
                                //
                                results: dataFiltered.length,
                                sx: {
                                    p: 2.5,
                                    pt: 0
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableContainer_default()), {
                                sx: {
                                    position: "relative",
                                    overflow: "unset"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableSelectedAction */.Z4, {
                                        dense: table.dense,
                                        numSelected: table.selected.length,
                                        rowCount: tableData.length,
                                        onSelectAllRows: (checked)=>table.onSelectAllRows(checked, tableData.map((row)=>row.id)),
                                        action: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                            direction: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    title: "Sent",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                        color: "primary",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                            icon: "iconamoon:send-fill"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    title: "Download",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                        color: "primary",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                            icon: "eva:download-outline"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    title: "Print",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                        color: "primary",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                            icon: "solar:printer-minimalistic-bold"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    title: "Delete",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                        color: "primary",
                                                        onClick: confirm.onTrue,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                            icon: "solar:trash-bin-trash-bold"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                                            size: table.dense ? "small" : "medium",
                                            sx: {
                                                minWidth: 800
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableHeadCustom */.K, {
                                                    order: table.order,
                                                    orderBy: table.orderBy,
                                                    headLabel: TABLE_HEAD,
                                                    rowCount: tableData.length,
                                                    numSelected: table.selected.length,
                                                    onSort: table.onSort,
                                                    onSelectAllRows: (checked)=>table.onSelectAllRows(checked, tableData.map((row)=>row.id))
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                                    children: [
                                                        dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage).map((row)=>/*#__PURE__*/ jsx_runtime_.jsx(InvoiceTableRow, {
                                                                row: row,
                                                                selected: table.selected.includes(row.id),
                                                                onSelectRow: ()=>table.onSelectRow(row.id),
                                                                onViewRow: ()=>handleViewRow(row.id),
                                                                onEditRow: ()=>handleEditRow(row.id),
                                                                onDeleteRow: ()=>handleDeleteRow(row.id)
                                                            }, row.id)),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableEmptyRows */.$W, {
                                                            height: denseHeight,
                                                            emptyRows: (0,components_table/* emptyRows */.fQ)(table.page, table.rowsPerPage, tableData.length)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableNoData */.et, {
                                                            notFound: notFound
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TablePaginationCustom */.S_, {
                                count: dataFiltered.length,
                                page: table.page,
                                rowsPerPage: table.rowsPerPage,
                                onPageChange: table.onChangePage,
                                onRowsPerPageChange: table.onChangeRowsPerPage,
                                //
                                dense: table.dense,
                                onChangeDense: table.onChangeDense
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_dialog/* ConfirmDialog */.Q, {
                open: confirm.value,
                onClose: confirm.onFalse,
                title: "Delete",
                content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Are you sure want to delete ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            children: [
                                " ",
                                table.selected.length,
                                " "
                            ]
                        }),
                        " items?"
                    ]
                }),
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    color: "error",
                    onClick: ()=>{
                        handleDeleteRows();
                        confirm.onFalse();
                    },
                    children: "Delete"
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
function applyFilter({ inputData, comparator, filters, dateError }) {
    const { name, status, service, startDate, endDate } = filters;
    const stabilizedThis = inputData.map((el, index)=>[
            el,
            index
        ]);
    stabilizedThis.sort((a, b)=>{
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    inputData = stabilizedThis.map((el)=>el[0]);
    if (name) {
        inputData = inputData.filter((invoice)=>invoice.invoiceNumber.toLowerCase().indexOf(name.toLowerCase()) !== -1 || invoice.invoiceTo.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
    if (status !== "all") {
        inputData = inputData.filter((invoice)=>invoice.status === status);
    }
    if (service.length) {
        inputData = inputData.filter((invoice)=>invoice.items.some((filterItem)=>service.includes(filterItem.service)));
    }
    if (!dateError) {
        if (startDate && endDate) {
            inputData = inputData.filter((invoice)=>(0,format_time/* fTimestamp */.IO)(invoice.createDate) >= (0,format_time/* fTimestamp */.IO)(startDate) && (0,format_time/* fTimestamp */.IO)(invoice.createDate) <= (0,format_time/* fTimestamp */.IO)(endDate));
        }
    }
    return inputData;
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

/***/ }),

/***/ 79711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nC: () => (/* reexport */ invoice_create_view),
  H0: () => (/* reexport */ invoice_details_view),
  a1: () => (/* reexport */ invoice_edit_view),
  Rg: () => (/* reexport */ invoice_list_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/invoice/view/invoice-list-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/invoice/view/invoice-list-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const invoice_list_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/invoice/view/invoice-edit-view.tsx

const invoice_edit_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/invoice/view/invoice-edit-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: invoice_edit_view_esModule, $$typeof: invoice_edit_view_$$typeof } = invoice_edit_view_proxy;
const invoice_edit_view_default_ = invoice_edit_view_proxy.default;


/* harmony default export */ const invoice_edit_view = (invoice_edit_view_default_);
;// CONCATENATED MODULE: ./src/sections/invoice/view/invoice-create-view.tsx

const invoice_create_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/invoice/view/invoice-create-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: invoice_create_view_esModule, $$typeof: invoice_create_view_$$typeof } = invoice_create_view_proxy;
const invoice_create_view_default_ = invoice_create_view_proxy.default;


/* harmony default export */ const invoice_create_view = (invoice_create_view_default_);
;// CONCATENATED MODULE: ./src/sections/invoice/view/invoice-details-view.tsx

const invoice_details_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/invoice/view/invoice-details-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: invoice_details_view_esModule, $$typeof: invoice_details_view_$$typeof } = invoice_details_view_proxy;
const invoice_details_view_default_ = invoice_details_view_proxy.default;


/* harmony default export */ const invoice_details_view = (invoice_details_view_default_);
;// CONCATENATED MODULE: ./src/sections/invoice/view/index.ts






/***/ })

};
;