import React, { useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import { getMovies } from '../../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const Row = ({ title }) => {

    const dispatch = useDispatch();
    const { data: movies, search } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);
    // console.log("movies: ", movies)
    const sortedMovies = movies?.slice().sort((a, b) =>
        new Date(b.releaseDate) - new Date(a.releaseDate)
    );
    const filteredMovies = sortedMovies?.filter((movie) => movie?.title?.toLowerCase().includes(search.toLowerCase()));
    // console.log("filtered", filteredMovies)

    return (
        <div className='flex flex-col border-2 h-full'>
            {console.log(movies)}
            <h2 className='font-bold md:text-xl p-4'>{title}</h2>
            <div className='flex justify-center w-full'>
                <div className='flex flex-wrap w-full items-center justify-center p-4 scrollbar-hide scroll-smooth'>
                    {filteredMovies.map((item) => {
                        return <div key={item.id} className='p-4'><Link to={`/details/${item.id}`}><MovieCard item={item} /></Link></div>
                    })}
                </div>
            </div>
        </div>

    )
}

export default Row
