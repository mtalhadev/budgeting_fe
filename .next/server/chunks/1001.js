"use strict";
exports.id = 1001;
exports.ids = [1001];
exports.modules = {

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Markdown)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/utils/highlight.ts
var highlight = __webpack_require__(54010);
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/react-markdown.js + 87 modules
var react_markdown = __webpack_require__(92319);
// EXTERNAL MODULE: ./node_modules/rehype-raw/index.js + 12 modules
var rehype_raw = __webpack_require__(22775);
// EXTERNAL MODULE: ./node_modules/remark-gfm/index.js + 30 modules
var remark_gfm = __webpack_require__(86024);
// EXTERNAL MODULE: ./node_modules/rehype-highlight/lib/index.js + 45 modules
var lib = __webpack_require__(72068);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
;// CONCATENATED MODULE: ./src/components/markdown/styles.ts
// @mui

// ----------------------------------------------------------------------
const StyledMarkdown = (0,styles.styled)("div")(({ theme })=>{
    const isLight = theme.palette.mode === "light";
    return {
        // Text
        h1: {
            margin: 0,
            ...theme.typography.h1
        },
        h2: {
            margin: 0,
            ...theme.typography.h2
        },
        h3: {
            margin: 0,
            ...theme.typography.h3
        },
        h4: {
            margin: 0,
            ...theme.typography.h4
        },
        h5: {
            margin: 0,
            ...theme.typography.h5
        },
        h6: {
            margin: 0,
            ...theme.typography.h6
        },
        p: {
            margin: 0,
            ...theme.typography.body1
        },
        br: {
            display: "grid",
            content: '""',
            marginTop: "0.75em"
        },
        // Divider
        hr: {
            margin: 0,
            flexShrink: 0,
            borderWidth: 0,
            msFlexNegative: 0,
            WebkitFlexShrink: 0,
            borderStyle: "solid",
            borderBottomWidth: "thin",
            borderColor: theme.palette.divider
        },
        // List
        "& ul, & ol": {
            margin: 0,
            "& li": {
                lineHeight: 2
            }
        },
        // Blockquote
        "& blockquote": {
            lineHeight: 1.5,
            fontSize: "1.5em",
            margin: "40px auto",
            position: "relative",
            fontFamily: "Georgia, serif",
            padding: theme.spacing(3, 3, 3, 8),
            color: theme.palette.text.secondary,
            borderRadius: theme.shape.borderRadius * 2,
            backgroundColor: theme.palette.background.neutral,
            [theme.breakpoints.up("md")]: {
                width: "80%"
            },
            "& p, & span": {
                marginBottom: 0,
                fontSize: "inherit",
                fontFamily: "inherit"
            },
            "&:before": {
                left: 16,
                top: -8,
                display: "block",
                fontSize: "3em",
                content: '"\\201C"',
                position: "absolute",
                color: theme.palette.text.disabled
            }
        },
        // Code Block
        "& pre, & pre > code": {
            fontSize: 16,
            overflowX: "auto",
            whiteSpace: "pre",
            padding: theme.spacing(2),
            color: theme.palette.common.white,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: isLight ? theme.palette.grey[900] : (0,styles.alpha)(theme.palette.grey[500], 0.16)
        },
        "& code": {
            fontSize: 14,
            borderRadius: 4,
            whiteSpace: "pre",
            padding: theme.spacing(0.2, 0.5),
            color: theme.palette.warning[isLight ? "darker" : "lighter"],
            backgroundColor: theme.palette.warning[isLight ? "lighter" : "darker"],
            "&.hljs": {
                padding: 0,
                backgroundColor: "transparent"
            }
        },
        // Table
        table: {
            width: "100%",
            borderCollapse: "collapse",
            border: `1px solid ${theme.palette.divider}`,
            "th, td": {
                padding: theme.spacing(1),
                border: `1px solid ${theme.palette.divider}`
            },
            "tbody tr:nth-of-type(odd)": {
                backgroundColor: theme.palette.background.neutral
            }
        },
        // Checkbox
        input: {
            "&[type=checkbox]": {
                position: "relative",
                cursor: "pointer",
                "&:before": {
                    content: '""',
                    top: -2,
                    left: -2,
                    width: 17,
                    height: 17,
                    borderRadius: 3,
                    position: "absolute",
                    backgroundColor: theme.palette.grey[isLight ? 300 : 700]
                },
                "&:checked": {
                    "&:before": {
                        backgroundColor: theme.palette.primary.main
                    },
                    "&:after": {
                        content: '""',
                        top: 1,
                        left: 5,
                        width: 4,
                        height: 9,
                        position: "absolute",
                        transform: "rotate(45deg)",
                        msTransform: "rotate(45deg)",
                        WebkitTransform: "rotate(45deg)",
                        border: `solid ${theme.palette.common.white}`,
                        borderWidth: "0 2px 2px 0"
                    }
                }
            }
        }
    };
});
/* harmony default export */ const markdown_styles = (StyledMarkdown);

;// CONCATENATED MODULE: ./src/components/markdown/markdown.tsx
// utils



// markdown plugins



// @mui

// routes

//

//

// ----------------------------------------------------------------------
function Markdown({ sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(markdown_styles, {
        sx: sx,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_markdown/* ReactMarkdown */.D, {
            rehypePlugins: [
                rehype_raw/* default */.Z,
                lib/* default */.Z,
                [
                    remark_gfm/* default */.Z,
                    {
                        singleTilde: false
                    }
                ]
            ],
            components: markdown_components,
            children: ""
        })
    });
}
// ----------------------------------------------------------------------
const markdown_components = {
    img: ({ ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
            alt: props.alt,
            ratio: "16/9",
            sx: {
                borderRadius: 2
            },
            ...props
        }),
    a: ({ ...props })=>{
        const isHttp = props.href.includes("http");
        return isHttp ? /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            target: "_blank",
            rel: "noopener",
            ...props
        }) : /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            component: components/* RouterLink */.r,
            href: props.href,
            ...props,
            children: props.children
        });
    }
};

;// CONCATENATED MODULE: ./src/components/markdown/index.ts




/***/ })

};
;