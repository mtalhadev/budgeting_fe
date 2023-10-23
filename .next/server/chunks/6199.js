"use strict";
exports.id = 6199;
exports.ids = [6199];
exports.modules = {

/***/ 26199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ color_picker),
  Z: () => (/* reexport */ ColorPreview)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
;// CONCATENATED MODULE: ./src/components/color-utils/color-preview.tsx
// @mui




// ----------------------------------------------------------------------
function ColorPreview({ colors, limit = 3, sx }) {
    const renderColors = colors.slice(0, limit);
    const remainingColor = colors.length - limit;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        component: "span",
        direction: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        sx: sx,
        children: [
            renderColors.map((color, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                    sx: {
                        ml: -0.75,
                        width: 16,
                        height: 16,
                        bgcolor: color,
                        borderRadius: "50%",
                        border: (theme)=>`solid 2px ${theme.palette.background.paper}`,
                        boxShadow: (theme)=>`inset -1px 1px 2px ${(0,styles.alpha)(theme.palette.common.black, 0.24)}`
                    }
                }, color + index)),
            colors.length > limit && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    typography: "subtitle2"
                },
                children: `+${remainingColor}`
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ButtonBase/index.js
var ButtonBase = __webpack_require__(19937);
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/components/color-utils/color-picker.tsx


// @mui



//

// ----------------------------------------------------------------------
const ColorPicker = /*#__PURE__*/ (0,react_.forwardRef)(({ colors, selected, onSelectColor, limit = "auto", sx, ...other }, ref)=>{
    const singleSelect = typeof selected === "string";
    const handleSelect = (0,react_.useCallback)((color)=>{
        if (singleSelect) {
            if (color !== selected) {
                onSelectColor(color);
            }
        } else {
            const newSelected = selected.includes(color) ? selected.filter((value)=>value !== color) : [
                ...selected,
                color
            ];
            onSelectColor(newSelected);
        }
    }, [
        onSelectColor,
        selected,
        singleSelect
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        ref: ref,
        direction: "row",
        display: "inline-flex",
        sx: {
            flexWrap: "wrap",
            ...limit !== "auto" && {
                width: limit * 36,
                justifyContent: "flex-end"
            },
            ...sx
        },
        children: colors.map((color)=>{
            const hasSelected = singleSelect ? selected === color : selected.includes(color);
            return /*#__PURE__*/ jsx_runtime_.jsx((ButtonBase_default()), {
                sx: {
                    width: 36,
                    height: 36,
                    borderRadius: "50%"
                },
                onClick: ()=>{
                    handleSelect(color);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                    alignItems: "center",
                    justifyContent: "center",
                    sx: {
                        width: 20,
                        height: 20,
                        bgcolor: color,
                        borderRadius: "50%",
                        border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.16)}`,
                        ...hasSelected && {
                            transform: "scale(1.3)",
                            boxShadow: `4px 4px 8px 0 ${(0,styles.alpha)(color, 0.48)}`,
                            outline: `solid 2px ${(0,styles.alpha)(color, 0.08)}`,
                            transition: (theme)=>theme.transitions.create("all", {
                                    duration: theme.transitions.duration.shortest
                                })
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        width: hasSelected ? 12 : 0,
                        icon: "eva:checkmark-fill",
                        sx: {
                            color: (theme)=>theme.palette.getContrastText(color),
                            transition: (theme)=>theme.transitions.create("all", {
                                    duration: theme.transitions.duration.shortest
                                })
                        }
                    })
                })
            }, color);
        })
    });
});
/* harmony default export */ const color_picker = (ColorPicker);

;// CONCATENATED MODULE: ./src/components/color-utils/index.ts





/***/ })

};
;