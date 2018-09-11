import React from 'react';
import { YearGrid } from './styles';
import { withOrganizer } from 'react-organizer';
import SmallCalendar from '../small';

class YearView extends React.Component {
  render() {
    console.time('getFullYear');
    const months = this.props.organizer.getFullYear();
    console.timeEnd('getFullYear');
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
              days: this.props.organizer.days,
              weekends: true,
            }}
          />
        ))}
      </YearGrid>
    );
  }
}

export default withOrganizer(YearView);
