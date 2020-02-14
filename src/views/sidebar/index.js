import React from "react";
import { Wrapper } from "./styles";
// move calendar in here;
import SideCalendar from "../sideCalendar";
import { useOrganizer } from "@alekna/react-organizer";

const Sidebar = () => {
  const { addEvent } = useOrganizer();
  return (
    <Wrapper>
      <SideCalendar />
      <div style={{ borderTop: "1px solid grey" }}>
        <ul>
          <li>Publick Holidays</li>
          <li>Calendar 2</li>
        </ul>
        <button
          onClick={() =>
            addEvent({
              id: 333,
              title: "make that soup already!",
              location: "location address",
              starts: new Date("2018", "08", "05"),
              color: "#b342f4",
              createdBy: "Username",
              calendar: "Reminders"
            })
          }
        >
          add event
        </button>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
