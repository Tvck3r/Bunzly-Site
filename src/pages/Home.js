import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material-ui Components
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from  '@material-ui/core/Grid';

// Components
import Footer from '../components/Footer'
import Featurette from '../components/Featurette';
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
    backgroundImage:"url(https://images.unsplash.com/photo-1552057465-6e6e645249ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    /* Full height */
    height:"100vh",
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
  layout: {
    width: 'auto',
    paddingTop: `${theme.spacing.unit * 12}px`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up('lg')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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

class Home extends Component {

  componentDidMount() {
   
  }

  handleScrollSelection = event => {
    console.log("scroll was clicked");
    this.scrollToMyRef();
  }

  scrollToMyRef = () => window.scrollTo({
    top: this.myRef.current.offsetTop,
    bottom: this.myRef.current.offsetBottom,
    behavior: 'smooth'
  })

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
                    
          <Paper className={classes.parallax}>
          <div className={classes.plxCenter} >
            <Paper  className={classes.callToAction}>
                <Typography  variant="h2" gutterBottom align="center">
                   
                  <Button onClick={this.handleScrollSelection}>Click to see services!</Button>
                </Typography >              
            </Paper>
          </div>
          
            
          </Paper>
          

          <NavAppBar></NavAppBar>
          <div  ref={this.myRef}></div>
          
     {/*    <NavAppBar/>  */}
        <main className={classes.layout}>
          {/* <Divider/>
          <br/> */}

          <div  className={classes.heroContent}>
          <div  ref={this.myRef}></div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Services
            </Typography>

            {/* <Typography variant="h6" className={classes.strategyDetails} align="center" color="textSecondary" component="p">
              Quickly build an effective pricing table for your potential customers with this layout.
              It&apos;s built with default Material-UI components with little customization.
            </Typography> */}
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
        <Footer/>
      </React.Fragment>
    );

  

  

 
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);