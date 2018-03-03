import React, { Component } from 'react';

class YoutubeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
        <div>
            <input type="text" placeholder="What are you looking for?"/>
        </div>
        )
    }
}

export default YoutubeSearch;
