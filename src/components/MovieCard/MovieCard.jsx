import { AiOutlineStar } from 'react-icons/ai'

const MovieCard = ({ item }) => {


    return (
        <div className='sm:w-[150px] sm:h-[250px] md:h-[340px] md:w-[260px] inline-block cursor-pointer relative border-2 hover:bg-gray-600/40 hover:opacity-100 rounded-lg'>
            <img className='h-[80%] block rounded-sm' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-30 left-0 w-full text-black p-1 '>
                <p className='white-space-normal text-xs md:text-sm font-medium h-full flex items-start gap-2 justify-between'>
                    {item?.title}
                    <span className="text-sm text-gray-400 pr-2 flex gap-1 items-center"><AiOutlineStar className='text-base' />{item.vote_average}</span>
                </p>
                <p className='white-space-normal max-w-full text-xs text-center h-full truncate'> {item?.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard