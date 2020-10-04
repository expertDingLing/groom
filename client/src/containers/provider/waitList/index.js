import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import $ from 'jquery';
import {
  Box,
  Button,
  Paper,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Popover,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WaitListDialog from '../../../components/provider/WaitListDialog';
import { TabPanel, a11yProps } from '../../../components/generic/TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FAFAFA',
    padding: theme.spacing(5),
  },
  paper: {
    background: 'white',
    padding: theme.spacing(4),
  },
  tabs: {
    marginTop: theme.spacing(3),
    borderBottom: '1px solid #CCCCCC',
    '& button': {
      padding: 0,
      minWidth: theme.spacing(12),
    },
  },
  table: {
    '& th': {
      fontWeight: 'bold',
      border: 'none',
    },
    '& td': {
      border: 'none',
    },
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
}));

function WaitList() {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [waitListDialogOpen, setWaitListDialogOpen] = useState(false);

  const waitListMenuOpen = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleWaitListMenuOpen = (event) => {
    if ($(document).height() > $(window).height()) {
      $('#account').css('right', '65px');
    }
    setAnchorEl(event.currentTarget);
  };

  const handleWaitListMenuClose = () => {
    $('#account').css('right', '48px');
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Groomings</Typography>

        <Tabs
          className={classes.tabs}
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          color="primary"
        >
          <Tab label="Wait List" {...a11yProps(0)} />
          <Tab label="Upcomming" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
          <Tab label="Cancelled" {...a11yProps(3)} />
          <Tab label="All" {...a11yProps(4)} />
        </Tabs>

        <TabPanel value={tabIndex} index={0}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Check In</TableCell>
                <TableCell>Waiting</TableCell>
                <TableCell>Booked</TableCell>
                <TableCell>Listing</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Queue ID</TableCell>
                <TableCell>Total Payout</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.colorPrimary}>
                  #12 of 12
                </TableCell>
                <TableCell>1:00 PM</TableCell>
                <TableCell>9 mins</TableCell>
                <TableCell>20 Feb, 2020 12:15 PM</TableCell>
                <TableCell>XYZ</TableCell>
                <TableCell>Braids</TableCell>
                <TableCell>Sandra</TableCell>
                <TableCell>A333jh</TableCell>
                <TableCell>$25</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Details
                  </Button>

                  <IconButton onClick={handleWaitListMenuOpen}>
                    <MoreHorizIcon />
                  </IconButton>

                  <Popover
                    open={waitListMenuOpen}
                    anchorEl={anchorEl}
                    onClose={handleWaitListMenuClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <List component="nav">
                      <ListItem
                        button
                        onClick={() => {
                          handleWaitListMenuClose();
                          setWaitListDialogOpen(true);
                        }}
                      >
                        <ListItemText>Message</ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          handleWaitListMenuClose();
                        }}
                      >
                        <ListItemText>Send or request money</ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          handleWaitListMenuClose();
                        }}
                      >
                        <ListItemText>Approve</ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => {
                          handleWaitListMenuClose();
                        }}
                      >
                        <ListItemText>reject</ListItemText>
                      </ListItem>
                    </List>
                  </Popover>

                  <WaitListDialog
                    open={waitListDialogOpen}
                    onClose={() => setWaitListDialogOpen(false)}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>

        <TabPanel value={tabIndex} index={1}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Check In</TableCell>
                <TableCell>Check Out</TableCell>
                <TableCell>Booked</TableCell>
                <TableCell>Listing</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Confirmation Code</TableCell>
                <TableCell>Total Payout</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.colorPrimary}>
                  Confirmed
                </TableCell>
                <TableCell>1:00 PM</TableCell>
                <TableCell>2:00 PM</TableCell>
                <TableCell>20 Feb, 2020</TableCell>
                <TableCell>XYZ</TableCell>
                <TableCell>Braids</TableCell>
                <TableCell>Sandra</TableCell>
                <TableCell>A333jh</TableCell>
                <TableCell>$25</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Details
                  </Button>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Booking request</TableCell>
                <TableCell>1:00 PM</TableCell>
                <TableCell>2:00 PM</TableCell>
                <TableCell>20 Feb, 2020</TableCell>
                <TableCell>XYZ</TableCell>
                <TableCell>Braids</TableCell>
                <TableCell>Sandra</TableCell>
                <TableCell>A333jh</TableCell>
                <TableCell>$25</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    Details
                  </Button>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>
      </Paper>
    </Box>
  );
}

export default WaitList;
