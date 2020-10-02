import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50
    },
    content: {
        backgroundColor: 'white',
        padding: 50,
        height: 1200,
    },
    header: {
        fontSize: 17,
        fontWeight: 600
    },
    title: {
        marginTop: 15,
        fontWeight: 600
    },
    contents: {
        display: 'flex'
    },
    detail1: {
        fontSize: 14,
        color: '#c2c2c2'
    },
    detail2: {
        fontSize: 14,
        color: '#c2c2c2',
        marginLeft: 20
    },
    divider: {
        marginTop: 10
    },
    divide: {
        marginTop: 10,
        width: '90%'
    },
    btn_group: {
        marginTop: 20,
        display: 'flex'
    },
    first_btn: {
        width: 200,
        height: 30,
        borderRadius: 3,
        borderStyle: 'double',
        outline: 'none',
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    second_btn: {
        marginLeft: 20,
        width: 70,
        height: 30,
        borderRadius: 3,
        borderStyle: 'double',
        outline: 'none',
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    third_btn: {
        marginLeft: 20,
        width: 70,
        height: 30,
        borderRadius: 3,
        outline: 'none',
        borderStyle: 'double',
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    book: {
        marginTop: 50,
        width: 150,
        height: 30,
        border: 'none',
        outline: 'none',
        borderRadius: 5,
        backgroundColor: '#299494',
        color: 'white',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    close: {
        marginLeft: 'auto',
        marginRight: 20,
        display: 'flex',
        paddingTop: 20,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    modal_header: {
        marginTop: 10,
        fontSize: 17,
        fontWeight: 600
    },
    image1: {
        marginTop: 10,
        width: '92%'
    },
    modal_title: {
        marginTop: 15,
        display: 'flex'
    },
    modal_title1: {
        display: 'flex'
    },
    title1: {
        fontSize: 20,
        fontWeight: 600,
        color: '#7c7c7c'
    },
    title2: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 600
    },
    image2: {
        marginLeft: 'auto',
        display: 'flex',
        height: 60,
        marginRight: 50
    },
    details: {
        marginLeft: 'auto',
        marginRight: 50
    },
    full: {
        width: '90%',
        height: 30,
        marginTop: 15,
        backgroundColor: '#299494',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    get: {
        marginLeft: 'auto',
        marginRight: 50,
        display: 'flex',
        color: '#299494'
    },
    detail3: {
        fontSize: 14
    },
    title3: {
        fontSize: 16,
        fontWeight: 600
    },
    detail5: {
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 'auto',
        marginRight: 50
    },
    detail4: {
        fontSize: 12
    },
    change: {
        marginTop: 20,
        width: '90%',
        height: 30,
        borderRadius: 3,
        backgroundColor: 'white',
        outline: 'none',
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
    number: {
        marginLeft: 'auto',
        marginRight: 50,
        color: '#f2790f'
    },
    bottom: {
        height: 200,
        backgroundColor: 'white'
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    showModal = () => {
        this.setState({
            show: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false,
        })
    }
    render() {
        const { classes } = this.props;
        const {show} = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <Typography className={classes.header}>Payment method</Typography>
                    <Typography className={classes.title}>Crochet Braids</Typography>
                    <div className={classes.contents}>
                        <Typography className={classes.detail1}>$75</Typography>
                        <Typography className={classes.detail2}>40 mins</Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <Typography className={classes.title}>March 18, 2020</Typography>
                    <Typography className={classes.detail1}>10 AM - 10:40 AM</Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.btn_group}>
                        <button className={classes.first_btn}>Card number</button>
                        <button className={classes.second_btn}>MM/YY</button>
                        <button className={classes.third_btn}>CVC</button>
                    </div>
                    <button className={classes.book} onClick={this.showModal}>Book Now</button>
                </div>
                <Dialog open={show}
                    onClose={this.handleClose}
                    scroll='body'
                >
                    <div style={{ borderRadius:"5px", background: "white", width:"545px", height:"800px", marginLeft:"auto", padding: '20px', marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <CloseIcon className={classes.close} onClick={this.handleClose}/>
                        <Typography className={classes.modal_header}>Your booking is confirmed</Typography>
                        <Typography>You're going to be groomed by Sandra</Typography>
                        <img src={'/assets/images/booking_approval.png'} alt='' className={classes.image1} />
                        <div className={classes.modal_title}>
                            <div>
                                <Typography className={classes.title1}>Marchie Forville</Typography>
                                <Typography className={classes.title2}>Fancy hair cutting</Typography>
                            </div>
                            <img src={'/assets/images/booking_approval_avatar.png'} alt='' className={classes.image2} />
                        </div>
                        <Divider className={classes.divide} />
                        <div className={classes.modal_title}>
                            <Typography>Saturday,</Typography>
                            <Typography className={classes.details}>Saturday</Typography>
                        </div>
                        <div className={classes.modal_title}>
                            <Typography>March 24,2020</Typography>
                            <Typography className={classes.details}>March 24,2020</Typography>
                        </div>
                        <div className={classes.modal_title}>
                            <Typography>1PM-3PM</Typography>
                            <Typography className={classes.details}>Flexible checkout time</Typography>
                        </div>
                        <button className={classes.full}>View full details</button>
                        <div className={classes.modal_title}>
                            <div>
                                <Typography className={classes.title3}>Address</Typography>
                                <Typography className={classes.detail3}>Lorem ipsum.</Typography>
                            </div>
                            <Typography className={classes.get}>Get directions</Typography>
                        </div>
                        <Divider className={classes.divide} />
                        <div className={classes.modal_title}>
                            <div>
                                <Typography className={classes.title3}>Payment</Typography>
                                <Typography className={classes.detail3}>$389.90</Typography>
                                <Typography className={classes.detail4}>March 24,2020 6:24 PM EST</Typography>
                                <Typography className={classes.detail4}>MASTERCARD ********2145</Typography>
                            </div>
                            <Typography className={classes.get}>Get directions</Typography>
                        </div>
                        <Divider className={classes.divide} />
                        <div className={classes.modal_title}>
                            <Typography className={classes.title3}>Amount paid(USD)</Typography>
                            <Typography className={classes.detail5}>$389.90</Typography>
                        </div>
                        <Divider className={classes.divide} />
                        <Typography className={classes.title3}>Reservation Code</Typography>
                        <Typography className={classes.detail3}>BFNFJH89EJJ</Typography>
                        <Divider className={classes.divide} />
                        <button className={classes.change}>CHANGE RESERVATION</button>
                        <div className={classes.modal_title}>
                            <Typography className={classes.title3}>Jack is your service provider</Typography>
                            <Typography className={classes.get}>Message Service Provider</Typography>
                        </div>
                        <Typography className={classes.detail3}>Contact Jack to co-ordinate arrival time</Typography>
                        <div className={classes.modal_title1}>
                            <Typography className={classes.detail3}>and key exchange</Typography>
                            <Typography className={classes.number}>+33 6 24 05 91 65</Typography>
                        </div>
                        <Divider className={classes.divide} />
                        <div className={classes.modal_title}>
                            <Typography className={classes.title3}>KNOW WHAT TO EXPECT</Typography>
                            <Typography className={classes.get}>View Shop Rules</Typography>
                        </div>
                        <Typography className={classes.detail3}>Make sure to review all the rules</Typography>
                        <Divider className={classes.divide} />
                        <div className={classes.modal_title}>
                            <Typography className={classes.title3}>Keep in mind</Typography>
                            <Typography className={classes.get}>Learn more</Typography>
                        </div>
                        <Typography className={classes.detail3}>The shop has not reported</Typography>
                        <Divider className={classes.divide} />
                        <div className={classes.modal_title}>
                            <Typography className={classes.title3}>Customer Support</Typography>
                            <Typography className={classes.get}>Visit Help Center</Typography>
                        </div>
                        <Typography className={classes.detail3}>Contact our support team 24/7 from</Typography>
                        <div className={classes.modal_title1}>
                            <Typography className={classes.detail3}>any where in the world</Typography>
                            <Typography className={classes.number}>Contact Groom</Typography>
                        </div>
                        <div className={classes.bottom}/>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(index)