import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import { getMovies } from '../../store/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const Row = ({ rowID, title }) => {

    const dispatch = useDispatch();
    const { data: movies } = useSelector(state => state.movies)

    const [pages, setPages] = useState(1)
    // const [movies, setMovies] = useState([]);
    useEffect(() => {
        // const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${pages}`;
        // axios.get(requestURL).then((response) => {
        //     setMovies(response.data.results)
        // })

        dispatch(getMovies())
        console.log(movies)

    }, []);

    return (

        <div className='border-2'>
            <h2 className=' font-bold md:text-xl p-4'>{title}</h2>
            <div className='flex justify-center w-full'>
                <div className='flex flex-wrap w-full items-center justify-center p-4 scrollbar-hide scroll-smooth'>
                    {movies.map((item) => {
                        return <div key={item.id} className='p-4'><Link to={`/details/${item.id}`}><MovieCard item={item} /></Link></div>
                    })}
                </div>
            </div>
        </div>

    )
}

export default Row
