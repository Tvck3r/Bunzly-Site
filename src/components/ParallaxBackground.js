import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  parallax : {
    /* The image used */
    backgroundColor: theme.palette.blue[800],
    //backgroundImage:"url(https://images.unsplash.com/photo-1545427782-c1ba83cbb692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    //backgroundImage:"url(https://www.w3schools.com/howto/img_parallax.jpg)",
    /* Full height */
    height:"100%",
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
});

function CenteredGrid(props) {
  const { classes } = props;


  return (
    <div className={classes.parallax}>

    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);