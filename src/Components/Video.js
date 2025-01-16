import React from "react";
import { useSearchParams } from "react-router-dom";

const Video = () => {
  const [query] = useSearchParams();
  const videoURL = query.get("v");
  return (
    <div className="col-span-12 my-6 mx-4">
      <iframe
        className="rounded-xl"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  );
};
export default Video;