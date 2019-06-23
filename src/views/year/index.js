import React from 'react';
import { YearGrid } from './styles';
import { withOrganizer } from '@alekna/react-organizer';
import CalendarBase from '../../components/calendarBase';

const YearView = ({ organizer: { getFullYear, selectDate, days } }) => (
  <YearGrid>
    {getFullYear().map((month, key) => (
      <CalendarBase
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
