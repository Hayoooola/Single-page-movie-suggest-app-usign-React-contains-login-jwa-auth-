import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from 'react-router-dom';
import styles from "./breadCrumb.module.css";

export default function BreadCrumb({ movieObj }) {
  return (
    <div className={`${styles.breadCrumb} my-4`}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <LiveTvIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {movieObj.Title}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}