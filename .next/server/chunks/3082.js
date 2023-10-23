exports.id = 3082;
exports.ids = [3082];
exports.modules = {

/***/ 54124:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92059));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 35270));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58202));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17097));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87375))

/***/ }),

/***/ 17214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 35270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_hooks_use_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17214);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_components_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80941);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80640);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui





// hooks

// routes

// components


// ----------------------------------------------------------------------
const PALETTE = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
const VARIATIONS = [
    "lighter",
    "light",
    "main",
    "dark",
    "darker"
];
const GREY = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
];
// ----------------------------------------------------------------------
function ColorsView() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const { enqueueSnackbar } = (0,src_components_snackbar__WEBPACK_IMPORTED_MODULE_3__/* .useSnackbar */ .Ds)();
    const { copy } = (0,src_hooks_use_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__/* .useCopyToClipboard */ .m)();
    const onCopy = (color)=>{
        if (color) {
            enqueueSnackbar(`Copied! ${color}`);
            copy(color);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                sx: {
                    py: 5,
                    bgcolor: theme.palette.mode === "light" ? "grey.200" : "grey.800"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        heading: "Color",
                        links: [
                            {
                                name: "Components",
                                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.components
                            },
                            {
                                name: "Color"
                            }
                        ],
                        moreLink: [
                            "https://mui.com/customization/color",
                            "https://colors.eva.design"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
                sx: {
                    my: 10
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    gap: 3,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)"
                    },
                    children: [
                        PALETTE.map((color)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                sx: {
                                    borderRadius: 1,
                                    overflow: "hidden",
                                    boxShadow: theme.customShadows.card
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        variant: "h5",
                                        sx: {
                                            textTransform: "capitalize",
                                            p: 2.5,
                                            pb: 0
                                        },
                                        children: color
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        spacing: 1,
                                        sx: {
                                            p: 2.5
                                        },
                                        children: VARIATIONS.map((variation)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorCard, {
                                                variation: variation,
                                                hexColor: theme.palette[color][variation],
                                                onCopy: ()=>onCopy(theme.palette[color][variation])
                                            }, variation))
                                    })
                                ]
                            }, color)),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            sx: {
                                borderRadius: 1,
                                overflow: "hidden",
                                boxShadow: theme.customShadows.card
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    variant: "h5",
                                    sx: {
                                        textTransform: "capitalize",
                                        p: 2.5,
                                        pb: 0
                                    },
                                    children: "Grey"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    spacing: 1,
                                    sx: {
                                        p: 2.5
                                    },
                                    children: GREY.map((variation)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorCard, {
                                            variation: variation,
                                            hexColor: theme.palette.grey[variation],
                                            onCopy: ()=>onCopy(theme.palette.grey[variation])
                                        }, variation))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function ColorCard({ hexColor, variation, onCopy }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
        spacing: 1,
        onClick: onCopy,
        sx: {
            px: 2,
            py: 1.5,
            borderRadius: 1,
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            bgcolor: hexColor,
            color: (theme)=>theme.palette.getContrastText(hexColor),
            border: (theme)=>`solid 1px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.grey[500], 0.08)}`,
            transition: (theme)=>theme.transitions.create([
                    "background-color"
                ], {
                    duration: theme.transitions.duration.shorter
                }),
            "&:hover": {
                bgcolor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(hexColor, 0.8)
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                variant: "subtitle2",
                sx: {
                    textTransform: "capitalize"
                },
                children: variation
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                gap: 2.5,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                sx: {
                    typography: "caption"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                component: "span",
                                children: "Hex "
                            }),
                            hexColor
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                component: "span",
                                children: "Rgb "
                            }),
                            (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.hexToRgb)(hexColor).replace("rgb(", "").replace(")", "")
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 87375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GridView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49696);
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52694);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17784);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26017);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26566);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80640);
/* harmony import */ var _component_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33081);
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui










// routes

// components

//

