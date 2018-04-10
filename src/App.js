import React, { Component } from 'react';

function parseTime(datetime=new Date()){
  return {
    hour: datetime.getHours(),
    minute: datetime.getMinutes(),
    second: datetime.getSeconds()
  };
}

function zeroPadding(number, length=2) {
  return (Array(length).join("0") + number).slice(-length);
}

class App extends Component {

  constructor(props){
    super(props);
    
    // initial state
    const datetime = parseTime();
    this.state = {
      // '...' expands the specified object 
      ...datetime
    };
    
    // bind event handler
    this.handleTime = this.handleTime.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.handleTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update state when clicked
  handleTime(){
    const datetime = parseTime();
    this.setState({
      ...datetime
    });
  }

  render() {

    const hour = zeroPadding(this.state.hour);
    const minute = zeroPadding(this.state.minute);
    const second = zeroPadding(this.state.second);

    return (
      <div>
        {hour}:{minute}:{second}
      </div>
    );
  }
}

export default App;
