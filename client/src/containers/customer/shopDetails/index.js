import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  Button,
  Paper,
  Typography,
  Input,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  LinearProgress,
  Avatar,
  Dialog,
  IconButton,
  List,
  ListItem,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  imageGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  shareButton: {
    position: 'absolute',
    background: 'white',
    top: theme.spacing(2.5),
    right: theme.spacing(15),
  },
  saveButton: {
    position: 'absolute',
    background: 'white',
    top: theme.spacing(2.5),
    right: theme.spacing(2.5),
  },
  viewPhotoButton: {
    position: 'absolute',
    background: 'white',
    bottom: theme.spacing(2.5),
    right: theme.spacing(2.5),
  },
  container: {
    maxWidth: 'none',
    padding: '20px 40px',
    background: '#FAFAFA',
  },
  ratingBox: {
    display: 'flex',
    marginTop: theme.spacing(1),
    '& hr': {
      margin: '0 10px',
    },
  },
  rating: {
    marginLeft: theme.spacing(0.5),
  },
  reviews: {
    marginTop: theme.spacing(0.2),
    marginLeft: theme.spacing(1),
  },
  moneyBox: {
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  infoBox: {
    color: '#0085F9',
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  infoLabel: {
    marginLeft: theme.spacing(1),
  },
  shopStatus: {
    display: 'inline',
    padding: theme.spacing(1),
    float: 'right',
    marginTop: -theme.spacing(17),
    marginRight: theme.spacing(2),
    backgroundColor: '#F89F9F',
    color: '#9C0404',
  },
  writeReview: {
    marginTop: theme.spacing(3),
  },
  reviewPaper: {
    marginTop: theme.spacing(1),
    padding: '20px 40px',
  },
  reviewBox: {
    marginTop: theme.spacing(2),
  },
  reviewQuestion: {
    marginTop: theme.spacing(1),
  },
  reviewRating: {
    marginTop: theme.spacing(1),
  },
  reviewYesNo: {
    marginTop: theme.spacing(1),
  },
  yesButton: {
    width: theme.spacing(20),
  },
  noButton: {
    width: theme.spacing(20),
    marginLeft: theme.spacing(3),
  },
  submitReview: {
    marginTop: theme.spacing(3),
    width: theme.spacing(40),
    fontSize: 'medium',
  },
  readMore: {
    marginTop: theme.spacing(5),
    background: 'transparent',
    boxShadow: 'none',
    '&::before': {
      display: 'none',
    },
  },
  readMoreSummary: {
    padding: 0,
    justifyContent: 'left',
    '& > div': {
      flexGrow: 0,
    },
  },
  readMoreDetails: {
    padding: 0,
  },
  reviewSection: {
    marginTop: theme.spacing(3),
    width: '70%',
  },
  reviewLabel: {
    margin: '2px 0 0 5px',
  },
  searchBox: {
    display: 'flex',
    float: 'right',
    marginTop: -theme.spacing(5),
  },
  searchInput: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(1),
  },
  searchIcon: {
    position: 'absolute',
    margin: '5px 0 0 10px',
    color: theme.palette.text.light,
  },
  reviewProgress: {
    marginTop: theme.spacing(4),
  },
  progressItem: {
    display: 'flex',
    alignItems: 'center',
  },
  progressLabel: {
    width: theme.spacing(30),
  },
  progressBar: {
    width: '100%',
    marginRight: theme.spacing(1),
  },
  reviewList: {
    paddingTop: theme.spacing(4),
  },
  reviewHeader: {
    display: 'flex',
  },
  reviewerPhoto: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  reviewrNameDate: {
    marginLeft: theme.spacing(4),
  },
  reviewText: {
    marginTop: theme.spacing(1),
  },
  reviewListItem: {
    marginTop: theme.spacing(4),
    display: 'block',
    padding: 0,
  },
  claimButtons: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    width: 320,
  },
  claimShopDialog: {
    textAlign: 'center',
    padding: theme.spacing(10),
  },
  onlineShopImage: {
    width: 100,
  },
  titleClaimShop: {
    marginTop: theme.spacing(5),
  },
  helpTextClaimShop: {
    marginTop: theme.spacing(2.5),
  },
  claimShopButton: {
    marginTop: theme.spacing(5),
    width: '60%',
  },
  claimBusinessButton: {
    marginTop: theme.spacing(10),
    width: '60%',
  },
  claimBusinessCancelButton: {
    marginTop: theme.spacing(2),
    width: '60%',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(2),
  },
  claimBusinessDialog: {
    textAlign: 'center',
  },
  titleClaimBusiness: {
    marginTop: -theme.spacing(2),
  },
  helpTextClaimBusiness: {
    marginTop: theme.spacing(5),
  },
}));

