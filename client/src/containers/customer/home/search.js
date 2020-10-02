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
import HomePageCard from '../../../components/generic/HomePageCard'

const useStyles = makeStyles((theme) => ({
  banner: {
    display: 'flex',
  },
  root: {
      backgroundColor: '#fafafa',
      height: 2000
  },
  bannerImage: {
    width: '100%',
    height: 450,
    objectFit: 'cover',
  },
  borderBottom: {
    backgroundColor: '#ffffff',
    height: 39,
    width: 264,
    borderRadius: 3,
    marginTop: -4
  },
  searchBox: {
    display: 'flex',
    position: 'absolute',
    width: '40%',
    marginLeft: '30%',
    marginTop: 195,
    background: 'white',
    borderRadius: 5,
  },
  searchInput1: {
    width: '85%',
    padding: '0 20px',
    borderRight: '1px solid black',
    borderRadius: 0,
    borderLeft: 'none',
    borderBottom: 'none',
    borderTop: 'none',
    height: 50,
    '&::before': {
        position: 'absolute',
        width: 1,
        height: 20,
        background: 'black'
    }
  },
  searchInput2: {
    width: '85%',
    padding: '0 20px',
    border: 'none',
    height: 50,
    borderRadius: 0,
    '&::before': {
        width: 1,
        height: 20,
        background: 'black'
    }
  },
  searchButton: {
    width: '15%',
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.light,
    },
    color: 'white',
    fontSize: 16,
  },
  container: {
    marginTop: 40,
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  viewAll: {
    paddingTop: 10,
  },
  images: {
      display: 'flex'
  },
  image1: {
      height: 260
  },
  image2: {
      height: 260,
      marginLeft: 25
  },
  image5: {
    height: 260,
    marginLeft: 25
  },
  image3: {
    height: 260,
    marginLeft: 25
  },
  image4: {
    height: 260,
    marginLeft: 25
  },
  bottom: {
    backgroundColor: '#ffffff',
    height: 38,
    width: 264,
    borderRadius: 3,
    marginTop: -3,
    marginLeft: 25
  },
  bottom2: {
    backgroundColor: '#ffffff',
    height: 38,
    width: 264,
    borderRadius: 3,
    marginTop: -3,
    marginLeft: 25
  },
  bottom3: {
    backgroundColor: '#ffffff',
    height: 38,
    width: 264,
    borderRadius: 3,
    marginTop: -3,
    marginLeft: 25
  },
  bottom4: {
    backgroundColor: '#ffffff',
    height: 38,
    width: 264,
    borderRadius: 3,
    marginTop: -3,
    marginLeft: 25
  },
  bottom1: {
    backgroundColor: '#ffffff',
    height: 38,
    width: 90,
    borderRadius: 3,
    marginTop: -3,
    marginLeft: 25
  },
  face: {
      marginTop: -30,
      marginLeft: 15
  },
  fitness: {
      marginTop: -30,
      marginLeft: 37
  },
  relax: {
      marginTop: -30,
      marginLeft: 37
  },
  body: {
      marginTop: -30,
      marginLeft: 37
  },
  make: {
      marginTop: -30,
      marginLeft: 37
  }
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
];

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <div className={classes.root}>
      <Box className={classes.banner}>
        <img
          className={classes.bannerImage}
          src="/assets/images/customer_search.png"
          alt=""
        />
        <Box className={classes.searchBox}>
          <Input
            className={classes.searchInput1}
            type="search"
            placeholder="Find barbers, spas"
            color="secondary"
            disableUnderline
          />
          <Input
            className={classes.searchInput2}
            type="search"
            placeholder="Search City, Zip"
            color="secondary"
            disableUnderline
          />
          <Button variant="contained" className={classes.searchButton}>
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
        <div className={classes.images}>
            <div>
                <img src={'/assets/images/customer1.png'} alt='' className={classes.image1} />
                <div className={classes.borderBottom}/>
                <Typography className={classes.face}>Face</Typography>
            </div>
            <div>
                <img src={'/assets/images/customer2.png'} alt='' className={classes.image2} /> 
                <div className={classes.bottom2}/>
                <Typography className={classes.fitness}>Fitness</Typography>
            </div>
            <div>
                <img src={'/assets/images/customer3.png'} alt='' className={classes.image3} />
                <div className={classes.bottom3}/>
                <Typography className={classes.relax}>Relax</Typography>
            </div>
            <div>
                <img src={'/assets/images/customer4.png'} alt='' className={classes.image4} />
                <div className={classes.bottom4}/>
                <Typography className={classes.body}>Body</Typography>
            </div>
            <div>
                <img src={'/assets/images/customer5.png'} alt='' className={classes.image5} />
                <div className={classes.bottom1}/>
                <Typography className={classes.make}>Make</Typography>
            </div>
        </div>
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
      </div>
    </React.Fragment>
  );
}

export default Home;
