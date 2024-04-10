import css from "./ImageCard.module.css";

export const ImageCard = ({ image: { urls, title }, onClick }) => {
  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={title}
        className={css.image}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;