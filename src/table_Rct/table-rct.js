import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    }, 
  });

let id = 0;
function createData(name,Designation,Experience) {
  id += 1;
  return { id, name,Designation,Experience};
}

const rows = [
  createData('Nisar','Developer',3),
  createData('Sarn', 'Developer',5),
  createData('Shanmugh','Developer',6),
  createData('Suriya', 'Developer',7),
 
];

function Tables(props){
    const{ classes }=props;
    return(
        <Paper className={classes.root}>
            <Table className={classes.table }>
               <TableHead>
                   <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Experience</TableCell>
                </TableRow> 
               </TableHead> 
               <TableBody>
                        {rows.map(row => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.designation}</TableCell>
                        <TableCell align="right">{row.experience}</TableCell>
                        </TableRow>
                      
                    ))}
               </TableBody>
            </Table>
        </Paper>
    )
}
Tables.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Tables);