import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import '../../../assets/scss/provider.scss'
const shopsItems = [
    {
        img: "service-1.png",
        title: "Jacob's Barber Studio",
        address: "5935 West 35th Street, Cisero, 60804",
        star: "5.0",
        review: "187",
        hairCut: "$26",
        hairCutTime: "40 mins",
        vip: "$100",
        vipTime: "1 hr 20 mins",
        eyebrows: "$30",
        eyebrowsTime: "40 mins",
    },
    {
        img: "service-1.png",
        title: "Jacob's Barber Studio",
        address: "5935 West 35th Street, Cisero, 60804",
        star: "5.0",
        review: "187",
        hairCut: "$26",
        hairCutTime: "40 mins",
        vip: "$100",
        vipTime: "1 hr 20 mins",
        eyebrows: "$30",
        eyebrowsTime: "40 mins",
    },
    {
        img: "service-1.png",
        title: "Jacob's Barber Studio",
        address: "5935 West 35th Street, Cisero, 60804",
        star: "5.0",
        review: "187",
        hairCut: "$26",
        hairCutTime: "40 mins",
        vip: "$100",
        vipTime: "1 hr 20 mins",
        eyebrows: "$30",
        eyebrowsTime: "40 mins",
    },
    {
        img: "service-1.png",
        title: "Jacob's Barber Studio",
        address: "5935 West 35th Street, Cisero, 60804",
        star: "5.0",
        review: "187",
        hairCut: "$26",
        hairCutTime: "40 mins",
        vip: "$100",
        vipTime: "1 hr 20 mins",
        eyebrows: "$30",
        eyebrowsTime: "40 mins",
    },
]

export class index extends Component {

    specialShopLink = () => {
        const {history} = this.props;
        history.push('/provider/special-shop');
    }
    render() {
        return (
            <div className="root-container shop-service-container">
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
                    <Button variant="contained" className="create-btn">Create a Shop</Button>
                </Box>
                <Grid container>
                    {shopsItems.map((item, i) => {
                        const {img, title, address,  star, review, hairCut, hairCutTime, vip, vipTime, eyebrows, eyebrowsTime} = item;
                        return (
                            <Grid container item md={6} key={i} className="shop-one-item">
                                <Grid container className="content">
                                    <Grid container item lg={5} style={{background: `url(../../assets/images/${img})`}} className="image">
                                    </Grid>
                                    <Grid container item lg={7} className="description">
                                        <Box style={{position: "relative",  width: "70%"}} >
                                            <Typography className="title">{title}</Typography>
                                            <Typography className="address">{address}</Typography>
                                            <Box className="star-review">
                                                <Box className="score">{star}</Box>
                                                <Rating className="star" name="read-only" value={parseFloat(star)} readOnly />
                                                <Typography className="review">({review} reviews)</Typography>
                                            </Box>

                                            <List>
                                                <ListItem className="item-one">
                                                    <ListItemText primary="Haircut" className="shop-service-text"/>
                                                    <div className="right">
                                                        <ListItemText primary={hairCut} secondary={hairCutTime} className="shop-service-text"/>
                                                        <IconButton aria-label="edit picture" component="span">
                                                            <EditIcon  style={{fontSize: "18px", color: "#666666"}}/>
                                                        </IconButton>
                                                    </div>
                                                </ListItem>
                                                <ListItem className="item-one">
                                                    <ListItemText primary="V.I.P" className="shop-service-text"/>
                                                    <div className="right">
                                                        <ListItemText primary={vip} secondary={vipTime} className="shop-service-text"/>
                                                        <IconButton aria-label="edit picture" component="span">
                                                            <EditIcon  style={{fontSize: "18px", color: "#666666"}}/>
                                                        </IconButton>
                                                    </div>
                                                </ListItem>
                                                <ListItem className="item-one">
                                                    <ListItemText primary="Haircut & Eyebrows" className="shop-service-text"/>
                                                    <div className="right">
                                                        <ListItemText primary={eyebrows} secondary={eyebrowsTime} className="shop-service-text"/>
                                                        <IconButton aria-label="edit picture" component="span">
                                                            <EditIcon style={{fontSize: "18px", color: "#666666"}} />
                                                        </IconButton>
                                                    </div>
                                                </ListItem>
                                            </List>
                                            <Box style={{textAlign: "center"}}>
                                                <Button style={{color: "#299494", textTransform: "none"}} onClick={()=>this.specialShopLink()}>View all</Button>
                                            </Box>
                                            <Button variant="outlined" className="edit-shop-btn" >
                                                <EditIcon style={{fontSize: "18px", color: "#666666"}}/>
                                                <Typography style={{fontSize: "14px", paddingLeft: "10px", fontWeight: "bold", textTransform: "none", color: "#666666"}}>Edit Shop</Typography>
                                            </Button>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}

                </Grid>
            </div>
        )
    }
}

export default index
