import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./reset.css";
import { ThemeProvider } from "styled-components";
import { Root } from "./components/globals";
import Organizer from "@alekna/react-organizer";
import theme from "./theme";
import { languages, events } from "./helpers";
import Toolbar from "./views/toolbar";
import MonthCalendar from "./views/month";
import YearView from "./views/year";
import Sidebar from "./views/sidebar";

function App() {
  const [state, setState] = useReducer((p, n) => ({ ...p, ...n }), {
    events,
    view: "month",
    lang: "en",
    languages: Object.keys(languages)
  });

  const changeView = view => setState({ view });
  const switchLanguage = n => {
    setState({ lang: [...state.lang, ...state.languages][n] });
  };
  const addEvent = event => {
    setState({
      events: [...state.events, event]
    });
  };
  const renderView = ({ getFullMonth, days }) => {
    switch (state.view) {
      case "year":
        return <YearView />;
      default:
        return <MonthCalendar getFullMonth={getFullMonth} days={days} />;
    }
  };
  const detectLanguage = select => {
    return languages[state.lang] && languages[state.lang][select];
  };

  return (
    <ThemeProvider theme={theme.default}>
      <>
        <GlobalStyle />
        <Organizer
          events={state.events}
          initialMonths={detectLanguage("months")}
          initialDays={detectLanguage("days")}
        >
          {({ getFullMonth, selectDate, days, selected, months }) => {
            return (
              <Root>
                <Toolbar
                  {...{
                    view: state.view,
                    changeView
                  }}
                />
                <Sidebar
                  {...{
                    addEvent,
                    selectDate,
                    selected,
                    days,
                    months
                  }}
                />
                {renderView({ getFullMonth, days })}
              </Root>
            );
          }}
        </Organizer>
      </>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
