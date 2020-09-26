import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AuthContainer from '../../../components/generic/AuthContainer';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  content: {
    textAlign: 'justify',
    marginTop: theme.spacing(4),
    width: '80%',
  },
  viaButton: {
    background: '#F4F4F4',
    '&:hover': {
      background: '#eeeeee',
    },
    marginTop: theme.spacing(2),
    width: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  icon: {
    color: '#979797',
  },
  via: {
    textAlign: 'left',
  },
  sendButton: {
    marginTop: theme.spacing(4),
    width: '100%',
  },
}));

function ForgotPassword(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <AuthContainer width={400} height={400}>
      <Typography variant="h6">Forgot Password?</Typography>

      <Box className={classes.content}>
        <Typography variant="body2">
          Please select either the SMS or email associated with your account,
          and we will send you a link to reset your password.
        </Typography>
        <Button className={classes.viaButton}>
          <Box className={classes.via}>
            <Typography variant="body2">Via SMS</Typography>
            <Typography>**** **** 9011</Typography>
          </Box>
          <PhoneAndroidIcon className={classes.icon} />
        </Button>
        <Button className={classes.viaButton}>
          <Box className={classes.via}>
            <Typography variant="body2">Via Email</Typography>
            <Typography>**** el@gmail.com</Typography>
          </Box>
          <EmailOutlinedIcon className={classes.icon} />
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.sendButton}
        >
          Send Reset Link
        </Button>
      </Box>

      <IconButton
        className={classes.closeButton}
        onClick={() => history.push('/')}
      >
        <CloseIcon />
      </IconButton>
    </AuthContainer>
  );
}

export default ForgotPassword;
