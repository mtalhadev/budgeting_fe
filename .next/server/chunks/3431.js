"use strict";
exports.id = 3431;
exports.ids = [3431];
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

/***/ 11356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GV: () => (/* reexport */ MultiFilePreview),
  gq: () => (/* reexport */ Upload),
  ab: () => (/* reexport */ UploadAvatar),
  un: () => (/* reexport */ UploadBox)
});

// UNUSED EXPORTS: RejectionFiles, SingleFilePreview

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/file-thumbnail/index.ts + 3 modules
var file_thumbnail = __webpack_require__(66623);
;// CONCATENATED MODULE: ./src/components/upload/errors-rejection-files.tsx

// @mui




// utils

//

function RejectionFiles({ fileRejections }) {
    if (!fileRejections.length) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        variant: "outlined",
        sx: {
            py: 1,
            px: 2,
            mt: 3,
            bgcolor: (theme)=>(0,styles.alpha)(theme.palette.error.main, 0.08),
            borderColor: (theme)=>(0,styles.alpha)(theme.palette.error.main, 0.24)
        },
        children: fileRejections.map(({ file, errors })=>{
            const { path, size } = (0,file_thumbnail/* fileData */.ht)(file);
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    my: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "subtitle2",
                        noWrap: true,
                        children: [
                            path,
                            " - ",
                            size ? (0,format_number/* fData */.oe)(size) : ""
                        ]
                    }),
                    errors.map((error)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                            component: "span",
                            sx: {
                                typography: "caption"
                            },
                            children: [
                                "- ",
                                error.message
                            ]
                        }, error.code))
                ]
            }, path);
        })
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(30569);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 19 modules
var motion_minimal = __webpack_require__(51730);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/animate/index.ts + 15 modules
var animate = __webpack_require__(22140);
;// CONCATENATED MODULE: ./src/components/upload/preview-multi-file.tsx


// @mui




// utils

//



// ----------------------------------------------------------------------
function MultiFilePreview({ thumbnail, files, onRemove, sx }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
        initial: false,
        children: files?.map((file)=>{
            const { key, name = "", size = 0 } = (0,file_thumbnail/* fileData */.ht)(file);
            const isNotFormatFile = typeof file === "string";
            if (thumbnail) {
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    component: motion_minimal.m.div,
                    ...(0,animate/* varFade */.EU)().inUp,
                    alignItems: "center",
                    display: "inline-flex",
                    justifyContent: "center",
                    sx: {
                        m: 0.5,
                        width: 80,
                        height: 80,
                        borderRadius: 1.25,
                        overflow: "hidden",
                        position: "relative",
                        border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.16)}`,
                        ...sx
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(file_thumbnail/* default */.ZP, {
                            tooltip: true,
                            imageView: true,
                            file: file,
                            sx: {
                                position: "absolute"
                            },
                            imgSx: {
                                position: "absolute"
                            }
                        }),
                        onRemove && /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: ()=>onRemove(file),
                            sx: {
                                p: 0.5,
                                top: 4,
                                right: 4,
                                position: "absolute",
                                color: "common.white",
                                bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[900], 0.48),
                                "&:hover": {
                                    bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[900], 0.72)
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "mingcute:close-line",
                                width: 14
                            })
                        })
                    ]
                }, key);
            }
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                component: motion_minimal.m.div,
                ...(0,animate/* varFade */.EU)().inUp,
                spacing: 2,
                direction: "row",
                alignItems: "center",
                sx: {
                    my: 1,
                    py: 1,
                    px: 1.5,
                    borderRadius: 1,
                    border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.16)}`,
                    ...sx
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(file_thumbnail/* default */.ZP, {
                        file: file
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                        primary: isNotFormatFile ? file : name,
                        secondary: isNotFormatFile ? "" : (0,format_number/* fData */.oe)(size),
                        secondaryTypographyProps: {
                            component: "span",
                            typography: "caption"
                        }
                    }),
                    onRemove && /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        size: "small",
                        onClick: ()=>onRemove(file),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "mingcute:close-line",
                            width: 16
                        })
                    })
                ]
            }, key);
        })
    });
}

// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
;// CONCATENATED MODULE: ./src/components/upload/preview-single-file.tsx
// @mui


//

