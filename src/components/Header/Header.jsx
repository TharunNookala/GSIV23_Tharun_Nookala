import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { BiSolidHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
    const [search, setSearch] = useState('')

    return (
        <header className='w-full border-2 py-2 px-3 flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2 bg-gray-300 py-1 px-2 rounded-md w-1/2'>
                <BsSearch className='text-gray-400 text-lg font-medium' />
                <input
                    type='search'
                    name='search'
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-gray-300 py--1 px-2 rounded-md outline-none w-full placeholder:text-gray-400 placeholder:font-medium'
                />
            </div>
            <Link to='/'>
                <BiSolidHome size={25} className='text-gray-600 text-lg mr-4' />
            </Link>
        </header>
    )
}

export default Header