"use strict";
exports.id = 5585;
exports.ids = [5585];
exports.modules = {

/***/ 5585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ AuthModernCompactLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76267);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26053);
// @mui



//

function AuthModernCompactLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_1__/* .HeaderSimple */ ._z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
                component: "main",
                sx: {
                    py: 12,
                    display: "flex",
                    minHeight: "100vh",
                    textAlign: "center",
                    px: {
                        xs: 2,
                        md: 0
                    },
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:before": {
                        width: 1,
                        height: 1,
                        zIndex: -1,
                        content: "''",
                        opacity: 0.24,
                        position: "absolute",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundImage: "url(/assets/background/overlay_4.jpg)"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
                    sx: {
                        py: 5,
                        px: 3,
                        maxWidth: 420
                    },
                    children: children
                })
            })
        ]
    });
}


/***/ })

};
;