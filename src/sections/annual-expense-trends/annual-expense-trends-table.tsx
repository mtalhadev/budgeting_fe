// @mui
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import Iconify from 'src/components/iconify';

// components
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

function createData(
  id: string,
  Expense: string,
  January: number,
  February: number,
  March: number,
  April: number,
  May: number,
  June: number,
  July: number,
  August: number,
  September: number,
  October: number,
  November: number,
  December: number,
  Total: number,
  Trend: string
) {
  return {
    id,
    Expense,
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
    Total,
    Trend,
  };
}

const TABLE_DATA = [
  createData('1', 'Car#1', 2000.00, 6000.00, 6000.00, 6000.00, 6000.00, 6000.00, 6000.00, 6000.00, 6000.00, 6000.00, 6000.00, 6000.00, 72000.00, 'Trend'),
  createData('2', 'Car#2', 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 1000.00, 12000.00, 'Trend'),
  createData('3', 'Utility', 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 2000.00, 24000.00, 'Trend'),
];

const TABLE_HEAD = [
  { id: 'No', label: 'No' },
  { id: 'Expense', label: 'Expense' },
  { id: 'January', label: 'January' },
  { id: 'February', label: 'February' },
  { id: 'March', label: 'March' },
  { id: 'April', label: 'April' },
  { id: 'Total', label: 'Total', align: 'center' },
  { id: 'Trend', label: 'Trend', align: 'center' },
];

// ----------------------------------------------------------------------

export default function AnnualExpenseTrendsTable() {
  return (
    <TableContainer sx={{ mt: 3, overflow: 'unset' }}>
      <Scrollbar>
        <Table sx={{ minWidth: 200, width: '100%' }}>
          <TableHeadCustom headLabel={TABLE_HEAD} />

          <TableBody>
            {TABLE_DATA.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.Expense}</TableCell>
                <TableCell>{row.January}</TableCell>
                <TableCell>{row.February}</TableCell>
                <TableCell>{row.March}</TableCell>
                <TableCell>{row.April}</TableCell>
                <TableCell>{row.Total}</TableCell>                
                <TableCell>{row.Trend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </TableContainer>
  );
}
