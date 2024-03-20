import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card hover:shadow-2xl" to={`/exercise/${exercise.id}`}>
    <img className='rounded-3xl mb-4' src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <h1 className='font-sans capitalize font-semibold text-lg ml-2 py-2' color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </h1>
    <Stack direction="row">
      <Button sx={{ color: '#fff', background: '#71b3ae', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '10px', color: '#fff', background: '#376561', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
  </Link>
);

export default ExerciseCard;