// ----------------------------------------------------------------------
const LABELS = [
    "1col",
    "2col",
    "3col",
    "4col",
    "6col",
    "12col"
];
const StyledBlockContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.styled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6___default()))(({ theme })=>({
        padding: theme.spacing(5),
        border: `solid 1px ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius * 1.5,
        backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 100 : 800]
    }));
// ----------------------------------------------------------------------
function GridView() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const [spacing, setSpacing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    const [column, setColumn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
    const handleChangeSpacing = (event)=>{
        setSpacing(Number(event.target.value));
    };
    const handleChangeColumn = (event)=>{
        setColumn(Number(event.target.value));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                sx: {
                    py: 5,
                    bgcolor: theme.palette.mode === "light" ? "grey.200" : "grey.800"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_8___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        heading: "Grid",
                        links: [
                            {
                                name: "Components",
                                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.components
                            },
                            {
                                name: "Grid"
                            }
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_8___default()), {
                sx: {
                    my: 10
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            title: "Spacing",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBlockContainer, {
                                variant: "outlined",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        variant: "body2",
                                        sx: {
                                            mb: 3,
                                            textAlign: "center"
                                        },
                                        children: [
                                            "Spacing: ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: theme.spacing(Number(spacing))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        container: true,
                                        spacing: spacing,
                                        children: [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7,
                                            8,
                                            9,
                                            10,
                                            11
                                        ].map((value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                xs: 1,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    sx: {
                                                        height: 80,
                                                        boxShadow: theme.customShadows.z8
                                                    }
                                                })
                                            }, value))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                                        row: true,
                                        name: "spacing",
                                        value: spacing.toString(),
                                        onChange: handleChangeSpacing,
                                        sx: {
                                            mt: 3,
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7,
                                            8,
                                            9,
                                            10
                                        ].map((value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                value: value.toString(),
                                                label: value.toString(),
                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_14___default()), {})
                                            }, value))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            title: "Column",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBlockContainer, {
                                variant: "outlined",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        container: true,
                                        spacing: 3,
                                        children: [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4,
                                            5,
                                            6,
                                            7,
                                            8,
                                            9,
                                            10,
                                            11
                                        ].map((value)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                xs: column,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    sx: {
                                                        py: 3,
                                                        textAlign: "center",
                                                        boxShadow: theme.customShadows.z8
                                                    },
                                                    children: [
                                                        "xs = ",
                                                        column
                                                    ]
                                                })
                                            }, value))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                                        row: true,
                                        name: "column",
                                        value: column.toString(),
                                        onChange: handleChangeColumn,
                                        sx: {
                                            mt: 3,
                                            display: "flex",
                                            justifyContent: "center"
                                        },
                                        children: [
                                            12,
                                            6,
                                            4,
                                            3,
                                            2,
                                            1
                                        ].map((value, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                value: value.toString(),
                                                label: LABELS[index],
                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Radio__WEBPACK_IMPORTED_MODULE_14___default()), {})
                                            }, value))
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 92059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11666);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76505);
/* harmony import */ var src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99066);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80640);
/* harmony import */ var _component_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33081);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui





// routes

// components



//

// ----------------------------------------------------------------------
function IconsView() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
                sx: {
                    py: 5,
                    bgcolor: (theme)=>theme.palette.mode === "light" ? "grey.200" : "grey.800"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        heading: "Icons",
                        links: [
                            {
                                name: "Components",
                                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.components
                            },
                            {
                                name: "Icons"
                            }
                        ],
                        moreLink: [
                            "https://mui.com/components/material-icons",
                            "https://iconify.design/icon-sets"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
                sx: {
                    my: 10
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            title: "Material Icons",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: "https://mui.com/components/icons/#main-content",
                                target: "_blank",
                                rel: "noopener",
                                children: "https://mui.com/components/icons/#main-content"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            title: "Iconify Icons",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    title: "Iconify",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        icon: "eva:color-palette-fill",
                                        width: 24
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "action.active"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "action.disabled"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "primary.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "secondary.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "info.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "success.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "warning.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    icon: "eva:color-palette-fill",
                                    width: 24,
                                    sx: {
                                        color: "error.main"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_block__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            title: "Local Icons",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    title: "SvgColor",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        src: "/assets/icons/navbar/ic_dashboard.svg"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "action.active"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "action.disabled"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "primary.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "secondary.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "info.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "success.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "warning.main"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_svg_color__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    src: "/assets/icons/navbar/ic_dashboard.svg",
                                    sx: {
                                        color: "error.main"
                                    }
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 58202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShadowsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52694);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80640);
/* harmony import */ var _component_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33081);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui






// routes

// components

//

// ----------------------------------------------------------------------
function ShadowsView() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const systemShadows = theme.shadows.slice(1, theme.shadows.length);
    const customShadows = [
        [
            "z1",
            theme.customShadows.z1
        ],
        [
            "z4",
            theme.customShadows.z4
        ],
        [
            "z8",
            theme.customShadows.z8
        ],
        [
            "z12",
            theme.customShadows.z12
        ],
        [
            "z16",
            theme.customShadows.z16
        ],
        [
            "z20",
            theme.customShadows.z20
        ],
        [
            "z24",
            theme.customShadows.z24
        ],
        [
            "card",
            theme.customShadows.card
        ],
        [
            "dropdown",
            theme.customShadows.dropdown
        ],
        [
            "dialog",
            theme.customShadows.dialog
        ]
    ];
    const colorShadows = [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
                sx: {
                    py: 5,
                    bgcolor: theme.palette.mode === "light" ? "grey.200" : "grey.800"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        heading: "Shadows",
                        links: [
                            {
                                name: "Components",
                                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.components
                            },
                            {
                                name: "Shadows"
                            }
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    my: 10
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_block__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: "System",
                            children: systemShadows.map((shadow, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShadowCard, {
                                    title: `z${index + 1}`,
                                    sx: {
                                        boxShadow: shadow
                                    }
                                }, shadow))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_block__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: "Customs",
                            children: customShadows.map((shadow)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShadowCard, {
                                    title: shadow[0],
                                    sx: {
                                        boxShadow: shadow[1]
                                    }
                                }, shadow[0]))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_block__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: "Colors",
                            children: colorShadows.map((color)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShadowCard, {
                                    title: color,
                                    sx: {
                                        color: theme.palette[color].contrastText,
                                        bgcolor: theme.palette[color].main,
                                        boxShadow: theme.customShadows[color]
                                    }
                                }, color))
                        })
                    ]
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
function ShadowCard({ sx, title }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_8___default()), {
        sx: {
            padding: 3,
            margin: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: {
                xs: "calc((100%/2) - 24px)",
                sm: "calc((100%/4) - 24px)",
                md: "calc((100%/6) - 24px)"
            },
            ...sx
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
            variant: "subtitle2",
            sx: {
                textTransform: "capitalize"
            },
            children: title
        })
    });
}


/***/ }),

/***/ 17097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypographyView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52694);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26566);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_text_max_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44026);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80640);
/* __next_internal_client_entry_do_not_use__ default auto */ 






// routes

// components


// ----------------------------------------------------------------------
const TYPOGRAPHYS = [
    {
        label: "h1. Heading",
        variant: "h1"
    },
    {
        label: "h2. Heading",
        variant: "h2"
    },
    {
        label: "h3. Heading",
        variant: "h3"
    },
    {
        label: "h4. Heading",
        variant: "h4"
    },
    {
        label: "h5. Heading",
        variant: "h5"
    },
    {
        label: "h6. Heading",
        variant: "h6"
    },
    {
        label: "subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        variant: "subtitle1"
    },
    {
        label: "subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        variant: "subtitle2"
    },
    {
        label: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
        variant: "body1"
    },
    {
        label: "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
        variant: "body2"
    },
    {
        label: "caption text",
        variant: "caption"
    },
    {
        label: "overline text",
        variant: "overline"
    },
    {
        label: "Button",
        variant: "button"
    }
];
// ----------------------------------------------------------------------
function TypographyView() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
                sx: {
                    py: 5,
                    bgcolor: (theme)=>theme.palette.mode === "light" ? "grey.200" : "grey.800"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        heading: "Typography",
                        links: [
                            {
                                name: "Components",
                                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.components
                            },
                            {
                                name: "Typography"
                            }
                        ],
                        moreLink: [
                            "https://mui.com/components/typography"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
                sx: {
                    my: 10
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6___default()), {
                    container: true,
                    rowSpacing: 5,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6___default()), {
                            xs: 12,
                            md: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                variant: "h6",
                                children: "Default Text"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6___default()), {
                            xs: 12,
                            md: 9,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                spacing: 3,
                                children: TYPOGRAPHYS.map((font)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlockVariant, {
                                        font: font
                                    }, font.variant))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6___default()), {
                            xs: 12,
                            md: 3,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                variant: "h6",
                                children: "Colors Text"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_6___default()), {
                            xs: 12,
                            md: 9,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                spacing: 3,
                                children: [
                                    [
                                        "primary",
                                        "secondary",
                                        "disabled"
                                    ].map((color)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            variant: "outlined",
                                            sx: {
                                                p: 3,
                                                borderRadius: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    gutterBottom: true,
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: `text.${color}`
                                                    },
                                                    children: [
                                                        "text ",
                                                        color
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    gutterBottom: true,
                                                    variant: "body2",
                                                    sx: {
                                                        color: `text.${color}`
                                                    },
                                                    children: "Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."
                                                })
                                            ]
                                        }, color)),
                                    [
                                        "primary",
                                        "secondary",
                                        "info",
                                        "warning",
                                        "error"
                                    ].map((color)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            variant: "outlined",
                                            sx: {
                                                p: 3,
                                                borderRadius: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    gutterBottom: true,
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: `${color}.main`
                                                    },
                                                    children: color
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    gutterBottom: true,
                                                    variant: "body2",
                                                    sx: {
                                                        color: `${color}.main`
                                                    },
                                                    children: "Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."
                                                })
                                            ]
                                        }, color))
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function BlockVariant({ font }) {
    const { variant, label } = font;
    const { fontSize, lineHeight, fontWeight, letterSpacing = 0 } = (0,src_components_text_max_line__WEBPACK_IMPORTED_MODULE_2__/* .useTypography */ .t)(variant);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9___default()), {
        variant: "outlined",
        sx: {
            p: 3,
            borderRadius: 1
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                variant: variant,
                gutterBottom: true,
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                variant: "body2",
                sx: {
                    color: "text.secondary"
                },
                children: [
                    "size: ",
                    fontSize,
                    " / l-height: ",
                    lineHeight,
                    " / weight:",
                    fontWeight,
                    " / letterSpacing: ",
                    letterSpacing
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  hU: () => (/* reexport */ colors_view),
  zG: () => (/* reexport */ grid_view),
  zQ: () => (/* reexport */ icons_view),
  K0: () => (/* reexport */ shadows_view),
  hv: () => (/* reexport */ typography_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/_examples/foundation/grid-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/_examples/foundation/grid-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const grid_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/_examples/foundation/icons-view.tsx

const icons_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/_examples/foundation/icons-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: icons_view_esModule, $$typeof: icons_view_$$typeof } = icons_view_proxy;
const icons_view_default_ = icons_view_proxy.default;


/* harmony default export */ const icons_view = (icons_view_default_);
;// CONCATENATED MODULE: ./src/sections/_examples/foundation/colors-view.tsx

const colors_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/_examples/foundation/colors-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: colors_view_esModule, $$typeof: colors_view_$$typeof } = colors_view_proxy;
const colors_view_default_ = colors_view_proxy.default;


/* harmony default export */ const colors_view = (colors_view_default_);
;// CONCATENATED MODULE: ./src/sections/_examples/foundation/shadows-view.tsx

const shadows_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/_examples/foundation/shadows-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: shadows_view_esModule, $$typeof: shadows_view_$$typeof } = shadows_view_proxy;
const shadows_view_default_ = shadows_view_proxy.default;


/* harmony default export */ const shadows_view = (shadows_view_default_);
;// CONCATENATED MODULE: ./src/sections/_examples/foundation/typography-view.tsx

const typography_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/_examples/foundation/typography-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: typography_view_esModule, $$typeof: typography_view_$$typeof } = typography_view_proxy;
const typography_view_default_ = typography_view_proxy.default;


/* harmony default export */ const typography_view = (typography_view_default_);
;// CONCATENATED MODULE: ./src/sections/_examples/foundation/index.ts







/***/ })

};
;