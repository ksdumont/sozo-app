import React, { useState } from "react";
import DisplayAudioFeatures from "./DisplayAudioFeatures";

const Track = (props) => {
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <div className="card" style={{ width: "18rem" }}>
      {!showFeatures ? (
        <img src={props.image} className="card-img-top" alt="album cover" />
      ) : (
        <DisplayAudioFeatures trackId={props.id} />
      )}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.artist}</p>
        <button
          className="btn btn-primary"
          onClick={() => setShowFeatures(!showFeatures)}
        >
          Audio Features
        </button>
      </div>
    </div>
  );
};

export default Track;
