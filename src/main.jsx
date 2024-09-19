import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './ClientPages/Shop/Shop.jsx'
import Details from './ClientPages/Details/Details.jsx'
import ProductCategory from './ClientPages/ProductCategory/ProductCategory.jsx'

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
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
