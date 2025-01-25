import React, { useState } from "react";
import usePopularVideos from "../Hooks/usePopularVideos";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
// import usePopularVideos from "../Hooks/usePopularVideos"
const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const isOpen = useSelector((store) => store.feature.sideBarOpen);
  usePopularVideos(videoData, setVideoData);

  if (videoData.length===0) return <Shimmer />;
  
  return (
    <div className={`col-span-12 py-10 px-5 grid grid-cols-4 pt-20 dark:bg-black text-white ${isOpen?"pl-44":"pl-5"}`}>
      {videoData.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
