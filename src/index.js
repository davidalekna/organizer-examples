import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Root, Sidebar } from './components/globals';
import Organizer from 'react-organizer';
import theme from './theme';
import SideCalendar from './components/sideCalendar';
import MonthCalendar from './components/month';
import YearView from './components/year';
import { languages, events } from './helpers';
import Toolbar from './components/toolbar';

class App extends React.Component {
  state = {
    events,
    view: 'year',
    lang: 'en',
    languages: Object.keys(languages),
  };
  changeView = view => this.setState({ view });
  switchLanguage = lang => this.setState({ lang });
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