function SingleFilePreview({ imgUrl = "" }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        sx: {
            p: 1,
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            position: "absolute"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
            alt: "file preview",
            src: imgUrl,
            sx: {
                width: 1,
                height: 1,
                borderRadius: 1
            }
        })
    });
}

// EXTERNAL MODULE: ./node_modules/react-dropzone/dist/index.js
var dist = __webpack_require__(64622);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./src/assets/illustrations/index.ts + 15 modules
var illustrations = __webpack_require__(90310);
;// CONCATENATED MODULE: ./src/components/upload/upload.tsx


// @mui






// assets

//




// ----------------------------------------------------------------------
function Upload({ disabled, multiple = false, error, helperText, //
file, onDelete, //
files, thumbnail, onUpload, onRemove, onRemoveAll, sx, ...other }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = (0,dist.useDropzone)({
        multiple,
        disabled,
        ...other
    });
    const hasFile = !!file && !multiple;
    const hasFiles = !!files && multiple && !!files.length;
    const hasError = isDragReject || !!error;
    const renderPlaceholder = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 3,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(illustrations/* UploadIllustration */.A2, {
                sx: {
                    width: 1,
                    maxWidth: 200
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1,
                sx: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        children: "Drop or Select file"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: [
                            "Drop files here or click",
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    mx: 0.5,
                                    color: "primary.main",
                                    textDecoration: "underline"
                                },
                                children: "browse"
                            }),
                            "thorough your machine"
                        ]
                    })
                ]
            })
        ]
    });
    const renderSinglePreview = /*#__PURE__*/ jsx_runtime_.jsx(SingleFilePreview, {
        imgUrl: typeof file === "string" ? file : file?.preview
    });
    const removeSinglePreview = hasFile && onDelete && /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        size: "small",
        onClick: onDelete,
        sx: {
            top: 16,
            right: 16,
            zIndex: 9,
            position: "absolute",
            color: (theme)=>(0,styles.alpha)(theme.palette.common.white, 0.8),
            bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[900], 0.72),
            "&:hover": {
                bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[900], 0.48)
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
            icon: "mingcute:close-line",
            width: 18
        })
    });
    const renderMultiPreview = hasFiles && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    my: 3
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(MultiFilePreview, {
                    files: files,
                    thumbnail: thumbnail,
                    onRemove: onRemove
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                justifyContent: "flex-end",
                spacing: 1.5,
                children: [
                    onRemoveAll && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "inherit",
                        variant: "outlined",
                        size: "small",
                        onClick: onRemoveAll,
                        children: "Remove All"
                    }),
                    onUpload && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "small",
                        variant: "contained",
                        onClick: onUpload,
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:cloud-upload-fill"
                        }),
                        children: "Upload"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            width: 1,
            position: "relative",
            ...sx
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                ...getRootProps(),
                sx: {
                    p: 5,
                    outline: "none",
                    borderRadius: 1,
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative",
                    bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.08),
                    border: (theme)=>`1px dashed ${(0,styles.alpha)(theme.palette.grey[500], 0.2)}`,
                    transition: (theme)=>theme.transitions.create([
                            "opacity",
                            "padding"
                        ]),
                    "&:hover": {
                        opacity: 0.72
                    },
                    ...isDragActive && {
                        opacity: 0.72
                    },
                    ...disabled && {
                        opacity: 0.48,
                        pointerEvents: "none"
                    },
                    ...hasError && {
                        color: "error.main",
                        bgcolor: "error.lighter",
                        borderColor: "error.light"
                    },
                    ...hasFile && {
                        padding: "24% 0"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...getInputProps()
                    }),
                    hasFile ? renderSinglePreview : renderPlaceholder
                ]
            }),
            removeSinglePreview,
            helperText && helperText,
            /*#__PURE__*/ jsx_runtime_.jsx(RejectionFiles, {
                fileRejections: fileRejections
            }),
            renderMultiPreview
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/upload/upload-box.tsx


// @mui


//

