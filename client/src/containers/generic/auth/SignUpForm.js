import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  IconButton,
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Link,
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
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formControl: {
    marginTop: theme.spacing(1),
  },
  phoneNumber: {
    marginTop: theme.spacing(2),
  },
  showPassword: {
    position: 'absolute',
    right: 0,
    top: theme.spacing(2),
    color: theme.palette.text.primary,
    fontWeight: 'lighter',
    fontSize: 12,
  },
  terms: {
    display: 'flex',
    marginTop: theme.spacing(3),
    justifyContent: 'center',
  },
  termsLink: {
    marginLeft: theme.spacing(1),
  },
  createAccount: {
    marginTop: theme.spacing(2),
    width: 250,
    alignSelf: 'center',
  },
}));

function SignUpForm(props) {
  const { history } = props;
  const classes = useStyles();

  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  return (
    <AuthContainer width={400} height={500}>
      <Typography variant="h6">Sign Up Form</Typography>

      <FormGroup className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="email" shrink>
            Email
          </InputLabel>
          <Input
            id="email"
            type="email"
            color="secondary"
            disableUnderline
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="first-name" shrink>
            First Name
          </InputLabel>
          <Input
            id="first-name"
            type="text"
            color="secondary"
            disableUnderline
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="last-name" shrink>
            Last Name
          </InputLabel>
          <Input
            id="last-name"
            type="text"
            color="secondary"
            disableUnderline
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="phone-number" shrink>
            Phone Number
          </InputLabel>
          <PhoneNumberInput id="phone-number" className={classes.phoneNumber} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="password" shrink>
            Password
          </InputLabel>
          <Input
            id="password"
            type={`${passwordShow ? 'text' : 'password'}`}
            color="secondary"
            disableUnderline
            required
          />
          <Button
            className={classes.showPassword}
            variant="text"
            color="primary"
            onClick={() => setPasswordShow(!passwordShow)}
          >
            {passwordShow ? 'Hide' : 'Show'}
          </Button>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="confirm-password" shrink>
            Confirm Password
          </InputLabel>
          <Input
            id="confirm-password"
            type={`${confirmPasswordShow ? 'text' : 'password'}`}
            color="secondary"
            disableUnderline
            required
          />
          <Button
            className={classes.showPassword}
            variant="text"
            color="primary"
            onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
          >
            {confirmPasswordShow ? 'Hide' : 'Show'}
          </Button>
        </FormControl>
        <Box className={classes.terms}>
          <Typography variant="body2">
            By clicking below, you agree to our
          </Typography>
          <Link className={classes.termsLink} variant="body2">
            Terms & Conditions
          </Link>
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.createAccount}
        >
          Create an Account
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

export default SignUpForm;
