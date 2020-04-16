import React from 'react';
import './search-box.css';


function SearchBox({ placeholder, updateSearchfield }) {

  return (
    <div className="search-box">
        <input type="search" placeholder={placeholder} onChange={updateSearchfield} />
    </div>
  )
}
export default SearchBox;