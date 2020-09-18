import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
        justifyContent: "flex-end",
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
//   const [anchorE2, setAnchorE2] = React.useState(null);

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


  const MenuItems = [
      {
        menuTitile: 'Sign Up',
        pageURL: '/sign-in'
      },
      {
        menuTitile: 'Sign In',
        pageURL: '/login'
      },

  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerSection}>
        <Toolbar>
            <Button className={classes.title} onClick={() =>handleMenuClick('/')}>
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
                                return (
                                    <Button onClick={() => handleMenuClick(pageURL)} key={i} className={classes.headerMenu}>{menuTitile}</Button>
                                )
                            })}
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