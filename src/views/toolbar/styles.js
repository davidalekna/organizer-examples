import styled from "styled-components";
import { FlexRow } from "../../components/globals";

export const ToolbarWrapper = styled(FlexRow)`
  grid-area: toolbar;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[900]};
  user-select: none;
  color: ${({ theme }) => theme.colors.primary[100]};
`;
