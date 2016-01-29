import React from 'react';

class GenInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ""
    };
  }

  componentWillReceiveProps(newProps) {
    var brewery = newProps.brewery;
    var beer = newProps.beer;

    if (newProps.submitted || !newProps.editMode) {
      this.setState({ text: "" });
    } else if(newProps.editMode && beer !== 'empty beer') {
      this.setState({ text: beer[this.props.name] });
    } else if (newProps.editMode) {
      this.setState({ text: brewery[this.props.name] });
    }
  }

  handleChange(event) {
    this.setState({ text : event.target.value });
  }

  render() {
    var text = this.state.text;
    return(
      <input
        type="text"
        onChange={this.handleChange}
        name={this.props.name}
        value={ text }
        placeholder={this.props.name}>
      </input>
    );
  }
}

export default GenInput;
