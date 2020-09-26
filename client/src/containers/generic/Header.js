import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Navbar from 'reactjs-navbar';
import 'reactjs-navbar/dist/index.css';
import './Header.css';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  header: {
    '& #_2iAdU': {
      justifyContent: 'space-between',
      '& svg': {
        display: 'none',
      },
    },
  },
});

function Header(props) {
  const { history } = props;
  const classes = useStyles();

  const menuItems = [
    {
      title: 'Sign In',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/login'),
    },
    {
      title: 'Sign Up',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/signup'),
    },
  ];

  return (
    <Box className={classes.header}>
      <Navbar logo="/assets/images/logo.png" menuItems={menuItems} />
    </Box>
  );
}

export default withRouter(Header);
