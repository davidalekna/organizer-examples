import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root, Toolbar, Sidebar, Main, Day } from './components/globals';
import DatesBrowser from 'react-dates-browser';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme.default}>
        <Root>
          <Toolbar>
            <div>
              <div>Calendar</div>
              <div>Switch Months or years</div>
            </div>
            <div>Select View Type + Search for events</div>
          </Toolbar>
          <Sidebar>
            <div>Small Calendar</div>
            <div>Different Calendars</div>
          </Sidebar>
          <DatesBrowser>
            {({ getFullMonth }) => {
              const { prev, current, next } = getFullMonth({
                month: 9,
                year: 2018,
              });
              return (
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
              );
            }}
          </DatesBrowser>
        </Root>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
