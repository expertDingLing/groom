import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';

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
    
    header_title: {
        fontWeight: 600,
        fontSize: 17
    },
    header_content: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 600
    },
    detail: {
        marginTop: 20
    },
    first_header: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 600
    },
    details: {
        marginTop: 40
    },
    more: {
        display: 'flex'
    },
    learn_more: {
        marginLeft: 20,
        color: '#299494'
    },
    add: {
        width: 150,
        height: 30,
        marginTop: 20,
        color: 'white',
        border: 'none',
        backgroundColor: '#299494',
        borderRadius: 3,
        outline: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    lorem: {
        marginTop: 20
    },
    close: {
        marginLeft: 'auto',
        marginRight: 20,
        display: 'flex',
        paddingTop: 20,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    modal_header: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 600
    },
    modal_header1: {
        marginTop: -20,
        fontSize: 17,
        fontWeight: 600
    },
    modal_title: {
        display: 'flex',
        marginTop: 10
    },
    terms: {
        marginLeft: 20,
        color: '#299494',
        fontSize: 14
    },
    modal_detail: {
        fontSize: 14
    },
    text_header: {
        marginTop: 10,
        fontWeight: 600,
        fontSize: 14
    },
    textarea: {
        width: '92%',
        height: 30,
        outline: 'none',
        borderRadius: 5,
        borderColor: '#c2c2c2',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    select: {
        width: 200,
        height: 30,
        color: '#7c7c7c',
        borderRadius: 5,
        outline: 'none',
        borderColor: '#c2c2c2',
        '&:focus':{
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    textarea2: {
        width: '92%',
        height: 100,
        borderColor: '#c2c2c2',
        borderRadius: 5,
        outline: 'none',
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    submit: {
        marginTop: 30,
        height: 30,
        width: 200,
        color: 'white',
        outline: 'none',
        border: 'none',
        borderRadius: 5,
        backgroundColor: '#299494',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    modal_title1: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'table',
        fontWeight: 60,
        marginTop: 20
    },
    modal_detail1: {
        fontSize: 10,
        marginTop: 20
    },
    modal_details: {
        fontSize: 10
    },
    provider: {
        marginTop: 10,
        display: 'flex'
    },
    selects: {
        height: 30,
        width: 70,
        marginLeft: 'auto',
        borderRadius: 5,
        backgroundColor: 'white',
        color: '#299494',
        borderColor: '#299494',
        borderStyle: 'double',
        outlnie: 'none',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:focus': {
            borderColor: '#299494',
            outline: 'none'
        }
    },
    dollar: {
        fontSize: 14,
        color: '#c2c2c2',
        marginLeft: 20
    },
    title1: {
        marginLeft: 20,
        fontWeight: 600
    },
    title2: {
        marginLeft: 20,
        fontWeight: 600
    },
    image: {
        height: 40
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState : "promotion",
            show: false,
            selection: false,
        }
    }
    showModal = () => {
        this.setState({
            show: true,
        })
    }
    showSelection = () => {
        this.setState({
            selection: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false,
            selection: false,
        })
    }
    render() {
        const { classes } = this.props;
        const { formState, show, selection } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.content}>
                    <Typography className={classes.header_title}>Alice's Hair Shampoo</Typography>
                    <div className={classes.header}>
                        <Typography className={classes.title}>Change Listing</Typography>
                        <ExpandMoreIcon className={classes.arrow}/>
                        <button className={classes.preview} onClick={this.showModal}>Preview listing</button>
                        <button className={classes.view} onClick={() => this.props.history.push('/provider/calendar')}>View Calendar</button>
                    </div>
                    <div className={classes.list}>
                        <button className={classes.listing} onClick={() => this.setState({ formState: "listing" })}>Listing details</button>
                        <button variant="contained" className={classes.product} onClick={() => this.setState({ formState: "product" })}>Product Settings</button>
                        <button variant="contained" className={classes.price} onClick={() => this.setState({ formState: "price" })}>Pricing</button>
                        <button variant="contained" className={classes.promotion} onClick={() => this.setState({ formState: "promotion" })}>Local taxes and laws</button>
                    </div>
                    <Divider className={classes.divider} />
                    {formState === 'promotion' && (
                        <div>
                            <Typography className={classes.header_content}>Local tax collection</Typography>
                            <Typography className={classes.detail}>Taxes apply to your services price and fees for groomings or products and we include them in your earnings report.</Typography>
                            <Typography>Guests are shown tax amount as part of the grooming total.</Typography>
                            <Typography className={classes.first_header}>Automatic tax collection</Typography>
                            <Typography>We automatically collect these taxes from grooming a product remit them directly to local tax authrorities</Typography>
                            <Typography className={classes.details}>General sales and Use Tax(North Carolina)</Typography>
                            <Typography>General sales and Use Tax(Wake)</Typography>
                            <Typography>Accommodations Tax(Wake)</Typography>
                            <Typography>Local Sales and Use Tax(Public Transportation)</Typography>
                            <Typography className={classes.first_header}>Additional taxes</Typography>
                            <Typography>We collect additional taxes from guests on new bookings, remit them to you, and include details in a seperate</Typography>
                            <div className={classes.more}>
                                <Typography>payout report.</Typography>
                                <Typography className={classes.learn_more}>Learn more.</Typography>
                            </div>
                            <button className={classes.add} onClick={this.showSelection}>Add a tax</button>
                            <Typography className={classes.header_content}>Local tax collection</Typography>
                            <Typography className={classes.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</Typography>
                            <Typography>dolore aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Typography>
                        </div>
                    )}
                </div>
                <Modal open={show}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"500px", height:"500px", marginLeft:"auto", padding: '20px', marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <CloseIcon className={classes.close} onClick={this.handleClose}/>
                        <Typography className={classes.modal_header}>Violation Report</Typography>
                        <div className={classes.modal_title}>
                            <Typography className={classes.modal_detail}>This form is used to report violations of the Groom</Typography>
                            <Typography className={classes.terms}>Terms & Conditions</Typography>
                        </div>
                        <Typography className={classes.modal_detail}>Please fill the following fields</Typography>
                        <Typography className={classes.text_header}>Uri of Violation</Typography>
                        <textarea className={classes.textarea} defaultValue="u/aamir/"/>
                        <Typography className={classes.text_header}>Committed Violation</Typography>
                        <select
                            className={classes.select}
                            value={this.state.keyStatus}
                            name="keyStatus"
                            onChange={this.handleChangeInput}
                        >
                        <option className={classes.select_value} value="0">Choose one</option>
                        </select>
                        <Typography className={classes.text_header}>Detailed Violation</Typography>
                        <textarea className={classes.textarea2} defaultValue="Comments" />
                        <button className={classes.submit} onClick={this.handleClose}>Submit Report</button>
                    </div>
                </Modal>
                <Modal open={selection}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{ borderRadius:"5px", background: "white", marginTop: '50px', width:"680px", height:"550px", marginLeft:"auto", padding: '20px', marginRight:"auto", borderColor:"white", outline:"none" }}>
                        <CloseIcon className={classes.close} onClick={this.handleClose}/>
                        <Typography className={classes.modal_header1}>Classic/Relash Touchup</Typography>
                        <Divider className={classes.divider} />
                        <Typography className={classes.modal_title1}>60 mins</Typography>
                        <Typography className={classes.modal_detail1}>orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Typography>
                        <Typography className={classes.modal_details}>voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
                        <Typography className={classes.modal_details}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</Typography>
                        <Typography className={classes.modal_details}>voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</Typography>
                        <Typography className={classes.modal_title1}>Select a Provider</Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.provider}>
                            <img src={'/assets/images/selection.png'} alt='' className={classes.image} />
                            <div>
                                <div style={{display:'flex'}}>
                                    <Typography className={classes.title1}>Maria Powel</Typography>
                                    <Typography className={classes.title2}>Founder/Owner</Typography>
                                </div>
                                <Typography className={classes.dollar}>$75.00</Typography>
                            </div>
                            <button className={classes.selects}>Select</button>                            
                        </div>
                        <Divider className={classes.divider} />
                        <div className={classes.provider}>
                            <img src={'/assets/images/selection.png'} alt='' className={classes.image} />
                            <div>
                                <div style={{display:'flex'}}>
                                    <Typography className={classes.title1}>Maria Powel</Typography>
                                    <Typography className={classes.title2}>Founder/Owner</Typography>
                                </div>
                                <Typography className={classes.dollar}>$75.00</Typography>
                            </div>
                            <button className={classes.selects}>Select</button>                            
                        </div>
                        <Divider className={classes.divider} />
                        <div className={classes.provider}>
                            <img src={'/assets/images/selection.png'} alt='' className={classes.image} />
                            <div>
                                <div style={{display:'flex'}}>
                                    <Typography className={classes.title1}>Maria Powel</Typography>
                                    <Typography className={classes.title2}>Founder/Owner</Typography>
                                </div>
                                <Typography className={classes.dollar}>$75.00</Typography>
                            </div>
                            <button className={classes.selects}>Select</button>                            
                        </div>
                        <Divider className={classes.divider} />
                        <div className={classes.provider}>
                            <img src={'/assets/images/selection.png'} alt='' className={classes.image} />
                            <div>
                                <div style={{display:'flex'}}>
                                    <Typography className={classes.title1}>Maria Powel</Typography>
                                    <Typography className={classes.title2}>Founder/Owner</Typography>
                                </div>
                                <Typography className={classes.dollar}>$75.00</Typography>
                            </div>
                            <button className={classes.selects}>Select</button>                            
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default withStyles(styles)(index)