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
import Divider from '@material-ui/core/Divider';



// Components
import Footer from '../components/Footer'
import { Paper, Typography } from '@material-ui/core';
import ResumeTab from '../components/ResumeTab';

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
      list: {

      },
      date: {
        float: 'right',
        marginLeft: 'auto', 
        marginRight: 0,
        marginBottom: 10,
      },

  spacing: {
    margin: 20,
  }

});

const resTop = [
    {
        title: 'Achievments:',
        order: 1,
        date: '',
        description: [
          'Mr. Robot is an American drama thriller television series created by Sam Esmail.',
          'It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker who has social anxiety disorder and clinical depression.',
          'Elliot is recruited by an insurrectionary anarchist known as "Mr. Robot", played by Christian Slater, to join a group of hacktivists called "fsociety".',
        ],
      },
  
      {
        title: 'Tech Stack:',
        order: 2,
        date: '',
        description: [
          'Mr. Robot is an American drama thriller television series created by Sam Esmail.',
          'It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker who has social anxiety disorder and clinical depression.',
          'Elliot is recruited by an insurrectionary anarchist known as "Mr. Robot", played by Christian Slater, to join a group of hacktivists called "fsociety".',
        ],
      },
];

const education = [
    {
    title: 'Education:',
    school: '​​University of North Carolina – Wilmington',
    gpa: '4.0',
    extra1: 'Cameron School of Business – Bachelor of Science – International Business',
    extra2: 'UNCW Honors program',
    },
];

const jobListings = [
    {
        title: 'Company Name 1',
        order: 2,
        location: 'HackerVille, NY',
        date: 'May 2018 - Present',
        description: [
            'Mr. Robot is an American drama thriller television series created by Sam Esmail.',
            'It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker who has social anxiety disorder and clinical depression.',
            'Elliot is recruited by an insurrectionary anarchist known as "Mr. Robot", played by Christian Slater, to join a group of hacktivists called "fsociety".',
          ],
      },

      {
        title: 'Company Name 2',
        order: 2,
        location: 'HackerVille, NY',
        date: 'June 2017 - May 2018',
        description: [
            'Mr. Robot is an American drama thriller television series created by Sam Esmail.',
            'It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker who has social anxiety disorder and clinical depression.',
            'Elliot is recruited by an insurrectionary anarchist known as "Mr. Robot", played by Christian Slater, to join a group of hacktivists called "fsociety".',
          ],
      },

      {
        title: 'Company Name 3',
        order: 2,
        location: 'HackerVille, NY',
        date: 'May 2016 - June 2017',
        description: [
            'Mr. Robot is an American drama thriller television series created by Sam Esmail.',
            'It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker who has social anxiety disorder and clinical depression.',
            'Elliot is recruited by an insurrectionary anarchist known as "Mr. Robot", played by Christian Slater, to join a group of hacktivists called "fsociety".',
          ],
      },

      {
        title: 'Company Name 4',
        order: 2,
        location: 'HackerVille, NY',
        date: 'May 2015 - May 2016',
        description: [
            'Mr. Robot is an American drama thriller television series created by Sam Esmail.',
            'It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker who has social anxiety disorder and clinical depression.',
            'Elliot is recruited by an insurrectionary anarchist known as "Mr. Robot", played by Christian Slater, to join a group of hacktivists called "fsociety".',
          ],
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
            src="data:image/jpeg;base64,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"
            className ={classes.bigAvatar}
          />
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography component="h2" variant="h4" >
              Elliot Alderson
          </Typography>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <Typography component="h2" variant="h6">
            1234 MrRobot Dr. HackerVille, NY 10101  ||  062-420-1532  ||  olivergillette@gmail.com
          </Typography>
        </Grid>

        <Divider />
        <Grid container spacing={40} className={classes.cardGrid}>
            {jobListings.map(person => (
              <Grid item key={person.title} xs={12} md={12}>
                <Zoom in={true} style={{ transitionDelay: ((transitionDelay * person.order) + 'ms' ) }}>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                            <Typography variant="subtitle1" color="textSecondary" className={classes.date}>
                                {person.date}
                            </Typography>
                            <Typography component="h2" variant="h5">
                                {person.title}
                            </Typography>
                            <Typography component="body1">
                                {person.location}
                            </Typography>
                            <br />
                                {person.description.map(line => (
                                    <Typography variant="subtitle1" paragraph className={classes.list}>
                                        {line}
                                    </Typography>
                                ))}
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