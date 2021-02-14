import React, { Component } from 'react';
import search from '../../Image/search-new.svg'
import './Search.css';

class LocalSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }
  handleSearch(term) {
    this.setState({
      searchTerm: term
    });
    this.props.searchTerm(term);
  }
  render() {
    return (
      <div className="localSearch">
        <div className="input-group">
          <img src={search} alt="search" height="15px"/>
          <input
            type="text"
            className="form-control"
            id="local-search"
            placeholder={this.props.placeholder}
            value={this.state.searchTerm}
            onClick={event => {
              event.stopPropagation();
            }}
            onChange={event => {
              event.stopPropagation();
              this.handleSearch(event.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

export default LocalSearch;
