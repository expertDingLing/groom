import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom'


const useStyles = makeStyles((theme) =>
 ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('xs')] : {
            flexGrow: 1,
        },
        display: "flex",
        alignItems: "center",
        width: "200px"
    },
    logo: {
        width: "80%",
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerSection: {
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 4px #00000029",
        padding: "10px 100px",
    },
    headerMenu: {
        color: "#666666",
        fontSize: "20px",
        fontWeight: "normal",
        textTransform: "none",
        padding: "0 25px"
    }
  }),
);

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
      history.push(pageURL);
    setAnchorEl(null);
  };



  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE2(null);
  };

  const open2 = Boolean(anchorE2);
  const id = open2 ? 'simple-popover' : undefined;

  const MenuItems = [
      {
        menuTitile: 'Home',
        pageURL: '/provider/home'
      },
      {
        menuTitile: 'Inbox',
        pageURL: '/provider/inbox'
      },
      {
        menuTitile: 'Groomings',
        pageURL: '/provider/groomings'
      },
      {
        menuTitile: 'Calendar',
        pageURL: '/provider/calendar'
      },
      {
        menuTitile: 'Shops',
        pageURL: '/provider/shops'
      },
      {
        menuTitile: 'Performance',
        pageURL: '/provider/performance'
      }
  ];

  const userSettingList = [
    {
        Title: "Profile",
        url: '/provider/profile'
    },
    {
        Title: "Account",
        url: '/provider/account'
    },
    {
        Title: "Invite Friends",
        url: '/provider/invite'
    },
    {
        Title: "Refer a Provider",
        url: '/provider/refer'
    },
    {
        Title: "Gift Cards",
        url: '/provider/gift'
    },
    {
        Title: "Switch to Customer",
        url: '/provider/switch'
    },
    {
        Title: "Help",
        url: '/provider/help'
    },
    {
        Title: "Logout",
        url: '/'
    }
    
  ];



  const [anchorE3, setAnchorE3] = React.useState(null);

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };

  const open3 = Boolean(anchorE3);
  const id3 = open3 ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerSection}>
        <Toolbar>
            <Button className={classes.title} onClick={() =>handleMenuClick('/provider/home')}>
                <img className={classes.logo} src={'../../assets/images/logo.png'} alt="logo img"/>
            </Button>
            <div style={{flex: 1}}>
                { isMobile ? (
                    <>
                        <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                        >
                            {MenuItems.map( (menuItem, i) => {
                                const {menuTitile, pageURL} = menuItem;
                                return (
                                    <MenuItem onClick={() => handleMenuClick(pageURL)} key={i}>{menuTitile}</MenuItem>
                                )
                            })}
                            
                        </Menu>
                    </>
                    ) : (
                        <div className={classes.headerOptions}>
                            <div>
                             {MenuItems.map( (menuItem, i) => {
                                const {menuTitile, pageURL} = menuItem;
                                if(menuTitile !== "Shops"){
                                    return (
                                        <Button onClick={() => handleMenuClick(pageURL)} key={i} className={classes.headerMenu}>{menuTitile}</Button>
                                    )
                                }
                                else {
                                    return (
                                        <React.Fragment  key={i} >
                                        <Button aria-describedby={id3} className={classes.headerMenu} onClick={handleClick3}>
                                            Shops
                                        </Button>
                                        <Popover 
                                            id={id3}
                                            open={open3}
                                            anchorEl={anchorE3}
                                            onClose={handleClose3}
                                            anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                            }}
                                            
                                        >
                                            <div style={{display: "flex", flexDirection: "column"}}>
                                                <Button onClick={() => handleMenuClick('/provider/shops')}  className={classes.headerMenu}>Service</Button>
                                                <Button onClick={() => handleMenuClick('/provider/special-shop')}  className={classes.headerMenu}>Product</Button>
                                            </div>
                                      </Popover>
                                      </React.Fragment>
                                    )
                                }
                            })}
                            </div>

                            <div>
                                <IconButton aria-describedby={id} onClick={handleClick} style={{padding: "0px"}}>
                                    <Avatar  src={'../../assets/images/user-1.png'} alt="user 1 img"  style={{width: "50px", height: "50px"}}/>
                                </IconButton>
                                <Popover 
                                    id={id}
                                    open={open2}
                                    anchorEl={anchorE2}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    >
                                         <List
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                        >
                                            {userSettingList.map((listItem, i) => {
                                                return (
                                                    <ListItem button key={i} onClick={() => history.push(listItem.url)}>
                                                        <ListItemText primary={listItem.Title} />
                                                    </ListItem>
                                                )
                                            })}
                                            
                                        </List>
                                </Popover>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter( Header );