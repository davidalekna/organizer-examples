import styled from 'styled-components';
import { FlexCol } from '../../components/globals';

export const Wrapper = styled(FlexCol)`
  grid-area: sidebar;
  border-right: 1px solid #ddd;

  @media (max-width: 1040px) {
    display: none;
  }
`;
