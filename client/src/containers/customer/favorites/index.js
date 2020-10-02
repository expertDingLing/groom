import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';

const styles = (theme) => ({
    avatar: {
        backgroundColor: '#fafafa',
        height: 400
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        height: 200,
        paddingTop: 50
    },
    title1: {
        fontSize: 25,
        fontWeight: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        marginTop: 20
    },
    title2: {
        fontSize: 20,
        fontWeight: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        display: 'table'
    },
    container: {
        backgroundColor: 'white',
        height: 500,
    },
    detail1: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table'
    },
    detail: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        width: 350
    },
    detail2: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        width: 350
    },
    yes: {
        marginTop: 10
    },
    share: {
        marginTop: 20,
        marginLeft: 520,
        display: 'flex',
        width: 550
    },
    textarea: {
        width: 300,
        height: 100,
        marginLeft: 520,
        marginTop: 20
    },
    submit: {
        marginLeft: 520,
        backgroundColor: '#299494',
        color: 'white',
        width: 150,
        height: 30,
        borderRadius: 3,
        marginTop: 30,
        outline: 'none',
        border: 'none',
        '&:focus': {
            backgroundColor: '#299494',
            outline: 'auto'
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
            <Grid>
                <div className={classes.avatar}>
                    <img src={'/assets/images/video.png'} alt='' className={classes.image} />
                    <Typography className={classes.title1}>Groom Video Platform</Typography>
                    <Typography className={classes.title2}>Coming Soon</Typography>
                </div>
                <div className={classes.container}>
                    <Typography className={classes.detail1}>Would you be interested in our video platform</Typography>
                    <div className={classes.detail}>
                        <Radio 
                            onChange={this.handleChange}
                            value="a"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Typography className={classes.yes}>Yes</Typography>
                    </div>
                    <div className={classes.detail2}>
                        <Radio 
                            onChange={this.handleChange}
                            value="a"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Typography className={classes.yes}>No</Typography>
                    </div>
                    <Typography className={classes.share}>Share your thoughts about the video learning and how it would help you?</Typography>
                    <textarea className={classes.textarea} rows="5"></textarea>
                    <button className={classes.submit}>Submit</button>
                </div>
            </Grid>
        )
    }
}
export default withStyles(styles)(index)