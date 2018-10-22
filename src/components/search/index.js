import React from 'react'
import PropTypes from 'prop-types';

import './search.css'

const Search = ({ handleSearch, isDisabled, placeholder }) => (
  <div className='search'>
    <input
      type='search'
      placeholder={placeholder}
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)

Search.propTypes = {
  isDisabled: PropTypes.bool,
  handleSearch: PropTypes.func.isRequired
}

export default Search
