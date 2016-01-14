import React from 'react';

class breweryListItem extends React.Component {
  render() {
    return (
      <div className='brewery-item'> { this.props.brewery.name }</div>
    );
  }
}

export default breweryListItem;
