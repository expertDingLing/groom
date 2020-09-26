import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import "../../../src/assets/scss/provider.scss"

export class profileCard extends Component {
    render() {
        const { alias, star, brand, url, description, minites, content } = this.props.data;
        return (
            <Paper className="profile-card-container">
                 <Card className="card">
                    <CardMedia
                    className="card-media"
                    image={url}
                    >
                        {/* <div className="brand-favorite">
                            <div className="brand-price">
                                <p style={{fontSize: "20px"}}>{brand}</p>
                                <p style={{fontSize: "32px"}}>${price}</p>
                            </div>
                            <IconButton>
                                <FavoriteBorderIcon className="favorite-icon"/>
                            </IconButton>
                        </div> */}
                        <div className="brand-favorite">
                            <Rating className="star" name="read-only" value={parseFloat(star)} readOnly />
                        </div>
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
                        <Typography gutterBottom variant="h5" component="p">
                            {description}
                        </Typography>
                        <Typography color="textSecondary" component="p" className="detail">
                            {content}
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        )
    }
}

export default profileCard
