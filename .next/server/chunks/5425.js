"use strict";
exports.id = 5425;
exports.ids = [5425];
exports.modules = {

/***/ 65425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ interaction)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var Switch = __webpack_require__(56703);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputBase/index.js
var InputBase = __webpack_require__(73392);
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/interaction/control-panel.tsx


// @mui




// components

// ----------------------------------------------------------------------
const StyledRow = (0,styles.styled)("div")(({ theme })=>({
        display: "flex",
        alignItems: "center",
        textTransform: "capitalize",
        justifyContent: "space-between",
        color: theme.palette.common.white,
        "&:not(:last-of-type)": {
            marginBottom: theme.spacing(1)
        }
    }));
// ----------------------------------------------------------------------
const camelPattern = /(^|[A-Z])[a-z]*/g;
function formatSettingName(name) {
    return name.match(camelPattern)?.join(" ");
}
function ControlPanel({ settings, onChange }) {
    const renderSetting = (name, value)=>{
        switch(typeof value){
            case "boolean":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            children: formatSettingName(name)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                            size: "small",
                            checked: value,
                            onChange: (event)=>onChange(name, event.target.checked)
                        })
                    ]
                }, name);
            case "number":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledRow, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            children: formatSettingName(name)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((InputBase_default()), {
                            value: value,
                            onChange: (event)=>onChange(name, Number(event.target.value)),
                            inputProps: {
                                type: "number"
                            },
                            sx: {
                                "& input": {
                                    py: 0.25,
                                    width: 40,
                                    fontSize: 14,
                                    borderRadius: 0.5,
                                    textAlign: "center",
                                    color: "common.white",
                                    bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.12)
                                }
                            }
                        })
                    ]
                }, name);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(map/* StyledControlPanel */.qT, {
        children: Object.keys(settings).map((name)=>renderSetting(name, settings[name]))
    });
}
/* harmony default export */ const control_panel = (/*#__PURE__*/(0,react_.memo)(ControlPanel));

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/interaction/index.tsx



// components

//

// ----------------------------------------------------------------------
function MapInteraction({ ...other }) {
    const [settings, setSettings] = (0,react_.useState)({
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85,
        dragPan: true,
        boxZoom: true,
        keyboard: true,
        touchZoom: true,
        dragRotate: true,
        scrollZoom: true,
        touchPitch: true,
        touchRotate: true,
        doubleClickZoom: true,
        touchZoomRotate: true
    });
    const updateSettings = (0,react_.useCallback)((name, value)=>setSettings((prevSettings)=>({
                ...prevSettings,
                [name]: value
            })), []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((es5_default()), {
        ...settings,
        initialViewState: {
            latitude: 37.729,
            longitude: -122.36,
            zoom: 11,
            bearing: 0,
            pitch: 50
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(map/* MapControl */.ZM, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(control_panel, {
                settings: settings,
                onChange: updateSettings
            })
        ]
    });
}
/* harmony default export */ const interaction = (/*#__PURE__*/(0,react_.memo)(MapInteraction));


/***/ })

};
;