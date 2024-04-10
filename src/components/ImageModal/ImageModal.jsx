import Modal from "react-modal";


const customStyles = {

    overlay: {
      position: "fixed",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      border: "none",

    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      overflow: "auto",
      backgroundColor: "transparent",
    },
  };
  
  Modal.setAppElement(document.getElementById('root'));
  

  function ImagesModal({ images, isOpen, onRequestClose }) {
    return (
        <Modal
        isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
        <img src={images} alt="Image" />
      </Modal>
    );
  }

  export default ImagesModal;


