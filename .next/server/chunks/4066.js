"use strict";
exports.id = 4066;
exports.ids = [4066];
exports.modules = {

/***/ 94066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ change_theme)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/RadioGroup/index.js
var RadioGroup = __webpack_require__(17784);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/change-theme/control-panel.tsx


// @mui




// components

function ControlPanel({ themes, selectTheme, onChangeTheme }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(map/* StyledControlPanel */.qT, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                gutterBottom: true,
                variant: "subtitle2",
                sx: {
                    color: "common.white"
                },
                children: "Select Theme:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RadioGroup/* default */.ZP, {
                value: selectTheme,
                onChange: (event, newValue)=>onChangeTheme(newValue),
                children: Object.keys(themes).map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                        value: item,
                        control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                            size: "small"
                        }),
                        label: item,
                        sx: {
                            color: "common.white",
                            textTransform: "capitalize"
                        }
                    }, item))
            })
        ]
    });
}
/* harmony default export */ const control_panel = (/*#__PURE__*/(0,react_.memo)(ControlPanel));

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/change-theme/index.tsx



// components

//

function MapChangeTheme({ themes, ...other }) {
    const [selectTheme, setSelectTheme] = (0,react_.useState)("outdoors");
    const handleChangeTheme = (0,react_.useCallback)((value)=>setSelectTheme(value), []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((es5_default()), {
                initialViewState: {
                    latitude: 37.785164,
                    longitude: -100,
                    zoom: 3.5,
                    bearing: 0,
                    pitch: 0
                },
                mapStyle: themes?.[selectTheme],
                children: /*#__PURE__*/ jsx_runtime_.jsx(map/* MapControl */.ZM, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(control_panel, {
                themes: themes,
                selectTheme: selectTheme,
                onChangeTheme: handleChangeTheme
            })
        ]
    });
}
/* harmony default export */ const change_theme = (/*#__PURE__*/(0,react_.memo)(MapChangeTheme));


/***/ })

};
;