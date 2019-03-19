import React, { Component } from 'react';


// Material-ui Components
import { withStyles } from '@material-ui/core/styles';


// Components



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
});

class Users extends React.Component {

  componentDidMount(){
   window.scrollTo(0,0);
 } 
 
 render() { 
     
  const { classes } = this.props;

  return (
      <React.Fragment>
        <div className={classes.layout}>

        </div>
      </React.Fragment>
  );  
}
}   

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);

