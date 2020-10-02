import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Typography,
  Input,
  IconButton,
  Dialog,
  LinearProgress,
  Card,
  Link,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  dialog: {
    maxHeight: 'none',
  },
  container: {
    textAlign: 'center',
    padding: theme.spacing(6),
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(2),
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  helpText: {
    marginTop: theme.spacing(4),
  },
  progressBar: {
    marginTop: theme.spacing(4),
    height: 20,
    borderRadius: 20,
    '& div': {
      borderRadius: 20,
    },
  },
  infoCardGroup: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  infoCard: {
    borderRadius: 10,
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  infoTitle: {
    marginTop: theme.spacing(2),
  },
  infoNumber: {
    color: theme.palette.text.main,
    fontWeight: 'bold',
    fontSize: 'xx-large',
  },
  notifiyText: {
    textAlign: 'left',
    marginTop: theme.spacing(4),
  },
  notifyBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  notifyInput: {
    width: '45%',
  },
  notifyButton: {
    width: '45%',
  },
  toLogin: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  loginLink: {
    marginTop: -theme.spacing(0.5),
    marginLeft: theme.spacing(2),
  },
  lastBox: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
  },
  lastText: {
    paddingTop: theme.spacing(1.5),
  },
}));

function WaitListDialog(props) {
  const { open, onClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      className={classes.dialog}
    >
      <Box className={classes.container}>
        <img
          src="/assets/images/logo.png"
          alt="online shopping"
          className={classes.logo}
        />
        <Typography variant="h5" className={classes.title}>
          You're now in the queue
        </Typography>
        <Typography
          // variant="h6"
          className={classes.subtitle}
        >
          OK. Now you are in the queue. Please plan to arrive before 5 minutes
          estimated time.
        </Typography>
        <Typography variant="body2" className={classes.helpText}>
          Lorem ipsum dolor sit amet, consetetur. Lorem ipsum dolor sit amet,
          consetetur.Lorem ipsum dolor sit amet, consetetur.Lorem ipsum dolor
          sit amet, consetetur.Lorem ipsum dolor sit amet, consetetur.vvLorem
          ipsum dolor sit amet, consetetur.vLorem ipsum dolor
        </Typography>
        <LinearProgress
          variant="buffer"
          className={classes.progressBar}
          value={70}
          valueBuffer={100}
        />
        <Box className={classes.infoCardGroup}>
          <Card className={classes.infoCard}>
            <Typography variant="body2" className={classes.infoTitle}>
              Number in line:
            </Typography>
            <Typography className={classes.infoNumber}>123</Typography>
          </Card>
          <Card className={classes.infoCard}>
            <Typography variant="body2" className={classes.infoTitle}>
              Estimated wait:
            </Typography>
            <Typography className={classes.infoNumber}>30</Typography>
            <Typography variant="body2">minutes</Typography>
          </Card>
        </Box>
        <Typography variant="body2" className={classes.notifiyText}>
          You can be notified via SMS.
        </Typography>
        <Box className={classes.notifyBox}>
          <Input
            className={classes.notifyInput}
            type="email"
            color="secondary"
            placeholder="Enter email address"
            disableUnderline
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.notifyButton}
          >
            Notify Me
          </Button>
        </Box>
        <Box className={classes.toLogin}>
          <Typography variant="body2">Already registered?</Typography>
          <RouterLink to="/login" className={classes.loginLink}>
            <Link component="button" underline="hover">
              Log in
            </Link>
          </RouterLink>
        </Box>
        <Box className={classes.lastBox}>
          <Typography variant="body2" className={classes.lastText}>
            Last updated: 10:23 am
          </Typography>
          <Button variant="text" color="primary">
            Leave the line
          </Button>
        </Box>
      </Box>

      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
}

export default WaitListDialog;
