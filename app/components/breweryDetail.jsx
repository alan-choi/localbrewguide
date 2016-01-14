import React from 'react';

class BreweryDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="brewery-detail">
        { this.props.brewery.name }
      </div>
    );
  }
}

export default BreweryDetail;
