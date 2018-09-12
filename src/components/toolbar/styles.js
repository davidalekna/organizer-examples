import styled from 'styled-components';
import { FlexRow } from '../globals';

export const ToolbarWrapper = styled(FlexRow)`
  grid-area: toolbar;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  user-select: none;
`;
