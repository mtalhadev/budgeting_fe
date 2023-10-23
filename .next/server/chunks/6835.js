"use strict";
exports.id = 6835;
exports.ids = [6835];
exports.modules = {

/***/ 37210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ image_image)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/build/index.js
var build = __webpack_require__(89177);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/image/utils.ts
// ----------------------------------------------------------------------
function getRatio(ratio = "1/1") {
    return ({
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%"
    })[ratio];
}

;// CONCATENATED MODULE: ./src/components/image/image.tsx



// @mui


//

// ----------------------------------------------------------------------
const Image = /*#__PURE__*/ (0,react_.forwardRef)(({ ratio, overlay, disabledEffect = false, //
alt, src, afterLoad, delayTime, threshold, beforeLoad, delayMethod, placeholder, wrapperProps, scrollPosition, effect = "blur", visibleByDefault, wrapperClassName, useIntersectionObserver, sx, ...other }, ref)=>{
    const theme = (0,styles.useTheme)();
    const overlayStyles = !!overlay && {
        "&:before": {
            content: "''",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 1,
            position: "absolute",
            background: overlay || (0,styles.alpha)(theme.palette.grey[900], 0.48)
        }
    };
    const content = /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: build.LazyLoadImage,
        //
        alt: alt,
        src: src,
        afterLoad: afterLoad,
        delayTime: delayTime,
        threshold: threshold,
        beforeLoad: beforeLoad,
        delayMethod: delayMethod,
        placeholder: placeholder,
        wrapperProps: wrapperProps,
        scrollPosition: scrollPosition,
        visibleByDefault: visibleByDefault,
        effect: disabledEffect ? undefined : effect,
        useIntersectionObserver: useIntersectionObserver,
        wrapperClassName: wrapperClassName || "component-image-wrapper",
        placeholderSrc: disabledEffect ? "/assets/transparent.png" : "/assets/placeholder.svg",
        //
        sx: {
            width: 1,
            height: 1,
            objectFit: "cover",
            verticalAlign: "bottom",
            ...!!ratio && {
                top: 0,
                left: 0,
                position: "absolute"
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        ref: ref,
        component: "span",
        className: "component-image",
        sx: {
            overflow: "hidden",
            position: "relative",
            verticalAlign: "bottom",
            display: "inline-block",
            ...!!ratio && {
                width: 1
            },
            "& span.component-image-wrapper": {
                width: 1,
                height: 1,
                verticalAlign: "bottom",
                backgroundSize: "cover !important",
                ...!!ratio && {
                    pt: getRatio(ratio)
                }
            },
            ...overlayStyles,
            ...sx
        },
        children: content
    });
});
/* harmony default export */ const image_image = (Image);

;// CONCATENATED MODULE: ./src/components/image/index.ts




/***/ }),

/***/ 46835:
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
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37210);
/* harmony import */ var src_components_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42815);



// @mui


// components


function MapMarkersPopups({ data, ...other }) {
    const [popupInfo, setPopupInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_map_gl__WEBPACK_IMPORTED_MODULE_2___default()), {
        initialViewState: {
            zoom: 2
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_map__WEBPACK_IMPORTED_MODULE_4__/* .MapControl */ .ZM, {}),
            data.map((city, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_map__WEBPACK_IMPORTED_MODULE_4__/* .MapMarker */ .O_, {
                    latitude: city.latlng[0],
                    longitude: city.latlng[1],
                    onClick: (event)=>{
                        event.originalEvent.stopPropagation();
                        setPopupInfo(city);
                    }
                }, `marker-${index}`)),
            popupInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_map__WEBPACK_IMPORTED_MODULE_4__/* .MapPopup */ .Ct, {
                latitude: popupInfo.latlng[0],
                longitude: popupInfo.latlng[1],
                onClose: ()=>setPopupInfo(null),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    sx: {
                        color: "common.white"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            sx: {
                                mb: 1,
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    sx: {
                                        height: "18px",
                                        minWidth: "28px",
                                        marginRight: "8px",
                                        borderRadius: "4px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundImage: `url(https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${popupInfo.country_code.toLowerCase()}.svg)`
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    variant: "subtitle2",
                                    children: popupInfo.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                            component: "div",
                            variant: "caption",
                            children: [
                                "Timezones: ",
                                popupInfo.timezones
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                            component: "div",
                            variant: "caption",
                            children: [
                                "Lat: ",
                                popupInfo.latlng[0]
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                            component: "div",
                            variant: "caption",
                            children: [
                                "Long: ",
                                popupInfo.latlng[1]
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            alt: popupInfo.name,
                            src: popupInfo.photoUrl,
                            ratio: "4/3",
                            sx: {
                                mt: 1,
                                borderRadius: 1
                            }
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MapMarkersPopups));


/***/ })

};
;