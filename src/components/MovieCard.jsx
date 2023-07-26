import React, { useState } from 'react'
import ImageInformation from './ImageInformation'

const MovieCard = ({el}) => {
    const [imageinfo,setImageinfo]=useState(false);
    return (
    <div className='moviecard'>
        {(imageinfo)?<ImageInformation setImageinfo={setImageinfo} el={el} />:null}
        <img src={el.posterURL} alt={el.title} onClick={()=>{setImageinfo(true)}} />
        
    </div>
    )
}

export default MovieCard
