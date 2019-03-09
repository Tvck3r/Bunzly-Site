import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Footer from './Components/Footer'
import Featurette from './Components/Featurette';
import Parallax from './Components/Parallax';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'sticky',


  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up('lg')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }, 
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  rightbtn: {
    marginRight: 10,
  }
 
});

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
          <Button className={classes.lftbtn}> 
          <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
            Bunzly.io
          </Typography>
          </Button>
          <Button className={classes.rightbtn}>Features</Button>
          <Button className={classes.rightbtn}>Enterprise</Button>
          <Button className={classes.rightbtn}>Support</Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <br/>
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Pricing
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default Material-UI components with little customization.
          </Typography>
        </div>
        <Featurette
          header='Define'
          body='Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
          side='left'
          src='https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'>
        </Featurette>
        <Featurette
          header='Design'
          body='Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
          side='right'
          src='https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80'>
        </Featurette>
        <Featurette
          header='Develop'
          body='Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
          side='left'
          src='https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80'>
        </Featurette>
      </main> 
      <Parallax 
        imgUrl='https://images.unsplash.com/photo-1551294444-20efb855d547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>


      <Footer/>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);