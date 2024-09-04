import React from 'react';
import ReactPlayer from 'react-player';
import './VideoComponent.css'; // Assuming you'll use this for styling

const VideoComponent = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        url="https://cdn.pixabay.com/video/2022/03/01/109166-683572827_large.mp4" // Replace with your video URL
        controls
        playing
        loop
        muted // Optionally, start muted to comply with browser autoplay policies
        width="100%"
        height="100%"
        className="react-player"
      />
    </div>
  );
};

export default VideoComponent;
