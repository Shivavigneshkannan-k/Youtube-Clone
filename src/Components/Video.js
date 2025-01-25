import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Video = () => {
  const [query] = useSearchParams();
  const videoURL = query.get("v");
  const isOpen = useSelector((store) => store.feature.sideBarOpen);
  return (
    <div className={`col-span-12 my-6 mx-4 ${isOpen?"pl-44":"pl-5"} bg-black ` }>
      <iframe
        className="rounded-xl mt-16 shadow-2xl shadow-gray-800 drop-shadow-lg"
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