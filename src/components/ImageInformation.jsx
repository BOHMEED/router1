import React from 'react'
import ReactStars from "react-rating-stars-component";

const ImageInformation = ({setImageinfo,el}) => {
    return (
    <div className='imageinformation'>
        <span className="Movie_information">
            <button onClick={()=>{setImageinfo(false)}} className='delete'>x</button> {/* -----onclick to this button it appear the information of the film------ */}
            <h1>{el.title}</h1>
            <p>{el.description} </p>
            <h2> <ReactStars count={5} size={24} value={el.rating} edit={false} activeColor="#ffd700" /></h2>{/* -----create a rating------ */}
        </span>
    </div>
    )
}

export default ImageInformation
