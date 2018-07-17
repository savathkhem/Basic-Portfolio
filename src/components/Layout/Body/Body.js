import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Typography, Grid, Paper } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import CarouselContent from "./../Carousel"
import ProfileFrame from "./../ProfileFrame"
import "./Body.css";

const styles = theme => ({
    welcome: {
        position: 'absolute',
        top: 420,
        color: 'white',
    },
    sectionTitle: {
        position: 'absolute',
        top: 0,
        paddingTop: 80,
        color: 'white',
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
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate={'true'}>
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
            <ProfileFrame 
                style={{float: "left"}}
                alt="Savath Khem"
                src="./images/profile.jpeg"
            />
            <Typography align={"center"} headlineMapping={"title"} variant={"display2"} className={props.classes.welcome}>
                Welcome
            </Typography>
        </HeroBanner>
    </main>

    <main>
        <nav />
        <HeroBanner
            min={'-20%'}
            max={'20%'}
            image="https://www.mockupworld.co/wp-content/uploads/edd/2017/10/free-office-desk-scene-mockup-1000x683.jpg"
        >
    <Typography align={"center"} headlineMapping={"title"} variant={"display2"} className={props.classes.sectionTitle}>
        About Me
    </Typography>
    <CarouselContent />
        </HeroBanner>
    </main>

  </ParallaxProvider>
  
);


Body.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(Body);