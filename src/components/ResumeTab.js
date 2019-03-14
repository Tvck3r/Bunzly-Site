// we didn't end up using this but it could still be used elsewhere


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  floatright: {
      float: 'right',
  }
});

class ResumeTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
          <Tabs 
            value={value} 
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Achievments" />
            <Tab label="Technology Stack" />
            <Tab label="Experience" />
            <Tab label="Education" />
          </Tabs>
        {value === 0 && <TabContainer>
            <p><strong>Achievements:</strong></p>
            <ul>
                <li>Built a graphing application that takes form submissions, stores them as JSON objects in a nonSQL server - Firebase - and graphs the data from Firebase using HighCharts API</li>
                <li>Built a slack chatbot using Javascript, and deployed through Heroku</li>
                <li>Built a python application using Twilio that queries an API and sends a response via SMS.</li>
                <li>Currently building python-sdk plugins for our automation platform</li>
                <ul>
                    <li>Spotify plugin - queries the Spotify API for album data and uses Oauth to play songs and display album art</li>
                    <li>SSH plugin - secure file transfer plugin via the Koman Automation platform</li>
                </ul>
                <li>Refining my knowledge of Python with courses through General Assembly and Pluralsight</li>
            </ul>
        </TabContainer>}
        {value === 1 && <TabContainer>
            <p><strong>Technology Stack:</strong>​​ Python, ​Ajax, API​, Javascript/Jquery, React, SQL, HTML, CSS, Github, Bootstrap, ​Cisco/Kana/Wayfair proprietary web platforms, HubSpot Marketing Software and Design certified.</p>
        </TabContainer>}
        {value === 2 && <TabContainer>
            <section>
              <p className={classes.floatright}>Cambrdige, Massachusetts</p>
              <p><strong>Rapid7</strong></p>
              <p className={classes.floatright}>3/2018 - Present</p>
              <p>Partner Support Engineer</p>
              <ul>
                <li>Review proposed integrations with partners and provide technical support</li>
                <li>Act as a platform integration expert in discussions with partners</li>
                <li>Own the application certification process for partner integrations</li>
                <li>Act as the main technical liaison between Rapid7 product/platform teams and partners when troubleshooting integration issues in the field</li>
                <li>Working with the Komand development team to assist in writing python-sdk plugins</li>
              </ul>
            </section>

            <section>
              <p className={classes.floatright}>Cambrdige, Massachusetts</p>
              <p><strong>HubSpot</strong></p>
              <p className={classes.floatright}>8/2015 -3/2018</p>
              <p>Senior Channel Consultant</p>
                <ul>
                  <li>Advise on best practices using the HubSpot API, HubSpot Integrations, Design documentation, and HUBL markup language, as well as walk through and create technical documentation.</li>
                  <li>Create and document processes for automation strategy, and reporting on traffic and conversion data</li>
                  <li>Provide support for technical issues and facilitate creative workarounds/hacks in the toolset to create efficient processes</li>
                  <li>Designated technical resource for team regarding HubSpot product functionality/limitations</li>
                  <li>Participate in product innovation meetings to advise on feature updates in the tool</li>
                </ul>
              <p className={classes.floatright}>3/2014 - 4/2015</p>
              <p>Senior Technical Support Engineer</p>
                <ul>
                  <li>Resolved technical issues, and created documentation for troubleshooting processes</li>
                  <li>Took on additional roles to assist the services team, Including grading marketplace templates, and troubleshooting HTML/CSS template issues for customers</li>
                  <li>Nominated as a Support Coach to assist in technical onboarding for new hires</li>
                  <li>Work across many teams (Product, Dev, Services) to find solutions for customers as efficiently as possible.</li>
                </ul>
            </section>

            <section>
              <p className={classes.floatright}>Boston, Massachusetts</p>
              <p><strong>Wayfair</strong></p><p className={classes.floatright}>7/2013 - 3/2014</p>
              <p>Service Squad - Agility Team</p>
                <ul>
                  <li>Promoted to the Agility team after 2 months and assist as team lead</li>
                  <li>Assist and train customers on how to use the Wayfair site in English and Spanish</li>
                  <li>Assisted in layout and design of the Freight Shipping Network</li>
                </ul>
            </section>
        </TabContainer>}
        {value === 3 && <TabContainer>
            <p><strong>Education: </strong>​​University of North Carolina – Wilmington</p>
          <ul>
            <li>Cameron School of Business – Bachelor of Science – International Business</li>
            <li>UNCW Honors program</li>
          </ul>
        </TabContainer>}
      </div>
    );
  }
}

ResumeTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeTab);