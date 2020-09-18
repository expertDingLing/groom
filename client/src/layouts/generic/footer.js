import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

import '../../assets/scss/generic.scss'

export class footer extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div className="footer-section root-container">
                <Grid container spacing={1}>
                    <Grid container item sm={5}>
                        <Grid container item xs={12} style={{padding: "20px 0"}}>
                            <img className="logo" src={'../../assets/images/footerLogo.png'} alt="footer logo img" />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <img className="google-play" src={'../../assets/images/google-play.png'} alt="google img" style={{cursor: "pointer"}}/>
                            </div>
                            <div>
                                <img className="app-store" src={'../../assets/images/app-store.png'} alt="google apple img" style={{cursor: "pointer"}}/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container item sm={7}>
                        <Grid container item xs={4} >
                            <ul>
                                <li>Learn more</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Press</li>
                            </ul>
                        </Grid>
                        <Grid container item xs={4}>
                            <ul>
                                <li>Top cities</li>
                                <li>Raleigh, NC</li>
                                <li>New York</li>
                                <li>Washington</li>
                            </ul>
                        </Grid>
                        <Grid container item xs={4}>
                            <ul>
                                <li>Connect Us</li>
                                <li>
                                    <IconButton>
                                        <TwitterIcon className="social-icon"/>
                                    </IconButton>
                                    <IconButton>
                                        <FacebookIcon className="social-icon"/>
                                    </IconButton>
                                    <IconButton>
                                        <InstagramIcon className="social-icon"/>
                                    </IconButton>
                                </li>
                            </ul>
                        </Grid>                        
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default footer
