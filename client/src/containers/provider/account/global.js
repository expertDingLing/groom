import React, { Component } from 'react'
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';


export class Privacy extends Component {

    render() {

        return (
            <div className="global-container">
                <Typography  color="inherit" component="p">
                    Account {'>'} Global Preferences
                </Typography>
                <Typography  color="inherit" component="h1">
                    Global Preferences
                </Typography>
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Preferred language</Typography>
                    <Typography component="p">English</Typography>
                        
                    </Typography>
                    <Typography component="div">Edit</Typography>
                </div>
                <Divider />
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Preferred Currency</Typography>
                    <Typography component="p">United States Dollar</Typography>
                        
                    </Typography>
                    <Typography component="div">Edit</Typography>
                </div>
                <Divider />
                <div className="display-block">
                    <Typography component="div">
                    <Typography component="h2">Time zone</Typography>
                    <Typography component="p">GMT Eastern Time</Typography>
                        
                    </Typography>
                    <Typography component="div">Edit</Typography>
                </div>
                <Divider />
                

            </div>
        )
    }
}

export default Privacy