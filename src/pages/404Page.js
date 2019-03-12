import React, { Component } from 'react';
import './404Page.css'
import PropTypes from 'prop-types';

// Material-UI Components
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    paddingTop: `${theme.spacing.unit * 12}px`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  errorlink: {
    font: 14,
    textdecoration: 'none',
    background: '#0046d5',
    display: 'inline-block',
    padding: 30,
    borderradius: 40,
    color: '#fff',
    fontweight: 700,
  },
  bigerror: {
    font: 230,
    margin: 0,
    fontweight: 900,
    position: 'absolute',
    background: 'url("https://assets.saatchiart.com/saatchi/714211/art/2258352/1333561-7.jpg") no-repeat',
    webkittextfillcolor: 'transparent',
    backgroundsize: 'cover',
    backgroundposition: 'center',
  },
});

function Page404 (props) {

    const { classes } = props;

    return ( 
      <div id="error404">
        <div class="error404">
          <div class="bigerror">
            <h1 className={classes.bigerror}>Oops!</h1>
          </div>
          <br></br>
          <h2>404 - Page not found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <a className={classes.errorlink} href="/">GO TO HOMEPAGE</a>
        </div>
      </div>  
    );
}

Page404.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page404);