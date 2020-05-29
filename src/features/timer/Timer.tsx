import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentSecond,
  decrementTimer
} from './timerSlice';
import { updateHighScores } from '../high-scores/highScoresSlice'
import {
  selectHits
} from '../score/scoreSlice';

interface TimerProps {
  countdown: number
}

export function Timer(props: TimerProps){

  const currentSecond = useSelector(selectCurrentSecond);
  const currentScore = useSelector(selectHits);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(()=>{dispatch(decrementTimer())}, 1000)
    if(currentSecond === 0){
      dispatch(updateHighScores(currentScore))
    }
  });

  return (
    <div className='counter'>
      <h3>Timer</h3>
      <div className='count'>
        {('000' + currentSecond).slice(-3)}
      </div>
    </div>
  );

}
