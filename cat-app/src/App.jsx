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
import Search from './pages/search'


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
        path: "/home",
        element: <Home />
      },
      {
        path: "/breeds/:catName",
        element: <CatDetails />,
        loader: ({ params }) => {
          const catName = params.catName
    
          return getBreedInfo(catName)
    
        },
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
  // },
  {
    path: "/search",
    element: <Search />,
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
