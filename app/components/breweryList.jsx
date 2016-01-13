import React from 'react';
import BreweryListItem from './breweryListItem.jsx';
import BreweryStore from './../stores/breweryStore';

class BreweryList extends React.Component {
  componentDidMount() {
    console.log('brewery list mounted');
  }

  render() {
    let incomingData = this.props.items || [];
    let breweries = incomingData.map((item, index) => {
      return <BreweryListItem key={'item' + index } item={ item } />;
    });

    return (
      <div>
        <div>list of breweries!!</div>
        { breweries }
      </div>
    );
  }
}

export default BreweryList;
