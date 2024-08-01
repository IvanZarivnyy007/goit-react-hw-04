import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';
import Modal from 'react-modal';

import getImages from './Api/Api.js';
import useModal from './hooks/useModal.js';

import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

Modal.setAppElement('#root');

const App = () => {
  const [image, setImage] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalState, openModal, closeModal] = useModal();
  const [regularUrl, setRegularUrl] = useState('');

  const handleClick = () => {
    setLoading(true);
    setError(null);
    if (input.trim() !== '') {
      getImages(input, page)
        .then((data) => {
          setImage(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      toast.error("This didn't work.");
      setLoading(false);
    }
  };

  const onOpenModal = (x) => {
    openModal();
    setRegularUrl(x);
  };

  return (
    <div>
      <SearchBar onSubmit={handleClick} setInput={setInput} />
      {loading && <Loader status={true} />}
      {error && <ErrorMessage message={error} />}
      {!error && <ImageGallery images={image} onClick={onOpenModal} />}

      <Modal className="modal-style" isOpen={modalState} onRequestClose={closeModal}>
        <ImageModal url={regularUrl}  />
      </Modal>

      <Toaster />
    </div>
  );
};

export default App;
