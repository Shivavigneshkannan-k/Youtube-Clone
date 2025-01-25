import SideBarButton from "./SideBarButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isOpen = useSelector((store) => store.feature.sideBarOpen);
  if (!isOpen) return;
  return (
    <div className="py-6 px-2 h-full mt-16 fixed overflow-scroll no-scrollbar bg-black bg-opacity-100 text-white ">
      <ul>
        <Link to="/">
          <SideBarButton title={"Home"} id={"83326"} />
        </Link>
        <SideBarButton title={"Shorts"} id={"ajczeHCWXbyR"} />
        <SideBarButton title={"Subscriptions"} id={"87581"} />
      </ul>

      <div className="">
        <p className="font-semibold text-lg px-2 pt-5 pb-2">You</p>
        <ul>
          <SideBarButton title={"History"} id={"86155"} />
          <SideBarButton title={"Playlist"} id={"111381"} />
          <SideBarButton title={"Watch Later"} id={"82767"} />
          <SideBarButton title={"Liked videos"} id={"82788"} />
        </ul>
      </div>

      <div>
        <p className="font-semibold text-lg px-2 pt-5 pb-2">Subscriptions</p>
        <ul className="px-2 text-md font-semibold">
          <li className="py-1">Channel 1</li>
          <li className="py-1">Channel 2</li>
          <li className="py-1">Channel 3</li>
          <li className="py-1">Channel 4</li>
          <li className="py-1">Channel 5</li>
          <li className="py-1">Channel 6</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
