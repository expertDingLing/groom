import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BlcakP , GrayP, BlueP} from '../../../components/styled-components'
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepState : "step-1",
        }
    }
    render() {
        return (
            <div className="decision-refund-container">
                <Paper elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <p>Conversation with Darion</p>
                            <p>Cancelled</p>
                            <BlcakP>Darion</BlcakP>
                            <GrayP>Brochet</GrayP>
                            <GrayP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</GrayP>
                            <Divider />
                            <GrayP>This customer cancelled this booking</GrayP>
                            <Divider />
                        
                            <div>
                                <StarIcon />
                                <BlueP>7 reviews</BlueP>
                            </div>
                            <div>
                                <CheckCircleIcon />
                                <GrayP>Verified</GrayP>
                            </div>
                            <div>
                                <Icon>
                                    <img src={'../../assets/icons/icon-join.png'} alt="join icon" />
                                </Icon>
                                <GrayP>Joined since 2019</GrayP>
                            </div>
                            <div>
                                <Icon>
                                    <img src={'../../assets/icons/icon-home.png'} alt="home icon" />
                                </Icon>
                                <GrayP>Lives in NC</GrayP>
                            </div>
                            <BlueP>View profile</BlueP>
                            <Divider />
                            <Button variant="outlined">Special Offer</Button>
                            <Divider />
                            <ul>
                                <li>
                                    <GrayP>Provider</GrayP>
                                    <BlueP>Sandra</BlueP>
                                </li>
                                <li>
                                    <GrayP>Check -In</GrayP>
                                    <GrayP>Tue, 2 March, 2020</GrayP>
                                    <GrayP>13:00 PM EST(GMT-5)</GrayP>
                                </li>
                                <li>
                                    <GrayP>Check-Out</GrayP>
                                    <GrayP>Tue, 4 March, 2020</GrayP>
                                    <GrayP>13:00 PM EST(GMT-5)</GrayP>
                                </li>
                                <li>
                                    <GrayP>Booking Date</GrayP>
                                    <GrayP>Fri,28 feb, 2020</GrayP>
                                    <GrayP>13:00 PM EST(GMT-5)</GrayP>
                                </li>
                                <li>
                                    <GrayP>Confirmation Code</GrayP>
                                    <GrayP>XVNDH78MDJ</GrayP>
                                </li>
                            </ul>

                            <BlcakP>Payout</BlcakP>
                            <div>
                                <GrayP>$24</GrayP>
                                <GrayP>$24</GrayP>
                            </div>
                            <div>
                                <GrayP>Service</GrayP>
                                <GrayP>$6</GrayP>
                            </div>
                            <Divider />
                            <div>
                                <BlcakP>Total(USD)</BlcakP>
                                <BlcakP>$30</BlcakP>
                            </div>

                            <BlueP>View transaction history</BlueP>

                            <BlcakP>Private notes</BlcakP>
                            <GrayP>These won't be shown to customers.</GrayP>
                            <div>
                                <textarea rows="5"></textarea>
                            </div>
                            <Button variant="outlined">Save</Button>

                            
                        </Grid>

                        <Grid item lg={6}>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default index
