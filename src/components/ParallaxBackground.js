import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
  parallax2 : {
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
});

function ParallaxBackground(props) {
  const { classes } = props;
  return (
    <Paper className={classes.parallax} >
    </Paper>
  );
}

ParallaxBackground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParallaxBackground);