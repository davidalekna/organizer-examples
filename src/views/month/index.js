import React from 'react';
import { FlexCol } from '../../components/globals';
import { Main, DayBlock, Day, DayName, Event } from './styles';

const MonthCalendar = ({ getFullMonth, days }) => (
  <Main>
    {getFullMonth(undefined, true).days.map((day, index) => (
      <DayBlock
        key={index}
        darker={day.offset}
        current={day.today}
        selected={day.selected}
      >
        <DayName>{days[index] && days[index].slice(0, 3)}</DayName>
        <Day current={day.today}>{day.day}</Day>
        {day.events.length > 0 && (
          <FlexCol>
            {day.events.map((event, index) => (
              <Event key={index} color={event.color}>
                {event.title}
              </Event>
            ))}
          </FlexCol>
        )}
      </DayBlock>
    ))}
  </Main>
);

export default MonthCalendar;
