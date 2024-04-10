import axios from "axios";

const Api_key = 'A3lB-l4SZ5er0IegetvHgVP6N-RLvx_jqmQYt1nPsyk';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common["Authorization"] = `Client-ID ${Api_key}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

 const getImages = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos`,
    {
      params: {
        query: query,
        page: page,
      }
    }
  );
  console.log(data);
  return data;
  
};

export default getImages
