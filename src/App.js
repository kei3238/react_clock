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
  render() {

    const current_time = parseTime();
    const hour = zeroPadding(current_time.hour);
    const minute = zeroPadding(current_time.minute);
    const second = zeroPadding(current_time.second);

    return (
      <div>
        {hour}:{minute}:{second}
      </div>
    );
  }
}

export default App;
