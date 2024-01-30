import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Bag from './Routes/Bag.jsx'
import { Provider } from 'react-redux'
import store from './ReduxStore/Store.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
    
      {
        path: '/bag',
        element: <Bag/>
      },
      
    
    ]
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store = {store}>
      <RouterProvider router = {router}>
      </RouterProvider>
    </Provider>  
    

  </React.StrictMode>,
)
