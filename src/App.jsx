import { useState } from 'react'
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import NotFound from './components/NotFound/NotFound';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
const routes = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children:[
    {index:"true" ,element:<Home/>},
    {path:"home" ,element:<Home/>, errorElement: <NotFound/>,},
    {path:"about" ,element:<About/>},
    {path:"experience" ,element:<Experience/>},
    {path:"skills" ,element:<Skills/>},
    {path:"work" ,element:<Work/>},
  ]
}])

  return (
    <>
    <div class="container-fluid">
    <div class="row">
    <RouterProvider router={routes}>

    </RouterProvider>
    </div>
    </div>
    </>
    
  )
}

export default App
