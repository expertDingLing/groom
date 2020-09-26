import React, { Component } from 'react'
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import { BlackP, BlueP, GrayP } from '../../../components/styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Button from '@material-ui/core/Button'

const styles = (theme) => ({
   
    header: {
        display: "flex"
    },
    add: {
        marginLeft: 15
    },
    title:{
        marginTop: 50,
        display: "flex"
    },
    help: {
        marginLeft: 50,
        color: '#8c8c8c',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    radio: {
        display: "block",
        marginTop: 30
    },
    radio_detail1: {
        color: '#999999'
    },
    radio_detail2: {
        color: '#999999',
        marginLeft: 50
    },
    radio_detail3: {
        color: '#999999',
        marginLeft: 50
    },
    first_detail:{
        height: 300,
        backgroundColor: 'white',
        padding: 30,
        marginTop: 50,
        width: '70%',
        justifyContent: "center",
        display: "grid"
    },
    camera: {
        height: 50,
        '&:hover': {
            cursor: 'pointer',
        },
        marginLeft: 173
    },
    camera_avatar: {
        marginLeft: 186,
        marginTop: -37,
        color: "#999999",
        '&:hover': {
            cursor: 'pointer',
         }
    },
    details: {
        display: "flex",
        marginTop: 30
    },
    detail1: {
        fontWeight: 700
    },
    detail2: {
        marginLeft: 30
    },
    or: {
        borderBottom: '1px solid #999999',
        position: 'relative',
        margin: '20px 0',
    },
    or_txt: {
        marginTop: -65,
        marginLeft: 170,
        background: 'white',
    },
    camera_btn: {
        marginLeft: 80,
        marginTop: -10,
        backgroundColor: '#299494',
        color: 'white',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#299494',
         }
    },
    upload: {
        textAlign: "center",
        marginTop: 20
    },
    proof: {
        fontWeight: 700
    },
    second_detail: {
        display: "flex"
    },
    second: {
        marginLeft: 100
    }
});

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:"passport"
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    };

    render() {
        const {classes} = this.props;
        return (
            <div className="home-container">
                <div className={classes.header}>
                    <GrayP>
                        Verify your Identify {'>'}
                    </GrayP>
                    <BlackP className={classes.add}>Add documents</BlackP>
                </div>
                <div className={classes.title}>
                    <Typography  color="inherit" component="h1">
                        1. Photo Identification
                    </Typography>
                    <HelpIcon className={classes.help}/>
                    <GrayP className="help_title">Help</GrayP>
                </div>
                <RadioGroup aria-label="gender" className={classes.radio} name="gender1" value={this.state.value} onChange={this.handleChange}>
                    <FormControlLabel className = {classes.radio_detail1} value="passport" control={<Radio />} label="Passport" />
                    <FormControlLabel className = {classes.radio_detail2} value="license" control={<Radio />} label="Driver's License" />
                    <FormControlLabel className = {classes.radio_detail3} value="card" control={<Radio />} label="National Id Card" />
                </RadioGroup>
                <div className={classes.first_detail}>
                    <img src={"/assets/images/camera.png"} alt="img" className={classes.camera}></img>
                    <CameraAltIcon className={classes.camera_avatar}/>
                    <div className={classes.details}>
                        <GrayP className={classes.detail1}>Drag files here or</GrayP>
                        <BlueP className={classes.detail2}>Upload from your device</BlueP>
                    </div>
                    <div className={classes.or}>
                    </div>
                    <div>
                        <Button className={classes.or_txt}>OR</Button>
                    </div>
                    <div>
                        <Button className={classes.camera_btn}>Scan document with Camera</Button>
                    </div>
                    <div className={classes.upload}>
                        <GrayP className="upload_detail">The maximum file size you can upload is 5 MB. We only</GrayP>
                        <GrayP className="upload_detail">accept files with extension .jpg .png or .pdf</GrayP>
                    </div>
                </div>
                <div className={classes.second_detail}>
                    <GrayP className={classes.proof}>2. Proof of address</GrayP>
                    <GrayP className={classes.second}>To be submitted</GrayP>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(index)
