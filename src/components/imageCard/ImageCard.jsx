import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image);
  };

  return (
    <li>
      <div className={css.imageCard} onClick={handleClick}>
        <img
          className={css.image}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
    </li>
  );
};

export default ImageCard;
