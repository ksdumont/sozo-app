import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";

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

  searchTrack() {}

  getAudioAnalysis() {}

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
        {this.state.loggedIn && <SearchForm />}
      </div>
    );
  }
}

export default App;
