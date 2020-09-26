import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Radio from '@material-ui/core/Radio';
import { Divider } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
    },
    content: {
        backgroundColor: 'white',
        height: 1000,
        padding: 50,
        display: 'flex'
    },
    title: {
        marginTop: 50,
        height: 170,
        borderColor: 'white',
        border: 'groove',
        width: '100%',
        padding: 30
    },
    radio_content: {
        marginTop: 20,
        height: 100,
        borderColor: 'white',
        border: 'groove',
        width: '55%',
        padding: 30,
        marginLeft: 100,
        display: 'flex'
    },
    notification_content: {
        marginTop: 20,
        height: 100,
        borderColor: 'white',
        border: 'groove',
        width: '100%',
        padding: 30,
        display: 'flex'
    },
    close: {
        marginLeft: 'auto',
        marginRight: 10,
        marginTop: 10,
        display: 'flex',
        color: '#7c7c7c',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    header_title: {
        fontSize: 18,
        fontWeight: 600,
        paddingTop: 10
    },
    learn: {
        backgroundColor: '#299494',
        color: 'white',
        outline: 'none',
        borderWidth: 1,
        width: 120,
        height: 35,
        '&:focus': {
            backgroundColor: '#299494',
            outline: 'auto'
        },
        marginTop: 20
    },
    header: {
        fontSize: 25,
        fontWeight: 700
    },
    notification: {
        marginTop: 30,
        
    },
    notification_title: {
        fontSize: 20,
        fontWeight: 700
    },
    notification_detail: {
        marginLeft: 20
    },
    notification_date: {
        marginTop: 10
    },
    reservation: {
        width: '100%',
        display: 'flex'
    },
    calendar: {
        color: '#299494',
        marginLeft: 'auto'
    },
    all: {
        color:'#299494',
        marginLeft: 20,
        marginRight: 5
    },
    radio: {
        marginLeft: 20,
        marginTop: 20,
        display: 'flex'
    },
    radio_detail: {
        marginLeft: 30,
        marginTop: 10
    },
    radio_image: {
        marginLeft: 'auto',
        marginRight: 20,
        height: 70
    },
    avatar: {
        height: 70
    },
    provider: {
        marginTop: 80
    },
    provider_detail: {
        marginTop: 30
    },
    detail: {
        marginTop: 10,
        display: 'flex'
    },
    earnings: {
        color: '#299494',
        marginLeft: 'auto'
    },
    error: {
        color: 'yellow'
    },
    divider: {
        marginTop: 20
    },
    donating: {
        width: 150,
        height: 35,
        borderColor: '#299494',
        borderRadius: 3,
        color: '#299494',
        auto: 'none',
        borderWidth: 1,
        marginTop: 70,
        backgroundColor: 'white',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus':{
            borderColor: '#299494',
            backgroundColor: 'white',
            outline: 'auto'
        }
    },
    next: {
        marginTop: 20
    },
    error_detail: {
        display: 'flex',
        marginTop: 10
    },
    content_title: {
        fontSize: 25,
        fontWeight: 700,
        marginTop: 20
    },
    content_detail: {
        marginTop: 20
    },
    notifications: {
        fontSize: 12
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    <div style={{width: '100%'}}>
                    <Typography className={classes.header}>Dashboard</Typography>
                    <Grid container item lg={7}>
                        <div className={classes.title}>
                            <HighlightOffIcon className={classes.close} />
                            <Typography className={classes.header_title}>Ways to keep providing services now</Typography>
                            <Typography>Many want.</Typography>
                            <Typography>Here is how you can meet their needs right now</Typography>
                            <button className={classes.learn}>Learn more</button>
                        </div>
                    </Grid>
                    <div className={classes.notification}>
                        <Typography className={classes.notification_title}>Notifications</Typography>
                    </div>
                    <Grid container item lg={7}>
                        <div className={classes.notification_content}>
                            <img src={'/assets/images/notification.png'} alt="" className={classes.avatar}/>
                            <div className={classes.notification_detail}>
                                <Typography className={classes.notifications}>Please leave a review for Rafael Ventimilla. The</Typography>
                                <Typography className={classes.notifications}>review period is open for 14 days after the</Typography>
                                <Typography className={classes.notifications}>grooming.</Typography>
                                <Typography className={classes.notification_date}>March 16</Typography>
                            </div>
                        </div>
                    </Grid>
                    <div className={classes.notification}>
                        <Typography className={classes.notification_title}>Reservations</Typography>
                        <Grid container item lg={7}>
                            <div className={classes.reservation}>
                                <Typography className={classes.calendar}>Multi-calendar</Typography>
                                <Typography className={classes.all}>All reservations</Typography>
                            </div>
                        </Grid>
                    </div>
                    <div className={classes.radio}>
                        <Radio
                            onChange={this.handleChange}
                            value="a"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        /> 
                        <Typography className={classes.radio_detail}>
                            Sat, May 16
                        </Typography>
                    </div>
                    <Grid container item lg={7}>
                        <div className={classes.radio_content}>
                            <div>
                                <Typography>Daniel Davidson</Typography>
                                <Typography>Checkout</Typography>
                                <Typography>Braids</Typography>
                            </div>
                            <img src={'/assets/images/radio.png'} alt="" className={classes.radio_image}/>
                        </div>
                    </Grid>
                    </div>
                    <Grid item lg={7}>
                        <Typography className={classes.provider}>Provider progress</Typography>
                        <div className={classes.provider_detail}>
                            <div className={classes.detail}>
                                <Typography>March earnings</Typography>
                                <Typography className={classes.earnings}>$ 2,000</Typography>
                            </div>
                            <div className={classes.detail}>
                                <Typography>30-days reviews</Typography>
                                <Typography className={classes.earnings}>528</Typography>
                            </div>
                            <div className={classes.detail}>
                                <Typography>30-days bookings</Typography>
                                <Typography className={classes.earnings}>2</Typography>
                            </div>
                            <div className={classes.detail}>
                                <Typography>Overall ratings</Typography>
                                <Typography className={classes.earnings}>4.7</Typography>
                            </div>
                            <div className={classes.detail}>
                                <Typography>Total reviews</Typography>
                                <Typography className={classes.earnings}>80</Typography>
                            </div>
                            <Divider className={classes.divider}></Divider>
                            <div className={classes.next}>
                                <Typography>NEXT UP</Typography>
                                <div className={classes.error_detail}>
                                    <ErrorIcon className={classes.error}/>
                                    <Typography>3 listings need your attention</Typography>
                                </div>
                            </div>
                            <Divider className={classes.divider} />
                            <div className={classes.provider_content}>
                                <Typography className={classes.content_title}>Give back while you host</Typography>
                                <Typography className={classes.content_detail}>Donations help provide temporary housing</Typography>
                                <button className={classes.donating}>Start donating</button>
                            </div>
                            
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
