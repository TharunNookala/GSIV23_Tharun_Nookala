import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;
// const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${pages}`;
// const fetchURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;

const initialState = {
    data: [],
    pages: 1,

};

const movieSlice = createSlice({
    name: 'getMovie',
    initialState,
    reducers: {
        fetchMovies(state, action) {
            state.data = action.payload;
        }
    }
})

export default movieSlice.reducer;
export const { fetchMovies } = movieSlice.actions;

export function getMovies() {
    return async function getMoviesThunk(dispatch) {
        const response = await axios.get(requestURL)
        const data = response.data.results
        dispatch(fetchMovies(data))
    }
}

// export function getMovieById() {
//     return async function getMoviesThunk(dispatch) {

//         const response = await axios.get(fetchURL)
//         const data = response.results
//         dispatch(fetchMovies(data))

//     }
// }
