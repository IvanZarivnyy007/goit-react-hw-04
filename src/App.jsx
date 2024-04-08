import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery';
import ImageCard from './ImageCard/ImageCard';
import Loader from './Loader/Loader.jsx';
// import ErrorMessage from './ErrorMessage/ErrorMessage';
import {getImages} from "../Api.js"
import ImagesModal from './ImageModal/ImageModal.jsx';



function App() {
  // const [error, SetError] = useState(null)
  const [openMod, SetOpenMod] = useState(null)
  const [closeMod, SetCloseMod] = useState(null)
  // const [loading, setLoading] = useState(false);
  // const [page , SetPage] = useState('')
  const [images , SetImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    
      <SearchBar/>
      <ImageGallery/>
      <ImageCard/>
      <Loader/>
      {/* <ErrorMessage/> */}

      <ImagesModal
   images={selectedImage}
   openMod={openMod}
   RequestClose={closeModal}
/>

    </>
  )
}

export default App
