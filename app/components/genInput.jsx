import React from 'react';

class GenInput extends React.Component {
  constructor(props) {
    super(props);
    let name = props.name;
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ""
    };
  }

  componentWillReceiveProps(newProps) {
    var brewery = newProps.brewery;
    if (newProps.submitted || !newProps.editMode) {
      this.setState({ text: "" });
    } else if(newProps.editMode) {
      this.setState({ text: brewery[this.props.name] });
    }
  }

  handleChange(event) {
    this.props.listenToTyping();
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
// });
export default GenInput;
// module.exports = GenInput;
