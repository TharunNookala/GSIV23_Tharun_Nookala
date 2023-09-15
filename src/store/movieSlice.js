import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    id: null,
    search: '',
    currentPage: 1,
    isLoading: false,
};

const movieSlice = createSlice({
    name: 'movies',
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

export const getMovies = (pageNumber) => async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${pageNumber}`)
            const data = response.data.results
            dispatch(fetchMovies(data))
            dispatch(setCurrentPage(pageNumber));
        }
        finally {
            dispatch(setLoading(false));
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

export const { fetchMovies, setSearch, setCurrentPage, setLoading, setMovieById } = movieSlice.actions;
export default movieSlice.reducer;

