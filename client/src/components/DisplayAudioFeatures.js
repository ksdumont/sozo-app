import React from "react";

const DisplayAudioFeatures = (props) => {
  const { audioFeatures } = props;
  return audioFeatures.map((track) => {
    return <div>{track.danceability}</div>;
  });
};

export default DisplayAudioFeatures;
