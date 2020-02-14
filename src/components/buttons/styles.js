import styled from "styled-components";

export const Icon = styled.i.attrs({
  className: "material-icons"
})`
  color: ${({ theme, color }) => (color ? color : theme.colors.primary[300])};
  font-size: ${({ size }) => size};
  margin: 0;
  padding: 0;
`;

export const StyledIconButton = styled.button`
  padding: 0;
  width: ${({ size }) => (size ? size : "32px")};
  height: ${({ size }) => (size ? size : "32px")};
  box-shadow: none;
  opacity: 1;
  cursor: pointer;
  background: transparent;
`;

export const StyledSolidButton = styled.button`
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.primary[100]
      : props.theme.colors.primary[900]};
  color: ${props => props.theme.colors.primary[100]};
  padding: 10px 20px;
  text-transform: capitalize;
  &:hover {
    background-color: ${props =>
      props.disabled
        ? props.theme.colors.neutral[200]
        : props.theme.colors.primary[400]};
  }
`;
