import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { 
  About, 
  Cart, 
  Checkout, 
  Error, 
  HomeLayout, 
  Landing, 
  Orders, 
  Products, 
  SingleProduct, 
  Login,
  Register
} from './pages/index'
import { ErrorElement } from './components/index'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'


const router = createBrowserRouter([
  {
    path:"/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element:<Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "products",
        loader: productsLoader,
        errorElement: <ErrorElement />,
        element:<Products />
      },
      {
        path: "products/:id",
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
        element:<SingleProduct />
      },
      {
        path: "cart",
        element:<Cart />
      },
      {
        path: "about",
        element:<About />
      },
      {
        path: "checkout",
        element:<Checkout />
      },
      {
        path: "orders",
        element:<Orders />
      },
    ]
  },
  {
    path:"/login",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path:"/register",
    element: <Register />,
    errorElement: <Error />
  }
])

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App