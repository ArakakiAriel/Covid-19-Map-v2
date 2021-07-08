import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { commaSeparator } from '../../helpers/commaSeparator';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// const data = {
//     updated_date,
//     total_confirmed,
//     total_actives,
//     total_deaths,
//     total_recovered,
//     percentage_actives,
//     percentage_deaths,
//     percentage_recovered,
//     new_confirmed,
//     new_deaths,
//     new_recovered,
//     grow_factor
// }
export const CountryTable = ({countryData}) => {
  const classes = useStyles();
  console.log("ENTRE AL COUNTRY TABLE");
  console.log(countryData)
  if(!countryData){
    return (<div></div>);
  }else{
    return (
      <TableContainer component={Paper}>
          <Table className={classes.table} size="small"  aria-label="a dense table">
              <TableHead>
              <TableRow>
                <StyledTableCell width="700px">{countryData[0].country}</StyledTableCell>
              </TableRow>
              <TableRow>
                  <StyledTableCell>Updated Date</StyledTableCell>
                  <StyledTableCell align="center">Confirmed</StyledTableCell>
                  <StyledTableCell align="center">Actives</StyledTableCell>
                  <StyledTableCell align="center">Deaths</StyledTableCell>
                  <StyledTableCell align="center">Recovered</StyledTableCell>
                  <StyledTableCell align="center">Percentage Actives</StyledTableCell>
                  <StyledTableCell align="center">Percentage Deaths</StyledTableCell>
                  <StyledTableCell align="center">Percentage Recovered</StyledTableCell>
                  <StyledTableCell align="center">New Confirmed</StyledTableCell>
                  <StyledTableCell align="center">New Deaths</StyledTableCell>
                  <StyledTableCell align="center">New Recovered</StyledTableCell>
                  <StyledTableCell align="center">Growth Factor</StyledTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {countryData.map((day) => (
                  <StyledTableRow key={day.name}>
                  <StyledTableCell component="th" scope="row">
                      {day.updated_date}
                  </StyledTableCell>
                  <StyledTableCell align="center">{commaSeparator(day.total.confirmed)}</StyledTableCell>
                  <StyledTableCell align="center">{commaSeparator(day.total.actives)}</StyledTableCell>
                  <StyledTableCell align="center">{commaSeparator(day.total.deaths)}</StyledTableCell>
                  <StyledTableCell align="center">{commaSeparator(day.total.recovered)}</StyledTableCell>
                  <StyledTableCell align="center">{(day.percentage.actives)}</StyledTableCell>
                  <StyledTableCell align="center">{(day.percentage.deaths)}</StyledTableCell>
                  <StyledTableCell align="center">{(day.percentage.recovered)}</StyledTableCell>
                  <StyledTableCell align="center">{(day.new_confirmed_cases) && commaSeparator(day.new_confirmed_cases)}</StyledTableCell>
                  <StyledTableCell align="center">{(day.new_death_cases) && commaSeparator(day.new_death_cases)}</StyledTableCell>
                  <StyledTableCell align="center">{(day.new_recovered_cases) && commaSeparator(day.new_recovered_cases)}</StyledTableCell>
                  <StyledTableCell align="center">{(day.growth_factor)}</StyledTableCell>
                  </StyledTableRow>
              ))}
              </TableBody>
          </Table>
      </TableContainer>
    )
  }
    
}

