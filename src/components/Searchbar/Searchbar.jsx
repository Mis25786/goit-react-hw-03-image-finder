import React, { Component } from 'react';
import { toast } from 'react-toastify';

import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast('Enter your request');
      return;
    }
    this.props.handleFormSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={css['searchbar']}>
        <form className={css['form']} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['button']}>
            <ImSearch style={{ marginRight: 8 }}>Search</ImSearch>
          </button>

          <input
            className={css['input']}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
