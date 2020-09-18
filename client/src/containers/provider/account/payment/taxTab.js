import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button'


export class PayoutTab extends Component {

    render() {

        return (

                <div className="tax">
                    <Typography component="h2">State Sales</Typography>
                    <Typography component="p">Lorem ipsum. Lorem ipsum. Lorem ipsum.  Lorem ipsum.</Typography>
                    <Button variant="contained" className="add-tax-btn">Add VAT ID Number</Button>
                </div>
        )
    }
}

export default PayoutTab