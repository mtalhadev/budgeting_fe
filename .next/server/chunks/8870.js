exports.id = 8870;
exports.ids = [8870];
exports.modules = {

/***/ 15860:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61360));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 41851))

/***/ }),

/***/ 41851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OrderDetailsView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Unstable_Grid2/index.js
var Unstable_Grid2 = __webpack_require__(26566);
var Unstable_Grid2_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid2);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(48611);
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Card/index.js
var Card = __webpack_require__(76267);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(61272);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(48060);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardHeader/index.js
var CardHeader = __webpack_require__(77782);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
;// CONCATENATED MODULE: ./src/sections/order/order-details-info.tsx
// @mui











// components

function OrderDetailsInfo({ customer, delivery, payment, shippingAddress }) {
    const renderCustomer = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Customer Info",
                action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:pen-bold"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                sx: {
                    p: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: customer.name,
                        src: customer.avatarUrl,
                        sx: {
                            width: 48,
                            height: 48,
                            mr: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        spacing: 0.5,
                        alignItems: "flex-start",
                        sx: {
                            typography: "body2"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle2",
                                children: customer.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                sx: {
                                    color: "text.secondary"
                                },
                                children: customer.email
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                children: [
                                    "IP Address:",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                        component: "span",
                                        sx: {
                                            color: "text.secondary",
                                            ml: 0.25
                                        },
                                        children: customer.ipAddress
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                size: "small",
                                color: "error",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "mingcute:add-line"
                                }),
                                sx: {
                                    mt: 1
                                },
                                children: "Add to Blacklist"
                            })
                        ]
                    })
                ]
            })
        ]
    });
    const renderDelivery = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Delivery",
                action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:pen-bold"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1.5,
                sx: {
                    p: 3,
                    typography: "body2"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    color: "text.secondary",
                                    width: 120,
                                    flexShrink: 0
                                },
                                children: "Ship by"
                            }),
                            delivery.shipBy
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    color: "text.secondary",
                                    width: 120,
                                    flexShrink: 0
                                },
                                children: "Speedy"
                            }),
                            delivery.speedy
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    color: "text.secondary",
                                    width: 120,
                                    flexShrink: 0
                                },
                                children: "Tracking No."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                underline: "always",
                                color: "inherit",
                                children: delivery.trackingNumber
                            })
                        ]
                    })
                ]
            })
        ]
    });
    const renderShipping = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Shipping",
                action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:pen-bold"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 1.5,
                sx: {
                    p: 3,
                    typography: "body2"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    color: "text.secondary",
                                    width: 120,
                                    flexShrink: 0
                                },
                                children: "Address"
                            }),
                            shippingAddress.fullAddress
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        direction: "row",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                component: "span",
                                sx: {
                                    color: "text.secondary",
                                    width: 120,
                                    flexShrink: 0
                                },
                                children: "Phone number"
                            }),
                            shippingAddress.phoneNumber
                        ]
                    })
                ]
            })
        ]
    });
    const renderPayment = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Payment",
                action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:pen-bold"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                alignItems: "center",
                sx: {
                    p: 3,
                    typography: "body2"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        component: "span",
                        sx: {
                            color: "text.secondary",
                            flexGrow: 1
                        },
                        children: "Phone number"
                    }),
                    payment.cardNumber,
                    /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "logos:mastercard",
                        width: 24,
                        sx: {
                            ml: 0.5
                        }
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            renderCustomer,
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            renderDelivery,
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            renderShipping,
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                sx: {
                    borderStyle: "dashed"
                }
            }),
            renderPayment
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
;// CONCATENATED MODULE: ./src/sections/order/order-details-item.tsx
// @mui







// utils

// components

