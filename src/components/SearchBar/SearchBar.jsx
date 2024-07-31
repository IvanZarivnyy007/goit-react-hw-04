import { Input, Button } from 'antd';
import getImages from '../../Api/Api.js';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState();
  const [image, setImage] = useState([]);

  const handleClick = () => {
    if (input !== '') {
      getImages(input, 5)
        .then((data) => {
          setImage(data);
        })
        .catch(() => {
          <ErrorMessage />;
        });
    } else {
      <ErrorMessage />;
    }
  };

  return (
    <div>
      <header>
        <form>
          <Input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button onClick={handleClick} type="submit">
            Search
          </Button>
        </form>
        <Toaster />
      </header>
    </div>
  );
};

export default SearchBar;
