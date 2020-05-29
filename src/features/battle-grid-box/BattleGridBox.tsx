// import React, { useSelector } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  // selectHits,
  // selectShips
  selectStatus
} from './battleGridSlice';
// import styles from './Counter.module.css';


interface BattleGridBoxProps {
  cellKey: number,
  cellValue: number,
  numberGridValue: number,
}

function calculateHitState(props: BattleGridBoxProps, status: { [index: string]: string }){
  const coordinate = 'ABCDEFG'.split('')[props.cellValue]+props.numberGridValue
  const battleStatus = status[coordinate]

  if(battleStatus === 'ship-hit'){
    return <td key={props.cellKey} className='battleGridBox hit ship'><img src='starship-hopper.png' alt='HIT' width='60px' className='dragonHit'/></td>
  }else if(battleStatus === 'ship'){
    return <td key={props.cellKey} className='battleGridBox'></td>
  }else if(battleStatus === 'hit'){
    return <td key={props.cellKey} className='battleGridBox hit'></td>
  }else{
    return <td key={props.cellKey} className='battleGridBox'></td>
  }
}

export function BattleGridBox(props: BattleGridBoxProps) {

  // const hitState = useSelector(selectHits);
  // const shipState = useSelector(selectShips);
  const status = useSelector(selectStatus);

  return calculateHitState(props, status)

}