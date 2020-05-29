import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  displayHighScore,
  highScores
} from './highScoresSlice';
import {
  resetFireControlState
} from '../fire-control/fireControlSlice';
import {
  resetTimer
} from '../timer/timerSlice';

export function HighScores() {
  const shouldDisplayHighScore = useSelector(displayHighScore);
  const displayedHighScores = useSelector(highScores);
  const dispatch = useDispatch()

  return shouldDisplayHighScore ? (
    <div className='high-score'>
      <div className='inner'>
        <h1>High Scores</h1>
        <table>
          <tbody>
            {Object.entries(displayedHighScores).map((key: [string, number], index: number)=>{
              return <tr>
                <td>
                  {key[0]}
                </td>
                <td>
                  {key[1]}
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <button
        className='play-again'
        onClick={()=>{
          dispatch(resetFireControlState());
          dispatch(resetTimer());
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  ) : <div></div>;
}
