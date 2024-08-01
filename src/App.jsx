import { Toaster, toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import getImages from './Api/Api.js';
import useModal from './hooks/useModal.js';

import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';

Modal.setAppElement('#root');

const App = () => {
  const [image, setImage] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalState, openModal, closeModal] = useModal();
  const [regularUrl, setRegularUrl] = useState('');
  const [hidenLoad, setHiddenLoad] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setError(null);
    if (input.trim() !== '') {
      getImages(input, page)
        .then((data) => {
          setImage(data);
          setLoading(false);
          setHiddenLoad(true);
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

  useEffect(() => {
    setLoading(true);
    setError(null);
    if (input.trim() !== '') {
      getImages(input, page)
        .then((data) => {
          setImage((prevImages) => [...prevImages, ...data]);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
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

      <Modal
        className="modal-style"
        contentLabel={image.alt_description}
        isOpen={modalState}
        onRequestClose={closeModal}
      >
        <ImageModal url={regularUrl} />
      </Modal>

      {hidenLoad && <LoadMoreBtn onClickLoadMore={handleLoadMore} />}

      <Toaster />
    </div>
  );
};

export default App;
