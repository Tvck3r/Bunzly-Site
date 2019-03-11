import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Components
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';



// Components
import Footer from '../components/Footer'
import { Paper, Typography } from '@material-ui/core';
import ResumeTab from '../components/ResumeTab';

const styles = theme => ({
  layout: {
    width: 'auto',
    paddingTop: `${theme.spacing.unit * 3}px`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    },
  spacing: {
    margin: 20,
  }
});


function Oliver(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Grid container justify="center" alignItems="center">
         <Avatar 
            alt="Oliver Gillette" 
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53165053_10218524568294214_6936573299178602496_n.jpg?_nc_cat=103&_nc_ht=scontent-lga3-1.xx&oh=50b442734313ec90ddad497b6c332e0f&oe=5CDA3B2F"
            className ={classes.bigAvatar}
          />
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography component="h2" variant="h4" >
              Oliver K. Gillette
          </Typography>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography component="h2" variant="h6">
            6512 Springfield Dr. Charlotte NC 28212  ||  843-422-6842  ||  olivergillette@gmail.com
          </Typography>
        </Grid>
        <Grid className={classes.spacing}>
            <ResumeTab />   
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

Oliver.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Oliver);