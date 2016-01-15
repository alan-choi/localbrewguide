var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('./../utils/apiUtil');
import GenInput from './genInput';

class BreweryForm extends React.Component {
  constructor() {
    super();
    this.listenToTyping = this.listenToTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fieldNames = ['name', 'street', 'city', 'state', 'zip', 'website'];
    this.state = { submitted: false, editMode: false };
  }

  componentWillReceiveProps(newProps) {
      this.setState({ editMode: newProps.editMode });
  }

  handleSubmit(event) {
    event.preventDefault();
    let length = event.target.children.length;
    let formData = Array.prototype.slice.call(event.target.children);
    let brewery = {};
    formData.splice(0, length - 2).forEach((input) => { brewery[input.name] = input.value; });
    if(this.props.editMode) {
      brewery._id = this.props.brewery._id;
      // ApiUtil.patchBrewery(brewery);
    } else {
      ApiUtil.postBrewery(brewery);
    }
    this.setState({ submitted: true });
  }

  listenToTyping() {
    if (this.state.submitted) {
      this.setState({ submitted: false });
    }
  }

  render() {
    let allInputs = this.fieldNames.map((fieldName, idx) => {
      return (
        <GenInput
          key={ fieldName + idx }
          brewery={ this.props.brewery }
          listenToTyping={ this.listenToTyping }
          submitted={ this.state.submitted }
          editMode={ this.state.editMode }
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
