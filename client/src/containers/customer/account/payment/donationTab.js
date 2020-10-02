import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button'


export class PayoutTab extends Component {

    render() {

        return (

                <div className="tax">
                    <Typography component="h2">Join Groom and and thousands of hosts giving back</Typography>
                    <Typography component="p">Donation description</Typography>
                    <Button variant="contained" className="add-tax-btn">Start donating</Button>
                </div>
        )
    }
}

export default PayoutTab