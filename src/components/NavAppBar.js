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
import SearchIcon from '@material-ui/icons/Search';
import {  Redirect} from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Collapse from '@material-ui/core/Collapse';



//import SearchIcon from '@material-ui/icons/Search';
//import InputBase from '@material-ui/core/InputBase';
//import Badge from '@material-ui/core/Badge';


//https://material-ui.com/demos/app-bar/

const styles = theme => ({
  root: {
    width: '100%',
  },
   grow: {
    flexGrow: 1,
  },
  btnStyle:{
    paddingRight:'3vh',
    paddingLeft:'3vh'
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
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit * 2.5,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});



class NavAppBar extends React.Component {
  state = {
    anchorEl: null,
    pagesAnchorEl: null,
    mobileMoreAnchorEl: null,
    navValue:null,
    searching:false,
    sticky:false
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleSearchOpen = event => {
    this.setState({ searching: true });
  };

  handleSearchClose = () => {
    this.setState({ searching: false });
  };

  handleContactUsMobileMenuSelection = event => {
    console.log("contact-us-mobile-nav was clicked");
    this.handleMobileMenuClose();
    this.setState({ navValue:'contact-us'});
  }

  handleAboutMobileMenuSelection = event => {
    console.log("about-mobile-nav was clicked");
    this.handleMobileMenuClose();
    this.setState({ navValue:'about'});
  }

  handleUsersMobileMenuSelection = event => {
    console.log("users-mobile-nav was clicked");
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
          <MenuItem onClick={this.handleCheckoutMenuClose}>Checkout</MenuItem>
          <MenuItem onClick={this.handleUsersMenuClose}>Users</MenuItem>
          <MenuItem onClick={this.handleAboutMenuClose}>About</MenuItem>
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
          Contact
        </MenuItem>
        <MenuItem onClick={this.handleCheckOutMobileMenuSelection}>
          Checkout
        </MenuItem>
        <MenuItem onClick={this.handleUsersMobileMenuClose}>
          Users
        </MenuItem>
        <MenuItem onClick={this.handleAboutMobileMenuClose}>
          About
        </MenuItem>
      </Menu>
    );

    return (
      <div >
        <AppBar 
          className={classes.appBar} 
          style={{ background: this.props.appBarTransparency, boxShadow: this.props.appBarShadow}} 
           //  style={{ background: this.props.appBarState}} 
          position='fixed'
          //position={this.props.appBarState} 
          color="default">
          <Toolbar  >
            <div></div>
            <IconButton  href='/' className={classes.menuButton} color="inherit" aria-label="goHome">
              <Typography   style={{ fontSize: this.props.logoSize  }} className={classes.title} variant="h5" color="inherit" noWrap>
                Bunzly.io
              </Typography>
            </IconButton>
          
            <div className={classes.grow} />



            <div className={classes.sectionDesktop}>
              <Button color="inherit" href='/ContactUs' className={classes.btnStyle}>
                <p>Home</p>
              </Button>

              <Button color="inherit" href='/ContactUs' className={classes.btnStyle}>
                <p>About</p>
              </Button>

              <Button color="inherit" href='/ContactUs' className={classes.btnStyle}>
                <p>Services</p>
              </Button>

              <Button color="inherit" href='/ContactUs' className={classes.btnStyle}>
                <p>References</p>
              </Button>

              <Button color="inherit" href='/ContactUs' className={classes.btnStyle}>
                <p>Contact</p>
              </Button>
              
              <div className={classes.grow} />
              <Button  >
                <SearchIcon/>
              </Button>
            
              <Collapse width="0px" in={true}>
              {/*   <div className={classes.search}> */}
                <InputBase width="0px"
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                         
              </Collapse>
         

              
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