import React from 'react';
import { FlexCol } from '../globals';
import { Main, DayBlock, Day, DayName, Event } from './styles';

const BigCalendar = ({ getFullMonth, days }) => {
  const fullMonth = getFullMonth(undefined, true);
  return (
    <Main>
      {fullMonth.days.map((day, index) => (
        <DayBlock key={index} offset={day.offset} current={day.today}>
          <DayName>{days[index] && days[index].slice(0, 3)}</DayName>
          <Day current={day.today}>{day.day}</Day>
          {day.events.length > 0 && (
            <FlexCol>
              {day.events.map(event => (
                <Event key={event.id} color={event.color}>
                  {event.title}
                </Event>
              ))}
            </FlexCol>
          )}
        </DayBlock>
      ))}
    </Main>
  );
};

export default BigCalendar;
