import React from 'react';

const CustomButton = (props) => {
  const { onClick, Name } = props;

  const btnStyles = {
    width: '157px',
    backgroundColor: '#BE4040',
    border: '1px solid white',
    borderRadius: '12px',
    outline: 'none',
    height: '44px',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: '19px',
    textDecoration: 'none', 
    marginTop:'20px',
    cursor: 'pointer',
    transition: '0.5s',
  };

  return (
    <button
      style={btnStyles}
      onClick={onClick}>
     {Name}
     
    </button>
  );
};

export default CustomButton;
