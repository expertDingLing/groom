import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import "../../../src/assets/scss/provider.scss"
import { withStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
        height: 2000
    },
    check: {
        marginLeft: 'auto',
        color: 'white',
        display: 'flex',
        marginRight: 15,
        paddingBottom: 20,
        fontSize: 40
    }
})

export class ProfileCard extends Component {
    render() {
        const { alias, star, brand, url, minites } = this.props.data;
        const {classes} = this.props;
        return (
            <Paper className="profile-card-container">
                 <Card className="card">
                    <CardMedia
                    className="card-media"
                    image={url}
                    >
                    <CheckCircleOutlineIcon className={classes.check}/>
                    </CardMedia>
                    <CardContent>
                        <div className="contents">
                            <Typography gutterBottom variant="h5" component="p">
                                {brand}
                            </Typography>
                            <button className="book">Book Again</button>
                        </div>
                        <p className="minites">
                            {minites}
                        </p>
                        <p className="alias">
                            {alias}
                        </p>
                        <div className="brand-favorite">
                            <Rating className={classes.star} name="read-only" value={parseFloat(star)} readOnly />
                        </div>
                    </CardContent>
                </Card>
            </Paper>
        )
    }
}

export default withStyles(styles)(ProfileCard)
