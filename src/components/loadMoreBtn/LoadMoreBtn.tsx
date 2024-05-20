import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
  show: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore, show }) => {
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
