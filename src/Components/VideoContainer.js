import React, { useState } from "react";
import usePopularVideos from "../Hooks/usePopularVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
// import usePopularVideos from "../Hooks/usePopularVideos"
const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  usePopularVideos(videoData,setVideoData);
  return (
    <div className="col-span-12 py-10 px-5 grid grid-cols-4">
      {videoData.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
