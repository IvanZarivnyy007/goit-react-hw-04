const ImageCard = ({ url, alt, onClick }) => { 
  return (
    <div>
      <img src={url} alt={alt} className="Image-Card" onClick={onClick} />
    </div>
  );
};

export default ImageCard;
