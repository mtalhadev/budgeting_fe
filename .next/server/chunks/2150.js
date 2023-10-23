exports.id = 2150;
exports.ids = [2150,6083,9215,640,8998,8974,2342,8254,9216,1001,6199];
exports.modules = {

/***/ 88803:
/***/ ((module) => {

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

module.exports = baseSum;


/***/ }),

/***/ 36083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(26209),
    baseSum = __webpack_require__(88803);

/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
  return (array && array.length)
    ? baseSum(array, baseIteratee(iteratee, 2))
    : 0;
}

module.exports = sumBy;


/***/ }),

/***/ 56430:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13369));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44462));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85741));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49843));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61650));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4822))

/***/ }),

/***/ 45516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iy: () => (/* binding */ useSearchProducts),
/* harmony export */   Kj: () => (/* binding */ useGetProduct),
/* harmony export */   iu: () => (/* binding */ useGetProducts)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97146);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72810);


// utils

// ----------------------------------------------------------------------
function useGetProducts() {
    const URL = src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .endpoints */ .Hv.product.list;
    const { data, isLoading, error, isValidating } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(URL, src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            products: (data?.products) || [],
            productsLoading: isLoading,
            productsError: error,
            productsValidating: isValidating,
            productsEmpty: !isLoading && !data?.products.length
        }), [
        data?.products,
        error,
        isLoading,
        isValidating
    ]);
    return memoizedValue;
}
// ----------------------------------------------------------------------
function useGetProduct(productId) {
    const URL = productId ? [
        src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .endpoints */ .Hv.product.details,
        {
            params: {
                productId
            }
        }
    ] : null;
    const { data, isLoading, error, isValidating } = (0,swr__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(URL, src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._i);
    const memoizedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            product: data?.product,
            productLoading: isLoading,
            productError: error,
            productValidating: isValidating
        }), [
        data?.product,
        error,
        isLoading,
        isValidating
    ]);
    return memoizedValue;
}
// ----------------------------------------------------------------------
function useSearchProducts(query) {
    const URL = query ? [
        src_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .endpoints */ .Hv.product.search,
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

/***/ 52342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cU: () => (/* reexport */ CarouselArrowIndex),
  i5: () => (/* reexport */ CarouselArrows),
  A0: () => (/* reexport */ CarouselDots),
  ZP: () => (/* binding */ carousel),
  vr: () => (/* reexport */ useCarousel)
});

// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(22723);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
;// CONCATENATED MODULE: ./src/components/carousel/carousel-dots.tsx
/* eslint-disable react/jsx-no-useless-fragment */ // @mui




const StyledRoot = (0,styles.styled)(Box["default"], {
    shouldForwardProp: (prop)=>prop !== "rounded"
})(({ rounded, theme })=>({
        zIndex: 9,
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.primary.main,
        "& li": {
            width: 18,
            height: 18,
            opacity: 0.32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&.slick-active": {
                opacity: 1,
                ...rounded && {
                    "& span": {
                        width: 16,
                        borderRadius: 6
                    }
                }
            }
        }
    }));
const StyledDot = (0,styles.styled)("span")(({ theme })=>({
        width: 8,
        height: 8,
        borderRadius: "50%",
        transition: theme.transitions.create([
            "width"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        })
    }));
function CarouselDots(props) {
    const rounded = props?.rounded || false;
    const sx = props?.sx;
    return {
        appendDots: (dots)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledRoot, {
                    rounded: rounded,
                    sx: {
                        ...sx
                    },
                    ...props,
                    children: dots
                })
            }),
        customPaging: ()=>/*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                component: "div",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    width: 1,
                    height: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledDot, {
                    sx: {
                        bgcolor: "currentColor"
                    }
                })
            })
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/components/carousel/arrow-icons.tsx
//


function LeftIcon({ icon = "eva:arrow-ios-forward-fill", isRTL }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: icon,
        sx: {
            transform: " scaleX(-1)",
            ...isRTL && {
                transform: " scaleX(1)"
            }
        }
    });
}
function RightIcon({ icon = "eva:arrow-ios-forward-fill", isRTL }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: icon,
        sx: {
            ...isRTL && {
                transform: " scaleX(-1)"
            }
        }
    });
}

;// CONCATENATED MODULE: ./src/components/carousel/carousel-arrows.tsx
// @mui




//

const StyledIconButton = (0,styles.styled)((IconButton_default()), {
    shouldForwardProp: (prop)=>prop !== "filled" && prop !== "hasChild" && prop !== "shape"
})(({ filled, shape, hasChild, theme })=>({
        color: "inherit",
        transition: theme.transitions.create("all", {
            duration: theme.transitions.duration.shorter
        }),
        ...shape === "rounded" && {
            borderRadius: theme.shape.borderRadius * 1.5
        },
        ...!filled && {
            opacity: 0.48,
            "&:hover": {
                opacity: 1
            }
        },
        ...filled && {
            color: (0,styles.alpha)(theme.palette.common.white, 0.8),
            backgroundColor: (0,styles.alpha)(theme.palette.grey[900], 0.48),
            "&:hover": {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.grey[900]
            }
        },
        ...hasChild && {
            zIndex: 9,
            top: "50%",
            position: "absolute",
            marginTop: theme.spacing(-2.5)
        }
    }));
function CarouselArrows({ shape = "circular", filled = false, icon, onNext, onPrev, children, leftButtonProps, rightButtonProps, sx, ...other }) {
    const theme = (0,styles.useTheme)();
    const isRTL = theme.direction === "rtl";
    const hasChild = !!children;
    if (hasChild) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
            sx: sx,
            ...other,
            children: [
                onNext && /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                    filled: filled,
                    shape: shape,
                    hasChild: !!children,
                    onClick: onPrev,
                    ...leftButtonProps,
                    sx: {
                        left: 16,
                        ...leftButtonProps?.sx
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon, {
                        icon: icon,
                        isRTL: isRTL
                    })
                }),
                children,
                onPrev && /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                    filled: filled,
                    shape: shape,
                    hasChild: !!children,
                    onClick: onNext,
                    ...rightButtonProps,
                    sx: {
                        right: 16,
                        ...rightButtonProps?.sx
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(RightIcon, {
                        icon: icon,
                        isRTL: isRTL
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        display: "inline-flex",
        sx: sx,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                filled: filled,
                shape: shape,
                onClick: onPrev,
                ...leftButtonProps,
                children: /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                filled: filled,
                shape: shape,
                onClick: onNext,
                ...rightButtonProps,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RightIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(71745);
;// CONCATENATED MODULE: ./src/components/carousel/carousel-arrow-index.tsx
// @mui





// theme

//

// ----------------------------------------------------------------------
const carousel_arrow_index_StyledRoot = (0,styles.styled)(Box["default"])(({ theme })=>({
        ...(0,css/* bgBlur */.Ls)({
            opacity: 0.48,
            color: theme.palette.grey[900]
        }),
        zIndex: 9,
        display: "inline-flex",
        alignItems: "center",
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        padding: theme.spacing(0.25),
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius
    }));
