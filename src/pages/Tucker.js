import React from 'react';
import PropTypes from 'prop-types';


// Material-ui Components
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import Footer from '../components/Footer'


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
});


function Tucker(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          TUCK PAGE
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

Tucker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tucker);