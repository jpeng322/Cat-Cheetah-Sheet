import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageContextProvider from './context/imageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ImageContextProvider> */}
      <App />
    {/* </ImageContextProvider> */}
  </React.StrictMode>,
)
