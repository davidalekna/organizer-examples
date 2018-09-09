import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root, Toolbar, Sidebar, FlexRow, H1 } from './components/globals';
import { IconButton } from './components/buttons';
import DatesBrowser from 'react-dates-browser';
import theme from './theme';
import SideCalendar from './components/sideCalendar';
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
    date,
    subCalendarMonth,
    addCalendarMonth,
    subCalendarYear,
    addCalendarYear,
  }) => {
    console.log(date);
    switch (this.state.view) {
      case 'year':
        return (
          <FlexRow>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={reset}>today</button>
            <IconButton size="24px" onClick={subCalendarYear}>
              navigate_before
            </IconButton>
            <IconButton size="24px" onClick={addCalendarYear}>
              navigate_next
            </IconButton>
            <H1>{date.getFullYear()}</H1>
          </FlexRow>
        );
      default:
        return (
          <FlexRow>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={reset}>today</button>
            <IconButton size="24px" onClick={subCalendarMonth}>
              navigate_before
            </IconButton>
            <IconButton size="24px" onClick={addCalendarMonth}>
              navigate_next
            </IconButton>
            {/* ${date.getFullYear.name} */}
            <H1>{`${date.getFullYear()}`}</H1>
          </FlexRow>
        );
    }
  };
  renderView = ({ getFullMonth, days }) => {
    switch (this.state.view) {
      case 'year':
        return <YearView />;
      default:
        return <BigCalendar getFullMonth={getFullMonth} days={days} />;
    }
  };
  changeView = view => {
    this.setState({
      view,
    });
  };
  render() {
    return (
      <ThemeProvider theme={theme.default}>
        <DatesBrowser events={this.state.events} onReset={this.handleReset}>
          {({
            addCalendarMonth,
            subCalendarMonth,
            addCalendarYear,
            subCalendarYear,
            getFullMonth,
            selectDate,
            reset,
            date,
            days,
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
                      date,
                    })}
                  </FlexRow>
                  <div>
                    <button onClick={() => this.changeView('month')}>
                      month
                    </button>
                    <button onClick={() => this.changeView('year')}>
                      year
                    </button>
                  </div>
                </Toolbar>
                <Sidebar>
                  <SideCalendar selectDate={selectDate} />
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
                {this.renderView({ getFullMonth, days })}
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
