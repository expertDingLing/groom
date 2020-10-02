import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, fade } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SettingsIcon from '@material-ui/icons/Settings';
import { Divider } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '270px',
      padding: '10px 50px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);
const styles = (theme) => ({
    container: {
        backgroundColor: '#fafafa',
        padding: 50,
    },
    content: {
        backgroundColor: 'white',
        height: 800,
        padding: 50,
        display: 'flex'
    },
    title: {
        fontSize: 20,
        fontWeight: 600
    },
    left_content: {
        borderRightColor: '#c2c2c2',
        borderRightWidth: 2,
        border: 'ridge',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none'
    },
    search: {
        marginLeft: -355,
        position: 'absolute',
        marginTop: 25,
        color: '#c2c2c2'
    },
    margin: {
        marginTop: 15
    },
    avatar: {
        marginTop: 40,
        display: 'flex'
    },
    header_detail: {
        fontSize: 20
    },
    detail: {
        color: '#299494'
    },
    avatar_detail: {
        marginLeft: 20
    },
    today: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        height: 30,
        width: 50,
        outline: 'none',
        borderRadius: 3
    },
    header: {
        display: 'flex'
    },
    back: {
        outline: 'auto',
        width: 15,
        padding: '0px 10px',
        marginLeft: 20,
        height: 30,
        color: '#c2c2c2'
    },
    header_content: {
        marginLeft: 20
    },
    day: {
        height: 30,
        marginLeft: 'auto',
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        outline: 'none',
        borderRight: 'none'
    },
    week: {
        backgroundColor: '#c2c2c2',
        borderRight: 'none',
        outline: 'none',
        borderLeft: 'none',
        borderColor: '#c2c2c2'
    },
    days: {
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        borderLeft: 'none',
        borderRight: 'none',
        outline: 'none'
    },
    agenda: {
        borderLeft: 'none',
        borderColor: '#c2c2c2',
        outline: 'none',
        backgroundColor: 'white '
    },
    select: {
        height: 30,
        width: 70,
        backgroundColor: 'white',
        marginLeft: 20,
        borderColor: '#c2c2c2',
        outline: 'none',
        borderRadius: 3,
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    select1: {
        height: 30,
        width: 70,
        backgroundColor: 'white',
        marginLeft: 20,
        borderColor: '#c2c2c2',
        outline: 'none',
        borderRadius: 3,
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    setting: {
        position: 'absolute',
        marginLeft: 720,
        marginTop: 5, 
        height: 20
    },
    list_header: {
        marginTop: 20,
        display: 'flex'
    },
    select2: {
        height: 30,
        width: 150,
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#c2c2c2',
        outline: 'none',
        borderRadius: 3,
        '&:focus': {
            borderColor: '#c2c2c2',
            outline: 'none'
        }
    },
    table_bordered: {
        width: '100%',
        marginTop: 50,
        borderWidth: 1,
        borderStyle: 'inset',
    },
    divider: {
        width: '105%',
        marginTop: 10
    },
    table_cell: {
        borderRightColor: '#c2c2c2',
        borderRightWidth: 2,
        border: 'ridge',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
    },
    table_content: {
        borderRightColor: '#c2c2c2',
        borderRightWidth: 2,
        border: 'ridge',
        borderTopColor: '#c2c2c2',
        borderLeft: 'none',
        borderBottomColor: '#c2c2c2',
    },
    arrow: {
        display: 'flex'
    },
    back1: {
        color: '#299494',
        height: 20
    },
    forward: {
        height: 20,
        color: '#299494',
        marginLeft: 'auto',
        marginRight: -35
    },
    day_table: {
        width: '200%'
    },
    table_header: {
        justifyContent: 'space-between',
        width: '21%',
        display: 'flex'
    },
    header_table1: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%'
    },
    body1: {
        marginLeft: -6
    },
    body2: {
        marginLeft: -6
    },
    body3: {
        marginLeft: -9
    },
    body4: {
        marginLeft: -10,
        border: 'ridge',
        borderLeft: 'none',
        borderBottom: 'none',
        borderTop: 'none',
        borderRightColor: '#c2c2c2'
    },
    body5: {
        marginLeft: 5
    },
    body6: {
        marginLeft: 10
    },
    body7: {
        marginLeft: -3
    },
    body8: {
        marginLeft: -23
    },
    februrary: {
        width: '449%',
        border: 'ridge',
        borderLeft: 'none',
        borderBottom: 'none',
        borderTop: 'none',
        borderRightColor: '#c2c2c2'
    },
    march: {
        width: '200%',
        border: 'none'
    },
    saturday: {
        border: 'ridge',
        borderLeft: 'none',
        borderBottom: 'none',
        borderTop: 'none',
        borderRightColor: '#c2c2c2'
    },
    sunday: {
        marginLeft: -25
    },
    arrow1: {
        height: 20,
        display: 'flex',
        backgroundColor: '#c2c2c2',
        width: '53%'
    },
    back2: {
        height: 20
    },
    forward2: {
        height: 20,
        marginLeft: 'auto'
    },
    tablebody1: {
        marginLeft: -6,
        border: 'ridge',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRightColor: '#c2c2c2',
        borderWidth: 1
    },
    tablebody2: {
        marginLeft: -15,
        border: 'ridge',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRightColor: '#c2c2c2',
        borderWidth: 1
    },
    divide: {
        width: '53%'
    },
    tablebody: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%'
    },
    table_body: {
        border: 'ridge',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRightColor: '#c2c2c2',
        borderWidth: 1
    }
})

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formState: 'week'
        }
    }
    render() {
        const { classes } = this.props;
        const {formState} = this.state;
        return (
            <div className={classes.container}>
                <Grid className={classes.content}>
                    <Grid item lg={4} className={classes.left_content}>
                        <Typography className={classes.title}>9 listings</Typography>
                        <FormControl className={classes.margin}>
                            <BootstrapInput defaultValue="Search by listing name" id="bootstrap-input"  className={classes.input}/>
                        </FormControl>
                        <SearchIcon className={classes.search} />
                        <div className={classes.avatar}>
                            <img src={'/assets/images/calendar.png'} alt='' className={classes.image}></img>
                            <div className={classes.avatar_detail}>
                                <Typography className={classes.header_detail}>Hair cut</Typography>
                                <Typography className={classes.detail}>Add internal name</Typography>
                            </div>
                        </div>
                        <div className={classes.avatar}>
                            <img src={'/assets/images/calendar.png'} alt='' className={classes.image}></img>
                            <div className={classes.avatar_detail}>
                                <Typography className={classes.header_detail}>Hair cut</Typography>
                                <Typography className={classes.detail}>Add internal name</Typography>
                            </div>
                        </div>
                    </Grid>
                    {formState === 'week' && (
                    <Grid item lg={8}>
                        <div className={classes.header}>
                            <button className={classes.today}>Today</button>
                            <ArrowBackIosIcon className={classes.back} />
                            <ArrowForwardIosIcon className={classes.back} />
                            <Typography className={classes.header_content}>Aug 27-Sep 2, 2017</Typography>
                            <button className={classes.day} onClick={()=>this.setState({formState: "day"})}>Day</button>
                            <button className={classes.week}>Week</button>
                            <button className={classes.days}>4 Days</button>
                            <button className={classes.agenda}>Agenda</button>
                            <select
                                className={classes.select}
                                value={this.state.keyStatus}
                                name="keyStatus"
                                onChange={this.handleChangeInput}
                            >
                            <option className={classes.select_value} value="0">More</option>
                            </select>
                            <select
                                className={classes.select1}
                                value={this.state.keyStatus}
                                name="keyStatus"
                                onChange={this.handleChangeInput}
                            >
                            <option className={classes.select_value} value="0"></option>
                            </select>
                            <SettingsIcon className={classes.setting}/>
                        </div>
                        <table class={classes.table_bordered}>
                            <th className={classes.table_cell}></th>
                            <th className={classes.table_cell}>Sun 8/27</th>
                            <th className={classes.table_cell}>Mon 8/28</th>
                            <th className={classes.table_cell}>Tue 8/29</th>
                            <th className={classes.table_cell}>Wed 8/30</th>
                            <th className={classes.table_cell}>Thu 8/31</th>
                            <th className={classes.table_cell}>Fri 9/1</th>
                            <th>Sat 9/2</th>
                            <tr>
                                <td className={classes.table_content}>8 am</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                            <tr>
                            <td className={classes.table_content}>9 am</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                           
                            <tr>
                            <td className={classes.table_content}>10 am</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                            
                            <tr>
                            <td className={classes.table_content}>11 am</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                            
                            <tr>
                            <td className={classes.table_content}>1 pm</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                            
                            <tr>
                            <td className={classes.table_content}>2 pm</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                            
                            <tr>
                            <td className={classes.table_content}>3 pm</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                            
                            <tr>
                            <td className={classes.table_content}>4 pm</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                            
                            <tr>
                            <td className={classes.table_content}>5 pm</td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                                <td className={classes.table_content}></td>
                            </tr>
                        </table>
                    </Grid>)}
                    {(formState === 'day' && 
                        <Grid item lg={8}>
                            <div className={classes.list_header}>
                                <select
                                    className={classes.select2}
                                    value={this.state.keyStatus}
                                    name="keyStatus"
                                    onChange={this.handleChangeInput}
                                >
                                <option className={classes.select_value} value="0">Februrary 2020</option>
                                </select>
                                <button className={classes.today}>Today</button>
                            </div>
                            <Divider className={classes.divider}/>
                            <div className={classes.arrow}>
                                <ArrowBackIosIcon className={classes.back1}/>
                                <ArrowForwardIosIcon className={classes.forward} />
                            </div>
                            <table className={classes.day_table}>
                                <tr className={classes.table_header}>
                                    <th className={classes.februrary}>Februrary 2020</th>
                                    <th className={classes.march}>March 2020</th>
                                </tr>
                                <tr className={classes.header_table1}>
                                    <th>Tu</th>
                                    <th>We</th>
                                    <th>Th</th>
                                    <th>Fr</th>
                                    <th className={classes.saturday}>Sa</th>
                                    <th className={classes.sunday}>Su</th>
                                    <th>Mo</th>
                                    <th>Tu</th>
                                    <th>We</th>
                                    <th>Th</th>
                                    <th>Fr</th>
                                    <th>Sa</th>
                                    <th>Su</th>
                                    <th>Mo</th>
                                    <th>Tu</th>
                                    <th>We</th>
                                </tr>
                                <tr className={classes.header_table1}>
                                    <th>25</th>
                                    <th className={classes.body1}>26</th>
                                    <th className={classes.body2}>27</th>
                                    <th className={classes.body3}>28</th>
                                    <th className={classes.body4}>29</th>
                                    <th className={classes.body8}>1</th>
                                    <th>2</th>
                                    <th className={classes.body5}>3</th>
                                    <th className={classes.body6}>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th className={classes.body7}>10</th>
                                    <th>11</th>
                                </tr>
                                <div className={classes.arrow1}>
                                    <ArrowBackIosIcon className={classes.back2}/>
                                    <ArrowForwardIosIcon className={classes.forward2}/>
                                </div>
                                <tr className={classes.tablebody}>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.tablebody1}>$35</td>
                                    <td className={classes.tablebody2}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                </tr>
                                <Divider className={classes.divide} />
                                <tr className={classes.tablebody}>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.tablebody1}>$35</td>
                                    <td className={classes.tablebody2}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                    <td className={classes.table_body}>$35</td>
                                </tr>
                                <Divider className={classes.divide} />
                            </table>
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(index)