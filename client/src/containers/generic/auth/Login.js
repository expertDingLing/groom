import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AuthContainer from '../../../components/generic/AuthContainer';
import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(3),
  },
  formControl: {
    marginTop: theme.spacing(1),
  },
  showPassword: {
    position: 'absolute',
    right: 5,
    top: theme.spacing(2.5),
  },
  eyeIcon: {
    fontSize: 18,
  },
  loginButton: {
    marginTop: theme.spacing(4),
  },
  forgotPassword: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    color: theme.palette.text.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  moreOptions: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    color: theme.palette.text.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  toSignup: {
    display: 'flex',
    marginTop: theme.spacing(3),
    justifyContent: 'center',
    '& button': {
      marginTop: -theme.spacing(0.5),
      marginLeft: theme.spacing(2),
    },
  },
}));

function Login(props) {
  const { history } = props;
  const classes = useStyles();

  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <AuthContainer width={400} height={400}>
      <Typography variant="h6">Login</Typography>

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
          <IconButton
            className={classes.showPassword}
            onClick={() => setPasswordShow(!passwordShow)}
            size="small"
          >
            {passwordShow ? (
              <VisibilityOffIcon className={classes.eyeIcon} />
            ) : (
              <VisibilityIcon className={classes.eyeIcon} />
            )}
          </IconButton>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.loginButton}
          onClick={() => {
            if ($('#email').val() === 'provider'){
              history.push('/provider/home');
            }
            else if($('#email').val() === 'customer'){
              history.push('/customer/home')
            }
          }}
        >
          Login
        </Button>
        <RouterLink className={classes.forgotPassword} to="/forgot-password">
          Forgot password?
        </RouterLink>
        <RouterLink className={classes.moreOptions} to="/another-account">
          More Login options
        </RouterLink>
        <Box className={classes.toSignup}>
          <Typography variant="body2">Don't have an account?</Typography>
          <RouterLink to="/signup">
            <Link component="button" underline="hover">
              Sign Up
            </Link>
          </RouterLink>
        </Box>
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

export default Login;
