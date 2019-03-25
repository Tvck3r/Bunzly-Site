import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
   

      <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              //className={classes.image}
              image={props.src}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {props.header}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
 

  {/*           <Paper className={classes.paper}> 
              <img          
                  className={classes.image}
                  src={props.src}
                  alt="Featurette Img"
              />
              <Typography gutterBottom variant="h4">
                {props.header}
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                {props.body}
              </Typography>
            </Paper> */}

    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);