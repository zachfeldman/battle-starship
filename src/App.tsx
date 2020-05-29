import React from 'react';
import { Score } from './features/score/Score';
import { Timer } from './features/timer/Timer';
import './App.css';

import { FireControl } from './features/fire-control/FireControl'

import { LetterBox } from './features/LetterBox'
import { NumberBox } from './features/NumberBox'
import { BattleGridBox } from './features/battle-grid-box/BattleGridBox'
import { letters, numbers } from './battleGridSetup'
import { Instructions } from './features/Instructions'
import { HighScores } from './features/high-scores/HighScores'


function App() {

  return (
    <div id='wrapper'>
      <div className='topMenu'>
        <img src='spacex-logo.jpg' width="200" alt='SpaceX'/>
        <h2>BattleStarship</h2>
      </div>
      <div className='left'>
        <Timer countdown={100}/>
        <Score title={'Sunk'} count={5}/>
        <Instructions />
      </div>
      <div className='left'>
        <table>
          <tbody>
            <tr>
              <td>
              </td>
              {letters.map((value, index) => {
                return <LetterBox cellLetter={value} cellKey={index}/>
              })}
            </tr>
            {numbers.map((number_value, number_index) => {
              return <tr>
                <NumberBox cellValue={number_value+1} cellKey={number_index}/>
                {numbers.map((space_value, space_index) => {
                  return <BattleGridBox cellValue={space_value} cellKey={space_index} numberGridValue={number_value+1}/>
                })}
              </tr>
            })}
          </tbody>
        </table>
        <FireControl/>
      </div>
      <div className='clear'>
      </div>
      <HighScores/>
    </div>
  );
}

export default App;
