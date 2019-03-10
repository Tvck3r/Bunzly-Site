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
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  reverse: {
    [theme.breakpoints.down('xs')]: {
        backgroundColor: theme.palette.secondary.main,
      },
  },
  image:{
    borderRadius: '6px',
    width:'100%',
 
    //maxHeight:'300px',
    margin:'auto'
  }
  
});

function CenteredGrid(props) {
  const { classes } = props;

  let directionVar = 'row'
  if(props.side === 'right'){
    directionVar = 'row-reverse'
  }



  return (
    <div className={classes.root}>
      <Grid container direction={directionVar} spacing={24} alignItems='center'>
        <Grid item xs={12} sm ={4}>
          <img          
              className={classes.image}
              src={props.src}
              alt="Featurette Img"
          />
        </Grid>
        <Grid item xs={12} sm ={8}>
            <Paper className={classes.paper}> 
              <Typography gutterBottom variant="h4">
                {props.header}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                {props.body}
              </Typography>
            </Paper>
        </Grid>
    </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);