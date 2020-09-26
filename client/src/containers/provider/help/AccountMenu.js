import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BlackP } from '../../../components/styled-components';



export class AccountMenu extends Component {

    render() {
        const {flag} = this.props
        return (
            <div className="accountSider-container">
                <BlackP>About Groom</BlackP>
                <List component="nav">
                    <ListItem button onClick={() => this.props.statChk("info")} className={flag === 'info' ? "active" : ""}>
                        <ListItemText primary="Getting started" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("login")} className={flag === "login" ? "active" : ""}>
                        <ListItemText primary="How Groom works" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("payment")} className={flag === "payment" ? "active" : ""}>
                        <ListItemText primary="Messaging" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("notifications")} className={flag === "notifications" ? "active" : ""}>
                        <ListItemText primary="Community Standards" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("privacy")} className={flag === "privacy" ? "active" : ""}>
                        <ListItemText primary="Partnerships" />
                    </ListItem>
                    <BlackP>Your Account</BlackP>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Creating an account" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Managing your account" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="ID and verification" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Account security" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Reviews" />
                    </ListItem>
                    <BlackP>Safety and accessibility</BlackP>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Safety Concerns" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Safety Tips" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Reporting issues" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Accessibility" />
                    </ListItem>
                    <ListItem button onClick={() => this.props.statChk("trust")} className={flag === "trust" ? "active" : ""}>
                        <ListItemText primary="Terms and Policies" />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default AccountMenu