const carousel_arrow_index_StyledIconButton = (0,styles.styled)((IconButton_default()))({
    width: 28,
    height: 28,
    padding: 0,
    opacity: 0.48,
    "&:hover": {
        opacity: 1
    }
});
function CarouselArrowIndex({ index, total, onNext, onPrev, icon, sx, ...other }) {
    const theme = (0,styles.useTheme)();
    const isRTL = theme.direction === "rtl";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(carousel_arrow_index_StyledRoot, {
        sx: sx,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(carousel_arrow_index_StyledIconButton, {
                color: "inherit",
                onClick: onPrev,
                children: /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "subtitle2",
                component: "span",
                sx: {
                    mx: 0.25
                },
                children: [
                    index + 1,
                    "/",
                    total
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(carousel_arrow_index_StyledIconButton, {
                color: "inherit",
                onClick: onNext,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RightIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/carousel/use-carousel.ts

// @mui

function useCarousel(props) {
    const theme = (0,styles.useTheme)();
    const carouselRef = (0,react_.useRef)(null);
    const [currentIndex, setCurrentIndex] = (0,react_.useState)(props?.initialSlide || 0);
    const [nav, setNav] = (0,react_.useState)(undefined);
    const rtl = theme.direction === "rtl";
    const carouselSettings = {
        arrows: false,
        dots: !!props?.customPaging,
        rtl,
        beforeChange: (current, next)=>setCurrentIndex(next),
        ...props,
        fade: !!(props?.fade && !rtl)
    };
    const onSetNav = (0,react_.useCallback)(()=>{
        if (carouselRef.current) {
            setNav(carouselRef.current);
        }
    }, []);
    const onPrev = (0,react_.useCallback)(()=>{
        if (carouselRef.current) {
            carouselRef.current.slickPrev();
        }
    }, []);
    const onNext = (0,react_.useCallback)(()=>{
        if (carouselRef.current) {
            carouselRef.current.slickNext();
        }
    }, []);
    const onTogo = (0,react_.useCallback)((index)=>{
        if (carouselRef.current) {
            carouselRef.current.slickGoTo(index);
        }
    }, []);
    return {
        nav,
        carouselRef,
        currentIndex,
        carouselSettings,
        //
        onPrev,
        onNext,
        onTogo,
        onSetNav,
        //
        setNav,
        setCurrentIndex
    };
}

;// CONCATENATED MODULE: ./src/components/carousel/index.ts





/* harmony default export */ const carousel = (lib/* default */.Z);


/***/ }),

/***/ 26199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 78254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* reexport */ ConfirmDialog)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(62969);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogTitle/index.js
var DialogTitle = __webpack_require__(42153);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogActions/index.js
var DialogActions = __webpack_require__(95915);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogContent/index.js
var DialogContent = __webpack_require__(16856);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent);
;// CONCATENATED MODULE: ./src/components/custom-dialog/confirm-dialog.tsx
// @mui






// ----------------------------------------------------------------------
function ConfirmDialog({ title, content, action, open, onClose, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        fullWidth: true,
        maxWidth: "xs",
        open: open,
        onClose: onClose,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                sx: {
                    pb: 2
                },
                children: title
            }),
            content && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                sx: {
                    typography: "body2"
                },
                children: [
                    " ",
                    content,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                children: [
                    action,
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "outlined",
                        color: "inherit",
                        onClick: onClose,
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/custom-dialog/index.ts



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

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 48974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $W: () => (/* reexport */ TableEmptyRows),
  K: () => (/* reexport */ TableHeadCustom),
  et: () => (/* reexport */ TableNoData),
  S_: () => (/* reexport */ TablePaginationCustom),
  Z4: () => (/* reexport */ TableSelectedAction),
  hM: () => (/* reexport */ TableSkeleton),
  fQ: () => (/* reexport */ emptyRows),
  sQ: () => (/* reexport */ getComparator),
  x6: () => (/* reexport */ useTable)
});

;// CONCATENATED MODULE: ./src/components/table/utils.ts
// ----------------------------------------------------------------------
function emptyRows(page, rowsPerPage, arrayLength) {
    return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}
function descendingComparator(a, b, orderBy) {
    if (a[orderBy] === null) {
        return 1;
    }
    if (b[orderBy] === null) {
        return -1;
    }
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === "desc" ? (a, b)=>descendingComparator(a, b, orderBy) : (a, b)=>-descendingComparator(a, b, orderBy);
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/table/use-table.ts

function useTable(props) {
    const [dense, setDense] = (0,react_.useState)(!!props?.defaultDense);
    const [page, setPage] = (0,react_.useState)(props?.defaultCurrentPage || 0);
    const [orderBy, setOrderBy] = (0,react_.useState)(props?.defaultOrderBy || "name");
    const [rowsPerPage, setRowsPerPage] = (0,react_.useState)(props?.defaultRowsPerPage || 5);
    const [order, setOrder] = (0,react_.useState)(props?.defaultOrder || "asc");
    const [selected, setSelected] = (0,react_.useState)(props?.defaultSelected || []);
    const onSort = (0,react_.useCallback)((id)=>{
        const isAsc = orderBy === id && order === "asc";
        if (id !== "") {
            setOrder(isAsc ? "desc" : "asc");
            setOrderBy(id);
        }
    }, [
        order,
        orderBy
    ]);
    const onSelectRow = (0,react_.useCallback)((inputValue)=>{
        const newSelected = selected.includes(inputValue) ? selected.filter((value)=>value !== inputValue) : [
            ...selected,
            inputValue
        ];
        setSelected(newSelected);
    }, [
        selected
    ]);
    const onChangeRowsPerPage = (0,react_.useCallback)((event)=>{
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    }, []);
    const onChangeDense = (0,react_.useCallback)((event)=>{
        setDense(event.target.checked);
    }, []);
    const onSelectAllRows = (0,react_.useCallback)((checked, inputValue)=>{
        if (checked) {
            setSelected(inputValue);
            return;
        }
        setSelected([]);
    }, []);
    const onChangePage = (0,react_.useCallback)((event, newPage)=>{
        setPage(newPage);
    }, []);
    const onResetPage = (0,react_.useCallback)(()=>{
        setPage(0);
    }, []);
    const onUpdatePageDeleteRow = (0,react_.useCallback)((totalRowsInPage)=>{
        setSelected([]);
        if (page) {
            if (totalRowsInPage < 2) {
                setPage(page - 1);
            }
        }
    }, [
        page
    ]);
    const onUpdatePageDeleteRows = (0,react_.useCallback)(({ totalRows, totalRowsInPage, totalRowsFiltered })=>{
        const totalSelected = selected.length;
        setSelected([]);
        if (page) {
            if (totalSelected === totalRowsInPage) {
                setPage(page - 1);
            } else if (totalSelected === totalRowsFiltered) {
                setPage(0);
            } else if (totalSelected > totalRowsInPage) {
                const newPage = Math.ceil((totalRows - totalSelected) / rowsPerPage) - 1;
                setPage(newPage);
            }
        }
    }, [
        page,
        rowsPerPage,
        selected.length
    ]);
    return {
        dense,
        order,
        page,
        orderBy,
        rowsPerPage,
        //
        selected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        onChangePage,
        onChangeDense,
        onResetPage,
        onChangeRowsPerPage,
        onUpdatePageDeleteRow,
        onUpdatePageDeleteRows,
        //
        setPage,
        setDense,
        setOrder,
        setOrderBy,
        setSelected,
        setRowsPerPage
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableRow/index.js
var TableRow = __webpack_require__(44233);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableCell/index.js
var TableCell = __webpack_require__(80765);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell);
// EXTERNAL MODULE: ./src/components/empty-content/index.ts + 1 modules
var empty_content = __webpack_require__(78998);
;// CONCATENATED MODULE: ./src/components/table/table-no-data.tsx
// @mui



//

function TableNoData({ notFound, sx }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
        children: notFound ? /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 12,
            children: /*#__PURE__*/ jsx_runtime_.jsx(empty_content/* default */.Z, {
                filled: true,
                title: "No Data",
                sx: {
                    py: 10,
                    ...sx
                }
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 12,
            sx: {
                p: 0
            }
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Skeleton/index.js
var Skeleton = __webpack_require__(10413);
var Skeleton_default = /*#__PURE__*/__webpack_require__.n(Skeleton);
;// CONCATENATED MODULE: ./src/components/table/table-skeleton.tsx
// @mui





// ----------------------------------------------------------------------
function TableSkeleton({ ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
        ...other,
        children: /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 12,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                direction: "row",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            borderRadius: 1.5,
                            width: 48,
                            height: 48,
                            flexShrink: 0
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 1,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 180,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 160,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 140,
                            height: 12
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Skeleton_default()), {
                        sx: {
                            width: 120,
                            height: 12
                        }
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/table/table-empty-rows.tsx
// @mui



function TableEmptyRows({ emptyRows, height }) {
    if (!emptyRows) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
        sx: {
            ...height && {
                height: height * emptyRows
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            colSpan: 9
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableHead/index.js
var TableHead = __webpack_require__(70138);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableSortLabel/index.js
var TableSortLabel = __webpack_require__(13495);
var TableSortLabel_default = /*#__PURE__*/__webpack_require__.n(TableSortLabel);
;// CONCATENATED MODULE: ./src/components/table/table-head-custom.tsx
// @mui







// ----------------------------------------------------------------------
const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: "1px",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    clip: "rect(0 0 0 0)"
};
function TableHeadCustom({ order, orderBy, rowCount = 0, headLabel, numSelected = 0, onSort, onSelectAllRows, sx }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
        sx: sx,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
            children: [
                onSelectAllRows && /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                    padding: "checkbox",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                        indeterminate: !!numSelected && numSelected < rowCount,
                        checked: !!rowCount && numSelected === rowCount,
                        onChange: (event)=>onSelectAllRows(event.target.checked)
                    })
                }),
                headLabel.map((headCell)=>/*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        align: headCell.align || "left",
                        sortDirection: orderBy === headCell.id ? order : false,
                        sx: {
                            width: headCell.width,
                            minWidth: headCell.minWidth
                        },
                        children: onSort ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableSortLabel_default()), {
                            hideSortIcon: true,
                            active: orderBy === headCell.id,
                            direction: orderBy === headCell.id ? order : "asc",
                            onClick: ()=>onSort(headCell.id),
                            children: [
                                headCell.label,
                                orderBy === headCell.id ? /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                    sx: {
                                        ...visuallyHidden
                                    },
                                    children: order === "desc" ? "sorted descending" : "sorted ascending"
                                }) : null
                            ]
                        }) : headCell.label
                    }, headCell.id))
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
;// CONCATENATED MODULE: ./src/components/table/table-selected-action.tsx
// @mui




function TableSelectedAction({ dense, action, rowCount, numSelected, onSelectAllRows, sx, ...other }) {
    if (!numSelected) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            pl: 1,
            pr: 2,
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9,
            height: 58,
            position: "absolute",
            bgcolor: "primary.lighter",
            ...dense && {
                height: 38
            },
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                indeterminate: !!numSelected && numSelected < rowCount,
                checked: !!rowCount && numSelected === rowCount,
                onChange: (event)=>onSelectAllRows(event.target.checked)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    ml: 2,
                    flexGrow: 1,
                    color: "primary.main",
                    ...dense && {
                        ml: 3
                    }
                },
                children: [
                    numSelected,
                    " selected"
                ]
            }),
            action && action
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var Switch = __webpack_require__(56703);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TablePagination/index.js
var TablePagination = __webpack_require__(15061);
var TablePagination_default = /*#__PURE__*/__webpack_require__.n(TablePagination);
;// CONCATENATED MODULE: ./src/components/table/table-pagination-custom.tsx
// @mui





function TablePaginationCustom({ dense, onChangeDense, rowsPerPageOptions = [
    5,
    10,
    25
], sx, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            position: "relative",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((TablePagination_default()), {
                rowsPerPageOptions: rowsPerPageOptions,
                component: "div",
                ...other,
                sx: {
                    borderTopColor: "transparent"
                }
            }),
            onChangeDense && /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                label: "Dense",
                control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                    checked: dense,
                    onChange: onChangeDense
                }),
                sx: {
                    pl: 2,
                    py: 1.5,
                    top: 0,
                    position: {
                        sm: "absolute"
                    }
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/table/index.ts











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

/***/ 91771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* reexport safe */ _checkout_context__WEBPACK_IMPORTED_MODULE_0__.useCheckoutContext)
/* harmony export */ });
/* harmony import */ var _checkout_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56848);
/* harmony import */ var _checkout_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23124);




/***/ }),

/***/ 26604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CartIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42454);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76505);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87362);
// @mui



// routes

// components


function CartIcon({ totalItems }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
        component: src_routes_components__WEBPACK_IMPORTED_MODULE_3__/* .RouterLink */ .r,
        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.product.checkout,
        sx: {
            right: 0,
            top: 112,
            zIndex: 999,
            display: "flex",
            cursor: "pointer",
            position: "fixed",
            color: "text.primary",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            bgcolor: "background.paper",
            padding: (theme)=>theme.spacing(1, 3, 1, 2),
            boxShadow: (theme)=>theme.customShadows.dropdown,
            transition: (theme)=>theme.transitions.create([
                    "opacity"
                ]),
            "&:hover": {
                opacity: 0.72
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_5___default()), {
            showZero: true,
            badgeContent: totalItems,
            color: "error",
            max: 99,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                icon: "solar:cart-3-bold",
                width: 24
            })
        })
    });
}


/***/ }),

/***/ 28925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16854);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76505);


// @mui



// components

const IncrementerButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ quantity, onIncrease, onDecrease, disabledIncrease, disabledDecrease, sx, ...other }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: ref,
        flexShrink: 0,
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            p: 0.5,
            width: 88,
            borderRadius: 1,
            typography: "subtitle2",
            border: (theme)=>`solid 1px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.grey[500], 0.2)}`,
            ...sx
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                size: "small",
                onClick: onDecrease,
                disabled: disabledDecrease,
                sx: {
                    borderRadius: 0.75
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    icon: "eva:minus-fill",
                    width: 16
                })
            }),
            quantity,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                size: "small",
                onClick: onIncrease,
                disabled: disabledIncrease,
                sx: {
                    borderRadius: 0.75
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    icon: "mingcute:add-line",
                    width: 16
                })
            })
        ]
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IncrementerButton);


/***/ }),

/***/ 69115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductDetailsCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71745);
/* harmony import */ var src_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37210);
/* harmony import */ var src_components_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var src_components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52342);


// @mui



// theme

// components



// ----------------------------------------------------------------------
const THUMB_SIZE = 64;
const StyledThumbnailsContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)("div")(({ length, theme })=>({
        position: "relative",
        margin: theme.spacing(0, "auto"),
        "& .slick-slide": {
            lineHeight: 0
        },
        ...length === 1 && {
            maxWidth: THUMB_SIZE * 1 + 16
        },
        ...length === 2 && {
            maxWidth: THUMB_SIZE * 2 + 32
        },
        ...(length === 3 || length === 4) && {
            maxWidth: THUMB_SIZE * 3 + 48
        },
        ...length >= 5 && {
            maxWidth: THUMB_SIZE * 6
        },
        ...length > 3 && {
            "&:before, &:after": {
                ...(0,src_theme_css__WEBPACK_IMPORTED_MODULE_2__/* .bgGradient */ .v3)({
                    direction: "to left",
                    startColor: `${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.background.default, 0)} 0%`,
                    endColor: `${theme.palette.background.default} 100%`
                }),
                top: 0,
                zIndex: 9,
                content: "''",
                height: "100%",
                position: "absolute",
                width: THUMB_SIZE * 2 / 3
            },
            "&:after": {
                right: 0,
                transform: "scaleX(-1)"
            }
        }
    }));
function ProductDetailsCarousel({ product }) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const slides = product.images.map((img)=>({
            src: img
        }));
    const lightbox = (0,src_components_lightbox__WEBPACK_IMPORTED_MODULE_4__/* .useLightBox */ .NX)(slides);
    const carouselLarge = (0,src_components_carousel__WEBPACK_IMPORTED_MODULE_5__/* .useCarousel */ .vr)({
        rtl: false,
        draggable: false,
        adaptiveHeight: true
    });
    const carouselThumb = (0,src_components_carousel__WEBPACK_IMPORTED_MODULE_5__/* .useCarousel */ .vr)({
        rtl: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        variableWidth: true,
        centerPadding: "0px",
        slidesToShow: slides.length > 3 ? 3 : slides.length
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        carouselLarge.onSetNav();
        carouselThumb.onSetNav();
    }, [
        carouselLarge,
        carouselThumb
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (lightbox.open) {
            carouselLarge.onTogo(lightbox.selected);
        }
    }, [
        carouselLarge,
        lightbox.open,
        lightbox.selected
    ]);
    const renderLargeImg = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        sx: {
            mb: 3,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_carousel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                ...carouselLarge.carouselSettings,
                asNavFor: carouselThumb.nav,
                ref: carouselLarge.carouselRef,
                children: slides.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        alt: slide.src,
                        src: slide.src,
                        ratio: "1/1",
                        onClick: ()=>lightbox.onOpen(slide.src),
                        sx: {
                            cursor: "zoom-in"
                        }
                    }, slide.src))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_carousel__WEBPACK_IMPORTED_MODULE_5__/* .CarouselArrowIndex */ .cU, {
                index: carouselLarge.currentIndex,
                total: slides.length,
                onNext: carouselThumb.onNext,
                onPrev: carouselThumb.onPrev
            })
        ]
    });
    const renderThumbnails = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledThumbnailsContainer, {
        length: slides.length,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_carousel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
            ...carouselThumb.carouselSettings,
            asNavFor: carouselLarge.nav,
            ref: carouselThumb.carouselRef,
            children: slides.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        px: 0.5
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8___default()), {
                        alt: item.src,
                        src: item.src,
                        variant: "rounded",
                        sx: {
                            width: THUMB_SIZE,
                            height: THUMB_SIZE,
                            opacity: 0.48,
                            cursor: "pointer",
                            ...carouselLarge.currentIndex === index && {
                                opacity: 1,
                                border: `solid 2.5px ${theme.palette.primary.main}`
                            }
                        }
                    }, item.src)
                }, item.src))
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        sx: {
            "& .slick-slide": {
                float: theme.direction === "rtl" ? "right" : "left"
            }
        },
        children: [
            renderLargeImg,
            renderThumbnails,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_lightbox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                index: lightbox.selected,
                slides: slides,
                open: lightbox.open,
                close: lightbox.onClose,
                onGetCurrentIndex: (index)=>lightbox.setSelected(index)
            })
        ]
    });
}


/***/ }),

/***/ 30131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductDetailsDescription)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1001);
// components


function ProductDetailsDescription({ description }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_markdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: description,
        sx: {
            p: 3,
            "& p, li, ol": {
                typography: "body2"
            },
            "& ol": {
                p: 0,
                display: {
                    md: "flex"
                },
                listStyleType: "none",
                "& li": {
                    "&:first-of-type": {
                        minWidth: 240,
                        mb: {
                            xs: 0.5,
                            md: 0
                        }
                    }
                }
            }
        }
    });
}


/***/ }),

/***/ 10095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ProductDetailsReview)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/sumBy.js
var sumBy = __webpack_require__(36083);
var sumBy_default = /*#__PURE__*/__webpack_require__.n(sumBy);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Rating/index.js
var Rating = __webpack_require__(34972);
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/LinearProgress/index.js
var LinearProgress = __webpack_require__(71326);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Pagination/index.js
var Pagination = __webpack_require__(53531);
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
;// CONCATENATED MODULE: ./src/sections/product/product-review-item.tsx
// @mui







