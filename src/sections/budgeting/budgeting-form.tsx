import { m } from 'framer-motion';
import React, { useState, useCallback, useReducer, useEffect, useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';

// components
import { MotionViewport, varFade } from 'src/components/animate';
import {
  BudgetForm,
  FormState,
  FormAction,
  CategoriesListState,
  DDLListAction,
  Expense,
} from './types';
import AnimatedTextField from './AnimatedTextField';

// ----------------------------------------------------------------------
const validationSchema = Yup.object().shape({
  // commented otherwise gives errors when add new expenses
  // expense: Yup.string()
  //   .required('Required')
  //   .min(3, 'Enter at least 3 characters')
  //   .max(100, 'Enter at least 100 characters'),
  amount: Yup.number().required('Required').min(1, 'Amount must be greater than 0'),
});

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentMonth = months[new Date().getMonth()];

const initialFormValues: BudgetForm = {
  expense: '',
  amount: 0,
  recurring: false,
  recurringType: '',
  month: '',
  details: '',
  userId: 'admin',
};

const initialFormState: FormState = {
  submitting: false,
  submitError: null,
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SUBMIT':
      return { submitting: true };
    case 'SUCCESS':
      return { submitting: false };
    case 'RESET':
      return { ...action.values, submitting: false, submitError: undefined };
    case 'ERROR':
      return { ...state, submitting: false, submitError: action.error };
    default:
      return state;
  }
};

interface BudgetingFormProps {
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

export default function BudgetingForm({ setExpenses }: BudgetingFormProps) {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showNewExpenseField, setShowNewExpenseField] = useState(false);
  const [newExpense, setNewExpense] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [recurring, setRecurring] = useState(false);
  const [recurringType, setRecurringType] = useState('Monthly');

  const newExpenseTextBoxRef = useRef<HTMLInputElement>(null);

  const [budgetFormState, dispatch] = useReducer(formReducer, initialFormState);

