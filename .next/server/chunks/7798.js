exports.id = 7798;
exports.ids = [7798,9215,640,8998,4026,1001];
exports.modules = {

/***/ 77041:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17253));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66994));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37248));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 80728));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39557));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30879))

/***/ }),

/***/ 95015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C8: () => (/* binding */ useGetPost),
/* harmony export */   Jx: () => (/* binding */ useGetLatestPosts),
/* harmony export */   Yi: () => (/* binding */ useGetPosts),
/* harmony export */   nl: () => (/* binding */ useSearchPosts)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97146);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72810);


// utils

// ----------------------------------------------------------------------
function useGetPosts() {
    const URL = src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .endpoints */ .Hv.post.list;
    const { data, isLoading, error, isValidating } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(URL, src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            posts: (data?.posts) || [],
            postsLoading: isLoading,
            postsError: error,
            postsValidating: isValidating,
            postsEmpty: !isLoading && !data?.posts.length
        }), [
        data?.posts,
        error,
        isLoading,
        isValidating
    ]);
    return memoizedValue;
}
// ----------------------------------------------------------------------
function useGetPost(title) {
    const URL = title ? [
        src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .endpoints */ .Hv.post.details,
        {
            params: {
                title
            }
        }
    ] : null;
    const { data, isLoading, error, isValidating } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(URL, src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            post: data?.post,
            postLoading: isLoading,
            postError: error,
            postValidating: isValidating
        }), [
        data?.post,
        error,
        isLoading,
        isValidating
    ]);
    return memoizedValue;
}
// ----------------------------------------------------------------------
function useGetLatestPosts(title) {
    const URL = title ? [
        src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .endpoints */ .Hv.post.latest,
        {
            params: {
                title
            }
        }
    ] : null;
    const { data, isLoading, error, isValidating } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(URL, src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            latestPosts: (data?.latestPosts) || [],
            latestPostsLoading: isLoading,
            latestPostsError: error,
            latestPostsValidating: isValidating,
            latestPostsEmpty: !isLoading && !data?.latestPosts.length
        }), [
        data?.latestPosts,
        error,
        isLoading,
        isValidating
    ]);
    return memoizedValue;
}
// ----------------------------------------------------------------------
function useSearchPosts(query) {
    const URL = query ? [
        src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .endpoints */ .Hv.post.search,
        {
            params: {
                query
            }
        }
    ] : null;
    const { data, isLoading, error, isValidating } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(URL, src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i, {
        keepPreviousData: true
    });
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            searchResults: (data?.results) || [],
            searchLoading: isLoading,
            searchError: error,
            searchValidating: isValidating,
            searchEmpty: !isLoading && !data?.results.length
        }), [
        data?.results,
        error,
        isLoading,
        isValidating
    ]);
    return memoizedValue;
}


/***/ }),

/***/ 80640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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




/***/ }),

/***/ 78998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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



/***/ }),

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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




/***/ }),

/***/ 79215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  EM: () => (/* reexport */ nav_section_horizontal),
  Hg: () => (/* reexport */ nav_section_mini),
  Mr: () => (/* reexport */ nav_section_vertical)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
;// CONCATENATED MODULE: ./src/components/nav-section/config.ts
// ----------------------------------------------------------------------
const navVerticalConfig = (config)=>({
        itemGap: config?.itemGap || 4,
        iconSize: config?.iconSize || 24,
        currentRole: config?.currentRole,
        itemRootHeight: config?.itemRootHeight || 44,
        itemSubHeight: config?.itemSubHeight || 36,
        itemPadding: config?.itemPadding || "4px 8px 4px 12px",
        itemRadius: config?.itemRadius || 8,
        hiddenLabel: config?.hiddenLabel || false
    });
const navMiniConfig = (config)=>({
        itemGap: config?.itemGap || 4,
        iconSize: config?.iconSize || 22,
        currentRole: config?.currentRole,
        itemRootHeight: config?.itemRootHeight || 56,
        itemSubHeight: config?.itemSubHeight || 34,
        itemPadding: config?.itemPadding || "6px 0 0 0",
        itemRadius: config?.itemRadius || 6,
        hiddenLabel: config?.hiddenLabel || false
    });
const navHorizontalConfig = (config)=>({
        itemGap: config?.itemGap || 6,
        iconSize: config?.iconSize || 22,
        currentRole: config?.currentRole,
        itemRootHeight: config?.itemRootHeight || 32,
        itemSubHeight: config?.itemSubHeight || 34,
        itemPadding: config?.itemPadding || "0 6px 0 6px",
        itemRadius: config?.itemRadius || 6,
        hiddenLabel: config?.hiddenLabel || false
    });

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Popover/index.js
var Popover = __webpack_require__(57832);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(79536);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/routes/hooks/use-active-link.ts
var use_active_link = __webpack_require__(50691);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(60061);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(19868);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
;// CONCATENATED MODULE: ./src/components/nav-section/mini/styles.ts
// @mui



const StyledItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, open, depth, config, theme })=>{
    const subItem = depth !== 1;
    const activeStyles = {
        root: {
            color: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.primary.light,
            backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.08),
            "&:hover": {
                backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.16)
            }
        },
        sub: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        }
    };
    return {
        // Root item
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: config.itemRadius,
        minHeight: config.itemRootHeight,
        color: theme.palette.text.secondary,
        margin: `0 ${config.itemGap}px ${config.itemGap}px ${config.itemGap}px`,
        ...config.hiddenLabel && !subItem && {
            padding: config.itemPadding
        },
        // Active root item
        ...active && {
            ...activeStyles.root
        },
        // Sub item
        ...subItem && {
            margin: 0,
            flexDirection: "row",
            padding: theme.spacing(0, 1),
            minHeight: config.itemSubHeight,
            // Active sub item
            ...active && {
                ...activeStyles.sub
            }
        },
        // Open
        ...open && !active && {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.hover
        }
    };
});
const StyledIcon = (0,styles.styled)((ListItemIcon_default()))(({ size })=>({
        width: size,
        height: size,
        marginRight: 0
    }));

;// CONCATENATED MODULE: ./src/components/nav-section/mini/nav-item.tsx


// @mui




// routes

//


const NavItem = /*#__PURE__*/ (0,react_.forwardRef)(({ item, depth, open, active, externalLink, config, ...other }, ref)=>{
    const theme = (0,styles.useTheme)();
    const { title, path, icon, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledItem, {
        disableGutters: true,
        ref: ref,
        open: open,
        depth: depth,
        active: active,
        disabled: disabled,
        config: config,
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(StyledIcon, {
                size: config.iconSize,
                sx: {
                    ...subItem && {
                        mr: 1.5
                    }
                },
                children: icon
            }),
            !(config.hiddenLabel && !subItem) && /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                sx: {
                    width: 1,
                    flex: "unset",
                    ...!subItem && {
                        px: 0.5,
                        mt: 0.5
                    }
                },
                primary: title,
                primaryTypographyProps: {
                    noWrap: true,
                    fontSize: 10,
                    lineHeight: "16px",
                    textAlign: "center",
                    textTransform: "capitalize",
                    fontWeight: active ? "fontWeightBold" : "fontWeightSemiBold",
                    ...subItem && {
                        textAlign: "unset",
                        fontSize: theme.typography.body2.fontSize,
                        lineHeight: theme.typography.body2.lineHeight,
                        fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                    }
                }
            }),
            caption && /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: caption,
                arrow: true,
                placement: "right",
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    width: 16,
                    icon: "eva:info-outline",
                    sx: {
                        color: "text.disabled",
                        ...!subItem && {
                            top: 11,
                            left: 6,
                            position: "absolute"
                        }
                    }
                })
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                width: 16,
                icon: "eva:arrow-ios-forward-fill",
                sx: {
                    top: 11,
                    right: 6,
                    position: "absolute"
                }
            })
        ]
    });
    // Hidden item by role
    if (roles && !roles.includes(`${config.currentRole}`)) {
        return null;
    }
    // External link
    if (externalLink) return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        href: path,
        target: "_blank",
        rel: "noopener",
        underline: "none",
        sx: {
            width: 1,
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        sx: {
            width: 1,
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
});
/* harmony default export */ const nav_item = (NavItem);

;// CONCATENATED MODULE: ./src/components/nav-section/mini/nav-list.tsx


// @mui



// routes



