"use strict";
exports.id = 8191;
exports.ids = [8191];
exports.modules = {

/***/ 88191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ heatmap)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/es5/index.js
var es5 = __webpack_require__(31678);
var es5_default = /*#__PURE__*/__webpack_require__.n(es5);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Slider/index.js
var Slider = __webpack_require__(48839);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var Switch = __webpack_require__(56703);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/components/map/index.ts + 4 modules
var map = __webpack_require__(42815);
;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/heatmap/control-panel.tsx


// @mui




// utils

// components

function ControlPanel({ startTime, endTime, allDays, selectedTime, onChangeTime, onChangeAllDays }) {
    const day = 24 * 60 * 60 * 1000;
    const days = Math.round((endTime - startTime) / day);
    const selectedDay = Math.round((selectedTime - startTime) / day);
    const handleChangeDays = (value)=>{
        const daysToAdd = value;
        const newTime = startTime + daysToAdd * day;
        onChangeTime(newTime);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(map/* StyledControlPanel */.qT, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle2",
                        sx: {
                            color: "common.white"
                        },
                        children: "All Days"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                        size: "small",
                        checked: allDays,
                        onChange: (event)=>onChangeAllDays(event.target.checked)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                gutterBottom: true,
                variant: "body2",
                sx: {
                    color: allDays ? "text.disabled" : "common.white"
                },
                children: [
                    "Each Day: ",
                    (0,format_time/* fDate */.Mu)(selectedTime)
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Slider_default()), {
                min: 1,
                step: 1,
                max: days,
                disabled: allDays,
                value: selectedDay,
                onChange: (event, newValue)=>{
                    if (typeof newValue === "number") handleChangeDays(newValue);
                }
            })
        ]
    });
}
/* harmony default export */ const control_panel = (/*#__PURE__*/(0,react_.memo)(ControlPanel));

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/heatmap/map-style.ts
// ----------------------------------------------------------------------
const MAX_ZOOM_LEVEL = 9;
const heatmapLayer = {
    id: "heatmap",
    maxzoom: MAX_ZOOM_LEVEL,
    type: "heatmap",
    paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        "heatmap-weight": [
            "interpolate",
            [
                "linear"
            ],
            [
                "get",
                "mag"
            ],
            0,
            0,
            6,
            1
        ],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        "heatmap-intensity": [
            "interpolate",
            [
                "linear"
            ],
            [
                "zoom"
            ],
            0,
            1,
            MAX_ZOOM_LEVEL,
            3
        ],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        "heatmap-color": [
            "interpolate",
            [
                "linear"
            ],
            [
                "heatmap-density"
            ],
            0,
            "rgba(33,102,172,0)",
            0.2,
            "rgb(103,169,207)",
            0.4,
            "rgb(209,229,240)",
            0.6,
            "rgb(253,219,199)",
            0.8,
            "rgb(239,138,98)",
            0.9,
            "rgb(255,201,101)"
        ],
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": [
            "interpolate",
            [
                "linear"
            ],
            [
                "zoom"
            ],
            0,
            2,
            MAX_ZOOM_LEVEL,
            20
        ],
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": [
            "interpolate",
            [
                "linear"
            ],
            [
                "zoom"
            ],
            7,
            1,
            9,
            0
        ]
    }
};

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/heatmap/index.tsx



//


// ----------------------------------------------------------------------
function MapHeatmap({ ...other }) {
    const [allDays, useAllDays] = (0,react_.useState)(true);
    const [timeRange, setTimeRange] = (0,react_.useState)([
        0,
        0
    ]);
    const [selectedTime, selectTime] = (0,react_.useState)(0);
    const [earthquakes, setEarthQuakes] = (0,react_.useState)();
    (0,react_.useEffect)(()=>{
        fetch("https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson").then((resp)=>resp.json()).then((json)=>{
            const { features } = json;
            const endTime = features[0].properties.time;
            const startTime = features[features.length - 1].properties.time;
            setTimeRange([
                startTime,
                endTime
            ]);
            setEarthQuakes(json);
            selectTime(endTime);
        }).catch((error)=>console.error("Could not load data", error));
    }, []);
    const data = (0,react_.useMemo)(()=>allDays ? earthquakes : filterFeaturesByDay(earthquakes, selectedTime), [
        earthquakes,
        allDays,
        selectedTime
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((es5_default()), {
                initialViewState: {
                    latitude: 40,
                    longitude: -100,
                    zoom: 3
                },
                children: data && /*#__PURE__*/ jsx_runtime_.jsx(es5.Source, {
                    type: "geojson",
                    data: data,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(es5.Layer, {
                        ...heatmapLayer
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(control_panel, {
                startTime: timeRange[0],
                endTime: timeRange[1],
                selectedTime: selectedTime,
                allDays: allDays,
                onChangeTime: selectTime,
                onChangeAllDays: useAllDays
            })
        ]
    });
}
/* harmony default export */ const heatmap = (/*#__PURE__*/(0,react_.memo)(MapHeatmap));
// ----------------------------------------------------------------------
function filterFeaturesByDay(featureCollection, time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const features = featureCollection?.features.filter((feature)=>{
        const featureDate = new Date(feature.properties?.time);
        return featureDate.getFullYear() === year && featureDate.getMonth() === month && featureDate.getDate() === day;
    });
    return {
        type: "FeatureCollection",
        features
    };
}


/***/ })

};
;