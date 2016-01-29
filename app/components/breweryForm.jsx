var React = require('react');
var ApiUtil = require('./../utils/apiUtil');
import GenInput from './genInput';

class BreweryForm extends React.Component {
  constructor() {
    super();
    this.fieldNames =
      ['name', 'street', 'city', 'state', 'zip', 'neighborhood','website'];
    this.state = { submitted: false, editMode: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetSubmit = this.resetSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
      this.setState({ editMode: newProps.editMode });
  }

  handleSubmit(event) {
    event.preventDefault();
    var length = event.target.children.length;
    var formData = Array.prototype.slice.call(event.target.children);
    var brewery = {};

    formData.splice(0, length - 1).forEach((input) =>
      { brewery[input.name] = input.value; });

    if(this.props.editMode) {
      brewery._id = this.props.brewery._id;
      // ApiUtil.patchBrewery(brewery);
    } else {
      // ApiUtil.postBrewery(brewery);
    }
    
    this.setState({ submitted: true });
    setTimeout(this.resetSubmit, 0);
  }

  resetSubmit() {
    this.setState({ submitted: false });
  }

  render() {
    var allInputs = this.fieldNames.map((fieldName, idx) => {
      return (
        <GenInput
          key={ fieldName + idx }
          beer ={'empty beer'}
          brewery={ this.props.brewery }
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
