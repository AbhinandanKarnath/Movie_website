import React from 'react';
import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com/?apikey=9723cf87'
const App = () =>
{
    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`)
    //     const data = await response.json()

    //     console.log(data);
    // }

    // useEffect(() => {
    //   searchMovies('spiderMan');  
    // },[])
    return (
        <div className='app'>
            <h1>Movie Adda</h1>

            <div className='search'>
                <input
                placeholder='search for movies '/>
                <img
                src = {SearchIcon}
                alt = "search"
                onClick={() => {}} /> 
            </div>

            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} />
                    </div>
                    <div>
                        <span>{movie</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;