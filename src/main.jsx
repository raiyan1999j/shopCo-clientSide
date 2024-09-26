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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './Dashboard/Dashboard.jsx'
import AllProducts from './Dashboard/AllProducts/AllProducts.jsx'
import AddProducts from './Dashboard/AddProducts/AddProducts.jsx'

const queryClient = new QueryClient();
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
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'/dashboard/allProducts',
        element:<AllProducts/>
      },
      {
        path:'/dashboard/addProducts',
        element:<AddProducts/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  <InfoProvider>
    <RouterProvider router={router}/>
  </InfoProvider>
  </QueryClientProvider>
  </StrictMode>,
)
