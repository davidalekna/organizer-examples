import React from 'react';
import { YearGrid, Wrapper } from './styles';
import { Grid, GridItem, Day } from '../small/styles';
import { withDatesBrowser } from 'react-dates-browser';

class YearView extends React.Component {
  state = { loading: true, months: [] };
  async componentDidMount() {
    this.setState({
      loading: false,
      months: await this.props.datesBrowser.getFullYear(),
    });
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({ loading: true });
      this.setState({
        loading: false,
        months: await this.props.datesBrowser.getFullYear(),
      });
    }
  }
  render() {
    const { months } = this.state;
    return (
      <YearGrid>
        {months.map((month, key) => (
          <Wrapper key={key}>
            {month.name}
            <Grid>
              {this.props.datesBrowser.days.map((day, index) => (
                <GridItem key={index} offset>
                  {day.slice(0, 1)}
                </GridItem>
              ))}
              {month.days.map((day, index) => (
                <GridItem key={index} offset={day.offset}>
                  <Day current={day.today}>{day.day}</Day>
                </GridItem>
              ))}
            </Grid>
          </Wrapper>
        ))}
      </YearGrid>
    );
  }
}

export default withDatesBrowser(YearView);