// utils

// components

function ProductReviewItem({ review }) {
    const { name, rating, comment, postedAt, avatarUrl, attachments, isPurchased } = review;
    const renderInfo = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        alignItems: "center",
        direction: {
            xs: "row",
            md: "column"
        },
        sx: {
            width: {
                md: 240
            },
            textAlign: {
                md: "center"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                src: avatarUrl,
                sx: {
                    width: {
                        xs: 48,
                        md: 64
                    },
                    height: {
                        xs: 48,
                        md: 64
                    }
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                primary: name,
                secondary: (0,format_time/* fDate */.Mu)(postedAt),
                primaryTypographyProps: {
                    noWrap: true,
                    typography: "subtitle2",
                    mb: 0.5
                },
                secondaryTypographyProps: {
                    noWrap: true,
                    typography: "caption",
                    component: "span"
                }
            })
        ]
    });
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1,
        flexGrow: 1,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                size: "small",
                value: rating,
                precision: 0.1,
                readOnly: true
            }),
            isPurchased && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                sx: {
                    color: "success.main",
                    typography: "caption"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "ic:round-verified",
                        width: 16,
                        sx: {
                            mr: 0.5
                        }
                    }),
                    "Verified purchase"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "body2",
                children: comment
            }),
            !!attachments?.length && /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                direction: "row",
                flexWrap: "wrap",
                spacing: 1,
                sx: {
                    pt: 1
                },
                children: attachments.map((attachment)=>/*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "img",
                        alt: attachment,
                        src: attachment,
                        sx: {
                            width: 64,
                            height: 64,
                            borderRadius: 1.5
                        }
                    }, attachment))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                spacing: 2,
                sx: {
                    pt: 1.5
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        sx: {
                            typography: "caption"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:like-outline",
                                width: 16,
                                sx: {
                                    mr: 0.5
                                }
                            }),
                            "123"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        sx: {
                            typography: "caption"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:dislike-outline",
                                width: 16,
                                sx: {
                                    mr: 0.5
                                }
                            }),
                            "34"
                        ]
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        direction: {
            xs: "column",
            md: "row"
        },
        sx: {
            mt: 5,
            px: {
                xs: 2.5,
                md: 0
            }
        },
        children: [
            renderInfo,
            renderContent
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/product/product-review-list.tsx
// @mui


//

function ProductReviewList({ reviews }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            reviews.map((review)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductReviewItem, {
                    review: review
                }, review.id)),
            /*#__PURE__*/ jsx_runtime_.jsx((Pagination_default()), {
                count: 10,
                sx: {
                    mx: "auto",
                    [`& .${Pagination.paginationClasses.ul}`]: {
                        my: 5,
                        mx: "auto",
                        justifyContent: "center"
                    }
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/yup/index.js
var yup = __webpack_require__(50298);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var dist_yup = __webpack_require__(57086);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogTitle/index.js
var DialogTitle = __webpack_require__(42153);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogActions/index.js
var DialogActions = __webpack_require__(95915);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/DialogContent/index.js
var DialogContent = __webpack_require__(16856);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormHelperText/index.js
var FormHelperText = __webpack_require__(34550);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Dialog/index.js
var Dialog = __webpack_require__(62969);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);
// EXTERNAL MODULE: ./src/components/hook-form/index.ts + 11 modules
var hook_form = __webpack_require__(29189);
;// CONCATENATED MODULE: ./src/sections/product/product-review-new-form.tsx





// @mui










// types
// components

function ProductReviewNewForm({ onClose, ...other }) {
    const ReviewSchema = yup/* object */.Ry().shape({
        rating: yup/* number */.Rx().min(1, "Rating must be greater than or equal to 1"),
        review: yup/* string */.Z_().required("Review is required"),
        name: yup/* string */.Z_().required("Name is required"),
        email: yup/* string */.Z_().required("Email is required").email("Email must be a valid email address")
    });
    const defaultValues = {
        rating: 0,
        review: "",
        name: "",
        email: ""
    };
    const methods = (0,index_esm/* useForm */.cI)({
        resolver: (0,dist_yup/* yupResolver */.X)(ReviewSchema),
        defaultValues
    });
    const { reset, control, handleSubmit, formState: { errors, isSubmitting } } = methods;
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            onClose();
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const onCancel = (0,react_.useCallback)(()=>{
        onClose();
        reset();
    }, [
        onClose,
        reset
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
        onClose: onClose,
        ...other,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(hook_form/* default */.ZP, {
            methods: methods,
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                    children: " Add Review "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            direction: "row",
                            flexWrap: "wrap",
                            alignItems: "center",
                            spacing: 1.5,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "Your review about this product:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* Controller */.Qr, {
                                    name: "rating",
                                    control: control,
                                    render: ({ field })=>/*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                                            ...field,
                                            size: "small",
                                            value: Number(field.value),
                                            onChange: (event, newValue)=>{
                                                field.onChange(newValue);
                                            }
                                        })
                                })
                            ]
                        }),
                        !!errors.rating && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormHelperText_default()), {
                            error: true,
                            children: [
                                " ",
                                errors.rating?.message
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                            name: "review",
                            label: "Review *",
                            multiline: true,
                            rows: 3,
                            sx: {
                                mt: 3
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                            name: "name",
                            label: "Name *",
                            sx: {
                                mt: 3
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(hook_form/* RHFTextField */.au, {
                            name: "email",
                            label: "Email *",
                            sx: {
                                mt: 3
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            color: "inherit",
                            variant: "outlined",
                            onClick: onCancel,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                            type: "submit",
                            variant: "contained",
                            loading: isSubmitting,
                            children: "Post"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/sections/product/product-details-review.tsx


// @mui







// utils

// hooks

// components

//


function ProductDetailsReview({ totalRatings, totalReviews, ratings, reviews }) {
    const review = (0,use_boolean/* useBoolean */.k)();
    const total = sumBy_default()(ratings, (star)=>star.starCount);
    const renderSummary = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1,
        alignItems: "center",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                children: "Average rating"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "h2",
                children: [
                    totalRatings,
                    "/5"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                readOnly: true,
                value: totalRatings,
                precision: 0.1
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "caption",
                sx: {
                    color: "text.secondary"
                },
                children: [
                    "(",
                    (0,format_number/* fShortenNumber */.v1)(totalReviews),
                    " reviews)"
                ]
            })
        ]
    });
    const renderProgress = /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        spacing: 1.5,
        sx: {
            py: 5,
            px: {
                xs: 3,
                md: 5
            },
            borderLeft: (theme)=>({
                    md: `dashed 1px ${theme.palette.divider}`
                }),
            borderRight: (theme)=>({
                    md: `dashed 1px ${theme.palette.divider}`
                })
        },
        children: ratings.slice(0).reverse().map((rating)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "subtitle2",
                        component: "span",
                        sx: {
                            width: 42
                        },
                        children: rating.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                        color: "inherit",
                        variant: "determinate",
                        value: rating.starCount / total * 100,
                        sx: {
                            mx: 2,
                            flexGrow: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        component: "span",
                        sx: {
                            minWidth: 48,
                            color: "text.secondary"
                        },
                        children: (0,format_number/* fShortenNumber */.v1)(rating.reviewCount)
                    })
                ]
            }, rating.name))
    });
    const renderReviewButton = /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
            size: "large",
            variant: "soft",
            color: "inherit",
            onClick: review.onTrue,
            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                icon: "solar:pen-bold"
            }),
            children: "Write your review"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)"
                },
                sx: {
                    py: {
                        xs: 5,
                        md: 0
                    }
                },
                children: [
                    renderSummary,
                    renderProgress,
                    renderReviewButton
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductReviewList, {
                reviews: reviews
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductReviewNewForm, {
                open: review.value,
                onClose: review.onFalse
            })
        ]
    });
}


/***/ }),

/***/ 56214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductDetailsSummary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66558);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56995);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34972);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61272);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88707);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34550);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89539);
/* harmony import */ var src_utils_format_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9856);
/* harmony import */ var src_components_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42892);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76505);
/* harmony import */ var src_components_color_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26199);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29189);
/* harmony import */ var _common_incrementer_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28925);



// @mui









// routes


// utils

// components




//

function ProductDetailsSummary({ items, product, onAddCart, onGotoStep, disabledActions, ...other }) {
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useRouter */ .tv)();
    const { id, name, sizes, price, coverUrl, colors, newLabel, available, priceSale, saleLabel, totalRatings, totalReviews, inventoryType, subDescription } = product;
    const existProduct = !!items?.length && items.map((item)=>item.id).includes(id);
    const isMaxQuantity = !!items?.length && items.filter((item)=>item.id === id).map((item)=>item.quantity)[0] >= available;
    const defaultValues = {
        id,
        name,
        coverUrl,
        available,
        price,
        colors: colors[0],
        size: sizes[4],
        quantity: available < 1 ? 0 : 1
    };
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .useForm */ .cI)({
        defaultValues
    });
    const { reset, watch, control, setValue, handleSubmit } = methods;
    const values = watch();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (product) {
            reset(defaultValues);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        product
    ]);
    const onSubmit = handleSubmit(async (data)=>{
        try {
            if (!existProduct) {
                onAddCart?.({
                    ...data,
                    colors: [
                        values.colors
                    ],
                    subTotal: data.price * data.quantity
                });
            }
            onGotoStep?.(0);
            router.push(src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.product.checkout);
        } catch (error) {
            console.error(error);
        }
    });
    const handleAddCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        try {
            onAddCart?.({
                ...values,
                colors: [
                    values.colors
                ],
                subTotal: values.price * values.quantity
            });
        } catch (error) {
            console.error(error);
        }
    }, [
        onAddCart,
        values
    ]);
    const renderPrice = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
        sx: {
            typography: "h5"
        },
        children: [
            priceSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
                component: "span",
                sx: {
                    color: "text.disabled",
                    textDecoration: "line-through",
                    mr: 0.5
                },
                children: (0,src_utils_format_number__WEBPACK_IMPORTED_MODULE_4__/* .fCurrency */ .e_)(priceSale)
            }),
            (0,src_utils_format_number__WEBPACK_IMPORTED_MODULE_4__/* .fCurrency */ .e_)(price)
        ]
    });
    const renderShare = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        spacing: 3,
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default()), {
                variant: "subtitle2",
                sx: {
                    color: "text.secondary",
                    display: "inline-flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        icon: "mingcute:add-line",
                        width: 16,
                        sx: {
                            mr: 1
                        }
                    }),
                    "Compare"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default()), {
                variant: "subtitle2",
                sx: {
                    color: "text.secondary",
                    display: "inline-flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        icon: "solar:heart-bold",
                        width: 16,
                        sx: {
                            mr: 1
                        }
                    }),
                    "Favorite"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default()), {
                variant: "subtitle2",
                sx: {
                    color: "text.secondary",
                    display: "inline-flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        icon: "solar:share-bold",
                        width: 16,
                        sx: {
                            mr: 1
                        }
                    }),
                    "Share"
                ]
            })
        ]
    });
    const renderColorOptions = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                variant: "subtitle2",
                sx: {
                    flexGrow: 1
                },
                children: "Color"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_10__/* .Controller */ .Qr, {
                name: "colors",
                control: control,
                render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_color_utils__WEBPACK_IMPORTED_MODULE_7__/* .ColorPicker */ .z, {
                        colors: colors,
                        selected: field.value,
                        onSelectColor: (color)=>field.onChange(color),
                        limit: 4
                    })
            })
        ]
    });
    const renderSizeOptions = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                variant: "subtitle2",
                sx: {
                    flexGrow: 1
                },
                children: "Size"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_8__/* .RHFSelect */ .Cc, {
                name: "size",
                size: "small",
                helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_13___default()), {
                    underline: "always",
                    color: "textPrimary",
                    children: "Size Chart"
                }),
                sx: {
                    maxWidth: 88,
                    [`& .${_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_15__.formHelperTextClasses.root}`]: {
                        mx: 0,
                        mt: 1,
                        textAlign: "right"
                    }
                },
                children: sizes.map((size)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_16___default()), {
                        value: size,
                        children: size
                    }, size))
            })
        ]
    });
    const renderQuantity = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                variant: "subtitle2",
                sx: {
                    flexGrow: 1
                },
                children: "Quantity"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
                spacing: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_incrementer_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        name: "quantity",
                        quantity: values.quantity,
                        disabledDecrease: values.quantity <= 1,
                        disabledIncrease: values.quantity >= available,
                        onIncrease: ()=>setValue("quantity", values.quantity + 1),
                        onDecrease: ()=>setValue("quantity", values.quantity - 1)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                        variant: "caption",
                        component: "div",
                        sx: {
                            textAlign: "right"
                        },
                        children: [
                            "Available: ",
                            available
                        ]
                    })
                ]
            })
        ]
    });
    const renderActions = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        spacing: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_17___default()), {
                fullWidth: true,
                disabled: isMaxQuantity || disabledActions,
                size: "large",
                color: "warning",
                variant: "contained",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    icon: "solar:cart-plus-bold",
                    width: 24
                }),
                onClick: handleAddCart,
                sx: {
                    whiteSpace: "nowrap"
                },
                children: "Add to Cart"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_17___default()), {
                fullWidth: true,
                size: "large",
                type: "submit",
                variant: "contained",
                disabled: disabledActions,
                children: "Buy Now"
            })
        ]
    });
    const renderSubDescription = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
        variant: "body2",
        sx: {
            color: "text.secondary"
        },
        children: subDescription
    });
    const renderRating = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        alignItems: "center",
        sx: {
            color: "text.disabled",
            typography: "body2"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Rating__WEBPACK_IMPORTED_MODULE_18___default()), {
                size: "small",
                value: totalRatings,
                precision: 0.1,
                readOnly: true,
                sx: {
                    mr: 1
                }
            }),
            `(${(0,src_utils_format_number__WEBPACK_IMPORTED_MODULE_4__/* .fShortenNumber */ .v1)(totalReviews)} reviews)`
        ]
    });
    const renderLabels = (newLabel.enabled || saleLabel.enabled) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "row",
        alignItems: "center",
        spacing: 1,
        children: [
            newLabel.enabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "info",
                children: newLabel.content
            }),
            saleLabel.enabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "error",
                children: saleLabel.content
            })
        ]
    });
    const renderInventoryType = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], {
        component: "span",
        sx: {
            typography: "overline",
            color: inventoryType === "out of stock" && "error.main" || inventoryType === "low stock" && "warning.main" || "success.main"
        },
        children: inventoryType
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
            spacing: 3,
            sx: {
                pt: 3
            },
            ...other,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    spacing: 2,
                    alignItems: "flex-start",
                    children: [
                        renderLabels,
                        renderInventoryType,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {
                            variant: "h5",
                            children: name
                        }),
                        renderRating,
                        renderPrice,
                        renderSubDescription
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19___default()), {
                    sx: {
                        borderStyle: "dashed"
                    }
                }),
                renderColorOptions,
                renderSizeOptions,
                renderQuantity,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_19___default()), {
                    sx: {
                        borderStyle: "dashed"
                    }
                }),
                renderActions,
                renderShare
            ]
        })
    });
}


