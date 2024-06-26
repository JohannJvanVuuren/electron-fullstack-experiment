import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import {AddNew} from "./components/AddNew.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/add-new',
    element: <AddNew />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
