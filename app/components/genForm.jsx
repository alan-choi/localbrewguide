import React from 'react';
import GenInput from './genInput';

var GenForm = React.createClass ({

  handleSubmit(event) {
    event.preventDefault();
    debugger;
  },

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <GenInput name={"firstname"} />
        <GenInput name={"lastname"} />
        <button>submit</button>
      </form>
    );
  }
});

module.exports = GenForm;
