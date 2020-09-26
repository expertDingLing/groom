import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../assets/scss/provider1.scss'
import Safety from './safety_concerns'
import Getting from './getting_started'
import Creating from './creating_an_account'
import AccountMenu from './AccountMenu'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import { BlackP } from '../../../components/styled-components';

const userName = {
    name: "Mathew McCoy",
    email: "matt@ncitshop.com",
    sex: "Male",
    birth: "January 9, 1980",
    phone: "+1 999 9078393",
    G_ID: "Provided",
    address: "123 main street"
}

const styles = (theme) => ({
    help_container: {
        padding: 50,
        color: '#808080',
    },
    help_grid:{
        minHeight: 1200,
        display: 'contents',
        boxShadow: '0px 7px 27px #00000029',
        borderRadius: 10,
    },
    account_side: {
        backgroundColor: '#E6E6E6',
        borderRadius: '5px 0px 0px 5px'
    },
    accountContent: {
        marginLeft: 150
    },
    detail: {
        display: "flex",
        marginTop: 50
    },
    header: {
        fontSize: '30px',
        fontWeight: 700,
        color: 'black'
    },
    header_detail: {
        color: '#299494',
        margin: "0 10px",
        marginLeft: 0
    },
    help_header: {
        display: 'flex'
    },
    next: {
        margin: '0 10px'
    },
});

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
            flag: 'getting_started',
            tabFlag: 'Getting Started',
            privaChk: 'DATA'
        }
    }

    statChk = (name) => {
        this.setState ({flag: name})
    }
    tabChk = (name) => {
        this.setState({tabFlag: name})
    }
    privacyChk = (name) => {
        this.setState({privaChk: name})
    }

    render() {
        const {flag} = this.state;
        const {classes} = this.props;
        return (
            <div className={classes.help_container}>
                <Grid container className={classes.help_grid}>
                    <BlackP className={classes.header}>
                        Help Center
                    </BlackP>
                    <div className={classes.help_header}>
                        <Typography className={classes.header_detail} component="p">
                            Help Center
                        </Typography>
                        <Typography className={classes.next}>{'>'}</Typography>
                        <Typography className={classes.header_detail} component='p'>About Groom</Typography>
                        <Typography className={classes.next}>{'>'}</Typography>
                        <Typography className={classes.header_detail} component='p'>Getting Started</Typography>
                        <Typography className={classes.next}>{'>'}</Typography>
                        <Typography>How do I create an account?</Typography>
                    </div>
                    <div className={classes.detail}>
                        <Grid item lg={3} className={classes.account_side}>
                            <AccountMenu statChk={this.statChk} flag={this.state.flag} userName={userName} />
                        </Grid>
                        <Grid item lg={9} className={classes.accountContent}>
                            {flag === 'safety_content' && (<Safety />)}
                            {flag === 'getting_started' && (<Getting/>)}
                            {flag === 'creating_an_account' && (<Creating />)}
                        </Grid>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