function OrderDetailsItems({ items, shipping, discount, taxes, subTotal, totalAmount }) {
    const renderTotal = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        alignItems: "flex-end",
        sx: {
            my: 3,
            textAlign: "right",
            typography: "body2"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Subtotal"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160,
                            typography: "subtitle2"
                        },
                        children: (0,format_number/* fCurrency */.e_)(subTotal) || "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Shipping"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160,
                            ...shipping && {
                                color: "error.main"
                            }
                        },
                        children: shipping ? `- ${(0,format_number/* fCurrency */.e_)(shipping)}` : "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Discount"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160,
                            ...discount && {
                                color: "error.main"
                            }
                        },
                        children: discount ? `- ${(0,format_number/* fCurrency */.e_)(discount)}` : "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Taxes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160
                        },
                        children: taxes ? (0,format_number/* fCurrency */.e_)(taxes) : "-"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                direction: "row",
                sx: {
                    typography: "subtitle1"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        children: "Total"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            width: 160
                        },
                        children: (0,format_number/* fCurrency */.e_)(totalAmount) || "-"
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                sx: {
                    px: 3
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                        children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                direction: "row",
                                alignItems: "center",
                                sx: {
                                    py: 3,
                                    minWidth: 640,
                                    borderBottom: (theme)=>`dashed 2px ${theme.palette.background.neutral}`
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: item.coverUrl,
                                        variant: "rounded",
                                        sx: {
                                            width: 48,
                                            height: 48,
                                            mr: 2
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: item.name,
                                        secondary: item.sku,
                                        primaryTypographyProps: {
                                            typography: "body2"
                                        },
                                        secondaryTypographyProps: {
                                            component: "span",
                                            color: "text.disabled",
                                            mt: 0.5
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                        sx: {
                                            typography: "body2"
                                        },
                                        children: [
                                            "x",
                                            item.quantity
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                        sx: {
                                            width: 110,
                                            textAlign: "right",
                                            typography: "subtitle2"
                                        },
                                        children: (0,format_number/* fCurrency */.e_)(item.price)
                                    })
                                ]
                            }, item.id))
                    }),
                    renderTotal
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/MenuItem/index.js
var MenuItem = __webpack_require__(88707);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(87362);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/order/order-details-toolbar.tsx
// @mui






// routes

// utils

// components



function OrderDetailsToolbar({ status, backLink, createdAt, orderNumber, statusOptions, onChangeStatus }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                direction: {
                    xs: "column",
                    md: "row"
                },
                sx: {
                    mb: {
                        xs: 3,
                        md: 5
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        spacing: 1,
                        direction: "row",
                        alignItems: "flex-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                component: components/* RouterLink */.r,
                                href: backLink,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "eva:arrow-ios-back-fill"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                spacing: 0.5,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                                        spacing: 1,
                                        direction: "row",
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                variant: "h4",
                                                children: [
                                                    " Order ",
                                                    orderNumber,
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                                                variant: "soft",
                                                color: status === "completed" && "success" || status === "pending" && "warning" || status === "cancelled" && "error" || "default",
                                                children: status
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body2",
                                        sx: {
                                            color: "text.disabled"
                                        },
                                        children: (0,format_time/* fDateTime */.zM)(createdAt)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                        flexGrow: 1,
                        spacing: 1.5,
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                color: "inherit",
                                variant: "outlined",
                                endIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "eva:arrow-ios-downward-fill"
                                }),
                                onClick: popover.onOpen,
                                sx: {
                                    textTransform: "capitalize"
                                },
                                children: status
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                color: "inherit",
                                variant: "outlined",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "solar:printer-minimalistic-bold"
                                }),
                                children: "Print"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                color: "inherit",
                                variant: "contained",
                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                                    icon: "solar:pen-bold"
                                }),
                                children: "Edit"
                            })
                        ]
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
                children: statusOptions.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        selected: option.value === status,
                        onClick: ()=>{
                            popover.onClose();
                            onChangeStatus(option.value);
                        },
                        children: option.label
                    }, option.value))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/lab/node/Timeline/index.js
