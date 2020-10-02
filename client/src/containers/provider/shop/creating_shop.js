import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { Divider } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50
    },
    content: {
        backgroundColor: 'white',
        height: 600,
        padding: 50
    },
    header: {
        fontSize: 20,
        fontWeight: 700
    },
    header_title: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    divider: {
        marginTop: 30
    },
    detail: {
        marginTop: 30
    },
    creating: {
        display: 'flex',
    },
    image: {
        height: 120,
        width: 160
    },
    image_detail: {
        marginLeft: 50,
        marginTop: 10
    },
    image_detail2: {
        marginLeft: 50,
        marginTop: 60
    },

    first_detail: {
        color: '#7c7c7c',
        fontWeight: 700
    },
    second_detail: {
        marginTop: 10
    },
    next1: {
        backgroundColor: '#299494',
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#299494',
        }
    },
    select_content: {
        marginTop: 30,
        display: 'flex'
    },
    second_header: {
        marginTop: 30
    },
    second_title: {
        color: '#7c7c7c'
    },
    title: {
        marginTop: 30,
        color: '#7c7c7c',
        fontWeight: 700
    },
    first_select: {
        width: 100,
        height: 30,
        borderRadius: 5,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    second_select: {
        width: 100,
        borderRadius: 5,
        marginLeft: 20,
        height: 30,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    third_select: {
        width: 200,
        borderRadius: 5,
        marginTop: 20,
        height: 30,
        '&:focus': {
            borderColor: '#7c7c7c',
            outline: 'none'
        }
    },
    second_content: {
        marginTop: 20,
        border: 'groove',
        outline: 'auto',
        width: 220,
    },
    continue: {
        backgroundColor: '#299494',
        color: 'white',
        width: 120,
        height: 40,
        borderRadius: 5
    },
    continue_detail: {
        marginTop: 50
    },
    continue_content: {
        height: 30,
        width: 220,
        border: 'groove',
        marginTop: 20,
        borderWidth: 1.5,
        borderRadius: 5,
        outline: 'none'
    },
    content_detail: {
        marginLeft: 10,
        color: '#7c7c7c',
        marginTop: 3
    },
    button_group: {
        marginTop: 70,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    next: {
        color: 'white',
        display: 'flex',
        marginRight: 'auto',
        backgroundColor: '#299494',
        width: 100,
        '&:hover': {
            backgroundColor: '#299494'
        }
    },
    back: {
        marginLeft: 'auto',
        display: 'flex',
        marginRight: 50,
        outline: 'auto',
        color: '#299494',
        width: 100
    },
    title1: {
        marginTop: 10
    },
    third_title: {
        color: '#7c7c7c',
        fontWeight: 700,
        marginTop: 30
    },
    service: {
        marginTop: 20
    },
    radio_btn: {
        height: 30,
        marginTop: 30
    },
    images: {
        display: 'grid'
    },
    radio: {
        paddingTop: 45
    },
    second: {
        marginTop: 75
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state={
            formState: 'first',
        }
    }
    handleChange = (event) => {
        this.setState({value: event.target.value})
    };
    render() {
        const {classes} = this.props;
        const {formState} = this.state;
        return (
            <div className={classes.container}>
                {formState === 'first' && (
                 <Grid className={classes.content}>
                    <Typography className={classes.header}>How would you like to start?</Typography>
                    <div className={classes.header_title}>
                        <Radio
                            checked={true}
                            onChange={this.handleChange}
                            value="a"
                            color="primary"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <Typography>Creating a new listing</Typography>
                    </div>
                    <Divider className={classes.divider}/>
                    <div className = {classes.detail}>
                        <Typography>Duplicate an existing listing</Typography>
                        <Typography className={classes.detail}>You'll get to review the duplicated listing before publishing</Typography>
                    </div>
                    <div className={classes.creating}>
                    <RadioGroup aria-label="gender" className={classes.radio} name="radio-button-demo" value={this.state.value} onChange={this.handleChange}>
                        <FormControlLabel className = {classes.radio_detail1} value="radio1" color="primary" control={<Radio color="primary"/>} label="" />
                        <FormControlLabel className = {classes.radio_detail2} value="radio2" color="primary" control={<Radio color="primary" className={classes.second}/>} label="" />
                    </RadioGroup>
                    <div className={classes.images}>
                        <img src="/assets/images/service-2.png" alt="" className={classes.image}/>
                        <img src="/assets/images/service-2.png" alt="" className={classes.image}/>
                    </div>
                    <div>
                        {/* <img src="/assets/images/service-2.png" alt="" className={classes.image}/> */}
                        <div className={classes.image_detail}>
                            <Typography className={classes.first_detail}>Crochet Braids</Typography>
                            <Typography className={classes.second_detail}>Private</Typography>
                        </div>
                        <div className={classes.image_detail2}>
                            <Typography className={classes.first_detail}>Crochet Braids</Typography>
                            <Typography className={classes.second_detail}>Private</Typography>
                        </div>
                        </div>
                    </div>
                    {/* <div className={classes.creating}>
                        <Radio
                            onChange={this.handleChange}
                            value="a"
                            color="primary"
                            className={classes.radio_btn}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <img src="/assets/images/service-2.png" alt="" className={classes.image}/>
                        <div className={classes.image_detail}>
                            <Typography className={classes.first_detail}>Crochet Braids</Typography>
                            <Typography className={classes.second_detail}>Private</Typography>
                        </div>
                    </div> */}
                    <Button className={classes.next1} onClick={()=>this.setState({formState: "second"})}>Next</Button>
                </Grid>
                )}
                {formState === 'second' && (
                    <Grid className={classes.content}>
                        <Typography className={classes.header}>Let's get started listing your shop</Typography>
                        <div className={classes.second_header}>
                            <Typography className={classes.second_title}>STEP 1</Typography>
                            <Typography className={classes.title}>What kind of place do you have?</Typography>
                            <div className={classes.select_content}>
                                <select
                                    className={classes.first_select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Service</option>
                                </select>
                                <select
                                    className={classes.second_select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Team</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.continue_content}>
                            <Typography className={classes.content_detail}>Balltimore, MD, USA</Typography>
                        </div>
                        <div className={classes.continue_detail}>
                            <Button className={classes.continue}>Continue</Button>
                        </div>
                        <div className={classes.button_group}>
                            <Button className={classes.back} onClick={()=>this.setState({formState: "first"})}>Back</Button>
                            <Button className={classes.next} onClick={()=>this.setState({formState: "third"})}>Next</Button>
                        </div>
                    </Grid>
                )}
                {formState === 'third' && (
                    <Grid className={classes.content}>
                        <Typography className={classes.header}>What kind of service you are offering?</Typography>
                        <div className={classes.second_header}>
                            <Typography className={classes.third_title}>STEP 2</Typography>
                            <Typography className={classes.title1}>First, lets narrow things down.</Typography>
                                <select
                                    className={classes.third_select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Select one</option>
                                </select>
                                <Typography className={classes.service}>Now choose a service type</Typography>
                                <select
                                    className={classes.third_select}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Select service type</option>
                                </select>
                        </div>
                        
                        <div className={classes.button_group}>
                            <Button className={classes.back} onClick={()=>this.setState({formState: "second"})}>Back</Button>
                            <Button className={classes.next}>Next</Button>
                        </div>
                    </Grid>
                )}
            </div>
        )
    }
}

export default withStyles(styles)(index)
