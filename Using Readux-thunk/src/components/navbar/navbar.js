import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Logo from "../../assets/images/hayoola-logo.png";

import styles from "./navbar.module.css";
import logOutRequest from '../../store/action-creators/auth-actions/logOut';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    // user menu handlers
    const openUserMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeUserMenu = () => {
        setAnchorEl(null);
    };
    const logOut = () => {
        closeUserMenu();
        dispatch(logOutRequest());
    };

    const userName = JSON.parse(localStorage.getItem("email"));
    const userAvatar = userName.slice(0, 1);

    return (
        <AppBar position="static">
            <div className='px-5'>
                <Toolbar>

                    {/* logo */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to="/"><img src={Logo} height="60px" ></img></Link>
                    </IconButton>

                    {/* menu links */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <div className={styles.menu_items}>
                            <Link to="/" >
                                Home
                            </Link>
                            <Link to="/login" >
                                Login
                            </Link>
                            <Link to="/sign-up" >
                                Register
                            </Link>
                        </div>
                    </Typography>

                    {/* user icon & name */}
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={openUserMenu}
                            color="inherit"
                        >

                            <span className={`${styles.menu_username} d-none d-lg-block`}>{userName}</span>
                            <Avatar style={{ backgroundColor: "#fff", color: "#1976d2" }}>{userAvatar}</Avatar>

                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={closeUserMenu}
                        >
                            <MenuItem onClick={logOut} className="px-3">Log out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </div>
        </AppBar>
    );
}