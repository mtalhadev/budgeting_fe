export interface BudgetForm {
  expense: string;
  amount: number;
  recurring: boolean;
  recurringType: string;
  month: string;
  details: string;
  userId: string;
}

export interface AnimatedTextFieldProps {
  show: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface FormState {
  submitting: boolean;
  submitError?: string | null;
  initialFormValues?: {};
}

export type FormAction =
  | { type: 'SUBMIT' }
  | { type: 'SUCCESS' }
  | {
      type: 'RESET';
      // values: FormState;
      values: BudgetForm
    }
  | { type: 'ERROR'; error: string };

export interface CategoriesListState {
  loading: boolean;
  categories: Expense[];
  error: string | null;
}

export interface Expense {
  _id: string;
  expenseCategory: string;
  color: string;
}

export interface ListExpense {
  _id: string;
  expense: string;
  amount: number;
  recurring: boolean;
  recurringType: string;
  month: string;
  details: string;
}

// export interface ExpenseTotal {
//   expense: string;
//   total: number;
//   totals: [];
// }
export interface ExpenseTotal {
  expense: string;
  total: number;
  totals: { month: string; total: number }[];
}

export interface ListTotal {
  expense: string;
  total: number;
}

// List Action types
interface FetchCategoriesRequestAction {
  type: 'FETCH_CATEGORIES_REQUEST';
}

interface FetchCategoriesSuccessAction {
  type: 'FETCH_CATEGORIES_SUCCESS';
  payload: Expense[];
}

interface FetchCategoriesFailureAction {
  type: 'FETCH_CATEGORIES_FAILURE';
  payload: string;
}

// List Reducer type
export type DDLListAction =
  | FetchCategoriesRequestAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailureAction;

// List Action types
interface FetchExpensesRequestAction {
  type: 'FETCH_EXPENSES_REQUEST';
}

interface FetchExpensesSuccessAction {
  type: 'FETCH_EXPENSES_SUCCESS';
  payload: ListExpense[];
}

interface FetchExpensesFailureAction {
  type: 'FETCH_EXPENSES_FAILURE';
  payload: string;
}

// Delete Action types
interface DeleteExpenseRequestAction {
  type: 'DELETE_EXPENSE_REQUEST';
  payload: string; // Expense ID
}

interface DeleteExpenseSuccessAction {
  type: 'DELETE_EXPENSE_SUCCESS';
  payload: string; // deleted Expense ID
}

interface DeleteExpenseFailureAction {
  type: 'DELETE_EXPENSE_FAILURE';
  payload: string; // error message
}

export interface ListState {
  loading: boolean;
  expenses: ListExpense[];
  error: string | null;
}

export interface ListTotalsState {
  loading: boolean;
  // expenseTotals: ListTotal[];
  expenseTotals: ExpenseTotal[];
  error: string | null;
}

// List Reducer type
export type ListAction =
  | FetchExpensesRequestAction
  | FetchExpensesSuccessAction
  | FetchExpensesFailureAction
  | DeleteExpenseRequestAction
  | DeleteExpenseSuccessAction
  | DeleteExpenseFailureAction;

// List Totals Action types
interface FetchExpenseTotalsRequestAction {
  type: 'FETCH_EXPENSE_TOTALS_REQUEST';
}

interface FetchExpenseTotalsSuccessAction {
  type: 'FETCH_EXPENSE_TOTALS_SUCCESS';
  payload: ExpenseTotal[];
}

interface FetchExpenseTotalsFailureAction {
  type: 'FETCH_EXPENSE_TOTALS_FAILURE';
  payload: string;
}

// List Reducer type
export type ListTotalsAction =
  | FetchExpenseTotalsRequestAction
  | FetchExpenseTotalsSuccessAction
  | FetchExpenseTotalsFailureAction