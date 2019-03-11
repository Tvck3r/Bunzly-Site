import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Components
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

// Components
import NavAppBar from '../components/NavAppBar';
import Footer from '../components/Footer'
import { Paper, Typography } from '@material-ui/core';

const styles = theme => ({
    layout: {
        width: 'auto',
        paddingTop: `${theme.spacing.unit * 3}px`,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
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
});

const featuredPosts = [
    {
      title: 'Achievments',
      order: 1,
      picture: '',
      date: 'here they are',
      description:
        '',
    },
    {
      title: 'Oliver',
      order: 2,
      picture: 'https://pbs.twimg.com/profile_images/815785432248188928/cfYoIt5-_400x400.jpg',
      date: 'Engineering/Design',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ];

function Oliver(props) {
    const transitionDelay = '250';
    const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Grid container justify="center" alignItems="center">
         <Avatar 
            alt="Oliver Gillette" 
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53165053_10218524568294214_6936573299178602496_n.jpg?_nc_cat=103&_nc_ht=scontent-lga3-1.xx&oh=50b442734313ec90ddad497b6c332e0f&oe=5CDA3B2F"
            className ={classes.bigAvatar}
          />
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography component="h2" variant="h4" >
              Oliver K. Gillette
          </Typography>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography component="h2" variant="h6">
            6512 Springfield Dr. Charlotte NC 28212  ||  843-422-6842  ||  olivergillette@gmail.com
          </Typography>
        </Grid>
        <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(person => (
              <Grid item key={person.title} xs={12} md={12}>
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

      </div>
      <Footer />
    </React.Fragment>
  );
}

Oliver.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Oliver);