import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../../assets/scss/components.scss'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#F5F6FA",
      color: "#A3A6B4",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


export class performanceCard extends Component {
    render() {
        const { 
            title, field1, field2, field3, rows
        } = this.props.data;
        return (
            <Paper className="performance-card-container">
                <Typography className="title" component="p">{title}</Typography>
                <TableContainer component={Paper} style={{boxShadow: "none"}}>
                    <Table className="table" aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>{field1}</StyledTableCell>
                                <StyledTableCell align="right">{field2}</StyledTableCell>
                                <StyledTableCell align="right">{field3}</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={i}>
                                <StyledTableCell component="th" scope="row" style={{display: "flex", alignItems: "center"}}>
                                    <img src={row.url} alt="row.row1" style={{width: "40px", paddingRight: "10px"}}/>
                                    {row.row1}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <div className={`${row.row2 !== "Out of Stock" ? "blue-cell": "pink-cell"}`}>
                                        {row.row2}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="right">${row.row3}</StyledTableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </Paper>
        )
    }
}

export default performanceCard
