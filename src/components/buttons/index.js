import React from 'react';
import { Icon, StyledIconButton, StyledSolidButton } from './styles';

export const IconButton = ({
  children,
  size = '18px',
  loading,
  bg,
  color,
  ...props
}) => (
  <StyledIconButton disabled={loading} size={size} bg={bg} {...props}>
    <Icon size={size} color={color}>
      {children}
    </Icon>
  </StyledIconButton>
);

export const Button = props => (
  <StyledSolidButton disabled={props.loading} {...props}>
    {props.children}
  </StyledSolidButton>
);

export { Icon };
