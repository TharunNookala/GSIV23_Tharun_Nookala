import { BsSearch } from 'react-icons/bs'
import { BiSolidHome } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { getMovies, setCurrentPage, setSearch } from '../../store/movieSlice'
// import { setCurrentPage, getMovies } from '../../store/movieSlice';

const Header = () => {
    const dispatch = useDispatch()
    const currentPage = 1;

    const handleSearchChange = (event) => {
        dispatch(setSearch(event.target.value));
    };
    function handleSubmit(e) {
        // e.preventDefault();
        dispatch(setSearch(e.target.value));
        dispatch(getMovies(e.target.value));
    }

    function handleHomeClick(pageNumber) {
        dispatch(setCurrentPage(pageNumber));
        dispatch(getMovies(pageNumber));
    }

    return (
        <header className='w-full border-2 py-2 px-3 flex items-center justify-between'>
            <form className='flex items-center justify-center gap-2 bg-gray-300 py-1 px-2 rounded-md w-1/2' onSubmit={handleSubmit}>
                <button type='submit'><BsSearch className='text-gray-400 text-lg font-medium' /></button>
                <input
                    type='search'
                    name='search'
                    placeholder="Search"
                    onChange={handleSearchChange}
                    className='bg-gray-300 py--1 px-2 rounded-md outline-none w-full placeholder:text-gray-400 placeholder:font-medium'
                />
            </form>
            <button onClick={() => handleHomeClick(currentPage)}>
                <BiSolidHome size={25} className='text-gray-600 text-lg mr-4' />
            </button>
        </header >
    )
}

export default Header