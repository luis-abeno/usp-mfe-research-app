import React from 'react';
import Chart from 'react-apexcharts';

type PieChartOptions = {
  series: number[];
  chart: {
    width: number;
    type: 'pie' | 'line' | 'area' | 'bar' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'boxPlot' | 'radar' | 'polarArea' | 'rangeBar' | 'rangeArea' | 'treemap';
  };
  title: {
    text: string;
  };
};

const PieChart: React.FC = () => {
  const chartOptions: PieChartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: 'pie'
    },
    title: {
      text: 'Simple Pie Chart'
    }
  };

  return (
    <div id="pie-chart">
      <Chart
        options={{
          chart: chartOptions.chart,
          title: chartOptions.title
        }}
        series={chartOptions.series}
        type="pie"
        width={chartOptions.chart.width}
      />
    </div>
  );
};

export default PieChart;
