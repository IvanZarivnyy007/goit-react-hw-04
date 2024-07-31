import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

import getImages from './Api/Api.js';

import Loader from './components/Loader/Loader';
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx"
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx'
// import ImageModal from './components/ImageModal/ImageModal.jsx'

const App = () => {
  const [image, setImage] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState('');

  const handleClick = () => {
    if (input.trim() !== '') {
      <Loader/>
      getImages(input, page ) 
        .then((data) => {
          setImage(data);
        })
        .catch(() => {
          <ErrorMessage />;
        });
    } else {
      <ErrorMessage />;
    }
  };

  return (
    <div>
      <SearchBar onSubmit ={handleClick} setInput = {setInput}/>
      <ImageGallery images = {image} />
      <Toaster />
    </div>
  );
};

export default App;
