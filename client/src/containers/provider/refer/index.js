import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BlackP, BlueP} from '../../../components/styled-components'
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    message: {
      padding: theme.spacing(2),
    },
    header_title: {
        display: "flex"
    },
    image: {
        marginTop: 15,
        height: 60
    },
    content: {
        display: 'flex'
    },
    detail1: {
        marginLeft: 50
    },
    user: {
        fontWeight: 700
    },
    first_content: {
        marginTop: 35,
        marginLeft: 200,
        fontSize: 20,
        color: "#999999"
    },
    last_content: {
        marginLeft: 'auto',
        marginRight: 25
    },
    last_content1: {
        marginLeft: 'auto',
        marginRight: 33
    },
    select: {
        marginLeft: 'auto',
        width: 150,
        marginTop: -10,
        marginBottom: 10,
        color: '#999999',
        borderColor: '#999999',
        borderRadius: 5,
        '&:focus': {
            borderColor: '#299494'
        }
    },
  });

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepState : "step-1",
            keyStatus: '0'
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <div className="decision-refund-container">
                <Paper style={{padding:"50px"}} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className={classes.header_title}>
                                <BlackP className="header_title">Messages</BlackP>
                                <select
                                    className={classes.select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">All messages (6)</option>
                                </select>
                            </div>
                            <Divider />
                            <div className={classes.content}>
                                <img className={classes.image} src={'/assets/images/refer.png'} alt="" />
                                <div className={classes.detail1}>
                                    <p className={classes.user}>User243553</p>
                                    <p>Feb 16, 2020</p>
                                </div>
                                <Typography className={classes.first_content}>Lorem ipsum dolor sit amet, consetetur</Typography>
                                <div className={classes.last_content}>
                                    <BlueP>Confirmed</BlueP>
                                    <Typography>$123.56</Typography>
                                </div>
                            </div>
                            <Divider />
                            <div className={classes.content}>
                                <img className={classes.image} src={'/assets/images/refer.png'} alt="" />
                                <div className={classes.detail1}>
                                    <p className={classes.user}>User243553</p>
                                    <p>Feb 16, 2020</p>
                                </div>
                                <Typography className={classes.first_content}>Lorem ipsum dolor sit amet, consetetur</Typography>
                                <div className={classes.last_content1}>
                                    <BlackP>Cancelled</BlackP>
                                    <Typography>$455</Typography>
                                </div>
                            </div>
                            <Divider />
                            <div className={classes.content}>
                                <img className={classes.image} src={'/assets/images/refer.png'} alt="" />
                                <div className={classes.detail1}>
                                    <p className={classes.user}>User243553</p>
                                    <p>Feb 16, 2020</p>
                                </div>
                                <Typography className={classes.first_content}>Lorem ipsum dolor sit amet, consetetur</Typography>
                                <div className={classes.last_content}>
                                    <BlueP>Confirmed</BlueP>
                                    <Typography>$67</Typography>
                                </div>
                            </div>
                            <Divider />
                            <div className={classes.content}>
                                <img className={classes.image} src={'/assets/images/refer.png'} alt="" />
                                <div className={classes.detail1}>
                                    <p className={classes.user}>User243553</p>
                                    <p>Feb 16, 2020</p>
                                </div>
                                <Typography className={classes.first_content}>Lorem ipsum dolor sit amet, consetetur</Typography>
                                <div className={classes.last_content}>
                                    <BlueP>Confirmed</BlueP>
                                    <Typography>$2456</Typography>
                                </div>
                            </div>
                            <Divider />
                            <div className={classes.content}>
                                <img className={classes.image} src={'/assets/images/refer.png'} alt="" />
                                <div className={classes.detail1}>
                                    <p className={classes.user}>User243553</p>
                                    <p>Feb 16, 2020</p>
                                </div>
                                <Typography className={classes.first_content}>Lorem ipsum dolor sit amet, consetetur</Typography>
                                <div className={classes.last_content}>
                                    <BlueP>Confirmed</BlueP>
                                    <Typography>$673</Typography>
                                </div>
                            </div>
                            <Divider />
                            <div className={classes.content}>
                                <img className={classes.image} src={'/assets/images/refer.png'} alt="" />
                                <div className={classes.detail1}>
                                    <p className={classes.user}>User243553</p>
                                    <p>Feb 16, 2020</p>
                                </div>
                                <Typography className={classes.first_content}>Lorem ipsum dolor sit amet, consetetur</Typography>
                                <div className={classes.last_content}>
                                    <BlueP>Confirmed</BlueP>
                                    <Typography>$123</Typography>
                                </div>
                            </div>
                            <Divider />
                        </Grid>
                    </Grid>
                </Paper>
                
            </div>
        )
    }
}

export default withStyles(styles)(index)
