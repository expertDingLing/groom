import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BlackP , GrayP, BlueP} from '../../../components/styled-components'
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    message: {
      padding: theme.spacing(2),
    },
    header_title: {
        display: "flex"
    },
    print: {
        marginLeft: 'auto',
        color: '#299494',
        borderColor: '#299494',
        outline: 'auto',
        marginTop: -10,
        marginBottom: 10
    },
    date: {
        display: 'flex',
        marginTop: -25
    },
    minites: {
        marginLeft: 30
    },
    payment: {
        marginLeft: 30
    },
    btn_group: {
        display: 'flex'
    },
    shop: {
        fontSize: 17
    },
    btn: {
        color: '#299494',
        borderColor: '#299494',
        width: '45%',
        margin: '23px 10px 10px 10px',
    },
    phone_number: {
        textAlign: 'center',
        marginTop: -5,
        color: '#999999'
    },
    avatar: {
        display: 'flex'
    },
    booking_avatar: {
        marginLeft: 'auto',
        marginTop: 15
    }
  });

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepState : "step-1",
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <div className="decision-refund-container">
                <Paper style={{padding:"50px"}} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <div className={classes.header_title}>
                            <BlackP className="header_title">Reservation details</BlackP>
                            <Button className={classes.print}>Print</Button>
                            </div>
                            <Divider/>
                            <div className={classes.avatar}>
                            <BlueP>Confirmed</BlueP>
                                <img className={classes.booking_avatar} src={"/assets/images/booking_avatar.png"} alt="" />
                            </div>
                            <BlackP className="header_title">Darion Jones</BlackP>
                            <div className={classes.date}>
                                <p>Fri, April 3, 2020</p>
                                <p className={classes.minites}>45-60 mins</p>
                                <p className={classes.payment}>$70</p>
                            </div>
                            <p className={classes.shop}>Shop name-Service title</p>
                            <Divider/>
                            <p>You have a confirmed reservation for Apr 3-5. Be sure to</p>
                            <p>message your guest with check-in details before they arrive</p>
                            <Divider />
                        
                            <div className="star">
                                <StarIcon className="star_content"/>
                                <BlueP className="star_description">7 reviews</BlueP>
                            </div>
                            <div className="content">
                                <CheckCircleIcon className="verify_icon"/>
                                <GrayP className="content_detail">Verified</GrayP>
                            </div>
                            <div className="content">
                                <Icon>
                                    <img src={'../../assets/images/icon-join.png'} alt="join icon" />
                                </Icon>
                                <GrayP className="content_detail">Joined since 2019</GrayP>
                            </div>
                            <div className="content">
                                <Icon>
                                    <img src={'../../assets/images/icon-home.png'} alt="home icon" />
                                </Icon>
                                <GrayP className="content_detail">Lives in NC</GrayP>
                            </div>
                            <BlueP style={{marginTop:"30px"}}>View profile</BlueP>
                            <Divider />
                            <div className={classes.btn_group}>
                                <Button className={classes.btn} variant="outlined">Message</Button>
                                <Button className={classes.btn} variant="outlined">Call</Button>
                            </div>
                            <p className={classes.phone_number}>Phone:+1 404 5673</p>
                            <Divider className="divider"/>
                            <div className="provider">
                                <GrayP>Service provide by</GrayP>
                                <BlueP className="provider_detail">Sandra</BlueP>
                            </div>
                            <Divider />
                            <div className="detail">
                                <GrayP>Check -In</GrayP>
                                <GrayP>Tue, 2 March, 2020</GrayP>
                                <GrayP>13:00 PM EST(GMT-5)</GrayP>
                            </div>
                            <Divider />
                            <div className="detail">
                                <GrayP>Check-Out</GrayP>
                                <GrayP>Tue, 4 March, 2020</GrayP>
                                <GrayP>13:00 PM EST(GMT-5)</GrayP>
                            </div>
                            <Divider />
                            <div className="detail">
                                <GrayP>Booking Date</GrayP>
                                <GrayP>Fri,28 feb, 2020</GrayP>
                                <GrayP>13:00 PM EST(GMT-5)</GrayP>
                            </div>
                            <Divider />
                            <div className="provider">
                                <GrayP>Confirmation Code</GrayP>
                                <GrayP className="provider_detail">XVNDH78MDJ</GrayP>
                            </div>
                            <Divider />
                            <BlueP>View calendar</BlueP>
                            <BlackP>Payout</BlackP>
                            <div className="provider">
                                <GrayP>$24</GrayP>
                                <GrayP className="provider_detail">$24</GrayP>
                            </div>
                            <div className="service">
                                <GrayP>Service</GrayP>
                                <GrayP className="provider_detail">$6</GrayP>
                            </div>
                            <Divider />
                            <div className="provider">
                                <BlackP>Total(USD)</BlackP>
                                <GrayP className="provider_detail">$30</GrayP>
                            </div>
                            <BlueP>View transaction history</BlueP>
                        </Grid>
                    </Grid>
                </Paper>
                
            </div>
        )
    }
}

export default withStyles(styles)(index)
