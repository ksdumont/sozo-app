import React, { Component } from "react";
import "./App.css";

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
      nowPlaying: {
        name: "",
        image: "",
      },
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

  getNowPlaying() {
    spotifyApi.getMyTopArtists().then((response) => console.log(response));
    //   this.setState({
    //     nowPlaying: {
    //       name: response.item.name,
    //       image: response.item.album.images[0].url,
    //     },
    //   });
    // });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App container">
        <a href="http://localhost:8888">
          <button className="btn btn-primary">Login With Spotify</button>
        </a>
        <div>Now Playing: {this.state.nowPlaying.name}</div>
        <div>
          <img
            src={this.state.nowPlaying.image}
            style={{ height: 150, width: 100 }}
            alt=""
          />
        </div>
        {this.state.loggedIn && (
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        )}
      </div>
    );
  }
}

export default App;
