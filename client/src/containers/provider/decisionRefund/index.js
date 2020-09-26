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
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    message: {
      padding: theme.spacing(2),
    },
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
                <Paper style={{padding:"30px"}} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <p>Conversation with Darion</p>
                            <p>Cancelled</p>
                            <BlackP className="header_title">Darion</BlackP>
                            <GrayP>Brochet</GrayP>
                            <GrayP className="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</GrayP>
                            <Divider />
                            <GrayP>This customer cancelled this booking</GrayP>
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
                            <BlueP style={{marginTop:"80px"}}>View profile</BlueP>
                            <Divider />
                            <Button className="special_btn" variant="outlined">Special Offer</Button>
                            <Divider className="divider"/>
                            <div className="provider">
                                <GrayP>Provider</GrayP>
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

                            <BlackP className="private_note">Private notes</BlackP>
                            <GrayP>These won't be shown to customers.</GrayP>
                            <div>
                                <textarea className="text_area" rows="5"></textarea>
                            </div>
                            <Button className="save_btn" variant="outlined">Save</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.message}>
                                <textarea className="text_area" rows="5"></textarea>
                                <div className="provider">
                                    <GrayP>Use a Saved Message</GrayP>
                                    <Button className="send_message_btn" variant="outlined">Send Message</Button>
                                </div>
                            </div>
                            <GrayP>Cancelled March 13, 2020</GrayP>
                            <div style={{display: "flex"}}>
                                <Avatar src={'../../assets/images/refund1.png'} className="refund_avatar" alt="user img" />
                                <div>
                                    <img src={'../../assets/images/union3.png'} className="message_avatar" alt="user img" />
                                    <GrayP className="refund_txt1">Thank you</GrayP>
                                    <GrayP className="refund_txt2">Today at 3:05 PM Darion</GrayP>
                                </div>
                            </div>
                            <div style={{display: "flex"}}>
                                <div>
                                    <img src={'../../assets/images/Union2.png'} className="message_avatar2" alt="user img" />
                                    <GrayP className="refund_txt1">Thank you</GrayP>
                                    <GrayP className="refund_txt2">Today at 3:05 PM Darion</GrayP>
                                </div>
                                <Avatar src={'../../assets/images/refund2.png'} className="refund_avatar2" alt="user img" />
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                
            </div>
        )
    }
}

export default withStyles(styles)(index)
