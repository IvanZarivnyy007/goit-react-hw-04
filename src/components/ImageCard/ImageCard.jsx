import css from "./ImageCard.module.css"

const ImageCard = ({ image, onClick }) => {
  // console.log(image);
  return (
    <div >
      <img
        src={image.urls.small
        }
        alt={image.alt_description}
        className={css.image}
        onClick={()=>{
          onClick(image.urls.regular)
        }}
      />
    </div>
  );
};

export default ImageCard;
