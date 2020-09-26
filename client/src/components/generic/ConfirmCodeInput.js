import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactCodeInput from 'react-verification-code-input';

const useStyles = makeStyles((theme) => ({
  codeInput: {
    '& div': {
      display: 'flex',
      justifyContent: 'center',
    },
    '& input': {
      margin: theme.spacing(1),
      border: '1px solid #a8adb7 !important',
      borderRadius: 5,
      '&:focus': {
        borderColor: '#299494 !important',
        caretColor: theme.palette.primary.main,
      },
    },
  },
}));

function ConfirmCodeInput(props) {
  const classes = useStyles();

  return (
    <ReactCodeInput
      {...props}
      className={`${classes.codeInput} ${props.className}`}
      type="number"
      fields={4}
    />
  );
}

export default ConfirmCodeInput;
