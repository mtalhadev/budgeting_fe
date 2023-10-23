"use strict";
exports.id = 2815;
exports.ids = [2815];
exports.modules = {

/***/ 42815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZM: () => (/* reexport */ MapControl),
  O_: () => (/* reexport */ MapMarker),
  Ct: () => (/* reexport */ MapPopup),
  qT: () => (/* reexport */ StyledControlPanel)
});

// UNUSED EXPORTS: StyledMapControls, StyledPopup

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/es5/index.js
var es5 = __webpack_require__(31678);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/GlobalStyles/index.js
var GlobalStyles = __webpack_require__(53868);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
;// CONCATENATED MODULE: ./src/components/map/styles.tsx


// @mui


// theme

// ----------------------------------------------------------------------
function StyledMapControls() {
    const theme = (0,styles.useTheme)();
    const inputGlobalStyles = /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles["default"], {
        styles: {
            ".mapboxgl-ctrl.mapboxgl-ctrl-group": {
                borderRadius: "8px",
                boxShadow: theme.customShadows.z8
            },
            ".mapboxgl-ctrl-zoom-in": {
                borderRadius: "8px 8px 0 0"
            },
            ".mapboxgl-ctrl-compass": {
                borderRadius: "0 0 8px 8px"
            },
            ".mapboxgl-ctrl-fullscreen": {
                ".mapboxgl-ctrl-icon": {
                    transform: " scale(0.75)"
                }
            },
            ".mapboxgl-ctrl-group button+button": {
                borderTop: `1px solid ${theme.palette.divider}`
            },
            ".mapboxgl-ctrl.mapboxgl-ctrl-scale": {
                border: "none",
                lineHeight: "14px",
                borderRadius: "4px",
                color: theme.palette.common.white,
                fontWeight: theme.typography.fontWeightBold,
                backgroundImage: `linear-gradient(to right, #8a2387, #e94057, #f27121)`
            }
        }
    });
    return inputGlobalStyles;
}
// ----------------------------------------------------------------------
const StyledPopup = (0,styles.styled)(es5.Popup)(({ theme })=>{
    const isRTL = theme.direction === "rtl";
    return {
        "& .mapboxgl-popup-content": {
            maxWidth: 180,
            padding: theme.spacing(1),
            boxShadow: theme.customShadows.z20,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.grey[800]
        },
        "& .mapboxgl-popup-close-button": {
            width: 24,
            height: 24,
            fontSize: 16,
            opacity: 0.48,
            color: theme.palette.common.white,
            right: isRTL && "0",
            left: isRTL && "auto",
            "&:hover": {
                opacity: 1
            },
            "&:focus": {
                outline: "none"
            }
        },
        "&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip": {
            marginBottom: -1,
            borderBottomColor: theme.palette.grey[800]
        },
        "&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip": {
            marginLeft: -1,
            borderLeftColor: theme.palette.grey[800]
        },
        "&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip": {
            marginTop: -1,
            borderTopColor: theme.palette.grey[800]
        },
        "&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip": {
            marginRight: -1,
            borderRightColor: theme.palette.grey[800]
        }
    };
});
// ----------------------------------------------------------------------
const StyledControlPanel = (0,styles.styled)("div")(({ theme })=>({
        ...(0,css/* bgBlur */.Ls)({
            color: theme.palette.grey[900]
        }),
        zIndex: 9,
        minWidth: 200,
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(1),
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius
    }));

;// CONCATENATED MODULE: ./src/components/map/map-popup.tsx

//

// ----------------------------------------------------------------------
function MapPopup({ sx, children, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledPopup, {
        anchor: "bottom",
        sx: sx,
        ...other,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/map/map-marker.tsx


// @mui

// ----------------------------------------------------------------------
const SIZE = 20;
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
// ----------------------------------------------------------------------
function MapMarker({ ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(es5.Marker, {
        ...other,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            component: "svg",
            viewBox: "0 0 24 24",
            sx: {
                height: SIZE,
                stroke: "none",
                cursor: "pointer",
                fill: (theme)=>theme.palette.error.main,
                transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: ICON
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/map/map-control.tsx


//

function MapControl({ hideScaleControl, hideGeolocateControl, hideFullscreenControl, hideNavigationnControl }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledMapControls, {}),
            !hideGeolocateControl && /*#__PURE__*/ jsx_runtime_.jsx(es5.GeolocateControl, {
                position: "top-left",
                positionOptions: {
                    enableHighAccuracy: true
                }
            }),
            !hideFullscreenControl && /*#__PURE__*/ jsx_runtime_.jsx(es5.FullscreenControl, {
                position: "top-left"
            }),
            !hideScaleControl && /*#__PURE__*/ jsx_runtime_.jsx(es5.ScaleControl, {
                position: "bottom-left"
            }),
            !hideNavigationnControl && /*#__PURE__*/ jsx_runtime_.jsx(es5.NavigationControl, {
                position: "bottom-left"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/map/index.ts







/***/ })

};
;