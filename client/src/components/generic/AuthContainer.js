import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    borderRadius: 10,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
}));

function AuthContainer(props) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Paper
        className={classes.paper}
        style={{ width: props.width, height: props.height }}
      >
        {props.children}
      </Paper>
    </Box>
  );
}

export default AuthContainer;
