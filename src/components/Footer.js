/* eslint-disable react/jsx-indent */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
const Footer = () => (
  <Box className='bg-gradient-to-r from-teal-200 to-teal-500 rounded-t-3xl' mt="80px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
    <h1 className="font-bold sm:text-[40px] leading-[70px] text-[40px] font-sans mb-4 text-[#ffffff]">FitSync</h1>
    </Stack>
  </Box>
);

export default Footer;
