exports.id = 3138;
exports.ids = [3138,3471,8998,8974,8254,9216];
exports.modules = {

/***/ 9254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85440))

/***/ }),

/***/ 13864:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98154))

/***/ }),

/***/ 76500:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73497));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 51322));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39805));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35713));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85156))

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

/***/ 62380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UserNewEditForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76267);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56703);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26566);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(26017);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_utils_format_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9856);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48611);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89539);
/* harmony import */ var src_assets_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38670);
/* harmony import */ var src_components_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42892);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76505);
/* harmony import */ var src_components_snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80941);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29189);






// @mui









// utils

// routes


// assets

// components




function UserNewEditForm({ currentUser }) {
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .tv)();
    const { enqueueSnackbar } = (0,src_components_snackbar__WEBPACK_IMPORTED_MODULE_9__/* .useSnackbar */ .Ds)();
    const NewUserSchema = yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Name is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address"),
        phoneNumber: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Phone number is required"),
        address: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Address is required"),
        country: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Country is required"),
        company: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Company is required"),
        state: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("State is required"),
        city: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("City is required"),
        role: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Role is required"),
        zipCode: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Zip code is required"),
        avatarUrl: yup__WEBPACK_IMPORTED_MODULE_2__/* .mixed */ .nK().nullable().required("Avatar is required"),
        // not required
        status: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_(),
        isVerified: yup__WEBPACK_IMPORTED_MODULE_2__/* .boolean */ .O7()
    });
    const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            name: currentUser?.name || "",
            city: currentUser?.city || "",
            role: currentUser?.role || "",
            email: currentUser?.email || "",
            state: currentUser?.state || "",
            status: currentUser?.status || "",
            address: currentUser?.address || "",
            country: currentUser?.country || "",
            zipCode: currentUser?.zipCode || "",
            company: currentUser?.company || "",
            avatarUrl: currentUser?.avatarUrl || null,
            phoneNumber: currentUser?.phoneNumber || "",
            isVerified: currentUser?.isVerified || true
        }), [
        currentUser
    ]);
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__/* .yupResolver */ .X)(NewUserSchema),
        defaultValues
    });
    const { reset, watch, control, setValue, handleSubmit, formState: { isSubmitting } } = methods;
    const values = watch();
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            enqueueSnackbar(currentUser ? "Update success!" : "Create success!");
            router.push(src_routes_paths__WEBPACK_IMPORTED_MODULE_4__/* .paths */ .H.dashboard.user.list);
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const handleDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{
        const file = acceptedFiles[0];
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        });
        if (file) {
            setValue("avatarUrl", newFile, {
                shouldValidate: true
            });
        }
    }, [
        setValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                    xs: 12,
                    md: 4,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_14___default()), {
                        sx: {
                            pt: 10,
                            pb: 5,
                            px: 3
                        },
                        children: [
                            currentUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_label__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                color: values.status === "active" && "success" || values.status === "banned" && "error" || "warning",
                                sx: {
                                    position: "absolute",
                                    top: 24,
                                    right: 24
                                },
                                children: values.status
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                sx: {
                                    mb: 5
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFUploadAvatar */ .sX, {
                                    name: "avatarUrl",
                                    maxSize: 3145728,
                                    onDrop: handleDrop,
                                    helperText: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        variant: "caption",
                                        sx: {
                                            mt: 3,
                                            mx: "auto",
                                            display: "block",
                                            textAlign: "center",
                                            color: "text.disabled"
                                        },
                                        children: [
                                            "Allowed *.jpeg, *.jpg, *.png, *.gif",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            " max size of ",
                                            (0,src_utils_format_number__WEBPACK_IMPORTED_MODULE_3__/* .fData */ .oe)(3145728)
                                        ]
                                    })
                                })
                            }),
                            currentUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_17___default()), {
                                labelPlacement: "start",
                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__/* .Controller */ .Qr, {
                                    name: "status",
                                    control: control,
                                    render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_18___default()), {
                                            ...field,
                                            checked: field.value !== "active",
                                            onChange: (event)=>field.onChange(event.target.checked ? "banned" : "active")
                                        })
                                }),
                                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "subtitle2",
                                            sx: {
                                                mb: 0.5
                                            },
                                            children: "Banned"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "text.secondary"
                                            },
                                            children: "Apply disable account"
                                        })
                                    ]
                                }),
                                sx: {
                                    mx: 0,
                                    mb: 3,
                                    width: 1,
                                    justifyContent: "space-between"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFSwitch */ ._e, {
                                name: "isVerified",
                                labelPlacement: "start",
                                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "subtitle2",
                                            sx: {
                                                mb: 0.5
                                            },
                                            children: "Email Verified"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "text.secondary"
                                            },
                                            children: "Disabling this will automatically send the user a verification email"
                                        })
                                    ]
                                }),
                                sx: {
                                    mx: 0,
                                    width: 1,
                                    justifyContent: "space-between"
                                }
                            }),
                            currentUser && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                justifyContent: "center",
                                alignItems: "center",
                                sx: {
                                    mt: 3
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    variant: "soft",
                                    color: "error",
                                    children: "Delete User"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_13___default()), {
                    xs: 12,
                    md: 8,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_14___default()), {
                        sx: {
                            p: 3
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                rowGap: 3,
                                columnGap: 2,
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(1, 1fr)",
                                    sm: "repeat(2, 1fr)"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "name",
                                        label: "Full Name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "email",
                                        label: "Email Address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "phoneNumber",
                                        label: "Phone Number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFAutocomplete */ .Fl, {
                                        name: "country",
                                        label: "Country",
                                        options: src_assets_data__WEBPACK_IMPORTED_MODULE_6__/* .countries */ .h.map((country)=>country.label),
                                        getOptionLabel: (option)=>option,
                                        isOptionEqualToValue: (option, value)=>option === value,
                                        renderOption: (props, option)=>{
                                            const { code, label, phone } = src_assets_data__WEBPACK_IMPORTED_MODULE_6__/* .countries */ .h.filter((country)=>country.label === option)[0];
                                            if (!label) {
                                                return null;
                                            }
                                            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
                                                ...props,
                                                key: label,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "state",
                                        label: "State/Region"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "city",
                                        label: "City"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "address",
                                        label: "Address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "zipCode",
                                        label: "Zip/Code"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "company",
                                        label: "Company"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .RHFTextField */ .au, {
                                        name: "role",
                                        label: "Role"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                alignItems: "flex-end",
                                sx: {
                                    mt: 3
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_21___default()), {
                                    type: "submit",
                                    variant: "contained",
                                    loading: isSubmitting,
                                    children: !currentUser ? "Create User" : "Save Changes"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 39805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UserCardsView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/assets/illustrations/index.ts + 15 modules
var illustrations = __webpack_require__(90310);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
;// CONCATENATED MODULE: ./src/sections/user/user-card.tsx
// @mui










// utils

// _mock

// assets

// components


function UserCard({ user }) {
    const theme = (0,styles.useTheme)();
    const { name, coverUrl, role, totalFollowers, totalPosts, avatarUrl, totalFollowing } = user;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(illustrations/* AvatarShape */.oG, {
                        sx: {
                            left: 0,
                            right: 0,
                            zIndex: 10,
                            mx: "auto",
                            bottom: -26,
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: name,
                        src: avatarUrl,
                        sx: {
                            width: 64,
                            height: 64,
                            zIndex: 11,
                            left: 0,
                            right: 0,
                            bottom: -32,
                            mx: "auto",
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                        src: coverUrl,
                        alt: coverUrl,
                        ratio: "16/9",
                        overlay: (0,styles.alpha)(theme.palette.grey[900], 0.48)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                sx: {
                    mt: 7,
                    mb: 1
                },
                primary: name,
                secondary: role,
                primaryTypographyProps: {
                    typography: "subtitle1"
                },
                secondaryTypographyProps: {
                    component: "span",
                    mt: 0.5
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    mb: 2.5
                },
                children: _mock/* _socials */._I.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        sx: {
                            color: social.color,
                            "&:hover": {
                                bgcolor: (0,styles.alpha)(social.color, 0.08)
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: social.icon
                        })
                    }, social.name))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                sx: {
                    py: 3,
                    typography: "subtitle1"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "caption",
                                component: "div",
                                sx: {
                                    mb: 0.5,
                                    color: "text.secondary"
                                },
                                children: "Follower"
                            }),
                            (0,format_number/* fShortenNumber */.v1)(totalFollowers)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "caption",
                                component: "div",
                                sx: {
                                    mb: 0.5,
                                    color: "text.secondary"
                                },
                                children: "Following"
                            }),
                            (0,format_number/* fShortenNumber */.v1)(totalFollowing)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "caption",
                                component: "div",
                                sx: {
                                    mb: 0.5,
                                    color: "text.secondary"
                                },
                                children: "Total Post"
                            }),
                            (0,format_number/* fShortenNumber */.v1)(totalPosts)
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/user/user-card-list.tsx
// @mui


//

function UserCardList({ users }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        gap: 3,
        display: "grid",
        gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
        },
        children: users.map((user)=>/*#__PURE__*/ jsx_runtime_.jsx(UserCard, {
                user: user
            }, user.id))
    });
}