function NavList({ data, depth, hasChild, config }) {
    const navRef = (0,react_.useRef)(null);
    const pathname = (0,hooks/* usePathname */.jD)();
    const active = (0,use_active_link/* useActiveLink */.X)(data.path, hasChild);
    const externalLink = data.path.includes("http");
    const [open, setOpen] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        if (open) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    (0,react_.useEffect)(()=>{
        const appBarEl = Array.from(document.querySelectorAll(`.${AppBar.appBarClasses.root}`));
        // Reset styles when hover
        const styles = ()=>{
            document.body.style.overflow = "";
            document.body.style.padding = "";
            // Apply for Window
            appBarEl.forEach((elem)=>{
                elem.style.padding = "";
            });
        };
        if (open) {
            styles();
        } else {
            styles();
        }
    }, [
        open
    ]);
    const handleOpen = (0,react_.useCallback)(()=>{
        setOpen(true);
    }, []);
    const handleClose = (0,react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_item, {
                ref: navRef,
                item: data,
                depth: depth,
                open: open,
                active: active,
                externalLink: externalLink,
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose,
                config: config
            }),
            hasChild && /*#__PURE__*/ jsx_runtime_.jsx((Popover_default()), {
                open: open,
                anchorEl: navRef.current,
                anchorOrigin: {
                    vertical: "center",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "center",
                    horizontal: "left"
                },
                slotProps: {
                    paper: {
                        onMouseEnter: handleOpen,
                        onMouseLeave: handleClose,
                        sx: {
                            mt: 0.5,
                            width: 160,
                            ...open && {
                                pointerEvents: "auto"
                            }
                        }
                    }
                },
                sx: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavSubList, {
                    data: data.children,
                    depth: depth,
                    config: config
                })
            })
        ]
    });
}
function NavSubList({ data, depth, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        spacing: 0.5,
        children: data.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/mini/nav-section-mini.tsx





// ----------------------------------------------------------------------
function NavSectionMini({ data, config, sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        sx: sx,
        ...other,
        children: data.map((group, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Group, {
                items: group.items,
                config: navMiniConfig(config)
            }, group.subheader || index))
    });
}
/* harmony default export */ const nav_section_mini = (/*#__PURE__*/(0,react_.memo)(NavSectionMini));
function Group({ items, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(NavList, {
                data: list,
                depth: 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/mini/index.ts


// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(6176);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Collapse/index.js
var Collapse = __webpack_require__(31022);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListSubheader/index.js
var ListSubheader = __webpack_require__(62133);
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader);
;// CONCATENATED MODULE: ./src/components/nav-section/vertical/styles.ts
// @mui




const styles_StyledItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, depth, config, theme })=>{
    const subItem = depth !== 1;
    const deepSubItem = depth > 2;
    const activeStyles = {
        root: {
            color: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.primary.light,
            backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.08),
            "&:hover": {
                backgroundColor: (0,styles.alpha)(theme.palette.primary.main, 0.16)
            }
        },
        sub: {
            color: theme.palette.text.primary,
            backgroundColor: "transparent",
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        }
    };
    return {
        // Root item
        padding: config.itemPadding,
        marginBottom: config.itemGap,
        borderRadius: config.itemRadius,
        minHeight: config.itemRootHeight,
        color: theme.palette.text.secondary,
        // Active root item
        ...active && {
            ...activeStyles.root
        },
        // Sub item
        ...subItem && {
            minHeight: config.itemSubHeight,
            // Active sub item
            ...active && {
                ...activeStyles.sub
            }
        },
        // Deep sub item
        ...deepSubItem && {
            paddingLeft: theme.spacing(depth)
        }
    };
});
const styles_StyledIcon = (0,styles.styled)((ListItemIcon_default()))(({ size })=>({
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledDotIcon = (0,styles.styled)("span")(({ active, theme })=>({
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: theme.palette.text.disabled,
        transition: theme.transitions.create([
            "transform"
        ], {
            duration: theme.transitions.duration.shorter
        }),
        ...active && {
            transform: "scale(2)",
            backgroundColor: theme.palette.primary.main
        }
    }));
const StyledSubheader = (0,styles.styled)((ListSubheader_default()))(({ config, theme })=>({
        ...theme.typography.overline,
        fontSize: 11,
        cursor: "pointer",
        display: "inline-flex",
        padding: config.itemPadding,
        paddingTop: theme.spacing(2),
        marginBottom: config.itemGap,
        paddingBottom: theme.spacing(1),
        color: theme.palette.text.disabled,
        transition: theme.transitions.create([
            "color"
        ], {
            duration: theme.transitions.duration.shortest
        }),
        "&:hover": {
            color: theme.palette.text.primary
        }
    }));

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/nav-section/vertical/nav-item.tsx
// @mui





// routes

//


function nav_item_NavItem({ item, open, depth, active, config, externalLink, ...other }) {
    const { title, path, icon, info, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_StyledItem, {
        disableGutters: true,
        disabled: disabled,
        active: active,
        depth: depth,
        config: config,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    icon && /*#__PURE__*/ jsx_runtime_.jsx(styles_StyledIcon, {
                        size: config.iconSize,
                        children: icon
                    }),
                    subItem && /*#__PURE__*/ jsx_runtime_.jsx(styles_StyledIcon, {
                        size: config.iconSize,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledDotIcon, {
                            active: active
                        })
                    })
                ]
            }),
            !(config.hiddenLabel && !subItem) && /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                primary: title,
                secondary: caption ? /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                    title: caption,
                    placement: "top-start",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: caption
                    })
                }) : null,
                primaryTypographyProps: {
                    noWrap: true,
                    typography: "body2",
                    textTransform: "capitalize",
                    fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                },
                secondaryTypographyProps: {
                    noWrap: true,
                    component: "span",
                    typography: "caption",
                    color: "text.disabled"
                }
            }),
            info && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    ml: 1,
                    lineHeight: 0
                },
                children: info
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                width: 16,
                icon: open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill",
                sx: {
                    ml: 1,
                    flexShrink: 0
                }
            })
        ]
    });
    // Hidden item by role
    if (roles && !roles.includes(`${config.currentRole}`)) {
        return null;
    }
    // External link
    if (externalLink) return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        href: path,
        target: "_blank",
        rel: "noopener",
        underline: "none",
        color: "inherit",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
    // Has child
    if (children) {
        return renderContent;
    }
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        color: "inherit",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/nav-list.tsx


// @mui

// routes



function nav_list_NavList({ data, depth, hasChild, config }) {
    const pathname = (0,hooks/* usePathname */.jD)();
    const active = (0,use_active_link/* useActiveLink */.X)(data.path, hasChild);
    const externalLink = data.path.includes("http");
    const [open, setOpen] = (0,react_.useState)(active);
    (0,react_.useEffect)(()=>{
        if (!active) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    const handleToggle = (0,react_.useCallback)(()=>{
        setOpen((prev)=>!prev);
    }, []);
    const handleClose = (0,react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(nav_item_NavItem, {
                item: data,
                depth: depth,
                open: open,
                active: active,
                externalLink: externalLink,
                onClick: handleToggle,
                config: config
            }),
            hasChild && /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                in: open,
                unmountOnExit: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(nav_list_NavSubList, {
                    data: data.children,
                    depth: depth,
                    config: config
                })
            })
        ]
    });
}
function nav_list_NavSubList({ data, depth, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_list_NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/nav-section-vertical.tsx


// @mui






// ----------------------------------------------------------------------
function NavSectionVertical({ data, config, sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        sx: sx,
        ...other,
        children: data.map((group, index)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_section_vertical_Group, {
                subheader: group.subheader,
                items: group.items,
                config: navVerticalConfig(config)
            }, group.subheader || index))
    });
}
/* harmony default export */ const nav_section_vertical = (/*#__PURE__*/(0,react_.memo)(NavSectionVertical));
function nav_section_vertical_Group({ subheader, items, config }) {
    const [open, setOpen] = (0,react_.useState)(true);
    const handleToggle = (0,react_.useCallback)(()=>{
        setOpen((prev)=>!prev);
    }, []);
    const renderContent = items.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_list_NavList, {
            data: list,
            depth: 1,
            hasChild: !!list.children,
            config: config
        }, list.title + list.path));
    return /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
        disablePadding: true,
        sx: {
            px: 2
        },
        children: subheader ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledSubheader, {
                    disableGutters: true,
                    disableSticky: true,
                    onClick: handleToggle,
                    config: config,
                    children: subheader
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                    in: open,
                    children: renderContent
                })
            ]
        }) : renderContent
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/vertical/index.ts


// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/styles.ts
// @mui



const horizontal_styles_StyledItem = (0,styles.styled)((ListItemButton_default()), {
    shouldForwardProp: (prop)=>prop !== "active"
})(({ active, open, depth, config, theme })=>{
    const subItem = depth !== 1;
    const activeStyles = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.selected
    };
    return {
        // Root item
        flexShrink: 0,
        padding: config.itemPadding,
        marginRight: config.itemGap,
        borderRadius: config.itemRadius,
        minHeight: config.itemRootHeight,
        color: theme.palette.text.secondary,
        // Active item
        ...active && {
            ...activeStyles
        },
        // Sub item
        ...subItem && {
            margin: 0,
            padding: theme.spacing(0, 1),
            minHeight: config.itemSubHeight
        },
        // Open
        ...open && !active && {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.hover
        }
    };
});
const horizontal_styles_StyledIcon = (0,styles.styled)((ListItemIcon_default()))(({ size })=>({
        width: size,
        height: size,
        flexShrink: 0,
        marginRight: 0
    }));

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/nav-item.tsx


// @mui




// routes

//


const horizontal_nav_item_NavItem = /*#__PURE__*/ (0,react_.forwardRef)(({ item, depth, open, active, externalLink, config, ...other }, ref)=>{
    const { title, path, icon, info, children, disabled, caption, roles } = item;
    const subItem = depth !== 1;
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(horizontal_styles_StyledItem, {
        disableGutters: true,
        ref: ref,
        open: open,
        depth: depth,
        active: active,
        disabled: disabled,
        config: config,
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx(horizontal_styles_StyledIcon, {
                size: config.iconSize,
                sx: {
                    ...subItem && {
                        mr: 1.5
                    }
                },
                children: icon
            }),
            !(config.hiddenLabel && !subItem) && /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                sx: {
                    ...!subItem && {
                        ml: 1
                    }
                },
                primary: title,
                primaryTypographyProps: {
                    noWrap: true,
                    typography: "body2",
                    textTransform: "capitalize",
                    fontWeight: active ? "fontWeightBold" : "fontWeightMedium",
                    ...subItem && {
                        fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium"
                    }
                }
            }),
            info && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    ml: 0.5,
                    lineHeight: 0
                },
                children: info
            }),
            caption && /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: caption,
                arrow: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    width: 16,
                    icon: "eva:info-outline",
                    sx: {
                        ml: 0.5,
                        color: "text.disabled"
                    }
                })
            }),
            !!children && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: subItem ? "eva:arrow-ios-forward-fill" : "eva:arrow-ios-downward-fill",
                width: 16,
                sx: {
                    flexShrink: 0,
                    ml: 0.5
                }
            })
        ]
    });
    // Hidden item by role
    if (roles && !roles.includes(`${config.currentRole}`)) {
        return null;
    }
    // External link
    if (externalLink) return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        href: path,
        target: "_blank",
        rel: "noopener",
        underline: "none",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
    // Default
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: path,
        underline: "none",
        sx: {
            ...disabled && {
                cursor: "default"
            }
        },
        children: renderContent
    });
});
/* harmony default export */ const horizontal_nav_item = (horizontal_nav_item_NavItem);

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/nav-list.tsx


