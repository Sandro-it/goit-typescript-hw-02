import Modal from "react-modal";
import { ImageCardImage } from "../imageCard/ImageCard";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  image: ImageCardImage | null;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  image,
}) => {
  if (!image) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
