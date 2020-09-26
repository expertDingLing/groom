import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Divider } from '@material-ui/core';

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
                    <Typography className={classes.header}>Pending</Typography>
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
                    <Typography className={classes.hi}>Hi Clare,</Typography>
                    <div className={classes.btn_group}>
                        <button className={classes.approve}>Approve</button>
                        <button className={classes.reject}>Reject</button>
                        <button className={classes.message}>Message</button>
                        <button className={classes.dismiss}>Dismiss</button>
                    </div>
                    <Typography className={classes.conversation}>See entire conversation</Typography>
                    <Typography className={classes.respond}>Respond in 23 hrs to maintain your response rate</Typography>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
