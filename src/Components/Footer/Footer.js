import React from 'react';

import logo from './images/logo.png';

// Set styles
const divStyle = {
  height: '60px',
  width: '100%',
  padding: '.5em',
  marginTop: '.5em',
  position: 'fixed',
  bottom: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
};

const imgStyle = {
  height: '100%',
  width: 'auto',
};

const Footer = () => {
  return (
    <div style={divStyle}>
      <img src={logo} alt='Kyzen Logo' style={imgStyle} />
    </div>
  );
};

export default Footer;
