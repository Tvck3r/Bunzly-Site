import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const AddressForm = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tell us about yourself
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={props.firstName}
            onChange={props.firstNameChanged} 
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={props.lastName}
            onChange={props.lastNameChanged} 
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={props.email}
            onChange={props.emailChanged} 
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={props.phone}
            onChange={props.phoneChanged} 
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;