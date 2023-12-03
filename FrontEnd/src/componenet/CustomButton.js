import React from 'react';
const CustomButton = ({ type, onClick, className,Name }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
     {Name}
    </button>
  );
};

export default CustomButton;
