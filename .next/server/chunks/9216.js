"use strict";
exports.id = 9216;
exports.ids = [9216];
exports.modules = {

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* reexport */ Lightbox),
  NX: () => (/* reexport */ useLightBox)
});

// UNUSED EXPORTS: ACTION_CLOSE, ACTION_NEXT, ACTION_PREV, ACTION_SWIPE, ACTIVE_SLIDE_COMPLETE, ACTIVE_SLIDE_ERROR, ACTIVE_SLIDE_LOADING, ACTIVE_SLIDE_PLAYING, CLASS_FLEX_CENTER, CLASS_FULLSIZE, CLASS_NO_SCROLL, CLASS_NO_SCROLL_PADDING, Carousel, CarouselModule, CloseIcon, Controller, ControllerContext, ControllerModule, ELEMENT_BUTTON, ELEMENT_ICON, EVENT_ON_KEY_DOWN, EVENT_ON_KEY_UP, EVENT_ON_POINTER_CANCEL, EVENT_ON_POINTER_DOWN, EVENT_ON_POINTER_LEAVE, EVENT_ON_POINTER_MOVE, EVENT_ON_POINTER_UP, EVENT_ON_WHEEL, ErrorIcon, EventsContext, EventsProvider, IMAGE_FIT_CONTAIN, IMAGE_FIT_COVER, IconButton, ImageSlide, Lightbox, LightboxDefaultProps, LightboxDispatchContext, LightboxPropsContext, LightboxPropsProvider, LightboxStateContext, LightboxStateProvider, LoadingIcon, MODULE_CAROUSEL, MODULE_CONTROLLER, MODULE_NAVIGATION, MODULE_NO_SCROLL, MODULE_PORTAL, MODULE_ROOT, MODULE_TOOLBAR, Navigation, NavigationButton, NavigationModule, NextIcon, NoScroll, NoScrollModule, PLUGIN_CAPTIONS, PLUGIN_COUNTER, PLUGIN_DOWNLOAD, PLUGIN_FULLSCREEN, PLUGIN_INLINE, PLUGIN_SHARE, PLUGIN_SLIDESHOW, PLUGIN_THUMBNAILS, PLUGIN_ZOOM, Portal, PortalModule, PreviousIcon, Root, RootModule, SLIDE_STATUS_COMPLETE, SLIDE_STATUS_ERROR, SLIDE_STATUS_LOADING, SLIDE_STATUS_PLACEHOLDER, SLIDE_STATUS_PLAYING, SwipeState, TimeoutsContext, TimeoutsProvider, Toolbar, ToolbarModule, UNKNOWN_ACTION_TYPE, VK_ARROW_LEFT, VK_ARROW_RIGHT, VK_ESCAPE, activeSlideStatus, addToolbarButton, cleanup, clsx, composePrefix, computeSlideRect, createIcon, createIconDisabled, createModule, createNode, cssClass, cssVar, devicePixelRatio, getSlide, getSlideIfPresent, getSlideIndex, hasSlides, hasWindow, isImageFitCover, isImageSlide, label, makeComposePrefix, makeUseContext, parseLengthPercentage, round, setRef, stopNavigationEventsPropagation, useAnimation, useContainerRect, useController, useDelay, useEventCallback, useEvents, useForkRef, useLayoutEffect, useLightboxDispatch, useLightboxProps, useLightboxState, useLoseFocus, useMotionPreference, usePointerEvents, usePointerSwipe, usePreventSwipeNavigation, useRTL, useSensors, useThrottle, useTimeouts, useWheelSwipe, withPlugins

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/lightbox/use-light-box.ts

