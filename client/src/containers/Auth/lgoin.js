import React, { Component } from 'react'
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import Avatar from '@material-ui/core/Avatar';
import {GrayP , BlueP} from '../../components/styled-components'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formState: 'login',
            passwordShow: false,
        }
    }
    render() {
        const { formState } = this.state;
        return (
            <div className="signin-page">
                <div className="signin-container">

                    {formState === 'login' && (
                    <div className="login-form">
                        <p className="sub-title">Login</p>
                        <Divider />
                        <div className="content">
                            <div>
                                <p>Email</p>
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                            <div>
                                <p>Password</p>
                                <div className="password-box">
                                    <input type={`${this.state.passwordShow ? "text": "password"}`}/>
                                    <IconButton onClick={()=>this.setState({passwordShow: !this.state.passwordShow})}>
                                        {this.state.passwordShow ? (
                                            <RemoveRedEyeOutlinedIcon />
                                        ):(
                                            <VisibilityOffIcon />
                                        )}
                                    </IconButton>
                                </div>
                            </div>
                            <div>
                                <Button variant="contained" className="contain-btn" onClick={()=>this.props.history.push('/provider/shops')}>Login</Button>
                            </div>
                            <div style={{paddingTop: "15px"}}>
                                <Button className="text-btn" onClick={()=>this.setState({formState: "forgot"})}>Forgot password?</Button>
                            </div>
                            <div>
                                <Button className="text-btn" onClick={()=>this.setState({formState: "another"})}>More Login options</Button>
                            </div>
                            <div className="dont-sign-btn">
                                <Button className="text-btn">Don't have an account?</Button>
                                <Button className="text-btn" onClick={()=>this.props.history.push('/sign-up')}>Sign Up</Button>
                            </div>

                        </div>
                    </div>
                    )}

                    {formState === 'another' && (
                        <div className="another-account-form">
                            <p className="sub-title">Karllie MCMullen</p>
                            <BlueP align="center">Signed into Groom as</BlueP>
                            <div>
                                <Avatar src={'../../assets/images/user-4.png'} alt="user png" style={{width: "50px", height: "50px"}}/>
                                <GrayP style={{cursor: "pointer"}} onClick={()=>this.setState({formState: "signIn"})}>example@gmail.com</GrayP>
                            </div>
                            <div>
                                <IconButton className="add-btn">
                                    <AddOutlinedIcon style={{fontSize: "30px"}}/>
                                </IconButton>
                                <GrayP>Add Account</GrayP>
                            </div>
                            <IconButton className="backward-btn" onClick={()=>this.setState({formState: "login"})}>
                                <ArrowBackOutlinedIcon style={{fontSize: "30px"}}/>
                            </IconButton>

                        </div>
                    )}

                    {formState === 'forgot' && (
                    <div className="forgot-form">
                        <p className="sub-title">Forgot Password?</p>
                        <GrayP style={{textAlign: "justify"}}>Please select either the SMS or email associated with your account, and we will send you a link to reset your password.</GrayP>
                        <div>
                            <Button className="btn-content" onClick={() => this.props.history.push('/confirm')}>
                                <div>
                                    <GrayP>Via SMS</GrayP>
                                    <GrayP>**** ***** 9011</GrayP>
                                </div>
                                <PhoneIphoneOutlinedIcon style={{fontSize: "30px", color: "#979797"}}/>
                            </Button>
                        </div>
                        <div>
                            <Button className="btn-content">
                                <div>
                                    <GrayP>Via Email</GrayP>
                                    <GrayP>**** el@gmail.com</GrayP>
                                </div>
                                <EmailOutlinedIcon style={{fontSize: "30px", color: "#979797"}}/>
                            </Button>
                        </div>
                        <div>
                            <Button className="send-btn">Send Reset Link</Button>
                        </div>
                    </div>
                    )}

                    {(formState === 'signIn') && (
                    <div className="signin-form">
                        <p className="sub-title">Welcome back, Mathew.</p>
                        <Divider />
                        <div className="container">
                            <div style={{display: "flex", alignItems: "center"}}>
                                <Avatar src={'../../assets/images/user-3.png'} className="avatar" alt="user img" />
                            </div>
                            <GrayP>***@notishop.com</GrayP>
                            <div className="password-box">
                                <input type={`${this.state.passwordShow ? "text": "password"}`}/>
                                <IconButton onClick={()=>this.setState({passwordShow: !this.state.passwordShow})}>
                                    {this.state.passwordShow ? (
                                        <RemoveRedEyeOutlinedIcon />
                                    ):(
                                        <VisibilityOffIcon />
                                    )}
                                </IconButton>
                            </div>
                            <div>
                                <Button variant="contained" className="contain-btn" onClick={()=>this.props.history.push('/provider/shops')}>Login</Button>
                            </div>
                            <div style={{paddingTop: "15px"}}>
                                <Button className="text-btn" onClick={()=>this.setState({formState: "forgot"})}>Forgot password?</Button>
                            </div>
                            
                            <div className="dont-sign-btn">
                                <Button className="text-btn" onClick={()=>this.props.history.push('/sign-up')}>Not yet?</Button>
                                <Button className="text-btn" onClick={()=>this.setState({formState: "another"})}>Use another accout</Button>
                            </div>

                        </div>
                       
                    </div>
                    )}

                    <IconButton className="close-icon-btn" onClick={()=>this.props.history.push('/')}>
                        <CloseRoundedIcon style={{fontSize: "30px"}}/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default signin
