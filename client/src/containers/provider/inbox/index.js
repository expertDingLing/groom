import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BlackP } from '../../../components/styled-components'
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    message: {
      padding: theme.spacing(2),
    },
  });

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "0",
            flag: false
        }
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    Showdetail = () => {
        let index = 0;
        ++ index;
        if (index % 2 === 1){
            this.setState({flag: true})
        }
        else{
            this.setState({flag: false})
        }
        console.log(index)
        return index
    }

    render() {
        const userSettingList = [
            {
                Title: "Reservation code:\n HMSH789J",
            },
            {
                Title: "Call +1(404) 432-899\n Message\n Email",
            },
            {
                Title: "Invite Friends",
            },
            {
                Title: "Change or cancel\n Send or request money",
            },
          ];
        return (
            <div className="decision-refund-container">
                <Paper style={{padding:"30px"}} elevation={0}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <BlackP className="header_title">Reservations</BlackP>
                            <Tabs
                                value={this.state.value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={this.handleChange}
                                aria-label="disabled tabs example"
                            >
                                <Tab label="Upcomming" style={{marginLeft:"-30px"}}/>
                                <Tab label="Completed" />
                                <Tab label="Cancelled" />
                                <Tab label="All" />
                            </Tabs>
                            <Divider />
                            <div style={{display:"flex", width:"90%"}}>
                                <ListItem button>
                                    <ListItemText primary="Status" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Check In" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Check Out" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Booked" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Listing" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Category" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Provider" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Confirmation Code" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Total Payment" />
                                </ListItem>
                            </div>
                            <div style={{display:"flex"}}>
                                <ListItem button>
                                    <ListItemText primary="Check-Out" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="1:00 PM" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="2:00 PM" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="20 Feb, 2020" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="XYZ" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Braids" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Sandra" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="A333jh" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="$25" />
                                </ListItem>
                                <Button variant="outlined" className="detail_btn">Details</Button>
                                <MoreHorizIcon className="more" onClick={this.Showdetail}/>
                                
                            </div>
                            <Divider />
                            {this.state.flag && 
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className="detail_list"
                            >
                            {userSettingList.map((listItem, i) => {
                                return (
                                    <ListItem button key={i}>
                                        <ListItemText primary={listItem.Title} />
                                        <Divider />
                                    </ListItem>
                                    
                                )
                            })}
                        </List>
                        }
                            
                            {/* <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table> */}
                        </Grid>
                    </Grid>
                </Paper>
                
            </div>
        )
    }
}

export default withStyles(styles)(index)
