import React from 'react';
import { YearGrid } from './styles';
import { withOrganizer } from 'react-organizer';
import SmallCalendar from '../small';

const YearView = ({ organizer: { getFullYear, selectDate, days } }) => (
  <YearGrid>
    {getFullYear().map((month, key) => (
      <SmallCalendar
        key={key}
        {...{
          month,
          days,
          showNav: false,
          weekends: true,
          onDayClick: date => selectDate({ date }),
        }}
      />
    ))}
  </YearGrid>
);

export default withOrganizer(YearView);
