import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50
    },
    content: {
        backgroundColor: 'white',
        padding: 50,
        height: 1200,
    },
    header: {
        display: 'flex',
        marginTop: 20
    },
    title: {
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
    listing: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: -5
    },
    product: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    price: {
        '&:focus': {
            textDecoration: 'underline',
            color: '#299494'
        },
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    promotion: {
        '&:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
        },
        textTransform: 'none',
        textDecoration: 'underline',
        color: '#299494',
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        marginLeft: 45
    },
    arrow: {
        color: '#299494',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    detail: {
        marginTop: 50
    },
    active: {
        display: 'flex'
    },
    active_title: {
        marginLeft: 200
    },
    select: {
        width: 100,
        marginLeft: 20,
        height: 30,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        outline: 'none',
        borderRadius: 5,
        borderWidth: 1,
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    text: {
        marginTop: 30,
        display: 'flex'
    },
    text_title: {
        marginLeft: 175
    },
    text_btn: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        height: 30,
        width: 250,
        borderRadius: 5,
        textAlign: 'left',
        outline: 'none',
        borderWidth: 1,
        '&:focus': {
            outline: 'none',
            borderColor: '#7c7c7c'
        }
    },
    description: {
        marginTop: 30,
        display: 'flex'
    },
    description_title: {
        marginLeft: 123
    },
    description_btn: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        height: 30,
        width: 250,
        borderRadius: 5,
        textAlign: 'left',
        outline: 'none',
        borderWidth: 1,
        '&:focus': {
            outline: 'none',
            borderColor: '#7c7c7c'
        }
    },
    success: {
        marginTop: 30,
        display: 'flex'
    },
    success_title: {
        marginLeft: 153
    },
    success_btn: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        height: 30,
        width: 250,
        textAlign: 'left',
        borderRadius: 5,
        outline: 'none',
        borderWidth: 1,
        '&:focus': {
            outline: 'none',
            borderColor: '#7c7c7c'
        }
    },
    type: {
        marginTop: 30,
        display: 'flex'
    },
    type_title: {
        marginLeft: 146
    },
    type_btn: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        height: 30,
        width: 250,
        textAlign: 'left',
        borderRadius: 5,
        outline: 'none',
        borderWidth: 1,
        '&:focus': {
            outline: 'none',
            borderColor: '#7c7c7c'
        }
    },
    amount: {
        marginTop: 30,
        display: 'flex'
    },
    amount_title: {
        marginLeft: 123
    },
    amount_btn: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        height: 30,
        width: 250,
        textAlign: 'left',
        borderRadius: 5,
        outline: 'none',
        borderWidth: 1,
        '&:focus': {
            outline: 'none',
            borderColor: '#7c7c7c'
        }
    },
    promo: {
        marginTop: 30,
        display: 'flex'
    },
    promo_title: {
        marginLeft: 55
    },
    limit: {
        marginTop: 30,
        display: 'flex'
    },
    limit_title: {
        marginLeft: 180
    },
    limit_btn: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#7c7c7c',
        height: 30,
        width: 250,
        borderRadius: 5,
        outline: 'auto',
        borderWidth: 1,
        textAlign: 'left',
        '&:focus': {
            outline: 'none',
            borderColor: '#7c7c7c'
        }
    },
    universal: {
        marginTop: 30,
        display: 'flex'
    },
    universal_title: {
        marginLeft: 87
    },
    header_title: {
        fontWeight: 600,
        fontSize: 17
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState : "promotion"
        }
    }
    render() {
        const { classes } = this.props;
        const { formState } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <Typography className={classes.header_title}>Alice's Hair Shampoo</Typography>
                    <div className={classes.header}>
                        <Typography className={classes.title}>Change Listing</Typography>
                        <ExpandMoreIcon className={classes.arrow}/>
                        <button className={classes.preview} onClick={() => this.props.history.push('/provider/promotion_detail')}>Preview listing</button>
                        <button className={classes.view} onClick={() => this.props.history.push('/provider/calendar')}>View Calendar</button>
                    </div>
                    <div className={classes.list}>
                        <button className={classes.listing} onClick={() => this.setState({ formState: "listing" })}>Listing details</button>
                        <button variant="contained" className={classes.product} onClick={() => this.setState({ formState: "product" })}>Product Settings</button>
                        <button variant="contained" className={classes.price} onClick={() => this.setState({ formState: "price" })}>Pricing</button>
                        <button variant="contained" className={classes.promotion} onClick={() => this.setState({ formState: "promotion" })}>Promotions</button>
                    </div>
                    <Divider className={classes.divider} />
                    {formState === 'promotion' && (
                        <div className={classes.detail}>
                            <div className={classes.active}>
                                <Typography className={classes.active_title}>Active</Typography>
                                <select
                                    className={classes.select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Yes</option>
                                </select>
                            </div>
                            <div className={classes.text}>
                                <Typography className={classes.text_title}>Code Text</Typography>
                                <button className={classes.text_btn}>Happ25</button>
                            </div>
                            <div className={classes.description}>
                                <Typography className={classes.description_title}>Code Description</Typography>
                                <button className={classes.description_btn}>for members of groom</button>
                            </div>
                            <div className={classes.success}>
                                <Typography className={classes.success_title}>Success Text</Typography>
                                <button className={classes.success_btn}>congrats</button>
                            </div>
                            <div className={classes.type}>
                                <Typography className={classes.type_title}>Discount Type</Typography>
                                <button className={classes.type_btn}>Flat discount</button>
                            </div>
                            <div className={classes.amount}>
                                <Typography className={classes.amount_title}>Discount Amount</Typography>
                                <button className={classes.amount_btn}>5</button>
                            </div>
                            <div className={classes.promo}>
                                <Typography className={classes.promo_title}>Unlimited Use Promo Code</Typography>
                                <select
                                    className={classes.select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Yes</option>
                                </select>
                            </div>
                            <div className={classes.limit}>
                                <Typography className={classes.limit_title}>Use Limit</Typography>
                                <button className={classes.amount_btn}>15</button>
                            </div>
                            <div className={classes.universal}>
                                <Typography className={classes.universal_title}>Universal Promo Code</Typography>
                                <select
                                    className={classes.select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Yes</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(index)