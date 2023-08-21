// Pagination.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, getMovies } from '../../store/movieSlice';

function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.movies.currentPage);

    const handlePageClick = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(getMovies(pageNumber));
    };

    return (
        <div className='flex bg-gray-300 p-2 items-center justify-evenly text-xl font-semibold'>
            <button className='bg-yellow-300 p-2 rounded-md' onClick={() => handlePageClick(currentPage - 1)}>&larr;Previous</button>
            <span>Page {currentPage}</span>
            <button className='bg-yellow-300 p-2 rounded-md' onClick={() => handlePageClick(currentPage + 1)}>Next&rarr; </button>
        </div>
    );
}

export default Pagination;
