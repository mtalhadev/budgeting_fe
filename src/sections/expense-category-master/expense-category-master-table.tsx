import React, { useState, useCallback, useMemo, useReducer, useEffect } from 'react';
import axios from 'axios';

// @mui
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// components
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------
import { ListState, ListAction, ExpenseCategory } from './types';

const TABLE_HEAD = [
  { id: 'category', label: 'Category' },
  // { id: 'edit', label: 'Edit', align: 'center' },
  { id: 'delete', label: 'Delete', align: 'center' },
];

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

interface ExpenseCategoryMasterTableProps {
  categories: ExpenseCategory[];
}
// ----------------------------------------------------------------------

export default function ExpenseCategoryMasterForm({ categories }: ExpenseCategoryMasterTableProps) {
  const [open, setOpen] = useState(false);
  const [deleteExpenseCategory, setDeleteExpenseCategory] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    if (categories) {
      dispatch({ type: 'FETCH_CATEGORIES_REQUEST' });
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/expense-category`)
        .then((res) => {
          dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_CATEGORIES_FAILURE', payload: err.message });
        });
    }
  }, [categories]);

  const editRow = (category: string): void => {
    console.log('category', category);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    setDeleteExpenseCategory(deleteExpenseCategory);
    // console.log('deleteExpenseCategory: ', deleteExpenseCategory);

    dispatch({ type: 'DELETE_CATEGORY_REQUEST', payload: deleteExpenseCategory });

    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/expense-category/${deleteExpenseCategory}`)
      .then((res) => {
        dispatch({
          type: 'DELETE_CATEGORY_SUCCESS',
          payload: deleteExpenseCategory,
        });
        setOpenSuccess(true);
      })
      .catch((err) => {
        dispatch({
          type: 'DELETE_CATEGORY_FAILURE',
          payload: err.message,
        });
        setOpenError(true);
      });
  };

  const deleteRow = (category: string): void => {
    // console.log('category: ', category);
    setOpen(true);
    setDeleteExpenseCategory(category);
  };

  const initialListState: ListState = {
    loading: false,
    categories: [],
    error: null,
  };

  const listReducer = (state: ListState, action: ListAction) => {
    switch (action.type) {
      case 'FETCH_CATEGORIES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_CATEGORIES_SUCCESS':
        return {
          ...state,
          loading: false,
          categories: action.payload,
          error: null,
        };
      case 'FETCH_CATEGORIES_FAILURE':
        return {
          ...state,
          loading: false,
          categories: [],
          error: action.payload,
        };

      case 'DELETE_CATEGORY_REQUEST':
        return { ...state, loading: true };

      case 'DELETE_CATEGORY_SUCCESS':
        return {
          ...state,
          loading: false,
          categories: state.categories.filter((c) => c._id !== action.payload),
        };

      case 'DELETE_CATEGORY_FAILURE':
        return { ...state, loading: false, error: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(listReducer, initialListState);

  const handleSnackBarClose = () => {
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <>
      <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
        <Scrollbar>
          <Table sx={{ minWidth: 200 }}>
            <TableHeadCustom headLabel={TABLE_HEAD} />

            <TableBody>
              {state.categories.map((category) => (
                <TableRow key={category._id}>
                  <TableCell>{category.expenseCategory}</TableCell>
                  <TableCell>{category.color}</TableCell>
                  {/* <TableCell align="right" onClick={() => editRow(category._id)}>
                    {' '}
                    <Iconify
                      icon="eva:edit-outline"
                      sx={{ borderRadius: 0.65, width: 28 }}
                      style={{ cursor: 'pointer' }}
                    />
                  </TableCell> */}
                  <TableCell align="right" onClick={() => deleteRow(category._id)}>
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
