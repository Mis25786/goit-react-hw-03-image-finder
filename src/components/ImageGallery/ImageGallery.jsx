import { Component } from 'react';
import { toast } from 'react-toastify';
import API from '../../services/Api';

import Button from 'components/Button';

import ImageGalleryItem from '../ImageGalleryItem/';
import Loader from '../Loader';

import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    searchResult: null,
    error: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.formSubmit;
    const nextName = this.props.formSubmit;
    console.log(prevName);
    console.log(nextName);

    if (prevName !== nextName) {
      this.setState({ loading: true, searchResult: null });

      this.sendingRequest();
    }
  }

  sendingRequest = () => {
    API.fetchSearch(this.props.formSubmit, this.state.page)
      .then(({ hits }) => this.setState({ searchResult: hits }))
      .catch(error => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  };

  updatePage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { searchResult, loading, error } = this.state;

    return (
      <>
        {/* {!this.props.formSubmit && <p>Введіть запит</p>} */}

        {loading && <Loader />}

        {error &&
          toast.error(
            `Sorry, there are no images matching your search query. Please try again.`
          )}
        {/* {error && toast.error(`Nothing was found for the query ${searchResult}`)} */}

        {searchResult && (
          <ul className={css['gallery']}>
            {<ImageGalleryItem arrayResult={searchResult} />}
          </ul>
        )}
        <Button updatePage={this.updatePage} />
      </>
    );
  }
}

//!==================================================================

// import { Component } from 'react';
// // import { fetchSearch } from '../../services/Api';
// import { toast } from 'react-toastify';
// import API from '../../services/Api';

// import ImageGalleryItem from '../ImageGalleryItem/';
// import Loader from '../Loader';

// import css from './ImageGallery.module.css';

// export default class ImageGallery extends Component {
//   state = {
//     searchResult: null,
//     error: null,
//     loading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.formSubmit;
//     const nextName = this.props.formSubmit;

//     if (prevName !== nextName) {
//       this.setState({ loading: true, searchResult: null });

//       API.fetchSearch(nextName)
//         .then(({ hits }) => this.setState({ searchResult: hits }))
//         .catch(error => this.setState({ error }))
//         .finally(this.setState({ loading: false }));
//     }
//   }

//   render() {
//     const { searchResult, loading, error } = this.state;

//     return (
//       <>
//         {/* {!this.props.formSubmit && <p>Введіть запит</p>} */}

//         {loading && <Loader />}

//         {error &&
//           toast.error(
//             `Sorry, there are no images matching your search query. Please try again.`
//           )}
//         {/* {error && toast.error(`Nothing was found for the query ${searchResult}`)} */}

//         {searchResult && (
//           <ul className={css['gallery']}>
//             {<ImageGalleryItem arrayResult={searchResult} />}
//           </ul>
//         )}
//       </>
//     );
//   }
// }
