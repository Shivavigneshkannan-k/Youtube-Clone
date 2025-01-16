import { useDispatch } from "react-redux";
import {toggleSideBar} from "../utils/featureSlice"
import { MENU_ICON, SEARCH_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const hangleToggleSideBar = ()=>{
    dispatch(toggleSideBar());
    
  }
  return (
    <div className="w-full grid grid-flow-col h-16 items-center shadow-md">
      <div className="flex justify-startitems-center">
        <div className="p-3 w-16 ml-4 items-center flex">
          <img
            alt="menu"
            src={MENU_ICON}
            className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
            onClick={hangleToggleSideBar}
          />
        </div>
        <div className="w-28 justify-center items-center flex">
          <img
            alt="logo"
            src={YOUTUBE_LOGO}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="col-span-10 justify-center items-center flex">
        <input type="text" placeholder="Search" className="w-1/2 px-4 py-2 border-2 border-gray-400 rounded-l-full"/>
        <button className=" py-2 px-6 bg-gray-200 rounded-r-full" ><img alt="search" src={SEARCH_ICON} className="w-7"/></button>
      </div>

      <div className="col-span-1 w-14 ">
        <img
          alt="user profile pic"
          src={USER_ICON}
          className=" "
        />
      </div>
    </div>
  );
};

export default Header;
