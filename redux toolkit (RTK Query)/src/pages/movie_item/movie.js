import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import styles from "./movie.module.css";


import { useFetchSelectedMovieQuery } from "../../API/movieApi";
import Loading from "../../components/loading/loading";
import { findRating } from "../../components/movie-action-components/rate-component/findRating";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import findRatingByUserName from "../../components/movie-action-components/rate-component/findRatingByUserName";

export const Movie = () => {
    const { movieId } = useParams();

    const { data, isLoading } = useFetchSelectedMovieQuery({ movieId });

    const [loading, setLoading] = useState(true);
    const [movieObj, setMovieObj] = useState({});
    const [creatorName, setCreatorName] = useState("");

    // ratings
    const [movieRating, setMovieRating] = useState(3);
    const [votesCount, setVotesCount] = useState(1);
    const [creatorRating, setCreatorRating] = useState(3);

    useEffect(() => {
        setLoading(isLoading);
        setMovieObj(data);

        // find ratings
        if (data) {
            setMovieRating(findRating(data)[0]);
            setVotesCount(findRating(data)[1]);
            setCreatorName(data.userName);
            setCreatorRating(findRatingByUserName(data, data.userName));
        }
    }, [data, isLoading]);

    // user avatar
    const findUserAvatar = () => {
        return creatorName ? creatorName.slice(0, 1).toUpperCase() : null;
    };
    const userAvatar = findUserAvatar();

    const itemsToShow = () => {
        if (loading) {
            return (
                <Loading />
            );
        } else {
            return (
                <div className="container">
                    <BreadCrumb movieObj={movieObj} />
                    <div className="row movie-container">
                        <div className="col-12 col-lg-6 px-2 row align-items-between my-5">
                            <div className="w-100">
                                <div className="movie-title d-flex justify-content-between align-items-center">
                                    <h1 className="h1 text-primary mb-4">{movieObj.Title}</h1>
                                    <div className="d-flex align-items-center" style={{ minWidth: "200px" }}>
                                        <span className="fw-light text-muted px-2">{`(${votesCount} Votes)`}</span>
                                        <Rating name="half-rating-read" value={movieRating} precision={0.5} readOnly />
                                    </div>
                                </div>
                                <div className={styles.creator}>
                                    <List>
                                        <Divider component="li" className="mb-1" />
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar sx={{ bgcolor: deepOrange[500] }}>{userAvatar}</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={movieObj.userName}
                                                secondary={
                                                    <Rating name="half-rating-read" value={creatorRating} precision={0.5} readOnly />
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </div>
                                <p className="text-justify my-4 px-3">{movieObj.summery}</p>

                            </div>
                            <div className="d-flex justify-content-between align-items-end w-100 px-3">
                                <div className="h6">Run time:
                                    <span className="fw-bold  text-danger px-2"> {movieObj.Runtime || "_"}</span>
                                </div>
                                <div className="h6">Year:
                                    <span className="fw-bold  text-danger px-2"> {movieObj.Year}</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 px-2 my-5 ">
                            <div className="text-center" >
                                <img src={movieObj.Poster} className="rounded" style={{ maxHeight: "445px" }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div>
            {itemsToShow()}
        </div>
    );
};