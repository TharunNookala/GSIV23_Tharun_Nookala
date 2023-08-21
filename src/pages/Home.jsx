import { useEffect } from 'react';
import Row from '../components/Row/Row'
import { useDispatch } from 'react-redux';
import { getMovies } from '../store/movieSlice';
import Pagination from '../components/Pagination/Pagination';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies(1));
    }, [dispatch]);

    return (
        <div className='relative'>
            <Row rowID='1' title='Up Coming' />
            <div className='fixed bottom-0 w-screen'>
                <Pagination />
            </div>
        </div>
    )
}

export default Home