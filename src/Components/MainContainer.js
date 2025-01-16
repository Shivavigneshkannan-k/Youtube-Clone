import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const MainContainer = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <Outlet/>
    </div>
  );
};

export default MainContainer;