// ----------------------------------------------------------------------
function UploadBox({ placeholder, error, disabled, sx, ...other }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject } = (0,dist.useDropzone)({
        disabled,
        ...other
    });
    const hasError = isDragReject || error;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        ...getRootProps(),
        sx: {
            m: 0.5,
            width: 64,
            height: 64,
            flexShrink: 0,
            display: "flex",
            borderRadius: 1,
            cursor: "pointer",
            alignItems: "center",
            color: "text.disabled",
            justifyContent: "center",
            bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.08),
            border: (theme)=>`dashed 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.16)}`,
            ...isDragActive && {
                opacity: 0.72
            },
            ...disabled && {
                opacity: 0.48,
                pointerEvents: "none"
            },
            ...hasError && {
                color: "error.main",
                bgcolor: "error.lighter",
                borderColor: "error.light"
            },
            "&:hover": {
                opacity: 0.72
            },
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ...getInputProps()
            }),
            placeholder || /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: "eva:cloud-upload-fill",
                width: 28
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/upload/upload-avatar.tsx


// @mui




//



// ----------------------------------------------------------------------
function UploadAvatar({ error, file, disabled, helperText, sx, ...other }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = (0,dist.useDropzone)({
        multiple: false,
        disabled,
        accept: {
            "image/*": []
        },
        ...other
    });
    const hasFile = !!file;
    const hasError = isDragReject || !!error;
    const imgUrl = typeof file === "string" ? file : file?.preview;
    const renderPreview = hasFile && /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
        alt: "avatar",
        src: imgUrl,
        sx: {
            width: 1,
            height: 1,
            borderRadius: "50%"
        }
    });
    const renderPlaceholder = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        alignItems: "center",
        justifyContent: "center",
        spacing: 1,
        className: "upload-placeholder",
        sx: {
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 9,
            borderRadius: "50%",
            position: "absolute",
            color: "text.disabled",
            bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.08),
            transition: (theme)=>theme.transitions.create([
                    "opacity"
                ], {
                    duration: theme.transitions.duration.shorter
                }),
            "&:hover": {
                opacity: 0.72
            },
            ...hasError && {
                color: "error.main",
                bgcolor: "error.lighter"
            },
            ...hasFile && {
                zIndex: 9,
                opacity: 0,
                color: "common.white",
                bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[900], 0.64)
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: "solar:camera-add-bold",
                width: 32
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                children: file ? "Update photo" : "Upload photo"
            })
        ]
    });
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            width: 1,
            height: 1,
            overflow: "hidden",
            borderRadius: "50%",
            position: "relative"
        },
        children: [
            renderPreview,
            renderPlaceholder
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                ...getRootProps(),
                sx: {
                    p: 1,
                    m: "auto",
                    width: 144,
                    height: 144,
                    cursor: "pointer",
                    overflow: "hidden",
                    borderRadius: "50%",
                    border: (theme)=>`1px dashed ${(0,styles.alpha)(theme.palette.grey[500], 0.2)}`,
                    ...isDragActive && {
                        opacity: 0.72
                    },
                    ...disabled && {
                        opacity: 0.48,
                        pointerEvents: "none"
                    },
                    ...hasError && {
                        borderColor: "error.light"
                    },
                    ...hasFile && {
                        ...hasError && {
                            bgcolor: "error.lighter"
                        },
                        "&:hover .upload-placeholder": {
                            opacity: 1
                        }
                    },
                    ...sx
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...getInputProps()
                    }),
                    renderContent
                ]
            }),
            helperText && helperText,
            /*#__PURE__*/ jsx_runtime_.jsx(RejectionFiles, {
                fileRejections: fileRejections
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/upload/index.ts









/***/ }),

/***/ 17214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useCopyToClipboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCopyToClipboard() {
    const [copiedText, setCopiedText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const copy = async (text)=>{
        if (!navigator?.clipboard) {
            console.warn("Clipboard not supported");
            return false;
        }
        // Try to save to clipboard then save it in the state if worked
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            return true;
        } catch (error) {
            console.warn("Copy failed", error);
            setCopiedText(null);
            return false;
        }
    };
    return {
        copiedText,
        copy
    };
}


/***/ }),

/***/ 41553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileManagerFileDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92133);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61272);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16061);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92870);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45003);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20094);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_utils_format_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9856);
/* harmony import */ var src_utils_format_time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94871);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80935);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76505);
/* harmony import */ var src_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65026);
/* harmony import */ var src_components_file_thumbnail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66623);
/* harmony import */ var _file_manager_share_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44886);
/* harmony import */ var _file_manager_invited_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96858);



