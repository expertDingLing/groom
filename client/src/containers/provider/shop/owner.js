import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';

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
    select: {
        marginLeft: 'auto',
        display: 'flex',
        width: 150,
        height: 30,
        borderRadius: 5,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    list: {
        display: 'flex',
        marginTop: 30
    },
    first_detail: {
        marginLeft: 50,
        marginTop: 40
    },
    second_detail: {
        marginLeft: 150, 
        marginTop: 40
    },
    third_detail: {
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 40
    },
    confirm: {
        color: '#299494'
    },
    divider: {
        marginTop: 30
    },
    divider1: {
        marginTop: 30,
        width: '100%',
        marginLeft: 30
    },
    lorem: {
        fontSize: 15,
        marginTop: 10
    },
    request: {
        color: '#7c7c7c',
        fontWeight: 700
    },
    miles: {
        fontSize: 15,
        fontWeight: 700,
        marginTop: 10
    },
    lorem1: {
        marginTop: 20
    },
    divide: {
        marginTop: 20
    },
    star: {
        marginTop: 20,
        display: 'flex'
    },
    star_content: {
        color: '#7c7c7c'
    },
    star_description: {
        marginLeft: 30,
        color: '#7c7c7c'
    },
    verify: {
        marginTop: 10,
        display: 'flex'
    },
    verify_icon: {
        color: '#7c7c7c'
    },
    verify_detail: {
        marginLeft: 30,
        color: '#7c7c7c'
    },
    view: {
        marginTop: 50,
        color: '#299494',
        fontSize: 20
    },
    special: {
        marginTop: 20,
        color: '#299494',
        borderRadius: 5,
        borderColor: '#299494',
        backgroundColor: 'white',
        borderWidth: 1.5,
        outline: 'auto',
        height: 30,
        width: 150,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            backgroundColor: 'white',
            outline: 'auto'
        }
    },
    send: {
        color: '#299494',
        borderRadius: 5,
        borderColor: '#299494',
        backgroundColor: 'white',
        borderWidth: 1.5,
        marginLeft: 0,
        marginTop: -5,
        outline: 'auto',
        height: 30,
        width: 120,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            backgroundColor: 'white',
            outline: 'auto'
        }
    },
    list_detail: {
        marginTop: 20,
        display: 'flex'
    },
    date1: {
        marginLeft: 50
    },
    time1: {
        marginLeft: 'auto'
    },
    date2: {
        marginLeft: 43
    },
    time2: {
        marginLeft: 'auto'
    },
    date3: {
        marginLeft: 55
    },
    time3: {
        marginLeft: 'auto'
    },
    request_detail: {
        marginLeft: 'auto',
    },
    calendar: {
        color: '#299494'
    },
    dollar: {
        marginLeft: 'auto'
    },
    message: {
        display: 'flex',
        marginLeft: 30
    },
    textarea: {
        width: '90%'
    },
    avatar1: {
        height: 70,
        marginLeft: 30
    },
    provider: {
        width: 502,
        height: 50,
        backgroundColor: '#c2c2c2',
        marginLeft: 30,
        marginTop: 0,
    },
    use_message: {
        marginLeft: 50,
        marginTop: -35,
        display: 'flex'
    },
    use_message1: {
        width: 300,
        fontSize: 13
    },
    mile: {
        display: 'flex',
        marginTop: 10
    },
    learn: {
        color: '#299494',
        marginLeft: 50
    },
    left: {
        height: 1,
        marginLeft: 30,
        marginTop: 20,
        width: 100
    },
    detail: {
        marginTop: 10
    },
    right: {
        marginTop: 20,
        height: 1,
        width: 205
    },
    guest: {
        width: 372,
        marginLeft: 30
    },
    avatar_detail: {
        marginLeft: 30,
        display: 'flex',
        marginTop: 30
    },
    special_page: {
        backgroundColor: 'white',
        padding: 30,
        width: 500,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        display: 'flex'
    },
    special_header: {
        marginLeft: 'auto',
        display: 'flex'
    },
    close: {
        marginLeft: 'auto',
        marginRight: 20
    },
    special_title: {
        marginTop: 30,
        marginLeft: 30
    },
    special_list: {
        marginTop: 50,
        marginLeft: 30
    },
    list_title: {
        marginTop: 50,
        display: 'flex'
    },
    special_select: {
        width: 450,
        height: 45,
        borderRadius: 3,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    time: {
        marginLeft: 70,
    },
    special_provider: {
        marginLeft: 80
    },
    date_time: {
        height: 30,
        width: 200,
        borderColor: '#ff2222',
        outline: 'none',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 3
    },
    special_select1: {
        marginLeft: 30,
        width: 135,
        borderRadius: 3,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    special_list1: {
        marginTop: 30
    },
    warning: {
        color: '#ff2222',
        marginTop: 10,
        fontSize: 13
    },
    subtotal: {
        marginTop: 10
    },
    font: {
        fontSize: 13
    },
    special_dollar: {
        height: 40,
        marginTop: 20,
        borderColor: '#299494',
        backgroundColor: 'white',
        '&:focus': {
            borderColor: '#299494',
            outline: 'none'
        },
        width: 100,
        borderRadius: 3,
        borderWidth: 1
    },
    special_service: {
        color: '#7c7c7c'
    },
    dollars: {
        marginLeft: 'auto',
        color: '#7c7c7c'
    },
    total_dollar: {
        marginLeft: 'auto'
    },
    special_offer: {
        marginTop: 50,
        borderWidth: 1,
        height: 40,
        width: 150,
        backgroundColor: '#299494',
        borderRadius: 3,
        color: 'white',
        '&:focus': {
            backgroundColor: '#299494',
            outline: 'none'
        },
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: 'first',
        }
    }
    render() {
        const { classes } = this.props;
        const { formState } = this.state;
        return (
            <div className={classes.container}>
                {formState === 'final' && (
                <Grid className={classes.content}>
                    <select
                        className={classes.select}
                        value={this.state.keyStatus}
                        name="keyStatus"
                        onChange={this.handleChangeInput}
                    >
                    <option className={classes.select_value} value="0">All messages (10)</option>
                    </select>
                    <div className={classes.list}>
                        <img src={"/assets/images/owner1.png"} alt="" />
                        <div className={classes.first_detail}>
                            <Typography>Rafel</Typography>
                            <Typography>March 11, 2020</Typography>
                        </div>
                        <div className={classes.second_detail}>
                            <Typography>Hello! I just want to go ver some check information</Typography>
                        </div>
                        <div className={classes.third_detail}>
                            <Typography className={classes.confirm}>Confirmed</Typography>
                            <Typography>$157.45</Typography>
                        </div>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.list}>
                        <img src={"/assets/images/owner2.png"} alt="" />
                        <div className={classes.first_detail}>
                            <Typography>Rafel</Typography>
                            <Typography>March 11, 2020</Typography>
                        </div>
                        <div className={classes.second_detail}>
                            <Typography>Hello! I just want to go ver some check information</Typography>
                        </div>
                        <div className={classes.third_detail}>
                            <Typography>Cancelled</Typography>
                            <Typography>$157.45</Typography>
                        </div>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.list}>
                        <img src={"/assets/images/owner3.png"} alt="" />
                        <div className={classes.first_detail}>
                            <Typography>Rafel</Typography>
                            <Typography>March 11, 2020</Typography>
                        </div>
                        <div className={classes.second_detail}>
                            <Typography>Hello! I just want to go ver some check information</Typography>
                        </div>
                        <div className={classes.third_detail}>
                            <Typography className={classes.confirm}>Confirmed</Typography>
                            <Typography>$157.45</Typography>
                        </div>
                    </div>
                    <Divider className={classes.divider} />
                </Grid>
                )}
                {formState === 'first' && (
                    <Paper style={{padding:"30px"}} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Typography className={classes.request}>REQUEST WITHDRAWN</Typography>
                            <Typography className={classes.miles}>Miles</Typography>
                            <Typography className={classes.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</Typography>
                            <Typography className={classes.lorem}>sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                            <Typography className={classes.lorem}>dolore magna aliquyam.</Typography>
                            <Divider className={classes.divider}/>
                            <Typography className={classes.lorem1}>This customer withdrew their request to book</Typography>
                            <Divider className={classes.divide}/>
                            <div className={classes.star}>
                                <StarIcon className={classes.star_content}/>
                                <Typography className={classes.star_description}>o reviews</Typography>
                            </div>
                            <div className={classes.verify}>
                                <CheckCircleIcon className={classes.verify_icon}/>
                                <Typography className={classes.verify_detail}>Verified</Typography>
                            </div>
                            <div className={classes.verify}>
                                <Icon>
                                    <img src={'../../assets/images/icon-join.png'} alt="join icon" />
                                </Icon>
                                <Typography className={classes.verify_detail}>Joined since 2019</Typography>
                            </div>
                            <div className={classes.verify}>
                                <Icon>
                                    <img src={'../../assets/images/icon-home.png'} alt="home icon" />
                                </Icon>
                                <Typography className={classes.verify_detail}>Lives in NC</Typography>
                            </div>
                            <Typography className={classes.view}>View profile</Typography>
                            <Divider className={classes.divide}/>
                            <button className={classes.special} onClick={()=>this.setState({formState: "special"})}>Special Offer</button>
                            <Divider className={classes.divide}/>
                            <div className={classes.list_detail}>
                                <Typography>Check -In</Typography>
                                <Typography className={classes.date1}>Tue, 2 March, 2020</Typography>
                                <Typography className={classes.time1}>13:00 PM EST(GMT-5)</Typography>
                            </div>
                            <Divider className={classes.divide}/>
                            <div className={classes.list_detail}>
                                <Typography>Check-Out</Typography>
                                <Typography className={classes.date2}>Tue, 4 March, 2020</Typography>
                                <Typography className={classes.time2}>13:00 PM EST(GMT-5)</Typography>
                            </div>
                            <Divider className={classes.divide}/>
                            <div className={classes.list_detail}>
                                <Typography>Bookings</Typography>
                                <Typography className={classes.date3}>Tue, 4 March, 2020</Typography>
                                <Typography className={classes.time3}>13:00 PM EST(GMT-5)</Typography>
                            </div>
                            <Divider className={classes.divide}/>
                            <div className={classes.list_detail}>
                                <Typography>Request</Typography>
                                <Typography className={classes.request_detail}>XVGHNN89JJ</Typography>
                            </div>
                            <Divider className={classes.divide}/>
                            <div className={classes.list_detail}>
                                <Typography className={classes.calendar}>View Calendar</Typography>
                            </div>
                            <Divider className={classes.divide}/>
                            <div className={classes.list_detail}>
                                <Typography>Potential earnings</Typography>
                            </div>
                            <div className={classes.list_detail}>
                                <Typography>$24</Typography>
                                <Typography className={classes.dollar}>$24</Typography>
                            </div>
                            <div className={classes.list_detail}>
                                <Typography>Servive</Typography>
                                <Typography className={classes.dollar}>$6</Typography>
                            </div>
                            <Divider className={classes.divide}/>
                            <div className={classes.list_detail}>
                                <Typography>Total(USD)</Typography>
                                <Typography className={classes.dollar}>$30</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.message}>
                                <img src={'/assets/images/union2.png'} alt="" className={classes.textarea}/>
                                <img src={'/assets/images/owner.png'} alt="" className={classes.avatar1}/>
                            </div>
                            <div className={classes.provider}>
                            </div>
                            <div className={classes.use_message}>
                                <Typography className={classes.use_message1}>Use a Saved Message</Typography>
                                <button className={classes.send}>Send Message</button>
                            </div>
                            <div className={classes.mile}>
                                <img src={"/assets/images/left.png"} alt="" className={classes.left}/>
                                <Typography className={classes.detail}>Miles sent a request March 02, 2020</Typography>
                                <img src={"/assets/images/right.png"} alt="" className={classes.right}/>
                            </div>
                            <div className={classes.mile}>
                                <Typography className={classes.guest}>If guest has a profile photo, it will be displayed after</Typography>
                                <Typography className={classes.learn}>Learn more</Typography>
                            </div>
                            <div className={classes.avatar_detail}>
                                <Avatar src={'../../assets/images/refund1.png'} alt="user img" />
                                <img src={'/assets/images/union3.png'} alt='' />
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                )}
                {formState === 'special' && (
                    <Grid className={classes.special_page}>
                        <div className={classes.title}>
                            <Typography className={classes.special_header}>Send miles a special offer</Typography>
                            <CloseIcon className={classes.close}/>
                        </div>
                        <div className={classes.special_title}>
                            <Typography>Miles will have 24 hrs to book. In the mean time,your calendar will</Typography>
                            <Typography>remain open</Typography>
                        </div>
                        <div className={classes.special_list}>
                            <Typography>Listing</Typography>
                            <select
                                className={classes.special_select}
                                value={this.state.keyStatus}
                                name="keyStatus"
                                onChange={this.handleChangeInput}
                            >
                            <option className={classes.select_value} value="0">Brcochet</option>
                            </select>
                            <div className={classes.list_title}>
                                <Typography>Dates</Typography>
                                <Typography className={classes.time}>Time</Typography>
                                <Typography className={classes.special_provider}>Provider</Typography>
                            </div>
                            <div className={classes.verify}>
                                <button className={classes.date_time}>  3/26/2020  ->  4:00 PM</button>
                                <select
                                className={classes.special_select1}
                                value={this.state.keyStatus}
                                name="keyStatus"
                                onChange={this.handleChangeInput}
                            >
                            <option className={classes.select_value} value="0">Brcochet</option>
                            </select>
                            </div>
                            <Typography className={classes.warning}>These dates are not available</Typography>
                            <div className={classes.special_list1}>
                                <Typography>Subtotal</Typography>
                                <div className={classes.subtotal}>
                                    <Typography className={classes.font}>Enter a subtotal that includes any fees. This won't include service fees</Typography>
                                    <Typography className={classes.font}>or applicable taxes.</Typography>
                                </div>
                            </div>
                            <button className={classes.special_dollar}>$10</button>
                            <Divider className={classes.divider}/>
                            <Typography className={classes.divider}>Your customer will pay</Typography>
                            <div className={classes.mile}>
                                <Typography className={classes.special_service}>Service 1</Typography>
                                <Typography className={classes.dollars}>$10</Typography>
                            </div>
                            <div className={classes.mile}>
                                <Typography className={classes.special_service}>Service 1</Typography>
                                <Typography className={classes.dollars}>$10</Typography>
                            </div>
                            <div className={classes.mile}>
                                <Typography className={classes.special_service}>Service 1</Typography>
                                <Typography className={classes.dollars}>$10</Typography>
                            </div>
                            <Divider className={classes.divider} />
                            <div className={classes.mile}>
                                <Typography>Total</Typography>
                                <Typography className={classes.total_dollar}>$30</Typography>
                            </div>
                            <Typography className={classes.divider}>Your potential earnings</Typography>
                            <div className={classes.mile}>
                                <Typography className={classes.special_service}>Service 1</Typography>
                                <Typography className={classes.dollars}>$10</Typography>
                            </div>
                            <div className={classes.mile}>
                                <Typography className={classes.special_service}>Service 1</Typography>
                                <Typography className={classes.dollars}>$10</Typography>
                            </div>
                            <Divider className={classes.divider} />
                            <div className={classes.mile}>
                                <Typography>Total</Typography>
                                <Typography className={classes.total_dollar}>$20</Typography>
                            </div>
                            <button className={classes.special_offer} onClick={()=>this.setState({formState: "final"})}>Send a special offer</button>
                        </div>
                    </Grid>
                )}
            </div>
        )
    }
}
export default withStyles(styles)(index)