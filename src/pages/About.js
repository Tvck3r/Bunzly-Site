import React from 'react';
import PropTypes from 'prop-types';

import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';

// Material-ui Components
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Zoom from '@material-ui/core/Zoom';

// Components
import NavAppBar from '../components/NavAppBar';
import Footer from '../components/Footer';
import Location from '../components/Location';
import QuoteBlock from '../components/QuoteBlock';
//import Markdown from '../components/Markdown'

//https://www.shopify.com/blog/how-to-write-an-about-us-page


const styles = theme => ({
  layout: {
    width: 'auto',
    paddingTop: `${theme.spacing.unit * 12}px`,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    //backgroundColor: theme.palette.grey[800],
    backgroundImage:"url(https://images.unsplash.com/photo-1545427782-c1ba83cbb692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
    //https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
   
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {

    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  quoteSection:{

  }
  



});


class About extends React.Component {
   //prebuilt method - calls when rerendering
   componentDidMount(){
    window.scrollTo(0,0);
  } 
  
  render() { 
     
    const social = ['GitHub', 'Instagram', 'LinkedIn'];
  
    const transitionDelay = '250';

    const { classes } = this.props;
  
    const featuredPosts = [
      {
        title: 'Tucker',
        pageHandler: this.props.handleTuckPage,
        order: 1,
        picture: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/scooby-shaggy.jpg',
        date: 'Founder/Lead Engineering',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: 'Oliver',
        pageHandler: this.props.handleOliverPage,
        order: 2,
        picture: 'https://pbs.twimg.com/profile_images/815785432248188928/cfYoIt5-_400x400.jpg',
        date: 'Engineering/Design',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
    ];
    
    

    return (
      <React.Fragment>
        <CssBaseline />
      
        <div className={classes.layout}>
        

          <main>
            {/* Main featured post */}
            <Paper className={classes.mainFeaturedPost}>
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      Bunzly.io
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      Multiple lines of text that form the lede, informing new readers quickly and
                      efficiently about what&apos;s most interesting in this post&apos;s contents…
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            {/* End main featured post */}
            {/* Sub featured posts */}
            <Grid container spacing={40} className={classes.cardGrid}>
              {featuredPosts.map(person => (
                <Grid item key={person.title} xs={12} md={6}>
                  <Zoom in={true} style={{ transitionDelay: ((transitionDelay * person.order) + 'ms' ) }}>
                      <Card className={classes.card}>
                          <div className={classes.cardDetails}>
                              <CardContent>
                              <Typography component="h2" variant="h5">
                                  {person.title}
                              </Typography>
                              <Typography variant="subtitle1" color="textSecondary">
                                  {person.date}
                              </Typography>
                              <Typography variant="subtitle1" paragraph>
                                  {person.description}
                              </Typography>
                              <Button onClick={person.pageHandler}>
                                  See more...
                              </Button>
                              </CardContent>
                              </div>
                              <CardMedia
                              className={classes.cardMedia}
                              image={person.picture}
                              title="Image title"
                              />
                          </Card>
                      </Zoom>
                  
                </Grid>
              ))}
            </Grid>
            {/* End sub featured posts */}
            <Grid container spacing={40} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  About Us page story template
                </Typography>
                <Divider />
                <Typography variant="h6" gutterBottom>
                <p>[FOUNDERS] started [COMPANY] because [EXPLAIN PROBLEM IN YOUR INDUSTRY].</p>
                <p>That's why [DESCRIBE JOURNEY TO SOLUTION].</p>
                <p>Along the way, [SHARE MILESTONES AND WINS].</p>
                <p>We want to be [STATE YOUR MISSION GOING FORWARD].</p>
                <p>
                Keep in mind that writing your actual copy in the first person (e.g. I, We) will help build a more personal connection with your audience. 
                Your About Us page is About YOU, so don't shy away from that.
                </p>
                </Typography>
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                <QuoteBlock 
                  quote="Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
                  quotee="Test Guy"
                  company="test company"
                />
                </Paper>            
                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                  Social
                </Typography>
                {social.map(network => (
                  <Button key={network}>{network}</Button>
                ))}
              </Grid>
              {/* End sidebar */}
            </Grid>
          </main>
          
        </div>
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

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
