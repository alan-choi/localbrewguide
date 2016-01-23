import React from 'react';
import ChartColors from './../Const/chartColors';
import PieChartLegend from './PieChartLegend';
import {Bar as BarChart} from 'react-chartjs';
import {Pie as PieChart} from 'react-chartjs';

class BeerBarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  findBeerColor(beerType) {
    let beerString = beerType.toUpperCase().replace(/\s/, "_");
    if (typeof ChartColors[beerString] === 'undefined') {
      return ChartColors.SPECIAL;
    }
    return ChartColors[beerString];
  }

  render(){
    var beerSummary = this.props.brewery.brewDetails.summary;
    var beerTypes = Object.keys(beerSummary);
    var beerTotals = [];
    var pieData = [];

    for (var key in beerSummary) {
      beerTotals.push(beerSummary[key]);
      pieData.push({
        value: beerSummary[key],
        label: key,
        color: this.findBeerColor(key)
      });
    }
    var chartOptions = {
    segmentShowStroke : true,
    segmentStrokeColor : "white",
    segmentStrokeWidth : 2,
    percentageInnerCutout : 25,
    animationSteps : 50,
    animationEasing : "none",
    animateRotate : true,
    };

    return (
      <div className='pie-chart'>
        <h2>Beer Breakdown</h2>
        <PieChartLegend chartData={pieData} />
        <PieChart
          className='beerchart'
          data={pieData}
          options={chartOptions}
          redraw />
      </div>
    );
  }
}

export default BeerBarChart;
