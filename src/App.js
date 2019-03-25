
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Home from './pages/Home';
import NavAppBar from './components/NavAppBar';
import ContactUs from './pages/ContactUs';
import About from './pages/About'
import Tucker from './pages/Tucker';
import Oliver from './pages/Oliver';
import Location from './components/Location';
import Footer from './components/Footer';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';
import NavAppBarPlaceholder from './components/NavAppBarPlaceholder';
import { Typography } from '@material-ui/core';

require('dotenv').config()

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
    backgroundImage:"url(https://images.unsplash.com/photo-1548679847-1d4ff48016c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80)",
    /* Full height */
    height:"100vh",
    opacity:".75",
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
  },
  appBarPlaceHolder : {
    backgroundColor: theme.palette.grey[800],
  },
  topButton: {
    backgroundColor: 'transparent',
    margin: theme.spacing.unit,
    left: '50vw',
    top: '80vh',
    boxShadow: 'none',
  },
  expandIcon: {
    color: 'black',
    fontSize: 60,
  },
});

const gMapCoords = {
  center: {
    lat: 35.2298704,
    lng: -80.8405378
  },
  zoom: 10
};

class App extends Component {

  constructor() {
    super()
    this.state = {
      pageId: 0,
      plxHeight: 0,
      appBarState:'static',
      pageId: 0,
      plxHeight: 0,
      logoMultiplyer: 1,
      logoSize: 30,
      appBarTransparency:'transparent',
      appBarShadow:'none',
      appBarState:'static'
    }
}

getPage(pageId) {
  if(pageId === 0 ) {
    return <Home />;
  }
  else if(pageId === 1 ) {
    return <ContactUs/>;
  }
  else if(pageId === 2 ) {
    return <About 
    handleTuckPage = {this.handleTuckPage}
    handleOliverPage = {this.handleOliverPage}
    />;
  }
  else if(pageId === 3 ) {
    return <Tucker />;
  }
  else if(pageId === 4 ) {
    return <Oliver />;
  }
  else {
    throw new Error('Unknown step');
  }
}

handleHomePage = () => {
  this.setState({
    pageId: 0,
    logoMultiplyer: 1,
    appBarTransparency:'transparent',
    appBarShadow:'none',
    appBarState:'static'
  });
};

handleContactPage = () => {
  this.setState({
    pageId: 1,
    logoMultiplyer: 0,
  });
};

handleAboutPage = () => {
  this.setState({
    pageId: 2,
    logoMultiplyer: 0,
  });
};

handleTuckPage = () => {
  this.setState({
    pageId: 3,
    logoMultiplyer: 0,
  });
};

handleOliverPage = () => {
  this.setState({
    pageId: 4,
    logoMultiplyer: 0,
  });
};


  componentDidMount() {
    window.scrollTo(0,0);
    window.addEventListener('scroll', this.handleScroll);
  }

  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  logState = () =>{
    console.log(this.state)
  }
  
  handleScroll = () => {
    if(this.state.pageId === 0) {
      const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
      this.setState({ plxHeight: document.getElementById('backGrnd').clientHeight}); 
      if(winScroll >= this.state.plxHeight){
        this.setState({appBarState:'fixed'})
        this.setState({appBarTransparency:'white'})
        //this.setState({appBarShadow:null})

        //console.log('Sticky!')
      }
      else {
        this.setState({logoMultiplyer:(this.state.plxHeight - winScroll)/this.state.plxHeight})
        this.setState({appBarState:'static'})
        this.setState({appBarTransparency:'transparent'})
        this.setState({appBarShadow:'none'})
      }
    }
    else {
      this.setState({appBarState:'fixed'})
      this.setState({appBarTransparency:'white'})
    }
  

   }

   getAppBarDiv() {
      if(this.state.appBarState === "fixed"){
        return <NavAppBarPlaceholder/>
      }
      else 
        return <div/>
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className="App">    
       
        {this.getPage(this.state.pageId)}
        
        <NavAppBar 
          appBarState={this.state.appBarState} 
          logoSize={this.state.logoSize + (this.state.logoSize * this.state.logoMultiplyer)}
          appBarTransparency={this.state.appBarTransparency}
          appBarShadow={this.state.appBarShadow}
          handleHomePage={this.handleHomePage}
          handleAboutPage={this.handleAboutPage}
          handleContactPage={this.handleContactPage}
        />
        <div ref={this.goHere} className='locator'></div>
      
       
        <Location center={gMapCoords.center} zoom={gMapCoords.zoom}/>
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

