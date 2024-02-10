import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;