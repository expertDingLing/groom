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
  Avatar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AuthContainer from '../../../components/generic/AuthContainer';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  avatar: {
    marginTop: theme.spacing(4),
    width: 100,
    height: 100,
  },
  email: {
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(2),
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
  toAnotherAccount: {
    display: 'flex',
    marginTop: theme.spacing(3),
    justifyContent: 'center',
  },
  anotherAccount: {
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(1),
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}));

function SignIn(props) {
  const { history } = props;
  const classes = useStyles();

  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <AuthContainer width={400} height={450}>
      <Typography variant="h6">Welcome back, Mathew</Typography>

      <Avatar
        className={classes.avatar}
        src="../../assets/images/user-3.png"
        alt="avatar"
      />
      <Typography className={classes.email} variant="body2">
        ***@notishop.com
      </Typography>

      <FormGroup className={classes.form}>
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
          onClick={() => history.push('/provider/home')}
        >
          Login
        </Button>
        <RouterLink className={classes.forgotPassword} to="/forgot-password">
          Forgot password?
        </RouterLink>
        <Box className={classes.toAnotherAccount}>
          <Typography variant="body2">Not you?</Typography>
          <RouterLink className={classes.anotherAccount} to="/another-account">
            Use Another Account
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

export default SignIn;
