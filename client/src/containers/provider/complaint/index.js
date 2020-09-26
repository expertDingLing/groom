import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LockIcon from '@material-ui/icons/Lock';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 100,
    },
    content: {
        backgroundColor: 'white',
        height: 500,
        padding: 30,
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    close: {
        marginLeft: 'auto',
        display: 'flex',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    header: {
        marginTop: 20
    },
    header_title: {
        fontSize: 20,
        fontWeight: 600
    },
    lock: {
        display: 'flex',
        marginTop: 20
    },
    lock_icon: {
        color: '#7c7c7c'
    },
    lock_content: {
        marginLeft: 20,
        color: '#7c7c7c',
        fontWeight: 600
    },
    radio: {
        marginTop: 30,
        display: 'flex',
        marginLeft: -9
    },
    radio_content: {
        marginLeft: 20,
        marginTop: 10
    },
    submit: {
        marginTop: 100,
        width: 120,
        height: 35,
        color: 'white',
        backgroundColor: '#299494',
        border: 'none',
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        outline: 'auto',
        padding: '10px 50px',
        display: 'flex',
        '&:hover': {
            cursor: 'pointer'
        }
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
                    <CloseIcon className={classes.close} onClick={() => this.props.history.push('/provider/home')}/>
                    <div className={classes.header}>
                        <Typography className={classes.header_title}>What's happening?</Typography>
                        <div className={classes.lock}>
                            <LockIcon className={classes.lock_icon}/>
                            <Typography className={classes.lock_content}>This will be only shared with Groom.</Typography>
                        </div>
                        <div className={classes.radio}>
                            <Radio
                                onChange={this.handleChange}
                                value="a"
                                checked='true'
                                color='primary'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Typography className={classes.radio_content}>I think they're scamming or spamming me</Typography> 
                        </div>
                        <Divider />
                        <div className={classes.radio}>
                            <Radio
                                onChange={this.handleChange}
                                value="a"
                                color='primary'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Typography className={classes.radio_content}>They are being offensive</Typography> 
                        </div>
                        <Divider />
                        <div className={classes.radio}>
                            <Radio
                                onChange={this.handleChange}
                                value="a"
                                color='primary'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Typography className={classes.radio_content}>Something else</Typography> 
                        </div>
                        <Divider />
                        <button className={classes.submit} onClick={() => this.props.history.push('/provider/home')}>OK</button>                        
                    </div>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)