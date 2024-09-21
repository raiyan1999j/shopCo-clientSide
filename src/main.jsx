import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './ClientPages/Shop/Shop.jsx'
import Details from './ClientPages/Details/Details.jsx'
import ProductCategory from './ClientPages/ProductCategory/ProductCategory.jsx';
import Cart from './ClientPages/Cart/Cart.jsx'
import CreateOrLogin from './ClientPages/CreateOrLogin/CreateOrLogin.jsx'
import InfoProvider from './InfoProvider/InoProvider.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/details",
        element:<Details/>
      },
      {
        path:"/productCategory",
        element:<ProductCategory/>
      },
      {
        path:"/onSale",
        element:<ProductCategory/>
      },
      {
        path:"/newArrivals",
        element:<ProductCategory/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      {
        path:"/createOrLogin",
        element:<CreateOrLogin/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <InfoProvider>
    <RouterProvider router={router}/>
  </InfoProvider>
  </StrictMode>,
)
