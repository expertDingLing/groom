import React, { Component } from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import '../../../assets/scss/provider1.scss'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Checkbox from '@material-ui/core/Checkbox';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
        height: 500,
    },
    content: {
        backgroundColor: 'white',
        height: 500,
        padding: 50
    },
    bottom: {
        width: 150,
        borderRadius: 5,
        height: 10,
        backgroundColor: '#c2c2c2',
    },
    header: {
        marginTop: 20
    },
    select: {
        width: '100%',
        height: 30,
        alignItems: 'center',
        color: '#7c7c7c',
        marginTop: 35,
        borderColor: '#c2c2c2',
        '&:focus':{
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    select1: {
        width: '100%',
        height: 30,
        alignItems: 'center',
        color: '#7c7c7c',
        marginTop: -1,
        borderColor: '#c2c2c2',
        '&:focus':{
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    check: {
        color: 'green',
        marginLeft: 'auto',
        display: 'flex',
        marginRight: 30,
        marginTop: -22,
        height: 15,
    },
    verify: {
        color: '#7c7c7c',
        width: '100%',
        height: 30,
        alignItems: 'center',
        borderColor: '#c2c2c2',
        marginTop: -1,
        '&:focus':{
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    detail: {
        marginTop: 30,
        display: 'flex'
    },
    number: {
        color: '#7c7c7c',
        fontSize: 15,
        marginLeft: 50
    },
    second_select: {
        color: '#7c7c7c',
        marginLeft: 30,
        alignItems: 'center',
        borderColor: '#c2c2c2',
        marginTop: -1,
        '&:focus':{
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    firstnumber: {
        marginLeft: 30,
        backgroundColor: '#7c7c7c',
        border: 'none',
        '&:focus':{
            border: 'none',
            outline: 'none'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    lastnumber: {
        borderColor: '#c2c2c2',
        outline: 'none',
        '&:focus':{
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    help: {
        marginLeft:50
    },
    help_detail: {
        marginLeft: 5
    },
    phone_verify: {
        marginLeft: 135,
        marginTop: 50
    },
    verify_btn:{
        backgroundColor: '#299494',
        height: 30,
        width: 80,
        color: 'white',
        borderRadius: 5,
        border: 'none',
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    verify_detail: {
        color: '#7c7c7c',
        marginTop: 20,
        fontSize: 13
    },
    header1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 600
    },
    email :{
        marginTop: 30,
        height: 80
    },
    check_email: {
        color: '#299494',
        height: 123,
        width: 65,
        marginLeft: 8,
        marginTop: -105
    },
    email_detail: {
        display: 'flex'
    },
    email_content: {
        marginTop: -85,
        marginLeft: 40,
        color: '#7c7c7c',
    },
    resend: {
        color: '#299494',
        marginTop: 30,
        '&:hover':{
            cursor: 'pointer'
        }
    },
    verify_content:{
        border: 'groove',
        marginTop: 50,
        height: 300
    },
    verify_email: {
        border: 'groove',
        marginTop: 50,
        height: 200
    },
    checkicon: {
        marginLeft: -10,
        color: 'black'
    },
    check_content: {
        display: 'flex'
    },
    check_detail: {
        marginLeft: 20,
        marginTop: 10,
        color: '#2c2c2c'
    },
    header2: {
        fontSize: 20,
        fontWeight: 600
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
            formState: 'phone',
        }
    }

    render() {
        const {classes} = this.props;
        const {formState} = this.state;
        return (
            <div className={classes.container}>
                {formState === 'phone' && (
                <div className={classes.content}>
                    <Typography className={classes.header2}>Verify you are a human to start your free trial</Typography>
                     <select
                        className={classes.select}
                        value={this.state.keyStatus}
                        name="keyStatus"
                        onChange={this.handleChangeInput}
                    >
                    <option className={classes.select_value} value="0">Verify Email</option>
                    </select>
                    <CheckCircleOutlineIcon className={classes.check}/>
                    <div className={classes.verify_content}>
                        <select
                            className={classes.verify}
                            value={this.state.keyStatus}
                            name="keyStatus"
                            onChange={this.handleChangeInput}
                        >
                        <option className={classes.select_value} value="0">Verify Phone Number</option>
                        </select>
                        <div className={classes.detail}>
                            <Typography className={classes.number}>Number</Typography>
                            <select
                                className={classes.second_select}
                                value={this.state.keyStatus}
                                name="keyStatus"
                                onChange={this.handleChangeInput}
                            >
                            <option className={classes.select_value} value="0">United States</option>
                            </select>
                            <button className={classes.firstnumber}>+1</button>
                            <input className={classes.lastnumber} type="text" placeholder="Phone Number"/>
                            <HelpIcon className={classes.help}/>
                            <Typography className={classes.help_detail}>Why verify a phone number?</Typography>
                        </div>
                        <div className={classes.phone_verify}>
                            <button className={classes.verify_btn} onClick={()=>this.setState({formState: "email"})}>Verify</button>
                            <Typography className={classes.verify_detail}>We will be sending you a verification code on your number</Typography>
                            <div className={classes.check_content}>
                                <Checkbox
                                    className={classes.checkicon}
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />
                                <Typography className={classes.check_detail}>The phone number you provide will be</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                {formState === 'email' && (
                    <div className={classes.content}>
                    <Typography className={classes.header1}>Verify you are a human to start your free trial</Typography>
                    <div className={classes.verify_email}>
                        <select
                            className={classes.select1}
                            value={this.state.keyStatus}
                            name="keyStatus"
                            onChange={this.handleChangeInput}
                        >
                        <option className={classes.select_value} value="0">Verify Email</option>
                        </select>
                        <img className={classes.email} src={"/assets/images/email.png"} alt="" />
                        <div className={classes.email_detail}>
                            <MailOutlineIcon className={classes.check_email}/>
                            <div className={classes.email_content}>
                                <Typography>We have sent an email to example@gmail.com</Typography>
                                <Typography>To continue, please check your email and verify your account</Typography>
                                <Typography>Didn't receive the email?</Typography>
                                <Typography className={classes.resend}>Resend Email</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default withStyles(styles)(index)
