import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { Divider } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50
    },
    header: {
        display: 'flex',
        marginLeft: 20,
    },
    divider: {
        marginTop: 15
    },
    select: {
        width: 150,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    sort: {
        marginLeft: 'auto',
        marginRight: 20
    },
    content: {
        display: 'flex',
        marginTop: 40
    },
    first: {
        width: '19%',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    second: {
        width: '19%',
        marginLeft: 17,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    detail: {
        marginTop: 20,
        display: 'flex'
    },
    service: {
        fontSize: 17,
        fontWeight: 600
    },
    service2: {
        fontSize: 17,
        fontWeight: 600,
        marginLeft: 30
    },
    service3: {
        fontSize: 17,
        fontWeight: 600,
        marginLeft: 25
    },
    service4: {
        fontSize: 17,
        fontWeight: 600,
        marginLeft: 20
    },
    service5: {
        fontSize: 17,
        fontWeight: 600,
        marginLeft: 20
    },
    service_detail: {
        display: 'flex'
    },
    update: {
        fontWeight: 600,
        fontSize: 16
    },
    date: {
        marginLeft: 30,
        fontSize: 15
    },
    second_detail: {
        marginLeft: 27
    },
    update2: {
        marginLeft: 30,
        fontWeight: 600,
        fontSize: 16
    },
    update3: {
        marginLeft: 25,
        fontWeight: 600,
        fontSize: 16
    },
    update4: {
        marginLeft: 20,
        fontWeight: 600,
        fontSize: 16
    },
    update5: {
        marginLeft: 20,
        fontWeight: 600,
        fontSize: 16
    },
    title: {
        display: 'flex',
        paddingTop: 20
    },
    close: {
        marginLeft: 'auto',
        marginRight: 20,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    content_title: {
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        fontSize: 17,
        fontWeight: 600
    },
    custom_list: {
        marginTop: 30,
        backgroundColor: '#299494',
        outline: 'none',
        border: 'none',
        height: 30,
        color: 'white',
        borderRadius: 3,
        width: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    or: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        fontSize: 17,
        fontWeight: 600
    },
    skip: {
        width: 150,
        height: 30,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        color: '#299494',
        borderColor: '#299494',
        borderRadius: 3,
        backgroundColor: 'white',
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#299494',
            outline: 'auto'
        }
    },
    radio_group: {
        marginLeft: 30,
        marginTop: 20
    },
    or_title: {
        marginLeft: 60,
        marginTop: 20
    },
    create_new: {
        marginLeft: 30,
        marginTop: 30,
        backgroundColor: '#299494',
        color: 'white',
        border: 'none',
        borderRadius: 3,
        width: 200,
        height: 30,
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: false,
            second: false
        }
    }
    showModal = () =>{
        this.setState({
            first: true,
            second: false
        })
    }
    handleClose = () =>{
        this.setState({
            first: false,
            second: false
        })
    }
    showList = () => {
        this.setState({
            first: false,
            second: true,
            value: ''
        })
    }
    refresh = () => {
        window.location.reload();
    }
    handleChange = (event) =>{
        this.setState({
            value: event.target.value
        })
    }
    render() {
        const { classes } = this.props;
        const {first, second, value} = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.header}>
                    <Typography>Service list</Typography>
                </div>
                <div className={classes.content}>
                    <img src={'/assets/images/unfinish1.png'} alt='' className={classes.first} onClick={this.showModal}/>
                    <img src={'/assets/images/unfinish2.png'} alt='' className={classes.second} onClick={this.showModal}/>
                    <img src={'/assets/images/unfinish3.png'} alt='' className={classes.second} onClick={this.showModal}/>
                    <img src={'/assets/images/unfinish4.png'} alt='' className={classes.second} onClick={this.showModal}/>
                    <img src={'/assets/images/unfinish5.png'} alt='' className={classes.second} onClick={this.showModal}/>
                </div>
                <div className={classes.detail}>
                    <div className={classes.first_detail}>
                        <Typography className={classes.service}>Service 1</Typography>
                        <div className={classes.service_detail}>
                            <Typography className={classes.update}>Last updated</Typography>
                            <Typography className={classes.date}>21-05-2020</Typography>
                        </div>
                    </div>
                    <div className={classes.second_detail}>
                        <Typography className={classes.service2}>Service 2</Typography>
                        <div className={classes.service_detail}>
                            <Typography className={classes.update2}>Last updated</Typography>
                            <Typography className={classes.date}>21-05-2020</Typography>
                        </div>
                    </div>
                    <div className={classes.second_detail}>
                        <Typography className={classes.service3}>Service 3</Typography>
                        <div className={classes.service_detail}>
                            <Typography className={classes.update3}>Last updated</Typography>
                            <Typography className={classes.date}>21-05-2020</Typography>
                        </div>
                    </div>
                    <div className={classes.second_detail}>
                        <Typography className={classes.service4}>Service 4</Typography>
                        <div className={classes.service_detail}>
                            <Typography className={classes.update4}>Last updated</Typography>
                            <Typography className={classes.date}>21-05-2020</Typography>
                        </div>
                    </div>
                    <div className={classes.second_detail}>
                        <Typography className={classes.service5}>Service 5</Typography>
                        <div className={classes.service_detail}>
                            <Typography className={classes.update5}>Last updated</Typography>
                            <Typography className={classes.date}>21-05-2020</Typography>
                        </div>
                    </div>
                </div>
                <Modal open={first}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"500px", height:"500px", marginLeft:"auto", marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <div className={classes.title}>
                            <Typography className={classes.header}>Add "Service 1" to a favorite list</Typography>
                            <CloseIcon className={classes.close} onClick={this.handleClose}/>
                        </div>
                        <Divider className={classes.divider} />
                        <Typography className={classes.content_title}>No favorite list present</Typography>
                        <button className={classes.custom_list} onClick={this.showList}>Create Custom List</button>
                        <Typography className={classes.or}>OR</Typography>
                        <button className={classes.skip} onClick={this.showList}>SKIP</button>
                    </div>
                </Modal>
                <Modal open={second}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"500px", height:"500px", marginLeft:"auto", marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <div className={classes.title}>
                            <Typography className={classes.header}>Add "Service 1" to a favorite list</Typography>
                            <CloseIcon className={classes.close} onClick={this.handleClose}/>
                        </div>
                        <Divider className={classes.divider} />
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={this.handleChange} className={classes.radio_group}>
                                <FormControlLabel value="female" control={<Radio color="primary"/>} label="Hair Dying" />
                                <FormControlLabel value="male" control={<Radio color="primary"/>} label="Shaving" />
                                <FormControlLabel value="other" control={<Radio color="primary"/>} label="Hair Cut" />
                            </RadioGroup>
                        </FormControl>
                        <Typography className={classes.or_title}>OR</Typography>
                        <button className={classes.create_new} onClick={this.refresh}>Create New</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default withStyles(styles)(index)