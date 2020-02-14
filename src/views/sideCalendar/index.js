import React, { useState, useEffect, useRef } from "react";
import Organizer, { useOrganizer } from "@alekna/react-organizer";
import CalendarBase from "../../components/calendarBase";
import { addMonths, subMonths } from "date-fns";

export default function SideCalendar() {
  const { selected, selectDate, days, months } = useOrganizer();
  const [date, setDate] = useState(selected || new Date());

  const addMonth = () => setDate(now => addMonths(now, 1));
  const subMonth = () => setDate(now => subMonths(now, 1));

  useEffect(() => {
    if (prevValues.current !== selected) {
      setDate(selected || new Date());
    }
  }, [selected]);

  const prevValues = useRef(undefined);
  useEffect(() => {
    prevValues.current = selected;
  });

  return (
    <Organizer
      now={date}
      selected={selected}
      initialDays={days}
      initialMonths={months}
    >
      {({ days, getFullMonth }) => (
        <CalendarBase
          style={{ height: 220 }}
          {...{
            month: getFullMonth(),
            days,
            showNav: true,
            onPrevClick: subMonth,
            onNextClick: addMonth,
            onDayClick: date => selectDate({ date })
          }}
        />
      )}
    </Organizer>
  );
}
