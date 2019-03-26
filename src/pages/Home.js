import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material-ui Components
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Location from '../components/Location';
import ExpandMore from '@material-ui/icons/ExpandMore';

// Components
import Footer from '../components/Footer'
import Featurette from '../components/Featurette';
import Grid from '@material-ui/core/Grid';
import NavAppBar from '../components/NavAppBar';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
     
    },
  },
  parallax : {
    backgroundColor: theme.palette.grey[800],
    /* The image used */
    backgroundImage:"url(https://images.unsplash.com/photo-1548031076-e0f45007f853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)",
    /* Full height */
    height:"20vh",
    opacity:".65",
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
  },
  appBar: {
    position: 'sticky',
  },
  toolbarTitle: {
    flex: 1,
  },
  strategyDetails:{
    paddingTop: `${theme.spacing.unit * 6}px`,
    paddingBottom: `${theme.spacing.unit * 6}px`,
    paddingLeft: `${theme.spacing.unit * 12}px`,
    paddingRight: `${theme.spacing.unit * 12}px`,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  callToAction:{
    //margin: 'auto',
    paddingTop: '20px',
    top: '40%',
    left:'0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',

    position:'absolute',
    width:'500px',
    opacity:'.85',
  },
  plxCenter:{
    width:'100%',
  },
  expandIcon: {
    color: 'black',
    fontSize: 60,
  },
  layout: {
    width: 'auto',
    //padding: `${theme.spacing.unit * 8}px 0`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up('lg')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }, 
  greyBackground:{
    backgroundColor: '#f8f8f8',
  },
  topButton: {
    margin: theme.spacing.unit,
    left: '50vw',
    top: '70vh',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    //opacity:'.68'
  },
  expandIcon: {
    color: '#000000',
    fontSize: 50,
  },
  mainFeaturedPostContent: {
    //padding: `${theme.spacing.unit * 25}px`,
    marginTop: theme.spacing.unit * 48,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,

    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});



class Home extends Component  {

  constructor() {
    super();
    this.goHere = React.createRef();
  }

  componentDidMount(){
    window.scrollTo(0,0);
  } 

 /*  scrollToMyRef = () => window.scrollTo({
    top: this.goHere.current.offsetTop,
    bottom: this.goHere.current.offsetBottom,
    behavior: 'smooth'
  })
  
  handleClick = () => {
    this.scrollToMyRef()
  } */

  


  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDailogClose = () => {
    this.setState({ open: false });
  };

    
  render() {

  const { classes } = this.props;

    return (
      <React.Fragment> 
        <Paper id='backGrnd' className={classes.parallax}>
       {/*    <Button variant="contained" onClick={this.handleClick} className={classes.topButton}>
            <ExpandMore className={classes.expandIcon} />
          </Button> */}
        </Paper>     
        <div className={classes.heroUnit} ref={this.goHere}  >
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Get in touch
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Schedule a FREE software development assessment and learn how we can increase your productivity and reduce risk
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={this.props.handleContactPage}>
                    Contact us
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <main className={classes.greyBackground}  >
        <Typography  className={classes.heroContent} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Methodology
        </Typography>
        <Grid className={classes.layout} container spacing={40} alignItems='center'>
          <Grid item xs={12}  sm ={4}> 
            <Featurette 
                header='Define'
                body='Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
                side='left'
                src='https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'>
            </Featurette>
          </Grid>
          <Grid item xs={12} sm ={4}> 
            <Featurette
              header='Design'
              body='Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
              side='right'
              src='https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1957&q=80'>
            </Featurette>
          </Grid>
          <Grid item xs={12} sm ={4}> 
            <Featurette
              header='Develop'
              body='Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
              side='left'
              src='https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80'>
            </Featurette>
          </Grid>
        </Grid>
        
         
        
        </main> 
        <br/>
        <Typography  className={classes.heroContent} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Location
        </Typography>
        <Location/>
        <br/>
      </React.Fragment>


    );  
}
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
