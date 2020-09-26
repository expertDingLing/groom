import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  image: {
    height: 200,
  },
  bottomBar: {
    paddingTop: theme.spacing(17),
    display: 'flex',
    justifyContent: 'space-between',
  },
  brandPrice: {
    color: 'white',
    paddingLeft: theme.spacing(2),
  },
  favorite: {
    color: 'white',
    paddingTop: theme.spacing(2),
  },
  title: {
    marginBottom: 0,
  },
}));

function HomePageCard(props) {
  const { title, alias, rating, price, brand, image } = props.data;
  const classes = useStyles();

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card>
      <CardMedia className={classes.image} image={image}>
        <Box className={classes.bottomBar}>
          <Box className={classes.brandPrice}>
            <Typography>{brand}</Typography>
            <Typography variant="h6">${price}</Typography>
          </Box>
          <IconButton onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <FavoriteIcon className={classes.favorite} />
            ) : (
              <FavoriteBorderIcon className={classes.favorite} />
            )}
          </IconButton>
        </Box>
      </CardMedia>
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h6"
          component="p"
        >
          {title}
        </Typography>
        <Typography color="textSecondary" component="p">
          {alias}
        </Typography>
        <Rating
          className={classes.rating}
          name="read-only"
          value={parseFloat(rating)}
          readOnly
        />
      </CardContent>
    </Card>
  );
}

export default HomePageCard;
