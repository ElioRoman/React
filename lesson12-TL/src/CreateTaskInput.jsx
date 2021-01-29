import React, { Component } from 'react';

class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="create-task__input"
        />
        <button className="btn create-task__btn" onClick={this.handleTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

// 1. Take text from input
// 2. Crate task with this text
// 3. Add created task to the list
