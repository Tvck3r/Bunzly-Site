import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const NavigationBar = (props) => {

  const barStyle = {
    position:'sticky'
    
  }
  const toolbarStyle = {
    flex: 1,
  }
  const menuButtonStyle = {
    marginLeft: -18,
    marginRight: 10,
  }

  return (
    <div>
      <AppBar color="default" className={barStyle}>
        <Toolbar>
          <Button className={menuButtonStyle}> 
          <Typography variant="h4" color="inherit" noWrap className={toolbarStyle}>
            Bunzly.io
          </Typography>
          </Button>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default NavigationBar;