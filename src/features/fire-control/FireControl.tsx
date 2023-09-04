import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fire
} from './fireControlSlice';

export function FireControl() {
  const dispatch = useDispatch();
  const [coordinate, setCoordinate] = useState('C3');

  return (
    <div className='fireControl'>
      <img src='crosshairs.png' width="100" alt='crosshairs'/>
      <input
        type='text'
        maxLength={2}
        value={coordinate}
        onChange={e => setCoordinate(e.target.value)}
        onKeyPress={(e) => { if(e.which === 13){dispatch(fire(coordinate))}}}
      />
      <button
        onClick={() => { dispatch(fire(coordinate))}}
      >
        FIRE LASER
      </button>
      <audio className="audio-element">
        <source src="/battle-starship/laser-shot.mp3"></source>
      </audio>
    </div>
  );
}
