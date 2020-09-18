import React, { Component } from 'react'
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import PaymentTab from './payment/paymentTab'
import PayoutTab from './payment/payoutTab'
import TaxTab from './payment/taxTab'
import DonationTab from './payment/donationTab'

export class Payment extends Component {

    render() {

        return (
            <div className="payment-container">
               <Typography  color="inherit" component="p">
                    Account {'>'} Payments and Payouts {'>'} {this.props.tabFlag}
                </Typography>
                <Typography  color="inherit" component="h1">
                    Payments and payouts
                </Typography>
                <Box className="tab-nav">
                    <Box component="span" style={{marginRight:"16px"}} onClick={() => this.props.tabChk("payment")} className={this.props.tabFlag === "payment" ? "active" : ""} >PAYMENTS</Box>
                    <Box component="span" m={2} onClick={() => this.props.tabChk("payout")} className={this.props.tabFlag === "payout" ? "active" : ""}>PAYOUTS</Box>
                    <Box component="span" m={2} onClick={() => this.props.tabChk("tax")} className={this.props.tabFlag === "tax" ? "active" : ""}>TAXES</Box>
                    <Box component="span" m={2} onClick={() => this.props.tabChk("donation")} className={this.props.tabFlag === "donation" ? "active" : ""}>DONATIONS</Box>
                </Box>
                <Divider />

                {this.props.tabFlag === "payment" && (<PaymentTab />)}
                {this.props.tabFlag === "payout" && (<PayoutTab />)}
                {this.props.tabFlag === "tax" && (<TaxTab />)}
                {this.props.tabFlag === "donation" && (<DonationTab />)}
                
            </div>
        )
    }
}

export default Payment