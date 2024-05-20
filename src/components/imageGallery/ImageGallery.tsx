import ImageCard, { ImageCardImage } from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: ImageCardImage[];
  onImageClick: (image: ImageCardImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.imageGalleryList}>
      {images.map((image) => (
        <li className={css.imageGalleryItem} key={image.id}>
          <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
