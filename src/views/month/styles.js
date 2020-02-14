import styled from "styled-components";
import { FlexCol, FlexRow } from "../../components/globals";

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
  border-right: 1px solid ${({ theme }) => theme.colors.primary[900]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[900]};
  background: ${({ darker, current, selected, theme }) => {
    if (selected && !current) return theme.colors.neutral[200];
    return (darker && theme.colors.neutral[400]) || null;
  }};
  color: ${({ theme }) => theme.colors.primary[200]};
`;

export const DayName = styled.div`
  font-size: 13px;
  margin: 5px 0 0 7px;
  color: ${({ theme }) => theme.colors.primary[100]};
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
  background: ${({ current, theme }) => current && theme.colors.neutral[400]};
  color: ${({ current, selected, theme }) =>
    selected || (current && theme.colors.primary[100])};
`;

export const Event = styled.div`
  font-size: 12px;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:before {
    content: "•";
    color: red;
    display: inline-block;
    width: 10px;
    font-size: 25px;
    margin-left: 5px;
    color: ${({ color }) => color};
  }
`;
