import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={css.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;

console.log(LoadMoreBtn);