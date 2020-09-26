import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#333333',
    padding: '50px 105px',
  },
  logo: {
    width: 200,
  },
  app: {
    width: 220,
    borderRadius: 15,
    border: '2px solid white',
    margin: '5px 0',
    cursor: 'pointer',
  },
  list: {
    color: 'white',
    paddingTop: theme.spacing(5),
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listTitle: {
    paddingBottom: theme.spacing(2.5),
  },
  socialIcons: {
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: -theme.spacing(1.5),
  },
  social: {
    color: '#299494',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Grid container spacing={1}>
        <Grid container item sm={4}>
          <List>
            <ListItem>
              <img
                className={classes.logo}
                src="/assets/images/footerLogo.png"
                alt="logo"
              />
            </ListItem>
            <ListItem>
              <img
                className={classes.app}
                src="/assets/images/google-play.png"
                alt="Google Play Store"
              />
            </ListItem>
            <ListItem>
              <img
                className={classes.app}
                src="/assets/images/app-store.png"
                alt="App Store"
              />
            </ListItem>
          </List>
        </Grid>

        <Grid container item sm={8}>
          <Grid container item xs={4}>
            <List className={classes.list}>
              <ListItem className={classes.listTitle}>
                <Typography variant="h6">Learn more</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>FAQs</ListItemText>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>Privacy Policy</ListItemText>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>Terms of Use</ListItemText>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>Press</ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid container item xs={4}>
            <List className={classes.list}>
              <ListItem className={classes.listTitle}>
                <Typography variant="h6">Top cities</Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>Raleigh, NC</ListItemText>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>New York</ListItemText>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText>Washington</ListItemText>
              </ListItem>
            </List>
          </Grid>

          <Grid container item xs={4}>
            <List className={classes.list}>
              <ListItem className={classes.listTitle}>
                <Typography variant="h6">Connect Us</Typography>
              </ListItem>
              <ListItem className={classes.socialIcons}>
                <IconButton>
                  <TwitterIcon className={classes.social} />
                </IconButton>
                <IconButton>
                  <FacebookIcon className={classes.social} />
                </IconButton>
                <IconButton>
                  <InstagramIcon className={classes.social} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
