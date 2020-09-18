import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import {GrayP , BlueP} from '../../components/styled-components'


export class phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formState: 'confirm',
            passwordShow: false,
        }
    }
    render() {
        const { formState } = this.state;
        return (
            <div className="signin-page">
                <div className="signin-container">
                {formState === 'confirm' && (
                    <div className="confirm-form">
                        <GrayP fontSize="28px" align="center">Confirmation</GrayP>
                        <GrayP align="center">Please enter the 4-digit code you received via text message</GrayP>
                        <div className="box-contianer">
                            <input type="number" />
                            <input type="number" />
                            <input type="number" />
                            <input type="number" />
                        </div>
                        <div className="outline-btn-container">
                            <Button variant="outlined" className="btn">Resend to +1 919-414-4977</Button>
                            <Button variant="outlined" className="btn" onClick={()=>this.setState({formState: "change"})}>Change Phone Number</Button>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <Button variant="contained" className="done-btn">Done</Button>
                        </div>
                    </div>
                )}

                {formState === 'change' && (
                    <div className="change-form">
                        <GrayP fontSize="28px" align="center">Change Mobile Phone Number</GrayP>
                        <GrayP align="center">Old mobile phone number</GrayP>
                        <GrayP align="center" fontSize="12px">+1 919-414-4977</GrayP>
                        <div className="box-contianer">
                            <input type="number" placeholder="+1"/>
                            <input type="number" placeholder="Enter new mobile phone number"/>
                        </div>
                        <div>
                            <Button variant="contained" className="continue-btn"  onClick={()=>this.setState({formState: "verify"})}>Continue</Button>
                        </div>
                        <div>
                            <Button variant="outlined" className="cancel-btn" onClick={()=>this.setState({formState: "confirm"})}>Cancel</Button>
                        </div>
                    </div>
                )}

                {formState === 'verify' && (
                    <div className="change-form">
                        <GrayP fontSize="28px" align="center">Verify mobile number</GrayP>
                        <div style={{display: "flex", justifyContent: "center", columnGap: "10px"}}>
                            <GrayP align="center" fontSize="12px">+1 919-414-4977</GrayP>
                            <BlueP fontSize="12px"> (Change)</BlueP>
                        </div>
                        <GrayP align="center">Please enter the 4-digit code you received via text message</GrayP>

                        <div className="box-contianer-2">
                            <input type="number" />
                            <input type="number" />
                            <input type="number" />
                            <input type="number" />
                        </div>
                        <div>
                            <Button variant="contained" className="continue-btn">Verify</Button>
                        </div>
                        <div>
                            <Button variant="outlined" className="resend-btn">Resend Code</Button>
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

export default phone
