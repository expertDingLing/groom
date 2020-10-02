import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        background: 'white',
        height: 1500
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        fontSize: 25,
        fontWeight: 600,
        color: '#7c7c7c',
        marginTop: 50,
        paddingTop: 20,
        height: 100
    },
    header: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        fontSize: 20,
        fontWeight: 600,
        marginTop: 10
    },
    header_title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        marginTop: 10,
        fontSize: 13
    },
    first: {
        borderRadius: 30,
        width: 60,
        height: 60,
        background: 'white',
        outline: 'none',
        borderStyle: 'double',
        marginLeft: 130,
        marginTop: 10,
        borderWidth: 1,
    },
    second: {
        borderRadius: 30,
        width: 60,
        height: 60,
        background: 'white',
        borderStyle: 'double',
        outline: 'none',
        marginLeft: 30,
        marginTop: 10,
        borderColor: '#299494',
        color: '#299494'
    },
    third: {
        borderRadius: 30,
        width: 60,
        height: 60,
        background: 'white',
        borderStyle: 'double',
        outline: 'none',
        marginLeft: 30,
        marginTop: 10,
        borderWidth: 1,
    },
    detail: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        marginTop: 20,
        color: '#299494'
    },
    price: {
        marginTop: 20,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    total: {
        color: '#c2c2c2',
        fontSize: 13,
        fontWeight: 600,
        marginLeft: 210
    },
    dollar: {
        marginRight: 'auto',
        marginLeft: 10,
        fontSize: 13
    },
    report: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        color: '#c2c2c2'
    },
    send: {
        padding: '6px 78px',
        marginTop: 20,
        width:215,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        color: 'white',
        backgroundColor: '#299494',
        borderRadius: 3,
        border: 'none',
        outline: 'none',
        height: 30,
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

class SendSuccess extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open:  true
        }
    }

    handleOpen = () => {
        this.setState({open : true});
    };

    handleClose = () => {
        this.setState({open: false})
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <Modal
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"500px", height:"500px", marginLeft:"auto", marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <img src={'/assets/images/customer_home.png'} alt='' className={classes.title}/>
                        <Typography className={classes.header}>Would you like to add a tip?</Typography>
                        <Typography className={classes.header_title}>100% of your tip goes to Timothy</Typography>
                        <button className={classes.first}>10%</button>
                        <button className={classes.second}>15%</button>
                        <button className={classes.third}>20%</button>
                        <Typography className={classes.detail}>OTHER AMOUNT</Typography>
                        <div className={classes.price}>
                            <Typography className={classes.total}>Total:</Typography>
                            <Typography className={classes.dollar}>$50.69</Typography>
                        </div>
                        <Typography className={classes.report}>REPORT AN ISSUE</Typography>
                        <button className={classes.send}>Send Tip</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withStyles(styles)(SendSuccess);