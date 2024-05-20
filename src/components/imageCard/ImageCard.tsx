import css from "./ImageCard.module.css";

export interface ImageCardImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: ImageCardImage;
  onImageClick: (image: ImageCardImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
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
