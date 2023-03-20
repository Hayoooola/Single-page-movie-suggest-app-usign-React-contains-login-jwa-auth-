import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useFetchAllMoviesQuery } from '../../API/movieApi';
import Loading from '../../components/loading/loading';
import { SingleMovie } from './single-movie';
import AddNewMovieButton from '../../components/movie-action-components/addNewMovie';


export const Movies = () => {
    const { data, isLoading } = useFetchAllMoviesQuery();

    const isUserLogin = useSelector(store => store.loginStatus.isUserLogin);
    const [loading, setLoading] = useState(true);
    const [moviesArray, setMoviesArray] = useState([]);

    useEffect(() => {
        setMoviesArray(data);
        setLoading(isLoading);
    }, [data, isLoading]);


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