import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';

export class PersonalInfo extends Component {

    render() {

        return (
            <div className="login-container">
                <Typography  color="inherit" component="p">
                    Account {'>'} Login {'&'} Security
                </Typography>
                <Typography  color="inherit" component="h1">
                    Login {'&'} Security
                </Typography>
                <Typography  color="inherit" component="h1" className="title">
                    Login
                </Typography>
                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                            Password
                        </Typography>
                        <Typography  color="inherit" component="p">
                            Updated 3 days ago.
                        </Typography>
                    </Grid>
                    <Grid container item lg={6} className="edit-btn">
                        <Typography  color="inherit" component="p">
                            Update
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Typography  color="inherit" component="h1" className="title">
                    Social Accounts
                </Typography>
                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                            Facebook
                        </Typography>
                        <Typography  color="inherit" component="p">
                            connected
                        </Typography>
                    </Grid>
                    <Grid container item lg={6} className="edit-btn">
                        <Typography  color="inherit" component="p">
                            Disconnect
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                            Google
                        </Typography>
                        <Typography  color="inherit" component="p">
                            Disconnected
                        </Typography>
                    </Grid>
                    <Grid container item lg={6} className="edit-btn">
                        <Typography  color="inherit" component="p">
                            Connect
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Typography  color="inherit" component="h1" className="title">
                    Device history
                </Typography>
                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                            Windows 10.0 Chrome
                        </Typography>
                        <Typography  color="inherit" component="p">
                            Garner Febraury 24, 2020
                        </Typography>
                    </Grid>
                    <Grid container item lg={6} className="edit-btn">
                        <Typography  color="inherit" component="p">
                            Logout Device
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
            </div>
        )
    }
}

export default PersonalInfo