import { ImageCard } from './../ImageCard/ImageCard';

const ImageGallery = ({ images ,onClick }) => {
  return (
    <div>
      <ul>
        {images.map((el) => (
          <li key={el.id}>
            <div>
              <ImageCard image={el} onClick={onClick}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