// @mui











// utils


// hooks

// components



//


function FileManagerFileDetails({ item, open, favorited, //
onFavorite, onCopyLink, onClose, onDelete, ...other }) {
    const { name, size, url, type, shared, modifiedAt } = item;
    const hasShared = shared && !!shared.length;
    const toggleTags = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .k)(true);
    const share = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .k)();
    const properties = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .k)(true);
    const [inviteEmail, setInviteEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.tags.slice(0, 3));
    const handleChangeInvite = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        setInviteEmail(event.target.value);
    }, []);
    const handleChangeTags = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newValue)=>{
        setTags(newValue);
    }, []);
    const renderTags = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 1.5,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: {
                    typography: "subtitle2"
                },
                children: [
                    "Tags",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        size: "small",
                        onClick: toggleTags.onToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: toggleTags.value ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"
                        })
                    })
                ]
            }),
            toggleTags.value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_11___default()), {
                multiple: true,
                freeSolo: true,
                options: item.tags.map((option)=>option),
                getOptionLabel: (option)=>option,
                defaultValue: item.tags.slice(0, 3),
                value: tags,
                onChange: (event, newValue)=>{
                    handleChangeTags(newValue);
                },
                renderOption: (props, option)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
                        ...props,
                        key: option
                    }, option),
                renderTags: (value, getTagProps)=>value.map((option, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_12___default()), {
                            ...getTagProps({
                                index
                            }),
                            size: "small",
                            variant: "soft",
                            label: option,
                            key: option
                        })),
                renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13___default()), {
                        ...params,
                        placeholder: "#Add a tags"
                    })
            })
        ]
    });
    const renderProperties = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
        spacing: 1.5,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: {
                    typography: "subtitle2"
                },
                children: [
                    "Properties",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        size: "small",
                        onClick: properties.onToggle,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: properties.value ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"
                        })
                    })
                ]
            }),
            properties.value && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        direction: "row",
                        sx: {
                            typography: "caption",
                            textTransform: "capitalize"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                component: "span",
                                sx: {
                                    width: 80,
                                    color: "text.secondary",
                                    mr: 2
                                },
                                children: "Size"
                            }),
                            (0,src_utils_format_number__WEBPACK_IMPORTED_MODULE_2__/* .fData */ .oe)(size)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        direction: "row",
                        sx: {
                            typography: "caption",
                            textTransform: "capitalize"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                component: "span",
                                sx: {
                                    width: 80,
                                    color: "text.secondary",
                                    mr: 2
                                },
                                children: "Modified"
                            }),
                            (0,src_utils_format_time__WEBPACK_IMPORTED_MODULE_15__/* .fDateTime */ .zM)(modifiedAt)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        direction: "row",
                        sx: {
                            typography: "caption",
                            textTransform: "capitalize"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                component: "span",
                                sx: {
                                    width: 80,
                                    color: "text.secondary",
                                    mr: 2
                                },
                                children: "Type"
                            }),
                            (0,src_components_file_thumbnail__WEBPACK_IMPORTED_MODULE_6__/* .fileFormat */ .fH)(type)
                        ]
                    })
                ]
            })
        ]
    });
    const renderShared = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                sx: {
                    p: 2.5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                        variant: "subtitle2",
                        children: " File Share With "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        size: "small",
                        color: "primary",
                        onClick: share.onTrue,
                        sx: {
                            width: 24,
                            height: 24,
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            "&:hover": {
                                bgcolor: "primary.dark"
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: "mingcute:add-line"
                        })
                    })
                ]
            }),
            hasShared && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
                sx: {
                    pl: 2.5,
                    pr: 1
                },
                children: shared.map((person)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_file_manager_invited_item__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        person: person
                    }, person.id))
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_17___default()), {
                open: open,
                onClose: onClose,
                anchor: "right",
                slotProps: {
                    backdrop: {
                        invisible: true
                    }
                },
                PaperProps: {
                    sx: {
                        width: 320
                    }
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_scrollbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        sx: {
                            height: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                sx: {
                                    p: 2.5
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        variant: "h6",
                                        children: " Info "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_18___default()), {
                                        color: "warning",
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            icon: "eva:star-outline"
                                        }),
                                        checkedIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            icon: "eva:star-fill"
                                        }),
                                        checked: favorited,
                                        onChange: onFavorite
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                spacing: 2.5,
                                justifyContent: "center",
                                sx: {
                                    p: 2.5,
                                    bgcolor: "background.neutral"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_file_thumbnail__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                        imageView: true,
                                        file: type === "folder" ? type : url,
                                        sx: {
                                            width: 64,
                                            height: 64
                                        },
                                        imgSx: {
                                            borderRadius: 1
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        variant: "subtitle1",
                                        sx: {
                                            wordBreak: "break-all"
                                        },
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19___default()), {
                                        sx: {
                                            borderStyle: "dashed"
                                        }
                                    }),
                                    renderTags,
                                    renderProperties
                                ]
                            }),
                            renderShared
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        sx: {
                            p: 2.5
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_20___default()), {
                            fullWidth: true,
                            variant: "soft",
                            color: "error",
                            size: "large",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                icon: "solar:trash-bin-trash-bold"
                            }),
                            onClick: onDelete,
                            children: "Delete"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_file_manager_share_dialog__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                open: share.value,
                shared: shared,
                inviteEmail: inviteEmail,
                onChangeInvite: handleChangeInvite,
                onCopyLink: onCopyLink,
                onClose: ()=>{
                    share.onFalse();
                    setInviteEmail("");
                }
            })
        ]
    });
}


