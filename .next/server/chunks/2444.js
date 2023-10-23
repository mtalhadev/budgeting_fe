"use strict";
exports.id = 2444;
exports.ids = [2444];
exports.modules = {

/***/ 82444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31678);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42815);



// @mui

// components

// ----------------------------------------------------------------------
function MapGeoJSONAnimation({ ...other }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const pointLayer = {
        id: "point",
        type: "circle",
        paint: {
            "circle-radius": 10,
            "circle-color": theme.palette.error.main
        }
    };
    const [pointData, setPointData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animation = window.requestAnimationFrame(()=>setPointData(pointOnCircle({
                center: [
                    -100,
                    0
                ],
                angle: Date.now() / 1000,
                radius: 20
            })));
        return ()=>window.cancelAnimationFrame(animation);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_map_gl__WEBPACK_IMPORTED_MODULE_2___default()), {
        initialViewState: {
            latitude: 0,
            longitude: -100,
            zoom: 3
        },
        mapStyle: "mapbox://styles/mapbox/satellite-streets-v11",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_map__WEBPACK_IMPORTED_MODULE_3__/* .MapControl */ .ZM, {}),
            pointData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Source, {
                type: "geojson",
                data: pointData,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Layer, {
                    ...pointLayer
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MapGeoJSONAnimation));
// ----------------------------------------------------------------------
function pointOnCircle({ center, angle, radius }) {
    return {
        type: "Point",
        coordinates: [
            center[0] + Math.cos(angle) * radius,
            center[1] + Math.sin(angle) * radius
        ]
    };
}


/***/ })

};
;