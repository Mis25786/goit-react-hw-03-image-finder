import axios from 'axios';

export const makeRequest = async (nextName, nextPage) => {
  const responsive = await axios.get(
    `https://pixabay.com/api/?q=${nextName}&page=${nextPage}&key=32938330-25a7d9530d370aeaa9b179f57&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responsive.data;
};
