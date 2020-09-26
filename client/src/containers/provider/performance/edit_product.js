import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50
    },
    content: {
        backgroundColor: 'white',
        padding: 50,
        height: 2300,
    },
    products: {
        marginTop: 30,
        height: 250,
        backgroundColor: '#c2c2c2',
        display: 'flex',
        padding: 50
    },
    image1: {
        height: 200
    },
    image2: {
        height: 200,
        marginLeft: 20
    },
    image3: {
        height: 200,
        marginLeft: 20
    },
    image4: {
        height: 200,
        marginLeft: 20
    },
    upload: {
        height: 230,
        marginLeft: 20,
        width: 200,
        border: 'groove',
        backgroundColor: 'white'
    },
    camera: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        color: '#299494',
        height: 140,
        width: 70
    },
    detail1: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        color: '#299494',
        marginTop: -20,
        fontSize: 13
    },
    detail2: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        color: '#299494',
        fontSize: 13
    },
    edit1: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 50,
        color: '#299494'
    },
    edit2: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 270,
        color: '#299494'
    },
    edit3: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 489,
        color: '#299494'
    },
    edit4: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 709,
        color: '#299494'
    },
    delete1: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 158,
        color: '#f56798'
    },
    delete2: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 379,
        color: '#f56798'
    },
    delete3: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 598,
        color: '#f56798'
    },
    delete4: {
        height: 30,
        width: 90,
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        position: 'absolute',
        marginTop: -100,
        marginLeft: 817,
        color: '#f56798'
    },
    btn_group: {
        display: 'flex'
    },
    back: {
        color: '#7c7c7c',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    direction: {
        marginTop: -50,
        position: 'absolute',
        marginLeft: 50,
        display: 'flex',
        width: '80%'
    },
    forward: {
        color: '#7c7c7c',
        '&:hover': {
            cursor: 'pointer'
        },
        marginLeft: 'auto',
        marginRight: 30
    },
    title: {
        marginTop: 30,
        display: 'flex'
    },
    title1: {
        fontSize: 17
    },
    title_content: {
        marginLeft: 'auto'
    },
    divider: {
        marginTop: 20
    },
    detail: {
        marginTop: 20,
        marginLeft: 20,
        fontWeight: 600
    },
    description_title: {
        marginTop: 50,
        display: 'flex'
    },
    description: {
        fontSize: 17
    },
    textarea1: {
        width: '98%',
        marginTop: 10,
        padding: '0px 10px',
        fontWeight: 600,
        paddingTop: 15
    },
    textarea2: {
        width: '98%',
        marginTop: 10,
        padding: '0px 10px',
        fontWeight: 600,
        paddingTop: 15
    },
    textarea3: {
        width: '98%',
        marginTop: 10,
        padding: '0px 10px',
        fontWeight: 600,
        paddingTop: 15,
        height: 30
    },
    textarea4: {
        height: 16,
        width: '96%',
        marginTop: 10,
        fontWeight: 600,
        textAlign: 'end',
        padding: '15px 20px'
    },
    about: {
        marginLeft: 50,
        height: 50,
        width: '100%',
        backgroundColor: '#7c7c7c'
    },
    shampoo: {
        marginTop: 30,
        marginLeft: 50,
        display: 'flex'
    },
    shampoo_title: {
        marginTop: 15
    },
    shampoo_detail: {
        color: '#c2c2c2',
        marginLeft: 30,
        marginTop: 15
    },
    category: {
        marginTop: 30,
        fontSize: 17
    },
    select: {
        height: 50,
        fontWeight: 600,
        width: '100%',
        marginTop: 10,
        outline: 'none',
        padding: '0 10px'
    },
    brand: {
        marginTop:30,
        display: 'flex'
    },
    brand_title: {
        fontSize: 17
    },
    brand_content: {
        color: '#299494',
        marginLeft: 'auto'
    },
    condition: {
        width: '96.5%',
        height: 250,
        padding: 20,
        backgroundColor: '#fcfcfc',
        marginTop: 30
    },
    shipping: {
        width: '96.5%',
        height: 100,
        padding: 20,
        backgroundColor: '#fcfcfc',
        marginTop: 30,
        display: 'flex'
    },
    edit_shop: {
        marginTop: 40,
        marginLeft: 100,
        color: '#299494'
    },
    condition_header: {
        display: 'flex',
    },
    condition_title: {
        fontSize: 17
    },
    forward1: {
        marginLeft: 'auto',
        marginRight: 50,
        marginTop: 40,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    help: {
        color: '#7c7c7c',
        marginLeft: 10
    },
    new1: {
        height: 200,
        width: 200,
        border: 'none',
        backgroundColor: '#299494',
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 20,
        display: 'flow-root'
    },
    new2: {
        height: 200,
        width: 200,
        marginLeft: 40,
        border: 'none',
        backgroundColor: 'white',
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 20,
        display: 'flow-root'
    },
    new_title1: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
    },
    new_title2: {
        fontSize: 20,
        color: '#c2c2c2',
        marginTop: 20,
    },
    new_content1: {
        color: 'white',
        marginTop: 20
    },
    new_content2: {
        color: '#c2c2c2',
        marginTop: 20
    },
    new_detail: {
        display: 'flex'
    },
    shipping_title: {
        marginTop: 40
    },
    shipping_detail: {
        marginLeft: 300,
        marginTop: 15
    },
    sell: {
        fontSize: 17,
        fontWeight: 600
    },
    dollars: {
        marginLeft: 'auto',
        color: '#f13232',
        marginRight: 30,
        fontWeight: 600
    },
    cost: {
        marginTop: 10,
        display: 'flex'
    },
    cost_title: {
        fontSize: 17
    },
    cost_content: {
        marginLeft: 'auto',
        color: '#f13232',
        marginRight: 30,
    },
    earn: {
        marginLeft: 'auto',
        color: '#299494',
        marginRight: 30,
        fontWeight: 600
    },
    update: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        border: 'none',
        outline: 'none',
        backgroundColor: '#299494',
        color: 'white',
        borderRadius: 5,
        '&:hover': {
            cursor: 'pointer'
        },
        display: 'block',
        height: 40,
        marginTop: 50
    },
    or: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        fontSize: 20,
        color: '#c2c2c2',
        marginTop: 20
    },
    deactivate: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        border: 'none',
        outline: 'none',
        backgroundColor: '#ededed',
        color: '#c2c2c2',
        borderRadius: 5,
        '&:hover': {
            cursor: 'pointer'
        },
        display: 'block',
        height: 40,
        marginTop: 50
    },
    delete: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        border: 'none',
        outline: 'none',
        backgroundColor: '#f47777',
        color: 'white',
        borderRadius: 5,
        '&:hover': {
            cursor: 'pointer'
        },
        display: 'block',
        height: 40,
        marginTop: 20
    },
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
                <div className={classes.content}>
                    <Typography>Edit product</Typography>
                    <div className={classes.products}>
                        <img src={'/assets/images/edit_product.png'} alt='' className={classes.image1} />
                        <img src={'/assets/images/edit_product.png'} alt='' className={classes.image2} />
                        <img src={'/assets/images/edit_product.png'} alt='' className={classes.image3} />
                        <img src={'/assets/images/edit_product.png'} alt='' className={classes.image4} />
                        <div className={classes.upload}>
                            <CameraAltIcon className={classes.camera}/>
                            <Typography className={classes.detail1}>Drag and drop file or click</Typography>
                            <Typography className={classes.detail2}>here to select photos</Typography>
                        </div>
                    </div>
                    <div className={classes.btn_group}>
                        <button className={classes.edit1}>Edit</button>
                        <button className={classes.delete1}>Delete</button>
                        <button className={classes.edit2}>Edit</button>
                        <button className={classes.delete2}>Delete</button>
                        <button className={classes.edit3}>Edit</button>
                        <button className={classes.delete3}>Delete</button>
                        <button className={classes.edit4}>Edit</button>
                        <button className={classes.delete4}>Delete</button>
                    </div>
                    <div className={classes.direction}>
                        <ArrowBackIosIcon className={classes.back} />
                        <ArrowForwardIosIcon className={classes.forward} />
                    </div>
                    <div className={classes.title}>
                        <Typography className={classes.title1}>TITLE</Typography>
                        <Typography className={classes.title_content}>21/40</Typography>
                    </div>
                    <textarea className={classes.textarea1} rows='' defaultValue={"Alice's Hair Shampoo"}></textarea>
                    <div className={classes.description_title}>
                        <Typography className={classes.description}>DESCRIPTION</Typography>
                        <Typography className={classes.title_content}>65/1000</Typography>
                    </div>
                    <textarea className={classes.textarea2} rows='10' defaultValue={"Shampoo for rough hair"}></textarea>
                    <div className={classes.shampoo}>
                        <Typography className={classes.shampoo_title}>#</Typography>
                        <div className={classes.about}>
                            <Typography className={classes.shampoo_detail}>#shampoo</Typography>
                        </div>
                    </div>
                    <Typography className={classes.category}>CAREGORY</Typography>
                    <select
                        className={classes.select}
                        value={this.state.keyStatus}
                        name="keyStatus"
                        onChange={this.handleChangeInput}
                    >
                    <option className={classes.select_value} value="0">Shampoo</option>
                    </select>
                    <div className={classes.brand}>
                        <Typography className={classes.brand_title}>BRAND</Typography>
                        <Typography className={classes.brand_content}>Staples</Typography>
                    </div>
                    <textarea className={classes.textarea3} rows='1' defaultValue={"Enter a brand name"}></textarea>
                    <div className={classes.condition}>
                        <div className={classes.condition_header}>
                            <Typography className={classes.condition_title}>CONDITION</Typography>
                            <HelpIcon className={classes.help} />
                        </div>
                        <div className={classes.new_detail}>
                            <div className={classes.new1}>
                                <Typography className={classes.new_title1}>New</Typography>
                                <Typography className={classes.new_content1}>New with tags(NWT).</Typography>
                                <Typography className={classes.new_content1}>Unopened packaging</Typography>
                                <Typography className={classes.new_content1}>unused.</Typography>
                            </div>
                            <div className={classes.new2}>
                                <Typography className={classes.new_title2}>New</Typography>
                                <Typography className={classes.new_content2}>New with tags(NWT).</Typography>
                                <Typography className={classes.new_content2}>Unopened packaging</Typography>
                                <Typography className={classes.new_content2}>unused.</Typography>
                            </div>
                            <div className={classes.new2}>
                                <Typography className={classes.new_title2}>New</Typography>
                                <Typography className={classes.new_content2}>New with tags(NWT).</Typography>
                                <Typography className={classes.new_content2}>Unopened packaging</Typography>
                                <Typography className={classes.new_content2}>unused.</Typography>
                            </div>
                            <div className={classes.new2}>
                                <Typography className={classes.new_title2}>New</Typography>
                                <Typography className={classes.new_content2}>New with tags(NWT).</Typography>
                                <Typography className={classes.new_content2}>Unopened packaging</Typography>
                                <Typography className={classes.new_content2}>unused.</Typography>
                            </div>
                            <div className={classes.new2}>
                                <Typography className={classes.new_title2}>New</Typography>
                                <Typography className={classes.new_content2}>New with tags(NWT).</Typography>
                                <Typography className={classes.new_content2}>Unopened packaging</Typography>
                                <Typography className={classes.new_content2}>unused.</Typography>
                            </div>
                        </div>
                    </div>
                    <Typography className={classes.category}>SHIPS FROM</Typography>
                    <textarea className={classes.textarea3} rows='1' defaultValue={"78499"}></textarea>
                    <div className={classes.shipping}>
                        <Typography className={classes.shipping_title}>SHIPPING</Typography>
                        <div className={classes.shipping_detail}>
                            <Typography className={classes.ups}>UPS</Typography>
                            <Typography className={classes.dollar}>$4.99</Typography>
                        </div>
                        <Typography className={classes.edit_shop}>Edit Shopping</Typography>
                        <ArrowForwardIosIcon className={classes.forward1} />
                    </div>
                    <Typography className={classes.category}>SET PRICE</Typography>
                    <textarea className={classes.textarea4} rows='1' defaultValue={"$8"}></textarea>
                    <div className={classes.brand}>
                        <Typography className={classes.sell}>SELLING FEE(10%)</Typography>
                        <Typography className={classes.dollars}>-$0.80</Typography>
                    </div>
                    <div className={classes.cost}>
                        <Typography className={classes.cost_title}>Shipping cost</Typography>
                        <Typography className={classes.cost_content}>-$4.99</Typography>
                    </div>
                    <Divider className={classes.divider}></Divider>
                    <div className={classes.cost}>
                        <Typography className={classes.sell}>YOUR EARN</Typography>
                        <Typography className={classes.earn}>$2.21</Typography>
                    </div>
                    <button className={classes.update}>UPDATE</button>
                    <Typography className={classes.or}>OR</Typography>
                    <button className={classes.deactivate}>DEACTIVATE</button>
                    <button className={classes.delete}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(index)