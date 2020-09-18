import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export class PaymentTab extends Component {

    render() {

        return (

                <Grid className="payment">
                    <Typography component="h2">Payment methods</Typography>
                    <Typography component="p">Add and manage your payment methods using our secure payment system.</Typography>
                    <Typography component="div" className="card-block">
                        <div>
                            <img src={`../../assets/images/card.png`} alt="card" />
                            <Box component="span">
                                <Typography component="p">MasterCard....1234</Typography>
                                <Typography component="p">Expiration 01/2021</Typography>
                            </Box>
                            <Box component="span"><Button variant="contained">DEFAULT</Button></Box>
                        </div>
                        <div className="card-more">
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        </div>
                    </Typography>
                    <Divider />
                    <Typography component="div" className="card-block">
                        <div>
                            <img src={`../../assets/images/card.png`} alt="card" />
                            <Box component="span">
                                <Typography component="p">MasterCard....1234</Typography>
                                <Typography component="p">Expiration 01/2021</Typography>
                            </Box>
                        </div>
                        <div className="card-more">
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                        </div>
                    </Typography>
                    <Divider />
                    <Button variant="contained" className="add-payment-btn">Add Payment Method</Button>
                    <Typography component="div" className="gift-credit">
                        <Typography component="h1">Gift Credit</Typography>
                        <Typography component="div">
                            <Box component="span">Redeem a gift card and find your credit balance.</Box>
                            <Box component="span">Learn more</Box>
                        </Typography>
                        <Typography component="div">
                            <Box component="span">Current Credit Balance.</Box>
                            <Box component="span">$ 0.00</Box>
                        </Typography>
                    </Typography>
                    <Divider />

                    <Button variant="contained" className="add-payment-btn">Add Gift Card</Button>
                    <Typography component="h1">Cupons</Typography>
                    <Typography component="span">You have got cupons</Typography>
                    
                    <Grid container className="cupon-block">
                        <Typography component="span">Your cupons</Typography>
                        <Typography component="span" style={{marginLeft:"40px"}}>3</Typography>
                        <Typography component="span"><ExpandMoreIcon /></Typography>
                    </Grid>
                    <Divider />
                    <Button variant="contained" className="add-payment-btn">Add Cupon</Button>
                </Grid>
        )
    }
}

export default PaymentTab