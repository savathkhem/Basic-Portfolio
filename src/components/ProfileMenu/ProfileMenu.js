import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'


const styles = theme => ({
      avatar: {
        margin: 60,
      },
      bigAvatar: {
        width: 200,
        height: 200,
      },
});

const ProfileFrame = (props) =>  (
  <Fragment>
    <ListItem button>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-google"></i>
      </ListItemIcon>
      <ListItemText>
        <Typography className={props.classes.menuText}>
          Sign In With Google
        </Typography>
      </ListItemText>
    </ListItem>

    <ListItem button>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-facebook"></i>
      </ListItemIcon>
      <ListItemText>
      <Typography className={props.classes.menuText}>
          Sign In With FaceBook
        </Typography>
      </ListItemText>
    </ListItem>

    <ListItem button>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-github-square"></i>
      </ListItemIcon>
      <ListItemText>
      <Typography className={props.classes.menuText}>
          Sign In With GitHub
        </Typography>
      </ListItemText>
    </ListItem>

    <ListItem button>
      <ListItemIcon className={props.classes.menuIcon}>
        <i className="fab fa-twitter-square"></i>
      </ListItemIcon>
      <ListItemText >
      <Typography className={props.classes.menuText}>
          Sign In With Twitter
        </Typography>
      </ListItemText>

    </ListItem>
  </Fragment>
);

ProfileFrame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileFrame);