import { DNA } from 'react-loader-spinner';

const Loader = ({status}) => {
  return (
    <div className='loader'>
      <DNA
        visible={status}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
