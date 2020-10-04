import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
        height: 1500,
        display: 'flex'
    },
    left: {
        borderBottom: '1px solid #B3B3B3',
        paddingBottom: 40,
        backgroundColor: '#B3B3B3',
        borderRadius: 5,
        height: 1000
    },
    middle: {
        backgroundColor: 'white',
        height: 1000,
        padding: 20
    },
    last: {
        height: 1000,
    },
    back: {
        marginLeft: 20,
        marginTop: 20
    },
    overview: {
        marginTop: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#299494',
        border: 'none',
        outline: 'none',
        color: 'white'
    },
    date: {
        marginTop: 30,
        color: '#2c2c2c',
        fontSize: 14,
        marginLeft: 20
    },
    day: {
        fontSize: 17,
        fontWeight: 600,
        marginLeft: 20
    },
    divider: {
        marginTop: 10
    },
    feedback: {
        marginTop: 30,
        color: '#299494',
        fontSize: 14,
        marginLeft: 20
    },
    header: {
        display: 'flex'
    },
    person: {
        marginLeft: 'auto',
        marginRight: 10,
        color: '#7c7c7c'
    },
    setting: {
        color: '#7c7c7c'
    },
    header_title: {
        fontSize: 18,
        fontWeight: 600
    },
    middle_day: {
        color: '#2c2c2c'
    },
    middle_time: {
        marginLeft: 20,
        color: '#2c2c2c'
    },
    middle_title: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        display: 'flex',
        padding: 30
    },
    image: {
        height: 100
    },
    middle_detail: {
        marginLeft: 15
    },
    books: {
        display: 'flex',
        marginTop: 5,
    },
    book: {
        backgroundColor: '#299494',
        borderRadius: 3,
        color: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    map: {
        width: '100%',
        height: 1000
    },
    close: {
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 20,
        display: 'flex',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    modal_title1: {
        marginTop: 50,
        marginLeft: 50
    },
    modal_title2: {
        marginTop: 10,
        marginLeft: 50
    },
    btn_group: {
        marginTop: 100,
        display: 'flex'
    },
    yes: {
        backgroundColor: '#299494',
        borderRadius: 3,
        color: 'white',
        border: 'none',
        width: 150,
        height: 40,
        outline: 'none',
        marginLeft: 80,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    no: {
        backgroundColor: '#d0d0d0',
        borderRadius: 3,
        border: 'none',
        width: 150,
        height: 40,
        outline: 'none',
        marginLeft: 30,
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
            show: false,
        }
    }

    showModal = () => {
        this.setState({
            show: true,
        })
    }

    handleClose = () => {
        this.setState({
            show: false,
        })
    }

    render() {
        const {classes} = this.props;
        const {show} = this.state;
        return (
            <div className={classes.container}>
                <Grid item lg={2} className={classes.left}>
                    <ArrowBackIcon className={classes.back}/>
                    <button className={classes.overview}>OVERVIEW</button>
                    <Typography className={classes.date}>MAY 20</Typography>
                    <Typography className={classes.day}>Saturday</Typography>
                    <Divider className={classes.divider}/>
                    <Typography className={classes.date}>45-60 Mins</Typography>
                    <Divider className={classes.divider}/>
                    <Typography className={classes.feedback}>Get feedback</Typography>
                </Grid>
                <Grid item lg={4} className={classes.middle}>
                    <div className={classes.header}>
                        <Typography className={classes.header_title}>Crochet Braids</Typography>
                        <PersonAddIcon className={classes.person} />
                        <SettingsIcon className={classes.setting} />
                    </div>
                    <div className={classes.header}>
                        <Typography className={classes.middle_day}>SAT, MAY 20</Typography>
                        <Typography className={classes.middle_time}>45-60 mins</Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <Typography className={classes.middle_title}>What you have booked</Typography>
                    <div className={classes.detail}>
                        <img src={'/assets/images/service-2.png'} alt='' className={classes.image} />
                        <div className={classes.middle_detail}>
                            <div className={classes.header}>
                                <Typography className={classes.middle_day}>SAT, MAY 20</Typography>
                                <Typography className={classes.middle_time}>45-60 mins</Typography>
                            </div>
                            <Typography>Your Haircut reservation</Typography>
                            <Typography className={classes.middle_day}>Address</Typography>
                            <div className={classes.books}>
                                <button className={classes.book} onClick={this.showModal}>Book again</button>
                                <Typography className={classes.middle_time}>Show details</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={6} className={classes.last}>
                    <img src={'/assets/images/Map.png'} alt='' className={classes.map} />
                </Grid>
                <Modal open={show}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"500px", height:"400px", marginLeft:"auto", padding: '20px', marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <CloseIcon className={classes.close} onClick={this.handleClose}/>
                        <Typography className={classes.modal_title1}>Meeting or communicating with your Pro outside of</Typography>
                        <Typography className={classes.modal_title2}>GGGroom is not permitted. Do you agree?</Typography>
                        <div className={classes.btn_group}>
                            <button className={classes.yes} onClick={this.handleClose}>Yes</button>
                            <button className={classes.no} onClick={this.handleClose}>No</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withStyles(styles)(index)