// @mui



// routes



function horizontal_nav_list_NavList({ data, depth, hasChild, config }) {
    const navRef = (0,react_.useRef)(null);
    const pathname = (0,hooks/* usePathname */.jD)();
    const active = (0,use_active_link/* useActiveLink */.X)(data.path, hasChild);
    const externalLink = data.path.includes("http");
    const [open, setOpen] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        if (open) {
            handleClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    (0,react_.useEffect)(()=>{
        const appBarEl = Array.from(document.querySelectorAll(`.${AppBar.appBarClasses.root}`));
        // Reset styles when hover
        const styles = ()=>{
            document.body.style.overflow = "";
            document.body.style.padding = "";
            // Apply for Window
            appBarEl.forEach((elem)=>{
                elem.style.padding = "";
            });
        };
        if (open) {
            styles();
        } else {
            styles();
        }
    }, [
        open
    ]);
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_item, {
                ref: navRef,
                item: data,
                depth: depth,
                open: open,
                active: active,
                externalLink: externalLink,
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose,
                config: config
            }),
            hasChild && /*#__PURE__*/ jsx_runtime_.jsx((Popover_default()), {
                open: open,
                anchorEl: navRef.current,
                anchorOrigin: depth === 1 ? {
                    vertical: "bottom",
                    horizontal: "left"
                } : {
                    vertical: "center",
                    horizontal: "right"
                },
                transformOrigin: depth === 1 ? {
                    vertical: "top",
                    horizontal: "left"
                } : {
                    vertical: "center",
                    horizontal: "left"
                },
                slotProps: {
                    paper: {
                        onMouseEnter: handleOpen,
                        onMouseLeave: handleClose,
                        sx: {
                            width: 160,
                            ...open && {
                                pointerEvents: "auto"
                            }
                        }
                    }
                },
                sx: {
                    pointerEvents: "none"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_list_NavSubList, {
                    data: data.children,
                    depth: depth,
                    config: config
                })
            })
        ]
    });
}
function horizontal_nav_list_NavSubList({ data, depth, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        spacing: 0.5,
        children: data.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_list_NavList, {
                data: list,
                depth: depth + 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/nav-section-horizontal.tsx


// @mui

// theme



// ----------------------------------------------------------------------
function NavSectionHorizontal({ data, config, sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        direction: "row",
        sx: {
            mx: "auto",
            ...css/* hideScroll */.O1.y,
            ...sx
        },
        children: data.map((group, index)=>/*#__PURE__*/ jsx_runtime_.jsx(nav_section_horizontal_Group, {
                items: group.items,
                config: navHorizontalConfig(config)
            }, group.subheader || index))
    });
}
/* harmony default export */ const nav_section_horizontal = (/*#__PURE__*/(0,react_.memo)(NavSectionHorizontal));
function nav_section_horizontal_Group({ items, config }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items.map((list)=>/*#__PURE__*/ jsx_runtime_.jsx(horizontal_nav_list_NavList, {
                data: list,
                depth: 1,
                hasChild: !!list.children,
                config: config
            }, list.title + list.path))
    });
}

;// CONCATENATED MODULE: ./src/components/nav-section/horizontal/index.ts


;// CONCATENATED MODULE: ./src/components/nav-section/index.ts






/***/ }),

/***/ 44026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ text_max_line),
  t: () => (/* reexport */ useTypography)
});

// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
;// CONCATENATED MODULE: ./src/components/text-max-line/use-typography.ts
// @mui

// hooks

// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function useTypography(variant) {
    const theme = (0,styles.useTheme)();
    const breakpoints = (0,use_responsive/* useWidth */.z)();
    const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
    const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = remToPx(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const { fontWeight, letterSpacing } = theme.typography[variant];
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
;// CONCATENATED MODULE: ./src/components/text-max-line/text-max-line.tsx


// @mui



// ----------------------------------------------------------------------
const TextMaxLine = /*#__PURE__*/ (0,react_.forwardRef)(({ asLink, variant = "body1", line = 2, persistent = false, children, sx, ...other }, ref)=>{
    const { lineHeight } = useTypography(variant);
    const styles = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
        ...persistent && {
            height: lineHeight * line
        },
        ...sx
    };
    if (asLink) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            color: "inherit",
            ref: ref,
            variant: variant,
            sx: {
                ...styles
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
        ref: ref,
        variant: variant,
        sx: {
            ...styles
        },
        ...other,
        children: children
    });
});
/* harmony default export */ const text_max_line = (TextMaxLine);

;// CONCATENATED MODULE: ./src/components/text-max-line/index.ts





/***/ }),

/***/ 65694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}


/***/ }),

/***/ 79954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostCommentForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76505);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29189);




// @mui



// components


// ----------------------------------------------------------------------
function PostCommentForm() {
    const CommentSchema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ry().shape({
        comment: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Comment is required"),
        name: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Name is required"),
        email: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Z_().required("Email is required").email("Email must be a valid email address")
    });
    const defaultValues = {
        comment: "",
        name: "",
        email: ""
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__/* .yupResolver */ .X)(CommentSchema),
        defaultValues
    });
    const { reset, handleSubmit, formState: { isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__["default"], {
            spacing: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .RHFTextField */ .au, {
                    name: "comment",
                    placeholder: "Write some of your comments...",
                    multiline: true,
                    rows: 4
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    direction: "row",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            direction: "row",
                            alignItems: "center",
                            flexGrow: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        icon: "solar:gallery-add-bold"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        icon: "eva:attach-2-fill"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        icon: "eva:smiling-face-fill"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                            type: "submit",
                            variant: "contained",
                            loading: isSubmitting,
                            children: "Post comment"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 48048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PostCommentList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Pagination/index.js
var Pagination = __webpack_require__(53531);
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItem/index.js
var ListItem = __webpack_require__(43610);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/sections/blog/post-comment-item.tsx
// @mui








// hooks

// utils

// components

function PostCommentItem({ name, avatarUrl, message, tagUser, postedAt, hasReply }) {
    const reply = (0,use_boolean/* useBoolean */.k)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
        sx: {
            p: 0,
            pt: 3,
            alignItems: "flex-start",
            ...hasReply && {
                pl: 8
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                alt: name,
                src: avatarUrl,
                sx: {
                    mr: 2,
                    width: 48,
                    height: 48
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexGrow: 1,
                sx: {
                    pb: 3,
                    borderBottom: (theme)=>`solid 1px ${theme.palette.divider}`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle2",
                        sx: {
                            mb: 0.5
                        },
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "caption",
                        sx: {
                            color: "text.disabled"
                        },
                        children: (0,format_time/* fDate */.Mu)(postedAt)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "body2",
                        sx: {
                            mt: 1
                        },
                        children: [
                            tagUser && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                component: "strong",
                                sx: {
                                    mr: 0.5
                                },
                                children: [
                                    "@",
                                    tagUser
                                ]
                            }),
                            message
                        ]
                    }),
                    reply.value && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            mt: 2
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            fullWidth: true,
                            autoFocus: true,
                            placeholder: "Write comment..."
                        })
                    })
                ]
            }),
            !hasReply && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "small",
                color: reply.value ? "primary" : "inherit",
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:pen-bold",
                    width: 16
                }),
                onClick: reply.onToggle,
                sx: {
                    right: 0,
                    position: "absolute"
                },
                children: "Reply"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/blog/post-comment-list.tsx
// @mui



//

function PostCommentList({ comments }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: comments.map((comment)=>{
                    const { id, replyComment, name, users, message, avatarUrl, postedAt } = comment;
                    const hasReply = !!replyComment.length;
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PostCommentItem, {
                                name: name,
                                message: message,
                                postedAt: postedAt,
                                avatarUrl: avatarUrl
                            }),
                            hasReply && replyComment.map((reply)=>{
                                const userReply = users.find((user)=>user.id === reply.userId);
                                return /*#__PURE__*/ jsx_runtime_.jsx(PostCommentItem, {
                                    name: userReply?.name || "",
                                    message: reply.message,
                                    postedAt: reply.postedAt,
                                    avatarUrl: userReply?.avatarUrl || "",
                                    tagUser: reply.tagUser,
                                    hasReply: true
                                }, reply.id);
                            })
                        ]
                    }, id);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Pagination_default()), {
                count: 8,
                sx: {
                    my: 5,
                    mx: "auto"
                }
            })
        ]
    });
}


/***/ }),

/***/ 8230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostDetailsHero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92034);
/* harmony import */ var _mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93429);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52208);
/* harmony import */ var _mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99011);
/* harmony import */ var src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59099);
/* harmony import */ var src_utils_format_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94871);
/* harmony import */ var src_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71745);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76505);
// @mui










