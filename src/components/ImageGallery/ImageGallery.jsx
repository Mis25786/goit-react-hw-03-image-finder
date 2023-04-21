import { Component } from 'react';
// import { fetchSearch } from '../../services/Api';
import { toast } from 'react-toastify';
import API from '../../services/Api';

import ImageGalleryItem from '../ImageGalleryItem/';
import Loader from '../Loader';

import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    searchResult: null,
    error: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.formSubmit;
    const nextName = this.props.formSubmit;

    if (prevName !== nextName) {
      this.setState({ loading: true, searchResult: null });

      API.fetchSearch(nextName)
        .then(({ hits }) => this.setState({ searchResult: hits }))
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { searchResult, loading, error } = this.state;

    return (
      <>
        {/* {!this.props.formSubmit && <p>Введіть запит</p>} */}

        {loading && <Loader />}

        {error && toast.error(`Нічого не знайдено по запиту ${searchResult}`)}

        {searchResult && (
          <ul className={css['gallery']}>
            {<ImageGalleryItem arrayResult={searchResult} />}
          </ul>
        )}
      </>
    );
  }
}

// if (status === 'idle') {
//   return <div>Введіть запит щоб ви хотіли знайти</div>;
// }
// if (status === 'pending') {
//   return <p>Loading...</p>;
// }
// if (status === 'rejected') {
//   return <p>{error.message}</p>;
// }
// if (status === 'resolved') {
//   return (
//     <ul className={css['gallery']}>
//       {<ImageGalleryItem arrayResult={searchResult} />}
//     </ul>
//   );
// }
