export interface ExpenseCategoryForm {
  expenseCategory: string;
  color: string;
  submitting: boolean;
}

export interface AnimatedTextFieldProps {
  show: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface FormState {
  submitting: boolean;
  submitError?: string;
}

export type FormAction =
  | { type: 'SUBMIT' }
  | { type: 'SUCCESS' }
  | {
      values: FormState;
      type: 'RESET';
    }
  | { type: 'ERROR'; error: string };

export interface ListState {
  loading: boolean;
  categories: ExpenseCategory[];
  error: string | null;
}

export interface ExpenseCategory {
  _id: string;
  expenseCategory: string;
  color: string;
}

// List Action types
interface FetchCategoriesRequestAction {
  type: 'FETCH_CATEGORIES_REQUEST';
}

interface FetchCategoriesSuccessAction {
  type: 'FETCH_CATEGORIES_SUCCESS';
  payload: ExpenseCategory[];
}

interface FetchCategoriesFailureAction {
  type: 'FETCH_CATEGORIES_FAILURE';
  payload: string;
}

// Delete Action types
interface DeleteCategoryRequestAction {
  type: 'DELETE_CATEGORY_REQUEST';
  payload: string; // category ID
}

interface DeleteCategorySuccessAction {
  type: 'DELETE_CATEGORY_SUCCESS';
  payload: string; // deleted category ID
}

interface DeleteCategoryFailureAction {
  type: 'DELETE_CATEGORY_FAILURE';
  payload: string; // error message
}

// List Reducer type
export type ListAction =
  | FetchCategoriesRequestAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailureAction
  | DeleteCategoryRequestAction
  | DeleteCategorySuccessAction
  | DeleteCategoryFailureAction;
