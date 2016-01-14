var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('./../utils/apiUtil');
import GenInput from './genInput';
// var BreweryForm = React.createClass({
  // mixins: [LinkedStateMixin],
class BreweryForm extends React.Component {
  // getInitialState() {
  //   return {
  //     name: "",
  //     street: "",
  //     city: "",
  //     state: "",
  //     zip: "",
  //     website: ""
  //   };
  // }
  constructor() {
    super();
    this.listenToTyping = this.listenToTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fieldNames = ['name', 'street', 'city', 'state', 'zip', 'website'];
    this.state = { submitted: false };
  }

  handleSubmit(event) {
    event.preventDefault();
    let length = event.target.children.length;
    let formData = Array.prototype.slice.call(event.target.children);
    let brewery = {};
    formData.splice(0, length - 2).forEach((input) => { brewery[input.name] = input.value; });
    ApiUtil.postBrewery(brewery);
    this.setState({ submitted: true });
  }

  listenToTyping() {
    if (this.state.submitted) {
      this.setState({ submitted: false });
    }
  }

  render() {
    console.log('form rendered');
    let allInputs = this.fieldNames.map((fieldName, idx) => {
      return (
        <GenInput
          key={ fieldName + idx }
          listenToTyping={ this.listenToTyping }
          submitted={ this.state.submitted }
          name={ fieldName } />);
    });

    return (
      <div className="brewery-form">
        <form onSubmit={ this.handleSubmit }>
          { allInputs }
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default BreweryForm;
//
// resetState() {
//   this.setState({
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//     website: ""
//   });
// }
