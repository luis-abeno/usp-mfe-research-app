import Chart from 'react-apexcharts';

const SalesChart: React.FC = () => {
    const chartOptions = {
        series: [
            {
                name: "My-series",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }
        ],
        chart: {
            height: 350,
        },
        title: {
            text: "My First Angular Chart"
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    chart: {
                        width: "100%"
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ]
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="bar"
                height={chartOptions.chart.height}
            />
        </div>
    );
};

export default SalesChart;
