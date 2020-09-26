import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { Divider } from '@material-ui/core';


const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50
    },
    content: {
        backgroundColor: 'white',
        height: 1500,
        padding: 50
    },
    header: {
        fontSize: 20,
        fontWeight: 700
    },
    change: {
        display: 'flex',
        marginTop: 30
    },
    change_content: {
        color: '#299494'
    },
    image: {
        marginLeft: 2,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    list: {
        display: 'flex',
        marginTop: 30
    },
    listing: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: -5
    },
    booking: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    price: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    available: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    local: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    manager: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    divider: {
        marginTop: 10
    },
    list_header: {
        marginTop: 50
    },
    list_title: {
        marginTop: 30
    },
    photo: {
        marginTop: 50,
        display: 'flex'
    },
    edit: {
        marginLeft: 'auto',
        backgroundColor: 'white',
        width: 50,
        color: '#299494',
        borderColor: '#299494',
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    avatar1: {
        width: '97%',
        height: 200,
    },
    avatar2: {
        width: '97%',
        height: 200,
    },
    avatar3: {
        width: '97%',
        height: 200,
    },
    service: {
        marginTop: 50,
        display: 'flex'
    },
    detail: {
        marginTop: 30,
        display: 'flex'
    },
    first_price: {
        marginLeft: 100,
    },
    first_mins: {
        marginLeft: 70
    },
    book: {
        marginLeft: 'auto',
        width: 50,
        height: 30,
        marginTop: -3,
        color: '#299494',
        borderColor: '#299494',
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    divide: {
        marginTop: 20
    },
    second_price: {
        marginLeft: 82
    },
    second_mins: {
        marginLeft: 70
    },
    third_price: {
        marginLeft: 118
    },
    third_mins: {
        marginLeft: 73
    },
    list_detail: {
        display: 'flex',
        marginTop: 30
    },
    alice: {
        marginTop: 10
    },
    booking_header: {
        marginTop: 30
    },
    header_title: {
        fontSize: 25,
        fontWeight: 700
    },
    booking_content: {
        display: 'flex'
    },
    check: {
        marginLeft: -10
    },
    booking_detail: {
        marginLeft: 10,
        marginTop: 9
    },
    choose: {
        marginTop: 10,
        fontSize: 20
    },
    guest: {
        marginTop: 50,
        display: 'flex'
    },
    booking_title: {
        marginTop: -10,
        fontSize: 23,
        fontWeight: 700
    },
    booking_list: {
        marginTop: 30,
        display: 'flex',
    },
    not: {
        marginLeft: 'auto'
    },
    booking_list_title: {
        marginTop: 15
    },
    invite: {
        marginTop: 30,
        height: 30,
        color: '#299494',
        borderColor: '#299494',
        outline: 'auto',
        borderRadius: 5,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    manage: {
        marginTop: 34,
        marginLeft: 30,
        color: '#299494'
    },
    activity: {
        height: 170,
        border: 'groove',
        marginLeft: 50,
        padding: 10
    },
    activity_header: {
        fontSize: 20,
    },
    activity_title: {
        fontSize: 20,
        fontWeight: 700,
        color: '#299494',
        marginTop: 5
    },
    remove: {
        marginLeft: 'auto',
        marginRight: 20,
        color: '#299494',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    info: {
        color: '#299494',
        marginTop: 10
    },
    photo_detail: {
        marginTop: 10,
        marginLeft: 30
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: 'listing',
        }
    }
    render() {
        const { classes } = this.props;
        const { formState } = this.state;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    <Typography className={classes.header}>Shop Name</Typography>
                    <div className={classes.change}>
                        <Typography className={classes.change_content}>Change Listing</Typography>
                        <img src={"/assets/images/arrow.png"} alt="" className={classes.image} />
                    </div>
                    <div className={classes.list}>
                        <button className={classes.listing} onClick={() => this.setState({ formState: "listing" })}>Listing details</button>
                        <button variant="contained" className={classes.booking} onClick={() => this.setState({ formState: "booking" })}>Booking settings</button>
                        <button variant="contained" className={classes.price} onClick={() => this.setState({ formState: "price" })}>Pricing</button>
                        <button variant="contained" className={classes.available} onClick={() => this.setState({ formState: "available" })}>Availability</button>
                        <button variant="contained" className={classes.local} onClick={() => this.setState({ formState: "local" })}>Local taxes and laws</button>
                        <button variant="contained" className={classes.manager} onClick={() => this.setState({ formState: "manager" })}>Providers and Shop Manager</button>
                    </div>
                    <Divider className={classes.divider} />
                    {formState === 'listing' && (
                        <div className={classes.list_header}>
                            <Typography>To do</Typography>
                            <Typography className={classes.list_title}>Nothing pending at this time</Typography>
                            <Grid container spacing={1}>
                                <Grid item lg={9}>
                                    <div className={classes.photo}>
                                        <Typography>Photo</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.list}>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/home-background.png"} alt="" className={classes.avatar1} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/home-background.png"} alt="" className={classes.avatar2} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/home-background.png"} alt="" className={classes.avatar3} />
                                        </Grid>
                                    </div>
                                    <div className={classes.service}>
                                        <Typography>Service Categories and Services</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Grid item lg={8}>
                                        <Divider className={classes.divider} />
                                        <div className={classes.detail}>
                                            <Typography className={classes.first_detail}>Face\ Eye Lashes\ Extensions</Typography>
                                            <Typography className={classes.first_price}>$26</Typography>
                                            <Typography className={classes.first_mins}>40 mins</Typography>
                                            <button className={classes.book}>Book</button>
                                        </div>
                                        <Divider className={classes.divide} />
                                        <div className={classes.detail}>
                                            <Typography className={classes.first_detail}>Make Up\ Daily Beauty\ Lip Stick</Typography>
                                            <Typography className={classes.second_price}>$26</Typography>
                                            <Typography className={classes.second_mins}>40 mins</Typography>
                                            <button className={classes.book}>Book</button>
                                        </div>
                                        <Divider className={classes.divide} />
                                        <div className={classes.detail}>
                                            <Typography className={classes.first_detail}>Nails\ Manicure\ French Tip</Typography>
                                            <Typography className={classes.third_price}>$26</Typography>
                                            <Typography className={classes.third_mins}>40 mins</Typography>
                                            <button className={classes.book}>Book</button>
                                        </div>
                                        <Divider className={classes.divide} />
                                    </Grid>
                                    <div className={classes.list_detail}>
                                        <Typography className={classes.access}>Accessibility</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.list_detail}>
                                        <Typography>Shop name & description</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.alice}>Alices Hair Wonderland</Typography>
                                    <Divider className={classes.divide} />
                                    <div className={classes.list_detail}>
                                        <Typography>Custom link</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.alice}>gggroom.com/shopname</Typography>
                                    <Divider className={classes.divide} />
                                    <div className={classes.list_detail}>
                                        <Typography>Service Categories</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.alice}>Nails\Make Up\Face</Typography>
                                    <Divider className={classes.divide} />
                                    <div className={classes.list_detail}>
                                        <Typography>Location</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.alice}>123 Edgewood, st Releigh, NC 27089</Typography>
                                    <Divider className={classes.divide} />
                                </Grid>
                            </Grid>
                        </div>
                    )}
                    {formState === 'booking' && (
                        <div className={classes.booking_header}>
                            <Typography className={classes.header_title}>How customers can book</Typography>
                            <Typography className={classes.choose}>Choose how customers will book your services</Typography>
                            <div className={classes.booking_content}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    color="primary"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    className={classes.check}
                                />
                                <Typography className={classes.booking_detail}>All customers must send a grooming request</Typography>
                            </div>
                            <div className={classes.booking_content}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    color="primary"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    className={classes.check}
                                />
                                <Typography className={classes.booking_detail}>Customers who meet all your requirements can book instantly. Others will need to send a request</Typography>
                            </div>
                            <Grid container spacing={1}>
                                <Grid item lg={9}>
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Guest requirements</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.divide}>
                                        <Typography>Groom standard requirements</Typography>
                                        <Typography>Confirmed phone number,email address,payment information, and agreements to shop rules.</Typography>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>Profile Photo</Typography>
                                        <Typography className={classes.not}>Not set</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.booking_list}>
                                        <Typography>Government issued ID</Typography>
                                        <Typography className={classes.not}>Not set</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.booking_list}>
                                        <Typography>Recommendation from other provider</Typography>
                                        <Typography className={classes.not}>Not set</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Shop rules</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.list_title}>
                                        <Typography>Services</Typography>
                                        <Typography>Not suitable children (2-12 years)</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <Typography className={classes.booking_list_title}>Services</Typography>
                                    <Typography>Not suitable children (2-12 years)</Typography>
                                    <Divider className={classes.divide} />
                                    <Typography className={classes.booking_list_title}>No pets</Typography>
                                    <Divider className={classes.divide} />
                                    <Typography className={classes.booking_list_title}>No smoking</Typography>
                                    <Divider className={classes.divide} />
                                    <Typography className={classes.booking_list_title}>Additional rules</Typography>
                                    <Typography>**OVERVIEW: I really dislike having to lay out rules as much as you dislike having to follow them. So I have identified the things that really</Typography>
                                    <Typography>important to me so please read them**</Typography>
                                    <Divider className={classes.divide} />
                                    <Typography className={classes.booking_list_title}>Details guests must know about your home</Typography>
                                    <Divider className={classes.divide} />
                                </Grid>
                            </Grid>
                        </div>
                    )}
                    {formState === 'price' && (
                        <div className={classes.header_title}>
                            <Grid container spacing={1}>
                                <Grid item lg={9}>
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Service Price</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>Smart Pricing</Typography>
                                        <Typography className={classes.not}>On</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Minimum Price</Typography>
                                        <Typography className={classes.not}>$33</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Maximum Price</Typography>
                                        <Typography className={classes.not}>$130</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Mutiple Service Discounts</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>Weekly</Typography>
                                        <Typography className={classes.not}>$2</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Minimum Price</Typography>
                                        <Typography className={classes.not}>$5</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Standard feeds and charges</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>Cleaning fee</Typography>
                                        <Typography className={classes.not}>$30</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Security deposit</Typography>
                                        <Typography className={classes.not}>$200</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Extra guests</Typography>
                                        <Typography className={classes.not}>$200</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Other standard feeds</Typography>
                                        <Typography className={classes.not}>None</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                </Grid>
                            </Grid>
                        </div>
                    )}
                    {formState === 'manager' && (
                        <div className={classes.booking_header}>
                            <div className={classes.booking_content}>
                                <div>
                                    <Typography className={classes.header_title}>Get help running your shop</Typography>
                                    <Typography>Shop managers can assist with many aspects of running your</Typography>
                                    <Typography>business</Typography>
                                    <div className={classes.booking_content}>
                                        <button className={classes.invite}>Invite a friend</button>
                                        <Typography className={classes.manage}>What can Shop Managers do?</Typography>
                                    </div>
                                </div>
                                <div className={classes.activity}>
                                    <Typography className={classes.activity_header}>Activity</Typography>
                                    <Typography>You can view a record of activity-such as</Typography>
                                    <Typography>who made an edit or accepted a</Typography>
                                    <Typography>reservation-when you have Shop Manager</Typography>
                                    <Typography>for your listing</Typography>
                                    <Typography className={classes.activity_title}>See listing activity</Typography>
                                </div>
                            </div>
                            <Grid container spacing={1}>
                                <Grid item lg={4}>
                                    <Divider className={classes.divide} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item lg={9}>
                                    <div className={classes.photo}>
                                        <img src={"/assets/images/manage1.png"} alt="" />
                                        <div className={classes.photo_detail}>
                                            <Typography className={classes.activity_header}>Mathew McCoy</Typography>
                                            <Typography>Shop Owner</Typography>
                                        </div>  
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.photo}>
                                        <img src={"/assets/images/manage2.png"} alt="" />
                                        <div className={classes.photo_detail}>
                                            <Typography className={classes.activity_header}>Carolyn Riley</Typography>
                                            <Typography>Your shop manager since 2019</Typography>
                                            <Typography className={classes.info}>Contact Info</Typography>
                                            <Typography className={classes.info}>Make Mathe McCoy the Shop Owner</Typography>
                                        </div>
                                        <Typography className={classes.remove}>Remove</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                </Grid>
                            </Grid>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
