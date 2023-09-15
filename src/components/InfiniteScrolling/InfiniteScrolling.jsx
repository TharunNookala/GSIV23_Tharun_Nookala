import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../store/movieSlice';

function InfiniteScroll() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.movies.isLoading);
    const currentPage = useSelector((state) => state.movies.currentPage);
    const search = useSelector((state) => state.movies.search);

    useEffect(() => {
        const handleScroll = () => {
            if (isLoading) return;

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;

            if (documentHeight - windowHeight - scrollPosition < 200) {
                // if (search) {
                //     dispatch(getMovies({ page: currentPage + 1, query: search }));
                // } else {
                // }
                dispatch(getMovies(currentPage + 1));
            }
        };


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading, currentPage, search, dispatch]);

    return null; // InfiniteScroll component doesn't render anything directly
}

export default InfiniteScroll;
