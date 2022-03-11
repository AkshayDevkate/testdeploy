import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ProgressBar } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useFormControl } from '@mui/material/FormControl';

const Input = styled(MuiInput)`
  width: 42px;
`;

export class ThirdStep extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  new1 = e => {
    e.preventDefault();
    this.props.handlenewChange();  
  //  this.total = this.meters * 3.7 * 2400;
    console.log('The Price With Battery '+ this.state.total + "euros")
  };

  sqtopanel1 = e =>{
    e.preventDefault();
    this.props.sqtopanel();
  }

  render() {
    const { values, handleChange } = this.props;
    
    if (values.option){
    return (
        <>
        <div className="progressBar">
        <ProgressBar>
          <ProgressBar striped variant="success" now={50} key={1} />
        </ProgressBar>
        </div>
      <MuiThemeProvider>
        <>
            <AppBar title="Enter th m2 of your rooftop" />
{/* Calculations when we know solar modules */}

<Box>
<h1> Customer knows how many solar moduls </h1>
          {/* Providing Number of solar modules in text field */}
            <TextField
              placeholder="Enter m2"
              label="Square meters"
              onChange={handleChange('meters')}
              defaultValue={values.meters}
              margin="normal"
              fullWidth
            />

            {/* Slider for updating no of solar panels */}
         
          <Typography id="input-slider" gutterBottom>
                              Adjust solar panels you need to install 
                            </Typography>
                            <Grid container spacing={2} alignItems="center">
                              
                              <Grid item xs>
                                <Slider
                                  valueLabelDisplay="auto"
                                  value={ values.meters}
                                  onChange={handleChange('meters')}
                                  aria-labelledby="input-slider"
                                  color="success"
                                />
                              </Grid>
                              <Grid item>
                                <Input
                                  value={values.meters}
                                  size="small"
                                  onChange={handleChange('meters')}
                                
                                  inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                  }}
                                />
                              </Grid>
                            </Grid>
                         

          {/* Error Message  */}                
          <p> { values.message }</p>           

          {/* Button for calculating the price of solar panels  */}           
          
          <Button
           style={{background: "white",color:"#5a875c", fontWeight:"bolder", borderColor:"5a875c"}}
           variant="outlined"
           onClick={this.new1}
         >calculate1</Button>             
             
          {/* Displayong the final price  */}  
          <p>{values.total} euros</p>  
          </Box>  

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
      )
    }else{
      return(
        <>
        <div className="progressBar">
        <ProgressBar>
          <ProgressBar striped variant="success" now={50} key={1} />
         </ProgressBar>
        </div>
      <MuiThemeProvider>
        <>
{/* Calculating the price when we know the roof size */}
<Box>
<h1>Customer knows the roof size</h1>

      {/* Providing Number of solar modules in text field */}
      <TextField
         placeholder="Enter Size of roof"
         label="Enter size of rood in sq meters"
         onChange={handleChange('sq')}
         defaultValue={values.sq}
         margin="normal"
         fullWidth
       />                                                                 

                {/* Slider for updating no of solar panels */}
               
                <Typography id="input-slider" gutterBottom>
                Adjust solar panels you need to install 
                                  </Typography>
                                  <Grid container spacing={2} alignItems="center">
                                    
                                    <Grid item xs>
                                      <Slider
                                       valueLabelDisplay="auto"
                                        value={ values.meters}
                                        onChange={handleChange('meters')}
                                        aria-labelledby="input-slider"
                                        color="success"
                                      />
                                    </Grid>
                                    <Grid item>
                                      <Input
                                        value={values.meters}
                                        size="small"
                                        onChange={handleChange('meters')}
                                      
                                        inputProps={{
                                          step: 10,
                                          min: 0,
                                          max: 100,
                                          type: 'number',
                                          'aria-labelledby': 'input-slider',
                                        }}
                                      />
                                    </Grid>
                                  </Grid>
                                                                                     

                {/* Error Message  */}                
                <p> { values.message }</p>


                {/* Button for knowing how many solar panels approx are required for the given roof size  */}             
                <Button
                 style={{background: "white",color:"#5a875c", fontWeight:"bolder", borderColor:"5a875c"}}
                 variant="outlined"
                 onClick={this.sqtopanel1}
               >Panels required</Button>

               <p>your roof of size {values.sq} will require {values.meters} panels</p>
                              
                {/* Button for calculating the price of solar panels  */}           
                <Button
                  style={{background: "white",color:"#5a875c", fontWeight:"bolder", borderColor:"5a875c"}}
                  variant="outlined"
                  onClick={this.new1}
                >calculate Price</Button>                          

                {/* Displayong the final price  */}  
                <p>{values.total} euros</p>
                </Box>  
               
{/* buttons to take us on previous or next page  */}             
            <br />
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
}

export default ThirdStep;