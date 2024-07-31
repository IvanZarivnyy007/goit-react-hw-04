import ImageCard from '../ImageCard/ImageCard.jsx';
import css from "./ImageGallery.module.css"

const ImageGallery = ({ images ,onClick }) => {
  return (
    <div>
      <ul className={css.list}>
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
