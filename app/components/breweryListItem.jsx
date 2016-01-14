import React from 'react';

class breweryListItem extends React.Component {
  render() {
    return (
      <div> { this.props.brewery.name }</div>
    );
  }
}

export default breweryListItem;
