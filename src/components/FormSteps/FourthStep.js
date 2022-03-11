import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormControl } from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export class FourthStep extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

 

  render() {
    const { values, handleChange } = this.props;
    console.log(values)
    return (
        <>
        <div className="progressBar">
        <ProgressBar>
          <ProgressBar striped variant="success" now={75} key={1} />
         </ProgressBar>
      </div>
      <h1>You system with configuration and price</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Solar Panels</TableCell>
            <TableCell align="center">Roof Size</TableCell>
            <TableCell align="center">Battery</TableCell>
            <TableCell align="center">Postal Code</TableCell>
            <TableCell align="center">Electricity Consumtion</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow
              key={"hola"}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                {values.meters}
              </TableCell>
              <TableCell align="center">{values.sq}</TableCell>
              <TableCell align="center">{values.battery}</TableCell>
              <TableCell align="center">{values.ptz}</TableCell>
              <TableCell align="center">{values.consume}</TableCell>
              <TableCell align="center" style={{color:"#5a875c", fontWeight:"bolder"}}>{values.total}€</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      
            <div className='buttonsForm'>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              style={{background: "#5a875c",color:"white"}}
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </div>
   
      </>
    );
  }
}

export default FourthStep;
