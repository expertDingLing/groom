import React, { Component } from 'react'
import '../../../assets/scss/provider1.scss'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';


export class Privacy extends Component {

    render() {

        return (
            <div className="privacy-container">
                <Typography  color="inherit" component="p">
                    Account {'>'} Privacy and Sharing
                </Typography>
                <Typography  color="inherit" component="h1">
                    Privacy and Sharing
                </Typography>
                <Box className="tab-nav">
                    <Box component="span" style={{marginRight:"16px"}} onClick={() => this.props.privacyChk("SHARING")} className={this.props.privaChk === "SHARING" ? "active" : ""} >SHARING</Box>
                    <Box component="span" m={2} onClick={() => this.props.privacyChk("DATA")} className={this.props.privaChk === "DATA" ? "active" : ""}>DATA USE</Box>
                </Box>
                <Divider />

                <Typography component="h2">Headline</Typography>
                <Typography component="p">Donation description</Typography>
                <Typography component="p" className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
                <Typography component="p" className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
                <Typography component="p" className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
                

            </div>
        )
    }
}

export default Privacy