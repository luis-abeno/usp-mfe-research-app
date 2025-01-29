import React from 'react';
import SalesChart from '../components/sales-chart/SalesChart';
import BubbleChart from '../components/bubble-chart/BubbleChart';
import PieChart from '../components/pie-chart/PieChart';
import LineChart from '../components/line-chart/LineChart';

const DashboardPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border-l-4 border-blue-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-line"></i> Insight 1</h2>
                    <canvas id="chart1"></canvas>
                </div>
                <div className="border-l-4 border-blue-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-pie"></i> Insight 2</h2>
                    <canvas id="chart2"></canvas>
                </div>
                <div className="border-l-4 border-blue-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-bar"></i> Insight 3</h2>
                    <canvas id="chart3"></canvas>
                </div>
                <div className="border-l-4 border-blue-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-area"></i> Insight 4</h2>
                    <canvas id="chart4"></canvas>
                </div>
                <div className="border-l-4 border-blue-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-line"></i> Insight 5</h2>
                    <canvas id="chart5"></canvas>
                </div>
                <div className="border-l-4 border-blue-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-pie"></i> Insight 6</h2>
                    <canvas id="chart6"></canvas>
                </div>
            </div>
            <div className="border-l-4 border-green-500 shadow-md rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-line"></i> Sales Chart</h2>
                <SalesChart />
            </div>
            <div className="border-l-4 border-red-500 shadow-md rounded-lg p-6 mt-4">
                <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-bubble"></i> Bubble Chart</h2>
                <BubbleChart />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border-l-4 border-yellow-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-line"></i> Line Chart</h2>
                    <LineChart />
                </div>
                <div className="border-l-4 border-purple-500 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2"><i className="fas fa-chart-pie"></i> Pie Chart</h2>
                    <PieChart />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
