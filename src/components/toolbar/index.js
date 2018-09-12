import React from 'react';
import { FlexRow, H1 } from '../globals';
import { ToolbarWrapper } from './styles';
import { IconButton, Button } from '../buttons';

const Nav = ({
  view,
  reset,
  date,
  subCalendarMonth,
  addCalendarMonth,
  subCalendarYear,
  addCalendarYear,
  months,
}) => {
  switch (view) {
    case 'year':
      return (
        <FlexRow>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button onClick={reset}>today</Button>
          <IconButton size="24px" onClick={subCalendarYear}>
            navigate_before
          </IconButton>
          <IconButton size="24px" onClick={addCalendarYear}>
            navigate_next
          </IconButton>
          <H1>{date.getFullYear()}</H1>
        </FlexRow>
      );
    default:
      return (
        <FlexRow>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button onClick={reset}>today</button>
          <IconButton size="24px" onClick={subCalendarMonth}>
            navigate_before
          </IconButton>
          <IconButton size="24px" onClick={addCalendarMonth}>
            navigate_next
          </IconButton>
          <H1 style={{ textTransform: 'capitalize' }}>{`${
            months[date.getMonth()]
          } ${date.getFullYear()}`}</H1>
        </FlexRow>
      );
  }
};

const Toolbar = ({ changeView, ...props }) => (
  <ToolbarWrapper>
    <FlexRow>
      <H1>{`📅 Calendar`}</H1>
      <Nav {...props} />
    </FlexRow>
    <div>
      <Button onClick={() => changeView('month')}>month</Button>
      <Button onClick={() => changeView('year')}>year</Button>
    </div>
  </ToolbarWrapper>
);

export default Toolbar;
