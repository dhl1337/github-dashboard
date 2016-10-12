import React from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs';


class Main extends React.Component {

    render() {
        const chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        };

        return (
                <div className="ui stackable grid">
                    <div className="two wide column">
                        <div className="ui left fixed vertical menu">
                            <div className="item">
                                <img className="ui mini circular image" src="http://www.geo-jobe.com/wp-content/uploads/2016/06/dan360.png"/>
                            </div>
                            <a className="item">Features</a>
                            <a className="item">Testimonials</a>
                            <a className="item">Sign-in</a>
                        </div>
                    </div>
                    <div className="fourteen wide column">
                        <div className="ui container">
                            <div className="ui basic segment">
                                <div className="ui fluid icon input">
                                    <input type="text" placeholder="Search for user ...." />
                                        <i className="search icon"></i>
                                </div>
                            </div>
                            <div className="ui grid">
                                <div className="twelve wide column">
                                    <div className="ui raised segment">
                                        <Line data={chartData} width="800" height="250"/>
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <div className="ui raised segment">

                                    </div>
                                </div>
                            </div>
                            <div className="ui equal width grid">
                                <div className="column">
                                    <div className="ui raised segment">
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="ui raised segment">
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="ui raised segment">
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));