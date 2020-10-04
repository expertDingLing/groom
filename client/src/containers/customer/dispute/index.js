import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Paper,
  Typography,
  Input,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  TextField,
  Checkbox,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FAFAFA',
    padding: theme.spacing(5),
  },
  paper: {
    background: 'white',
    padding: theme.spacing(4),
  },
  stepper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  stepButton: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: 10,
    '& span': {
      display: 'block',
      position: 'absolute',
      top: theme.spacing(4),
    },
  },
  disabledButton: {
    color: theme.palette.text.main,
    '&:hover': {
      color: theme.palette.text.light,
    },
  },
  stepNum: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  stepTitle: {
    padding: theme.spacing(2),
    textTransform: 'uppercase',
  },
  stepArrow: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: theme.spacing(8),
    height: theme.spacing(3.5),
  },
  container: {
    marginTop: theme.spacing(4),
  },
  stageDescription: {
    backgroundColor: '#F7F7F7',
    padding: theme.spacing(3),
    borderRadius: 5,
    border: '1px solid #E1E1E1',
  },
  stageDescriptionList: {
    '& li': {
      paddingLeft: 0,
    },
  },
  dotIcon: {
    color: theme.palette.text.main,
    marginRight: theme.spacing(1),
    fontSize: 'small',
  },
  content: {
    marginTop: theme.spacing(4),
    width: '70%',
  },
  disputeFormControl: {
    marginTop: theme.spacing(2),
  },
  disputeFormLabel: {
    width: theme.spacing(30),
    fontWeight: 'bold',
    color: theme.palette.text.main,
    alignSelf: 'center',
  },
  disputeSelect: {
    width: theme.spacing(40),
    height: theme.spacing(5),
  },
  disputeFormLabelBlock: {
    marginTop: theme.spacing(5),
    fontWeight: 'bold',
    color: theme.palette.text.main,
    alignSelf: 'center',
  },
  disputeTextField: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  milestoneListItem: {
    backgroundColor: '#D0EDED',
    marginBottom: theme.spacing(1),
  },
  milestoneTotalItem: {
    backgroundColor: '#F2F2F2',
    height: theme.spacing(7),
  },
  milestoneSelect: {
    width: '10%',
  },
  milestonePrice: {
    width: '40%',
  },
  milestoneDescription: {
    width: '50%',
  },
  dropzone: {
    marginTop: theme.spacing(2),
  },
  finalDisputeBox: {
    background: '#F1F1F1',
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  finalDisputeBoxTitle: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
  finalDisputeBoxSubtitle: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  disputeAmountBox: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  amountInput: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(5),
  },
  cautionText: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  caution: {
    marginRight: theme.spacing(1),
  },
  createDisputeButton: {
    marginTop: theme.spacing(3),
  },
  negotationContent: {
    marginTop: theme.spacing(4),
    display: 'flex',
  },
  leftPanel: {
    width: '70%',
  },
  rightPanel: {
    width: '30%',
  },
  negotationInfo: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  negotationInfoBox: {
    marginLeft: theme.spacing(3),
    width: '100%',
    background: '#F9F9F9',
    border: '1px solid #C2C2C2',
    borderRadius: 5,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  negotationInfoBoxHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  negotationInfoBoxBody: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  negotationBox: {
    background: '#F3F3F3',
    border: '1px solid #C1C1C1',
    borderRadius: 5,
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  disputeAmount: {
    marginTop: theme.spacing(3),
    display: 'flex',
  },
  disputeAmountValue: {
    marginLeft: theme.spacing(3),
    marginTop: -6,
  },
  showMilestoneButton: {
    marginLeft: theme.spacing(13),
  },
  disputeInfoBox: {
    display: 'flex',
    borderTop: '1px solid #D9D9D9',
    paddingTop: theme.spacing(2),
  },
  disputeInfoLeft: {
    width: '50%',
    paddingRight: theme.spacing(3),
    borderRight: '1px solid #D9D9D9',
  },
  disputeInfoRight: {
    width: '50%',
    paddingLeft: theme.spacing(3),
  },
  dividerBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  dividerLeft: {
    width: '42%',
    height: 1,
    background: '#D9D9D9',
    marginTop: theme.spacing(1.5),
  },
  dividerRight: {
    width: '42%',
    height: 1,
    background: '#D9D9D9',
    marginTop: theme.spacing(1.5),
  },
  disputeAmountInputBox: {
    display: 'flex',
    marginTop: theme.spacing(2),
    alignItems: 'center',
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '60%',
  },
  disputeAmountInput: {
    width: theme.spacing(20),
    marginLeft: theme.spacing(1),
  },
  warningBox: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  warningIcon: {
    fontSize: 'xxx-large',
    marginRight: theme.spacing(2),
  },
}));

