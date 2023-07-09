import ReactDOM from 'react-dom/client';
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from './Components/Body'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Java from './Components/Java'
import Python from './Components/Python'
import JavaScript from './Components/JavaScript'
import ReactCourse from './Components/ReactCourse'
import './index.css'
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: '/java',
          element: <Java/>,
        },
        {
          path: '/react-course',
          element: <ReactCourse />
        },
        {
          path: '/js',
          element: <JavaScript/>
        },
        {
          path: '/python',
          element: <Python/>
        },
      ],
    }
  ]
)







//paasing a react element inside the root................................. 
const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(<RouterProvider router={appRouter} />)