import { useState, useEffect } from "react";
import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import ImageModal from "../imageModal/ImageModal";
import { ImageCardImage } from "../imageCard/ImageCard";
import fetchApi from "../../api/api";

interface ImageApiResponse {
  data: {
    results: ImageCardImage[];
  };
}

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<ImageCardImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageCardImage | null>(
    null
  );
  const [hasMore, setHasMore] = useState<boolean>(true);
  const imagesPerPage = 12;

  const handleSearch = (searchQuery: string) => {
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
      const response: ImageApiResponse = await fetchApi(query, page);
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

  const openModal = (image: ImageCardImage) => {
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
      {loading && <Loader loading={loading} />}
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
