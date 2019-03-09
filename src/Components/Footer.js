import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'; //what does this do? 
import PropTypes from 'prop-types'; //what does this do? 



const styles = theme => ({
    footer: {
        marginTop: theme.spacing.unit * 8,
        textAlign:'center',
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
      },
      layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
          width: 900,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      superFooter: {
        width: 'auto',
        textAlign:'center',
        margin: theme.spacing.unit * 4,
      },
});


const Footer = (props) => {

    const { classes } = props;

    const footers = [
        {
          title: 'Company',
          description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
          title: 'Features',
          description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
        },
        {
          title: 'Resources',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
          title: 'Legal',
          description: ['Privacy policy', 'Terms of use'],
        },
      ];


      

      return (
        <footer >
          <div className={classNames(classes.footer, classes.layout)}>
            <Grid container spacing={32} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                {footer.description.map(desc => (
                  <Typography key={desc} variant="subtitle1" color="textSecondary">
                    {desc}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </div>
        
        <div className={classes.superFooter}>
          <Typography variant="subtitle1" color="textSecondary">
          Built by Bunzly team!
          </Typography>
        
        </div>
      </footer>

      );


};


//guess this somehow makes it required that the classes are passed in
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

//where it is passing the styles
export default withStyles(styles)(Footer);