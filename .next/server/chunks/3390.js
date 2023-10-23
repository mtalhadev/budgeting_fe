"use strict";
exports.id = 3390;
exports.ids = [3390];
exports.modules = {

/***/ 83390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ side_by_side)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/es5/index.js
var es5 = __webpack_require__(31678);
var es5_default = /*#__PURE__*/__webpack_require__.n(es5);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ToggleButton/index.js
var ToggleButton = __webpack_require__(50117);
var ToggleButton_default = /*#__PURE__*/__webpack_require__.n(ToggleButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ToggleButtonGroup/index.js
var ToggleButtonGroup = __webpack_require__(10239);
var ToggleButtonGroup_default = /*#__PURE__*/__webpack_require__.n(ToggleButtonGroup);
// EXTERNAL MODULE: ./src/components/map/index.ts + 4 modules
var map = __webpack_require__(42815);
;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/side-by-side/control-panel.tsx


// @mui


// components

function ControlPanel({ mode, onModeChange }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(map/* StyledControlPanel */.qT, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ToggleButtonGroup_default()), {
            color: "primary",
            value: mode,
            exclusive: true,
            onChange: onModeChange,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((ToggleButton_default()), {
                    value: "side-by-side",
                    children: "Side by side"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((ToggleButton_default()), {
                    value: "split-screen",
                    children: "Split screen"
                })
            ]
        })
    });
}
/* harmony default export */ const control_panel = (/*#__PURE__*/(0,react_.memo)(ControlPanel));

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/side-by-side/index.tsx



//

// ----------------------------------------------------------------------
const LeftMapStyle = {
    position: "absolute",
    width: "50%",
    height: "100%"
};
const RightMapStyle = {
    position: "absolute",
    left: "50%",
    width: "50%",
    height: "100%"
};
// ----------------------------------------------------------------------
function MapSideBySide({ ...other }) {
    const [viewState, setViewState] = (0,react_.useState)({
        longitude: -122.43,
        latitude: 37.78,
        zoom: 12,
        pitch: 30
    });
    const [mode, setMode] = (0,react_.useState)("side-by-side");
    const [activeMap, setActiveMap] = (0,react_.useState)("left");
    const onLeftMoveStart = (0,react_.useCallback)(()=>setActiveMap("left"), []);
    const onRightMoveStart = (0,react_.useCallback)(()=>setActiveMap("right"), []);
    const onMove = (0,react_.useCallback)((event)=>setViewState(event.viewState), []);
    const width =  true ? 100 : 0;
    const leftMapPadding = (0,react_.useMemo)(()=>({
            left: mode === "split-screen" ? width / 2 : 0,
            top: 0,
            right: 0,
            bottom: 0
        }), [
        width,
        mode
    ]);
    const rightMapPadding = (0,react_.useMemo)(()=>({
            right: mode === "split-screen" ? width / 2 : 0,
            top: 0,
            left: 0,
            bottom: 0
        }), [
        width,
        mode
    ]);
    const handleChangeMode = (event, newMode)=>{
        if (newMode !== null) {
            setMode(newMode);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((es5_default()), {
                id: "left-map",
                ...viewState,
                padding: leftMapPadding,
                onMoveStart: onLeftMoveStart,
                onMove: (event)=>{
                    if (activeMap === "left") {
                        onMove(event);
                    }
                },
                style: LeftMapStyle,
                mapStyle: "mapbox://styles/mapbox/light-v10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((es5_default()), {
                id: "right-map",
                ...viewState,
                padding: rightMapPadding,
                onMoveStart: onRightMoveStart,
                onMove: (event)=>{
                    if (activeMap === "right") {
                        onMove(event);
                    }
                },
                style: RightMapStyle,
                mapStyle: "mapbox://styles/mapbox/dark-v10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(control_panel, {
                mode: mode,
                onModeChange: handleChangeMode
            })
        ]
    });
}
/* harmony default export */ const side_by_side = (/*#__PURE__*/(0,react_.memo)(MapSideBySide));


/***/ })

};
;