// _mock

// hooks

// utils

// theme

// components

// ----------------------------------------------------------------------
function PostDetailsHero({ title, author, coverUrl, createdAt }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const smUp = (0,src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_5__/* .useResponsive */ .F)("up", "sm");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
        sx: {
            height: 480,
            overflow: "hidden",
            ...(0,src_theme_css__WEBPACK_IMPORTED_MODULE_2__/* .bgGradient */ .v3)({
                imgUrl: coverUrl,
                startColor: `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.grey[900], 0.64)} 0%`,
                endColor: `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.grey[900], 0.64)} 100%`
            })
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
            sx: {
                height: 1,
                position: "relative"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                    variant: "h3",
                    component: "h1",
                    sx: {
                        zIndex: 9,
                        color: "common.white",
                        position: "absolute",
                        maxWidth: 480,
                        pt: {
                            xs: 2,
                            md: 8
                        }
                    },
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    sx: {
                        left: 0,
                        width: 1,
                        bottom: 0,
                        position: "absolute"
                    },
                    children: [
                        author && createdAt && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            direction: "row",
                            alignItems: "center",
                            sx: {
                                px: {
                                    xs: 2,
                                    md: 3
                                },
                                pb: {
                                    xs: 3,
                                    md: 8
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    alt: author.name,
                                    src: author.avatarUrl,
                                    sx: {
                                        width: 64,
                                        height: 64,
                                        mr: 2
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    sx: {
                                        color: "common.white"
                                    },
                                    primary: author.name,
                                    secondary: (0,src_utils_format_time__WEBPACK_IMPORTED_MODULE_12__/* .fDate */ .Mu)(createdAt),
                                    primaryTypographyProps: {
                                        typography: "subtitle1",
                                        mb: 0.5
                                    },
                                    secondaryTypographyProps: {
                                        color: "inherit",
                                        sx: {
                                            opacity: 0.64
                                        }
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SpeedDial__WEBPACK_IMPORTED_MODULE_13___default()), {
                            direction: smUp ? "left" : "up",
                            ariaLabel: "Share post",
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                icon: "solar:share-bold"
                            }),
                            FabProps: {
                                size: "medium"
                            },
                            sx: {
                                position: "absolute",
                                bottom: {
                                    xs: 32,
                                    md: 64
                                },
                                right: {
                                    xs: 16,
                                    md: 24
                                }
                            },
                            children: src_mock__WEBPACK_IMPORTED_MODULE_1__/* ._socials */ ._I.map((action)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SpeedDialAction__WEBPACK_IMPORTED_MODULE_14___default()), {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        icon: action.icon,
                                        sx: {
                                            color: action.color
                                        }
                                    }),
                                    tooltipTitle: action.name,
                                    tooltipPlacement: "top",
                                    FabProps: {
                                        color: "default"
                                    }
                                }, action.name))
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 14917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PostList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Unstable_Grid2/index.js
var Unstable_Grid2 = __webpack_require__(26566);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardContent/index.js
var CardContent = __webpack_require__(1853);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/assets/illustrations/index.ts + 15 modules
var illustrations = __webpack_require__(90310);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
// EXTERNAL MODULE: ./src/components/text-max-line/index.ts + 2 modules
var text_max_line = __webpack_require__(44026);
;// CONCATENATED MODULE: ./src/sections/blog/post-item.tsx
// @mui









// routes


// hooks

// utils


// assets

// components



function PostItem({ post, index }) {
    const theme = (0,styles.useTheme)();
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const { coverUrl, title, totalViews, totalComments, totalShares, author, createdAt } = post;
    const latestPost = index === 0 || index === 1 || index === 2;
    if (mdUp && latestPost) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    alt: author.name,
                    src: author.avatarUrl,
                    sx: {
                        top: 24,
                        left: 24,
                        zIndex: 9,
                        position: "absolute"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PostContent, {
                    title: title,
                    createdAt: createdAt,
                    totalViews: totalViews,
                    totalShares: totalShares,
                    totalComments: totalComments,
                    index: index
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                    alt: title,
                    src: coverUrl,
                    overlay: (0,styles.alpha)(theme.palette.grey[900], 0.48),
                    sx: {
                        width: 1,
                        height: 360
                    }
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(illustrations/* AvatarShape */.oG, {
                        sx: {
                            left: 0,
                            zIndex: 9,
                            width: 88,
                            height: 36,
                            bottom: -16,
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: author.name,
                        src: author.avatarUrl,
                        sx: {
                            left: 24,
                            zIndex: 9,
                            bottom: -24,
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                        alt: title,
                        src: coverUrl,
                        ratio: "4/3"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostContent, {
                title: title,
                totalViews: totalViews,
                totalComments: totalComments,
                totalShares: totalShares,
                createdAt: createdAt
            })
        ]
    });
}
function PostContent({ title, createdAt, totalViews, totalShares, totalComments, index }) {
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const linkTo = paths/* paths */.H.post.details(title);
    const latestPostLarge = index === 0;
    const latestPostSmall = index === 1 || index === 2;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
        sx: {
            pt: 6,
            width: 1,
            ...(latestPostLarge || latestPostSmall) && {
                pt: 0,
                zIndex: 9,
                bottom: 0,
                position: "absolute",
                color: "common.white"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                component: "div",
                sx: {
                    mb: 1,
                    color: "text.disabled",
                    ...(latestPostLarge || latestPostSmall) && {
                        opacity: 0.64,
                        color: "common.white"
                    }
                },
                children: (0,format_time/* fDate */.Mu)(createdAt)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                color: "inherit",
                component: components/* RouterLink */.r,
                href: linkTo,
                children: /*#__PURE__*/ jsx_runtime_.jsx(text_max_line/* default */.Z, {
                    variant: mdUp && latestPostLarge ? "h5" : "subtitle2",
                    line: 2,
                    persistent: true,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1.5,
                direction: "row",
                justifyContent: "flex-end",
                sx: {
                    mt: 3,
                    typography: "caption",
                    color: "text.disabled",
                    ...(latestPostLarge || latestPostSmall) && {
                        opacity: 0.64,
                        color: "common.white"
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:message-circle-fill",
                                width: 16,
                                sx: {
                                    mr: 0.5
                                }
                            }),
                            (0,format_number/* fShortenNumber */.v1)(totalComments)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:eye-bold",
                                width: 16,
                                sx: {
                                    mr: 0.5
                                }
                            }),
                            (0,format_number/* fShortenNumber */.v1)(totalViews)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:share-bold",
                                width: 16,
                                sx: {
                                    mr: 0.5
                                }
                            }),
                            (0,format_number/* fShortenNumber */.v1)(totalShares)
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/sections/blog/post-skeleton.tsx
var post_skeleton = __webpack_require__(57128);
;// CONCATENATED MODULE: ./src/sections/blog/post-list.tsx
// @mui




// components

//


function PostList({ posts, loading, disabledIndex }) {
    const renderSkeleton = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: [
            ...Array(16)
        ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                sm: 6,
                md: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx(post_skeleton/* PostItemSkeleton */.C, {})
            }, index))
    });
    const renderList = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: posts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                sm: 6,
                md: !disabledIndex && index === 0 ? 6 : 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx(PostItem, {
                    post: post,
                    index: !disabledIndex ? index : undefined
                })
            }, post.id))
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                container: true,
                spacing: 3,
                children: loading ? renderSkeleton : renderList
            }),
            posts.length > 8 && /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                alignItems: "center",
                sx: {
                    mt: 8,
                    mb: {
                        xs: 10,
                        md: 15
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    size: "large",
                    variant: "outlined",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "svg-spinners:12-dots-scale-rotate",
                        width: 24
                    }),
                    children: "Load More"
                })
            })
        ]
    });
}


/***/ }),

/***/ 11572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PostNewEditForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/yup/index.js
var yup = __webpack_require__(50298);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var dist_yup = __webpack_require__(57086);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(92133);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var Switch = __webpack_require__(56703);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Unstable_Grid2/index.js
var Unstable_Grid2 = __webpack_require__(26566);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardHeader/index.js
var CardHeader = __webpack_require__(77782);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/snackbar/index.ts
var snackbar = __webpack_require__(80941);
// EXTERNAL MODULE: ./src/components/hook-form/index.ts + 11 modules
var hook_form = __webpack_require__(29189);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(62969);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogActions/index.js
var DialogActions = __webpack_require__(95915);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions);
// EXTERNAL MODULE: ./src/components/markdown/index.ts + 2 modules
var markdown = __webpack_require__(1001);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./src/components/empty-content/index.ts + 1 modules
var empty_content = __webpack_require__(78998);
// EXTERNAL MODULE: ./src/sections/blog/post-details-hero.tsx
var post_details_hero = __webpack_require__(8230);
;// CONCATENATED MODULE: ./src/sections/blog/post-details-preview.tsx
// @mui









// components



//

