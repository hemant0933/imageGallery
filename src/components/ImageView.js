import React,{useState} from 'react';


const ImageView = ({photo}) => {
    let [isClicked,setIsClicked] = useState(false);
 
    return (
    <div onClick={()=> setIsClicked(!isClicked)}
     className={`image-view ${isClicked? 'expanded' : ''}`}>

      <img src={photo.urls.regular} alt={photo.alt_description}/>
        {
            isClicked && 
            <div className='image-details'>
                <h6>{photo.alt_description || "untitled"}</h6>
                <p>By: {photo.user.name || "Anonymous"}</p>
            </div>
        }
    </div>
  );
}

export default ImageView;
