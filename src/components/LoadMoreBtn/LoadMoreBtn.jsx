import { Button } from 'antd';

const LoadMore = ({onClickLoadMore}) => {
  return (
    <div>
      <Button onClick={onClickLoadMore}>LoadMore</Button>
    </div>
  )
};

export default LoadMore;