/***/ }),

/***/ 20129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductNewEditForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50298);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66558);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57086);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(17466);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92133);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76267);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56703);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61272);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26566);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77782);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3683);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(26017);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48611);
/* harmony import */ var src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59099);
/* harmony import */ var src_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99011);
/* harmony import */ var src_components_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80941);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89539);
/* harmony import */ var src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29189);






// @mui












// routes

// hooks

// _mock

// components



function ProductNewEditForm({ currentProduct }) {
    const router = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useRouter */ .tv)();
    const mdUp = (0,src_hooks_use_responsive__WEBPACK_IMPORTED_MODULE_8__/* .useResponsive */ .F)("up", "md");
    const { enqueueSnackbar } = (0,src_components_snackbar__WEBPACK_IMPORTED_MODULE_5__/* .useSnackbar */ .Ds)();
    const [includeTaxes, setIncludeTaxes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const NewProductSchema = yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Name is required"),
        images: yup__WEBPACK_IMPORTED_MODULE_2__/* .array */ .IX().min(1, "Images is required"),
        tags: yup__WEBPACK_IMPORTED_MODULE_2__/* .array */ .IX().min(2, "Must have at least 2 tags"),
        category: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Category is required"),
        price: yup__WEBPACK_IMPORTED_MODULE_2__/* .number */ .Rx().moreThan(0, "Price should not be $0.00"),
        description: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_().required("Description is required"),
        // not required
        taxes: yup__WEBPACK_IMPORTED_MODULE_2__/* .number */ .Rx(),
        newLabel: yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry().shape({
            enabled: yup__WEBPACK_IMPORTED_MODULE_2__/* .boolean */ .O7(),
            content: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_()
        }),
        saleLabel: yup__WEBPACK_IMPORTED_MODULE_2__/* .object */ .Ry().shape({
            enabled: yup__WEBPACK_IMPORTED_MODULE_2__/* .boolean */ .O7(),
            content: yup__WEBPACK_IMPORTED_MODULE_2__/* .string */ .Z_()
        })
    });
    const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            name: currentProduct?.name || "",
            description: currentProduct?.description || "",
            subDescription: currentProduct?.subDescription || "",
            images: currentProduct?.images || [],
            //
            code: currentProduct?.code || "",
            sku: currentProduct?.sku || "",
            price: currentProduct?.price || 0,
            quantity: currentProduct?.quantity || 0,
            priceSale: currentProduct?.priceSale || 0,
            tags: currentProduct?.tags || [],
            taxes: currentProduct?.taxes || 0,
            gender: currentProduct?.gender || "",
            category: currentProduct?.category || "",
            colors: currentProduct?.colors || [],
            sizes: currentProduct?.sizes || [],
            newLabel: currentProduct?.newLabel || {
                enabled: false,
                content: ""
            },
            saleLabel: currentProduct?.saleLabel || {
                enabled: false,
                content: ""
            }
        }), [
        currentProduct
    ]);
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__/* .useForm */ .cI)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__/* .yupResolver */ .X)(NewProductSchema),
        defaultValues
    });
    const { reset, watch, setValue, handleSubmit, formState: { isSubmitting } } = methods;
    const values = watch();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentProduct) {
            reset(defaultValues);
        }
    }, [
        currentProduct,
        defaultValues,
        reset
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (includeTaxes) {
            setValue("taxes", 0);
        } else {
            setValue("taxes", currentProduct?.taxes || 0);
        }
    }, [
        currentProduct?.taxes,
        includeTaxes,
        setValue
    ]);
    const onSubmit = handleSubmit(async (data)=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 500));
            reset();
            enqueueSnackbar(currentProduct ? "Update success!" : "Create success!");
            router.push(src_routes_paths__WEBPACK_IMPORTED_MODULE_3__/* .paths */ .H.dashboard.product.root);
            console.info("DATA", data);
        } catch (error) {
            console.error(error);
        }
    });
    const handleDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{
        const files = values.images || [];
        const newFiles = acceptedFiles.map((file)=>Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
        setValue("images", [
            ...files,
            ...newFiles
        ], {
            shouldValidate: true
        });
    }, [
        setValue,
        values.images
    ]);
    const handleRemoveFile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((inputFile)=>{
        const filtered = values.images && values.images?.filter((file)=>file !== inputFile);
        setValue("images", filtered);
    }, [
        setValue,
        values.images
    ]);
    const handleRemoveAllFiles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setValue("images", []);
    }, [
        setValue
    ]);
    const handleChangeIncludeTaxes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        setIncludeTaxes(event.target.checked);
    }, []);
    const renderDetails = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                md: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "h6",
                        sx: {
                            mb: 0.5
                        },
                        children: "Details"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Title, short description, image..."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_13___default()), {
                    children: [
                        !mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_14___default()), {
                            title: "Details"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                            spacing: 3,
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                    name: "name",
                                    label: "Product Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                    name: "subDescription",
                                    label: "Sub Description",
                                    multiline: true,
                                    rows: 4
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            variant: "subtitle2",
                                            children: "Content"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFEditor */ .LM, {
                                            simple: true,
                                            name: "description"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    spacing: 1.5,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            variant: "subtitle2",
                                            children: "Images"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFUpload */ .rd, {
                                            multiple: true,
                                            thumbnail: true,
                                            name: "images",
                                            maxSize: 3145728,
                                            onDrop: handleDrop,
                                            onRemove: handleRemoveFile,
                                            onRemoveAll: handleRemoveAllFiles,
                                            onUpload: ()=>console.info("ON UPLOAD")
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
    const renderProperties = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                md: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "h6",
                        sx: {
                            mb: 0.5
                        },
                        children: "Properties"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Additional functions and attributes..."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_13___default()), {
                    children: [
                        !mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_14___default()), {
                            title: "Properties"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                            spacing: 3,
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    columnGap: 2,
                                    rowGap: 3,
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "repeat(1, 1fr)",
                                        md: "repeat(2, 1fr)"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                            name: "code",
                                            label: "Product Code"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                            name: "sku",
                                            label: "Product SKU"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                            name: "quantity",
                                            label: "Quantity",
                                            placeholder: "0",
                                            type: "number",
                                            InputLabelProps: {
                                                shrink: true
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFSelect */ .Cc, {
                                            native: true,
                                            name: "category",
                                            label: "Category",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            children: src_mock__WEBPACK_IMPORTED_MODULE_4__/* .PRODUCT_CATEGORY_GROUP_OPTIONS */ .Zq.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("optgroup", {
                                                    label: category.group,
                                                    children: category.classify.map((classify)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: classify,
                                                            children: classify
                                                        }, classify))
                                                }, category.group))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFMultiSelect */ .vA, {
                                            checkbox: true,
                                            name: "colors",
                                            label: "Colors",
                                            options: src_mock__WEBPACK_IMPORTED_MODULE_4__/* .PRODUCT_COLOR_NAME_OPTIONS */ .dB
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFMultiSelect */ .vA, {
                                            checkbox: true,
                                            name: "sizes",
                                            label: "Sizes",
                                            options: src_mock__WEBPACK_IMPORTED_MODULE_4__/* .PRODUCT_SIZE_OPTIONS */ .fI
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFAutocomplete */ .Fl, {
                                    name: "tags",
                                    label: "Tags",
                                    placeholder: "+ Tags",
                                    multiple: true,
                                    freeSolo: true,
                                    options: src_mock__WEBPACK_IMPORTED_MODULE_4__/* ._tags */ .Qw.map((option)=>option),
                                    getOptionLabel: (option)=>option,
                                    renderOption: (props, option)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
                                            ...props,
                                            key: option
                                        }, option),
                                    renderTags: (selected, getTagProps)=>selected.map((option, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17___default()), {
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
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            variant: "subtitle2",
                                            children: "Gender"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFMultiCheckbox */ .s2, {
                                            row: true,
                                            name: "gender",
                                            spacing: 2,
                                            options: src_mock__WEBPACK_IMPORTED_MODULE_4__/* .PRODUCT_GENDER_OPTIONS */ .XH
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_18___default()), {
                                    sx: {
                                        borderStyle: "dashed"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: 3,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFSwitch */ ._e, {
                                            name: "saleLabel.enabled",
                                            label: null,
                                            sx: {
                                                m: 0
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                            name: "saleLabel.content",
                                            label: "Sale Label",
                                            fullWidth: true,
                                            disabled: !values.saleLabel.enabled
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: 3,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFSwitch */ ._e, {
                                            name: "newLabel.enabled",
                                            label: null,
                                            sx: {
                                                m: 0
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                            name: "newLabel.content",
                                            label: "New Label",
                                            fullWidth: true,
                                            disabled: !values.newLabel.enabled
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
    const renderPricing = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                md: 4,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "h6",
                        sx: {
                            mb: 0.5
                        },
                        children: "Pricing"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                        variant: "body2",
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Price related inputs"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_13___default()), {
                    children: [
                        !mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_14___default()), {
                            title: "Pricing"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
                            spacing: 3,
                            sx: {
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                    name: "price",
                                    label: "Regular Price",
                                    placeholder: "0.00",
                                    type: "number",
                                    InputLabelProps: {
                                        shrink: true
                                    },
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            position: "start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                component: "span",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "$"
                                            })
                                        })
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                    name: "priceSale",
                                    label: "Sale Price",
                                    placeholder: "0.00",
                                    type: "number",
                                    InputLabelProps: {
                                        shrink: true
                                    },
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            position: "start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                component: "span",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "$"
                                            })
                                        })
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_21___default()), {
                                        checked: includeTaxes,
                                        onChange: handleChangeIncludeTaxes
                                    }),
                                    label: "Price includes taxes"
                                }),
                                !includeTaxes && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* .RHFTextField */ .au, {
                                    name: "taxes",
                                    label: "Tax (%)",
                                    placeholder: "0.00",
                                    type: "number",
                                    InputLabelProps: {
                                        shrink: true
                                    },
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_19___default()), {
                                            position: "start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                component: "span",
                                                sx: {
                                                    color: "text.disabled"
                                                },
                                                children: "%"
                                            })
                                        })
                                    }
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
    const renderActions = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mdUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                md: 4
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
                xs: 12,
                md: 8,
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_20___default()), {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_21___default()), {
                            defaultChecked: true
                        }),
                        label: "Publish",
                        sx: {
                            flexGrow: 1,
                            pl: 3
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_22___default()), {
                        type: "submit",
                        variant: "contained",
                        size: "large",
                        loading: isSubmitting,
                        children: !currentProduct ? "Create Product" : "Save Changes"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_hook_form__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        methods: methods,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_11___default()), {
            container: true,
            spacing: 3,
            children: [
                renderDetails,
                renderProperties,
                renderPricing,
                renderActions
            ]
        })
    });
}


/***/ }),

/***/ 62999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ProductDetailsSkeleton),
/* harmony export */   T: () => (/* binding */ ProductItemSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16854);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10413);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52694);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26566);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__);
// @mui





