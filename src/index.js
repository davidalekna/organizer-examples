import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme.default}>
        <Root>
          <div>asd</div>
        </Root>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
