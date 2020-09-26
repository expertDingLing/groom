import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
    },
    content: {
        backgroundColor: 'white',
        height: 1500,
        padding: 30,
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex'
    },
    image1: {
        height: 300
    },
    first_detail: {
        marginLeft: -50
    },
    star_group: {
        marginTop: 20,
        display: 'flex'
    },
    star1: {
        color: '#299494'
    },
    star2: {
        color: '#299494',
        marginLeft: 10
    },
    number: {
        marginLeft: 10
    },
    order: {
        marginLeft: 30
    },
    divider: {
        marginTop: 15,
        width: '85%'
    },
    dollar: {
        fontSize: 17,
        fontWeight: 600,
        marginTop: 15
    },
    image2: {
        marginTop: 30
    },
    sub_detail: {
        color: 'white',
        marginTop: -30,
        marginLeft: 15
    },
    dollar_content: {
        display: 'flex'
    },
    coupon: {
        color: '#299494',
        marginLeft: 20,
        marginTop: 30
    },
    subimages: {
        marginTop: 30,
        display: 'flex'
    },
    subimage1: {
        height: 70
    },
    subimage2: {
        height: 70,
        marginLeft: 10
    },
    quantity: {
        marginTop: 10
    },
    quantity_details: {
        marginTop: 10,
        display: 'flex'
    },
    minus: {
        color: '#7c7c7c'
    },
    minus_content: {
        marginLeft: 10
    },
    plus: {
        marginLeft: 10,
        color: '#7c7c7c'
    },
    book: {
        color: 'white',
        backgroundColor: '#299494',
        border: 'none',
        borderRadius: 3,
        outline: 'auto',
        width: 100,
        height: 30,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    add: {
        color: 'white',
        backgroundColor: '#ffb60c',
        border: 'none',
        borderRadius: 3,
        marginLeft: 30,
        outline: 'auto',
        width: 100,
        height: 30,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    title: {
        fontSize: 20
    },
    image3: {
        marginLeft: 15,
        marginTop: 20,
        height: 230
    },
    image4: {
        marginLeft: 15,
        marginTop: 50,
        height: 230
    },
    image_detail: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 17,
        fontWeight: 600,
        display: 'table'
    },
    second: {
        border: 'groove',
        height: 200,
        width: 300
    },
    third: {
        border: 'groove',
        height: 200,
        width: 320,
        marginTop: 10
    },

    stars: {
        display: 'flex',
        padding: 7
    },
    progress: {
        marginLeft: 10,
        height: 3,
        width: 160,
        marginTop: 10
    },
    percent: {
        marginLeft: 30
    },
    second_content: {
        display: 'flex'
    },
    divide: {
        marginTop: 150,
        width: 210
    },
    third_title: {
        marginTop: 10,
        marginLeft: 10
    },
    sub: {
        marginLeft: 10,
        marginTop: 30,
        width: 300,
        height: 100
    },
    third_content: {
        marginTop: 10
    },
    third_dollars: {
        display: 'flex'
    },
    third_dollar: {
        fontSize: 20,
        fontWeight: 600,
        color: 'white',
        marginTop: -113,
        marginLeft: 20
    },
    third_detail: {
        fontSize: 17,
        color: 'white',
        marginTop: 10,
        marginLeft: 20
    },
    third_date: {
        color: 'white',
        marginTop: 10,
        marginLeft: 20
    },
    get: {
        width: 120,
        height: 30,
        color: 'black',
        border: 'none',
        outline: 'auto',
        backgroundColor: 'white',
        marginLeft: 100,
        marginTop: -15,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    header: {
        display: 'flex',
        marginTop: 20
    },
    fourth_title: {
        color: '#299494'
    },
    preview: {
        marginLeft: 'auto',
        marginRight: 30,
        backgroundColor: '#299494',
        borderRadius: 3,
        border: 'none',
        color: 'white',
        height: 30,
        '&:focus': {
            border:'none',
            outline: 'none'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    },
    view: {
        marginRight: 50,
        backgroundColor: 'white',
        color: '#299494',
        borderColor: '#299494',
        borderRadius: 3,
        outline: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState : 'first'
        }
    }
    render() {
        const { classes } = this.props;
        const {formState} = this.state;
        return (
            <div className={classes.container}>
               
                <Grid className={classes.content}>
                    <Grid item lg={4}>
                        <img src={'/assets/images/promotion1.png'} alt='' className={classes.image1}/>
                        <div className={classes.subimages}>
                            <img src={'/assets/images/promotion1.png'} alt='' className={classes.subimage1}/>
                            <img src={'/assets/images/promotion2.png'} alt='' className={classes.subimage2}/>
                            <img src={'/assets/images/promotion3.png'} alt='' className={classes.subimage2}/>
                            <img src={'/assets/images/promotion4.png'} alt='' className={classes.subimage2}/>
                        </div>
                    </Grid>
                    <Grid item lg={6}>
                        <div className={classes.first_detail}>
                            <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</Typography>
                            <Typography>nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</Typography>
                            <div className={classes.star_group}>
                                <StarIcon className={classes.star1}/>
                                <StarIcon className={classes.star2}/>
                                <StarIcon className={classes.star2}/>
                                <StarIcon className={classes.star2}/>
                                <StarIcon className={classes.star2}/>
                                <Typography className={classes.number}>4.8</Typography>
                                <ExpandMoreIcon/>
                                <Typography className={classes.number}>226 review</Typography>
                                <Typography className={classes.order}>97 orders</Typography>
                            </div>
                            <Divider className={classes.divider}/>
                        </div>
                        {formState === 'first' && (
                        <div className={classes.first_detail}>
                            <Typography className={classes.dollar}>US $10.58</Typography>
                            <div className={classes.dollar_content}>
                                <div>
                                    <img src={'/assets/images/substraction.png'} alt='' className={classes.image2}/>
                                    <Typography className={classes.sub_detail}>US $2.0 New User Coupon</Typography>
                                </div>
                                <Typography className={classes.coupon}>Get Coupons</Typography>
                            </div>
                            <Divider className={classes.divider}/>
                            <Typography className={classes.quantity}>Quantity</Typography>
                            <div className={classes.quantity_details}>
                                <IndeterminateCheckBoxIcon className={classes.minus}/>
                                <Typography className={classes.minus_content}>1</Typography>
                                <AddBoxIcon className={classes.plus} />
                                <Typography className={classes.minus_content}>30%</Typography>
                            </div>
                            <div className={classes.quantity_details}>
                                <button className={classes.book} onClick={()=>this.setState({formState: 'second'})}>Book Now</button>
                                <button className={classes.add}>Add to Cart</button>
                            </div>
                        </div>
                            )}
                            {formState === 'second' && (
                                <div className={classes.first_detail}>
                                    <div className={classes.second_content}>
                                        <div className={classes.second}>
                                            <div className={classes.stars}>
                                                <Typography>5 stars</Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    className={classes.progress}
                                                    size={50}
                                                    thickness={4}
                                                    value={75}
                                                />
                                                <Typography className={classes.percent}>84%</Typography>
                                            </div>
                                            <div className={classes.stars}>
                                                <Typography>4 stars</Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    className={classes.progress}
                                                    size={50}
                                                    thickness={4}
                                                    value={75}
                                                />
                                                <Typography className={classes.percent}>12%</Typography>
                                            </div>
                                            <div className={classes.stars}>
                                                <Typography>3 stars</Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    className={classes.progress}
                                                    size={50}
                                                    thickness={4}
                                                    value={75}
                                                />
                                                <Typography className={classes.percent}>4%</Typography>
                                            </div>
                                            <div className={classes.stars}>
                                                <Typography>2 stars</Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    className={classes.progress}
                                                    size={50}
                                                    thickness={4}
                                                    value={75}
                                                />
                                                <Typography className={classes.percent}>0%</Typography>
                                            </div>
                                            <div className={classes.stars}>
                                                <Typography>1 stars</Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    className={classes.progress}
                                                    size={50}
                                                    thickness={4}
                                                    value={75}
                                                />
                                                <Typography className={classes.percent}>0%</Typography>
                                            </div>
                                        </div>
                                        <Divider className={classes.divide} />
                                    </div>
                                    <div className={classes.quantity_details}>
                                        <button className={classes.book} onClick={()=>this.setState({formState: 'third'})}>Book Now</button>
                                        <button className={classes.add}>Add to Cart</button>
                                    </div>
                                </div>
                            )}
                            {formState === 'third' && (
                                <div className={classes.first_detail}>
                                    <Typography className={classes.dollar}>US $10.58</Typography>
                                    <div className={classes.dollar_content}>
                                        <div>
                                            <img src={'/assets/images/substraction.png'} alt='' className={classes.image2}/>
                                            <Typography className={classes.sub_detail}>US $2.0 New User Coupon</Typography>
                                        </div>
                                        <Typography className={classes.coupon}>Get Coupons</Typography>
                                    </div>
                                    <div className={classes.third}>
                                        <Typography className={classes.third_title}>New User Coupon</Typography>
                                        <img src={'/assets/images/substraction.png'} alt='' className={classes.sub}/>
                                        <div className={classes.third_content}>
                                            <Typography className={classes.third_dollar}>US $2.00</Typography>
                                            <div className={classes.third_dollars}>
                                                <Typography className={classes.third_detail}>On $3.0</Typography>
                                                <button className={classes.get} onClick={() => this.props.history.push('/provider/promotion_table')}>Get Now</button>
                                            </div>
                                            <Typography className={classes.third_date}>Mar 1,2020 AM PT-Apr 1,2020 AM PT</Typography>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </Grid>
                    <Grid item lg={3}>
                        <Typography className={classes.title}>Recommended for You</Typography>
                        <img src={'/assets/images/promotion5.png'} alt='' className={classes.image3}/>
                        <Typography className={classes.image_detail}>US $ 5.36</Typography>
                        <img src={'/assets/images/promotion5.png'} alt='' className={classes.image4}/>
                        <Typography className={classes.image_detail}>US $ 5.36</Typography>
                        <img src={'/assets/images/promotion5.png'} alt='' className={classes.image4}/>
                        <Typography className={classes.image_detail}>US $ 5.36</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)