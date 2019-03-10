import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { NavLink, Redirect} from 'react-router-dom'

//import SearchIcon from '@material-ui/icons/Search';
//import InputBase from '@material-ui/core/InputBase';
//import Badge from '@material-ui/core/Badge';


//https://material-ui.com/demos/app-bar/

const styles = theme => ({
  root: {
    width: '100%',
    position:'sticky'
  },
  grow: {
    flexGrow: 1,
  },
  btnStyle:{
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class NavAppBar extends React.Component {
  state = {
    anchorEl: null,
    pagesAnchorEl: null,
    mobileMoreAnchorEl: null,
    navValue:null,
  };
   
  handlePagesMenuOpen = event => {
    this.setState({ pagesAnchorEl: event.currentTarget });
  };

  handlePagesMenuClose = () => {
    this.setState({ pagesAnchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };


  handleContactUsMobileMenuSelection = event => {
    console.log("contact-us-nav was clicked");
    this.handleMobileMenuClose();
    this.setState({ navValue:'contact-us'});
  }

  handleCheckOutMobileMenuSelection = event => {
    console.log("checkout-nav was clicked");
    this.handleMobileMenuClose();
    this.setState({ navValue:'checkout'});
  }

  handleAboutMobileMenuSelection = event => {
    console.log("about-nav was clicked");
    this.handleMobileMenuClose();
    this.setState({ navValue:'about'});
  }

  handleUsersMobileMenuSelection = event => {
    console.log("users-nav was clicked");
    this.handleMobileMenuClose();
    this.setState({ navValue:'users'});
  }

  render() {
    const { pagesAnchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isPagesMenuOpen = Boolean(pagesAnchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    if (this.state.navValue === 'contact-us') {
      return <Redirect to='/ContactUs' />
    }
    if (this.state.navValue === 'checkout') {
      return <Redirect to='/CheckOut' />
    }

    if (this.state.navValue === 'about') {
      return <Redirect to='/About' />
    }
    if (this.state.navValue === 'users') {
      return <Redirect to='/Users' />
    }

    const renderPagesMenu = (
        <Menu
          anchorEl={pagesAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isPagesMenuOpen}
          onClose={this.handlePagesMenuClose}
        >
          <MenuItem onClick={this.handlePagesMenuClose}>Checkot</MenuItem>
          <MenuItem onClick={this.handlePagesMenuClose}>Usrs</MenuItem>
          
          <MenuItem onClick={this.handlePagesMenuClose}>abtus</MenuItem>
        </Menu>
      );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleContactUsMobileMenuSelection}>
          Contact Us
        </MenuItem>
        <MenuItem onClick={this.handleCheckOutMobileMenuSelection}>
          Checkout
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          Users
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          About us
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar color="default">
          <Toolbar>
            <IconButton href='/' className={classes.menuButton} color="inherit" aria-label="goHome">
              <HomeIcon />
            </IconButton>
            <Typography  className={classes.title} variant="h5" color="inherit" noWrap>
              Bunzly.io
            </Typography>
            <div className={classes.grow} />



            <div className={classes.sectionDesktop}>
              <Button color="inherit" href='/ContactUs' >
                <p>Contact us </p>
              </Button>
              <Button 
                aria-owns={isPagesMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handlePagesMenuOpen}
                color="inherit"
              >
                Pages
              </Button>
            </div>


            {/* here is where you put what it looks like when phone size */}
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
   
        {renderPagesMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavAppBar);