import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
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
