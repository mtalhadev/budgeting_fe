"use strict";
exports.id = 5178;
exports.ids = [5178];
exports.modules = {

/***/ 85178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ draggable_markers)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/draggable-markers/control-panel.tsx


// @mui

// components

// ----------------------------------------------------------------------
const EVENT_NAMES = [
    "onDragStart",
    "onDrag",
    "onDragEnd"
];
function round5(value) {
    return (Math.round(value * 1e5) / 1e5).toFixed(5);
}
function ControlPanel({ events = {} }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(map/* StyledControlPanel */.qT, {
        children: EVENT_NAMES.map((event)=>{
            const lngLat = events[event];
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "subtitle2",
                        sx: {
                            color: "common.white"
                        },
                        children: [
                            event,
                            ":"
                        ]
                    }),
                    lngLat ? /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle2",
                        sx: {
                            color: "primary.main"
                        },
                        children: `${round5(lngLat.lng)}, ${round5(lngLat.lat)}`
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        component: "em",
                        sx: {
                            color: "error.main"
                        },
                        children: "null"
                    })
                ]
            }, event);
        })
    });
}
/* harmony default export */ const control_panel = (/*#__PURE__*/(0,react_.memo)(ControlPanel));

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/draggable-markers/index.tsx



// components

//

// ----------------------------------------------------------------------
function MapDraggableMarkers({ ...other }) {
    const [marker, setMarker] = (0,react_.useState)({
        latitude: 40,
        longitude: -100
    });
    const [events, logEvents] = (0,react_.useState)({});
    const onMarkerDragStart = (0,react_.useCallback)((event)=>{
        logEvents((_events)=>({
                ..._events,
                onDragStart: event.lngLat
            }));
    }, []);
    const onMarkerDrag = (0,react_.useCallback)((event)=>{
        logEvents((_events)=>({
                ..._events,
                onDrag: event.lngLat
            }));
        setMarker({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat
        });
    }, []);
    const onMarkerDragEnd = (0,react_.useCallback)((event)=>{
        logEvents((_events)=>({
                ..._events,
                onDragEnd: event.lngLat
            }));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((es5_default()), {
                initialViewState: {
                    latitude: 40,
                    longitude: -100,
                    zoom: 3.5
                },
                ...other,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(map/* MapControl */.ZM, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(map/* MapMarker */.O_, {
                        longitude: marker.longitude,
                        latitude: marker.latitude,
                        anchor: "bottom",
                        draggable: true,
                        onDragStart: onMarkerDragStart,
                        onDrag: onMarkerDrag,
                        onDragEnd: onMarkerDragEnd
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(control_panel, {
                events: events
            })
        ]
    });
}
/* harmony default export */ const draggable_markers = (/*#__PURE__*/(0,react_.memo)(MapDraggableMarkers));


/***/ })

};
;