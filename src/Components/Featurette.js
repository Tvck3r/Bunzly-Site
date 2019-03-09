import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('xs')]: {
        //backgroundColor: theme.palette.secondary.main
      },
  },
  reverse: {
    [theme.breakpoints.down('xs')]: {
        backgroundColor: theme.palette.secondary.main,
        //direction:'row-reverse',
      },
  },
  
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container  spacing={24}>
        <Grid item xs={12} sm ={3}>
          <Paper className={classes.paper}>img1</Paper>
        </Grid>
        <Grid item xs={12} sm ={9}>
            <Paper className={classes.paper}> 
                <Typography gutterBottom variant="subtitle1">
                    Standard license
                </Typography>
            </Paper>
        </Grid>
    </Grid>
    <Grid container className= {classes.reverse} spacing={24}>
        <Grid item xs={12} sm ={9}>
          <Paper className={classes.paper}>a bunch of text</Paper>
        </Grid>
        <Grid item xs={12} sm ={3}>
          <Paper className={classes.paper}>img1</Paper>
        </Grid>
    </Grid>    
    <Grid container  spacing={24}>
        <Grid item xs={12} sm ={3}>
          <Paper className={classes.paper}>img1</Paper>
        </Grid>
        <Grid item xs={12} sm ={9}>
          <Paper className={classes.paper}>a bunch of text</Paper>
        </Grid>

      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);