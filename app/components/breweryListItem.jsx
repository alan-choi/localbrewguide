import React from 'react';
import ApiActions from './../actions/apiActions';

class breweryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.props.editMode) {
      this.props.fillBreweryForm(this.props.brewery);
    } else {
      ApiActions.changeSelectedBrewery(this.props.brewery._id);
    }
  }

  editBrewery(event) {
    event.preventDefault();
    console.log(this.props.brewery);
  }

  render() {
    return (
      <div className='brewery-item' onClick={ this.handleClick }>
         { this.props.brewery.name }
       </div>
    );
  }
}

export default breweryListItem;
