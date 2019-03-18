import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'; //what does this do? 
import PropTypes from 'prop-types'; //what does this do? 

import Button from '@material-ui/core/Button';

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
          pages:[
            {
              title: 'About us',
              pageFunction: props.handleAboutPage,
            },
            {
              title: 'Contact',
              pageFunction: props.handleContactPage,
            },
            {
              title: 'Locations',
              url: './404Page',
            },
          ]
        },
        {
          title: 'Legal',
          pages:[
            {
              title: 'Privacy policy',
              url: './404Page',
            },
            {
              title: 'Terms of use',
              url: './404Page',
            },
          ]
        },
    ];

    


      

      return (
        <footer >
          <div className={classNames(classes.footer, classes.layout)}>
            <Grid container spacing={32} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs key={footer.title}>
                <Typography  variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                {footer.pages.map(page => (
                  <Button 
                    key={page.title} 
                    onClick={page.pageFunction}  
                    >
                    {page.title}
                  </Button>
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