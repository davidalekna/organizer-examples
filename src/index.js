import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root, Sidebar } from './components/globals';
import Organizer from 'react-organizer';
import theme from './theme';
import { languages, events } from './helpers';
import Toolbar from './views/toolbar';
import SideCalendar from './views/sideCalendar';
import MonthCalendar from './views/month';
import YearView from './views/year';

class App extends React.Component {
  state = {
    events,
    view: 'month',
    lang: 'en',
    languages: Object.keys(languages),
  };
  changeView = view => this.setState({ view });
  switchLanguage = n => {
    this.setState(state => ({ lang: [...state.lang, ...state.languages][n] }));
  };
  addEvent = event => {
    this.setState(state => ({
      events: [...state.events, event],
    }));
  };
  renderView = ({ getFullMonth, days }) => {
    switch (this.state.view) {
      case 'year':
        return <YearView />;
      default:
        return <MonthCalendar getFullMonth={getFullMonth} days={days} />;
    }
  };
  detectLanguage = select => {
    return languages[this.state.lang] && languages[this.state.lang][select];
  };
  render() {
    return (
      <ThemeProvider theme={theme.default}>
        <Organizer
          events={this.state.events}
          initialMonths={this.detectLanguage('months')}
          initialDays={this.detectLanguage('days')}
        >
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
            selected,
            months,
          }) => {
            return (
              <Root>
                <Toolbar
                  {...{
                    view: this.state.view,
                    reset,
                    subCalendarMonth,
                    addCalendarMonth,
                    getFullMonth,
                    addCalendarYear,
                    subCalendarYear,
                    date,
                    months,
                    changeView: this.changeView,
                  }}
                />
                <Sidebar>
                  <SideCalendar
                    {...{
                      selectDate,
                      selected,
                      days,
                      months,
                    }}
                  />
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
        </Organizer>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
