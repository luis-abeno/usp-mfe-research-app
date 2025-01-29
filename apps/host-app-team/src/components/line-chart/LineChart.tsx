import React from 'react';
import Chart from 'react-apexcharts';

type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
};

const LineChart: React.FC = () => {
  const chartOptions: Partial<LineChartOptions> = {
    series: [
      {
        name: "Line1",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 350,
      type: "line"
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Simple Line Chart"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    yaxis: {
      max: 150
    }
  };

  return (
    <div id="line-chart">
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
