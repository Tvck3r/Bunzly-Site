import React, { Component } from 'react';


// Material-ui Components
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import QuoteBlock from '../components/QuoteBlock'
import ParallaxBackground from '../components/ParallaxBackground';


const styles = theme => ({
  parallax : {
    backgroundColor: theme.palette.grey[800],
    /* The image used */
    backgroundImage:"url(https://www.w3schools.com/howto/img_parallax.jpg)",
    /* Full height */
    height:"100vh",
    opacity:".65",
    /* Create the parallax scrolling effect */
     backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
  }
});

function Test(props) {
  
  const { classes } = props;

    return ( 
      <React.Fragment>
      <CssBaseline />

      <div className={classes.parallax}>

        </div>
      </React.Fragment>
    )
}    


export default withStyles(styles)(Test);