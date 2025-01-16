import React from "react";
import SideBarButton from "./SideBarButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isOpen = useSelector((store) => store.feature.sideBarOpen);
  if (!isOpen) return;
  return (
    <div className="col-span-1 py-6 px-4 h-full ">
      <ul>
        <Link to="/">
          <SideBarButton title={"Home"} id={"84005"} />
        </Link>
        <SideBarButton title={"Shorts"} id={"kETpZIGcossv"} />
        <SideBarButton title={"Subscriptions"} id={"23031"} />
      </ul>

      <div className="">
        <p className="font-semibold text-lg px-2 pt-5 pb-2">You</p>
        <ul>
          <SideBarButton title={"History"} id={"86155"} />
          <SideBarButton title={"Playlist"} id={"111381"} />
          <SideBarButton title={"Watch Later"} id={"83976"} />
          <SideBarButton title={"Liked videos"} id={"83166"} />
        </ul>
      </div>

      <div>
        <p className="font-semibold text-lg px-2 pt-5 pb-2">Subscriptions</p>
        <ul className="px-2 text-md">
          <li className="py-1">Channel 1</li>
          <li className="py-1">Channel 2</li>
          <li className="py-1">Channel 3</li>
          <li className="py-1">Channel 4</li>
          <li className="py-1">Channel 5</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
