import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        background: 'white',
    },
    check: {
        height: 100,
        width: 150,
        display: 'flex',
        color: "#299494",
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 30
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        fontSize: 25,
        fontWeight: 600,
        color: '#7c7c7c',
        marginTop: 30
    }
});

class SendSuccess extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    handleOpen = () => {
        this.setState({open : true});
    };

    render() {
        const { classes } = this.props;
        const { open, handleClose } = this.props;

        return (
            <div className={classes.root}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"500px", height:"400px", marginLeft:"auto", marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <CheckCircleOutlineIcon className={classes.check} />
                        <Typography className={classes.title}>Money successfully sent</Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withStyles(styles)(SendSuccess);