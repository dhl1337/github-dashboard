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
        const container = {
            position: 'relative',
            padding: '0 0 0 55px'
        };

        const sidebar = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 50,
            background: '#000',
        };

        const header = {
            border: 1,
            solid: '#000',
            width: 100,
            height: 20,
            margin: '0 0 5px 0'
        };

        const content = {
            border:1,
            solid:'#000',
            width:100,
            height:50,
            margin:'5px 0 5px 0'
        };

        const footer = {
            border:1,
            solid: '#000',
            width:100,
            height:20,
            margin: '5px 0 0 0'
        };

        return (
            <div style={container}>
                <div style={sidebar}></div>
                <div style={header}>
                    whoa
                </div>
                <div style={content}>
                    <h3>Hello</h3>
                </div>
                <div style={footer}></div>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));