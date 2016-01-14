var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('./../utils/apiUtil');

var BreweryForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      website: ""
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    let brewery = this.state;
    ApiUtil.postBrewery(brewery);
  },

  render: function() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>Name: </label>
        <input type='text' valueLink={this.linkState('name')}></input>
        <br />
        <label>Street: </label>
        <input type='text' valueLink={this.linkState('street')}></input>
        <br />
        <label>City: </label>
        <input type='text' valueLink={this.linkState('city')}></input>
        <br />
        <label>State: </label>
        <input type='text' valueLink={this.linkState('state')}></input>
        <br />
        <label>Zip: </label>
        <input type='text' valueLink={this.linkState('zip')}></input>
        <br />
        <label>Website: </label>
        <input type='text' valueLink={this.linkState('website')}></input>
        <br />
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = BreweryForm;
