import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import MovieModal from './modal-form/movieInputs';
import { useAddNewMovieMutation } from '../../API/movieApi';

const AddNewMovieButton = () => {
    const [open, setOpen] = React.useState(false);
    const [addNewMovie] = useAddNewMovieMutation();

    const openHandler = () => {
        setOpen(true);
    };

    const closeHandler = () => {
        setOpen(false);
    };

    const submitHandler = (title, summery, rating, year, url) => {
        addNewMovie({ title, summery, rating, year, url });
        closeHandler();
    };

    return (
        <span style={{ position: "fixed", right: "3rem", bottom: "3rem" }}>
            <Fab className='m-1' aria-label="edit" onClick={openHandler} color="primary">
                <AddIcon />
            </Fab>
            <MovieModal open={open} closeHandler={closeHandler} submitHandler={submitHandler} />
        </span>
    );
};

export default AddNewMovieButton;
