import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

export class Notifications extends Component {

    render() {

        return (
            <div className="notification-container">
                <Typography  color="inherit" component="p">
                    Account {'>'} Notifications
                </Typography>
                <Typography  color="inherit" component="h1">
                    Notifications
                </Typography>

                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                           Messages
                        </Typography>
                        <Typography  color="inherit" component="p">
                            Receive messages from 
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />

                <Grid className="toggle-block">
                    <Typography component="div">Email</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Text Message</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Push Notifications</Typography>
                    <Typography component="div">
                    <Switch
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                           Reminders
                        </Typography>
                        <Typography  color="inherit" component="p">
                            Receive booking reminders, request to write a review, pricing notices, and other remainders related
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid className="toggle-block">
                    <Typography component="div">Email</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Text Message</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Push Notifications</Typography>
                    <Typography component="div">
                    <Switch
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                           Promotions and Tips
                        </Typography>
                        <Typography  color="inherit" component="p">
                            Receive coupons, promotions, surveys, product updates and inspiration from Groom
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid className="toggle-block">
                    <Typography component="div">Email</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Text Message</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Phone Calls</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Push Notifications</Typography>
                    <Typography component="div">
                    <Switch
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={6}>
                        <Typography  color="inherit" component="h2">
                           Policy and Community
                        </Typography>
                        <Typography  color="inherit" component="p">
                            Receive updates on home sharing regulations and 
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid className="toggle-block">
                    <Typography component="div">Email</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Text Message</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Phone Calls</Typography>
                    <Typography component="div">
                    <Switch
                        defaultChecked
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>
                <Grid className="toggle-block">
                    <Typography component="div">Push Notifications</Typography>
                    <Typography component="div">
                    <Switch
                        color="default"
                        className="swithch-btn"
                    />
                    </Typography>
                </Grid>

            </div>
        )
    }
}

export default Notifications