import React from 'react';
import PropTypes from 'prop-types';

// Material-ui Components
import { withStyles } from '@material-ui/core/styles';

// Components

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


class BlankTemplate extends React.Component {
 
    
    render() { 

        const { classes } = this.props;

        return (
            <React.Fragment>

            </React.Fragment>
        );  
    }
}


BlankTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlankTemplate);



