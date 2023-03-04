import { useState } from 'react';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import findRatingByUserName from '../rate-component/findRatingByUserName';

const MovieModal = ({ movieObj = {}, closeHandler, submitHandler, open }) => {
    const { email } = useSelector(store => store.loginStatus.authData);
    const ratingByUsername = findRatingByUserName(movieObj, email) || 3;

    const [title, setTitle] = useState(movieObj.Title ? movieObj.Title : "");
    const [summery, setSummery] = useState(movieObj.summery ? movieObj.summery : "");
    const [rating, setRating] = useState(ratingByUsername);
    const [year, setYear] = useState(movieObj.Year ? movieObj.Year : "");
    const [url, setUrl] = useState(movieObj.Poster);

    return (
        <Dialog open={open} onClose={closeHandler} >
            <DialogTitle>
                <p className='text-primary h4'>
                    {movieObj.Title ? `Editing  the movie "${movieObj.Title}"` : `Add a new movie!`}
                </p>
            </DialogTitle>
            <DialogContent>
                <div className='py-2'>
                    <TextField
                        label="Title"
                        size='small'
                        className='w-100 my-1'
                        defaultValue={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <TextField
                        label="Summery"
                        multiline
                        rows={5}
                        size="small"
                        className='w-100 my-1'
                        defaultValue={summery}
                        onChange={(e) => setSummery(e.target.value)}
                    />

                    <TextField
                        label="Image URL"
                        size='small'
                        className='w-100 my-1'
                        defaultValue={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />

                    <div className='my-2 d-flex justify-content-between'>
                        <div>
                            <TextField
                                label="Year"
                                size="small"
                                className='w-100 my-1'
                                defaultValue={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                        <div className='d-flex align-items-center'>
                            <span className='text-muted'>Rating</span>
                            <Rating name="half-rating-read" className="mx-2" defaultValue={ratingByUsername} precision={1} onChange={(e) => setRating(+e.target.value)} />
                        </div>
                    </div>

                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeHandler}>Cancel</Button>
                <Button onClick={() => submitHandler(title, summery, rating, year, url)}>
                    {movieObj.Title ? "Edit" : "Add"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MovieModal;
