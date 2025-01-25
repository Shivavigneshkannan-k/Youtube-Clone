import { useEffect } from "react";
import { YOUTUBE_POPULAR_VIDEO_API } from "../utils/constant";

const usePopularVideos = (videoData, setVideoData) => {
  useEffect(() => {
    const fetchPopularVideos = async () => {
      try {
        const response = await fetch(
          YOUTUBE_POPULAR_VIDEO_API + process.env.REACT_APP_YOUTUBE_API_KEY
        );
        if (!response.ok) {
          throw new Error("Error:" + response.status);
        }
        const data = await response.json();
        setVideoData(data.items || []);
      } catch (err) {
        console.log(
          "error occurred at fetching popular youtube videos",
          err.message
        );
      }
      return ()=> fetchPopularVideos();
    };
    videoData && fetchPopularVideos();
  }, []);
};

export default usePopularVideos;
