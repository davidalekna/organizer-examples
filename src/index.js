import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root, Toolbar, Sidebar, FlexRow, H1 } from './components/globals';
import DatesBrowser from 'react-dates-browser';
import theme from './theme';
import SmallCalendar from './components/small';
import BigCalendar from './components/big';
import events from './events';

class App extends React.Component {
  state = { events };
  addEvent = event => {
    this.setState(state => ({
      events: [...state.events, event],
    }));
  };
  render() {
    return (
      <ThemeProvider theme={theme.default}>
        <DatesBrowser events={this.state.events}>
          {({
            subCalendarMonth,
            addCalendarMonth,
            getFullMonth,
            selectDate,
          }) => {
            const fullMonth = getFullMonth();
            return (
              <Root>
                <Toolbar>
                  <FlexRow>
                    <H1>{`📅 Calendar`}</H1>
                    <FlexRow>
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <button onClick={subCalendarMonth}>prev</button>
                      <button onClick={addCalendarMonth}>next</button>
                      <H1>{`${fullMonth.name} ${fullMonth.year}`}</H1>
                    </FlexRow>
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
                <BigCalendar fullMonth={fullMonth} />
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
