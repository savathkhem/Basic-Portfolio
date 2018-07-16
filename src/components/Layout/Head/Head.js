// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core/';
// import MenuIcon from '@material-ui/icons/Menu';


// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   extendedIcon: {
//     marginRight: theme.spacing.unit,
//   },
//   flex: {
//     flex: 1,
//   },
//   root: {
//     flexGrow: 1,
//   }
// });

// class NavBar extends React.Component {
//   state = {
//     auth: true,
//     anchorEl: null,
//   }

//   handleChange = (event, checked) => {
//     this.setState({ auth: checked })
//   };

//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { classes } = this.props;
//     const { auth, anchorEl } = this.state;
//     const open = Boolean(anchorEl);
    
//     return (
//       <div className={classes.root}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             Savath Khem
//           </Typography>
//           {auth && (
//             <div>
//               <IconButton 
//           aria-owns={open ? 'menu-appbar' : null}
//           aria-haspopup="true"
//           onClick={this.handleMenu}
//           color="inherit"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//           id="menu-appbar"
//           anchorEl={anchorEl}
//           anchorOrigin={{
//             vertical: 'top',
//             horizonal: 'right',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           open={open}
//           onClose={this.handleClose}
//           >
//           <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//           <MenuItem onClick={this.handleClose}>My account</MenuItem>
//           </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
//     );
//   }
// }

//   NavBar.proptypes = {
//     classes: PropTypes.object.isRequired,
//   };

//   export default withStyles(styles)(NavBar);



import React from 'react';
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, MenuItem, Typography, Menu, IconButton, Avatar } from '@material-ui/core/';
import Logo from "./../Logo";
import DrawerLeft from "./../DrawerLeft";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
    flex: {
    flex: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  avatarButton: {
    height: 'inherit',
    marginLeft: 12,
    marginRight: 20,
    float: 'right',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    float: 'right',
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    // position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class NavBar extends React.Component {
  state = {
    open: false,
    anchor: 'left',
    auth: true,
    anchorEl: null,
  };
  
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;
    const { auth, anchorEl } = this.state;
    const openlogin = Boolean(anchorEl);

    return (
      <div>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
            [classes[`appBarShift-${anchor}`]]: open,
          })}
          style={{backgroundColor: "#424242"}}
        >
          <Toolbar disableGutters={!open}>

            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton> */}
            <DrawerLeft onChange={this.props.onChange} handleSubmit={this.props.handleSubmit}/>


            <Typography variant="title" color="inherit" className={classes.flex}>
              <Logo />
            </Typography>
          </Toolbar>
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