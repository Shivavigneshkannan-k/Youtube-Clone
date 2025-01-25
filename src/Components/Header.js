import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/featureSlice";
import { MENU_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constant";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full grid grid-flow-col h-16 items-center shadow-md fixed dark:bg-black text-white b">
      <div className="flex justify-startitems-center">
        <div className="p-3 w-16 ml-4 items-center flex">
          <img
            alt="menu"
            src={MENU_ICON}
            className="cursor-pointer hover:bg-gray-900  rounded-full p-2"
            onClick={() => {
              dispatch(toggleSideBar());
            }}
          />
        </div>
        <div className="w-32 justify-center items-center flex">
          <img alt="logo" src={YOUTUBE_LOGO} className="cursor-pointer" />
        </div>
      </div>

      <Search />

      <div className="col-span-1 w-10 ">
        <img alt="user profile pic" src={USER_ICON} className=" " />
      </div>
    </div>
  );
};

export default Header;
