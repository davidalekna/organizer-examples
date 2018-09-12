import React from 'react';
import Organizer from 'react-organizer';
import SmallCalendar from '../small';
import { addMonths, subMonths } from 'date-fns';

class SideCalendar extends React.Component {
  state = { outerDate: this.props.selected || new Date() };
  addMonth = () =>
    this.setState(state => ({ outerDate: addMonths(state.outerDate, 1) }));
  subMonth = () =>
    this.setState(state => ({ outerDate: subMonths(state.outerDate, 1) }));
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selected !== this.props.selected) {
      this.setState({ outerDate: this.props.selected || new Date() });
    }
  }
  render() {
    return (
      <Organizer
        date={this.state.outerDate}
        selected={this.props.selected}
        initialDays={this.props.days}
        initialMonths={this.props.months}
      >
        {({ days, getFullMonth }) => (
          <div style={{ borderBottom: '1px solid #ddd' }}>
            <SmallCalendar
              style={{ height: 220 }}
              {...{
                month: getFullMonth(),
                days,
                showNav: true,
                onPrevClick: () => this.subMonth(),
                onNextClick: () => this.addMonth(),
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
