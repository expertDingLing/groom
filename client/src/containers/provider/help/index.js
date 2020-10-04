import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
        height: 1200
    },
    content: {
        backgroundColor: 'white',
        height: 1000,
        padding: 50,
    },
    header: {
        fontSize: 20,
        fontWeight: 600
    },
    summary: {
        marginTop: 20,
        display: 'flex'
    },
    concerns_title: {
        color: '#299494'
    },
    arrow: {
        color: '#299494',
        marginLeft: 10,
        height: 15,
        marginTop: 5
    },
    safety: {
        color: '#299494',
        marginLeft: 10
    },
    safety_title: {
        marginLeft: 10
    },
    detail: {
        marginTop: 20,
        display: 'flex'
    },
    lg2: {
        backgroundColor: '#c2c2c2',
        height: 600,
        width: '100%',
        padding: 10
    },
    lg2_title: {
        marginTop: 15,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    subtitle1: {
        marginTop: 20,
        marginLeft: 20,
        color: '#299494',
        fontSize: 14
    },
    subtitle: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 14
    },
    lg6: {
        marginLeft: 300
    },
    lg6_header: {
        fontSize: 18,
        fontWeight: 600
    },
    lorem: {
        marginTop: 20,
        fontSize: 14
    },
    lorem_title: {
        marginTop: 5,
        fontSize: 14
    },
    about: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    buttons: {
        display: 'flex',
        marginTop: -30,
        justifyContent: 'end',
        marginRight: 80
    },
    btn_group: {
        marginTop: 40,
        height: 40,
        width: '100%',
        textAlign: 'left',
        padding: '0px 20px',
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        outline: 'none',
        borderRadius: 5,
        borderStyle: 'double',
        '&:focus': {
            borderColor: '#c2c2c2'
        }
    },
    yes: {
        height: 20,
        width: 50,
        marginLeft: 'auto',
        marginRight: -100,
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        outline: 'none',
        borderStyle: 'double',
        '&:focus': {
            borderColor: '#c2c2c2'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    no: {
        height: 20,
        width: 50,
        marginLeft: 120,
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        outline: 'none',
        borderStyle: 'double',
        '&:focus': {
            borderColor: '#c2c2c2'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: 'concerns',
        }
    }
    render() {
        const { classes } = this.props;
        const {formState} = this.state;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    {formState === 'concerns' && (
                        <div className={classes.header_title}>
                            <Typography className={classes.header}>Help Center</Typography>
                            <div className={classes.summary}>
                                <Typography className={classes.concerns_title}>Help Center</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety}>Safety and Accessibility</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety_title}>Safety Concerns</Typography>
                            </div>
                            <div className={classes.detail}>
                                <Grid item lg={2}>
                                    <div className={classes.lg2}>
                                        <Typography className={classes.about} onClick={()=>this.setState({formState: "started"})}>About Groom</Typography>
                                        <Typography className={classes.lg2_title} onClick={()=>this.setState({formState: "account"})}>Your Account</Typography>
                                        <Typography className={classes.lg2_title}>Safety and accessibility</Typography>
                                        <Typography className={classes.subtitle1}>Safety Concerns</Typography>
                                        <Typography className={classes.subtitle}>Safety Tips</Typography>
                                        <Typography className={classes.subtitle}>Reporting issues</Typography>
                                        <Typography className={classes.subtitle}>Accessibility</Typography>
                                        <Typography className={classes.lg2_title}>Terms and Policies</Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={10}>
                                    <div className={classes.lg6}>
                                        <Typography className={classes.lg6_header}>Safety Concerns</Typography>
                                        <Typography className={classes.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
                                        <Typography className={classes.lorem_title}>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Typography>
                                        <Typography className={classes.lorem_title}>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</Typography>
                                        <Typography className={classes.lorem_title}>amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Typography>
                                        <Typography className={classes.lorem_title}>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</Typography>
                                        <Typography className={classes.lorem_title}>duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor</Typography>
                                        <Typography className={classes.lorem_title}>sit amet.</Typography>
                                        <Typography className={classes.lorem_title}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
                                        <Typography className={classes.lorem_title}>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Typography>
                                        <Typography className={classes.lorem_title}>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</Typography>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                    )}
                    {formState === 'started' && (
                        <div className={classes.header_title}>
                            <Typography className={classes.header}>Help Center</Typography>
                            <div className={classes.summary}>
                                <Typography className={classes.concerns_title}>Help Center</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety}>About Groom</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety}>Getting Started</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety_title}>How do I create an account?</Typography>
                            </div>
                            <div className={classes.detail}>
                                <Grid item lg={2}>
                                    <div className={classes.lg2}>
                                        <Typography className={classes.about} onClick={()=>this.setState({formState: "started"})}>About Groom</Typography>
                                        <Typography className={classes.subtitle1}>Getting started</Typography>
                                        <Typography className={classes.subtitle}>How Groom works</Typography>
                                        <Typography className={classes.subtitle}>Messaging</Typography>
                                        <Typography className={classes.subtitle}>Community Standards</Typography>
                                        <Typography className={classes.subtitle}>Partnerships</Typography>
                                        <Typography className={classes.lg2_title} onClick={()=>this.setState({formState: "account"})}>Your Account</Typography>
                                        <Typography className={classes.lg2_title} onClick={()=>this.setState({formState: "concerns"})}>Safety and accessibility</Typography>
                                        <Typography className={classes.lg2_title}>Terms and Policies</Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={10}>
                                    <div className={classes.lg6}>
                                        <Typography className={classes.lg6_header}>How do I create an account?</Typography>
                                        <Typography className={classes.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
                                        <Typography className={classes.lorem_title}>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Typography>
                                        <Typography className={classes.lorem_title}>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</Typography>
                                        <Typography className={classes.lorem_title}>amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Typography>
                                        <Typography className={classes.lorem_title}>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</Typography>
                                        <Typography className={classes.lorem_title}>duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor</Typography>
                                        <Typography className={classes.lorem_title}>sit amet.</Typography>
                                        <Typography className={classes.lorem_title}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
                                        <Typography className={classes.lorem_title}>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Typography>
                                        <Typography className={classes.lorem_title}>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</Typography>
                                        <button className={classes.btn_group}>Did you get the help you needed?</button>
                                        <div className={classes.buttons}>
                                            <button className={classes.yes}>Yes</button>
                                            <button className={classes.no}>No</button>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                    )}
                    {formState === 'account' && (
                        <div className={classes.header_title}>
                            <Typography className={classes.header}>Help Center</Typography>
                            <div className={classes.summary}>
                                <Typography className={classes.concerns_title}>Help Center</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety}>Your Account</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety}>Creating an account</Typography>
                                <ArrowForwardIosIcon className={classes.arrow} />
                                <Typography className={classes.safety_title}>How do I connect my Facebook and Groom accounts?</Typography>
                            </div>
                            <div className={classes.detail}>
                                <Grid item lg={2}>
                                    <div className={classes.lg2}>
                                        <Typography className={classes.about} onClick={()=>this.setState({formState: "started"})}>About Groom</Typography>
                                        <Typography className={classes.lg2_title}>Your Account</Typography>
                                        <Typography className={classes.subtitle1}>Creating an account</Typography>
                                        <Typography className={classes.subtitle}>Managing your account</Typography>
                                        <Typography className={classes.subtitle}>ID and verification</Typography>
                                        <Typography className={classes.subtitle}>Account security</Typography>
                                        <Typography className={classes.subtitle}>Reviews</Typography>
                                        <Typography className={classes.lg2_title} onClick={()=>this.setState({formState: "concerns"})}>Safety and accessibility</Typography>
                                        <Typography className={classes.lg2_title}>Terms and Policies</Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={10}>
                                    <div className={classes.lg6}>
                                        <Typography className={classes.lg6_header}>How do I connect my Facebook and Groom accounts?</Typography>
                                        <Typography className={classes.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
                                        <Typography className={classes.lorem_title}>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Typography>
                                        <Typography className={classes.lorem_title}>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</Typography>
                                        <Typography className={classes.lorem_title}>amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Typography>
                                        <Typography className={classes.lorem_title}>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</Typography>
                                        <Typography className={classes.lorem_title}>duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor</Typography>
                                        <Typography className={classes.lorem_title}>sit amet.</Typography>
                                        <Typography className={classes.lorem_title}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Typography>
                                        <Typography className={classes.lorem_title}>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Typography>
                                        <Typography className={classes.lorem_title}>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</Typography>
                                        <button className={classes.btn_group}>Did you get the help you needed?</button>
                                        <div className={classes.buttons}>
                                            <button className={classes.yes}>Yes</button>
                                            <button className={classes.no}>No</button>
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)