import styled from 'styled-components';
import { FlexRow, FlexCol } from '../globals';

export const Wrapper = styled(FlexCol)`
  padding: 20px;
  cursor: default;
  user-select: none;
`;

export const Toolbar = styled(FlexRow)`
  justify-content: space-between;
  padding: 0 0 ${({ big }) => (big ? '10px' : '5px')} 10px;
  text-transform: capitalize;
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
  color: ${({ darker }) => (darker && '#777') || '#333'};
`;

export const Day = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: ${({ hoverable }) => hoverable && 'pointer'};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ current, selected }) =>
    (current && '#4286f4') || (selected && '#777')};
  color: ${({ current, weekend }) =>
    (current && 'white') || (weekend && '#777')};
  color: ${({ selected }) => selected && 'white'};
  &:hover {
    background: ${({ current, hoverable }) => hoverable && !current && '#eee'};
  }
`;
