import * as React from 'react';
import { useDispatch } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import MovieModal from './modal-form/movieInputs';
import addNewMovieRequest from '../../store/actions/movie-actions/add-new-movie';

const AddNewMovieButton = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const openHandler = () => {
        setOpen(true);
    };

    const closeHandler = () => {
        setOpen(false);
    };

    const submitHandler = (title, summery, rating, year, url) => {
        dispatch(addNewMovieRequest(title, summery, rating, year, url));
    };

    return (
        <span style={{ position: "absolute", right: "3rem", bottom: "3rem" }}>
            <Fab className='m-1' aria-label="edit" onClick={openHandler} color="primary">
                <AddIcon />
            </Fab>
            <MovieModal open={open} closeHandler={closeHandler} submitHandler={submitHandler} />
        </span>
    );
};

export default AddNewMovieButton;
