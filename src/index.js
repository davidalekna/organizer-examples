import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root, Toolbar, Sidebar, FlexRow, H1 } from './components/globals';
import DatesBrowser from 'react-dates-browser';
import theme from './theme';
import SmallCalendar from './components/small';
import BigCalendar from './components/big';
import YearView from './components/year';
import events from './events';

class App extends React.Component {
  state = { events, view: 'year' };
  addEvent = event => {
    this.setState(state => ({
      events: [...state.events, event],
    }));
  };
  handleReset = () => {
    console.log('reset');
  };
  renderToolbar = ({
    reset,
    subCalendarMonth,
    addCalendarMonth,
    getFullMonth,
    subCalendarYear,
    addCalendarYear,
  }) => {
    const fullMonth = getFullMonth();
    switch (this.state.view) {
      case 'year':
        return (
          <FlexRow>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={reset}>today</button>
            <button onClick={subCalendarYear}>prev</button>
            <button onClick={addCalendarYear}>next</button>
            <H1>{fullMonth.year}</H1>
          </FlexRow>
        );
      default:
        return (
          <FlexRow>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={reset}>today</button>
            <button onClick={subCalendarMonth}>prev</button>
            <button onClick={addCalendarMonth}>next</button>
            <H1>{`${fullMonth.name} ${fullMonth.year}`}</H1>
          </FlexRow>
        );
    }
  };
  renderView = ({ getFullMonth, getFullYear, days }) => {
    switch (this.state.view) {
      case 'year':
        return <YearView />;
      default:
        return <BigCalendar getFullMonth={getFullMonth} />;
    }
  };
  render() {
    return (
      <ThemeProvider theme={theme.default}>
        <DatesBrowser events={this.state.events} onReset={this.handleReset}>
          {({
            subCalendarMonth,
            addCalendarMonth,
            getFullMonth,
            getFullYear,
            selectDate,
            reset,
            days,
            addCalendarYear,
            subCalendarYear,
          }) => {
            return (
              <Root>
                <Toolbar>
                  <FlexRow>
                    <H1>{`📅 Calendar`}</H1>
                    {this.renderToolbar({
                      reset,
                      subCalendarMonth,
                      addCalendarMonth,
                      getFullMonth,
                      addCalendarYear,
                      subCalendarYear,
                    })}
                  </FlexRow>
                  <div>Select View Type + Search for events</div>
                </Toolbar>
                <Sidebar>
                  <SmallCalendar selectDate={selectDate} />
                  <div>
                    <button
                      onClick={() =>
                        this.addEvent({
                          id: 333,
                          title: 'make that soup already!',
                          location: 'location address',
                          starts: new Date('2018', '08', '05'),
                          color: '#b342f4',
                          createdBy: 'Username',
                          calendar: 'Reminders',
                        })
                      }
                    >
                      add event
                    </button>
                  </div>
                </Sidebar>
                {this.renderView({ getFullMonth, getFullYear, days })}
              </Root>
            );
          }}
        </DatesBrowser>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
