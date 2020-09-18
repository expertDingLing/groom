import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../../routes/genericRoutes'
import Header from '../../layouts/generic/header'
import Footer from '../../layouts/generic/footer'
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import HomePageCard from '../../components/generic/HomePageCard.js'

const datas =[
     {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-2.png"
    },
    {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-3.png"
    },
    {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-4.png"
    },
    {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-4.png"
    },
    {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-2.png"
    },
    {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-3.png"
    },
    {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-4.png"
    },
    {
        title: "Crochet Braids",
        alias: "webmingo",
        star: "5.0",
        price: 10,
        brand: "Braids",
        url: "/assets/images/service-4.png"
    },
    
]



export class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="homepage-container">
                    <Grid container className="page-background">
                        <Card style={{width: "100%"}}>
                            <CardMedia
                                className="homepage-image"
                                image="/assets/images/home-background.png"
                            />
                        </Card>
                        <Box className="search-input-btn">
                            <Box className="search-box">
                                <InputBase
                                    className="input"
                                    placeholder="Enter Zip, Service, Price, Shop and Price"
                                />
                            </Box>
                            <Button variant="contained" className="search-btn">Search</Button>
                        </Box>
                    </Grid>

                    <Box className="container">
                        <Box className="title-btn">
                            <Typography className="title">Services</Typography>
                            <Button className="view-btn" >View all</Button>
                        </Box>

                        <Grid container spacing={6}>
                                {datas.map((data, i) => {
                                    return (
                                    <Grid item lg={3}  key={i}>
                                        <HomePageCard data={data}/>
                                    </Grid>

                                    )
                                })}
                        </Grid>
                    </Box>

                    <Box className="container">
                        <Box className="title-btn">
                            <Typography className="title">Top Rated</Typography>
                            <Button className="view-btn" >View all</Button>
                        </Box>

                        <Grid container spacing={6}>
                                {datas.map((data, i) => {
                                    return (
                                    <Grid item lg={3}  key={i}>
                                        <HomePageCard data={data}/>
                                    </Grid>

                                    )
                                })}
                        </Grid>
                    </Box>

                    <Box className="container">
                        <Box className="title-btn">
                            <Typography className="title">Featured</Typography>
                            <Button className="view-btn" >View all</Button>
                        </Box>

                        <Grid container spacing={6}>
                                {datas.map((data, i) => {
                                    return (
                                    <Grid item lg={3}  key={i}>
                                        <HomePageCard data={data}/>
                                    </Grid>

                                    )
                                })}
                        </Grid>
                    </Box>
                </div>
                <div>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default index
