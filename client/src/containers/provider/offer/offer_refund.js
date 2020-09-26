import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { Divider } from '@material-ui/core';

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
        marginTop: 400,
        display: 'flex'
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
    request: {
        color: '#299494',
        width: 120,
        height: 30,
        border: 'none',
        outline: 'auto',
        marginTop: 30,
        backgroundColor: 'white',
        borderColor: '#299494',
        marginLeft: 30,
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
    buttons: {
        display: 'flex'
    },
    reason: {
        fontWeight: 600,
        marginTop: 30
    },
    btn_detail: {
        display: 'flex'
    },
    btn: {
        width: 200,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        borderRadius: 3,
        color: '#7c7c7c',
        outline: 'none'
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: 'final'
        }
    }
    render() {
        const { classes } = this.props;
        const {formState} = this.state;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                {formState === 'reason' && (
                    <div>
                        <Typography className={classes.header}>Select reason</Typography>
                        <select
                            className={classes.select}
                            value={this.state.keyStatus}
                            name="keyStatus"
                            onChange={this.handleChangeInput}
                        >
                        <option className={classes.select_value} value="0">Change dates</option>
                        </select>
                        <div className={classes.btn_group}>
                            <button className={classes.back}>Back</button>
                            <button className={classes.next} onClick={()=>this.setState({formState: "refund"})}>Next</button>
                        </div>
                    </div>
                )}
                {formState === 'send' && (
                    <div>
                        <Typography className={classes.header}>Send Money</Typography>
                        <div className={classes.detail}>
                            <img src={'/assets/images/refund.png'} alt='' className={classes.image}/>
                            <div className={classes.image_detail}>
                                <Typography className={classes.darion}>Darion</Typography>
                                <Typography>Brochet</Typography>
                                <Typography>Apr 03-Apr 05</Typography>
                            </div>
                        </div>
                        <Typography className={classes.reason}>Select a reason</Typography>
                        <div className={classes.btn_detail}>
                            <button className={classes.btn}>Damaged or missing items</button>
                            <Radio
                                onChange={this.handleChange}
                                value="a"
                                checked='true'
                                color='primary'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                        </div>
                    </div>
                )}
                {formState === 'final' && (
                    <div>
                        <Typography className={classes.header}>Need to send or request money?</Typography>
                        <Typography className={classes.final_title}>Send or request money for hosting help, refunds, damages, or any thing else directly from your inbox. You will be</Typography>
                        <Typography className={classes.final_content}>able to send or request money until 60 days after check out.</Typography>
                        <div className={classes.buttons}>
                            <button className={classes.inbox} onClick={()=>this.setState({formState: "send"})}>Send Money</button>
                            <button className={classes.request} onClick={()=>this.setState({formState: "request"})}>Request Money</button>
                        </div>
                        <Typography className={classes.open}>OPEN</Typography>
                        <div className={classes.final_detail}>
                            <img src={'/assets/images/offer.png'} alt='' />
                            <div className={classes.image_content}>
                                <Typography>You requested $0 from Sagar</Typography>
                                <Typography>Dec 21-26, 2 guests</Typography>
                            </div>
                            <Typography className={classes.notsubmit}>Not submitted</Typography>
                            <button className={classes.review}>Review Details</button>
                        </div>
                        <Divider className={classes.divider}/>
                        <div className={classes.final_detail}>
                            <img src={'/assets/images/offer.png'} alt='' />
                            <div className={classes.image_content}>
                                <Typography>You requested $0 from Sagar</Typography>
                                <Typography>Dec 21-26, 2 guests</Typography>
                            </div>
                            <Typography className={classes.notsubmit}>Not submitted</Typography>
                            <button className={classes.review}>Review Details</button>
                        </div>
                        <Divider className={classes.divider}/>
                        <Typography className={classes.open}>CLOSED</Typography>
                        <div className={classes.final_detail}>
                            <img src={'/assets/images/offer.png'} alt='' />
                            <div className={classes.image_content}>
                                <Typography>You requested $0 from Sagar</Typography>
                                <Typography>Dec 21-26, 2 guests</Typography>
                            </div>
                            <Typography className={classes.notsubmit}>Not submitted</Typography>
                            <button className={classes.review}>Review Details</button>
                        </div>
                        <Divider className={classes.divider}/>
                        <div className={classes.final_detail}>
                            <img src={'/assets/images/offer.png'} alt='' />
                            <div className={classes.image_content}>
                                <Typography>You requested $0 from Sagar</Typography>
                                <Typography>Dec 21-26, 2 guests</Typography>
                            </div>
                            <Typography className={classes.notsubmit}>Not submitted</Typography>
                            <button className={classes.review}>Review Details</button>
                        </div>
                        <Divider className={classes.divider}/>
                    </div>
                )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
