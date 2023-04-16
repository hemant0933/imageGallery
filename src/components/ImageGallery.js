import React from 'react';
import ImageView from './ImageView';
const ImageGallery = ({images}) => {


    let i=0


    return (
    <div className='image-wrapper'>
      {
        images.map((photo, index) => (
            // <img key={i++} src={photo.urls.thumb} alt="imageAlt"/>
            <ImageView key={i++} photo={photo}/>
        ))
      }
    </div>
  );
}

export default ImageGallery;
