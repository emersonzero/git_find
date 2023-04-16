import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//PAGES

import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: "/", //home
    element: <App />, //irá se repetir por toda aplicação
    children: [
      {
        path: "/",
        element:  <Home />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)