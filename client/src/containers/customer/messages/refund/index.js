import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { Divider } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
    },
    content: {
        backgroundColor: 'white',
        height: 800,
        padding: 50,
    },
    header: {
        fontSize: 25
    },
    select: {
        width: 150,
        marginTop: 30,
        height: 30,
        borderColor: '#7c7c7c',
        borderRadius: 5,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    btn_group: {
        display: 'flex',
        marginTop: 100
    },
    back: {
        marginLeft: 'auto',
        display: 'flex',
        backgroundColor: 'white',
        color: '#299494',
        borderColor: '#299494',
        borderRadius: 5,
        width: 100,
        height: 29,
        padding: '4px 30px',
        marginTop: 1,
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    next: {
        backgroundColor: '#299494',
        border: 'none',
        outline: 'auto',
        color: 'white',
        borderRadius: 5,
        marginLeft: 10,
        height: 30,
        width: 100,
        marginRight: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    detail: {
        display: 'flex',
        marginTop: 30
    },
    image_detail: {
        marginLeft: 20
    },
    darion: {
        fontSize: 16,
        fontWeight: 600
    },
    radio_group: {
        marginTop: 30,
        display: 'flex'
    },
    radio_detail: {
        marginLeft: 20,
        marginTop: 10
    },
    radio_money: {
        marginTop: 5,
        display: 'flex'
    },
    final_title: {
        marginTop: 20
    },
    final_content: {
        marginTop: 10
    },
    inbox: {
        color: 'white',
        width: 120,
        height: 30,
        border: 'none',
        outline: 'auto',
        marginTop: 30,
        backgroundColor: '#299494',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    open: {
        marginTop: 35
    },
    final_detail: {
        marginLeft: 20,
        display: 'flex',
        marginTop: 20
    },
    image_content: {
        marginLeft: 20
    },
    notsubmit: {
        marginLeft: 'auto',
        marginRight: 30
    },
    review: {
        width: 150,
        height: 30,
        color: '#299494',
        backgroundColor: 'white',
        borderColor: '#299494',
        outline: 'none',
        borderWidth: 1,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#299494',
            outline: 'none'
        }
    },
    divider: {
        marginTop: 20
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
    select_title: {
        fontSize: 20,
        fontWeight: 600
    },
    select_option: {
        marginTop: 30,
        width: 200,
        height: 30,
        borderRadius: 3,
        borderColor: '#c2c2c2',
        outline: 'none',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    textarea: {
        marginTop: 100,
        width: 250,
        position: 'absolute',
        marginLeft: -200,
        borderRadius: 3,
        borderColor: '#c2c2c2',
        outline: 'none',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    submit: {
        marginTop: 320,
        width: 150,
        height: 30,
        color: 'white',
        backgroundColor: '#299494',
        border: 'none',
        borderRadius: 3,
        position: 'absolute',
        marginLeft: -200,
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
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
        const { formState } = this.state;
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
                        <div>
                            <Typography className={classes.header}>Refund</Typography>
                            <div className={classes.detail}>
                                <img src={'/assets/images/refund.png'} alt='' className={classes.image} />
                                <div className={classes.image_detail}>
                                    <Typography className={classes.darion}>Darion</Typography>
                                    <Typography>Brochet</Typography>
                                    <Typography>Apr 03-Apr 05</Typography>
                                </div>
                            </div>
                            <div className={classes.radio_group}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    checked='true'
                                    color='primary'
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <Typography className={classes.radio_detail}>Send Money</Typography>
                            </div>
                            <div className={classes.radio_money}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    color='primary'
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <Typography className={classes.radio_detail}>Request Money</Typography>
                            </div>
                            <div className={classes.btn_group}>
                                <button className={classes.back} onClick={() => this.setState({ formState: "final" })}>Back</button>
                                <button className={classes.next} onClick={() => this.setState({ formState: "second" })}>Next</button>
                            </div>
                        </div>
                    )}
                    {formState === 'second' && (
                        <div>
                            <Typography className={classes.header}>Refund</Typography>
                            <div className={classes.detail}>
                                <img src={'/assets/images/refund.png'} alt='' className={classes.image} />
                                <div className={classes.image_detail}>
                                    <Typography className={classes.darion}>Darion</Typography>
                                    <Typography>Brochet</Typography>
                                    <Typography>Apr 03-Apr 05</Typography>
                                </div>
                            </div>
                            <div className={classes.radio_group}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    checked='true'
                                    color='primary'
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <Typography className={classes.radio_detail}>Send Money</Typography>
                            </div>
                            <div className={classes.radio_money}>
                                <Radio
                                    onChange={this.handleChange}
                                    value="a"
                                    color='primary'
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <Typography className={classes.radio_detail}>Request Money</Typography>
                            </div>
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
                                                <Tab label="Upcomming" style={{ marginLeft: "-30px" }} />
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
                                                <MoreHorizIcon className="more" onClick={this.Showdetail} />

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
                            <div className={classes.btn_group}>
                                <button className={classes.back} onClick={() => this.setState({ formState: "first" })}>Back</button>
                                <button className={classes.next} onClick={() => this.setState({ formState: "final" })}>Next</button>
                            </div>
                        </div>
                    )}
                    {formState === 'final' && (
                        <div>
                            <Typography className={classes.select_title}>Select reason</Typography>
                            <select
                                className={classes.select_option}
                                value={this.state.keyStatus}
                                name="keyStatus"
                                onChange={this.handleChangeInput}
                            >
                            <option className={classes.select_value} value="0">Change dates</option>
                            </select>
                            <textarea className={classes.textarea} rows="10" defaultValue="Add Description"></textarea>
                            <button className={classes.submit}>Submit</button>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
