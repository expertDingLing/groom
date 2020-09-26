import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  Typography,
  FormGroup,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PhoneNumberInput from '../../../components/generic/PhoneNumberInput';
import AuthContainer from '../../../components/generic/AuthContainer';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  helperText: {
    marginTop: theme.spacing(2),
  },
  oldNumber: {
    marginTop: theme.spacing(2),
  },
  form: {
    width: '80%',
  },
  phoneNumber: {
    marginTop: theme.spacing(6),
    '& input': {
      height: 25,
    },
  },
  continueButton: {
    marginTop: theme.spacing(4),
    height: 40,
  },
  cancelButton: {
    marginTop: theme.spacing(2),
    height: 40,
    color: '#999999',
  },
}));

function ChangeNumber(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <AuthContainer width={400} height={340}>
      <Typography variant="h6">Change Mobile Phone Number</Typography>
      <Typography variant="body2" className={classes.helperText}>
        Old mobile phone number
      </Typography>
      <Typography variant="body2" className={classes.oldNumber}>
        +1 919-414-4977
      </Typography>
      <FormGroup className={classes.form}>
        <PhoneNumberInput className={classes.phoneNumber} />
        <Button
          variant="contained"
          className={classes.continueButton}
          onClick={() => history.push('/verify-number')}
          color="primary"
        >
          Continue
        </Button>
        <Button
          variant="outlined"
          className={classes.cancelButton}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
      </FormGroup>

      <IconButton
        className={classes.closeButton}
        onClick={() => history.push('/')}
      >
        <CloseIcon />
      </IconButton>
    </AuthContainer>
  );
}

export default ChangeNumber;
