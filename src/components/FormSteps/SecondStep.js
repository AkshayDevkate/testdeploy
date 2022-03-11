import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormControl } from '@mui/material/FormControl';


export class SecondStep extends Component {
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
    return (
    <>
    <div className="progressBar">
        <ProgressBar>
          <ProgressBar striped variant="success" now={25} key={1} />
         </ProgressBar>
      </div>
      <MuiThemeProvider>
        <>
            <AppBar title="Enter Personal Details" />
            <InputLabel id="demo-simple-select-label">What is your current average annual consumption?</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.consume}
                defaultValue= {"< 4.000 kWh (3-4 Per)"}
                label="Consume"
                onChange={handleChange('consume')}
                
                >
                <MenuItem value={"< 2.500 kWh (1-2 Per)"}>{"< 2.500 kWh (1-2 Per.)"}</MenuItem>
                <MenuItem value={"< 4.000 kWh (3-4 Per)"}>{"< 4.000 kWh (3-4 Per.)"}</MenuItem>
                <MenuItem value={"> 4.000 kWh (> 5 Per)"}>{"> 4.000 kWh (> 5 Per.)"}</MenuItem>
                </Select>
            <br/>
            <InputLabel id="demo-simple-select-label">Should a wall box be installed for your electric vehicle?</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.wallbox}
                defaultValue = {"Brauche ich nicht"}
                label="Wallbox"
                onChange={handleChange('wallbox')}
                
                >
                <MenuItem value={"Ja"}>{"Yes"}</MenuItem>
                <MenuItem value={"Brauche ich nicht"}>{"I do not need that"}</MenuItem>
                <MenuItem value={"Ist schon installiert "}>{"Is already installed"}</MenuItem>
                </Select>
            <br/>
            <InputLabel id="demo-simple-select-label">Would you also like to install battery storage?</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.battery}
                label="Battery"
                onChange={handleChange('battery')}
               
                >
               
                <MenuItem value={"Ja"}>{"Yes"}</MenuItem>
                <MenuItem value={"Nein"}>{"No"}</MenuItem>
                </Select>
            
            <br/>

            <InputLabel id="demo-simple-select-label">How do you want to calculate your solar panels?</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.option}
                label="Option"
                onChange={handleChange('option')}
                required
                >
                <MenuItem value = {true} >{"I know hou many moduls I want"}</MenuItem>
                <MenuItem value={false}>{"I know the m2 of my rooftop"}</MenuItem>
                </Select>
            
            <br/>
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
      </MuiThemeProvider>
      </>
    );
  }
}

export default SecondStep;
