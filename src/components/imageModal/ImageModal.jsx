import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, image }) => {
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
