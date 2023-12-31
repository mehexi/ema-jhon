import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Oders/Orders';
import Inventory from './components/inventory/Inventory';
import Loging from './components/login/Loging';
import Product from './components/Product/Product';
import { cartProductsLoader } from './loader/cartProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element:<Shop></Shop>
      },
      {
        path: "/order",
        element: <Orders></Orders>,
        loader:()=> cartProductsLoader()
      },
      {
        path: "/inventory",
        element:<Inventory></Inventory>
      },
      {
        path: "/login",
        element:<Loging></Loging>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
