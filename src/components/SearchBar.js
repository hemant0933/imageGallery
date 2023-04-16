import React, { useState } from "react";
import axios from 'axios';


const SearchBar = ({setImage}) => {
    let [searchTerm, setSearchTerm] = useState("");
    //  api => cat => list of cat images

  const handleSearch = async(e) => {
    // e.prevent.default(e);
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        params:{query: searchTerm},
        headers:{
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
        }
    })
    setImage(response.data.results);

    // const response = await
  };

  return (
    <form>
      <input 
      className="ms-5 me-4"
       type="text"
       placeholder="Search"
       onChange={(e)=>setSearchTerm(e.target.value)}
       value={searchTerm} />
      <button type="button" className="me-5" onClick={handleSearch}>Search</button>
    </form>
  );
};

export default SearchBar;
