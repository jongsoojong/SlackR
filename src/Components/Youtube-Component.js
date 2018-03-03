import React, { Component } from 'react';
import YoutubeSearch from './Youtube-Search-Modal';
import axios from 'axios';

class Youtube extends Component {
    constructor(props) {
      super(props);
      this.state = {
        returnedVideos: []
      }
    }

    componentDidMount() {
        this.retrieveYoutubeVideos();
    }

    retrieveYoutubeVideos = (that = this, userSearchQuery) => {
      axios.post('/retrieveYoutubeFeed', {
      // you should replace this query with the userSearchQuery's value you will provide
      searchQuery: 'Zangief Kid'
    })
    .then(function (response) {
      let newReturnedVideos = that.buildNewVideosArray(response.data);
      that.setState({
        returnedVideos: newReturnedVideos,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    }

    buildNewVideosArray = (responseData) => {
    return responseData.map(function(video){
      let videoURL = "http://www.youtube.com/embed/" + video.id.videoId;
      return <iframe className="ytplayer" type="text/html" width="640" height="360" src={videoURL} frameBorder="0"></iframe>;
    });
    }

    render() {
        return (
            <div>
                <h2> Youtube component </h2>
                <YoutubeSearch />
                <div>{this.state.returnedVideos}</div>
            </div>
        )
    }

}

export default Youtube;
