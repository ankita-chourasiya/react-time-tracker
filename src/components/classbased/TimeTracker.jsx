import React, { Component } from 'react'

export default class TimeTracker extends Component {
  constructor(){
    super();
    this.state = {
      initialCount: 0,
    };
  }

  increaseTime = () => {
    this.setState((prevState) => {
      const newCount = prevState.initialCount + 1;

      if (newCount % 31 === 0) {
        return { initialCount: 0 };
      }

      return { initialCount: newCount };
    });
  };

  componentDidMount() {
    this.intervalId = setInterval(this.increaseTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <div>
          <h1>Class Based Time Tracker {this.state.initialCount}</h1>
        </div>
      </>
    )
  }
}
