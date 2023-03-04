import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const BookmarkComponent = () => {
    const [isBookMarked, setIsBookMarked] = useState(false);
    const showBookMark = () => {
        return (isBookMarked ? <BookmarkIcon /> : <BookmarkBorderIcon />);
    };

    const bookMarkHandler = () => {
        isBookMarked ? setIsBookMarked(false) : setIsBookMarked(true);
        if (!isBookMarked) {
            setIsBookMarked(true);
        }
    };

    return (
        <Fab className='m-1' aria-label="bookmark" size='small' onClick={bookMarkHandler}>
            {showBookMark()}
        </Fab>
    );
};

export default BookmarkComponent;
