'use client';

import { m } from 'framer-motion';

import { useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import { Collapse, Divider, IconButton, Typography } from '@mui/material';
import { varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// import BudgetingHero from '../expense-category-master-hero';
import BudgetingChart from '../budgeting-chart';
import BudgetingForm from '../budgeting-form';
import BudgetingTotalsTable from '../budgeting-totals-table';
import BudgetingListTable from '../budgeting-list-table';
import { Expense, ExpenseTotal } from '../types';

// ----------------------------------------------------------------------

export default function BudgetingView() {
  const [expandedBudgettingGraph, setExpandedBudgettingGraph] = useState(false);
  const [expandedBudgettingTotals, setExpandedBudgettingTotals] = useState(false);
  const [expandedBudgettingList, setExpandedBudgettingList] = useState(false);

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseTotals, setExpenseTotals] = useState<ExpenseTotal[]>([]);

  return (
    <>
      {/* <BudgetingHero /> */}

      <Container sx={{ py: 10 }}>
        <Box
          gap={5}
          // display="grid"
          display="flex"
          flexDirection="column"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="h3">Budget</Typography>
            <Typography variant="h5">To Save More Each Year</Typography>
          </m.div>

          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 1 }}>
              Graph View
            </Typography>

            <IconButton onClick={() => setExpandedBudgettingGraph(!expandedBudgettingGraph)}>
              <Iconify
                icon={expandedBudgettingGraph ? 'eva:arrow-up-fill' : 'eva:arrow-down-fill'}
                width={24}
              />
            </IconButton>
          </Box>
          <Collapse in={expandedBudgettingGraph}>
            <Box
              sx={{
                padding: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <BudgetingChart />
            </Box>
          </Collapse>

          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 1 }}>
              Table View
            </Typography>

            <IconButton onClick={() => setExpandedBudgettingTotals(!expandedBudgettingTotals)}>
              <Iconify
                icon={expandedBudgettingTotals ? 'eva:arrow-up-fill' : 'eva:arrow-down-fill'}
                width={24}
              />
            </IconButton>
          </Box>
          <Collapse in={expandedBudgettingTotals}>
            <Box
              sx={{
                padding: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <BudgetingTotalsTable expenseTotals={expenseTotals}/>
            </Box>
          </Collapse>

          <Divider />
          <BudgetingForm setExpenses={setExpenses}/>

          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mr: 1 }}>
              Entered Expenses List
            </Typography>

            <IconButton onClick={() => setExpandedBudgettingList(!expandedBudgettingList)}>
              <Iconify
                icon={expandedBudgettingList ? 'eva:arrow-up-fill' : 'eva:arrow-down-fill'}
                width={24}
              />
            </IconButton>
          </Box>
          <Collapse in={expandedBudgettingList}>
            <Box
              sx={{
                padding: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <BudgetingListTable expenses={expenses}/>
            </Box>
          </Collapse>
        </Box>
      </Container>
    </>
  );
}
