import React from 'react';
import './VideoCard.css';

const VideoCard = ({ title, thumbnail, videoUrl }) => {
  return (
    <div className="video-card">
      <h5 className="text-white mb-2">{title}</h5>
      <div className="video-thumbnail">
        <img src={thumbnail} alt={title} className="img-fluid rounded" />
        <button className="play-button" onClick={() => window.open(videoUrl, "_blank")}>
          <img src="https://img.icons8.com/ios-filled/50/fa314a/play-button-circled.png" alt="play" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
