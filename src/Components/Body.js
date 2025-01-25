import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import VideoContainer from "./VideoContainer";
import Video from "./Video";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        { path: "/", element: <VideoContainer /> },
        { path: "/watch", element: <Video /> }
      ]
    },
    { path: "/shimmer", element: <Shimmer /> }
  ]);
  return (
    <div className="bg-black h-screen">
      <Header />
      <RouterProvider router={routes} />
    </div>
  );
};

export default Body;
