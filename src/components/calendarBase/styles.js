import styled from "styled-components";
import { FlexRow, FlexCol } from "../globals";

export const Wrapper = styled(FlexCol)`
  padding: 20px;
  cursor: default;
`;

export const Toolbar = styled(FlexRow)`
  justify-content: space-between;
  padding: 0 0 ${({ big }) => (big ? "10px" : "5px")} 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary[200]};
`;

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(7, 1fr);
`;

export const GridItem = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: ${({ darker, theme }) =>
    (darker && theme.colors.primary[500]) || theme.colors.primary[300]};
`;

export const Day = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: ${({ hoverable }) => hoverable && "pointer"};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ current, selected, theme }) =>
    (current && theme.colors.primary[400]) ||
    (selected && theme.colors.primary[100])};
  color: ${({ current, weekend, theme }) =>
    (current && theme.colors.primary[100]) ||
    (weekend && theme.colors.primary[100])};
  color: ${({ selected }) => selected && "white"};
  &:hover {
    background: ${({ current, hoverable, theme }) =>
      hoverable && !current && theme.colors.primary[100]};
  }
`;
