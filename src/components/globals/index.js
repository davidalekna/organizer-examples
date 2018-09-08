import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Root = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 65px 1fr 1fr;
  grid-template-columns: 255px 1fr 1fr;
  grid-template-areas:
    'toolbar toolbar toolbar'
    'sidebar calendar calendar'
    'sidebar calendar calendar';
`;

export const Toolbar = styled(FlexRow)`
  grid-area: toolbar;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const Sidebar = styled(FlexCol)`
  grid-area: sidebar;
  border-right: 1px solid #ddd;
`;

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
