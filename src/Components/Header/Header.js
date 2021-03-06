import React from 'react';

// Set style
const divStyle = {
  height: '40px',
  width: '100%',
  backgroundColor: '#ABCC6D',
  marginBottom: '2em',
  textTransform: 'uppercase',
  color: '#223d72',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Header = () => {
  return (
    <div style={divStyle}>
      <h3>Concentration &#38; Temperature Dashboard</h3>
    </div>
  );
};

export default Header;