// ----------------------------------------------------------------------
function ProductItemSkeleton({ sx, ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1___default()), {
        variant: "outlined",
        sx: {
            borderRadius: 2,
            ...sx
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
                sx: {
                    p: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                    sx: {
                        paddingTop: "100%"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
                spacing: 2,
                sx: {
                    p: 3,
                    pt: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            width: 0.5,
                            height: 16
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        direction: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                direction: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "circular",
                                        sx: {
                                            width: 16,
                                            height: 16
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "circular",
                                        sx: {
                                            width: 16,
                                            height: 16
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "circular",
                                        sx: {
                                            width: 16,
                                            height: 16
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                sx: {
                                    width: 40,
                                    height: 16
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
function ProductDetailsSkeleton({ ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
        container: true,
        spacing: 8,
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                xs: 12,
                md: 6,
                lg: 7,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                    sx: {
                        paddingTop: "100%"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                xs: 12,
                md: 6,
                lg: 5,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            variant: "circular",
                            sx: {
                                width: 80,
                                height: 80
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                height: 240
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                height: 16
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                height: 16,
                                width: 0.75
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                height: 16,
                                width: 0.5
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4___default()), {
                xs: 12,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    direction: "row",
                    alignItems: "center",
                    children: [
                        ...Array(3)
                    ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            spacing: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            sx: {
                                width: 1
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    variant: "circular",
                                    sx: {
                                        width: 80,
                                        height: 80
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    sx: {
                                        height: 16,
                                        width: 160
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    sx: {
                                        height: 16,
                                        width: 80
                                    }
                                })
                            ]
                        }, index))
                })
            })
        ]
    });
}


/***/ }),

/***/ 61650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCreateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80640);
/* harmony import */ var _product_new_edit_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20129);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// components


//

// ----------------------------------------------------------------------
function ProductCreateView() {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSettingsContext */ .K$)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                heading: "Create a new product",
                links: [
                    {
                        name: "Dashboard",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.root
                    },
                    {
                        name: "Product",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.product.root
                    },
                    {
                        name: "New product"
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_new_edit_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}


/***/ }),

/***/ 49843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductDetailsView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tabs/index.js
var Tabs = __webpack_require__(87726);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Unstable_Grid2/index.js
var Unstable_Grid2 = __webpack_require__(26566);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/api/product.ts
var api_product = __webpack_require__(45516);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/empty-content/index.ts + 1 modules
var empty_content = __webpack_require__(78998);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/sections/product/product-skeleton.tsx
var product_skeleton = __webpack_require__(62999);
// EXTERNAL MODULE: ./src/sections/product/product-details-review.tsx + 3 modules
var product_details_review = __webpack_require__(10095);
// EXTERNAL MODULE: ./src/sections/product/product-details-summary.tsx
var product_details_summary = __webpack_require__(56214);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(17466);
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/product/product-details-toolbar.tsx
// @mui








// components



