import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2'

class DonutChart extends Component {
    render() {
        const donutChart = {
            labels: [
                "Red",
                "Blue",
                "Yellow"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };

        return (
            <Doughnut data={donutChart} width="600" height="250" redraw/>
        )
    }
}

export default DonutChart