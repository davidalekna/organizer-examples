import React from 'react';
import DatesBrowser from 'react-dates-browser';
import { Day, Toolbar, Wrapper, Grid, GridItem } from './styles';
import { FlexRow } from '../globals';
import { IconButton } from '../buttons';

const SmallCalendar = ({ selectDate }) => (
  <DatesBrowser>
    {({ addCalendarMonth, subCalendarMonth, days, getFullMonth }) => {
      const fullMonth = getFullMonth();
      return (
        <Wrapper>
          <Toolbar>
            {`${fullMonth.name} ${fullMonth.year}`}
            <FlexRow style={{ alignItems: 'center', marginRight: 6 }}>
              <IconButton onClick={subCalendarMonth}>
                navigate_before
              </IconButton>
              &nbsp;
              <IconButton onClick={addCalendarMonth}>navigate_next</IconButton>
            </FlexRow>
          </Toolbar>
          <Grid>
            {days.map((day, index) => (
              <GridItem key={index} offset>
                {day.slice(0, 1)}
              </GridItem>
            ))}
            {fullMonth.days.map((day, index) => (
              <GridItem key={index} offset={day.offset}>
                <Day
                  current={day.today}
                  onClick={() => selectDate({ date: day.date })}
                >
                  {day.day}
                </Day>
              </GridItem>
            ))}
          </Grid>
        </Wrapper>
      );
    }}
  </DatesBrowser>
);

export default SmallCalendar;
