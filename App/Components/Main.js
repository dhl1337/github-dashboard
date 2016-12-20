import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BarChart from './BarChart';
import DonutChart from './DonutChart';
import HorizontalBarChart from './HorizontalBarChart';
import LineChart from './LineChart';
import RadarChart from './RadarChart';
import SearchGithub from './SearchGithub';

class Main extends Component {

    render() {

        const styles = {
            grid: {
                marginTop: 20
            }
        };

        return (
            <div className="ui container">
                <div className="ui stackable grid" style={styles.grid}>
                    <div className="four wide column">
                        <div className="ui items">
                            <div className="item">
                                <div className="image">
                                    <img className="ui top aligned small rounded image"
                                         src="http://www.geo-jobe.com/wp-content/uploads/2016/06/dan360.png"/>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content">
                                    <a className="header">Dan Le</a>
                                    <div className="meta">
                                        <span>dhl1337</span>
                                    </div>
                                    <div className="description">
                                        <p>dhl1337@gmail.com</p>
                                    </div>
                                    <div className="extra">
                                        Joined on Sep 1, 2015
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eleven wide column">
                        <div className="sixteen wide column">
                            <SearchGithub/>
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
                                        <BarChart />
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
                                        <HorizontalBarChart />
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="ui raised segment">
                                        <DonutChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('App'));