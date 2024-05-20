import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore, show }) => {
  if (!show) {
    return null;
  }
  return (
    <button className={css.loadMoreBtn} type="submit" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
