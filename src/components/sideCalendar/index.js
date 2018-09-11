import React from 'react';
import Organizer from 'react-organizer';
import SmallCalendar from '../small';

const SideCalendar = ({ selectDate }) => (
  <Organizer>
    {({ addCalendarMonth, subCalendarMonth, days, getFullMonth }) => (
      <div style={{ borderBottom: '1px solid #ddd' }}>
        <SmallCalendar
          style={{ height: 220 }}
          {...{
            month: getFullMonth(),
            showNav: true,
            onPrevClick: subCalendarMonth,
            onNextClick: addCalendarMonth,
            onDayClick: selectDate,
            days,
          }}
        />
      </div>
    )}
  </Organizer>
);

export default SideCalendar;
