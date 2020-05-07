import React from "react";
import {Line, Bar} from 'react-chartjs-2'

import styles from './CovidChart.module.css'

const CovidChart = (props) => {
    const lineChart = (
        <Line
            data={{
                labels: '',
                datasets: [{
                    data: props.CovidEveryDay.confirmed,
                    label: 'Confirmed',
                    borderColor: '#3333ff',
                    fill: true
                },
                    {
                        data: props.CovidEveryDay.deaths,
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }
                ]
            }}
        />
    )
    return (
        <div className={styles.container}>
            {lineChart}

        </div>
    );
}

export default CovidChart;