var Timeline = __webpack_require__(41497);
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TimelineDot/index.js
var TimelineDot = __webpack_require__(67843);
var TimelineDot_default = /*#__PURE__*/__webpack_require__.n(TimelineDot);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TimelineContent/index.js
var TimelineContent = __webpack_require__(42873);
var TimelineContent_default = /*#__PURE__*/__webpack_require__.n(TimelineContent);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TimelineSeparator/index.js
var TimelineSeparator = __webpack_require__(74042);
var TimelineSeparator_default = /*#__PURE__*/__webpack_require__.n(TimelineSeparator);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TimelineConnector/index.js
var TimelineConnector = __webpack_require__(77306);
var TimelineConnector_default = /*#__PURE__*/__webpack_require__.n(TimelineConnector);
// EXTERNAL MODULE: ./node_modules/@mui/lab/node/TimelineItem/index.js
var TimelineItem = __webpack_require__(93224);
var TimelineItem_default = /*#__PURE__*/__webpack_require__.n(TimelineItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
;// CONCATENATED MODULE: ./src/sections/order/order-details-history.tsx
// @mui













// utils

function OrderDetailsHistory({ history }) {
    const renderSummary = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
        spacing: 2,
        component: (Paper_default()),
        variant: "outlined",
        sx: {
            p: 2.5,
            minWidth: 260,
            flexShrink: 0,
            borderRadius: 2,
            typography: "body2",
            borderStyle: "dashed"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.disabled"
                        },
                        children: "Order time"
                    }),
                    (0,format_time/* fDateTime */.zM)(history.orderTime)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.disabled"
                        },
                        children: "Payment time"
                    }),
                    (0,format_time/* fDateTime */.zM)(history.orderTime)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.disabled"
                        },
                        children: "Delivery time for the carrier"
                    }),
                    (0,format_time/* fDateTime */.zM)(history.orderTime)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                        sx: {
                            color: "text.disabled"
                        },
                        children: "Completion time"
                    }),
                    (0,format_time/* fDateTime */.zM)(history.orderTime)
                ]
            })
        ]
    });
    const renderTimeline = /*#__PURE__*/ jsx_runtime_.jsx((Timeline_default()), {
        sx: {
            p: 0,
            m: 0,
            [`& .${TimelineItem.timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0
            }
        },
        children: history.timeline.map((item, index)=>{
            const firstTimeline = index === 0;
            const lastTimeline = index === history.timeline.length - 1;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineItem_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineSeparator_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TimelineDot_default()), {
                                color: firstTimeline && "primary" || "grey"
                            }),
                            lastTimeline ? null : /*#__PURE__*/ jsx_runtime_.jsx((TimelineConnector_default()), {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TimelineContent_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle2",
                                children: item.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                sx: {
                                    color: "text.disabled",
                                    typography: "caption",
                                    mt: 0.5
                                },
                                children: (0,format_time/* fDateTime */.zM)(item.time)
                            })
                        ]
                    })
                ]
            }, item.title);
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "History"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                spacing: 3,
                alignItems: {
                    md: "flex-start"
                },
                direction: {
                    xs: "column-reverse",
                    md: "row"
                },
                sx: {
                    p: 3
                },
                children: [
                    renderTimeline,
                    renderSummary
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/order/view/order-details-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui



// routes

// _mock

// components

//




function OrderDetailsView({ id }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const currentOrder = _mock/* _orders */._Q.filter((order)=>order.id === id)[0];
    const [status, setStatus] = (0,react_.useState)(currentOrder.status);
    const handleChangeStatus = (0,react_.useCallback)((newValue)=>{
        setStatus(newValue);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: settings.themeStretch ? false : "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(OrderDetailsToolbar, {
                backLink: paths/* paths */.H.dashboard.order.root,
                orderNumber: currentOrder.orderNumber,
                createdAt: currentOrder.createdAt,
                status: status,
                onChangeStatus: handleChangeStatus,
                statusOptions: _mock/* ORDER_STATUS_OPTIONS */.s8
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Unstable_Grid2_default()), {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        xs: 12,
                        md: 8,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            spacing: 3,
                            direction: {
                                xs: "column-reverse",
                                md: "column"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(OrderDetailsItems, {
                                    items: currentOrder.items,
                                    taxes: currentOrder.taxes,
                                    shipping: currentOrder.shipping,
                                    discount: currentOrder.discount,
                                    subTotal: currentOrder.subTotal,
                                    totalAmount: currentOrder.totalAmount
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(OrderDetailsHistory, {
                                    history: currentOrder.history
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid2_default()), {
                        xs: 12,
                        md: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(OrderDetailsInfo, {
                            customer: currentOrder.customer,
                            delivery: currentOrder.delivery,
                            payment: currentOrder.payment,
                            shippingAddress: currentOrder.shippingAddress
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 61360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OrderListView)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tabs/index.js
var Tabs = __webpack_require__(87726);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs);
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
// EXTERNAL MODULE: ./src/_mock/index.ts + 9 modules
var _mock = __webpack_require__(99011);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
// EXTERNAL MODULE: ./src/hooks/use-boolean.ts
var use_boolean = __webpack_require__(80935);
// EXTERNAL MODULE: ./src/components/label/index.ts + 2 modules
var label = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(76505);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(65026);
// EXTERNAL MODULE: ./src/components/custom-dialog/index.ts + 1 modules
var custom_dialog = __webpack_require__(78254);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(2701);
// EXTERNAL MODULE: ./src/components/custom-breadcrumbs/index.ts + 2 modules
var custom_breadcrumbs = __webpack_require__(80640);
// EXTERNAL MODULE: ./src/components/table/index.ts + 8 modules
var components_table = __webpack_require__(48974);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 3 modules
var format = __webpack_require__(63864);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Avatar/index.js
var Avatar = __webpack_require__(95843);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Collapse/index.js
var Collapse = __webpack_require__(31022);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse);
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
// EXTERNAL MODULE: ./src/utils/format-number.ts
var format_number = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/components/custom-popover/index.ts + 4 modules
var custom_popover = __webpack_require__(99310);
;// CONCATENATED MODULE: ./src/sections/order/order-table-row.tsx


// @mui












// hooks

// utils

// components




function OrderTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
    const { items, status, orderNumber, createdAt, customer, totalQuantity, subTotal } = row;
    const confirm = (0,use_boolean/* useBoolean */.k)();
    const collapse = (0,use_boolean/* useBoolean */.k)();
    const popover = (0,custom_popover/* usePopover */.S)();
    const renderPrimary = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
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
            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                    onClick: onViewRow,
                    sx: {
                        cursor: "pointer",
                        "&:hover": {
                            textDecoration: "underline"
                        }
                    },
                    children: orderNumber
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        alt: customer.name,
                        src: customer.avatarUrl,
                        sx: {
                            mr: 2
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                        primary: customer.name,
                        secondary: customer.email,
                        primaryTypographyProps: {
                            typography: "body2"
                        },
                        secondaryTypographyProps: {
                            component: "span",
                            color: "text.disabled"
                        }
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
                align: "center",
                children: [
                    " ",
                    totalQuantity,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                children: [
                    " ",
                    (0,format_number/* fCurrency */.e_)(subTotal),
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(label/* default */.Z, {
                    variant: "soft",
                    color: status === "completed" && "success" || status === "pending" && "warning" || status === "cancelled" && "error" || "default",
                    children: status
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableCell_default()), {
                align: "right",
                sx: {
                    px: 1,
                    whiteSpace: "nowrap"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        color: collapse.value ? "inherit" : "default",
                        onClick: collapse.onToggle,
                        sx: {
                            ...collapse.value && {
                                bgcolor: "action.hover"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:arrow-ios-downward-fill"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                        color: popover.open ? "inherit" : "default",
                        onClick: popover.onOpen,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "eva:more-vertical-fill"
                        })
                    })
                ]
            })
        ]
    });
    const renderSecondary = /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
            sx: {
                p: 0,
                border: "none"
            },
            colSpan: 8,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                in: collapse.value,
                timeout: "auto",
                unmountOnExit: true,
                sx: {
                    bgcolor: "background.neutral"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                    component: (Paper_default()),
                    sx: {
                        m: 1.5
                    },
                    children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack["default"], {
                            direction: "row",
                            alignItems: "center",
                            sx: {
                                p: (theme)=>theme.spacing(1.5, 2, 1.5, 1.5),
                                "&:not(:last-of-type)": {
                                    borderBottom: (theme)=>`solid 2px ${theme.palette.background.neutral}`
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    src: item.coverUrl,
                                    variant: "rounded",
                                    sx: {
                                        width: 48,
                                        height: 48,
                                        mr: 2
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    primary: item.name,
                                    secondary: item.sku,
                                    primaryTypographyProps: {
                                        typography: "body2"
                                    },
                                    secondaryTypographyProps: {
                                        component: "span",
                                        color: "text.disabled",
                                        mt: 0.5
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box["default"], {
                                    children: [
                                        "x",
                                        item.quantity
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                                    sx: {
                                        width: 110,
                                        textAlign: "right"
                                    },
                                    children: (0,format_number/* fCurrency */.e_)(item.price)
                                })
                            ]
                        }, item.id))
                })
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            renderPrimary,
            renderSecondary,
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
                    }),
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

// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DatePicker/index.js
var DatePicker = __webpack_require__(71026);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputAdornment/index.js
var InputAdornment = __webpack_require__(3683);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment);
;// CONCATENATED MODULE: ./src/sections/order/order-table-toolbar.tsx


// @mui







// components


function OrderTableToolbar({ filters, onFilters, //
canReset, onResetFilters }) {
    const popover = (0,custom_popover/* usePopover */.S)();
    const handleFilterName = (0,react_.useCallback)((event)=>{
        onFilters("name", event.target.value);
    }, [
        onFilters
    ]);
    const handleFilterStartDate = (0,react_.useCallback)((newValue)=>{
        onFilters("startDate", newValue);
    }, [
        onFilters
    ]);
    const handleFilterEndDate = (0,react_.useCallback)((newValue)=>{
        onFilters("endDate", newValue);
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
                    /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "Start date",
                        value: filters.startDate,
                        onChange: handleFilterStartDate,
                        slotProps: {
                            textField: {
                                fullWidth: true
                            }
                        },
                        sx: {
                            maxWidth: {
                                md: 200
                            }
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                        label: "End date",
                        value: filters.endDate,
                        onChange: handleFilterEndDate,
                        slotProps: {
                            textField: {
                                fullWidth: true
                            }
                        },
                        sx: {
                            maxWidth: {
                                md: 200
                            }
                        }
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
                                placeholder: "Search customer or order number...",
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
                    }),
                    canReset && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        color: "error",
                        sx: {
                            flexShrink: 0
                        },
                        onClick: onResetFilters,
                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:trash-bin-trash-bold"
                        }),
                        children: "Clear"
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
// EXTERNAL MODULE: ./src/components/custom-date-range-picker/index.ts + 3 modules
var custom_date_range_picker = __webpack_require__(93662);
;// CONCATENATED MODULE: ./src/sections/order/order-table-filters-result.tsx
// @mui






// components


function OrderTableFiltersResult({ filters, onFilters, //
onResetFilters, //
results, ...other }) {
    const shortLabel = (0,custom_date_range_picker/* shortDateLabel */.l2)(filters.startDate, filters.endDate);
    const handleRemoveStatus = ()=>{
        onFilters("status", "all");
    };
    const handleRemoveDate = ()=>{
        onFilters("startDate", null);
        onFilters("endDate", null);
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
                    filters.status !== "all" && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Status:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: filters.status,
                            onDelete: handleRemoveStatus
                        })
                    }),
                    filters.startDate && filters.endDate && /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        label: "Date:",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                            size: "small",
                            label: shortLabel,
                            onDelete: handleRemoveDate
                        })
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

;// CONCATENATED MODULE: ./src/sections/order/view/order-list-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// @mui











// routes


// _mock

// utils

// hooks

// components







//



// ----------------------------------------------------------------------
const STATUS_OPTIONS = [
    {
        value: "all",
        label: "All"
    },
    ..._mock/* ORDER_STATUS_OPTIONS */.s8
];
const TABLE_HEAD = [
    {
        id: "orderNumber",
        label: "Order",
        width: 116
    },
    {
        id: "name",
        label: "Customer"
    },
    {
        id: "createdAt",
        label: "Date",
        width: 140
    },
    {
        id: "totalQuantity",
        label: "Items",
        width: 120,
        align: "center"
    },
    {
        id: "totalAmount",
        label: "Price",
        width: 140
    },
    {
        id: "status",
        label: "Status",
        width: 110
    },
    {
        id: "",
        width: 88
    }
];
const defaultFilters = {
    name: "",
    status: "all",
    startDate: null,
    endDate: null
};
// ----------------------------------------------------------------------
function OrderListView() {
    const table = (0,components_table/* useTable */.x6)({
        defaultOrderBy: "orderNumber"
    });
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const router = (0,hooks/* useRouter */.tv)();
    const confirm = (0,use_boolean/* useBoolean */.k)();
    const [tableData, setTableData] = (0,react_.useState)(_mock/* _orders */._Q);
    const [filters, setFilters] = (0,react_.useState)(defaultFilters);
    const dateError = filters.startDate && filters.endDate ? filters.startDate.getTime() > filters.endDate.getTime() : false;
    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: (0,components_table/* getComparator */.sQ)(table.order, table.orderBy),
        filters,
        dateError
    });
    const dataInPage = dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage);
    const denseHeight = table.dense ? 52 : 72;
    const canReset = !!filters.name || filters.status !== "all" || !!filters.startDate && !!filters.endDate;
    const notFound = !dataFiltered.length && canReset || !dataFiltered.length;
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
    const handleResetFilters = (0,react_.useCallback)(()=>{
        setFilters(defaultFilters);
    }, []);
    const handleViewRow = (0,react_.useCallback)((id)=>{
        router.push(paths/* paths */.H.dashboard.order.details(id));
    }, [
        router
    ]);
    const handleFilterStatus = (0,react_.useCallback)((event, newValue)=>{
        handleFilters("status", newValue);
    }, [
        handleFilters
    ]);
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
                                name: "Order",
                                href: paths/* paths */.H.dashboard.order.root
                            },
                            {
                                name: "List"
                            }
                        ],
                        sx: {
                            mb: {
                                xs: 3,
                                md: 5
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                                value: filters.status,
                                onChange: handleFilterStatus,
                                sx: {
                                    px: 2.5,
                                    boxShadow: (theme)=>`inset 0 -2px 0 0 ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
                                },
                                children: STATUS_OPTIONS.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                        iconPosition: "end",
                                        value: tab.value,
                                        label: tab.label,
                                        icon: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(label/* default */.Z, {
                                            variant: (tab.value === "all" || tab.value === filters.status) && "filled" || "soft",
                                            color: tab.value === "completed" && "success" || tab.value === "pending" && "warning" || tab.value === "cancelled" && "error" || "default",
                                            children: [
                                                tab.value === "all" && _mock/* _orders */._Q.length,
                                                tab.value === "completed" && _mock/* _orders */._Q.filter((order)=>order.status === "completed").length,
                                                tab.value === "pending" && _mock/* _orders */._Q.filter((order)=>order.status === "pending").length,
                                                tab.value === "cancelled" && _mock/* _orders */._Q.filter((order)=>order.status === "cancelled").length,
                                                tab.value === "refunded" && _mock/* _orders */._Q.filter((order)=>order.status === "refunded").length
                                            ]
                                        })
                                    }, tab.value))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(OrderTableToolbar, {
                                filters: filters,
                                onFilters: handleFilters,
                                //
                                canReset: canReset,
                                onResetFilters: handleResetFilters
                            }),
                            canReset && /*#__PURE__*/ jsx_runtime_.jsx(OrderTableFiltersResult, {
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
                                                        dataFiltered.slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage).map((row)=>/*#__PURE__*/ jsx_runtime_.jsx(OrderTableRow, {
                                                                row: row,
                                                                selected: table.selected.includes(row.id),
                                                                onSelectRow: ()=>table.onSelectRow(row.id),
                                                                onDeleteRow: ()=>handleDeleteRow(row.id),
                                                                onViewRow: ()=>handleViewRow(row.id)
                                                            }, row.id)),
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
function applyFilter({ inputData, comparator, filters, dateError }) {
    const { status, name, startDate, endDate } = filters;
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
        inputData = inputData.filter((order)=>order.orderNumber.toLowerCase().indexOf(name.toLowerCase()) !== -1 || order.customer.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 || order.customer.email.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
    if (status !== "all") {
        inputData = inputData.filter((order)=>order.status === status);
    }
    if (!dateError) {
        if (startDate && endDate) {
            inputData = inputData.filter((order)=>(0,format_time/* fTimestamp */.IO)(order.createdAt) >= (0,format_time/* fTimestamp */.IO)(startDate) && (0,format_time/* fTimestamp */.IO)(order.createdAt) <= (0,format_time/* fTimestamp */.IO)(endDate));
        }
    }
    return inputData;
}


/***/ }),

/***/ 9856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 82842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* reexport */ order_details_view),
  C: () => (/* reexport */ order_list_view)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/sections/order/view/order-list-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/order/view/order-list-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const order_list_view = (__default__);
;// CONCATENATED MODULE: ./src/sections/order/view/order-details-view.tsx

const order_details_view_proxy = (0,module_proxy.createProxy)(String.raw`/Users/xperia/Workspace/budgeting_fe-main/src/sections/order/view/order-details-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: order_details_view_esModule, $$typeof: order_details_view_$$typeof } = order_details_view_proxy;
const order_details_view_default_ = order_details_view_proxy.default;


/* harmony default export */ const order_details_view = (order_details_view_default_);
;// CONCATENATED MODULE: ./src/sections/order/view/index.ts




/***/ })

};
;