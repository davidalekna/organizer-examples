import styled from 'styled-components';
import { FlexCol } from '../globals';

export const Main = styled.main`
  grid-area: calendar;
  display: grid;
  align-content: flex-start;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled(FlexCol)`
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 5px;
  background: ${({ offset, current }) =>
    offset ? '#f9f9f9' : (current && 'yellow') || null};
`;
