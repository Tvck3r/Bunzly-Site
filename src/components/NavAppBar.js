import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';

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
    width: '10%',
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
    mobileMenuToggle:false,
    navValue:null
  };

  toggleDrawer = (open) => () => {
    this.setState({
      mobileMenuToggle: open,
    });
  };

  handleSearchOpen = event => {
    this.setState({ searching: true });
  };

  handleSearchClose = () => {
    this.setState({ searching: false });
  };


  render() {
    const { classes } = this.props;

    const pages = [
      {
        pageName: 'Home',
        method: this.props.handleHomePage,
        icon:<HomeIcon></HomeIcon>
      },
      {
        pageName: 'About',
        method: this.props.handleAboutPage,
        icon:<AccountCircle></AccountCircle>
      },
      {
        pageName: 'Services',
        method: this.props.handleHomePage,
        icon:<WorkIcon></WorkIcon>
      },
      {
        pageName: 'Contact',
        method: this.props.handleContactPage,
        icon:<EmailIcon></EmailIcon>
      }
    ]

    const mobileSideBarMenu = (
      <div className={classes.list}>
        <List>
          {pages.map(page => (
            <ListItem button key={page.pageName} onClick={page.method}>
              <ListItemIcon>
              {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.pageName} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div >
        <AppBar 
           style={{ background: this.props.appBarTransparency, boxShadow: this.props.appBarShadow}} 
           //  style={{ background: this.props.appBarState}} 
          position='fixed'
          //position={this.props.appBarState} 
          color="default">
          <Toolbar  >
            <IconButton onClick={this.props.handleHomePage}className={classes.menuButton} color="inherit" aria-label="goHome">
              <Typography style={{ fontSize: this.props.logoSize  }} className={classes.title} variant="h5" color="inherit" >
                Bunzly.io
              </Typography>
            </IconButton>
          
            <div className={classes.grow} />



            <div className={classes.sectionDesktop}>
              <Button color="inherit" onClick={this.props.handleHomePage}>
                <p>Home</p>
              </Button>

              <Button color="inherit" onClick={this.props.handleAboutPage}>
                <p>About</p>
              </Button>

              <Button color="inherit" >
                <p>Services</p>
              </Button>

              <Button color="inherit" onClick={this.props.handleContactPage}>
                <p>Contact</p>
              </Button>
              
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Button 
                  aria-haspopup="true"
                  color="inherit"
                  >
                  <SearchIcon />
                  </Button>
                </div>
                
                <InputBase
                fullWidth='false'
                  //placeholder="Search…"
                  classes={{
                    input: classes.inputInput,
                  }}
                />
              </div>

              
            </div>


            {/* here is where you put what it looks like when phone size */}
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.toggleDrawer(true)} color="inherit">
                <MoreIcon />
              </IconButton>
              <Drawer anchor="right" open={this.state.mobileMenuToggle} onClose={this.toggleDrawer(false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer( false)}
                >
                {mobileSideBarMenu}
                </div>
              </Drawer>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavAppBar);