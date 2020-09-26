import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Divider } from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
    },
    content: {
        backgroundColor: 'white',
        height: 700,
        padding: 50,
    },
    header: {
        fontSize: 25
    },
    title: {
        marginTop: 30,
        display: 'flex'
    },
    radio: {
        marginLeft: 'auto',
        color: '#299494'
    },
    rate: {
        color: '#299494'
    },
    divider: {
        marginTop: 10
    },
    avatar: {
        marginTop: 50,
        display: 'flex'
    },
    confirm: {
        color: '#299494',
        marginLeft: 20,
        marginTop: 40
    },
    detail: {
        color: '#7c7c7c',
        marginLeft: 130,
        marginTop: 40,
        fontWeight: 600
    },
    hi: {
        marginTop: 15
    },
    image: {
        height: 100
    },
    btn_group: {
        marginTop: 30,
        display: 'flex'
    },
    approve: {
        backgroundColor: '#40b000',
        width: 100,
        height: 30,
        color: 'white',
        border: 'none',
        outline: 'auto',
        borderRadius: 7
    },
    reject: {
        backgroundColor: '#e90e0e',
        width: 100,
        height: 30,
        marginLeft: 30,
        color: 'white',
        border: 'none',
        outline: 'auto',
        borderRadius: 7
    },
    message: {
        backgroundColor: 'white',
        width: 100,
        height: 30,
        marginLeft: 30,
        color: '#7c7c7c',
        borderColor: '#7c7c7c',
        outline: 'auto',
        borderWidth: 1,
        borderRadius: 7
    },
    dismiss: {
        backgroundColor: 'white',
        width: 100,
        height: 30,
        marginLeft: 30,
        color: '#7c7c7c',
        borderColor: '#7c7c7c',
        outline: 'auto',
        borderWidth: 1,
        borderRadius: 7
    },
    conversation: {
        color: '#299494',
        marginTop: 20
    },
    respond: {
        marginTop: 20
    },
    description: {
        display: 'flex',
        marginTop: 50
    },
    description1: {
        width: 400,
        height: 250,
        border: 'groove',
        display: 'flex'
    },
    description2: {
        width: 400,
        height: 250,
        marginLeft: 30,
        border: 'groove',
        display: 'flex'
    },
    notinterest: {
        marginTop: 30,
        marginLeft: 30,
        color: '#299494'
    },
    change_detail: {
        marginLeft: 20,
        marginTop: 30
    },
    change: {
        fontSize: 16,
        fontWeight: 600
    },
    change_btn: {
        width: 150,
        height: 30,
        marginTop: 50,
        color: '#299494',
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        outline: 'none',
        borderWidth: 1,
        borderRadius: 7,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    dummy: {
        marginTop: 10
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    <Typography className={classes.header}>Confirmed</Typography>
                    <div className={classes.title}>
                        <Typography>Requests & Inquiries (1)</Typography>
                        <RadioButtonUncheckedIcon className={classes.radio}/>
                        <Typography className={classes.rate}>100% Response Rate</Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.avatar}>
                        <img src={'/assets/images/booking.png'} alt='' className={classes.image}/>
                        <Typography className={classes.confirm}>Confirmed</Typography>
                        <Typography className={classes.detail}>Alice's Hair Wonderland-Hair-Braids</Typography>
                        <Typography className={classes.detail}>April 12 1:00 PM-2:00 PM</Typography>
                        <Typography className={classes.detail}>$616</Typography>
                    </div>
                    <div className={classes.description}>
                        <div className={classes.description1}>
                            <NotInterestedIcon className={classes.notinterest}/>
                            <div className={classes.change_detail}>
                                <Typography className={classes.change}>Change Reservation</Typography>
                                <Typography className={classes.dummy}>Dummy text</Typography>
                                <button className={classes.change_btn}>Change Reservation</button>
                            </div>
                        </div>
                        <div className={classes.description2}>
                            <NotInterestedIcon className={classes.notinterest}/>
                            <div className={classes.change_detail}>
                                <Typography className={classes.change}>Change Reservation</Typography>
                                <Typography className={classes.dummy}>Dummy text</Typography>
                                <button className={classes.change_btn}>Change Reservation</button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