;// CONCATENATED MODULE: ./src/sections/user/view/user-cards-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui


// routes

// _mock

// components




//

// ----------------------------------------------------------------------
function UserCardsView() {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(custom_breadcrumbs/* default */.Z, {
                heading: "User Cards",
                links: [
                    {
                        name: "Dashboard",
                        href: paths/* paths */.H.dashboard.root
                    },
                    {
                        name: "User",
                        href: paths/* paths */.H.dashboard.user.root
                    },
                    {
                        name: "Cards"
                    }
                ],
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    component: components/* RouterLink */.r,
                    href: paths/* paths */.H.dashboard.user.new,
                    variant: "contained",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "mingcute:add-line"
                    }),
                    children: "New User"
                }),
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(UserCardList, {
                users: _mock/* _userCards */.oe
            })
        ]
    });
}


/***/ }),

/***/ 35713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserCreateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80640);
/* harmony import */ var _user_new_edit_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62380);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// components


//

// ----------------------------------------------------------------------
function UserCreateView() {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSettingsContext */ .K$)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                heading: "Create a new user",
                links: [
                    {
                        name: "Dashboard",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.root
                    },
                    {
                        name: "User",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.user.root
                    },
                    {
                        name: "New user"
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_new_edit_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 73497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserEditView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99011);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80640);
/* harmony import */ var _user_new_edit_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62380);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// _mock

// components


//

function UserEditView({ id }) {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_3__/* .useSettingsContext */ .K$)();
    const currentUser = src_mock__WEBPACK_IMPORTED_MODULE_2__/* ._userList */ .Xz.find((user)=>user.id === id);
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
                        name: "User",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.user.root
                    },
                    {
                        name: currentUser?.name
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_new_edit_form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                currentUser: currentUser
            })
        ]
    });
}


/***/ }),

