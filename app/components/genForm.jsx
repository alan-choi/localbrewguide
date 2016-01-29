var React = require('react');
var ApiUtil = require('./../utils/apiUtil');
import GenInput from './genInput';

class genForm extends React.Component {
  constructor() {
    super();
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
    var item = {};

    formData.splice(0, length - 1).forEach((input) => {
      item[input.name] = input.value;
    });

    if(this.props.editMode) {
      item._id = this.props.beer._id;
      ApiUtil.patchBeer(item);
    } else {
      item.breweryId = this.props.brewery._id;
      console.log('adding this beer to the database');
      ApiUtil.postBeer(item);
    }

    this.setState({ submitted: true });
    setTimeout(this.resetSubmit, 0);
  }

  resetSubmit() {
    this.setState({ submitted: false });
  }

  render() {
    var buttonText = ( this.props.editMode ? "update" : "add" );
    var allInputs = this.props.fieldNames.map((fieldName, idx) => {
      return (
        <GenInput
          key={ fieldName + idx }
          beer={ this.props.beer }
          brewery={ this.props.brewery }
          submitted={ this.state.submitted }
          editMode={ this.state.editMode }
          name={ fieldName } />);
    });

    return (
      <div className="beer-form">
        <form onSubmit={ this.handleSubmit }>
          { allInputs }
          <button>{ buttonText }</button>
        </form>
      </div>
    );
  }
}
export default genForm;
