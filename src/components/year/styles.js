import styled from 'styled-components';
import { FlexCol } from '../globals';

export const YearGrid = styled.main`
  grid-area: calendar;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const Wrapper = styled(FlexCol)`
  padding: 20px;
  cursor: default;
  user-select: none;
`;
