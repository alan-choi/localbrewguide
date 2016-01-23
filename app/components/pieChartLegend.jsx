import React from 'react';

class PieChartLegend extends React.Component {
  constructor(){
    super();
  }

  render(){
    var beers = this.props.chartData;
    var legendItems = beers.map((item, index) => {
      return (<li key={ item.label + index }>
        <div className='legendColor' style={{
            'backgroundColor': item.color,
            'height': '20px',
            'width': '20px',
            'borderRadius' : '10px',
            'margin': '5px auto',
          }} ></div>
        <p>{item.label}</p>
      </li>);
    });
    return (
      <ul className='legend'>
        { legendItems }
      </ul>
    );
  }
}

export default PieChartLegend;
