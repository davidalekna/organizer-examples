import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root, Toolbar, Sidebar, Main, Day } from './components/globals';
import DatesBrowser from 'react-dates-browser';
import theme from './theme';
import SmallCalendar from './components/small';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme.default}>
        <DatesBrowser>
          {({ getFullMonth }) => {
            const { prev, current, next } = getFullMonth();
            return (
              <Root>
                <Toolbar>
                  <div>
                    <div>Calendar</div>
                    <div>Switch Months or years</div>
                  </div>
                  <div>Select View Type + Search for events</div>
                </Toolbar>
                <Sidebar>
                  <SmallCalendar />
                </Sidebar>
                <Main>
                  {prev.days.map((day, index) => (
                    <Day key={index} offset>
                      {day.day}
                    </Day>
                  ))}
                  {current.days.map((day, index) => (
                    <Day key={index} current={day.today}>
                      {day.day}
                      {day.events.length > 0 && (
                        <div>
                          {day.events.map(event => (
                            <div key={event.id}>{event.title}</div>
                          ))}
                        </div>
                      )}
                    </Day>
                  ))}
                  {next.days.map((day, index) => (
                    <Day key={index} offset>
                      {day.day}
                    </Day>
                  ))}
                </Main>
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
