import React from "react";
import { FlexRow, H1 } from "../../components/globals";
import { IconButton, Button } from "../../components/buttons";
import { ToolbarWrapper } from "./styles";
import { useOrganizer } from "@alekna/react-organizer";

const Nav = ({ view }) => {
  const {
    reset,
    subCalendarMonth,
    addCalendarMonth,
    addCalendarYear,
    subCalendarYear,
    now,
    months
  } = useOrganizer();

  switch (view) {
    case "year":
      return (
        <FlexRow>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button onClick={reset}>today</Button>
          <IconButton size="24px" onClick={subCalendarYear}>
            navigate_before
          </IconButton>
          <IconButton size="24px" onClick={addCalendarYear}>
            navigate_next
          </IconButton>
          <H1>{now.getFullYear()}</H1>
        </FlexRow>
      );
    default:
      return (
        <FlexRow>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Button onClick={reset}>today</Button>
          <IconButton size="24px" onClick={subCalendarMonth}>
            navigate_before
          </IconButton>
          <IconButton size="24px" onClick={addCalendarMonth}>
            navigate_next
          </IconButton>
          <H1 style={{ textTransform: "capitalize" }}>{`${
            months[now.getMonth()]
          } ${now.getFullYear()}`}</H1>
        </FlexRow>
      );
  }
};

const Toolbar = ({ changeView, ...props }) => (
  <ToolbarWrapper>
    <FlexRow>
      <H1>{`📅 Calendar`}</H1>
      <Nav {...props} />
    </FlexRow>
    <div>
      <Button onClick={() => changeView("month")}>month</Button>
      <Button onClick={() => changeView("year")}>year</Button>
    </div>
  </ToolbarWrapper>
);

export default Toolbar;
