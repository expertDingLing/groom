import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

export class HomePageCard extends Component {
    render() {
        const { title, alias, star, price, brand, url } = this.props.data;
        return (
            <Paper className="homepage-card-container">
                 <Card className="card">
                    <CardMedia
                    className="card-media"
                    image={url}
                    >
                        <div className="brand-favorite">
                            <div className="brand-price">
                                <p style={{fontSize: "20px"}}>{brand}</p>
                                <p style={{fontSize: "32px"}}>${price}</p>
                            </div>
                            <IconButton>
                                <FavoriteBorderIcon className="favorite-icon"/>
                            </IconButton>
                        </div>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="p">
                            {title}
                        </Typography>
                        <Typography color="textSecondary" component="p">
                            {alias}
                        </Typography>
                        <Rating className="star" name="read-only" value={parseFloat(star)} readOnly />
                    </CardContent>
                </Card>
            </Paper>
        )
    }
}

export default HomePageCard
