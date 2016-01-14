import React from 'react';
import GenInput from './genInput';

class GenForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    debugger;
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <GenInput name={"firstname"} />
        <GenInput name={"lastname"} />
        <button>submit</button>
      </form>
    );
  }
}
export default GenForm;