function PostDetailsPreview({ title, coverUrl, content, description, //
open, isValid, onClose, onSubmit, isSubmitting }) {
    const hasContent = title || description || content || coverUrl;
    const hasHero = title || coverUrl;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        fullScreen: true,
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                sx: {
                    py: 2,
                    px: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            flexGrow: 1
                        },
                        children: "Preview"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "outlined",
                        color: "inherit",
                        onClick: onClose,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                        type: "submit",
                        variant: "contained",
                        disabled: !isValid,
                        loading: isSubmitting,
                        onClick: onSubmit,
                        children: "Post"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            hasContent ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(scrollbar/* default */.Z, {
                children: [
                    hasHero && /*#__PURE__*/ jsx_runtime_.jsx(post_details_hero/* default */.Z, {
                        title: title,
                        coverUrl: coverUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        sx: {
                            mt: 5,
                            mb: 10
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            sx: {
                                maxWidth: 720,
                                mx: "auto"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        mb: 5
                                    },
                                    children: description
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(markdown/* default */.Z, {
                                    children: content
                                })
                            ]
                        })
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(empty_content/* default */.Z, {
                filled: true,
                title: "Empty Content!"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/blog/post-new-edit-form.tsx






// @mui










// hooks


// routes


// _mock



//

function PostNewEditForm({ currentPost }) {
    const router = (0,hooks/* useRouter */.tv)();
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const { enqueueSnackbar } = (0,snackbar/* useSnackbar */.Ds)();
    const preview = (0,use_boolean/* useBoolean */.k)();
    const NewBlogSchema = yup/* object */.Ry().shape({
        title: yup/* string */.Z_().required("Title is required"),
        description: yup/* string */.Z_().required("Description is required"),
        content: yup/* string */.Z_().required("Content is required"),
        coverUrl: yup/* mixed */.nK().nullable().required("Cover is required"),
        tags: yup/* array */.IX().min(2, "Must have at least 2 tags"),
        metaKeywords: yup/* array */.IX().min(1, "Meta keywords is required"),
        // not required
        metaTitle: yup/* string */.Z_(),
        metaDescription: yup/* string */.Z_()
    });
    const defaultValues = (0,react_.useMemo)(()=>({
            title: currentPost?.title || "",
            description: currentPost?.description || "",
            content: currentPost?.content || "",
            coverUrl: currentPost?.coverUrl || null,
            tags: currentPost?.tags || [],
            metaKeywords: currentPost?.metaKeywords || [],
            metaTitle: currentPost?.metaTitle || "",
            metaDescription: currentPost?.metaDescription || ""
        }), [
        currentPost
    ]);
    const methods = (0,index_esm/* useForm */.cI)({
        resolver: (0,dist_yup/* yupResolver */.X)(NewBlogSchema),
        defaultValues
    });
    const { reset, watch, setValue, handleSubmit, formState: { isSubmitting, isValid } } = methods;
    const values = watch();
    (0,react_.useEffect)(()=>{
        if (currentPost) {
            reset(defaultValues);
        }
    }, [
        currentPost,
        defaultValues,
        reset
    ]);
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            preview.onFalse();
            enqueueSnackbar(currentPost ? "Update success!" : "Create success!");
            router.push(paths/* paths */.H.dashboard.post.root);
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const handleDrop = (0,react_.useCallback)((acceptedFiles)=>{
        const file = acceptedFiles[0];
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        });
        if (file) {
            setValue("coverUrl", newFile, {
                shouldValidate: true
            });
        }
    }, [
        setValue
    ]);
    const handleRemoveFile = (0,react_.useCallback)(()=>{
        setValue("coverUrl", null);
    }, [
        setValue
    ]);
    const renderDetails = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                md: 4,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 0.5
                        },
                        children: "Details"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Title, short description, image..."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        !mdUp && /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Details"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            spacing: 3,
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "title",
                                    label: "Post Title"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "description",
                                    label: "Description",
                                    multiline: true,
                                    rows: 3
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "subtitle2",
                                            children: "Content"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFEditor */.LM, {
                                            simple: true,
                                            name: "content"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "subtitle2",
                                            children: "Cover"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFUpload */.rd, {
                                            name: "coverUrl",
                                            maxSize: 3145728,
                                            onDrop: handleDrop,
                                            onDelete: handleRemoveFile
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
    const renderProperties = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                md: 4,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            mb: 0.5
                        },
                        children: "Properties"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Additional functions and attributes..."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        !mdUp && /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                            title: "Properties"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            spacing: 3,
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFAutocomplete */.Fl, {
                                    name: "tags",
                                    label: "Tags",
                                    placeholder: "+ Tags",
                                    multiple: true,
                                    freeSolo: true,
                                    options: _mock/* _tags */.Qw.map((option)=>option),
                                    getOptionLabel: (option)=>option,
                                    renderOption: (props, option)=>/*#__PURE__*/ (0,react_.createElement)("li", {
                                            ...props,
                                            key: option
                                        }, option),
                                    renderTags: (selected, getTagProps)=>selected.map((option, index)=>/*#__PURE__*/ (0,react_.createElement)((Chip_default()), {
                                                ...getTagProps({
                                                    index
                                                }),
                                                key: option,
                                                label: option,
                                                size: "small",
                                                color: "info",
                                                variant: "soft"
                                            }))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "metaTitle",
                                    label: "Meta title"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                                    name: "metaDescription",
                                    label: "Meta description",
                                    fullWidth: true,
                                    multiline: true,
                                    rows: 3
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFAutocomplete */.Fl, {
                                    name: "metaKeywords",
                                    label: "Meta keywords",
                                    placeholder: "+ Keywords",
                                    multiple: true,
                                    freeSolo: true,
                                    disableCloseOnSelect: true,
                                    options: _mock/* _tags */.Qw.map((option)=>option),
                                    getOptionLabel: (option)=>option,
                                    renderOption: (props, option)=>/*#__PURE__*/ (0,react_.createElement)("li", {
                                            ...props,
                                            key: option
                                        }, option),
                                    renderTags: (selected, getTagProps)=>selected.map((option, index)=>/*#__PURE__*/ (0,react_.createElement)((Chip_default()), {
                                                ...getTagProps({
                                                    index
                                                }),
                                                key: option,
                                                label: option,
                                                size: "small",
                                                color: "info",
                                                variant: "soft"
                                            }))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                        defaultChecked: true
                                    }),
                                    label: "Enable comments"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
    const renderActions = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                md: 4
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                xs: 12,
                md: 8,
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                        control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                            defaultChecked: true
                        }),
                        label: "Publish",
                        sx: {
                            flexGrow: 1,
                            pl: 3
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "inherit",
                        variant: "outlined",
                        size: "large",
                        onClick: preview.onTrue,
                        children: "Preview"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                        type: "submit",
                        variant: "contained",
                        size: "large",
                        loading: isSubmitting,
                        sx: {
                            ml: 2
                        },
                        children: !currentPost ? "Create Post" : "Save Changes"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hook_form/* default */.ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                container: true,
                spacing: 3,
                children: [
                    renderDetails,
                    renderProperties,
                    renderActions
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostDetailsPreview, {
                title: values.title,
                content: values.content,
                description: values.description,
                coverUrl: typeof values.coverUrl === "string" ? values.coverUrl : `${values.coverUrl?.preview}`,
                //
                open: preview.value,
                isValid: isValid,
                isSubmitting: isSubmitting,
                onClose: preview.onFalse,
                onSubmit: onSubmit
            })
        ]
    });
}


/***/ }),

/***/ 34672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41872);
/* harmony import */ var autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2452);
/* harmony import */ var autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92870);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45003);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76505);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89539);
/* harmony import */ var src_components_search_not_found__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(271);




// @mui






// components



function PostSearch({ query, results, onSearch, hrefItem, loading }) {
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRouter */ .tv)();
    const handleClick = (title)=>{
        router.push(hrefItem(title));
    };
    const handleKeyUp = (event)=>{
        if (query) {
            if (event.key === "Enter") {
                handleClick(query);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7___default()), {
        sx: {
            width: {
                xs: 1,
                sm: 260
            }
        },
        loading: loading,
        autoHighlight: true,
        popupIcon: null,
        options: results,
        onInputChange: (event, newValue)=>onSearch(newValue),
        getOptionLabel: (option)=>option.title,
        noOptionsText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_search_not_found__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            query: query,
            sx: {
                bgcolor: "unset"
            }
        }),
        isOptionEqualToValue: (option, value)=>option.id === value.id,
        slotProps: {
            popper: {
                placement: "bottom-start",
                sx: {
                    minWidth: 320
                }
            },
            paper: {
                sx: {
                    [` .${_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__.autocompleteClasses.option}`]: {
                        pl: 0.75
                    }
                }
            }
        },
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8___default()), {
                ...params,
                placeholder: "Search...",
                onKeyUp: handleKeyUp,
                InputProps: {
                    ...params.InputProps,
                    startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default()), {
                        position: "start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            icon: "eva:search-fill",
                            sx: {
                                ml: 1,
                                color: "text.disabled"
                            }
                        })
                    }),
                    endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                icon: "svg-spinners:8-dots-rotate",
                                sx: {
                                    mr: -3
                                }
                            }) : null,
                            params.InputProps.endAdornment
                        ]
                    })
                }
            }),
        renderOption: (props, post, { inputValue })=>{
            const matches = autosuggest_highlight_match__WEBPACK_IMPORTED_MODULE_3___default()(post.title, inputValue);
            const parts = autosuggest_highlight_parse__WEBPACK_IMPORTED_MODULE_2___default()(post.title, matches);
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
                ...props,
                key: post.id,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_10___default()), {
                        alt: post.title,
                        src: post.coverUrl,
                        variant: "rounded",
                        sx: {
                            width: 48,
                            height: 48,
                            flexShrink: 0,
                            mr: 1.5,
                            borderRadius: 1
                        }
                    }, post.id),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_11___default()), {
                        underline: "none",
                        onClick: ()=>handleClick(post.title),
                        children: parts.map((part, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                component: "span",
                                color: part.highlight ? "primary" : "textPrimary",
                                sx: {
                                    typography: "body2",
                                    fontWeight: part.highlight ? "fontWeightSemiBold" : "fontWeightMedium"
                                },
                                children: part.text
                            }, index))
                    }, inputValue)
                ]
            });
        }
    });
}


