/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" justifyContent="start" alignItems="center" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} className="ml-[64px]">
    <Link to="/" className="flex justify-center items-center">
    <h1 className="font-bold sm:text-[40px] leading-[70px] text-[40px] font-sans text-[#71b3ae]">FitSync</h1>
    </Link>
  </Stack>
);

export default Navbar;
