import styled from 'styled-components';
import { FlexCol, FlexRow } from '../../components/globals';

export const Main = styled.main`
  grid-area: calendar;
  display: grid;
  align-content: flex-start;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
  cursor: default;
`;

export const DayBlock = styled(FlexCol)`
  flex: 0 0 auto;
  overflow: hidden;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: ${({ darker, current, selected }) => {
    if (selected && !current) return '#eee';
    return (darker && '#f9f9f9') || null;
  }};
`;

export const DayName = styled.div`
  font-size: 13px;
  margin: 5px 0 0 7px;
  color: #333;
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
  color: ${({ current, selected }) => selected || (current && 'white')};
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
