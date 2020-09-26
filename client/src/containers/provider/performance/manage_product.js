import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles, fade } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Radio from '@material-ui/core/Radio';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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
    search: {
        color: '#7c7c7c',
        marginLeft: 170,
        marginTop: 10,
        position: 'absolute'
    },
    arrow: {
        color: '#299494',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 3
    },
    product_divider: {
        marginTop: 30
    },
    love: {
        color: '#7c7c7c'
    },
    eye: {
        marginLeft: 20,
        color: '#7c7c7c'
    },
    clock: {
        color: '#7c7c7c',
        marginLeft: 25
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
    product: {
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
    divider: {
        marginTop: 10,
        width: '110%'
    },
    divide: {
        marginTop: 10,
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
    product_header: {
        marginTop: 30,
        display: 'flex'
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
    },
    header_content: {
        fontSize: 17,
        fontWeight: 600
    },
    margin: {
        width: 200
    },
    search_btn: {
        height: 40,
        width: 100,
        marginLeft: 20,
        color: 'white',
        backgroundColor: '#299494',
        border: 'none',
        borderRadius: 5,
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    product_detail: {
        marginLeft: 20
    },
    product_content: {
        marginTop: 15,
        display: 'flex'
    },
    select: {
        marginTop: 8
    },
    activate: {
        marginLeft: 30,
        height: 25,
        marginTop: 7,
        color: '#7c7c7c',
        borderColor: '#7c7c7c',
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    deactivate: {
        marginLeft: 20,
        height: 25,
        marginTop: 7,
        color: '#7c7c7c',
        borderColor: '#7c7c7c',
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    sort: {
        marginLeft: 'auto'
    },
    edit_btn: {
        width: 70,
        height: 30,
        borderRadius: 5,
        border: 'none',
        color: 'white',
        backgroundColor: '#299494',
        marginLeft: 'auto',
        marginTop: 20,
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

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
                    <Typography className={classes.header_content}>Alice's Hair Shampoo</Typography>
                    <div className={classes.header}>
                        <Typography className={classes.title}>Change Listing</Typography>
                        <ExpandMoreIcon className={classes.arrow}/>
                        <button className={classes.preview}>Preview listing</button>
                        <button className={classes.view} onClick={() => this.props.history.push('/provider/calendar')}>View Calendar</button>
                    </div>
                    <div className={classes.list}>
                        <button className={classes.listing} onClick={() => this.setState({ formState: "listing" })}>Listing details</button>
                        <button variant="contained" className={classes.product} onClick={() => this.setState({ formState: "product" })}>Product settings</button>
                        <button variant="contained" className={classes.price} onClick={() => this.setState({ formState: "price" })}>Pricing</button>
                        <button variant="contained" className={classes.local} onClick={() => this.setState({ formState: "local" })}>Local taxes and laws</button>
                    </div>
                    <Divider className={classes.divide} />
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
                                            <img src={"/assets/images/manage.png"} alt="" className={classes.avatar1} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/manage.png"} alt="" className={classes.avatar2} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <img src={"/assets/images/manage.png"} alt="" className={classes.avatar3} />
                                        </Grid>
                                    </div>
                                    <div className={classes.service}>
                                        <Typography className={classes.service_title}>Product title & description</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.divider}>Alice's Hair Shampoo</Typography>
                                    <Grid item lg={11}>
                                        <Divider className={classes.divider} />
                                    </Grid>
                                    <div className={classes.service}>
                                        <Typography className={classes.service_title}>Product Categories</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <Typography className={classes.divider}>Hair</Typography>
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
                    {formState === 'product' && (
                        <div>
                            <div className={classes.product_header}>
                                <FormControl className={classes.margin}>
                                    <BootstrapInput defaultValue="" id="bootstrap-input" />
                                </FormControl>
                                <SearchIcon className={classes.search} />
                                <button className={classes.search_btn}>Search</button>
                            </div>
                            <div className={classes.product_header}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    color="primary"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    className={classes.check}
                                />
                                <Typography className={classes.select}>Select all listings</Typography>
                                <button className={classes.activate}>Activate</button>
                                <button className={classes.deactivate}>Deactivate</button>
                                <Typography className={classes.sort}>Sort by:</Typography>
                                <Typography className={classes.newest}>Newest First</Typography>
                                <ExpandMoreIcon/>
                            </div>
                            <Divider className={classes.product_divider} />
                            <div className={classes.product_header}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    color="primary"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    className={classes.check}
                                />
                                <img src={'/assets/images/manage3.png'} alt='' className={classes.avatar} />
                                <div className={classes.product_detail}>
                                    <Typography>Alice's Hair Shampoo</Typography>
                                    <div className={classes.product_content}>
                                        <FavoriteBorderIcon className={classes.love}/>
                                        <Typography className={classes.love}>1</Typography>
                                        <VisibilityIcon className={classes.eye} />
                                        <Typography className={classes.love}>29</Typography>
                                        <AccessTimeIcon className={classes.clock}/>
                                        <Typography className={classes.love}>03/18/20</Typography>
                                    </div>
                                </div>
                                <button className={classes.edit_btn} onClick={() => this.props.history.push('/provider/edit_product')}>Edit</button>
                            </div>
                            <Divider className={classes.product_divider} />
                        </div>
                    )}
                    {formState === 'price' && (
                        <div className={classes.header_title}>
                            <Grid container spacing={1}>
                                <Grid item lg={9}>
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Product Price</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>Smart Pricing</Typography>
                                        <Typography className={classes.not}>On</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.booking_list}>
                                        <Typography>Minimum Price</Typography>
                                        <Typography className={classes.not}>$33</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.booking_list}>
                                        <Typography>Maximum Price</Typography>
                                        <Typography className={classes.not}>$130</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Mutiple Product Discounts</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>3-4 product in cart</Typography>
                                        <Typography className={classes.not}>$2</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.booking_list}>
                                        <Typography>5+ product in cart</Typography>
                                        <Typography className={classes.not}>$5</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.guest}>
                                        <Typography className={classes.booking_title}>Promo Codes</Typography>
                                        <button className={classes.edit}>Edit</button>
                                    </div>
                                    <div className={classes.booking_list}>
                                        <Typography>ORIHTW</Typography>
                                        <Typography className={classes.not}>$5</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
                                    <div className={classes.booking_list}>
                                        <Typography>CLEAN Hair</Typography>
                                        <Typography className={classes.not}>$2</Typography>
                                    </div>
                                    <Divider className={classes.divide} />
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
                            <Typography>We collect additional taxes from guests on new bookings, remit them to you, and include details in a separate</Typography>
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