import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';
import { BlackP } from '../../../components/styled-components'

const styles = (theme) => ({
    check: {
        marginTop: -60,
        marginLeft: "auto",
        color: '#cacaca'
    },
    title:{
        textAlign: "center"
    },
    detail: {
        marginTop: 100
    },
    donate: {
        color: '#299494',
        backgroundColor: 'white',
        borderColor: '#299494',
        outline: "auto",
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'white',
        }
    },
    header: {
        margin: '0 0 30px'
    }
  });

const overviewItems = [
    {
        title: "Donation 1",
        avatar: <CheckCircleIcon/>,
        detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
        title: "Donation 2",
        avatar: <CheckCircleIcon/>,
        detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
        title: "Donation 3",
        avatar: <CheckCircleIcon/>,
        detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
        title: "Donation 4",
        avatar: <CheckCircleIcon/>,
        detail: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
];


//   chart data and setting //



export class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        const {classes} = this.props;
        return (
            <div className="preformance-container">
                <Typography className={classes.header} variant="h5" component="h2">Donations</Typography>
                <Grid container className="overview-items">
                    {overviewItems.map((item, i) => {
                        return (
                            <Grid item key={i} >
                                <Paper elevation={0}className="overview-item-one">
                                    <Typography color="textSecondary" component="p" className="titles">{item.title}</Typography>
                                    <CheckCircleIcon className={classes.check}></CheckCircleIcon>
                                    <BlackP className={classes.detail} >
                                        {item.detail}
                                    </BlackP>
                                    <Button className={classes.donate}>Donate</Button>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)
