import styled, { css } from 'styled-components';

export const fontStack = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica', 'Segoe',
    sans-serif;
`;

export const H1 = styled.h1`
  ${fontStack};
  font-size: 1.5rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  ${fontStack};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  ${fontStack};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

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
  user-select: none;
`;

export const Sidebar = styled(FlexCol)`
  grid-area: sidebar;
  border-right: 1px solid #ddd;
`;
