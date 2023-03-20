import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

import RateComponent from '../../components/movie-action-components/rate-component/rating';
import { findRating } from "../../components/movie-action-components/rate-component/findRating";
import DeleteComponent from '../../components/movie-action-components/delete';
import MovieDetail from '../../components/movie-action-components/movie-detail';
import EditComponent from '../../components/movie-action-components/edit';
import { useEffect, useState } from 'react';

export const SingleMovie = ({ movieObj }) => {
    // calculate movie rating
    let [rating, votesCount] = findRating(movieObj);

    // user avatar
    const findUserAvatar = () => {
        const userName = movieObj.userName;
        return userName.slice(0, 1).toUpperCase();
    };
    const userAvatar = findUserAvatar();


    // prepare actions according to username
    const userName = movieObj.userName;
    const currentUserName = JSON.parse(localStorage.getItem("email"));
    if (currentUserName === userName) {
        return (
            <div className='container my-3' key={movieObj.id}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>

                            {/* Avatar + movie poster */}
                            <div className='d-flex align-items-center'>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>{userAvatar}</Avatar>
                                {movieObj.Poster ? <img className='rounded mx-3' src={movieObj.Poster} alt={movieObj.Title} style={{ height: "56px" }} /> : null}
                            </div>

                        </ListItemAvatar>

                        {/* movie title  + votes */}
                        <div className='row w-100 align-items-center'>
                            <div className='col-12 col-lg-9'>
                                <ListItemText
                                    primary={movieObj.Title}
                                />
                                <div className='d-flex align-items-center'>
                                    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                                    <span className='text-muted mx-2'>{`(${votesCount} votes)`}</span>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>

                                {/* actions */}
                                <div className='d-flex justify-content-end align-items-center' >
                                    <MovieDetail movieId={movieObj.id} />
                                    <EditComponent movieObj={movieObj} />
                                    <DeleteComponent movieId={movieObj.id} movieName={movieObj.Title} />
                                    <RateComponent movieObj={movieObj} />
                                </div>
                            </div>
                        </div>

                    </ListItem>
                    <Divider component="li" />
                </List>
            </div>
        );
    } else {
        return (
            <div className='container my-3' >
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">

                        {/* Avatar + movie poster */}
                        <ListItemAvatar>
                            <div className='d-flex align-items-center'>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>{userAvatar}</Avatar>
                                <img className='rounded mx-3' src={movieObj.Poster} alt={movieObj.Title} style={{ height: "56px" }} />
                            </div>
                        </ListItemAvatar>

                        <div className='row w-100 align-items-center'>

                            {/* movie title  + votes */}
                            <div className='col-12 col-lg-9'>
                                <ListItemText
                                    primary={movieObj.Title}
                                />
                                <div className='d-flex align-items-center'>
                                    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                                    <span className='text-muted mx-2'>{`(${votesCount} votes)`}</span>
                                </div>
                            </div>

                            {/* actions */}

                            <div className='col-12 col-lg-3'>
                                <div className='d-flex justify-content-end align-items-center' >
                                    <MovieDetail movieId={movieObj.id} />
                                    <RateComponent movieObj={movieObj} />
                                </div>
                            </div>
                        </div>

                    </ListItem>
                    <Divider component="li" />
                </List>
            </div>
        );
    }

};