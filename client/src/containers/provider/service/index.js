import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

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
        display: 'flex',
        marginTop: 20
    },
    title: {
        color: '#299494'
    },
    image: {
        '&:hover': {
            cursor: 'pointer'
        },
        marginTop: -5
    },
    preview: {
        marginLeft: 'auto',
        marginRight: 30,
        backgroundColor: '#299494',
        borderRadius: 3,
        border: 'none',
        color: 'white',
        height: 30,
        '&:focus': {
            border:'none',
            outline: 'none'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    view: {
        marginRight: 50,
        backgroundColor: 'white',
        color: '#299494',
        borderColor: '#299494',
        borderRadius: 3,
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    list: {
        marginTop: 50,
        display: 'flex'
    },
    list1: {
         marginTop: 20,
         display: 'flex'
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
    host: {
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
        display: 'flex',
        marginTop: 50
    },
    edit: {
        marginLeft: 'auto',
        backgroundColor: 'white',
        borderColor: '#299494',
        color: '#299494',
        outline: 'auto',
        width: 70,
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
        display: 'flex',
        marginTop: 30
    },
    service_title: {
        fontWeight: 600
    },
    booking_header: {
        marginTop: 30,
    },
    choose: {
        marginTop: 10,
        fontSize: 20
    },
    booking_content: {
        display: 'flex',
        marginTop: 10
    },
    booking_detail: {
        marginLeft: 10,
        marginTop: 10
    },
    header_title: {
        fontSize: 25,
        fontWeight: 600
    },
    guest: {
        marginTop: 50,
        display: 'flex'
    },
    booking_title: {
        fontSize: 20,
        fontWeight: 600,
    },
    guest_title: {
        display: 'flex',
        marginTop: 10
    },
    confirm: {
        marginLeft: 10,
        fontSize: 12
    },
    groom: {
        fontSize: 12
    },
    booking_list: {
        display: 'flex',
        marginTop: 30
    },
    not: {
        marginLeft: 'auto'
    },
    booking_list_title: {
        marginTop: 30,
    },
    overview: {
        fontSize: 14
    },
    automatic: {
        marginTop: 30,
        fontWeight: 600
    },
    activity: {
        marginTop: 50
    },
    addtional: {
        fontWeight: 600,
        marginTop: 30
    },
    learn: {
        display: 'flex'
    },
    learn_content: {
        color: '#299494',
        marginTop: 10,
        marginLeft: 10
    },
    add: {
        backgroundColor: '#299494',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        },
        height: 35,
        width: 120
    },
    lorem: {
        marginTop: 20
    },
    tax: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: 600
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState : "listing"
        }
    }
    render() {
        const { classes } = this.props;
        const { formState } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <Typography>Crochet Braids</Typography>
                    <div className={classes.header}>
                        <Typography className={classes.title}>Change Listing</Typography>
                        <img src='/assets/images/arrow.png' alt='' className={classes.image}/>
                        <button className={classes.preview}>Preview listing</button>
                        <button className={classes.view} onClick={() => this.props.history.push('/provider/calendar')}>View Calendar</button>
                    </div>
                    <div className={classes.list}>
                        <button className={classes.listing} onClick={() => this.setState({ formState: "listing" })}>Listing details</button>
                        <button variant="contained" className={classes.booking} onClick={() => this.setState({ formState: "booking" })}>Booking settings</button>
                        <button variant="contained" className={classes.price} onClick={() => this.setState({ formState: "price" })}>Pricing</button>
                        <button variant="contained" className={classes.available} onClick={() => this.setState({ formState: "available" })}>Availability</button>
                        <button variant="contained" className={classes.local} onClick={() => this.setState({ formState: "local" })}>Local taxes and laws</button>
                        <button variant="contained" className={classes.host} onClick={() => this.setState({ formState: "host" })}>Co-hosts</button>
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
                                    <div className={classes.list1}>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/service.png"} alt="" className={classes.avatar1} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/service.png"} alt="" className={classes.avatar2} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/service.png"} alt="" className={classes.avatar3} />
                                        </Grid>
                                    </div>
                                    <div className={classes.service}>
                                        <Typography className={classes.service_title}>Service title & description</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.divider}>Crochet Braids</Typography>
                                    <Grid item lg={11}>
                                        <Divider className={classes.divider} />
                                    </Grid>
                                    <div className={classes.service}>
                                        <Typography className={classes.service_title}>Service Categories</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.divider}>Nails\Make Up\Face</Typography>
                                    <Grid item lg={11}>
                                        <Divider className={classes.divider} />
                                    </Grid>
                                    <div className={classes.service}>
                                        <Typography className={classes.service_title}>Available at shop</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.divider}>Alice Hair World</Typography>
                                    <Grid item lg={11}>
                                        <Divider className={classes.divider} />
                                    </Grid>
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
                                    <div className={classes.guest_title}>
                                        <Typography className={classes.groom}>Groom standard requirements:</Typography>
                                        <Typography className={classes.confirm}>Confirmed phone number,email address,payment information, and agreements to shop rules.</Typography>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>Profile Photo</Typography>
                                        <Typography className={classes.not}>Not set</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Government issued ID</Typography>
                                        <Typography className={classes.not}>Not set</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>Recommendation from other provider</Typography>
                                        <Typography className={classes.not}>Not set</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Shop rules</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.list_title}>
                                        <Typography>Services Not suitable children (2-12 years)</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.booking_list_title}>Services Not suitable infants (under 2 years)</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.booking_list_title}>No pets</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.booking_list_title}>No smoking</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.booking_list_title}>Additional rules</Typography>
                                    <Typography className={classes.overview}>**OVERVIEW: I really dislike having to lay out rules as much as you dislike having to follow them. So I have identified the things that really</Typography>
                                    <Typography className={classes.overview}>important to me so please read them**</Typography>
                                    <Divider className={classes.divider} />
                                    <Typography className={classes.booking_list_title}>Details guests must know about your home</Typography>
                                    <Divider className={classes.divider} />
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
                                        <Typography>3-4 services in cart</Typography>
                                        <Typography className={classes.not}>$2</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>5+ services in cart</Typography>
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
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Promo Codes</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>ORIHTW</Typography>
                                        <Typography className={classes.not}>$5</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.booking_list}>
                                        <Typography>CLEAN Hair</Typography>
                                        <Typography className={classes.not}>$2</Typography>
                                    </div>
                                    <Divider className={classes.divider} />
                                </Grid>
                            </Grid>
                        </div>
                    )}
                    {formState === 'local' && (
                        <div className={classes.booking_header}>
                            <Typography className={classes.header_title}>Local tax collection</Typography>
                            <Typography>Taxes apply to your services price and fees for groomings or products and we include them in your earnings report.</Typography>
                            <Typography>Guests are shown tax amounts as part of the grooming total.</Typography>
                            <Typography className={classes.automatic}>Automatic tax collection</Typography>
                            <Typography>We automatically collect these taxes from grooming a product remit them directly to local tax authrorities</Typography>
                            <div className={classes.activity}>
                                <Typography>General sales and Use Tax (North Carolina)</Typography>
                                <Typography>General sales and Use Tax (Wake)</Typography>
                                <Typography>Accommodations Tax (Wake)</Typography>
                                <Typography>Local Sales and Use Tax (Public Transportation Authority)</Typography>
                            </div>
                            <Typography className={classes.addtional}>Additional taxes</Typography>
                            <Typography>We collect additional taxes from guests on new bookings, remit them to you, and include details in a separate payout </Typography>
                            <div className={classes.learn}>
                                <Typography>payment report.</Typography>
                                <Typography className={classes.learn_content}>Learn more.</Typography>
                            </div>
                            <button className={classes.add}>Add a tax</button>
                            <Typography className={classes.tax}>Local tax collection</Typography>
                            <Typography className={classes.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                            <Typography>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Typography>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(index)