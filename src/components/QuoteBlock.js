import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormatQuote from '@material-ui/icons/FormatQuote';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { checkPropTypes } from 'prop-types';

const styles = theme => ({
    root: {
      color: theme.palette.text.primary,
      padding: theme.spacing.unit * 2,
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 32,
    },
    quotee:{
        paddingLeft:  theme.spacing.unit * 2,
    },
    company:{
        paddingLeft:  theme.spacing.unit * 4,
    }
  });
  

  function QuoteBlock(props) {
    const { classes } = props;
    return(       
        <div className={classes.root}>
            <Typography>
                <FormatQuote className={classes.icon}></FormatQuote>
                {props.quote}
            </Typography>
            <br/>
            <Typography variant="h6" className={classes.quotee} gutterBottom>
                -  {props.quotee}         
            </Typography>
            <Typography className={classes.company}>
                    {props.company}   
            </Typography>

        </div>

  
    );
}

QuoteBlock.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(QuoteBlock);
