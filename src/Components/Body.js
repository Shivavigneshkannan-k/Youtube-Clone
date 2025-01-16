import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import VideoContainer from "./VideoContainer";
import Video from "./Video";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        { path: "/", element: <VideoContainer /> },
        { path: "/watch",element: <Video />},
      ]
    }
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={routes} />
    </div>
  );
};

export default Body;
