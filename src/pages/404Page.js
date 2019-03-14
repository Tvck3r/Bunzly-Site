import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material-UI Components
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    backgroundColor: '#dee4e7',
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
    fontSize: '14px',
    textDecoration: 'none',
    background: '#0046d5',
    display: 'inline-block',
    padding: '15px 30px',
    borderRadius: '40px',
    color: '#fff',
    fontWeight: 700,
    WebkitBoxShadow: '0px 4px 15px -5px #0046d5',
    boxShadow: '0px 4px 15px -5px #0046d5',
  },
  error404Id: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  error404: {
    maxWidth: '410px',
    width: '100%',
  },
  bigError: {
    height: '280px',
    position: 'relative',
    zIndex: '-1',
  },
  bigErrorH1: {
    fontSize: '230px',
    margin: '0px',
    fontwWight: 900,
    position: 'absolute',
    left: '50%',
    webkitTransform: 'translate(-50%)',
    msTransform: 'translate(-50%)',
    transform: 'translate(-50%)',
    background: 'url("https://assets.saatchiart.com/saatchi/714211/art/2258352/1333561-7.jpg") no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});

function Page404 (props) {

    const { classes } = props;

    return ( 
      <div className={classes.error404Id}>
        <div className={classes.error404}>
          <div className={classes.bigError}>
            <h1 className={classes.bigErrorH1}>Oops!</h1>
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