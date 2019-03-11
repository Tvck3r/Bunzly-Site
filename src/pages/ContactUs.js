import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import UserSignup from '../components/UserSignup';
import CraftMessage from '../components/CraftMessage';
import EmailConfirmation from '../components/EmailConfirmation';
import NavAppBar from '../components/NavAppBar';
import Footer from '../components/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';

//https://stackoverflow.com/questions/24147331/react-the-right-way-to-pass-form-element-state-to-sibling-parent-elements


const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[700] }, // Purple and green play nicely together.
    secondary: { main: cyan[700] }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    paddingTop: `${theme.spacing.unit * 8}px`,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
      
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Tell us about yourself', 'Craft message', 'Review and send'];

/* getStepContent(step) {
  switch (step) {
    case 0:
      return <UserSignup 
        changed={this.firstNameChangeHandler}
      />;
    case 1:
      return <CraftMessage />;
    case 2:
      return <EmailConfirmation
                firstName={this.state.firstName} 
                email={this.state.email} 
                message={this.state.message}/>;
    default:
      throw new Error('Unknown step');
  }
} */


class Checkout extends React.Component {

  /* constructor (props) {
    super(props)
    this.
  } */
  state  = {
    activeStep: 0,
    firstName:'tucker',
    lastName:null,
    email:null,
    phoneNumber:null,
    city:null,
    stateProvReg:null,
    message:null,
    data: 'test'
  }
  
  getStepContent(step) {
    switch (step) {
      case 0:
        return <UserSignup 
          firstName={this.state.firstName}
          firstNameChanged={this.firstNameChangeHandler}

          lastName={this.state.lastName}
          lastNameChanged={this.lastNameChangeHandler}

          email={this.state.email}
          emailChanged={this.emailChangeHandler}

          phone={this.state.phone}
          phoneChanged={this.phoneChangeHandler}

          city={this.state.city}
          cityChanged={this.cityChangeHandler}

          region={this.state.region}
          regionChanged={this.regionChangeHandler}

        />;
      case 1:
        return <CraftMessage
          message={this.state.message}
          messageChanged={this.messageChangeHandler}
         />;
      case 2:
        return <EmailConfirmation
                  firstName={this.state.firstName} 
                  email={this.state.email} 
                  message={this.state.message}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  firstNameChangeHandler = (event) => {this.setState({firstName:event.target.value})}
  lastNameChangeHandler = (event) => {this.setState({lastName:event.target.value})}
  emailChangeHandler = (event) => {this.setState({email:event.target.value})}
  phoneChangeHandler = (event) => {this.setState({phone:event.target.value})}
  cityChangeHandler = (event) => {this.setState({city:event.target.value})}
  regionChangeHandler = (event) => {this.setState({region:event.target.value})}
  messageChangeHandler = (event) => {this.setState({message:event.target.value})}  

  

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));

    if(this.state.activeStep === 2){
      alert("Send email message:" 
      + this.state.message + 
      " to:" + this.state.firstName + " " + this.state.lastName + 
      " @:" + this.state.email +
      " #:" + this.state.phone + 
      " @" + this.state.city + ", " + this.state.region)
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  //prebuilt method - calls when rerendering
  componentDidMount(){
    window.scrollTo(0,0);
  }

  
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
     
      <React.Fragment>
        <CssBaseline />
        <NavAppBar/>
        <Button>TEST</Button>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Contact us
            </Typography>

            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>
                  {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your message.
                  </Typography>
                  <Typography variant="subtitle1">
                        A staff member will reach out as soon as possible.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                        color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Send Email' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
        <Footer/>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);

