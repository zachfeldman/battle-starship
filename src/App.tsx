import React from 'react';
import { Counter } from './features/Counter';
import './App.css';

import { FireControl } from './features/fire-control/FireControl'

import { LetterBox } from './features/LetterBox'
import { NumberBox } from './features/NumberBox'
import { BattleGridBox } from './features/battle-grid-box/BattleGridBox'


function App() {
  const letters = 'ABCDEFG'.split('')
  const numbers = [...Array(7).keys()];

  return (

    // return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    <div id='wrapper'>
      <div className='topMenu'>
        <img src='spacex-logo.jpg' width="200" alt='SpaceX'/>
        <h2>BattleStarship</h2>
      </div>
      <div className='left'>
        <Counter title={'Hit'} count={5}/>
        <Counter title={'Sunk'} count={5}/>
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
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
