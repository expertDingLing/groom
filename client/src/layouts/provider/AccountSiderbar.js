import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../../assets/scss/provider1.scss'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ListItemText from '@material-ui/core/ListItemText';
import HttpsRoundedIcon from '@material-ui/icons/HttpsRounded';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';


export class AccountSiderbar extends Component {

    render() {
        const {flag} = this.props
        return (
            <div className="accountSider-container">
                <Grid className="profile-info">
                    <img src={`../../assets/images/avator.png`} alt="avator" />
                    <Typography component="h2">{this.props.userName.name}</Typography>
                    <Typography component="p">{this.props.userName.email}</Typography>
                    <Button className="profile-btn">Profile</Button>
                </Grid>
                <List component="nav">
                    <ListItem button onClick={() => this.props.statChk("info")} className={flag === 'info' ? "active" : ""}>
                        <ListItemIcon>
                            <PersonRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Personal info" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("login")} className={flag === "login" ? "active" : ""}>
                        <ListItemIcon>
                            <HttpsRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login & security" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("payment")} className={flag === "payment" ? "active" : ""}>
                        <ListItemIcon>
                            <MonetizationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="Payments and payouts" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("notifications")} className={flag === "notifications" ? "active" : ""}>
                        <ListItemIcon>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("privacy")} className={flag === "privacy" ? "active" : ""}>
                        <ListItemIcon>
                            <VisibilityRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Privacy & sharing" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("global")} className={flag === "global" ? "active" : ""}>
                        <ListItemIcon>
                            <TuneRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Global preferences" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("hosting")} className={flag === "hosting" ? "active" : ""}>
                        <ListItemIcon>
                            <PersonRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Professional hosting tools" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemIcon>
                            
                        </ListItemIcon>
                        <ListItemText primary="Trust and Verification" />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default AccountSiderbar