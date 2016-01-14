import React from 'react';

// var GenInput = React.createClass ({
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
    if (newProps.submitted) {
      this.setState({ text: "" });
    }
  }

  handleChange(event) {
    this.props.listenToTyping();
    this.setState({ text : event.target.value });
  }

  render() {
    // console.log(this.props);
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
