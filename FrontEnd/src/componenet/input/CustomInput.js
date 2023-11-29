import React from 'react';

function CustomInput(props) {
  const { placeholder, Name, onChange, onBlur,type } = props;

  const inputFieldStyles = {
    width: '100%',
    backgroundColor: '#CA52520F',
    margin: '16px 0',
    fontFamily:'Lucida Handwriting',
    height: '62px',
    textDecoration: 'none', 
    border: '1px solid #BE4040',
    borderRadius: '20px',
    display: 'grid',
    gridTemplateColumns: '15% 85%',
    padding: '0 0.4rem',
    position: 'relative',
  };

  
  
  return (
    <input
    style={{
      ...inputFieldStyles,
      fontFamily: 'Lucida Handwriting',
    }}
    type={type}
    name={Name}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
  />
  );
}

export default CustomInput;
