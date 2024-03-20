import React from 'react';
import { Stack } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import { FaDumbbell } from "react-icons/fa";
const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className={`bodyPart-card ${bodyPart === item ? "bg-gradient-to-r from-emerald-400 to-cyan-400": "bg-gradient-to-r from-emerald-200 to-cyan-200"} capitalize`}
    sx={bodyPart === item ? {borderRadius: '35px', width: '170px', height: '170px', cursor: 'pointer', gap: '17px' } : { borderRadius: '35px', width: '170px', height: '170px', cursor: 'pointer', gap: '17px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <FaDumbbell className={`text-6xl font-semibold font-sans ${bodyPart === item ? "text-white": "text-black"} capitalize`}/>
    <p className={`text-[20px] font-semibold font-sans ${bodyPart === item ? "text-white": "text-black"} capitalize`}> {item}</p>
  </Stack>
);

export default BodyPart;
