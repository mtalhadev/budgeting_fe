"use strict";
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 90403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ clusters)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/es5/index.js
var es5 = __webpack_require__(31678);
var es5_default = /*#__PURE__*/__webpack_require__.n(es5);
;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/clusters/layers.ts
// ----------------------------------------------------------------------
const clusterLayer = {
    id: "clusters",
    type: "circle",
    source: "earthquakes",
    filter: [
        "has",
        "point_count"
    ],
    paint: {
        "circle-color": [
            "step",
            [
                "get",
                "point_count"
            ],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1"
        ],
        "circle-radius": [
            "step",
            [
                "get",
                "point_count"
            ],
            20,
            100,
            30,
            750,
            40
        ]
    }
};
const clusterCountLayer = {
    id: "cluster-count",
    type: "symbol",
    source: "earthquakes",
    filter: [
        "has",
        "point_count"
    ],
    layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Bold"
        ],
        "text-size": 12
    }
};
const unclusteredPointLayer = {
    id: "unclustered-point",
    type: "circle",
    source: "earthquakes",
    filter: [
        "!",
        [
            "has",
            "point_count"
        ]
    ],
    paint: {
        "circle-color": "#11b4da",
        "circle-radius": 4,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#FFFFFF"
    }
};

;// CONCATENATED MODULE: ./src/sections/_examples/extra/map-view/clusters/index.tsx



//

// ----------------------------------------------------------------------
function MapClusters({ ...other }) {
    const mapRef = (0,react_.useRef)(null);
    const onClick = (event)=>{
        const feature = event.features?.[0];
        const clusterId = feature?.properties?.cluster_id;
        const mapboxSource = mapRef.current?.getSource("earthquakes");
        mapboxSource.getClusterExpansionZoom(clusterId, (error, zoom)=>{
            if (error) {
                return;
            }
            if (feature?.geometry.type === "Point") {
                mapRef.current?.easeTo({
                    center: feature?.geometry.coordinates,
                    zoom: Number.isNaN(zoom) ? 3 : zoom,
                    duration: 500
                });
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((es5_default()), {
        initialViewState: {
            latitude: 40.67,
            longitude: -103.59,
            zoom: 3
        },
        interactiveLayerIds: [
            clusterLayer.id || ""
        ],
        onClick: onClick,
        ref: mapRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(es5.Source, {
            id: "earthquakes",
            type: "geojson",
            data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(es5.Layer, {
                    ...clusterLayer
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(es5.Layer, {
                    ...clusterCountLayer
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(es5.Layer, {
                    ...unclusteredPointLayer
                })
            ]
        })
    });
}
/* harmony default export */ const clusters = (/*#__PURE__*/(0,react_.memo)(MapClusters));


/***/ })

};
;