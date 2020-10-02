import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProfileCard from '../../../components/customer/ProfileCard';
import CloseIcon from '@material-ui/icons/Close';
import { Divider } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
        height: 2000
    },
    content: {
        backgroundColor: 'white',
        height: 1500,
        padding: 50,
    },
    header: {
        fontSize: 25,
        fontWeight: 600
    },
    header_title1: {
        marginTop: 10,
        fontWeight: 600
    },
    header_title2: {
        marginTop: 10
    },
    image1: {
        height: 600,
        marginTop: 20
    },
    card: {
        paddingTop: 50
    },
    title1: {
        position: 'absolute',
        color: 'white',
        top: 100,
        left: 24,
        fontSize: 25
    },
    title2: {
        position: 'absolute',
        color: 'white',
        top: 200,
        left: 24,
        fontSize: 25
    },
    first_content: {
        display: 'flex'
    },
    first: {
        backgroundColor: 'white'
    },
    map_content: {
        width: '100%',
        height: 1130
    },
    first_title: {
        display: 'flex'
    },
    close: {
        marginLeft: 'auto'
    },
    first_header: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table'
    },
    date_info: {
        display: 'flex',
        marginTop: 10
    },
    date: {
        fontWeight: 600,
        fontSize: 14
    },
    time1: {
        marginLeft: 30,
        fontSize: 14
    },
    time2: {
        marginLeft: 20,
        fontSize: 14
    },
    hair: {
        marginTop: 10,
        fontSize: 17,
        fontWeight: 600
    },
    divider: {
        marginTop: 10
    },
    hair_detail: {
        marginTop: 15,
        display: 'flex'
    },
    hair_owner: {
        color: '#7c7c7c',
        fontWeight: 600,
        fontSize: 14
    },
    address: {
        color: '#7c7c7c',
        fontWeight: 600,
        fontSize: 14,
        marginTop: 20
    },
    hair_service: {
        color: '#299494',
        fontSize: 14
    },
    image2: {
        height: 40,
        marginLeft: 'auto',
        marginRight: 10
    },
    image3: {
        marginTop: 10,
        height: 40 
    },
    name: {
        fontSize: 14,
        fontWeight: 600,
        color: '#7c7c7c'
    },
    lorem: {
        marginTop: 10,
        fontSize: 13
    },
    lorem_content: {
        marginTop: 10,
        display: 'flex'
    },
    read: {
        fontSize: 13,
        color: '#299494',
        marginLeft: 30,
        marginTop: 10
    },
    show: {
        marginTop: 30,
        marginLeft: 20,
        display: 'flex'
    },
    image4: {
        height: 60
    },
    show_listing: {
        marginLeft: 20
    },
    forward: {
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 10,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    detail: {
        marginTop: 10,
        fontSize: 13
    },
    detail_content: {
        marginTop: 10,
        fontSize: 13,
        color: '#299494'
    },
    confirm: {
        position: 'absolute',
        marginTop: -30,
        marginLeft: 380,
        color: 'black',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: 3,
        outline: 'none'
    }
})

const datas =[
    {
       alias: "webmingo",
       star: "5.0",
       brand: "Braids",
       url: "/assets/images/service-2.png",
       minites: "45-60 mins",
   },
   {
       alias: "webmingo",
       star: "5.0",
       brand: "Braids",
       url: "/assets/images/service-2.png",
       minites: "45-60 mins",
   },
   {
       alias: "webmingo",
       star: "5.0",
       brand: "Braids",
       url: "/assets/images/service-2.png",
       minites: "45-60 mins",
   },
]

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: 'first',
        }
    }

    render() {
        const { classes } = this.props;
        const {formState} = this.state;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    {formState === 'final' && (
                        <div>
                            <Typography className={classes.header}>Services</Typography>
                            <Typography className={classes.header_title1}>What's coming up</Typography>
                            <Typography className={classes.header_title2}>You don't have anything coming up    start looking for your next service.</Typography>
                            <div style={{position: 'relative'}}>
                                <img src={'/assets/images/recent_book1.png'} alt='' className={classes.image1}/>
                                <Typography className={classes.title1}>When was the last time you spent on your well being?</Typography>
                                <Typography className={classes.title2}>Explore our services now and unwind?</Typography>
                            </div>
                           
                            <Grid container spacing={10} className={classes.card} >
                            {datas.map((data, i) => {
                                return (
                                <Grid item lg={4} key={i}>
                                    <ProfileCard data={data}/>
                                </Grid>
                                )
                            })}
                        </Grid>
                        </div>
                    )}
                    {formState === 'first' && (
                        <div className={classes.first_content}>
                            <Grid item lg={5}>
                                <div className={classes.first}>
                                    <div className={classes.first_title}>
                                        <Typography className={classes.first_header}>Your booking details</Typography>
                                        <CloseIcon className={classes.close}/>
                                    </div>
                                    <img src={'/assets/images/recent_book2.png'} alt='' className={classes.first_image}/>
                                    <button className={classes.confirm}>CONFIRMED</button>
                                    <div className={classes.date_info}>
                                        <Typography className={classes.date}>Sat, May 20</Typography>
                                        <Typography className={classes.time1}>12:00 PM</Typography>
                                        <Typography className={classes.time2}>3:00 PM</Typography>
                                    </div>
                                    <Divider/>
                                    <Typography className={classes.hair}>Hair Cutting</Typography>
                                    <Divider className={classes.divider}/>
                                    <div className={classes.hair_detail}>
                                        <div>
                                            <Typography className={classes.hair_owner}>Alice's Hair Wonderland</Typography>
                                            <Typography className={classes.hair_service}>Service Provider Dru</Typography>
                                        </div>
                                        <img src={'/assets/images/recent_book3.png'} alt='' className={classes.image2} />
                                    </div>
                                    <Divider className={classes.divider}/>
                                    <Typography className={classes.address}>Who's comming</Typography>
                                    <img src={'/assets/images/recent_book4.png'} alt='' className={classes.image3} />
                                    <Typography className={classes.name}>Mathew</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.address}>Address</Typography>
                                    <Typography className={classes.lorem}>Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam.</Typography>
                                    <Divider className={classes.divider}/>
                                    <Typography className={classes.address}>Directions from your Shop Manager</Typography>
                                    <Typography className={classes.lorem}>Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam.</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.address}>Shop Rules</Typography>
                                    <div className={classes.lorem_content}>
                                        <Typography className={classes.lorem}>Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam.</Typography>
                                        <Typography className={classes.read}>Read more</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.show}>
                                        <img src={'/assets/images/recent_book2.png'} alt='' className={classes.image4} />
                                        <div className={classes.show_listing}>
                                            <Typography>Show listing</Typography>
                                            <Typography>Lorem ipsum.</Typography>
                                        </div>
                                        <ArrowForwardIosIcon className={classes.forward} onClick={()=>this.setState({formState: "final"})}/>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.address}>Confirmation Code</Typography>
                                    <Typography className={classes.detail}>XYDJKKJE674N</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.address}>Total Cost</Typography>
                                    <Typography className={classes.detail}>$183.00</Typography>
                                    <Typography className={classes.detail_content}>Get receipt</Typography>
                                    <Divider className={classes.divider} />
                                </div>
                            </Grid>
                            <Grid item lg={7}>
                                <div className={classes.map}>
                                    <img src='/assets/images/Map.png' alt='' className={classes.map_content} />
                                </div>
                            </Grid>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)