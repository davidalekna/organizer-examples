import React from 'react';
import { FlexRow, H1 } from '../globals';
import { ToolbarWrapper } from './styles';
import { IconButton } from '../buttons';

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
          <button onClick={reset}>today</button>
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

const Toolbar = ({
  view,
  reset,
  subCalendarMonth,
  addCalendarMonth,
  getFullMonth,
  addCalendarYear,
  subCalendarYear,
  date,
  months,
  changeView,
}) => (
  <ToolbarWrapper>
    <FlexRow>
      <H1>{`📅 Calendar`}</H1>
      <Nav
        {...{
          view,
          reset,
          subCalendarMonth,
          addCalendarMonth,
          getFullMonth,
          addCalendarYear,
          subCalendarYear,
          date,
          months,
        }}
      />
    </FlexRow>
    <div>
      <button onClick={() => changeView('month')}>month</button>
      <button onClick={() => changeView('year')}>year</button>
    </div>
  </ToolbarWrapper>
);

export default Toolbar;