/***/ }),

/***/ 95600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileManagerFolderItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(52694);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(61272);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88707);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16061);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93429);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71394);
/* harmony import */ var _mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80935);
/* harmony import */ var src_hooks_use_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17214);
/* harmony import */ var src_utils_format_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9856);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76505);
/* harmony import */ var src_components_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80941);
/* harmony import */ var src_components_custom_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78254);
/* harmony import */ var src_components_custom_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99310);
/* harmony import */ var _file_manager_share_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44886);
/* harmony import */ var _file_manager_file_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41553);
/* harmony import */ var _file_manager_new_folder_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11416);


// @mui











// hooks


// utils

// components




//



function FileManagerFolderItem({ folder, selected, onSelect, onDelete, sx, ...other }) {
    const { enqueueSnackbar } = (0,src_components_snackbar__WEBPACK_IMPORTED_MODULE_6__/* .useSnackbar */ .Ds)();
    const { copy } = (0,src_hooks_use_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__/* .useCopyToClipboard */ .m)();
    const [inviteEmail, setInviteEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [folderName, setFolderName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(folder.name);
    const editFolder = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .k)();
    const checkbox = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .k)();
    const share = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .k)();
    const popover = (0,src_components_custom_popover__WEBPACK_IMPORTED_MODULE_8__/* .usePopover */ .S)();
    const confirm = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .k)();
    const details = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .k)();
    const favorite = (0,src_hooks_use_boolean__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .k)(folder.isFavorited);
    const handleChangeInvite = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        setInviteEmail(event.target.value);
    }, []);
    const handleChangeFolderName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        setFolderName(event.target.value);
    }, []);
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        enqueueSnackbar("Copied!");
        copy(folder.url);
    }, [
        copy,
        enqueueSnackbar,
        folder.url
    ]);
    const renderAction = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            top: 8,
            right: 8,
            position: "absolute"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13___default()), {
                color: "warning",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: "eva:star-outline"
                }),
                checkedIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: "eva:star-fill"
                }),
                checked: favorite.value,
                onChange: favorite.onToggle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14___default()), {
                color: popover.open ? "inherit" : "default",
                onClick: popover.onOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: "eva:more-vertical-fill"
                })
            })
        ]
    });
    const renderIcon = (checkbox.value || selected) && onSelect ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_13___default()), {
        size: "medium",
        checked: selected,
        onClick: onSelect,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            icon: "eva:radio-button-off-fill"
        }),
        checkedIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            icon: "eva:checkmark-circle-2-fill"
        }),
        sx: {
            p: 0.75
        }
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
        component: "img",
        src: "/assets/icons/files/ic_folder.svg",
        sx: {
            width: 36,
            height: 36
        }
    });
    const renderText = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_16___default()), {
        onClick: details.onTrue,
        primary: folder.name,
        secondary: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                (0,src_utils_format_number__WEBPACK_IMPORTED_MODULE_4__/* .fData */ .oe)(folder.size),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    component: "span",
                    sx: {
                        mx: 0.75,
                        width: 2,
                        height: 2,
                        borderRadius: "50%",
                        bgcolor: "currentColor"
                    }
                }),
                folder.totalFiles,
                " files"
            ]
        }),
        primaryTypographyProps: {
            noWrap: true,
            typography: "subtitle1"
        },
        secondaryTypographyProps: {
            mt: 0.5,
            component: "span",
            alignItems: "center",
            typography: "caption",
            color: "text.disabled",
            display: "inline-flex"
        }
    });
    const renderAvatar = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_17___default()), {
        max: 3,
        sx: {
            [`& .${_mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_17__.avatarGroupClasses.avatar}`]: {
                width: 24,
                height: 24,
                "&:first-of-type": {
                    fontSize: 12
                }
            }
        },
        children: folder.shared?.map((person)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_18___default()), {
                alt: person.name,
                src: person.avatarUrl
            }, person.id))
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
                component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default()),
                variant: "outlined",
                spacing: 1,
                alignItems: "flex-start",
                sx: {
                    p: 2.5,
                    maxWidth: 222,
                    borderRadius: 2,
                    bgcolor: "unset",
                    cursor: "pointer",
                    position: "relative",
                    ...(checkbox.value || selected) && {
                        bgcolor: "background.paper",
                        boxShadow: (theme)=>theme.customShadows.z20
                    },
                    ...sx
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__["default"], {
                        onMouseEnter: checkbox.onTrue,
                        onMouseLeave: checkbox.onFalse,
                        children: renderIcon
                    }),
                    renderAction,
                    renderText,
                    !!folder?.shared?.length && renderAvatar
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_custom_popover__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "right-top",
                sx: {
                    width: 160
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20___default()), {
                        onClick: ()=>{
                            popover.onClose();
                            handleCopy();
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: "eva:link-2-fill"
                            }),
                            "Copy Link"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20___default()), {
                        onClick: ()=>{
                            popover.onClose();
                            share.onTrue();
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: "solar:share-bold"
                            }),
                            "Share"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20___default()), {
                        onClick: ()=>{
                            popover.onClose();
                            editFolder.onTrue();
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: "solar:pen-bold"
                            }),
                            "Edit"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_21___default()), {
                        sx: {
                            borderStyle: "dashed"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20___default()), {
                        onClick: ()=>{
                            confirm.onTrue();
                            popover.onClose();
                        },
                        sx: {
                            color: "error.main"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: "solar:trash-bin-trash-bold"
                            }),
                            "Delete"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_file_manager_file_details__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                item: folder,
                favorited: favorite.value,
                onFavorite: favorite.onToggle,
                onCopyLink: handleCopy,
                open: details.value,
                onClose: details.onFalse,
                onDelete: ()=>{
                    details.onFalse();
                    onDelete();
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_file_manager_share_dialog__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                open: share.value,
                shared: folder.shared,
                inviteEmail: inviteEmail,
                onChangeInvite: handleChangeInvite,
                onCopyLink: handleCopy,
                onClose: ()=>{
                    share.onFalse();
                    setInviteEmail("");
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_file_manager_new_folder_dialog__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                open: editFolder.value,
                onClose: editFolder.onFalse,
                title: "Edit Folder",
                onUpdate: ()=>{
                    editFolder.onFalse();
                    setFolderName(folderName);
                    console.info("UPDATE FOLDER", folderName);
                },
                folderName: folderName,
                onChangeFolderName: handleChangeFolderName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_dialog__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmDialog */ .Q, {
                open: confirm.value,
                onClose: confirm.onFalse,
                title: "Delete",
                content: "Are you sure want to delete?",
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_22___default()), {
                    variant: "contained",
                    color: "error",
                    onClick: onDelete,
                    children: "Delete"
                })
            })
        ]
    });
}


