import React, { useState, useReducer, useEffect } from 'react';
import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { TextField, Button } from '@mui/material';

// components
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { MotionViewport, varFade } from 'src/components/animate';
import { ColorPreview, ColorPicker } from 'src/components/color-utils';

import { ExpenseCategoryForm, FormState, FormAction, ExpenseCategory } from './types';

// ----------------------------------------------------------------------
// 30 colors
const colors = [
  '#00AB55',
  '#1890FF',
  '#54D62C',
  '#FFC107',
  '#FF4842',
  '#04297A',
  '#7A0C2E',
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#00A76F',
  '#8E33FF',
  '#00B8D9',
  '#22C55E',
  '#FFAB00',
  '#FF5630',
  '#78070A',
  '#5119B7',
  '#cc66ff',
  '#666633',
  '#333366',
  '#66ffff',
  '#66ff8c',
  '#ff66ff',
  '#ff6666',
  '#71c8f4',
  '#002233',
  '#C684FF',
  '#065E49',
  '#B71D18',
];

const initialFormValues: ExpenseCategoryForm = {
  expenseCategory: '',
  color: '',
  submitting: false,
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SUBMIT':
      return { submitting: true };
    case 'SUCCESS':
      return { submitting: false };
    case 'RESET':
      return action.values;
    case 'ERROR':
      return { submitting: false, submitError: action.error };
    default:
      return state;
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

interface ExpenseCategoryMasterFormProps {
  setCategories: React.Dispatch<React.SetStateAction<ExpenseCategory[]>>;
}

export default function ExpenseCategoryMasterForm({
  setCategories,
}: ExpenseCategoryMasterFormProps) {
  const [selectedColor, setSelectedColor] = useState('#00AB55');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [formState, dispatch] = useReducer(formReducer, initialFormValues);

  const handleFormSubmit = async (values: ExpenseCategoryForm) => {
    // event.preventDefault();
    values.color = selectedColor;
    // console.log('values', values);

    dispatch({ type: 'SUBMIT' });

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/expense-category`, values);
      dispatch({ type: 'SUCCESS' });
      dispatch({
        type: 'RESET',
        values: initialFormValues,
      });

      setOpenSuccess(true);

      // After a successful submission, fetch the updated categories and pass them to the parent
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/expense-category`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => {
          console.error('Error fetching categories:', err);
        });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error.message });
      setOpenError(true);
    }
  };

  const validationSchema = Yup.object().shape({
    expenseCategory: Yup.string()
      .required('Required')
      .min(3, 'Enter at least 3 characters')
      .max(100, 'Enter at least 100 characters'),
    color: Yup.string()
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .when('selectedColor', (selectedColor, schema) => {
        if (!selectedColor) {
          return schema.required('Required');
        }
        return schema;
      })
      .min(3, 'Enter at least 3 characters')
      .max(20, 'Enter at least 100 characters'),
  });

  const handleSelectColor = (color: any) => {
    setSelectedColor((prevState) => {
      // Return new state value
      return color;

      // Access prev state if needed
      console.log('prev', prevState);
    });

    // console.log('prev selectedColor', selectedColor);
    // console.log('color', color);
    // console.log('selectedColor', selectedColor);
  };

  const handleSnackBarClose = () => {
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <>
      <Stack component={MotionViewport} spacing={5}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h3">Create Expense Category</Typography>
        </m.div>

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
              <Stack spacing={3}>
                <m.div variants={varFade().inUp}>
                  <TextField
                    label="Expense Category"
                    name="expenseCategory"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange('expenseCategory')}
                    style={{ width: '100%', zIndex: 0 }}
                    value={values.expenseCategory}
                    onBlur={handleBlur('expenseCategory')}
                    error={touched.expenseCategory && Boolean(errors.expenseCategory)}
                    helperText={touched.expenseCategory && errors.expenseCategory}
                  />

                  {/* {errors.expenseCategory && touched.expenseCategory ? (
                    <ErrorMessage name="expenseCategory">
                      {(errorMessage: string) => <div style={{ color: 'red' }}>{errorMessage}</div>}
                    </ErrorMessage>
                  ) : null} */}
                </m.div>

                <m.div variants={varFade().inUp}>
                  <ColorPreview colors={colors} />

                  <ColorPicker
                    colors={colors}
                    selected={selectedColor}
                    onSelectColor={handleSelectColor}
                    // onSelectColor={(color: string) => {
                    //   setSelectedColor(color);
                    // }}
                    id="color"
                    // name="color"
                  />
                  {errors.color && touched.color ? (
                    <ErrorMessage name="color">
                      {(errorMessage: string) => <div style={{ color: 'red' }}>{errorMessage}</div>}
                    </ErrorMessage>
                  ) : null}
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
            </form>
          )}
        </Formik>
      </Stack>

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
