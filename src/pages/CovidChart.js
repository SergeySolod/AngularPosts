import React from "react";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    ComposedChart,
    Area,
    Bar
} from "recharts";

const CovidChart = (props) => {
    return (
        <div>
            <h2 style={{ textAlign: "left" }}>.</h2>
            <LineChart
                width={850}
                height={500}
                data={props.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Заразилось" stroke="#90caf9" />
                <Line type="monotone" dataKey="Умерло" stroke="#f4a990" />
            </LineChart>
        </div>
    );
}

export default CovidChart;