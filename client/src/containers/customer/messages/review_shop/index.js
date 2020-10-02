import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
        height: 2700
    },
    content: {
        backgroundColor: 'white',
        height: 2500,
        padding: 50,
    },
    title: {
        display: 'flex'
    },
    private: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 600
    },
    header_title1: {
        fontSize: 20,
        fontWeight: 600
    },
    time: {
        marginLeft: 30
    },
    divider: {
        marginTop: 20
    },
    header_title2: {
        marginTop: 5
    },
    title2: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 600
    },
    textarea1: {
        marginTop: 20,
        width: '80%',
        padding: '20px 15px',
        fontSize: 15,
        color: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderStyle: 'double',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    textarea2: {
        marginTop: 20,
        width: '94%',
        padding: '20px 15px',
        fontSize: 15,
        color: '#c2c2c2',
        borderColor: '#c2c2c2',
        borderStyle: 'double',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    stars: {
        display: 'flex'
    },
    star1: {
        color: '#c2c2c2'
    },
    star2: {
        color: '#c2c2c2',
        marginLeft: 10
    },
    star3: {
        color: '#c2c2c2',
        marginLeft: 10
    },
    star4: {
        color: '#c2c2c2',
        marginLeft: 10
    },
    star5: {
        color: '#c2c2c2',
        marginLeft: 10
    },
    yes: {
        marginTop: 10,
        width: 100,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        borderStyle: 'double',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    no: {
        marginTop: 10,
        marginLeft: 20,
        outline: 'none',
        width: 100,
        height: 30,
        backgroundColor: 'white',
        borderStyle: 'double',
        borderColor: '#c2c2c2',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    submit: {
        marginTop: 40,
        width: 220,
        height: 30,
        color: 'white',
        backgroundColor: '#299494',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
    },
    complete: {
        fontSize: 13
    },
    review: {
        width: '100%',
        height: 30,
        marginTop: 20,
        border: 'none',
        outline: 'none',
        color: 'white',
        backgroundColor: '#299494',
        borderRadius: 3,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    review_content: {
        marginTop: 15,
        display: 'flex'
    },
    star_description: {
        marginLeft: 10,
        color: '#299494'
    },
    profile: {
        marginTop: 20,
        color: '#299494'
    },
    call: {
        width: '100%',
        borderColor: '#299494',
        color: '#299494',
        borderStyle: 'double',
        outline: 'auto',
        height: 30,
        marginTop: 20,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#299494',
            outline: 'auto'
        }
    },
    save: {
        width: 120,
        borderColor: '#299494',
        color: '#299494',
        outline: 'auto',
        borderStyle: 'double',
        height: 40,
        marginTop: 20,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#299494',
            outline: 'auto'
        }
    },
    provide_content: {
        marginLeft: 'auto',
        color: '#299494'
    },
    detail: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20
    },
    titles: {
        display: 'flex',
        marginTop: 20
    },
    confirmcode: {
        marginLeft: 'auto'
    },
    payout: {
        marginTop: 10,
        fontWeight: 600
    },
    email: {
        marginTop: 50,
        color: '#299494',
        fontWeight: 600
    },
    email_content: {
        marginTop: 10
    },
    header_content: {
        marginTop: 20,
        color: '#299494',
        fontWeight: 600
    },
    frequency: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: 20
    },
    question: {
        marginTop: 20,
        fontWeight: 600
    },
    more: {
        marginTop: 10,
        color: '#299494',
        fontWeight: 600
    },
    right: {
        padding: 15
    },
    textarea3: {
        width: '96%',
        marginLeft: 40,
        height: 150
    },
    message_content: {
        marginLeft: 50,
        marginTop: 20
    },
    image1: {
        width: 100,
        height: 100,
        marginLeft: 30
    },
    avatar1: {
        width: '100%',
        height: 140,
        marginLeft: 20
    },
    avatar2: {
        height: 145,
        marginLeft: 40,
        width: '90%'
    },
    image2: {
        width: 100,
        height: 100
    },
    send: {
        marginLeft: 'auto',
        width: 150,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#299494',
        borderStyle: 'double',
        borderRadius: 3,
        color: '#299494',
        outline: 'auto',
        marginTop: 20,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#299494',
            outline: 'auto'
        }
    },
    text1: {
        position: 'absolute',
        marginTop: -110,
        marginLeft: 50
    },
    text2: {
        position: 'absolute',
        marginTop: -50,
        marginLeft: 50
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: 'first',
            value: "0",
            flag: false
        }
    }

    render() {
        const { classes } = this.props;
        const { formState } = this.state;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    {formState === 'first' && (
                        <div>
                            <Typography className={classes.header_title1}>Rafael Veintimilla</Typography>
                            <div className={classes.title}>
                                <Typography className={classes.header_title2}>SAT, MAY 20</Typography>
                                <Typography className={classes.time}>12:00 PM-3:00 PM</Typography>
                            </div>
                            <Divider className={classes.divider} />
                            <Typography className={classes.title2}>Leave a public review</Typography>
                            <Typography className={classes.header_title2}>Write a fair, honest review about Rafael's service so future providers know what to expect.</Typography>
                            <Divider className={classes.divider} />
                            <textarea className={classes.textarea1} defaultValue="Say few words about Rafael's service" />
                            <Typography className={classes.title2}>Add a private note</Typography>
                            <Typography className={classes.header_title2}>Offer suggestions, or say thanks for being a great customer.We won't publish your note on Rafael's profile</Typography>
                            <Divider className={classes.divider} />
                            <textarea className={classes.textarea1} defaultValue='Add a private note (optional)' />
                            <Typography className={classes.title2}>Cleanliness</Typography>
                            <Typography className={classes.header_title2}>Did Rafael arrive on time and prepared for the service?</Typography>
                            <div className={classes.stars}>
                                <StarIcon className={classes.star1} />
                                <StarIcon className={classes.star2} />
                                <StarIcon className={classes.star3} />
                                <StarIcon className={classes.star4} />
                                <StarIcon className={classes.star5} />
                            </div>
                            <Typography className={classes.title2}>Communication</Typography>
                            <Typography className={classes.header_title2}>How clearly did Rafael communicate their questions and concerns?</Typography>
                            <div className={classes.stars}>
                                <StarIcon className={classes.star1} />
                                <StarIcon className={classes.star2} />
                                <StarIcon className={classes.star3} />
                                <StarIcon className={classes.star4} />
                                <StarIcon className={classes.star5} />
                            </div>
                            <Typography className={classes.title2}>Observance of shop rules</Typography>
                            <Typography className={classes.header_title2}>Did Rafael observe your shop rules</Typography>
                            <div className={classes.stars}>
                                <StarIcon className={classes.star1} />
                                <StarIcon className={classes.star2} />
                                <StarIcon className={classes.star3} />
                                <StarIcon className={classes.star4} />
                                <StarIcon className={classes.star5} />
                            </div>
                            <Typography className={classes.title2}>Would you service Rafael again?</Typography>
                            <Typography className={classes.header_title2}>How clearly did Rafael communicate their questions and concerns?</Typography>
                            <div className={classes.stars}>
                                <button className={classes.yes}>Yes</button>
                                <button className={classes.no}>No</button>
                            </div>
                            <button className={classes.submit} onClick={() => this.setState({ formState: "final" })}>Submit review</button>
                        </div>
                    )}
                    {formState === 'final' && (
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Typography className={classes.complete}>COMPLETED</Typography>
                                <Typography className={classes.header_title1}>Rafael Veintimilla</Typography>
                                <Typography>Brochet</Typography>
                                <Typography>Lorem ipsum dolor sit amet,consetetur sadipscing elitr.</Typography>
                                <Divider />
                                <Typography className={classes.header_title2}>It is time to write a review for Rafael.You have 7 days to</Typography>
                                <Typography>write one and it usually takes one minute</Typography>
                                <Divider />
                                <button className={classes.review}>Write a review</button>
                                <div className={classes.review_content}>
                                    <StarIcon className={classes.star1} />
                                    <Typography className={classes.star_description}>7 reviews</Typography>
                                </div>
                                <div className={classes.review_content}>
                                    <CheckCircleIcon className={classes.star1} />
                                    <Typography className={classes.star2}>Verified</Typography>
                                </div>
                                <div className={classes.review_content}>
                                    <Icon>
                                        <img src={'../../assets/images/icon-join.png'} alt="join icon" className={classes.star1} />
                                    </Icon>
                                    <Typography className={classes.star2}>Joined since 2019</Typography>
                                </div>
                                <div className={classes.review_content}>
                                    <Icon>
                                        <img src={'../../assets/images/icon-home.png'} alt="home icon" className={classes.star1} />
                                    </Icon>
                                    <Typography className={classes.star2}>Lives in NC</Typography>
                                </div>
                                <Typography className={classes.profile}>View profile</Typography>
                                <Divider />
                                <button className={classes.call}>Call</button>
                                <Divider className={classes.divider}/>
                                <div className={classes.titles}>
                                    <Typography>Service provide by</Typography>
                                    <Typography className={classes.provide_content}>Sandra</Typography>
                                </div>
                                <Divider className={classes.divider} />
                                <div className={classes.detail}>
                                    <Typography>Check -In</Typography>
                                    <Typography>Tue, 2 March, 2020</Typography>
                                    <Typography>13:00 PM EST(GMT-5)</Typography>
                                </div>
                                <Divider className={classes.divider} />
                                <div className={classes.detail}>
                                    <Typography>Check-Out</Typography>
                                    <Typography>Tue, 4 March, 2020</Typography>
                                    <Typography>13:00 PM EST(GMT-5)</Typography>
                                </div>
                                <Divider className={classes.divider} />
                                <div className={classes.detail}>
                                    <Typography>Booking Date</Typography>
                                    <Typography>Fri,28 feb, 2020</Typography>
                                    <Typography>13:00 PM EST(GMT-5)</Typography>
                                </div>
                                <Divider className={classes.divider} />
                                <div className={classes.titles}>
                                    <Typography>Confirmation Code</Typography>
                                    <Typography className={classes.confirmcode}>XVNDH78MDJ</Typography>
                                </div>
                                <Divider className={classes.divider}/>
                                <Typography className={classes.profile}>View calendar</Typography>
                                <Typography className={classes.payout}>Payout</Typography>
                                <div className={classes.titles}>
                                    <Typography>$24</Typography>
                                    <Typography className={classes.confirmcode}>$24</Typography>
                                </div>
                                <div className={classes.titles}>
                                    <Typography>Service</Typography>
                                    <Typography className={classes.confirmcode}>$6</Typography>
                                </div>
                                <Divider className={classes.divider}/>
                                <div className={classes.titles}>
                                    <Typography>Total(USD)</Typography>
                                    <Typography className={classes.confirmcode}>$30</Typography>
                                </div>
                                <Typography className={classes.profile}>View transaction history</Typography>

                                <Typography className={classes.private}>Private notes</Typography>
                                <Typography>These won't be shown to customers.</Typography>
                                <div>
                                    <textarea className={classes.textarea2} rows="5"></textarea>
                                </div>
                                <button className={classes.save}>Save</button>
                                <Typography className={classes.email}>Email guest</Typography>
                                <Typography className={classes.email_content}>email@groom.com</Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.header_content}>Send or request money</Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.header_content}>Report user</Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.header_content}>Help</Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.frequency}>Frequently asked questions</Typography>
                                <Typography className={classes.question}>Can I edit a review I wrote?</Typography>
                                <Typography className={classes.email_content}>To encourage honest and impartial review, a review can be</Typography>
                                <Typography>edited before its been published</Typography>
                                <Typography className={classes.more}>Learn more</Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.question}>How do reviews work for customers?</Typography>
                                <Typography className={classes.email_content}>All the review on Groom written by providers and customers</Typography>
                                <Typography>who have completed their service using</Typography>
                                <Typography className={classes.more}>Read more</Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.question}>How long do I have to write a review after a service has ended?</Typography>
                                <Typography className={classes.email_content}>You have 14 days after checkout to write a review for a</Typography>
                                <Typography>service. To see which service are past the 1</Typography>
                                <Typography className={classes.more}>Read more</Typography>
                                <Divider className={classes.divider} />
                                <Typography className={classes.profile}>See more topics</Typography>
                            </Grid>
                            <Grid item xs={7} className={classes.right}>
                                <div className={classes.message}>
                                    <textarea className={classes.textarea3} rows="5"></textarea>
                                    <div className={classes.stars}>
                                        <Typography className={classes.message_content}>Use a Saved Message</Typography>
                                        <Button className={classes.send} variant="outlined">Send Message</Button>
                                    </div>
                                </div>
                                <Typography>Cancelled March 13, 2020</Typography>
                                <div style={{ display: "flex", marginTop: '20px' }}>
                                    <Avatar src={'/assets/images/refund1.png'} className={classes.image1} alt="user img" />
                                    <div>
                                        <img src={'/assets/images/union3.png'} className={classes.avatar1} alt="user img" />
                                        <Typography className={classes.text1}>Thank you</Typography>
                                        <Typography className={classes.text2}>Today at 3:05 PM Darion</Typography>
                                    </div>
                                </div>
                                <div style={{ display: "flex", marginTop: '50px' }}>
                                    <div>
                                        <img src={'/assets/images/Union2.png'} className={classes.avatar2} alt="user img" />
                                        <Typography className={classes.text1}>Thank you</Typography>
                                        <Typography className={classes.text2}>Today at 3:05 PM Darion</Typography>
                                    </div>
                                    <Avatar src={'/assets/images/refund2.png'} className={classes.image2} alt="user img" />
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)