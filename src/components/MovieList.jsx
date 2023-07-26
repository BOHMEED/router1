import React from 'react'
import MovieCard from './MovieCard'
import Modal from './Modal'



const MovieList = ({movies,recherche}) => {
    return (
    <div className='movielist'>
        {movies.filter(el=>el.title.toUpperCase().includes(recherche.toUpperCase())).map(el=><MovieCard el={el} />)}       
    </div>
    )
}

export default MovieList