  const handleMonthChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(event.target.value);
  }, []);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecurringType(event.target.value);
  };

  const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);

    if (event.target.value === 'add-new') {
      setShowNewExpenseField(true);
    } else {
      setShowNewExpenseField(false);
    }
  }, []);

  const handleNewExpenseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewExpense(event.target.value);
  };

  const handleRecurringChange = () => {
    setRecurring(!recurring);
  };

  const closeMainMessage = () => {
    setSuccessMessage(null);
  };

  const handleFormSubmit = async (values: BudgetForm) => {
    // event.preventDefault();

    // console.log('values before:', values);
    // console.log('newExpenseTextBoxRef :', newExpenseTextBoxRef);

    if (values.expense === 'add-new') {
      if (newExpenseTextBoxRef.current) {
        values.expense = newExpenseTextBoxRef.current.value;
      }
    }

    values.month = selectedMonth;
    values.recurring = recurring;
    values.recurringType = recurringType;

    // console.log('values after:', values);

    dispatch({ type: 'SUBMIT' });

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/expense`, values);
      setSuccessMessage('Form submitted successfully.');
      dispatch({ type: 'SUCCESS' });
      dispatch({
        type: 'RESET',
        values: initialFormValues,
        // values: initialFormState,
      });

      // After a successful submission, fetch the updated categories and pass them to the parent
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/expense`)
        .then((res) => {
          setExpenses(res.data);
        })
        .catch((err) => {
          console.error('Error fetching categories:', err);
        });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error.message });
    }
  };

  const initialCategoriesListState: CategoriesListState = {
    loading: false,
    categories: [],
    error: null,
  };

  const ddlPopulateReducer = (state: CategoriesListState, action: DDLListAction) => {
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
      default:
        return state;
    }
  };

  const [ddlState, ddlDispatch] = useReducer(ddlPopulateReducer, initialCategoriesListState);

  useEffect(() => {
    ddlDispatch({ type: 'FETCH_CATEGORIES_REQUEST' });
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/expense-category`)
      .then((res) => {
        ddlDispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        ddlDispatch({ type: 'FETCH_CATEGORIES_FAILURE', payload: err.message });
      });
  }, []);

  return (
    <Box
      gap={10}
      sx={{
        width: {
          xs: '100%',
          sm: '100%',
          md: '50%',
          lg: '40%',
        },
      }}
    >
      {successMessage && (
        <Alert onClose={closeMainMessage} severity="success">
          {successMessage}
        </Alert>
      )}

      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormValues}
        // onSubmit={(values) => handleFormSubmit(values)}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm();
        }}
      >
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          handleSubmit,
          setFieldTouched,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack component={MotionViewport} spacing={5}>
              <Stack spacing={3}>
                <m.div variants={varFade().inUp}>
                  <TextField
                    select
                    fullWidth
                    label="Expense"
                    margin="normal"
                    variant="outlined"
                    value={selectedCategory}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(event);
                      handleCategoryChange(event);
                    }}
                    id="expense"
                    name="expense"
                    onBlur={handleBlur('expense')}
                    error={touched.expense && Boolean(errors.expense)}
                    helperText={touched.expense && errors.expense}
                  >
                    {ddlState.categories.map((category) => (
                      <MenuItem key={category._id} value={category.expenseCategory}>
                        {category.expenseCategory}
                      </MenuItem>
                    ))}
                    <MenuItem value="add-new">Add New +</MenuItem>
                  </TextField>
                </m.div>

                <m.div variants={varFade().inUp}>
                  <AnimatedTextField
                    show={showNewExpenseField}
                    onChange={handleNewExpenseChange}
                    value={newExpense}
                    ref={newExpenseTextBoxRef}
                  />
                </m.div>

                <m.div variants={varFade().inUp}>
                  <TextField
                    sx={{ input: { textAlign: 'right' } }}
                    type="number"
                    label="Amount"
                    id="amount"
                    name="amount"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange('amount')}
                    value={values.amount}
                    onBlur={handleBlur('amount')}
                    error={touched.amount && Boolean(errors.amount)}
                    helperText={touched.amount && errors.amount}
                    onFocus={(event) => {
                      event.target.select();
                    }}
                  />
                </m.div>

                <m.div variants={varFade().inUp}>
                  Recurring?
                  <Switch
                    color="primary"
                    checked={recurring}
                    onChange={handleRecurringChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    name="recurring"
                  />
                </m.div>

                {!recurring ? (
                  <m.div variants={varFade().inUp}>
                    <TextField
                      sx={{ width: 150 }}
                      select
                      label="Month"
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      name="month"
                    >
                      <MenuItem value="January">January</MenuItem>
                      <MenuItem value="February">February</MenuItem>
                      <MenuItem value="March">March</MenuItem>
                      <MenuItem value="April">April</MenuItem>
                      <MenuItem value="May">May</MenuItem>
                      <MenuItem value="June">June</MenuItem>
                      <MenuItem value="July">July</MenuItem>
                      <MenuItem value="August">August</MenuItem>
                      <MenuItem value="September">September</MenuItem>
                      <MenuItem value="October">October</MenuItem>
                      <MenuItem value="November">November</MenuItem>
                      <MenuItem value="December">December</MenuItem>
                    </TextField>
                  </m.div>
                ) : (
                  <m.div variants={varFade().inUp}>
                    <RadioGroup value={recurringType} onChange={handleRadioChange}>
                      <FormControlLabel value="Monthly" control={<Radio />} label="Monthly" />
                      <FormControlLabel value="Quarterly" control={<Radio />} label="Quarterly" />
                      <FormControlLabel value="Annually" control={<Radio />} label="Annually" />
                    </RadioGroup>
                  </m.div>
                )}
                <m.div variants={varFade().inUp}>
                  <TextField
                    fullWidth
                    label="Additional Details"
                    multiline
                    rows={4}
                    name="details"
                    onChange={handleChange('details')}
                    value={values.details}
                    onBlur={handleBlur('details')}
                  />
                </m.div>
              </Stack>

              <m.div variants={varFade().inUp}>
                <Button size="large" variant="contained" type="submit" sx={{ mr: 2 }}>
                  Submit
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  type="button"
                  onClick={() => {
                    resetForm();
                  }}
                  sx={{ mr: 2 }}
                >
                  Clear
                </Button>
              </m.div>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
}
