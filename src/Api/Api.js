import axios from "axios";


 export async function getImages(query ,page) {
   const baseURL = 'https://api.unsplash.com';
   const endPoint = '/search/photos';
   const url = baseURL + endPoint;

   axios.defaults.params = {
    orientation: "landscape",
    per_page: 16,
  };
 
   const params = {
    query: query,
    page: page,
   };
 
   const headers = {
     Authorization: 'Client-ID A3lB-l4SZ5er0IegetvHgVP6N-RLvx_jqmQYt1nPsyk',
   };
 
   const res = await axios.get(url, { headers, params });
  //  console.log(res);
   return res.data.results
   ;
}

export default getImages