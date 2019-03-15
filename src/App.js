
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import Paper from '@material-ui/core/Paper';
import Home from './pages/Home';
import NavAppBar from './components/NavAppBar';
import ContactUs from './pages/ContactUs';
import About from './pages/About'
import Tucker from './pages/Tucker';
import Oliver from './pages/Oliver';
import Footer from './components/Footer';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';
import NavAppBarPlaceholder from './components/NavAppBarPlaceholder';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[700] }, // Purple and green play nicely together.
    secondary: { main: cyan[700] }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }, //??
});

const styles = theme => ({
  parallax : {
    backgroundColor: theme.palette.grey[800],

    /* The image used */
    backgroundImage:"url(https://images.unsplash.com/photo-1552057465-6e6e645249ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    /* Full height */
    height:"100vh",
    opacity:".65",
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
  },
  appBarPlaceHolder : {
    backgroundColor: theme.palette.grey[800],
  }
});

class App extends Component {

  constructor() {
    super()
    this.state = {
      pageId: 0
      ,plxHeight: 0
     
      ,appBarState:'static'
    }
}





getPage(pageId) {
  switch (pageId) {
    case 0:
      return <Home/>;
    case 1:
      return <ContactUs/>;
    case 2:
      return <About 
      handleTuckPage = {this.handleTuckPage}
      handleOliverPage = {this.handleOliverPage}
      />;
      case 3:
        return <Tucker />;
      case 4:
        return <Oliver />;
    default:
      throw new Error('Unknown step');
  }
}

handleHomePage = () => {
  this.setState({
    pageId: 0,
  });
};

handleContactPage = () => {
  this.setState({
    pageId: 1,
  });
};

handleAboutPage = () => {
  this.setState({
    pageId: 2,
  });
};

handleTuckPage = () => {
  this.setState({
    pageId: 3,
  });
};

handleOliverPage = () => {
  this.setState({
    pageId: 4,
  });
};


  componentDidMount() {
    window.scrollTo(0,0);
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ plxHeight: document.getElementById('backGrnd').clientHeight});
  
  }

  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  logState = () =>{
    console.log(this.state)
  }
  
  handleScroll = () => {
   
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop
  
    if(winScroll >= this.state.plxHeight){
      this.setState({appBarState:'fixed'})
      //console.log('Sticky!')
    }
    else {
      this.setState({appBarState:'static'})
    }
  

   }

   getAppBarDiv() {
      if(this.state.appBarState === "fixed"){
        return <NavAppBarPlaceholder/>
      }
      else 
        return <div/>;
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className="App">       
      
        <NavAppBar appBarState={this.state.appBarState}/>
        <Paper id='backGrnd' className={classes.parallax}></Paper>
        {this.getAppBarDiv()}
        {this.getPage(this.state.pageId)}
        <Paper id='backGrnd' className={classes.parallax}></Paper>
        <Footer 
        handleHomePage={this.handleHomePage} 
        handleContactPage={this.handleContactPage} 
        handleAboutPage={this.handleAboutPage} 
        />
      </div>

    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

