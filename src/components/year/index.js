import React from 'react';
import { YearGrid, Wrapper } from './styles';
import { Grid, GridItem, Day } from '../small/styles';
import { withDatesBrowser } from 'react-dates-browser';

class YearView extends React.Component {
  render() {
    const months = this.props.datesBrowser.getFullYear();
    return (
      <YearGrid>
        {months.map((month, key) => (
          <Wrapper key={key}>
            {month.name}
            <Grid>
              {this.props.datesBrowser.days.map((day, index) => (
                <GridItem key={index} offset>
                  {day.slice(0, 1)}
                </GridItem>
              ))}
              {month.days.map((day, index) => (
                <GridItem key={index} offset={day.offset}>
                  <Day current={day.today} weekend={day.weekend}>
                    {day.day}
                  </Day>
                </GridItem>
              ))}
            </Grid>
          </Wrapper>
        ))}
      </YearGrid>
    );
  }
}

export default withDatesBrowser(YearView);
