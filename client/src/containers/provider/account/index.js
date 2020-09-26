import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../assets/scss/provider1.scss'
import AccountMenu from '../AccountMenu'
import PersonalInfo from './personal'
import Login from './login'
import Payment from './payment'
import Notification from './notification'
import Privacy from './privacy'
import Global from './global'
import Groom from './groom'
import Trust from './trust'

const userName = {
    name: "Mathew McCoy",
    email: "matt@ncitshop.com",
    sex: "Male",
    birth: "January 9, 1980",
    phone: "+1 999 9078393",
    G_ID: "Provided",
    address: "123 main street"
}

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
            flag: 'info',
            tabFlag: 'payment',
            privaChk: 'DATA'
        }
    }

    statChk = (name) => {
        this.setState({flag: name})
    }
    tabChk = (name) => {
        this.setState({tabFlag: name})
    }
    privacyChk = (name) => {
        this.setState({privaChk: name})
    }

    render() {
        const {flag} = this.state;
        return (
            <div className="account-container">
                <Grid container className="account-grid">
                    <Grid item lg={2} className="account-side">
                        <AccountMenu statChk={this.statChk} flag={this.state.flag} userName={userName} />
                    </Grid>
                    <Grid item lg={10} className="accountContent">
                        {flag === 'info' && (<PersonalInfo userName={userName} />)}
                        {flag === 'login' && (<Login />)}
                        {flag === 'payment' && (<Payment tabChk={this.tabChk} tabFlag={this.state.tabFlag} />)}
                        {flag === 'notifications' && (<Notification />)}
                        {flag === 'privacy' && (<Privacy privaChk={this.state.privaChk} privacyChk={this.privacyChk} />)}
                        {flag === 'global' && (<Global />)}
                        {flag === 'hosting' && (<Groom />)}
                        {flag === 'trust' && (<Trust />)}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default index
