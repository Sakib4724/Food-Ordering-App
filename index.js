import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/App";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body";
import RestrauntMenu from "./src/components/RestrauntMenu";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";
import Cart from "./src/components/Cart";
import Register from "./src/components/Register";
import Login from "./src/components/Login";
import { LoggedInUserProvider } from "./src/utils/LoggedInUserContext";
import { ButtonContextProvider } from "./src/utils/ButtonUserContext";
import { CartProvider } from "./src/utils/CartContext";
// import Instamart from "./src/components/Instamart";


//Chunking
//CodeSplitting
//DynamicBundling
//LazyLoading
//OnDemandLoading
//DynamicImport

const Instamart = lazy(() => import("./src/components/Instamart"));
//Upon On-Demand Loading -> upon render -> suspense loading

const About = lazy(() => import("./src/components/About"));

// import axios from 'axios';
// //backend url
// axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.withCredentials = true;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element: <Body />
      },

      {
        path: "/about",
        element: 
        <Suspense>
          <About fallback={<h1>Loading...</h1>}/>
        </Suspense> ,
        
        children: [
          {
            path:"profile",   //https://localhost:1234/about/profile (Don't take '/about' because it results in https://localhost:1234/profile)
            element: <Profile />
          },
        ]
      },

      {
        path: "/contact",
        element: <Contact />
      },

      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />
      },

      {
        path:"/instamart",
        element: 
        <Suspense fallback={<Shimmer/>}>
          <Instamart />
        </Suspense>
      },

      {
        path: "/cart",
        element: <Cart />
      },

      {
        path: "/register",
        element: <Register />
      },

      {
        path: "/login",
        element: <Login />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(
  <ButtonContextProvider>
  <LoggedInUserProvider>
  <CartProvider>
    <RouterProvider router={appRouter}>
      <AppLayout />
    </RouterProvider>
    </CartProvider>
  </LoggedInUserProvider>
  </ButtonContextProvider>
);
