import React from 'react';
import ImageView from './ImageView';

const SearchResults = ({searchResults}) => {
  return (
    <div className="w-full px-2 py-4 h-auto flex flex-col justify-center items-center gap-4 ">
      <h1 className="text-2xl w-[92%] text-left font-semibold">Free Stock Photos</h1>
      <div className="image-wrapper">
        {
        Array.isArray(searchResults) ?
        searchResults && searchResults.map((photo, index) => (
            <ImageView key={index} photo={photo} />
          ))  
        :
        (<p>No search results found</p>)
        }
      </div>
    </div>
  );
}

export default SearchResults;
