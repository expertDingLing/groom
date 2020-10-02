import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../assets/scss/provider1.scss'
import { withStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ProfileCard from '../../../components/provider/profileCard';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    image: {
        marginTop: 50,
        marginLeft: 60,
        height: 90,
    },
    update_photo: {
        color: '#299494',
        textAlign: 'center',
        fontSize: 15
    },
    first_content: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    star: {
        margin: '0 30px',
        height: 30
    },
    check: {
        color: '#299494',
        height: 30,
        width: 91
    },
    divider: {
        marginTop: 20
    },
    name:{
        color: 'black',
        marginTop: 20,
        marginLeft: 30
    },
    checkicon: {
        color: '#299494',
        marginLeft: 30,
        height: 20
    },
    content: {
        fontSize: 12,
        marginLeft: 5
    },
    header: {
        color: '#999999',
        fontSize: 30,
        fontWeight: 700
    },
    header_title: {
        display: 'flex'
    },
    profile: {
        color: '#299494',
        marginLeft: 30,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    dot: {
        width: 30,
        marginTop: 10
    },
    detail: {
        marginTop: -20
    },
    final_content: {
        display: 'flex'
    },
    more: {
        fontSize: 17,
        color: '#299494',
        marginLeft: 30,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    second_content: {
        marginTop: 30
    },
    location: {
        color: 'black',
        fontWeight: 700,
        fontSize: 20
    },
    location_content:{
        color: 'black',
        fontSize: 15,
        marginTop: 10
    },
    languages: {
        display: 'flex'
    },
    language_btn: {
        marginTop: 20,
        backgroundColor: 'white',
        color: '#299494',
        border: 'none',
        '&:focus':{
            backgroundColor:'#999999',
            border: 'none',
            outline:'none'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    list: {
        marginTop: 30,
        display: 'flex',
        alignItems: 'center'
    },
    list_header: {
        fontSize: 30,
        color: 'black',
    },
    view: {
        color: '#299494',
        marginLeft: 150,
        '&:hover':{
            cursor: 'pointer'
        }
    },
    reviews: {
        marginTop: 30,
        fontSize: 20,
        color: 'black'
    },
    review_detail: {
        display: 'flex',
        marginTop: 10
    },
    review_tag: {
        color: 'black',
        fontSize: 15,
        margin: '0 30px',
        marginLeft: -5,
        border: 'none',
        backgroundColor: 'white',
        '&:hover':{
            cursor: 'pointer'
        },
        '&:focus':{
            color: '#299494',
            border: 'none',
            outline: 'none',
        }
    },
    review_content: {
        marginTop: 20
    },
    review1: {
        height: 45
    },
    date: {
        color: 'black',
        fontSize: 13
    },
    contents: {
        color: '#999999',
        marginTop: 10,
        fontSize: 15
    },
    last: {
        marginTop: 20,
        color: '#299494',
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

const datas =[
    {
       alias: "webmingo",
       star: "5.0",
       brand: "Braids",
       url: "/assets/images/service-2.png",
       description: "Description",
       minites: "45-60 mins",
       content: "Lorem ipsumundefined.Lorem ipsumundefined.Lorem ipsumundefined."
   },
   {
       alias: "webmingo",
       star: "5.0",
       brand: "Braids",
       url: "/assets/images/service-2.png",
       description: "Description",
       minites: "45-60 mins",
       content: "Lorem ipsumundefined.Lorem ipsumundefined.Lorem ipsumundefined."
   },
   {
       alias: "webmingo",
       star: "5.0",
       brand: "Braids",
       url: "/assets/images/service-2.png",
       description: "Description",
       minites: "45-60 mins",
       content: "Lorem ipsumundefined.Lorem ipsumundefined.Lorem ipsumundefined."
   },
]

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="account-container">
                <Grid container className="account-grid">
                    <Grid item lg={2} className="account-side">
                        <img className={classes.image} src={"/assets/images/profile.png"} alt=""/>
                        <Typography className={classes.update_photo}>Update Photo</Typography>
                        <Divider className={classes.divider}/>
                        <div className={classes.first_content}>
                            <img className={classes.star} src={"/assets/images/star.png"} alt="" />
                            <Typography>27 reviews</Typography>
                        </div>
                        <div className={classes.first_content}>
                            <CheckCircleIcon className={classes.check}/>
                            <Typography>Verified</Typography>
                        </div>
                        <Divider className={classes.divider}/>
                        <Typography className={classes.name}>Mathew provided</Typography>
                        <div className={classes.first_content}>
                            <CheckCircleOutlineIcon className={classes.checkicon}/>
                            <Typography className={classes.content}>Covernment ID</Typography>
                        </div>
                        <div className={classes.first_content}>
                            <CheckCircleOutlineIcon className={classes.checkicon}/>
                            <Typography className={classes.content}>Personal info</Typography>
                        </div>
                        <div className={classes.first_content}>
                            <CheckCircleOutlineIcon className={classes.checkicon}/>
                            <Typography className={classes.content}>Email address</Typography>
                        </div>
                        <div className={classes.first_content}>
                            <CheckCircleOutlineIcon className={classes.checkicon}/>
                            <Typography className={classes.content}>Phone Number</Typography>
                        </div>
                        <div className={classes.first_content}>
                            <CheckCircleOutlineIcon className={classes.checkicon}/>
                            <Typography className={classes.content}>Physical address</Typography>
                        </div>
                        <div className={classes.first_content}>
                            <CheckCircleOutlineIcon className={classes.checkicon}/>
                            <Typography className={classes.content}>Professional license</Typography>
                        </div>
                    </Grid>
                    <Grid item lg={10} className="accountContent">
                        <Typography className={classes.header}>Hi, I'm Mathew</Typography>
                        <div className={classes.header_title}>
                            <Typography>Joined in 2012.</Typography>
                            <Typography className={classes.profile}>Edit Profile</Typography>
                        </div>
                        <img className={classes.dot} src={"/assets/images/asset.png"} alt=""/>
                        <div className={classes.detail}>
                            <Typography>Hello,</Typography>
                            <Typography>I have over 10 years of travel experience. I've stayed in many 4 and 5 star hotels. I am</Typography>
                            <Typography>intelligent, ambitious and very honest. I'm also former military and work in the IT</Typography>
                            <div className={classes.final_content}>
                                <Typography>industry. Airbnb......</Typography>
                                <Typography className={classes.more}>Learn more</Typography>
                            </div>
                        </div>
                        <div className={classes.second_content}>
                            <Typography className={classes.location}>Location</Typography>
                            <Typography className={classes.location_content}>Garner, NC</Typography>
                        </div>
                        <div className={classes.second_content}>
                            <Typography className={classes.location}>Languages I Speak</Typography>
                            <div className={classes.languages}>
                                <button className={classes.language_btn}>English</button>
                                <button className={classes.language_btn}>Add more</button>
                            </div>
                        </div>
                        <div className={classes.list}>
                            <Typography className={classes.list_header}>Mathew's listings</Typography>
                            <Typography className={classes.view}>View all 7 listings</Typography>
                        </div>
                        <Grid container spacing={1}>
                            {datas.map((data, i) => {
                                return (
                                <Grid item lg={4}  key={i}>
                                    <ProfileCard data={data}/>
                                </Grid>
                                )
                            })}
                        </Grid>
                        <Typography className={classes.reviews}>88 reviews</Typography>
                        <div className={classes.review_detail}>
                            <button className={classes.review_tag}>From customers (78)</button>
                            <button className={classes.review_tag}>From providers (10)</button>
                        </div>
                        <Divider />
                        <Typography className={classes.review_content}>February 2020</Typography>
                        <div className={classes.review_detail}>
                            <img className={classes.review1} src={"/assets/images/review1.png"} alt="" />
                            <div style={{marginLeft:"10px"}}>
                                <Typography>Shai, Israel</Typography>
                                <Typography className={classes.date}>Joined in 2018</Typography>
                            </div>
                        </div>
                        <Typography className={classes.contents}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing</Typography>
                        <Typography className={classes.contents}>elitr, sed diam</Typography>
                        <div className={classes.review_detail}>
                            <img className={classes.review1} src={"/assets/images/review2.png"} alt="" />
                            <div style={{marginLeft:"10px"}}>
                                <Typography>Shai, Israel</Typography>
                                <Typography className={classes.date}>Joined in 2018</Typography>
                            </div>
                        </div>
                        <Typography className={classes.contents}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. Lorem ipsum dolor sit amet, consetetur sadipscing</Typography>
                        <Typography className={classes.contents}>elitr, sed diam</Typography>
                        <Divider className={classes.divider}/>
                        <Typography className={classes.last}>Show more reviews</Typography>
                        <Divider className={classes.divider}/>
                        <Typography className={classes.last}>Reviews by you</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
