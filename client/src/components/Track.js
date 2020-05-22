import React from "react";
import DisplayAudioFeatures from "./DisplayAudioFeatures";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

function getAudioFeaturesofRecentlyPlayedTracks(trackId) {
  console.log(spotifyApi.getAudioFeaturesForTrack(trackId));
  return <DisplayAudioFeatures />;
}

const Track = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="album cover" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.artist}</p>
        <button
          className="btn btn-primary"
          onClick={() => getAudioFeaturesofRecentlyPlayedTracks(props.id)}
        >
          Audio Features
        </button>
      </div>
    </div>
  );
};

export default Track;
