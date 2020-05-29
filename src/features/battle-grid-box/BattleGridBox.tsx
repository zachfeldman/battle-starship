// import React, { useSelector } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';

// import styles from './Counter.module.css';


interface BattleGridBoxProps {
  cellKey: number,
  cellValue: number,
  numberGridValue: number,
  status: { [index: string]: string }
}

function calculateHitState(props: BattleGridBoxProps){
  const status = props.status
  const coordinate = 'ABCDEFG'.split('')[props.cellValue]+props.numberGridValue
  const battleStatus = status[coordinate]
  console.log(battleStatus)

  if(battleStatus === 'ship-hit'){
    return <td key={coordinate+battleStatus+status} className='battleGridBox hit'><img src='dragon-on-fire.png' alt='HIT' width='50px' className='dragonHit'/></td>
  }else if(battleStatus === 'ship'){
    return <td key={coordinate+battleStatus+status} className='battleGridBox'></td>
  }else if(battleStatus === 'hit'){
    return <td key={coordinate+battleStatus+status} className='battleGridBox hit'></td>
  }else{
    return <td key={coordinate+battleStatus+status} className='battleGridBox'></td>
  }
}

export function BattleGridBox(props: BattleGridBoxProps) {


  return calculateHitState(props)

}