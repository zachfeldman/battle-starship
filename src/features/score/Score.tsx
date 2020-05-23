import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectHits,
  selectSinks
} from './scoreSlice';
// import styles from './Counter.module.css';

interface ScoreProps {
  title: string,
  count: number
}

export function Score(props: ScoreProps) {
  const currentHits = useSelector(selectHits);
  // const dispatch = useDispatch();
  // const [coordinate, setCoordinate] = useState('C3');

  // const laser = new Audio('/laser-shot.mp3');

  return (
    <div className='counter'>
      <h3>{props.title}</h3>
      <div className='count'>
        {('000' + currentHits).slice(-3)}
      </div>
    </div>
  );
}
