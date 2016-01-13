import React from 'react';

class breweryListItem extends React.Component {
  render() {
    return (
      <div> { this.props.item.name } </div>
    );
  }
}

export default breweryListItem;
