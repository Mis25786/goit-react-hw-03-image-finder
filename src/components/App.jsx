import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    value: '',
  };

  handleFormSubmit = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Searchbar handleFormSubmit={this.handleFormSubmit} />
        <ImageGallery formSubmit={value} />

        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
