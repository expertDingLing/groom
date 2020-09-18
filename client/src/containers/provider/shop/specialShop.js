import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const serviceItems = [
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  false,
    },
    {
        img: "service-2.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  false,
    }
];

const products = [
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  true,
    },
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  false,
    },
    {
        img: "product-1.png",
        title: "Crochet Braids",
        star: "5.0",
        review: "23",
        active:  false,
    }
];
export class specialShop extends Component {
    render() {
        return (
            <div className="special-shop-container">
                <Typography className="header-title">Jacob's Barber Studio</Typography>
                <Box className="search-input-btn">
                    <Box className="search-box">
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon className="icon"/>
                        </IconButton>
                        <InputBase
                            className="input"
                            placeholder="Search shops and servicess"
                        />
                        <Button variant="contained" className="search-btn">Search</Button>
                    </Box>
                    <Box className="btn-container">
                        <Button variant="contained" className="create-btn">Create a Service</Button>
                        <Button variant="contained" className="create-btn">Create a Product</Button>
                    </Box>
                </Box>
                <Box className="title-btn">
                    <Typography className="title">Services</Typography>
                    <Button className="view-btn">View all</Button>
                </Box>
                <Grid container spacing={4}>
                    {serviceItems.map((item, i) => {
                        return (
                            <Grid container item lg={3} sm={6} key={i}>
                                <Card className={ item.active ? "card-one" : "card-one inactive-one"}>
                                    { !item.active && (
                                        <div className="inactive-mark" style={{backgroundImage: `url('../../assets/images/inactive.png')`}}>
                                            <div>Inactive</div>
                                        </div>
                                    )}
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image="/assets/images/service-2.png"
                                    />
                                    <CardContent>
                                        <Box style={{display: "flex", justifyContent: "space-between"}}>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    webmingo
                                                </Typography>
                                            </Box>
                                            <Button variant="outlined" className="edit-service" startIcon={<EditIcon />}>
                                                Edit Service
                                            </Button>
                                        </Box>
                                        <Box style={{display: "flex", justifyContent: "space-between"}}>
                                            <Box style={{display: "flex", justifyContent: "space-between"}}>
                                                <Rating className="star" name="read-only" value={parseFloat(5.0)} readOnly />
                                                <Typography gutterBottom component="p" color="textSecondary" style={{padding: "0 5px"}}>
                                                    (23)
                                                </Typography>
                                            </Box>
                                            <Button variant="outlined" className="delete-btn" startIcon={<DeleteIcon />}>
                                                Delete
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                                       
                </Grid>

                <Box className="title-btn">
                    <Typography className="title">Products</Typography>
                    <Button className="view-btn">View all</Button>
                </Box>

                <Grid container spacing={4}>
                    {products.map((item, i) => {
                        return (
                            <Grid container item lg={3} sm={6} key={i}>
                                <Card className={ item.active ? "card-one" : "card-one inactive-one"}>
                                    { !item.active && (
                                        <div className="inactive-mark" style={{backgroundImage: `url('../../assets/images/inactive.png')`}}>
                                            <div>Inactive</div>
                                        </div>
                                    )}
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image="/assets/images/product-1.png"
                                    />
                                    <CardContent>
                                        <Box style={{display: "flex", justifyContent: "space-between"}}>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    webmingo
                                                </Typography>
                                            </Box>
                                            <Button variant="outlined" className="edit-service" startIcon={<EditIcon />}>
                                                Edit Service
                                            </Button>
                                        </Box>
                                        <Box style={{display: "flex", justifyContent: "space-between"}}>
                                            <Box style={{display: "flex", justifyContent: "space-between"}}>
                                                <Rating className="star" name="read-only" value={parseFloat(5.0)} readOnly />
                                                <Typography gutterBottom component="p" color="textSecondary" style={{padding: "0 5px"}}>
                                                    (23)
                                                </Typography>
                                            </Box>
                                            <Button variant="outlined" className="delete-btn" startIcon={<DeleteIcon />}>
                                                Delete
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                   
                    
                </Grid>
            </div>
        )
    }
}

export default specialShop
