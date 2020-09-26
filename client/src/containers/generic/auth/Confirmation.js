import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  IconButton,
  Typography,
  FormGroup,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ConfirmCodeInput from '../../../components/generic/ConfirmCodeInput';
import AuthContainer from '../../../components/generic/AuthContainer';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  helperText: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  confirmCode: {
    marginTop: theme.spacing(4),
  },
  buttonGroup: {
    marginTop: theme.spacing(4),
  },
  outlinedButton: {
    borderRadius: 30,
    fontSize: 'x-small',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  doneButton: {
    marginTop: theme.spacing(4),
    width: '60%',
  },
}));

function Confirmation(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <AuthContainer width={400} height={340}>
      <Typography variant="h6">Confirmation</Typography>
      <Typography variant="body2" className={classes.helperText}>
        Please enter the 4-digit code you received via text message
      </Typography>

      <FormGroup className={classes.form}>
        <ConfirmCodeInput className={classes.confirmCode} />
        <Box className={classes.buttonGroup}>
          <Button variant="outlined" className={classes.outlinedButton}>
            Resend to +1 919-414-4977
          </Button>
          <Button
            variant="outlined"
            className={classes.outlinedButton}
            onClick={() => history.push('/change-number')}
          >
            Change Phone Number
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.doneButton}
          onClick={() => history.push('/signup-form')}
        >
          Done
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

export default Confirmation;
