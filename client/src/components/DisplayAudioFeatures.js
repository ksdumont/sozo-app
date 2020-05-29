import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

const DisplayAudioFeatures = (props) => {
  const [features, setFeatures] = useState({});

  console.log("fetching features for track %s", props.trackId);

  useEffect(() => {
    spotifyApi.getAudioFeaturesForTrack(props.trackId).then((res) => {
      setFeatures(res);
    });
  }, []);

  return (
    <ul className="audio-features">
      <li>{features.acousticness}</li>
      <li>{features.danceability}</li>
      <li>{features.energy}</li>
      <li>{features.instrumentalness}</li>
      <li>{features.liveness}</li>
      <li>{features.loudness}</li>
      <li>{features.speechiness}</li>
      <li>{features.tempo}</li>
      <li>{features.valence}</li>
    </ul>
  );
};

export default DisplayAudioFeatures;
