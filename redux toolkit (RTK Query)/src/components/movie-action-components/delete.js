import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDeleteMovieMutation } from '../../API/movieApi';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteDialog({ movieId, movieName }) {
    const [open, setOpen] = React.useState(false);

    const [deleteMovie] = useDeleteMovieMutation();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submit = () => {
        setOpen(false);
        deleteMovie({ movieId });
    };


    return (
        <div>
            <Fab className='m-1' aria-label="view" size='small' onClick={handleClickOpen}>
                <DeleteIcon />
            </Fab>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{`Are you sure to delete the movie "${movieName}"?`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description text-justify">
                        {`By confirming to delete, every data relating the movie "${movieName}" will be lost!`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={submit}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}