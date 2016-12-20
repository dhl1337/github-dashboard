import React, {Component} from 'react';

class SearchGithub extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="sixteen wide column">
                    <div className="ui fluid action input">
                        <input type="text" placeholder="Search..."/>
                        <div className="ui button">Search</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchGithub