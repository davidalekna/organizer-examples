import styled from 'styled-components';
import { FlexRow, FlexCol } from '../globals';

export const Wrapper = styled(FlexCol)`
  padding: 20px;
  border-bottom: 1px solid #ddd;
  cursor: default;
  user-select: none;
`;

export const Toolbar = styled(FlexRow)`
  justify-content: space-between;
  font-size: 12px;
  padding: 0 0 10px 10px;
`;

export const Grid = styled.div`
  display: grid;
  height: 216px;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(7, 1fr);
`;

export const GridItem = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
`;

export const Day = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: ${({ offset }) => (offset && '#777') || '#333'}

  &:hover {
    background: #eee;
  }
`;
