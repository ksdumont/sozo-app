import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Track from "./components/Track";
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

  componentDidMount() {
    this.getUser();
    this.getRecentlyPlayedTracks();
  }

  render() {
    return (
      <div className="App container">
        <Navbar />
        {!this.state.loggedIn ? (
          <a href="http://localhost:8888">
            <button id="spotify-login" className="btn btn-primary">
              Login With Spotify
            </button>
          </a>
        ) : (
          ""
        )}
        {this.state.userName ? (
          <>
            <h1>Welcome {this.state.userName}</h1>
            <h4>Here are some of your recently played tracks on Spotify</h4>
          </>
        ) : (
          ""
        )}
        <div className="recently-played-tracks">
          {this.state.loggedIn &&
            this.state.recentlyPlayedTracks.map((item) => {
              let title = item.track.name;
              let artist = item.track.artists[0].name;
              let image = item.track.album.images[1].url;
              let key = item.played_at;
              let id = item.track.id;
              return (
                <Track
                  key={key}
                  title={title}
                  artist={artist}
                  image={image}
                  id={id}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
