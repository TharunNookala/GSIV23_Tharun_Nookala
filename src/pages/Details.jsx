import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    // const creditsURL = `https://api.themoviedb.org/3/movie/1073170/credits?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=4`;
    const requestURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;
    useEffect(() => {
        axios.get(requestURL).then((response) => {
            setMovie(response.data)
        })
    }, [id]);
    return (
        <section className='flex h-screen gap-2 items-start p-4'>
            <div className='w-1/4 h-1/2 p-2 border'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt='title' className='w-full h-full' />
            </div>
            <div className='p-4 border w-[40%] mt-3 flex-1'>
                <h2 className='text-lg font-semibold mb-2'>{movie?.title} {movie?.vote_average}</h2>
                <p>{(movie?.release_date)?.split('-')[0]} | {movie.runtime} | {movie?.director}</p>
                <p>Cast : Actor1, Actor2</p>
                <p>{movie?.overview}</p>
            </div>
        </section>
    )
}

export default Details