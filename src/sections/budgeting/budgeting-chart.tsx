import { useState } from 'react';

// @mui
// import { Box, BarChart, Bar, ThemeProvider } from '@mui/material';
// import { Box, BarChart, Bar, ThemeProvider } from '@mui/material';
import { Box } from '@mui/material';

// components
// import { useTheme } from '@emotion/react';
// import Chart, { StyledChart, useChart } from 'src/components/chart';
import Chart from 'src/components/chart';


// ----------------------------------------------------------------------

export default function BudgetingChart() {

  const [chartData] = useState({
    options: {
      chart: {
        type: 'bar' as const
      },
      plotOptions: {
        bar: {
          horizontal: false
        }  
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
    },
    series: [
      {
        name: 'Monthly Expenses',
        data: [3000, 400, 450, 5000, 490, 2500, 3400, 640, 690, 210, 970, 190] 
      }
    ]
  });

  return (
      <Box sx={{ width: '100%' }}>
        <Chart options={chartData.options} series={chartData.series} type="bar" />
      </Box>
  );
}
