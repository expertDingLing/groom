import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  IconButton,
  Typography,
  FormGroup,
  Link,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ConfirmCodeInput from '../../../components/generic/ConfirmCodeInput';
import AuthContainer from '../../../components/generic/AuthContainer';

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 10,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    width: 400,
    height: 380,
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  number: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
  newNumber: {
    marginRight: theme.spacing(1),
  },
  change: {
    marginTop: -theme.spacing(0.25),
  },
  helperText: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  confirmCode: {
    marginTop: theme.spacing(4),
  },
  verifyButton: {
    marginTop: theme.spacing(4),
    height: 40,
    width: '80%',
  },
  resendButton: {
    marginTop: theme.spacing(2),
    height: 40,
    width: '80%',
    color: '#999999',
  },
}));

function Confirmation(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <AuthContainer width={400} height={380}>
      <Typography variant="h6">Verify mobile number</Typography>
      <Box className={classes.number}>
        <Typography variant="body2" className={classes.newNumber}>
          +1 343-674-191
        </Typography>
        <Typography variant="body2">(</Typography>
        <RouterLink className={classes.change} to="/change-number">
          <Link component="button" underline="none">
            Change
          </Link>
        </RouterLink>
        <Typography variant="body2">)</Typography>
      </Box>
      <Typography variant="body2" className={classes.helperText}>
        Please enter the 4-digit code you received via text message
      </Typography>

      <FormGroup className={classes.form}>
        <ConfirmCodeInput className={classes.confirmCode} />
        <Button
          variant="contained"
          className={classes.verifyButton}
          onClick={() => history.push('/signup-form')}
          color="primary"
        >
          Verify
        </Button>
        <Button variant="outlined" className={classes.resendButton}>
          Resend Code
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