function Dispute() {
  const classes = useStyles();

  const [stage, setStage] = useState(1);
  const [disputeType, setDisputeType] = useState(0);
  const [disputeService, setDisputeService] = useState(0);
  const [disputeUser, setDisputeUser] = useState(0);

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">New Dispute</Typography>

        <Box className={classes.stepper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.stepButton}
            onClick={() => setStage(1)}
          >
            <Typography className={classes.stepNum} variant="h6">
              Stage 1
            </Typography>
            <Typography className={classes.stepTitle} variant="body2">
              Identify the issues
            </Typography>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.stepArrow}
          >
            <ArrowForwardIcon />
          </Button>
          <Button
            variant={stage >= 2 ? 'contained' : 'outlined'}
            color={stage >= 2 ? 'primary' : 'default'}
            className={`${classes.stepButton} ${
              stage >= 2 ? '' : classes.disabledButton
            }`}
            onClick={() => setStage(2)}
          >
            <Typography className={classes.stepNum} variant="h6">
              Stage 2
            </Typography>
            <Typography className={classes.stepTitle} variant="body2">
              Negotations
            </Typography>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.stepArrow}
          >
            <ArrowForwardIcon />
          </Button>
          <Button
            variant={stage >= 3 ? 'contained' : 'outlined'}
            color={stage >= 3 ? 'primary' : 'default'}
            className={`${classes.stepButton} ${
              stage >= 3 ? '' : classes.disabledButton
            }`}
            onClick={() => setStage(3)}
          >
            <Typography className={classes.stepNum} variant="h6">
              Stage 3
            </Typography>
            <Typography className={classes.stepTitle} variant="body2">
              Final Offers/Evidence
            </Typography>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.stepArrow}
          >
            <ArrowForwardIcon />
          </Button>
          <Button
            variant={stage >= 4 ? 'contained' : 'outlined'}
            color={stage >= 4 ? 'primary' : 'default'}
            className={`${classes.stepButton} ${
              stage >= 4 ? '' : classes.disabledButton
            }`}
            onClick={() => setStage(4)}
          >
            <Typography className={classes.stepNum} variant="h6">
              Stage 4
            </Typography>
            <Typography className={classes.stepTitle} variant="body2">
              Arbitration
            </Typography>
          </Button>
        </Box>

        {stage === 1 && (
          <Box className={classes.container}>
            <Box className={classes.stageDescription}>
              <Typography variant="h6">Stage 1: Identify the Issues</Typography>
              <List className={classes.stageDescriptionList}>
                <ListItem>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  <ListItemText>
                    Most disputes are results of a simple misunderstanding.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  <ListItemText>
                    Our dispute resolution system is designed to allow both
                    parties to resolve the issue amongst themselves
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  <ListItemText>
                    Most disputes are resolved without arbitration.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  <ListItemText>
                    If an agreement cannot be reached, either party may elect to
                    pay an arbitration fee for our dispute team to resolve the
                    mater.{' '}
                  </ListItemText>
                </ListItem>
              </List>
            </Box>

            <Box className={classes.content}>
              <Box className={classes.disputeFormControl} display="flex">
                <Typography className={classes.disputeFormLabel}>
                  Select type of dispute
                </Typography>
                <Select
                  className={classes.disputeSelect}
                  value={disputeType}
                  variant="outlined"
                  onChange={(event) => setDisputeType(event.target.value)}
                >
                  <MenuItem value={0}>Please select a category</MenuItem>
                  <MenuItem value={1}>type1</MenuItem>
                  <MenuItem value={2}>type2</MenuItem>
                  <MenuItem value={3}>type3</MenuItem>
                </Select>
              </Box>

              <Box className={classes.disputeFormControl} display="flex">
                <Typography className={classes.disputeFormLabel}>
                  Select service to dispute
                </Typography>
                <Select
                  className={classes.disputeSelect}
                  value={disputeService}
                  variant="outlined"
                  onChange={(event) => setDisputeService(event.target.value)}
                >
                  <MenuItem value={0}>Please select a service</MenuItem>
                  <MenuItem value={1}>service1</MenuItem>
                  <MenuItem value={2}>service2</MenuItem>
                  <MenuItem value={3}>service3</MenuItem>
                </Select>
              </Box>

              <Box className={classes.disputeFormControl} display="flex">
                <Typography className={classes.disputeFormLabel}>
                  Select user
                </Typography>
                <Select
                  className={classes.disputeSelect}
                  value={disputeUser}
                  variant="outlined"
                  onChange={(event) => setDisputeUser(event.target.value)}
                >
                  <MenuItem value={0}>Please select a user</MenuItem>
                  <MenuItem value={1}>user1</MenuItem>
                  <MenuItem value={2}>user2</MenuItem>
                  <MenuItem value={3}>user3</MenuItem>
                </Select>
              </Box>

              <Box className={classes.disputeFormControl}>
                <Typography className={classes.disputeFormLabelBlock}>
                  Select the milestone you wish to dispute
                </Typography>
                <List className={classes.milestoneList}>
                  <ListItem className={classes.milestoneListItem}>
                    <Box className={classes.milestoneSelect}>
                      <Checkbox defaultChecked color="default" />
                    </Box>
                    <Typography className={classes.milestonePrice}>
                      $250
                    </Typography>
                    <Typography className={classes.milestoneDescription}>
                      Description
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.milestoneTotalItem}>
                    <Typography className={classes.milestoneSelect}>
                      Total
                    </Typography>
                    <Typography className={classes.milestonePrice}>
                      $250
                    </Typography>
                    <Typography className={classes.milestoneDescription}>
                      will be closed on completion
                    </Typography>
                  </ListItem>
                </List>
              </Box>

              <Box className={classes.disputeFormControl}>
                <Typography className={classes.disputeFormLabelBlock}>
                  Please describe in detail what the requirements were for the
                  milestone(s) you wish to dispute.
                </Typography>
                <TextField
                  className={classes.disputeTextField}
                  multiline
                  variant="outlined"
                  rows={8}
                />
              </Box>

              <Box className={classes.disputeFormControl}>
                <Typography className={classes.disputeFormLabelBlock}>
                  Please describe in detail how these requirements were
                  completed.
                </Typography>
                <TextField
                  className={classes.disputeTextField}
                  multiline
                  variant="outlined"
                  rows={8}
                />
              </Box>

              <Box className={classes.disputeFormControl}>
                <Typography className={classes.disputeFormLabelBlock}>
                  Ensure that you have uploaded evidence for how each milestone
                  requirement was completed. Please include evidence of how the
                  milestone requirements were communicated.
                </Typography>
                <Box className={classes.dropzone}>
                  <DropzoneArea />
                </Box>
              </Box>

              <Box className={classes.finalDisputeBox}>
                <Typography
                  variant="h5"
                  className={classes.finalDisputeBoxTitle}
                >
                  Total amount in dispute: $250 USD
                </Typography>
                <Divider />
                <Typography
                  variant="h6"
                  className={classes.finalDisputeBoxSubtitle}
                >
                  Offer the amount you are prepared to accept:
                </Typography>
                <Box className={classes.disputeAmountBox}>
                  <Typography>$</Typography>
                  <Input
                    className={classes.amountInput}
                    variant="contained"
                    color="secondary"
                    type="number"
                    defaultValue={125}
                    disableUnderline
                  />
                  <Typography variant="body2">
                    Please enter an amount between $0.01 and $250.
                  </Typography>
                </Box>
                <Box className={classes.cautionText}>
                  <Box display="flex">
                    <Typography
                      variant="body2"
                      color="error"
                      className={classes.caution}
                    >
                      Caution!
                    </Typography>
                    <Typography variant="body2">
                      Please ensure this is the amount you would be happy to
                      settle on.
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    You may decrease your offer in the future but you may not
                    raise it.
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                color="primary"
                className={classes.createDisputeButton}
              >
                Create New Dispute
              </Button>
            </Box>
          </Box>
        )}

        {stage === 2 && (
          <Box className={classes.container}>
            <Box className={classes.stageDescription}>
              <Typography variant="h6">Stage 2: Negotiations</Typography>
              <List className={classes.stageDescriptionList}>
                <ListItem>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  <ListItemText>
                    Groom strongly recommends you to communicate clearly
                  </ListItemText>
                </ListItem>
              </List>
            </Box>

            <Box className={classes.negotationContent}>
              <Box className={classes.leftPanel}>
                <Typography variant="h6">Negotation</Typography>
                <Box className={classes.negotationInfo}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src="/assets/images/dispute-avatar.png"
                    alt="avatar"
                  />
                  <Box className={classes.negotationInfoBox}>
                    <Box className={classes.negotationInfoBoxHeader}>
                      <Typography>
                        <strong>Mathew</strong>
                      </Typography>
                      <Typography variant="body2">
                        July 21, 2020 3:06 PM
                      </Typography>
                    </Box>
                    <Divider />
                    <Typography
                      className={classes.negotationInfoBoxBody}
                      variant="body2"
                    >
                      Nothing Provided
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.disputeFormControl}>
                  <Typography className={classes.disputeFormLabelBlock}>
                    Respond to the other party:
                  </Typography>
                  <TextField
                    className={classes.disputeTextField}
                    multiline
                    variant="outlined"
                    rows={8}
                  />
                </Box>

                <Box className={classes.disputeFormControl}>
                  <Typography className={classes.disputeFormLabelBlock}>
                    You may attach documents to support your case:
                  </Typography>
                  <Box className={classes.dropzone}>
                    <DropzoneArea />
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.createDisputeButton}
                >
                  Create New Dispute
                </Button>
              </Box>

              <Box className={classes.rightPanel}>
                <Box className={classes.negotationBox}>
                  <Typography variant="h6" color="primary">
                    3 days, 23 hours{' '}
                  </Typography>
                  <Typography color="primary">
                    for Amit. K to respond
                  </Typography>
                  <Box className={classes.disputeAmount}>
                    <Typography>Total amount disputed:</Typography>
                    <Typography
                      variant="h6"
                      className={classes.disputeAmountValue}
                    >
                      $125
                    </Typography>
                  </Box>

                  <Button
                    variant="text"
                    color="primary"
                    className={classes.showMilestoneButton}
                  >
                    Show milestones
                  </Button>
                  <Box className={classes.disputeInfoBox}>
                    <Typography className={classes.disputeInfoLeft}>
                      Employer (You) wants to pay $0
                    </Typography>
                    <Typography className={classes.disputeInfoRight}>
                      Awaiting response from Amit. K
                    </Typography>
                  </Box>
                  <Box className={classes.dividerBox}>
                    <Box className={classes.dividerLeft} />
                    <Typography>OR</Typography>
                    <Box className={classes.dividerRight} />
                  </Box>
                  <Typography>New offer you wish to pay</Typography>

                  <Box className={classes.disputeAmountInputBox}>
                    <Typography>$</Typography>
                    <Input
                      className={classes.disputeAmountInput}
                      variant="contained"
                      color="secondary"
                      type="number"
                      disableUnderline
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {stage === 3 && (
          <Box className={classes.container}>
            <Box className={classes.stageDescription}>
              <Typography variant="h6">
                Stage 3: Final Offers/Evidence
              </Typography>
              <List className={classes.stageDescriptionList}>
                <ListItem>
                  <FiberManualRecordIcon className={classes.dotIcon} />
                  <ListItemText>
                    Groom strongly recommends you to communicate clearly
                  </ListItemText>
                </ListItem>
              </List>
            </Box>

            <Box className={classes.negotationContent}>
              <Box className={classes.leftPanel}>
                <Typography variant="h6">Negotation</Typography>
                <Box className={classes.negotationInfo}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src="/assets/images/dispute-avatar.png"
                    alt="avatar"
                  />
                  <Box className={classes.negotationInfoBox}>
                    <Box className={classes.negotationInfoBoxHeader}>
                      <Typography>
                        <strong>Mathew</strong>
                      </Typography>
                      <Typography variant="body2">
                        July 21, 2020 3:06 PM
                      </Typography>
                    </Box>
                    <Divider />
                    <Typography
                      className={classes.negotationInfoBoxBody}
                      variant="body2"
                    >
                      Nothing Provided
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.disputeFormControl}>
                  <Typography className={classes.disputeFormLabelBlock}>
                    Respond to the other party:
                  </Typography>
                  <TextField
                    className={classes.disputeTextField}
                    multiline
                    variant="outlined"
                    rows={8}
                  />
                </Box>

                <Box className={classes.disputeFormControl}>
                  <Typography className={classes.disputeFormLabelBlock}>
                    You may attach documents to support your case:
                  </Typography>
                  <Box className={classes.dropzone}>
                    <DropzoneArea />
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.createDisputeButton}
                >
                  Create New Dispute
                </Button>
              </Box>

              <Box className={classes.rightPanel}>
                <Box className={classes.negotationBox}>
                  <Typography variant="h6" color="primary">
                    3 days, 23 hours{' '}
                  </Typography>
                  <Typography color="primary">
                    for Amit. K to respond
                  </Typography>
                  <Box className={classes.disputeAmount}>
                    <Typography>Total amount disputed:</Typography>
                    <Typography
                      variant="h6"
                      className={classes.disputeAmountValue}
                    >
                      $125
                    </Typography>
                  </Box>

                  <Button
                    variant="text"
                    color="primary"
                    className={classes.showMilestoneButton}
                  >
                    Show milestones
                  </Button>
                  <Box className={classes.disputeInfoBox}>
                    <Typography className={classes.disputeInfoLeft}>
                      Employer (You) wants to pay $0
                    </Typography>
                    <Typography className={classes.disputeInfoRight}>
                      Awaiting response from Amit. K
                    </Typography>
                  </Box>
                  <Box className={classes.dividerBox}>
                    <Box className={classes.dividerLeft} />
                    <Typography>OR</Typography>
                    <Box className={classes.dividerRight} />
                  </Box>
                  <Typography>New offer you wish to pay</Typography>

                  <Box className={classes.disputeAmountInputBox}>
                    <Typography>$</Typography>
                    <Input
                      className={classes.disputeAmountInput}
                      variant="contained"
                      color="secondary"
                      type="number"
                      disableUnderline
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submitButton}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        {stage === 4 && (
          <Box className={classes.container}>
            <Box className={classes.stageDescription}>
              <Typography variant="h6">Stage 4: Arbitration</Typography>
              <Box className={classes.warningBox}>
                <WarningIcon color="primary" className={classes.warningIcon} />
                <Typography>
                  The dispute is under Arbitration and our technical team is
                  looking into the evidences provided. We will make a decision
                  and post it here
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default Dispute;
