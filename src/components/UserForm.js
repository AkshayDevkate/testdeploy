import React, { Component } from 'react';
import FirstStep from './FormSteps/FirstStep';
import SecondStep from './FormSteps/SecondStep';
import ThirdStep from './FormSteps/ThirdStep';
import FourthStep from './FormSteps/FourthStep';
import FinalStep from './FormSteps/FinalStep';
/* import Success from './Success'; */

export class UserForm extends Component {
  state = {
    step: 1,
    ptz: '',
    consume: '',
    wallbox: '',
    battery: '',
    meters: '',
    name:'',
    email:'',
    phone:'',
    total: 0,
    message: '',
    sq: 0,
    option: true, 
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

// converting the sq meters area into number of solar modules
sqtopanel = () => {
  const {sq} = this.state;

// calculate solar modules and change state for meters
  this.setState({
    meters: (sq/1.9).toFixed()
  })  
}
      
// calculating final price function
handlenewChange = () => {
  const {meters,battery} = this.state;

      //Calculating the price with battery 
              if (battery == 'Ja')
              {   
              this.setState({
                total :  ((meters * 0.37 ) * 2400 ) 
              })
            }

            //calculating the price without battery 
              if (battery == 'Nein')
                {
    
                this.setState({
                  message: "Please enter value greater than 8"
                })
                
                this.setState({
                  total :  ((meters * 0.37 ) * 1400).toFixed() 
                })
              }

              console.log('i am in function 1 and price ='  )
            };          

    
// for slider
     handleBlur = () => {
      const {meters} = this.state;
      if ( meters < 0) {
        
      } else if (meters > 100) {
     
      }
    };

  render() {
    const { step } = this.state;
    const { ptz, consume, wallbox, battery, meters, total, message, sq, option } = this.state;
    const values = { ptz, consume, wallbox, battery, meters, total, message, sq, option};

    switch (step) {
      case 1:
        return (
          <div className='form'>
          <FirstStep
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 2:
        return (
          <div className='form'>
          <SecondStep
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 3:
        return (
          <div className='form'>
          <ThirdStep
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             handlenewChange={this.handlenewChange}
             sqtopanel={this.sqtopanel}
             values={values}
             meters={meters}
             message={message}
             sq={sq} 
          />
          </div>
        );
      case 4:
        return(
          <div className='form'>
            <FourthStep
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 5:
        return(
          <div className='form'>
            <FinalStep
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          /> 
          </div>
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
