import { useState } from 'react';

const ImageModal = ({}) => {
  let subtitle;
  const [openModal, setOpenModal] = useState(false);

  const modalisOpen = () => {
    setOpenModal(true);
    subtitle.style.color = '#f00';
  };
  const modalisClose = () => {
    setOpenModal(false);
  };
  return <div></div>;
};

export default ImageModal;
