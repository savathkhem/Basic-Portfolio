import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, IconButton, Divider } from '@material-ui/core/';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Card from './../Card';


const styles = {
  list: {
    width: 250,
  },
};

class DrawerLeft extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      <IconButton onClick={this.toggleDrawer('left', false)}>
        <ChevronLeftIcon />
      </IconButton>
      Portfolio
      <Divider />
      <List>

        <Card 
          title='TrailerPark2.0'
          src='./images/trailerpark2.0.jpg'
          url='http://www.trailerpark.site'
          overview='TrailerPark2.0 is a fullstack application.  This time we used react, express, mongodb, and material-ui. We are able to create a more responsive and dynamic web application.'      
        />

        <Card 
          title='ClickyGame'
          src='./images/clickygame.jpg'
          url='https://savathkhem.github.io/ClickyGame/'
          overview='Fun memory game using react'      
        />

        <Card 
          title='test'
          src='https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg'
          url='http://www.google.com'
          overview='blah blah blah'      
        />

        <Card 
          title='test'
          src='https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg'
          url='http://www.google.com'
          overview='blah blah blah'      
        />

        <Card 
          title='test'
          src='https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg'
          url='http://www.google.com'
          overview='blah blah blah'      
        />

        <Card 
          title='test'
          src='https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg'
          url='http://www.google.com'
          overview='blah blah blah'      
        />

        <Card 
          title='test'
          src='https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg'
          url='http://www.google.com'
          overview='blah blah blah'      
        />

        <Card 
          title='test'
          src='https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg'
          url='http://www.google.com'
          overview='blah blah blah'      
        />

      </List>
      </div>
    );

    return (
      <div>
        <IconButton onClick={this.toggleDrawer('left', true)}><MenuIcon /></IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div>
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerLeft);