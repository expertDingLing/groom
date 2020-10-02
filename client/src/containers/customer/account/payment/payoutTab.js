import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Card from '@material-ui/core/Card'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

export class PayoutTab extends Component {

    render() {

        return (

                <Grid container className="paypout">
                    <Grid item lg={5} style={{marginTop:"50px"}}>
                        <Card variant="outlined" className="tax-fill">
                            <div >
                                <ErrorOutlineOutlinedIcon />
                            </div>
                            <div>
                                <Typography component="p">2019 Tax Filing</Typography>
                                <Typography component="p">Lorem ipsum doloor sit amet.</Typography>
                                <Typography component="p">Lorem ipsum dolor sit</Typography>
                                <Typography component="p">amet.Lorem ipsum dolor sit</Typography>
                                <Typography component="p">amet.Lorem ipsum dolor sit</Typography>

                            </div>
                        </Card>
                    </Grid>
                    <Grid item lg={12} className="payment-method">
                        <Typography component="h1">Payout Methods</Typography>
                        <Typography component="p">Lorem ipsum. Lorem ipsum.</Typography>
                        <Typography component="div" className="card-block">
                            <div>
                                <span><AccountBalanceIcon /></span>
                                <Box component="span" style={{marginLeft:"5px"}}>
                                    <Typography component="p">Bank Account<span><Button variant="contained">Default</Button></span></Typography>
                                    <Typography component="p">Mathew McCoy Checking ....123(USD)</Typography>
                                </Box>
                            </div>
                            <div className="card-more">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item lg={12} className="payment-method">
                        <Typography component="div" className="card-block" style={{marginTop:"30px"}}>
                            <div>
                                <span><AccountBalanceIcon /></span>
                                <Box component="span" style={{marginLeft:"5px"}}>
                                    <Typography component="p">Bank Account</Typography>
                                    <Typography component="p">Mathew McCoy Checking ....123(USD)</Typography>
                                </Box>
                            </div>
                            <div className="card-more">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </Typography>
                        <Divider />
                    </Grid>

                    <Grid item lg={12}>
                        <Button variant="contained" className="add-payout-btn">Add Payout Method</Button>
                    </Grid>

                    <Grid item lg={12} className="payment-method">
                        <Typography component="h1">Payout Routing rules</Typography>
                        <Typography component="p">Routing rules let you split payouts between methods, or direct payouts for cretain properties to different methods </Typography>
                        <Typography component="div" className="card-block">
                            <div>
                                <Box component="span" style={{marginLeft:"5px"}}>
                                    <Typography component="p">Headline</Typography>
                                    <Typography component="p">100% {'->'} ...1197(USD)</Typography>
                                </Box>
                            </div>
                            <div className="card-more">
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </Typography>
                        <Divider />
                    </Grid>

                    <Grid item lg={12}>
                        <Button variant="contained" className="add-payout-btn">Add Payout routing rule</Button>
                    </Grid>

                    <Grid item lg={12} className="payment-method">
                        <Typography component="h1">Taxpayer Information</Typography>
                        <Typography component="p">If you add a single tax payer, we will assign it to all US</Typography>
                        <Typography component="div" className="card-block">
                            <div>
                                <Box component="span" style={{marginLeft:"5px"}}>
                                    <Typography component="p">Mathew McCopy <span><Button variant="contained">Default</Button></span></Typography>
                                    <Typography component="p">Taxpayer ID: xxx-xx-xx66. Form W-9</Typography>
                                    <Typography component="p">Added on Oct 15,2016</Typography>

                                </Box>
                            </div>
                            <div className="card-more" style={{height:"45px"}}>
                                <IconButton>
                                    <MoreHorizIcon />
                                </IconButton>
                            </div>
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item lg={12}>
                        <Button variant="contained" className="add-payout-btn">Add U.S. Taxpayer</Button>
                    </Grid>
                    
                    
                </Grid>
        )
    }
}

export default PayoutTab