import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Typography, Grid, Paper } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import CarouselContent from "./../Carousel"
import "./Body.css";

const styles = theme => ({
    sectionTitle: {
        paddingTop: 80,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
      },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit,
      },
  });


const HeroBanner = ({ image, min, max, children }) => (
    <div className="hero-container">
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div
                className="hero-image"
                style={{ backgroundImage: `url(${image})` }}
            />
        </Parallax>
        <div className="hero-children">{children}</div>
</div>
);

const Body = (props) => (
  <ParallaxProvider>
    <main>
        <nav />
        <HeroBanner
            min={'-20%'}
            max={'20%'}
            image="http://informationcommunicationtechnology.com/wp-content/uploads/2018/06/Desk-hd-backgrounds.jpg"
        >
            <Typography align={"center"} headlineMapping={"title"} variant={"display2"}>
                Welcome
            </Typography>
        </HeroBanner>
    </main>

    <Typography align={"center"} headlineMapping={"title"} variant={"display2"} className={props.classes.sectionTitle}>
        About Me
    </Typography>
    <CarouselContent />

  </ParallaxProvider>
  
);


Body.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(Body);