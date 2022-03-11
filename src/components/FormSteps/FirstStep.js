import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useFormControl } from '@mui/material/FormControl';

export class FirstStep extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
    <>
    <div className="progressBar">
        <ProgressBar>
          <ProgressBar striped variant="success" now={2} key={1} />
         </ProgressBar>
      </div>
        <>
            <AppBar title="Enter your city name or postal code " />
            <TextField
              placeholder="city / postal code"
              label="Plz"
              onChange={handleChange('ptz')}
              defaultValue={values.ptz}
              margin="normal"
              fullWidth
            />
            <br />
            
            <Button
              style={{background: "#5a875c",color:"white"}}
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

        </>
     

 
      </>

    );
  }
}

export default FirstStep;
