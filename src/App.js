import './App.css';
import SearchBar from './components/SearchBar';
import React,{useState} from 'react';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
 
let [image,setImage] = useState([]);
    console.log(image);
 
  return (
    <>
    <div className='container-fluid '>
      <h1 className='text-center mt-3 heading'><b>Unsplash 2.0</b></h1>
      <SearchBar setImage={setImage}/>
      <ImageGallery images={image}/>
    </div>
    <Footer/>
    
    </>
    

  );
}

export default App;
