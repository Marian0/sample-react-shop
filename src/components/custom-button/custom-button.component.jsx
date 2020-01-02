import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, styleClass, ...otherProps }) => (
  <button className={`custom-button ${styleClass}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;