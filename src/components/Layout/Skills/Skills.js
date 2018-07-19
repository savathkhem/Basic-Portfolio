import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Paper, Grid } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  icon: {
      width: 100,
  },
  panel: {
      width:'50%'
  },
  dropdown: {
      width: '100%',
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
      <Fragment>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Skills</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid container className={classes.root}>
        <Grid item xs={12} zeroMinWidth>
          <Grid
            container
            spacing={40}
            className={classes.dropdown}
            alignItems='flex-start'
            direction='center'
            justify='row'
          >
            <Grid key='1' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/all3.png'
                        alt ='html, css, javascript'  
                    />
                </Paper>
            </Grid>
            <Grid key='2' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/react.png'
                        alt ='react'  
                    />
                </Paper>
            </Grid>
            <Grid key='3' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/jquery.png'
                        alt ='jquery'  
                    />
                </Paper>
            </Grid>

            <Grid key='4' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/nodejs.png'
                        alt ='nodejs'  
                    />
                </Paper>
            </Grid>

            <Grid key='5' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/mongodb.png'
                        alt ='mongodb'  
                    />
                </Paper>
            </Grid>

            <Grid key='6' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/mysql.png'
                        alt ='mysql'  
                    />
                </Paper>
            </Grid>
            <Grid key='7' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/sequelize.png'
                        alt ='sequelize'  
                    />
                </Paper>
            </Grid>
            <Grid key='8' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/express.png'
                        alt ='express'  
                    />
                </Paper>
            </Grid>
            <Grid key='9' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/firebase.png'
                        alt ='firebase'  
                    />
                </Paper>
            </Grid>
            <Grid key='10' item>
                <Paper>
                    <img
                        className={classes.icon}
                        src='./images/icons/autodesk.png'
                        alt ='autodesk'  
                    />
                </Paper>
            </Grid>
          </Grid>
        </Grid>
</Grid>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);