/***/ }),

/***/ 96858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileManagerInvitedItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61272);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11666);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43610);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88707);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93429);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76505);
/* harmony import */ var src_components_custom_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99310);


// @mui







// components


function FileManagerInvitedItem({ person }) {
    const [permission, setPermission] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(person.permission);
    const popover = (0,src_components_custom_popover__WEBPACK_IMPORTED_MODULE_3__/* .usePopover */ .S)();
    const handleChangePermission = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newPermission)=>{
        setPermission(newPermission);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    px: 0,
                    py: 1
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default()), {
                        alt: person.name,
                        src: person.avatarUrl,
                        sx: {
                            mr: 2
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6___default()), {
                        primary: person.name,
                        secondary: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
                            title: person.email,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: person.email
                            })
                        }),
                        primaryTypographyProps: {
                            noWrap: true,
                            typography: "subtitle2"
                        },
                        secondaryTypographyProps: {
                            noWrap: true,
                            component: "span"
                        },
                        sx: {
                            flexGrow: 1,
                            pr: 1
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                        size: "small",
                        color: "inherit",
                        endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            width: 20,
                            icon: popover.open ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill",
                            sx: {
                                ml: -1
                            }
                        }),
                        onClick: popover.onOpen,
                        sx: {
                            flexShrink: 0,
                            ...popover.open && {
                                bgcolor: "action.selected"
                            }
                        },
                        children: [
                            "Can ",
                            permission
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_popover__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                open: popover.open,
                onClose: popover.onClose,
                sx: {
                    width: 160
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                            selected: permission === "view",
                            onClick: ()=>{
                                popover.onClose();
                                handleChangePermission("view");
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "solar:eye-bold"
                                }),
                                "Can view"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                            selected: permission === "edit",
                            onClick: ()=>{
                                popover.onClose();
                                handleChangePermission("edit");
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "solar:pen-bold"
                                }),
                                "Can edit"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10___default()), {
                            sx: {
                                borderStyle: "dashed"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_9___default()), {
                            onClick: ()=>{
                                popover.onClose();
                            },
                            sx: {
                                color: "error.main"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "solar:trash-bin-trash-bold"
                                }),
                                "Remove"
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 11416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileManagerNewFolderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92870);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42153);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95915);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16856);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62969);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76505);
/* harmony import */ var src_components_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11356);


// @mui







// components


function FileManagerNewFolderDialog({ title = "Upload Files", open, onClose, //
onCreate, onUpdate, //
folderName, onChangeFolderName, ...other }) {
    const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!open) {
            setFiles([]);
        }
    }, [
        open
    ]);
    const handleDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{
        const newFiles = acceptedFiles.map((file)=>Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
        setFiles([
            ...files,
            ...newFiles
        ]);
    }, [
        files
    ]);
    const handleUpload = ()=>{
        onClose();
        console.info("ON UPLOAD");
    };
    const handleRemoveFile = (inputFile)=>{
        const filtered = files.filter((file)=>file !== inputFile);
        setFiles(filtered);
    };
    const handleRemoveAllFiles = ()=>{
        setFiles([]);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default()), {
        fullWidth: true,
        maxWidth: "sm",
        open: open,
        onClose: onClose,
        ...other,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default()), {
                sx: {
                    p: (theme)=>theme.spacing(3, 3, 2, 3)
                },
                children: [
                    " ",
                    title,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                dividers: true,
                sx: {
                    pt: 1,
                    pb: 0,
                    border: "none"
                },
                children: [
                    (onCreate || onUpdate) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                        fullWidth: true,
                        label: "Folder name",
                        value: folderName,
                        onChange: onChangeFolderName,
                        sx: {
                            mb: 3
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_upload__WEBPACK_IMPORTED_MODULE_3__/* .Upload */ .gq, {
                        multiple: true,
                        files: files,
                        onDrop: handleDrop,
                        onRemove: handleRemoveFile
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
                        variant: "contained",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            icon: "eva:cloud-upload-fill"
                        }),
                        onClick: handleUpload,
                        children: "Upload"
                    }),
                    !!files.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
                        variant: "outlined",
                        color: "inherit",
                        onClick: handleRemoveAllFiles,
                        children: "Remove all"
                    }),
                    (onCreate || onUpdate) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        direction: "row",
                        justifyContent: "flex-end",
                        flexGrow: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
                            variant: "soft",
                            onClick: onCreate || onUpdate,
                            children: onUpdate ? "Save" : "Create"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 35887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileManagerPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16854);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87362);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76505);
// @mui






// routes

// components

