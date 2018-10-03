import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './reset.css';
import { ThemeProvider } from 'styled-components';
import { Root } from './components/globals';
import Organizer from 'react-organizer';
import theme from './theme';
import { languages, events } from './helpers';
import Toolbar from './views/toolbar';
import MonthCalendar from './views/month';
import YearView from './views/year';
import Sidebar from './views/sidebar';

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
        <React.Fragment>
          <GlobalStyle />
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
                  <Sidebar
                    {...{
                      addEvent: this.addEvent,
                      selectDate,
                      selected,
                      days,
                      months,
                    }}
                  />
                  {this.renderView({ getFullMonth, days })}
                </Root>
              );
            }}
          </Organizer>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
