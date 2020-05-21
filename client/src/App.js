import React, { Component } from "react";
import "./App.css";
// import SearchForm from "./components/SearchForm";

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      userName: "",
      recentlyPlayedTracks: [],
    };
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  getUser() {
    spotifyApi.getMe().then((res) => {
      this.setState({
        userName: res.display_name,
      });
    });
  }
  getRecentlyPlayedTracks() {
    spotifyApi.getMyRecentlyPlayedTracks().then((res) => {
      this.setState({
        recentlyPlayedTracks: res.items,
      });
    });
  }

  getAudioFeaturesofRecentlyPlayedTracks = () => {
    const recentlyPlayedTrackIds = [
      ...this.state.recentlyPlayedTracks.map((i) => i.track.id),
    ];

    spotifyApi.getAudioFeaturesForTracks(recentlyPlayedTrackIds).then((res) => {
      console.log(res);
    });
  };

  componentDidMount() {
    this.getUser();
    this.getRecentlyPlayedTracks();
  }

  render() {
    return (
      <div className="App container">
        {!this.state.loggedIn ? (
          <a href="http://localhost:8888">
            <button id="spotify-login" className="btn btn-primary">
              Login With Spotify
            </button>
          </a>
        ) : (
          ""
        )}
        {this.state.userName ? <h2>Welcome {this.state.userName}</h2> : ""}
        {this.state.loggedIn && (
          <button
            className="btn btn-primary"
            onClick={this.getAudioFeaturesofRecentlyPlayedTracks}
          >
            Get Audio Features of Your Recently Played Tracks
          </button>
        )}
      </div>
    );
  }
}

export default App;
