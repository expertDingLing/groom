import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';


export class customerSignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionTagState: "customer",
        }
    }

    handleLogin = () => {
            this.props.history.push('/login');
 
    }
    render() {
        const { optionTagState } = this.state;
        return (
            <div className="customer-signin-page">
                <div className="container">
                    <p className="title">Welcome to Groom</p>
                    <div className="form-container">
                        <div className="option-tags">
                            <Button variant="contained" className={`tag ${(optionTagState === "customer") && ("tag-active")} `} onClick={()=>this.setState({optionTagState: "customer"})}>
                                Sign Up as a Customer
                            </Button>
                            <Button variant="contained" className={`tag ${(optionTagState === "provider") && ("tag-active")} `} onClick={()=>this.setState({optionTagState: "provider"})}>
                                Sign Up as a Service Provider
                            </Button>
                        </div>
                        <div>
                            <input type="number" placeholder="+1 Phone Number" />
                        </div>
                        <div>
                            <Button variant="contained" className="blue-btn" onClick={()=>this.props.history.push('/sign-up')}>Continue</Button>
                        </div>
                        <div className="or-sign-up">
                            <p>Or Sign Up with</p>
                        </div>
                        <div>
                            <Button variant="outlined" className="outline-btn">Continue with Email</Button>
                        </div>
                        <div>
                            <Button variant="contained" className="blue-btn">Sign Up with Facebook</Button>
                        </div>
                        <div>
                            <Button variant="outlined"  className="outline-btn">
                                <img src={'../../assets/icons/icon-google.png'} alt="google icon" />
                                Sign Up with Google
                            </Button>
                        </div>
                        <div className="">
                            <p style={{color: "#707070"}}>By creating an account you agree to our Terms of Use and Privacy Policy.</p>
                        </div>

                        <div>
                            <Button style={{color: "#707070"}}>Already have an account?</Button>
                            <Button style={{color: "#299494"}} onClick={()=>this.handleLogin()}>login</Button>
                        </div>
                    </div>

                    <IconButton className="close-icon-btn" onClick={()=>this.props.history.push('/')}>
                        <CloseRoundedIcon style={{fontSize: "35px"}}/>
                    </IconButton>
                </div>
                
            </div>
        )
    }
}

export default customerSignin
