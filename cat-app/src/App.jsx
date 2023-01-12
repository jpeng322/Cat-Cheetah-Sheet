import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getBreedInfo, getBreeds, getImages } from './api'
//pages
import Layout from './pages/layout'
import BreedsPage from './pages/breed'
import CatDetails from './pages/catDetails'
import CatDetailsImages from './pages/catDetailsImages'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/breeds",
        element: <BreedsPage />,
        loader: () => {
          return getBreeds()
        }
      }
    ]
  },
  {
    path: "/breeds/:catName",
    element: <CatDetails />,
    loader: ({ params }) => {
      const catName = params.catName

      return getBreedInfo(catName)

    },
    // children: [{
    //   path: "/breeds/images/:catName",
    //   element: <CatDetailsImages />,
    //   loader: ({ params }) => {
    //     const catName = params.catName

    //     return getImages(catName)

    //   }
    // }

    // ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
