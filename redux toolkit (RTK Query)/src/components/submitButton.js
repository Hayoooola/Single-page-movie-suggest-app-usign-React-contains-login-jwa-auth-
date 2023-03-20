import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const SubmitButton = ({ loading = false, customClassName = "", buttonText = "submit", onClick = () => { } }) => {
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                <CircularProgress color='success' />
            </Box>
        )
    } else {
        return (
            <button
                className={`btn btn-primary btn-block fa-lg ${customClassName}`}
                type="submit"
                onClick={onClick}
            >
                {buttonText}
            </button>
        )
    }
}
