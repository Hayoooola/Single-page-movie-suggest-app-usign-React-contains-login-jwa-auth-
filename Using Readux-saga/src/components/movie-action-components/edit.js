import * as React from 'react';
import { useDispatch } from 'react-redux';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

import MovieModal from './modal-form/movieInputs';
import editSelectedMovieRequest from '../../store/actions/movie-actions/edit-selected-movie';

const EditComponent = ({ movieObj }) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const openHandler = () => {
        setOpen(true);
    };

    const closeHandler = () => {
        setOpen(false);
    };

    const editHandler = (title, summery, rating, year, url) => {
        dispatch(editSelectedMovieRequest(movieObj, title, summery, rating, year, url));
        closeHandler();
    };

    return (
        <span>
            <Fab className='m-1' aria-label="edit" size='small' onClick={openHandler}>
                <EditIcon />
            </Fab>
            <MovieModal movieObj={movieObj} open={open} closeHandler={closeHandler} submitHandler={editHandler} />
        </span>
    );
};

export default EditComponent;