const reviewProgressData = [
  {
    label: 'Cleanliness',
    point: '5.0',
  },
  {
    label: 'Communication',
    point: '5.0',
  },
  {
    label: 'Check-In',
    point: '4.0',
  },
  {
    label: 'Value',
    point: '4.0',
  },
  {
    label: 'Accuracy',
    point: '3.0',
  },
  {
    label: 'Location',
    point: '5.0',
  },
];

function ShopDetails() {
  const classes = useStyles();

  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [claimShopDialogOpen, setClaimShopDialogOpen] = useState(false);
  const [claimBusinessDialogOpen, setClaimBusinessDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <GridList
        className={classes.imageGrid}
        rows={2}
        cols={4}
        spacing={0}
        cellHeight={200}
      >
        <GridListTile rows={2} cols={2}>
          <img src="/assets/images/claim-business-1.png" alt="" />
        </GridListTile>
        <GridList rows={2} cols={2} spacing={0} cellHeight={200}>
          <GridListTile rows={1} cols={2}>
            <img src="/assets/images/claim-business-2.png" alt="" />
            <Button
              className={classes.shareButton}
              variant="contained"
              color="default"
              startIcon={<ShareIcon />}
            >
              Share
            </Button>
            <Button
              className={classes.saveButton}
              variant="contained"
              color="default"
              startIcon={<FavoriteIcon />}
            >
              Save
            </Button>
          </GridListTile>
          <GridListTile rows={1} cols={1}>
            <img src="/assets/images/claim-business-3.png" alt="" />
          </GridListTile>
          <GridListTile rows={1} cols={1}>
            <img src="/assets/images/claim-business-4.png" alt="" />
            <Button
              className={classes.viewPhotoButton}
              variant="contained"
              color="default"
            >
              View Photos
            </Button>
          </GridListTile>
        </GridList>
      </GridList>

      <Container className={classes.container}>
        <Box className={classes.shopInfo}>
          <Typography variant="h5">Chrochet Braids</Typography>
          <Typography variant="body2">Webmingo</Typography>
          <Box className={classes.ratingBox}>
            <Rating value={1} max={1} readOnly />
            <Typography className={classes.rating}>4.93</Typography>
            <Typography className={classes.reviews} variant="body2">
              (203 reviews)
            </Typography>
          </Box>
          <Box className={classes.moneyBox}>
            <AttachMoneyIcon />
            <AttachMoneyIcon />
            <AttachMoneyIcon />
          </Box>
          <Box className={classes.infoBox}>
            <InfoIcon />
            <Typography className={classes.infoLabel}>Unclaimed</Typography>
          </Box>
          <Typography className={classes.shopStatus}>
            Closes in 30 minutes
          </Typography>

          <Box className={classes.claimButtons}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setClaimShopDialogOpen(true)}
            >
              Claim your shop
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setClaimBusinessDialogOpen(true)}
            >
              Claim your business
            </Button>
          </Box>

          <Dialog
            open={claimShopDialogOpen}
            onClose={() => setClaimShopDialogOpen(false)}
          >
            <Box className={classes.claimShopDialog}>
              <img
                src="/assets/images/online-shopping.png"
                alt="online shopping"
                className={classes.onlineShopImage}
              />
              <Typography variant="h6" className={classes.titleClaimShop}>
                Claim your shop
              </Typography>
              <Typography variant="body2" className={classes.helpTextClaimShop}>
                It takes only minute and is completely free. Claim now to unlock
                the benefits.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.claimShopButton}
              >
                Claim your business
              </Button>
            </Box>
            <IconButton
              className={classes.closeButton}
              onClick={() => setClaimShopDialogOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Dialog>

          <Dialog
            open={claimBusinessDialogOpen}
            onClose={() => setClaimBusinessDialogOpen(false)}
            className={classes.claimBusinessDialog}
          >
            <Box className={classes.claimShopDialog}>
              <Typography variant="h6" className={classes.titleClaimBusiness}>
                Unclaimed Business
              </Typography>
              <Typography
                variant="body2"
                className={classes.helpTextClaimBusiness}
              >
                This business has not been claimed yet by an owner or
                representative.
              </Typography>
              <Typography variant="body2" className={classes.helpTextClaimShop}>
                Claim this business to view the business statistics, receive
                messages from prospective customers and respond to review.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.claimBusinessButton}
              >
                Claim your business
              </Button>
              <Button
                variant="outlined"
                className={classes.claimBusinessCancelButton}
              >
                Cancel
              </Button>
            </Box>
            <IconButton
              className={classes.closeButton}
              onClick={() => setClaimBusinessDialogOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Dialog>
        </Box>

        <Box className={classes.writeReview}>
          <Typography variant="h5">Write a review</Typography>
          <Paper className={classes.reviewPaper}>
            <Box className={classes.reviewBox}>
              <Typography className={classes.reviewTitle} variant="h6">
                Cleanliness
              </Typography>
              <Typography className={classes.reviewQuestion}>
                Did Rafael arrive on time and prepared for the service?
              </Typography>
              <Rating
                className={classes.reviewRating}
                name="rating1"
                value={rating1}
                onChange={(event, newValue) => {
                  setRating1(newValue);
                }}
              />
            </Box>

            <Box className={classes.reviewBox}>
              <Typography className={classes.reviewTitle} variant="h6">
                Communication
              </Typography>
              <Typography className={classes.reviewQuestion}>
                How clearly did Rafael communicate their questions and concerns?
              </Typography>
              <Rating
                className={classes.reviewRating}
                name="rating2"
                value={rating2}
                onChange={(event, newValue) => {
                  setRating2(newValue);
                }}
              />
            </Box>

            <Box className={classes.reviewBox}>
              <Typography className={classes.reviewTitle} variant="h6">
                Observance of shop rules
              </Typography>
              <Typography className={classes.reviewQuestion}>
                Did Rafael observe your shop rules
              </Typography>
              <Rating
                className={classes.reviewRating}
                name="rating3"
                value={rating3}
                onChange={(event, newValue) => {
                  setRating3(newValue);
                }}
              />
            </Box>

            <Box className={classes.reviewBox}>
              <Typography className={classes.reviewTitle} variant="h6">
                Would you service Rafael again?
              </Typography>
              <Typography className={classes.reviewQuestion}>
                How clearly did Rafael communicate their questions and concerns?
              </Typography>
              <Box className={classes.reviewYesNo}>
                <Button variant="outlined" className={classes.yesButton}>
                  Yes
                </Button>
                <Button variant="outlined" className={classes.noButton}>
                  No
                </Button>
              </Box>
              <Button
                variant="contained"
                color="primary"
                className={classes.submitReview}
              >
                Submit review
              </Button>
            </Box>
          </Paper>
        </Box>

        <Accordion className={classes.readMore}>
          <AccordionSummary
            className={classes.readMoreSummary}
            expandIcon={<ExpandMoreIcon color="primary" />}
          >
            <Typography color="primary">Read more about the policy</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.readMoreDetails}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Box className={classes.reviewSection}>
          <Typography variant="h5">Reviews</Typography>
          <Box className={classes.ratingBox}>
            <Rating value={1} max={1} readOnly />
            <Typography className={classes.rating}>4.93</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography className={classes.reviewCounts}>203</Typography>
            <Typography variant="body2" className={classes.reviewLabel}>
              reviews
            </Typography>
          </Box>

          <Box className={classes.searchBox}>
            <Input
              className={classes.searchInput}
              type="search"
              placeholder="Search reviews"
              color="secondary"
              disableUnderline
            />
            <SearchIcon className={classes.searchIcon} />
          </Box>

          <Grid className={classes.reviewProgress} container spacing={4}>
            {reviewProgressData.map((item, index) => {
              return (
                <Grid
                  className={classes.progressItem}
                  key={index}
                  item
                  md={6}
                  sm={4}
                >
                  <Typography className={classes.progressLabel}>
                    {item.label}
                  </Typography>
                  <LinearProgress
                    variant="buffer"
                    className={classes.progressBar}
                    value={parseFloat(item.point) * 20}
                    valueBuffer={100}
                  />
                  <Typography className={classes.progressPoint}>
                    {item.point}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>

          <List className={classes.reviewList}>
            <ListItem className={classes.reviewListItem}>
              <Box className={classes.reviewHeader}>
                <Avatar
                  className={classes.reviewerPhoto}
                  src="/assets/images/claim-business-avatar-1.png"
                  alt=""
                />
                <Box className={classes.reviewrNameDate}>
                  <Typography variant="h6">Calvin</Typography>
                  <Typography variant="body2">November 2019</Typography>
                </Box>
              </Box>
              <Typography className={classes.reviewText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                rhoncus velit sem, eget vehicula enim sagittis sed. Pellentesque
                velit tellus, condimentum non purus rhoncus, placerat congue
                nunc. Fusce vehicula ac sem sed lobortis. Nulla a leo sit amet
                massa luctus maximus at ac velit. Suspendisse potenti. Aenean
                vitae odio at dolor feugiat sollicitudin in ac nibh
              </Typography>
            </ListItem>
            <ListItem className={classes.reviewListItem}>
              <Box className={classes.reviewHeader}>
                <Avatar
                  className={classes.reviewerPhoto}
                  src="/assets/images/claim-business-avatar-2.png"
                  alt=""
                />
                <Box className={classes.reviewrNameDate}>
                  <Typography variant="h6">Michale</Typography>
                  <Typography variant="body2">November 2019</Typography>
                </Box>
              </Box>
              <Typography className={classes.reviewText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                rhoncus velit sem, eget vehicula enim sagittis sed. Pellentesque
                velit tellus, condimentum non purus rhoncus, placerat congue
                nunc. Fusce vehicula ac sem sed lobortis. Nulla a leo sit amet
                massa luctus maximus at ac velit. Suspendisse potenti. Aenean
                vitae odio at dolor feugiat sollicitudin in ac nibh
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ShopDetails;
