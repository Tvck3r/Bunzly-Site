import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types'; 
import GoogleMapReact from 'google-map-react';



const styles = theme => ({
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
});

const Mapblock = ({ text }) => <div>{text}</div>;

// This needs to be passed in the App.js
// const defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };


const Location = (props) => {
    
  const { classes } = props;



    return (
        
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvXNMWL_VlxkViHbo6vUs5TanivLTpd48'}}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <Mapblock
            lat={35.2033919}
            lng={-81.1200293}
            text={''}
          />
        </GoogleMapReact>
      </div>
)};


Location.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Location);