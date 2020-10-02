import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
    },
    content: {
        backgroundColor: 'white',
        height: 1500,
        padding: 50,
    },
    contents: {
        display: 'flex'
    },
    header1: {
        width: '100%',
        height: 50,
        backgroundColor: '#fafafa'
    },
    header2: {
        width: '100%',
        height: 50,
        backgroundColor: '#fafafa',
        display: 'flex',
        marginTop: 20
    },
    header_title1: {
        paddingTop: 15,
        marginLeft: 30,
        color: '#2c2c2c'
    },
    header_title2: {
        paddingTop: 15,
        marginLeft: 30,
        color: '#2c2c2c'
    },
    header_title3: {
        paddingTop: 15,
        marginLeft: 10,
        color: '#c2c2c2'
    },
    photo_content: {
        display: 'flex',
        marginTop: 60
    },
    photo_content2: {
        display: 'flex',
        marginTop: 70
    },
    photo_detail: {
        marginLeft: 20
    },
    name: {
        fontSize: 20,
        fontWeight: 600
    },
    detail: {
        marginTop: 20,
        fontSize: 14,
        color: '#c2c2c2'
    },
    description: {
        marginTop: 10,
        color: '#c2c2c2',
        fontSize: 13
    },
    textarea: {
        marginTop: 100,
        width: '92%',
        padding: 15,
        borderRadius: 3,
        borderColor: '#c2c2c2',
        outline: 'none',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    possible: {
        backgroundColor: 'white',
        height: 30,
        width: 100,
        borderRadius: 3,
        outline: 'none',
        border: 'none',
        marginLeft: 20,
        left: 0,
        top: 20,
        position: 'absolute'
    },
    position: {
        position: 'relative',
        marginLeft: 20
    },
    picture: {
        height: 320,
        postion: 'relative'
    },
    appoint: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 600,
        color: '#7c7c7c'
    },
    search: {
        width: '100%',
        height: 40,
        backgroundColor: '#299494',
        color: 'white',
        borderRadius: 3,
        border: 'none',
        outline: 'none',
        marginTop: 20,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    service: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 600
    },
    charming: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: 15
    },
    services: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 600
    },
    review: {
        color: '#7c7c7c'
    },
    divider: {
        marginTop: 20
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    <div className={classes.contents}>
                        <Grid item lg={8}>
                            <div className={classes.header1}>
                                <Typography className={classes.header_title1}>To protect your payment, always communicate and pay through Groom website</Typography>
                            </div>
                            <div className={classes.header2}>
                                <Typography className={classes.header_title2}>Inquiry Sent</Typography>
                                <Typography className={classes.header_title3}>1:54 PM</Typography>
                            </div>
                            <div className={classes.photo_content}>
                                <img src={'/assets/images/refund.png'} alt='' className={classes.image1}/>
                                <div className={classes.photo_detail}>
                                    <Typography className={classes.name}>Mathew</Typography>
                                    <Typography className={classes.time}>1:54 PM</Typography>
                                    <Typography className={classes.date}>29-05-20</Typography>
                                </div>
                            </div>
                            <Typography className={classes.detail}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                            <Typography className={classes.description}>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</Typography>
                            <Typography className={classes.description}>kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                            <Typography className={classes.description}>sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Typography>
                            <Typography className={classes.description}>voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</Typography>
                            <Typography className={classes.description}>sanctus est Lorem ipsum dolor sit amet.</Typography>
                            <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                            <Typography className={classes.description}>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</Typography>
                            <div className={classes.photo_content2}>
                                <img src={'/assets/images/message.png'} alt='' className={classes.image1}/>
                                <div className={classes.photo_detail}>
                                    <Typography className={classes.name}>Athney</Typography>
                                    <Typography className={classes.time}>5:54 PM</Typography>
                                    <Typography className={classes.date}>29-05-20</Typography>
                                </div>
                            </div>
                            <Typography className={classes.detail}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                            <Typography className={classes.description}>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</Typography>
                            <Typography className={classes.description}>kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Typography>
                            <Typography className={classes.description}>sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Typography>
                            <Typography className={classes.description}>voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</Typography>
                            <Typography className={classes.description}>sanctus est Lorem ipsum dolor sit amet.</Typography>
                            <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                            <Typography className={classes.description}>dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</Typography>
                            <textarea className={classes.textarea} rows='1' defaultValue='Type here'></textarea>
                        </Grid>
                        <Grid item lg={5} className={classes.position}>
                            <img src={'/assets/images/message_picture.png'} alt='' className={classes.picture}/>
                            <button className={classes.possible}>Not possible</button>
                            <Typography className={classes.appoint}>Your appointment time is not available</Typography>
                            <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Typography>
                            <Typography className={classes.description}>nonumy eirmod tempor invidunt ut labore et dolore magna</Typography>
                            <Typography className={classes.description}>aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</Typography>
                            <Typography className={classes.description}>duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</Typography>
                            <Typography className={classes.description}>sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</Typography>
                            <Typography className={classes.description}>consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Typography>
                            <Typography className={classes.description}>invidunt ut labore et dolore magna aliquyam erat, sed diam</Typography>
                            <Typography className={classes.description}>voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Typography>
                            <Typography className={classes.description}>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum</Typography>
                            <Typography className={classes.description}>dolor sit amet</Typography>
                            <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Typography>
                            <Typography className={classes.description}>nonumy eirmod tempor invidunt ut labore et dolore magna</Typography>
                            <Typography className={classes.description}>aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</Typography>
                            <Typography className={classes.description}>duo dolores et.</Typography>
                            <button className={classes.search}>Keep Searching</button>
                            <Typography className={classes.service}>Service details</Typography>
                            <Typography className={classes.charming}>Charming coutage in London</Typography>
                            <Typography className={classes.review}>Charming coutage in London</Typography>
                            <Divider className={classes.divider} />
                            <Typography className={classes.services}>Service by Athene</Typography>
                            <Typography className={classes.review}>8 reviews</Typography>
                        </Grid>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)