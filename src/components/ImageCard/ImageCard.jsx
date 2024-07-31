

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <div>
        <img
          src={image.small}
          alt={image.title}
          className="image"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ImageCard;