function ProductDetailsToolbar({ publish, backLink, editLink, liveLink, publishOptions, onChangePublish, sx, ...other }) {
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

// EXTERNAL MODULE: ./src/sections/product/product-details-carousel.tsx
var product_details_carousel = __webpack_require__(69115);
// EXTERNAL MODULE: ./src/sections/product/product-details-description.tsx
var product_details_description = __webpack_require__(30131);
;// CONCATENATED MODULE: ./src/sections/product/view/product-details-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui









// _mock

// routes


// api

// components



//






// ----------------------------------------------------------------------
const SUMMARY = [
    {
        title: "100% Original",
        description: "Chocolate bar candy canes ice cream toffee cookie halvah.",
        icon: "solar:verified-check-bold"
    },
    {
        title: "10 Day Replacement",
        description: "Marshmallow biscuit donut drag\xe9e fruitcake wafer.",
        icon: "solar:clock-circle-bold"
    },
    {
        title: "Year Warranty",
        description: "Cotton candy gingerbread cake I love sugar sweet.",
        icon: "solar:shield-check-bold"
    }
];
function ProductDetailsView({ id }) {
    const { product, productLoading, productError } = (0,api_product/* useGetProduct */.Kj)(id);
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const [currentTab, setCurrentTab] = (0,react_.useState)("description");
    const [publish, setPublish] = (0,react_.useState)("");
    (0,react_.useEffect)(()=>{
        if (product) {
            setPublish(product?.publish);
        }
    }, [
        product
    ]);
    const handleChangePublish = (0,react_.useCallback)((newValue)=>{
        setPublish(newValue);
    }, []);
    const handleChangeTab = (0,react_.useCallback)((event, newValue)=>{
        setCurrentTab(newValue);
    }, []);
    const renderSkeleton = /*#__PURE__*/ jsx_runtime_.jsx(product_skeleton/* ProductDetailsSkeleton */.C, {});
    const renderError = /*#__PURE__*/ jsx_runtime_.jsx(empty_content/* default */.Z, {
        filled: true,
        title: `${productError?.message}`,
        action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
            component: components/* RouterLink */.r,
            href: paths/* paths */.H.dashboard.product.root,
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
            py: 10
        }
    });
    const renderProduct = product && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ProductDetailsToolbar, {
                backLink: paths/* paths */.H.dashboard.product.root,
                editLink: paths/* paths */.H.dashboard.product.edit(`${product?.id}`),
                liveLink: paths/* paths */.H.product.details(`${product?.id}`),
                publish: publish || "",
                onChangePublish: handleChangePublish,
                publishOptions: _mock/* PRODUCT_PUBLISH_OPTIONS */.SG
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                container: true,
                spacing: {
                    xs: 3,
                    md: 5,
                    lg: 8
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        xs: 12,
                        md: 6,
                        lg: 7,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(product_details_carousel/* default */.Z, {
                            product: product
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        xs: 12,
                        md: 6,
                        lg: 5,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(product_details_summary/* default */.Z, {
                            disabledActions: true,
                            product: product
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                gap: 5,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)"
                },
                sx: {
                    my: 10
                },
                children: SUMMARY.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                        sx: {
                            textAlign: "center",
                            px: 5
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: item.icon,
                                width: 32,
                                sx: {
                                    color: "primary.main"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle1",
                                sx: {
                                    mb: 1,
                                    mt: 2
                                },
                                children: item.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                sx: {
                                    color: "text.secondary"
                                },
                                children: item.description
                            })
                        ]
                    }, item.title))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                        value: currentTab,
                        onChange: handleChangeTab,
                        sx: {
                            px: 3,
                            boxShadow: (theme)=>`inset 0 -2px 0 0 ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
                        },
                        children: [
                            {
                                value: "description",
                                label: "Description"
                            },
                            {
                                value: "reviews",
                                label: `Reviews (${product.reviews.length})`
                            }
                        ].map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                value: tab.value,
                                label: tab.label
                            }, tab.value))
                    }),
                    currentTab === "description" && /*#__PURE__*/ jsx_runtime_.jsx(product_details_description/* default */.Z, {
                        description: product?.description
                    }),
                    currentTab === "reviews" && /*#__PURE__*/ jsx_runtime_.jsx(product_details_review/* default */.Z, {
                        ratings: product.ratings,
                        reviews: product.reviews,
                        totalRatings: product.totalRatings,
                        totalReviews: product.totalReviews
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            productLoading && renderSkeleton,
            productError && renderError,
            product && renderProduct
        ]
    });
}


/***/ }),

/***/ 13369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductEditView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48611);
/* harmony import */ var src_api_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45516);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80640);
/* harmony import */ var _product_new_edit_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20129);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// @mui

// routes

// api

// components


//

function ProductEditView({ id }) {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_3__/* .useSettingsContext */ .K$)();
    const { product: currentProduct } = (0,src_api_product__WEBPACK_IMPORTED_MODULE_2__/* .useGetProduct */ .Kj)(id);
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
                        name: "Product",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_1__/* .paths */ .H.dashboard.product.root
                    },
                    {
                        name: currentProduct?.name
                    }
                ],
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_new_edit_form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                currentProduct: currentProduct
            })
        ]
    });
}


/***/ }),

/***/ 44462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductListView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(43490);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Table/index.js
var Table = __webpack_require__(77523);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableBody/index.js
var TableBody = __webpack_require__(24608);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableContainer/index.js
var TableContainer = __webpack_require__(68101);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/api/product.ts
var product = __webpack_require__(45516);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/table/index.ts + 8 modules
var components_table = __webpack_require__(48974);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./src/components/custom-dialog/index.ts + 1 modules
var custom_dialog = __webpack_require__(78254);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 3 modules
var format = __webpack_require__(63864);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableRow/index.js
var TableRow = __webpack_require__(44233);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableCell/index.js
var TableCell = __webpack_require__(80765);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/LinearProgress/index.js
var LinearProgress = __webpack_require__(71326);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/product/product-table-row.tsx


// @mui











// utils

// hooks

// components




function ProductTableRow({ row, selected, onSelectRow, onDeleteRow, onEditRow, onViewRow }) {
    const { name, price, publish, coverUrl, category, quantity, createdAt, available, inventoryType } = row;
    const confirm = (0,use_boolean/* useBoolean */.k)();
    const popover = (0,custom_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                hover: true,
                selected: selected,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        padding: "checkbox",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                            checked: selected,
                            onClick: onSelectRow
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                alt: name,
                                src: coverUrl,
                                variant: "rounded",
                                sx: {
                                    width: 64,
                                    height: 64,
                                    mr: 2
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                disableTypography: true,
                                primary: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                    noWrap: true,
                                    color: "inherit",
                                    variant: "subtitle2",
                                    onClick: onViewRow,
                                    sx: {
                                        cursor: "pointer"
                                    },
                                    children: name
                                }),
                                secondary: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                    component: "div",
                                    sx: {
                                        typography: "body2",
                                        color: "text.disabled"
                                    },
                                    children: category
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                            primary: (0,format["default"])(new Date(createdAt), "dd MMM yyyy"),
                            secondary: (0,format["default"])(new Date(createdAt), "p"),
                            primaryTypographyProps: {
                                typography: "body2",
                                noWrap: true
                            },
                            secondaryTypographyProps: {
                                mt: 0.5,
                                component: "span",
                                typography: "caption"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                        sx: {
                            typography: "caption",
                            color: "text.secondary"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
                                value: available * 100 / quantity,
                                variant: "determinate",
                                color: inventoryType === "out of stock" && "error" || inventoryType === "low stock" && "warning" || "success",
                                sx: {
                                    mb: 1,
                                    height: 6,
                                    maxWidth: 80
                                }
                            }),
                            !!available && available,
                            " ",
                            inventoryType
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: (0,format_number/* fCurrency */.e_)(price)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                            variant: "soft",
                            color: publish === "published" && "info" || "default",
                            children: publish
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                        align: "right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: popover.open ? "primary" : "default",
                            onClick: popover.onOpen,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "eva:more-vertical-fill"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "right-top",
                sx: {
                    width: 140
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            onViewRow();
                            popover.onClose();
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
                            onEditRow();
                            popover.onClose();
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
                            confirm.onTrue();
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_dialog/* ConfirmDialog */.Q, {
                open: confirm.value,
                onClose: confirm.onFalse,
                title: "Delete",
                content: "Are you sure want to delete?",
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    color: "error",
                    onClick: onDeleteRow,
                    children: "Delete"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputLabel/index.js
var InputLabel = __webpack_require__(97445);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControl/index.js
var FormControl = __webpack_require__(58111);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/OutlinedInput/index.js
var OutlinedInput = __webpack_require__(47459);
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Select/index.js
var Select = __webpack_require__(51892);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);
;// CONCATENATED MODULE: ./src/sections/product/product-table-toolbar.tsx


// @mui










// components


function ProductTableToolbar({ filters, onFilters, //
stockOptions, publishOptions }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    const handleFilterName = (0,react_.useCallback)((event)=>{
        onFilters("name", event.target.value);
    }, [
        onFilters
    ]);
    const handleFilterStock = (0,react_.useCallback)((event)=>{
        onFilters("stock", typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value);
    }, [
        onFilters
    ]);
    const handleFilterPublish = (0,react_.useCallback)((event)=>{
        onFilters("publish", typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value);
    }, [
        onFilters
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2,
                alignItems: {
                    xs: "flex-end",
                    md: "center"
                },
                direction: {
                    xs: "column",
                    md: "row"
                },
                sx: {
                    p: 2.5,
                    pr: {
                        xs: 2.5,
                        md: 1
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        sx: {
                            flexShrink: 0,
                            width: {
                                xs: 1,
                                md: 200
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                children: "Stock"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Select_default()), {
                                multiple: true,
                                value: filters.stock,
                                onChange: handleFilterStock,
                                input: /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                    label: "Stock"
                                }),
                                renderValue: (selected)=>selected.map((value)=>value).join(", "),
                                sx: {
                                    textTransform: "capitalize"
                                },
                                children: stockOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        value: option.value,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                disableRipple: true,
                                                size: "small",
                                                checked: filters.stock.includes(option.value)
                                            }),
                                            option.label
                                        ]
                                    }, option.value))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                        sx: {
                            flexShrink: 0,
                            width: {
                                xs: 1,
                                md: 200
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                children: "Publish"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Select_default()), {
                                multiple: true,
                                value: filters.publish,
                                onChange: handleFilterPublish,
                                input: /*#__PURE__*/ jsx_runtime_.jsx((OutlinedInput_default()), {
                                    label: "Publish"
                                }),
                                renderValue: (selected)=>selected.map((value)=>value).join(", "),
                                sx: {
                                    textTransform: "capitalize"
                                },
                                children: publishOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                        value: option.value,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                disableRipple: true,
                                                size: "small",
                                                checked: filters.publish.includes(option.value)
                                            }),
                                            option.label
                                        ]
                                    }, option.value))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        spacing: 2,
                        flexGrow: 1,
                        sx: {
                            width: 1
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                fullWidth: true,
                                value: filters.name,
                                onChange: handleFilterName,
                                placeholder: "Search...",
                                InputProps: {
                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                        position: "start",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                            icon: "eva:search-fill",
                                            sx: {
                                                color: "text.disabled"
                                            }
                                        })
                                    })
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                onClick: popover.onOpen,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "eva:more-vertical-fill"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                arrow: "right-top",
                sx: {
                    width: 140
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:printer-minimalistic-bold"
                            }),
                            "Print"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:import-bold"
                            }),
                            "Import"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                        onClick: ()=>{
                            popover.onClose();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "solar:export-bold"
                            }),
                            "Export"
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(92133);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
;// CONCATENATED MODULE: ./src/sections/product/product-table-filters-result.tsx
// @mui






// components

function ProductTableFiltersResult({ filters, onFilters, //
onResetFilters, //
results, ...other }) {
    const handleRemoveStock = (inputValue)=>{
        const newValue = filters.stock.filter((item)=>item !== inputValue);
        onFilters("stock", newValue);
    };
    const handleRemovePublish = (inputValue)=>{
        const newValue = filters.publish.filter((item)=>item !== inputValue);
        onFilters("publish", newValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1.5,
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    typography: "body2"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: results
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            color: "text.secondary",
                            ml: 0.25
                        },
                        children: "results found"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexGrow: 1,
                spacing: 1,
                direction: "row",
                flexWrap: "wrap",
                alignItems: "center",
                children: [
                    !!filters.stock.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Stock:",
                        children: filters.stock.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item,
                                size: "small",
                                onDelete: ()=>handleRemoveStock(item)
                            }, item))
                    }),
                    !!filters.publish.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Publish:",
                        children: filters.publish.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item,
                                size: "small",
                                onDelete: ()=>handleRemovePublish(item)
                            }, item))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "error",
                        onClick: onResetFilters,
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:trash-bin-trash-bold"
                        }),
                        children: "Clear"
                    })
                ]
            })
        ]
    });
}
function Block({ label, children, sx, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        component: (Paper_default()),
        variant: "outlined",
        spacing: 1,
        direction: "row",
        sx: {
            p: 1,
            borderRadius: 1,
            overflow: "hidden",
            borderStyle: "dashed",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    typography: "subtitle2"
                },
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                spacing: 1,
                direction: "row",
                flexWrap: "wrap",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/product/view/product-list-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


// @mui








// routes



// hooks

// _mock

// api

// components






//



// ----------------------------------------------------------------------
const TABLE_HEAD = [
    {
        id: "name",
        label: "Product"
    },
    {
        id: "createdAt",
        label: "Create at",
        width: 160
    },
    {
        id: "inventoryType",
        label: "Stock",
        width: 160
    },
    {
        id: "price",
        label: "Price",
        width: 140
    },
    {
        id: "publish",
        label: "Publish",
        width: 110
    },
    {
        id: "",
        width: 88
    }
];
const PUBLISH_OPTIONS = [
    {
        value: "published",
        label: "Published"
    },
    {
        value: "draft",
        label: "Draft"
    }
];
const defaultFilters = {
    name: "",
    publish: [],
    stock: []
};
// ----------------------------------------------------------------------
function ProductListView() {
    const router = (0,hooks/* useRouter */.tv)();
    const table = (0,components_table/* useTable */.x6)();
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const [tableData, setTableData] = (0,react_.useState)([]);
    const [filters, setFilters] = (0,react_.useState)(defaultFilters);
    const { products, productsLoading, productsEmpty } = (0,product/* useGetProducts */.iu)();
    const confirm = (0,use_boolean/* useBoolean */.k)();
    (0,react_.useEffect)(()=>{
        if (products.length) {
            setTableData(products);
        }
    }, [
        products
    ]);
    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: (0,components_table/* getComparator */.sQ)(table.order, table.orderBy),
        filters
    });
    const dataInPage = dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage);
    const denseHeight = table.dense ? 60 : 80;
    const canReset = !isEqual_default()(defaultFilters, filters);
    const notFound = !dataFiltered.length && canReset || productsEmpty;
    const handleFilters = (0,react_.useCallback)((name, value)=>{
        table.onResetPage();
        setFilters((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, [
        table
    ]);
    const handleDeleteRow = (0,react_.useCallback)((id)=>{
        const deleteRow = tableData.filter((row)=>row.id !== id);
        setTableData(deleteRow);
        table.onUpdatePageDeleteRow(dataInPage.length);
    }, [
        dataInPage.length,
        table,
        tableData
    ]);
    const handleDeleteRows = (0,react_.useCallback)(()=>{
        const deleteRows = tableData.filter((row)=>!table.selected.includes(row.id));
        setTableData(deleteRows);
        table.onUpdatePageDeleteRows({
            totalRows: tableData.length,
            totalRowsInPage: dataInPage.length,
            totalRowsFiltered: dataFiltered.length
        });
    }, [
        dataFiltered.length,
        dataInPage.length,
        table,
        tableData
    ]);
    const handleEditRow = (0,react_.useCallback)((id)=>{
        router.push(paths/* paths */.H.dashboard.product.edit(id));
    }, [
        router
    ]);
    const handleViewRow = (0,react_.useCallback)((id)=>{
        router.push(paths/* paths */.H.dashboard.product.details(id));
    }, [
        router
    ]);
    const handleResetFilters = (0,react_.useCallback)(()=>{
        setFilters(defaultFilters);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
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
                                name: "Product",
                                href: paths/* paths */.H.dashboard.product.root
                            },
                            {
                                name: "List"
                            }
                        ],
                        action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            component: components/* RouterLink */.r,
                            href: paths/* paths */.H.dashboard.product.new,
                            variant: "contained",
                            startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                icon: "mingcute:add-line"
                            }),
                            children: "New Product"
                        }),
                        sx: {
                            mb: {
                                xs: 3,
                                md: 5
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProductTableToolbar, {
                                filters: filters,
                                onFilters: handleFilters,
                                //
                                stockOptions: _mock/* PRODUCT_STOCK_OPTIONS */.m2,
                                publishOptions: PUBLISH_OPTIONS
                            }),
                            canReset && /*#__PURE__*/ jsx_runtime_.jsx(ProductTableFiltersResult, {
                                filters: filters,
                                onFilters: handleFilters,
                                //
                                onResetFilters: handleResetFilters,
                                //
                                results: dataFiltered.length,
                                sx: {
                                    p: 2.5,
                                    pt: 0
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableContainer_default()), {
                                sx: {
                                    position: "relative",
                                    overflow: "unset"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableSelectedAction */.Z4, {
                                        dense: table.dense,
                                        numSelected: table.selected.length,
                                        rowCount: tableData.length,
                                        onSelectAllRows: (checked)=>table.onSelectAllRows(checked, tableData.map((row)=>row.id)),
                                        action: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            title: "Delete",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                color: "primary",
                                                onClick: confirm.onTrue,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                                    icon: "solar:trash-bin-trash-bold"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                                            size: table.dense ? "small" : "medium",
                                            sx: {
                                                minWidth: 960
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableHeadCustom */.K, {
                                                    order: table.order,
                                                    orderBy: table.orderBy,
                                                    headLabel: TABLE_HEAD,
                                                    rowCount: tableData.length,
                                                    numSelected: table.selected.length,
                                                    onSort: table.onSort,
                                                    onSelectAllRows: (checked)=>table.onSelectAllRows(checked, tableData.map((row)=>row.id))
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableBody_default()), {
                                                    children: [
                                                        productsLoading ? [
                                                            ...Array(table.rowsPerPage)
                                                        ].map((i, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableSkeleton */.hM, {
                                                                sx: {
                                                                    height: denseHeight
                                                                }
                                                            }, index)) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                            children: dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage).map((row)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductTableRow, {
                                                                    row: row,
                                                                    selected: table.selected.includes(row.id),
                                                                    onSelectRow: ()=>table.onSelectRow(row.id),
                                                                    onDeleteRow: ()=>handleDeleteRow(row.id),
                                                                    onEditRow: ()=>handleEditRow(row.id),
                                                                    onViewRow: ()=>handleViewRow(row.id)
                                                                }, row.id))
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableEmptyRows */.$W, {
                                                            height: denseHeight,
                                                            emptyRows: (0,components_table/* emptyRows */.fQ)(table.page, table.rowsPerPage, tableData.length)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TableNoData */.et, {
                                                            notFound: notFound
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_table/* TablePaginationCustom */.S_, {
                                count: dataFiltered.length,
                                page: table.page,
                                rowsPerPage: table.rowsPerPage,
                                onPageChange: table.onChangePage,
                                onRowsPerPageChange: table.onChangeRowsPerPage,
                                //
                                dense: table.dense,
                                onChangeDense: table.onChangeDense
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_dialog/* ConfirmDialog */.Q, {
                open: confirm.value,
                onClose: confirm.onFalse,
                title: "Delete",
                content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Are you sure want to delete ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            children: [
                                " ",
                                table.selected.length,
                                " "
                            ]
                        }),
                        " items?"
                    ]
                }),
                action: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    color: "error",
                    onClick: ()=>{
                        handleDeleteRows();
                        confirm.onFalse();
                    },
                    children: "Delete"
                })
            })
        ]
    });
}
// ----------------------------------------------------------------------
function applyFilter({ inputData, comparator, filters }) {
    const { name, stock, publish } = filters;
    const stabilizedThis = inputData.map((el, index)=>[
            el,
            index
        ]);
    stabilizedThis.sort((a, b)=>{
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    inputData = stabilizedThis.map((el)=>el[0]);
    if (name) {
        inputData = inputData.filter((product)=>product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
    if (stock.length) {
        inputData = inputData.filter((product)=>stock.includes(product.inventoryType));
    }
    if (publish.length) {
        inputData = inputData.filter((product)=>publish.includes(product.publish));
    }
    return inputData;
}


/***/ }),

/***/ 4822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductShopDetailsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(83476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(307);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87726);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(76267);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(26566);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var src_routes_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48611);
/* harmony import */ var src_routes_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87362);
/* harmony import */ var src_api_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45516);
/* harmony import */ var src_components_iconify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76505);
/* harmony import */ var src_components_empty_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78998);
/* harmony import */ var src_components_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2701);
/* harmony import */ var src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80640);
/* harmony import */ var _common_cart_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26604);
/* harmony import */ var _product_details_review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10095);
/* harmony import */ var _product_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62999);
/* harmony import */ var _product_details_summary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56214);
/* harmony import */ var _product_details_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69115);
/* harmony import */ var _product_details_description__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30131);
/* harmony import */ var _checkout_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91771);
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui









// routes



// components




//







// ----------------------------------------------------------------------
const SUMMARY = [
    {
        title: "100% Original",
        description: "Chocolate bar candy canes ice cream toffee cookie halvah.",
        icon: "solar:verified-check-bold"
    },
    {
        title: "10 Day Replacement",
        description: "Marshmallow biscuit donut drag\xe9e fruitcake wafer.",
        icon: "solar:clock-circle-bold"
    },
    {
        title: "Year Warranty",
        description: "Cotton candy gingerbread cake I love sugar sweet.",
        icon: "solar:shield-check-bold"
    }
];
function ProductShopDetailsView({ id }) {
    const settings = (0,src_components_settings__WEBPACK_IMPORTED_MODULE_7__/* .useSettingsContext */ .K$)();
    const checkout = (0,_checkout_context__WEBPACK_IMPORTED_MODULE_15__/* .useCheckoutContext */ .w)();
    const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("description");
    const { product, productLoading, productError } = (0,src_api_product__WEBPACK_IMPORTED_MODULE_4__/* .useGetProduct */ .Kj)(id);
    const handleChangeTab = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event, newValue)=>{
        setCurrentTab(newValue);
    }, []);
    const renderSkeleton = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_skeleton__WEBPACK_IMPORTED_MODULE_11__/* .ProductDetailsSkeleton */ .C, {});
    const renderError = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_empty_content__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        filled: true,
        title: `${productError?.message}`,
        action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_16___default()), {
            component: src_routes_components__WEBPACK_IMPORTED_MODULE_3__/* .RouterLink */ .r,
            href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.product.root,
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
    });
    const renderProduct = product && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_custom_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                links: [
                    {
                        name: "Home",
                        href: "/"
                    },
                    {
                        name: "Shop",
                        href: src_routes_paths__WEBPACK_IMPORTED_MODULE_2__/* .paths */ .H.product.root
                    },
                    {
                        name: product?.name
                    }
                ],
                sx: {
                    mb: 5
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_17___default()), {
                container: true,
                spacing: {
                    xs: 3,
                    md: 5,
                    lg: 8
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_17___default()), {
                        xs: 12,
                        md: 6,
                        lg: 7,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_details_carousel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            product: product
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_17___default()), {
                        xs: 12,
                        md: 6,
                        lg: 5,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_details_summary__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            product: product,
                            items: checkout.items,
                            onAddCart: checkout.onAddToCart,
                            onGotoStep: checkout.onGotoStep
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__["default"], {
                gap: 5,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)"
                },
                sx: {
                    my: 10
                },
                children: SUMMARY.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__["default"], {
                        sx: {
                            textAlign: "center",
                            px: 5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_iconify__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                icon: item.icon,
                                width: 32,
                                sx: {
                                    color: "primary.main"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_19___default()), {
                                variant: "subtitle1",
                                sx: {
                                    mb: 1,
                                    mt: 2
                                },
                                children: item.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_19___default()), {
                                variant: "body2",
                                sx: {
                                    color: "text.secondary"
                                },
                                children: item.description
                            })
                        ]
                    }, item.title))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_20___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_21___default()), {
                        value: currentTab,
                        onChange: handleChangeTab,
                        sx: {
                            px: 3,
                            boxShadow: (theme)=>`inset 0 -2px 0 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_22__.alpha)(theme.palette.grey[500], 0.08)}`
                        },
                        children: [
                            {
                                value: "description",
                                label: "Description"
                            },
                            {
                                value: "reviews",
                                label: `Reviews (${product.reviews.length})`
                            }
                        ].map((tab)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_23___default()), {
                                value: tab.value,
                                label: tab.label
                            }, tab.value))
                    }),
                    currentTab === "description" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_details_description__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        description: product?.description
                    }),
                    currentTab === "reviews" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_product_details_review__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        ratings: product.ratings,
                        reviews: product.reviews,
                        totalRatings: product.totalRatings,
                        totalReviews: product.totalReviews
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_24___default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        sx: {
            mt: 5,
            mb: 15
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_cart_icon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                totalItems: checkout.totalItems
            }),
            productLoading && renderSkeleton,
            productError && renderError,
            product && renderProduct
        ]
    });
}


/***/ }),

/***/ 85741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductShopView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash/orderBy.js
var orderBy = __webpack_require__(71723);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(43490);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/hooks/use-debounce.ts
var use_debounce = __webpack_require__(65694);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/api/product.ts
var product = __webpack_require__(45516);
// EXTERNAL MODULE: ./src/components/empty-content/index.ts + 1 modules
var empty_content = __webpack_require__(78998);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/sections/checkout/context/index.ts
var context = __webpack_require__(91771);
// EXTERNAL MODULE: ./src/sections/product/common/cart-icon.tsx
var cart_icon = __webpack_require__(26604);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Pagination/index.js
var Pagination = __webpack_require__(53531);
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fab/index.js
var Fab = __webpack_require__(82272);
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(11666);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(37210);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/color-utils/index.ts + 2 modules
var color_utils = __webpack_require__(26199);
;// CONCATENATED MODULE: ./src/sections/product/product-item.tsx
// @mui







// routes


// utils

// components




//

function ProductItem({ product }) {
    const { onAddToCart } = (0,context/* useCheckoutContext */.w)();
    const { id, name, coverUrl, price, colors, available, sizes, priceSale, newLabel, saleLabel } = product;
    const linkTo = paths/* paths */.H.product.details(id);
    const handleAddCart = async ()=>{
        const newProduct = {
            id,
            name,
            coverUrl,
            available,
            price,
            colors: [
                colors[0]
            ],
            size: sizes[0],
            quantity: 1
        };
        try {
            onAddToCart(newProduct);
        } catch (error) {
            console.error(error);
        }
    };
    const renderLabels = (newLabel.enabled || saleLabel.enabled) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        spacing: 1,
        sx: {
            position: "absolute",
            zIndex: 9,
            top: 16,
            right: 16
        },
        children: [
            newLabel.enabled && /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                variant: "filled",
                color: "info",
                children: newLabel.content
            }),
            saleLabel.enabled && /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                variant: "filled",
                color: "error",
                children: saleLabel.content
            })
        ]
    });
    const renderImg = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
        sx: {
            position: "relative",
            p: 1
        },
        children: [
            !!available && /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                color: "warning",
                size: "medium",
                className: "add-cart-btn",
                onClick: handleAddCart,
                sx: {
                    right: 16,
                    bottom: 16,
                    zIndex: 9,
                    opacity: 0,
                    position: "absolute",
                    transition: (theme)=>theme.transitions.create("all", {
                            easing: theme.transitions.easing.easeInOut,
                            duration: theme.transitions.duration.shorter
                        })
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:cart-plus-bold",
                    width: 24
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: !available && "Out of stock",
                placement: "bottom-end",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                    alt: name,
                    src: coverUrl,
                    ratio: "1/1",
                    sx: {
                        borderRadius: 1.5,
                        ...!available && {
                            opacity: 0.48,
                            filter: "grayscale(1)"
                        }
                    }
                })
            })
        ]
    });
    const renderContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2.5,
        sx: {
            p: 3,
            pt: 2
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                component: components/* RouterLink */.r,
                href: linkTo,
                color: "inherit",
                variant: "subtitle2",
                noWrap: true,
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(color_utils/* ColorPreview */.Z, {
                        colors: colors
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        spacing: 0.5,
                        sx: {
                            typography: "subtitle1"
                        },
                        children: [
                            priceSale && /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    color: "text.disabled",
                                    textDecoration: "line-through"
                                },
                                children: (0,format_number/* fCurrency */.e_)(priceSale)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                children: (0,format_number/* fCurrency */.e_)(price)
                            })
                        ]
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            "&:hover .add-cart-btn": {
                opacity: 1
            }
        },
        children: [
            renderLabels,
            renderImg,
            renderContent
        ]
    });
}

// EXTERNAL MODULE: ./src/sections/product/product-skeleton.tsx
var product_skeleton = __webpack_require__(62999);
;// CONCATENATED MODULE: ./src/sections/product/product-list.tsx
// @mui



//


function ProductList({ products, loading, ...other }) {
    const renderSkeleton = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: [
            ...Array(16)
        ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(product_skeleton/* ProductItemSkeleton */.T, {}, index))
    });
    const renderList = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductItem, {
                product: product
            }, product.id))
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                gap: 3,
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)"
                },
                children: loading ? renderSkeleton : renderList
            }),
            products.length > 8 && /*#__PURE__*/ jsx_runtime_.jsx((Pagination_default()), {
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

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/product/product-sort.tsx
// @mui




// components


function ProductSort({ sort, onSort, sortOptions }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    const sortLabel = sortOptions.find((option)=>option.value === sort)?.label;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                disableRipple: true,
                color: "inherit",
                onClick: popover.onOpen,
                endIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: popover.open ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"
                }),
                sx: {
                    fontWeight: "fontWeightSemiBold"
                },
                children: [
                    "Sort By:",
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            ml: 0.5,
                            fontWeight: "fontWeightBold"
                        },
                        children: sortLabel
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_popover/* default */.Z, {
                open: popover.open,
                onClose: popover.onClose,
                sx: {
                    width: 140
                },
                children: sortOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        selected: option.value === sort,
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

// EXTERNAL MODULE: ./node_modules/autosuggest-highlight/parse/index.js
var parse = __webpack_require__(41872);
var parse_default = /*#__PURE__*/__webpack_require__.n(parse);
// EXTERNAL MODULE: ./node_modules/autosuggest-highlight/match/index.js
var match = __webpack_require__(2452);
var match_default = /*#__PURE__*/__webpack_require__.n(match);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Autocomplete/index.js
var Autocomplete = __webpack_require__(45003);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete);
// EXTERNAL MODULE: ./src/routes/hooks/index.ts + 4 modules
var hooks = __webpack_require__(89539);
// EXTERNAL MODULE: ./src/components/search-not-found/index.ts + 1 modules
var search_not_found = __webpack_require__(271);
;// CONCATENATED MODULE: ./src/sections/product/product-search.tsx




// @mui






// routes

// components


function ProductSearch({ query, results, onSearch, hrefItem, loading }) {
    const router = (0,hooks/* useRouter */.tv)();
    const handleClick = (id)=>{
        router.push(hrefItem(id));
    };
    const handleKeyUp = (event)=>{
        if (query) {
            if (event.key === "Enter") {
                const selectItem = results.filter((product)=>product.name === query)[0];
                handleClick(selectItem.id);
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
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
        getOptionLabel: (option)=>option.name,
        noOptionsText: /*#__PURE__*/ jsx_runtime_.jsx(search_not_found/* default */.Z, {
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
                    [` .${Autocomplete.autocompleteClasses.option}`]: {
                        pl: 0.75
                    }
                }
            }
        },
        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                ...params,
                placeholder: "Search...",
                onKeyUp: handleKeyUp,
                InputProps: {
                    ...params.InputProps,
                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                        position: "start",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:search-fill",
                            sx: {
                                ml: 1,
                                color: "text.disabled"
                            }
                        })
                    }),
                    endAdornment: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            loading ? /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
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
        renderOption: (props, product, { inputValue })=>{
            const matches = match_default()(product.name, inputValue);
            const parts = parse_default()(product.name, matches);
            return /*#__PURE__*/ (0,react_.createElement)(Box["default"], {
                component: "li",
                ...props,
                onClick: ()=>handleClick(product.id),
                key: product.id,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: product.name,
                        src: product.coverUrl,
                        variant: "rounded",
                        sx: {
                            width: 48,
                            height: 48,
                            flexShrink: 0,
                            mr: 1.5,
                            borderRadius: 1
                        }
                    }, product.id),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: parts.map((part, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
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

// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Radio/index.js
var Radio = __webpack_require__(49696);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(42454);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(20094);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Rating/index.js
var Rating = __webpack_require__(34972);
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Slider/index.js
var Slider = __webpack_require__(48839);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputBase/index.js
var InputBase = __webpack_require__(73392);
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
;// CONCATENATED MODULE: ./src/sections/product/product-filters.tsx


// @mui















// components



function ProductFilters({ open, onOpen, onClose, //
filters, onFilters, //
canReset, onResetFilters, //
colorOptions, genderOptions, ratingOptions, categoryOptions }) {
    const marksLabel = [
        ...Array(21)
    ].map((_, index)=>{
        const value = index * 10;
        const firstValue = index === 0 ? `$${value}` : `${value}`;
        return {
            value,
            label: index % 4 ? "" : firstValue
        };
    });
    const handleFilterGender = (0,react_.useCallback)((newValue)=>{
        const checked = filters.gender.includes(newValue) ? filters.gender.filter((value)=>value !== newValue) : [
            ...filters.gender,
            newValue
        ];
        onFilters("gender", checked);
    }, [
        filters.gender,
        onFilters
    ]);
    const handleFilterCategory = (0,react_.useCallback)((newValue)=>{
        onFilters("category", newValue);
    }, [
        onFilters
    ]);
    const handleFilterColors = (0,react_.useCallback)((newValue)=>{
        onFilters("colors", newValue);
    }, [
        onFilters
    ]);
    const handleFilterPriceRange = (0,react_.useCallback)((event, newValue)=>{
        onFilters("priceRange", newValue);
    }, [
        onFilters
    ]);
    const handleFilterRating = (0,react_.useCallback)((newValue)=>{
        onFilters("rating", newValue);
    }, [
        onFilters
    ]);
    const renderHead = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            py: 2,
            pr: 1,
            pl: 2.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    flexGrow: 1
                },
                children: "Filters"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: "Reset",
                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    onClick: onResetFilters,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                        color: "error",
                        variant: "dot",
                        invisible: !canReset,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:restart-bold"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "mingcute:close-line"
                })
            })
        ]
    });
    const renderGender = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    mb: 1
                },
                children: "Gender"
            }),
            genderOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                        checked: filters.gender.includes(option.label),
                        onClick: ()=>handleFilterGender(option.label)
                    }),
                    label: option.label
                }, option.value))
        ]
    });
    const renderCategory = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    mb: 1
                },
                children: "Category"
            }),
            categoryOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                        checked: option === filters.category,
                        onClick: ()=>handleFilterCategory(option)
                    }),
                    label: option,
                    sx: {
                        ...option === "all" && {
                            textTransform: "capitalize"
                        }
                    }
                }, option))
        ]
    });
    const renderColor = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    mb: 1
                },
                children: "Color"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(color_utils/* ColorPicker */.z, {
                selected: filters.colors,
                onSelectColor: (colors)=>handleFilterColors(colors),
                colors: colorOptions,
                limit: 6
            })
        ]
    });
    const renderPrice = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    flexGrow: 1
                },
                children: "Price"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                spacing: 5,
                sx: {
                    my: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputRange, {
                        type: "min",
                        value: filters.priceRange,
                        onFilters: onFilters
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputRange, {
                        type: "max",
                        value: filters.priceRange,
                        onFilters: onFilters
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Slider_default()), {
                value: filters.priceRange,
                onChange: handleFilterPriceRange,
                step: 10,
                min: 0,
                max: 200,
                marks: marksLabel,
                getAriaValueText: (value)=>`$${value}`,
                valueLabelFormat: (value)=>`$${value}`,
                sx: {
                    alignSelf: "center",
                    width: `calc(100% - 24px)`
                }
            })
        ]
    });
    const renderRating = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        alignItems: "flex-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                children: "Rating"
            }),
            ratingOptions.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                    direction: "row",
                    onClick: ()=>handleFilterRating(item),
                    sx: {
                        borderRadius: 1,
                        cursor: "pointer",
                        typography: "body2",
                        "&:hover": {
                            opacity: 0.48
                        },
                        ...filters.rating === item && {
                            pl: 0.5,
                            pr: 0.75,
                            py: 0.25,
                            bgcolor: "action.selected"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                            readOnly: true,
                            value: 4 - index,
                            sx: {
                                mr: 1
                            }
                        }),
                        " & Up"
                    ]
                }, item))
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                disableRipple: true,
                color: "inherit",
                endIcon: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                    color: "error",
                    variant: "dot",
                    invisible: !canReset,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "ic:round-filter-list"
                    })
                }),
                onClick: onOpen,
                children: "Filters"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                anchor: "right",
                open: open,
                onClose: onClose,
                slotProps: {
                    backdrop: {
                        invisible: true
                    }
                },
                PaperProps: {
                    sx: {
                        width: 280
                    }
                },
                children: [
                    renderHead,
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                        sx: {
                            px: 2.5,
                            py: 3
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            spacing: 3,
                            children: [
                                renderGender,
                                renderCategory,
                                renderColor,
                                renderPrice,
                                renderRating
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function InputRange({ type, value, onFilters }) {
    const min = value[0];
    const max = value[1];
    const handleBlurInputRange = (0,react_.useCallback)(()=>{
        if (min < 0) {
            onFilters("priceRange", [
                0,
                max
            ]);
        }
        if (min > 200) {
            onFilters("priceRange", [
                200,
                max
            ]);
        }
        if (max < 0) {
            onFilters("priceRange", [
                min,
                0
            ]);
        }
        if (max > 200) {
            onFilters("priceRange", [
                min,
                200
            ]);
        }
    }, [
        max,
        min,
        onFilters
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            width: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "caption",
                sx: {
                    flexShrink: 0,
                    color: "text.disabled",
                    textTransform: "capitalize",
                    fontWeight: "fontWeightSemiBold"
                },
                children: `${type} ($)`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((InputBase_default()), {
                fullWidth: true,
                value: type === "min" ? min : max,
                onChange: (event)=>type === "min" ? onFilters("priceRange", [
                        Number(event.target.value),
                        max
                    ]) : onFilters("priceRange", [
                        min,
                        Number(event.target.value)
                    ]),
                onBlur: handleBlurInputRange,
                inputProps: {
                    step: 10,
                    min: 0,
                    max: 200,
                    type: "number",
                    "aria-labelledby": "input-slider"
                },
                sx: {
                    maxWidth: 48,
                    borderRadius: 0.75,
                    bgcolor: (theme)=>(0,styles.alpha)(theme.palette.grey[500], 0.08),
                    [`& .${InputBase.inputBaseClasses.input}`]: {
                        pr: 1,
                        py: 0.75,
                        textAlign: "right",
                        typography: "body2"
                    }
                }
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(92133);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
;// CONCATENATED MODULE: ./src/sections/product/product-filters-result.tsx
// @mui







// components

function ProductFiltersResult({ filters, onFilters, //
canReset, onResetFilters, //
results, ...other }) {
    const handleRemoveGender = (inputValue)=>{
        const newValue = filters.gender.filter((item)=>item !== inputValue);
        onFilters("gender", newValue);
    };
    const handleRemoveCategory = ()=>{
        onFilters("category", "all");
    };
    const handleRemoveColor = (inputValue)=>{
        const newValue = filters.colors.filter((item)=>item !== inputValue);
        onFilters("colors", newValue);
    };
    const handleRemovePrice = ()=>{
        onFilters("priceRange", [
            0,
            200
        ]);
    };
    const handleRemoveRating = ()=>{
        onFilters("rating", "");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 1.5,
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                sx: {
                    typography: "body2"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: results
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            color: "text.secondary",
                            ml: 0.25
                        },
                        children: "results found"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                flexGrow: 1,
                spacing: 1,
                direction: "row",
                flexWrap: "wrap",
                alignItems: "center",
                children: [
                    !!filters.gender.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Gender:",
                        children: filters.gender.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item,
                                size: "small",
                                onDelete: ()=>handleRemoveGender(item)
                            }, item))
                    }),
                    filters.category !== "all" && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Category:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: filters.category,
                            onDelete: handleRemoveCategory
                        })
                    }),
                    !!filters.colors.length && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Colors:",
                        children: filters.colors.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                size: "small",
                                label: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                    sx: {
                                        ml: -0.5,
                                        width: 18,
                                        height: 18,
                                        bgcolor: item,
                                        borderRadius: "50%",
                                        border: (theme)=>`solid 1px ${(0,styles.alpha)(theme.palette.common.white, 0.24)}`
                                    }
                                }),
                                onDelete: ()=>handleRemoveColor(item)
                            }, item))
                    }),
                    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 200) && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Price:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: `$${filters.priceRange[0]} - ${filters.priceRange[1]}`,
                            onDelete: handleRemovePrice
                        })
                    }),
                    !!filters.rating && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Rating:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: filters.rating,
                            onDelete: handleRemoveRating
                        })
                    }),
                    canReset && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "error",
                        onClick: onResetFilters,
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:trash-bin-trash-bold"
                        }),
                        children: "Clear"
                    })
                ]
            })
        ]
    });
}
function Block({ label, children, sx, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        component: (Paper_default()),
        variant: "outlined",
        spacing: 1,
        direction: "row",
        sx: {
            p: 1,
            borderRadius: 1,
            overflow: "hidden",
            borderStyle: "dashed",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                component: "span",
                sx: {
                    typography: "subtitle2"
                },
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                spacing: 1,
                direction: "row",
                flexWrap: "wrap",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/product/view/product-shop-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



// @mui



// hooks


// routes

// _mock

// api

// components


//







// ----------------------------------------------------------------------
const defaultFilters = {
    gender: [],
    colors: [],
    rating: "",
    category: "all",
    priceRange: [
        0,
        200
    ]
};
// ----------------------------------------------------------------------
function ProductShopView() {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const checkout = (0,context/* useCheckoutContext */.w)();
    const openFilters = (0,use_boolean/* useBoolean */.k)();
    const [sortBy, setSortBy] = (0,react_.useState)("featured");
    const [searchQuery, setSearchQuery] = (0,react_.useState)("");
    const debouncedQuery = (0,use_debounce/* useDebounce */.N)(searchQuery);
    const [filters, setFilters] = (0,react_.useState)(defaultFilters);
    const { products, productsLoading, productsEmpty } = (0,product/* useGetProducts */.iu)();
    const { searchResults, searchLoading } = (0,product/* useSearchProducts */.Iy)(debouncedQuery);
    const handleFilters = (0,react_.useCallback)((name, value)=>{
        setFilters((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, []);
    const dataFiltered = applyFilter({
        inputData: products,
        filters,
        sortBy
    });
    const canReset = !isEqual_default()(defaultFilters, filters);
    const notFound = !dataFiltered.length && canReset;
    const handleSortBy = (0,react_.useCallback)((newValue)=>{
        setSortBy(newValue);
    }, []);
    const handleSearch = (0,react_.useCallback)((inputValue)=>{
        setSearchQuery(inputValue);
    }, []);
    const handleResetFilters = (0,react_.useCallback)(()=>{
        setFilters(defaultFilters);
    }, []);
    const renderFilters = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
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
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ProductSearch, {
                query: debouncedQuery,
                results: searchResults,
                onSearch: handleSearch,
                loading: searchLoading,
                hrefItem: (id)=>paths/* paths */.H.product.details(id)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                spacing: 1,
                flexShrink: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ProductFilters, {
                        open: openFilters.value,
                        onOpen: openFilters.onTrue,
                        onClose: openFilters.onFalse,
                        //
                        filters: filters,
                        onFilters: handleFilters,
                        //
                        canReset: canReset,
                        onResetFilters: handleResetFilters,
                        //
                        colorOptions: _mock/* PRODUCT_COLOR_OPTIONS */.J_,
                        ratingOptions: _mock/* PRODUCT_RATING_OPTIONS */.iO,
                        genderOptions: _mock/* PRODUCT_GENDER_OPTIONS */.XH,
                        categoryOptions: [
                            "all",
                            ..._mock/* PRODUCT_CATEGORY_OPTIONS */.Gu
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProductSort, {
                        sort: sortBy,
                        onSort: handleSortBy,
                        sortOptions: _mock/* PRODUCT_SORT_OPTIONS */.rs
                    })
                ]
            })
        ]
    });
    const renderResults = /*#__PURE__*/ jsx_runtime_.jsx(ProductFiltersResult, {
        filters: filters,
        onFilters: handleFilters,
        //
        canReset: canReset,
        onResetFilters: handleResetFilters,
        //
        results: dataFiltered.length
    });
    const renderNotFound = /*#__PURE__*/ jsx_runtime_.jsx(empty_content/* default */.Z, {
        filled: true,
        title: "No Data",
        sx: {
            py: 10
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        sx: {
            mb: 15
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(cart_icon/* default */.Z, {
                totalItems: checkout.totalItems
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h4",
                sx: {
                    my: {
                        xs: 3,
                        md: 5
                    }
                },
                children: "Shop"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 2.5,
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    renderFilters,
                    canReset && renderResults
                ]
            }),
            (notFound || productsEmpty) && renderNotFound,
            /*#__PURE__*/ jsx_runtime_.jsx(ProductList, {
                products: dataFiltered,
                loading: productsLoading
            })
        ]
    });
}
// ----------------------------------------------------------------------
function applyFilter({ inputData, filters, sortBy }) {
    const { gender, category, colors, priceRange, rating } = filters;
    const min = priceRange[0];
    const max = priceRange[1];
    // SORT BY
    if (sortBy === "featured") {
        inputData = orderBy_default()(inputData, [
            "totalSold"
        ], [
            "desc"
        ]);
    }
    if (sortBy === "newest") {
        inputData = orderBy_default()(inputData, [
            "createdAt"
        ], [
            "desc"
        ]);
    }
    if (sortBy === "priceDesc") {
        inputData = orderBy_default()(inputData, [
            "price"
        ], [
            "desc"
        ]);
    }
    if (sortBy === "priceAsc") {
        inputData = orderBy_default()(inputData, [
            "price"
        ], [
            "asc"
        ]);
    }
    // FILTERS
    if (gender.length) {
        inputData = inputData.filter((product)=>gender.includes(product.gender));
    }
    if (category !== "all") {
        inputData = inputData.filter((product)=>product.category === category);
    }
    if (colors.length) {
        inputData = inputData.filter((product)=>product.colors.some((color)=>colors.includes(color)));
    }
    if (min !== 0 || max !== 200) {
        inputData = inputData.filter((product)=>product.price >= min && product.price <= max);
    }
    if (rating) {
        inputData = inputData.filter((product)=>{
            const convertRating = (value)=>{
                if (value === "up4Star") return 4;
                if (value === "up3Star") return 3;
                if (value === "up2Star") return 2;
                return 1;
            };
            return product.totalRatings > convertRating(rating);
        });
    }
    return inputData;
}


/***/ }),

/***/ 19137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ti: () => (/* reexport */ product_create_view),
  yE: () => (/* reexport */ product_details_view),
  sj: () => (/* reexport */ product_edit_view),
  Yf: () => (/* reexport */ product_list_view),
  QN: () => (/* reexport */ product_shop_details_view),
  OZ: () => (/* reexport */ product_shop_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/product/view/product-edit-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/product/view/product-edit-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const product_edit_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/product/view/product-shop-view.tsx

const product_shop_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/product/view/product-shop-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: product_shop_view_esModule, $$typeof: product_shop_view_$$typeof } = product_shop_view_proxy;
const product_shop_view_default_ = product_shop_view_proxy.default;


/* harmony default export */ const product_shop_view = (product_shop_view_default_);
;// CONCATENATED MODULE: ./src/sections/product/view/product-list-view.tsx

const product_list_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/product/view/product-list-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: product_list_view_esModule, $$typeof: product_list_view_$$typeof } = product_list_view_proxy;
const product_list_view_default_ = product_list_view_proxy.default;


/* harmony default export */ const product_list_view = (product_list_view_default_);
;// CONCATENATED MODULE: ./src/sections/product/view/product-create-view.tsx

const product_create_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/product/view/product-create-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: product_create_view_esModule, $$typeof: product_create_view_$$typeof } = product_create_view_proxy;
const product_create_view_default_ = product_create_view_proxy.default;


/* harmony default export */ const product_create_view = (product_create_view_default_);
;// CONCATENATED MODULE: ./src/sections/product/view/product-details-view.tsx

const product_details_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/product/view/product-details-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: product_details_view_esModule, $$typeof: product_details_view_$$typeof } = product_details_view_proxy;
const product_details_view_default_ = product_details_view_proxy.default;


/* harmony default export */ const product_details_view = (product_details_view_default_);
;// CONCATENATED MODULE: ./src/sections/product/view/product-shop-details-view.tsx

const product_shop_details_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/product/view/product-shop-details-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: product_shop_details_view_esModule, $$typeof: product_shop_details_view_$$typeof } = product_shop_details_view_proxy;
const product_shop_details_view_default_ = product_shop_details_view_proxy.default;


/* harmony default export */ const product_shop_details_view = (product_shop_details_view_default_);
;// CONCATENATED MODULE: ./src/sections/product/view/index.ts








/***/ })

};
;