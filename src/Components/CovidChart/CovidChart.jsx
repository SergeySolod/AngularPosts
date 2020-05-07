import React from "react";
import {Line, Bar} from 'react-chartjs-2'

import styles from './CovidChart.module.css'

const CovidChart = (props) => {
    const lineChart = (
        <Line
            data={{
                labels: '',
                datasets: [{}, {}]
            }}
        />
    )
    return (
        <div>

        </div>
    );
}

export default CovidChart;