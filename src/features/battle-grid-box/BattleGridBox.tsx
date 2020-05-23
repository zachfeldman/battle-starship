// import React, { useSelector } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectHits,
  selectShips
} from './battleGridSlice';
// import styles from './Counter.module.css';


interface BattleGridBoxProps {
  cellKey: number,
  cellValue: number,
  numberGridValue: number,
}

function calculateHitState(props: BattleGridBoxProps, hitState: string[], shipState: string[]){
  const coordinate = 'ABCDEFG'.split('')[props.cellValue]+props.numberGridValue
  if(shipState.indexOf(coordinate) !== -1){
    return 'ship'
  }else if(hitState.indexOf(coordinate) !== -1){
    return 'hit'
  }else{
    return 'clean'
  }
}

export function BattleGridBox(props: BattleGridBoxProps) {

  const hitState = useSelector(selectHits);
  const shipState = useSelector(selectShips);

  return <td key={props.cellKey} className='battleGridBox'>{calculateHitState(props, hitState, shipState)}</td>

}