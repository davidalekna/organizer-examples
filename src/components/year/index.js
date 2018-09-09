import React from 'react';
import { YearGrid } from './styles';
import { withDatesBrowser } from 'react-dates-browser';
import SmallCalendar from '../small';

class YearView extends React.Component {
  render() {
    const months = this.props.datesBrowser.getFullYear();
    return (
      <YearGrid>
        {months.map((month, key) => (
          <SmallCalendar
            key={key}
            {...{
              month,
              showNav: false,
              onDayClick: ({ date }) => {
                console.log(date);
                alert('clicked on date');
              },
              days: this.props.datesBrowser.days,
              weekends: true,
            }}
          />
        ))}
      </YearGrid>
    );
  }
}

export default withDatesBrowser(YearView);
