import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import "./Body.css";


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

const Body = () => (
  <ParallaxProvider>
      <main>
          <nav />
          <HeroBanner
              min={'-20%'}
              max={'20%'}
              image="http://informationcommunicationtechnology.com/wp-content/uploads/2018/06/Desk-hd-backgrounds.jpg"
          >
              <h1>Welcome To My Profile Page</h1>
          </HeroBanner>
      </main>
  </ParallaxProvider>
);


export default Body;