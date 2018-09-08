import React from 'react';
import { Main, Day } from './styles';

const BigCalendar = ({ fullMonth }) => {
  return (
    <Main>
      {fullMonth.days.map((day, index) => (
        <Day key={index} offset={day.offset} current={day.today}>
          {day.day}
          {day.events.length > 0 && (
            <div>
              {day.events.map(event => (
                <div key={event.id}>{event.title}</div>
              ))}
            </div>
          )}
        </Day>
      ))}
    </Main>
  );
};

export default BigCalendar;
