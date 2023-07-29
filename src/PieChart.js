import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    return (
        <div className="chart-container">
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
