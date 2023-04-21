const URL = 'https://pixabay.com/api';
const KEY = '32938330-25a7d9530d370aeaa9b179f57';

function fetchSearch(value) {
  return fetch(
    `${URL}/?q=${value}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нічого не знайдено по запиту ${value}`));
  });
}

const api = {
  fetchSearch,
};

export default api;
