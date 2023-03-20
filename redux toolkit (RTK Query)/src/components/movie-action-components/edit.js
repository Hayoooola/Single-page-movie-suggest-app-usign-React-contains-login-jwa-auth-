import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

import MovieModal from './modal-form/movieInputs';
import { useEditMovieMutation } from '../../API/movieApi';

const EditComponent = ({ movieObj }) => {
    const [open, setOpen] = React.useState(false);

    const [editMovie] = useEditMovieMutation();

    const openHandler = () => {
        setOpen(true);
    };

    const closeHandler = () => {
        setOpen(false);
    };

    const editHandler = (title, summery, rating, year, url) => {
        editMovie({ movieObj, title, summery, rating, year, url });
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
