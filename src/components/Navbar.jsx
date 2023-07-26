import React, { useState } from 'react'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'


const Navbar = ({openModal,setopenModal,recherche,setrecherche,movies,setmovies}) => {
    const [addMovie, setaddMovie] = useState({
        title:"",
        description:"",
        posterURL:"",
        rating: "",
        })
    const addnewmovie=()=>{
        setmovies([...movies,addMovie])
        }    // -------function to  push the new movie for the -------
    const navigate=useNavigate() 
    return (
    <div className='header'>
        <div className='navbar'>
        {(openModal)?<Modal setopenModal={setopenModal} setaddMovie={setaddMovie} addMovie={addMovie} addnewmovie={addnewmovie} />:null}

            <h1>Movie App</h1>
            <ul>
                <li onClick={()=>{navigate('/')}}>Login</li>
                <li><input type="text" placeholder='Search' value={recherche} onChange={(e)=>setrecherche(e.target.value)} /></li>
                <li onClick={()=>setopenModal(true)}> Add</li>
                <li>Favoris</li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar
