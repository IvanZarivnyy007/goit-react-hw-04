import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul className="ul-ImageGallery">
      {images.map((image) => ( 
        <li key={image.id}>
          <ImageCard
            image={image}
            onClick={''} 
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
