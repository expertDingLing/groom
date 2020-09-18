import React, { Component } from 'react'
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'

export class Trust extends Component {

    render() {

        return (
            <div className="trust-container">
                <Typography  color="inherit" component="h1">
                    Trust and Verification
                </Typography>
                <Typography  component="h3">
                    Social accounts
                </Typography>
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Facebook</Typography>
                    <Typography component="p">Not connected</Typography>
                    </Typography>
                    <Typography component="div">Manage</Typography>
                </div>
                <Divider />
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Google</Typography>
                    <Typography component="p">No connected</Typography>
                    </Typography>
                    <Typography component="div">connect</Typography>
                </div>
                <Divider />
                <div className="verify-info">Your verified info</div>
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Email</Typography>
                    <Typography component="p">You have confirmed your email. A confirmed email is important to allow us to securely communicate with you.</Typography>
                    </Typography>
                    <Typography component="div"></Typography>
                </div>
                <Divider />
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Phone Number</Typography>
                    <Typography component="p">Your number is only shared with another Groom member once you have confirmed booking.</Typography>
                    </Typography>
                    <Typography component="div"></Typography>
                </div>
                <Divider />

                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Professional License</Typography>
                    <Typography component="p">Sign in with Facebook and discover your trusted connections to hosts and guests all over the world.</Typography>
                    </Typography>
                    <Typography component="div">Disconnect</Typography>
                </div>
                <Divider />
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Be ready to book</Typography>
                    <Typography component="p">You will need to provide identification before you book, so get a head start by doing it now.</Typography>
                    </Typography>
                    <Typography component="div">Learn more</Typography>
                </div>
                <Button variant="contained" className="id-btn">Provide ID</Button>

            </div>
        )
    }
}

export default Trust