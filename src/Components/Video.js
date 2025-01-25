import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import LiveChat from "./LiveChat";

const Video = () => {
  const [query] = useSearchParams();
  const videoURL = query.get("v");
  const isOpen = useSelector((store) => store.feature.sideBarOpen);
  return (
    <div
      className={`col-span-12 my-6 mx-4  pt-16 ${
        isOpen ? "pl-44" : "pl-5"
      } bg-black  text-white`}>
      <div className="flex">
        <iframe
          className="rounded-xl shadow-2xl shadow-gray-800 drop-shadow-lg"
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + videoURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        <LiveChat />
      </div>
      <Comment />
    </div>
  );
};
export default Video;
