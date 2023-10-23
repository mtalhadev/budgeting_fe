"use strict";
exports.id = 2742;
exports.ids = [2742];
exports.modules = {

/***/ 2742:
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
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42815);



// @mui


// components

// ----------------------------------------------------------------------
function MapHighlightByFilter({ ...other }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const countiesLayer = {
        id: "counties",
        type: "fill",
        "source-layer": "original",
        paint: {
            "fill-outline-color": theme.palette.grey[900],
            "fill-color": theme.palette.grey[900],
            "fill-opacity": 0.12
        }
    };
    const highlightLayer = {
        id: "counties-highlighted",
        type: "fill",
        source: "counties",
        "source-layer": "original",
        paint: {
            "fill-outline-color": theme.palette.error.main,
            "fill-color": theme.palette.error.main,
            "fill-opacity": 0.48
        }
    };
    const [hoverInfo, setHoverInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onHover = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const county = event.features && event.features[0];
        setHoverInfo({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
            countyName: county && county.properties?.COUNTY
        });
    }, []);
    const selectedCounty = hoverInfo && hoverInfo.countyName || "";
    const filter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            "in",
            "COUNTY",
            selectedCounty
        ], [
        selectedCounty
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_map_gl__WEBPACK_IMPORTED_MODULE_2___default()), {
        initialViewState: {
            latitude: 38.88,
            longitude: -98,
            zoom: 3
        },
        minZoom: 2,
        onMouseMove: onHover,
        interactiveLayerIds: [
            "counties"
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_map__WEBPACK_IMPORTED_MODULE_3__/* .MapControl */ .ZM, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Source, {
                type: "vector",
                url: "mapbox://mapbox.82pkq93d",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Layer, {
                        beforeId: "waterway-label",
                        ...countiesLayer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Layer, {
                        beforeId: "waterway-label",
                        ...highlightLayer,
                        filter: filter
                    })
                ]
            }),
            selectedCounty && hoverInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_map__WEBPACK_IMPORTED_MODULE_3__/* .MapPopup */ .Ct, {
                longitude: hoverInfo.longitude,
                latitude: hoverInfo.latitude,
                closeButton: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                    variant: "body2",
                    sx: {
                        color: "common.white"
                    },
                    children: selectedCounty
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MapHighlightByFilter));


/***/ })

};
;