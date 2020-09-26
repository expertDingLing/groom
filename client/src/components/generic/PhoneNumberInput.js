import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiPhoneNumber from 'material-ui-phone-number';

const useStyles = makeStyles({
  muiPhoneNumber: {
    '& .MuiInput-root': {
      '&:before, &:after': {
        display: 'none',
      },
    },
  },
});

function PhoneNumberInput(props) {
  const classes = useStyles();

  return (
    <MuiPhoneNumber
      {...props}
      className={`${classes.muiPhoneNumber} ${props.className}`}
      defaultCountry={'us'}
      color="secondary"
    />
  );
}

export default PhoneNumberInput;
