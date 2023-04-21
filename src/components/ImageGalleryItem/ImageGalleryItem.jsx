import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ arrayResult }) {
  console.log('arrayResultItem :>> ', arrayResult);

  return arrayResult.map(el => (
    <li key={el.id} className={css['imageGalleryItem']}>
      <img src={el.webformatURL} alt={el.tags} width="240" />
    </li>
  ));
}

// import React, { Component } from 'react';

// import css from './index';

// // import Modal from '../Modal';

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   render() {
//     return (
//       <li className={css['gallery-item']}>
//         <img src="#" alt="#" />
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;

// import { Component } from 'react';
// import searchAPI from '../../services/Api';
// import { toast } from 'react-toastify';

// import ImageGalleryItem from '../ImageGalleryItem';
// import Loader from './index';

// import css from './ImageGallery.module.css';

// const STATUS = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// export default class ImageGallery extends Component {
//   state = {
//     searchResult: null,
//     error: null,
//     status: STATUS.IDLE,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.formSubmit;
//     const nextName = this.props.formSubmit;

//     if (prevName !== nextName) {
//       this.setState({ status: STATUS.PENDING });

//       searchAPI
//         .fetchSearch(nextName)
//         .then(({ hits }) => {
//           this.setState({ searchResult: hits, status: STATUS.RESOLVED });
//         })
//         .catch(error => this.setState({ error, status: STATUS.REJECTED }));
//     }
//   }
//   render() {
//     const { searchResult, status, error } = this.state;
//     console.log('searchResultGallery :>> ', searchResult);

//     if (status === STATUS.IDLE) {
//       return <div>Щоб ви хотіли знайти</div>;
//     }
//     if (status === STATUS.PENDING) {
//       return <Loader />;
//     }
//     if (status === STATUS.REJECTED) {
//       return <p>{error.message}По вашому запиту нічого не було знайдено</p>;
//     }
//     if (status === STATUS.RESOLVED) {
//       return (
//         <ul className={css['gallery']}>
//           <ImageGalleryItem arrayResult={searchResult} />
//         </ul>
//       );
//     }
//   }
// }
