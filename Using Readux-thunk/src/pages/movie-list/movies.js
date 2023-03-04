import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../../components/loading/loading';
import { fetchAllMovies } from "../../store/action-creators/movie-actions/fetch-all-movies";
import { SingleMovie } from './single-movie';
import AddNewMovieButton from '../../components/movie-action-components/addNewMovie';


export const Movies = () => {
    // needs to check login status
    const dispatch = useDispatch();
    const [isUserLogin, setIsUserLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const loginStatus = useSelector(store => store.loginStatus);

    // movies actions
    const [moviesArray, setMoviesArray] = useState([]);
    const moviesObj = useSelector(store => store.movies);

    // check login status
    useEffect(() => {
        if (loginStatus.authData.token) {
            setIsUserLogin(true);
            dispatch(fetchAllMovies());
        }
        setLoading(false);
    }, [loginStatus]);

    useEffect(() => {
        setMoviesArray(moviesObj.moviesArray);
        setLoading(moviesObj.loading);
    }, [moviesObj]);


    const itemsToShow = () => {
        if (loading) {
            return <Loading />;
        } else if (isUserLogin) {
            return (
                <div>
                    <AddNewMovieButton />
                    {moviesArray.map((movieObj) => {
                        return (<SingleMovie movieObj={movieObj} key={movieObj.id} />);
                    })}
                </div>
            );
        } else {
            return null;
        }
    };

    return itemsToShow();
};