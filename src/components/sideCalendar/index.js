import React from 'react';
import Organizer from 'react-organizer';
import SmallCalendar from '../small';
import { addMonths, subMonths } from 'date-fns';

class SideCalendar extends React.Component {
  state = { initDate: this.props.selected || new Date() };
  addMonth = () =>
    this.setState(state => ({ initDate: addMonths(state.initDate, 1) }));
  subMonth = () =>
    this.setState(state => ({ initDate: subMonths(state.initDate, 1) }));
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selected !== this.props.selected) {
      this.setState({ initDate: this.props.selected || new Date() });
    }
  }
  render() {
    return (
      <Organizer date={this.state.initDate} selected={this.props.selected}>
        {({ days, getFullMonth }) => (
          <div style={{ borderBottom: '1px solid #ddd' }}>
            <SmallCalendar
              style={{ height: 220 }}
              {...{
                month: getFullMonth(),
                days,
                showNav: true,
                onPrevClick: () => this.addMonth(),
                onNextClick: () => this.subMonth(),
                onDayClick: date => this.props.selectDate({ date }),
              }}
            />
          </div>
        )}
      </Organizer>
    );
  }
}

export default SideCalendar;
