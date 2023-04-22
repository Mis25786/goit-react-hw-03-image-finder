const URL = 'https://pixabay.com/api';
const KEY = '32938330-25a7d9530d370aeaa9b179f57';

function fetchSearch(value) {
  return fetch(
    `${URL}/?q=${value}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=3`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Nothing was found for the query ${value}`)
    );
  });
}

const api = {
  fetchSearch,
};

export default api;

// ==========================================================

// const ENDPOIND = 'https://pixabay.com/api';
// const KEY = '35628652-5826d534b36a8e5c375c91e65';

// export default class ImageApiService {
//   constructor() {
//     this.page = 1;
//     this.per_page = 12;
//     this.searchQuery = '';
//     console.log(this.searchQuery);
//   }

//   getImg() {
//     const URL = `${ENDPOIND}/?key=${KEY}&q=${this.searchQuery}&page=${this.page}&${this.per_page}`;

//     return fetch(URL)
//       .then(response => response.json())
//       .then(({ hits }) => {
//         // this.nextPage();
//         return hits;
//       });
//   }

//   //додаємо сторінку
//   nextPage() {
//     this.page += 1;
//   }
//   // скидуємо на 1 сторінку при новому запиті
//   resetPage() {
//     this.page = 1;
//   }
// }
