import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { checkPropTypes } from 'prop-types';

const EmailConfirmation = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review message
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        I don't know how to make this work but it is something to do eventually
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        from: email@address.com
      </Typography>


    </React.Fragment>
  );
}

export default EmailConfirmation;