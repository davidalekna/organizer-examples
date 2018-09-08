import React from 'react';
import { FlexCol } from '../globals';
import { Main, DayBlock, Day, Event } from './styles';

const BigCalendar = ({ fullMonth }) => {
  return (
    <Main>
      {fullMonth.days.map((day, index) => (
        <DayBlock key={index} offset={day.offset} current={day.today}>
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
