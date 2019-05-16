import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: this.state.searchString
    })
    fetch('/api/v1/listings/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      debugger;
      this.setState({ listings: body })
    })
  }

  render() {
    const searchedListings = this.state.listings.map(listing => {
      return(
        <li>{listing.street}</li>
      )
    })
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Search</label>
        <input type='text' name='searchString' value={this.state.searchString} onChange={this.handleChange} />

        <input type='submit' value='Submit' />
      </form>
      <ul>{searchedListings}</ul>
    </div>
    )
  }
}

export default SearchBar;
