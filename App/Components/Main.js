import React from 'react';
import ReactDOM from 'react-dom';
import {Doughnut, Bar, HorizontalBar} from 'react-chartjs-2';
import LineChart from './LineChart';
import RadarChart from './RadarChart';

class Main extends React.Component {

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

        const barChart = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 100, 81, 56, 55, 40],
                }
            ]
        };



        const horizontalData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40],
                }
            ]
        };

        const styles = {
            grid: {
                marginTop: 20
            }
        };

        return (
            <div className="ui stackable grid container" style={styles.grid}>
                <div className="sixteen wide column">
                    <img className="ui small rounded image"
                         src="http://www.geo-jobe.com/wp-content/uploads/2016/06/dan360.png"/>
                </div>
                <div className="sixteen wide column">
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <div className="ui raised segment">
                                <LineChart />
                            </div>
                        </div>
                    </div>
                    <div className="ui equal width grid">
                        <div className="column">
                            <div className="ui raised segment">
                                <Bar data={barChart}/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui raised segment">
                                <RadarChart />
                            </div>
                        </div>
                    </div>
                    <div className="ui equal width grid">
                        <div className="column">
                            <div className="ui raised segment">
                                <HorizontalBar data={horizontalData} width="600" height="250" redraw/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui raised segment">
                                <Doughnut data={donutChart} width="600" height="250" redraw/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>
    , document.getElementById('App'));