import React from 'react';
import ReactDOM from 'react-dom';


// #header { border:1px solid #000; width:100px; height:20px;
//     margin:0 0 5px 0;
// }
// #content { border:1px solid #000; width:100px; height:50px;
//     margin:5px 0 5px 0;
// }
// #footer { border:1px solid #000; width:100px; height:20px;
//     margin:5px 0 0 0;
// }


class Main extends React.Component {
    render() {

        const styles = {
            container: {
                width: '100%',
                height: '100%'
            },
            sidebar: {
                width: 250,
                height: '100%',
                float: 'left',
                backgroundColor: '#5C4B51',
            },
            content: {
                marginLeft: 100,
                height: '100%',
                backgroundColor: '#F2EBBF'
            },
            image: {
                borderRadius: '50%',
                height: 100,
                width: 100,
                verticalAlign: 'middle',
                marginRight: 5
            },
            profile: {
                backgroundColor: '#8CBEB2',
                padding: 25,
            },
            nav: {
                padding: 20
            }
        };

        return (
            <div style={styles.container}>
                <div style={styles.sidebar}>
                    <section style={styles.profile}>
                        <img src="http://www.geo-jobe.com/wp-content/uploads/2016/06/dan360.png" alt="" style={styles.image}/>
                        <span>Dan Le</span>
                    </section>
                    <section style={styles.nav}>
                        <ul>
                            <li>Overview</li>
                            <li>Repositories</li>
                        </ul>
                    </section>

                </div>
                <div style={styles.content}>
                    <h3>Hello</h3>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));