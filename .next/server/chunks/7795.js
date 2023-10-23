"use strict";
exports.id = 7795;
exports.ids = [7795];
exports.modules = {

/***/ 7795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ viewport_animation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/es5/index.js
var es5 = __webpack_require__(31678);
var es5_default = /*#__PURE__*/__webpack_require__.n(es5);
// EXTERNAL MODULE: ./src/components/map/index.ts + 4 modules
var map = __webpack_require__(42815);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Radio/index.js
var Radio = __webpack_require__(49696);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/RadioGroup/index.js
var RadioGroup = __webpack_require__(17784);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/viewport-animation/control-panel.tsx


// @mui



// components

function ControlPanel({ data, selectedCity, onSelectCity }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(map/* StyledControlPanel */.qT, {
        children: data.map((city)=>/*#__PURE__*/ jsx_runtime_.jsx(RadioGroup/* default */.ZP, {
                value: selectedCity,
                onChange: (event)=>onSelectCity(event, city),
                children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                    value: city.city,
                    label: city.city,
                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                        size: "small"
                    }),
                    sx: {
                        color: "common.white"
                    }
                })
            }, city.city))
    });
}
/* harmony default export */ const control_panel = (/*#__PURE__*/(0,react_.memo)(ControlPanel));

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/viewport-animation/index.tsx



// components

//

function MapViewportAnimation({ data, ...other }) {
    const mapRef = (0,react_.useRef)(null);
    const [selectedCity, setSelectedCity] = (0,react_.useState)(data[2].city);
    const onSelectCity = (0,react_.useCallback)((event, { longitude, latitude })=>{
        setSelectedCity(event.target.value);
        mapRef.current?.flyTo({
            center: [
                longitude,
                latitude
            ],
            duration: 2000
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((es5_default()), {
        initialViewState: {
            latitude: 37.7751,
            longitude: -122.4193,
            zoom: 11,
            bearing: 0,
            pitch: 0
        },
        ref: mapRef,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(map/* MapControl */.ZM, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(control_panel, {
                data: data,
                selectedCity: selectedCity,
                onSelectCity: onSelectCity
            })
        ]
    });
}
/* harmony default export */ const viewport_animation = (/*#__PURE__*/(0,react_.memo)(MapViewportAnimation));


/***/ })

};
;