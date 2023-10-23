"use strict";
exports.id = 3896;
exports.ids = [3896];
exports.modules = {

/***/ 53896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AuthModernLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76267);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16854);
/* harmony import */ var src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59099);
/* harmony import */ var src_components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9162);
// @mui




// hooks

// components

function AuthModernLayout({ children, image }) {
    const upMd = (0,src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_2__/* .useResponsive */ .F)("up", "md");
    const renderContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        sx: {
            width: 1,
            mx: "auto",
            maxWidth: 480,
            px: {
                xs: 2,
                md: 8
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                sx: {
                    mt: {
                        xs: 2,
                        md: 8
                    },
                    mb: {
                        xs: 10,
                        md: 8
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    py: {
                        xs: 5,
                        md: 0
                    },
                    px: {
                        xs: 3,
                        md: 0
                    },
                    boxShadow: {
                        md: "none"
                    },
                    overflow: {
                        md: "unset"
                    },
                    bgcolor: {
                        md: "background.default"
                    }
                },
                children: children
            })
        ]
    });
    const renderSection = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        flexGrow: 1,
        sx: {
            position: "relative"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
            component: "img",
            alt: "auth",
            src: image || "/assets/background/overlay_3.jpg",
            sx: {
                top: 16,
                left: 16,
                objectFit: "cover",
                position: "absolute",
                width: "calc(100% - 32px)",
                height: "calc(100% - 32px)"
            }
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        component: "main",
        direction: "row",
        sx: {
            minHeight: "100vh",
            position: "relative",
            "&:before": {
                width: 1,
                height: 1,
                zIndex: -1,
                content: "''",
                position: "absolute",
                backgroundSize: "cover",
                opacity: {
                    xs: 0.24,
                    md: 0
                },
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundImage: "url(/assets/background/overlay_4.jpg)"
            }
        },
        children: [
            renderContent,
            upMd && renderSection
        ]
    });
}


/***/ })

};
;