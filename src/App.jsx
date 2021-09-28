import './App.css';
import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    return (
      <div>
        <Section title="Please, leave feedback" className="feedback" />
        <Statistics />
      </div>
    )
  }
}
