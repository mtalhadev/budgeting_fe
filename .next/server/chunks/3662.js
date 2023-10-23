"use strict";
exports.id = 3662;
exports.ids = [3662];
exports.modules = {

/***/ 93662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* reexport */ CustomDateRangePicker),
  l2: () => (/* reexport */ shortDateLabel),
  wE: () => (/* reexport */ useDateRangePicker)
});

// EXTERNAL MODULE: ./node_modules/date-fns/esm/isSameDay/index.js
var isSameDay = __webpack_require__(2002);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/isSameMonth/index.js
var isSameMonth = __webpack_require__(1408);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/getYear/index.js
var getYear = __webpack_require__(22786);
// EXTERNAL MODULE: ./src/utils/format-time.ts
var format_time = __webpack_require__(94871);
;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/utils.ts



// utils

// ----------------------------------------------------------------------
function shortDateLabel(startDate, endDate) {
    const getCurrentYear = new Date().getFullYear();
    const startDateYear = startDate ? (0,getYear["default"])(startDate) : null;
    const endDateYear = endDate ? (0,getYear["default"])(endDate) : null;
    const currentYear = getCurrentYear === startDateYear && getCurrentYear === endDateYear;
    const sameDay = startDate && endDate ? (0,isSameDay["default"])(new Date(startDate), new Date(endDate)) : false;
    const sameMonth = startDate && endDate ? (0,isSameMonth["default"])(new Date(startDate), new Date(endDate)) : false;
    if (currentYear) {
        if (sameMonth) {
            if (sameDay) {
                return (0,format_time/* fDate */.Mu)(endDate, "dd MMM yy");
            }
            return `${(0,format_time/* fDate */.Mu)(startDate, "dd")} - ${(0,format_time/* fDate */.Mu)(endDate, "dd MMM yy")}`;
        }
        return `${(0,format_time/* fDate */.Mu)(startDate, "dd MMM")} - ${(0,format_time/* fDate */.Mu)(endDate, "dd MMM yy")}`;
    }
    return `${(0,format_time/* fDate */.Mu)(startDate, "dd MMM yy")} - ${(0,format_time/* fDate */.Mu)(endDate, "dd MMM yy")}`;
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/use-date-range-picker.ts

// utils

//

function useDateRangePicker(start, end) {
    const [open, setOpen] = (0,react_.useState)(false);
    const [endDate, setEndDate] = (0,react_.useState)(end);
    const [startDate, setStartDate] = (0,react_.useState)(start);
    const error = start && end ? new Date(start).getTime() > new Date(end).getTime() : false;
    const onOpen = (0,react_.useCallback)(()=>{
        setOpen(true);
    }, []);
    const onClose = (0,react_.useCallback)(()=>{
        setOpen(false);
    }, []);
    const onChangeStartDate = (0,react_.useCallback)((newValue)=>{
        setStartDate(newValue);
    }, []);
    const onChangeEndDate = (0,react_.useCallback)((newValue)=>{
        if (error) {
            setEndDate(null);
        }
        setEndDate(newValue);
    }, [
        error
    ]);
    const onReset = (0,react_.useCallback)(()=>{
        setStartDate(null);
        setEndDate(null);
    }, []);
    return {
        startDate,
        endDate,
        onChangeStartDate,
        onChangeEndDate,
        //
        open,
        onOpen,
        onClose,
        onReset,
        //
        selected: !!startDate && !!endDate,
        error,
        //
        label: `${(0,format_time/* fDate */.Mu)(startDate)} - ${(0,format_time/* fDate */.Mu)(endDate)}`,
        shortLabel: shortDateLabel(startDate, endDate),
        //
        setStartDate,
        setEndDate
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DatePicker/index.js
var DatePicker = __webpack_require__(71026);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/node/DateCalendar/index.js
var DateCalendar = __webpack_require__(32194);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(16854);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormHelperText/index.js
var FormHelperText = __webpack_require__(34550);
var FormHelperText_default = /*#__PURE__*/__webpack_require__.n(FormHelperText);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(59099);
;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/custom-date-range-picker.tsx
// @mui











// hooks

// ----------------------------------------------------------------------
function CustomDateRangePicker({ title = "Select date range", variant = "input", //
startDate, endDate, //
onChangeStartDate, onChangeEndDate, //
open, onClose, //
error }) {
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const isCalendarView = variant === "calendar";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
        fullWidth: true,
        maxWidth: isCalendarView ? false : "xs",
        open: open,
        onClose: onClose,
        PaperProps: {
            sx: {
                ...isCalendarView && {
                    maxWidth: 720
                }
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                sx: {
                    pb: 2
                },
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                sx: {
                    ...isCalendarView && mdUp && {
                        overflow: "unset"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Stack["default"], {
                        justifyContent: "center",
                        spacing: isCalendarView ? 3 : 2,
                        direction: isCalendarView && mdUp ? "row" : "column",
                        sx: {
                            pt: 1
                        },
                        children: isCalendarView ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                                    variant: "outlined",
                                    sx: {
                                        borderRadius: 2,
                                        borderColor: "divider",
                                        borderStyle: "dashed"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DateCalendar.DateCalendar, {
                                        value: startDate,
                                        onChange: onChangeStartDate
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                                    variant: "outlined",
                                    sx: {
                                        borderRadius: 2,
                                        borderColor: "divider",
                                        borderStyle: "dashed"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DateCalendar.DateCalendar, {
                                        value: endDate,
                                        onChange: onChangeEndDate
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                                    label: "Start date",
                                    value: startDate,
                                    onChange: onChangeStartDate
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(DatePicker/* DatePicker */.Mt, {
                                    label: "End date",
                                    value: endDate,
                                    onChange: onChangeEndDate
                                })
                            ]
                        })
                    }),
                    error && /*#__PURE__*/ jsx_runtime_.jsx((FormHelperText_default()), {
                        error: true,
                        sx: {
                            px: 2
                        },
                        children: "End date must be later than start date"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "outlined",
                        color: "inherit",
                        onClick: onClose,
                        children: "Cancel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        disabled: error,
                        variant: "contained",
                        onClick: onClose,
                        children: "Apply"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/custom-date-range-picker/index.ts






/***/ })

};
;