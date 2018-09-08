import React from 'react';
import DatesBrowser from 'react-dates-browser';
import { Day, Toolbar, Wrapper, Grid, GridItem } from './styles';

const SmallCalendar = ({ selectDate }) => (
  <DatesBrowser>
    {({ addCalendarMonth, subCalendarMonth, days, getFullMonth }) => {
      const fullMonth = getFullMonth();
      return (
        <Wrapper>
          <Toolbar>
            <div>{`${fullMonth.name} ${fullMonth.year}`}</div>
            <div>
              <button onClick={subCalendarMonth}>prev</button>
              &nbsp;
              <button onClick={addCalendarMonth}>next</button>
            </div>
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
