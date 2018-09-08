import React from 'react';
import { YearGrid, Wrapper } from './styles';
import { Grid, GridItem, Day } from '../small/styles';

const YearView = ({ fullMonth, days }) => {
  const months = Array(13)
    .fill({})
    .map((u, month) => fullMonth(month));
  months.shift();
  return (
    <YearGrid>
      {months.map((month, key) => (
        <Wrapper key={key}>
          {month.name}
          <Grid>
            {days.map((day, index) => (
              <GridItem key={index} offset>
                {day.slice(0, 1)}
              </GridItem>
            ))}
            {month.days.map((day, index) => (
              <GridItem key={index} offset={day.offset}>
                <Day current={day.today}>{day.day}</Day>
              </GridItem>
            ))}
          </Grid>
        </Wrapper>
      ))}
    </YearGrid>
  );
};

export default YearView;
