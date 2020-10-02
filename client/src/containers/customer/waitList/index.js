import React from 'react';
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
  IconButton,
  List,
  ListItem,
  TextField,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

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
    display: 'flex',
  },
  leftPanel: {
    width: '70%',
  },
  rightPanel: {
    width: '30%',
    paddingLeft: theme.spacing(10),
  },
  shopInfo: {
    display: 'flex',
  },
  shopInfoLeft: {
    width: theme.spacing(60),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  contactButton: {
    marginTop: theme.spacing(2),
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
  shopInfoText: {
    marginTop: theme.spacing(2),
  },
  cardBox: {
    marginTop: theme.spacing(5),
    background: '#F5F5F5',
    borderRadius: 5,
    border: '1px solid #299494',
    padding: theme.spacing(5),
  },
  cardButton: {
    width: '100%',
    height: '100%',
    background: 'white',
  },
  cancellationBox: {
    marginTop: theme.spacing(5),
  },
  reviewMoreAccordion: {
    marginTop: theme.spacing(2),
  },
  reviewMoreAccordionSummary: {
    justifyContent: 'left',
  },
  accordion: {
    background: 'transparent',
    boxShadow: 'none',
    '&::before': {
      display: 'none',
    },
  },
  accordionSummary: {
    padding: 0,
    '& > div': {
      flexGrow: 0,
    },
  },
  accordionDetails: {
    padding: 0,
  },
  reviewSection: {
    marginTop: theme.spacing(3),
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
  otherServicesBox: {
    marginTop: theme.spacing(3),
  },
  serviceList: {
    width: '100%',
    padding: 0,
    marginTop: -theme.spacing(2),
  },
  serviceListItem: {
    display: 'block',
    padding: 0,
    marginTop: theme.spacing(1),
  },
  serviceListItemMain: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  otherServiceAccordionSummary: {
    justifyContent: 'space-between',
  },
  serviceMoney: {
    display: 'flex',
  },
  serviceListItemRight: {
    display: 'flex',
  },
  bookButton: {
    width: theme.spacing(8),
    height: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  serviceMoneyTime: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  showMore: {
    fontSize: 'x-small',
    textTransform: 'uppercase',
  },
  showMoreAccordionSummary: {
    justifyContent: 'left',
    marginTop: -theme.spacing(1),
  },
  dateTimePaper: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(12),
  },
  title: {
    fontSize: 'large',
    color: theme.palette.text.main,
    marginBottom: theme.spacing(1),
  },
  timeBox: {
    marginTop: theme.spacing(3),
  },
  currentWaitBox: {
    background: '#F0F0F0',
    borderRadius: 5,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  subtitle: {
    color: theme.palette.text.main,
  },
  currentWaitAvatar: {
    background: theme.palette.primary.main,
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
  },
  joinButton: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  mapPaper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
  mapImage: {
    width: '100%',
  },
  salonPaper: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  salonTitle: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  salonSubTitle: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  salonHelpText: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  salonListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  evenItem: {
    backgroundColor: '#FAFAFA',
  },
  salonListItemLabel: {
    color: theme.palette.text.main,
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  socialIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
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

function WaitList() {
  const classes = useStyles();

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
        <Box className={classes.leftPanel}>
          <Box className={classes.shopInfo}>
            <Box className={classes.shopInfoLeft}>
              <Avatar
                className={classes.avatar}
                src="/assets/images/wait-list-avatar.png"
                alt=""
              />
              <Typography variant="body2">Anna</Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.contactButton}
              >
                Contact host
              </Button>
            </Box>
            <Box className={classes.shopInfoRight}>
              <Typography variant="h5">Chrochet Braids</Typography>
              <Typography variant="body2">Webmingo</Typography>
              <Box className={classes.ratingBox}>
                <Rating value={1} max={1} readOnly />
                <Typography className={classes.rating}>4.93</Typography>
                <Typography className={classes.reviews} variant="body2">
                  (203 reviews)
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.shopInfoText}>
                Basic styles generally consists of 3 packs of hair at shoulder
                length or shorter. On average takes about 3 hours to install. I
                NO LONGER OFFER SILKY TEXTURES LIKE FREETRESS PARADISE CURL,
                OUTRE BATIK LOOSE DEEP, FREEE TRESS LOOSE APPEARL
              </Typography>
            </Box>
          </Box>

          <Box className={classes.cardBox}>
            <GridList rows={2} cols={5} spacing={10} cellHeight={50}>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-1.png"
                    alt="visa"
                    width={60}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-2.png"
                    alt=""
                    width={40}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-3.png"
                    alt="discover"
                    width={50}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-4.png"
                    alt="zelle"
                    width={55}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-5.png"
                    alt="facebook"
                    width={100}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-6.png"
                    alt="american express"
                    width={80}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-7.png"
                    alt="paypal"
                    width={100}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-8.png"
                    alt="apple pay"
                    width={65}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-9.png"
                    alt="google pay"
                    width={65}
                  />
                </Button>
              </GridListTile>
              <GridListTile cols={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.cardButton}
                >
                  <img
                    src="/assets/images/wait-list-card-10.png"
                    alt="venmo"
                    width={70}
                  />
                </Button>
              </GridListTile>
            </GridList>
          </Box>

          <Box className={classes.cancellationBox}>
            <Typography variant="h5">Cancellations</Typography>
            <Typography variant="body2">
              Cancel up to 7 days before check-in and get a full refund.
            </Typography>
          </Box>

          <Accordion
            className={`${classes.accordion} ${classes.reviewMoreAccordion}`}
          >
            <AccordionSummary
              className={`${classes.accordionSummary} ${classes.reviewMoreAccordionSummary}`}
              expandIcon={<ExpandMoreIcon color="primary" />}
            >
              <Typography color="primary">
                Read more about the policy
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean rhoncus velit sem, eget vehicula enim sagittis sed.
                  Pellentesque velit tellus, condimentum non purus rhoncus,
                  placerat congue nunc. Fusce vehicula ac sem sed lobortis.
                  Nulla a leo sit amet massa luctus maximus at ac velit.
                  Suspendisse potenti. Aenean vitae odio at dolor feugiat
                  sollicitudin in ac nibh
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean rhoncus velit sem, eget vehicula enim sagittis sed.
                  Pellentesque velit tellus, condimentum non purus rhoncus,
                  placerat congue nunc. Fusce vehicula ac sem sed lobortis.
                  Nulla a leo sit amet massa luctus maximus at ac velit.
                  Suspendisse potenti. Aenean vitae odio at dolor feugiat
                  sollicitudin in ac nibh
                </Typography>
              </ListItem>
            </List>
          </Box>

          <Box className={classes.otherServicesBox}>
            <Typography variant="h5">Other Services</Typography>
            <Accordion
              className={`${classes.accordion} ${classes.otherServiceAccordion}`}
            >
              <AccordionSummary
                className={`${classes.accordionSummary} ${classes.otherServiceAccordionSummary}`}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>
                  ADULT Professional Hair Cut Service (No beard work)
                </Typography>
              </AccordionSummary>

              <AccordionDetails className={classes.accordionDetails}>
                <List className={classes.serviceList}>
                  <ListItem className={classes.serviceListItem}>
                    <Box className={classes.serviceListItemMain}>
                      <Box className={classes.serviceListItemLeft}>
                        <Typography variant="h6">
                          Basic Hair Cut Service
                        </Typography>
                        <Typography variant="body2">
                          Brush, Bald, Fades, Taper Fades, Mohawks, etc. + Hot{' '}
                        </Typography>
                      </Box>
                      <Box className={classes.serviceListItemRight}>
                        <Box className={classes.serviceMoneyTime}>
                          <Box className={classes.serviceMoney}>
                            <AttachMoneyIcon />
                            <Typography>25</Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            className={classes.serviceTime}
                          >
                            55 mins
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.bookButton}
                        >
                          Book
                        </Button>
                      </Box>
                    </Box>

                    <Accordion className={classes.accordion}>
                      <AccordionSummary
                        className={`${classes.accordionSummary} ${classes.showMoreAccordionSummary}`}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography
                          variant="body2"
                          className={classes.showMore}
                        >
                          Show more
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.accordionDetails}>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Divider />
                  </ListItem>

                  <ListItem className={classes.serviceListItem}>
                    <Box className={classes.serviceListItemMain}>
                      <Box className={classes.serviceListItemLeft}>
                        <Typography variant="h6">
                          Enhanced Hair Cut Service
                        </Typography>
                        <Typography variant="body2">
                          Brush, Bald, Fades, Taper Fades, Mohawks, etc. + Hot{' '}
                        </Typography>
                      </Box>
                      <Box className={classes.serviceListItemRight}>
                        <Box className={classes.serviceMoneyTime}>
                          <Box className={classes.serviceMoney}>
                            <AttachMoneyIcon />
                            <Typography>30</Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            className={classes.serviceTime}
                          >
                            55 mins
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.bookButton}
                        >
                          Book
                        </Button>
                      </Box>
                    </Box>

                    <Accordion className={classes.accordion}>
                      <AccordionSummary
                        className={`${classes.accordionSummary} ${classes.showMoreAccordionSummary}`}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography
                          variant="body2"
                          className={classes.showMore}
                        >
                          SHOW MORE
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.accordionDetails}>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Divider />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        <Box className={classes.rightPanel}>
          <Paper className={classes.dateTimePaper}>
            <Box className={classes.dateBox}>
              <Typography className={classes.title}>Select Date</Typography>
              <TextField type="date" defaultValue="2020-10-02" />
            </Box>
            <Box className={classes.timeBox}>
              <Typography className={classes.title}>Time</Typography>
              <Typography variant="body2">
                Appointments are not available at this time. Please join the
                wait
              </Typography>
              <Box className={classes.currentWaitBox}>
                <Typography className={classes.subtitle}>
                  Current wait
                </Typography>
                <Avatar className={classes.currentWaitAvatar}>2</Avatar>
                <Typography variant="body2">parties ahead of you</Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              color="primary"
              className={classes.joinButton}
            >
              Join waitlist
            </Button>
            <Typography variant="body2">
              You will receive a text message on your phone number to keep you
              up to date on your status on the waitlist. Data charges may apply.
            </Typography>
          </Paper>

          <Paper className={classes.mapPaper}>
            <img
              src="/assets/images/wait-list-map.png"
              alt="map"
              className={classes.mapImage}
            />
          </Paper>

          <Paper className={classes.salonPaper}>
            <Typography variant="h5" className={classes.salonTitle}>
              Best Hair Salon
            </Typography>
            <Typography variant="body2" className={classes.salonHelpText}>
              I pride myself on giving great customer services with top shelf
              hair cuts that leave clients happy and satisfied that they've
              gotten their money's worth!!!
            </Typography>

            <Typography className={classes.salonSubTitle}>Openings</Typography>
            <List className={classes.salonList}>
              <ListItem
                className={`${classes.salonListItem} ${classes.evenItem}`}
              >
                <Typography
                  variant="body2"
                  className={classes.salonListItemLabel}
                >
                  Sunday
                </Typography>
                <Typography variant="body2">Closed</Typography>
              </ListItem>
              <ListItem className={classes.salonListItem}>
                <Typography
                  variant="body2"
                  className={classes.salonListItemLabel}
                >
                  Monday
                </Typography>
                <Typography variant="body2">09:00-19:00</Typography>
              </ListItem>
              <ListItem
                className={`${classes.salonListItem} ${classes.evenItem}`}
              >
                <Typography
                  variant="body2"
                  className={classes.salonListItemLabel}
                >
                  Tuesday
                </Typography>
                <Typography variant="body2">09:00-19:00</Typography>
              </ListItem>
              <ListItem className={classes.salonListItem}>
                <Typography
                  variant="body2"
                  className={classes.salonListItemLabel}
                >
                  Wednesday
                </Typography>
                <Typography variant="body2">09:00-19:00</Typography>
              </ListItem>
              <ListItem
                className={`${classes.salonListItem} ${classes.evenItem}`}
              >
                <Typography
                  variant="body2"
                  className={classes.salonListItemLabel}
                >
                  Thursday
                </Typography>
                <Typography variant="body2">09:00-19:00</Typography>
              </ListItem>
              <ListItem className={classes.salonListItem}>
                <Typography
                  variant="body2"
                  className={classes.salonListItemLabel}
                >
                  Friday
                </Typography>
                <Typography variant="body2">09:00-19:00</Typography>
              </ListItem>
              <ListItem
                className={`${classes.salonListItem} ${classes.evenItem}`}
              >
                <Typography
                  variant="body2"
                  className={classes.salonListItemLabel}
                >
                  Saturday
                </Typography>
                <Typography variant="body2">07:00-16:00</Typography>
              </ListItem>
            </List>

            <Typography className={classes.salonSubTitle}>
              SOCIAL MEDIA & SHARE
            </Typography>
            <Box className={classes.socialIcons}>
              <Box className={classes.socialIcon}>
                <IconButton>
                  <InstagramIcon color="primary" />
                </IconButton>
                <Typography variant="body2">Instagram</Typography>
              </Box>
              <Box className={classes.socialIcon}>
                <IconButton>
                  <LanguageIcon color="primary" />
                </IconButton>
                <Typography variant="body2">Website</Typography>
              </Box>
              <Box className={classes.socialIcon}>
                <IconButton>
                  <ShareIcon color="primary" />
                </IconButton>
                <Typography variant="body2">Share</Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default WaitList;
