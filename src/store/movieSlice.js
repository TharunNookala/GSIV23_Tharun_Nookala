import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;
// const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${pageNumber}`;
// const fetchURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;
// const searchURL = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;


const initialState = {
    data: [],
    search: '',
    currentPage: 1,
};

export function getMovies(pageNumber) {
    return async function getMoviesThunk(dispatch) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${pageNumber}`)
        const data = response.data.results
        dispatch(fetchMovies(data))
    }
}
// export function searchMovies(search) {
//     return async function searchMoviesThunk(dispatch) {
//         const response = await axios.get(searchURL)
//         const data = response.results
//         dispatch(setSearch(data))

//     }
// }


const movieSlice = createSlice({
    name: 'getMovie',
    initialState,
    reducers: {
        fetchMovies(state, action) {
            state.data = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    }
})

export default movieSlice.reducer;
export const { fetchMovies, setSearch, setCurrentPage } = movieSlice.actions;

