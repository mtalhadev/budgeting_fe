'use client';

import { useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { ExpenseCategory } from '../types';

// import ExpenseCategoryMasterHero from '../expense-category-master-hero';
import ExpenseCategoryMasterForm from '../expense-category-master-form';
import ExpenseCategoryMasterTable from '../expense-category-master-table';
// ----------------------------------------------------------------------

export default function ExpenseCategoryMasterView() {
  const [categories, setCategories] = useState<ExpenseCategory[]>([]);

  return (
    <Container sx={{ py: 10 }}>
      <Box
        gap={10}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        <ExpenseCategoryMasterForm setCategories={setCategories} />
        <ExpenseCategoryMasterTable categories={categories} />
      </Box>
    </Container>
  );
}
