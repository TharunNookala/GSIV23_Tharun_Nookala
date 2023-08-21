// InfiniteScroll.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../store/movieSlice';

function InfiniteScroll() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.movies.isLoading);
    const currentPage = useSelector((state) => state.movies.currentPage);

    const handleScroll = () => {
        if (isLoading) return;

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY;

        if (documentHeight - windowHeight - scrollPosition < 200) {
            dispatch(getMovies(currentPage + 1));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null; // InfiniteScroll component doesn't render anything directly
}

export default InfiniteScroll;
