import React from 'react';
import { Main, Day } from './styles';

const BigCalendar = ({ fullMonth }) => {
  const { prev, current, next } = fullMonth;
  return (
    <Main>
      {prev.days.map((day, index) => (
        <Day key={index} offset>
          {day.day}
        </Day>
      ))}
      {current.days.map((day, index) => (
        <Day key={index} current={day.today}>
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
      {next.days.map((day, index) => (
        <Day key={index} offset>
          {day.day}
        </Day>
      ))}
    </Main>
  );
};

export default BigCalendar;