/***/ }),

/***/ 57128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ PostItemSkeleton),
/* harmony export */   u: () => (/* binding */ PostDetailsSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52694);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10413);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16854);
// @mui




function PostItemSkeleton({ variant = "vertical", sx, ...other }) {
    if (variant === "horizontal") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
            component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()),
            direction: "row",
            variant: "outlined",
            sx: {
                borderRadius: 2,
                ...sx
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    spacing: 2,
                    flexGrow: 1,
                    sx: {
                        p: 3
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            direction: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    variant: "circular",
                                    sx: {
                                        width: 40,
                                        height: 40
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    sx: {
                                        width: 24,
                                        height: 12
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                width: 1,
                                height: 10
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                width: `calc(100% - 40px)`,
                                height: 10
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                width: `calc(100% - 80px)`,
                                height: 10
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    sx: {
                        p: 1
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            width: 170,
                            height: 240,
                            flexShrink: 0
                        }
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()),
        variant: "outlined",
        sx: {
            borderRadius: 2,
            ...sx
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                sx: {
                    p: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                    sx: {
                        paddingTop: "100%"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                spacing: 2,
                direction: "row",
                alignItems: "center",
                sx: {
                    p: 3,
                    pt: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "circular",
                        sx: {
                            width: 40,
                            height: 40,
                            flexShrink: 0
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        flexGrow: 1,
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                sx: {
                                    height: 10
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                sx: {
                                    width: 0.5,
                                    height: 10
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// ----------------------------------------------------------------------
function PostDetailsSkeleton({ ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                variant: "rectangular",
                sx: {
                    height: 480
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                sx: {
                    width: 1,
                    maxWidth: 720,
                    mx: "auto"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        spacing: 2,
                        direction: "row",
                        alignItems: "center",
                        sx: {
                            my: 8
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                variant: "circular",
                                sx: {
                                    width: 64,
                                    height: 64,
                                    flexShrink: 0
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                spacing: 1,
                                flexGrow: 1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        height: 10
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        height: 10,
                                        sx: {
                                            width: 0.9
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        height: 10,
                                        sx: {
                                            width: 0.8
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            height: 720
                        }
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 53243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostSort)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88707);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76505);
/* harmony import */ var src_components_custom_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99310);
// @mui




// components


function PostSort({ sort, sortOptions, onSort }) {
    const popover = (0,src_components_custom_popover__WEBPACK_IMPORTED_MODULE_2__/* .usePopover */ .S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                disableRipple: true,
                color: "inherit",
                onClick: popover.onOpen,
                endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    icon: popover.open ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"
                }),
                sx: {
                    fontWeight: "fontWeightSemiBold",
                    textTransform: "capitalize"
                },
                children: [
                    "Sort By:",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        component: "span",
                        sx: {
                            ml: 0.5,
                            fontWeight: "fontWeightBold"
                        },
                        children: sort
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_popover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                open: popover.open,
                onClose: popover.onClose,
                sx: {
                    width: 140
                },
                children: sortOptions.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                        selected: sort === option.value,
                        onClick: ()=>{
                            popover.onClose();
                            onSort(option.value);
                        },
                        children: option.label
                    }, option.value))
            })
        ]
    });
}


/***/ }),

/***/ 80728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostCreateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80640);
/* harmony import */ var _post_new_edit_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11572);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// components


//

// ----------------------------------------------------------------------
function PostCreateView() {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSettingsContext */ .K$)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                heading: "Create a new post",
                links: [
                    {
                        name: "Dashboard",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.root
                    },
                    {
                        name: "Blog",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.post.root
                    },
                    {
                        name: "Create"
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_new_edit_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 30879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostDetailsHomeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(92133);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(61272);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16061);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71394);
/* harmony import */ var _mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26017);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87362);
/* harmony import */ var src_utils_format_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9856);
/* harmony import */ var src_api_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95015);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76505);
/* harmony import */ var src_components_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1001);
/* harmony import */ var src_components_empty_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78998);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80640);
/* harmony import */ var _post_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14917);
/* harmony import */ var _post_comment_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48048);
/* harmony import */ var _post_comment_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79954);
/* harmony import */ var _post_details_hero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8230);
/* harmony import */ var _post_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57128);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui










// routes


// utils

// api

// components




//





function PostDetailsHomeView({ title }) {
    const { post, postError, postLoading } = (0,src_api_blog__WEBPACK_IMPORTED_MODULE_4__/* .useGetPost */ .C8)(title);
    const { latestPosts, latestPostsLoading } = (0,src_api_blog__WEBPACK_IMPORTED_MODULE_4__/* .useGetLatestPosts */ .Jx)(title);
    const renderSkeleton = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_skeleton__WEBPACK_IMPORTED_MODULE_13__/* .PostDetailsSkeleton */ .u, {});
    const renderError = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_14___default()), {
        sx: {
            my: 10
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_empty_content__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            filled: true,
            title: `${postError?.message}`,
            action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_15___default()), {
                component: src_routes_components__WEBPACK_IMPORTED_MODULE_2__/* .RouterLink */ .r,
                href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.post.root,
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    icon: "eva:arrow-ios-back-fill",
                    width: 16
                }),
                sx: {
                    mt: 3
                },
                children: "Back to List"
            }),
            sx: {
                py: 10
            }
        })
    });
    const renderPost = post && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_details_hero__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: post.title,
                author: post.author,
                coverUrl: post.coverUrl,
                createdAt: post.createdAt
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_14___default()), {
                maxWidth: false,
                sx: {
                    py: 3,
                    mb: 5,
                    borderBottom: (theme)=>`solid 1px ${theme.palette.divider}`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    links: [
                        {
                            name: "Home",
                            href: "/"
                        },
                        {
                            name: "Blog",
                            href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.post.root
                        },
                        {
                            name: post?.title
                        }
                    ],
                    sx: {
                        maxWidth: 720,
                        mx: "auto"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_14___default()), {
                maxWidth: false,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    sx: {
                        maxWidth: 720,
                        mx: "auto"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()), {
                            variant: "subtitle1",
                            sx: {
                                mb: 5
                            },
                            children: post.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_markdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: post.content
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], {
                            spacing: 3,
                            sx: {
                                py: 3,
                                borderTop: (theme)=>`dashed 1px ${theme.palette.divider}`,
                                borderBottom: (theme)=>`dashed 1px ${theme.palette.divider}`
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    direction: "row",
                                    flexWrap: "wrap",
                                    spacing: 1,
                                    children: post.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_18___default()), {
                                            label: tag,
                                            variant: "soft"
                                        }, tag))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    direction: "row",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_20___default()), {
                                                defaultChecked: true,
                                                size: "small",
                                                color: "error",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    icon: "solar:heart-bold"
                                                }),
                                                checkedIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    icon: "solar:heart-bold"
                                                })
                                            }),
                                            label: (0,src_utils_format_number__WEBPACK_IMPORTED_MODULE_3__/* .fShortenNumber */ .v1)(post.totalFavorites),
                                            sx: {
                                                mr: 1
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_21___default()), {
                                            children: post.favoritePerson.map((person)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                    alt: person.name,
                                                    src: person.avatarUrl
                                                }, person.name))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], {
                            direction: "row",
                            sx: {
                                mb: 3,
                                mt: 5
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()), {
                                    variant: "h4",
                                    children: "Comments"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()), {
                                    variant: "subtitle2",
                                    sx: {
                                        color: "text.disabled"
                                    },
                                    children: [
                                        "(",
                                        post.comments.length,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_comment_form__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_23___default()), {
                            sx: {
                                mt: 5,
                                mb: 2
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_comment_list__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            comments: post.comments
                        })
                    ]
                })
            })
        ]
    });
    const renderLatestPosts = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()), {
                variant: "h4",
                sx: {
                    mb: 5
                },
                children: "Recent Posts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_list__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                posts: latestPosts.slice(latestPosts.length - 4),
                loading: latestPostsLoading,
                disabledIndex: true
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            postLoading && renderSkeleton,
            postError && renderError,
            post && renderPost,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_14___default()), {
                sx: {
                    pb: 15
                },
                children: !!latestPosts.length && renderLatestPosts
            })
        ]
    });
}


/***/ }),

/***/ 66994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostDetailsView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(92133);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AvatarGroup/index.js
var AvatarGroup = __webpack_require__(71394);
var AvatarGroup_default = /*#__PURE__*/__webpack_require__.n(AvatarGroup);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/api/blog.ts
var blog = __webpack_require__(95015);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/markdown/index.ts + 2 modules
var markdown = __webpack_require__(1001);
// EXTERNAL MODULE: ./src/components/empty-content/index.ts + 1 modules
var empty_content = __webpack_require__(78998);
// EXTERNAL MODULE: ./src/sections/blog/post-details-hero.tsx
var post_details_hero = __webpack_require__(8230);
// EXTERNAL MODULE: ./src/sections/blog/post-comment-list.tsx + 1 modules
var post_comment_list = __webpack_require__(48048);
// EXTERNAL MODULE: ./src/sections/blog/post-comment-form.tsx
var post_comment_form = __webpack_require__(79954);
// EXTERNAL MODULE: ./src/sections/blog/post-skeleton.tsx
var post_skeleton = __webpack_require__(57128);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/blog/post-details-toolbar.tsx
// @mui








// routes

// components


