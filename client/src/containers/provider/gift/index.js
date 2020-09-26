import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../assets/scss/provider1.scss'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        backgroundColor: 'fafafa',
        padding: 50
    },
    header: {
        display: 'flex'
    },
    header_btn1: {
        backgroundColor: '#299494',
        color: 'white',
        border: 'none',
        borderRadius: 5,
        '&:hover':{
            cursor: 'pointer'
        },
        '&:focus': {
            border: 'none',
            outline: 'auto'
        },
        marginLeft: 'auto',
        marginRight: 20,
        height: 30
    },
    header_btn2: {
        backgroundColor: 'white',
        color: '#299494',
        borderColor: '#299494',
        outline: 'auto',
        borderRadius: 5,
        '&:hover':{
            cursor: 'pointer'
        }
    },
    category: {
        height: 70,
        backgroundColor: '#f2f2f2',
        display: 'flex',
        marginTop: 30,
        alignItems: 'center'
    },
    title: {
        marginLeft: 50,
    },
    select: {
        border: 'none',
        height: 30,
        width: 140,
        marginLeft: 80,
        padding: 5, 
    },
    save: {
        marginTop: 20,
        border: 'none',
        backgroundColor: '#299494',
        color: 'white',
        marginLeft: 'auto',
        width: 50,
        display: 'flex',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            border: 'none',
            outline: 'auto'
        }
    },
    summary: {
        color: '#2c2c2c',
        fontSize: 20
    },
    title1: {
        color: '#7a7a7a'
    },
    soap_title: {
        color: '#7a7a7a'
    },

    soap: {
        width: '95%',
        height: 250
    }
})

const datas =[
    {
       content: "Lorem ipsumundefined.Lorem ipsumundefined.Lorem ipsumundefined."
    },
    {
       content: "Lorem ipsumundefined.Lorem ipsumundefined.Lorem ipsumundefined."
    },
    {
       content: "Lorem ipsumundefined.Lorem ipsumundefined.Lorem ipsumundefined."
    },
    {
        content: "Lorem ipsumundefined.Lorem ipsumundefined.Lorem ipsumundefined."
    },
]

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.header}>
                    <Typography className={classes.summary}>Front Page Products</Typography>
                    <button className={classes.header_btn1}>Add Front Page Products</button>
                    <button className={classes.header_btn2}>Save Display Settings</button>
                </div>
                <div className={classes.category}>
                    <Typography className={classes.title}>Choose Category</Typography>
                    <select
                        className={classes.select}
                        value={this.state.keyStatus}
                        name="keyStatus"
                        onChange={this.handleChangeInput}
                    >
                    <option className={classes.select_value} value="0">Choose Category</option>
                    </select>
                </div>
                <button className={classes.save}>Save</button>
                <Typography className={classes.title1}>Front Page Products</Typography>
                <Grid container spacing={1}>
                    {datas.map((data, i) => {
                        return (
                        <Grid item lg={3}  key={i}>
                            <img src={"/assets/images/soap.png"} alt="" className={classes.soap} />
                            <Typography>Soap</Typography>
                            <Typography className={classes.soap_title}>Regular Price: $5.99</Typography>
                            <Typography className={classes.soap_title}>Special Price: $8.99</Typography>
                        </Grid>
                        )
                    })}
                </Grid>
                <Grid container spacing={1}>
                    {datas.map((data, i) => {
                        return (
                        <Grid item lg={3}  key={i}>
                            <img src={"/assets/images/soap.png"} alt="" className={classes.soap} />
                            <Typography>Soap</Typography>
                            <Typography className={classes.soap_title}>Regular Price: $5.99</Typography>
                            <Typography className={classes.soap_title}>Special Price: $8.99</Typography>
                        </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
