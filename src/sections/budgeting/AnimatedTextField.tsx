import React, { useMemo } from 'react';

// @mui
import TextField from '@mui/material/TextField';

import { AnimatedTextFieldProps } from './types';

function AnimatedTextField({ show, onChange, value }: AnimatedTextFieldProps, ref: React.Ref<any> | undefined) {
  // console.log('show', show);
  const style = useMemo(
    () => ({
      opacity: show ? 1 : 0,
      transform: show ? 'none' : 'translateY(120px) translateZ(0px)',
      transition: 'all 0.5s ease-in-out',
      display: show ? 'block' : 'none',
    }),
    [show]
  );

  const key = show ? 'visible' : 'hidden';
  // console.log('key', key);

  return (
    <TextField
      key={key}
      sx={style}
      label="New Expense"
      name="newExpenseTxt"
      onChange={onChange}
      value={value}
      fullWidth
      inputRef={ref}
    />
  );
}

export default React.forwardRef(AnimatedTextField);
