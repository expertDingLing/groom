import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

export class PersonalInfo extends Component {

    constructor(props){
        super(props)
        this.state={
            name: true,
            sex: true,
            birth: true,
            email: true,
            phone: true,
            g_id: true,
            address: true,
            contact: true
        }
    }

    edit = (flag) =>{
        this.setState({[flag]:!this.state[flag]});
    }
    render() {

        return (
            <div className="personal-container">
                <Typography  color="inherit" component="p">
                    Account {'>'} Personal Info
                </Typography>
                <Typography  color="inherit" component="h1">
                    Personal info
                </Typography>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Legal name" fullWidth defaultValue={this.props.userName.name} InputProps={{readOnly: this.state.name}} />
                    </Grid>
                    <Grid  item  className="edit-btn">
                        <IconButton style={{color:"#299494"}} onClick={() => this.edit("name")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Gendar" fullWidth defaultValue={this.props.userName.sex} InputProps={{readOnly: this.state.sex}} />
                    </Grid>
                    <Grid  item className="edit-btn">
                    <IconButton style={{color:"#299494"}} onClick={() => this.edit("sex")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Date of birth" fullWidth defaultValue={this.props.userName.birth} InputProps={{readOnly: this.state.birth}} />
                    </Grid>
                    <Grid  item className="edit-btn">
                        <IconButton style={{color:"#299494"}} onClick={() => this.edit("birth")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Eamil address" fullWidth defaultValue={this.props.userName.email} InputProps={{readOnly: this.state.email}} />
                    </Grid>
                    <Grid  item  className="edit-btn">
                        <IconButton style={{color:"#299494"}} onClick={() => this.edit("email")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Phone number" fullWidth defaultValue={this.props.userName.phone} InputProps={{readOnly: this.state.phone}} />
                    </Grid>
                    <Grid  item  className="edit-btn">
                        <IconButton style={{color:"#299494"}} onClick={() => this.edit("phone")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Government ID" fullWidth defaultValue={this.props.userName.G_ID} InputProps={{readOnly: this.state.g_id}} />
                    </Grid>
                    <Grid  item  className="edit-btn">
                        <IconButton style={{color:"#299494"}} onClick={() => this.edit("g_id")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Address" fullWidth defaultValue={this.props.userName.address} InputProps={{readOnly: this.state.address}} />
                    </Grid>
                    <Grid  item  className="edit-btn">
                        <IconButton style={{color:"#299494"}} onClick={() => this.edit("address")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container className="info-display">
                    <Grid item lg={12}>
                    <TextField id="standard-basic" label="Emergency contact" fullWidth defaultValue={this.props.userName.sex} InputProps={{readOnly: this.state.contact}} />
                    </Grid>
                    <Grid  item  className="edit-btn">
                        <IconButton style={{color:"#299494"}} onClick={() => this.edit("contact")}>
                            Edit
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default PersonalInfo