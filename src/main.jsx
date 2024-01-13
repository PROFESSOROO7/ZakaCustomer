import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registration from "./components/Forms/Registration/Registration.jsx";
import ForgetPassword from "./components/Forms/ForgetPassword/ForgetPassword.jsx";
import ChangePassword from "./components/Forms/ForgetPassword/ChangePassword.jsx";
import Profile from "./components/Profile/Profile.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Login from "./components/Forms/Login/Login.jsx";
import EditProfile from "./components/Profile/EditProfile.jsx";
import Cart from "./components/Cart/Cart.jsx";
import OrderDetails from "./components/Order/OrderDetails.jsx";
import OrderHistory from "./components/Order/OrderHistory.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "/AllProducts",
    element: <AllProducts/>,
  },
  {
    path: "/AllProducts/:ProductType",
    element: <AllProducts/>,
  },{
    path:"/ProductDetails",
    element:<ProductDetails/>
  }
  ,{
    path:"/register",
    element:<Registration/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/forgetpassword",
    element:<ForgetPassword/>
  },
  {
    path:"/changepassword",
    element:<ChangePassword/>
  },
  {
    path:"/editprofile",
    element:<EditProfile/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
    {
      path:"/cart", 
      element:<Cart/>
    },
    {
      path:"/orderdetails", 
      element:<OrderDetails/>
    }, {
      path:"/orderhistory", 
      element:<OrderHistory/>
    },{
      path:"/aboutus",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
  );
