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
    const { searchResult, error, loading, page } = this.state;

    const prevName = prevProps.formSubmit;
    const nextName = this.props.formSubmit;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    // console.log(prevName);
    // console.log(nextName);
    // console.log(prevPage);
    // console.log(nextPage);

    console.log('searchResult :>> ', searchResult);
    console.log('error :>> ', error);
    console.log('loading :>> ', loading);
    console.log('page :>> ', page);

    if (prevName !== nextName) {
      this.setState({ loading: true, searchResult: null });

      this.sendingRequest();
    }

    console.log(prevName !== nextName);
    console.log(prevPage !== nextPage);
    // if (prevName !== nextName || prevPage !== nextPage) {
    //   this.setState({ loading: true, searchResult: null });

    //   const arrayImageNew = this.sendingRequest();

    //   console.log(searchResult);
    //   console.log(arrayImageNew);

    //   this.setState({ searchResult: [...searchResult, ...arrayImageNew] });
    // }
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
