import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Rout from './Routs/Rout';
import BookMarks from './pages/BookMarks';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Rout></Rout>,
    children:[
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      },
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/bookmarks",
        element:<BookMarks></BookMarks>
      }
    ]
   
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
