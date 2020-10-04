import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Tabs,
  Tab,
  Button,
  IconButton,
  Typography,
  FormGroup,
  Link,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PhoneNumberInput from '../../../components/generic/PhoneNumberInput';
import AuthContainer from '../../../components/generic/AuthContainer';
import { TabPanel, a11yProps } from '../../../components/generic/TabPanel';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  tabs: {
    marginTop: theme.spacing(4),
  },
  phoneNumber: {
    marginTop: theme.spacing(2),
    '& input': {
      height: 25,
    },
  },
  continueButton: {
    marginTop: theme.spacing(1),
    height: 40,
  },
  signupWith: {
    display: 'flex',
    marginTop: theme.spacing(2),
    height: 40,
    textAlign: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    background: theme.palette.text.primary,
    marginTop: 13,
    marginLeft: 5,
    marginRight: 5,
  },
  continueWithEmail: {
    marginTop: theme.spacing(1),
    height: 40,
    color: '#999999',
  },
  signupWithFacebook: {
    marginTop: theme.spacing(1),
    height: 40,
    color: 'white',
    background: '#5F79D1',
    '&:hover': {
      background: '#7f93da',
    },
  },
  signupWithGoogle: {
    marginTop: theme.spacing(1),
    height: 40,
    color: '#999999',
    '& img': {
      width: 20,
      marginRight: theme.spacing(1),
    },
  },
  helpText: {
    marginTop: theme.spacing(3),
    color: '#707070',
  },
  toLogin: {
    display: 'flex',
    marginTop: theme.spacing(3),
    justifyContent: 'center',
    '& button': {
      marginTop: -theme.spacing(0.5),
      marginLeft: theme.spacing(2),
    },
  },
}));

function SignUp(props) {
  const { history } = props;
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <AuthContainer width={455} height={510}>
      <Typography variant="h6">Welcome to Groom</Typography>

      <Tabs
        className={classes.tabs}
        value={tabIndex}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        color="primary"
        textColor="primary"
      >
        <Tab label="Sign Up as a Customer" {...a11yProps(0)} />
        <Tab label="Sign Up as a Service Provider" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <FormGroup className={classes.form}>
          <PhoneNumberInput className={classes.phoneNumber} />
          <Button
            variant="contained"
            className={classes.continueButton}
            onClick={() => history.push('/confirmation')}
            color="primary"
          >
            Continue
          </Button>
          <Box className={classes.signupWith}>
            <Box className={classes.divider}></Box>
            <Typography>Or Sign Up with</Typography>
            <Box className={classes.divider}></Box>
          </Box>
          <Button variant="outlined" className={classes.continueWithEmail}>
            Continue with Email
          </Button>
          <Button variant="contained" className={classes.signupWithFacebook}>
            Sign Up with Facebook
          </Button>
          <Button variant="outlined" className={classes.signupWithGoogle}>
            <img src="/assets/images/icon-google.png" alt="google icon" />
            Sign Up with Google
          </Button>
          <Typography variant="body2" className={classes.helpText}>
            By creating an account you agree to our Terms of Use and Privacy
            Policy.
          </Typography>
          <Box className={classes.toLogin}>
            <Typography variant="body2">Already have an account?</Typography>
            <RouterLink to="/login">
              <Link component="button" underline="hover">
                Log in
              </Link>
            </RouterLink>
          </Box>
        </FormGroup>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <FormGroup className={classes.form}>
          <PhoneNumberInput className={classes.phoneNumber} />
          <Button
            variant="contained"
            color="primary"
            className={classes.continueButton}
            onClick={() => history.push('/confirmation')}
          >
            Continue
          </Button>
          <Box className={classes.signupWith}>
            <Box className={classes.divider}></Box>
            <Typography>Or Sign Up with</Typography>
            <Box className={classes.divider}></Box>
          </Box>
          <Button variant="outlined" className={classes.continueWithEmail}>
            Continue with Email
          </Button>
          <Button variant="contained" className={classes.signupWithFacebook}>
            Sign Up with Facebook
          </Button>
          <Button variant="outlined" className={classes.signupWithGoogle}>
            <img src="/assets/images/icon-google.png" alt="google icon" />
            Sign Up with Google
          </Button>
          <Typography variant="body2" className={classes.helpText}>
            By creating an account you agree to our Terms of Use and Privacy
            Policy.
          </Typography>
          <Box className={classes.toLogin}>
            <Typography variant="body2">Already have an account?</Typography>
            <RouterLink to="/login">
              <Link component="button" underline="hover">
                Log in
              </Link>
            </RouterLink>
          </Box>
        </FormGroup>
      </TabPanel>

      <IconButton
        className={classes.closeButton}
        onClick={() => history.push('/')}
      >
        <CloseIcon />
      </IconButton>
    </AuthContainer>
  );
}

export default SignUp;
