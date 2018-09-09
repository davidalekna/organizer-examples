import React from 'react';
import DatesBrowser from 'react-dates-browser';
import SmallCalendar from '../small';

const SideCalendar = ({ selectDate }) => (
  <DatesBrowser>
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
  </DatesBrowser>
);

export default SideCalendar;
