import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function CraftMessage() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Craft message
      </Typography>
      <Grid container spacing={24}>
      <TextField fullWidth />
      </Grid>
    </React.Fragment>
  );
}

export default CraftMessage;