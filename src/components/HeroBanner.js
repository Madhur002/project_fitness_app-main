import React from 'react';
import { Box, Stack } from '@mui/material';

import HeroBannerImage from '../assets/images/women_running.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <h1 className="font-bold sm:text-[74px] leading-[70px] text-[40px] mb-[23px] font-sans">
      Sweat, Smile <br />
      And Repeat
    </h1>
    <p className="text-[22px] w-[450px] font-sans text-[#00000089]">
      Check out the most effective exercises personalized to you
    </p>
    <Stack>
      <a href="#exercises" className="mt-[35px] decoration-none w-[200px] py-4 text-center bg-gray-500 font-bold font-sans rounded-full text-white">Explore Exercises</a>
    </Stack>
    <h1 className="mt-10 z-10 pb-44 text-[200px] font-bold font-sans text-[#3c4e4d3b] tracking-wide sm:block hidden">
      Exercise
    </h1>
    <img src={HeroBannerImage} alt="hero-banner" className="z-0 rounded-full hero-banner-img" />
  </Box>
);

export default HeroBanner;
