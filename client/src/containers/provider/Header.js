import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import Navbar from 'reactjs-navbar';
import 'reactjs-navbar/dist/index.css';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
  header: {
    '& #_2iAdU': {
      '& svg': {
        display: 'none',
      },
    },
  },
  account: {
    position: 'absolute',
    top: theme.spacing(0.7),
    right: theme.spacing(6),
    zIndex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
  },
}));

function Header(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const accountMenuOpen = Boolean(anchorEl);
  const id = accountMenuOpen ? 'simple-popover' : undefined;

  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    if ($(document).height() > $(window).height()) {
      $('#account').css('right', '65px');
    }
  };

  const handleAccountMenuClose = () => {
    setAnchorEl(null);
    $('#account').css('right', '48px');
  };

  const menuItems = [
    {
      title: 'Home',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/provider/home'),
    },
    {
      title: 'Inbox',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/provider/inbox'),
    },
    {
      title: 'Groomings',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/provider/decision-refund'),
    },
    {
      title: 'Calendar',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/provider/calendar'),
    },
    {
      title: 'Listings',
      icon: faUsers,
      isAuth: true,
      subItems: [
        {
          title: 'Booking History',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/booking-history'),
        },
        {
          title: 'Listing',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/listing'),
        },
        {
          title: 'Change Booking',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/change_booking'),
        },
        {
          title: 'Unfinish',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/unfinish'),
        },
        {
          title: 'Offer refund',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/offer_refund'),
        },
      ],
    },
    {
      title: 'Shops',
      icon: faUsers,
      isAuth: true,
      subItems: [
        {
          title: 'Service',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/shops'),
        },
        {
          title: 'Product',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/special-shop'),
        },
        {
          title: 'Creating',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/creating_shop'),
        },
        {
          title: 'Manage',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/manage'),
        },
        {
          title: 'Owner',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/owner'),
        },
        {
          title: 'Offer',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/offer'),
        },
      ],
    },
    {
      title: 'Performance',
      icon: faUsers,
      isAuth: true,
      subItems: [
        {
          title: 'Service',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/performance'),
        },
        {
          title: 'Dashboard',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/dashboard'),
        },
        {
          title: 'Video',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/video'),
        },
        {
          title: 'Manage Service',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/manage_service'),
        },
        {
          title: 'Owner',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/owner'),
        },
        {
          title: 'Manage Product',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/provider/manage_product'),
        },
      ],
    },
    {
      title: 'Create new listing',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/provider/promotion'),
    },
  ];

  const accountMenuItems = [
    {
      title: 'Profile',
      url: '/provider/profile',
    },
    {
      title: 'Account',
      url: '/provider/account',
    },
    {
      title: 'Invite Friends',
      url: '/provider/invite',
    },
    {
      title: 'Refer a Provider',
      url: '/provider/refer',
    },
    {
      title: 'Gift Cards',
      url: '/provider/gift',
    },
    {
      title: 'Switch to Customer',
      url: '/provider/switch',
    },
    {
      title: 'Help',
      url: '/provider/help',
    },
    {
      title: 'Logout',
      url: '/',
    },
  ];

  return (
    <Box className={classes.header}>
      <Navbar logo="/assets/images/logo.png" menuItems={menuItems} />
      <Box className={classes.account} id="account">
        <IconButton
          className={classes.avatar}
          aria-describedby={id}
          onClick={handleAccountMenuOpen}
        >
          <Avatar
            className={classes.avatar}
            src="/assets/images/user-1.png"
            alt="avatar"
          />
        </IconButton>
        <Popover
          id={id}
          open={accountMenuOpen}
          anchorEl={anchorEl}
          onClose={handleAccountMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List component="nav" aria-labelledby="nested-list-subheader">
            {accountMenuItems.map((item, index) => {
              return (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    history.push(item.url);
                    handleAccountMenuClose();
                  }}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              );
            })}
          </List>
        </Popover>
      </Box>
    </Box>
  );
}

export default withRouter(Header);
