import React from 'react';
import { StyledCustomButton } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <StyledCustomButton {...otherProps}>{children}</StyledCustomButton>
);

export default CustomButton;