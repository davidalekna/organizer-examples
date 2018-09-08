import React from 'react';
import DatesBrowser from 'react-dates-browser';
import { Day, Toolbar, Wrapper, Grid, GridItem } from './styles';

const SmallCalendar = () => (
  <DatesBrowser>
    {({ addCalendarMonth, subCalendarMonth, days, getFullMonth }) => {
      const { prev, current, next } = getFullMonth();
      return (
        <Wrapper>
          <Toolbar>
            <div>{`${current.name} ${current.year}`}</div>
            <div>
              <button onClick={addCalendarMonth}>prev</button>
              &nbsp;
              <button onClick={subCalendarMonth}>next</button>
            </div>
          </Toolbar>
          <Grid>
            {days.map((day, index) => (
              <GridItem key={index}>{day.slice(0, 1)}</GridItem>
            ))}
            {prev.days.map((day, index) => (
              <GridItem key={index} offset>
                <Day>{day.day}</Day>
              </GridItem>
            ))}
            {current.days.map((day, index) => (
              <GridItem key={index} current={day.today}>
                <Day>{day.day}</Day>
              </GridItem>
            ))}
            {next.days.map((day, index) => (
              <GridItem key={index} offset>
                <Day>{day.day}</Day>
              </GridItem>
            ))}
          </Grid>
        </Wrapper>
      );
    }}
  </DatesBrowser>
);

export default SmallCalendar;
