"use strict";
exports.id = 640;
exports.ids = [640];
exports.modules = {

/***/ 80640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ CustomBreadcrumbs)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Breadcrumbs/index.js
var Breadcrumbs = __webpack_require__(81276);
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
;// CONCATENATED MODULE: ./src/components/custom-breadcrumbs/link-item.tsx
// @mui



// routes

function BreadcrumbsLink({ link, activeLast, disabled }) {
    const { name, href, icon } = link;
    const styles = {
        typography: "body2",
        alignItems: "center",
        color: "text.primary",
        display: "inline-flex",
        ...disabled && !activeLast && {
            cursor: "default",
            pointerEvents: "none",
            color: "text.disabled"
        }
    };
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    mr: 1,
                    display: "inherit",
                    "& svg": {
                        width: 20,
                        height: 20
                    }
                },
                children: icon
            }),
            name
        ]
    });
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            component: components/* RouterLink */.r,
            href: href,
            sx: styles,
            children: renderContent
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: styles,
        children: [
            " ",
            renderContent,
            " "
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/custom-breadcrumbs/custom-breadcrumbs.tsx
// @mui







// ----------------------------------------------------------------------
function CustomBreadcrumbs({ links, action, heading, moreLink, activeLast, sx, ...other }) {
    const lastLink = links[links.length - 1].name;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            ...sx
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        sx: {
                            flexGrow: 1
                        },
                        children: [
                            heading && /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h4",
                                gutterBottom: true,
                                children: heading
                            }),
                            !!links.length && /*#__PURE__*/ jsx_runtime_.jsx((Breadcrumbs_default()), {
                                separator: /*#__PURE__*/ jsx_runtime_.jsx(Separator, {}),
                                ...other,
                                children: links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(BreadcrumbsLink, {
                                        link: link,
                                        activeLast: activeLast,
                                        disabled: link.name === lastLink
                                    }, link.name || ""))
                            })
                        ]
                    }),
                    action && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        sx: {
                            flexShrink: 0
                        },
                        children: [
                            " ",
                            action,
                            " "
                        ]
                    })
                ]
            }),
            !!moreLink && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    mt: 2
                },
                children: moreLink.map((href)=>/*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        href: href,
                        variant: "body2",
                        target: "_blank",
                        rel: "noopener",
                        sx: {
                            display: "table"
                        },
                        children: href
                    }, href))
            })
        ]
    });
}
// ----------------------------------------------------------------------
function Separator() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
        component: "span",
        sx: {
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "text.disabled"
        }
    });
}

;// CONCATENATED MODULE: ./src/components/custom-breadcrumbs/index.ts




/***/ })

};
;