/***/ 51322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UserListView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(43490);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
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
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
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
// EXTERNAL MODULE: ./node_modules/yup/index.js
var yup = __webpack_require__(50298);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var dist_yup = __webpack_require__(57086);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Alert/index.js
var Alert = __webpack_require__(81932);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert);
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
// EXTERNAL MODULE: ./src/components/snackbar/index.ts
var snackbar = __webpack_require__(80941);
// EXTERNAL MODULE: ./src/components/hook-form/index.ts + 11 modules
var hook_form = __webpack_require__(29189);
;// CONCATENATED MODULE: ./src/sections/user/user-quick-edit-form.tsx






// @mui









// _mock

// assets

// components



function UserQuickEditForm({ currentUser, open, onClose }) {
    const { enqueueSnackbar } = (0,snackbar/* useSnackbar */.Ds)();
    const NewUserSchema = yup/* object */.Ry().shape({
        name: yup/* string */.Z_().required("Name is required"),
        email: yup/* string */.Z_().required("Email is required").email("Email must be a valid email address"),
        phoneNumber: yup/* string */.Z_().required("Phone number is required"),
        address: yup/* string */.Z_().required("Address is required"),
        country: yup/* string */.Z_().required("Country is required"),
        company: yup/* string */.Z_().required("Company is required"),
        state: yup/* string */.Z_().required("State is required"),
        city: yup/* string */.Z_().required("City is required"),
        role: yup/* string */.Z_().required("Role is required")
    });
    const defaultValues = (0,react_.useMemo)(()=>({
            name: currentUser?.name || "",
            email: currentUser?.email || "",
            phoneNumber: currentUser?.phoneNumber || "",
            address: currentUser?.address || "",
            country: currentUser?.country || "",
            state: currentUser?.state || "",
            city: currentUser?.city || "",
            zipCode: currentUser?.zipCode || "",
            status: currentUser?.status,
            company: currentUser?.company || "",
            role: currentUser?.role || ""
        }), [
        currentUser
    ]);
    const methods = (0,index_esm/* useForm */.cI)({
        resolver: (0,dist_yup/* yupResolver */.X)(NewUserSchema),
        defaultValues
    });
    const { reset, handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            onClose();
            enqueueSnackbar("Update success!");
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
        fullWidth: true,
        maxWidth: false,
        open: open,
        onClose: onClose,
        PaperProps: {
            sx: {
                maxWidth: 720
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hook_form/* default */.ZP, {
            methods: methods,
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                    children: "Quick Update"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Alert_default()), {
                            variant: "outlined",
                            severity: "info",
                            sx: {
                                mb: 3
                            },
                            children: "Account is waiting for confirmation"
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
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFSelect */.Cc, {
                                    name: "status",
                                    label: "Status",
                                    children: _mock/* USER_STATUS_OPTIONS */.e$.map((status)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            value: status.value,
                                            children: status.label
                                        }, status.value))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                    sx: {
                                        display: {
                                            xs: "none",
                                            sm: "block"
                                        }
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "name",
                                    label: "Full Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "email",
                                    label: "Email Address"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "phoneNumber",
                                    label: "Phone Number"
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
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "state",
                                    label: "State/Region"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "city",
                                    label: "City"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "address",
                                    label: "Address"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "zipCode",
                                    label: "Zip/Code"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "company",
                                    label: "Company"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "role",
                                    label: "Role"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "outlined",
                            onClick: onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                            type: "submit",
                            variant: "contained",
                            loading: isSubmitting,
                            children: "Update"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/sections/user/user-table-row.tsx
// @mui










// hooks

// components




//

function UserTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }) {
    const { name, avatarUrl, company, role, status, email, phoneNumber } = row;
    const confirm = (0,use_boolean/* useBoolean */.k)();
    const quickEdit = (0,use_boolean/* useBoolean */.k)();
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
                                alt: name,
                                src: avatarUrl,
                                sx: {
                                    mr: 2
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: name,
                                secondary: email,
                                primaryTypographyProps: {
                                    typography: "body2"
                                },
                                secondaryTypographyProps: {
                                    component: "span",
                                    color: "text.disabled"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        sx: {
                            whiteSpace: "nowrap"
                        },
                        children: phoneNumber
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        sx: {
                            whiteSpace: "nowrap"
                        },
                        children: company
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        sx: {
                            whiteSpace: "nowrap"
                        },
                        children: role
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                            variant: "soft",
                            color: status === "active" && "success" || status === "pending" && "warning" || status === "banned" && "error" || "default",
                            children: status
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                        align: "right",
                        sx: {
                            px: 1,
                            whiteSpace: "nowrap"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Quick Edit",
                                placement: "top",
                                arrow: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    color: quickEdit.value ? "inherit" : "default",
                                    onClick: quickEdit.onTrue,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "solar:pen-bold"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                color: popover.open ? "inherit" : "default",
                                onClick: popover.onOpen,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "eva:more-vertical-fill"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(UserQuickEditForm, {
                currentUser: row,
                open: quickEdit.value,
                onClose: quickEdit.onFalse
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

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputLabel/index.js
var InputLabel = __webpack_require__(97445);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControl/index.js
var FormControl = __webpack_require__(58111);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/OutlinedInput/index.js
var OutlinedInput = __webpack_require__(47459);
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Select/index.js
var Select = __webpack_require__(51892);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);
;// CONCATENATED MODULE: ./src/sections/user/user-table-toolbar.tsx


// @mui










// components


function UserTableToolbar({ filters, onFilters, //
roleOptions }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    const handleFilterName = (0,react_.useCallback)((event)=>{
        onFilters("name", event.target.value);
    }, [
        onFilters
    ]);
    const handleFilterRole = (0,react_.useCallback)((event)=>{
        onFilters("role", typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value);
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
                                md: 200
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                children: "Role"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Select_default()), {
                                multiple: true,
                                value: filters.role,
                                onChange: handleFilterRole,
                                input: /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                    label: "Role"
                                }),
                                renderValue: (selected)=>selected.map((value)=>value).join(", "),
                                MenuProps: {
                                    PaperProps: {
                                        sx: {
                                            maxHeight: 240
                                        }
                                    }
                                },
                                children: roleOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        value: option,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                disableRipple: true,
                                                size: "small",
                                                checked: filters.role.includes(option)
                                            }),
                                            option
                                        ]
                                    }, option))
                            })
                        ]
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
;// CONCATENATED MODULE: ./src/sections/user/user-table-filters-result.tsx
// @mui






