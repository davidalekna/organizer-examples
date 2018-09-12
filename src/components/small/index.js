import React from 'react';
import { Day, Toolbar, Wrapper, Grid, GridItem } from './styles';
import { FlexRow } from '../globals';
import { IconButton } from '../buttons';

const SmallCalendar = ({
  month,
  days,
  showNav,
  onPrevClick,
  onNextClick,
  onDayClick,
  weekends,
  style,
}) => {
  return (
    <Wrapper>
      <Toolbar big={showNav} style={{ fontSize: showNav ? '12px' : '15px' }}>
        {month.name} {showNav && month.year}
        {showNav && (
          <FlexRow style={{ alignItems: 'center', marginRight: 6 }}>
            <IconButton onClick={onPrevClick}>navigate_before</IconButton>
            &nbsp;
            <IconButton onClick={onNextClick}>navigate_next</IconButton>
          </FlexRow>
        )}
      </Toolbar>
      <Grid style={style}>
        {days.map((day, index) => (
          <GridItem key={index} darker>
            {day.slice(0, 1)}
          </GridItem>
        ))}
        {month.days.map((day, index) => (
          <GridItem key={index} darker={day.offset}>
            <Day
              current={day.today}
              weekend={weekends && day.weekend}
              hoverable={!day.offset}
              selected={day.selected}
              onClick={() => !day.offset && onDayClick(day.date)}
            >
              {day.day}
            </Day>
          </GridItem>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default SmallCalendar;
