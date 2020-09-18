import React, { Component } from 'react'
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';


export class Privacy extends Component {

    render() {

        return (
            <div className="groom-container">
                <Typography  color="inherit" component="p">
                    Account {'>'} Groom
                </Typography>
                <Typography  color="inherit" component="h1">
                    Get Groomed for work
                </Typography>
                <Typography  component="h2">
                    Your work profile
                </Typography>
                <Typography  component="p" className="read-more">
                    You have to access .... <span>Learn more</span>
                </Typography>
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Work email</Typography>
                    <Typography component="p">mmccoy@mocno.com</Typography>
                        
                    </Typography>
                    <Typography component="div">Remove email</Typography>
                </div>
                <Divider />
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Booking permissions</Typography>
                    <Typography component="p">XYZ</Typography>
                        
                    </Typography>
                    <Typography component="div">Manage</Typography>
                </div>
                <Divider />
            </div>
        )
    }
}

export default Privacy