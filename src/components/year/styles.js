import styled from 'styled-components';

export const YearGrid = styled.main`
  grid-area: calendar;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;
