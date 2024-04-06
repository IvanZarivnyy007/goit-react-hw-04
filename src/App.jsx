// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery';
import ImageCard from './ImageCard/ImageCard';
import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <SearchBar/>
      <ImageGallery/>
      <ImageCard/>
      <Loader/>
      <ErrorMessage/>
    </>
  )
}

export default App
