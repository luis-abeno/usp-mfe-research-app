import Chart from 'react-apexcharts';

const BubbleChart: React.FC = () => {
    const generateData = (baseval: number, count: number, yrange: { min: number; max: number }) => {
        let i = 0;
        const series = [];
        while (i < count) {
            const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    };

    const chartOptions = {
        series: [
            {
                name: "Bubble1",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
            },
            {
                name: "Bubble2",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
            },
            {
                name: "Bubble3",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
            },
            {
                name: "Bubble4",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, { min: 10, max: 60 })
            }
        ],
        chart: {
            height: 350,
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 0.8
        },
        title: {
            text: "Simple Bubble Chart"
        },
        xaxis: {
            tickAmount: 12,
        },
        yaxis: {
            max: 70
        }
    };

    return (
        <div id="chart" style={{ textAlign: 'center' }}>
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="bubble"
                height={chartOptions.chart.height}
            />
        </div>
    );
};

export default BubbleChart;
