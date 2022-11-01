import axios from 'axios';
import React, { useState } from 'react';

export default function SearchMovie(props) {
    const { movieSearch, setMovieSearch } = props;

    const [movies, setMovies] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (movieSearch == "") {
             alert("What movie are you looking for?");
        } else {
            axios.get(`/search?movie=${movieSearch}`).then((res) => {
                setMovies(res.data.results);
            });
        }


    }

    return (
        <section>
            <div>
            <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Search Movie</h2>
                <div className='movie-container'>
                    <input  maxLength={140} placeholder='What movie are you interested in?' className='movie-input' type="text" name="description" value={movieSearch} onChange={(e) => setMovieSearch(e.target.value)} />
                    <button className='search-btn'>Search</button>
                    <button className='search-btn'>Favorite List</button>
                    <button className='search-btn'>Watch List</button>
                </div>
            </form>
            </div>
        </section>
    );
}