function PostDetailsToolbar({ publish, backLink, editLink, liveLink, publishOptions, onChangePublish, sx, ...other }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1.5,
                direction: "row",
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    },
                    ...sx
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        component: components/* RouterLink */.r,
                        href: backLink,
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:arrow-ios-back-fill",
                            width: 16
                        }),
                        children: "Back"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            flexGrow: 1
                        }
                    }),
                    publish === "published" && /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Go Live",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            component: components/* RouterLink */.r,
                            href: liveLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:external-link-fill"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: "Edit",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            component: components/* RouterLink */.r,
                            href: editLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:pen-bold"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                        color: "inherit",
                        variant: "contained",
                        loading: !publish,
                        loadingIndicator: "Loading…",
                        endIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:arrow-ios-downward-fill"
                        }),
                        onClick: popover.onOpen,
                        sx: {
                            textTransform: "capitalize"
                        },
                        children: publish
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "top-right",
                sx: {
                    width: 140
                },
                children: publishOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        selected: option.value === publish,
                        onClick: ()=>{
                            popover.onClose();
                            onChangePublish(option.value);
                        },
                        children: [
                            option.value === "published" && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:cloud-upload-fill"
                            }),
                            option.value === "draft" && /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:file-text-bold"
                            }),
                            option.label
                        ]
                    }, option.value))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/blog/view/post-details-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui










// routes


// utils

// _mock

// api

// components



//





function PostDetailsView({ title }) {
    const [publish, setPublish] = (0,react_.useState)("");
    const { post, postLoading, postError } = (0,blog/* useGetPost */.C8)(title);
    const handleChangePublish = (0,react_.useCallback)((newValue)=>{
        setPublish(newValue);
    }, []);
    (0,react_.useEffect)(()=>{
        if (post) {
            setPublish(post?.publish);
        }
    }, [
        post
    ]);
    const renderSkeleton = /*#__PURE__*/ jsx_runtime_.jsx(post_skeleton/* PostDetailsSkeleton */.u, {});
    const renderError = /*#__PURE__*/ jsx_runtime_.jsx(empty_content/* default */.Z, {
        filled: true,
        title: `${postError?.message}`,
        action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
            component: components/* RouterLink */.r,
            href: paths/* paths */.H.dashboard.post.root,
            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: "eva:arrow-ios-back-fill",
                width: 16
            }),
            sx: {
                mt: 3
            },
            children: "Back to List"
        }),
        sx: {
            py: 20
        }
    });
    const renderPost = post && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PostDetailsToolbar, {
                backLink: paths/* paths */.H.dashboard.post.root,
                editLink: paths/* paths */.H.dashboard.post.edit(`${post?.title}`),
                liveLink: paths/* paths */.H.post.details(`${post?.title}`),
                publish: publish || "",
                onChangePublish: handleChangePublish,
                publishOptions: _mock/* POST_PUBLISH_OPTIONS */.TZ
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(post_details_hero/* default */.Z, {
                title: post.title,
                coverUrl: post.coverUrl
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                sx: {
                    maxWidth: 720,
                    mx: "auto",
                    mt: {
                        xs: 5,
                        md: 10
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle1",
                        sx: {
                            mb: 5
                        },
                        children: post.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(markdown/* default */.Z, {
                        children: post.content
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        spacing: 3,
                        sx: {
                            py: 3,
                            borderTop: (theme)=>`dashed 1px ${theme.palette.divider}`,
                            borderBottom: (theme)=>`dashed 1px ${theme.palette.divider}`
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                                direction: "row",
                                flexWrap: "wrap",
                                spacing: 1,
                                children: post.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                        label: tag,
                                        variant: "soft"
                                    }, tag))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: "row",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                            defaultChecked: true,
                                            size: "small",
                                            color: "error",
                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                icon: "solar:heart-bold"
                                            }),
                                            checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                icon: "solar:heart-bold"
                                            })
                                        }),
                                        label: (0,format_number/* fShortenNumber */.v1)(post.totalFavorites),
                                        sx: {
                                            mr: 1
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((AvatarGroup_default()), {
                                        sx: {
                                            [`& .${AvatarGroup.avatarGroupClasses.avatar}`]: {
                                                width: 32,
                                                height: 32
                                            }
                                        },
                                        children: post.favoritePerson.map((person)=>/*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                                alt: person.name,
                                                src: person.avatarUrl
                                            }, person.name))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        sx: {
                            mb: 3,
                            mt: 5
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h4",
                                children: "Comments"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                variant: "subtitle2",
                                sx: {
                                    color: "text.disabled"
                                },
                                children: [
                                    "(",
                                    post.comments.length,
                                    ")"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(post_comment_form/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            mt: 5,
                            mb: 2
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(post_comment_list/* default */.Z, {
                        comments: post.comments
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: false,
        children: [
            postLoading && renderSkeleton,
            postError && renderError,
            post && renderPost
        ]
    });
}


/***/ }),

/***/ 17253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostEditView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_api_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95015);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80640);
/* harmony import */ var _post_new_edit_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11572);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// api

// components


//

function PostEditView({ title }) {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_3__/* .useSettingsContext */ .K$)();
    const { post: currentPost } = (0,src_api_blog__WEBPACK_IMPORTED_MODULE_2__/* .useGetPost */ .C8)(title);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                heading: "Edit",
                links: [
                    {
                        name: "Dashboard",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.root
                    },
                    {
                        name: "Blog",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.post.root
                    },
                    {
                        name: currentPost?.title
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_new_edit_form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                currentPost: currentPost
            })
        ]
    });
}


/***/ }),

/***/ 37248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostListHomeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71723);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48611);
/* harmony import */ var src_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65694);
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99011);
/* harmony import */ var src_api_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95015);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2701);
/* harmony import */ var _post_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14917);
/* harmony import */ var _post_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53243);
/* harmony import */ var _post_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34672);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui



// routes

// hooks

// _mock

// api

// components

//



// ----------------------------------------------------------------------
function PostListHomeView() {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_7__/* .useSettingsContext */ .K$)();
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("latest");
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const debouncedQuery = (0,src_hooks_use_debounce__WEBPACK_IMPORTED_MODULE_4__/* .useDebounce */ .N)(searchQuery);
    const { posts, postsLoading } = (0,src_api_blog__WEBPACK_IMPORTED_MODULE_6__/* .useGetPosts */ .Yi)();
    const { searchResults, searchLoading } = (0,src_api_blog__WEBPACK_IMPORTED_MODULE_6__/* .useSearchPosts */ .nl)(debouncedQuery);
    const dataFiltered = applyFilter({
        inputData: posts,
        sortBy
    });
    const handleSortBy = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((newValue)=>{
        setSortBy(newValue);
    }, []);
    const handleSearch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((inputValue)=>{
        setSearchQuery(inputValue);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_11___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                variant: "h4",
                sx: {
                    my: {
                        xs: 3,
                        md: 5
                    }
                },
                children: "Blog"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], {
                spacing: 3,
                justifyContent: "space-between",
                alignItems: {
                    xs: "flex-end",
                    sm: "center"
                },
                direction: {
                    xs: "column",
                    sm: "row"
                },
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_search__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        query: debouncedQuery,
                        results: searchResults,
                        onSearch: handleSearch,
                        loading: searchLoading,
                        hrefItem: (title)=>src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.post.details(title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_sort__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        sort: sortBy,
                        onSort: handleSortBy,
                        sortOptions: src_mock__WEBPACK_IMPORTED_MODULE_5__/* .POST_SORT_OPTIONS */ .k
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_list__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                posts: dataFiltered,
                loading: postsLoading
            })
        ]
    });
}
// ----------------------------------------------------------------------
const applyFilter = ({ inputData, sortBy })=>{
    if (sortBy === "latest") {
        return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(inputData, [
            "createdAt"
        ], [
            "desc"
        ]);
    }
    if (sortBy === "oldest") {
        return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(inputData, [
            "createdAt"
        ], [
            "asc"
        ]);
    }
    if (sortBy === "popular") {
        return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(inputData, [
            "totalViews"
        ], [
            "desc"
        ]);
    }
    return inputData;
};


/***/ }),

/***/ 39557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostListView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/orderBy.js
var orderBy = __webpack_require__(71723);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tabs/index.js
var Tabs = __webpack_require__(87726);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/hooks/use-debounce.ts
var use_debounce = __webpack_require__(65694);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/api/blog.ts
var blog = __webpack_require__(95015);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: ./src/sections/blog/post-sort.tsx
var post_sort = __webpack_require__(53243);
// EXTERNAL MODULE: ./src/sections/blog/post-search.tsx
var post_search = __webpack_require__(34672);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Pagination/index.js
var Pagination = __webpack_require__(53531);
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination);
// EXTERNAL MODULE: ./src/sections/blog/post-skeleton.tsx
var post_skeleton = __webpack_require__(57128);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
// EXTERNAL MODULE: ./src/components/text-max-line/index.ts + 2 modules
var text_max_line = __webpack_require__(44026);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/blog/post-item-horizontal.tsx
// @mui








// routes



// hooks

// utils


// components





