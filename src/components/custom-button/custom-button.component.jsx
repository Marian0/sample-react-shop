import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn = false,
  inverted = false,
  ...otherProps
}) => (
    <button className={`custom-button 
              ${inverted ? 'inverted' : ''}
              ${isGoogleSignIn ? 'google-sign-in' : ''}
              
              `} {...otherProps}>
      {children}
    </button>
  );

export default CustomButton;