function FileManagerPanel({ title, subTitle, link, onOpen, collapse, onCollapse, sx, ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            mb: 3,
            ...sx
        },
        ...other,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
                flexGrow: 1,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 1,
                        flexGrow: 1,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
                                variant: "h6",
                                children: [
                                    " ",
                                    title,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                                size: "small",
                                color: "primary",
                                onClick: onOpen,
                                sx: {
                                    width: 24,
                                    height: 24,
                                    bgcolor: "primary.main",
                                    color: "primary.contrastText",
                                    "&:hover": {
                                        bgcolor: "primary.dark"
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "mingcute:add-line"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        sx: {
                            typography: "body2",
                            color: "text.disabled",
                            mt: 0.5
                        },
                        children: subTitle
                    })
                ]
            }),
            link && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                href: link,
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_1__/* .RouterLink */ .r,
                size: "small",
                color: "inherit",
                endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    icon: "eva:arrow-ios-forward-fill",
                    width: 18,
                    sx: {
                        ml: -0.5
                    }
                }),
                children: "View All"
            }),
            onCollapse && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                onClick: onCollapse,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    icon: collapse ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-upward-fill"
                })
            })
        ]
    });
}


/***/ }),

/***/ 44886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileManagerShareDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6176);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92870);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42153);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95915);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16856);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62969);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76505);
/* harmony import */ var src_components_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65026);
/* harmony import */ var _file_manager_invited_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96858);
// @mui









// components


//

function FileManagerShareDialog({ shared, inviteEmail, onCopyLink, onChangeInvite, //
open, onClose, ...other }) {
    const hasShared = shared && !!shared.length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default()), {
        fullWidth: true,
        maxWidth: "xs",
        open: open,
        onClose: onClose,
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: " Invite "
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    overflow: "unset"
                },
                children: [
                    onChangeInvite && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                        fullWidth: true,
                        value: inviteEmail,
                        placeholder: "Email",
                        onChange: onChangeInvite,
                        InputProps: {
                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_8___default()), {
                                position: "end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    color: "inherit",
                                    variant: "contained",
                                    disabled: !inviteEmail,
                                    sx: {
                                        mr: -0.75
                                    },
                                    children: "Send Invite"
                                })
                            })
                        },
                        sx: {
                            mb: 2
                        }
                    }),
                    hasShared && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_scrollbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        sx: {
                            maxHeight: 60 * 6
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                            disablePadding: true,
                            children: shared.map((person)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_file_manager_invited_item__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    person: person
                                }, person.id))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11___default()), {
                sx: {
                    justifyContent: "space-between"
                },
                children: [
                    onCopyLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            icon: "eva:link-2-fill"
                        }),
                        onClick: onCopyLink,
                        children: "Copy link"
                    }),
                    onClose && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default()), {
                        variant: "outlined",
                        color: "inherit",
                        onClick: onClose,
                        children: "Close"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FK: () => (/* binding */ fNumber),
/* harmony export */   e_: () => (/* binding */ fCurrency),
/* harmony export */   f2: () => (/* binding */ fPercent),
/* harmony export */   oe: () => (/* binding */ fData),
/* harmony export */   v1: () => (/* binding */ fShortenNumber)
/* harmony export */ });
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80449);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

function fNumber(number) {
    return numeral__WEBPACK_IMPORTED_MODULE_0___default()(number).format();
}
function fCurrency(number) {
    const format = number ? numeral__WEBPACK_IMPORTED_MODULE_0___default()(number).format("$0,0.00") : "";
    return result(format, ".00");
}
function fPercent(number) {
    const format = number ? numeral__WEBPACK_IMPORTED_MODULE_0___default()(Number(number) / 100).format("0.0%") : "";
    return result(format, ".0");
}
function fShortenNumber(number) {
    const format = number ? numeral__WEBPACK_IMPORTED_MODULE_0___default()(number).format("0.00a") : "";
    return result(format, ".00");
}
function fData(number) {
    const format = number ? numeral__WEBPACK_IMPORTED_MODULE_0___default()(number).format("0.0 b") : "";
    return result(format, ".0");
}
function result(format, key = ".00") {
    const isInteger = format.includes(key);
    return isInteger ? format.replace(key, "") : format;
}


/***/ })

};
;