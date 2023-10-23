"use strict";
exports.id = 8998;
exports.ids = [8998];
exports.modules = {

/***/ 78998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ EmptyContent)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
;// CONCATENATED MODULE: ./src/components/empty-content/empty-content.tsx
// @mui





function EmptyContent({ title, imgUrl, action, filled, description, sx, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        sx: {
            px: 3,
            height: 1,
            ...filled && {
                borderRadius: 2,
                bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.04),
                border: (theme)=>`dashed 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
            },
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "img",
                alt: "empty content",
                src: imgUrl || "/assets/icons/empty/ic_content.svg",
                sx: {
                    width: 1,
                    maxWidth: 160
                }
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                component: "span",
                sx: {
                    mt: 1,
                    color: "text.disabled",
                    textAlign: "center"
                },
                children: title
            }),
            description && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                sx: {
                    mt: 1,
                    color: "text.disabled",
                    textAlign: "center"
                },
                children: description
            }),
            action && action
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/empty-content/index.ts



/***/ })

};
;