import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Grid,
  Button,
  Link,
  Typography,
  Input,
} from '@material-ui/core';
import HomePageCard from '../../components/generic/HomePageCard.js';

const useStyles = makeStyles((theme) => ({
  banner: {
    display: 'flex',
  },
  bannerImage: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
  },
  searchBox: {
    display: 'flex',
    position: 'absolute',
    width: '40%',
    marginLeft: '30%',
    marginTop: 130,
    background: 'white',
    borderRadius: 5,
  },
  searchInput: {
    width: '85%',
    padding: '0 20px',
    height: 50,
  },
  searchButton: {
    width: '15%',
    fontSize: 'medium',
  },
  container: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(2.5),
  },
  viewAll: {
    paddingTop: theme.spacing(1.25),
  },
}));

const datas = [
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-2.png',
  },
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-3.png',
  },
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-4.png',
  },
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-4.png',
  },
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-3.png',
  },
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-2.png',
  },
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-3.png',
  },
  {
    title: 'Crochet Braids',
    alias: 'webmingo',
    rating: '5.0',
    price: 10,
    brand: 'Braids',
    image: '/assets/images/service-4.png',
  },
];

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.banner}>
        <img
          className={classes.bannerImage}
          src="/assets/images/home-background.png"
          alt=""
        />
        <Box className={classes.searchBox}>
          <Input
            className={classes.searchInput}
            type="search"
            placeholder="Enter Zip, Service, Shop and Price"
            color="secondary"
            disableUnderline
          />
          <Button variant="contained" color="primary" className={classes.searchButton}>
            Search
          </Button>
        </Box>
      </Box>

      <Container className={classes.container}>
        <Box className={classes.titleBar}>
          <Typography className={classes.title} variant="h5">
            Services
          </Typography>
          <Link className={classes.viewAll} component="button">
            View all
          </Link>
        </Box>

        <Grid container spacing={6}>
          {datas.map((data, index) => {
            return (
              <Grid item md={3} key={index}>
                <HomePageCard data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Container className={classes.container}>
        <Box className={classes.titleBar}>
          <Typography className={classes.title} variant="h5">
            Top Rated
          </Typography>
          <Link className={classes.viewAll} component="button">
            View all
          </Link>
        </Box>

        <Grid container spacing={6}>
          {datas.map((data, index) => {
            return (
              <Grid item md={3} key={index}>
                <HomePageCard data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Container className={classes.container}>
        <Box className={classes.titleBar}>
          <Typography className={classes.title} variant="h5">
            Featured
          </Typography>
          <Link className={classes.viewAll} component="button">
            View all
          </Link>
        </Box>

        <Grid container spacing={6}>
          {datas.map((data, index) => {
            return (
              <Grid item md={3} key={index}>
                <HomePageCard data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Home;
