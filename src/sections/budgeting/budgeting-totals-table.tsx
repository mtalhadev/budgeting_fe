import React, { useState, useCallback, useMemo, useReducer, useEffect } from 'react';
import axios from 'axios';

// @mui
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Iconify from 'src/components/iconify';

// components
// import Scrollbar from 'src/components/scrollbar';
// import { TableHeadCustom } from 'src/components/table';

import { ListTotalsState, ListTotalsAction, ExpenseTotal } from './types';
// ----------------------------------------------------------------------

// const expenseTotals = [
//   {
//     totals: [
//       {
//         month: 'January',
//         total: 44,
//       },
//       {
//         month: 'February',
//         total: 66,
//       },
//     ],
//     total: 110,
//     expense: 'rrrr',
//   },
//   {
//     totals: [
//       {
//         month: 'January',
//         total: 55,
//       },
//     ],
//     total: 55,
//     expense: 'uuuuu',
//   },
// ];

const tableHead = [
  { id: 'Expense', label: 'Expense' },
  { id: 'January', label: 'January' },
  { id: 'February', label: 'February' },
  { id: 'March', label: 'March' },
  { id: 'April', label: 'April' },
  { id: 'May', label: 'May' },
  { id: 'June', label: 'June' },
  { id: 'July', label: 'July' },
  { id: 'August', label: 'August' },
  { id: 'September', label: 'September' },
  { id: 'October', label: 'October' },
  { id: 'November', label: 'November' },
  { id: 'December', label: 'December' },
  { id: 'Total', label: 'Total' },
  { id: 'Trend', label: 'Trend' },
];

interface MonthTotal {
  month: string;
  total: number;
}

interface ExpenseData {
  totals: MonthTotal[];
  total: number;
  expense: string;
}

interface TableRowItem {
  Expense: string;
  Total: number;
  [key: string]: number | string;
}

const generateRows = (data: ExpenseData[]): TableRowItem[] => {
  const rows: TableRowItem[] = [];
  data.forEach((item) => {
    const row: TableRowItem = {
      Expense: item.expense,
      Total: item.total,
    };
    item.totals.forEach((month: MonthTotal) => {
      row[month.month] = month.total;
    });
    rows.push(row);
  });
  return rows;
};

const calculateColumnTotals = (rows: TableRowItem[]): TableRowItem => {
  const totals: TableRowItem = {
    Expense: '',
    Total: 0,
  };

  tableHead.forEach((column) => {
    totals[column.id] = 0;
  });

  rows.forEach((row) => {
    tableHead.forEach((column) => {
      const cellValue = row[column.id];
      if (!Number.isNaN(cellValue)) {
        if (typeof totals[column.id] === 'number') {
          // totals[column.id] += parseFloat(cellValue.toString());
          totals[column.id] =
            parseFloat(totals[column.id].toString()) + parseFloat(cellValue.toString());
        } else {
          totals[column.id] = parseFloat(cellValue.toString());
        }
      }
    });
  });

  return totals;
};

interface BudgetingTotalsTableProps {
  expenseTotals: ExpenseTotal[];
}
// ----------------------------------------------------------------------

export default function BudgetingTotalsTable({ expenseTotals }: BudgetingTotalsTableProps) {
  const rows = generateRows(expenseTotals);
  const tableTotals = calculateColumnTotals(rows);

  useEffect(() => {
    if (expenseTotals) {
      const user_id = 'admin';

      dispatch({ type: 'FETCH_EXPENSE_TOTALS_REQUEST' });
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/expense/table-view/${user_id}`)
        .then((res) => {
          dispatch({ type: 'FETCH_EXPENSE_TOTALS_SUCCESS', payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_EXPENSE_TOTALS_FAILURE', payload: err.message });
        });
    }
  }, [expenseTotals]);

  // const test_payload = [
  //   {
  //     totals: [
  //       {
  //         month: 'January',
  //         total: 44,
  //       },
  //       {
  //         month: 'February',
  //         total: 66,
  //       },
  //     ],
  //     total: 110,
  //     expense: 'rrrr',
  //   },
  //   {
  //     totals: [
  //       {
  //         month: 'January',
  //         total: 55,
  //       },
  //     ],
  //     total: 55,
  //     expense: 'uuuuu',
  //   },
  // ];

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_EXPENSE_TOTALS_SUCCESS', payload: test_payload });
  // }, []);

  const initialListTotalsState: ListTotalsState = {
    loading: false,
    expenseTotals: [],
    error: null,
  };

  const listTotalsReducer = (state: ListTotalsState, action: ListTotalsAction) => {
    switch (action.type) {
      case 'FETCH_EXPENSE_TOTALS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_EXPENSE_TOTALS_SUCCESS':
        return {
          ...state,
          loading: false,
          expenseTotals: action.payload,
          error: null,
        };
      case 'FETCH_EXPENSE_TOTALS_FAILURE':
        return {
          ...state,
          loading: false,
          expenseTotals: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(listTotalsReducer, initialListTotalsState);

  const formatCurrency = (amount: number) => amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {tableHead.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {state.expenseTotals.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.expense}</TableCell>
              {tableHead.slice(1, -2).map((column) => {
                const monthTotal = row.totals.find((total) => total.month === column.label);
                const cellValue = monthTotal ? formatCurrency(monthTotal.total) : '0.00';
                return <TableCell key={column.id}>{cellValue}</TableCell>;
              })}
              <TableCell>{formatCurrency(row.total)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                borderRight: '1px solid #F1F3F4',
                fontWeight: 'bold',
              }}
            >
              Totals:
            </TableCell>
            {tableHead.slice(1, -2).map((column) => {
              const totalForMonth = state.expenseTotals.reduce((acc, row) => {
                const monthTotal = row.totals.find((total) => total.month === column.label);
                return acc + (monthTotal ? monthTotal.total : 0);
              }, 0);
              return (
                <TableCell
                  key={column.id}
                  sx={{
                    borderRight: '1px solid #F1F3F4',
                    fontWeight: 'bold',
                  }}
                >
                  {formatCurrency(totalForMonth)}
                </TableCell>
              );
            })}
            <TableCell
              sx={{
                borderRight: '1px solid #F1F3F4',
                fontWeight: 'bold',
              }}
            >
              {formatCurrency(state.expenseTotals.reduce((acc, row) => acc + row.total, 0))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
