import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Loader from './Loader';
import Button from 'components/Button';

export class App extends Component {
  state = {
    inputValue: null,
    searchResult: [],
    error: null,
    loading: false,
    totalHits: 0,
    page: 1,
  };

  handleFormSubmit = value => {
    this.setState({ inputValue: value });
  };

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.inputValue;
    const nextName = this.state.inputValue;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ loading: true, page: 1 });

      return fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=32938330-25a7d9530d370aeaa9b179f57&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Nothing was found for the query ${nextName}`)
          );
        })
        .then(data =>
          this.setState(prevState => ({
            ...prevState,
            searchResult: data.hits,
            totalHits: data.totalHits,
            loading: false,
          }))
        )
        .catch(error => this.setState({ error }));
    }

    if (prevPage < nextPage) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=${nextPage}&key=32938330-25a7d9530d370aeaa9b179f57&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              toast.error(`Nothing was found for the query ${nextName}`)
            )
          );
        })
        .then(data =>
          this.setState(prevState => {
            return {
              searchResult: [...prevState.searchResult, ...data.hits],
            };
          })
        )
        .catch(error => this.setState({ error }));
      // .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, error, searchResult, totalHits } = this.state;

    return (
      <div>
        <Searchbar handleFormSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {error && toast.error(`Sorry, there was an error. Please try again.`)}
        {searchResult.length > 0 && (
          <ImageGallery searchResult={searchResult} />
        )}
        {searchResult.length > 0 && searchResult.length < totalHits && (
          <Button incrementPage={this.incrementPage} />
        )}

        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
