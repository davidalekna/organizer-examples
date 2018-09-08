import styled from 'styled-components';
import { FlexCol, FlexRow } from '../globals';

export const Main = styled.main`
  grid-area: calendar;
  display: grid;
  align-content: flex-start;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
  cursor: default;
`;

export const DayBlock = styled(FlexCol)`
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: ${({ offset, current }) =>
    offset ? '#f9f9f9' : (current && '#42f492') || null};
`;

export const Day = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  font-size: 14px;
  border-radius: 50%;
  margin: 3px;
  background: ${({ current }) => current && '#4286f4'};
  color: ${({ current }) => current && 'white'};
`;

export const Event = styled.div`
  font-size: 12px;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:before {
    content: '•';
    color: red;
    display: inline-block;
    width: 10px;
    font-size: 25px;
    margin-left: 5px;
    color: ${({ color }) => color};
  }
`;
