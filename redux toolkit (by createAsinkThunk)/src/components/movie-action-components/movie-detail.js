import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const MovieDetail = ({ movieId }) => {
    const navigate = useNavigate();

    const MovieDetail = () => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <Fab className='m-1' aria-label="view" size='small' onClick={MovieDetail} >
            <RemoveRedEyeIcon />
        </Fab>
    );
};

export default MovieDetail;