function PostItemHorizontal({ post }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    const router = (0,hooks/* useRouter */.tv)();
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const { title, author, publish, coverUrl, createdAt, totalViews, totalShares, totalComments, description } = post;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                component: (Card_default()),
                direction: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        sx: {
                            p: (theme)=>theme.spacing(3, 3, 2, 3)
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                sx: {
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                        variant: "soft",
                                        color: publish === "published" && "info" || "default",
                                        children: publish
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                        component: "span",
                                        sx: {
                                            typography: "caption",
                                            color: "text.disabled"
                                        },
                                        children: (0,format_time/* fDate */.Mu)(createdAt)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                spacing: 1,
                                flexGrow: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                        color: "inherit",
                                        component: components/* RouterLink */.r,
                                        href: paths/* paths */.H.dashboard.post.details(title),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(text_max_line/* default */.Z, {
                                            variant: "subtitle2",
                                            line: 2,
                                            children: title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(text_max_line/* default */.Z, {
                                        variant: "body2",
                                        sx: {
                                            color: "text.secondary"
                                        },
                                        children: description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: "row",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        color: popover.open ? "inherit" : "default",
                                        onClick: popover.onOpen,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                            icon: "eva:more-horizontal-fill"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                        spacing: 1.5,
                                        flexGrow: 1,
                                        direction: "row",
                                        justifyContent: "flex-end",
                                        sx: {
                                            typography: "caption",
                                            color: "text.disabled"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                                direction: "row",
                                                alignItems: "center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                        icon: "eva:message-circle-fill",
                                                        width: 16,
                                                        sx: {
                                                            mr: 0.5
                                                        }
                                                    }),
                                                    (0,format_number/* fShortenNumber */.v1)(totalComments)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                                direction: "row",
                                                alignItems: "center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                        icon: "solar:eye-bold",
                                                        width: 16,
                                                        sx: {
                                                            mr: 0.5
                                                        }
                                                    }),
                                                    (0,format_number/* fShortenNumber */.v1)(totalViews)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                                direction: "row",
                                                alignItems: "center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                        icon: "solar:share-bold",
                                                        width: 16,
                                                        sx: {
                                                            mr: 0.5
                                                        }
                                                    }),
                                                    (0,format_number/* fShortenNumber */.v1)(totalShares)
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    mdUp && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        sx: {
                            width: 180,
                            height: 240,
                            position: "relative",
                            flexShrink: 0,
                            p: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                alt: author.name,
                                src: author.avatarUrl,
                                sx: {
                                    position: "absolute",
                                    top: 16,
                                    right: 16,
                                    zIndex: 9
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                                alt: title,
                                src: coverUrl,
                                sx: {
                                    height: 1,
                                    borderRadius: 1.5
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "bottom-center",
                sx: {
                    width: 140
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                            router.push(paths/* paths */.H.dashboard.post.details(title));
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:eye-bold"
                            }),
                            "View"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                            router.push(paths/* paths */.H.dashboard.post.edit(title));
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:pen-bold"
                            }),
                            "Edit"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                        },
                        sx: {
                            color: "error.main"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:trash-bin-trash-bold"
                            }),
                            "Delete"
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/blog/post-list-horizontal.tsx
// @mui



//


function PostListHorizontal({ posts, loading }) {
    const renderSkeleton = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: [
            ...Array(16)
        ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(post_skeleton/* PostItemSkeleton */.C, {
                variant: "horizontal"
            }, index))
    });
    const renderList = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(PostItemHorizontal, {
                post: post
            }, post.id))
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)"
                },
                children: loading ? renderSkeleton : renderList
            }),
            posts.length > 8 && /*#__PURE__*/ jsx_runtime_.jsx((Pagination_default()), {
                count: 8,
                sx: {
                    mt: 8,
                    [`& .${Pagination.paginationClasses.ul}`]: {
                        justifyContent: "center"
                    }
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/blog/view/post-list-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui





// routes


// hooks

// _mock

// api

// components




//



// ----------------------------------------------------------------------
const defaultFilters = {
    publish: "all"
};
// ----------------------------------------------------------------------
function PostListView() {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const [sortBy, setSortBy] = (0,react_.useState)("latest");
    const [filters, setFilters] = (0,react_.useState)(defaultFilters);
    const [searchQuery, setSearchQuery] = (0,react_.useState)("");
    const debouncedQuery = (0,use_debounce/* useDebounce */.N)(searchQuery);
    const { posts, postsLoading } = (0,blog/* useGetPosts */.Yi)();
    const { searchResults, searchLoading } = (0,blog/* useSearchPosts */.nl)(debouncedQuery);
    const dataFiltered = applyFilter({
        inputData: posts,
        filters,
        sortBy
    });
    const handleSortBy = (0,react_.useCallback)((newValue)=>{
        setSortBy(newValue);
    }, []);
    const handleFilters = (0,react_.useCallback)((name, value)=>{
        setFilters((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, []);
    const handleSearch = (0,react_.useCallback)((inputValue)=>{
        setSearchQuery(inputValue);
    }, []);
    const handleFilterPublish = (0,react_.useCallback)((event, newValue)=>{
        handleFilters("publish", newValue);
    }, [
        handleFilters
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(custom_breadcrumbs/* default */.Z, {
                heading: "List",
                links: [
                    {
                        name: "Dashboard",
                        href: paths/* paths */.H.dashboard.root
                    },
                    {
                        name: "Blog",
                        href: paths/* paths */.H.dashboard.post.root
                    },
                    {
                        name: "List"
                    }
                ],
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    component: components/* RouterLink */.r,
                    href: paths/* paths */.H.dashboard.post.new,
                    variant: "contained",
                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "mingcute:add-line"
                    }),
                    children: "New Post"
                }),
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                justifyContent: "space-between",
                alignItems: {
                    xs: "flex-end",
                    sm: "center"
                },
                direction: {
                    xs: "column",
                    sm: "row"
                },
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(post_search/* default */.Z, {
                        query: debouncedQuery,
                        results: searchResults,
                        onSearch: handleSearch,
                        loading: searchLoading,
                        hrefItem: (title)=>paths/* paths */.H.dashboard.post.details(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(post_sort/* default */.Z, {
                        sort: sortBy,
                        onSort: handleSortBy,
                        sortOptions: _mock/* POST_SORT_OPTIONS */.k
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                value: filters.publish,
                onChange: handleFilterPublish,
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    "all",
                    "published",
                    "draft"
                ].map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                        iconPosition: "end",
                        value: tab,
                        label: tab,
                        icon: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(label/* default */.Z, {
                            variant: (tab === "all" || tab === filters.publish) && "filled" || "soft",
                            color: tab === "published" && "info" || "default",
                            children: [
                                tab === "all" && posts.length,
                                tab === "published" && posts.filter((post)=>post.publish === "published").length,
                                tab === "draft" && posts.filter((post)=>post.publish === "draft").length
                            ]
                        }),
                        sx: {
                            textTransform: "capitalize"
                        }
                    }, tab))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostListHorizontal, {
                posts: dataFiltered,
                loading: postsLoading
            })
        ]
    });
}
// ----------------------------------------------------------------------
const applyFilter = ({ inputData, filters, sortBy })=>{
    const { publish } = filters;
    if (sortBy === "latest") {
        inputData = orderBy_default()(inputData, [
            "createdAt"
        ], [
            "desc"
        ]);
    }
    if (sortBy === "oldest") {
        inputData = orderBy_default()(inputData, [
            "createdAt"
        ], [
            "asc"
        ]);
    }
    if (sortBy === "popular") {
        inputData = orderBy_default()(inputData, [
            "totalViews"
        ], [
            "desc"
        ]);
    }
    if (publish !== "all") {
        inputData = inputData.filter((post)=>post.publish === publish);
    }
    return inputData;
};


/***/ }),

/***/ 86701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UY: () => (/* reexport */ post_create_view),
  bP: () => (/* reexport */ post_details_home_view),
  FB: () => (/* reexport */ post_details_view),
  mv: () => (/* reexport */ post_edit_view),
  Ns: () => (/* reexport */ post_list_home_view),
  Nr: () => (/* reexport */ post_list_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/blog/view/post-list-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/blog/view/post-list-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const post_list_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/blog/view/post-edit-view.tsx

const post_edit_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/blog/view/post-edit-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: post_edit_view_esModule, $$typeof: post_edit_view_$$typeof } = post_edit_view_proxy;
const post_edit_view_default_ = post_edit_view_proxy.default;


/* harmony default export */ const post_edit_view = (post_edit_view_default_);
;// CONCATENATED MODULE: ./src/sections/blog/view/post-create-view.tsx

const post_create_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/blog/view/post-create-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: post_create_view_esModule, $$typeof: post_create_view_$$typeof } = post_create_view_proxy;
const post_create_view_default_ = post_create_view_proxy.default;


/* harmony default export */ const post_create_view = (post_create_view_default_);
;// CONCATENATED MODULE: ./src/sections/blog/view/post-details-view.tsx

const post_details_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/blog/view/post-details-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: post_details_view_esModule, $$typeof: post_details_view_$$typeof } = post_details_view_proxy;
const post_details_view_default_ = post_details_view_proxy.default;


/* harmony default export */ const post_details_view = (post_details_view_default_);
;// CONCATENATED MODULE: ./src/sections/blog/view/post-list-home-view.tsx

const post_list_home_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/blog/view/post-list-home-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: post_list_home_view_esModule, $$typeof: post_list_home_view_$$typeof } = post_list_home_view_proxy;
const post_list_home_view_default_ = post_list_home_view_proxy.default;


/* harmony default export */ const post_list_home_view = (post_list_home_view_default_);
;// CONCATENATED MODULE: ./src/sections/blog/view/post-details-home-view.tsx

const post_details_home_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/blog/view/post-details-home-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: post_details_home_view_esModule, $$typeof: post_details_home_view_$$typeof } = post_details_home_view_proxy;
const post_details_home_view_default_ = post_details_home_view_proxy.default;


/* harmony default export */ const post_details_home_view = (post_details_home_view_default_);
;// CONCATENATED MODULE: ./src/sections/blog/view/index.ts








/***/ })

};
;