// components

function UserTableFiltersResult({ filters, onFilters, //
onResetFilters, //
results, ...other }) {
    const handleRemoveStatus = ()=>{
        onFilters("status", "all");
    };
    const handleRemoveRole = (inputValue)=>{
        const newValue = filters.role.filter((item)=>item !== inputValue);
        onFilters("role", newValue);
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
                    filters.status !== "all" && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Status:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: filters.status,
                            onDelete: handleRemoveStatus
                        })
                    }),
                    !!filters.role.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Role:",
                        children: filters.role.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item,
                                size: "small",
                                onDelete: ()=>handleRemoveRole(item)
                            }, item))
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

;// CONCATENATED MODULE: ./src/sections/user/view/user-list-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui











// routes



// _mock

// hooks

// components







//



// ----------------------------------------------------------------------
const STATUS_OPTIONS = [
    {
        value: "all",
        label: "All"
    },
    ..._mock/* USER_STATUS_OPTIONS */.e$
];
const TABLE_HEAD = [
    {
        id: "name",
        label: "Name"
    },
    {
        id: "phoneNumber",
        label: "Phone Number",
        width: 180
    },
    {
        id: "company",
        label: "Company",
        width: 220
    },
    {
        id: "role",
        label: "Role",
        width: 180
    },
    {
        id: "status",
        label: "Status",
        width: 100
    },
    {
        id: "",
        width: 88
    }
];
const defaultFilters = {
    name: "",
    role: [],
    status: "all"
};
// ----------------------------------------------------------------------
function UserListView() {
    const table = (0,components_table/* useTable */.x6)();
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const router = (0,hooks/* useRouter */.tv)();
    const confirm = (0,use_boolean/* useBoolean */.k)();
    const [tableData, setTableData] = (0,react_.useState)(_mock/* _userList */.Xz);
    const [filters, setFilters] = (0,react_.useState)(defaultFilters);
    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: (0,components_table/* getComparator */.sQ)(table.order, table.orderBy),
        filters
    });
    const dataInPage = dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage);
    const denseHeight = table.dense ? 52 : 72;
    const canReset = !isEqual_default()(defaultFilters, filters);
    const notFound = !dataFiltered.length && canReset || !dataFiltered.length;
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
        router.push(paths/* paths */.H.dashboard.user.edit(id));
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
                                name: "User",
                                href: paths/* paths */.H.dashboard.user.root
                            },
                            {
                                name: "List"
                            }
                        ],
                        action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: components/* RouterLink */.r,
                            href: paths/* paths */.H.dashboard.user.new,
                            variant: "contained",
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "mingcute:add-line"
                            }),
                            children: "New User"
                        }),
                        sx: {
                            mb: {
                                xs: 3,
                                md: 5
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                                value: filters.status,
                                onChange: handleFilterStatus,
                                sx: {
                                    px: 2.5,
                                    boxShadow: (theme)=>`inset 0 -2px 0 0 ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
                                },
                                children: STATUS_OPTIONS.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        iconPosition: "end",
                                        value: tab.value,
                                        label: tab.label,
                                        icon: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(label/* default */.Z, {
                                            variant: (tab.value === "all" || tab.value === filters.status) && "filled" || "soft",
                                            color: tab.value === "active" && "success" || tab.value === "pending" && "warning" || tab.value === "banned" && "error" || "default",
                                            children: [
                                                tab.value === "all" && _mock/* _userList */.Xz.length,
                                                tab.value === "active" && _mock/* _userList */.Xz.filter((user)=>user.status === "active").length,
                                                tab.value === "pending" && _mock/* _userList */.Xz.filter((user)=>user.status === "pending").length,
                                                tab.value === "banned" && _mock/* _userList */.Xz.filter((user)=>user.status === "banned").length,
                                                tab.value === "rejected" && _mock/* _userList */.Xz.filter((user)=>user.status === "rejected").length
                                            ]
                                        })
                                    }, tab.value))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(UserTableToolbar, {
                                filters: filters,
                                onFilters: handleFilters,
                                //
                                roleOptions: _mock/* _roles */.YX
                            }),
                            canReset && /*#__PURE__*/ jsx_runtime_.jsx(UserTableFiltersResult, {
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
                                        action: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Delete",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                color: "primary",
                                                onClick: confirm.onTrue,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                    icon: "solar:trash-bin-trash-bold"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                                            size: table.dense ? "small" : "medium",
                                            sx: {
                                                minWidth: 960
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
                                                        dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage).map((row)=>/*#__PURE__*/ jsx_runtime_.jsx(UserTableRow, {
                                                                row: row,
                                                                selected: table.selected.includes(row.id),
                                                                onSelectRow: ()=>table.onSelectRow(row.id),
                                                                onDeleteRow: ()=>handleDeleteRow(row.id),
                                                                onEditRow: ()=>handleEditRow(row.id)
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
function applyFilter({ inputData, comparator, filters }) {
    const { name, status, role } = filters;
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
        inputData = inputData.filter((user)=>user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
    if (status !== "all") {
        inputData = inputData.filter((user)=>user.status === status);
    }
    if (role.length) {
        inputData = inputData.filter((user)=>role.includes(user.role));
    }
    return inputData;
}


/***/ }),

/***/ 85156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UserProfileView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tabs/index.js
var Tabs = __webpack_require__(87726);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/hooks/use-mocked-user.ts
var use_mocked_user = __webpack_require__(63820);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fab/index.js
var Fab = __webpack_require__(82272);
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputBase/index.js
var InputBase = __webpack_require__(73392);
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Unstable_Grid2/index.js
var Unstable_Grid2 = __webpack_require__(26566);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardHeader/index.js
var CardHeader = __webpack_require__(77782);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AvatarGroup/index.js
var AvatarGroup = __webpack_require__(71394);
var AvatarGroup_default = /*#__PURE__*/__webpack_require__.n(AvatarGroup);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
;// CONCATENATED MODULE: ./src/sections/user/profile-post-item.tsx


// @mui















// hooks

// utils


// components


function ProfilePostItem({ post }) {
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    const commentRef = (0,react_.useRef)(null);
    const fileRef = (0,react_.useRef)(null);
    const [message, setMessage] = (0,react_.useState)("");
    const handleChangeMessage = (0,react_.useCallback)((event)=>{
        setMessage(event.target.value);
    }, []);
    const handleAttach = (0,react_.useCallback)(()=>{
        if (fileRef.current) {
            fileRef.current.click();
        }
    }, []);
    const handleClickComment = (0,react_.useCallback)(()=>{
        if (commentRef.current) {
            commentRef.current.focus();
        }
    }, []);
    const renderHead = /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
        disableTypography: true,
        avatar: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: user?.photoURL,
            alt: user?.displayName
        }),
        title: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            color: "inherit",
            variant: "subtitle1",
            children: user?.displayName
        }),
        subheader: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            sx: {
                color: "text.disabled",
                typography: "caption",
                mt: 0.5
            },
            children: (0,format_time/* fDate */.Mu)(post.createdAt)
        }),
        action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: "eva:more-vertical-fill"
            })
        })
    });
    const renderCommentList = /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        spacing: 1.5,
        sx: {
            px: 3,
            pb: 2
        },
        children: post.comments.map((comment)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: comment.author.name,
                        src: comment.author.avatarUrl
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                        sx: {
                            p: 1.5,
                            flexGrow: 1,
                            bgcolor: "background.neutral"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                sx: {
                                    mb: 0.5
                                },
                                alignItems: {
                                    sm: "center"
                                },
                                justifyContent: "space-between",
                                direction: {
                                    xs: "column",
                                    sm: "row"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                        sx: {
                                            typography: "subtitle2"
                                        },
                                        children: comment.author.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                        sx: {
                                            typography: "caption",
                                            color: "text.disabled"
                                        },
                                        children: (0,format_time/* fDate */.Mu)(comment.createdAt)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                sx: {
                                    typography: "body2",
                                    color: "text.secondary"
                                },
                                children: comment.message
                            })
                        ]
                    })
                ]
            }, comment.id))
    });
    const renderInput = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        direction: "row",
        alignItems: "center",
        sx: {
            p: (theme)=>theme.spacing(0, 3, 3, 3)
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                src: user?.photoURL,
                alt: user?.displayName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((InputBase_default()), {
                fullWidth: true,
                value: message,
                inputRef: commentRef,
                placeholder: "Write a comment…",
                onChange: handleChangeMessage,
                endAdornment: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((InputAdornment_default()), {
                    position: "end",
                    sx: {
                        mr: 1
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: handleAttach,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:gallery-add-bold"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:smiling-face-fill"
                            })
                        })
                    ]
                }),
                sx: {
                    pl: 1.5,
                    height: 40,
                    borderRadius: 1,
                    border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.32)}`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "file",
                ref: fileRef,
                style: {
                    display: "none"
                }
            })
        ]
    });
    const renderActions = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            p: (theme)=>theme.spacing(2, 3, 3, 3)
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                    defaultChecked: true,
                    color: "error",
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:heart-bold"
                    }),
                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:heart-bold"
                    })
                }),
                label: (0,format_number/* fShortenNumber */.v1)(post.personLikes.length),
                sx: {
                    mr: 1
                }
            }),
            !!post.personLikes.length && /*#__PURE__*/ jsx_runtime_.jsx((AvatarGroup_default()), {
                sx: {
                    [`& .${AvatarGroup.avatarGroupClasses.avatar}`]: {
                        width: 32,
                        height: 32
                    }
                },
                children: post.personLikes.map((person)=>/*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: person.name,
                        src: person.avatarUrl
                    }, person.name))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    flexGrow: 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: handleClickComment,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:chat-round-dots-bold"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:share-bold"
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            renderHead,
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "body2",
                sx: {
                    p: (theme)=>theme.spacing(3, 3, 2, 3)
                },
                children: post.message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    p: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                    alt: post.media,
                    src: post.media,
                    ratio: "16/9",
                    sx: {
                        borderRadius: 1.5
                    }
                })
            }),
            renderActions,
            !!post.comments.length && renderCommentList,
            renderInput
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/user/profile-home.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui











// _mock

// utils

// components

//

function ProfileHome({ info, posts }) {
    const fileRef = (0,react_.useRef)(null);
    const handleAttach = ()=>{
        if (fileRef.current) {
            fileRef.current.click();
        }
    };
    const renderFollows = /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            py: 3,
            textAlign: "center",
            typography: "h4"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
            direction: "row",
            divider: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                orientation: "vertical",
                flexItem: true,
                sx: {
                    borderStyle: "dashed"
                }
            }),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    width: 1,
                    children: [
                        (0,format_number/* fNumber */.FK)(info.totalFollowers),
                        /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                            component: "span",
                            sx: {
                                color: "text.secondary",
                                typography: "body2"
                            },
                            children: "Follower"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    width: 1,
                    children: [
                        (0,format_number/* fNumber */.FK)(info.totalFollowing),
                        /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                            component: "span",
                            sx: {
                                color: "text.secondary",
                                typography: "body2"
                            },
                            children: "Following"
                        })
                    ]
                })
            ]
        })
    });
    const renderAbout = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "About"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2,
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            typography: "body2"
                        },
                        children: info.quote
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "mingcute:location-fill",
                                width: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                sx: {
                                    typography: "body2"
                                },
                                children: [
                                    `Live at `,
                                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        variant: "subtitle2",
                                        color: "inherit",
                                        children: info.country
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        sx: {
                            typography: "body2"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "fluent:mail-24-filled",
                                width: 24,
                                sx: {
                                    mr: 2
                                }
                            }),
                            info.email
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "ic:round-business-center",
                                width: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                sx: {
                                    typography: "body2"
                                },
                                children: [
                                    info.role,
                                    " ",
                                    `at `,
                                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        variant: "subtitle2",
                                        color: "inherit",
                                        children: info.company
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "ic:round-business-center",
                                width: 24
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                sx: {
                                    typography: "body2"
                                },
                                children: [
                                    `Studied at `,
                                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        variant: "subtitle2",
                                        color: "inherit",
                                        children: info.school
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
    const renderPostInput = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            p: 3
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((InputBase_default()), {
                multiline: true,
                fullWidth: true,
                rows: 4,
                placeholder: "Share what you are thinking here...",
                sx: {
                    p: 2,
                    mb: 3,
                    borderRadius: 1,
                    border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.2)}`
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        spacing: 1,
                        alignItems: "center",
                        sx: {
                            color: "text.secondary"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Fab_default()), {
                                size: "small",
                                color: "inherit",
                                variant: "softExtended",
                                onClick: handleAttach,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "solar:gallery-wide-bold",
                                        width: 24,
                                        sx: {
                                            color: "success.main"
                                        }
                                    }),
                                    "Image/Video"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Fab_default()), {
                                size: "small",
                                color: "inherit",
                                variant: "softExtended",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                        icon: "solar:videocamera-record-bold",
                                        width: 24,
                                        sx: {
                                            color: "error.main"
                                        }
                                    }),
                                    "Streaming"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        children: "Post"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: fileRef,
                type: "file",
                style: {
                    display: "none"
                }
            })
        ]
    });
    const renderSocials = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Social"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                spacing: 2,
                sx: {
                    p: 3
                },
                children: _mock/* _socials */._I.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        spacing: 2,
                        direction: "row",
                        sx: {
                            wordBreak: "break-all",
                            typography: "body2"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: link.icon,
                                width: 24,
                                sx: {
                                    flexShrink: 0,
                                    color: link.color
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Link_default()), {
                                color: "inherit",
                                children: [
                                    link.value === "facebook" && info.socialLinks.facebook,
                                    link.value === "instagram" && info.socialLinks.instagram,
                                    link.value === "linkedin" && info.socialLinks.linkedin,
                                    link.value === "twitter" && info.socialLinks.twitter
                                ]
                            })
                        ]
                    }, link.name))
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
        container: true,
        spacing: 3,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    spacing: 3,
                    children: [
                        renderFollows,
                        renderAbout,
                        renderSocials
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    spacing: 3,
                    children: [
                        renderPostInput,
                        posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(ProfilePostItem, {
                                post: post
                            }, post.id))
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
;// CONCATENATED MODULE: ./src/sections/user/profile-cover.tsx
// @mui






// theme

// ----------------------------------------------------------------------
function ProfileCover({ name, avatarUrl, role, coverUrl }) {
    const theme = (0,styles.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        sx: {
            ...(0,css/* bgGradient */.v3)({
                color: (0,styles.alpha)(theme.palette.primary.darker, 0.8),
                imgUrl: coverUrl
            }),
            height: 1,
            color: "common.white"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
            direction: {
                xs: "column",
                md: "row"
            },
            sx: {
                left: {
                    md: 24
                },
                bottom: {
                    md: 24
                },
                zIndex: {
                    md: 10
                },
                pt: {
                    xs: 6,
                    md: 0
                },
                position: {
                    md: "absolute"
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    src: avatarUrl,
                    alt: name,
                    sx: {
                        mx: "auto",
                        width: {
                            xs: 64,
                            md: 128
                        },
                        height: {
                            xs: 64,
                            md: 128
                        },
                        border: `solid 2px ${theme.palette.common.white}`
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                    sx: {
                        mt: 3,
                        ml: {
                            md: 3
                        },
                        textAlign: {
                            xs: "center",
                            md: "unset"
                        }
                    },
                    primary: name,
                    secondary: role,
                    primaryTypographyProps: {
                        typography: "h4"
                    },
                    secondaryTypographyProps: {
                        mt: 0.5,
                        color: "inherit",
                        component: "span",
                        typography: "body2",
                        sx: {
                            opacity: 0.48
                        }
                    }
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./src/components/search-not-found/index.ts + 1 modules
var search_not_found = __webpack_require__(271);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/user/profile-friends.tsx
// @mui












// _mock

// components



function ProfileFriends({ friends, searchFriends, onSearchFriends }) {
    const dataFiltered = applyFilter({
        inputData: friends,
        query: searchFriends
    });
    const notFound = !dataFiltered.length && !!searchFriends;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2,
                justifyContent: "space-between",
                direction: {
                    xs: "column",
                    sm: "row"
                },
                sx: {
                    my: 5
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h4",
                        children: "Friends"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        value: searchFriends,
                        onChange: onSearchFriends,
                        placeholder: "Search friends...",
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
                        },
                        sx: {
                            width: {
                                xs: 1,
                                sm: 260
                            }
                        }
                    })
                ]
            }),
            notFound ? /*#__PURE__*/ jsx_runtime_.jsx(search_not_found/* default */.Z, {
                query: searchFriends,
                sx: {
                    mt: 10
                }
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)"
                },
                children: dataFiltered.map((friend)=>/*#__PURE__*/ jsx_runtime_.jsx(FriendCard, {
                        friend: friend
                    }, friend.id))
            })
        ]
    });
}
function FriendCard({ friend }) {
    const { name, role, avatarUrl } = friend;
    const popover = (0,custom_popover/* usePopover */.S)();
    const handleDelete = ()=>{
        popover.onClose();
        console.info("DELETE", name);
    };
    const handleEdit = ()=>{
        popover.onClose();
        console.info("EDIT", name);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                sx: {
                    py: 5,
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: name,
                        src: avatarUrl,
                        sx: {
                            width: 64,
                            height: 64,
                            mb: 3
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        variant: "subtitle1",
                        color: "text.primary",
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary",
                            mb: 1,
                            mt: 0.5
                        },
                        children: role
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                        alignItems: "center",
                        justifyContent: "center",
                        direction: "row",
                        children: _mock/* _socials */._I.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                sx: {
                                    color: social.color,
                                    "&:hover": {
                                        bgcolor: (0,styles.alpha)(social.color, 0.08)
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: social.icon
                                })
                            }, social.name))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        color: popover.open ? "inherit" : "default",
                        onClick: popover.onOpen,
                        sx: {
                            top: 8,
                            right: 8,
                            position: "absolute"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:more-vertical-fill"
                        })
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
                        onClick: handleDelete,
                        sx: {
                            color: "error.main"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:trash-bin-trash-bold"
                            }),
                            "Delete"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: handleEdit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:pen-bold"
                            }),
                            "Edit"
                        ]
                    })
                ]
            })
        ]
    });
}
// ----------------------------------------------------------------------
function applyFilter({ inputData, query }) {
    if (query) {
        return inputData.filter((friend)=>friend.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return inputData;
}

// EXTERNAL MODULE: ./src/components/lightbox/index.ts + 3 modules
var components_lightbox = __webpack_require__(9216);
;// CONCATENATED MODULE: ./src/sections/user/profile-gallery.tsx
// @mui







// utils

// components



function ProfileGallery({ gallery }) {
    const theme = (0,styles.useTheme)();
    const slides = gallery.map((slide)=>({
            src: slide.imageUrl
        }));
    const lightbox = (0,components_lightbox/* useLightBox */.NX)(slides);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h4",
                sx: {
                    my: 5
                },
                children: "Gallery"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)"
                },
                children: gallery.map((image)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                        sx: {
                            cursor: "pointer",
                            color: "common.white"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                color: "inherit",
                                sx: {
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                    zIndex: 9
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "eva:more-vertical-fill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                sx: {
                                    p: 3,
                                    left: 0,
                                    width: 1,
                                    bottom: 0,
                                    zIndex: 9,
                                    position: "absolute"
                                },
                                primary: image.title,
                                secondary: (0,format_time/* fDate */.Mu)(image.postedAt),
                                primaryTypographyProps: {
                                    noWrap: true,
                                    typography: "subtitle1"
                                },
                                secondaryTypographyProps: {
                                    mt: 0.5,
                                    color: "inherit",
                                    component: "span",
                                    typography: "body2",
                                    sx: {
                                        opacity: 0.48
                                    }
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                alt: "gallery",
                                ratio: "1/1",
                                src: image.imageUrl,
                                onClick: ()=>lightbox.onOpen(image.imageUrl),
                                overlay: `linear-gradient(to bottom, ${(0,styles.alpha)(theme.palette.grey[900], 0)} 0%, ${theme.palette.grey[900]} 75%)`
                            })
                        ]
                    }, image.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_lightbox/* default */.ZP, {
                index: lightbox.selected,
                slides: slides,
                open: lightbox.open,
                close: lightbox.onClose
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/user/profile-followers.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui






// components

function ProfileFollowers({ followers }) {
    const _mockFollowed = followers.slice(4, 8).map((i)=>i.id);
    const [followed, setFollowed] = (0,react_.useState)(_mockFollowed);
    const handleClick = (0,react_.useCallback)((item)=>{
        const selected = followed.includes(item) ? followed.filter((value)=>value !== item) : [
            ...followed,
            item
        ];
        setFollowed(selected);
    }, [
        followed
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h4",
                sx: {
                    my: 5
                },
                children: "Followers"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)"
                },
                children: followers.map((follower)=>/*#__PURE__*/ jsx_runtime_.jsx(FollowerItem, {
                        follower: follower,
                        selected: followed.includes(follower.id),
                        onSelected: ()=>handleClick(follower.id)
                    }, follower.id))
            })
        ]
    });
}
function FollowerItem({ follower, selected, onSelected }) {
    const { name, country, avatarUrl } = follower;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            display: "flex",
            alignItems: "center",
            p: (theme)=>theme.spacing(3, 2, 3, 3)
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                alt: name,
                src: avatarUrl,
                sx: {
                    width: 48,
                    height: 48,
                    mr: 2
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                primary: name,
                secondary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "mingcute:location-fill",
                            width: 16,
                            sx: {
                                flexShrink: 0,
                                mr: 0.5
                            }
                        }),
                        country,
                        " country country country country country country country country country"
                    ]
                }),
                primaryTypographyProps: {
                    noWrap: true,
                    typography: "subtitle2"
                },
                secondaryTypographyProps: {
                    mt: 0.5,
                    noWrap: true,
                    display: "flex",
                    component: "span",
                    alignItems: "center",
                    typography: "caption",
                    color: "text.disabled"
                }
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
                sx: {
                    flexShrink: 0,
                    ml: 1.5
                },
                children: selected ? "Followed" : "Follow"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/user/view/user-profile-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui




// routes

// hooks

// _mock

// components



//





// ----------------------------------------------------------------------
const TABS = [
    {
        value: "profile",
        label: "Profile",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:user-id-bold",
            width: 24
        })
    },
    {
        value: "followers",
        label: "Followers",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:heart-bold",
            width: 24
        })
    },
    {
        value: "friends",
        label: "Friends",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:users-group-rounded-bold",
            width: 24
        })
    },
    {
        value: "gallery",
        label: "Gallery",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "solar:gallery-wide-bold",
            width: 24
        })
    }
];
// ----------------------------------------------------------------------
function UserProfileView() {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const { user } = (0,use_mocked_user/* useMockedUser */.I)();
    const [searchFriends, setSearchFriends] = (0,react_.useState)("");
    const [currentTab, setCurrentTab] = (0,react_.useState)("profile");
    const handleChangeTab = (0,react_.useCallback)((event, newValue)=>{
        setCurrentTab(newValue);
    }, []);
    const handleSearchFriends = (0,react_.useCallback)((event)=>{
        setSearchFriends(event.target.value);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(custom_breadcrumbs/* default */.Z, {
                heading: "Profile",
                links: [
                    {
                        name: "Dashboard",
                        href: paths/* paths */.H.dashboard.root
                    },
                    {
                        name: "User",
                        href: paths/* paths */.H.dashboard.user.root
                    },
                    {
                        name: user?.displayName
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                sx: {
                    mb: 3,
                    height: 290
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ProfileCover, {
                        role: _mock/* _userAbout */.oE.role,
                        name: user?.displayName,
                        avatarUrl: user?.photoURL,
                        coverUrl: _mock/* _userAbout */.oE.coverUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                        value: currentTab,
                        onChange: handleChangeTab,
                        sx: {
                            width: 1,
                            bottom: 0,
                            zIndex: 9,
                            position: "absolute",
                            bgcolor: "background.paper",
                            [`& .${Tabs.tabsClasses.flexContainer}`]: {
                                pr: {
                                    md: 3
                                },
                                justifyContent: {
                                    sm: "center",
                                    md: "flex-end"
                                }
                            }
                        },
                        children: TABS.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                value: tab.value,
                                icon: tab.icon,
                                label: tab.label
                            }, tab.value))
                    })
                ]
            }),
            currentTab === "profile" && /*#__PURE__*/ jsx_runtime_.jsx(ProfileHome, {
                info: _mock/* _userAbout */.oE,
                posts: _mock/* _userFeeds */.c8
            }),
            currentTab === "followers" && /*#__PURE__*/ jsx_runtime_.jsx(ProfileFollowers, {
                followers: _mock/* _userFollowers */.gY
            }),
            currentTab === "friends" && /*#__PURE__*/ jsx_runtime_.jsx(ProfileFriends, {
                friends: _mock/* _userFriends */.fw,
                searchFriends: searchFriends,
                onSearchFriends: handleSearchFriends
            }),
            currentTab === "gallery" && /*#__PURE__*/ jsx_runtime_.jsx(ProfileGallery, {
                gallery: _mock/* _userGallery */.BU
            })
        ]
    });
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

/***/ 94965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FQ: () => (/* reexport */ user_cards_view),
  BS: () => (/* reexport */ user_create_view),
  cw: () => (/* reexport */ user_edit_view),
  Qu: () => (/* reexport */ user_list_view),
  Nj: () => (/* reexport */ user_profile_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/user/view/user-edit-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/user/view/user-edit-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const user_edit_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/user/view/user-list-view.tsx

const user_list_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/user/view/user-list-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: user_list_view_esModule, $$typeof: user_list_view_$$typeof } = user_list_view_proxy;
const user_list_view_default_ = user_list_view_proxy.default;


/* harmony default export */ const user_list_view = (user_list_view_default_);
;// CONCATENATED MODULE: ./src/sections/user/view/user-cards-view.tsx

const user_cards_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/user/view/user-cards-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: user_cards_view_esModule, $$typeof: user_cards_view_$$typeof } = user_cards_view_proxy;
const user_cards_view_default_ = user_cards_view_proxy.default;


/* harmony default export */ const user_cards_view = (user_cards_view_default_);
;// CONCATENATED MODULE: ./src/sections/user/view/user-create-view.tsx

const user_create_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/user/view/user-create-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: user_create_view_esModule, $$typeof: user_create_view_$$typeof } = user_create_view_proxy;
const user_create_view_default_ = user_create_view_proxy.default;


/* harmony default export */ const user_create_view = (user_create_view_default_);
;// CONCATENATED MODULE: ./src/sections/user/view/user-profile-view.tsx

const user_profile_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/user/view/user-profile-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: user_profile_view_esModule, $$typeof: user_profile_view_$$typeof } = user_profile_view_proxy;
const user_profile_view_default_ = user_profile_view_proxy.default;


/* harmony default export */ const user_profile_view = (user_profile_view_default_);
;// CONCATENATED MODULE: ./src/sections/user/view/index.ts







/***/ })

};
;