import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordShow: false,
            confirmPasswordShow: false,
        }
    }

    createAccountHandle = () => {
        this.props.history.push('/login');
    }
    render() {
        const { passwordShow, confirmPasswordShow } = this.state;
        return (
            <div className="signup-page">
                <div className="signup-container">
                    <Typography component="p" className="title">Sign Up Form</Typography>
                    <Grid className="form-container">
                        <Box className="input-box">
                            <input type="text" placeholder="matt@ncitshop.com"/>
                        </Box>
                        <Box className="input-box">
                            <input type="text" placeholder="First Name"/>
                        </Box>
                        <Box className="input-box">
                            <input type="text" placeholder="Last Name"/>
                        </Box>
                        <Box className="phone-input-box">
                            <input type="number" placeholder="+1"/>
                            <input type="number" placeholder="345-637-231 (Optional)"/>
                        </Box>
                        <Box className="password-input-box">
                           
                            <input type={`${passwordShow ? "text": "password"}`} placeholder="Set Password"/>
                            
                            <Button style={{color: "#666666"}}  onClick={() => this.setState({passwordShow: !passwordShow})}>Show</Button>
                        </Box>
                        <Box className="password-input-box">
                            
                            <input type={`${confirmPasswordShow ? "text": "password"}`} placeholder="Confirm Password"/>
                            
                            <Button style={{color: "#666666"}} onClick={() => this.setState({confirmPasswordShow: !confirmPasswordShow})}>Show</Button>
                        </Box>
                    </Grid>
                    <Grid container className="terms-agree">
                        <Typography component="p" className="agree">By clicking below, you agree to our </Typography>
                        <Typography component="p" className="terms"> Terms & Conditions</Typography>
                    </Grid>
                    <Grid style={{textAlign: "center"}}>
                        <Button variant="contained" className="create-account-btn" onClick={()=>this.createAccountHandle()}>Create an Account</Button>
                    </Grid>
                    <IconButton className="close-icon-btn" onClick={()=>this.props.history.push('/')}>
                        <CloseRoundedIcon style={{fontSize: "30px"}}/>
                    </IconButton>
                </div>
                
                <div className="mask"></div>
            </div>
        )
    }
}

export default Signup
