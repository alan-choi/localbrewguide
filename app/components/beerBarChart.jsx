import React from 'react';
import ChartColors from './../Const/chartColors';
import PieChartLegend from './PieChartLegend';
import {Bar as BarChart} from 'react-chartjs';
import {Pie as PieChart} from 'react-chartjs';

class BeerBarChart extends React.Component {
  constructor() {
    super();
  }

  findBeerColor(beerType) {
    var beerString = beerType.toUpperCase().replace(/\s/, "_");
    if (typeof ChartColors[beerString] === 'undefined') {
      return ChartColors.SPECIAL;
    }
    return ChartColors[beerString];
  }

  render(){
    var beerSummary = this.props.brewery.brewDetails.summary;
    var pieData = [];
    var chartOptions = {
    segmentShowStroke : true,
    segmentStrokeColor : "white",
    segmentStrokeWidth : 2,
    percentageInnerCutout : 25,
    animationSteps : 50,
    animationEasing : "none",
    animateRotate : true,
    };

    for (let beerType in beerSummary) {
      pieData.push({
        value: beerSummary[beerType],
        label: beerType,
        color: this.findBeerColor(beerType)
      });
    }
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