function useLightBox(slides) {
    const [selected, setSelected] = (0,react_.useState)(-1);
    const handleOpen = (0,react_.useCallback)((slideUrl)=>{
        const slideIndex = slides.findIndex((slide)=>slide.type === "video" ? slide.poster === slideUrl : slide.src === slideUrl);
        setSelected(slideIndex);
    }, [
        slides
    ]);
    const handleClose = (0,react_.useCallback)(()=>{
        setSelected(-1);
    }, []);
    return {
        selected,
        open: selected >= 0,
        onOpen: handleOpen,
        onClose: handleClose,
        setSelected
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/index.js
var dist = __webpack_require__(25671);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/zoom/index.js
var zoom = __webpack_require__(27838);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/video/index.js
var video = __webpack_require__(66951);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/captions/index.js
var captions = __webpack_require__(88828);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/slideshow/index.js
var slideshow = __webpack_require__(27536);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js
var fullscreen = __webpack_require__(15396);
// EXTERNAL MODULE: ./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js
var thumbnails = __webpack_require__(45941);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/GlobalStyles/index.js
var GlobalStyles = __webpack_require__(53868);
;// CONCATENATED MODULE: ./src/components/lightbox/styles.tsx
// @mui



// ----------------------------------------------------------------------
function StyledLightbox() {
    const theme = (0,styles.useTheme)();
    const inputGlobalStyles = /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles["default"], {
        styles: {
            ".yarl__root": {
                "--yarl__thumbnails_thumbnail_padding": 0,
                "--yarl__thumbnails_thumbnail_border": "transparent",
                "--yarl__color_backdrop": (0,styles.alpha)(theme.palette.grey[900], 0.9),
                "--yarl__slide_captions_container_background": (0,styles.alpha)(theme.palette.grey[900], 0.48)
            },
            // Caption
            ".yarl__slide_title": {
                fontSize: theme.typography.h5.fontSize,
                fontWeight: theme.typography.h5.fontWeight,
                lineHeight: theme.typography.h5.lineHeight
            },
            ".yarl__slide_description": {
                fontSize: theme.typography.body2.fontSize,
                fontWeight: theme.typography.body2.fontWeight,
                lineHeight: theme.typography.body2.lineHeight
            },
            // Button
            ".yarl__button": {
                filter: "unset"
            },
            // Thumbnails
            ".yarl__thumbnails_thumbnail": {
                opacity: 0.48,
                "&.yarl__thumbnails_thumbnail_active": {
                    opacity: 1
                }
            },
            ".yarl__thumbnails_vignette": {
                "--yarl__thumbnails_vignette_size": 0
            },
            // Video
            ".yarl__video_container": {
                backgroundColor: theme.palette.common.black
            }
        }
    });
    return inputGlobalStyles;
}

;// CONCATENATED MODULE: ./src/components/lightbox/lightbox.tsx








// @mui

//


// ----------------------------------------------------------------------
const ICON_SIZE = 24;
function Lightbox({ slides, disabledZoom, disabledVideo, disabledTotal, disabledCaptions, disabledSlideshow, disabledThumbnails, disabledFullscreen, onGetCurrentIndex, ...other }) {
    const totalItems = slides ? slides.length : 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledLightbox, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(dist/* default */.ZP, {
                slides: slides,
                animation: {
                    swipe: 240
                },
                carousel: {
                    finite: totalItems < 5
                },
                controller: {
                    closeOnBackdropClick: true
                },
                plugins: getPlugins({
                    disabledZoom,
                    disabledVideo,
                    disabledCaptions,
                    disabledSlideshow,
                    disabledThumbnails,
                    disabledFullscreen
                }),
                on: {
                    view: ({ index })=>{
                        if (onGetCurrentIndex) {
                            onGetCurrentIndex(index);
                        }
                    }
                },
                toolbar: {
                    buttons: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DisplayTotal, {
                            totalItems: totalItems,
                            disabledTotal: disabledTotal
                        }, 0),
                        "close"
                    ]
                },
                render: {
                    iconClose: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:close"
                        }),
                    iconZoomIn: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:zoom-in"
                        }),
                    iconZoomOut: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:zoom-out"
                        }),
                    iconSlideshowPlay: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:play"
                        }),
                    iconSlideshowPause: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:pause"
                        }),
                    iconPrev: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE + 8,
                            icon: "carbon:chevron-left"
                        }),
                    iconNext: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE + 8,
                            icon: "carbon:chevron-right"
                        }),
                    iconExitFullscreen: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:center-to-fit"
                        }),
                    iconEnterFullscreen: ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            width: ICON_SIZE,
                            icon: "carbon:fit-to-screen"
                        })
                }
            })
        ]
    });
}
// ----------------------------------------------------------------------
function getPlugins({ disabledZoom, disabledVideo, disabledCaptions, disabledSlideshow, disabledThumbnails, disabledFullscreen }) {
    let plugins = [
        captions/* default */.Z,
        fullscreen/* default */.Z,
        slideshow/* default */.Z,
        thumbnails/* default */.Z,
        video/* default */.Z,
        zoom/* default */.Z
    ];
    if (disabledThumbnails) {
        plugins = plugins.filter((plugin)=>plugin !== thumbnails/* default */.Z);
    }
    if (disabledCaptions) {
        plugins = plugins.filter((plugin)=>plugin !== captions/* default */.Z);
    }
    if (disabledFullscreen) {
        plugins = plugins.filter((plugin)=>plugin !== fullscreen/* default */.Z);
    }
    if (disabledSlideshow) {
        plugins = plugins.filter((plugin)=>plugin !== slideshow/* default */.Z);
    }
    if (disabledZoom) {
        plugins = plugins.filter((plugin)=>plugin !== zoom/* default */.Z);
    }
    if (disabledVideo) {
        plugins = plugins.filter((plugin)=>plugin !== video/* default */.Z);
    }
    return plugins;
}
function DisplayTotal({ totalItems, disabledTotal }) {
    const { currentIndex } = (0,dist/* useLightboxState */.oc)();
    if (disabledTotal) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        component: "span",
        className: "yarl__button",
        sx: {
            typography: "body2",
            alignItems: "center",
            display: "inline-flex",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                children: [
                    " ",
                    currentIndex + 1,
                    " "
                ]
            }),
            " / ",
            totalItems
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/lightbox/index.ts






/***/ })

};
;