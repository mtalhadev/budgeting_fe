'use client';

// import { useState } from 'react';
import { m } from 'framer-motion';

// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MotionViewport, varFade } from 'src/components/animate';
// import AnnualExpenseTrendsHero from '../annual-expense-trends-hero';
import AnnualExpenseTrendsTable from '../annual-expense-trends-table';

// components

// ----------------------------------------------------------------------

export default function AnnualExpenseTrendsView() {
  return (
    <>
      {/* <AnnualExpenseTrendsHero /> */}

      <Container sx={{ py: 10 }}>
        <Box
          gap={10}
          display="grid"
          sx={{ width: '100%' }}
          // gridTemplateColumns={{
          //   xs: 'repeat(1, 1fr)',
          //   md: 'repeat(2, 1fr)',
          // }}
        >
          <Stack component={MotionViewport} spacing={5}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">Annual Expense Trends</Typography>
            </m.div>
            <AnnualExpenseTrendsTable />
          </Stack>
        </Box>
      </Container>
    </>
  );
}
