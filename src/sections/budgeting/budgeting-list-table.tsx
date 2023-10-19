import React, { useState, useCallback, useMemo, useReducer, useEffect } from 'react';
import axios from 'axios';

// @mui
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Collapse, Divider, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';

// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// components
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------
import { ListState, ListAction, Expense, ListExpense } from './types';

const TABLE_HEAD = [
  // { id: 'No', label: 'No' },
  // { id: 'Date', label: 'Date Entered' },
  { id: 'Expense', label: 'Expense' },
  { id: 'Amount', label: 'Amount' },
  { id: 'Recurring', label: 'Recurring' },
  { id: 'RecurringType', label: 'RecurringType' },
  { id: 'Month', label: 'Month' },
  { id: 'Details', label: 'Details' },
  { id: 'delete', label: 'Delete', align: 'center' },
];

// ----------------------------------------------------------------------

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

interface BudgetingListTableProps {
  expenses: Expense[];
}

export default function BudgetingListTable({ expenses }: BudgetingListTableProps) {
  const [open, setOpen] = useState(false);
  const [deleteExpense, setDeleteExpense] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    if (expenses) {
      dispatch({ type: 'FETCH_EXPENSES_REQUEST' });
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/expense`)
        .then((res) => {
          dispatch({ type: 'FETCH_EXPENSES_SUCCESS', payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_EXPENSES_FAILURE', payload: err.message });
        });
    }
  }, [expenses]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    setDeleteExpense(deleteExpense);
    // console.log('deleteExpense: ', deleteExpense);

    dispatch({ type: 'DELETE_EXPENSE_REQUEST', payload: deleteExpense });

    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/expense/${deleteExpense}`)
      .then((res) => {
        dispatch({
          type: 'DELETE_EXPENSE_SUCCESS',
          payload: deleteExpense,
        });
        setOpenSuccess(true);
      })
      .catch((err) => {
        dispatch({
          type: 'DELETE_EXPENSE_FAILURE',
          payload: err.message,
        });
        setOpenError(true);
      });
  };

  const deleteRow = (category: string): void => {
    // console.log('category: ', category);
    setOpen(true);
    setDeleteExpense(category);
  };

  const initialListState: ListState = {
    loading: false,
    expenses: [],
    error: null,
  };

  const listReducer = (state: ListState, action: ListAction): ListState => {
    switch (action.type) {
      case 'FETCH_EXPENSES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_EXPENSES_SUCCESS':
        return {
          ...state,
          loading: false,
          expenses: action.payload,
          error: null,
        };
      case 'FETCH_EXPENSES_FAILURE':
        return {
          ...state,
          loading: false,
          expenses: [],
          error: action.payload,
        };

      case 'DELETE_EXPENSE_REQUEST':
        return { ...state, loading: true };

      case 'DELETE_EXPENSE_SUCCESS':
        return {
          ...state,
          loading: false,
          expenses: state.expenses.filter((c) => c._id !== action.payload),
        };

      case 'DELETE_EXPENSE_FAILURE':
        return { ...state, loading: false, error: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(listReducer, initialListState);

  // const [state, dispatch] = useReducer<ListReducer, ListState>(listReducer, initialListState);

  const formatCurrency = (amount: number) => amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  const handleSnackBarClose = () => {
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3, overflow: 'unset' }}>
        <Scrollbar>
          <Table sx={{ minWidth: 200 }}>
            <TableHeadCustom headLabel={TABLE_HEAD} />

            <TableBody>
              {state.expenses.map((expense: ListExpense) => (
                <TableRow key={expense._id}>
                  {/* <TableCell>{row number}</TableCell> */}
                  {/* <TableCell>{expense.Date}</TableCell> */}
                  <TableCell>{expense.expense}</TableCell>
                  <TableCell>{formatCurrency(expense.amount)}</TableCell>
                  <TableCell>{expense.recurring ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{expense.recurring ? expense.recurringType : 'N/A'}</TableCell>
                  <TableCell>{expense.month}</TableCell>
                  <TableCell>{expense.details}</TableCell>
                  <TableCell align="right" onClick={() => deleteRow(expense._id)}>
                    <Iconify
                      icon="eva:trash-2-outline"
                      sx={{ borderRadius: 0.65, width: 28 }}
                      style={{ cursor: 'pointer' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Typography align="right" fontWeight="bold">
          Total:{' '}
          {formatCurrency(
            state.expenses.reduce((sum: number, row: ListExpense) => sum + row.amount, 0)
          )}
        </Typography>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Delete Expense Category</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to Delete the selected Expense Category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleDelete}
            sx={{
              bgcolor: 'red',
              color: 'white',
              '&:hover': {
                bgcolor: 'darkred',
                color: 'white',
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        message="Success!"
      >
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
          Successful!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        message="Error!"
      >
        <Alert onClose={handleSnackBarClose} severity="error" sx={{ width: '100%' }}>
          Error!
        </Alert>
      </Snackbar>
    </>
  );
}
