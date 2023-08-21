import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;
// const requestURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${pageNumber}`;
// const fetchURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;
// const searchURL = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;


const initialState = {
    data: [],
    movie: [],
    id: null,
    search: '',
    currentPage: 1,
    isLoading: false,
};


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
            state.data = state.data.concat(action.payload);
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setMovieById: (state, action) => {
            state.id = action.payload
        },

    }
})

export function getMovies(pageNumber) {
    return async function getMoviesThunk(dispatch) {
        dispatch(setLoading(true));
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${pageNumber}`)
            const data = response.data.results
            dispatch(fetchMovies(data))
        }
        finally {
            dispatch(setLoading(false));
        }
    }
}
export function getMovieById(id) {
    return async function getMoviesThunk(dispatch) {
        dispatch(setLoading(true));
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`)
            const data = response.data.results
            dispatch(setMovieById(data))
        }
        finally {
            dispatch(setLoading(false));
        }
    }
}

export default movieSlice.reducer;
export const { fetchMovies, setSearch, setCurrentPage, setLoading, setMovieById } = movieSlice.actions;

