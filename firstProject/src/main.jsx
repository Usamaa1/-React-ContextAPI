import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import AddPost from './post/addPost'
import MyNav from './nav/nav'
// import Home from './home';
// import About from './about';
// import NotFound from './notFound';
import AppLayout from './AppLayout';
import MyContext from './contextAPI/context';


// const router = createBrowserRouter([
//   { 
//     path: "/",
//     Component: Home,  
//   },
//   {
//     path: "about",
//     Component: About
//   },
//   {
//     path: "*",
//     Component: NotFound
//   }
// ]);

const Home = React.lazy(()=> import('./home'))
const About = React.lazy(()=> import('./about'))
const NotFound = React.lazy(()=> import('./notFound'))


const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
      
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>


<MyContext>
    <RouterProvider router={router} />

</MyContext>
   



  </StrictMode>,
)
