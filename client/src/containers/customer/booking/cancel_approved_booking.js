import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
        height: 1000
    },
    content: {
        backgroundColor: 'white',
        height: 500,
        padding: 50,
    },
    header: {
        display: 'flex'
    },
    image1: {
        height: 100
    },
    title: {
        marginLeft: 20
    },
    header_title: {
        fontSize: 20,
        fontWeight: 600,
        color: '#7c7c7c'
    },
    detail: {
        fontSize: 14,
        marginTop: 10,
        color: '#7c7c7c'
    },
    image2: {
        height: 55
    },
    more: {
        display: 'flex',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    more_detail: {
        marginTop: 15,
        marginLeft: 30,
        color: '#299494'
    },
    location: {
        marginTop: 30,
        fontSize: 18
    },
    location_content: {
        display: 'flex',
        marginTop: 10
    },
    location_detail: {
        marginLeft: 10
    },
    home: {
        color: '#7c7c7c'
    },
    book: {
        marginTop: 30,
        height: 40,
        width: 150,
        border: 'none',
        outline: 'none',
        backgroundColor: '#299494',
        borderRadius: 3,
        color: 'white',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    booking_header: {
        fontSize: 20,
        fontWeight: 600,
        marginLeft: 10
    },
    detail_btn: {
        backgroundColor: '#299494',
        borderRadius: 3,
        border: 'none',
        outline: 'none',
        width: 100,
        height: 30,
        color: 'white',
        '&:hover': {
            backgroundColor: '#299494'
        },
        '&:focus': {
            backgroundColor: '#299494'
        }
    },
    detail_list: {
        marginLeft: 'auto',
        display: 'table'
    },
    upcomming: {
        marginLeft: -30,
        textDecoration: 'underline',
        color: '#299494'
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
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    Showdetail = () => {
        let index = 0;
        ++index;
        if (index % 2 === 1) {
            this.setState({ flag: true })
        }
        else {
            this.setState({ flag: false })
        }
        console.log(index)
        return index
    }
    render() {
        const { classes } = this.props;
        const {formState} = this.state;
        const userSettingList = [
            {
                Title: "Message",
            },
            {
                Title: "Email",
            },
            {
                Title: "Change or Cancel",
            },
            {
                Title: "Send or request money",
            },
        ];
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    {formState === 'first' && (
                        <div className={classes.header}>
                            <img src={'/assets/images/profile.png'} alt='' className={classes.image1}/>
                            <div className={classes.title}>
                                <Typography className={classes.header_title}>Best Hair Salon</Typography>
                                <Typography className={classes.detail}>Open in 2012</Typography>
                                <img src={'/assets/images/asset.png'} alt='' className={classes.image2} />
                                <Typography className={classes.detail}>Hi!</Typography>
                                <Typography className={classes.detail}>I'm Anna and the one with me in the photo is my mum Tonia.After some years spent in</Typography>
                                <Typography className={classes.detail}>different European cities, I decided to come back home and work in this area. At the</Typography>
                                <div className={classes.more}>
                                    <Typography className={classes.detail}>moment,...</Typography>
                                    <Typography className={classes.more_detail}>Learn more</Typography>
                                </div>
                                <Typography className={classes.location}>Location</Typography>
                                <div className={classes.location_content}>
                                    <HomeIcon className={classes.home}/>
                                    <Typography className={classes.location_detail}>Located in Raleigh, NC</Typography>
                                </div>
                                <button className={classes.book} onClick={()=>this.setState({formState: "booking"})}>Book Now</button>
                            </div>
                        </div>
                    )}
                    {formState === 'booking' && (
                        <div>
                            <Typography className={classes.booking_header}>Bookings</Typography>
                            <div className={classes.decision}>
                                <Paper elevation={0}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Tabs
                                                value={this.state.value}
                                                indicatorColor="primary"
                                                textColor="primary"
                                                onChange={this.handleChange}
                                                aria-label="disabled tabs example"
                                            >
                                                <Tab label="Upcomming" className={classes.upcomming}/>
                                                <Tab label="Completed" />
                                                <Tab label="Cancelled" />
                                                <Tab label="All" />
                                            </Tabs>
                                            <Divider />
                                            <div style={{ display: "flex", width: "90%" }}>
                                                <ListItem button>
                                                    <ListItemText primary="Status" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Check In" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Check Out" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Booked" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Listing" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Category" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Provider" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Confirmation Code" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Total Payment" />
                                                </ListItem>
                                            </div>
                                            <div style={{ display: "flex" }}>
                                                <ListItem button>
                                                    <ListItemText primary="Check-Out" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="1:00 PM" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="2:00 PM" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="20 Feb, 2020" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="XYZ" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Braids" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="Sandra" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="A333jh" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemText primary="$25" />
                                                </ListItem>
                                                <Button variant="outlined" className={classes.detail_btn}>Details</Button>
                                                <MoreHorizIcon className={classes.more} onClick={this.Showdetail} />

                                            </div>
                                            <Divider />
                                            {this.state.flag &&
                                                <List
                                                    component="nav"
                                                    aria-labelledby="nested-list-subheader"
                                                    className={classes.detail_list}
                                                >
                                                    {userSettingList.map((listItem, i) => {
                                                        return (
                                                            <ListItem button key={i}>
                                                                <ListItemText primary={listItem.Title} />
                                                                <Divider />
                                                            </ListItem>

                                                        )
                                                    })}
                                                </List>
                                            }
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)