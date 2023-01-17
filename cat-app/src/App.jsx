import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getBreedInfo, getBreeds, getImages } from './api'
import ImageContextProvider from './context/imageContext'
//pages
import Layout from './pages/layout'
import BreedsPage from './pages/breed'
import Home from './pages/home'
import CatDetails from './pages/catDetails'
import CatDetailsImages from './pages/catDetailsImages'
import Faq from './pages/faq'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/breeds",
        element: <BreedsPage />,
        // id: "breeds",
        loader: () => {
          return getBreeds()
        }
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/breeds/:catName",
        element: <CatDetails />,
        loader: ({ params }) => {
          const catName = params.catName
    
          return getBreedInfo(catName)
    
        },
      },
      {
        path: "/faq",
        element: <Faq />
      }
    ]
  },
  // {
  //   path: "/breeds/:catName",
  //   element: <CatDetails />,
  //   loader: ({ params }) => {
  //     const catName = params.catName

  //     return getBreedInfo(catName)

  //   },

])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
