import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Fab from '@mui/material/Fab';
import { useTheme } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

import { useRateMovieMutation } from '../../../API/movieApi';
import findRatingByUserName from "./findRatingByUserName";

export default function RateComponent({ movieObj }) {
    const [rateMovie] = useRateMovieMutation();

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const userName = JSON.parse(localStorage.getItem("email"));
    let oldRating = findRatingByUserName(movieObj, userName);
    const [value, setValue] = React.useState(oldRating);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitRating = () => {
        handleClose();
        rateMovie({ movieObj, value });
    };

    return (
        <div>
            <Fab className='m-1' aria-label="vote" size='small' onClick={handleClickOpen} >
                <StarBorderIcon />
            </Fab>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {`Rate the movie "${movieObj.Title}"`}
                </DialogTitle>
                <DialogContent>
                    <div className='d-flex justify-content-center'>
                        <Rating
                            value={value}
                            onChange={(e) => setValue(+e.target.value)}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={submitRating} autoFocus>
                        submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}