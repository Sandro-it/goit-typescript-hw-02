import { useState, useEffect } from "react";
import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import ImageModal from "../imageModal/ImageModal";
import fetchApi from "/src/api/api.js";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const imagesPerPage = 12;

  const handleSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      return;
    }
    setQuery(searchQuery);
    setPage(1);
    setError(null);
    setImages([]);
  };

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetchApi(query, page);
      const newImages = response.data.results;
      if (newImages.length === 0 || newImages.length < imagesPerPage) {
        setHasMore(false);
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
        setHasMore(true);
      }
    } catch (error) {
      setError("Failed to fetch images");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {images.length >= imagesPerPage && (
            <LoadMoreBtn onLoadMore={loadMoreImages} show={hasMore} />
          )}
        </>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
