"use strict";
exports.id = 5200;
exports.ids = [5200];
exports.modules = {

/***/ 65200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AuthClassicLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_auth_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40529);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59099);
/* harmony import */ var src_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71745);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9162);
// @mui





// auth

// routes

// hooks

// theme

// components

// ----------------------------------------------------------------------
const METHODS = [
    {
        id: "jwt",
        label: "Jwt",
        path: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.auth.jwt.login,
        icon: "/assets/icons/auth/ic_jwt.svg"
    }
];
function AuthClassicLayout({ children, image, title }) {
    const { method } = (0,src_auth_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAuthContext */ .E)();
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const upMd = (0,src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_6__/* .useResponsive */ .F)("up", "md");
    const renderLogo = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        sx: {
            zIndex: 9,
            position: "absolute",
            m: {
                xs: 2,
                md: 5
            }
        }
    });
    const renderContent = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], {
        sx: {
            width: 1,
            mx: "auto",
            maxWidth: 480,
            px: {
                xs: 2,
                md: 8
            },
            py: {
                xs: 15,
                md: 30
            }
        },
        children: children
    });
    const renderSection = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        spacing: 10,
        sx: {
            ...(0,src_theme_css__WEBPACK_IMPORTED_MODULE_3__/* .bgGradient */ .v3)({
                color: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.background.default, theme.palette.mode === "light" ? 0.88 : 0.94),
                imgUrl: "/assets/background/overlay_2.jpg"
            })
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                variant: "h3",
                sx: {
                    maxWidth: 480,
                    textAlign: "center"
                },
                children: title || "Hi, Welcome back"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
                component: "img",
                alt: "auth",
                src: image || "/assets/illustrations/illustration_dashboard.png",
                sx: {
                    maxWidth: 720
                }
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], {
        component: "main",
        direction: "row",
        sx: {
            minHeight: "100vh"
        },
        children: [
            renderLogo,
            upMd && renderSection,
            renderContent
        ]
    });
}


/***/ })

};
;