"use strict";
exports.id = 8974;
exports.ids = [8974];
exports.modules = {

/***/ 48974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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











/***/ })

};
;