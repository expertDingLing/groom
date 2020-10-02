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
      justifyContent: 'space-between',
      '& ._2trtS': {
        marginRight: theme.spacing(12),
      },
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
      title: 'Dashboard',
      icon: faUsers,
      isAuth: true,
      subItems: [
        {
          title: 'ID',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/id'),
        },
        {
          title: 'Email',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/email'),
        },
        {
            title: 'Create Web Site',
            icon: faUsers,
            isAuth: true,
            onClick: () => history.push('/customer/create'),
        },
        {
            title: 'Search',
            icon: faUsers,
            isAuth: true,
            onClick: () => history.push('/customer/search'),
        },
      ],
    },
    {
      title: 'Bookings',
      icon: faUsers,
      isAuth: true,
      subItems: [
        {
          title: 'Change Booking',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/change_booking'),
        },
        {
            title: 'Cancel Approved Booking',
            icon: faUsers,
            isAuth: true,
            onClick: () => history.push('/customer/cancel_approved_booking'),
        },
        {
            title: 'Recent Booking',
            icon: faUsers,
            isAuth: true,
            onClick: () => history.push('/customer/recent_booking'),
        },
        {
          title: 'Booking Detail',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/booking_detail'),
        },
        {
          title: 'Customer Booking',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/customer_booking'),
        },
        {
          title: 'Booking Approval',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/booking_approval'),
        },
      ],
    },
    {
      title: 'Favorites',
      icon: faUsers,
      isAuth: true,
      subItems: [
        {
          title: 'Video',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/video'),
        },
        {
          title: 'Creating fav',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/creating_fav'),
        },
      ],
    },
    {
      title: 'Messages',
      icon: faUsers,
      isAuth: true,
      subItems: [
        {
          title: 'Offer refund',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/offer_refund'),
        },
        {
            title: 'Customer refund',
            icon: faUsers,
            isAuth: true,
            onClick: () => history.push('/customer/customer_refund'),
        },
        {
            title: 'Message',
            icon: faUsers,
            isAuth: true,
            onClick: () => history.push('/customer/message'),
        },
        {
          title: 'Review Provider Shop',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/review_shop'),
        },
        {
          title: 'Complaint Report User',
          icon: faUsers,
          isAuth: true,
          onClick: () => history.push('/customer/complaint'),
        },
      ],
    },
    {
      title: 'Wait List',
      icon: faUsers,
      isAuth: true,
      onClick: () => history.push('/customer/wait-list'),
    },
  ];

  const accountMenuItems = [
    {
      title: 'Profile',
      url: '/customer/profile',
    },
    {
      title: 'Account',
      url: '/customer/account',
    },
    {
      title: 'Invite Friends',
      url: '/customer/invite',
    },
    {
      title: 'Refer a Provider',
      url: '/customer/refer',
    },
    {
      title: 'Gift Cards',
      url: '/customer/gift',
    },
    {
      title: 'Switch to Provider',
      url: '/customer/switch',
    },
    {
      title: 'Help',
      url: '/customer/help',
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
