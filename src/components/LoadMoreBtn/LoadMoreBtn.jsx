import css from "./LoadMoreBtn.module.css"

const LoadMore = ({onClickLoadMore}) => {
  return (
    <div>
      <button className={css.buttonMore} onClick={onClickLoadMore}>LoadMore</button>
    </div>
  )
};

export default LoadMore;
