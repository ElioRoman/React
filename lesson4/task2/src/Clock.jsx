import React from "react";
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const formatterDate = date => moment(date).format('LTS')


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      localTime: formatterDate(getTimeWithOffset(this.props.offset))
    }

    setInterval(() => this.setState({
      localTime: formatterDate(getTimeWithOffset(this.props.offset))
    }), 1000)
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.localTime}</div>
      </div>
    )
  }
}

export default Clock;