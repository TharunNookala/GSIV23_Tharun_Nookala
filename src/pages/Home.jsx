import { useEffect } from 'react';
import Row from '../components/Row/Row'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/movieSlice';
import InfiniteScroll from '../components/InfiniteScrolling/InfiniteScrolling';

const Home = () => {
    const dispatch = useDispatch();
    const { data: movies } = useSelector(state => state.movies)

    useEffect(() => {
        if(movies.length === 0){
            dispatch(getMovies(1));
        }
    }, [dispatch, movies]);

    return (
        <div className='relative'>
            <Row rowID='1' title='Up Coming' />
            <div className='fixed bottom-0 w-screen'>
                <InfiniteScroll />
            </div>
        </div>
    )
}

export default Home