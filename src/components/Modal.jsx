import React from 'react'

const Modal = ({addMovie,setopenModal,setaddMovie,addnewmovie}) => {
    return (
    <div className='modal'>
        <div className="modal_container">
            <input type="text" placeholder='Name' onChange={(e)=>(setaddMovie({...addMovie,title:e.target.value}))} />
            <input type="text" placeholder='Description' onChange={(e)=>(setaddMovie({...addMovie,description:e.target.value}))} />
            <input type="text" placeholder='Poster URL' onChange={(e)=>(setaddMovie({...addMovie,posterURL:e.target.value}))} />
            <input type="number" placeholder='Rating'onChange={(e)=>(setaddMovie({...addMovie,rating:e.target.value}))} />
            <span className="buttons">
                <button className="cancel" onClick={()=>setopenModal(false)} >Cancel</button>
                <button className="add" onClick={()=>addnewmovie()} >Add</button>
            </span>
        </div>
    </div>
    )
}

export default Modal
