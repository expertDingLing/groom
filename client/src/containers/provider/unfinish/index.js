import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50
    },
    header: {
        display: 'flex',
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
        width: '19%'
    },
    second: {
        width: '19%',
        marginLeft: 17
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
                <div className={classes.header}>
                    <Typography>Pending Listings to be posted</Typography>
                    <Typography className={classes.sort}>Sort by</Typography>
                    <select
                        className={classes.select}
                        value={this.state.keyStatus}
                        name="keyStatus"
                        onChange={this.handleChangeInput}
                    >
                    <option className={classes.select_value} value="0">Oldest first</option>
                    </select>
                </div>
                <div className={classes.content}>
                    <img src={'/assets/images/unfinish1.png'} alt='' className={classes.first}/>
                    <img src={'/assets/images/unfinish2.png'} alt='' className={classes.second}/>
                    <img src={'/assets/images/unfinish3.png'} alt='' className={classes.second}/>
                    <img src={'/assets/images/unfinish4.png'} alt='' className={classes.second}/>
                    <img src={'/assets/images/unfinish5.png'} alt='' className={classes.second}/>
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
            </div>
        )
    }
}
export default withStyles(styles)(index)