import React from 'react';

var GenInput = React.createClass ({
  getInitialState() {
    var name = this.props.name;
    return { name : "" };
  },

  handleChange(event) {
    event.preventDefault();
    var name = this.props.name;
    console.log(this.state);
    this.setState({ name : event.target.value });
  },

  render() {
    return (
      <input name={this.props.name} value={this.state.value}></input>
    );
  }
});

module.exports = GenInput;
