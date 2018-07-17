import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core/';
import Logo from "./../Logo";
import AccountCircle from '@material-ui/icons/AccountCircle';
import DrawerLeft from "./../DrawerLeft";
import ProfileMenu from "./../ProfileMenu";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#424242",
    zIndex: theme.zIndex.drawer + 1,
    position: 'fixed',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menu: {
    top:0,

  }
});

class NavBar extends React.Component {
  state = {
    profileOpen: false,
    anchorEl: null,
  };

  openUrlResume = () => {
    window.open("https://drive.google.com/open?id=15-4RyRG2PYVrfWJpHNG-dnEnjH0EHe9S","_blank")
}
  
  openUrlLinkedIn = () => {
      window.open("https://www.linkedin.com/in/savathkhem/","_blank")
  }
    
  openUrlFacebook = () => {
      window.open("https://www.facebook.com/savath.khem","_blank")
  }
    
  openUrlTwitter = () => {
      window.open("https://twitter.com/nerdyKambo/","_blank")
  }

  openUrlGithub = () => {
      window.open("https://github.com/savathkhem/","_blank")
  }

  handleProfileClick = () => {
      this.setState(state => ({ profileOpen: !state.profileOpen }));
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar
          className={classes.appBar}
        >
          <Toolbar>
          <DrawerLeft />

            <Typography variant="title" color="inherit" className={classes.flex}>
              <Logo />
            </Typography>
            <IconButton onClick={this.handleMenu} color={'inherit'}>
              <AccountCircle />
          </IconButton>
          </Toolbar>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
              >
                <ProfileMenu 
                  resume={this.openUrlResume}
                  linkedIn={this.openUrlLinkedIn}
                  twitter={this.openUrlTwitter}
                  faceBook={this.openUrlFacebook}
                  gitHub={this.openUrlGithub}
                />
          </Menu>
        </AppBar>
      </div>
    );
  }
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);