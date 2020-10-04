import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

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
    modal_header: {
        color: '#fc4343',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        marginTop: 10
    },
    close: {
        marginLeft: 'auto',
        marginRight: 20,
        marginTop: 20
    },
    modal_title1: {
        marginTop: 20
    },
    view: {
        backgroundColor: '#299494',
        color: 'white',
        height: 30,
        width: 200,
        border: 'none',
        borderRadius: 3
    },
    change: {
        marginLeft: 20,
        width: 200,
        color: '#299494',
        borderColor: '#299494',
        borderRadius: 3,
        borderStyle: 'double',
        height: 30
    },
    btn_group: {
        marginTop: 30,
        display: 'flex'
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
                <Modal open={show}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"500px", height:"300px", marginLeft:"auto", padding: '20px', marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <CloseIcon className={classes.close} onClick={this.handleClose}/>
                        <Typography className={classes.modal_header}>Sorry! Your Booking was Unsuccessful.</Typography>
                        <Typography className={classes.modal_title1}>We regret to inform you that your booking request is unsuccessful. Don't worry</Typography>
                        <Typography className={classes.modal_title2}>we will get in touch with you about your payment. If you want any more details,</Typography>
                        <Typography className={classes.modal_title3}>please contact us at info@gggroom.com</Typography>
                        <div className={classes.btn_group}>
                            <button className={classes.view} onClick={this.handleClose}>View my bookings</button>
                            <button className={classes.change} onClick={this.handleClose}>Change Booking Details</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withStyles(styles)(index)