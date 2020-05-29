import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectHits
} from './scoreSlice';

interface ScoreProps {
  title: string,
  count: number
}

export function Score(props: ScoreProps) {
  const currentHits = useSelector(selectHits);

  return (
    <div className='counter'>
      <h3>{props.title}</h3>
      <div className='count'>
        {('000' + currentHits).slice(-3)}
      </div>
    </div>
  );
}
