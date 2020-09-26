import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Typography,
  List,
  ListItem,
  Avatar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AuthContainer from '../../../components/generic/AuthContainer';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(2),
  },
  backButton: {
    position: 'absolute',
    top: theme.spacing(3),
    left: theme.spacing(2),
  },
  accountList: {
    marginTop: theme.spacing(3),
    '& p': {
      paddingLeft: theme.spacing(2),
    },
  },
  addIcon: {
    fontSize: 'xxx-large',
    color: '#0090FF',
  },
  addButton: {
    padding: 0,
  },
}));

function AnotherAccount(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <AuthContainer width={400} height={400}>
      <Typography variant="h6">Karllie MCMullen</Typography>
      <Typography color="primary" variant="body2">
        Signed into Groom as
      </Typography>

      <List className={classes.accountList}>
        <ListItem>
          <IconButton onClick={() => history.push('signin')} size="small">
            <Avatar src="/assets/images/user-4.png" alt="avatar" />
          </IconButton>
          <Typography>example@gmail.com</Typography>
        </ListItem>
        <ListItem>
          <IconButton className={classes.addButton}>
            <AddCircleIcon className={classes.addIcon} />
          </IconButton>
          <Typography>Add Account</Typography>
        </ListItem>
      </List>

      <IconButton
        className={classes.backButton}
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>

      <IconButton
        className={classes.closeButton}
        onClick={() => history.push('/')}
      >
        <CloseIcon />
      </IconButton>
    </AuthContainer>
  );
}

export default AnotherAccount;
