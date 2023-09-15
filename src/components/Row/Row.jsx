import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Row = ({ title }) => {
    const { data: movies, search } = useSelector(state => state.movies)
    const ids = movies.map(({ title }) => title);
    const filtered = movies.filter(({ title }, index) =>
    !ids.includes(title, index + 1));
    const sortedMovies = filtered?.slice().sort((a, b) =>
        new Date(b.releaseDate) - new Date(a.releaseDate)
    );

    const filteredMovies = sortedMovies?.filter((movie) => movie?.title?.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='flex flex-col border-2 h-full'>
            <h2 className='font-bold md:text-xl p-4'>{title}</h2>
            <div className='flex justify-center w-full'>
                <div className='flex flex-wrap w-full items-center gap-2 sm:gap-1 justify-center p-4 scrollbar-hide scroll-smooth'>
                    {filteredMovies.map((item, i) => {
                        return <div key={i} className='p-4'><Link to={`/details/${item.id}`}><MovieCard item={item} /></Link></div>
                    })}
                </div>
            </div>
        </div>

    )
}

export default Row
